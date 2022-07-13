(this["webpackJsonpnews-starter"]=this["webpackJsonpnews-starter"]||[]).push([[0],{16:function(e,t,a){e.exports={form:"Input_form__1kOtm",input:"Input_input__3PNbO",addButton:"Input_addButton__2OsFQ",textButton:"Input_textButton__28xt6"}},23:function(e,t,a){e.exports={container:"Loading_container__o1Lrm",loader:"Loading_loader__fHWHo",spin:"Loading_spin__27TzB"}},24:function(e,t,a){e.exports={container:"Error_container__1Jl4R",error:"Error_error__1Ykqe"}},37:function(e,t,a){e.exports={container:"Container_container__3RIox"}},38:function(e,t,a){e.exports={newsList:"NewList_newsList__22mDm"}},44:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(35),s=a.n(c),i=a(10),o=a(2),l=(a(44),a(14)),u=a(17),d=a(12),j=a(13),b=a(18),_=a.n(b),m=a.p+"static/media/news-icon.9f21e2d6.svg",p=a(9),h=a.n(p),O=[{name:"Apple",slug:"apple"},{name:"PlayStation",slug:"playstation"},{name:"Google",slug:"goggle"},{name:"Netflix",slug:"netflix"},{name:"Gaming",slug:"gaming"},{name:"Nintendo",slug:"nintendo"},{name:"Handphone",slug:"Handphone"}],x=a(0),v=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(x.jsxs)("nav",{className:h.a.nav,children:[Object(x.jsxs)("div",{className:h.a.navIconWrapper,children:[Object(x.jsx)("img",{className:h.a.navIcon,src:m,alt:"navbar icon"}),Object(x.jsx)("h1",{className:h.a.navTitle,children:"NEWS"})]}),Object(x.jsx)("div",{className:h.a.categories,children:O.map((function(e,t){return Object(x.jsx)(i.b,{onClick:function(){return r(e.name)},to:"/".concat(e.slug),className:_()(h.a.category,Object(j.a)({},h.a.selected,a===e.name)),children:e.name},t)}))})]})},g=a(37),f=a.n(g),N=function(e){var t=e.children;return Object(x.jsx)("section",{className:f.a.container,children:t})},w=a(23),C=a.n(w),y=function(){return Object(x.jsx)("div",{className:C.a.container,children:Object(x.jsx)("div",{className:C.a.loader})})},I=a(24),S=a.n(I),k=function(){return Object(x.jsx)("div",{className:S.a.container,children:Object(x.jsx)("p",{className:S.a.error,children:"Error, please reload this page!"})})},L=a(38),D=a.n(L),T=a(8),B=a.n(T),E=function(e){var t,a=e.src,n=e.title,r=e.publishedAt,c=e.author,s=e.sourceName,i=e.description,o=e.url,l=e.notLastChild;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:_()(B.a.newsCard,Object(j.a)({},B.a.newsCardGap,l)),children:[Object(x.jsxs)("div",{className:B.a.imgContainer,children:[Object(x.jsx)("img",{className:B.a.img,src:a,alt:"".concat(n," thumbnail img")}),Object(x.jsx)("p",{className:B.a.imgTitle,children:n})]}),Object(x.jsxs)("div",{className:B.a.newsCardContent,children:[Object(x.jsx)("p",{className:B.a.newsCardDate,children:(t=r,new Date(t).toLocaleDateString("en-EN",{weekday:"short",year:"numeric",month:"long",day:"numeric"}))}),Object(x.jsx)("p",{className:B.a.newsCardAuthor,children:"".concat(c," | ").concat(s)}),Object(x.jsx)("p",{className:B.a.newsCardDesc,children:i}),Object(x.jsx)("a",{className:B.a.url,href:o,target:"_blank",rel:"noreferrer noopener",children:"Go to website"})]})]})})},A=function(e){var t=e.articles;return Object(x.jsx)("div",{className:D.a.newsList,children:t.map((function(e,t,a){return e.urlToImage&&e.author&&e.content?Object(x.jsx)(E,{src:e.urlToImage,title:e.title,publishedAt:e.publishedAt,author:e.author,sourceName:e.source.name,description:e.description,url:e.url,notLastChild:!(a.length===t+1)},t):null}))})},G=a(16),H=a.n(G),W=function(e){var t=e.onSubmit,a=e.onChange,n=e.value;return Object(x.jsxs)("form",{className:H.a.form,onSubmit:t,children:[Object(x.jsx)("input",{onChange:a,className:H.a.input,type:"text",placeholder:"List"}),Object(x.jsx)("div",{className:H.a.addButton,children:Object(x.jsx)(i.b,{to:"/".concat(n),className:H.a.textButton,children:"Search"})})]})},M=a(25),z=a(39),F=a.n(z),J=function(){var e=Object(u.a)(Object(l.a)().mark((function e(t){var a,n,r,c,s,i,o;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchQuery,n=void 0===a?"bitcoin":a,e.prev=1,"/everything",r="?q=".concat(n,"&apiKey=").concat("d29ce909a9294317bcb0129ea8d3b4a5"),c="".concat("https://newsapi.org/v2").concat("/everything").concat(r),e.next=7,F.a.get(c);case 7:if(200!==(s=e.sent).status){e.next=12;break}return i={category:n},o=Object(M.a)(Object(M.a)({},s.data),i),e.abrupt("return",o);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("This Error :  ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();var K=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(d.a)(c,2),i=s[0],j=s[1],b=Object(n.useState)(!1),_=Object(d.a)(b,2),m=_[0],p=_[1],h=Object(n.useState)(""),O=Object(d.a)(h,2),g=O[0],f=O[1],w=Object(o.f)().id;return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,J({searchQuery:w||"microsoft"});case 3:if(t=e.sent){e.next=8;break}return j(!1),p(!0),e.abrupt("return");case 8:j(!1),r(t.articles);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[w]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsxs)(N,{children:[Object(x.jsx)(W,{onSubmit:function(){if(g.preventDefault(),!g)return null;f(g)},onChange:function(e){return f(e.target.value)},value:g}),i&&Object(x.jsx)(y,{}),m&&Object(x.jsx)(k,{}),!i&&a.length>0&&Object(x.jsx)(A,{articles:a})]})]})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(K,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/:id",children:Object(x.jsx)(K,{})})]})})}),document.getElementById("root"))},8:function(e,t,a){e.exports={newsCard:"NewsCard_newsCard__U7ggI",imgContainer:"NewsCard_imgContainer__2AMv2",img:"NewsCard_img__2vZUC",imgTitle:"NewsCard_imgTitle__3eBsf",newsCardContent:"NewsCard_newsCardContent__3v8PZ",newsCardDesc:"NewsCard_newsCardDesc__3iv4W",newsCardGap:"NewsCard_newsCardGap__1Hmdn",newsCardDate:"NewsCard_newsCardDate__CGKxS",newsCardAuthor:"NewsCard_newsCardAuthor__3KV-d",url:"NewsCard_url__1LHzM"}},9:function(e,t,a){e.exports={nav:"Navbar_nav__2imOE",navTitle:"Navbar_navTitle__3a_w2",navIconWrapper:"Navbar_navIconWrapper__NURo8",navIcon:"Navbar_navIcon__XDck0",categories:"Navbar_categories__3Sozo",category:"Navbar_category__3v5It",selected:"Navbar_selected__10Mm9"}}},[[69,1,2]]]);
//# sourceMappingURL=main.fd2f7a47.chunk.js.map