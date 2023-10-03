import{a as M}from"./chunk-5TFMJMJP.js";import{a as C,b as y,e as E,f as z,g as P,j as b,k as T,n as L,o as O}from"./chunk-NLHLSXJB.js";import{a as f,b as w,e as h}from"./chunk-CW4BMCRM.js";var H=h(C());var c=h(C());var e=h(C());var $=50,j=500,D=r=>{let a=(0,e.useRef)([0,0]),i=(0,e.useRef)([0,0]),n=(0,e.useRef)([0,0]),d=(0,e.useRef)(null),t=(0,e.useMemo)(()=>E(r.containerSize,"desktop"),[r.containerSize]),[l,s]=(0,e.useState)(null),[g,m]=P({rotateX:0,rotateY:0,backgroundColor:l?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:l?1.3:1,borderRadius:l?"1%":"50%",config:w(f({},z.wobbly),{clamp:!0})},[l]),p=(0,e.useCallback)(u=>{i.current=[u.pageX,u.pageY];let[v,S]=y(u.pageX,u.pageY,n.current[0],n.current[1],45);m.start({rotateX:v,rotateY:S})},[]),x=(0,e.useCallback)(()=>{let u=window.scrollX-a.current[0],v=window.scrollY-a.current[1];i.current=[u+i.current[0],v+i.current[1]];let[S,k]=y(i.current[0],i.current[1],n.current[0],n.current[1],45);a.current=[window.scrollX,window.scrollY],m.start({rotateX:S,rotateY:k})},[]);(0,e.useEffect)(()=>(setTimeout(()=>{if(d.current){let{left:S,top:k}=d.current.getBoundingClientRect();n.current=[S+window.scrollX+t.containerSize/2,k+window.scrollY+t.containerSize/2],a.current=[window.scrollX,window.scrollY]}i.current=[n.current[0],n.current[1]];let[u,v]=y(i.current[0],i.current[1],n.current[0],n.current[1],45);m.start({rotateX:u,rotateY:v})},300),window.addEventListener("mousemove",p,{passive:!0}),window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("scroll",x)}),[]);let I=(0,e.useCallback)(()=>{r.onMouseOverHandler&&r.onMouseOverHandler(),s(!0)},[]),Z=(0,e.useCallback)(()=>{r.onMouseOutHandler&&r.onMouseOutHandler(),s(!1)},[]),V=(0,e.useCallback)(u=>{r.onClickHandler(u)},[]);return e.default.createElement(b.div,{ref:d,className:"relative flex justify-center items-center",style:{width:t.containerSize,height:t.containerSize,scale:r.springRef.bassGain.to([0,1],[.9,1])}},e.default.createElement(b.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${t.originalSize}px`,height:`${t.originalSize}px`,transformStyle:"preserve-3d",perspective:j,rotateX:g.rotateX,rotateY:g.rotateY,translate3d:["0%","0%",$],scale:g.scale}},e.default.createElement(b.div,{onMouseOver:I,onMouseOut:Z,onClick:V,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm\r
          `,style:{translateZ:r.springRef.trebleGain.to([0,1],[t.springGainInterpolationSize.start,t.springGainInterpolationSize.end]),scale:.85,fontSize:t.textSize,backgroundColor:g.backgroundColor,outlineWidth:r.springRef.bassGain.to([0,1],[t.outLineRingWidth/2,t.outLineRingWidth*1.2]),outlineColor:r.springRef.bassGain.to([0,1],[M.neonTheme.outlineInitial,M.neonTheme.outlineFinal]),borderRadius:g.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},r.children),e.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${t.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),e.default.createElement("div",{style:{transform:`translateZ(-${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${t.translateZSize}px)`}})))},Y=D;var N=["sound","spectrum","analyzer","boxes","mouse","parallax"];var o=h(C());var A=r=>{let a=(0,o.useRef)(null),i=(0,o.useRef)({left:0,top:0}),n=(0,o.useMemo)(()=>E(r.containerSize,"mobile"),[r.containerSize]),d=(0,o.useRef)(!1),[t,l]=P({backgroundColor:"rgba(250, 204, 21,0.1)",scale:1,borderRadius:"50%",config:w(f({},z.wobbly),{clamp:!0})},[]),s=(0,o.useCallback)(()=>{if(Math.abs(window.scrollY+window.innerHeight/2-i.current.top)<n.scrollMarginSize){if(d.current)return;window.navigator.vibrate&&window.navigator.vibrate([40]),l.start({backgroundColor:"rgba(250, 204, 21,0.9)",scale:1.3,borderRadius:"1%"}),d.current=!0;return}l.start({backgroundColor:"rgba(250, 204, 21,0.1)",scale:1,borderRadius:"50%"}),d.current=!1},[n]);(0,o.useEffect)(()=>(setTimeout(()=>{var m;if(a.current){let{left:p,top:x}=a.current.getBoundingClientRect();i.current={left:p+window.scrollX+n.containerSize/2,top:x+window.scrollY+n.containerSize/2},s()}r.active&&((m=a.current)==null||m.scrollIntoView({block:"center"}))},300),window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}),[]);let g=(0,o.useCallback)(m=>{var p;if(!d.current){(p=a.current)==null||p.scrollIntoView({block:"center"});return}r.onClickHandler(m)},[]);return o.default.createElement(b.div,{ref:a,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:n.containerSize,minHeight:n.containerSize,scale:r.springRef.bassGain.to([0,1],[.9,1]),willChange:"transform"}},o.default.createElement(b.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:n.cubeSize,height:n.cubeSize,scale:t.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},o.default.createElement(b.div,{onClick:g,className:`flex justify-center\r
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
          h-full`,style:{fontSize:n.textSize,backgroundColor:t.backgroundColor,scale:r.springRef.trebleGain.to([0,1],[n.springTrebleScaleSize.start,n.springTrebleScaleSize.end]),outlineWidth:r.springRef.bassGain.to([0,1],[n.outLineRingWidth/2,n.outLineRingWidth*1.2]),outlineColor:r.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:t.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)",willChange:"transform, outline-width, outline-color, border-radius"}},r.children)))},W=A;var R=280,B=360,X=r=>{let a=(0,c.useRef)(null),{spring:i,isMobileRef:n}=(0,c.useContext)(T),d=L(),t=(0,c.useCallback)(l=>{d(`/cards/${l}`)},[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{ref:a,style:f({},n.current&&{paddingTop:window.innerHeight/2-R*.9,paddingBottom:window.innerHeight/2-R*.9}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},N.map((l,s)=>n.current?c.default.createElement(W,{key:s,active:r.index===s,springRef:i,containerSize:R,onClickHandler:t.bind(null,s)},l):c.default.createElement(Y,{key:s,springRef:i,containerSize:B,onClickHandler:t.bind(null,s)},l))))};X.defaultProps={index:0};var G=X;var _=()=>{let r=O();return H.default.createElement("div",{className:"flex justify-center items-center flex-1"},H.default.createElement(G,{index:Number(r.id)}))},ye=_;export{ye as default};
