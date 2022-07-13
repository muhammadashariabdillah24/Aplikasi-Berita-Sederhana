(this["webpackJsonpnews-starter"]=this["webpackJsonpnews-starter"]||[]).push([[0],{16:function(e,t,a){e.exports={form:"Input_form__1kOtm",input:"Input_input__3PNbO",addButton:"Input_addButton__2OsFQ",textButton:"Input_textButton__28xt6"}},23:function(e,t,a){e.exports={container:"Loading_container__o1Lrm",loader:"Loading_loader__fHWHo",spin:"Loading_spin__27TzB"}},24:function(e,t,a){e.exports={container:"Error_container__1Jl4R",error:"Error_error__1Ykqe"}},37:function(e,t,a){e.exports={container:"Container_container__3RIox"}},38:function(e,t,a){e.exports={newsList:"NewList_newsList__22mDm"}},44:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(35),s=a.n(c),i=a(10),o=a(2),l=(a(44),a(14)),u=a.n(l),d=a(17),j=a(12),b=a(13),_=a(18),m=a.n(_),p=a.p+"static/media/news-icon.9f21e2d6.svg",h=a(9),x=a.n(h),O=[{name:"Apple",slug:"apple"},{name:"PlayStation",slug:"playstation"},{name:"Google",slug:"goggle"},{name:"Netflix",slug:"netflix"},{name:"Gaming",slug:"gaming"},{name:"Nintendo",slug:"nintendo"},{name:"Handphone",slug:"Handphone"}],v=a(0),g=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(v.jsxs)("nav",{className:x.a.nav,children:[Object(v.jsxs)("div",{className:x.a.navIconWrapper,children:[Object(v.jsx)("img",{className:x.a.navIcon,src:p,alt:"navbar icon"}),Object(v.jsx)("h1",{className:x.a.navTitle,children:"NEWS"})]}),Object(v.jsx)("div",{className:x.a.categories,children:O.map((function(e,t){return Object(v.jsx)(i.b,{onClick:function(){return r(e.name)},to:"/".concat(e.slug),className:m()(x.a.category,Object(b.a)({},x.a.selected,a===e.name)),children:e.name},t)}))})]})},f=a(37),N=a.n(f),w=function(e){var t=e.children;return Object(v.jsx)("section",{className:N.a.container,children:t})},C=a(23),y=a.n(C),I=function(){return Object(v.jsx)("div",{className:y.a.container,children:Object(v.jsx)("div",{className:y.a.loader})})},S=a(24),k=a.n(S),L=function(){return Object(v.jsx)("div",{className:k.a.container,children:Object(v.jsx)("p",{className:k.a.error,children:"Error, please reload this page!"})})},D=a(38),T=a.n(D),B=a(8),E=a.n(B),A=function(e){var t,a=e.src,n=e.title,r=e.publishedAt,c=e.author,s=e.sourceName,i=e.description,o=e.url,l=e.notLastChild;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:m()(E.a.newsCard,Object(b.a)({},E.a.newsCardGap,l)),children:[Object(v.jsxs)("div",{className:E.a.imgContainer,children:[Object(v.jsx)("img",{className:E.a.img,src:a,alt:"".concat(n," thumbnail img")}),Object(v.jsx)("p",{className:E.a.imgTitle,children:n})]}),Object(v.jsxs)("div",{className:E.a.newsCardContent,children:[Object(v.jsx)("p",{className:E.a.newsCardDate,children:(t=r,new Date(t).toLocaleDateString("en-EN",{weekday:"short",year:"numeric",month:"long",day:"numeric"}))}),Object(v.jsx)("p",{className:E.a.newsCardAuthor,children:"".concat(c," | ").concat(s)}),Object(v.jsx)("p",{className:E.a.newsCardDesc,children:i}),Object(v.jsx)("a",{className:E.a.url,href:o,target:"_blank",rel:"noreferrer noopener",children:"Go to website"})]})]})})},G=function(e){var t=e.articles;return Object(v.jsx)("div",{className:T.a.newsList,children:t.map((function(e,t,a){return e.urlToImage&&e.author&&e.content?Object(v.jsx)(A,{src:e.urlToImage,title:e.title,publishedAt:e.publishedAt,author:e.author,sourceName:e.source.name,description:e.description,url:e.url,notLastChild:!(a.length===t+1)},t):null}))})},H=a(16),W=a.n(H),M=function(e){var t=e.onSubmit,a=e.onChange,n=e.value;return Object(v.jsxs)("form",{className:W.a.form,onSubmit:t,children:[Object(v.jsx)("input",{onChange:a,className:W.a.input,type:"text",placeholder:"List"}),Object(v.jsx)("div",{className:W.a.addButton,children:Object(v.jsx)(i.b,{to:"/".concat(n),className:W.a.textButton,children:"Search"})})]})},z=a(25),F=a(39),J=a.n(F),K=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r,c,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchQuery,n=void 0===a?"bitcoin":a,e.prev=1,"/everything",r="?q=".concat(n,"&apiKey=").concat("d29ce909a9294317bcb0129ea8d3b4a5"),c="".concat("https://newsapi.org/v2").concat("/everything").concat(r),e.next=7,J.a.get(c);case 7:if(200!==(s=e.sent).status){e.next=12;break}return i={category:n},o=Object(z.a)(Object(z.a)({},s.data),i),e.abrupt("return",o);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error("This Error :  ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();var P=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(j.a)(c,2),i=s[0],l=s[1],b=Object(n.useState)(!1),_=Object(j.a)(b,2),m=_[0],p=_[1],h=Object(n.useState)(""),x=Object(j.a)(h,2),O=x[0],f=x[1],N=Object(o.f)().id;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,K({searchQuery:N||"microsoft"});case 3:if(t=e.sent){e.next=8;break}return l(!1),p(!0),e.abrupt("return");case 8:l(!1),r(t.articles);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[N]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(g,{}),Object(v.jsxs)(w,{children:[Object(v.jsx)(M,{onSubmit:function(){if(O.preventDefault(),!O)return null;f(O)},onChange:function(e){return f(e.target.value)},value:O}),i&&Object(v.jsx)(I,{}),m&&Object(v.jsx)(L,{}),!i&&a.length>0&&Object(v.jsx)(G,{articles:a})]})]})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(i.a,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(P,{})}),Object(v.jsx)(o.a,{exact:!0,path:"/:id",children:Object(v.jsx)(P,{})})]})})}),document.getElementById("root"))},8:function(e,t,a){e.exports={newsCard:"NewsCard_newsCard__U7ggI",imgContainer:"NewsCard_imgContainer__2AMv2",img:"NewsCard_img__2vZUC",imgTitle:"NewsCard_imgTitle__3eBsf",newsCardContent:"NewsCard_newsCardContent__3v8PZ",newsCardDesc:"NewsCard_newsCardDesc__3iv4W",newsCardGap:"NewsCard_newsCardGap__1Hmdn",newsCardDate:"NewsCard_newsCardDate__CGKxS",newsCardAuthor:"NewsCard_newsCardAuthor__3KV-d",url:"NewsCard_url__1LHzM"}},9:function(e,t,a){e.exports={nav:"Navbar_nav__2imOE",navTitle:"Navbar_navTitle__3a_w2",navIconWrapper:"Navbar_navIconWrapper__NURo8",navIcon:"Navbar_navIcon__XDck0",categories:"Navbar_categories__3Sozo",category:"Navbar_category__3v5It",selected:"Navbar_selected__10Mm9"}}},[[70,1,2]]]);
//# sourceMappingURL=main.e9232a96.chunk.js.map