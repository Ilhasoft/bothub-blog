(window.webpackJsonp=window.webpackJsonp||[]).push([[6,35],{167:function(e,a,t){"use strict";t.r(a);t(94);var n=t(0),l=t.n(n),i=t(171),r=t(173),o=t(78),c=t(175),s=t(174),u=t.n(s),m=t(172),d=t(198),b=t.n(d),p=24;function f(e){var a=e.item,t=e.onItemClick,i=e.collapsible,r=a.items,o=a.href,c=a.label,s=a.type,d=Object(n.useState)(a.collapsed),b=d[0],p=d[1],h=Object(n.useState)(null),k=h[0],E=h[1];switch(a.collapsed!==k&&(E(a.collapsed),p(a.collapsed)),s){case"category":return r.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":b}),key:c},l.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":i,"menu__link--active":i&&!a.collapsed}),href:"#!",onClick:i?function(){return p(!b)}:void 0},c),l.a.createElement("ul",{className:"menu__list"},r.map((function(e){return l.a.createElement(f,{key:e.label,item:e,onItemClick:t,collapsible:i})}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:c},l.a.createElement(m.a,{activeClassName:"menu__link--active",className:"menu__link",to:o,onClick:t},c))}}var h=function(e){var a=Object(n.useState)(!1),t=a[0],i=a[1],r=e.docsSidebars,o=e.location,c=e.sidebar,s=e.sidebarCollapsible;if(!c)return null;var m=r[c];if(!m)throw new Error('Cannot find the sidebar "'+c+'" in the sidebar config!');return s&&m.forEach((function(e){return function e(a,t){var n=a.items,l=a.href;switch(a.type){case"category":var i=n.map((function(a){return e(a,t)})).filter((function(e){return e})).length>0;return a.collapsed=!i,i;case"link":default:return l===t.pathname.replace(/\/$/,"")}}(e,o)})),l.a.createElement("div",{className:b.a.sidebar},l.a.createElement("div",{className:u()("menu","menu--responsive",{"menu--show":t})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){i(!t)}},t?l.a.createElement("span",{className:u()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:p,width:p,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},m.map((function(e){return e.items.length>0&&l.a.createElement(f,{key:e.label,item:e,onItemClick:function(){i(!1)},collapsible:s})})))))},k=t(179),E=t(182),_=t(40),v=t(199),C=t.n(v);a.default=function(e){var a,t,n=e.route,s=e.docsMetadata,u=e.location,m=s.permalinkToSidebar,d=s.docsSidebars,b=m[u.pathname.replace(/\/$/,"")],p=Object(r.a)().siteConfig,f=(p=void 0===p?{}:p).themeConfig,v=(void 0===f?{}:f).sidebarCollapsible,w=void 0===v||v;return a=n.routes,t=u.pathname,a.some((function(e){return Object(_.c)(t,e)}))?l.a.createElement(c.a,null,l.a.createElement("div",{className:C.a.docPage},b&&l.a.createElement("div",{className:C.a.docSidebarContainer},l.a.createElement(h,{docsSidebars:d,location:u,sidebar:b,sidebarCollapsible:w})),l.a.createElement("main",{className:C.a.docMainContainer},l.a.createElement(i.a,{components:k.a},Object(o.a)(n.routes))))):l.a.createElement(E.default,e)}},182:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(175);a.default=function(){return l.a.createElement(i.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},198:function(e,a,t){e.exports={sidebar:"sidebar_1kLs",sidebarMenuIcon:"sidebarMenuIcon_2vk4",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_1JRa"}},199:function(e,a,t){e.exports={docPage:"docPage_1kjD",docSidebarContainer:"docSidebarContainer_1cYp",docMainContainer:"docMainContainer_FFX1"}}}]);