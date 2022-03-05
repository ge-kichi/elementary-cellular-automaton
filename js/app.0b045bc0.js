(function(e){function t(t){for(var r,i,u=t[0],l=t[1],o=t[2],b=0,d=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/elementary-cellular-automaton/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"031a":function(e,t,n){},"18a9":function(e,t,n){},"3c67":function(e,t,n){"use strict";n("7a1f")},5752:function(e,t,n){"use strict";n("18a9")},"64c1":function(e,t,n){},"777d":function(e,t,n){"use strict";n("e0fc")},"7a1f":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"a":"1.3.0"}')},ba29:function(e,t,n){"use strict";n("f541")},bd57:function(e,t,n){},cc48:function(e,t,n){"use strict";n("64c1")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={ref:"sketchIn",class:"sketchIn el-cover__centered"};function c(e,t,n,c,i,u){var l=Object(r["u"])("TheHeaderChild"),o=Object(r["u"])("TheFooterChild"),s=Object(r["u"])("TheDialogRule");return Object(r["n"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("header",null,[Object(r["i"])(l)]),Object(r["g"])("canvas",a,null,512),Object(r["g"])("footer",null,[Object(r["i"])(o)]),Object(r["i"])(s)],64)}var i,u,l=n("5502"),o=n("1da1"),s=n("ade3"),b=(n("96cf"),n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("159b"),n("a9e3"),n("d4ec")),d=n("bee2"),f=(n("d81d"),n("fd87"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function e(t,n,r,a){Object(b["a"])(this,e),this._rule=t,this._pattern=n,this._state=r,this._spaceSize=r.length,this._gen=a}return Object(d["a"])(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var r,a;switch(t._pattern){case"periodic":r=function(e){return e>0?e-1:t._spaceSize-1},a=function(e){return(e+1)%t._spaceSize};break;case"reflective":r=function(e){return e>0?e-1:e},a=function(e){return e+1!==t._spaceSize?(e+1)%t._spaceSize:e};break}var c=t._state[r(n)],i=e,u=t._state[a(n)],l=Math.pow(2,2)*c+Math.pow(2,1)*i+Math.pow(2,0)*u;return t._rule>>l&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._pattern,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),p=function(e,t,n,r){var a=new Int8Array(t);switch(n){case"single":a[~~(t/2)]=1;break;case"random":a=a.map((function(){return Math.floor(2*Math.random())}));break}return new f(e,r||"periodic",a,1)},O=Symbol(),g={RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",OpenDialog:"OpenDialog"},j={UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",OpenDialog:"OpenDialog"},h={Sketch:"Sketch"},m=Object(l["a"])({state:{ruleType:"random",ruleNumber:"30",initialState:"single",openDialog:"none"},getters:(i={},Object(s["a"])(i,g.RuleType,(function(e){return e.ruleType})),Object(s["a"])(i,g.RuleNumber,(function(e){return e.ruleNumber})),Object(s["a"])(i,g.InitialState,(function(e){return e.initialState})),Object(s["a"])(i,g.OpenDialog,(function(e){return e.openDialog})),i),mutations:(u={},Object(s["a"])(u,j.UpdateRuleType,(function(e,t){e.ruleType=t})),Object(s["a"])(u,j.InputRuleNumber,(function(e,t){e.ruleNumber=t})),Object(s["a"])(u,j.UpdateInitialState,(function(e){switch(e.initialState){case"single":e.initialState="random";break;case"random":e.initialState="single";break}})),Object(s["a"])(u,j.OpenDialog,(function(e,t){e.openDialog=t})),u),actions:Object(s["a"])({},h.Sketch,(function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,c,i,u,l,o,s,b,d,f,O;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,a=e.state,c=8,d=function(){return setTimeout((function(){f();var e=t.clientWidth,n=t.clientHeight;o=Math.floor(e/c),s=Math.floor(n/c)-1,u=8*o,l=8*s,t.setAttribute("width",u.toString()),t.setAttribute("height",l.toString())}),1e3)},f=function(){return i.clearRect(0,0,u,l)},O=function(e,t){e.forEach((function(e,n){1===e&&(i.fillStyle="#00933B",i.fillRect(n*c,(t-1)*c,.95*c,.95*c))}))},t.addEventListener("click",(function(){f(),"random"===a.ruleType&&r(j.InputRuleNumber,Math.floor(256*Math.random()).toString()),b=p(Number(a.ruleNumber),o,a.initialState),O(b.state,b.gen);while(!(b.gen>s))b=b.generate(),O(b.state,b.gen)})),i=t.getContext("2d"),window.addEventListener("resize",d),d();case 9:case"end":return n.stop()}}),n)})))()})),modules:{}}),v=function(e){return Object(r["p"])("data-v-47d3d59e"),e=e(),Object(r["o"])(),e},y={class:"the-header-child el-center"},k={class:"el-cluster el-cluster--justify:space-between",style:{width:"100%"}},_=v((function(){return Object(r["g"])("h1",null,"ECA",-1)})),S={class:"the-header-child__statuses el-cluster"};function w(e,t,n,a,c,i){var u=Object(r["u"])("BaseStatus");return Object(r["n"])(),Object(r["f"])("div",y,[Object(r["g"])("div",k,[_,Object(r["g"])("div",S,[Object(r["i"])(u,Object(r["k"])({title:"STATE"},a.state),null,16),Object(r["i"])(u,Object(r["k"])({title:"RULE"},a.rule),null,16)])])])}function I(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("span",{class:"base-status el-box el-box--invert el-box--padding:0 nes-text",style:Object(r["l"])(n.highlight?"z-index: var(--zIndex-highlight)":"")},[Object(r["g"])("div",{class:"el-center el-center--gutters:ms-1",style:Object(r["l"])(a.clickable?"cursor: pointer":""),onClick:t[0]||(t[0]=function(t){return e.$emit("onclick")})},[Object(r["g"])("div",null,Object(r["v"])(n.title),1),Object(r["g"])("div",null,Object(r["v"])(n.content),1)],4)],4)}var R={name:"BaseStatus",emits:["onclick"],props:{title:{type:String,required:!0},content:{type:String,required:!0},highlight:{type:Boolean,required:!1}},setup:function(e,t){var n=t.attrs;return{clickable:Object(r["r"])(n.onclick)}}},T=(n("777d"),n("6b0d")),D=n.n(T);const x=D()(R,[["render",I],["__scopeId","data-v-14f7cbe9"]]);var C=x,N={name:"TheHeaderChild",components:{BaseStatus:C},setup:function(){var e=Object(l["b"])(O),t=Object(r["q"])({content:Object(r["b"])((function(){return e.getters[g.InitialState].toUpperCase()})),highlight:Object(r["b"])((function(){return"state"===e.getters[g.OpenDialog]})),onclick:function(){return e.commit(j.UpdateInitialState)}}),n=Object(r["q"])({content:Object(r["b"])((function(){return e.getters[g.RuleNumber]})),highlight:Object(r["b"])((function(){return"rule"===e.getters[g.OpenDialog]})),onclick:function(){return e.commit(j.OpenDialog,"rule"!==e.getters[g.OpenDialog]?"rule":"none")}});return{state:t,rule:n}}};n("ef88");const B=D()(N,[["render",w],["__scopeId","data-v-47d3d59e"]]);var U=B,q=function(e){return Object(r["p"])("data-v-77010a12"),e=e(),Object(r["o"])(),e},M={class:"the-footer-child el-center"},V=q((function(){return Object(r["g"])("small",null,"© 2022 l1ck0h",-1)}));function P(e,t,n,a,c,i){var u=Object(r["u"])("BaseLink");return Object(r["n"])(),Object(r["f"])("div",M,[Object(r["g"])("small",null,[Object(r["i"])(u,{url:"https://github.com/l1ck0h/elementary-cellular-automaton",label:"GitHub"}),Object(r["h"])(" version "+Object(r["v"])(a.version),1)]),V])}var A=n("9224"),z=["href"];function L(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("a",{class:"base-link",href:n.url,target:"_blank",rel:"noopener noreferrer"},Object(r["v"])(n.label),9,z)}var $={name:"BaseLink",props:{url:{type:String,required:!0},label:{type:String,required:!0}}};n("cc48");const E=D()($,[["render",L],["__scopeId","data-v-9ea2c392"]]);var H=E,F={name:"TheFooterChild",components:{BaseLink:H},setup:function(){return{version:A["a"]}}};n("ba29");const J=D()(F,[["render",P],["__scopeId","data-v-77010a12"]]);var G=J;function W(e,t,n,a,c,i){var u=Object(r["u"])("BaseInputRange"),l=Object(r["u"])("BaseSetting"),o=Object(r["u"])("BaseDialog");return"rule"===a.openDialog?(Object(r["n"])(),Object(r["d"])(o,{key:0,onClose:a.close},{default:Object(r["x"])((function(){return[Object(r["i"])(l,{modelValue:a.rulePicked,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.rulePicked=e}),title:"RULE",name:"rule-select",items:a.ruleItems},{default:Object(r["x"])((function(){return[Object(r["i"])(u,{modelValue:a.writeinInput,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.writeinInput=e}),attrs:a.writeinAttrs},null,8,["modelValue","attrs"])]})),_:1},8,["modelValue","items"])]})),_:1},8,["onClose"])):Object(r["e"])("",!0)}var K={class:"base-dialog__wrapper el-imposter"};function Q(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",{class:"base-dialog__overlay",onClick:t[2]||(t[2]=Object(r["y"])((function(t){return e.$emit("close")}),["self"]))},[Object(r["g"])("div",K,[Object(r["g"])("div",{class:"base-dialog",onClick:t[1]||(t[1]=Object(r["y"])((function(t){return e.$emit("close")}),["self"]))},[Object(r["g"])("i",{class:"base-dialog__close nes-icon close is-small",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(r["t"])(e.$slots,"default",{},void 0,!0)])])])}var X={name:"BaseDialog",emits:["close"]};n("5752");const Y=D()(X,[["render",Q],["__scopeId","data-v-2f9f5777"]]);var Z=Y,ee=["value"];function te(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("input",Object(r["k"])({class:"input-range",type:"range"},n.attrs,{value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})}),null,16,ee)}var ne={name:"BaseInputRange",emits:["update:modelValue"],props:{attrs:{type:Object,required:!1},modelValue:{type:String,required:!0}}};const re=D()(ne,[["render",te]]);var ae=re,ce=(n("b0c0"),{class:"base-setting nes-container is-rounded with-title is-dark"}),ie={class:"title"},ue={class:"el-center"},le={class:"el-box el-box--invert"},oe={class:"el-stack",style:{"--space":"var(--ms-1)"}},se=["name","value","checked"],be={style:{cursor:"pointer"}};function de(e,t,n,a,c,i){return Object(r["n"])(),Object(r["f"])("div",ce,[Object(r["g"])("span",ie,Object(r["v"])(n.title),1),Object(r["g"])("div",ue,[Object(r["g"])("div",le,[Object(r["g"])("div",oe,[(Object(r["n"])(!0),Object(r["f"])(r["a"],null,Object(r["s"])(n.items,(function(a,c){return Object(r["n"])(),Object(r["f"])("label",{key:c,class:"el-stack"},[Object(r["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:a.value,checked:a.value===n.modelValue,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,se),Object(r["g"])("span",be,Object(r["v"])(a.value),1),a.writeIn?Object(r["t"])(e.$slots,"default",{key:0},void 0,!0):Object(r["e"])("",!0)])})),128))])])])])}var fe={name:"BaseSetting",emits:["update:modelValue"],props:{title:{type:String,required:!0},name:{type:String,required:!0},items:Array,modelValue:{type:String,required:!0}}};n("f381");const pe=D()(fe,[["render",de],["__scopeId","data-v-0811a1e9"]]);var Oe=pe,ge={name:"TheDialogRule",components:{BaseDialog:Z,BaseInputRange:ae,BaseSetting:Oe},setup:function(){var e=Object(l["b"])(O),t=Object(r["b"])((function(){return e.getters[g.OpenDialog]})),n=function(){return e.commit(j.OpenDialog,"none")},a=Object(r["q"])([{value:"RANDOM"},{value:"INPUT",writeIn:!0}]),c=Object(r["b"])({get:function(){return e.getters[g.RuleType].toUpperCase()},set:function(t){return e.commit(j.UpdateRuleType,t.toLowerCase())}}),i=Object(r["q"])({min:"0",max:"255",disabled:Object(r["b"])((function(){return"random"===e.getters[g.RuleType]}))}),u=Object(r["b"])({get:function(){return e.getters[g.RuleNumber]},set:function(t){return e.commit(j.InputRuleNumber,t)}});return{openDialog:t,close:n,ruleItems:a,rulePicked:c,writeinAttrs:i,writeinInput:u}}};const je=D()(ge,[["render",W]]);var he=je,me={name:"App",components:{TheHeaderChild:U,TheFooterChild:G,TheDialogRule:he},setup:function(){var e=Object(l["b"])(O),t=Object(r["r"])();return Object(r["m"])((function(){return e.dispatch(h.Sketch,t.value)})),{sketchIn:t}}};n("3c67");const ve=D()(me,[["render",c]]);var ye=ve;n("2a2b"),n("5b09"),n("30fe");Object(r["c"])(ye).use(m,O).mount("#app")},e0fc:function(e,t,n){},ef88:function(e,t,n){"use strict";n("031a")},f381:function(e,t,n){"use strict";n("bd57")},f541:function(e,t,n){}});
//# sourceMappingURL=app.0b045bc0.js.map