import{a as C,b as E,c as y,d as z,e as P,h as f,i as H,l as T,m as L}from"./chunk-HCOZCCMD.js";import{a as p,b as w,e as h}from"./chunk-CW4BMCRM.js";var R=h(C());var c=h(C());var r=h(C());var V=0,$=600,A=n=>{let a=(0,r.useRef)([0,0]),o=(0,r.useRef)([0,0]),e=(0,r.useRef)([0,0]),d=(0,r.useRef)(null),t=(0,r.useMemo)(()=>y(n.containerSize,"desktop"),[n.containerSize]),[l,s]=(0,r.useState)(null),[b,m]=P({rotateX:0,rotateY:0,backgroundColor:l?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:l?1.3:1,borderRadius:l?"1%":"50%",config:w(p({},z.wobbly),{clamp:!0})},[l]),g=(0,r.useCallback)(u=>{o.current=[u.pageX,u.pageY];let[v,S]=E(u.pageX,u.pageY,e.current[0],e.current[1],45);m.start({rotateX:v,rotateY:S})},[]),x=(0,r.useCallback)(()=>{let u=window.scrollX-a.current[0],v=window.scrollY-a.current[1];o.current=[u+o.current[0],v+o.current[1]];let[S,k]=E(o.current[0],o.current[1],e.current[0],e.current[1],45);console.log(o.current,e.current),a.current=[window.scrollX,window.scrollY],m.start({rotateX:S,rotateY:k})},[]);(0,r.useEffect)(()=>(setTimeout(()=>{if(d.current){let{left:S,top:k}=d.current.getBoundingClientRect();e.current=[S+window.scrollX+t.containerSize/2,k+window.scrollY+t.containerSize/2],a.current=[window.scrollX,window.scrollY]}o.current=[e.current[0],e.current[1]],console.log(e.current,window.scrollX,window.scrollY);let[u,v]=E(o.current[0],o.current[1],e.current[0],e.current[1],45);m.start({rotateX:u,rotateY:v})},350),window.addEventListener("mousemove",g,{passive:!0}),window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("scroll",x)}),[]);let I=(0,r.useCallback)(()=>{n.onMouseOverHandler&&n.onMouseOverHandler(),s(!0)},[]),Z=(0,r.useCallback)(()=>{n.onMouseOutHandler&&n.onMouseOutHandler(),s(!1)},[]),G=(0,r.useCallback)(u=>{n.onClickHandler(u)},[]);return r.default.createElement("div",{ref:d,className:"relative flex justify-center items-center",style:{width:t.containerSize,height:t.containerSize}},r.default.createElement(f.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${t.originalSize}px`,height:`${t.originalSize}px`,transformStyle:"preserve-3d",perspective:$,rotateX:b.rotateX,rotateY:b.rotateY,translate3d:["0%","0%",V],scale:b.scale}},r.default.createElement(f.div,{onMouseOver:I,onMouseOut:Z,onClick:G,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm`,style:{translateZ:n.springRef.trebleGain.to([0,1],[t.springGainInterpolationSize.start,t.springGainInterpolationSize.end]),scale:.85,fontSize:t.textSize,backgroundColor:b.backgroundColor,outlineWidth:n.springRef.bassGain.to([0,1],[t.outLineRingWidth/2,t.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:b.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children),r.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${t.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),r.default.createElement("div",{style:{transform:`translateZ(-${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${t.translateZSize}px)`}})))},O=A;var Y=["sound","spectrum","analyzer","boxes","mouse","parallax"];var i=h(C());var j=n=>{let a=(0,i.useRef)(null),o=(0,i.useRef)({left:0,top:0}),e=(0,i.useMemo)(()=>y(n.containerSize,"mobile"),[n.containerSize]),d=(0,i.useRef)(!1),[t,l]=P({backgroundColor:"rgba(250, 204, 21,0.1)",scale:1,borderRadius:"50%",config:w(p({},z.wobbly),{clamp:!0})},[]),s=(0,i.useCallback)(()=>{if(Math.abs(window.scrollY+window.innerHeight/2-o.current.top)<e.scrollMarginSize){if(d.current)return;window.navigator.vibrate&&window.navigator.vibrate([40]),l.start({backgroundColor:"rgba(250, 204, 21,0.9)",scale:1.3,borderRadius:"1%"}),d.current=!0;return}l.start({backgroundColor:"rgba(250, 204, 21,0.1)",scale:1,borderRadius:"50%"}),d.current=!1},[e]);(0,i.useEffect)(()=>(setTimeout(()=>{var m;if(a.current){let{left:g,top:x}=a.current.getBoundingClientRect();o.current={left:g+window.scrollX+e.containerSize/2,top:x+window.scrollY+e.containerSize/2},s()}n.active&&((m=a.current)==null||m.scrollIntoView({block:"center"}))},300),window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}),[]);let b=(0,i.useCallback)(m=>{var g;if(!d.current){(g=a.current)==null||g.scrollIntoView({block:"center"});return}n.onClickHandler(m)},[]);return i.default.createElement("div",{ref:a,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:e.containerSize,minHeight:e.containerSize}},i.default.createElement(f.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:e.cubeSize,height:e.cubeSize,scale:t.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},i.default.createElement(f.div,{onClick:b,className:`flex justify-center\r
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
          h-full`,style:{fontSize:e.textSize,backgroundColor:t.backgroundColor,scale:n.springRef.trebleGain.to([0,1],[e.springTrebleScaleSize.start,e.springTrebleScaleSize.end]),outlineWidth:n.springRef.bassGain.to([0,1],[e.outLineRingWidth/2,e.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:t.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children)))},N=j;var M=280,B=360,X=n=>{let a=(0,c.useRef)(null),{spring:o,isMobileRef:e}=(0,c.useContext)(H),d=T(),t=(0,c.useCallback)(l=>{d(`/cards/${l}`)},[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{ref:a,style:p({},e.current&&{paddingTop:window.innerHeight/2-M*.9,paddingBottom:window.innerHeight/2-M*.9}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},Y.map((l,s)=>e.current?c.default.createElement(N,{key:s,active:n.index===s,springRef:o,containerSize:M,onClickHandler:t.bind(null,s)},l):c.default.createElement(O,{key:s,springRef:o,containerSize:B,onClickHandler:t.bind(null,s)},l))))};X.defaultProps={index:0};var W=X;var D=()=>{let n=L();return R.default.createElement("div",{className:"flex justify-center items-center flex-1"},R.default.createElement(W,{index:Number(n.id)}))},Ce=D;export{Ce as default};
