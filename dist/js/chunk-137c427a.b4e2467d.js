(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-137c427a"],{"7e56":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),null!==t.reports&&0===t.reports.length?e("div",[e("h2",[t._v("Momentan nu sunt raportari.")])]):t._e(),null!=t.reports&&t.reports.length?e("div",[e("h2",[t._v("Momentan sunt "+t._s(t.reports.length)+" sesizari in asteptare.")]),e("table",{staticClass:"table table-bordered",staticStyle:{"margin-top":"20px"}},[t._m(1),e("tbody",t._l(t.reports,(function(a,o){return e("tr",{key:a.id},[e("td",[t._v(t._s(o))]),1===a.report_type?e("td",[t._v("Profil")]):t._e(),2===a.report_type?e("td",[t._v("Postare")]):t._e(),e("td",{staticStyle:{width:"260px"}},[e("p",{staticClass:"motiv",staticStyle:{"margin-bottom":"-10px!important"}},[t._v(t._s(a.reason))])]),e("td",[t._v(t._s(t.formatDate(a.updated_at)))]),1===a.report_type?e("td",[e("a",{staticStyle:{color:"black","font-weight":"bold"},attrs:{href:t.frontend+"/report/profile/"+a.link}},[t._v(t._s(a.reportedFName)+" "+t._s(a.reportedLName))])]):t._e(),2===a.report_type?e("td",[e("a",{staticStyle:{color:"black","font-weight":"bold"},attrs:{href:t.frontend+"/report/post/"+a.link}},[t._v(t._s(a.reportedFName)+" "+t._s(a.reportedLName))])]):t._e(),e("td",[e("a",{staticStyle:{color:"black","text-decoration":"none","font-weight":"bold"},attrs:{href:t.frontend+"/profile/"+a.sender_id}},[t._v(t._s(a.senderFName)+" "+t._s(a.senderLName))])]),e("td",[e("button",{staticClass:"btn btn-secondary btn-modal",staticStyle:{"margin-bottom":"10px"},attrs:{"data-toggle":"tooltip","data-trigger":"hover","data-placement":"bottom",title:"Baneaza utilizatorul",type:"button"},on:{click:function(e){return t.confirm_ban(a.reported_id,a.id)}}},[e("span",{staticClass:"material-icons"},[t._v("do_disturb_on")])]),e("button",{staticClass:"btn btn-secondary btn-modal",staticStyle:{"margin-bottom":"10px"},attrs:{"data-toggle":"tooltip","data-trigger":"hover","data-placement":"bottom",title:"Acorda avertisment",type:"button"},on:{click:function(e){return t.confirm_warn(a.reported_id,a.id)}}},[e("span",{staticClass:"material-icons"},[t._v("warning_amber")])]),e("button",{staticClass:"btn btn-secondary btn-modal",staticStyle:{"margin-bottom":"10px"},attrs:{"data-toggle":"tooltip","data-trigger":"hover","data-placement":"bottom",title:"Inchide reclamatia fara a lua vreo masura",type:"button"},on:{click:function(e){return t.closeReport(a.id)}}},[e("span",{staticClass:"material-icons"},[t._v("beenhere")])])])])})),0)])]):t._e(),e("div",{staticClass:"modal fade",attrs:{id:"modal-confirm-ban",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-row"},[e("div",{},[e("label",{attrs:{for:"validationServer03"}},[t._v("Motiv ban")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],staticClass:"form-control",attrs:{type:"text",id:"validationServer03",required:""},domProps:{value:t.reason},on:{input:function(a){a.target.composing||(t.reason=a.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" Este necesara specificarea motivului pentru care utilizatorul urmeaza sa fie banat. ")])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.banUser(t.actualUserId,t.reason,t.reportID)}}},[t._v("Ban utilizator")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"modal-confirm-warn",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-row"},[e("div",{},[e("label",{attrs:{for:"validationServer03"}},[t._v("Motiv averizare")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.reason,expression:"reason"}],staticClass:"form-control",attrs:{type:"text",id:"warnInput",required:""},domProps:{value:t.reason},on:{input:function(a){a.target.composing||(t.reason=a.target.value)}}}),e("div",{staticClass:"invalid-feedback"},[t._v(" Este necesara specificarea motivului pentru care utilizatorul urmeaza sa fie avertizat. ")])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.warnUser(t.actualUserId,t.reason,t.reportID)}}},[t._v("Aplica avertizarea")])])])])])])},r=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[o("a",{attrs:{href:"/"}},[o("img",{staticStyle:{width:"50px"},attrs:{src:e("bca0"),alt:"Logo"}})]),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav mr-auto"},[o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"/admin"}},[t._v("Utilizatori")])]),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",staticStyle:{"font-weight":"bold"}},[t._v("Raportari")])]),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"/admin/applications"}},[t._v("Aplicatii")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"thead-light"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Tipul")]),e("th",{attrs:{scope:"col"}},[t._v("Motivul")]),e("th",{attrs:{scope:"col"}},[t._v("Data trimiterii")]),e("th",{attrs:{scope:"col"}},[t._v("Link")]),e("th",{attrs:{scope:"col"}},[t._v("Trimis de")]),e("th",{attrs:{scope:"col"}},[t._v("Actiune")])])])}],n=e("bc3a"),i=e.n(n),s=e("5fb0");$((function(){$("body").tooltip({selector:'[data-toggle="tooltip"]'})}));var l={data:function(){return{reports:null,actualUserId:null,reason:"",reportID:null,frontend:s["b"]}},mounted:function(){var t=this;i.a.get(s["a"]+"/api/verifyData",{params:{token:localStorage.getItem("token")}}).then((function(a){localStorage.setItem("admin",a.data["isAdmin"]),0===a.data["isAdmin"]?t.$router.push("/"):t.getReports()})).catch((function(t){console.log(t)}))},methods:{formatDate:function(t){var a=new Date(t),e=["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];return a.getDate()+" "+e[a.getMonth()]+" "+a.getFullYear()},warnUser:function(t,a,e){var o=this;i.a.post(s["a"]+"/api/warnUser",{token:localStorage.getItem("token"),userID:t,reason:a}).then((function(){$("#modal-user").modal("hide"),$("#modal-confirm-warn").modal("hide"),o.markSolved(e),o.actualUserId=null,o.actualUserIndex=null,o.reason=""})).catch((function(t){console.log(t)}))},closeReport:function(t){this.markSolved(t),this.getReports()},markSolved:function(t){var a=this;i.a.post(s["a"]+"/api/markSolved",{token:localStorage.getItem("token"),reportID:t}).then((function(){a.getReports()})).catch((function(t){console.log(t)}))},getReports:function(){var t=this;i.a.get(s["a"]+"/api/getReports",{}).then((function(a){t.reports=a.data["reports"]})).catch((function(t){console.log(t)}))},banUser:function(t,a,e){var o=this;i.a.post(s["a"]+"/api/banUser",{token:localStorage.getItem("token"),userID:t,reason:a}).then((function(){$("#modal-user").modal("hide"),$("#modal-confirm-ban").modal("hide"),$("#modal-ban-user").modal("show"),o.markSolved(e),o.actualUserId=null,o.actualUserIndex=null,o.reason=""})).catch((function(t){console.log(t)}))},back:function(){this.$router.push("/admin")},confirm_ban:function(t,a){this.actualUserId=t,this.reportID=a,$("#modal-confirm-ban").modal("show")},confirm_warn:function(t,a){this.actualUserId=t,this.reportID=a,$("#modal-confirm-warn").modal("show")}}},c=l,d=(e("fdc6"),e("2877")),u=Object(d["a"])(c,o,r,!1,null,null,null);a["default"]=u.exports},ba57:function(t,a,e){},bca0:function(t,a,e){t.exports=e.p+"img/Logo.eebb1f88.png"},fdc6:function(t,a,e){"use strict";e("ba57")}}]);
//# sourceMappingURL=chunk-137c427a.b4e2467d.js.map