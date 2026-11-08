const C="putzplan-v2";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.webmanifest","icon-192.png"])));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET")return;
  if(u.origin!==location.origin&&u.hostname!=="www.gstatic.com")return;
  // Die App-Seite selbst: zuerst aus dem Netz (damit Updates sofort ankommen), offline aus dem Speicher
  if(e.request.mode==="navigate"){e.respondWith(caches.open(C).then(c=>fetch(u.origin+u.pathname,{cache:"no-cache"})
    .then(r=>{if(r.ok)c.put("./",r.clone());return r})
    .catch(()=>c.match("./").then(h=>h||c.match("index.html")))));return}
  // Alles andere (Icons, Firebase-Bibliothek): zuerst aus dem Speicher
  e.respondWith(caches.open(C).then(async c=>{const hit=await c.match(e.request);
    const net=fetch(e.request).then(r=>{if(r.ok||r.type==="opaque")c.put(e.request,r.clone());return r}).catch(()=>hit);
    return hit||net}))});
