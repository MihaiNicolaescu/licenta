(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c80cb878"],{"53c4":function(t,i,e){},bca0:function(t,i,e){t.exports=e.p+"img/Logo.eebb1f88.png"},cf45:function(t,i,e){"use strict";e("53c4")},e985:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container-fluid container-view"},[t._m(0),e("div",{staticClass:"d-flex align-items-center flex-column notifications"},[e("div",{staticClass:"d-flex justify-content-center",staticStyle:{width:"900px"}},[e("ul",{staticClass:"list-group",staticStyle:{width:"100%"}},t._l(t.notifications,(function(i){return e("li",{key:i.id,staticClass:"list-group-item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-1"},[1===i.type?e("img",{staticStyle:{"object-fit":"cover"},attrs:{src:t.backend+i.link_profile,width:"50",height:"50"}}):t._e(),-123===i.type?e("p",{staticStyle:{"font-size":"30px"}},[t._v("🎇")]):t._e(),-124===i.type?e("p",{staticStyle:{"font-size":"30px"}},[t._v("⚠️")]):t._e(),-122===i.type?e("p",{staticStyle:{"font-size":"30px"}},[t._v("⚠️")]):t._e(),-125===i.type?e("p",{staticStyle:{"font-size":"30px"}},[t._v("❌️")]):t._e()]),e("div",{staticClass:"col-sm-9"},[e("p",{staticClass:"notification-message"},[e("a",{staticClass:"link",attrs:{href:"/profile/"+i.from}},[t._v(t._s(i.firstName)+" "+t._s(i.lastName))]),t._v(" "+t._s(i.message)+".")])])])])})),0)])])])},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"d-flex align-items-center flex-column"},[a("nav",{staticClass:"navbar navbar-light bg-light",staticStyle:{width:"900px","margin-bottom":"10px"}},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e("bca0"),alt:"Logo",width:"50px"}})]),a("h2",[t._v("Notificări")])])])}],n=e("bc3a"),c=e.n(n),o=e("5fb0"),l={data:function(){return{notifications:[],backend:o["a"]}},mounted:function(){this.verifyToken(),this.getNotifications()},methods:{getNotifications:function(){var t=this;c.a.get(o["a"]+"/api/getNotifications",{params:{token:localStorage.getItem("token")}}).then((function(i){t.notifications=i.data["notifications"],t.notifications.length>0?t.hasNotifications=1:t.hasNotifications=0})).catch((function(t){console.log(t)}))},back:function(){this.$router.push("/")},verifyToken:function(){var t=this;c.a.get(o["a"]+"/api/fetchUserData",{params:{token:localStorage.getItem("token")}}).then((function(){})).catch((function(){t.$router.push("login")}))}}},f=l,r=(e("cf45"),e("2877")),u=Object(r["a"])(f,a,s,!1,null,null,null);i["default"]=u.exports}}]);
//# sourceMappingURL=chunk-c80cb878.755502c8.js.map