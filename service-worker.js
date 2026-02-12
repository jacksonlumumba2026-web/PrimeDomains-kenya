const cacheName = 'primedomains-cache-v1';
const assets = [
  '/',
  'index.html',
  'login.html',
  'register.html',
  'dashboard.html',
  'marketplace.html',
  'seller.html',
  'auctions.html',
  'lead.html',
  'branding.html',
  'admin.html',
  'terms.html',
  'privacy.html',
  'assets/css/style.css',
  'assets/js/firebase-config.js',
  'assets/js/auth.js',
  'assets/js/marketplace.js',
  'assets/js/seller.js',
  'assets/js/auctions.js',
  'assets/js/leadgen.js',
  'assets/js/admin.js',
  'assets/js/brand.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
