(function(e){function t(t){for(var r,i,u=t[0],o=t[1],l=t[2],b=0,d=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/elementary-cellular-automaton/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"195a":function(e,t,n){},"1d69":function(e,t,n){},"3f0b":function(e,t,n){},"507e":function(e,t,n){},"6bca":function(e,t,n){"use strict";n("98b1")},"98b1":function(e,t,n){},a0b6:function(e,t,n){"use strict";n("d0a1")},b9dd:function(e,t,n){},bbed:function(e,t,n){"use strict";n("3f0b")},bc2e:function(e,t,n){"use strict";n("b9dd")},bc5f:function(e,t,n){"use strict";n("507e")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,i){var u=Object(r["u"])("Alert"),o=Object(r["u"])("Main"),l=Object(r["u"])("MediaQuery");return Object(r["n"])(),Object(r["d"])(l,{conditions:"screen and (max-height:599px) and (orientation:landscape)"},{match:Object(r["x"])((function(){return[Object(r["h"])(u)]})),default:Object(r["x"])((function(){return[Object(r["h"])(o)]})),_:1})}n("494d"),n("be2c"),n("e261"),n("5b09"),n("30fe");function c(e,t,n,a,c,i){return a.isMatch?Object(r["t"])(e.$slots,"match",{key:0}):Object(r["t"])(e.$slots,"default",{key:1})}var i={name:"MediaQuery",props:{conditions:{type:String,require:!0}},setup:function(e){var t=Object(r["r"])(!1),n=window.matchMedia(e.conditions),a=function(e){return t.value=e.matches};return Object(r["m"])((function(){a(n),n.addEventListener("change",a)})),{isMatch:t}}},u=n("6b0d"),o=n.n(u);const l=o()(i,[["render",c]]);var s=l,b={class:"Main"},d={class:"Main-header"},p={class:"Main-section"},f={class:"Main-section"};function O(e,t,n,a,c,i){var u=Object(r["u"])("Statuses"),o=Object(r["u"])("Playground"),l=Object(r["u"])("ScrollGuide"),s=Object(r["u"])("Settings");return Object(r["n"])(),Object(r["f"])("div",b,[Object(r["g"])("header",d,[Object(r["h"])(u)]),Object(r["g"])("section",p,[Object(r["h"])(o),Object(r["h"])(l)]),Object(r["g"])("section",f,[Object(r["h"])(s)])])}function j(e,t,n,a,c,i){var u=Object(r["u"])("Status"),o=Object(r["u"])("GitHubLink");return Object(r["n"])(),Object(r["f"])(r["a"],null,[Object(r["h"])(u,Object(r["l"])(Object(r["i"])(a.gen)),null,16),Object(r["h"])(u,Object(r["l"])(Object(r["i"])(a.rule)),null,16),Object(r["h"])(o,{url:"https://github.com/l1ck0h/elementary-cellular-automaton"})],64)}var h,v,g=n("5502"),m=n("3835"),y=n("ade3"),S=(n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("159b"),n("cb29"),n("a9e3"),n("3425")),_=n.n(S),R=n("d4ec"),I=n("bee2"),k=(n("fb6a"),n("fd87"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("d81d"),function(){function e(t,n,r,a){Object(R["a"])(this,e),this._rule=t,this._patternEpLeft=n.left,this._patternEpRight=n.right,this._state=r,this._spaceSize=r.length,this._gen=a}return Object(I["a"])(e,[{key:"generate",value:function(){for(var t=this._state.slice(),n=this._spaceSize;n--;){var r=this._state[this._patternEpLeft(n,this._spaceSize)],a=this._state[n],c=this._state[this._patternEpRight(n,this._spaceSize)],i=Math.pow(2,2)*r+Math.pow(2,1)*a+Math.pow(2,0)*c;t[n]=this._rule>>i&1?1:0}return this._state=t,this._gen++,new e(this._rule,{left:this._patternEpLeft,right:this._patternEpRight},this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),w=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.initialState,c=void 0===a?"single":a,i=r.pattern,u=void 0===i?"periodic":i,o=new Int8Array(t);switch(c){case"single":o[~~(t/2)]=1;break;case"random":o=o.map((function(){return Math.floor(2*Math.random())}));break}switch(u){case"periodic":n={left:function(e,t){return e-1>=0?e-1:t-1},right:function(e,t){return(e+1)%t}};break;case"reflective":n={left:function(e){return e-1>=0?e-1:e},right:function(e,t){return e+1!==t?(e+1)%t:e}};break}return new k(e,n,o,1)},G=Symbol(),T={Gen:"Gen",RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",Pattern:"Pattern"},L={UpdateGen:"UpdateGen",UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",UpdatePattern:"UpdatePattern"},M={Sketch:"Sketch"},E=Object(g["a"])({state:{gen:"0",ruleType:"random",ruleNumber:"30",initialState:"single",pattern:"periodic"},getters:(h={},Object(y["a"])(h,T.Gen,(function(e){return e.gen})),Object(y["a"])(h,T.RuleType,(function(e){return e.ruleType})),Object(y["a"])(h,T.RuleNumber,(function(e){return e.ruleNumber})),Object(y["a"])(h,T.InitialState,(function(e){return e.initialState})),Object(y["a"])(h,T.Pattern,(function(e){return e.pattern})),h),mutations:(v={},Object(y["a"])(v,L.UpdateGen,(function(e,t){e.gen=t.toString()})),Object(y["a"])(v,L.UpdateRuleType,(function(e,t){e.ruleType=t})),Object(y["a"])(v,L.InputRuleNumber,(function(e,t){e.ruleNumber=t})),Object(y["a"])(v,L.UpdateInitialState,(function(e,t){e.initialState=t})),Object(y["a"])(v,L.UpdatePattern,(function(e,t){e.pattern=t})),v),actions:Object(y["a"])({},M.Sketch,(function(e,t){var n=e.commit,r=e.state,a=4,c=function(e){var c,i,u=0,o=0,l=function(t,n){t.forEach((function(t,r){1===t&&(e.fill("#58f898"),e.rect(r*a,(n-1)*a,a,a))}))},s=function(){var n=t.clientWidth,r=t.clientHeight;return u=n/a,o=e.round(r/a),[n,r]},b=function(){e.clear(),"random"===r.ruleType&&n(L.InputRuleNumber,Math.floor(256*Math.random()).toString()),i=w(Number(r.ruleNumber),u,{initialState:r.initialState,pattern:r.pattern}),l(i.state,i.gen),n(L.UpdateGen,i.gen),e.removeElements(),e.loop()};e.setup=function(){var n,r=s(),a=Object(m["a"])(r,2),i=a[0],u=a[1],o=e.createCanvas(i,u);o.style("display","block"),c=e.createDiv("CLICK/TOUCH HERE TO START!"),c.style("position","absolute"),c.style("font-size","12px"),c.style("color","#fff"),null===(n=e.select("#".concat(t.id)))||void 0===n||n.mouseClicked(b)},e.draw=function(){if(!i||i.gen>o)return e.noLoop();i=i.generate(),l(i.state,i.gen),n(L.UpdateGen,i.gen)},e.windowResized=function(){e.noLoop(),e.clear(),e.noCanvas();var t=s(),r=Object(m["a"])(t,2),a=r[0],c=r[1];e.createCanvas(a,c),n(L.UpdateGen,0)}};new _.a(c,t)})),modules:{}}),N={class:"Status nes-text"};function U(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("span",N,[Object(r["g"])("div",null,Object(r["v"])(n.title),1),Object(r["g"])("div",null,Object(r["v"])(n.content),1)])}var P={name:"Status",props:{title:String,content:String}};n("fdd5");const A=o()(P,[["render",U],["__scopeId","data-v-2f3f22d9"]]);var x=A,C=["href"];function q(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("a",{class:"GitHubLink nes-icon github is-midium",href:n.url,target:"_blank",rel:"noopener noreferrer"},null,8,C)}var H={name:"GitHubLink",props:{url:String}};n("bbed");const z=o()(H,[["render",q],["__scopeId","data-v-ad00f8e2"]]);var D=z,Q={name:"Statuses",components:{Status:x,GitHubLink:D},setup:function(){var e=Object(g["b"])(G),t=Object(r["q"])({title:"GEN",content:Object(r["b"])((function(){return e.getters[T.Gen]}))}),n=Object(r["q"])({title:"RULE",content:Object(r["b"])((function(){return e.getters[T.RuleNumber]}))});return{gen:t,rule:n}}};const $=o()(Q,[["render",j]]);var J=$,F=function(e){return Object(r["p"])("data-v-ecbb3e72"),e=e(),Object(r["o"])(),e},K={class:"ScrollGuide"},V=F((function(){return Object(r["g"])("div",null,"SCROLL TO SETTINGS SECTION",-1)})),W=F((function(){return Object(r["g"])("div",{class:"ScrollGuide-down"},null,-1)})),Y=[V,W];function B(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",K,Y)}var X={name:"ScrollGuide"};n("bc2e");const Z=o()(X,[["render",B],["__scopeId","data-v-ecbb3e72"]]);var ee=Z,te={id:"playground",class:"Playground",ref:"playground"};function ne(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",te,null,512)}var re={name:"Playground",setup:function(){var e=Object(g["b"])(G),t=Object(r["r"])(null);return Object(r["m"])((function(){return e.dispatch(M.Sketch,t.value)})),{playground:t}}};n("ec61");const ae=o()(re,[["render",ne],["__scopeId","data-v-61375c15"]]);var ce=ae,ie=function(e){return Object(r["p"])("data-v-124db0e6"),e=e(),Object(r["o"])(),e},ue={class:"Settings nes-container is-rounded with-title is-dark"},oe=ie((function(){return Object(r["g"])("span",{class:"title"},"ELEMENTARY CELLULAR AUTOMATON",-1)})),le={class:"Settings-list"},se={class:"Settings-list-item"},be={class:"Settings-list-item"},de={class:"Settings-list-item"};function pe(e,t,n,a,c,i){var u=Object(r["u"])("InputRange"),o=Object(r["u"])("RadioGroup");return Object(r["n"])(),Object(r["f"])("div",ue,[oe,Object(r["g"])("nav",null,[Object(r["g"])("ul",le,[Object(r["g"])("li",se,[Object(r["h"])(o,Object(r["l"])(Object(r["i"])(a.ruleGroup)),{writeIn:Object(r["x"])((function(){return[Object(r["h"])(u,Object(r["l"])(Object(r["i"])(a.writeIn)),null,16)]})),_:1},16)]),Object(r["g"])("li",be,[Object(r["h"])(o,Object(r["l"])(Object(r["i"])(a.initialStateGroup)),null,16)]),Object(r["g"])("li",de,[Object(r["h"])(o,Object(r["l"])(Object(r["i"])(a.patternGroup)),null,16)])])])])}n("b0c0");var fe={class:"RadioGroup"},Oe={class:"RadioGroup-label"},je={key:0,class:"RadioGroup-attention"},he=["name","value","checked"];function ve(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",fe,[Object(r["g"])("label",Oe,Object(r["v"])(n.fieldLabel),1),n.attention?(Object(r["n"])(),Object(r["f"])("p",je,Object(r["v"])(n.attention),1)):Object(r["e"])("",!0),(Object(r["n"])(!0),Object(r["f"])(r["a"],null,Object(r["s"])(n.items,(function(c,i){return Object(r["n"])(),Object(r["f"])("label",{key:i,class:"RadioGroup-radio"},[Object(r["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:c.value,checked:c.checked,onChange:t[0]||(t[0]=function(){return a.onchange&&a.onchange.apply(a,arguments)})},null,40,he),Object(r["g"])("span",null,Object(r["v"])(c.value),1),c.writeIn?Object(r["t"])(e.$slots,"writeIn",{key:0},void 0,!0):Object(r["e"])("",!0)])})),128))])}var ge={name:"RadioGroup",emits:["onchange"],props:{fieldLabel:{type:String,required:!0},attention:{type:String,required:!1},name:{type:String,required:!0},items:Array},setup:function(e,t){var n=t.emit,r=function(e){return n("onchange",e)};return{onchange:r}}};n("6bca");const me=o()(ge,[["render",ve],["__scopeId","data-v-0ac6cc89"]]);var ye=me;function Se(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("input",Object(r["k"])({type:"range",class:"nes-input"},n.attrs,{onInput:t[0]||(t[0]=function(){return e.oninput&&e.oninput.apply(e,arguments)})}),null,16)}var _e={name:"InputRange",emits:["oninput"],props:{attrs:{type:Object,required:!1}}};const Re=o()(_e,[["render",Se]]);var Ie=Re,ke={name:"Settings",components:{RadioGroup:ye,InputRange:Ie},setup:function(){var e=Object(g["b"])(G),t=Object(r["q"])({fieldLabel:"INITIAL STATE",name:"initialState-select",items:[{value:"SINGLE",checked:!0},{value:"RANDOM",checked:!1}],onchange:function(t){var n=t.target.value;e.commit(L.UpdateInitialState,n.toLowerCase())}}),n=Object(r["q"])({fieldLabel:"PATTERN",name:"pattern-select",items:[{value:"PERIODIC",checked:!0},{value:"REFLECTIVE",checked:!1}],onchange:function(t){var n=t.target.value;e.commit(L.UpdatePattern,n.toLowerCase())}}),a=Object(r["q"])({fieldLabel:"RULE",attention:"from 0 to 255",name:"rule-select",items:[{value:"RANDOM",checked:!0},{value:"INPUT",checked:!1,writeIn:!0}],onchange:function(t){var n=t.target.value;e.commit(L.UpdateRuleType,n.toLowerCase())}}),c=Object(r["b"])((function(){return"random"===e.getters[T.RuleType]})),i=Object(r["b"])((function(){return e.getters[T.RuleNumber]})),u=Object(r["q"])({attrs:{min:"0",max:"255",disabled:c,value:i},oninput:function(t){return e.commit(L.InputRuleNumber,t.target.value)}});return{initialStateGroup:t,patternGroup:n,ruleGroup:a,writeIn:u}}};n("bc5f");const we=o()(ke,[["render",pe],["__scopeId","data-v-124db0e6"]]);var Ge=we,Te={name:"Main",components:{Statuses:J,ScrollGuide:ee,Playground:ce,Settings:Ge}};n("f877");const Le=o()(Te,[["render",O],["__scopeId","data-v-129a1d6e"]]);var Me=Le,Ee=function(e){return Object(r["p"])("data-v-25816030"),e=e(),Object(r["o"])(),e},Ne={class:"Alert"},Ue=Ee((function(){return Object(r["g"])("strong",{class:"Alert-text nes-text is-warning"}," Sorry! Please rotate your device from landscape to portrait! ",-1)})),Pe=[Ue];function Ae(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",Ne,Pe)}var xe={name:"Alert"};n("a0b6");const Ce=o()(xe,[["render",Ae],["__scopeId","data-v-25816030"]]);var qe=Ce,He={name:"App",components:{MediaQuery:s,Main:Me,Alert:qe}};n("ce03");const ze=o()(He,[["render",a]]);var De=ze;Object(r["c"])(De).use(E,G).mount("#app")},ce03:function(e,t,n){"use strict";n("195a")},d0a1:function(e,t,n){},d328:function(e,t,n){},eb2b:function(e,t,n){},ec61:function(e,t,n){"use strict";n("d328")},f877:function(e,t,n){"use strict";n("1d69")},fdd5:function(e,t,n){"use strict";n("eb2b")}});
//# sourceMappingURL=app.5c932406.js.map