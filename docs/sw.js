importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/0164c0c.js",
    "revision": "86d48006af0b783cd9743237e97be4f6"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/0e508d7.js",
    "revision": "c0de1df8e0f661841d7b9dbbeb9d9c99"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/29cd03d.js",
    "revision": "6651a38137b2719e6f7d5b24ae1362f8"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/32b972f.js",
    "revision": "58d8badea077768b9a700b12d6f68858"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/4cce3bb.js",
    "revision": "da5f09f281e38ec8a4b30418302584f7"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/6a68a62.js",
    "revision": "2cf0645692ec074f7d212d61063b4973"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/9024f74.js",
    "revision": "e4c4873e4272454b50ef4e190b9b88e7"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/a425fb0.js",
    "revision": "30a85825ac37134a1d97c61175621e9a"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/df28ccd.js",
    "revision": "ec3f48057f6c311b59aaee7852e0a5ef"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
