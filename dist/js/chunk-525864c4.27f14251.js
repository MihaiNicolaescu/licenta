(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-525864c4"],{"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function o(t,e,a,o,n,r,i){try{var s=t[r](i),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(o,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function s(t){o(i,n,r,s,l,"next",t)}function l(t){o(i,n,r,s,l,"throw",t)}s(void 0)}))}}},8393:function(t,e,a){},"96cf":function(t,e,a){var o=function(t){"use strict";var e,a=Object.prototype,o=a.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,a){return t[e]=a}}function c(t,e,a,o){var n=e&&e.prototype instanceof v?e:v,r=Object.create(n.prototype),i=new L(o||[]);return r._invoke=S(t,a,i),r}function d(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(N){return{type:"throw",arg:N}}}t.wrap=c;var u="suspendedStart",m="suspendedYield",p="executing",h="completed",f={};function v(){}function g(){}function b(){}var y={};y[r]=function(){return this};var _=Object.getPrototypeOf,C=_&&_(_(R([])));C&&C!==a&&o.call(C,r)&&(y=C);var w=b.prototype=v.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function a(n,r,i,s){var l=d(t[n],t,r);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,i,s)}),(function(t){a("throw",t,i,s)})):e.resolve(u).then((function(t){c.value=t,i(c)}),(function(t){return a("throw",t,i,s)}))}s(l.arg)}var n;function r(t,o){function r(){return new e((function(e,n){a(t,o,e,n)}))}return n=n?n.then(r,r):r()}this._invoke=r}function S(t,e,a){var o=u;return function(n,r){if(o===p)throw new Error("Generator is already running");if(o===h){if("throw"===n)throw r;return $()}a.method=n,a.arg=r;while(1){var i=a.delegate;if(i){var s=I(i,a);if(s){if(s===f)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(o===u)throw o=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o=p;var l=d(t,e,a);if("normal"===l.type){if(o=a.done?h:m,l.arg===f)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(o=h,a.method="throw",a.arg=l.arg)}}}function I(t,a){var o=t.iterator[a.method];if(o===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,I(t,a),"throw"===a.method))return f;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(o,t.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,f;var r=n.arg;return r?r.done?(a[t.resultName]=r.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,f):r:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var a=t[r];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function a(){while(++n<t.length)if(o.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return i.next=i}}return{next:$}}function $(){return{value:e,done:!0}}return g.prototype=w.constructor=b,b.constructor=g,g.displayName=l(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,a,o,n,r){void 0===r&&(r=Promise);var i=new k(c(e,a,o,n),r);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),l(w,s,"Generator"),w[r]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var o=e.pop();if(o in t)return a.value=o,a.done=!1,a}return a.done=!0,a}},t.values=R,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var a in this)"t"===a.charAt(0)&&o.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(o,n){return s.type="throw",s.arg=t,a.next=o,n&&(a.method="next",a.arg=e),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),E(a),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var o=a.completion;if("throw"===o.type){var n=o.arg;E(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,o){return this.delegate={iterator:R(t),resultName:a,nextLoc:o},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=o}catch(n){Function("r","regeneratorRuntime = r")(o)}},bca0:function(t,e,a){t.exports=a.p+"img/Logo.eebb1f88.png"},c8bd:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"d-flex align-items-center flex-column"},["INVALID_POSTING"!==t.post?a("nav",{staticClass:"navbar navbar-light bg-light",staticStyle:{width:"600px"}},[t._m(0)]):t._e()]),a("div",{staticClass:"container"},[!0===t.invalidPost&&null!==t.invalidPost?a("div",{staticClass:"container"},[a("p",{staticClass:"not-found"},[t._v("Postarea nu este gasita.")]),a("p",{staticClass:"go-home"},[t._v("Apasa "),a("router-link",{attrs:{to:{path:"/"}}},[t._v("aici")]),t._v(" pentru a te intoarce la pagina principala.")],1)]):t._e()]),a("div",{staticClass:"posts-container d-flex align-items-center flex-column"},[!1===t.invalidPost&&null!==t.invalidPost?a("div",{attrs:{id:"posts"}},[a("div",{staticClass:"container-post sn p-3"},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-info-img",attrs:{src:t.backend+t.post.link_profile}}),a("a",{staticStyle:{color:"black","text-decoration":"none","margin-left":"10px"},attrs:{href:"/profile/"+t.post.user_id}},[t._v(t._s(t.post.firstName+" "+t.post.lastName))]),t._m(1)]),a("div",{staticClass:"post-description",staticStyle:{"margin-bottom":"10px","margin-top":"10px"}},[t._v(" "+t._s(t.post.description)+" ")]),a("div",{staticClass:"d-flex align-items-center flex-column image-post"},[1===t.post.has_photo?a("img",{staticClass:"post-image",attrs:{src:t.backend+t.post.link}}):t._e()]),a("button",{directives:[{name:"show",rawName:"v-show",value:0===t.post.vote||null===t.post.vote||-1===t.post.vote,expression:"post.vote === 0 || post.vote === null || post.vote === -1"}],staticClass:"btn btn-react",attrs:{type:"button"},on:{click:function(e){return t.voteUp(t.post.id,t.index,1)}}},[a("span",{staticClass:"material-icons"},[t._v("thumb_up_alt")])]),a("button",{directives:[{name:"show",rawName:"v-show",value:1===t.post.vote,expression:"post.vote === 1"}],staticClass:"btn btn-react",attrs:{type:"button"},on:{click:function(e){return t.cancelVoteUp(t.post.id,t.index,0)}}},[a("span",{staticClass:"material-icons",staticStyle:{color:"blue"}},[t._v("thumb_up_alt")])]),a("span",[t._v(t._s(t.post.votes))]),a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",staticStyle:{resize:"none",height:"60px"},attrs:{maxlength:"255",id:"exampleFormControlTextarea1"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),a("button",{staticClass:"btn btn-success btn-sm",staticStyle:{"margin-top":"5px"},attrs:{type:"button"},on:{click:t.addComment}},[t._v("Adauga comentariu")])]),a("ul",{staticClass:"list-group list-group-flush"},t._l(t.comments,(function(e){return a("li",{key:e.id,staticClass:"list-group-item list-group-flush"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-1"},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"profile-image",attrs:{src:t.backend+e.link_profile}})])]),a("div",{staticClass:"col-10"},[a("p",{staticStyle:{"margin-left":"20px","word-wrap":"break-word"}},[a("a",{staticStyle:{color:"black","text-decoration":"none","font-weight":"bold"},attrs:{href:"/profile/"+e.user_id}},[t._v(t._s(e.firstName)+" "+t._s(e.lastName))]),a("br"),t._v(t._s(e.comment))])]),a("div",{staticClass:"col-1"},[t.id===e.user_id?a("button",{staticClass:"btn btn-outline-danger",staticStyle:{border:"0",background:"transparent"},on:{click:function(a){return t.deleteComment(e.id)}}},[a("span",{staticClass:"material-icons"},[t._v("delete")])]):t._e()])])])})),0)])]):t._e()]),a("div",{staticClass:"modal fade bd-example-modal-sm",attrs:{id:"modalPostare",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-sm",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body",staticStyle:{display:"grid"}},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.confirm_raport}},[t._v("Raportare")]),1===t.isAdmin?a("button",{staticClass:"btn btn-danger",staticStyle:{"margin-top":"5px"},attrs:{type:"button"},on:{click:t.confirm_delete_post}},[t._v("Sterge postarea")]):t._e(),t.id===t.post.user_id?a("button",{staticClass:"btn btn-secondary",staticStyle:{"margin-top":"5px"},attrs:{type:"button"},on:{click:t.deletePost}},[t._v("Sterge postarea")]):t._e()]),t._m(3)])])]),a("div",{staticClass:"modal fade",attrs:{id:"deletePostModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(4),a("div",{staticClass:"modal-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reportReason,expression:"reportReason"}],staticClass:"input-group-text",staticStyle:{width:"100%","font-weight":"normal"},attrs:{type:"text",placeholder:"Motivul stergerii postarii."},domProps:{value:t.reportReason},on:{input:function(e){e.target.composing||(t.reportReason=e.target.value)}}})]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Anuleaza")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.deleteUserPost}},[t._v("Sterge postarea")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"confirmReportModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(5),a("div",{staticClass:"modal-body"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reportReason,expression:"reportReason"}],staticClass:"input-group-text",staticStyle:{width:"100%","font-weight":"normal"},attrs:{type:"text",placeholder:"Motivul raportari. Ex: Postare cu continut inadecvat."},domProps:{value:t.reportReason},on:{input:function(e){e.target.composing||(t.reportReason=e.target.value)}}})]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Inchide")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.sendReport}},[t._v("Trimite raportarea")])])])])]),t._m(6),t._m(7)])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:"/"}},[o("img",{attrs:{src:a("bca0"),alt:"Logo",width:"50px"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-secondary btn-sm",staticStyle:{float:"right",background:"transparent",border:"0"}},[a("span",{staticClass:"material-icons",staticStyle:{color:"black"},attrs:{"data-toggle":"modal","data-target":"#modalPostare"}},[t._v("more_horiz")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Actiuni postare")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Inchide")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"deleteModal"}},[t._v("Sterge postarea utilizatorului")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"raportareTitle"}},[t._v("Raporteaza postarea")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"succesReportSend",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"reportSendModalTitle"}},[t._v("Success")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("p",[t._v("Raportul a fost trimis cu succes, in scurt timp un administrator se va ocupa de acest lucru.")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Inchide")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"failedReportSend",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"reportFailedSendModalTitle"}},[t._v("Success")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("p",[t._v("Am intampinat o problema la trimiterea sesizari tale, te rugam sa incerci mai tarziu, iti multumim!")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Inchide")])])])])])}],r=(a("96cf"),a("1da1")),i=a("bc3a"),s=a.n(i),l=a("5fb0"),c={data:function(){return{id:-1,comment:"",invalidPost:null,reportReason:null,post:null,comments:null,isAdmin:null,backend:l["a"]}},mounted:function(){this.verifyToken(),this.getPost(),this.getComments(),this.getID()},methods:{deletePost:function(){var t=this;s.a.post(l["a"]+"/api/deletePost",{token:localStorage.getItem("token"),postID:this.post.id}).then((function(){$("#modalPostare").modal("hide"),t.$router.push("/")})).catch((function(t){console.log(t)}))},deleteUserPost:function(){var t=this;s.a.post(l["a"]+"/api/deleteUserPost",{token:localStorage.getItem("token"),postID:this.post.id,reason:this.reportReason,userID:this.post.user_id}).then((function(){$("#deletePostModal").modal("hide"),t.$router.push("/")})).catch((function(t){console.log(t)}))},confirm_delete_post:function(){$("#modalPostare").modal("hide"),$("#deletePostModal").modal("show")},confirm_raport:function(){$("#modalPostare").modal("hide"),$("#confirmReportModal").modal("show")},getID:function(){var t=this,e=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get(l["a"]+"/api/fetchUserData",{params:{token:localStorage.getItem("token")}});case 3:a=e.sent,t.id=a.data["id"],e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()},deleteComment:function(t){var e=this;s.a.post(l["a"]+"/api/deleteComment",{token:localStorage.getItem("token"),commentID:t}).then((function(){e.getComments(),e.comment=""})).catch((function(t){console.log(t)}))},addComment:function(){var t=this;""!==this.comment&&s.a.post(l["a"]+"/api/addComment",{token:localStorage.getItem("token"),postID:this.post.id,comment:this.comment}).then((function(){t.getComments(),t.comment=""})).catch((function(t){console.log(t)}))},getComments:function(){var t=this;s.a.get(l["a"]+"/api/getComments",{params:{token:localStorage.getItem("token"),postID:this.$route.params.id}}).then((function(e){t.comments=e.data["comments"]})).catch((function(t){console.log(t)}))},getPost:function(){var t=this;s.a.get(l["a"]+"/api/getPost",{params:{token:localStorage.getItem("token"),postID:this.$route.params.id}}).then((function(e){t.post=e.data["post"],"INVALID_POSTING"===t.post?t.invalidPost=!0:t.invalidPost=!1})).catch((function(t){console.log(t)}))},sendReport:function(){s.a.post(l["a"]+"/api/sendReport",{token:localStorage.getItem("token"),reason:this.reportReason,link:this.$route.params.id,type:2,reported_id:this.post.user_id}).then((function(){$("#confirmReportModal").modal("hide"),$("#succesReportSend").modal("show")})).catch((function(t){$("#confirmReportModal").modal("hide"),$("#failedReportSend").modal("show"),console.log(t)}))},modifyVote:function(t,e,a){s.a.get(l["a"]+"/api/modifyVote",{params:{token:localStorage.getItem("token"),userId:t,postId:e,vote:a}})},cancelVoteUp:function(t,e,a){s.a.get(l["a"]+"/api/vote",{params:{token:localStorage.getItem("token"),postId:t,vote:-1}}).then(this.post.votes--,this.post.vote=0).catch((function(t){console.log(t)})),this.modifyVote(this.id,t,a)},voteUp:function(t,e,a){s.a.get(l["a"]+"/api/vote",{params:{token:localStorage.getItem("token"),postId:t,vote:1}}).then(this.post.votes++,this.post.vote=1).catch((function(t){console.log(t)})),this.modifyVote(this.id,t,a)},verifyToken:function(){var t=this;s.a.get(l["a"]+"/api/fetchUserData",{params:{token:localStorage.getItem("token")}}).then((function(e){1===e.data["admin"]?t.isAdmin=1:t.isAdmin=0})).catch((function(){document.getElementById("overlay-alert").style.display="block"}))},home:function(){this.$router.go(-1)}}},d=c,u=(a("ea1f"),a("2877")),m=Object(u["a"])(d,o,n,!1,null,"8a4b554e",null);e["default"]=m.exports},ea1f:function(t,e,a){"use strict";a("8393")}}]);
//# sourceMappingURL=chunk-525864c4.27f14251.js.map