(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6,7],{177:function(e,t,n){"use strict";n.r(t);n(195),n(55);var a=n(7),r=n.n(a),i=n(0),o=n(210),u=n(204),c=n.n(u),s=[{icon:o.f,label:"Github",link:"https://github.com/andykais"},{icon:o.i,label:"Linkedin",link:"https://linkedin.com/in/kaisea"},{icon:o.e,label:"Flickr",link:"https://www.flickr.com/photos/andykais"},{icon:o.d,label:"Resume",link:c.a}],l=n(205),d=n.n(l),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.createElement("div",null,i.createElement("ul",{className:d.a.list},s.map(function(e){return i.createElement("li",{key:e.label},i.createElement("a",{href:e.link},e.icon({className:d.a.icon}),i.createElement("span",{className:d.a.label},e.label)))})))},t}(i.PureComponent);t.default=f},178:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n(189),u=n(197),c=n(177),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.createElement(o.a,{centered:!0},i.createElement("h1",{className:"stalemate-font"},"Andrew Kaiser"),i.createElement(u.a,null),i.createElement(c.default,null))},t}(i.PureComponent);t.default=s},181:function(e,t,n){"use strict";n.r(t);var a=n(178);t.default=a.default},186:function(e,t,n){"use strict";var a=n(39);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(194)),i=a(n(202)),o=a(n(7)),u=a(n(57)),c=a(n(58)),s=a(n(4)),l=a(n(0)),d=n(15),f=n(187);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var r=t.location;return n.state={IOSupported:a,location:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,u=t.onClick,c=t.onMouseEnter,s=t.location,m=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),w=p(n);return l.default.createElement(d.Link,(0,i.default)({to:w,state:m,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){if(u&&u(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,f.parsePath)(w),a=n.pathname,r=n.hash;if(a===s.pathname||!a){var i=r?document.getElementById(r.substr(1)):null;null!==i?i.scrollIntoView():window.scrollTo(0,0)}y(w,{state:m,replace:h})}return!0}},v))},t}(l.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v,w=(v=h,function(e){return l.default.createElement(d.Location,null,function(t){var n=t.location;return l.default.createElement(v,(0,i.default)({location:n},e))})});t.default=w;var y=function(e,t){window.___navigate(e,t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),g(e)}},187:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(186),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(26);n.d(t,"waitForRouteChange",function(){return s.c});var l=n(188),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var f=n(36);n.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},188:function(e,t,n){var a;e.exports=(a=n(198))&&a.default||a},189:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=(n(86),n(56),n(201),n(55),n(0)),o=n(203),u=n.n(o),c=n(190),s=n.n(c),l=(n(192),Object.entries({description:"Andrew Kaiser is a software engineer interested in web applications, scalablity and operations",keywords:"resume, personal, profile"}).map(function(e){return{name:e[0],content:e[1]}})),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children,a=e.centered;return i.createElement(i.Fragment,null,i.createElement(u.a,{title:t?t+" | Andrew Kaiser":"Andrew Kaiser",meta:l},i.createElement("html",{lang:"en"})),i.createElement("div",{className:s.a.container},i.createElement("div",{className:a&&s.a.centered},n),i.createElement("footer",{className:s.a.footer},"source code on"," ",i.createElement("a",{href:"https://github.com/andykais/andykais.github.io"},"github"))))},t}(i.PureComponent);t.a=d},190:function(e,t,n){e.exports={container:"index-module--container--1e2Kq",centered:"index-module--centered--nwiLQ",footer:"index-module--footer--1MfrV"}},192:function(e,t,n){},194:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},195:function(e,t,n){"use strict";n(196)("link",function(e){return function(t){return e(this,"a","href",t)}})},196:function(e,t,n){var a=n(6),r=n(16),i=n(27),o=/"/g,u=function(e,t,n,a){var r=String(i(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},197:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n(187),u=n(199),c=n.n(u),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.createElement("nav",{className:c.a.nav},i.createElement(o.Link,{to:"/work",activeClassName:c.a.activeLink},"work"),i.createElement(o.Link,{to:"/involvement",activeClassName:c.a.activeLink},"involvement"),i.createElement(o.Link,{to:"/software-projects",activeClassName:c.a.activeLink},"software projects"))},t}(i.PureComponent);t.a=s},198:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(59),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},199:function(e,t,n){e.exports={nav:"index-module--nav--1Fxbj",activeLink:"index-module--activeLink--1OjqJ"}},202:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},204:function(e,t,n){e.exports=n.p+"static/resume-4c3cc5f9930136fedb756dfc4f221466.pdf"},205:function(e,t,n){e.exports={list:"index-module--list--1cl-5",icon:"index-module--icon--2vatt",label:"index-module--label--3iOOS"}}}]);
//# sourceMappingURL=component---src-pages-index-js-28e7b0068bc18a22e224.js.map