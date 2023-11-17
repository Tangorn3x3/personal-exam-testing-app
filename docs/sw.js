importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/3859c96.js",
    "revision": "b98716eb110916a2e03d3aac0f343089"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/465bb70.js",
    "revision": "496a681eb367370e236717edbfb7fc35"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/60511ad.js",
    "revision": "37f6c2306472de0d4387799f30151915"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/7714080.js",
    "revision": "cdb37e8509ac15efcf5dce6163b643c5"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/906e7fb.js",
    "revision": "2a8f751ebb06070689eae9046d619e07"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/a776bff.js",
    "revision": "941bb81c4682b949d8e251debb28e90c"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/aa69eb4.js",
    "revision": "1e6d2f812f4274259bef5ffd44cd2877"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/c9883dc.js",
    "revision": "dcad2738302f10dbf6ff7d7eb6eae280"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/f42fabc.js",
    "revision": "e7bb1fde4f48df5f50ece76307c007bc"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
