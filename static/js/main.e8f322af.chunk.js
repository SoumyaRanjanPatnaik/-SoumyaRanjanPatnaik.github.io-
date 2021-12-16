(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(13),l=n.n(s),o=(n(20),n(4)),a=(n(21),n(25)),i=n(2),u=function(e){var t=e.text;return Object(i.jsxs)("div",{className:"flex text-white text-3xl",children:[Object(i.jsx)(a.a,{className:"px-1 animate-spin"}),Object(i.jsx)("span",{className:"hidden md:grid place-content-center bold text-lg ",children:t||"Soumya's Portfolio"})]})},d=n(14),b=[{name:"Home",url:"/",id:"home",disbled:!1},{name:"About",url:"/about",id:"about",disbled:!1},{name:"Resume",url:"/resume",id:"resume",disbled:!1},{name:"Contact",url:"/contact",id:"contact",disbled:!1},{name:"Blog",url:"/blog",disbled:!1}],m=n(3),x=n(6),j=function(e){var t=e.path,n=e.name,r=e.closeMenu,c=(e.id,Object(m.c)().pathname);return Object(i.jsxs)("li",{className:"block group relative list-none ",children:[Object(i.jsx)(x.c,{to:t,className:"flex w-full sm:w-max sm:p-1 ".concat(c===t&&"text-green-100"," rounded-lg  h-8 sm:h-12 items-center px-1 transition-all"),onClick:r,children:n}),Object(i.jsx)("div",{className:"hidden sm:block h-0 origin-left border-white border-2 w-5/6 relative bottom sm:bottom-3.5 left-1.5 ".concat(c===t?"scale-x-30":"scale-x-0"," group-hover:scale-x-100 transform transition-transform ")})]})},f=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(Number(window.innerWidth)),l=Object(o.a)(s,2),a=l[0],f=l[1],h=Object(r.useRef)(null),g=Object(r.useRef)(null);Object(m.c)().pathname;Object(r.useState)((function(){var e=function(){f((function(e){var t=Number(window.innerWidth);c(e>=640&&t<640)}))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var p=function(){c(!1)};return Object(r.useEffect)((function(){var e=g.current.getBoundingClientRect().height;h.current.style.height=a>=640?"3rem":n?"".concat(e,"px"):"0px"}),[n,a]),Object(i.jsx)("header",{className:"fixed top-0 min-h-12 z-50 w-full",children:Object(i.jsxs)("nav",{className:"relative text-white flex flex-col sm:flex-row sm:justify-between bg-gray-900 ",children:[Object(i.jsxs)("div",{className:"flex items-center justify-between w-full my-auto h-12",children:[Object(i.jsx)(x.b,{to:"/",children:Object(i.jsx)(u,{})}),Object(i.jsx)(d.a,{className:"m-2 text-xl cursor-pointer transition-transform transform  duration-300 hover:scale-125 sm:hidden ".concat(n?"rotate-90":""),onClick:function(){c(!n)}})]}),Object(i.jsx)("div",{className:"w-full sm:w-auto overflow-hidden sm:overflow-visible transition-all",ref:h,children:Object(i.jsx)("ul",{className:"w-full flex flex-col sm:flex-row sm:h-full items-stretch sm:mr-3",ref:g,children:b.map((function(e,t){return Object(i.jsx)(j,{className:"",path:e.url,name:e.name,id:e.id,disabled:e.disbled,closeMenu:p},t)}))})})]})})},h=n(10),g=n(11),p=n(15),w=["scrollText","vowel","article"],O=function(e){var t=e.scrollText,n=e.vowel,c=e.article,s=Object(p.a)(e,w),l=Object(r.useState)(0),a=Object(o.a)(l,2),u=a[0],d=a[1];Object(r.useEffect)((function(){var e=setInterval((function(){d((function(e){return(e+1)%t.length}))}),2250);return function(){clearInterval(e)}})),Object(r.useEffect)((function(){if(c){if(u===t.length-1)return void c(!1);c(!0)}if(n){var e=t[u];n&&e.match("^[aeiouAEIOU].*")?n(!0):n(!1)}}),[u]);var b=t.reduce((function(e,n,r){var c=t.length;return[].concat(Object(g.a)(e),(u+1+c)%c===r?[{desc:n,type:"next"}]:u===r?[{desc:n,type:"curr"}]:[{desc:n,type:"prev"}])}),[]),m=Object(h.a)({},s);return Object(i.jsx)("div",{className:"select-none relative flex justify-center h-11 sm:h-20 overflow-hidden w-full",children:b.map((function(e,t){return Object(i.jsx)("h3",{className:"absolute text-4xl sm:text-5xl font-bold duration-300 transition-all capitalize ".concat(e.type,"-slider"),style:m,children:e.desc},t)}))})},v=["Software Developer","researcher","Tech enthusiast","Engineer","Tinkerer","Soumya Ranjan Patnaik"],y=Object(r.createContext)({}),N=function(e){var t=e.color,n=e.url,c=e.text,s=Object(m.d)();Object(r.useContext)(y).height;return Object(i.jsx)("div",{className:"".concat(""," absolute flex bottom-1 w-full justify-center cursor-pointer visible sm:hidden text-").concat(t||"white"," } text-lg mb-5  font-bold"),onClick:function(){s(n||"/about")},children:Object(i.jsx)("span",{children:c||"Next Section"})})},k=function(e){var t=e.refContainer,n=Object(r.useState)(!1),c=Object(o.a)(n,2),s=c[0],l=c[1],a=Object(r.useState)(!0),u=Object(o.a)(a,2),d=u[0],b=u[1];return Object(i.jsxs)("section",{id:"home",ref:t,className:"home-dark snappedElement relative h-screen flex flex-col justify-center items-stretch  bg-gray-900 transition-all w-full overflow-hidden  z-10",children:[Object(i.jsxs)("div",{className:"select-none block text-gray-300 text-2xl sm:text-4xl text-center relative -top-5 ",children:[Object(i.jsxs)("span",{className:"flex justify-center",children:["I'm ",d&&"A"+(s?"n":"")]}),Object(i.jsx)(O,{scrollText:v,vowel:l,article:b})]}),Object(i.jsx)(N,{color:"gray-200",url:"/about"})]})},E=n(9),C=[{name:"GitHub",icon:Object(i.jsx)(E.b,{className:"group-hover:text-black group-hover:bg-white rounded-full transition-all"}),url:"https://github.com/SoumyaRanjanPatnaik"},{name:"Facebook",icon:Object(i.jsx)(E.a,{className:"group-hover:text-blue-700 group-hover:bg-white rounded-full transition-all"}),url:""},{name:"Instagram",icon:Object(i.jsx)(E.c,{className:"group-hover:text-pink-800 group-hover:bg-white rounded-full transition-all"}),url:"https://www.instagram.com/_soumya_r6_/"},{name:"LinkedIn",icon:Object(i.jsx)(E.d,{className:"group-hover:text-blue-500 transition-all"}),url:""}],S=function(){return Object(i.jsx)("div",{className:"w-full flex justify-center cursor-pointer rela ",children:C.map((function(e,t){return Object(i.jsx)("a",{href:e.url,className:" group text-gray-700 text-2xl sm:text-xl transition-all mt-2 mb-3 p-2 hover:bg-blue-50 rounded-full",children:e.icon},t)}))})},I=n.p+"static/media/PassportPhoto.054e7f1b.jpg",R=function(e){return Object(i.jsxs)("section",{id:"about",className:"relative snappedElement flex flex-col items-center py-10 bg-gradient-to-br from-red-50 to-green-50 min-h-screen",children:[Object(i.jsxs)("div",{className:"flex flex-col items-center gap-6 shadow-lg w-5/6 sm:w-4/6 mx-5 sm:mx-36 my-10 max-w-2xl px-4 py-7 glass-card rounded-2xl bg-gradient-to-br from-transparent to-white",children:[Object(i.jsx)("img",{src:I,className:"object-cover w-36 h-36 rounded-full select-none",alt:""}),Object(i.jsxs)("div",{className:"w-5/6 mx-4 flex flex-col items-stretch",children:[Object(i.jsx)("h1",{className:"text-center pb-2 text-2xl text-gray-900 font-bold border-b-4 border-green-200 ",children:"About"}),Object(i.jsx)(S,{}),Object(i.jsxs)("p",{className:"text-md text-center font-sans text-gray-600",children:["I am a Computer Science and Engineering undergraduate currently studying in ",Object(i.jsx)("strong",{children:" IIIT, Naya Raipur "}),". I love technology and like to make the best out of it in any way possible, and I love to recreate existing software from scratch."]}),Object(i.jsxs)("p",{className:"text-md text-center font-sans text-gray-600 mt-3",children:["My primary interests include ",Object(i.jsx)("strong",{children:"systems development"}),","," ",Object(i.jsx)("strong",{children:"web development "})," and",Object(i.jsx)("strong",{children:" machine learning"}),"."," "]}),Object(i.jsxs)("button",{class:"flex group relative m-auto justify-center mt-5 bg-blue-500 hover:bg-blue-200 text-gray-50 font-bold py-2 px-4 rounded-lg w-full items-center cursor-not-allowed mb-2",children:[Object(i.jsx)("svg",{class:"fill-current w-4 h-4 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(i.jsx)("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})}),Object(i.jsx)("span",{children:"Download Resume"}),Object(i.jsx)("div",{className:"absolute -bottom-6 text-sm inset-x-0 text-gray-100 bg-black bg-opacity-75 rounded-lg scale-0 group-hover:scale-100 transform origin-top transition-transform ",children:"Currently Unavailable"})]})]})]}),Object(i.jsx)(N,{color:"gray-700",url:"/resume"})]})},P=["Skills","Education","Projects","Achievements","Publications"],z=function(e){var t=Object(r.useState)(0),n=Object(o.a)(t,2),c=n[0],s=n[1],l=Object(r.useState)(c),a=Object(o.a)(l,2),u=a[0],d=a[1],b=Object(r.useRef)({top:0,left:0}),m=Object(r.useState)({width:32,height:124}),x=Object(o.a)(m,2),j=x[0],f=x[1],g=Object(r.useContext)(y),p=g.width,w=g.height;return Object(r.useEffect)((function(){var e=document.getElementById("tabs-container").getBoundingClientRect(),t=document.getElementById(P[u]).getBoundingClientRect(),n=document.getElementById("hover-box");b.current={top:t.top-e.top,left:t.left-e.left},n.style.transform="translate(".concat(b.current.left,"px, ").concat(b.current.top,"px)"),f({width:t.width,height:t.height})}),[u,p,w]),Object(r.useEffect)((function(){d(c)}),[c]),Object(i.jsxs)("section",{id:"resume",className:"relative flex snappedElement justify-center items-center pt-12 pb-5 sm:px-9  px-2 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 ",children:[Object(i.jsx)("div",{className:" h-2/3 grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-12 md:grid-cols-12 w-4/5 md:w-5/6 sm:w-full bg-gray-500 bg-opacity-5 ring-inset ring-2 ring-white rounded-3xl backdrop-blur max-w-3xl md:max-w-6xl shadow-lg overflow-hidden sm:h-2/3 min-w-max",children:Object(i.jsxs)("div",{className:"flex flex-col  justify-center mb-2 sm:mb-0 sm:pb-28 sm:col-start-1 sm:col-end-4 bg-gradient-to-b from-white to-blue-50 bg-opacity-80 sm:px-4 md:px-7 py-2 sm:py-12 overflow-hidden ",children:[Object(i.jsxs)("div",{className:"flex flex-col items-center w-full",children:[Object(i.jsx)("h2",{className:"text-lg sm:text-2xl w-full text-center text-gray-700 font-bold",children:"Resume"}),Object(i.jsx)("div",{className:"border-green-300 border-4 h-0 w-1/5 sm:w-1/2 rounded-lg"})]}),Object(i.jsxs)("div",{id:"tabs-container",className:"relative mt-2 overflow-auto sm:mt-5 flex justify-center sm:flex-col sm:justify-center flex-grow-0 flex-shrink-0  sm:overflow-x-hidden scrollbar-thin px-2",children:[Object(i.jsx)("div",{id:"hover-box",className:" absolute top-0 left-0 bg-blue-400 bottom-0 w-1/6 h-3 sm:w-full h-8 z-0 rounded sm:rounded transition-all",style:Object(h.a)({transform:"translate(".concat(b.current.left,"px, ").concat(b.current.top,"px)")},j)}),P.map((function(e,t){return Object(i.jsx)("h3",{className:"block rounded cursor-pointer text-xs sm:text-base w-24 px-1 sm:mx-0 sm:w-full text-center py-1 cursor-pointer z-10 transition-all select-none \n                      ".concat(c===t?"bg-blue-".concat(u!==t?"200 text-gray-700":500," text-white"):"","\n                        ").concat(u!==c&&u===t?"text-white":""," \n                    "),id:e,onClick:function(){s(t)},onMouseEnter:function(e){d(t)},onMouseLeave:function(){return d(c)},children:e},t)}))]})]})}),Object(i.jsx)(N,{url:"/about",text:"Scroll Up",color:"gray-700"})]})};var B=function(){var e=Object(m.c)(),t=(Object(m.d)(),Object(r.useState)({width:window.innerWidth,height:window.innerHeight})),n=Object(o.a)(t,2),c=n[0],s=n[1],l=[Object(r.useRef)(null),Object(r.useRef)(null),Object(r.useRef)(null)],a=l[0],u=l[1],d=l[2],x=function(){s({width:window.innerWidth,height:window.innerHeight})};return Object(r.useEffect)((function(){return window.addEventListener("resize",x),function(){window.removeEventListener("resize",x)}}),[]),Object(r.useEffect)((function(){if(c.height>=400){var t,n=null===(t=b.find((function(t){return t.url===e.pathname})))||void 0===t?void 0:t.id,r=document.getElementById(n);r&&r.scrollIntoView({behavior:"smooth",block:"center"})}}),[e,c]),Object(i.jsx)(y.Provider,{value:c,children:Object(i.jsxs)("div",{className:"h-screen overflow-y-hidden overflow-x-hidden scrollbar scrollbar-thin scrollbar-track-white  scrollbar-thumb-gray-400 ".concat(c.height>=400&&"snapY sm:overflow-y-hidden"),dir:"ltr",children:[Object(i.jsx)(f,{}),Object(i.jsx)(k,{refContainer:a}),Object(i.jsx)(R,{refContainer:u}),Object(i.jsx)(z,{refContainer:d})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),r(e),c(e),s(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x.a,{children:Object(i.jsx)(B,{})})}),document.getElementById("root")),L()}},[[23,1,2]]]);
//# sourceMappingURL=main.e8f322af.chunk.js.map