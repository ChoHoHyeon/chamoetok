// 참외톡톡 오프라인 캐시 (버전 올리면 새 파일로 교체됨)
const CACHE = 'chamoetok-v2';
const FILES = [
  './', './index.html', './manifest.json',
  './assets/chamoe.png', './assets/tomato.png', './assets/watermelon.png', './assets/lotus.png', './assets/eggplant.png', './assets/rock.png',
  './assets/chamoe_joy.png', './assets/tomato_joy.png', './assets/watermelon_joy.png', './assets/lotus_joy.png', './assets/eggplant_joy.png', './assets/rock_joy.png',
  './assets/bg_portrait.jpg', './assets/bg_wide.jpg', './assets/icon-192.png', './assets/icon-512.png',
  ...['bgm_menu','bgm_play','bgm_danger','win','lose','pop1','pop2','pop3','pop4','pop5','land','drop','move','garbage','rockbreak','count','go','warn'].map(n=>'./assets/audio/'+n+'.mp3')
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(FILES.map(f => c.add(f)))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return res; }).catch(() => r)));
});
