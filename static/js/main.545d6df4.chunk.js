(this["webpackJsonpspotify-clone-app"]=this["webpackJsonpspotify-clone-app"]||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(25),a=c.n(i),r=(c(61),c(15)),o=(c(62),c(63),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("7101b92d35364b53a65e5f9894ab177a","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),l=c(1);var j=function(){return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(l.jsx)("a",{href:o,children:"Login With Spotify"})]})};c(65),c(66),c(67);var d=function(e){var t=e.title,c=e.Icon;return Object(l.jsxs)("div",{className:"sidebarOption",children:[c&&Object(l.jsx)(c,{className:"sidebarOption__icon"}),c?Object(l.jsx)("h4",{children:t}):Object(l.jsx)("p",{children:t})]})},u=c(35),b=c.n(u),O=c(28),p=c.n(O),h=c(41),f=c.n(h),x=Object(s.createContext)(),y=function(e){var t=e.initialState,c=e.reducer,n=e.children;return Object(l.jsx)(x.Provider,{value:Object(s.useReducer)(c,t),children:n})},m=function(){return Object(s.useContext)(x)};var v=function(){var e,t=m(),c=Object(r.a)(t,2),s=c[0].playlists;return c[1],Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{className:"sidebar_logo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTOGTXPk8tj81VtwahdQpkvvN5j1Dcfz8oHquqxrl--HCSWF5DoiBDRH-WIVmjJKDGjI&usqp=CAU",alt:""}),Object(l.jsx)(d,{Icon:b.a,title:"Home"}),Object(l.jsx)(d,{Icon:p.a,title:"Search"}),Object(l.jsx)(d,{Icon:f.a,title:"Your Library"}),Object(l.jsx)("strong",{className:"sidebar_title",children:"PLAYLIST "}),Object(l.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(d,{title:e.name})}))]})},_=(c(73),c(74),c(92));var g=function(e){e.spotify;var t,c=m(),s=Object(r.a)(c,2),n=s[0].user;return s[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header_left",children:[Object(l.jsx)(p.a,{}),Object(l.jsx)("input",{placeholder:"Search for Artists, Songs, and More...",type:"text"})]}),Object(l.jsxs)("div",{className:"header_right",children:[Object(l.jsx)(_.a,{src:null===n||void 0===n||null===(t=n.images[0])||void 0===t?void 0:t.url,alt:null===n||void 0===n?void 0:n.diaplay_name}),Object(l.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})},S=c(42),T=c.n(S),N=c(43),E=c.n(N),k=c(44),I=c.n(k);c(75);var w=function(e){var t=e.track,c=e.playSong;return console.log(t),Object(l.jsxs)("div",{className:"songRow",onClick:function(){return c(t.id)},children:[Object(l.jsx)("img",{className:"songRow_Album",src:t.album.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"songRow_info",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", "),"-"," ",t.album.name]})]})]})};var P=function(e){var t=e.spotify,c=m(),s=Object(r.a)(c,2),n=s[0].discover_weekly,i=s[1],a=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))};return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(g,{spotify:t}),Object(l.jsxs)("div",{className:"body_info",children:[Object(l.jsx)("img",{src:null===n||void 0===n?void 0:n.images[0].url,alt:""}),Object(l.jsxs)("div",{className:"body_infotext",children:[Object(l.jsx)("strong",{children:"PLAYLIST"}),Object(l.jsx)("h2",{children:"Discover Weekly"}),Object(l.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]})]}),Object(l.jsxs)("div",{className:"body_song",children:[Object(l.jsxs)("div",{className:"body_icon",children:[Object(l.jsx)(T.a,{className:"body_shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:".concat(e)}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){i({type:"SET_ITEM",item:e.item}),i({type:"SET_PLAYING",playing:!0})}))}))}}),Object(l.jsx)(E.a,{fontSize:"large"}),Object(l.jsx)(I.a,{})]}),null===n||void 0===n?void 0:n.tracks.items.map((function(e){return Object(l.jsx)(w,{playSong:a,track:e.track})}))]})]})},L=(c(76),c(47)),A=c.n(L),Y=c(46),R=c.n(Y),C=c(48),M=c.n(C),D=c(45),G=c.n(D),U=c(49),W=c.n(U),K=c(90),V=c(91),q=c(50),z=c.n(q),F=c(51),H=c.n(F);var B=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer_left",children:[Object(l.jsx)("img",{className:"footer_albumLogo",src:"https://image.shutterstock.com/image-illustration/3d-illustration-musical-notes-signs-260nw-761313844.jpg",alt:""}),Object(l.jsxs)("div",{className:"footer_songInfo",children:[Object(l.jsx)("h4",{children:"Yeah!"}),Object(l.jsx)("p",{children:"Bushes"})]})]}),Object(l.jsxs)("div",{className:"footer_center",children:[Object(l.jsx)(G.a,{className:"footer_green"}),Object(l.jsx)(R.a,{className:"footer_icon"}),Object(l.jsx)(A.a,{fontSize:"large",className:"footer_icon"}),Object(l.jsx)(M.a,{className:"footer_icon"}),Object(l.jsx)(W.a,{className:"footer_green"})]}),Object(l.jsx)("div",{className:"footer_right",children:Object(l.jsxs)(K.a,{container:!0,spacing:2,children:[Object(l.jsx)(K.a,{item:!0,children:Object(l.jsx)(z.a,{})}),Object(l.jsx)(K.a,{item:!0,children:Object(l.jsx)(H.a,{})}),Object(l.jsx)(K.a,{item:!0,xs:!0,children:Object(l.jsx)(V.a,{})})]})})]})};var J=function(e){var t=e.spotify;return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"player__body",children:[Object(l.jsx)(v,{}),Object(l.jsx)(P,{spotify:t})]}),Object(l.jsx)(B,{spotify:t})]})},Z=c(52),Q=new(c.n(Z).a);var X=function(){var e=m(),t=Object(r.a)(e,2),c=t[0],n=(c.user,c.token),i=t[1];return Object(s.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(Q.setAccessToken(t),i({type:"SET_TOKEN",token:t}),Q.getMe().then((function(e){i({type:"SET_USER",user:e})})),Q.getUserPlaylists().then((function(e){i({type:"SET_PLAYLISTS",playlists:e})})),Q.getPlaylist("37i9dQZEVXcTsUjGugZgPx").then((function(e){i({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),Q.getMyTopArtists().then((function(e){return i({type:"SET_TOP_ARTISTS",top_artists:e})})),i({type:"SET_SPOTIFY",spotify:Q}))}),[n,i]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"app",children:n?Object(l.jsx)(J,{spotify:Q}):Object(l.jsx)(j,{})})})},$=c(4),ee=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object($.a)(Object($.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object($.a)(Object($.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object($.a)(Object($.a)({},e),{},{item:t.item});case"SET_DISCOVER_WEEKLY":return Object($.a)(Object($.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_TOP_ARTISTS":return Object($.a)(Object($.a)({},e),{},{top_artists:t.top_artists});case"SET_TOKEN":return Object($.a)(Object($.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object($.a)(Object($.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object($.a)(Object($.a)({},e),{},{playlists:t.playlists});default:return e}};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(y,{initialState:{user:null,playLists:[],playing:!1,item:null,spotify:null,top_artists:null,discover_weekly:null},reducer:ee,children:Object(l.jsx)(X,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.545d6df4.chunk.js.map