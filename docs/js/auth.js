(function () {
  const STORAGE_KEYS = {
    user: 'sjAuthUser',
    profile: 'sjAuthProfile',
    redirect: 'sjAuthRedirect',
    order: 'sjLastOrder'
  };

  const AUTH_PAGES = new Set(['login', 'signup']);

  function firebaseEnabled() {
    return Boolean(window.firebaseReady && window.auth && window.db && window.firebase);
  }

  function pageName() {
    return document.body?.dataset.page || '';
  }

  function safeJsonParse(value, fallback) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function getCachedUser() {
    return safeJsonParse(localStorage.getItem(STORAGE_KEYS.user) || 'null', null);
  }

  function getCachedProfile() {
    return safeJsonParse(localStorage.getItem(STORAGE_KEYS.profile) || 'null', null);
  }

  function setCachedAuth(user, profile) {
    if (user) localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
    if (profile) localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
  }

  function clearCachedAuth() {
    localStorage.removeItem(STORAGE_KEYS.user);
    localStorage.removeItem(STORAGE_KEYS.profile);
  }

  function getKnownUser() {
    const liveUser = window.auth?.currentUser;
    if (liveUser) {
      return {
        uid: liveUser.uid,
        name: liveUser.displayName || liveUser.email?.split('@')[0] || 'Account',
        email: liveUser.email || '',
        phone: liveUser.phoneNumber || ''
      };
    }
    return getCachedUser();
  }

  function getRedirectTarget() {
    const params = new URLSearchParams(window.location.search);
    const candidate = params.get('redirect') || localStorage.getItem(STORAGE_KEYS.redirect) || 'index.html';
    if (!candidate || /^(https?:)?\/\//i.test(candidate) || candidate.startsWith('//')) return 'index.html';
    return candidate;
  }

  function rememberRedirect(target) {
    localStorage.setItem(STORAGE_KEYS.redirect, target || 'index.html');
  }

  function consumeRedirect() {
    const target = getRedirectTarget();
    localStorage.removeItem(STORAGE_KEYS.redirect);
    return target;
  }

  function buildLoginHref(target = 'index.html') {
    return `login.html?redirect=${encodeURIComponent(target)}`;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatCurrency(value) {
    if (typeof window.formatCurrency === 'function') return window.formatCurrency(value);
    return `₹${Number(value || 0).toLocaleString('en-IN')}`;
  }

  function formatDate(value) {
    if (!value) return 'Just now';
    let date = value;
    if (typeof value?.toDate === 'function') date = value.toDate();
    if (!(date instanceof Date)) date = new Date(date);
    if (Number.isNaN(date.getTime())) return 'Just now';
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function getInitial(nameOrEmail) {
    return (nameOrEmail || 'S').trim().charAt(0).toUpperCase() || 'S';
  }

  function setButtonLoading(button, loading, text) {
    if (!button) return;
    if (loading) {
      button.dataset.originalText = button.textContent;
      button.textContent = text || 'Please wait...';
      button.disabled = true;
      button.classList.add('is-loading');
      return;
    }
    button.textContent = button.dataset.originalText || button.textContent;
    button.disabled = false;
    button.classList.remove('is-loading');
  }

  function setMessage(id, message, kind = 'error') {
    const node = document.getElementById(id);
    if (!node) return;
    node.hidden = !message;
    node.textContent = message || '';
    node.classList.toggle('auth-message--error', kind === 'error');
    node.classList.toggle('auth-message--success', kind === 'success');
  }

  function setInlineMessage(id, message, kind = 'success') {
    const node = document.getElementById(id);
    if (!node) return;
    node.textContent = message || '';
    node.dataset.kind = kind;
  }

  function applyFieldState(input, valid) {
    if (!input) return;
    input.classList.toggle('is-valid', valid === true);
    input.classList.toggle('is-invalid', valid === false);
  }

  function showToast(message) {
    if (typeof window.showToast === 'function') {
      window.showToast(message);
      return;
    }
    if (message) alert(message);
  }

  function mapFirebaseError(error) {
    const code = error?.code || '';
    const messages = {
      'auth/email-already-in-use': 'This email is already registered. Please login instead.',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/user-not-found': 'No account found with this email.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/invalid-login-credentials': 'Incorrect email or password.',
      'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
      'auth/popup-closed-by-user': 'Google sign-in was cancelled before completion.',
      'auth/popup-blocked': 'Popup was blocked. Please allow popups and try again.',
      'auth/weak-password': 'Password should be at least 6 characters long.',
      'auth/network-request-failed': 'Network error. Please check your connection and try again.',
      'permission-denied': 'Firestore permissions denied. Check your Firebase security rules.'
    };
    return messages[code] || error?.message || 'Something went wrong. Please try again.';
  }

  async function ensureUserProfile(user, seed = {}) {
    if (!firebaseEnabled() || !user) return null;
    const ref = window.db.collection('users').doc(user.uid);
    const snapshot = await ref.get();
    const baseProfile = {
      uid: user.uid,
      name: seed.name || user.displayName || user.email?.split('@')[0] || 'SJ Shopper',
      email: user.email || seed.email || '',
      phone: seed.phone || user.phoneNumber || '',
      createdAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      addresses: []
    };

    if (!snapshot.exists) {
      await ref.set(baseProfile, { merge: true });
      return { ...baseProfile, createdAt: new Date().toISOString() };
    }

    const existing = snapshot.data() || {};
    const merged = {
      uid: user.uid,
      name: existing.name || baseProfile.name,
      email: existing.email || baseProfile.email,
      phone: existing.phone || baseProfile.phone,
      createdAt: existing.createdAt || new Date().toISOString(),
      addresses: Array.isArray(existing.addresses) ? existing.addresses : []
    };

    if (!existing.name || !existing.email || !Array.isArray(existing.addresses)) {
      await ref.set({
        name: merged.name,
        email: merged.email,
        phone: merged.phone,
        addresses: merged.addresses
      }, { merge: true });
    }

    return merged;
  }

  async function getCurrentUserProfile() {
    const known = window.auth?.currentUser;
    if (!firebaseEnabled() || !known) return getCachedProfile();
    const snapshot = await window.db.collection('users').doc(known.uid).get();
    if (!snapshot.exists) return ensureUserProfile(known);
    const data = snapshot.data() || {};
    const profile = {
      uid: known.uid,
      name: data.name || known.displayName || known.email?.split('@')[0] || 'SJ Shopper',
      email: data.email || known.email || '',
      phone: data.phone || known.phoneNumber || '',
      createdAt: data.createdAt || null,
      addresses: Array.isArray(data.addresses) ? data.addresses : []
    };
    setCachedAuth({ uid: known.uid, name: profile.name, email: profile.email, phone: profile.phone }, profile);
    return profile;
  }

  function updateNavbarForLoggedInUser(user) {
    const label = user?.name || user?.email?.split('@')[0] || 'Profile';
    document.querySelectorAll('.auth-action').forEach((action) => {
      action.href = 'profile.html';
      action.setAttribute('aria-label', `${label} profile`);
      action.classList.add('is-logged-in');
      const icon = action.querySelector('span');
      const text = action.querySelector('.auth-label');
      if (icon) {
        icon.textContent = getInitial(label);
        icon.classList.add('auth-user-badge');
      }
      if (text) text.textContent = label.split(' ')[0];
    });
  }

  function updateNavbarForGuest() {
    const target = pageName() === 'checkout' ? 'checkout.html' : (pageName() === 'profile' ? 'profile.html' : 'index.html');
    document.querySelectorAll('.auth-action').forEach((action) => {
      action.href = buildLoginHref(target);
      action.setAttribute('aria-label', 'Login');
      action.classList.remove('is-logged-in');
      const icon = action.querySelector('span');
      const text = action.querySelector('.auth-label');
      if (icon) {
        icon.textContent = '👤';
        icon.classList.remove('auth-user-badge');
      }
      if (text) text.textContent = 'Login';
    });
  }

  function renderCachedNavbar() {
    const cached = getKnownUser();
    if (cached) updateNavbarForLoggedInUser(cached);
    else updateNavbarForGuest();
  }

  function redirectAuthenticatedUser() {
    if (!AUTH_PAGES.has(pageName()) || !getKnownUser()) return;
    window.location.replace(consumeRedirect());
  }

  function requireFirebaseForAuth(errorTarget, successTarget) {
    if (successTarget) setMessage(successTarget, '', 'success');
    if (firebaseEnabled()) return true;
    setMessage(errorTarget, 'Add your Firebase credentials in js/firebase-config.js to enable authentication.', 'error');
    return false;
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
  }

  function validatePhone(value) {
    return /^\d{10}$/.test(String(value || '').trim());
  }

  function getPasswordStrength(password) {
    let score = 0;
    if (password.length >= 6) score += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
    if (/\d/.test(password) && /[^A-Za-z0-9]/.test(password)) score += 1;
    if (password.length >= 10) score += 1;
    if (score <= 1) return { level: 'weak', width: '33%' };
    if (score <= 3) return { level: 'medium', width: '66%' };
    return { level: 'strong', width: '100%' };
  }

  function syncPasswordStrength() {
    const input = document.getElementById('signupPassword');
    const bar = document.getElementById('passwordStrengthBar');
    const label = document.getElementById('passwordStrengthLabel');
    if (!input || !bar || !label) return;
    const strength = getPasswordStrength(input.value || '');
    bar.style.width = strength.width;
    bar.dataset.level = strength.level;
    label.textContent = `Password strength: ${strength.level}`;
  }

  async function signUpWithEmail(name, email, phone, password) {
    const credential = await window.auth.createUserWithEmailAndPassword(email, password);
    await credential.user.updateProfile({ displayName: name });
    await window.db.collection('users').doc(credential.user.uid).set({
      uid: credential.user.uid,
      name,
      email,
      phone,
      createdAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      addresses: []
    }, { merge: true });
    const profile = await ensureUserProfile(credential.user, { name, email, phone });
    setCachedAuth({ uid: credential.user.uid, name, email, phone }, profile);
    return profile;
  }

  async function loginWithEmail(email, password) {
    const credential = await window.auth.signInWithEmailAndPassword(email, password);
    const profile = await ensureUserProfile(credential.user);
    setCachedAuth({
      uid: credential.user.uid,
      name: profile?.name || credential.user.displayName || email.split('@')[0],
      email: credential.user.email || email,
      phone: profile?.phone || credential.user.phoneNumber || ''
    }, profile);
    return profile;
  }

  async function signInWithGoogle() {
    const provider = new window.firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await window.auth.signInWithPopup(provider);
    const profile = await ensureUserProfile(result.user, {
      name: result.user.displayName || 'Google User',
      email: result.user.email || '',
      phone: result.user.phoneNumber || ''
    });
    setCachedAuth({
      uid: result.user.uid,
      name: profile?.name || result.user.displayName || 'Google User',
      email: result.user.email || '',
      phone: profile?.phone || result.user.phoneNumber || ''
    }, profile);
    return profile;
  }

  async function logout() {
    if (firebaseEnabled()) await window.auth.signOut();
    clearCachedAuth();
    updateNavbarForGuest();
  }

  async function resetPassword(email) {
    await window.auth.sendPasswordResetEmail(email);
  }

  async function updateUserProfile(data) {
    if (!firebaseEnabled() || !window.auth.currentUser) throw new Error('Please login first.');
    const user = window.auth.currentUser;
    const payload = {
      name: data.name?.trim() || user.displayName || 'SJ Shopper',
      phone: data.phone?.trim() || '',
      email: user.email || ''
    };
    await window.db.collection('users').doc(user.uid).set(payload, { merge: true });
    if (payload.name !== user.displayName) await user.updateProfile({ displayName: payload.name });
    const profile = await getCurrentUserProfile();
    setCachedAuth({ uid: user.uid, name: payload.name, email: payload.email, phone: payload.phone }, profile);
    updateNavbarForLoggedInUser({ name: payload.name, email: payload.email });
    return profile;
  }

  function normalizeAddress(address, existingAddresses = []) {
    const normalized = {
      id: address.id || `addr-${Date.now()}`,
      name: String(address.name || '').trim(),
      phone: String(address.phone || '').trim(),
      address: String(address.address || '').trim(),
      city: String(address.city || '').trim(),
      state: String(address.state || '').trim(),
      pin: String(address.pin || '').trim(),
      isDefault: Boolean(address.isDefault)
    };

    if (!normalized.name || !validatePhone(normalized.phone) || !normalized.address || !normalized.city || !normalized.state || !/^\d{6}$/.test(normalized.pin)) {
      throw new Error('Please enter a complete valid address.');
    }

    const hasDefault = existingAddresses.some((item) => item.isDefault && item.id !== normalized.id);
    if (!hasDefault && !normalized.isDefault) normalized.isDefault = true;
    return normalized;
  }

  async function saveAddress(address) {
    const profile = await getCurrentUserProfile();
    if (!profile || !window.auth?.currentUser) throw new Error('Please login first.');
    const currentAddresses = Array.isArray(profile.addresses) ? [...profile.addresses] : [];
    const normalized = normalizeAddress(address, currentAddresses);
    const nextAddresses = currentAddresses
      .filter((item) => item.id !== normalized.id)
      .map((item) => ({ ...item, isDefault: normalized.isDefault ? false : item.isDefault }));
    nextAddresses.push(normalized);

    await window.db.collection('users').doc(window.auth.currentUser.uid).set({
      addresses: nextAddresses,
      phone: profile.phone || normalized.phone
    }, { merge: true });

    const nextProfile = { ...profile, addresses: nextAddresses };
    setCachedAuth({ uid: profile.uid, name: profile.name, email: profile.email, phone: profile.phone || normalized.phone }, nextProfile);
    return nextAddresses;
  }

  async function deleteAddress(addressId) {
    const profile = await getCurrentUserProfile();
    if (!profile || !window.auth?.currentUser) throw new Error('Please login first.');
    let nextAddresses = (profile.addresses || []).filter((item) => item.id !== addressId);
    if (nextAddresses.length && !nextAddresses.some((item) => item.isDefault)) {
      nextAddresses = nextAddresses.map((item, index) => ({ ...item, isDefault: index === 0 }));
    }
    await window.db.collection('users').doc(window.auth.currentUser.uid).set({ addresses: nextAddresses }, { merge: true });
    const nextProfile = { ...profile, addresses: nextAddresses };
    setCachedAuth({ uid: profile.uid, name: profile.name, email: profile.email, phone: profile.phone }, nextProfile);
    return nextAddresses;
  }

  async function saveOrder(orderData) {
    if (!firebaseEnabled() || !window.auth.currentUser) return orderData;
    const payload = {
      userId: window.auth.currentUser.uid,
      orderId: orderData.orderId,
      items: Array.isArray(orderData.items) ? orderData.items.map((item) => ({
        name: item.name,
        price: Number(item.price || 0),
        qty: Number(item.qty || 0)
      })) : [],
      totalAmount: Number(orderData.totalAmount || orderData.summary?.totalAmount || 0),
      address: orderData.address,
      paymentMethod: orderData.paymentMethod,
      status: orderData.status || 'confirmed',
      createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
    };
    const ref = await window.db.collection('orders').add(payload);
    return {
      ...orderData,
      firestoreId: ref.id,
      status: payload.status,
      createdAt: new Date().toISOString()
    };
  }

  async function getOrderHistory() {
    if (!firebaseEnabled() || !window.auth.currentUser) return [];
    const snapshot = await window.db.collection('orders').where('userId', '==', window.auth.currentUser.uid).get();
    return snapshot.docs
      .map((doc) => ({ firestoreId: doc.id, ...doc.data() }))
      .sort((a, b) => {
        const aTime = typeof a.createdAt?.toDate === 'function' ? a.createdAt.toDate().getTime() : new Date(a.createdAt || 0).getTime();
        const bTime = typeof b.createdAt?.toDate === 'function' ? b.createdAt.toDate().getTime() : new Date(b.createdAt || 0).getTime();
        return bTime - aTime;
      });
  }

  function getSavedAddresses(profile) {
    return (profile?.addresses || []).slice().sort((a, b) => Number(Boolean(b.isDefault)) - Number(Boolean(a.isDefault)));
  }

  function mapDbAddressToCheckout(address, profile) {
    return {
      fullName: address?.name || profile?.name || '',
      phoneNumber: address?.phone || profile?.phone || '',
      addressLine: address?.address || '',
      city: address?.city || '',
      state: address?.state || '',
      pinCode: address?.pin || ''
    };
  }

  function mapCheckoutToDbAddress(address, profile) {
    return {
      name: address?.fullName || profile?.name || '',
      phone: address?.phoneNumber || profile?.phone || '',
      address: address?.addressLine || '',
      city: address?.city || '',
      state: address?.state || '',
      pin: address?.pinCode || '',
      isDefault: true
    };
  }

  function fillCheckoutForm(address) {
    const mapping = {
      fullName: address.fullName,
      phoneNumber: address.phoneNumber,
      addressLine: address.addressLine,
      city: address.city,
      state: address.state,
      pinCode: address.pinCode
    };
    Object.entries(mapping).forEach(([id, value]) => {
      const field = document.getElementById(id);
      if (field && !field.value.trim()) field.value = value || '';
    });
    if (address && Object.values(mapping).some(Boolean)) {
      localStorage.setItem('sjDeliveryAddress', JSON.stringify(address));
    }
  }

  async function prefillCheckoutForm() {
    if (pageName() !== 'checkout' || shouldBlockCheckout()) return;
    const profile = await getCurrentUserProfile();
    if (!profile) return;
    const addresses = getSavedAddresses(profile);
    const selected = addresses.find((item) => item.isDefault) || addresses[0] || null;
    fillCheckoutForm(mapDbAddressToCheckout(selected, profile));
  }

  function shouldBlockCheckout() {
    return pageName() === 'checkout' && !getKnownUser();
  }

  function renderCheckoutAuthNotice(context = {}) {
    const content = context.content || document.getElementById('checkoutContent');
    const summaryNode = context.summaryNode || document.getElementById('checkoutSummary');
    if (!content) return;
    rememberRedirect('checkout.html');
    content.innerHTML = `
      <section class="auth-guard-card">
        <div class="auth-guard-card__icon">🔐</div>
        <h2>Please login to continue</h2>
        <p>Login to use saved addresses, place your order securely and sync order history to your account.</p>
        <div class="auth-guard-card__actions">
          <a class="primary-btn" href="${buildLoginHref('checkout.html')}">Login to Continue</a>
          <a class="secondary-btn" href="cart.html">Back to Cart</a>
        </div>
      </section>
    `;
    if (summaryNode && typeof context.renderSummaryMarkup === 'function' && context.summary) {
      summaryNode.innerHTML = context.renderSummaryMarkup(context.summary, false);
    }
  }

  function getCheckoutHref() {
    return getKnownUser() ? 'checkout.html' : buildLoginHref('checkout.html');
  }

  async function handleOrderPlacement(order) {
    if (!firebaseEnabled() || !window.auth.currentUser) return order;
    const profile = await getCurrentUserProfile();
    const dbAddress = mapCheckoutToDbAddress(order.address, profile || {});
    await saveAddress(dbAddress);
    const savedOrder = await saveOrder({
      ...order,
      address: dbAddress,
      totalAmount: order.summary?.totalAmount || order.totalAmount || 0,
      status: 'confirmed'
    });
    return {
      ...savedOrder,
      address: dbAddress,
      summary: order.summary,
      etaText: order.etaText,
      placedAt: order.placedAt,
      paymentMethod: order.paymentMethod
    };
  }

  function enhanceSuccessPage(order) {
    if (pageName() !== 'order-success' || !order) return;
    const summary = document.getElementById('successSummary');
    if (!summary || summary.dataset.enhanced === 'true') return;
    const address = order.address || {};
    summary.insertAdjacentHTML('beforeend', `
      <div class="success-order-extra">
        <div>
          <span>Order Date</span>
          <strong>${escapeHtml(formatDate(order.createdAt || order.placedAt))}</strong>
        </div>
        <div>
          <span>Status</span>
          <strong>${escapeHtml((order.status || 'confirmed').toUpperCase())}</strong>
        </div>
        <div class="success-order-extra__address">
          <span>Delivery Address</span>
          <strong>${escapeHtml([address.name || order.address?.fullName, address.phone || order.address?.phoneNumber, address.address || order.address?.addressLine, address.city, address.state, address.pin || order.address?.pinCode].filter(Boolean).join(', '))}</strong>
        </div>
      </div>
    `);
    summary.dataset.enhanced = 'true';

    const actions = document.querySelector('.success-actions');
    if (actions && getKnownUser() && !actions.querySelector('.view-orders-link')) {
      actions.insertAdjacentHTML('beforeend', '<a class="secondary-btn view-orders-link" href="profile.html">View all orders</a>');
    }
  }

  function bindPasswordToggles() {
    document.querySelectorAll('[data-password-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const input = document.getElementById(button.dataset.passwordToggle || '');
        if (!input) return;
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        button.textContent = isPassword ? '🙈' : '👁️';
      });
    });
  }

  function bindLoginPage() {
    if (pageName() !== 'login') return;
    redirectAuthenticatedUser();

    document.getElementById('loginForm')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      setMessage('loginError', '', 'error');
      setMessage('loginSuccess', '', 'success');
      if (!requireFirebaseForAuth('loginError', 'loginSuccess')) return;

      const emailInput = document.getElementById('loginEmail');
      const passwordInput = document.getElementById('loginPassword');
      const email = emailInput?.value.trim() || '';
      const password = passwordInput?.value || '';

      applyFieldState(emailInput, validateEmail(email));
      applyFieldState(passwordInput, password.length >= 6);
      if (!validateEmail(email) || password.length < 6) {
        setMessage('loginError', 'Enter a valid email and password.', 'error');
        return;
      }

      const button = document.getElementById('loginSubmitBtn');
      setButtonLoading(button, true, 'Logging in...');
      try {
        await loginWithEmail(email, password);
        setMessage('loginSuccess', 'Login successful. Redirecting...', 'success');
        window.location.replace(consumeRedirect());
      } catch (error) {
        setMessage('loginError', mapFirebaseError(error), 'error');
      } finally {
        setButtonLoading(button, false);
      }
    });

    document.getElementById('forgotPasswordLink')?.addEventListener('click', async () => {
      setMessage('loginError', '', 'error');
      setMessage('loginSuccess', '', 'success');
      if (!requireFirebaseForAuth('loginError', 'loginSuccess')) return;
      const emailInput = document.getElementById('loginEmail');
      const email = emailInput?.value.trim() || '';
      applyFieldState(emailInput, validateEmail(email));
      if (!validateEmail(email)) {
        setMessage('loginError', 'Enter your email first to receive a reset link.', 'error');
        return;
      }
      try {
        await resetPassword(email);
        setMessage('loginSuccess', 'Password reset email sent. Please check your inbox.', 'success');
      } catch (error) {
        setMessage('loginError', mapFirebaseError(error), 'error');
      }
    });

    document.getElementById('googleLoginBtn')?.addEventListener('click', async () => {
      setMessage('loginError', '', 'error');
      if (!requireFirebaseForAuth('loginError', 'loginSuccess')) return;
      const button = document.getElementById('googleLoginBtn');
      setButtonLoading(button, true, 'Opening Google...');
      try {
        await signInWithGoogle();
        window.location.replace(consumeRedirect());
      } catch (error) {
        setMessage('loginError', mapFirebaseError(error), 'error');
      } finally {
        setButtonLoading(button, false);
      }
    });
  }

  function bindSignupPage() {
    if (pageName() !== 'signup') return;
    redirectAuthenticatedUser();

    const phoneInput = document.getElementById('signupPhone');
    phoneInput?.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
      applyFieldState(phoneInput, validatePhone(phoneInput.value));
    });

    document.getElementById('signupPassword')?.addEventListener('input', () => {
      syncPasswordStrength();
      applyFieldState(document.getElementById('signupPassword'), (document.getElementById('signupPassword')?.value || '').length >= 6);
    });

    document.getElementById('signupConfirmPassword')?.addEventListener('input', () => {
      const password = document.getElementById('signupPassword')?.value || '';
      const confirm = document.getElementById('signupConfirmPassword');
      applyFieldState(confirm, Boolean(confirm?.value) && confirm.value === password);
    });

    document.getElementById('signupForm')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      setMessage('signupError', '', 'error');
      setMessage('signupSuccess', '', 'success');
      if (!requireFirebaseForAuth('signupError', 'signupSuccess')) return;

      const nameInput = document.getElementById('signupName');
      const emailInput = document.getElementById('signupEmail');
      const phoneField = document.getElementById('signupPhone');
      const passwordInput = document.getElementById('signupPassword');
      const confirmInput = document.getElementById('signupConfirmPassword');

      const name = nameInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const phone = phoneField?.value.trim() || '';
      const password = passwordInput?.value || '';
      const confirmPassword = confirmInput?.value || '';

      applyFieldState(nameInput, name.length >= 2);
      applyFieldState(emailInput, validateEmail(email));
      applyFieldState(phoneField, validatePhone(phone));
      applyFieldState(passwordInput, password.length >= 6);
      applyFieldState(confirmInput, password === confirmPassword && confirmPassword.length >= 6);

      if (name.length < 2) return setMessage('signupError', 'Please enter your full name.', 'error');
      if (!validateEmail(email)) return setMessage('signupError', 'Please enter a valid email address.', 'error');
      if (!validatePhone(phone)) return setMessage('signupError', 'Phone number must be 10 digits.', 'error');
      if (password.length < 6) return setMessage('signupError', 'Password should be at least 6 characters long.', 'error');
      if (password !== confirmPassword) return setMessage('signupError', 'Passwords do not match.', 'error');

      const button = document.getElementById('signupSubmitBtn');
      setButtonLoading(button, true, 'Creating account...');
      try {
        await signUpWithEmail(name, email, phone, password);
        setMessage('signupSuccess', 'Account created successfully. Redirecting...', 'success');
        window.location.replace(consumeRedirect());
      } catch (error) {
        setMessage('signupError', mapFirebaseError(error), 'error');
      } finally {
        setButtonLoading(button, false);
      }
    });

    document.getElementById('googleSignupBtn')?.addEventListener('click', async () => {
      setMessage('signupError', '', 'error');
      if (!requireFirebaseForAuth('signupError', 'signupSuccess')) return;
      const button = document.getElementById('googleSignupBtn');
      setButtonLoading(button, true, 'Opening Google...');
      try {
        await signInWithGoogle();
        window.location.replace(consumeRedirect());
      } catch (error) {
        setMessage('signupError', mapFirebaseError(error), 'error');
      } finally {
        setButtonLoading(button, false);
      }
    });

    syncPasswordStrength();
  }

  function renderProfile(profile) {
    if (!profile) return;
    const avatar = document.getElementById('profileAvatar');
    const nameInput = document.getElementById('profileName');
    const emailInput = document.getElementById('profileEmail');
    const phoneInput = document.getElementById('profilePhone');
    if (avatar) avatar.textContent = getInitial(profile.name || profile.email || 'S');
    if (nameInput) nameInput.value = profile.name || '';
    if (emailInput) emailInput.value = profile.email || '';
    if (phoneInput) phoneInput.value = profile.phone || '';
  }

  function resetAddressEditor(address = null) {
    const editor = document.getElementById('addressEditor');
    if (!editor) return;
    editor.hidden = !address;
    document.getElementById('addressId').value = address?.id || '';
    document.getElementById('addressName').value = address?.name || '';
    document.getElementById('addressPhone').value = address?.phone || '';
    document.getElementById('addressLineField').value = address?.address || '';
    document.getElementById('addressCity').value = address?.city || '';
    document.getElementById('addressState').value = address?.state || '';
    document.getElementById('addressPin').value = address?.pin || '';
    document.getElementById('addressDefault').checked = Boolean(address?.isDefault);
    setInlineMessage('addressMessage', '', 'success');
  }

  function renderAddressList(addresses) {
    const container = document.getElementById('addressList');
    if (!container) return;
    if (!addresses.length) {
      container.innerHTML = '<div class="empty-profile-state">No addresses saved yet. Add one to speed up checkout.</div>';
      return;
    }
    container.innerHTML = addresses.map((address) => `
      <article class="address-card-item">
        <div class="address-card-item__head">
          <div>
            <h3>${escapeHtml(address.name)}</h3>
            <p>${escapeHtml(address.phone)}</p>
          </div>
          ${address.isDefault ? '<span class="status-badge status-badge--default">Default</span>' : ''}
        </div>
        <p>${escapeHtml([address.address, address.city, address.state, address.pin].filter(Boolean).join(', '))}</p>
        <div class="address-card-item__actions">
          <button class="secondary-btn" type="button" data-edit-address="${escapeHtml(address.id)}">Edit</button>
          <button class="secondary-btn secondary-btn--danger" type="button" data-delete-address="${escapeHtml(address.id)}">Delete</button>
        </div>
      </article>
    `).join('');
  }

  function renderOrderHistory(orders) {
    const container = document.getElementById('orderHistoryList');
    if (!container) return;
    if (!orders.length) {
      container.innerHTML = '<div class="empty-profile-state">No orders yet. Place your first order to see it here.</div>';
      return;
    }
    container.innerHTML = orders.map((order) => {
      const address = order.address || {};
      const items = Array.isArray(order.items) ? order.items : [];
      return `
        <details class="order-history-item">
          <summary>
            <div>
              <strong>${escapeHtml(order.orderId || 'SJM-ORDER')}</strong>
              <p>${escapeHtml(formatDate(order.createdAt || order.placedAt))}</p>
            </div>
            <div class="order-history-item__meta">
              <span>${items.length} item${items.length === 1 ? '' : 's'}</span>
              <strong>${formatCurrency(order.totalAmount || order.summary?.totalAmount || 0)}</strong>
              <span class="status-badge">${escapeHtml(order.status || 'confirmed')}</span>
            </div>
          </summary>
          <div class="order-history-item__body">
            <div class="order-history-items">
              ${items.map((item) => `<div><span>${escapeHtml(item.name)} × ${Number(item.qty || 0)}</span><strong>${formatCurrency(Number(item.price || 0) * Number(item.qty || 0))}</strong></div>`).join('')}
            </div>
            <div class="order-history-address">
              <h4>Delivery Address</h4>
              <p>${escapeHtml([address.name, address.phone, address.address, address.city, address.state, address.pin].filter(Boolean).join(', '))}</p>
              <p><strong>Payment:</strong> ${escapeHtml(order.paymentMethod || 'Online Payment')}</p>
            </div>
          </div>
        </details>
      `;
    }).join('');
  }

  async function bindProfilePage() {
    if (pageName() !== 'profile') return;
    rememberRedirect('profile.html');
    if (!getKnownUser()) {
      window.location.replace(buildLoginHref('profile.html'));
      return;
    }

    try {
      const profile = await getCurrentUserProfile();
      renderProfile(profile);
      renderAddressList(getSavedAddresses(profile));
      renderOrderHistory(await getOrderHistory());
    } catch (error) {
      showToast(mapFirebaseError(error));
    }

    if (document.body.dataset.profileEventsBound === 'true') return;
    document.body.dataset.profileEventsBound = 'true';

    const phoneInput = document.getElementById('profilePhone');
    phoneInput?.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
      applyFieldState(phoneInput, !phoneInput.value || validatePhone(phoneInput.value));
    });

    document.getElementById('saveProfileBtn')?.addEventListener('click', async () => {
      try {
        const name = document.getElementById('profileName')?.value.trim() || '';
        const phone = document.getElementById('profilePhone')?.value.trim() || '';
        if (name.length < 2) throw new Error('Please enter a valid name.');
        if (phone && !validatePhone(phone)) throw new Error('Phone number must be 10 digits.');
        await updateUserProfile({ name, phone });
        setInlineMessage('profileMessage', 'Profile updated successfully.', 'success');
        showToast('Profile updated');
      } catch (error) {
        setInlineMessage('profileMessage', mapFirebaseError(error), 'error');
      }
    });

    document.getElementById('addAddressBtn')?.addEventListener('click', () => {
      document.getElementById('addressEditor').hidden = false;
      resetAddressEditor({ isDefault: false });
    });

    document.getElementById('cancelAddressBtn')?.addEventListener('click', () => {
      document.getElementById('addressEditor').hidden = true;
      resetAddressEditor(null);
    });

    document.getElementById('saveAddressProfileBtn')?.addEventListener('click', async () => {
      try {
        const address = {
          id: document.getElementById('addressId')?.value || '',
          name: document.getElementById('addressName')?.value || '',
          phone: document.getElementById('addressPhone')?.value || '',
          address: document.getElementById('addressLineField')?.value || '',
          city: document.getElementById('addressCity')?.value || '',
          state: document.getElementById('addressState')?.value || '',
          pin: document.getElementById('addressPin')?.value || '',
          isDefault: document.getElementById('addressDefault')?.checked || false
        };
        const addresses = await saveAddress(address);
        const profile = await getCurrentUserProfile();
        renderProfile(profile);
        renderAddressList(getSavedAddresses({ ...profile, addresses }));
        document.getElementById('addressEditor').hidden = true;
        resetAddressEditor(null);
        showToast('Address saved');
      } catch (error) {
        setInlineMessage('addressMessage', mapFirebaseError(error), 'error');
      }
    });

    document.getElementById('addressList')?.addEventListener('click', async (event) => {
      const editId = event.target.closest('[data-edit-address]')?.dataset.editAddress;
      const deleteId = event.target.closest('[data-delete-address]')?.dataset.deleteAddress;
      const profile = await getCurrentUserProfile();
      const addresses = getSavedAddresses(profile);
      if (editId) {
        const address = addresses.find((item) => item.id === editId);
        document.getElementById('addressEditor').hidden = false;
        resetAddressEditor(address || { isDefault: false });
      }
      if (deleteId) {
        try {
          const nextAddresses = await deleteAddress(deleteId);
          renderAddressList(getSavedAddresses({ ...profile, addresses: nextAddresses }));
          showToast('Address deleted');
        } catch (error) {
          showToast(mapFirebaseError(error));
        }
      }
    });

    document.getElementById('logoutBtn')?.addEventListener('click', async () => {
      await logout();
      window.location.href = 'index.html';
    });
  }

  function bindAuthStateWatcher() {
    if (!window.auth?.onAuthStateChanged) {
      renderCachedNavbar();
      return;
    }

    window.auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const profile = await ensureUserProfile(user);
          setCachedAuth({
            uid: user.uid,
            name: profile?.name || user.displayName || user.email?.split('@')[0] || 'SJ Shopper',
            email: user.email || '',
            phone: profile?.phone || user.phoneNumber || ''
          }, profile);
          updateNavbarForLoggedInUser(profile || user);
          if (AUTH_PAGES.has(pageName())) redirectAuthenticatedUser();
          if (pageName() === 'checkout') {
            if (typeof window.renderCheckoutPage === 'function') window.renderCheckoutPage();
            prefillCheckoutForm();
          }
          if (pageName() === 'profile') bindProfilePage();
          if (pageName() === 'order-success') {
            const order = safeJsonParse(localStorage.getItem(STORAGE_KEYS.order) || 'null', null);
            enhanceSuccessPage(order);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        clearCachedAuth();
        updateNavbarForGuest();
        if (pageName() === 'profile') window.location.replace(buildLoginHref('profile.html'));
        if (pageName() === 'checkout') renderCheckoutAuthNotice();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const current = pageName();
    if (AUTH_PAGES.has(current) || current === 'checkout' || current === 'profile') {
      rememberRedirect(current === 'profile' ? 'profile.html' : current === 'checkout' ? 'checkout.html' : getRedirectTarget());
    }
    renderCachedNavbar();
    bindPasswordToggles();
    bindLoginPage();
    bindSignupPage();
    bindProfilePage();
    if (current === 'checkout' && !getKnownUser()) renderCheckoutAuthNotice();
    if (current === 'order-success') {
      enhanceSuccessPage(safeJsonParse(localStorage.getItem(STORAGE_KEYS.order) || 'null', null));
    }
  });

  bindAuthStateWatcher();

  window.SJAuth = {
    isAuthenticated: () => Boolean(getKnownUser()),
    shouldBlockCheckout,
    renderCheckoutAuthNotice,
    prefillCheckoutForm,
    getCheckoutHref,
    handleOrderPlacement,
    enhanceSuccessPage,
    getCurrentUserProfile,
    saveAddress,
    deleteAddress,
    saveOrder,
    getOrderHistory,
    updateUserProfile,
    signUpWithEmail,
    loginWithEmail,
    signInWithGoogle,
    logout,
    resetPassword
  };
})();

