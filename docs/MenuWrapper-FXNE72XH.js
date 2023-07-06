import{a as M}from"./chunk-5TFMJMJP.js";import{a as C,b as E,e as y,f as z,g as P,j as f,k as T,n as L,o as O}from"./chunk-R6FVPR62.js";import{a as g,b as w,e as h}from"./chunk-CW4BMCRM.js";var H=h(C());var c=h(C());var e=h(C());var $=50,A=500,j=n=>{let a=(0,e.useRef)([0,0]),o=(0,e.useRef)([0,0]),r=(0,e.useRef)([0,0]),d=(0,e.useRef)(null),t=(0,e.useMemo)(()=>y(n.containerSize,"desktop"),[n.containerSize]),[l,s]=(0,e.useState)(null),[b,m]=P({rotateX:0,rotateY:0,backgroundColor:l?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:l?1.3:1,borderRadius:l?"1%":"50%",config:w(g({},z.wobbly),{clamp:!0})},[l]),p=(0,e.useCallback)(u=>{o.current=[u.pageX,u.pageY];let[v,S]=E(u.pageX,u.pageY,r.current[0],r.current[1],45);m.start({rotateX:v,rotateY:S})},[]),x=(0,e.useCallback)(()=>{let u=window.scrollX-a.current[0],v=window.scrollY-a.current[1];o.current=[u+o.current[0],v+o.current[1]];let[S,k]=E(o.current[0],o.current[1],r.current[0],r.current[1],45);a.current=[window.scrollX,window.scrollY],m.start({rotateX:S,rotateY:k})},[]);(0,e.useEffect)(()=>(setTimeout(()=>{if(d.current){let{left:S,top:k}=d.current.getBoundingClientRect();r.current=[S+window.scrollX+t.containerSize/2,k+window.scrollY+t.containerSize/2],a.current=[window.scrollX,window.scrollY]}o.current=[r.current[0],r.current[1]];let[u,v]=E(o.current[0],o.current[1],r.current[0],r.current[1],45);m.start({rotateX:u,rotateY:v})},300),window.addEventListener("mousemove",p,{passive:!0}),window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("scroll",x)}),[]);let Z=(0,e.useCallback)(()=>{n.onMouseOverHandler&&n.onMouseOverHandler(),s(!0)},[]),G=(0,e.useCallback)(()=>{n.onMouseOutHandler&&n.onMouseOutHandler(),s(!1)},[]),V=(0,e.useCallback)(u=>{n.onClickHandler(u)},[]);return e.default.createElement("div",{ref:d,className:"relative flex justify-center items-center",style:{width:t.containerSize,height:t.containerSize}},e.default.createElement(f.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${t.originalSize}px`,height:`${t.originalSize}px`,transformStyle:"preserve-3d",perspective:A,rotateX:b.rotateX,rotateY:b.rotateY,translate3d:["0%","0%",$],scale:b.scale}},e.default.createElement(f.div,{onMouseOver:Z,onMouseOut:G,onClick:V,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm\r
          `,style:{translateZ:n.springRef.trebleGain.to([0,1],[t.springGainInterpolationSize.start,t.springGainInterpolationSize.end]),scale:.85,fontSize:t.textSize,backgroundColor:b.backgroundColor,outlineWidth:n.springRef.bassGain.to([0,1],[t.outLineRingWidth/2,t.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],[M.neonTheme.outlineInitial,M.neonTheme.outlineFinal]),borderRadius:b.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children),e.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${t.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),e.default.createElement("div",{style:{transform:`translateZ(-${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${t.translateZSize}px)`}})))},N=j;var Y=["sound","spectrum","analyzer","boxes","mouse","parallax"];var i=h(C());var B=n=>{let a=(0,i.useRef)(null),o=(0,i.useRef)({left:0,top:0}),r=(0,i.useMemo)(()=>y(n.containerSize,"mobile"),[n.containerSize]),d=(0,i.useRef)(!1),[t,l]=P({backgroundColor:"rgba(250, 204, 21,0.1)",scale:1,borderRadius:"50%",config:w(g({},z.wobbly),{clamp:!0})},[]),s=(0,i.useCallback)(()=>{if(Math.abs(window.scrollY+window.innerHeight/2-o.current.top)<r.scrollMarginSize){if(d.current)return;window.navigator.vibrate&&window.navigator.vibrate([40]),l.start({backgroundColor:"rgba(250, 204, 21,0.9)",scale:1.3,borderRadius:"1%"}),d.current=!0;return}l.start({backgroundColor:"rgba(250, 204, 21,0.1)",scale:1,borderRadius:"50%"}),d.current=!1},[r]);(0,i.useEffect)(()=>(setTimeout(()=>{var m;if(a.current){let{left:p,top:x}=a.current.getBoundingClientRect();o.current={left:p+window.scrollX+r.containerSize/2,top:x+window.scrollY+r.containerSize/2},s()}n.active&&((m=a.current)==null||m.scrollIntoView({block:"center"}))},300),window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}),[]);let b=(0,i.useCallback)(m=>{var p;if(!d.current){(p=a.current)==null||p.scrollIntoView({block:"center"});return}n.onClickHandler(m)},[]);return i.default.createElement("div",{ref:a,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:r.containerSize,minHeight:r.containerSize}},i.default.createElement(f.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:r.cubeSize,height:r.cubeSize,scale:t.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},i.default.createElement(f.div,{onClick:b,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          opacity-80 \r
          border \r
        border-cyan-600\r
          rounded-md\r
        bg-cyan-900\r
          w-full\r
          h-full`,style:{fontSize:r.textSize,backgroundColor:t.backgroundColor,scale:n.springRef.trebleGain.to([0,1],[r.springTrebleScaleSize.start,r.springTrebleScaleSize.end]),outlineWidth:n.springRef.bassGain.to([0,1],[r.outLineRingWidth/2,r.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:t.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children)))},W=B;var R=280,D=360,X=n=>{let a=(0,c.useRef)(null),{spring:o,isMobileRef:r}=(0,c.useContext)(T),d=L(),t=(0,c.useCallback)(l=>{d(`/cards/${l}`)},[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{ref:a,style:g({},r.current&&{paddingTop:window.innerHeight/2-R*.9,paddingBottom:window.innerHeight/2-R*.9}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},Y.map((l,s)=>r.current?c.default.createElement(W,{key:s,active:n.index===s,springRef:o,containerSize:R,onClickHandler:t.bind(null,s)},l):c.default.createElement(N,{key:s,springRef:o,containerSize:D,onClickHandler:t.bind(null,s)},l))))};X.defaultProps={index:0};var I=X;var _=()=>{let n=O();return H.default.createElement("div",{className:"flex justify-center items-center flex-1"},H.default.createElement(I,{index:Number(n.id)}))},Ee=_;export{Ee as default};
