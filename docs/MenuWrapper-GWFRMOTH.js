import{a as C,b as E,c as y,d as z,e as P,h as f,i as H,l as T,m as L}from"./chunk-CYFZQTXH.js";import{a as p,b as w,e as h}from"./chunk-CW4BMCRM.js";var R=h(C());var c=h(C());var e=h(C());var V=50,$=500,A=t=>{let a=(0,e.useRef)([0,0]),o=(0,e.useRef)([0,0]),r=(0,e.useRef)([0,0]),d=(0,e.useRef)(null),n=(0,e.useMemo)(()=>y(t.containerSize,"desktop"),[t.containerSize]),[l,s]=(0,e.useState)(null),[b,m]=P({rotateX:0,rotateY:0,backgroundColor:l?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:l?1.3:1,borderRadius:l?"1%":"50%",config:w(p({},z.wobbly),{clamp:!0})},[l]),g=(0,e.useCallback)(u=>{o.current=[u.pageX,u.pageY];let[v,S]=E(u.pageX,u.pageY,r.current[0],r.current[1],45);m.start({rotateX:v,rotateY:S})},[]),x=(0,e.useCallback)(()=>{let u=window.scrollX-a.current[0],v=window.scrollY-a.current[1];o.current=[u+o.current[0],v+o.current[1]];let[S,k]=E(o.current[0],o.current[1],r.current[0],r.current[1],45);a.current=[window.scrollX,window.scrollY],m.start({rotateX:S,rotateY:k})},[]);(0,e.useEffect)(()=>(setTimeout(()=>{if(d.current){let{left:S,top:k}=d.current.getBoundingClientRect();r.current=[S+window.scrollX+n.containerSize/2,k+window.scrollY+n.containerSize/2],a.current=[window.scrollX,window.scrollY]}o.current=[r.current[0],r.current[1]];let[u,v]=E(o.current[0],o.current[1],r.current[0],r.current[1],45);m.start({rotateX:u,rotateY:v})},300),window.addEventListener("mousemove",g,{passive:!0}),window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("scroll",x)}),[]);let I=(0,e.useCallback)(()=>{t.onMouseOverHandler&&t.onMouseOverHandler(),s(!0)},[]),Z=(0,e.useCallback)(()=>{t.onMouseOutHandler&&t.onMouseOutHandler(),s(!1)},[]),G=(0,e.useCallback)(u=>{t.onClickHandler(u)},[]);return e.default.createElement("div",{ref:d,className:"relative flex justify-center items-center",style:{width:n.containerSize,height:n.containerSize}},e.default.createElement(f.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${n.originalSize}px`,height:`${n.originalSize}px`,transformStyle:"preserve-3d",perspective:$,rotateX:b.rotateX,rotateY:b.rotateY,translate3d:["0%","0%",V],scale:b.scale}},e.default.createElement(f.div,{onMouseOver:I,onMouseOut:Z,onClick:G,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm`,style:{translateZ:t.springRef.trebleGain.to([0,1],[n.springGainInterpolationSize.start,n.springGainInterpolationSize.end]),scale:.85,fontSize:n.textSize,backgroundColor:b.backgroundColor,outlineWidth:t.springRef.bassGain.to([0,1],[n.outLineRingWidth/2,n.outLineRingWidth*1.2]),outlineColor:t.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:b.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},t.children),e.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${n.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),e.default.createElement("div",{style:{transform:`translateZ(-${n.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${n.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${n.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${n.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${n.translateZSize}px)`}})))},O=A;var N=["sound","spectrum","analyzer","boxes","mouse","parallax"];var i=h(C());var j=t=>{let a=(0,i.useRef)(null),o=(0,i.useRef)({left:0,top:0}),r=(0,i.useMemo)(()=>y(t.containerSize,"mobile"),[t.containerSize]),d=(0,i.useRef)(!1),[n,l]=P({backgroundColor:"rgba(250, 204, 21,0.1)",scale:1,borderRadius:"50%",config:w(p({},z.wobbly),{clamp:!0})},[]),s=(0,i.useCallback)(()=>{if(Math.abs(window.scrollY+window.innerHeight/2-o.current.top)<r.scrollMarginSize){if(d.current)return;window.navigator.vibrate&&window.navigator.vibrate([40]),l.start({backgroundColor:"rgba(250, 204, 21,0.9)",scale:1.3,borderRadius:"1%"}),d.current=!0;return}l.start({backgroundColor:"rgba(250, 204, 21,0.1)",scale:1,borderRadius:"50%"}),d.current=!1},[r]);(0,i.useEffect)(()=>(setTimeout(()=>{var m;if(a.current){let{left:g,top:x}=a.current.getBoundingClientRect();o.current={left:g+window.scrollX+r.containerSize/2,top:x+window.scrollY+r.containerSize/2},s()}t.active&&((m=a.current)==null||m.scrollIntoView({block:"center"}))},300),window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}),[]);let b=(0,i.useCallback)(m=>{var g;if(!d.current){(g=a.current)==null||g.scrollIntoView({block:"center"});return}t.onClickHandler(m)},[]);return i.default.createElement("div",{ref:a,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:r.containerSize,minHeight:r.containerSize}},i.default.createElement(f.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:r.cubeSize,height:r.cubeSize,scale:n.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},i.default.createElement(f.div,{onClick:b,className:`flex justify-center\r
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
          h-full`,style:{fontSize:r.textSize,backgroundColor:n.backgroundColor,scale:t.springRef.trebleGain.to([0,1],[r.springTrebleScaleSize.start,r.springTrebleScaleSize.end]),outlineWidth:t.springRef.bassGain.to([0,1],[r.outLineRingWidth/2,r.outLineRingWidth*1.2]),outlineColor:t.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:n.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},t.children)))},Y=j;var M=280,B=360,W=t=>{let a=(0,c.useRef)(null),{spring:o,isMobileRef:r}=(0,c.useContext)(H),d=T(),n=(0,c.useCallback)(l=>{d(`/cards/${l}`)},[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{ref:a,style:p({},r.current&&{paddingTop:window.innerHeight/2-M*.9,paddingBottom:window.innerHeight/2-M*.9}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},N.map((l,s)=>r.current?c.default.createElement(Y,{key:s,active:t.index===s,springRef:o,containerSize:M,onClickHandler:n.bind(null,s)},l):c.default.createElement(O,{key:s,springRef:o,containerSize:B,onClickHandler:n.bind(null,s)},l))))};W.defaultProps={index:0};var X=W;var D=()=>{let t=L();return R.default.createElement("div",{className:"flex justify-center items-center flex-1"},R.default.createElement(X,{index:Number(t.id)}))},he=D;export{he as default};
