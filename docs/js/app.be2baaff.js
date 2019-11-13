(function(e){function t(t){for(var r,o,u=t[0],l=t[1],s=t[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/v-number/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"125a":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".v-number[data-v-484b7acc]{overflow:hidden;position:relative;display:inline-block}.v-number__current-value[data-v-484b7acc]{position:absolute}.v-number__original-value[data-v-484b7acc]{visibility:hidden}.v-number__animated[data-v-484b7acc]{position:absolute;-webkit-transition-property:top;transition-property:top;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.v-number-new-value-enter[data-v-484b7acc]{top:-100%}.v-number-current-value-leave[data-v-484b7acc],.v-number-new-value-enter-to[data-v-484b7acc]{top:0}.v-number-current-value-leave-to[data-v-484b7acc]{top:100%}",""])},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",[e._m(0),n("h2",{staticStyle:{"text-align":"center"}},[e._v("\n      Smooth number transitions library for Vue.js\n    ")]),n("v-number",{staticClass:"v-number",attrs:{value:e.number}})],1),e._m(1),n("div",{staticStyle:{flex:"1"}}),e._m(2)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("img",{staticClass:"header__logo",attrs:{src:"img/logo.png"}}),n("h1",{staticClass:"header__title"},[e._v("Number")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"100px"}},[n("p",[e._v("Usage:")]),n("code",[n("div",[e._v("\n        <v-number v-model='someValue'>\n      ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=maxflex&repo=v-number&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}})])}],o=(n("6b54"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-number"},[n("transition",{attrs:{name:"v-number-current-value"}},[null!==e.currentValue?n("div",{staticClass:"v-number__animated v-number__current-value",style:e.transitionDuration},[e._v("\n      "+e._s(e.currentValue)+"\n    ")]):e._e()]),n("transition",{attrs:{name:"v-number-new-value"}},[null!==e.newValue?n("div",{staticClass:"v-number__animated v-number__new-value",style:e.transitionDuration},[e._v("\n      "+e._s(e.newValue)+"\n    ")]):e._e()]),n("span",{staticClass:"v-number__original-value"},[e._v("\n    "+e._s(e.value)+"\n  ")])],1)}),u=[],l=(n("c5f6"),{name:"v-number",props:{value:{required:!0,validator:function(e){return!isNaN(e)}},speed:{type:Number,default:500}},watch:{value:function(e){var t=this;this.isAnimating||(this.isAnimating=!0,this.currentValue=null,this.newValue=e,setTimeout((function(){t.currentValue=e,t.newValue=null,t.isAnimating=!1}),this.speed))}},data:function(){return{currentValue:null,newValue:null,isAnimating:!1}},created:function(){this.currentValue=this.value},computed:{transitionDuration:function(){return{transitionDuration:this.speed+"ms"}}}}),s=l,c=(n("f2f6"),n("2877")),p=Object(c["a"])(s,o,u,!1,null,"484b7acc",null),d=p.exports,f={components:{VNumber:d},data:function(){return{number:1,intervalSpeed:2e3,interval:null}},created:function(){this.startInterval()},methods:{startInterval:function(){var e=this;this.interval=setInterval((function(){return e.number++}),this.intervalSpeed)},clearInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.interval)}))}},b=f,v=(n("5c0b"),Object(c["a"])(b,a,i,!1,null,null,null)),m=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("a859"),a=n.n(r);a.a},"68cc":function(e,t,n){var r=n("125a");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("250e7e4e",r,!0,{sourceMap:!1,shadowMode:!1})},8144:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"body,html{height:100%;padding:0;margin:0;overflow:hidden;background:-webkit-gradient(linear,left top,left bottom,from(#34495e),color-stop(#1e647c),color-stop(#00818f),color-stop(#009e90),to(#41b883));background:linear-gradient(180deg,#34495e,#1e647c,#00818f,#009e90,#41b883);color:#fff;font-family:Open Sans,sans-serif}code{background:rgba(0,0,0,.5);width:460px;display:block;padding:20px;border-radius:2px}.header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.header__logo{height:120px}.header__title{font-size:82px;margin-left:18px}.v-number{font-size:100px;color:#db7093}.app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.app,input{padding:10px}input{border:none;border-radius:4px;font-size:16px;background:hsla(0,0%,100%,.5);outline:none;width:60px}",""])},a859:function(e,t,n){var r=n("8144");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("469a83a7",r,!0,{sourceMap:!1,shadowMode:!1})},f2f6:function(e,t,n){"use strict";var r=n("68cc"),a=n.n(r);a.a}});
//# sourceMappingURL=app.be2baaff.js.map