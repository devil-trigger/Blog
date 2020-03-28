/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/Hexo/Myblog/public/2020/02/01/hello-world/index.html","6ed93ae6ddadc9d6afd60198cc06387e"],["F:/Hexo/Myblog/public/2020/02/12/我的博客/index.html","0a57a030469e2bac86d0fd7f97834cfe"],["F:/Hexo/Myblog/public/2020/02/26/hexoBlog/index.html","4dfb563fa471c47f9643b96cf795e20a"],["F:/Hexo/Myblog/public/2020/02/27/bee1/index.html","0228c4f7a691ab3b3aea92b8a4d81354"],["F:/Hexo/Myblog/public/2020/02/28/bee10/1.jpg","4cfadfba06416792c5b5a4ad295d3997"],["F:/Hexo/Myblog/public/2020/02/28/bee10/1.png","6167931c870a14ee8591970243b7965d"],["F:/Hexo/Myblog/public/2020/02/28/bee10/2.png","325b538110649732808a9cd634b5c267"],["F:/Hexo/Myblog/public/2020/02/28/bee10/3.png","b17301e9e5a3744cbaac312bff249491"],["F:/Hexo/Myblog/public/2020/02/28/bee10/4.png","04696770c893d7cece0bd5df1dc97bb8"],["F:/Hexo/Myblog/public/2020/02/28/bee10/5.png","f7a75569155de16d43bc49f5809c150e"],["F:/Hexo/Myblog/public/2020/02/28/bee10/6.png","f7d19a0b9089a7b8095fb5d72600b82c"],["F:/Hexo/Myblog/public/2020/02/28/bee10/7.png","6619b7fe2026b008d391c037a26f9097"],["F:/Hexo/Myblog/public/2020/02/28/bee10/8.png","3dded69eb90f4d2abae20f2d2880eb84"],["F:/Hexo/Myblog/public/2020/02/28/bee10/9.png","af8610002c57d9ade1ab85ec5c4559c8"],["F:/Hexo/Myblog/public/2020/02/28/bee10/index.html","fbbead308066ce263141abfb88f48b2c"],["F:/Hexo/Myblog/public/2020/02/28/bee2/index.html","c8c2dc6761c33e9340fc8de76aa5a571"],["F:/Hexo/Myblog/public/2020/02/28/bee3/index.html","a8871decbd520683b271a92929fa918d"],["F:/Hexo/Myblog/public/2020/02/28/bee4/index.html","c05de8a6ec3c361f9f768d7dcddf3a08"],["F:/Hexo/Myblog/public/2020/02/28/bee5/index.html","49d4a7483f78dadfd7862e8a4efe708a"],["F:/Hexo/Myblog/public/2020/02/28/bee6/index.html","a6eca06db86b93bee02301efe132d11d"],["F:/Hexo/Myblog/public/2020/02/28/bee7/index.html","b2a76c4be84739d4587c8781b1d9fe94"],["F:/Hexo/Myblog/public/2020/02/28/bee8/index.html","20e884abe295cbb99ecdf0f1ba52312a"],["F:/Hexo/Myblog/public/2020/02/28/bee9/1.png","2f228a253b3766f54e20e961511bb991"],["F:/Hexo/Myblog/public/2020/02/28/bee9/2.png","c82c3e162962c7d3515b47017b05fccc"],["F:/Hexo/Myblog/public/2020/02/28/bee9/index.html","5a11dc3b730f02444e780a6fd74277de"],["F:/Hexo/Myblog/public/2020/03/02/bee11/index.html","381baf11a8ffc167a5b99ae1a7fcd85c"],["F:/Hexo/Myblog/public/2020/03/03/bee12/index.html","74b015c7e95b4d4d0167ef4b4e4761da"],["F:/Hexo/Myblog/public/2020/03/04/bee13/index.html","9441d6137ea0c2f76ae94a337676cae7"],["F:/Hexo/Myblog/public/2020/03/04/bee14/145.png","a3dd40af4ff9af2632cd1900ecfbedce"],["F:/Hexo/Myblog/public/2020/03/04/bee14/index.html","55d36b4aec686fd038f3b9834cd2cc9f"],["F:/Hexo/Myblog/public/2020/03/05/bee15/1.png","8273e9e47bed6aaa58cd98183c958913"],["F:/Hexo/Myblog/public/2020/03/05/bee15/2.png","f63d576eceaa264ed1adec6f20acf3b9"],["F:/Hexo/Myblog/public/2020/03/05/bee15/3.png","712115ab8319676f076c166af0fa41f5"],["F:/Hexo/Myblog/public/2020/03/05/bee15/4.png","2c4395ebd7220825c5ca017abb5f4203"],["F:/Hexo/Myblog/public/2020/03/05/bee15/index.html","cb5200b757a8c52539e29d5d55372fed"],["F:/Hexo/Myblog/public/2020/03/06/bee16/1.gif","59e83ba07c4b642bb3e55aed163a9cdd"],["F:/Hexo/Myblog/public/2020/03/06/bee16/1.jpg","8766298d565aa1f96b891c73738ec9b2"],["F:/Hexo/Myblog/public/2020/03/06/bee16/1.png","4a84eafc3bcf513cdbe76b38d52bbe75"],["F:/Hexo/Myblog/public/2020/03/06/bee16/10.gif","a64f668d117f2344d5020091d2146d57"],["F:/Hexo/Myblog/public/2020/03/06/bee16/10.png","80255213c8d4bcd34ecfd80217248708"],["F:/Hexo/Myblog/public/2020/03/06/bee16/100.gif","8a56b70e342fdd1ab48aa5aa3951363b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/101.gif","81ab061b985eea6d5c602b5a7c4f8502"],["F:/Hexo/Myblog/public/2020/03/06/bee16/102.gif","bbee9a4d7872ce97757cdf0b7c7cad3b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/103.gif","a9da5ca84a1f429cf8e6513589800ab4"],["F:/Hexo/Myblog/public/2020/03/06/bee16/104.gif","752302c5e4f9079eb252b244a5cb25fc"],["F:/Hexo/Myblog/public/2020/03/06/bee16/105.gif","bfda3f7c18d0a66355ce1a16a7f2b255"],["F:/Hexo/Myblog/public/2020/03/06/bee16/106.gif","10624a04bfe1616bfd3b5bde14c7fea7"],["F:/Hexo/Myblog/public/2020/03/06/bee16/11.gif","40b8d5bd10e63ca2ad9f2b43c68dee6b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/11.png","afd51d6e3e0a4689c5a4407ecdbfabd6"],["F:/Hexo/Myblog/public/2020/03/06/bee16/12.gif","cfa5b00689af5a7b6728f76195207384"],["F:/Hexo/Myblog/public/2020/03/06/bee16/12.png","b8a93fee051d4e2a8e0e4705877d9aea"],["F:/Hexo/Myblog/public/2020/03/06/bee16/13.gif","0dfc4d09571821f85324c8b6bba2ad71"],["F:/Hexo/Myblog/public/2020/03/06/bee16/13.png","cf463329922fb20d7b04f090150ba1b0"],["F:/Hexo/Myblog/public/2020/03/06/bee16/14.gif","cae9519ea4997c803154e423189a3db1"],["F:/Hexo/Myblog/public/2020/03/06/bee16/14.png","640b6bcf703bf2a06c251960b3aa3d81"],["F:/Hexo/Myblog/public/2020/03/06/bee16/15.gif","a48c0327e6c110b89ad4b68d794fe038"],["F:/Hexo/Myblog/public/2020/03/06/bee16/15.png","5eaa47d3117f9b1667f5c434df7de363"],["F:/Hexo/Myblog/public/2020/03/06/bee16/16.gif","e715fa503a9c438408ec18084ac03bcf"],["F:/Hexo/Myblog/public/2020/03/06/bee16/17.gif","1cf9f3cdadcd8ee23088f905134dd70c"],["F:/Hexo/Myblog/public/2020/03/06/bee16/18.gif","481a77d1e901dfef554a49b3f0e4266a"],["F:/Hexo/Myblog/public/2020/03/06/bee16/19.gif","15ffc173b9a2163d9d2d45b9e93b0476"],["F:/Hexo/Myblog/public/2020/03/06/bee16/2.gif","dc9b50313cbcdd79fe29d623f2c435ac"],["F:/Hexo/Myblog/public/2020/03/06/bee16/2.jpg","4addf9b659d05b105c4deed3c9274683"],["F:/Hexo/Myblog/public/2020/03/06/bee16/2.png","2cedbd4c12ea07e420a99d5d3005abd8"],["F:/Hexo/Myblog/public/2020/03/06/bee16/20.gif","01bb92979c99eeeb320730fbb141ab47"],["F:/Hexo/Myblog/public/2020/03/06/bee16/21.gif","8f655e2f1704c68041d7df139c35a81b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/22.gif","90931fe38947d63941417bd5340c5690"],["F:/Hexo/Myblog/public/2020/03/06/bee16/23.gif","db3eeec0b5eb47d0352561b95765138f"],["F:/Hexo/Myblog/public/2020/03/06/bee16/24.gif","d56f42cd894240958ae6e69932c255c2"],["F:/Hexo/Myblog/public/2020/03/06/bee16/25.gif","5729c9be5a843cbc96bd5c67a3999c29"],["F:/Hexo/Myblog/public/2020/03/06/bee16/26.gif","10c8a74dffca4711affb92f51f3afe6f"],["F:/Hexo/Myblog/public/2020/03/06/bee16/27.gif","11c7c327bd5e6fabe34253c1b78c7dc1"],["F:/Hexo/Myblog/public/2020/03/06/bee16/28.gif","334d9b6bf6c145ebfe6d17583b15fc99"],["F:/Hexo/Myblog/public/2020/03/06/bee16/29.gif","13d5f2a2d743babb5e664a4f2d7ecbfc"],["F:/Hexo/Myblog/public/2020/03/06/bee16/3.gif","89467322fb16f541ad9985d3697e58cc"],["F:/Hexo/Myblog/public/2020/03/06/bee16/3.jpg","ebb9cc7aca3faad02cb554319290b185"],["F:/Hexo/Myblog/public/2020/03/06/bee16/3.png","dd89e0747c7fb8831860cc508b63c1fe"],["F:/Hexo/Myblog/public/2020/03/06/bee16/30.gif","12b30ba542a5e0132f2954c406c8cbb3"],["F:/Hexo/Myblog/public/2020/03/06/bee16/31.gif","46aa36a34ef65ac0d3b28512e1202120"],["F:/Hexo/Myblog/public/2020/03/06/bee16/32.gif","d370e21d037776e62dd6e9b14a4f203a"],["F:/Hexo/Myblog/public/2020/03/06/bee16/33.gif","106dd34a0083048874e64ea8461d0f26"],["F:/Hexo/Myblog/public/2020/03/06/bee16/34.gif","dcf6989cf22654c711163eb711f5ff67"],["F:/Hexo/Myblog/public/2020/03/06/bee16/35.gif","46ab962569a255a50a6b89de04990ecc"],["F:/Hexo/Myblog/public/2020/03/06/bee16/36.gif","caa1e6314915f7bdf0d8bdb62e2c5b98"],["F:/Hexo/Myblog/public/2020/03/06/bee16/37.gif","724025c9df4b1162812ef64bd134ed3b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/38.gif","b4a359d7128497d9c8c9eed90d760add"],["F:/Hexo/Myblog/public/2020/03/06/bee16/39.gif","18838876224eca9ae0f947ab065a4e9b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/4.gif","fafc4ff86e71eb38e08699e459906af8"],["F:/Hexo/Myblog/public/2020/03/06/bee16/4.jpg","10624a04bfe1616bfd3b5bde14c7fea7"],["F:/Hexo/Myblog/public/2020/03/06/bee16/4.png","dbeaf0e56a48a68ad775dbdb69fc0f47"],["F:/Hexo/Myblog/public/2020/03/06/bee16/40.gif","be2b075a38723ae88054a8893ac840bc"],["F:/Hexo/Myblog/public/2020/03/06/bee16/41.gif","602d178edce4ca7aa779271e18a6ae7d"],["F:/Hexo/Myblog/public/2020/03/06/bee16/42.gif","4f393697620fd84d49259ffaa15f3727"],["F:/Hexo/Myblog/public/2020/03/06/bee16/43.gif","fc1a74ba552eb20a8e46db1e70f6a639"],["F:/Hexo/Myblog/public/2020/03/06/bee16/44.gif","73120f97e22b2303c62856f0a4e1b9ed"],["F:/Hexo/Myblog/public/2020/03/06/bee16/45.gif","9c8c2a7fc0fe7d38e902e121d78207e3"],["F:/Hexo/Myblog/public/2020/03/06/bee16/46.gif","4a3a7b16c616c4c6329b8ae54a48350f"],["F:/Hexo/Myblog/public/2020/03/06/bee16/47.gif","a8ac56267eb45253795a0a3850c5cd9a"],["F:/Hexo/Myblog/public/2020/03/06/bee16/48.gif","04ab13458661292fc4dc3fded710f24c"],["F:/Hexo/Myblog/public/2020/03/06/bee16/49.gif","d1147fd54dcd8fdcd884a7edd28f6a9c"],["F:/Hexo/Myblog/public/2020/03/06/bee16/5.gif","78b52b76710d91575ebe1954425640e2"],["F:/Hexo/Myblog/public/2020/03/06/bee16/5.png","fcd8c413e341ba718e9c3f89f7283677"],["F:/Hexo/Myblog/public/2020/03/06/bee16/50.gif","0178c5fdac38ea23a900d6ec2173b667"],["F:/Hexo/Myblog/public/2020/03/06/bee16/51.gif","7d14c858a1cd6d36b873027ea5c1e62a"],["F:/Hexo/Myblog/public/2020/03/06/bee16/52.gif","0ce2919e870da54726eb2a91bec6c09b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/53.gif","916e1d3ce100bf66623f96bd35de91eb"],["F:/Hexo/Myblog/public/2020/03/06/bee16/54.gif","151587d36fb14171037e41d7e1c28aa5"],["F:/Hexo/Myblog/public/2020/03/06/bee16/55.gif","839fb80672447babbc1cb17d87fe75c6"],["F:/Hexo/Myblog/public/2020/03/06/bee16/56.gif","4932c3cdd5fb384facc6c463eec05c4b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/57.gif","63f5c9f4c1bd12cf7471ab00508ddb94"],["F:/Hexo/Myblog/public/2020/03/06/bee16/58.gif","8be9c5380faa9e2c59c6544691dcc324"],["F:/Hexo/Myblog/public/2020/03/06/bee16/59.gif","10cb223f4f3a20a170a355af8cdea106"],["F:/Hexo/Myblog/public/2020/03/06/bee16/6.gif","f41034a68b384763f583197e7cdb3395"],["F:/Hexo/Myblog/public/2020/03/06/bee16/6.png","663335a4e710abdaa2db736776848a1a"],["F:/Hexo/Myblog/public/2020/03/06/bee16/60.gif","eb347155131ce10cdbabade0e9da9124"],["F:/Hexo/Myblog/public/2020/03/06/bee16/61.gif","910acff1f77b86507579067ef3267bf5"],["F:/Hexo/Myblog/public/2020/03/06/bee16/62.gif","cba0bbc1e58d7fffaeefdc63c1be1b46"],["F:/Hexo/Myblog/public/2020/03/06/bee16/63.gif","49e365d07ba1a77a649759f862644ca3"],["F:/Hexo/Myblog/public/2020/03/06/bee16/64.gif","28c3183e7480ac906314a5a58242d0ba"],["F:/Hexo/Myblog/public/2020/03/06/bee16/65.gif","8b1369abc969f44a3d372694080b97e0"],["F:/Hexo/Myblog/public/2020/03/06/bee16/66.gif","48366582387feaa54bfe1b844e881f09"],["F:/Hexo/Myblog/public/2020/03/06/bee16/67.gif","fe2dec245617d7e05789ecabe88fd5e4"],["F:/Hexo/Myblog/public/2020/03/06/bee16/68.gif","30bad0f4579423f61ce303af9c986521"],["F:/Hexo/Myblog/public/2020/03/06/bee16/69.gif","40f4c3e7ed4ca5190693208808242162"],["F:/Hexo/Myblog/public/2020/03/06/bee16/7.gif","c4499d0fda7bbe78850574971cdf5bf3"],["F:/Hexo/Myblog/public/2020/03/06/bee16/7.png","d72a59728e32f7e1e08ec902bc946513"],["F:/Hexo/Myblog/public/2020/03/06/bee16/70.gif","83b841b32df6eba84c41ed79c122877e"],["F:/Hexo/Myblog/public/2020/03/06/bee16/71.gif","321a057f5a0a07842a7d5293baad4227"],["F:/Hexo/Myblog/public/2020/03/06/bee16/72.gif","0dc3cf5c2828a5ecae5132c222492116"],["F:/Hexo/Myblog/public/2020/03/06/bee16/73.gif","ce43d1225c8d20feeb3338e938517b5f"],["F:/Hexo/Myblog/public/2020/03/06/bee16/74.gif","d2a23d4a8ade39e6856ecd6a1ce21d66"],["F:/Hexo/Myblog/public/2020/03/06/bee16/75.gif","63296abe1263f9c4d686472c99acc512"],["F:/Hexo/Myblog/public/2020/03/06/bee16/76.gif","734467258b93ab448559e5b7cd61d2a7"],["F:/Hexo/Myblog/public/2020/03/06/bee16/77.gif","095220874ae16122744f6e32bc99aab0"],["F:/Hexo/Myblog/public/2020/03/06/bee16/78.gif","4a534f695af7738ca945078bcb2b0a71"],["F:/Hexo/Myblog/public/2020/03/06/bee16/79.gif","43f31729ac5810bcf116c0361e6b56b4"],["F:/Hexo/Myblog/public/2020/03/06/bee16/8.gif","141857a9890daa2c9f3a2e4e3359d4f8"],["F:/Hexo/Myblog/public/2020/03/06/bee16/8.png","5ee91dd4a43185e897738f7c550351ca"],["F:/Hexo/Myblog/public/2020/03/06/bee16/80.gif","b7a4284a7827a4901e13d40d967e06d8"],["F:/Hexo/Myblog/public/2020/03/06/bee16/81.gif","a27df29f3445f448bff8edf28de32c99"],["F:/Hexo/Myblog/public/2020/03/06/bee16/82.gif","8ca9b595c0ebb6854e230e6a96cd50da"],["F:/Hexo/Myblog/public/2020/03/06/bee16/83.gif","21b00e63e5a0eb70a2f17b0cf3437304"],["F:/Hexo/Myblog/public/2020/03/06/bee16/84.gif","4803529fe606f66c217405116fc9d45a"],["F:/Hexo/Myblog/public/2020/03/06/bee16/85.gif","01ae5b8fa41cd69a8774a119ee0abd4b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/86.gif","eb11c34a8b0a968caff3c5497ef09af4"],["F:/Hexo/Myblog/public/2020/03/06/bee16/87.gif","a8683775462b6d9159abbd64436f1b2d"],["F:/Hexo/Myblog/public/2020/03/06/bee16/88.gif","4f8cfbe293477a9f248a286abe637cb3"],["F:/Hexo/Myblog/public/2020/03/06/bee16/89.gif","13733d6f2565c818796b62cd82930327"],["F:/Hexo/Myblog/public/2020/03/06/bee16/9.gif","f5c54534b47abf23fabb897312aa699d"],["F:/Hexo/Myblog/public/2020/03/06/bee16/9.png","86ad301cc7c33ceff09fc3c3d51a0ad1"],["F:/Hexo/Myblog/public/2020/03/06/bee16/90.gif","6bceda739b71d8025b85df63913cb452"],["F:/Hexo/Myblog/public/2020/03/06/bee16/91.gif","5a95536ccf65cdf10d9a381dfad4d464"],["F:/Hexo/Myblog/public/2020/03/06/bee16/92.gif","c4c63c79373e19e9f80b59defaca59e3"],["F:/Hexo/Myblog/public/2020/03/06/bee16/93.gif","ffb5b8e27fed433ca9b8d3398626a762"],["F:/Hexo/Myblog/public/2020/03/06/bee16/94.gif","15719a308f56b2b11959bd484ef6e4c4"],["F:/Hexo/Myblog/public/2020/03/06/bee16/95.gif","1534d4560d8952a183e9561d7ecd7883"],["F:/Hexo/Myblog/public/2020/03/06/bee16/96.gif","dd5eef46f3fa3db9c59433614b99b8eb"],["F:/Hexo/Myblog/public/2020/03/06/bee16/97.gif","ef8e43ba2c473fa61b62a4d1fb137a2b"],["F:/Hexo/Myblog/public/2020/03/06/bee16/98.gif","bf8936dd200d7fbf5dcf90e1edafab64"],["F:/Hexo/Myblog/public/2020/03/06/bee16/99.gif","9f6b7219f74406a42c767354d15d743a"],["F:/Hexo/Myblog/public/2020/03/06/bee16/ap1.gif","46b3fc9408629c2a1f65974723dc882e"],["F:/Hexo/Myblog/public/2020/03/06/bee16/ap2.gif","7d7b12639dabe980dd3da98593888ef3"],["F:/Hexo/Myblog/public/2020/03/06/bee16/index.html","8305e74b23e38fa2829f19d45340574b"],["F:/Hexo/Myblog/public/2020/03/09/bee17/1.jpg","05994e197a5ef3664311323b1dc683cc"],["F:/Hexo/Myblog/public/2020/03/09/bee17/1.png","cf23526f451784ff137f161b8fe18d5a"],["F:/Hexo/Myblog/public/2020/03/09/bee17/2.jpg","46abbd6de819d0ac6dbc75c8d5a9b89f"],["F:/Hexo/Myblog/public/2020/03/09/bee17/2.png","e8e67fe35a7cadf9a14699c9f4275f17"],["F:/Hexo/Myblog/public/2020/03/09/bee17/3.png","5df82d80e1b3ccc7e2a97b646ca3c704"],["F:/Hexo/Myblog/public/2020/03/09/bee17/4.png","e59cac30bd0cc58400de269759b335ba"],["F:/Hexo/Myblog/public/2020/03/09/bee17/5.png","297db1daba5ba285357116805411d1f0"],["F:/Hexo/Myblog/public/2020/03/09/bee17/6.png","18b3d17ed19bbe57fd451ca26515d6fa"],["F:/Hexo/Myblog/public/2020/03/09/bee17/7.png","c341bfa690056d1a76e7565446c33cbe"],["F:/Hexo/Myblog/public/2020/03/09/bee17/8.png","8e3981cb896b90441bfb9a7eb2fdadc5"],["F:/Hexo/Myblog/public/2020/03/09/bee17/index.html","a397896422c0504e369573fd4073ada1"],["F:/Hexo/Myblog/public/2020/03/20/bee18/1.png","52c7804b97208c138ce38ff79f349422"],["F:/Hexo/Myblog/public/2020/03/20/bee18/2.jpg","733b8a078b8bd24d5d610d27136dcd41"],["F:/Hexo/Myblog/public/2020/03/20/bee18/2.png","8f8376cd5094959e8485431e8d94f21e"],["F:/Hexo/Myblog/public/2020/03/20/bee18/3.jpg","f23f7063668e0fdd2124d12fb16bfada"],["F:/Hexo/Myblog/public/2020/03/20/bee18/3.png","a50efd923165db11c014075922649607"],["F:/Hexo/Myblog/public/2020/03/20/bee18/4.png","fbfd4d336d8f1498af031cb988f62e6f"],["F:/Hexo/Myblog/public/2020/03/20/bee18/5.png","d647ce5a02682dace0be1a7dd3a770bd"],["F:/Hexo/Myblog/public/2020/03/20/bee18/6.png","42850b9438f66642e883d186dbf9e80f"],["F:/Hexo/Myblog/public/2020/03/20/bee18/7.png","4c9e4c3be563b41a05b8d41120534a94"],["F:/Hexo/Myblog/public/2020/03/20/bee18/index.html","53572c88db087d1fb84fe334e7079a43"],["F:/Hexo/Myblog/public/2020/03/24/bee19/index.html","cf0df0b4f464dcdeb2864d3f318523df"],["F:/Hexo/Myblog/public/2020/03/25/bee20/1.png","d77f2fa73ae3c1fb953e53ea7f423498"],["F:/Hexo/Myblog/public/2020/03/25/bee20/2.png","7dcbe9fdee26ce3374190dae0b3abdc1"],["F:/Hexo/Myblog/public/2020/03/25/bee20/3.png","3ae3bb8b32912382caaee3b93a05568a"],["F:/Hexo/Myblog/public/2020/03/25/bee20/4.png","6bef6ee7a1b4326067118f5e4f67a870"],["F:/Hexo/Myblog/public/2020/03/25/bee20/5.png","ca1c1e4a37634ed6cb392ffe47ad6d6a"],["F:/Hexo/Myblog/public/2020/03/25/bee20/6.png","d2629c6720a9ed2a6cad86fa83dbe99e"],["F:/Hexo/Myblog/public/2020/03/25/bee20/7.png","7f6557cf415a01bdd44e75bff5c1a298"],["F:/Hexo/Myblog/public/2020/03/25/bee20/8.png","7981e1097100f9c62ddac2f9a9c4f5a0"],["F:/Hexo/Myblog/public/2020/03/25/bee20/9.png","6672e55633ff20f0ecf73d86266cdf3d"],["F:/Hexo/Myblog/public/2020/03/25/bee20/index.html","f1fbcf7d405de2706050b0ca10a53a29"],["F:/Hexo/Myblog/public/2020/03/27/bee21/1.jpg","b8c8477919e0b059ccdb44635e2dde02"],["F:/Hexo/Myblog/public/2020/03/27/bee21/1.png","fc9ab4a0c30831da166772728d1f7977"],["F:/Hexo/Myblog/public/2020/03/27/bee21/10.jpg","83acd0430f3c97f11f1acab29177935b"],["F:/Hexo/Myblog/public/2020/03/27/bee21/10.png","82684ec1938e8b12d5d0c8cdaca97d14"],["F:/Hexo/Myblog/public/2020/03/27/bee21/11.png","7732b02e740c8370455f027320ff16f0"],["F:/Hexo/Myblog/public/2020/03/27/bee21/12.jpg","ab337a5b10f4eeff84d3b8ea98fc0827"],["F:/Hexo/Myblog/public/2020/03/27/bee21/12.png","6350fa9c9b6ac9f5c2fc589a30f8ce30"],["F:/Hexo/Myblog/public/2020/03/27/bee21/13.jpg","8e0480711f5c2749a8089835fc7f920e"],["F:/Hexo/Myblog/public/2020/03/27/bee21/13.png","796d9849360e74751e3fde421f3dbde1"],["F:/Hexo/Myblog/public/2020/03/27/bee21/14.jpg","ed69fdd23c16cdf5d64324a96dee6ef4"],["F:/Hexo/Myblog/public/2020/03/27/bee21/14.png","886179a4f3be221557eb512a758aec14"],["F:/Hexo/Myblog/public/2020/03/27/bee21/15.jpg","be83eb1e2579354be5ef158d15a9bf4c"],["F:/Hexo/Myblog/public/2020/03/27/bee21/16.jpg","a6e140b64fc73d322db71aec10b016fb"],["F:/Hexo/Myblog/public/2020/03/27/bee21/18.jpg","e209cc9df3deeab5d967b127b75f09f2"],["F:/Hexo/Myblog/public/2020/03/27/bee21/19.jpg","19624b42c718d6c7a57b38da38d4f47a"],["F:/Hexo/Myblog/public/2020/03/27/bee21/2.jpg","a07e1138f6924dad3dae151443a4cd8a"],["F:/Hexo/Myblog/public/2020/03/27/bee21/2.png","c67b6b8fc4cc14545ab05c3c5bab8346"],["F:/Hexo/Myblog/public/2020/03/27/bee21/3.jpg","4a3a8534550cfcd3e2cc7e7a45cf0000"],["F:/Hexo/Myblog/public/2020/03/27/bee21/3.png","81289a8d5be3d519dd10690cd47dfae9"],["F:/Hexo/Myblog/public/2020/03/27/bee21/4.jpg","1e3e8d15e49396825873dc1560d4a8dc"],["F:/Hexo/Myblog/public/2020/03/27/bee21/4.png","27291748c7137465552da8c409a8ca4c"],["F:/Hexo/Myblog/public/2020/03/27/bee21/5.jpg","8c03c7a860dd561ae2dacc69c8d47d54"],["F:/Hexo/Myblog/public/2020/03/27/bee21/5.png","80e4dfabca6a29b7dc20a8ab59eaf3b6"],["F:/Hexo/Myblog/public/2020/03/27/bee21/6.jpg","f0bca92a082a87971129cdbdd3d26624"],["F:/Hexo/Myblog/public/2020/03/27/bee21/6.png","fe9414cadb0a395f155b290811a2bdb3"],["F:/Hexo/Myblog/public/2020/03/27/bee21/7.jpg","628ed4d30ee9250444dd0b4bf239908d"],["F:/Hexo/Myblog/public/2020/03/27/bee21/7.png","32390d885253bd50515432d9f8b59491"],["F:/Hexo/Myblog/public/2020/03/27/bee21/8.jpg","21f8b44e0a303ab9e81d4aab81c00c73"],["F:/Hexo/Myblog/public/2020/03/27/bee21/8.png","994adeefe61a8d6cddb3ae4deb2cf925"],["F:/Hexo/Myblog/public/2020/03/27/bee21/9.jpg","5af221b99da3efc450a57e1624537b66"],["F:/Hexo/Myblog/public/2020/03/27/bee21/9.png","7e59c7e0a7dcfa2cfb36d6250921e7e6"],["F:/Hexo/Myblog/public/2020/03/27/bee21/index.html","c8ed9d850a02224970085dbeec9ff52d"],["F:/Hexo/Myblog/public/Gallery/index.html","db83c037f5e5af007df5c844a79cefc7"],["F:/Hexo/Myblog/public/about/index.html","bc7beb8119c3c4b0fd4925b699246d57"],["F:/Hexo/Myblog/public/archives/2020/02/index.html","8163410cf942e5145c1ec5216ab5d0f4"],["F:/Hexo/Myblog/public/archives/2020/02/page/2/index.html","c8c73ef56a3513f38649707251926813"],["F:/Hexo/Myblog/public/archives/2020/03/index.html","c23280358abdfeb934c16b78815db42a"],["F:/Hexo/Myblog/public/archives/2020/03/page/2/index.html","c92d5a3ea2be53668ffa3e2c56a2d823"],["F:/Hexo/Myblog/public/archives/2020/index.html","90cb7c6243fa03e0194645900044bb9c"],["F:/Hexo/Myblog/public/archives/2020/page/2/index.html","6d5e3fc643e29c30b1b03caf39d42b80"],["F:/Hexo/Myblog/public/archives/2020/page/3/index.html","cc8f113f25e7ce0d7f401bb039c4f148"],["F:/Hexo/Myblog/public/archives/index.html","95f61eb6bf09d71eafe3089021042c43"],["F:/Hexo/Myblog/public/archives/page/2/index.html","777d4b824943ed3aabddf13c1bea70fb"],["F:/Hexo/Myblog/public/archives/page/3/index.html","345d3b12d232c1462d6e7a34d3ec7309"],["F:/Hexo/Myblog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Hexo/Myblog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Hexo/Myblog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Hexo/Myblog/public/bangumis/index.html","c93c5c26ef9ac07804a73a733095c5a9"],["F:/Hexo/Myblog/public/categories/index.html","50127bf699b724c7d0dc16195b89074d"],["F:/Hexo/Myblog/public/categories/前端博文/index.html","431621052a36453b5a8e1edc01317ffe"],["F:/Hexo/Myblog/public/categories/前端博文/原理/index.html","f53968a48c03d78dcacd07cf46e7e319"],["F:/Hexo/Myblog/public/categories/好文/index.html","5f3e24e27aa8165b405d8f402ae82058"],["F:/Hexo/Myblog/public/categories/好文/page/2/index.html","ce0d38e8640a761477c90e6c317d731a"],["F:/Hexo/Myblog/public/categories/好文/技术/index.html","4483336d4fa846ebd0ed9f649144a337"],["F:/Hexo/Myblog/public/categories/好文/斗破苍穹节选/index.html","c4eab0f542edd5c44abc32dfd1f31171"],["F:/Hexo/Myblog/public/categories/好物/index.html","a391e73cf55f1fb7009cfef5cea9b2d0"],["F:/Hexo/Myblog/public/categories/游戏介绍/SNK/index.html","ac27af49fc5c3b008039c4cc180267cf"],["F:/Hexo/Myblog/public/categories/游戏介绍/index.html","8db501a0e58943c83b0acf4564d8fe32"],["F:/Hexo/Myblog/public/categories/游戏推荐/CAPCOM/index.html","fb4a29cd1d2dd726ed8027bd4f1ee7ec"],["F:/Hexo/Myblog/public/categories/游戏推荐/index.html","bef38edc1ff93f0408ef9c8aa7d92d42"],["F:/Hexo/Myblog/public/categories/童年快映/index.html","f497410a8d38787ecce8730abe5d21e9"],["F:/Hexo/Myblog/public/categories/童年快映/数码宝贝1-大冒险/index.html","365e72837bf415190c0a134f6ec3c71e"],["F:/Hexo/Myblog/public/css/index.css","11a0da6105eae28371e3fb43993e8712"],["F:/Hexo/Myblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Hexo/Myblog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Hexo/Myblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Hexo/Myblog/public/img/alipay.jpg","2cfe150257412cde15268ce8f4321e07"],["F:/Hexo/Myblog/public/img/archive.jpg","343813f306fa1490bb74b3b3d6ec6bf8"],["F:/Hexo/Myblog/public/img/avatar.jpg","1f071014356301c1f1b85063ede0633c"],["F:/Hexo/Myblog/public/img/avatar.png","7aeac1c4084af2844c77469429348a8c"],["F:/Hexo/Myblog/public/img/bee.jpg","6c90eec5f035f85f217a5997fdb8d21b"],["F:/Hexo/Myblog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Hexo/Myblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Hexo/Myblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Hexo/Myblog/public/img/index.jpg","f3e1730861636fc9330d8ed931116829"],["F:/Hexo/Myblog/public/img/loading-bilibili.gif","b590da8e0cb1e141bfaf73c1d317e72c"],["F:/Hexo/Myblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Hexo/Myblog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Hexo/Myblog/public/img/wechat.jpg","44d7a18057ce8455bc817683b0f0bdf5"],["F:/Hexo/Myblog/public/index.html","854b3cf82fe43b02af4faac92c592421"],["F:/Hexo/Myblog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Hexo/Myblog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Hexo/Myblog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Hexo/Myblog/public/link/index.html","45aa7e6e939bf13ad4b5854e144b02d2"],["F:/Hexo/Myblog/public/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["F:/Hexo/Myblog/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/Hexo/Myblog/public/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["F:/Hexo/Myblog/public/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["F:/Hexo/Myblog/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/Hexo/Myblog/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/Hexo/Myblog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/Hexo/Myblog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/Hexo/Myblog/public/movies/index.html","645260ece93c69a57a83a825a5b7d295"],["F:/Hexo/Myblog/public/music/index.html","a19dbcdbbd9bfa5a6072e9dafd7c951c"],["F:/Hexo/Myblog/public/page/2/index.html","32cf7179d67d9620bb2e71d13c9f9a60"],["F:/Hexo/Myblog/public/page/3/index.html","cbe2e1e699124432b6a8f9a81b356f79"],["F:/Hexo/Myblog/public/player/index.html","0502c4f9dc30d0d8668ecf0d6a31bd28"],["F:/Hexo/Myblog/public/tags/2D横版/index.html","5d35f4eb0d19b13d243661fd5f4ef49f"],["F:/Hexo/Myblog/public/tags/A-New-Beginning/index.html","13287684e8260b2770d9e31ec12d3448"],["F:/Hexo/Myblog/public/tags/Blog/index.html","1eccfa449182c4f88fea382981bc3120"],["F:/Hexo/Myblog/public/tags/Butterfly/index.html","cff417dbd1e18f1c2bfc475194214d51"],["F:/Hexo/Myblog/public/tags/CAPCOM/index.html","7c2ef8368be57379df9aa14dc2728238"],["F:/Hexo/Myblog/public/tags/CSS/index.html","d36f9e6bc0e01b7e3ddcf1406f225ce2"],["F:/Hexo/Myblog/public/tags/GitHub/index.html","d15d990feadae29b3f495ce3df424d0f"],["F:/Hexo/Myblog/public/tags/Hexo/index.html","9af2d99253d4e41bc3b9efc4cceb8101"],["F:/Hexo/Myblog/public/tags/JavaScript/index.html","820763f50aa50ff1d2a91784535bdd1f"],["F:/Hexo/Myblog/public/tags/Markdown/index.html","836fe44292bbf7a1b4b21ef76c7739f4"],["F:/Hexo/Myblog/public/tags/SNK/index.html","485ad0714bcb8dee2e42a7358d8d302f"],["F:/Hexo/Myblog/public/tags/Typescript/index.html","5a088125d783810bb49efc9fd5312762"],["F:/Hexo/Myblog/public/tags/Vue/index.html","d0005179fbf9111dd0170601b7f5d45d"],["F:/Hexo/Myblog/public/tags/hello-world/index.html","a3e743fcf2fefbc1df949d0661a7946a"],["F:/Hexo/Myblog/public/tags/index.html","2910e25f015c0e2caab1768fe40deda2"],["F:/Hexo/Myblog/public/tags/jQuery/index.html","9443d18a163b74921c9857e02ee1e484"],["F:/Hexo/Myblog/public/tags/jsDelivr/index.html","50b27ee6b039711e49fb2d3e2e6c0660"],["F:/Hexo/Myblog/public/tags/个人/index.html","235083d22d376261223cf54192678221"],["F:/Hexo/Myblog/public/tags/主题/index.html","4831b29fdb32e251dc76d841d08c5de5"],["F:/Hexo/Myblog/public/tags/云服务器/index.html","e7faf7f599bc9ae118072f2d3c9bf0f5"],["F:/Hexo/Myblog/public/tags/云端/index.html","d00cd468f1c5afb0c4464b50d399636a"],["F:/Hexo/Myblog/public/tags/使用方法/index.html","92f591dd4770d8bff5620f3be89c4467"],["F:/Hexo/Myblog/public/tags/其他篇章/index.html","e9077b6a4a502df6c0a65db6ddcc7c6f"],["F:/Hexo/Myblog/public/tags/前端/index.html","b73edc6b03e8e780451cefe34a975361"],["F:/Hexo/Myblog/public/tags/动画/index.html","19f428e3d867b01431505ec1fc5360c1"],["F:/Hexo/Myblog/public/tags/博客/index.html","175a7c8a514c40bebe65b21a2a8393b2"],["F:/Hexo/Myblog/public/tags/原理/index.html","1cbd78c369df73c63a2a28f34118f3c0"],["F:/Hexo/Myblog/public/tags/双帝之战/index.html","96b7eb926c49eb2b5a1d288c110e6497"],["F:/Hexo/Myblog/public/tags/变量提升/index.html","79fec4dbca8883389e08992403bcd889"],["F:/Hexo/Myblog/public/tags/大冒险/index.html","8a7bc290438c2252c324e4db249c187f"],["F:/Hexo/Myblog/public/tags/大决战/index.html","b412bc9ce5a0918e8215917cb92c03b3"],["F:/Hexo/Myblog/public/tags/天蚕土豆/index.html","26d941b17eae844fe5775e1a158f7f00"],["F:/Hexo/Myblog/public/tags/实用/index.html","263fae175a92b95e713674bd2e391ebc"],["F:/Hexo/Myblog/public/tags/射击/index.html","a1b00e97f9033075738b79f330a135a9"],["F:/Hexo/Myblog/public/tags/小说片段/index.html","e31d82ac92e10e7ac1178d262ae87bea"],["F:/Hexo/Myblog/public/tags/层叠样式表/index.html","4ed3fa91733b24992e28ce56c41d1814"],["F:/Hexo/Myblog/public/tags/异步请求/index.html","c89ca9d5dd619ade1ae134992530fa58"],["F:/Hexo/Myblog/public/tags/我的/index.html","aed64cc89cad218ac7f9beecf56b8db5"],["F:/Hexo/Myblog/public/tags/技术/index.html","2507e7dbc11a98845f6f6e16c1f0ab03"],["F:/Hexo/Myblog/public/tags/技术相关/index.html","a816e8f576c9cfc0fad43931a9f03939"],["F:/Hexo/Myblog/public/tags/插件/index.html","42abfbe00449f963c52003bbc8a9e79c"],["F:/Hexo/Myblog/public/tags/数码宝贝/index.html","dc31260e33ce72e098d1ac3d584b8b13"],["F:/Hexo/Myblog/public/tags/模版/index.html","b44076663360deebe357d400c68de5c2"],["F:/Hexo/Myblog/public/tags/游戏/index.html","4df994ef4c9e589c1446e3c4c18c4e05"],["F:/Hexo/Myblog/public/tags/爽文/index.html","b80d05127ff2ac87beb7c749b121352c"],["F:/Hexo/Myblog/public/tags/童年/index.html","091936c4a096adbc377d2e443790f5f7"],["F:/Hexo/Myblog/public/tags/精彩/index.html","5ddd444fb25eb8be4de9808d379cb750"],["F:/Hexo/Myblog/public/tags/街机/index.html","1da77cc68f71d295631bd11be575d3a9"],["F:/Hexo/Myblog/public/tags/超燃/index.html","f71191d0990310f790ccb90772febe7d"],["F:/Hexo/Myblog/public/tags/部署/index.html","47eca5d36fb8b59a5c4902bc3915df4b"],["F:/Hexo/Myblog/public/tags/配置/index.html","be4b364acb68af4e8f4479790d552f6b"],["F:/Hexo/Myblog/public/tags/锦集/index.html","2d1c445b5c27541bbc0be4a52c571a33"],["F:/Hexo/Myblog/public/tags/面试题/index.html","9ec1b040d51b22bfd51c10969822e9ec"],["F:/Hexo/Myblog/public/tags/鬼泣/index.html","c071262124dafb1a0a129c4d1c6e2254"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







