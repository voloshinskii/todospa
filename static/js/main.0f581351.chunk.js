(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(28),i=a(15),c=a(16),u=a(9),s=a(31),d=a(12),l=a(21),p=a.n(l),f="editor.saveData",v="editor.getData",h=a(23),b=a.n(h),g=a(6),m=a.n(g),k=a(14),y="firebase.saveToken",w="firebase.getToken",x="firebase.saveUid",S="firebase.getUid",j="firebase.setLoading",E=a(32),O=a.n(E),A=a(13),I=a.n(A);function R(){return function(){var e=Object(k.a)(m.a.mark(function e(t,a){var n,r,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.firebase.token,t({type:j,loading:!0}),e.prev=3,e.next=6,I.a.auth().createUserWithEmailAndPassword("".concat(r,"@voloshinskii.ru"),r);case 6:o=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,I.a.auth().signInWithEmailAndPassword("".concat(r,"@voloshinskii.ru"),r);case 13:o=e.sent;case 14:return t({type:x,uid:o.user.uid}),e.next=17,t(T());case 17:t({type:j,loading:!1});case 18:case"end":return e.stop()}},e,null,[[3,9]])}));return function(t,a){return e.apply(this,arguments)}}()}function T(){return function(){var e=Object(k.a)(m.a.mark(function e(t,a){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a(),!(r=n.firebase.uid)){e.next=4;break}return e.abrupt("return",I.a.database().ref("/users/"+r).once("value").then(function(e){var a=e.val();t({type:f,data:a.data,force:!0})}));case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}function U(e){return function(){var t=Object(k.a)(m.a.mark(function t(a){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:f,data:e}),a(function(){var e=Object(k.a)(m.a.mark(function e(t,a){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a(),r=n.firebase.uid,I.a.database().ref("users/"+r).set({data:n.editor.data},function(e){});case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}());case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}var D=p()({aboutTooltip:!0});var L=p()({});var C=Object(u.c)({editor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return localStorage.data=JSON.stringify(t.data),e.merge({data:t.data});case v:var a=localStorage.data&&JSON.parse(localStorage.data)||{time:1554920381017,blocks:[{type:"header",data:{text:"Hello world!",level:2}}],version:"2.12.4"};return e.merge({data:a,editor:function(e){return r.a.createElement(b.a,{autofocus:!0,holderId:"editorjs-container",onChange:function(t){return e(t)},onReady:function(){return console.log("Start!")},data:a})}});default:return e}},firebase:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return localStorage.token=t.token,e.merge({token:t.token});case w:var a=localStorage.token;return e.merge({token:a});case x:return localStorage.uid=t.uid,e.merge({uid:t.uid});case S:var n=localStorage.uid;return e.merge({uid:n});case j:return e.merge({loading:t.loading});default:return e}}}),J=a(96),q=d.a(),z=[s.a,Object(c.routerMiddleware)(q)];I.a.initializeApp({apiKey:"AIzaSyC1Ae16VeG_VHqZQXWLNxY9oUe5bmAQATM",authDomain:"todo-f5cb1.firebaseapp.com",databaseURL:"https://todo-f5cb1.firebaseio.com",projectId:"todo-f5cb1",storageBucket:"",messagingSenderId:"294517743961",appId:"1:294517743961:web:f9bdc8d11ede7b3cc3ec48"});var H=u.d.apply(void 0,[u.a.apply(void 0,z)].concat([])),M=Object(u.e)(Object(c.connectRouter)(q)(C),{},H),N=J.parse(window.location.search);N.token&&(M.dispatch({type:y,token:N.token}),M.dispatch(R())),M.dispatch({type:"firebase.getToken"}),M.dispatch({type:"firebase.getUid"}),M.dispatch(function(){var e=Object(k.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:v});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),M.dispatch(function(){var e=Object(k.a)(m.a.mark(function e(t,a){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a().firebase.token||(n=O()(),t({type:y,token:n}));case 2:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()),M.dispatch(T());var P=M,Q=a(27),W=a(34),_=a.n(W);var B=Object(i.connect)(function(e){var t=e.editor,a=e.firebase;return{data:t.data,uid:a.uid,token:a.token,editor:t.editor,loading:a.loading}},function(e){return Object(u.b)({saveData:U,authFirebase:R},e)})(function(e){var t=e.authFirebase,a=e.saveData,n=e.loading,o=e.uid,i=e.editor,c=e.token;return r.a.createElement("div",null,!o&&r.a.createElement("button",{onClick:t},"Sync with other devices"),!n&&i(a),o&&function(e,t){var a=_.a.createQR("https://todoapp.voloshinskii.ru?token=".concat(t),{qrSize:256,isShowLogo:!1});return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Share this note"),r.a.createElement("div",{style:{width:"256px",margin:"auto",marginBottom:"10px"},dangerouslySetInnerHTML:{__html:a}}))}(0,c))}),F=function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement(Q.Route,{exact:!0,path:"/",component:B})))},V=(a(108),a(109),document.querySelector("#root"));Object(o.render)(r.a.createElement(i.Provider,{store:P},r.a.createElement(c.ConnectedRouter,{history:q},r.a.createElement("div",null,r.a.createElement(F,null)))),V)},36:function(e,t,a){e.exports=a(110)}},[[36,1,2]]]);
//# sourceMappingURL=main.0f581351.chunk.js.map