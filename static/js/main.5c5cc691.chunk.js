(this["webpackJsonpbv-score"]=this["webpackJsonpbv-score"]||[]).push([[0],{19:function(e,c,a){},20:function(e,c,a){},25:function(e,c,a){"use strict";a.r(c);var t=a(1),i=a(5),o=a.n(i),r=a(12),s=a.n(r),j=(a(19),a(13)),n=a(8),k=(a(20),a.p+"static/media/Milda.7070383e.png"),g=a(10),d=(a(21),a.p+"static/media/Slide15.f4ec82ff.png"),h=a.p+"static/media/Rokas.31a64fcc.png";g.a.initializeApp({apiKey:"AIzaSyC7Rus4GWRhOP4ZNIlKd2si_NIMKN3sCBQ",authDomain:"bvscoreboard.firebaseapp.com",databaseURL:"https://bvscoreboard.firebaseio.com",projectId:"bvscoreboard",storageBucket:"bvscoreboard.appspot.com",messagingSenderId:"661918240571",appId:"1:661918240571:web:3783e9117aef316bdeb11e"});var l=function(){var e=Object(i.useState)([]),c=Object(n.a)(e,2),a=c[0],o=c[1],r=Object(i.useState)(d),s=Object(n.a)(r,2),l=s[0],x=s[1],E=Object(i.useState)(0),b=Object(n.a)(E,2),u=b[0],f=b[1],p=[k,h];return Object(i.useEffect)((function(){var e=setInterval((function(){x(p[Math.floor(Math.random()*p.length)])}),1e4);return function(){return clearInterval(e)}}),[]),Object(i.useEffect)((function(){g.a.firestore().collection("paticipants").onSnapshot((function(e){var c=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())})).sort((function(e,c){return e.distance<c.distance?1:-1}));o(c)}))}),[]),Object(t.jsxs)("div",{className:"size1 bg0 where1-parent",children:[Object(t.jsx)("div",{children:Object(t.jsx)("div",{className:"carousel-item active",children:Object(t.jsx)("div",{className:"flex-c-m bg-img1 size2 where1 overlay1 where2 respon2",style:{backgroundImage:"url(".concat(l,")")}})})}),Object(t.jsxs)("div",{className:"size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1",children:[Object(t.jsx)("div",{className:"wrap-pic1",children:Object(t.jsx)("img",{src:"data:image/png;base64,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",alt:"LOGO"})}),Object(t.jsxs)("div",{className:"p-t-60 p-b-60",children:[Object(t.jsxs)("table",{className:"table",children:[Object(t.jsx)("thead",{className:"thead-dark",children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{scope:"col",children:"Name"}),Object(t.jsx)("th",{scope:"col",children:"Surname"}),Object(t.jsx)("th",{scope:"col",children:"Score"})]})}),Object(t.jsx)("tbody",{children:a.map((function(e,c){return Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:void 0!==e&&e.name}),Object(t.jsx)("td",{children:void 0!==e&&e.surname}),Object(t.jsx)("td",{children:void 0!==e&&e.distance}),f(u+e.distance)]},c)}))})]}),Object(t.jsxs)("span",{children:["Total walked km: ",u]})]})]})]})};a(24);s.a.render(Object(t.jsx)(o.a.StrictMode,{children:Object(t.jsx)(l,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5c5cc691.chunk.js.map