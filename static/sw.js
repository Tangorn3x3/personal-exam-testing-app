importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/04959e8.js",
    "revision": "cb4f8ae9faa370c02e62f4008bb48ca4"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/234544a.js",
    "revision": "efa7ec0d24539907765dd9362c63a5a0"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/6a95923.js",
    "revision": "29bd2456e6009b42006e809487dffc25"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/7767edb.js",
    "revision": "e38311097b638350f7c9c8430a660879"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/8eb552a.js",
    "revision": "e3df9aa726dc4d13d205cfe55626d67e"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/92b5846.js",
    "revision": "6a6a84ca2ed1177783717a6e56e1eb20"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/b5971f5.js",
    "revision": "02f9dfd1c7d022d4411d35da51e12f2e"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/f1f7983.js",
    "revision": "1d2a67661232300d4e9e1ba525f09d18"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/fa17461.js",
    "revision": "759e2902b4ed51a8f8c49cb30f30fb38"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
