!function(t){var n={};function e(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return t[r].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var c in t)e.d(r,c,function(n){return t[n]}.bind(null,c));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=155)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(69))},function(t,n,e){var r=e(0),c=e(30),o=e(7),i=e(31),a=e(32),u=e(54),s=c("wks"),l=r.Symbol,p=u?l:l&&l.withoutSetter||i;t.exports=function(t){return o(s,t)||(a&&o(l,t)?s[t]=l[t]:s[t]=p("Symbol."+t)),s[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";e.d(n,"f",(function(){return r})),e.d(n,"e",(function(){return c})),e.d(n,"g",(function(){return o})),e.d(n,"i",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return u})),e.d(n,"b",(function(){return s})),e.d(n,"j",(function(){return l})),e.d(n,"h",(function(){return p})),e.d(n,"a",(function(){return f}));e(38),e(77);var r=document.querySelector(".loading"),c=document.querySelector(".error"),o=document.querySelector(".nfound"),i=document.querySelector(".result"),a=document.querySelector(".result__cards"),u=document.querySelector(".swiper-wrapper"),s=document.querySelector(".analytics__container"),l=document.forms.search,p=document.querySelector(".result__button"),f=3},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(0),c=e(20).f,o=e(10),i=e(12),a=e(29),u=e(56),s=e(48);t.exports=function(t,n){var e,l,p,f,_,d=t.target,y=t.global,h=t.stat;if(e=y?r:h?r[d]||a(d,{}):(r[d]||{}).prototype)for(l in n){if(f=n[l],p=t.noTargetGet?(_=c(e,l))&&_.value:e[l],!s(y?l:d+(h?".":"#")+l,t.forced)&&void 0!==p){if(typeof f==typeof p)continue;u(f,p)}(t.sham||p&&p.sham)&&o(f,"sham",!0),i(e,l,f,t)}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(8),c=e(45),o=e(4),i=e(19),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(o(t),n=i(n,!0),o(e),c)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(8),c=e(9),o=e(17);t.exports=r?function(t,n,e){return c.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(0),c=e(10),o=e(7),i=e(29),a=e(33),u=e(21),s=u.get,l=u.enforce,p=String(String).split("String");(t.exports=function(t,n,e,a){var u=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||o(e,"name")||c(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(u?!f&&t[n]&&(s=!0):delete t[n],s?t[n]=e:c(t,n,e)):s?t[n]=e:i(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,n,e){var r=e(46),c=e(14);t.exports=function(t){return r(c(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(23),c=Math.min;t.exports=function(t){return t>0?c(r(t),9007199254740991):0}},function(t,n,e){var r=e(57),c=e(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(r[t])||o(c[t]):r[t]&&r[t][n]||c[t]&&c[t][n]}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(14);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,c;if(n&&"function"==typeof(e=t.toString)&&!r(c=e.call(t)))return c;if("function"==typeof(e=t.valueOf)&&!r(c=e.call(t)))return c;if(!n&&"function"==typeof(e=t.toString)&&!r(c=e.call(t)))return c;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(8),c=e(55),o=e(17),i=e(13),a=e(19),u=e(7),s=e(45),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=i(t),n=a(n,!0),s)try{return l(t,n)}catch(t){}if(u(t,n))return o(!c.f.call(t,n),t[n])}},function(t,n,e){var r,c,o,i=e(70),a=e(0),u=e(5),s=e(10),l=e(7),p=e(34),f=e(22),_=a.WeakMap;if(i){var d=new _,y=d.get,h=d.has,v=d.set;r=function(t,n){return v.call(d,t,n),n},c=function(t){return y.call(d,t)||{}},o=function(t){return h.call(d,t)}}else{var g=p("state");f[g]=!0,r=function(t,n){return s(t,g,n),n},c=function(t){return l(t,g)?t[g]:{}},o=function(t){return l(t,g)}}t.exports={set:r,get:c,has:o,enforce:function(t){return o(t)?c(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=c(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){"use strict";var r,c,o=e(50),i=e(67),a=RegExp.prototype.exec,u=String.prototype.replace,s=a,l=(r=/a/,c=/b*/g,a.call(r,"a"),a.call(c,"a"),0!==r.lastIndex||0!==c.lastIndex),p=i.UNSUPPORTED_Y||i.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(l||f||p)&&(s=function(t){var n,e,r,c,i=this,s=p&&i.sticky,_=o.call(i),d=i.source,y=0,h=t;return s&&(-1===(_=_.replace("y","")).indexOf("g")&&(_+="g"),h=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(d="(?: "+d+")",h=" "+h,y++),e=new RegExp("^(?:"+d+")",_)),f&&(e=new RegExp("^"+d+"$(?!\\s)",_)),l&&(n=i.lastIndex),r=a.call(s?e:i,h),s?r?(r.input=r.input.slice(y),r[0]=r[0].slice(y),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:l&&r&&(i.lastIndex=i.global?r.index+r[0].length:n),f&&r&&r.length>1&&u.call(r[0],e,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),t.exports=s},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(2),c=e(1),o=e(37),i=c("species");t.exports=function(t){return o>=51||!r((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},,function(t,n){t.exports=!1},function(t,n,e){var r=e(0),c=e(10);t.exports=function(t,n){try{c(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(28),c=e(44);(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(44),c=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return c.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(30),c=e(31),o=r("keys");t.exports=function(t){return o[t]||(o[t]=c(t))}},function(t,n,e){var r=e(58),c=e(40).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,c)}},,function(t,n,e){var r,c,o=e(0),i=e(63),a=o.process,u=a&&a.versions,s=u&&u.v8;s?c=(r=s.split("."))[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(c=r[1]),t.exports=c&&+c},function(t,n,e){"use strict";var r=e(6),c=e(24);r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},function(t,n,e){var r=e(0),c=e(5),o=r.document,i=c(o)&&c(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){"use strict";e(38);var r=e(12),c=e(2),o=e(1),i=e(24),a=e(10),u=o("species"),s=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),p=o("replace"),f=!!/./[p]&&""===/./[p]("a","$0"),_=!c((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,p){var d=o(t),y=!c((function(){var n={};return n[d]=function(){return 7},7!=""[t](n)})),h=y&&!c((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[u]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return n=!0,null},e[d](""),!n}));if(!y||!h||"replace"===t&&(!s||!l||f)||"split"===t&&!_){var v=/./[d],g=e(d,""[t],(function(t,n,e,r,c){return n.exec===i?y&&!c?{done:!0,value:v.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=g[0],m=g[1];r(String.prototype,t,x),r(RegExp.prototype,d,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}p&&a(RegExp.prototype[d],"sham",!0)}},function(t,n,e){var r=e(11),c=e(24);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,n)}},,function(t,n,e){var r=e(0),c=e(29),o=r["__core-js_shared__"]||c("__core-js_shared__",{});t.exports=o},function(t,n,e){var r=e(8),c=e(2),o=e(39);t.exports=!r&&!c((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),c=e(11),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?o.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(23),c=Math.max,o=Math.min;t.exports=function(t,n){var e=r(t);return e<0?c(e+n,0):o(e,n)}},function(t,n,e){var r=e(2),c=/#|\.prototype\./,o=function(t,n){var e=a[i(t)];return e==s||e!=u&&("function"==typeof n?r(n):!!n)},i=o.normalize=function(t){return String(t).replace(c,".").toLowerCase()},a=o.data={},u=o.NATIVE="N",s=o.POLYFILL="P";t.exports=o},,function(t,n,e){"use strict";var r=e(4);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(19),c=e(9),o=e(17);t.exports=function(t,n,e){var i=r(n);i in t?c.f(t,i,o(0,e)):t[i]=e}},function(t,n,e){var r=e(5),c=e(25),o=e(1)("species");t.exports=function(t,n){var e;return c(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!c(e.prototype)?r(e)&&null===(e=e[o])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},,function(t,n,e){var r=e(32);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,o=c&&!r.call({1:2},1);n.f=o?function(t){var n=c(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(7),c=e(72),o=e(20),i=e(9);t.exports=function(t,n){for(var e=c(n),a=i.f,u=o.f,s=0;s<e.length;s++){var l=e[s];r(t,l)||a(t,l,u(n,l))}}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(7),c=e(13),o=e(59).indexOf,i=e(22);t.exports=function(t,n){var e,a=c(t),u=0,s=[];for(e in a)!r(i,e)&&r(a,e)&&s.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~o(s,e)||s.push(e));return s}},function(t,n,e){var r=e(13),c=e(15),o=e(47),i=function(t){return function(n,e,i){var a,u=r(n),s=c(u.length),l=o(i,s);if(t&&e!=e){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===e)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n){n.f=Object.getOwnPropertySymbols},,,function(t,n,e){var r=e(16);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(6),c=e(2),o=e(25),i=e(5),a=e(18),u=e(15),s=e(51),l=e(52),p=e(26),f=e(1),_=e(37),d=f("isConcatSpreadable"),y=_>=51||!c((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),h=p("concat"),v=function(t){if(!i(t))return!1;var n=t[d];return void 0!==n?!!n:o(t)};r({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var n,e,r,c,o,i=a(this),p=l(i,0),f=0;for(n=-1,r=arguments.length;n<r;n++)if(o=-1===n?i:arguments[n],v(o)){if(f+(c=u(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<c;e++,f++)e in o&&s(p,f,o[e])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(p,f++,o)}return p.length=f,p}})},,,function(t,n,e){"use strict";var r=e(2);function c(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},,function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),c=e(33),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(c(o))},,function(t,n,e){var r=e(16),c=e(35),o=e(60),i=e(4);t.exports=r("Reflect","ownKeys")||function(t){var n=c.f(i(t)),e=o.f;return e?n.concat(e(t)):n}},,,,,function(t,n,e){"use strict";var r=e(41),c=e(4),o=e(14),i=e(78),a=e(42);r("search",1,(function(t,n,e){return[function(n){var e=o(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var o=c(t),u=String(this),s=o.lastIndex;i(s,0)||(o.lastIndex=0);var l=a(o,u);return i(o.lastIndex,s)||(o.lastIndex=s),null===l?-1:l.index}]}))},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var r=e(3);e(64);function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=new(function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.analyticsContainer=n}var n,e,r;return n=t,(e=[{key:"renderGraphic",value:function(t,n,e,r,c){this.analyticsContainer.insertAdjacentHTML("beforeend",this.createGraphic(t,n,e,r,c))}},{key:"createGraphic",value:function(t,n,e,r,c){return'\n      <div class="analytics">\n        <div class="analytics__wrapper">\n          <h2 class="analytics__caption analytics__text-black">\n            Вы спросили: "'.concat(t,'"\n          </h2>\n          <ul class="analytics__list">\n            <li class="analytics__item analytics__text-black">\n            Новостей за неделю:\n              <span class="analytics__count analytics__text-black"\n              >').concat(n,'</span>\n            </li>\n            <li class="analytics__item analytics__text-black">\n            Упоминаний в заголовках:\n            <span class="analytics__count analytics__text-black"\n              >').concat(e,'</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class="graphic graphic__background-grey">\n        <div class="graphic__wrapper">\n          <h3 class="graphic__caption graphic__text-black">\n            Аналитика по дням\n          </h3>\n          <div class="graphic__block">\n            <div class="graphic__block_head">\n              <p class="graphic__block_date graphic__text-grey">\n                Дата (').concat(r,')\n              </p>\n              <p class="graphic__block_count graphic__text-grey">\n                Кол-во упоминаний\n              </p>\n            </div>\n            <div class="graphic__row">\n              <p class="row__cell graphic__text-grey">0</p>\n              <p class="row__cell graphic__text-grey">25</p>\n              <p class="row__cell graphic__text-grey">50</p>\n              <p class="row__cell graphic__text-grey">75</p>\n              <p class="row__cell graphic__text-grey">100</p>\n            </div>\n            <div class="graphic__columns">\n              <div class="graphic__columns_y">\n                <p class="graphic__column_y graphic__text-black">').concat(c[0].dayNum,", ").concat(c[0].dayName,'</p>\n                <p class="graphic__column_y graphic__text-black">').concat(c[1].dayNum,", ").concat(c[1].dayName,'</p>\n                <p class="graphic__column_y graphic__text-black">').concat(c[2].dayNum,", ").concat(c[2].dayName,'</p>\n                <p class="graphic__column_y graphic__text-black">').concat(c[3].dayNum,", ").concat(c[3].dayName,'</p>\n                <p class="graphic__column_y graphic__text-black">').concat(c[4].dayNum,", ").concat(c[4].dayName,'</p>\n                <p class="graphic__column_y graphic__text-black">').concat(c[5].dayNum,", ").concat(c[5].dayName,'</p>\n                <p class="graphic__column_y graphic__text-black">').concat(c[6].dayNum,", ").concat(c[6].dayName,'</p>\n              </div>\n              <div class="graphic__columns_x">\n                <p class="graphic__column_x graphic__text-white" style="width: ').concat(c[0].widthPercent,'%">\n                  ').concat(c[0].newsCount,'\n                </p>\n                <p class="graphic__column_x graphic__text-white" style="width: ').concat(c[1].widthPercent,'%">\n                  ').concat(c[1].newsCount,'\n                </p>\n                <p class="graphic__column_x graphic__text-white" style="width: ').concat(c[2].widthPercent,'%">\n                  ').concat(c[2].newsCount,'\n                </p>\n                <p class="graphic__column_x graphic__text-white" style="width: ').concat(c[3].widthPercent,'%">\n                  ').concat(c[3].newsCount,'\n                </p>\n                <p class="graphic__column_x graphic__text-white" style="width: ').concat(c[4].widthPercent,'%">\n                  ').concat(c[4].newsCount,'\n                </p>\n                <p class="graphic__column_x graphic__text-white" style="width: ').concat(c[5].widthPercent,'%">\n                  ').concat(c[5].newsCount,'\n                </p>\n                <p class="graphic__column_x graphic__text-white" style="width: ').concat(c[6].widthPercent,'%">\n                  ').concat(c[6].newsCount,'\n                </p>\n              </div>\n            </div>\n            <div class="graphic__row">\n              <p class="row__cell graphic__text-grey">0</p>\n              <p class="row__cell graphic__text-grey">25</p>\n              <p class="row__cell graphic__text-grey">50</p>\n              <p class="row__cell graphic__text-grey">75</p>\n              <p class="row__cell graphic__text-grey">100</p>\n            </div>\n          </div>\n        </div>\n      </div>')}}])&&c(n.prototype,e),r&&c(n,r),t}())(r.b),i=JSON.parse(localStorage.getItem("newsAnalyticsObject")),a=i.keyWord,u=i.totalResults,s=i.amountKeyWord,l=i.presentMonth,p=i.presentWeek;o.renderGraphic(a,u,s,l,p)}]);