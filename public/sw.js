if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-7797d470"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/YHZ_Vp8GGUSKxxb4J-LsM/_buildManifest.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/YHZ_Vp8GGUSKxxb4J-LsM/_ssgManifest.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/05d954cf.d6609e21b3722034d752.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/0a6d2fe3a37d2640a5b90d9479bf43c30ca7103e.f450b6a43baad8e3fecd.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/17007de1.54e5621f920f0ba0a8fa.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/1bfc9850.47269c13ed3971dd4ec1.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/252f366e.be363587d5b0eb547aa5.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/4113357df6f0d786014fc66e51f795d138a4eda1.f177a9668fb9792c9b94.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/52e7b5279a03c694931995716ce53fbc68f6dc23.ff021bb65ce3506f4a3f.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/61e4fb5e15f396e9c128f7bc3d55bf8f4cc5197c.eb6c258e2bff16cec421.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/926cdbe0454e70c7822ae365d6e35ee0cd3ebd93.39b1dee1dbe2e5dac89f.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/commons.a72f4af4bc9c44b5c957.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/framework.9707fddd9ae5927c17c3.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/main-2cfae1c8116703a95329.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/_app-d5ca95c22343ca3e5f02.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/_error-980195742e0dc82e9592.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/create-85accbc7bf7d87d30a1a.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/edit/%5BcourseId%5D-67c3f167cc2e028add31.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/index-758c1f510242b7dbc0af.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/login-788500ce401800068fe9.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/post/%5BcourseId%5D-568cb46ea9f7a2459ff9.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/signup-bfb935cbee421fdb593c.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/pages/user/%5Busername%5D-4d6c2a92442ef0baf6f3.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/polyfills-8f5f774d7b98d7e5a29e.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/chunks/webpack-eb080e3f091731f228fb.js",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/_next/static/css/454f48da7dd2a3b27bca.css",revision:"YHZ_Vp8GGUSKxxb4J-LsM"},{url:"/assets/images/android-chrome-192x192.png",revision:"600286dfa312c07907adf2d89a59b497"},{url:"/assets/images/android-chrome-512x512.png",revision:"27c6c99a616aff4477066f085ab3248f"},{url:"/assets/images/android-launchericon-144-144.png",revision:"26e47f5147d658569f0868f9611beb01"},{url:"/assets/images/android-launchericon-192-192.png",revision:"4ab0ba4ba31d1dde5953a8c8853927bf"},{url:"/assets/images/android-launchericon-48-48.png",revision:"06f52e9e6ba0d157c1c81b32229a2a53"},{url:"/assets/images/android-launchericon-512-512.png",revision:"823afc22c7d7f78949843c68fe5b3a5e"},{url:"/assets/images/android-launchericon-72-72.png",revision:"214dd2fb2aff210e92734890b2afaac2"},{url:"/assets/images/android-launchericon-96-96.png",revision:"2a0fa8c7175de4b09a18e354ae547d6d"},{url:"/assets/images/apple-touch-icon.png",revision:"e37276d804bed0328f476b199bb19974"},{url:"/assets/images/favicon-16x16.png",revision:"8c1315470761258be573ec00845adfff"},{url:"/assets/images/favicon-32x32.png",revision:"5a5bcfa6f3a8b37bdce3e73c626fbae5"},{url:"/assets/images/og-image.jpeg",revision:"e879caaec3146974ff13396eb6507f7c"},{url:"/manifest.json",revision:"e302fe3802db173faad7d2835d50dc77"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
