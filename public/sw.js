if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let t={};const r=e=>s(e,c),d={module:{uri:c},exports:t,require:r};n[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6382178222e7b3bc028774067ee3a1c6"},{url:"/_next/static/chunks/166-4dcbd49986286ca4.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/224-6c75508b00d72f17.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/506-10415592fe885eab.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/596-02fdffb49ebfef0e.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/app/create/page-a74b4fcf87e44288.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/app/layout-31c513fb9bcd1988.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/app/page-3ce6a79d71a8d980.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/fd9d1056-35118b123ee83628.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/main-5d83e3f8561d29b0.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/main-app-0a68fa0e670e3f0d.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0f6a6550708396c9.js",revision:"dcOjidJ-92UGQI4_zJGKn"},{url:"/_next/static/css/b6d391eb7083cce0.css",revision:"b6d391eb7083cce0"},{url:"/_next/static/dcOjidJ-92UGQI4_zJGKn/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/dcOjidJ-92UGQI4_zJGKn/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icons/android/android-launchericon-144-144.png",revision:"9acf7297107b2d546019d2e56c7e9c79"},{url:"/icons/android/android-launchericon-192-192.png",revision:"7607e73a40fbdb5469e08d3cda5bb009"},{url:"/icons/android/android-launchericon-48-48.png",revision:"c320318ae899f21c60a116ef7065a307"},{url:"/icons/android/android-launchericon-512-512.png",revision:"cfd9fa4a042da4e4f208efb2cfa0d165"},{url:"/icons/android/android-launchericon-72-72.png",revision:"1604998aef708184e7c6042b9aed6949"},{url:"/icons/android/android-launchericon-96-96.png",revision:"ead910d17e09373d617d67dcf6cc48ca"},{url:"/manifest.json",revision:"e9f9ada3928fd2da9d5ca9b4f7cfd1ab"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
