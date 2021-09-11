(function(e){function t(t){for(var a,i,u=t[0],o=t[1],s=t[2],d=0,b=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var o=n[u];0!==c[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cellular-automaton/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04eb":function(e,t,n){"use strict";n("d8fe")},"25ab":function(e,t,n){},"37b7":function(e,t,n){"use strict";n("ad64")},"42ac":function(e,t,n){"use strict";n("bb94")},"4d5e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t,n,c,r,i){var u=Object(a["p"])("Sketch"),o=Object(a["p"])("Menu"),s=Object(a["p"])("RuleDialog");return Object(a["j"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(u),Object(a["g"])(o),Object(a["g"])(s)],64)}n("ac2f"),n("5b09"),n("30fe");Object(a["l"])("data-v-58e40a0f");var r={id:"sketch"};function i(e,t,n,c,i,u){return Object(a["j"])(),Object(a["e"])("div",r)}Object(a["k"])();n("159b"),n("cb29");var u=n("3425"),o=n.n(u),s=n("d4ec"),l=n("bee2"),d=(n("d3b7"),n("fd87"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("7d4a")),b=n("b0db"),f=n("7b79"),p=function(e){return new Int8Array(e)},h=function(){function e(t,n,a,c){Object(s["a"])(this,e),this.rule=t,this.spaceSize=a,this.state=p(a),this.nextState=p(a),this.range=Object(d["a"])(0,a),this.step=1,this.callback=c,"random"===n?this.state=new Int8Array(Object(b["a"])((function(){return Math.floor(2*Math.random())}),this.range)):this.state[~~(this.spaceSize/2)]=1}return Object(l["a"])(e,[{key:"generate",value:function(){var e=this;this.callback(this.state,this.step),Object(f["a"])((function(t){var n=e.state[t-1>=0?t-1:e.spaceSize-1],a=e.state[t],c=e.state[(t+1)%e.spaceSize],r=Math.pow(2,2)*n+Math.pow(2,1)*a+Math.pow(2,0)*c;e.nextState[t]=e.rule>>r&1?1:0}),this.range);var t=[this.nextState,this.state];this.state=t[0],this.nextState=t[1],this.step++}}]),e}(),j={name:"Sketch",mounted:function(){new o.a(this.sketch,this.$el)},methods:{sketch:function(e){var t=this,n=0,a=0,c=4,r=0,i=0,u=0,o=void 0,s=[],l=function(t,n){t.forEach((function(t,a){1===t&&(e.rect(a*c,n*c,c,c),e.fill("#58f898"))}))},d=function(){n=t.$el.clientWidth,a=e.select("#app").height-e.select("#menu").height-4,r=n/c,i=e.round(a/c)},b=function(n){e.clear(),u=t.$store.getters.getRule,o=new h(u,n.target.value,r,l),s=[],e.append(s,o.state),t.$store.dispatch("updateStep",o.step),e.loop()};e.setup=function(){d(),e.createCanvas(n,a),e.selectAll("input[name='play-select']").forEach((function(e){return e.mouseClicked(b)}))},e.draw=function(){if(!o||s.length>=i)return e.noLoop();o.generate(),t.$store.dispatch("updateStep",o.step),e.append(s,o.state)},e.windowResized=function(){e.noLoop(),d(),e.resizeCanvas(n,a),e.clear(),t.$store.dispatch("updateStep",0)}}}};n("96d6");j.render=i,j.__scopeId="data-v-58e40a0f";var O=j;Object(a["l"])("data-v-291bf844");var v={class:"container-outer"},m={class:"container-inner"},g={class:"container-inner link"},S={class:"container-inner"};function y(e,t,n,c,r,i){var u=Object(a["p"])("PlaySelect"),o=Object(a["p"])("RuleSelect"),s=Object(a["p"])("Step"),l=Object(a["p"])("Rule"),d=Object(a["p"])("GitHubLink"),b=Object(a["p"])("MediaQuery"),f=Object(a["p"])("Container");return Object(a["j"])(),Object(a["c"])(f,{id:"menu",title:r.title},{default:Object(a["s"])((function(){return[Object(a["f"])("div",v,[Object(a["g"])(u),Object(a["g"])(o),Object(a["g"])(b,{query:"(min-width: 600px)"},{default:Object(a["s"])((function(){return[Object(a["f"])("div",m,[Object(a["g"])(s),Object(a["g"])(l)]),Object(a["f"])("div",g,[Object(a["g"])(d)])]})),_:1}),Object(a["g"])(b,{query:"(max-width: 599px)"},{default:Object(a["s"])((function(){return[Object(a["f"])("div",S,[Object(a["g"])(s),Object(a["g"])(l),Object(a["g"])(d)])]})),_:1})])]})),_:1},8,["title"])}Object(a["k"])();var R={class:"nes-container is-rounded with-title is-dark"},k={class:"title"};function M(e,t,n,c,r,i){return Object(a["j"])(),Object(a["e"])("div",R,[Object(a["f"])("span",k,Object(a["q"])(n.title),1),Object(a["o"])(e.$slots,"default")])}var w={name:"Container",props:{title:String}};w.render=M;var _=w;n("b0c0");function E(e,t,n,c,r,i){var u=Object(a["p"])("Radio"),o=Object(a["p"])("Container");return Object(a["j"])(),Object(a["c"])(o,{title:r.title},{default:Object(a["s"])((function(){return[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["n"])(r.items,(function(e){return Object(a["j"])(),Object(a["e"])("div",{key:e.type},[Object(a["g"])(u,{name:r.name,label:e.label,value:e.type},null,8,["name","label","value"])])})),128))]})),_:1},8,["title"])}Object(a["l"])("data-v-e1888a12");var x=["name","value","checked"];function $(e,t,n,c,r,i){return Object(a["j"])(),Object(a["e"])("label",null,[Object(a["f"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:n.value,checked:n.checked,onClick:t[0]||(t[0]=function(){return e.$emit("click_custom")})},null,8,x),Object(a["f"])("span",null,Object(a["q"])(n.label),1)])}Object(a["k"])();var L={name:"Radio",props:{label:String,name:String,value:String,checked:Boolean}};n("37b7");L.render=$,L.__scopeId="data-v-e1888a12";var C=L,T={name:"PlaySelect",components:{Container:_,Radio:C},data:function(){return{title:"PLAY SELECT",name:"play-select",items:[{label:"PUSH START",type:"default"},{label:"PUSH START(RANDOM)",type:"random"}]}}};T.render=E;var P=T;function A(e,t,n,c,r,i){var u=Object(a["p"])("Radio"),o=Object(a["p"])("Container");return Object(a["j"])(),Object(a["c"])(o,{title:r.title},{default:Object(a["s"])((function(){return[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["n"])(r.items,(function(e){return Object(a["j"])(),Object(a["e"])("div",{key:e.value},[Object(a["g"])(u,{name:r.name,label:e.value,value:e.value,checked:"",onClick_custom:e.event},null,8,["name","label","value","onClick_custom"])])})),128))]})),_:1},8,["title"])}var q={name:"RuleSelect",components:{Container:_,Radio:C},data:function(){return{title:"RULE SELECT",name:"rule-select",items:[{value:"RANDOM",event:this.updateRandomRule},{value:"INPUT",event:this.showModal}]}},mounted:function(){this.updateRandomRule()},methods:{createRandomRule:function(){return Math.floor(256*Math.random())},updateRandomRule:function(){this.$store.dispatch("updateRule",this.createRandomRule())},showModal:function(){this.$store.dispatch("showModal")}}};q.render=A;var D=q;function I(e,t,n,c,r,i){var u=Object(a["p"])("Text");return Object(a["j"])(),Object(a["c"])(u,{title:r.title,content:i.step},null,8,["title","content"])}Object(a["l"])("data-v-3c471548");var H={class:"nes-text"};function N(e,t,n,c,r,i){return Object(a["j"])(),Object(a["e"])("span",H,[Object(a["f"])("div",null,Object(a["q"])(n.title),1),Object(a["f"])("div",null,Object(a["q"])(n.content),1)])}Object(a["k"])();n("a9e3");var Q={name:"Text",props:{title:String,content:Number}};n("e9da");Q.render=N,Q.__scopeId="data-v-3c471548";var U=Q,z={name:"Step",components:{Text:U},data:function(){return{title:"STEP"}},computed:{step:function(){return this.$store.getters.getStep}}};z.render=I;var G=z;function J(e,t,n,c,r,i){var u=Object(a["p"])("Text");return Object(a["j"])(),Object(a["c"])(u,{title:r.title,content:i.rule},null,8,["title","content"])}var V={name:"Rule",components:{Text:U},data:function(){return{title:"RULE"}},computed:{rule:function(){return this.$store.getters.getRule}}};V.render=J;var B=V;Object(a["l"])("data-v-4dca434c");var K={class:"nes-icon github is-midium",href:"https://github.com/l1ck0h/cellular-automaton",target:"_blank",rel:"noopener noreferrer"};function W(e,t,n,c,r,i){return Object(a["j"])(),Object(a["e"])("a",K)}Object(a["k"])();var Y={name:"GitHubLink"};n("42ac");Y.render=W,Y.__scopeId="data-v-4dca434c";var F=Y;function X(e,t,n,c,r,i){return r.isMatch?Object(a["o"])(e.$slots,"default",{key:0}):Object(a["d"])("",!0)}var Z={name:"MediaQuery",props:{query:String},data:function(){return{isMatch:!1}},mounted:function(){this.isMatch=matchMedia(this.query).matches,matchMedia(this.query).addEventListener("change",this.isQueryMatch)},unmounted:function(){matchMedia(this.query).addEventListener("change",this.isQueryMatch)},methods:{isQueryMatch:function(e){this.isMatch=e.matches}}};Z.render=X;var ee=Z,te=n("9224"),ne={name:"Menu",components:{Container:_,PlaySelect:P,RuleSelect:D,Step:G,Rule:B,GitHubLink:F,MediaQuery:ee},data:function(){return{title:"CELLULAR AUTOMATON VER. "+te["a"]}}};n("a7a2");ne.render=y,ne.__scopeId="data-v-291bf844";var ae=ne;Object(a["l"])("data-v-aaff67bc");var ce={class:"nes-dialog is-rounded is-dark"},re={method:"dialog"},ie={class:"nes-field"},ue=Object(a["f"])("label",{for:"input-rule"},"0 ~ 255",-1),oe={id:"close-button-wrapper"};function se(e,t,n,c,r,i){return Object(a["j"])(),Object(a["e"])("dialog",ce,[Object(a["f"])("form",re,[Object(a["f"])("div",ie,[ue,Object(a["f"])("input",{type:"text",class:Object(a["i"])(["nes-input",{"is-dark":r.hasSuccess,"is-error":r.hasError}]),placeholder:"90",minlength:"0",maxlength:"3",pattern:"[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",id:"input-rule",ref:"inputRule"},null,2)]),Object(a["f"])("div",oe,[Object(a["f"])("button",{type:"button",class:"nes-btn",onClick:t[0]||(t[0]=function(){return i.closeModal&&i.closeModal.apply(i,arguments)})},"OK")])])])}Object(a["k"])();var le={name:"RuleDialog",data:function(){return{hasSuccess:!0,hasError:!1}},mounted:function(){this.$store.dispatch("registerDialog",this.$el),this.$refs.inputRule.addEventListener("invalid",this.errorHandler,!1)},unmounted:function(){this.$refs.inputRule.removeEventListener("invalid",this.errorHandler,!1)},methods:{closeModal:function(){var e=this.$refs.inputRule;e.checkValidity()&&(this.hasSuccess=!0,this.hasError=!1,this.$store.dispatch("updateRule",e.value),this.$store.dispatch("closeModal"))},errorHandler:function(){this.hasSuccess=!1,this.hasError=!0}}};n("fd71");le.render=se,le.__scopeId="data-v-aaff67bc";var de=le,be={name:"App",components:{Sketch:O,Menu:ae,RuleDialog:de},data:function(){return{mediaQueryList:void 0}}};n("04eb");be.render=c;var fe=be,pe=n("5502"),he=n("a562"),je=Object(pe["a"])({state:{dialogElem:void 0,rule:0,step:0},getters:{getRule:function(e){return e.rule},getStep:function(e){return e.step}},mutations:{registerDialog:function(e,t){he["a"].registerDialog(t),e.dialogElem=t},updateStep:function(e,t){e.step=t},updateRule:function(e,t){e.rule=Number(""!==t?t:e.rule)}},actions:{registerDialog:function(e,t){var n=e.commit;n("registerDialog",t)},showModal:function(e){var t=e.state;t.dialogElem.showModal()},closeModal:function(e){var t=e.state;t.dialogElem.close()},updateStep:function(e,t){var n=e.commit;n("updateStep",t)},updateRule:function(e,t){var n=e.commit;n("updateRule",t)}},modules:{}});Object(a["b"])(fe).use(je).mount("#app")},9224:function(e){e.exports=JSON.parse('{"a":"0.2.1"}')},"96d6":function(e,t,n){"use strict";n("25ab")},a7a2:function(e,t,n){"use strict";n("4d5e")},ad64:function(e,t,n){},bb94:function(e,t,n){},d8fe:function(e,t,n){},ddc5:function(e,t,n){},e9da:function(e,t,n){"use strict";n("ddc5")},f15a:function(e,t,n){},fd71:function(e,t,n){"use strict";n("f15a")}});
//# sourceMappingURL=app.c9eedc35.js.map