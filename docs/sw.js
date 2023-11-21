importScripts('/personal-exam-testing-app/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/personal-exam-testing-app/_nuxt/0eadba7.js",
    "revision": "48c70cf6ddae633ded980b49c4bd34d1"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/124f0ef.js",
    "revision": "ac120f3c4245613e1371d430eb7d2947"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/92b5846.js",
    "revision": "6a6a84ca2ed1177783717a6e56e1eb20"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/b03bacb.js",
    "revision": "fcc81149d35f822d0b6e7be7c2968f19"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/b5971f5.js",
    "revision": "02f9dfd1c7d022d4411d35da51e12f2e"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/c604d39.js",
    "revision": "7d3d1ab2cba9ebfd943bff2231542218"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/c9f6566.js",
    "revision": "c5c67df9b718dcf2847c633359861e58"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/e64b300.js",
    "revision": "b85d3787ce9761b783fda2c0bcc9ae75"
  },
  {
    "url": "/personal-exam-testing-app/_nuxt/e80d736.js",
    "revision": "ceb7306715ddc5b554d441523447145f"
  }
], {
  "cacheId": "Exam Testing",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/personal-exam-testing-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
