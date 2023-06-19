import{a as m,d as c,e as u}from"./chunk-I62PPYH3.js";import{a as p}from"./chunk-CXAHN6HR.js";import{a as i,e as l}from"./chunk-CW4BMCRM.js";var a=l(p());var e=l(p());var d=["sound","spectrum","analyzer","boxes","mouse","parallax"];var t=280,b=360,f=o=>{let E=(0,e.useRef)(null),{spring:S,isMobileRef:r}=(0,e.useContext)(m),g=r.current?(0,e.lazy)(()=>import("./ParallaxSceneMobile-JCGAN35J.js")):(0,e.lazy)(()=>import("./ParallaxScene-TX534SCP.js")),v=c(),P=(0,e.useCallback)(n=>{v(`/cards/${n}`)},[]);return e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{ref:E,style:i({},r.current&&{paddingTop:window.innerHeight/2-t*.9,paddingBottom:window.innerHeight/2-t*.9}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},d.map((n,s)=>e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null,"loading scene...")},e.default.createElement(g,{key:s,springRef:S,containerSize:r.current?t:b,onClickHandler:P.bind(null,s)},n)))))};f.defaultProps={index:0};var x=f;var w=()=>{let o=u();return a.default.createElement("div",{className:"flex justify-center items-center flex-1"},a.default.createElement(x,{index:Number(o.id)}))},R=w;export{R as default};
