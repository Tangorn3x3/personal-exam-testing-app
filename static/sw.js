importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/01f2fcd.js",
    "revision": "02ff6840f022dcc4440302929ef9aff7"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/0d80624.js",
    "revision": "1539b5de140e43477eee0c4ff3dd7e57"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/9aaf819.js",
    "revision": "dde24153a2c6dda3055676cd99c50c1c"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/a029173.js",
    "revision": "1e3c37f1bf3a2d4357459537f65225b9"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/b06d80c.js",
    "revision": "75f791853382ade79edd61f184df3eb0"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/ba7be5b.js",
    "revision": "8410c815d394e73ae3e99f87befdd31f"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/df31f39.js",
    "revision": "85a02ce9d49f8e2655e9af28056a406f"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/ef5119d.js",
    "revision": "6de9e20b89ee28b71fdd4d4f12da13d0"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/f1ca6a9.js",
    "revision": "22bb98c87649f00043a0d929d95b5d5c"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
