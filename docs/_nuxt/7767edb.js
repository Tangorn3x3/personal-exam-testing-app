(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{589:function(e,t,n){"use strict";n.r(t);var o=n(96),r=n(98),l=n(543),c=(n(199),n(201)),d=Object(c.a)("flex"),h=Object(c.a)("layout"),f=n(183),m=n(526),v=n(47),y=n(157),O=(n(9),n(8),n(7),n(12),n(13),n(3)),j=(n(58),n(1).a.directive("google-identity-login-btn",{bind:function(e,t,n){!function(){if(!e.id)throw new Error('The google sign in container requires an "id" attribute');if(!n.context.onGoogleAuthSuccess)throw new Error("The method onGoogleAuthSuccess must be defined on the component")}();var o=t.value.clientId,r={type:t.value.type||"standard",shape:t.value.shape||"rectangular",theme:t.value.theme||"dark",text:t.value.text||"continue_with",size:t.value.size||"large",locale:t.value.locale||"ru",logo_alignment:t.value.logo_alignment||"center",width:t.value.width||"300px"},l=e.id,c=document.createElement("script");function d(e){n.context.onGoogleAuthSuccess(e)}c.setAttribute("src","https://accounts.google.com/gsi/client"),document.head.appendChild(c),c.onload=function(){google.accounts.id.initialize({client_id:o,callback:d}),google.accounts.id.renderButton(document.getElementById(l),r)}}})),w=n(43),I=n(25),_=n(34),x=n(39);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={directives:{GoogleSignInButton:j},name:"LoginPageComponent",data:function(){return{googleClientId:w.c.auth.google.clientId,appName:x.b.appName,error:""}},computed:k({},Object(I.e)("auth",["user","loggedIn","busy"])),mounted:function(){console.log("$auth",this.$auth),console.log("store",this.$store.state.auth)},methods:k(k({},Object(I.b)("support",{reloadInfo:"reloadPlatformInfo"})),{},{onGoogleAuthSuccess:function(e){var t=e.credential,n=JSON.parse(atob(t.split(".")[1]));console.table(n),this.$auth.setUserToken(t),this.initRequiredData(),this.$auth.setUser(n)},initRequiredData:function(){this.reloadInfo(),Object(_.f)(x.a.courses,{name:"Java"})}})},C=n(31),D={components:{LoginPageComponent:Object(C.a)(S,(function(){var e=this,t=e._self._c;return t(l.a,{attrs:{fluid:"","fill-height":""}},[t(h,{attrs:{"align-center":"","justify-center":""}},[t(d,{attrs:{xs12:"",sm8:"",md4:""}},[t(o.a,{staticClass:"elevation-3",attrs:{text:""}},[t(v.a,{attrs:{dark:"",flat:"",color:"primary"}},[t(y.b,[e._v(e._s(e.appName))])],1),e._v(" "),t(r.b,[e.busy?t(f.a,{attrs:{indeterminate:"",color:"primary"}}):t("div",{directives:[{name:"google-identity-login-btn",rawName:"v-google-identity-login-btn",value:{clientId:e.googleClientId,theme:"dark"},expression:"{ clientId: googleClientId, theme: 'dark' }"}],staticStyle:{display:"flex","justify-content":"center"},attrs:{id:"google-login-btn"}},[e._v("\n            Продолжить с Google\n          ")])],1),e._v(" "),t(r.a,[t(m.a)],1)],1)],1)],1)],1)}),[],!1,null,"3864a72e",null).exports},layout:"inspire"},E=Object(C.a)(D,(function(){return(0,this._self._c)("login-page-component")}),[],!1,null,"787762c3",null);t.default=E.exports}}]);