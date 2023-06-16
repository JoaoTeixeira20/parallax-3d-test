import{a as E,c as g,d as S,e as m,g as d}from"./chunk-GIAUUVOT.js";import{a as b,b as v,e as y}from"./chunk-CW4BMCRM.js";var t=y(E());var M=0,Z=600,k=e=>{let r=(0,t.useRef)(null),s=(0,t.useRef)({left:0,top:0}),n=(0,t.useMemo)(()=>({containerSize:e.cubeSize*1.8,originalSize:e.cubeSize,translateZSize:e.cubeSize/2,springGainInterpolationSize:{start:e.cubeSize/2*.8,end:e.cubeSize/2*1.2},textSize:e.cubeSize*.15,ringContainerDistance:e.cubeSize/2*.6,outLineRingWidth:e.cubeSize*.1,scrollMarginSize:e.cubeSize*.9}),[e.cubeSize]),[a,c]=(0,t.useState)(null),u=(0,t.useMemo)(()=>g(e.centerCoords[0],e.centerCoords[1],s.current.left,s.current.top,45),[e.centerCoords]),o=m({rotateX:u[0],rotateY:u[1],backgroundColor:a?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:a?1.3:1,borderRadius:a?"1%":"50%",config:v(b({},S.wobbly),{clamp:!0})});(0,t.useEffect)(()=>{setTimeout(()=>{if(r.current){let{top:i,left:l,width:x,height:C}=r.current.getBoundingClientRect();s.current={left:l+window.scrollX+x/2,top:i+window.scrollY+C/2}}},300),e.active&&e.mobileBehaviour&&setTimeout(()=>{var i;(i=r.current)==null||i.scrollIntoView({block:"center"})},300)},[]);let f=(0,t.useCallback)(()=>{e.onMouseOverHandler&&e.onMouseOverHandler(),!e.mobileBehaviour&&c(!0)},[]),h=(0,t.useCallback)(()=>{e.onMouseOutHandler&&e.onMouseOutHandler(),!e.mobileBehaviour&&c(!1)},[]),z=(0,t.useCallback)(i=>{var l;if(!a&&e.mobileBehaviour){(l=r.current)==null||l.scrollIntoView({block:"center"});return}e.onClickHandler(i)},[a]);return t.default.createElement("div",{ref:r,className:"relative flex justify-center items-center",style:{width:n.containerSize,height:n.containerSize}},t.default.createElement(d.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${n.originalSize}px`,height:`${n.originalSize}px`,transformStyle:"preserve-3d",perspective:Z,rotateX:o.rotateX,rotateY:o.rotateY,translate3d:["0%","0%",M],scale:o.scale}},t.default.createElement(d.div,{onMouseOver:f,onMouseOut:h,onClick:z,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm`,style:{translateZ:e.springRef.trebleGain.to([0,1],[n.springGainInterpolationSize.start,n.springGainInterpolationSize.end]),scale:.85,fontSize:n.textSize,backgroundColor:o.backgroundColor,outlineWidth:e.springRef.bassGain.to([0,1],[n.outLineRingWidth/2,n.outLineRingWidth*1.2]),outlineColor:e.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:o.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},e.children),t.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${n.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),t.default.createElement("div",{style:{transform:`translateZ(-${n.translateZSize}px)`}}),t.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${n.translateZSize}px)`}}),t.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${n.translateZSize}px)`}}),t.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${n.translateZSize}px)`}}),t.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${n.translateZSize}px)`}})))},I=k;export{I as a};
