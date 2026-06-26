// ===== CART MANAGEMENT =====
let cartCount = parseInt(localStorage.getItem('cartCount') || '0');
let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    initAnimations();
});

function updateCartDisplay() {
    const countElements = document.querySelectorAll('#cartCount');
    countElements.forEach(el => { el.textContent = cartCount; });
}

function addToCart(name, price) {
    cartCount++;
    cartItems.push({ name, price, id: Date.now() });
    localStorage.setItem('cartCount', cartCount);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartDisplay();
    showToast(`✅ ${name} added to cart! (₹${price})`);
}

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    if (toast && toastMsg) {
        toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); }, 3000);
    }
}

// ===== FILTER PRODUCTS (Grocery & Vegetables) =====
function filterProducts(gridId, filterId) {
    const filter = document.getElementById(filterId).value;
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const cards = grid.querySelectorAll('.product-card');
    cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.style.animation = 'fadeInUp 0.4s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== SORT PRODUCTS =====
function sortProducts(gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const sortSelect = grid.closest('body').querySelector('[id$="Sort"]');
    if (!sortSelect) return;
    const sortValue = sortSelect.value;
    const cards = Array.from(grid.querySelectorAll('.product-card'));

    cards.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'));
        const priceB = parseInt(b.getAttribute('data-price'));
        const nameA = a.getAttribute('data-name');
        const nameB = b.getAttribute('data-name');

        switch (sortValue) {
            case 'low-high': return priceA - priceB;
            case 'high-low': return priceB - priceA;
            case 'name': return nameA.localeCompare(nameB);
            default: return 0;
        }
    });

    cards.forEach((card, i) => {
        card.style.animation = `fadeInUp 0.4s ease ${i * 0.05}s backwards`;
        grid.appendChild(card);
    });
}

// ===== FASHION FILTER =====
function filterFashion(category) {
    const grid = document.getElementById('fashionGrid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach((card, i) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = '';
            card.style.animation = `fadeInUp 0.4s ease ${i * 0.05}s backwards`;
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== VEGETABLE SEARCH =====
function searchVeggies() {
    const query = document.getElementById('vegSearch').value.toLowerCase();
    const grid = document.getElementById('vegGrid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.product-card');

    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            card.style.display = '';
            card.style.animation = 'fadeInUp 0.3s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== NEWSLETTER =====
function subscribe() {
    const email = document.getElementById('newsletterEmail');
    if (email && email.value.trim() !== '') {
        if (email.value.includes('@')) {
            showToast('🎉 Subscribed successfully! Thank you!');
            email.value = '';
        } else {
            showToast('⚠️ Please enter a valid email!');
        }
    } else {
        showToast('⚠️ Please enter your email!');
    }
}

// ===== CART ICON CLICK =====
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            if (cartItems.length === 0) {
                showToast('🛒 Your cart is empty! Start shopping.');
            } else {
                const total = cartItems.reduce((sum, item) => sum + item.price, 0);
                showToast(`🛒 Cart: ${cartItems.length} items | Total: ₹${total}`);
            }
        });
    }
});

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .feature-card, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        }
    }
});

console.log('🛒 SJ MegaMart - All scripts loaded!');
