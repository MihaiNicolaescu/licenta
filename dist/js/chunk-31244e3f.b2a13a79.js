(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31244e3f"],{"0f90":function(t,a,e){"use strict";e("9d78")},"1be8":function(t,a,e){},7657:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid"},[t._m(0),e("div",{staticClass:"container shadow-sm aplication"},[e("h3",{staticStyle:{"text-align":"center","margin-bottom":"35px"}},[t._v("Aplicatie pentru gradul de producator")]),!1===t.checkIfHasAplication||null!==t.application&&0===t.application.pending&&-1!==t.application.status?e("div",{staticClass:"edit"},[e("form",{staticClass:"form-group"},[e("div",{staticClass:"d-flex align-items-center flex-column"},[e("div",{staticClass:"d-flex flex-row"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"form-control",staticStyle:{width:"335px"},attrs:{type:"text",id:"firstName",required:""},domProps:{value:t.firstName},on:{input:function(a){a.target.composing||(t.firstName=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"firstName"}},[t._v("Nume")])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",staticStyle:{width:"335px"},attrs:{type:"text",id:"lastName",required:""},domProps:{value:t.lastName},on:{input:function(a){a.target.composing||(t.lastName=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"lastName"}},[t._v("Prenume")])])]),e("div",{staticClass:"d-flex flex-row adresa"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.judet,expression:"judet"}],staticClass:"form-control",staticStyle:{width:"335px"},attrs:{type:"text",id:"judet",required:""},domProps:{value:t.judet},on:{input:function(a){a.target.composing||(t.judet=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"judet"}},[t._v("Judet")])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localitate,expression:"localitate"}],staticClass:"form-control",staticStyle:{width:"335px"},attrs:{type:"text",id:"localitate",required:""},domProps:{value:t.localitate},on:{input:function(a){a.target.composing||(t.localitate=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"localitate"}},[t._v("Localitate")])])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.adresa,expression:"adresa"}],staticClass:"form-control",staticStyle:{width:"670px"},attrs:{type:"text",id:"adresa",required:""},domProps:{value:t.adresa},on:{input:function(a){a.target.composing||(t.adresa=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"adresa"}},[t._v("Adresa completa")])]),e("div",{staticClass:"d-flex flex-row"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.seria,expression:"seria"}],staticClass:"form-control",attrs:{type:"text",id:"seria",required:""},domProps:{value:t.seria},on:{input:function(a){a.target.composing||(t.seria=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"seria"}},[t._v("Serie")])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.numar_serie,expression:"numar_serie"}],staticClass:"form-control",attrs:{type:"text",id:"numar_serie",required:""},domProps:{value:t.numar_serie},on:{input:function(a){a.target.composing||(t.numar_serie=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"numar_serie"}},[t._v("Numar serie")])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cnp,expression:"cnp"}],staticClass:"form-control",attrs:{type:"text",id:"cnp",required:""},domProps:{value:t.cnp},on:{input:function(a){a.target.composing||(t.cnp=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"cnp"}},[t._v("CNP")])])]),e("div",{staticClass:"d-flex flex-row"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.nr_certificat,expression:"nr_certificat"}],staticClass:"form-control",staticStyle:{width:"335px"},attrs:{type:"text",id:"nr_certificat",required:""},domProps:{value:t.nr_certificat},on:{input:function(a){a.target.composing||(t.nr_certificat=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"nr_certificat"}},[t._v("Numar Certificat")])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.primaria,expression:"primaria"}],staticClass:"form-control",staticStyle:{width:"335px"},attrs:{type:"text",id:"primaria",required:""},domProps:{value:t.primaria},on:{input:function(a){a.target.composing||(t.primaria=a.target.value)}}}),e("label",{staticClass:"form-control-placeholder",attrs:{for:"primaria"}},[t._v("Primaria")])])]),e("div",{staticClass:"custom-file"},[e("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"copie_certificat",accept:".jpg, .png, .pdf",required:""},on:{change:t.onCopieCertificatSelected}}),e("label",{staticClass:"custom-file-label",attrs:{for:"copie_certificat"}},[t._v("Selectati copia certificatului de producator")]),e("div",{staticClass:"invalid-feedback"},[t._v("Invalid file")])]),e("div",{staticClass:"custom-file"},[e("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"copie_ci",required:"",accept:".jpg, .png,.pdf"},on:{change:t.onCopieCISelected}}),e("label",{staticClass:"custom-file-label",attrs:{for:"copie_ci"}},[t._v("Selectati copia C.I/B.I")]),e("div",{staticClass:"invalid-feedback"},[t._v("Invalid file")])]),e("div",{staticClass:"input-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.alte_precizari,expression:"alte_precizari"}],staticClass:"form-control textarea",attrs:{placeholder:"*Alte precizari",id:"altele",rows:"3"},domProps:{value:t.alte_precizari},on:{input:function(a){a.target.composing||(t.alte_precizari=a.target.value)}}})])]),e("div",{staticClass:"d-flex align-items-left"},[e("button",{staticClass:"btn btn-success",staticStyle:{width:"100%","margin-top":"10px"},attrs:{type:"button","data-toggle":"modal","data-target":"#confirmModal"},on:{click:t.verifyForm}},[t._v("Trimite aplicatia ")])])])]):t._e(),!0===t.checkIfHasAplication&&null!=t.checkIfHasAplication&&1===t.application.pending?e("div",[e("p",[t._v("Aplicatia este in curs de procesare, va rugam sa asteptati raspunsul!")]),e("p",[t._v("Pentru a anula aplicatia trimisa va rugam sa apasati butonul de mai jos.")]),e("button",{staticClass:"btn btn-danger",attrs:{"data-toggle":"modal","data-target":"#deleteModal"}},[t._v("Anuleaza aplicatia")])]):t._e(),!0===t.checkIfHasAplication&&null!=t.checkIfHasAplication&&0===t.application.pending&&-1===t.application.status?e("div",[e("p",[t._v("Aplicatia a fost respinsa, motivul se poate regasi mai jos!")]),e("p",[t._v("Puteti trimite o noua aplicatie corectand greselile specificate in motivul respingeri, daca trimiteti o aplicatie de mai multe ori puteti primi interdictie la acest grad.")]),e("p",[t._v("Motivul respingeri: "+t._s(t.application.motiv_respingere))]),e("p",{staticStyle:{"font-weight":"bold"}},[t._v("Este necesara reincarcarea documentelor!")]),e("button",{staticClass:"btn btn-danger",on:{click:t.enableEditApplication}},[t._v("Editeaza aplicatia")])]):t._e()]),e("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"confirmModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),t._m(2),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Anuleaza")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.deleteApplication}},[t._v("Sterge ")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"confirmModal",tabindex:"-1",role:"dialog","aria-labelledby":"confirmModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(3),e("div",{staticClass:"modal-body"},[e("p",[t._v(t._s(t.infoForm))])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Continuă editarea")]),t.validForm?e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.sendForm}},[t._v(" Trimite formularul ")]):t._e()])])])]),e("alert-box")],1)},r=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"d-flex align-items-center flex-column"},[i("nav",{staticClass:"navbar navbar-light bg-light",staticStyle:{width:"700px"}},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:e("bca0"),alt:"Logo",width:"50px"}})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"deleteModalLongTitle"}},[t._v("Confirmare")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-body"},[e("p",[t._v("Sunteti sigur ca doriti sa stergeti aplicatia trimisa?")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"confirmModalLongTitle"}},[t._v("Confirmare")])])}],s=e("5fb0"),o=e("bc3a"),l=e.n(o),c=e("ba9d"),n={data:function(){return{infoForm:"Va rog sa confirmați trimiterea formularului. Daca formularul nu contine date reale riscati sa primiti interdictie pentru a accesa acest grad.",id:null,email:null,firstName:"",lastName:"",judet:"",localitate:"",adresa:"",seria:"",numar_serie:"",cnp:"",nr_certificat:"",primaria:"",alte_precizari:"",copie_ci:null,copie_certificat:null,errors:[],checkIfHasAplication:null,application:null,validForm:!1}},components:{"alert-box":c["a"]},mounted:function(){this.verifyToken(),this.getUserData(),this.verifyIfAplciationExists()},methods:{deleteApplication:function(){var t=this;l.a.post(s["a"]+"/api/deleteApplication",{token:localStorage.getItem("token")}).then((function(){t.$router.go(0)})).catch((function(t){console.log(t)}))},enableEditApplication:function(){l.a.post(s["a"]+"/api/enableEditApplication",{token:localStorage.getItem("token")}).then((function(){window.location.reload()}))},verifyIfAplciationExists:function(){var t=this;l.a.get(s["a"]+"/api/checkApplication",{params:{token:localStorage.getItem("token")}}).then((function(a){"NO_APPLICATION"===a.data["message"]?t.checkIfHasAplication=!1:(t.application=a.data["data"],t.checkIfHasAplication=!0,t.email=t.application.user_email,t.firstName=t.application.user_firstName,t.lastName=t.application.user_lastName,t.judet=t.application.judet,t.localitate=t.application.localitate,t.adresa=t.application.adresa,t.seria=t.application.serie_ci,t.numar_serie=t.application.numar_serie_ci,t.cnp=t.application.cnp,t.nr_certificat=t.application.nr_certificat,t.primaria=t.application.primaria,t.alte_precizari=t.application.alte_precizari,t.checkIfHasAplication=!0)})).catch((function(t){console.log(t)}))},sendForm:function(){var t=this;!0===this.validForm?l.a.post(s["a"]+"/api/addApplication",{firstName:this.firstName,lastName:this.lastName,judet:this.judet,localitate:this.localitate,adresa:this.adresa,serie_ci:this.seria,numar_ci:this.numar_serie,cnp:this.cnp,nr_certificat:this.nr_certificat,primaria:this.primaria,email:this.email,altele:this.alte_precizari,token:localStorage.getItem("token"),existApp:this.checkIfHasAplication}).then((function(){t.onUploadDocs()})):console.log("Urmeaza afisarea erorilor :D")},verifyForm:function(){""!==this.firstName&&""!==this.lastName&&""!==this.judet&&""!==this.localitate&&""!==this.adresa&&""!==this.seria&&""!==this.numar_serie&&""!==this.cnp&&""!==this.nr_certificat&&""!==this.primaria&&null!==this.copie_ci&&null!==this.copie_certificat?(this.infoForm="Va rog sa confirmați trimiterea formularului. Daca formularul nu contine date reale riscati sa primiti interdictie pentru a accesa acest grad.",this.validForm=!0):(this.errors=[],""===this.firstName&&this.errors.push("Campul nume de familie este necesar."),""===this.lastName&&this.errors.push("Campul prenume este necesar."),""===this.judet&&this.errors.push("Campul judet este necesar."),""===this.localitate&&this.errors.push("Campul localitate este necesar."),""===this.adresa&&this.errors.push("Capul adresa este necesar."),""===this.seria&&this.errors.push("Campul adresa este necesar."),""===this.numar_serie&&this.errors.push("Campul numar serie este necesar"),""===this.cnp&&this.errors.push("Campul CNP este necesar."),""===this.nr_certificat&&this.errors.push("Campul Nr.Certificat este necesar"),""===this.primaria&&this.errors.push("Campul primaria este necesar"),null===this.copie_certificat&&this.errors.push("Este necesara selectarea unei copii in format jpg sau png a certificatului de producator"),null===this.copie_ci&&this.errors.push("Este necesara selectarea unei copii in format jpg sau png a C.I"),this.infoForm="Aplicatia are campuri necompletate sau nu sunt selectate documentele cerute!",this.validForm=!1)},onCopieCISelected:function(){this.copie_ci=null,this.copie_ci=document.getElementById("copie_ci").files[0]},onCopieCertificatSelected:function(){this.copie_certificat=null,this.copie_certificat=document.getElementById("copie_certificat").files[0]},onUploadDocs:function(){var t=this,a=new FormData;a.append("copie_ci",this.copie_ci,"copie_ci_"+this.id+".jpg"),a.append("copie_certificat",this.copie_certificat,"copie_certificat_"+this.id+".jpg"),a.append("token",localStorage.getItem("token")),l.a.post(s["a"]+"/api/addApplicationDocs",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){t.$router.push("/")})).catch((function(t){console.log(t)}))},verifyToken:function(){l.a.get(s["a"]+"/api/fetchUserData",{params:{token:localStorage.getItem("token")}}).catch((function(){document.getElementById("overlay-alert").style.display="block"}))},home:function(){this.$router.push("/")},getUserData:function(){var t=this;l.a.get(s["a"]+"/api/fetchUserData",{params:{token:localStorage.getItem("token")}}).then((function(a){1===a.data["producer"]&&t.$router.push("/"),t.id=a.data["id"],t.firstName=a.data["firstName"],t.lastName=a.data["lastName"],t.email=a.data["email"]})).catch((function(){t.$router.push("login")}))}}},p=n,d=(e("7725"),e("2877")),u=Object(d["a"])(p,i,r,!1,null,"e97d0836",null);a["default"]=u.exports},7725:function(t,a,e){"use strict";e("1be8")},"9d78":function(t,a,e){},ba9d:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"overlay-alert"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex align-items-center flex-column"},[e("p",{attrs:{id:"alert-text"}},[t._v("A aparut o eroare la incarcarea informatiilor, este necesara reconecarea in aplicatie.")]),e("button",{staticClass:"btn btn-danger btn-profile",on:{click:function(a){return t.reconectError()}}},[t._v("OK")])])])])},r=[],s={methods:{reconectError:function(){this.$router.push("login"),localStorage.clear()}}},o=s,l=(e("0f90"),e("2877")),c=Object(l["a"])(o,i,r,!1,null,"24127aa8",null);a["a"]=c.exports},bca0:function(t,a,e){t.exports=e.p+"img/Logo.eebb1f88.png"}}]);
//# sourceMappingURL=chunk-31244e3f.b2a13a79.js.map