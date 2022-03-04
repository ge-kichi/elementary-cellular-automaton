(function(e){function t(t){for(var r,i,o=t[0],u=t[1],l=t[2],b=0,d=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/elementary-cellular-automaton/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},5960:function(e,t,n){},"777d":function(e,t,n){"use strict";n("e0fc")},9224:function(e){e.exports=JSON.parse('{"a":"1.3.0"}')},a737:function(e,t,n){"use strict";n("c182")},aa91:function(e,t,n){},ba29:function(e,t,n){"use strict";n("f541")},bd57:function(e,t,n){},c182:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={ref:"header",class:"el-box el-box--invert el-box--padding:ms-1"},c={id:"sketchIn__wrapper",class:"el-center"},i={id:"sketchIn",ref:"sketchIn"},o={ref:"footer",class:"el-box el-box--invert el-box--padding:ms-1"};function u(e,t,n,u,l,s){var b=Object(r["v"])("TheHeaderChild"),d=Object(r["v"])("TheFooterChild"),p=Object(r["v"])("TheDialogRule");return Object(r["o"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("header",a,[Object(r["i"])(b)],512),Object(r["g"])("main",c,[Object(r["g"])("div",i,null,512)]),Object(r["g"])("footer",o,[Object(r["i"])(d)],512),Object(r["i"])(p)],64)}var l,s,b=n("5502"),d=n("1da1"),p=n("ade3"),f=(n("96cf"),n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("159b"),n("cb29"),n("a9e3"),n("3425")),O=n.n(f),g=n("d4ec"),j=n("bee2"),v=(n("d81d"),n("fd87"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function e(t,n,r,a){Object(g["a"])(this,e),this._rule=t,this._pattern=n,this._state=r,this._spaceSize=r.length,this._gen=a}return Object(j["a"])(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var r,a;switch(t._pattern){case"periodic":r=function(e){return e>0?e-1:t._spaceSize-1},a=function(e){return(e+1)%t._spaceSize};break;case"reflective":r=function(e){return e>0?e-1:e},a=function(e){return e+1!==t._spaceSize?(e+1)%t._spaceSize:e};break}var c=t._state[r(n)],i=e,o=t._state[a(n)],u=Math.pow(2,2)*c+Math.pow(2,1)*i+Math.pow(2,0)*o;return t._rule>>u&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._pattern,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),m=function(e,t,n,r){var a=new Int8Array(t);switch(n){case"single":a[~~(t/2)]=1;break;case"random":a=a.map((function(){return Math.floor(2*Math.random())}));break}return new v(e,r||"periodic",a,1)},h=Symbol(),y={Gen:"Gen",RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",OpenDialog:"OpenDialog"},k={UpdateGen:"UpdateGen",UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",OpenDialog:"OpenDialog"},_={Sketch:"Sketch"},w=Object(b["a"])({state:{gen:0,ruleType:"random",ruleNumber:"30",initialState:"single",openDialog:"none"},getters:(l={},Object(p["a"])(l,y.Gen,(function(e){return e.gen.toString()})),Object(p["a"])(l,y.RuleType,(function(e){return e.ruleType})),Object(p["a"])(l,y.RuleNumber,(function(e){return e.ruleNumber})),Object(p["a"])(l,y.InitialState,(function(e){return e.initialState})),Object(p["a"])(l,y.OpenDialog,(function(e){return e.openDialog})),l),mutations:(s={},Object(p["a"])(s,k.UpdateGen,(function(e,t){e.gen=t})),Object(p["a"])(s,k.UpdateRuleType,(function(e,t){e.ruleType=t})),Object(p["a"])(s,k.InputRuleNumber,(function(e,t){e.ruleNumber=t})),Object(p["a"])(s,k.UpdateInitialState,(function(e){switch(e.initialState){case"single":e.initialState="random";break;case"random":e.initialState="single";break}})),Object(p["a"])(s,k.OpenDialog,(function(e,t){e.openDialog=t})),s),actions:Object(p["a"])({},_.Sketch,(function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,a=e.state,new O.a((function(e){var n,c,i,o,u=8,l=function(t,n){t.forEach((function(t,r){1===t&&e.fill("#00933B").rect(r*u,(n-1)*u,u,u)}))},s=function(){var r=t.clientWidth,a=t.clientHeight;n=Math.floor(r/u),c=Math.floor(a/u)-1,e.removeElements(),e.noCanvas(),i=e.createCanvas(r,a).style("display","block").style("z-index","1").style("opacity","0").style("cursor","pointer"),e.createDiv("CLICK/TOUCH HERE TO START!").style("position","absolute").style("color","var(--color-light)").style("font-size","var(--ms-1)").style("text-align","center")};e.setup=function(){var c;s(),null===(c=e.select("#".concat(t.id)))||void 0===c||c.mouseClicked((function(){e.removeElements(),e.clear(),"random"===a.ruleType&&r(k.InputRuleNumber,Math.floor(256*Math.random()).toString()),o=m(Number(a.ruleNumber),n,a.initialState),l(o.state,o.gen),r(k.UpdateGen,o.gen),i.style("opacity","1"),e.loop()}))},e.draw=function(){if(!o||o.gen>c)return e.noLoop();o=o.generate(),l(o.state,o.gen),r(k.UpdateGen,o.gen)},e.windowResized=function(){s(),r(k.UpdateGen,0)}}),t);case 2:case"end":return n.stop()}}),n)})))()})),modules:{}}),S=function(e){return Object(r["q"])("data-v-db841262"),e=e(),Object(r["p"])(),e},I={class:"the-header-child el-center"},R={class:"el-cluster el-cluster--justify:space-between",style:{width:"100%"}},T=S((function(){return Object(r["g"])("h1",null,"ECA",-1)})),x={class:"the-header-child__statuses el-cluster"};function D(e,t,n,a,c,i){var o=Object(r["v"])("BaseStatus");return Object(r["o"])(),Object(r["f"])("div",I,[Object(r["g"])("div",R,[T,Object(r["g"])("div",x,[Object(r["i"])(o,Object(r["k"])({title:"GEN"},a.gen),null,16),Object(r["i"])(o,Object(r["k"])({title:"STATE"},a.state),null,16),Object(r["i"])(o,Object(r["k"])({title:"RULE"},a.rule),null,16)])])])}function C(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("span",{class:"base-status el-box el-box--invert el-box--padding:0 nes-text",style:Object(r["l"])(n.highlight?"z-index: var(--zIndex-highlight)":"")},[Object(r["g"])("div",{class:"el-center el-center--gutters:ms-1",style:Object(r["l"])(a.clickable?"cursor: pointer":""),onClick:t[0]||(t[0]=function(t){return e.$emit("onclick")})},[Object(r["g"])("div",null,Object(r["w"])(n.title),1),Object(r["g"])("div",null,Object(r["w"])(n.content),1)],4)],4)}var U={name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup:function(e,t){var n=t.attrs;return{clickable:Object(r["s"])(n.onclick)}}},N=(n("777d"),n("6b0d")),B=n.n(N);const z=B()(U,[["render",C],["__scopeId","data-v-14f7cbe9"]]);var M=z,V={name:"TheHeaderChild",components:{BaseStatus:M},setup:function(){var e=Object(b["b"])(h),t=Object(r["r"])({content:Object(r["b"])((function(){return e.getters[y.Gen]}))}),n=Object(r["r"])({content:Object(r["b"])((function(){return e.getters[y.InitialState].toUpperCase()})),highlight:Object(r["b"])((function(){return"state"===e.getters[y.OpenDialog]})),onclick:function(){return e.commit(k.UpdateInitialState)}}),a=Object(r["r"])({content:Object(r["b"])((function(){return e.getters[y.RuleNumber]})),highlight:Object(r["b"])((function(){return"rule"===e.getters[y.OpenDialog]})),onclick:function(){return e.commit(k.OpenDialog,"rule"!==e.getters[y.OpenDialog]?"rule":"none")}});return{state:n,gen:t,rule:a}}};n("f2a4");const E=B()(V,[["render",D],["__scopeId","data-v-db841262"]]);var q=E,G=function(e){return Object(r["q"])("data-v-77010a12"),e=e(),Object(r["p"])(),e},P={class:"the-footer-child el-center"},H=G((function(){return Object(r["g"])("small",null,"© 2022 l1ck0h",-1)}));function L(e,t,n,a,c,i){var o=Object(r["v"])("BaseLink");return Object(r["o"])(),Object(r["f"])("div",P,[Object(r["g"])("small",null,[Object(r["i"])(o,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),Object(r["h"])(" version "+Object(r["w"])(a.version),1)]),H])}var A=n("9224"),$=["href"];function F(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("a",{class:"base-link",href:n.url,target:"_blank",rel:"noopener noreferrer"},Object(r["w"])(n.label),9,$)}var J={name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}};n("a737");const K=B()(J,[["render",F],["__scopeId","data-v-0ab4f803"]]);var W=K,Q={name:"TheFooterChild",components:{BaseLink:W},setup:function(){return{version:A["a"]}}};n("ba29");const X=B()(Q,[["render",L],["__scopeId","data-v-77010a12"]]);var Y=X;function Z(e,t,n,a,c,i){var o=Object(r["v"])("BaseInputRange"),u=Object(r["v"])("BaseSetting"),l=Object(r["v"])("BaseDialog");return"rule"===a.openDialog?(Object(r["o"])(),Object(r["d"])(l,{key:0,onClose:a.close},{default:Object(r["y"])((function(){return[Object(r["i"])(u,{modelValue:a.rulePicked,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.rulePicked=e}),title:"RULE",name:"rule-select",items:a.ruleItems},{default:Object(r["y"])((function(){return[Object(r["i"])(o,{modelValue:a.writeinInput,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.writeinInput=e}),attrs:a.writeinAttrs},null,8,["modelValue","attrs"])]})),_:1},8,["modelValue","items"])]})),_:1},8,["onClose"])):Object(r["e"])("",!0)}var ee={class:"base-dialog__wrapper el-imposter"};function te(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("div",{class:"base-dialog__overlay",onClick:t[2]||(t[2]=Object(r["z"])((function(t){return e.$emit("close")}),["self"]))},[Object(r["g"])("div",ee,[Object(r["g"])("div",{class:"base-dialog",onClick:t[1]||(t[1]=Object(r["z"])((function(t){return e.$emit("close")}),["self"]))},[Object(r["g"])("i",{class:"base-dialog__close nes-icon close is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(r["u"])(e.$slots,"default",{},void 0,!0)])])])}var ne={name:"BaseDialog",emits:["close"]};n("d5d5");const re=B()(ne,[["render",te],["__scopeId","data-v-0a908db4"]]);var ae=re,ce=["value"];function ie(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("input",Object(r["k"])({class:"input-range",type:"range"},n.attrs,{value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})}),null,16,ce)}var oe={name:"BaseInputRange",emits:["update:modelValue"],props:{attrs:{type:Object,required:!1},modelValue:{type:String,required:!0}}};const ue=B()(oe,[["render",ie]]);var le=ue,se=(n("b0c0"),{class:"base-setting nes-container is-rounded with-title is-dark"}),be={class:"title"},de={class:"el-center"},pe={class:"el-box el-box--invert"},fe={class:"el-stack",style:{"--space":"var(--ms-1)"}},Oe=["name","value","checked"],ge={style:{cursor:"pointer"}};function je(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("div",se,[Object(r["g"])("span",be,Object(r["w"])(n.title),1),Object(r["g"])("div",de,[Object(r["g"])("div",pe,[Object(r["g"])("div",fe,[(Object(r["o"])(!0),Object(r["f"])(r["a"],null,Object(r["t"])(n.items,(function(a,c){return Object(r["o"])(),Object(r["f"])("label",{key:c,class:"el-stack"},[Object(r["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:a.value,checked:a.value===n.modelValue,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,Oe),Object(r["g"])("span",ge,Object(r["w"])(a.value),1),a.writeIn?Object(r["u"])(e.$slots,"default",{key:0},void 0,!0):Object(r["e"])("",!0)])})),128))])])])])}var ve={name:"BaseSetting",emits:["update:modelValue"],props:{title:{type:String,required:!0},name:{type:String,required:!0},items:Array,modelValue:{type:String,required:!0}}};n("f381");const me=B()(ve,[["render",je],["__scopeId","data-v-0811a1e9"]]);var he=me,ye={name:"TheDialogRule",components:{BaseDialog:ae,BaseInputRange:le,BaseSetting:he},setup:function(){var e=Object(b["b"])(h),t=Object(r["b"])((function(){return e.getters[y.OpenDialog]})),n=function(){return e.commit(k.OpenDialog,"none")},a=Object(r["r"])([{value:"RANDOM"},{value:"INPUT",writeIn:!0}]),c=Object(r["b"])({get:function(){return e.getters[y.RuleType].toUpperCase()},set:function(t){return e.commit(k.UpdateRuleType,t.toLowerCase())}}),i=Object(r["r"])({min:"0",max:"255",disabled:Object(r["b"])((function(){return"random"===e.getters[y.RuleType]}))}),o=Object(r["b"])({get:function(){return e.getters[y.RuleNumber]},set:function(t){return e.commit(k.InputRuleNumber,t)}});return{openDialog:t,close:n,ruleItems:a,rulePicked:c,writeinAttrs:i,writeinInput:o}}};const ke=B()(ye,[["render",Z]]);var _e=ke,we={name:"App",components:{TheHeaderChild:q,TheFooterChild:Y,TheDialogRule:_e},setup:function(){var e=Object(b["b"])(h),t=Object(r["s"])(null),n=Object(r["s"])(null),a=Object(r["s"])(null),c=document.getElementById("app"),i=function(e,t){return null===c||void 0===c?void 0:c.style.setProperty(e,t)},o=function(){var e,n;i("--vh","".concat(.01*window.innerHeight,"px")),i("--space-top","".concat(null===(e=t.value)||void 0===e?void 0:e.clientHeight,"px")),i("--space-bottom","".concat(null===(n=a.value)||void 0===n?void 0:n.clientHeight,"px"))};return Object(r["n"])((function(){window.addEventListener("resize",o),setTimeout((function(){o(),e.dispatch(_.Sketch,n.value)}))})),Object(r["m"])((function(){return window.removeEventListener("resize",o)})),{header:t,sketchIn:n,footer:a}}};n("ecf4");const Se=B()(we,[["render",u]]);var Ie=Se;n("2a2b"),n("5b09"),n("30fe");Object(r["c"])(Ie).use(w,h).mount("#app")},d5d5:function(e,t,n){"use strict";n("aa91")},e0fc:function(e,t,n){},ecf4:function(e,t,n){"use strict";n("f66a")},f2a4:function(e,t,n){"use strict";n("5960")},f381:function(e,t,n){"use strict";n("bd57")},f541:function(e,t,n){},f66a:function(e,t,n){}});
//# sourceMappingURL=app.e85ac5a0.js.map