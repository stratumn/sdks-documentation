(window.webpackJsonp=window.webpackJsonp||[]).push([[6,22],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(105),l=a(98);t.default=function(){return i.a.createElement(c.a,{title:"Page Not Found"},i.a.createElement("main",{className:"container margin-vert--xl"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--6 col--offset-3"},i.a.createElement("h1",{className:"hero__title"},i.a.createElement(l.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),i.a.createElement("p",null,i.a.createElement(l.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),i.a.createElement("p",null,i.a.createElement(l.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},89:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(93),l=a(16),o=a(28),r=a(105),s=a(3),d=a(7),u=a(91),b=a(92),m=a(94),p=a(120),h=a(121),f=a(119),v=a(101),E=a(107),O=a(122),j=function(e){return i.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),i.a.createElement("g",{fill:"#7a7a7a"},i.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),i.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(124),k=a(98),C=a(71),N=a.n(C),_=["item","onItemClick","collapsible","activePath"],I=["item","onItemClick","activePath","collapsible"];var y=function e(t,a){return"link"===t.type?Object(b.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function T(e){var t,a,c,l=e.item,o=e.onItemClick,r=e.collapsible,b=e.activePath,m=Object(d.a)(e,_),p=l.items,h=l.label,f=y(l,b),v=(a=f,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),E=Object(n.useState)((function(){return!!r&&(!f&&l.collapsed)})),O=E[0],j=E[1],g=Object(n.useRef)(null),k=Object(n.useState)(void 0),C=k[0],I=k[1],T=function(e){var t;void 0===e&&(e=!0),I(e?(null===(t=g.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){f&&!v&&O&&j(!1)}),[f,v,O]);var w=Object(n.useCallback)((function(e){e.preventDefault(),C||T(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[C]);return 0===p.length?null:i.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":O}),key:h},i.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&f},t[N.a.menuLinkText]=!r,t)),onClick:r?w:void 0,href:r?"#!":void 0},m),h),i.a.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){O||T(!1)}},p.map((function(e){return i.a.createElement(S,{tabIndex:O?"-1":"0",key:e.label,item:e,onItemClick:o,collapsible:r,activePath:b})}))))}function w(e){var t,a=e.item,n=e.onItemClick,c=e.activePath,l=(e.collapsible,Object(d.a)(e,I)),o=a.href,r=a.label,b=y(a,c);return i.a.createElement("li",{className:"menu__list-item",key:r},i.a.createElement(v.a,Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--active":b},t[N.a.menuLinkExternal]=!Object(E.a)(o),t)),to:o},Object(E.a)(o)&&{isNavLink:!0,exact:!0,onClick:n},l),r))}function S(e){switch(e.item.type){case"category":return i.a.createElement(T,e);case"link":default:return i.a.createElement(w,e)}}var x=function(e){var t,a,c=e.path,l=e.sidebar,o=e.sidebarCollapsible,r=void 0===o||o,s=e.onCollapse,d=e.isHidden,v=Object(n.useState)(!1),E=v[0],C=v[1],_=Object(b.useThemeConfig)(),I=_.navbar.hideOnScroll,y=_.hideableSidebar,T=Object(m.a)().isAnnouncementBarClosed,w=Object(f.a)().scrollY;Object(p.a)(E);var x=Object(h.a)();return Object(n.useEffect)((function(){x===h.b.desktop&&C(!1)}),[x]),i.a.createElement("div",{className:Object(u.a)(N.a.sidebar,(t={},t[N.a.sidebarWithHideableNavbar]=I,t[N.a.sidebarHidden]=d,t))},I&&i.a.createElement(O.a,{tabIndex:-1,className:N.a.sidebarLogo}),i.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",N.a.menu,(a={"menu--show":E},a[N.a.menuWithAnnouncementBar]=!T&&0===w,a))},i.a.createElement("button",{"aria-label":E?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){C(!E)}},E?i.a.createElement("span",{className:Object(u.a)(N.a.sidebarMenuIcon,N.a.sidebarMenuCloseIcon)},"\xd7"):i.a.createElement(g.a,{className:N.a.sidebarMenuIcon,height:24,width:24})),i.a.createElement("ul",{className:"menu__list"},l.map((function(e){return i.a.createElement(S,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),C(!1)},collapsible:r,activePath:c})})))),y&&i.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(u.a)("button button--secondary button--outline",N.a.collapseSidebarButton),onClick:s},i.a.createElement(j,{className:N.a.collapseSidebarButtonIcon})))},A=a(130),L=a(112),P=a(23),B=a(75),M=a.n(B);function R(e){var t,a,o,s,d,m=e.currentDocRoute,p=e.versionMetadata,h=e.children,f=Object(l.default)(),v=f.siteConfig,E=f.isClient,O=p.pluginId,g=p.permalinkToSidebar,C=p.docsSidebars,N=p.version,_=g[m.path],I=C[_],y=Object(n.useState)(!1),T=y[0],w=y[1],S=Object(n.useState)(!1),L=S[0],P=S[1],B=Object(n.useCallback)((function(){L&&P(!1),w(!T)}),[L]);return i.a.createElement(r.a,{key:E,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:N,tag:Object(b.docVersionSearchTag)(O,N)}},i.a.createElement("div",{className:M.a.docPage},I&&i.a.createElement("div",{className:Object(u.a)(M.a.docSidebarContainer,(t={},t[M.a.docSidebarContainerHidden]=T,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(M.a.docSidebarContainer)&&T&&P(!0)},role:"complementary"},i.a.createElement(x,{key:_,sidebar:I,path:m.path,sidebarCollapsible:null===(a=null===(o=v.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===a||a,onCollapse:B,isHidden:L}),L&&i.a.createElement("div",{className:M.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:B,onClick:B},i.a.createElement(j,{className:M.a.expandSidebarButtonIcon}))),i.a.createElement("main",{className:Object(u.a)(M.a.docMainContainer,(s={},s[M.a.docMainContainerEnhanced]=T,s))},i.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",M.a.docItemWrapper,(d={},d[M.a.docItemWrapperEnhanced]=T,d))},i.a.createElement(c.a,{components:A.a},h)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,c=t.find((function(e){return Object(P.matchPath)(n.pathname,e)}));return c?i.a.createElement(R,{currentDocRoute:c,versionMetadata:a},Object(o.a)(t)):i.a.createElement(L.default,e)}}}]);