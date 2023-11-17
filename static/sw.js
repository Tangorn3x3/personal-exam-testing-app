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
    "url": "/personal-exam-testing-app/_nuxt/6eebbcd.js",
    "revision": "fdb2cd62e867ee359407ae1de4c935dc"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/9aaf819.js",
    "revision": "dde24153a2c6dda3055676cd99c50c1c"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/af56c6b.js",
    "revision": "4d8955688a55b4f6d7897581f7ed32c4"
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
