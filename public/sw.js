if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>n(e,t),d={module:{uri:t},exports:i,require:r};s[t]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5K5kOAER22SneGraxeulr/_buildManifest.js",revision:"0929dfd4d1c78e9f261f82ec3693384a"},{url:"/_next/static/5K5kOAER22SneGraxeulr/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/5K5kOAER22SneGraxeulr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/120.fbd9686ab62eee54.js",revision:"fbd9686ab62eee54"},{url:"/_next/static/chunks/191.b47ba71b6d8d2d37.js",revision:"b47ba71b6d8d2d37"},{url:"/_next/static/chunks/192.c2d3b29cd59c84d9.js",revision:"c2d3b29cd59c84d9"},{url:"/_next/static/chunks/26.287cce41e9ac071e.js",revision:"287cce41e9ac071e"},{url:"/_next/static/chunks/29.87872887ed4f0d48.js",revision:"87872887ed4f0d48"},{url:"/_next/static/chunks/309.05dc11f55d4fcb48.js",revision:"05dc11f55d4fcb48"},{url:"/_next/static/chunks/318.a6711830eef16c11.js",revision:"a6711830eef16c11"},{url:"/_next/static/chunks/319.57a10463adce1ad8.js",revision:"57a10463adce1ad8"},{url:"/_next/static/chunks/331.796b013dfbbd3f9e.js",revision:"796b013dfbbd3f9e"},{url:"/_next/static/chunks/359.866b4370fed0c38e.js",revision:"866b4370fed0c38e"},{url:"/_next/static/chunks/376.d1ef1d5f933fa46b.js",revision:"d1ef1d5f933fa46b"},{url:"/_next/static/chunks/457.bd41b3508ddd34ff.js",revision:"bd41b3508ddd34ff"},{url:"/_next/static/chunks/460.a469b1011290af08.js",revision:"a469b1011290af08"},{url:"/_next/static/chunks/511.617a4b2b7d5babbd.js",revision:"617a4b2b7d5babbd"},{url:"/_next/static/chunks/547.9c39d09f60c90287.js",revision:"9c39d09f60c90287"},{url:"/_next/static/chunks/627.2379854035170225.js",revision:"2379854035170225"},{url:"/_next/static/chunks/677.3b125250f304dde1.js",revision:"3b125250f304dde1"},{url:"/_next/static/chunks/744.59af2e6ec3a184fc.js",revision:"59af2e6ec3a184fc"},{url:"/_next/static/chunks/843.310bb814b9c9cbe9.js",revision:"310bb814b9c9cbe9"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"884bc9854a9cfe85"},{url:"/_next/static/chunks/915.9da3296ce5d1aa06.js",revision:"9da3296ce5d1aa06"},{url:"/_next/static/chunks/927.432c750f38433a4b.js",revision:"432c750f38433a4b"},{url:"/_next/static/chunks/994.44634a549ede54ec.js",revision:"44634a549ede54ec"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-246f19125e0ef237.js",revision:"246f19125e0ef237"},{url:"/_next/static/chunks/pages/_app-92c32fd4a5459864.js",revision:"92c32fd4a5459864"},{url:"/_next/static/chunks/pages/_error-815e492bede44f3e.js",revision:"815e492bede44f3e"},{url:"/_next/static/chunks/pages/index-be20280c8c350a79.js",revision:"be20280c8c350a79"},{url:"/_next/static/chunks/pages/result-0011f4ee6a226253.js",revision:"0011f4ee6a226253"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-64cbbec66f70f728.js",revision:"64cbbec66f70f728"},{url:"/assets/app.png",revision:"ab4beaa4b92e6246652f7546e687bf31"},{url:"/assets/clean_architecture_book.jpg",revision:"a19da4eab27ab2949b65af9c061a2a99"},{url:"/assets/clean_code_book.jpg",revision:"3cda8dce4d3fa622575e7ca676cde80b"},{url:"/assets/eletronics-icon.svg",revision:"30e0e5fbf130d7dba0adbf4370371b6d"},{url:"/assets/icon-16.png",revision:"5a283295194fec79b0a57c8fe15bb894"},{url:"/assets/icon-180.png",revision:"2545390ecc24d2cb47cd15d74ba18f73"},{url:"/assets/icon-32.png",revision:"8d3142dbf4efb2679baa0d412149b2ec"},{url:"/assets/icon-512.png",revision:"f96bc2be3ccab2f08bbd69e42bd4cc00"},{url:"/assets/icon-96.png",revision:"2b0967fa77fc035da1bfe03193179241"},{url:"/assets/js-circle-icon.svg",revision:"14154192bfdad6db361a69ae665ea21c"},{url:"/assets/snake.svg",revision:"8499667a6d75da244b4def7f5d0176fb"},{url:"/manifest.json",revision:"9ba4609613f7cdf921ef5c85cc9fe0bf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));