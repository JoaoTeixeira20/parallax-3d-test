import{a as Y,b as v,c as w,d as h,e as y,h as g}from"./chunk-HCOZCCMD.js";import{a as S,b as x,e as X}from"./chunk-CW4BMCRM.js";var e=X(Y());var Z=0,k=600,H=r=>{let a=(0,e.useRef)([window.scrollX,window.scrollY]),o=(0,e.useRef)([0,0]),i=(0,e.useRef)([0,0]),s=(0,e.useRef)(null),t=(0,e.useMemo)(()=>w(r.containerSize,"desktop"),[r.containerSize]),[c,m]=(0,e.useState)(null),[l,b]=y({rotateX:0,rotateY:0,backgroundColor:c?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:c?1.3:1,borderRadius:c?"1%":"50%",config:x(S({},h.wobbly),{clamp:!0})},[c]),f=(0,e.useCallback)(n=>{o.current=[n.pageX,n.pageY];let[d,u]=v(n.pageX,n.pageY,i.current[0],i.current[1],45);b.start({rotateX:d,rotateY:u})},[]),p=(0,e.useCallback)(()=>{let n=window.scrollX-a.current[0],d=window.scrollY-a.current[1],[u,M]=v(n+o.current[0],d+o.current[1],i.current[0],i.current[1],45);b.start({rotateX:u,rotateY:M}),o.current=[o.current[0]+n,o.current[1]+d],a.current=[window.scrollX,window.scrollY]},[]);(0,e.useEffect)(()=>(s.current&&(i.current=[s.current.offsetLeft+t.containerSize/2,s.current.offsetTop+t.containerSize/2]),o.current=[i.current[0]+a.current[0],i.current[1]+a.current[1]],window.addEventListener("mousemove",f,{passive:!0}),window.addEventListener("scroll",p,{passive:!0}),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("scroll",p)}),[]);let z=(0,e.useCallback)(()=>{r.onMouseOverHandler&&r.onMouseOverHandler(),m(!0)},[]),C=(0,e.useCallback)(()=>{r.onMouseOutHandler&&r.onMouseOutHandler(),m(!1)},[]),E=(0,e.useCallback)(n=>{r.onClickHandler(n)},[]);return e.default.createElement("div",{ref:s,className:"relative flex justify-center items-center",style:{width:t.containerSize,height:t.containerSize}},e.default.createElement(g.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${t.originalSize}px`,height:`${t.originalSize}px`,transformStyle:"preserve-3d",perspective:k,rotateX:l.rotateX,rotateY:l.rotateY,translate3d:["0%","0%",Z],scale:l.scale}},e.default.createElement(g.div,{onMouseOver:z,onMouseOut:C,onClick:E,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm`,style:{translateZ:r.springRef.trebleGain.to([0,1],[t.springGainInterpolationSize.start,t.springGainInterpolationSize.end]),scale:.85,fontSize:t.textSize,backgroundColor:l.backgroundColor,outlineWidth:r.springRef.bassGain.to([0,1],[t.outLineRingWidth/2,t.outLineRingWidth*1.2]),outlineColor:r.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:l.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},r.children),e.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${t.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),e.default.createElement("div",{style:{transform:`translateZ(-${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${t.translateZSize}px)`}})))},T=H;export{T as a};
