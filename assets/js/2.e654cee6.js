/*! For license information please see 2.e654cee6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{104:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(91),i=a(101),s=a(102),u=a(23),d=a(92),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],m=["items","position","className"],h=["className"],b=["items","className","position"],v=["className"],p=["mobile"];function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,h=e.prependBaseUrlToHref,b=Object(r.a)(e,f),v=Object(s.a)(c),p=Object(s.a)(t),g=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{href:h?g:l}:Object.assign({isNavLink:!0,activeClassName:m,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}}:null),b),u)}function E(e){var t,a=e.items,i=e.position,s=e.className,u=Object(r.a)(e,m),d=Object(c.useRef)(null),f=Object(c.useRef)(null),b=Object(c.useState)(!1),v=b[0],p=b[1];Object(c.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]);var E=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return a?o.a.createElement("div",{ref:d,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":v})},o.a.createElement(g,Object(n.a)({className:E(s)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),p(!v))}}),null!==(t=u.children)&&void 0!==t?t:u.label),o.a.createElement("ul",{ref:f,className:"dropdown__menu"},a.map((function(e,t){var c=e.className,l=Object(r.a)(e,h);return o.a.createElement("li",{key:t},o.a.createElement(g,Object(n.a)({onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),p(!1);var n=d.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:E(c,!0)},l)))})))):o.a.createElement(g,Object(n.a)({className:E(s)},u))}function O(e){var t,a,i,s=e.items,f=e.className,m=(e.position,Object(r.a)(e,b)),h=Object(c.useRef)(null),p=Object(u.useLocation)().pathname,E=Object(c.useState)((function(){var e;return null===(e=!(null!=s&&s.some((function(e){return Object(d.isSamePath)(e.to,p)}))))||void 0===e||e})),O=E[0],k=E[1],j=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(g,Object(n.a)({className:j(f)},m)));var y=null!==(t=h.current)&&void 0!==t&&t.scrollHeight?(null===(a=h.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":O})},o.a.createElement(g,Object(n.a)({role:"button",className:j(f,!0)},m,{onClick:function(e){e.preventDefault(),k((function(e){return!e}))}}),null!==(i=m.children)&&void 0!==i?i:m.label),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:O?void 0:y}},s.map((function(e,t){var a=e.className,c=Object(r.a)(e,v);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(g,Object(n.a)({activeClassName:"menu__link--active",className:j(a)},c,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,p),c=a?O:E;return o.a.createElement(c,n)}},105:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(91),o=a(98),l=a(23),i=a(58),s=a.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){var e=Object(n.useRef)(null),t=Object(l.useLocation)();return Object(n.useEffect)((function(){t.hash||u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},f=a(92),m=a(94),h=a(59),b=a.n(h);var v=function(){var e,t=Object(m.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,l=Object(f.useThemeConfig)().announcementBar;if(!l)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,d=l.isCloseable;return!i||d&&a?null:r.a.createElement("div",{className:b.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},r.a.createElement("div",{className:Object(c.a)(b.a.announcementBarContent,(e={},e[b.a.announcementBarCloseable]=d,e)),dangerouslySetInnerHTML:{__html:i}}),d?r.a.createElement("button",{type:"button",className:b.a.announcementBarClose,onClick:n,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=a(3),g=a(117),E=a.n(g),O=a(16),k=a(115),j=function(e){var t=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(l.useHistory)(),i=Object(O.default)().siteConfig,s=(void 0===i?{}:i).baseUrl,u=Object(k.usePluginData)("docusaurus-lunr-search"),d=function(){t.current||(Promise.all([fetch(""+s+u.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+s+u.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([a.e(20),a.e(21)]).then(a.bind(null,170)),a.e(0).then(a.t.bind(null,90,7))]).then((function(e){var t=e[0],a=e[1],n=e[2].default;0!==t.length&&function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=s+a.url;document.createElement("a").href=n,o.push(n)}})}(t,a,n)})),t.current=!0)},f=Object(n.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:E()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:E()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:f,onBlur:f,ref:c}))},y=a(141),_=a.n(y),C=a(60),w=a.n(C),N=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(w.a.toggle,w.a.dark),style:a},t)},S=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(w.a.toggle,w.a.light),style:a},t)},T=function(e){var t=Object(f.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(O.default)().isClient;return r.a.createElement(_.a,Object(p.a)({disabled:!l,icons:{checked:r.a.createElement(N,{icon:a,style:n}),unchecked:r.a.createElement(S,{icon:c,style:o})}},e))},x=a(106),L=a(119),I=function(e){var t=Object(l.useLocation)(),a=Object(n.useState)(e),r=a[0],c=a[1],o=Object(n.useRef)(!1),i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),f=d[0],m=d[1],h=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(L.a)((function(t){var a=t.scrollY;if(e)if(a<f)c(!0);else{if(o.current)return o.current=!1,c(!1),void u(a);s&&0===a&&c(!0);var n=document.documentElement.scrollHeight-f,r=window.innerHeight;s&&a>=s?c(!1):a+r<n&&c(!0),u(a)}}),[s,f,o]),Object(n.useEffect)((function(){e&&s&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:h,isNavbarVisible:r}},B=a(120),D=a(121),P=a(7),A=a(104),M=["width","height"],V=function(e){var t=e.width,a=void 0===t?20:t,n=e.height,c=void 0===n?20:n,o=Object(P.a)(e,M);return r.a.createElement("svg",Object(p.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},U=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function R(e){var t=e.mobile,a=e.dropdownItemsBefore,n=e.dropdownItemsAfter,c=Object(P.a)(e,U),o=Object(O.default)().i18n,l=o.currentLocale,i=o.locales,s=o.localeConfigs,u=Object(f.useAlternatePageUtils)();function d(e){return s[e].label}var m=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":""}})),h=[].concat(a,m,n),b=t?"Languages":d(l);return r.a.createElement(A.a,Object(p.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement(V,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,b)),items:h}))}var F=a(61),H=a.n(F);function X(e){return e.mobile?null:r.a.createElement("div",{className:H.a.searchWrapper},r.a.createElement(j,null))}var z=["type"],G={default:function(){return A.a},localeDropdown:function(){return R},search:function(){return X},docsVersion:function(){return a(145).default},docsVersionDropdown:function(){return a(146).default},doc:function(){return a(147).default}};function W(e){var t=e.type,a=Object(P.a)(e,z),n=function(e){void 0===e&&(e="default");var t=G[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var Y=a(122),K=a(124),Q=a(63),q=a.n(Q),J="right";var Z=function(){var e,t=Object(f.useThemeConfig)(),a=t.navbar,o=a.items,l=a.hideOnScroll,i=a.style,s=t.colorMode.disableSwitch,u=Object(n.useState)(!1),d=u[0],m=u[1],h=Object(x.a)(),b=h.isDarkTheme,v=h.setLightTheme,g=h.setDarkTheme,E=I(l),O=E.navbarRef,k=E.isNavbarVisible;Object(B.a)(d);var y=Object(n.useCallback)((function(){m(!0)}),[m]),_=Object(n.useCallback)((function(){m(!1)}),[m]),C=Object(n.useCallback)((function(e){return e.target.checked?g():v()}),[v,g]),w=Object(D.a)();Object(n.useEffect)((function(){w===D.b.desktop&&m(!1)}),[w]);var N=o.some((function(e){return"search"===e.type})),S=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:J)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:J)}))}}(o),L=S.leftItems,P=S.rightItems;return r.a.createElement("nav",{ref:O,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":d},e[q.a.navbarHideable]=l,e[q.a.navbarHidden]=l&&!k,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:y,onKeyDown:y},r.a.createElement(K.a,null)),r.a.createElement(Y.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),L.map((function(e,t){return r.a.createElement(W,Object(p.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},P.map((function(e,t){return r.a.createElement(W,Object(p.a)({},e,{key:t}))})),!s&&r.a.createElement(T,{className:q.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:b,onChange:C}),!N&&r.a.createElement(j,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:_}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(Y.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:_}),!s&&d&&r.a.createElement(T,{"aria-label":"Dark mode toggle in sidebar",checked:b,onChange:C})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement(W,Object(p.a)({mobile:!0},e,{onClick:_,key:t}))})))))))},$=a(101),ee=a(102),te=a(64),ae=a.n(te),ne=a(123),re=["to","href","label","prependBaseUrlToHref"];function ce(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(P.a)(e,re),l=Object(ee.a)(t),i=Object(ee.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement($.a,Object(p.a)({className:"footer__link-item"},a?{href:c?i:a}:{to:l},o),n)}var oe=function(e){var t=e.sources,a=e.alt;return r.a.createElement(ne.a,{className:"footer__logo",alt:a,sources:t})};var le=function(){var e=Object(f.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,s={light:Object(ee.a)(i.src),dark:Object(ee.a)(i.srcDark||i.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(ce,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement($.a,{href:i.href,className:ae.a.footerLogoLink},r.a.createElement(oe,{alt:i.alt,sources:s})):r.a.createElement(oe,{alt:i.alt,sources:s})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},ie=a(8),se="light",ue="dark",de=function(e){return e===ue?ue:se},fe=function(e){try{localStorage.setItem("theme",de(e))}catch(t){console.error(t)}},me=function(){var e=Object(f.useThemeConfig)().colorMode,t=e.defaultMode,a=e.disableSwitch,r=e.respectPrefersColorScheme,c=Object(n.useState)(function(e){return ie.a.canUseDOM?de(document.documentElement.getAttribute("data-theme")):de(e)}(t)),o=c[0],l=c[1],i=Object(n.useCallback)((function(){l(se),fe(se)}),[]),s=Object(n.useCallback)((function(){l(ue),fe(ue)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",de(o))}),[o]),Object(n.useEffect)((function(){if(!a)try{var e=localStorage.getItem("theme");null!==e&&l(de(e))}catch(t){console.error(t)}}),[l]),Object(n.useEffect)((function(){a&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?ue:se)}))}),[]),{isDarkTheme:o===ue,setLightTheme:i,setDarkTheme:s}},he=a(118);var be=function(e){var t=me(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(he.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},ve="docusaurus.tab.",pe=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(ve))e[n.substring(ve.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},ge="docusaurus.announcement.dismiss",Ee="docusaurus.announcement.id",Oe=function(){var e=Object(f.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(ge,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(Ee);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(Ee,t),n&&localStorage.setItem(ge,"false"),(n||"false"===localStorage.getItem(ge))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},ke=a(95);var je=function(e){var t=pe(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=Oe(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(ke.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function ye(e){var t=e.children;return r.a.createElement(be,null,r.a.createElement(je,null,r.a.createElement(f.DocsPreferredVersionContextProvider,null,t)))}var _e=a(26);function Ce(e){var t=e.locale,a=e.version,n=e.tag;return r.a.createElement(_e.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}var we=a(125);function Ne(){var e=Object(O.default)().i18n,t=e.defaultLocale,a=e.locales,n=Object(f.useAlternatePageUtils)();return r.a.createElement(_e.a,null,a.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Se(e){var t=e.permalink,a=Object(O.default)().siteConfig.url,n=function(){var e=Object(O.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(ee.a)(t)}(),c=t?""+a+t:n;return r.a.createElement(_e.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Te(e){var t=Object(O.default)(),a=t.siteConfig,n=t.i18n,c=n.currentLocale,o=n.localeConfigs,l=a.favicon,i=a.themeConfig,s=i.image,u=i.metadatas,d=e.title,m=e.description,h=e.image,b=e.keywords,v=e.searchMetadatas,g=Object(ee.a)(l),E=c,k=o[c].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a,null,r.a.createElement("html",{lang:E,dir:k}),l&&r.a.createElement("link",{rel:"shortcut icon",href:g})),r.a.createElement(we.a,{title:d,description:m,keywords:b,image:h||s}),r.a.createElement(Se,null),r.a.createElement(Ne,null),r.a.createElement(Ce,Object(p.a)({tag:f.DEFAULT_SEARCH_TAG,locale:c},v)),r.a.createElement(_e.a,null,u.map((function(e,t){return r.a.createElement("meta",Object(p.a)({key:"metadata_"+t},e))}))))}a(65);var xe=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(66);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return xe(),r.a.createElement(ye,null,r.a.createElement(Te,e),r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(Z,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(le,null))}},106:function(e,t,a){"use strict";var n=a(0),r=a(118);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},117:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},118:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},119:function(e,t,a){"use strict";var n=a(0),r=a(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},120:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},121:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=a(8),c={desktop:"desktop",mobile:"mobile"};t.a=function(){var e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}var a=Object(n.useState)(t),o=a[0],l=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){l(t())}}),[]),o}},122:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(101),i=a(123),s=a(102),u=a(16),d=a(92),f=["imageClassName","titleClassName"];t.a=function(e){var t=Object(u.default)().isClient,a=Object(d.useThemeConfig)().navbar,c=a.title,m=a.logo,h=void 0===m?{src:""}:m,b=e.imageClassName,v=e.titleClassName,p=Object(r.a)(e,f),g=Object(s.a)(h.href||"/"),E={light:Object(s.a)(h.src),dark:Object(s.a)(h.srcDark||h.src)};return o.a.createElement(l.a,Object(n.a)({to:g},p,h.target&&{target:h.target}),h.src&&o.a.createElement(i.a,{key:t,className:b,sources:E,alt:h.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:v},c))}},123:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(91),i=a(16),s=a(106),u=a(62),d=a.n(u),f=["sources","className","alt"];t.a=function(e){var t=Object(i.default)().isClient,a=Object(s.a)().isDarkTheme,c=e.sources,u=e.className,m=e.alt,h=void 0===m?"":m,b=Object(r.a)(e,f),v=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:h,className:Object(l.a)(d.a.themedImage,d.a["themedImage--"+e],u)},b))})))}},124:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=["width","height","className"];t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=Object(r.a)(e,l);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:s,width:a,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},141:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),l=f(a(117)),i=f(a(1)),s=f(a(142)),u=f(a(143)),d=a(144);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},143:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},144:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(104),i=a(100),s=a(92),u=["label","to","docsPluginId"];function d(e){var t,a=e.label,c=e.to,d=e.docsPluginId,f=Object(r.a)(e,u),m=Object(i.useActiveVersion)(d),h=Object(s.useDocsPreferredVersion)(d).preferredVersion,b=Object(i.useLatestVersion)(d),v=null!==(t=null!=m?m:h)&&void 0!==t?t:b,p=null!=a?a:v.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(n.a)({},f,{label:p,to:g}))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(104),i=a(100),s=a(92),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,a,c=e.mobile,f=e.docsPluginId,m=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,b=e.dropdownItemsAfter,v=Object(r.a)(e,u),p=Object(i.useActiveDocContext)(f),g=Object(i.useVersions)(f),E=Object(i.useLatestVersion)(f),O=Object(s.useDocsPreferredVersion)(f),k=O.preferredVersion,j=O.savePreferredVersionName;var y=null!==(t=null!==(a=p.activeVersion)&&void 0!==a?a:k)&&void 0!==t?t:E,_=c?"Versions":y.label,C=c?void 0:d(y).path;return o.a.createElement(l.a,Object(n.a)({},v,{mobile:c,label:_,to:C,items:function(){var e=g.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){j(e.name)}}})),t=[].concat(h,e,b);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(104),i=a(100),s=a(91),u=a(92),d=["docId","activeSidebarClassName","label","docsPluginId"];function f(e){var t,a,c=e.docId,f=e.activeSidebarClassName,m=e.label,h=e.docsPluginId,b=Object(r.a)(e,d),v=Object(i.useActiveDocContext)(h),p=v.activeVersion,g=v.activeDoc,E=Object(u.useDocsPreferredVersion)(h).preferredVersion,O=Object(i.useLatestVersion)(h),k=null!==(t=null!=p?p:E)&&void 0!==t?t:O,j=k.docs.find((function(e){return e.id===c}));if(!j)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+k.name+".\nAvailable docIds=\n- "+k.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},b,{className:Object(s.a)(b.className,(a={},a[f]=g&&g.sidebar===j.sidebar,a)),label:null!=m?m:j.id,to:j.path}))}},94:function(e,t,a){"use strict";var n=a(0),r=a(95);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},95:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r}}]);