(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-037d8ff8"],{"0168":function(t,a,s){"use strict";s("66e4")},"66d4":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"login"}},[e("div",{staticClass:"container d-flex align-items-center flex-column"},[!1===t.valid&&null!==t.valid?e("div",{staticClass:"container"},[e("p",{staticClass:"not-found"},[t._v("Link invalid.")])]):t._e(),!0===t.valid&&null!==t.valid?e("div",{staticClass:"container my-5 d-flex align-items-center flex-column"},[e("img",{staticClass:"logo",attrs:{src:s("bca0")}}),e("h2",[t._v("Resetare parola")]),e("div",{staticClass:"container my-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 mx-auto"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"text",id:"name",required:""},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"name"}},[t._v("Parola")])]),e("div",[e("button",{staticClass:"btn-login d-inline p-2",attrs:{type:"button"},on:{click:t.resetPassword}},[t._v("Resetare parola")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"confirmModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._m(1),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.goToLogin}},[t._v("Login")])])])])])]):t._e()])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Este necesara verificarea contului.")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-body"},[s("div",{staticClass:"pre-formatted"},[t._v("Parola a fost resetata cu succes!"),s("br")])])}],o=s("bc3a"),n=s.n(o),l=s("5fb0"),r={data:function(){return{valid:null,email:decodeURIComponent(this.$route.params.email),code:this.$route.params.code,password:null}},mounted:function(){this.verify()},methods:{goToLogin:function(){$("#confirmModal").modal("hide"),this.$router.push("/login")},resetPassword:function(){null!==this.password&&""!==this.password&&n.a.post(l["a"]+"/api/resetPassword",{email:this.email,newPassword:this.password}).then((function(){$("#confirmModal").modal("show",{backdrop:"static",keyboard:!1})})).catch((function(t){console.log(t)}))},verify:function(){var t=this;n.a.post(l["a"]+"/api/verifyRecovery",{email:this.email,code:this.code}).then((function(a){"INVALID"===a.data["message"]&&(t.valid=!1),"success"===a.data["message"]&&(t.valid=!0)})).catch((function(){t.valid=!1}))}}},c=r,d=(s("0168"),s("2877")),u=Object(d["a"])(c,e,i,!1,null,"c1d9f6a0",null);a["default"]=u.exports},"66e4":function(t,a,s){},bca0:function(t,a,s){t.exports=s.p+"img/Logo.eebb1f88.png"}}]);
//# sourceMappingURL=chunk-037d8ff8.2be01607.js.map