!function(e){function n(n){for(var r,c,i=n[0],l=n[1],u=n[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(n);d.length;)d.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var l=t[i];0!==a[l]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={0:0},o=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var s=l;o.push([86,1]),t()}({86:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(25),c=t(21),i=t(19),l=t(22),u=t(20),s=t.n(u),p=t(6),d=t(45),f=t.n(d),b=t(5),m=t.n(b),g=t(15),E=t.n(g);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(t,!0).forEach((function(n){E()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v={SET:"erro/SET",HIDE:"erro/HIDE",TOKEN:"erro/token"},x={visible:!1,message:null,token:!1};var h={setErro:function(e){return{type:v.SET,payload:{message:e}}},hideErro:function(){return{type:v.HIDE}},showInputToken:function(e){return{type:v.TOKEN}}},S=t(9),j=t.n(S),w=t(10);function k(){var e=j()(["\n  height: 42px;\n  line-height: 42px;\n  padding: 0 20px;\n  color: rgba(0, 0, 0, 0.6);\n  background: #f55a5a;\n  font-size: 13px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  z-index: 100;\n  width: 95%;\n\n  button {\n    border: 0;\n    background: transparent;\n\n    img {\n      height: 14px;\n    }\n  }\n  \n  .form-token {\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n\n    label {\n      margin-top: 2px;\n    }\n\n    input {\n      border: none;\n      background: #fafafa;\n      padding: 3px 10px;\n      color: #f55a5a;\n      margin: 10px;\n      border-radius: 5px;\n      display: flex;\n      flex: 2\n    }\n    \n    button {\n      border: 1px solid #b02121;\n      padding: 5px 10px;\n      margin: 10px 0;\n      color: #b02121;\n      border-radius: 5px;\n      font-size: 12px;\n      margin-left: auto;\n    }\n  }\n"]);return k=function(){return e},e}var P=w.b.div(k());function T(e){var n=e.erro,t=n.message,o=n.visible,c=n.token,i=e.hideErro,l=e.showInputToken,u=e.history,p=(f()(e,["erro","hideErro","showInputToken","history"]),Object(r.useState)("")),d=s()(p,2),b=d[0],m=d[1];return a.a.createElement(a.a.Fragment,null,o&&a.a.createElement(P,null,c?a.a.createElement("div",{className:"form-token"},a.a.createElement("label",{htmlFor:"token"},"Insira um token válido"),a.a.createElement("input",{type:"text",name:"token",id:"token",value:b,onChange:function(e){return m(e.target.value)}}),a.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),localStorage.setItem("token",b),l(),u.push("/")}},"SALVAR TOKEN")):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,t),a.a.createElement("button",{type:"button",onClick:i},a.a.createElement("i",{className:"fas fa-times"})))))}T.propTypes={hideErro:m.a.func.isRequired,showInputToken:m.a.func.isRequired,erro:m.a.shape({visible:m.a.bool,message:m.a.string}).isRequired};var A=Object(c.b)((function(e){return{erro:e.erro}}),(function(e){return Object(p.b)(h,e)}))(Object(l.g)(T));function I(){var e=j()(["\n  display: flex;\n  flex-direction: row;\n  padding: 3% 5%;\n\n  img.logo {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n  }\n\n  .content {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    padding: 0 5%;\n  }\n"]);return I=function(){return e},e}var _=w.b.div(I());function N(e){var n=e.children;return a.a.createElement(_,null,a.a.createElement(A,null),a.a.createElement("div",{className:"content"},n))}function R(){var e=j()(["\n  width: 100%;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 30px;\n  margin-bottom: 30px;\n  \n  li {\n    display: flex;\n    flex-direction: column;\n    transition: all 500ms;\n  }\n\n  li img {\n    width: 100%;\n    height: auto;\n    background-size: cover;\n    border-radius: 4px;\n  }\n\n  li strong {\n    display: block;\n    margin: 10px 0 5px;\n    font-size: 16px;\n    text-align: center;\n    color: #FAFAFA;\n    font-weight: normal;\n  }\n\n  li p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    text-align: center;\n    color: #999;\n  }\n"]);return R=function(){return e},e}var D=w.b.ul(R());function G(e){var n=e.busca,t=e.resultados,r=t.albums,o=t.tracks;return a.a.createElement(a.a.Fragment,null,r&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,'Álbums encontrados para "',n,'"'),a.a.createElement(D,null,r.items.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(i.b,{to:"/albums/".concat(e.id)},a.a.createElement("img",{src:e.images[Object.keys(e.images)[0]].url,alt:"Álbum - ".concat(e.name)}),a.a.createElement("strong",null,e.name),e.artists.map((function(e){return a.a.createElement("p",{key:e.id},e.name)}))))})))),o&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,'Músicas encontrados para "',n,'"'),a.a.createElement(D,{className:"albums"},o.items.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(i.b,{to:"/albums/".concat(e.album.id,"/track/").concat(e.id)},a.a.createElement("img",{src:e.album.images[Object.keys(e.album.images)[0]].url,alt:"Música - ".concat(e.name)}),a.a.createElement("strong",null,e.name),e.artists.map((function(e){return a.a.createElement("p",{key:e.id},e.name)}))))})))))}function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(t,!0).forEach((function(n){E()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var U={GET_REQUEST:"buscar/GET_REQUEST",GET_SUCCESS:"buscar/GET_SUCCESS",GET_ERROR:"buscar/GET_ERROR"},F={data:[],busca:"",loading:!1};var z={getBuscarRequest:function(e){return{type:U.GET_REQUEST,payload:{buscar:e}}},getBuscarSuccess:function(e){var n=e.data,t=e.busca;return{type:U.GET_SUCCESS,payload:{data:n,busca:t}}},getBuscarError:function(){return{type:U.GET_ERROR}}};function Y(){var e=j()(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-top: 40px;\n  margin-bottom: 60px;\n\n  label {\n    display: flex;\n    flex: 1;\n    padding-bottom: 5px;\n  }\n\n  input {\n    background: transparent;\n    color: #FAFAFA;\n    font-size: 48px;\n    border: none;\n    border-bottom: 1px solid #999999;\n    padding: 8px 4px; \n  }\n\n  input::placeholder {\n    color: #999999;\n  }\n"]);return Y=function(){return e},e}var q=w.b.form(Y());var B=Object(c.b)((function(e){return{buscar:e.buscar}}),(function(e){return Object(p.b)(z,e)}))((function(e){var n=e.getBuscarRequest,t=e.buscar,o=Object(l.f)().buscarTexto,c=Object(r.useState)(""),i=s()(c,2),u=i[0],p=i[1],d=function(e,n){var t=Object(r.useState)(e),a=s()(t,2),o=a[0],c=a[1];return Object(r.useEffect)((function(){var t=setTimeout((function(){c(e)}),n);return function(){clearTimeout(t)}}),[e,n]),o}(u,1500),f=Object(r.useCallback)((function(){u.length>0&&n(u)}),[u]);return Object(r.useEffect)((function(){d&&f()}),[d]),Object(r.useEffect)((function(){p(o)}),[o]),a.a.createElement(N,null,a.a.createElement(q,{onSubmit:function(e){e.preventDefault(),f()}},a.a.createElement("label",{htmlFor:"busca"},"Busque por artistas, álbums ou músicas"),a.a.createElement("input",{type:"text",value:u||"",name:"busca",placeholder:"Comece a escrever...",onChange:function(e){return p(e.target.value)}})),!t.loading&&a.a.createElement(G,{resultados:t.data,busca:t.busca}),t.loading&&a.a.createElement("div",null,"Buscando ..."))})),M=t(49),Q=t.n(M);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(t,!0).forEach((function(n){E()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var K={GET_REQUEST:"album/GET_REQUEST",GET_SUCCESS:"album/GET_SUCCESS"},X={data:[],loading:!0};var J={getAlbumRequest:function(e){return{type:K.GET_REQUEST,payload:{albumId:e}}},getAlbumSuccess:function(e){return{type:K.GET_SUCCESS,payload:{data:e}}}};var W=function(e){var n=e.album;return a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:n.images[Object.keys(n.images)[0]].url,alt:"Albúm"}),a.a.createElement("strong",null,n.name),n.artists.map((function(e){return a.a.createElement("p",{key:e.id},e.name)})))},Z=t(14),$=t.n(Z);function ee(e){var n=e.song;return a.a.createElement($.a,{url:n.url,playStatus:$.a.status.PLAYING,playFromPosition:0,position:0,volume:7})}function ne(){var e=j()(["\n  background: transparent;\n  padding: 10px 20px 10px 0;\n  border: none;\n  \n  i {\n    margin-right: 5px;\n  }\n"]);return ne=function(){return e},e}function te(){var e=j()(['\n  display: flex;\n  flex: 4;\n  padding-left: 50px;\n\n  ol {\n    list-style: none;\n    counter-reset: item;\n    display: block;\n    width: 100%;\n  }\n\n  ol li {\n    counter-increment: item;\n    position: relative;\n    padding-bottom: 20px;\n    cursor: pointer;\n  }\n\n  ol li.active {\n    color: #999;\n  }\n\n  ol li:before {\n    margin-right: 10px;\n    content: counter(item) " .";\n    color: white;\n    width: 25px;\n    text-align: right;\n    display: inline-block;\n    color: #999999;\n    font-size: 14px;\n  }\n\n  ol li span {\n    position: absolute;\n    right: 0;\n    color: #999999;\n  }\n']);return te=function(){return e},e}function re(){var e=j()(["\n  margin-top: 30px;\n\n  .album {\n    display: flex;\n    flex-direction: column;\n    flex: 2;\n  }\n\n  .album img {\n    width: 100%;\n    height: auto;\n    background-size: cover;\n    border-radius: 4px;\n  }\n\n  .album strong {\n    margin: 15px 0 10px;\n    font-size: 18px;\n    text-align: center;\n    color: #FAFAFA;\n    font-weight: normal;\n  }\n\n  .album p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    text-align: center;\n    color: #999;\n  }\n"]);return re=function(){return e},e}var ae=w.b.div(re()),oe=w.b.div(te()),ce=w.b.button(ne());function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var le=Object(c.b)((function(e){return{album:e.album}}),(function(e){return Object(p.b)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(t,!0).forEach((function(n){E()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},J,{},h),e)}))((function(e){var n=e.history,t=e.getAlbumRequest,o=e.setErro,c=e.album,i=Object(l.f)(),u=i.albumId,p=i.trackId,d=Object(r.useState)({id:null,url:null}),f=s()(d,2),b=f[0],m=f[1];function g(e){null!==e.preview_url?m({id:e.id,url:e.preview_url}):o("O Spotify não disponibiliza preview dessa música")}return Object(r.useEffect)((function(){void 0!==u&&t(u)}),[u]),Object(r.useEffect)((function(){if(!c.loading&&void 0!==p){var e=c.data.tracks.items.filter((function(e){return e.id===p&&null!==e.preview_url}),p),n=e[Object.keys(e)[0]];"object"===Q()(n)?g(n):o("O Spotify não disponibiliza preview dessa música")}}),[c,p]),a.a.createElement(a.a.Fragment,null,!c.loading&&a.a.createElement(N,null,!!b.url&&a.a.createElement(ee,{song:b}),a.a.createElement("div",{className:"content-page"},a.a.createElement("div",null,a.a.createElement(ce,{type:"button",className:"voltar",onClick:function(){return n.push("/")}},a.a.createElement("i",{className:"fas fa-chevron-left"})," Voltar")),a.a.createElement(ae,{className:"flex-row page-album"},a.a.createElement("div",{className:"album"},a.a.createElement(W,{album:c.data})),a.a.createElement(oe,null,a.a.createElement("ol",{role:"menu"},c.data.tracks.items.map((function(e){return a.a.createElement("li",{className:b.id===e.id?"active":"",key:e.id,onClick:function(){return g(e)}},e.name)}))))))))}));function ue(){return a.a.createElement(i.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:B}),a.a.createElement(l.a,{path:"/buscar/:buscarTexto",component:B}),a.a.createElement(l.a,{path:"/albums/:albumId/track/:trackId",component:le}),a.a.createElement(l.a,{path:"/albums/:albumId",component:le})))}var se=t(51),pe=t(18),de=t.n(pe),fe=t(8),be=t(50),me=t.n(be).a.create({baseURL:"https://api.spotify.com/v1"}),ge=de.a.mark(Ee);function Ee(e){var n,t;return de.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,me.defaults.headers.Authorization="Bearer ".concat(localStorage.getItem("token")||"request-token"),r.next=5,Object(fe.b)(me.get,"/albums/".concat(n.albumId));case 5:return t=r.sent,r.next=8,Object(fe.c)(J.getAlbumSuccess(t.data));case 8:r.next=19;break;case 10:if(r.prev=10,r.t0=r.catch(1),401!==r.t0.response.status){r.next=17;break}return r.next=15,Object(fe.c)(h.showInputToken(!0));case 15:r.next=19;break;case 17:return r.next=19,Object(fe.c)(h.setErro("Não foi possivel obter os dados"));case 19:case"end":return r.stop()}}),ge,null,[[1,10]])}var ye=de.a.mark(Oe);function Oe(e){var n,t;return de.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,me.defaults.headers.Authorization="Bearer ".concat(localStorage.getItem("token")||"request-token"),r.next=5,Object(fe.b)(me.get,"/search?query=".concat(n.buscar,"&offset=0&limit=5&type=album,track"));case 5:return t=r.sent,r.next=8,Object(fe.c)(z.getBuscarSuccess({data:t.data,busca:n.buscar}));case 8:r.next=21;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(fe.c)(z.getBuscarError());case 14:if(void 0===r.t0.response||401!==r.t0.response.status){r.next=19;break}return r.next=17,Object(fe.c)(h.showInputToken(!0));case 17:r.next=21;break;case 19:return r.next=21,Object(fe.c)(h.setErro("Não foi possivel obter os dados"));case 21:case"end":return r.stop()}}),ye,null,[[1,10]])}var ve=de.a.mark(xe);function xe(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.a)([Object(fe.d)(K.GET_REQUEST,Ee),Object(fe.d)(U.GET_REQUEST,Oe)]);case 2:case"end":return e.stop()}}),ve)}function he(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?he(t,!0).forEach((function(n){E()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):he(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var je={LOAD:"player/LOAD",PLAY:"player/PLAY",PAUSE:"player/PAUSE",NEXT:"player/NEXT",PREV:"player/PREV",PLAYING:"player/PLAYING",SELECT:"player/SELECT",HANDLE_POSITION:"player/HANDLE_POSITION",SET_POSITION:"player/SET_POSITION",SET_VOLUME:"player/SET_VOLUME"},we={currentSong:null,list:[],status:$.a.status.PLAYING,position:null,positionShown:null,duration:null,volume:50};var ke=Object(p.c)({album:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case K.GET_REQUEST:return V({},e,{loading:!0});case K.GET_SUCCESS:return V({},e,{loading:!1,data:n.payload.data});default:return e}},buscar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case U.GET_REQUEST:return L({},e,{loading:!0});case U.GET_SUCCESS:return L({},e,{loading:!1,data:n.payload.data,busca:n.payload.busca});case U.GET_ERROR:return L({},e,{loading:!1,data:[],busca:""});default:return e}},erro:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v.SET:return O({},e,{visible:!0,message:n.payload.message});case v.HIDE:return O({},e,{visible:!1,message:null});case v.TOKEN:return O({},e,{visible:!e.visible,token:!e.token});default:return e}},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case je.LOAD:return Se({},e,{currentSong:n.payload.song,list:n.payload.list,status:$.a.status.PLAYING});case je.PLAY:return Se({},e,{status:$.a.status.PLAYING});case je.PAUSE:return Se({},e,{status:$.a.status.PAUSED});case je.NEXT:var t=e.list.findIndex((function(n){return n.id===e.currentSong.id})),r=e.list[t+1];return r?Se({},e,{currentSong:r,status:$.a.status.PLAYING,position:0}):e;case je.PREV:var a=e.list.findIndex((function(n){return n.id===e.currentSong.id})),o=e.list[a-1];return o?Se({},e,{currentSong:o,status:$.a.status.PLAYING,position:0}):e;case je.SELECT:return Se({},e,{currentSong:n.payload.song,list:n.payload.list,status:$.a.status.PAUSED});case je.PLAYING:return Se({},e,{},n.payload);case je.HANDLE_POSITION:return Se({},e,{positionShown:e.duration*n.payload.percent});case je.SET_POSITION:return Se({},e,{position:e.duration*n.payload.percent,positionShown:null});case je.SET_VOLUME:return Se({},e,{volume:n.payload.volume});default:return e}}}),Pe=Object(se.a)(),Te=Object(p.e)(ke,Object(p.d)(Object(p.a)(Pe)));Pe.run(xe);var Ae=Te;function Ie(){var e=j()(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,500,700,900&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    min-height: 100%;\n  }\n\n  body {\n    background:#222;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body, input, button {\n    color: #fff;\n    font-size: 12px;\n    font-family: Roboto, Arial, Helvetica, sans-serif;\n    position: relative;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  h1 {\n    font-size: 48px;\n    font-weight: bold;\n    color: #999999;\n  }\n\n  h2 {\n    font-size: 24px;\n    font-weight: normal;\n    color: #FAFAFA;\n    margin-bottom: 30px;\n  }\n\n  .flex-column {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n  }\n\n  .flex-row {\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n  }\n\n  .content-page {\n    margin-top: 20px;\n  }\n\n  /* Small devices (landscape phones, 576px and up) */\n  @media (min-width: 576px) {\n\n  }\n\n  /* Medium devices (tablets, 768px and up) */\n  @media (min-width: 768px) {\n\n  }\n\n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 992px) {\n\n  }\n\n  /* Extra large devices (large desktops, 1200px and up) */\n  @media (min-width: 1200px) {\n\n  }\n"]);return Ie=function(){return e},e}var _e=Object(w.a)(Ie());Object(o.render)(a.a.createElement((function(){return a.a.createElement(c.a,{store:Ae},a.a.createElement(_e,null),a.a.createElement(ue,null))}),null),document.getElementById("root"))}});