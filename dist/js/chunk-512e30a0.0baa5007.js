(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-512e30a0"],{"7c1c4":function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar navbar-light bg-light"},[n("button",{staticClass:"btn btn-outline-secondary",on:{click:t.back}},[t._v("Back")])]),t.applications.length||null==t.applications?t._e():n("div",[n("h2",[t._v("Momentan nu este nici o aplicatie in asteptare.")])]),0!==t.applications.length&&null!=t.applications?n("div",[n("h2",[t._v("Momentan sunt "+t._s(t.applications.length)+" aplicatii in asteptare.")]),n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.applications,(function(a,i){return n("tr",{key:a.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(i))]),n("td",[t._v(t._s(a.firstName))]),n("td",[t._v(t._s(a.lastName))]),n("td",[t._v(t._s(a.email))]),n("td",[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(n){return t.viewApplicaiton(a.id)}}},[t._v("Vizualizare aplicatie")])])])})),0)])]):t._e()])},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Numele de familie")]),n("th",{attrs:{scope:"col"}},[t._v("Prenume")]),n("th",{attrs:{scope:"col"}},[t._v("Email")]),n("th",{attrs:{scope:"col"}},[t._v("Verifica aplicatia")])])])}],s=n("bc3a"),c=n.n(s),o=n("5fb0"),l={data:function(){return{applications:null}},mounted:function(){var t=this;c.a.get(o["a"]+"/api/verifyData",{params:{token:localStorage.getItem("token")}}).then((function(t){localStorage.setItem("admin",t.data["isAdmin"])})).catch((function(a){console.log(a),t.$router.push("/")})),!1===localStorage.getItem("admin")&&this.$router.push("/"),this.getApplications()},methods:{back:function(){this.$router.push("/admin")},viewApplicaiton:function(t){this.$router.push("/admin/applications/"+t)},getApplications:function(){var t=this;c.a.get(o["a"]+"/api/getApplications",{params:{token:localStorage.getItem("token")}}).then((function(a){t.applications=a.data["users"]})).catch((function(t){console.log(t)}))}}},r=l,p=(n("e386"),n("2877")),u=Object(p["a"])(r,i,e,!1,null,"5e18dbd7",null);a["default"]=u.exports},e200:function(t,a,n){},e386:function(t,a,n){"use strict";n("e200")}}]);
//# sourceMappingURL=chunk-512e30a0.0baa5007.js.map