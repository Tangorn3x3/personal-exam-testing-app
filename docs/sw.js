importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/47a1fde.js",
    "revision": "485ad37924a0b3d0a6c1f4f5b149afed"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/4f13d71.js",
    "revision": "94d65441b798cffbd693bcd0a9cef04c"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/53e4fad.js",
    "revision": "9cbe0ff5b2cdb882bc67079277993972"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/92834ca.js",
    "revision": "6c67524b84df0881dc268b3d94baab29"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/a0a9dea.js",
    "revision": "a7b8e67b6eac55aac9d27b0711e32147"
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
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/ec702a7.js",
    "revision": "f88bd04d3f1947ea0b052e18d8aecd7d"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
