import{a as h,d as f,e as m,f as S,i as c}from"./chunk-CXAHN6HR.js";import{a as b,b as g,e as v}from"./chunk-CW4BMCRM.js";var e=v(h());var x=t=>{let r=(0,e.useRef)(null),s=(0,e.useRef)({left:0,top:0}),n=(0,e.useMemo)(()=>f(t.containerSize,"mobile"),[t.containerSize]),[i,u]=(0,e.useState)(null),l=S({backgroundColor:i?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:i?1.3:1,borderRadius:i?"1%":"50%",config:g(b({},m.wobbly),{clamp:!0})}),a=(0,e.useCallback)(()=>{Math.abs(window.scrollY+window.innerHeight/2-s.current.top)<n.scrollMarginSize?u(!0):u(!1)},[n]);(0,e.useEffect)(()=>(r.current&&(s.current={left:r.current.offsetLeft+n.containerSize/2,top:r.current.offsetTop+n.containerSize/2}),a(),t.active&&setTimeout(()=>{var o;(o=r.current)==null||o.scrollIntoView({block:"center"})},300),window.addEventListener("scroll",a,{passive:!0}),()=>{window.removeEventListener("scroll",a)}),[]);let p=(0,e.useCallback)(o=>{var d;if(!i){(d=r.current)==null||d.scrollIntoView({block:"center"});return}t.onClickHandler(o)},[i]);return e.default.createElement("div",{ref:r,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:n.containerSize,minHeight:n.containerSize}},e.default.createElement(c.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:n.cubeSize,height:n.cubeSize,scale:l.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},e.default.createElement(c.div,{onClick:p,className:`flex justify-center\r
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
          h-full`,style:{fontSize:n.textSize,backgroundColor:l.backgroundColor,scale:t.springRef.trebleGain.to([0,1],[n.springTrebleScaleSize.start,n.springTrebleScaleSize.end]),outlineWidth:t.springRef.bassGain.to([0,1],[n.outLineRingWidth/2,n.outLineRingWidth*1.2]),outlineColor:t.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:l.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},t.children)))},R=x;export{R as default};
