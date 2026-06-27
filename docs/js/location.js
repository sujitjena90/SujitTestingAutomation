const DEFAULT_LOCATION = { lat: 20.2961, lng: 85.8245 };

let map = null;
let marker = null;
let userLocation = { lat: null, lng: null, address: '' };

function setUserLocation(lat, lng) {
  userLocation.lat = lat;
  userLocation.lng = lng;
}

function getAddressField(id, fallbackSelector) {
  return document.getElementById(id) || document.querySelector(fallbackSelector);
}

function detectLocation() {
  const btn = document.querySelector('.detect-location-btn');
  if (!btn) return;

  btn.textContent = '📍 Detecting...';
  btn.disabled = true;
  btn.classList.remove('detected');

  if (!navigator.geolocation) {
    initMap(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng);
    reverseGeocode(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng);
    btn.textContent = '📍 Detect My Location';
    btn.disabled = false;
    alert('Geolocation is not supported by your browser. Please drag the pin to your delivery address.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation(latitude, longitude);
      initMap(latitude, longitude);
      reverseGeocode(latitude, longitude);
      btn.textContent = '📍 Location Detected ✓';
      btn.classList.add('detected');
    },
    (error) => {
      console.warn('Geolocation error:', error);
      initMap(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng);
      reverseGeocode(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng);
      btn.textContent = '📍 Detect My Location (retry)';
      btn.disabled = false;
      alert('Could not detect location. Please drag the pin to your delivery address.');
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function initMap(lat, lng) {
  const mapContainer = document.getElementById('checkoutMap');
  if (!mapContainer || typeof L === 'undefined') return;

  setUserLocation(lat, lng);
  mapContainer.style.display = 'block';

  if (map) {
    map.setView([lat, lng], 16);
    marker?.setLatLng([lat, lng]);
    window.setTimeout(() => map.invalidateSize(), 100);
    return;
  }

  map = L.map('checkoutMap').setView([lat, lng], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  marker = L.marker([lat, lng], { draggable: true }).addTo(map);
  marker.bindPopup('📍 Delivery here').openPopup();

  marker.on('dragend', (event) => {
    const pos = event.target.getLatLng();
    setUserLocation(pos.lat, pos.lng);
    reverseGeocode(pos.lat, pos.lng);
  });

  window.setTimeout(() => map.invalidateSize(), 100);
}

async function reverseGeocode(lat, lng) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`,
      { headers: { 'Accept-Language': 'en' } }
    );
    const data = await response.json();
    if (!data || !data.address) return;

    const addr = data.address;
    const addressField = getAddressField('addressLine', '#checkoutAddress, [name="address"], textarea');
    const cityField = getAddressField('city', '#checkoutCity, [name="city"]');
    const stateField = getAddressField('state', '#checkoutState, [name="state"]');
    const pinField = getAddressField('pinCode', '#checkoutPin, [name="pin"]');

    if (addressField) {
      addressField.value = [addr.road, addr.neighbourhood, addr.suburb].filter(Boolean).join(', ') || data.display_name.split(',').slice(0, 3).join(', ');
    }
    if (cityField) {
      cityField.value = addr.city || addr.town || addr.village || addr.county || '';
    }
    if (stateField) {
      stateField.value = addr.state || '';
    }
    if (pinField) {
      pinField.value = addr.postcode || '';
    }

    userLocation.address = data.display_name || '';
  } catch (err) {
    console.warn('Reverse geocode failed:', err);
  }
}

function getOrderLocation() {
  return {
    lat: userLocation.lat,
    lng: userLocation.lng,
    address: userLocation.address
  };
}

window.detectLocation = detectLocation;
window.getOrderLocation = getOrderLocation;
