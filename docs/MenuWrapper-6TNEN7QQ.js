import{a as h,b as C,c as E,d as y,e as z,h as f,i as H,l as T,m as L}from"./chunk-HCOZCCMD.js";import{a as g,b as x,e as w}from"./chunk-CW4BMCRM.js";var k=w(h());var c=w(h());var r=w(h());var A=0,V=600,$=n=>{let l=(0,r.useRef)([0,0]),o=(0,r.useRef)([0,0]),e=(0,r.useRef)([0,0]),d=(0,r.useRef)(null),t=(0,r.useMemo)(()=>E(n.containerSize,"desktop"),[n.containerSize]),[a,s]=(0,r.useState)(null),[p,u]=z({rotateX:0,rotateY:0,backgroundColor:a?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:a?1.3:1,borderRadius:a?"1%":"50%",config:x(g({},y.wobbly),{clamp:!0})},[a]),b=(0,r.useCallback)(m=>{o.current=[m.pageX,m.pageY];let[v,S]=C(m.pageX,m.pageY,e.current[0],e.current[1],45);u.start({rotateX:v,rotateY:S})},[]),R=(0,r.useCallback)(()=>{let m=window.scrollX-l.current[0],v=window.scrollY-l.current[1];o.current=[m+o.current[0],v+o.current[1]];let[S,P]=C(o.current[0],o.current[1],e.current[0],e.current[1],45);console.log(o.current,e.current),l.current=[window.scrollX,window.scrollY],u.start({rotateX:S,rotateY:P})},[]);(0,r.useEffect)(()=>(setTimeout(()=>{if(d.current){let{left:S,top:P}=d.current.getBoundingClientRect();e.current=[S+window.scrollX+t.containerSize/2,P+window.scrollY+t.containerSize/2],l.current=[window.scrollX,window.scrollY]}o.current=[e.current[0],e.current[1]],console.log(e.current,window.scrollX,window.scrollY);let[m,v]=C(o.current[0],o.current[1],e.current[0],e.current[1],45);u.start({rotateX:m,rotateY:v})},350),window.addEventListener("mousemove",b,{passive:!0}),window.addEventListener("scroll",R,{passive:!0}),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("scroll",R)}),[]);let I=(0,r.useCallback)(()=>{n.onMouseOverHandler&&n.onMouseOverHandler(),s(!0)},[]),Z=(0,r.useCallback)(()=>{n.onMouseOutHandler&&n.onMouseOutHandler(),s(!1)},[]),G=(0,r.useCallback)(m=>{n.onClickHandler(m)},[]);return r.default.createElement("div",{ref:d,className:"relative flex justify-center items-center",style:{width:t.containerSize,height:t.containerSize}},r.default.createElement(f.div,{className:`\r
        relative\r
        [&>div]:absolute \r
        [&>div]:w-full \r
        [&>div]:h-full \r
        [&>div]:opacity-80 \r
        [&>div]:border \r
        [&>div]:border-cyan-600\r
        [&>div]:rounded-md\r
        [&>div]:bg-cyan-900`,style:{width:`${t.originalSize}px`,height:`${t.originalSize}px`,transformStyle:"preserve-3d",perspective:V,rotateX:p.rotateX,rotateY:p.rotateY,translate3d:["0%","0%",A],scale:p.scale}},r.default.createElement(f.div,{onMouseOver:I,onMouseOut:Z,onClick:G,className:`flex justify-center\r
          items-center\r
          text\r
          font-bold\r
          outline\r
          border-none\r
          text-zinc-400\r
          cursor-pointer\r
          select-none\r
          backdrop-blur-sm`,style:{translateZ:n.springRef.trebleGain.to([0,1],[t.springGainInterpolationSize.start,t.springGainInterpolationSize.end]),scale:.85,fontSize:t.textSize,backgroundColor:p.backgroundColor,outlineWidth:n.springRef.bassGain.to([0,1],[t.outLineRingWidth/2,t.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:p.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children),r.default.createElement("div",{className:"border-none",style:{transform:`translateZ(${t.ringContainerDistance}px)`,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}}),r.default.createElement("div",{style:{transform:`translateZ(-${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateY(90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateY(-90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateX(90deg) translateZ(${t.translateZSize}px)`}}),r.default.createElement("div",{style:{transform:`rotateX(-90deg) translateZ(${t.translateZSize}px)`}})))},O=$;var Y=["sound","spectrum","analyzer","boxes","mouse","parallax"];var i=w(h());var j=n=>{let l=(0,i.useRef)(null),o=(0,i.useRef)({left:0,top:0}),e=(0,i.useMemo)(()=>E(n.containerSize,"mobile"),[n.containerSize]),[d,t]=(0,i.useState)(null),a=z({backgroundColor:d?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:d?1.3:1,borderRadius:d?"1%":"50%",config:x(g({},y.wobbly),{clamp:!0})}),s=(0,i.useCallback)(()=>{Math.abs(window.scrollY+window.innerHeight/2-o.current.top)<e.scrollMarginSize?t(!0):t(!1)},[e]);(0,i.useEffect)(()=>(setTimeout(()=>{if(l.current){let{left:u,top:b}=l.current.getBoundingClientRect();o.current={left:u+window.scrollX+e.containerSize/2,top:b+window.scrollY+e.containerSize/2},s()}},300),n.active&&setTimeout(()=>{var u;(u=l.current)==null||u.scrollIntoView({block:"center"})},350),window.addEventListener("scroll",s,{passive:!0}),()=>{window.removeEventListener("scroll",s)}),[]);let p=(0,i.useCallback)(u=>{var b;if(!d){(b=l.current)==null||b.scrollIntoView({block:"center"});return}n.onClickHandler(u)},[d]);return i.default.createElement("div",{ref:l,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:e.containerSize,minHeight:e.containerSize}},i.default.createElement(f.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:e.cubeSize,height:e.cubeSize,scale:a.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},i.default.createElement(f.div,{onClick:p,className:`flex justify-center\r
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
          h-full`,style:{fontSize:e.textSize,backgroundColor:a.backgroundColor,scale:n.springRef.trebleGain.to([0,1],[e.springTrebleScaleSize.start,e.springTrebleScaleSize.end]),outlineWidth:n.springRef.bassGain.to([0,1],[e.outLineRingWidth/2,e.outLineRingWidth*1.2]),outlineColor:n.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:a.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},n.children)))},N=j;var M=280,B=360,X=n=>{let l=(0,c.useRef)(null),{spring:o,isMobileRef:e}=(0,c.useContext)(H),d=T(),t=(0,c.useCallback)(a=>{d(`/cards/${a}`)},[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{ref:l,style:g({},e.current&&{paddingTop:window.innerHeight/2-M*.9,paddingBottom:window.innerHeight/2-M*.9}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},Y.map((a,s)=>e.current?c.default.createElement(N,{key:s,active:n.index===s,springRef:o,containerSize:M,onClickHandler:t.bind(null,s)},a):c.default.createElement(O,{key:s,springRef:o,containerSize:B,onClickHandler:t.bind(null,s)},a))))};X.defaultProps={index:0};var W=X;var D=()=>{let n=L();return k.default.createElement("div",{className:"flex justify-center items-center flex-1"},k.default.createElement(W,{index:Number(n.id)}))},he=D;export{he as default};
