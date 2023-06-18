import{a as p,c as g,d as v,e as S,h as s}from"./chunk-IYE6TILI.js";import{a as u,b,e as E}from"./chunk-CW4BMCRM.js";var e=E(p());var M=0,Z=600,P=t=>{let r=(0,e.useRef)(null),[a,m]=(0,e.useState)({left:0,top:0}),n=(0,e.useMemo)(()=>({containerSize:t.cubeSize*1.8,originalSize:t.cubeSize,translateZSize:t.cubeSize/2,springGainInterpolationSize:{start:t.cubeSize/2*.8,end:t.cubeSize/2*1.2},textSize:t.cubeSize*.15,ringContainerDistance:t.cubeSize/2*.6,outLineRingWidth:t.cubeSize*.1,scrollMarginSize:t.cubeSize*.9}),[t.cubeSize]),[o,d]=(0,e.useState)(null),c=(0,e.useMemo)(()=>g(t.centerCoords[0],t.centerCoords[1],a.left,a.top,45),[t.centerCoords,a]),i=S({rotateX:c[0],rotateY:c[1],backgroundColor:o?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:o?1.3:1,borderRadius:o?"1%":"50%",config:b(u({},v.wobbly),{clamp:!0})});(0,e.useEffect)(()=>{setTimeout(()=>{if(r.current){let{top:l,left:h,width:C,height:y}=r.current.getBoundingClientRect();m({left:h+window.scrollX+C/2,top:l+window.scrollY+y/2})}},300)},[]);let f=(0,e.useCallback)(()=>{t.onMouseOverHandler&&t.onMouseOverHandler(),d(!0)},[]),z=(0,e.useCallback)(()=>{t.onMouseOutHandler&&t.onMouseOutHandler(),d(!1)},[]),x=(0,e.useCallback)(l=>{t.onClickHandler(l)},[]);return e.default.createElement("div",{ref:r,className:"relative flex justify-center items-center",style:{width:n.containerSize,height:n.containerSize}},e.default.createElement(s.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${n.originalSize}px`,height:`${n.originalSize}px`,transformStyle:"preserve-3d",perspective:Z,rotateX:i.rotateX,rotateY:i.rotateY,translate3d:["0%","0%",M],scale:i.scale}},e.default.createElement(s.div,{onMouseOver:f,onMouseOut:z,onClick:x,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm`,style:{translateZ:t.springRef.trebleGain.to([0,1],[n.springGainInterpolationSize.start,n.springGainInterpolationSize.end]),scale:.85,fontSize:n.textSize,backgroundColor:i.backgroundColor,outlineWidth:t.springRef.bassGain.to([0,1],[n.outLineRingWidth/2,n.outLineRingWidth*1.2]),outlineColor:t.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:i.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},t.children),e.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${n.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),e.default.createElement("div",{style:{transform:`translateZ(-${n.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${n.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${n.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${n.translateZSize}px)`}}),e.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${n.translateZSize}px)`}})))},$=P;export{$ as a};
