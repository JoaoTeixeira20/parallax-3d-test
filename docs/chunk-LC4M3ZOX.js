import{a as M,c as g,d as b,e as m,f,h as s}from"./chunk-U5BBPB3S.js";import{a as u,b as v,e as E}from"./chunk-YNYC3WAN.js";var e=E(M());var P=0,Z=600,k=n=>{let i=(0,e.useRef)(null),[a,S]=(0,e.useState)({left:0,top:0}),t=(0,e.useMemo)(()=>b(n.containerSize,"desktop"),[n.containerSize]),[o,d]=(0,e.useState)(null),c=(0,e.useMemo)(()=>g(n.centerCoords[0],n.centerCoords[1],a.left,a.top,45),[n.centerCoords,a]),r=f({rotateX:c[0],rotateY:c[1],backgroundColor:o?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:o?1.3:1,borderRadius:o?"1%":"50%",config:v(u({},m.wobbly),{clamp:!0})});(0,e.useEffect)(()=>{setTimeout(()=>{if(i.current){let{top:l,left:C,width:y,height:z}=i.current.getBoundingClientRect();S({left:C+window.scrollX+y/2,top:l+window.scrollY+z/2})}},300)},[]);let p=(0,e.useCallback)(()=>{n.onMouseOverHandler&&n.onMouseOverHandler(),d(!0)},[]),x=(0,e.useCallback)(()=>{n.onMouseOutHandler&&n.onMouseOutHandler(),d(!1)},[]),h=(0,e.useCallback)(l=>{n.onClickHandler(l)},[]);return e.default.createElement("div",{ref:i,className:"relative flex justify-center items-center",style:{width:t.containerSize,height:t.containerSize}},e.default.createElement(s.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${t.originalSize}px`,height:`${t.originalSize}px`,transformStyle:"preserve-3d",perspective:Z,rotateX:r.rotateX,rotateY:r.rotateY,translate3d:["0%","0%",P],scale:r.scale}},e.default.createElement(s.div,{onMouseOver:p,onMouseOut:x,onClick:h,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm`,style:{translateZ:n.springRef.trebleGain.to([0,1],[t.springGainInterpolationSize.start,t.springGainInterpolationSize.end]),scale:.85,fontSize:t.textSize,backgroundColor:r.backgroundColor,outlineWidth:n.springRef.bassGain.to([0,1],[t.outLineRingWidth/2,t.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:r.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children),e.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${t.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),e.default.createElement("div",{style:{transform:`translateZ(-${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${t.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${t.translateZSize}px)`}})))},T=k;export{T as a};
