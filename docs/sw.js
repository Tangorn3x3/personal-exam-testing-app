importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/1b7e2e5.js",
    "revision": "2664b7b170704760bf93a5e6fccff8eb"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/2687ec8.js",
    "revision": "2f36427c55e02138c57729c3ee7046b9"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/3573e74.js",
    "revision": "a695a49609b70a5002be6ee03cb1fcdb"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/42fac72.js",
    "revision": "0656bb1a47d5e491b63cd5e51e005f3a"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/55e633d.js",
    "revision": "42958105bf6c02a521d1d12d8536588a"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/6c326fd.js",
    "revision": "e940726236f2e6d67f6aac4c551959a4"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/77d818c.js",
    "revision": "430d63200946476a4cf6154398f77d37"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/dc5b850.js",
    "revision": "68001b00e882ca076c28348a466fc2be"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/ea4a4bb.js",
    "revision": "3909a35de3ea62ea528409bff66f70bb"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
