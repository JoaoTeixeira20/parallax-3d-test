import{a as s,f as p,g as _,h as a,i as c,j as u,k as f,n as l,o as x,p as b}from"./chunk-HCOZCCMD.js";import{d as N,e as n}from"./chunk-CW4BMCRM.js";var E=N(d=>{"use strict";var y=_();d.createRoot=y.createRoot,d.hydrateRoot=y.hydrateRoot;var j});var i=n(s());var t=n(s());var P=o=>{let{spring:r}=(0,t.useContext)(c);return t.default.createElement(a.main,{className:"relative min-h-screen w-full flex justify-center",style:{backgroundColor:r.trebleGain.to([0,1],["rgb(100 116 139)","rgb(30 41 59)"])}},t.default.createElement("div",{className:"relative flex flex-col justify-start items-center w-full"},t.default.createElement("div",{className:"relative text-center p-3 h-14 w-full"}),t.default.createElement("div",{className:"relative container h-full"},o.children),t.default.createElement("div",{style:{background:"rgba(255, 255, 255, 0.16)",borderRadius:"2px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(4.1px)",WebkitBackdropFilter:"blur(5px)",borderBottom:"0.1px solid rgba(255, 255, 255, 0.4)"},className:"fixed text-center p-3 text-2xl font-bold top-0 z-10 h-14 bg-gradient-to-t from-cyan-900 to-transparent w-full text-cyan-900"},"im the header"),t.default.createElement("div",{className:"relative text-center p-3 h-14 w-full"}),t.default.createElement("div",{style:{background:"rgba(255, 255, 255, 0.16)",borderRadius:"2px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(4.1px)",WebkitBackdropFilter:"blur(5px)",borderTop:"0.1px solid rgba(255, 255, 255, 0.4)"},className:"fixed text-center p-3 text-2xl font-bold h-14 bg-cyan-900 w-full text-cyan-900 bottom-0"},"im the footer")))},v=P;var e=n(s());var g=(0,e.lazy)(()=>import("./MenuWrapper-I6JM6GFQ.js")),T=(0,e.lazy)(()=>import("./CardContentRenderer-KH5S4YIG.js")),R=()=>{let o=f(),r=(0,e.useRef)(null);(0,e.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[o]);let m=p(o,{initial:{gridTemplateRows:"0fr",opacity:0,scale:0,translateY:"0%"},from:{gridTemplateRows:"0fr",opacity:0,scale:0,translateY:"-100%"},enter:{gridTemplateRows:"1fr",opacity:1,scale:1,translateY:"0%"},leave:{gridTemplateRows:"0fr",display:"none",opacity:0,scale:0,translateY:"-100%"},config:{mass:1,tension:130,friction:17}});return e.default.createElement(v,null,m((w,k)=>e.default.createElement(a.div,{ref:r,className:"min-h-full grid",style:w},e.default.createElement(x,{location:k.pathname},e.default.createElement(l,{path:"/",element:e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null,"loading menu...")},e.default.createElement(g,null))}),e.default.createElement(l,{path:"/:id",element:e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null,"loading menu...")},e.default.createElement(g,null))}),e.default.createElement(l,{path:"/cards/:id",element:e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null,"loading card...")},e.default.createElement(T,null))})))))},h=R;var C=n(E()),S=()=>i.default.createElement(u,null,i.default.createElement(b,null,i.default.createElement(h,null))),M=C.default.createRoot(document.getElementById("root")||document.createElement("div"));M.render(i.default.createElement(S,null));
