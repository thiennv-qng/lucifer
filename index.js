var senhub;(()=>{"use strict";var e={57253:(e,o,r)=>{var t={"./bootstrap":()=>Promise.all([r.e("vendors-node_modules_copy-to-clipboard_index_js-node_modules_moment_moment_js-node_modules_ba-e68179"),r.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140"),r.e("vendors-node_modules_ant-design_colors_dist_index_esm_js-node_modules_ctrl_tinycolor_dist_mod-028a7a"),r.e("vendors-node_modules_project-serum_anchor_dist_browser_index_js-node_modules_project-serum_an-d68b96"),r.e("webpack_sharing_consume_default_react_react"),r.e("webpack_sharing_consume_default_react-dom_react-dom"),r.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-e4c479"),r.e("webpack_sharing_consume_default_sentre_senhub_sentre_senhub"),r.e("node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-src_bootstrap_app_tsx")]).then((()=>()=>r(33522)))},_=(e,o)=>(r.R=o,o=r.o(t,e)?t[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,o),n=(e,o)=>{if(r.S){var t="default",_=r.S[t];if(_&&_!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[t]=e,r.I(t,o)}};r.d(o,{get:()=>_,init:()=>n})}},o={};function r(t){var _=o[t];if(void 0!==_)return _.exports;var n=o[t]={id:t,loaded:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=e,r.c=o,r.amdO={},r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},(()=>{var e,o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(t,_){if(1&_&&(t=this(t)),8&_)return t;if("object"===typeof t&&t){if(4&_&&t.__esModule)return t;if(16&_&&"function"===typeof t.then)return t}var n=Object.create(null);r.r(n);var s={};e=e||[null,o({}),o([]),o(o)];for(var d=2&_&&t;"object"==typeof d&&!~e.indexOf(d);d=o(d))Object.getOwnPropertyNames(d).forEach((e=>s[e]=()=>t[e]));return s.default=()=>t,r.d(n,s),n}})(),r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((o,t)=>(r.f[t](e,o),o)),[])),r.u=e=>"static/js/"+e+"."+{"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js":"e0430f67",node_modules_babel_runtime_helpers_esm_defineProperty_js:"632a67e4","vendors-node_modules_copy-to-clipboard_index_js-node_modules_moment_moment_js-node_modules_ba-e68179":"b2b850fd","vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140":"57599aba",webpack_sharing_consume_default_react_react:"dbd39d09","webpack_sharing_consume_default_react-dom_react-dom":"98075b55","webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-e4c479":"05c3d3b1","node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-node_modules_react_jsx-r-7486bc":"4322a156","vendors-node_modules_ant-design_colors_dist_index_esm_js-node_modules_ctrl_tinycolor_dist_mod-028a7a":"9ec622e3","vendors-node_modules_antd_es_index_js":"c8f229c4","vendors-node_modules_react-dom_index_js":"7eb683cd","vendors-node_modules_react-redux_es_index_js":"31809b2f","vendors-node_modules_react-router-dom_esm_react-router-dom_js":"ae40fb1f","node_modules_prop-types_index_js":"63e0fffc",node_modules_react_index_js:"fa366fb9","vendors-node_modules_project-serum_anchor_dist_browser_index_js-node_modules_project-serum_an-d68b96":"a5cf3dff",webpack_sharing_consume_default_sentre_senhub_sentre_senhub:"a95b2f74","node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-src_bootstrap_app_tsx":"254f8337",node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive:"8f088a8b"}[e]+".chunk.js",r.miniCssF=e=>"static/css/"+e+"."+{"vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140":"0e7e0a86","node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-src_bootstrap_app_tsx":"43b74b21"}[e]+".chunk.css",r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="senhub:";r.l=(t,_,n,s)=>{if(e[t])e[t].push(_);else{var d,a;if(void 0!==n)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var l=u[i];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==o+n){d=l;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.setAttribute("data-webpack",o+n),d.src=t),e[t]=[_];var c=(o,r)=>{d.onerror=d.onload=null,clearTimeout(m);var _=e[t];if(delete e[t],d.parentNode&&d.parentNode.removeChild(d),_&&_.forEach((e=>e(r))),o)return o(r)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=c.bind(null,d.onerror),d.onload=c.bind(null,d.onload),a&&document.head.appendChild(d)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{r.S={};var e={},o={};r.I=(t,_)=>{_||(_=[]);var n=o[t];if(n||(n=o[t]={}),!(_.indexOf(n)>=0)){if(_.push(n),e[t])return e[t];r.o(r.S,t)||(r.S[t]={});var s=r.S[t],d="senhub",a=(e,o,r,t)=>{var _=s[e]=s[e]||{},n=_[o];(!n||!n.loaded&&(!t!=!n.eager?t:d>n.from))&&(_[o]={get:r,from:d,eager:!!t})},u=[];if("default"===t)a("@reduxjs/toolkit","1.9.1",(()=>Promise.all([r.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js"),r.e("node_modules_babel_runtime_helpers_esm_defineProperty_js")]).then((()=>()=>r(57853))))),a("@sentre/senhub","4.3.2",(()=>Promise.all([r.e("vendors-node_modules_copy-to-clipboard_index_js-node_modules_moment_moment_js-node_modules_ba-e68179"),r.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140"),r.e("webpack_sharing_consume_default_react_react"),r.e("webpack_sharing_consume_default_react-dom_react-dom"),r.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-e4c479"),r.e("node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-node_modules_react_jsx-r-7486bc")]).then((()=>()=>r(19020))))),a("antd","4.23.1",(()=>Promise.all([r.e("vendors-node_modules_copy-to-clipboard_index_js-node_modules_moment_moment_js-node_modules_ba-e68179"),r.e("vendors-node_modules_ant-design_colors_dist_index_esm_js-node_modules_ctrl_tinycolor_dist_mod-028a7a"),r.e("vendors-node_modules_antd_es_index_js"),r.e("webpack_sharing_consume_default_react_react"),r.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>r(82084))))),a("react-dom","17.0.2",(()=>Promise.all([r.e("vendors-node_modules_react-dom_index_js"),r.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>r(81108))))),a("react-redux","7.2.9",(()=>Promise.all([r.e("vendors-node_modules_react-redux_es_index_js"),r.e("webpack_sharing_consume_default_react_react"),r.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>r(59771))))),a("react-router-dom","5.3.4",(()=>Promise.all([r.e("vendors-node_modules_react-router-dom_esm_react-router-dom_js"),r.e("webpack_sharing_consume_default_react_react"),r.e("node_modules_prop-types_index_js")]).then((()=>()=>r(34156))))),a("react","17.0.2",(()=>r.e("node_modules_react_index_js").then((()=>()=>r(7276)))));return u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var o=r.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var t=o.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=e=>{var o=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),t=r[1]?o(r[1]):[];return r[2]&&(t.length++,t.push.apply(t,o(r[2]))),r[3]&&(t.push([]),t.push.apply(t,o(r[3]))),t},o=(o,r)=>{o=e(o),r=e(r);for(var t=0;;){if(t>=o.length)return t<r.length&&"u"!=(typeof r[t])[0];var _=o[t],n=(typeof _)[0];if(t>=r.length)return"u"==n;var s=r[t],d=(typeof s)[0];if(n!=d)return"o"==n&&"n"==d||"s"==d||"u"==n;if("o"!=n&&"u"!=n&&_!=s)return _<s;t++}},t=e=>{var o=e[0],r="";if(1===e.length)return"*";if(o+.5){r+=0==o?">=":-1==o?"<":1==o?"^":2==o?"~":o>0?"=":"!=";for(var _=1,n=1;n<e.length;n++)_--,r+="u"==(typeof(d=e[n]))[0]?"-":(_>0?".":"")+(_=2,d);return r}var s=[];for(n=1;n<e.length;n++){var d=e[n];s.push(0===d?"not("+a()+")":1===d?"("+a()+" || "+a()+")":2===d?s.pop()+" "+s.pop():t(d))}return a();function a(){return s.pop().replace(/^\((.+)\)$/,"$1")}},_=(o,r)=>{if(0 in o){r=e(r);var t=o[0],n=t<0;n&&(t=-t-1);for(var s=0,d=1,a=!0;;d++,s++){var u,i,l=d<o.length?(typeof o[d])[0]:"";if(s>=r.length||"o"==(i=(typeof(u=r[s]))[0]))return!a||("u"==l?d>t&&!n:""==l!=n);if("u"==i){if(!a||"u"!=l)return!1}else if(a)if(l==i)if(d<=t){if(u!=o[d])return!1}else{if(n?u>o[d]:u<o[d])return!1;u!=o[d]&&(a=!1)}else if("s"!=l&&"n"!=l){if(n||d<=t)return!1;a=!1,d--}else{if(d<=t||i<l!=n)return!1;a=!1}else"s"!=l&&"n"!=l&&(a=!1,d--)}}var c=[],m=c.pop.bind(c);for(s=1;s<o.length;s++){var p=o[s];c.push(1==p?m()|m():2==p?m()&m():p?_(p,r):!m())}return!!m()},n=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},s=(e,o,r,_)=>"Unsatisfied version "+r+" from "+(r&&e[o][r].from)+" of shared singleton module "+o+" (required "+t(_)+")",d=(e,o,r,t)=>{var d=n(e,r);return _(t,d)||"undefined"!==typeof console&&console.warn&&console.warn(s(e,r,d,t)),a(e[r][d])},a=e=>(e.loaded=1,e.get()),u=e=>function(o,t,_,n){var s=r.I(o);return s&&s.then?s.then(e.bind(e,o,r.S[o],t,_,n)):e(o,r.S[o],t,_,n)},i=u(((e,o,t,_,n)=>o&&r.o(o,t)?d(o,0,t,_):n())),l={},c={92950:()=>i("default","react",[1,17,0,2],(()=>r.e("node_modules_react_index_js").then((()=>()=>r(7276))))),12181:()=>i("default","react-dom",[1,17,0,2],(()=>r.e("vendors-node_modules_react-dom_index_js").then((()=>()=>r(81108))))),19289:()=>i("default","@reduxjs/toolkit",[1,1,6,2],(()=>r.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>r(57853))))),32671:()=>i("default","antd",[1,4,23,0],(()=>Promise.all([r.e("vendors-node_modules_ant-design_colors_dist_index_esm_js-node_modules_ctrl_tinycolor_dist_mod-028a7a"),r.e("vendors-node_modules_antd_es_index_js")]).then((()=>()=>r(82084))))),55754:()=>i("default","react-redux",[1,7,2,5],(()=>r.e("vendors-node_modules_react-redux_es_index_js").then((()=>()=>r(59771))))),45055:()=>i("default","react-router-dom",[1,5,3,0],(()=>r.e("vendors-node_modules_react-router-dom_esm_react-router-dom_js").then((()=>()=>r(34156))))),49471:()=>i("default","@sentre/senhub",[1,4],(()=>Promise.all([r.e("vendors-node_modules_copy-to-clipboard_index_js-node_modules_moment_moment_js-node_modules_ba-e68179"),r.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140"),r.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-e4c479"),r.e("node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive")]).then((()=>()=>r(19020)))))},m={webpack_sharing_consume_default_react_react:[92950],"webpack_sharing_consume_default_react-dom_react-dom":[12181],"webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-e4c479":[19289,32671,55754,45055],webpack_sharing_consume_default_sentre_senhub_sentre_senhub:[49471]};r.f.consumes=(e,o)=>{r.o(m,e)&&m[e].forEach((e=>{if(r.o(l,e))return o.push(l[e]);var t=o=>{l[e]=0,r.m[e]=t=>{delete r.c[e],t.exports=o()}},_=o=>{delete l[e],r.m[e]=t=>{throw delete r.c[e],o}};try{var n=c[e]();n.then?o.push(l[e]=n.then(t).catch(_)):t(n)}catch(s){_(s)}}))}})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((o,t)=>{var _=r.miniCssF(e),n=r.p+_;if(((e,o)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var _=(s=r[t]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(_===e||_===o))return s}var n=document.getElementsByTagName("style");for(t=0;t<n.length;t++){var s;if((_=(s=n[t]).getAttribute("data-href"))===e||_===o)return s}})(_,n))return o();((e,o,r,t,_)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=r=>{if(n.onerror=n.onload=null,"load"===r.type)t();else{var s=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.href||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=s,a.request=d,n.parentNode.removeChild(n),_(a)}},n.href=o,r?r.parentNode.insertBefore(n,r.nextSibling):document.head.appendChild(n)})(e,n,null,o,t)})),o={senhub:0};r.f.miniCss=(r,t)=>{o[r]?t.push(o[r]):0!==o[r]&&{"vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-97b140":1,"node_modules_sentre_senhub_dist_components_pageLoader_lazy_recursive-src_bootstrap_app_tsx":1}[r]&&t.push(o[r]=e(r).then((()=>{o[r]=0}),(e=>{throw delete o[r],e})))}}})(),(()=>{var e={senhub:0};r.f.j=(o,t)=>{var _=r.o(e,o)?e[o]:void 0;if(0!==_)if(_)t.push(_[2]);else if(/^webpack_sharing_consume_default_(re(act(\-dom_react\-dom|_react)|duxjs_toolkit_reduxjs_toolkit\-webpack_sharing_consume_defau\-e4c479)|sentre_senhub_sentre_senhub)$/.test(o))e[o]=0;else{var n=new Promise(((r,t)=>_=e[o]=[r,t]));t.push(_[2]=n);var s=r.p+r.u(o),d=new Error;r.l(s,(t=>{if(r.o(e,o)&&(0!==(_=e[o])&&(e[o]=void 0),_)){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+o+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,_[1](d)}}),"chunk-"+o,o)}};var o=(o,t)=>{var _,n,[s,d,a]=t,u=0;if(s.some((o=>0!==e[o]))){for(_ in d)r.o(d,_)&&(r.m[_]=d[_]);if(a)a(r)}for(o&&o(t);u<s.length;u++)n=s[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var t=r(57253);senhub=t})();
//# sourceMappingURL=index.js.map