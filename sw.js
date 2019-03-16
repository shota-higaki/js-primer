// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
importScripts(
    "https://unpkg.com/service-worker-updatefound-refresh-dialog@1.1.0/dist/service-worker-updatefound-refresh-dialog.umd.js"
);

workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "basic/array/index.html",
    "revision": "19c53e2f8d54f34cbaefb5e324a14998"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "f0907d20b639d79b81467cf4113d652f"
  },
  {
    "url": "basic/class/index.html",
    "revision": "c9d832ef9fa902eea8e148c91b886597"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "812b245c4e4c194a98f7bff272c72810"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "43c1bbb16a1b5efef61304df919ab8b4"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "bc718c39ebbc1009017de60bce4f7568"
  },
  {
    "url": "basic/date/index.html",
    "revision": "1ca5ce06efd2884639cc4a8f7a8113a1"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "a2b74ce4131ce0fcd9b2fbcf891137d9"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "e1aeb9628e5b43f65df66cecf7d330dc"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "193bc20310d4cf92a30ec6fc3e7b2c4b"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "7b3947df5ccee8e7a685d5763b40b813"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "7972d53aa6f698ebf05ea625510ed4fd"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "5bd5c8023c8d3ef6e55e1ae3a106ab5f"
  },
  {
    "url": "basic/index.html",
    "revision": "7097131eb1a0a80bb9836afb7089fe0a"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "1b3c0958799760b64b7a95efefb87ee2"
  },
  {
    "url": "basic/json/index.html",
    "revision": "f41e7fc6c2c74c358f2e0e90ab6699ae"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "4eca3e6687c920444c9060f96db6fdab"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "6aef7919dc7f984d603d66d9afd09d47"
  },
  {
    "url": "basic/math/index.html",
    "revision": "2fb035b60ef3b5b2884228057a7f51e5"
  },
  {
    "url": "basic/object/index.html",
    "revision": "85cdcdd0b22c58dd47174a7516ae9493"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "bab837c5c2332e3cab109830237f5a73"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "8221ecb795194b2bb4d2f097a1ac4f96"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "b20f52597eebc233ca8b86567527a1f9"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "23eb78c09ad1d984cfa76270d8467b24"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "5a28434f2b3e456ff4a133304fb8862f"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "2ae75cbbfa508c04fbead8a0be938d10"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "7d065a8e65d944b1898b9de5e8d1e07e"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "6665ae16a9f3b2bfee3d28930988f382"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "81bdae3abbfa82c8a14ce1d961bab2e5"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "fa9d13791df5ac619da3430630a0e60f"
  },
  {
    "url": "basic/string/index.html",
    "revision": "f8f6f29ef5de5c94558c32f216141b88"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "8804d40dbee35070b3bad561a223c2d7"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "c3b6789e6aefdcc5450e8fc20ce8bb43"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "0ca768e48d364ee90d22664568902840"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "ce053db5ff1a54bc321f12a90a545594"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "5c37a6bc8456c8fc08bb829a1cff8b21"
  },
  {
    "url": "intro/goal/index.html",
    "revision": "382d3b803bdab4b5bbf446903ba83066"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "e83b37ca2c594a5c7ec11de3d373bd51"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "5b4dbb28c5d5b6cf2a29f573c651c908"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "7c1fdd7b21ee71ca010f51c05864cbe0"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "e1df96c10be2693de3909e98d272fd31"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "11474e98502fcf92fc24c80298bf1397"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "937f44b83967231567c263b6c874461e"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "0304b2ccb8282317cf318b214f1ae54f"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "bfe08f811700550da8fda8c64636caa4"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "884ead133379c7dd6720d042c2887eb6"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "d86dd5f8bd529e577d5ed6708204e386"
  },
  {
    "url": "use-case/index.html",
    "revision": "0cd1c12d878296f931325056a69edd3f"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "76c101537ea62d51d939b58a76a9c01e"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "3250d62555b7713c5594bda4fa74154e"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "6526b0e95a8d13e992529fe0fca84645"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "0c0ada3e9afda5c51a218f5a59ecbf06"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "0272a22a4841568cabc51b233bcc49d2"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "fad4289e52badeb5bcf8ef0542408cbd"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "4291e5a059d49e222705e9b653dda3ea"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "ec52b9890d8354b4021e271bc7db4cf8"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "06c87dcc6ed8cf54d41274ecc797a0ed"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "2ff1c70fe934bef3d24ff96b72af6987"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "2142a75557600e0726a34c1fcd811d95"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "05d2df3f89ce04ee02638e4910988282"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "d3d61ffa5bef6fbdc7ba616f01ec6520"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "3850dc3e991a93dcccd00112207d81dd"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "d5c00c9e922d01a9b80f83b1411c0e0e"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "0e2c391ff79af8467d21aa03d3aa33ee"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "4eecf5a77ee8b59e9fb9a4b9889e6147"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "d674de5dc18e85898bac7c501d78e818"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "93d4eb86cee120ca05f397a4e7862557"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "197d582ae10687813ccd898735163adf"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  }
]);