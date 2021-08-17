(function(e){function t(t){for(var r,o,l=t[0],i=t[1],u=t[2],s=0,b=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/cellular-automaton/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"031f":function(e,t,n){},"03cb":function(e,t,n){"use strict";n("eb7e")},1366:function(e,t,n){},"43e1":function(e,t,n){"use strict";n("1366")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"nes-container is-rounded is-dark with-title"},c={class:"title"},o={id:"container-outer"},l={id:"container-inner"};function i(e,t,n,i,u,d){var s=Object(r["m"])("PlaySelect"),b=Object(r["m"])("RuleSelect"),f=Object(r["m"])("Step"),p=Object(r["m"])("Rule"),h=Object(r["m"])("Sketch"),O=Object(r["m"])("RuleDialog");return Object(r["h"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",a,[Object(r["d"])("span",c,"CELLULAR AUTOMATON VER. "+Object(r["n"])(u.ver),1),Object(r["d"])("div",o,[Object(r["e"])(s),Object(r["e"])(b),Object(r["d"])("div",l,[Object(r["e"])(f),Object(r["e"])(p)])])]),Object(r["e"])(h),Object(r["e"])(O)],64)}n("ac2f"),n("5b09"),n("30fe");var u={id:"play-select",class:"nes-container is-rounded is-dark with-title"},d=Object(r["d"])("span",{class:"title"},"PLAY SELECT",-1),s=["value"];function b(e,t,n,a,c,o){return Object(r["h"])(),Object(r["c"])("div",u,[d,(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["l"])(c.items,(function(e){return Object(r["h"])(),Object(r["c"])("div",{key:e.type},[Object(r["d"])("label",null,[Object(r["d"])("input",{type:"radio",class:"nes-radio is-dark play-select",name:"play-select",value:e.type},null,8,s),Object(r["d"])("span",null,Object(r["n"])(e.label),1)])])})),128))])}var f={name:"PlaySelect",data:function(){return{items:[{type:"default",label:"PUSH START"},{type:"random",label:"PUSH START(RANDOM)"}]}}};f.render=b;var p=f;Object(r["j"])("data-v-2a91c2cd");var h={id:"rule-select",class:"nes-container is-rounded is-dark with-title"},O=Object(r["d"])("span",{class:"title"},"RULE SELECT",-1),v=Object(r["d"])("span",null,"RANDOM",-1),j=Object(r["d"])("span",null,"INPUT",-1);function m(e,t,n,a,c,o){return Object(r["h"])(),Object(r["c"])("div",h,[O,Object(r["d"])("div",null,[Object(r["d"])("label",null,[Object(r["d"])("input",{type:"radio",class:"nes-radio is-dark rule-select",name:"rule-select",onClick:t[0]||(t[0]=function(){return o.updateRandomRule&&o.updateRandomRule.apply(o,arguments)}),checked:""}),v])]),Object(r["d"])("div",null,[Object(r["d"])("label",null,[Object(r["d"])("input",{type:"radio",class:"nes-radio is-dark rule-select",name:"rule-select",onClick:t[1]||(t[1]=function(){return o.showModal&&o.showModal.apply(o,arguments)})}),j])])])}Object(r["i"])();var g={name:"RuleSelect",mounted:function(){this.$store.dispatch("updateRule",this.createRandomRule())},methods:{createRandomRule:function(){return Math.floor(255*Math.random())},updateRandomRule:function(){this.$store.dispatch("updateRule",this.createRandomRule())},showModal:function(){this.$store.dispatch("showModal")}}};n("d998");g.render=m,g.__scopeId="data-v-2a91c2cd";var R=g;Object(r["j"])("data-v-8f4a20e8");var y={id:"step",class:"nes-text"},w=Object(r["d"])("div",null,"STEP",-1);function S(e,t,n,a,c,o){return Object(r["h"])(),Object(r["c"])("span",y,[w,Object(r["d"])("div",null,Object(r["n"])(c.step),1)])}Object(r["i"])();n("d3b7"),n("fd87"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7");var M,k,E,P,_,A=n("7d4a"),L=n("b0db"),T=n("7b79"),$=0,x=function(e){return new Int8Array(e)},C=function(e,t,n){return M=n,P=x(M),_=x(M),k=A["a"](0,M),$=1,"random"===t?P=new Int8Array(L["a"]((function(){return Math.floor(2*Math.random())}),k)):P[~~(M/2)]=1,E=e,P},D=function(e){e(P,$),T["a"]((function(e){var t=P[e-1>=0?e-1:M-1],n=P[e],r=P[(e+1)%M],a=Math.pow(2,2)*t+Math.pow(2,1)*n+Math.pow(2,0)*r;_[e]=E>>a&1?1:0}),k);var t=[_,P];return P=t[0],_=t[1],$++,P},I=function(){return $},U={name:"Step",data:function(){return{step:0}},mounted:function(){var e=this;setInterval((function(){return e.step=I()}),0)}};n("6ef6");U.render=S,U.__scopeId="data-v-8f4a20e8";var N=U;Object(r["j"])("data-v-6e478d0c");var H={id:"rule",class:"nes-text"},J=Object(r["d"])("div",null,"RULE",-1),z={id:"rule-value"};function V(e,t,n,a,c,o){return Object(r["h"])(),Object(r["c"])("span",H,[J,Object(r["d"])("div",z,Object(r["n"])(o.rule),1)])}Object(r["i"])();var F={name:"Rule",computed:{rule:function(){return this.$store.getters.getRule}}};n("03cb");F.render=V,F.__scopeId="data-v-6e478d0c";var K=F,Y={id:"sketch"};function q(e,t,n,a,c,o){return Object(r["h"])(),Object(r["c"])("div",Y)}var B=n("3425"),G=n.n(B),Q=(n("cb29"),n("5133")),W=n("5f2a"),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.startSelectors,n=e.width,r=e.height,a=e.cellSize,c=e.cellColor,o=e.getRule,l=e.flow,i=void 0===l?"row":l;return function(e){var l,u,d,s=a,b=n,f=r,p=c,h=[];"row"===i?(u=b/s,d=f/s-1):"column"===i&&(u=f/s,d=b/s-1);var O=function(t){e.noLoop(),e.clear(),l=o();var n=C(l,t.target.value,u);h=Q["a"](n,[]),e.loop()},v=function(t,n){W["a"](T["a"])((function(t,r){1===t&&("row"===i?e.rect(r*s,n*s,s,s):"column"===i&&e.rect(n*s,r*s,s,s),e.fill(p))}),t)};e.setup=function(){e.createCanvas(b,f),T["a"]((function(e){e.mouseClicked(O)}),e.selectAll(t)),l=o(),e.noLoop()},e.draw=function(){if(h.length===d)return e.noLoop();var t=D(v);h=Q["a"](t,h)}}},Z={name:"Sketch",mounted:function(){var e=this;new G.a(X({startSelectors:".play-select",width:512,height:288,cellSize:2,cellColor:"#58F898",getRule:function(){return e.$store.getters.getRule}}),this.$el)}};Z.render=q;var ee=Z;Object(r["j"])("data-v-18cdb3ac");var te={class:"nes-dialog is-dark is-rounded",id:"rule-dialog"},ne={method:"dialog"},re={class:"nes-field"},ae=Object(r["d"])("label",{for:"input-rule"},"0 ~ 255",-1),ce={id:"close-button-wrapper"};function oe(e,t,n,a,c,o){return Object(r["h"])(),Object(r["c"])("dialog",te,[Object(r["d"])("form",ne,[Object(r["d"])("div",re,[ae,Object(r["d"])("input",{type:"text",class:Object(r["g"])(["nes-input",{"is-dark":e.isActive,"is-error":c.hasError}]),placeholder:"90",minlength:"0",maxlength:"3",pattern:"[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",id:"input-rule",ref:"inputRule"},null,2)]),Object(r["d"])("div",ce,[Object(r["d"])("button",{type:"button",class:"nes-btn",onClick:t[0]||(t[0]=function(){return o.closeModal&&o.closeModal.apply(o,arguments)})},"OK")])])])}Object(r["i"])();var le={name:"RuleDialog",data:function(){return{hasSuccess:!0,hasError:!1}},mounted:function(){this.$store.dispatch("registerDialog",this.$el),this.$refs.inputRule.addEventListener("invalid",this.errorHandler,!1)},methods:{closeModal:function(){var e=this.$refs.inputRule;e.checkValidity()&&(this.hasSuccess=!0,this.hasError=!1,this.$store.dispatch("updateRule",e.value),this.$store.dispatch("closeModal"))},errorHandler:function(){this.hasSuccess=!1,this.hasError=!0}}};n("add1");le.render=oe,le.__scopeId="data-v-18cdb3ac";var ie=le,ue=n("9224"),de={name:"App",data:function(){return{ver:ue["a"]}},components:{PlaySelect:p,RuleSelect:R,Step:N,Rule:K,Sketch:ee,RuleDialog:ie}};n("43e1");de.render=i;var se=de,be=(n("a9e3"),n("5502")),fe=n("a562"),pe=Object(be["a"])({state:{dialogElem:void 0,rule:0},getters:{getRule:function(e){return e.rule}},mutations:{registerDialog:function(e,t){fe["a"].registerDialog(t),e.dialogElem=t},updateRule:function(e,t){e.rule=Number(""!==t?t:e.rule)}},actions:{registerDialog:function(e,t){var n=e.commit;n("registerDialog",t)},showModal:function(e){var t=e.state;t.dialogElem.showModal()},closeModal:function(e){var t=e.state;t.dialogElem.close()},updateRule:function(e,t){var n=e.commit;n("updateRule",t)}},modules:{}});Object(r["b"])(se).use(pe).mount("#app")},"6ef6":function(e,t,n){"use strict";n("031f")},"7cd4":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"a":"0.1.0"}')},add1:function(e,t,n){"use strict";n("b525")},b525:function(e,t,n){},d998:function(e,t,n){"use strict";n("7cd4")},eb7e:function(e,t,n){}});
//# sourceMappingURL=app.a5b20b75.js.map