(function(e){function t(t){for(var r,i,u=t[0],o=t[1],l=t[2],b=0,d=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/elementary-cellular-automaton/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0906":function(e,t,n){"use strict";n("b72d")},"0a8e":function(e,t,n){"use strict";n("8b55")},"0d10":function(e,t,n){},1562:function(e,t,n){},3616:function(e,t,n){"use strict";n("e188")},"3b04":function(e,t,n){},"474e":function(e,t,n){"use strict";n("a1ae")},"4bea":function(e,t,n){"use strict";n("a230")},"6a94":function(e,t,n){"use strict";n("1562")},"8b55":function(e,t,n){},"9b2f":function(e,t,n){},a1ae:function(e,t,n){},a230:function(e,t,n){},b72d:function(e,t,n){},b8d2:function(e,t,n){"use strict";n("9b2f")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,i){var u=Object(r["v"])("Alert"),o=Object(r["v"])("Main"),l=Object(r["v"])("MediaQuery");return Object(r["o"])(),Object(r["d"])(l,{conditions:"screen and (max-height:599px) and (orientation:landscape)"},{match:Object(r["y"])((function(){return[Object(r["i"])(u)]})),default:Object(r["y"])((function(){return[Object(r["i"])(o)]})),_:1})}n("3b04"),n("5b09"),n("30fe");function c(e,t,n,a,c,i){return a.isMatch?Object(r["u"])(e.$slots,"match",{key:0}):Object(r["u"])(e.$slots,"default",{key:1})}var i={name:"MediaQuery",props:{conditions:{type:String,require:!0}},setup:function(e){var t=Object(r["s"])(!1),n=window.matchMedia(e.conditions),a=function(e){return t.value=e.matches};return Object(r["n"])((function(){a(n),n.addEventListener("change",a)})),{isMatch:t}}},u=n("6b0d"),o=n.n(u);const l=o()(i,[["render",c]]);var s=l,b={id:"main",class:"el-box --0"},d={id:"main-wrapper",class:"el-center"},p={class:"el-box"},f={class:"el-box"},O={class:"el-box"};function j(e,t,n,a,c,i){var u=Object(r["v"])("Statuses"),o=Object(r["v"])("Playground"),l=Object(r["v"])("ScrollGuide"),s=Object(r["v"])("Settings");return Object(r["o"])(),Object(r["f"])("div",b,[Object(r["g"])("div",d,[Object(r["g"])("header",p,[Object(r["i"])(u)]),Object(r["g"])("main",f,[Object(r["i"])(o),Object(r["i"])(l)]),Object(r["g"])("aside",O,[Object(r["i"])(s)])])])}function v(e,t,n,a,c,i){var u=Object(r["v"])("Status"),o=Object(r["v"])("GitHubLink");return Object(r["o"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(u,Object(r["m"])(Object(r["j"])(a.gen)),null,16),Object(r["i"])(u,Object(r["m"])(Object(r["j"])(a.rule)),null,16),Object(r["i"])(o,{url:"https://github.com/l1ck0h/elementary-cellular-automaton"})],64)}var g,m,h=n("5502"),y=n("3835"),S=n("ade3"),_=(n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("159b"),n("cb29"),n("a9e3"),n("3425")),w=n.n(_),k=n("d4ec"),I=n("bee2"),R=(n("d81d"),n("fd87"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function e(t,n,r,a){Object(k["a"])(this,e),this._rule=t,this._pattern=n,this._state=r,this._spaceSize=r.length,this._gen=a}return Object(I["a"])(e,[{key:"generate",value:function(){var t=this,n=this._state.map((function(e,n){var r,a;switch(t._pattern){case"periodic":r=function(e){return e>0?e-1:t._spaceSize-1},a=function(e){return(e+1)%t._spaceSize};break;case"reflective":r=function(e){return e>0?e-1:e},a=function(e){return e+1!==t._spaceSize?(e+1)%t._spaceSize:e};break}var c=t._state[r(n)],i=e,u=t._state[a(n)],o=Math.pow(2,2)*c+Math.pow(2,1)*i+Math.pow(2,0)*u;return t._rule>>o&1?1:0}));return this._state=n,this._gen++,new e(this._rule,this._pattern,this._state,this._gen)}},{key:"state",get:function(){return this._state}},{key:"gen",get:function(){return this._gen}}]),e}()),M=function(e,t,n,r){var a=new Int8Array(n);switch(r){case"single":a[~~(n/2)]=1;break;case"random":a=a.map((function(){return Math.floor(2*Math.random())}));break}return new R(e,t,a,1)},T=Symbol(),G={Gen:"Gen",RuleType:"RuleType",RuleNumber:"RuleNumber",InitialState:"InitialState",Pattern:"Pattern"},N={UpdateGen:"UpdateGen",UpdateRuleType:"UpdateRuleType",InputRuleNumber:"InputRuleNumber",UpdateInitialState:"UpdateInitialState",UpdatePattern:"UpdatePattern"},L={ShowModal:"ShowModal",CloseModal:"CloseModal",Sketch:"Sketch"},U=Object(h["a"])({state:{gen:0,ruleType:"random",ruleNumber:"30",initialState:"single",pattern:"periodic"},getters:(g={},Object(S["a"])(g,G.Gen,(function(e){return e.gen.toString()})),Object(S["a"])(g,G.RuleType,(function(e){return e.ruleType})),Object(S["a"])(g,G.RuleNumber,(function(e){return e.ruleNumber})),Object(S["a"])(g,G.InitialState,(function(e){return e.initialState})),Object(S["a"])(g,G.Pattern,(function(e){return e.pattern})),g),mutations:(m={},Object(S["a"])(m,N.UpdateGen,(function(e,t){e.gen=t})),Object(S["a"])(m,N.UpdateRuleType,(function(e,t){e.ruleType=t})),Object(S["a"])(m,N.InputRuleNumber,(function(e,t){e.ruleNumber=t})),Object(S["a"])(m,N.UpdateInitialState,(function(e,t){e.initialState=t})),Object(S["a"])(m,N.UpdatePattern,(function(e,t){e.pattern=t})),m),actions:Object(S["a"])({},L.Sketch,(function(e,t){var n=e.commit,r=e.state,a=8,c=function(e){var c,i,u,o=function(t,n){t.forEach((function(t,r){1===t&&e.fill("#58f898").rect(r*a,(n-1)*a,a,a)}))},l=function(){var e=t.clientWidth,n=t.clientHeight;return c=Math.round(e/a),i=Math.round(n/a),[e,n]},s=function(){e.clear(),"random"===r.ruleType&&n(N.InputRuleNumber,Math.floor(256*Math.random()).toString()),u=M(Number(r.ruleNumber),r.pattern,c,r.initialState),o(u.state,u.gen),n(N.UpdateGen,u.gen),e.removeElements(),e.loop()};e.setup=function(){var n,r=l(),a=Object(y["a"])(r,2),c=a[0],i=a[1];e.createCanvas(c,i).style("display","block"),e.createDiv("CLICK/TOUCH HERE TO START!").style("position","absolute").style("color","#fff"),null===(n=e.select("#".concat(t.id)))||void 0===n||n.mouseClicked(s)},e.draw=function(){if(!u||u.gen>i)return e.noLoop();u=u.generate(),o(u.state,u.gen),n(N.UpdateGen,u.gen)},e.windowResized=function(){e.noLoop(),e.clear(),e.noCanvas();var t=l(),r=Object(y["a"])(t,2),a=r[0],c=r[1];e.createCanvas(a,c),n(N.UpdateGen,0)}};new w.a(c,t)})),modules:{}}),x={id:"status",class:"el-box --0 nes-text"};function P(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("span",x,[Object(r["g"])("div",null,Object(r["w"])(n.title),1),Object(r["g"])("div",null,Object(r["w"])(n.content),1)])}var E={name:"Status",props:{title:String,content:String}};n("b8d2");const A=o()(E,[["render",P],["__scopeId","data-v-04335f25"]]);var C=A,q={id:"github-link",class:"el-box --0"},z=["href"];function H(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("span",q,[Object(r["g"])("a",{class:"nes-icon github is-midium",href:n.url,target:"_blank",rel:"noopener noreferrer"},null,8,z)])}var D={name:"GitHubLink",props:{url:String}};n("ff01");const Q=o()(D,[["render",H],["__scopeId","data-v-139e3ffe"]]);var $=Q,J={name:"Statuses",components:{Status:C,GitHubLink:$},setup:function(){var e=Object(h["b"])(T),t=Object(r["r"])({title:"GEN",content:Object(r["b"])((function(){return e.getters[G.Gen]}))}),n=Object(r["r"])({title:"RULE",content:Object(r["b"])((function(){return e.getters[G.RuleNumber]}))});return{gen:t,rule:n}}};const F=o()(J,[["render",v]]);var K=F,V=function(e){return Object(r["q"])("data-v-d72bcb6e"),e=e(),Object(r["p"])(),e},W={id:"scroll-down",class:"el-box"},Y=V((function(){return Object(r["g"])("div",{class:"el-center"},[Object(r["g"])("div",null,[Object(r["h"])("SETTINGS"),Object(r["g"])("span",{id:"scroll-down--arrow"})])],-1)})),B=[Y];function X(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("div",W,B)}var Z={name:"ScrollGuide"};n("0906");const ee=o()(Z,[["render",X],["__scopeId","data-v-d72bcb6e"]]);var te=ee,ne={id:"playground",class:"el-box",ref:"playground"};function re(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("div",ne,null,512)}var ae={name:"Playground",setup:function(){var e=Object(h["b"])(T),t=Object(r["s"])(null);return Object(r["n"])((function(){return e.dispatch(L.Sketch,t.value)})),{playground:t}}};n("0a8e");const ce=o()(ae,[["render",re],["__scopeId","data-v-126370b1"]]);var ie=ce,ue=function(e){return Object(r["q"])("data-v-5baf4c53"),e=e(),Object(r["p"])(),e},oe={id:"settings",class:"el-box --0"},le={class:"nes-container is-rounded with-title is-dark"},se=ue((function(){return Object(r["g"])("span",{class:"title"},"ELEMENTARY CELLULAR AUTOMATON",-1)})),be={class:"el-center"},de={class:"el-stack"};function pe(e,t,n,a,c,i){var u=Object(r["v"])("InputRange"),o=Object(r["v"])("RadioGroup");return Object(r["o"])(),Object(r["f"])("div",oe,[Object(r["g"])("div",le,[se,Object(r["g"])("div",be,[Object(r["g"])("ul",de,[Object(r["g"])("li",null,[Object(r["i"])(o,Object(r["m"])(Object(r["j"])(a.ruleGroup)),{writeIn:Object(r["y"])((function(){return[Object(r["i"])(u,Object(r["m"])(Object(r["j"])(a.writeIn)),null,16)]})),_:1},16)]),Object(r["g"])("li",null,[Object(r["i"])(o,Object(r["m"])(Object(r["j"])(a.initialStateGroup)),null,16)]),Object(r["g"])("li",null,[Object(r["i"])(o,Object(r["m"])(Object(r["j"])(a.patternGroup)),null,16)])])])])])}n("b0c0");var fe={id:"radio-group",class:"el-stack el-box"},Oe={key:0,class:"el-stack-exception --small"},je=["name","value","checked"],ve={style:{cursor:"pointer"}};function ge(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("div",fe,[Object(r["g"])("label",null,Object(r["w"])(n.fieldLabel),1),n.attention?(Object(r["o"])(),Object(r["f"])("p",Oe,Object(r["w"])(n.attention),1)):Object(r["e"])("",!0),(Object(r["o"])(!0),Object(r["f"])(r["a"],null,Object(r["t"])(n.items,(function(c,i){return Object(r["o"])(),Object(r["f"])("label",{key:i},[Object(r["g"])("input",{type:"radio",class:"nes-radio is-dark",name:n.name,value:c.value,checked:c.checked,onChange:t[0]||(t[0]=function(){return a.onchange&&a.onchange.apply(a,arguments)})},null,40,je),Object(r["g"])("span",ve,Object(r["w"])(c.value),1),c.writeIn?Object(r["u"])(e.$slots,"writeIn",{key:0},void 0,!0):Object(r["e"])("",!0)])})),128))])}var me={name:"RadioGroup",emits:["onchange"],props:{fieldLabel:{type:String,required:!0},attention:{type:String,required:!1},name:{type:String,required:!0},items:Array},setup:function(e,t){var n=t.emit,r=function(e){return n("onchange",e)};return{onchange:r}}};n("db72");const he=o()(me,[["render",ge],["__scopeId","data-v-2bf1b0a3"]]);var ye=he;function Se(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("input",Object(r["l"])({type:"range",class:"el-box nes-input"},n.attrs,{onInput:t[0]||(t[0]=function(){return e.oninput&&e.oninput.apply(e,arguments)})}),null,16)}var _e={name:"InputRange",emits:["oninput"],props:{attrs:{type:Object,required:!1}}};const we=o()(_e,[["render",Se]]);var ke=we,Ie={name:"Settings",components:{RadioGroup:ye,InputRange:ke},setup:function(){var e=Object(h["b"])(T),t=Object(r["r"])({fieldLabel:"INITIAL STATE",name:"initialState-select",items:[{value:"SINGLE",checked:!0},{value:"RANDOM",checked:!1}],onchange:function(t){var n=t.target.value;e.commit(N.UpdateInitialState,n.toLowerCase())}}),n=Object(r["r"])({fieldLabel:"PATTERN",name:"pattern-select",items:[{value:"PERIODIC",checked:!0},{value:"REFLECTIVE",checked:!1}],onchange:function(t){var n=t.target.value;e.commit(N.UpdatePattern,n.toLowerCase())}}),a=Object(r["r"])({fieldLabel:"RULE",attention:"from 0 to 255",name:"rule-select",items:[{value:"RANDOM",checked:!0},{value:"INPUT",checked:!1,writeIn:!0}],onchange:function(t){var n=t.target.value;e.commit(N.UpdateRuleType,n.toLowerCase())}}),c=Object(r["b"])((function(){return"random"===e.getters[G.RuleType]})),i=Object(r["b"])((function(){return e.getters[G.RuleNumber]})),u=Object(r["r"])({attrs:{min:"0",max:"255",disabled:c,value:i},oninput:function(t){return e.commit(N.InputRuleNumber,t.target.value)}});return{initialStateGroup:t,patternGroup:n,ruleGroup:a,writeIn:u}}};n("4bea");const Re=o()(Ie,[["render",pe],["__scopeId","data-v-5baf4c53"]]);var Me=Re,Te={name:"Main",components:{Statuses:K,ScrollGuide:te,Playground:ie,Settings:Me}};n("6a94");const Ge=o()(Te,[["render",j],["__scopeId","data-v-45078567"]]);var Ne=Ge,Le=function(e){return Object(r["q"])("data-v-733cf9aa"),e=e(),Object(r["p"])(),e},Ue={id:"alert"},xe=Le((function(){return Object(r["g"])("strong",{class:"nes-text is-warning"}," Sorry! Please rotate your device from landscape to portrait! ",-1)})),Pe=[xe];function Ee(e,t,n,a,c,i){return Object(r["o"])(),Object(r["f"])("div",Ue,Pe)}var Ae={name:"Alert"};n("3616");const Ce=o()(Ae,[["render",Ee],["__scopeId","data-v-733cf9aa"]]);var qe=Ce,ze={name:"App",components:{MediaQuery:s,Main:Ne,Alert:qe}};n("474e");const He=o()(ze,[["render",a]]);var De=He;Object(r["c"])(De).use(U,T).mount("#app")},d33b:function(e,t,n){},db72:function(e,t,n){"use strict";n("d33b")},e188:function(e,t,n){},ff01:function(e,t,n){"use strict";n("0d10")}});
//# sourceMappingURL=app.63cd859e.js.map