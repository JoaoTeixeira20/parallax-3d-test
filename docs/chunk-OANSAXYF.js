import{a as Y,c as g,d as x,e as y,f as C,h as m}from"./chunk-U5BBPB3S.js";import{a as S,b as h,e as X}from"./chunk-YNYC3WAN.js";var e=X(Y());var H=0,Z=600,k=n=>{let c=(0,e.useRef)([window.scrollX,window.scrollY]),o=(0,e.useRef)([window.innerWidth/2,window.innerHeight/2]),a=(0,e.useRef)([0,0]),u=(0,e.useRef)(null),t=(0,e.useMemo)(()=>x(n.containerSize,"desktop"),[n.containerSize]),[d,b]=(0,e.useState)(null),[l,p]=C({rotateX:0,rotateY:0,backgroundColor:d?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:d?1.3:1,borderRadius:d?"1%":"50%",config:h(S({},y.wobbly),{clamp:!0})},[d]),f=(0,e.useCallback)(r=>{o.current=[r.pageX,r.pageY];let[i,s]=g(r.pageX,r.pageY,a.current[0],a.current[1],45);p.start({rotateX:i,rotateY:s})},[]),w=(0,e.useCallback)(()=>{let r=window.scrollX-c.current[0],i=window.scrollY-c.current[1],[s,v]=g(r+o.current[0],i+o.current[1],a.current[0],a.current[1],45);p.start({rotateX:s,rotateY:v}),o.current=[o.current[0]+r,o.current[1]+i],c.current=[window.scrollX,window.scrollY]},[]);(0,e.useEffect)(()=>(setTimeout(()=>{if(u.current){let{top:r,left:i,width:s,height:v}=u.current.getBoundingClientRect();a.current=[i+window.scrollX+s/2,r+window.scrollY+v/2]}},300),window.addEventListener("mousemove",f,{passive:!0}),window.addEventListener("scroll",w,{passive:!0}),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("scroll",w)}),[]);let z=(0,e.useCallback)(()=>{n.onMouseOverHandler&&n.onMouseOverHandler(),b(!0)},[]),E=(0,e.useCallback)(()=>{n.onMouseOutHandler&&n.onMouseOutHandler(),b(!1)},[]),M=(0,e.useCallback)(r=>{n.onClickHandler(r)},[]);return e.default.createElement("div",{ref:u,className:"relative flex justify-center items-center",style:{width:t.containerSize,height:t.containerSize}},e.default.createElement(m.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${t.originalSize}px`,height:`${t.originalSize}px`,transformStyle:"preserve-3d",perspective:Z,rotateX:l.rotateX,rotateY:l.rotateY,translate3d:["0%","0%",H],scale:l.scale}},e.default.createElement(m.div,{onMouseOver:z,onMouseOut:E,onClick:M,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm`,style:{translateZ:n.springRef.trebleGain.to([0,1],[t.springGainInterpolationSize.start,t.springGainInterpolationSize.end]),scale:.85,fontSize:t.textSize,backgroundColor:l.backgroundColor,outlineWidth:n.springRef.bassGain.to([0,1],[t.outLineRingWidth/2,t.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:l.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children),e.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${t.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),e.default.createElement("div",{style:{transform:`translateZ(-${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${t.translateZSize}px)`}})))},T=k;export{T as a};
