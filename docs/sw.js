importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/47a1fde.js",
    "revision": "485ad37924a0b3d0a6c1f4f5b149afed"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/51826fa.js",
    "revision": "4d7d93a601ef9b0218c79efdcb0d4400"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/53e4fad.js",
    "revision": "9cbe0ff5b2cdb882bc67079277993972"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/6f8a9d8.js",
    "revision": "787788a92544d0be4a7eadaa4f37f83e"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/8697795.js",
    "revision": "b899f367cb179a31bcb5fcc34a6b1966"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/92834ca.js",
    "revision": "6c67524b84df0881dc268b3d94baab29"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/a1086e5.js",
    "revision": "ab6238a633822403cef5f2f8f75f6b80"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/a4ff67d.js",
    "revision": "a11425f0f2e6532faae1d63e76b44c52"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/c12f107.js",
    "revision": "d1d687d2316cbd2d9f555cf8084663ab"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
