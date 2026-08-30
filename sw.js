const C='shihong-v2-1';const A=['./','./index.html','./manifest.json','./icon-180.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{let q=r.clone();caches.open(C).then(c=>c.put('./index.html',q));return r}).catch(()=>caches.match('./index.html')));return}e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{let q=r.clone();caches.open(C).then(c=>c.put(e.request,q));return r})))});
