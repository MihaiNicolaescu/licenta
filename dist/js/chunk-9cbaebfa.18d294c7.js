(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cbaebfa"],{"0cfd":function(t,e,a){t.exports=a.p+"img/Logo_cos.697b4b99.png"},"0f90":function(t,e,a){"use strict";a("9d78")},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("d3b7");function r(t,e,a,r,i,o,s){try{var n=t[o](s),l=n.value}catch(c){return void a(c)}n.done?e(l):Promise.resolve(l).then(r,i)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(i,o){var s=t.apply(e,a);function n(t){r(s,i,o,n,l,"next",t)}function l(t){r(s,i,o,n,l,"throw",t)}n(void 0)}))}}},"817b":function(t,e,a){},"96cf":function(t,e,a){var r=function(t){"use strict";var e,a=Object.prototype,r=a.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",n=i.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(D){l=function(t,e,a){return t[e]=a}}function c(t,e,a,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),s=new E(r||[]);return o._invoke=S(t,a,s),o}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(D){return{type:"throw",arg:D}}}t.wrap=c;var d="suspendedStart",f="suspendedYield",p="executing",m="completed",v={};function h(){}function g(){}function b(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(L([])));_&&_!==a&&r.call(_,o)&&(y=_);var C=b.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function a(i,o,s,n){var l=u(t[i],t,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,n)}),(function(t){a("throw",t,s,n)})):e.resolve(d).then((function(t){c.value=t,s(c)}),(function(t){return a("throw",t,s,n)}))}n(l.arg)}var i;function o(t,r){function o(){return new e((function(e,i){a(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(t,e,a){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===i)throw o;return N()}a.method=i,a.arg=o;while(1){var s=a.delegate;if(s){var n=P(s,a);if(n){if(n===v)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===d)throw r=m,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=p;var l=u(t,e,a);if("normal"===l.type){if(r=a.done?m:f,l.arg===v)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r=m,a.method="throw",a.arg=l.arg)}}}function P(t,a){var r=t.iterator[a.method];if(r===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,P(t,a),"throw"===a.method))return v;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,t.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,v;var o=i.arg;return o?o.done?(a[t.resultName]=o.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,v):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,v)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function L(t){if(t){var a=t[o];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function a(){while(++i<t.length)if(r.call(t,i))return a.value=t[i],a.done=!1,a;return a.value=e,a.done=!0,a};return s.next=s}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=C.constructor=b,b.constructor=g,g.displayName=l(b,n,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,n,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[s]=function(){return this},t.AsyncIterator=k,t.async=function(e,a,r,i,o){void 0===o&&(o=Promise);var s=new k(c(e,a,r,i),o);return t.isGeneratorFunction(a)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(C),l(C,n,"Generator"),C[o]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function i(r,i){return n.type="throw",n.arg=t,a.next=r,i&&(a.method="next",a.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],n=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var l=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),I(a),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var i=r.arg;I(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:L(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},"9d78":function(t,e,a){},"9f73":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"d-flex align-items-center flex-column"},[!1===t.invalidUser?r("nav",{staticClass:"navbar navbar-light bg-light",staticStyle:{width:"896px"}},[t._m(0)]):t._e()]),r("div",{staticClass:"container"},[!1===t.invalidUser&&0===t.isBanned?r("div",{staticClass:"d-flex align-items-left flex-column",staticStyle:{height:"100px"}},[r("div",{staticClass:"d-flex align-items-left"},[r("div",{staticClass:"col-3 left-info",staticStyle:{left:"9.65%"}},[r("div",{attrs:{id:"profile"}},[null!==t.user?r("img",{staticClass:"profile-image",staticStyle:{"margin-top":"10px","margin-left":"10%"},attrs:{alt:"profile image",src:t.backend+t.user.link_profile}}):t._e(),r("div",{attrs:{id:"profile-info"}},[r("p",{staticStyle:{"font-weight":"bold","font-size":"14px",margin:"0"}},[t._v("Nume")]),r("p",{staticClass:"info"},[t._v(t._s(t.firstName))]),r("p",{staticStyle:{"font-weight":"bold","font-size":"14px",margin:"0"}},[t._v("Prenume")]),r("p",{staticClass:"info"},[t._v(t._s(t.lastName))]),r("p",{staticStyle:{"font-weight":"bold","font-size":"14px",margin:"0"}},[t._v("Email")]),r("p",{staticClass:"info"},[t._v(t._s(t.email))]),r("p",{staticStyle:{"font-weight":"bold","font-size":"14px",margin:"0"}},[t._v("Judet")]),r("p",{staticClass:"info"},[t._v(t._s(t.judet))]),r("p",{staticStyle:{"font-weight":"bold","font-size":"14px",margin:"0"}},[t._v("Data nasterii")]),r("p",{staticClass:"info"},[t._v(t._s(t.formatDate(t.birthday)))]),1===t.isProducer?r("p",{staticClass:"info"},[t._v("Producator atestat "),r("img",{staticStyle:{width:"45px"},attrs:{src:a("bca0")}})]):t._e(),1===t.isProducer&&t.fallowers>0?r("p",{staticClass:"info"},[t._v("Urmaritori "),r("strong",[t._v(t._s(t.fallowers))])]):t._e()]),t.fallowed||null==t.fallowed||1!==t.isProducer||t.visitorID===t.id?t._e():r("button",{staticClass:"btn btn-success btn-sm",staticStyle:{width:"100%"},attrs:{type:"button"},on:{click:function(e){return t.fallow()}}},[t._v("Urmareste ")]),t.fallowed&&null!=t.fallowed&&1===t.isProducer&&t.visitorID!==t.id?r("button",{staticClass:"btn btn-danger btn-sm",staticStyle:{width:"100%"},attrs:{type:"button"},on:{click:function(e){return t.cancelFallow()}}},[t._v("Nu mai urmari ")]):t._e(),t.visitorID!==t.id?r("button",{staticClass:"btn btn-danger btn-sm",staticStyle:{"margin-top":"5px",width:"100%"},attrs:{type:"button","data-toggle":"modal","data-target":"#reportModal"}},[t._v("Raporteaza utilizatorul ")]):t._e(),1===t.isProducer&&this.id!==this.visitorID?r("button",{staticClass:"btn btn-success btn-sm",staticStyle:{"margin-bottom":"10px","margin-top":"5px",width:"100%"},attrs:{type:"button","data-toggle":"modal","data-target":"#modalReview"},on:{click:t.show_MyReview}},[t._v("Scrie o recenzie producatorului ")]):t._e(),null!==t.reviews?r("div",{staticClass:"review-form-users"},t._l(t.reviews,(function(e){return r("div",{key:e.id},[r("div",{staticClass:"row",staticStyle:{"margin-top":"5px"}},[r("div",{staticClass:"col-sm-1"},[r("div",{staticClass:"user-info"},[null!==e?r("img",{staticClass:"profile-image",staticStyle:{width:"50px",height:"50px"},attrs:{src:t.backend+e.link_profile}}):t._e()])]),r("div",{staticClass:"col-9"},[r("p",{staticStyle:{"margin-left":"25px","word-wrap":"break-word","font-size":"12px"}},[r("a",{staticStyle:{color:"black","text-decoration":"none","font-weight":"bold"},attrs:{href:"/profile/"+e.reviewer_id}},[t._v(t._s(e.firstName)+" "+t._s(e.lastName))]),r("br"),t._v(t._s(e.message)+" "),r("br"),t._l(e.rating,(function(e){return r("span",{key:e,staticClass:"material-icons",staticStyle:{"font-size":"15px"},attrs:{id:"starRev"+e}},[t._v("star_rate")])}))],2)])])])})),0):t._e()])]),r("div",{staticClass:"col-7",attrs:{id:"posts"}},[t._l(t.userPosts,(function(e,a){return r("div",{key:e.id},[r("div",{staticClass:"container-post sn p-3"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-3"},[r("img",{staticClass:"user-info-img",attrs:{alt:"user profile photo",src:t.backend+t.user.link_profile}})]),r("div",{staticClass:"col"},[r("p",{staticStyle:{margin:"0"}},[t._v(t._s(t.firstName+" "+t.lastName))]),r("p",{staticStyle:{margin:"0","font-weight":"normal","font-size":"13px"}},[t._v(t._s(t.formatDate(e.created_at)))])])])]),r("div",{staticClass:"post-description"},[t._v(" "+t._s(e.description)+" ")]),r("div",{staticClass:"d-flex align-items-center flex-column image-post"},[1===e.has_photo?r("img",{staticClass:"post-image",attrs:{src:t.backend+e.link}}):t._e()]),r("button",{directives:[{name:"show",rawName:"v-show",value:0===e.vote||null==e.vote||-1===e.vote,expression:"post.vote === 0 || post.vote == null || post.vote === -1"}],staticClass:"btn btn-react",attrs:{type:"button"},on:{click:function(r){return t.voteUp(e.id,a,1)}}},[r("span",{staticClass:"material-icons"},[t._v("thumb_up_alt")])]),r("button",{directives:[{name:"show",rawName:"v-show",value:1===e.vote,expression:"post.vote === 1"}],staticClass:"btn btn-react",attrs:{type:"button"},on:{click:function(r){return t.cancelVoteUp(e.id,a,0)}}},[r("span",{staticClass:"material-icons",staticStyle:{color:"blue"}},[t._v("thumb_up_alt")])]),r("span",[t._v(t._s(e.votes))]),r("button",{staticClass:"btn btn-react",attrs:{type:"button"},on:{click:function(a){return t.gotToComments(e.id)}}},[r("span",{staticClass:"material-icons"},[t._v("insert_comment")])])])])})),0===t.isProducer&&null!=t.isProducer?r("div",{staticClass:"container-info sn p-3"},[r("img",{staticClass:"logo d-flex align-items-center flex-column",attrs:{alt:"logo_cos",src:a("0cfd")}}),0===t.isProducer&&null!=t.isProducer?r("p",{staticClass:"info-paragraph"},[t._v("Daca esti un producator local poti sa trimiti un formular pentru a primi gradul de producator pe aplicatie. Detinatorii acestui grad au posibilitatea sa posteze fotografii cu produsele agricole si sa poata primi recenzi de la alti utilizatori. ")]):t._e()]):t._e(),0===t.userPosts.length&&null!=t.userPosts?r("div",{staticClass:"container-info sn p-3"},[r("img",{staticClass:"logo d-flex align-items-center flex-column",attrs:{alt:"logo_cos",src:a("0cfd")}}),0===t.userPosts.length&&null!=t.userPosts?r("p",{staticClass:"info-paragraph"},[t._v("Acest producator nu are momentan postari. ")]):t._e()]):t._e()],2)])]):t._e(),!0===t.invalidUser||1===t.isBanned?r("div",{staticClass:"container"},[r("p",{staticClass:"not-found"},[t._v("Utilizator invalid.")]),r("p",{staticClass:"go-home"},[t._v("Apasa "),r("router-link",{attrs:{to:{path:"/"}}},[t._v("aici")]),t._v(" pentru a te intoarce la pagina principala. ")],1)]):t._e()]),r("div",{staticClass:"modal fade",attrs:{id:"reportModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),r("div",{staticClass:"modal-body"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.reportReason,expression:"reportReason"}],staticClass:"input-group-text",staticStyle:{width:"100%","font-weight":"normal"},attrs:{type:"text",placeholder:"Motivul raportari. Ex: Postari cu continut inadecvat.",required:""},domProps:{value:t.reportReason},on:{input:function(e){e.target.composing||(t.reportReason=e.target.value)}}})]),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Anuleaza")]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.sendReport}},[t._v("Trimite")])])])])]),1===t.isProducer?r("div",{staticClass:"modal fade",attrs:{id:"modalReview",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(2),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"review"},[r("fieldset",{staticClass:"rating"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.stars,expression:"stars"}],attrs:{type:"radio",id:"star5",name:"rating",value:"5"},domProps:{checked:t._q(t.stars,"5")},on:{change:function(e){t.stars="5"}}}),r("label",{staticClass:"full",attrs:{for:"star5"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.stars,expression:"stars"}],attrs:{type:"radio",id:"star4",name:"rating",value:"4"},domProps:{checked:t._q(t.stars,"4")},on:{change:function(e){t.stars="4"}}}),r("label",{staticClass:"full",attrs:{for:"star4"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.stars,expression:"stars"}],attrs:{type:"radio",id:"star3",name:"rating",value:"3"},domProps:{checked:t._q(t.stars,"3")},on:{change:function(e){t.stars="3"}}}),r("label",{staticClass:"full",attrs:{for:"star3"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.stars,expression:"stars"}],attrs:{type:"radio",id:"star2",name:"rating",value:"2"},domProps:{checked:t._q(t.stars,"2")},on:{change:function(e){t.stars="2"}}}),r("label",{staticClass:"full",attrs:{for:"star2"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.stars,expression:"stars"}],attrs:{type:"radio",id:"star1",name:"rating",value:"1"},domProps:{checked:t._q(t.stars,"1")},on:{change:function(e){t.stars="1"}}}),r("label",{staticClass:"full",attrs:{for:"star1"}})]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.review_text,expression:"review_text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.review_text},on:{input:function(e){e.target.composing||(t.review_text=e.target.value)}}})])]),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),r("button",{staticClass:"btn btn-success btn-sm",on:{click:t.sendReview}},[t._v("Trimite parerea")])])])])]):t._e(),t._m(3),t._m(4),r("alert-box")],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:"/"}},[r("img",{attrs:{src:a("bca0"),alt:"Logo",width:"50px"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"reportModalTitle"}},[t._v("Raportare utilizator")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("Scrie un review")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"succesReportSend",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"reportSendModalTitle"}},[t._v("Success")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("p",[t._v("Raportul a fost trimis cu succes, in scurt timp un administrator se va ocupa de acest lucru.")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Inchide")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"failedReportSend",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"reportFailedSendModalTitle"}},[t._v("Success")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("p",[t._v("Am intampinat o problema la trimiterea sesizari tale, te rugam sa incerci mai tarziu, iti multumim!")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Inchide")])])])])])}],o=(a("96cf"),a("1da1")),s=a("bc3a"),n=a.n(s),l=a("5fb0"),c=a("ba9d"),u={data:function(){return{id:-1,user:null,userPhoto:"default.jpg",firstName:"",lastName:"",email:"",birthday:"",userPosts:{},fallowed:null,isProducer:null,invalidUser:null,reportReason:null,isBanned:null,visitorID:null,stars:null,review_text:"",reviews:null,myReview:null,backend:l["a"],fallowers:null,judet:""}},components:{"alert-box":c["a"]},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getUserInformations();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){this.verifyToken()},watch:{id:function(){this.getUserPosts(),this.getFallowed(),this.getReviews()}},methods:{formatDate:function(t){var e=new Date(t),a=["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];return e.getDate()+" "+a[e.getMonth()]+" "+e.getFullYear()},show_MyReview:function(){this.getMyReview(),$("#modalReview").modal("show")},getMyReview:function(){var t=this;n.a.get(l["a"]+"/api/getMyReview",{params:{token:localStorage.getItem("token"),userID:this.visitorID,userPageID:this.id}}).then((function(e){t.myReview=e.data["review"],t.stars=t.myReview.rating,t.review_text=t.myReview.message})).catch((function(t){console.log(t)}))},getReviews:function(){var t=this;n.a.get(l["a"]+"/api/getReviews",{params:{token:localStorage.getItem("token"),userID:this.id}}).then((function(e){t.reviews=e.data["reviews"]})).catch((function(t){console.log(t)}))},sendReview:function(){var t=this;null!==this.stars&&n.a.post(l["a"]+"/api/sendReview",{token:localStorage.getItem("token"),scor:this.stars,message:this.review_text,for:this.id}).then((function(){t.review_text="",$("#modalReview").modal("hide"),t.getReviews()})).catch((function(t){console.log(t)}))},gotToComments:function(t){this.$router.push("/post/"+t)},sendReport:function(){n.a.post(l["a"]+"/api/sendReport",{token:localStorage.getItem("token"),reason:this.reportReason,link:this.$route.params.id,type:1,reported_id:this.id}).then((function(){$("#reportModal").modal("hide"),$("#succesReportSend").modal("show")})).catch((function(t){$("#reportModal").modal("hide"),$("#failedReportSend").modal("show"),console.log(t)}))},getFallowed:function(){var t=this;n.a.get(l["a"]+"/api/getFallow",{params:{token:localStorage.getItem("token"),id_user:this.id}}).then((function(e){t.fallowed=e.data}))},fallow:function(){n.a.post(l["a"]+"/api/fallowUser",{token:localStorage.getItem("token"),fallowId:this.id}).then(this.fallowed=!0,this.fallowers+=1).catch((function(t){"token"===t["message"]?document.getElementById("overlay-alert").style.display="block":console.log(t)}))},cancelFallow:function(){n.a.post(l["a"]+"/api/cancelFallowUser",{token:localStorage.getItem("token"),fallowId:this.id}).then(this.fallowed=!1,this.fallowers-=1).catch((function(t){"token"==t["message"]?document.getElementById("overlay-alert").style.display="block":console.log(t)}))},modifyVote:function(t,e,a){n.a.get(l["a"]+"/api/modifyVote",{params:{token:localStorage.getItem("token"),userId:t,postId:e,vote:a}})},cancelVoteUp:function(t,e,a){n.a.get(l["a"]+"/api/vote",{params:{token:localStorage.getItem("token"),postId:t,vote:-1}}).then(this.userPosts[e].votes--,this.userPosts[e].vote=0).catch((function(t){console.log(t)})),this.modifyVote(this.id,t,a)},voteUp:function(t,e,a){n.a.get(l["a"]+"/api/vote",{params:{token:localStorage.getItem("token"),postId:t,vote:1}}).then(this.userPosts[e].votes++,this.userPosts[e].vote=1).catch((function(t){console.log(t)})),this.modifyVote(this.id,t,a)},getUserPosts:function(){var t=this,e=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.a.get(l["a"]+"/api/fetchUserPosts",{params:{user_id:t.id,token:localStorage.getItem("token")}});case 3:a=e.sent,t.userPosts=a.data["posts"],e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()},getUserInformations:function(){var t=this;n.a.get(l["a"]+"/api/fetchProfile",{params:{id:this.$route.params.id}}).then((function(e){"INVALID_USER"===e.data?t.invalidUser=!0:(t.user=e.data,t.invalidUser=!1,t.firstName=e.data["firstName"],t.lastName=e.data["lastName"],t.email=e.data["email"],t.birthday=e.data["birthday"],t.id=e.data["id"],t.userPhoto=e.data["profile_image"],t.isProducer=e.data["producer"],t.isBanned=e.data["banned"],t.judet=e.data["judet"],t.fallowers=e.data["fallowers"])})).catch((function(t){console.log(t)}))},verifyToken:function(){var t=this;n.a.get(l["a"]+"/api/fetchUserData",{params:{token:localStorage.getItem("token")}}).then((function(e){t.visitorID=e.data["id"],t.id===t.visitorID&&(console.log("intra"),t.$router.push("/profile"))})).catch((function(){t.$router.push("/")}))},home:function(){this.$router.push("/")}}},d=u,f=(a("e897"),a("2877")),p=Object(f["a"])(d,r,i,!1,null,"4fed1bee",null);e["default"]=p.exports},ba9d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"overlay-alert"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex align-items-center flex-column"},[a("p",{attrs:{id:"alert-text"}},[t._v("A aparut o eroare la incarcarea informatiilor, este necesara reconecarea in aplicatie.")]),a("button",{staticClass:"btn btn-danger btn-profile",on:{click:function(e){return t.reconectError()}}},[t._v("OK")])])])])},i=[],o={methods:{reconectError:function(){this.$router.push("login"),localStorage.clear()}}},s=o,n=(a("0f90"),a("2877")),l=Object(n["a"])(s,r,i,!1,null,"24127aa8",null);e["a"]=l.exports},bca0:function(t,e,a){t.exports=a.p+"img/Logo.eebb1f88.png"},e897:function(t,e,a){"use strict";a("817b")}}]);
//# sourceMappingURL=chunk-9cbaebfa.18d294c7.js.map