(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],b=0,l=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/symbol-dns/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0f07":function(e,t,n){"use strict";n("8d77")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},2:function(e,t){},"25ae":function(e,t,n){"use strict";n("602a")},"2bce":function(e,t,n){},3:function(e,t){},4:function(e,t){},4706:function(e,t,n){},"48d8":function(e,t,n){"use strict";n("87d05")},5:function(e,t){},6:function(e,t){},"602a":function(e,t,n){},6410:function(e,t,n){"use strict";n("4706")},7:function(e,t){},8:function(e,t){},"87d05":function(e,t,n){},"8d77":function(e,t,n){},9:function(e,t){},b383:function(e,t,n){},cbba:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");Object(r["t"])("data-v-1bf3aa10");var a={class:"container main"};function c(e,t,n,c,o,i){var u=Object(r["x"])("Header"),s=Object(r["x"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(u),Object(r["e"])("div",a,[Object(r["g"])(s)])],64)}Object(r["q"])();var o=n("d4ec"),i=n("262e"),u=n("2caf"),s=n("9ab4"),d=n("ce1f");Object(r["t"])("data-v-39c9b7f4");var b=Object(r["e"])("div",{class:"title"},"Symbol-DNS",-1);function l(e,t,n,a,c,o){var i=Object(r["x"])("SearchDomainInput");return Object(r["p"])(),Object(r["d"])("header",null,[b,Object(r["g"])(i)])}Object(r["q"])(),Object(r["t"])("data-v-5dc78d8e");var p={class:"search-domain-box"},f=["disabled"];function O(e,t,n,a,c,o){return Object(r["p"])(),Object(r["d"])("div",p,[Object(r["D"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.domainInput=t}),placeholder:"Enter a decentralized domain name",onKeyup:t[1]||(t[1]=Object(r["E"])((function(){return e.go&&e.go.apply(e,arguments)}),["enter"])),disabled:e.isRequest},null,40,f),[[r["B"],e.domainInput]])])}Object(r["q"])();var j=n("1da1"),v=n("bee2"),h=(n("96cf"),n("ac1f"),n("1276"),n("83ff")),m=n("b85c"),y=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("5319"),function(){function e(){Object(o["a"])(this,e)}return Object(v["a"])(e,null,[{key:"getRandomIndex",value:function(e){return Math.floor(Math.random()*e.length)}}]),e}());y.dnsRecordParser=function(e){var t,n=new Map,r=e.split("|"),a=Object(m["a"])(r);try{for(a.s();!(t=a.n()).done;){var c=t.value,o=JSON.parse("{".concat(c,"}")),i=o.v.replace("sia://","https://siasky.net/").replace("ipfs://","https://ipfs.io/ipfs/");n.set(o.n,i)}}catch(u){a.e(u)}finally{a.f()}return n};var g=function e(){Object(o["a"])(this,e)};g.getURL=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new h["NamespaceId"](t[0]),e.next=3,x.getMetadata(n);case 3:if(r=e.sent,0!==r.length){e.next=6;break}return e.abrupt("return",void 0);case 6:if(a=y.dnsRecordParser(r[0].metadataEntry.value),2!==t.length){e.next=11;break}if(c=t[1],!a.has(c)){e.next=11;break}return e.abrupt("return",a.get(c));case 11:if(1!==t.length){e.next=14;break}if(!a.has("@")){e.next=14;break}return e.abrupt("return",a.get("@"));case 14:return e.abrupt("return",void 0);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n("841c");var w={endpoints:["https://sym-test-01.opening-line.jp:3001","https://sym-test-02.opening-line.jp:3001","https://stg.harvesting-sweet-potatoes.club:3001"],generationHash:"3B5E1FA6445653C971A50687E75E6D09FB30481055E3990C84B25E9222DC1155",metadataKey:"D9766DB9BFCFF27C",type:h["NetworkType"].TEST_NET},x=function e(){Object(o["a"])(this,e)};x.getRepositoryFactoryHttp=function(){var e=y.getRandomIndex(w.endpoints);return new h["RepositoryFactoryHttp"](w.endpoints[e],{networkType:w.type,generationHash:w.generationHash})},x.getMetadata=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:w.metadataKey,e.next=3,x.getRepositoryFactoryHttp().createMetadataRepository().search({metadataType:h["MetadataType"].Namespace,targetId:t,scopedMetadataKey:n}).toPromise();case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var D=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.domainInput="",e.isRequest=!1,e}return Object(v["a"])(n,[{key:"go",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.domainInput){e.next=2;break}return e.abrupt("return");case 2:if(this.isRequest=!0,t=this.domainInput.toLowerCase().split(".").reverse(),!(t.length>0&&t.length<3)){e.next=12;break}return e.next=7,g.getURL(t);case 7:if(n=e.sent,!n){e.next=12;break}return window.location.href=n,this.isRequest=!1,e.abrupt("return");case 12:this.$router.push("/error"),this.isRequest=!1;case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(d["b"]);D=Object(s["b"])([Object(d["a"])({props:{}})],D);var k=D;n("d864");k.render=O,k.__scopeId="data-v-5dc78d8e";var R=k,T=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(d["b"]);T=Object(s["b"])([Object(d["a"])({components:{SearchDomainInput:R}})],T);var S=T;n("48d8");S.render=l,S.__scopeId="data-v-39c9b7f4";var _=S,I=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(d["b"]);I=Object(s["b"])([Object(d["a"])({components:{Header:_}})],I);var L=I;n("6410");L.render=c,L.__scopeId="data-v-1bf3aa10";var M=L,E=n("6c02");Object(r["t"])("data-v-0485e7cc");var P=Object(r["e"])("div",{class:"card"},[Object(r["e"])("div",{class:"title"},"Symbol-DNS"),Object(r["e"])("div",null," Decentralized internet domain builds on top of Symbol blockchain. Anyone can own a decentralised top-level domain on Symbol blockchain. ")],-1),q={class:"card"},N=Object(r["e"])("div",{class:"title"},"Top-level domains (TLD)",-1),C=Object(r["e"])("div",null,[Object(r["e"])("b",null,"Centralised"),Object(r["f"])(" TLD is controlled and monitored by "),Object(r["e"])("b",null,"ICANN"),Object(r["f"])(".")],-1),H=Object(r["e"])("div",null,[Object(r["e"])("b",null,"Decentralised"),Object(r["f"])(" TLD is controlled and monitored by "),Object(r["e"])("b",null,"YOU"),Object(r["f"])(".")],-1),F=Object(r["e"])("div",null,"Create custom TLD names along with domain names and it keeps your info private.",-1);function B(e,t,n,a,c,o){var i=Object(r["x"])("DisplayDomainTLD");return Object(r["p"])(),Object(r["d"])("div",null,[P,Object(r["e"])("div",q,[N,Object(r["g"])(i,{domains:e.centralisedTLDs},null,8,["domains"]),C,Object(r["g"])(i,{domains:e.decentralisedTLDs},null,8,["domains"]),Object(r["g"])(i,{domains:e.decentralisedDomains},null,8,["domains"]),H,F])])}Object(r["q"])();var z={class:"wrapper"},A={class:"domains-holder"};function K(e,t,n,a,c,o){return Object(r["p"])(),Object(r["d"])("div",z,[Object(r["e"])("div",A,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(e.domains,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{key:"tld_"+t,class:"domains"},Object(r["z"])(e),1)})),128))])])}var U=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(d["b"]);U=Object(s["b"])([Object(d["a"])({props:{domains:Array}})],U);var J=U;n("ddde");J.render=K;var V=J,Y=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(v["a"])(n,[{key:"centralisedTLDs",get:function(){return[".com",".org",".io"]}},{key:"decentralisedTLDs",get:function(){return[".happy",".sunday",".zero"]}},{key:"decentralisedDomains",get:function(){return["super.happy","ipfs.sunday","nft.zero"]}}]),n}(d["b"]);Y=Object(s["b"])([Object(d["a"])({components:{DisplayDomainTLD:V}})],Y);var $=Y;n("0f07");$.render=B,$.__scopeId="data-v-0485e7cc";var G=$;Object(r["t"])("data-v-8a24b0ea");var Q={class:"error"},W=Object(r["e"])("div",null,"Opps, Something went wrong.",-1),X=Object(r["e"])("div",null,"The domain could not be resolved by Symbol-DNS.",-1),Z=Object(r["e"])("div",null,"Please try another domain...",-1),ee=[W,X,Z];function te(e,t,n,a,c,o){return Object(r["p"])(),Object(r["d"])("div",Q,ee)}Object(r["q"])();var ne=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(d["b"]);ne=Object(s["b"])([Object(d["a"])({components:{}})],ne);var re=ne;n("25ae");re.render=te,re.__scopeId="data-v-8a24b0ea";var ae=re,ce=[{path:"/",name:"Home",component:G},{path:"/error",name:"Error",component:ae}],oe=Object(E["a"])({history:Object(E["b"])("/symbol-dns/"),routes:ce}),ie=oe,ue=n("5502"),se=Object(ue["a"])({state:{},mutations:{},actions:{},modules:{}});n("b383");Object(r["c"])(M).use(se).use(ie).mount("#app")},d864:function(e,t,n){"use strict";n("2bce")},ddde:function(e,t,n){"use strict";n("cbba")}});
//# sourceMappingURL=app.42534e21.js.map