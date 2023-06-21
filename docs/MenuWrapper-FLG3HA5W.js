import{a as C,b as E,c as y,d as z,e as P,h as f,i as H,l as T,m as L}from"./chunk-HCOZCCMD.js";import{a as g,b as w,e as h}from"./chunk-CW4BMCRM.js";var R=h(C());var c=h(C());var r=h(C());var A=0,V=600,$=n=>{let l=(0,r.useRef)([0,0]),o=(0,r.useRef)([0,0]),e=(0,r.useRef)([0,0]),d=(0,r.useRef)(null),t=(0,r.useMemo)(()=>y(n.containerSize,"desktop"),[n.containerSize]),[a,s]=(0,r.useState)(null),[p,m]=P({rotateX:0,rotateY:0,backgroundColor:a?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:a?1.3:1,borderRadius:a?"1%":"50%",config:w(g({},z.wobbly),{clamp:!0})},[a]),b=(0,r.useCallback)(u=>{o.current=[u.pageX,u.pageY];let[v,S]=E(u.pageX,u.pageY,e.current[0],e.current[1],45);m.start({rotateX:v,rotateY:S})},[]),x=(0,r.useCallback)(()=>{let u=window.scrollX-l.current[0],v=window.scrollY-l.current[1];o.current=[u+o.current[0],v+o.current[1]];let[S,M]=E(o.current[0],o.current[1],e.current[0],e.current[1],45);console.log(o.current,e.current),l.current=[window.scrollX,window.scrollY],m.start({rotateX:S,rotateY:M})},[]);(0,r.useEffect)(()=>(setTimeout(()=>{if(d.current){let{left:S,top:M}=d.current.getBoundingClientRect();e.current=[S+window.scrollX+t.containerSize/2,M+window.scrollY+t.containerSize/2],l.current=[window.scrollX,window.scrollY]}o.current=[e.current[0],e.current[1]],console.log(e.current,window.scrollX,window.scrollY);let[u,v]=E(o.current[0],o.current[1],e.current[0],e.current[1],45);m.start({rotateX:u,rotateY:v})},350),window.addEventListener("mousemove",b,{passive:!0}),window.addEventListener("scroll",x,{passive:!0}),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("scroll",x)}),[]);let I=(0,r.useCallback)(()=>{n.onMouseOverHandler&&n.onMouseOverHandler(),s(!0)},[]),Z=(0,r.useCallback)(()=>{n.onMouseOutHandler&&n.onMouseOutHandler(),s(!1)},[]),G=(0,r.useCallback)(u=>{n.onClickHandler(u)},[]);return r.default.createElement("div",{ref:d,className:"relative flex justify-center items-center",style:{width:t.containerSize,height:t.containerSize}},r.default.createElement(f.div,{className:`
        relative
        [&>div]:absolute 
        [&>div]:w-full 
        [&>div]:h-full 
        [&>div]:opacity-80 
        [&>div]:border 
        [&>div]:border-cyan-600
        [&>div]:rounded-md
        [&>div]:bg-cyan-900`,style:{width:`${t.originalSize}px`,height:`${t.originalSize}px`,transformStyle:"preserve-3d",perspective:V,rotateX:p.rotateX,rotateY:p.rotateY,translate3d:["0%","0%",A],scale:p.scale}},r.default.createElement(f.div,{onMouseOver:I,onMouseOut:Z,onClick:G,className:`flex justify-center
          items-center
          text
          font-bold
          outline
          border-none
          text-zinc-400
          cursor-pointer
          select-none
          backdrop-blur-sm`,style:{translateZ:n.springRef.trebleGain.to([0,1],[t.springGainInterpolationSize.start,t.springGainInterpolationSize.end]),scale:.85,fontSize:t.textSize,backgroundColor:p.backgroundColor,outlineWidth:n.springRef.bassGain.to([0,1],[t.outLineRingWidth/2,t.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:p.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children),r.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${t.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),r.default.createElement("div",{style:{transform:`translateZ(-${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${t.translateZSize}px)`}})))},O=$;var Y=["sound","spectrum","analyzer","boxes","mouse","parallax"];var i=h(C());var j=n=>{let l=(0,i.useRef)(null),o=(0,i.useRef)({left:0,top:0}),e=(0,i.useMemo)(()=>y(n.containerSize,"mobile"),[n.containerSize]),[d,t]=(0,i.useState)(null),a=P({backgroundColor:d?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:d?1.3:1,borderRadius:d?"1%":"50%",config:w(g({},z.wobbly),{clamp:!0})}),s=(0,i.useCallback)(()=>{Math.abs(window.scrollY+window.innerHeight/2-o.current.top)<e.scrollMarginSize?t(!0):t(!1)},[e]);(0,i.useEffect)(()=>(setTimeout(()=>{var m;if(l.current){let{left:b,top:x}=l.current.getBoundingClientRect();o.current={left:b+window.scrollX+e.containerSize/2,top:x+window.scrollY+e.containerSize/2},s()}n.active&&((m=l.current)==null||m.scrollIntoView({block:"center"}))},300),window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}),[]);let p=(0,i.useCallback)(m=>{var b;if(!d){(b=l.current)==null||b.scrollIntoView({block:"center"});return}n.onClickHandler(m)},[d]);return i.default.createElement("div",{ref:l,className:`
        relative
        flex
        justify-center
        items-center
        basis-2/6`,style:{minWidth:e.containerSize,minHeight:e.containerSize}},i.default.createElement(f.div,{className:`flex
       border-solid border-8 
       border-cyan-900 
       outline-1 
       outline 
       outline-cyan-600`,style:{width:e.cubeSize,height:e.cubeSize,scale:a.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},i.default.createElement(f.div,{onClick:p,className:`flex justify-center
          items-center
          text
          font-bold
          outline
          border-none
          text-zinc-400
          cursor-pointer
          select-none
          opacity-80 
          border 
        border-cyan-600
          rounded-md
        bg-cyan-900
          w-full
          h-full`,style:{fontSize:e.textSize,backgroundColor:a.backgroundColor,scale:n.springRef.trebleGain.to([0,1],[e.springTrebleScaleSize.start,e.springTrebleScaleSize.end]),outlineWidth:n.springRef.bassGain.to([0,1],[e.outLineRingWidth/2,e.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:a.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children)))},N=j;var k=280,B=360,X=n=>{let l=(0,c.useRef)(null),{spring:o,isMobileRef:e}=(0,c.useContext)(H),d=T(),t=(0,c.useCallback)(a=>{d(`/cards/${a}`)},[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{ref:l,style:g({},e.current&&{paddingTop:window.innerHeight/2-k*.9,paddingBottom:window.innerHeight/2-k*.9}),className:`
          flex
          flex-row
          flex-wrap
          justify-center
          items-center
          max-w-screen-xl
          `},Y.map((a,s)=>e.current?c.default.createElement(N,{key:s,active:n.index===s,springRef:o,containerSize:k,onClickHandler:t.bind(null,s)},a):c.default.createElement(O,{key:s,springRef:o,containerSize:B,onClickHandler:t.bind(null,s)},a))))};X.defaultProps={index:0};var W=X;var D=()=>{let n=L();return R.default.createElement("div",{className:"flex justify-center items-center flex-1"},R.default.createElement(W,{index:Number(n.id)}))},he=D;export{he as default};
