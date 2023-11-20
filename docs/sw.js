importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/04959e8.js",
    "revision": "cb4f8ae9faa370c02e62f4008bb48ca4"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/5612da5.js",
    "revision": "3a1c575c0cfeeea9f3638be18c25d787"
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
    "url": "/personal-exam-testing-app/_nuxt/821ff5c.js",
    "revision": "0e7a8ad29ef3eb241316647536f1ad4c"
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
    "url": "/personal-exam-testing-app/_nuxt/bc9c451.js",
    "revision": "11427778413d56f00da9e75c66aa6345"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/e310bf5.js",
    "revision": "49c6e030b0fa05ca4642235df39488b4"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
