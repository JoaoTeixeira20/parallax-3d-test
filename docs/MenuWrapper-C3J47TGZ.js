import{a as k}from"./chunk-LC4M3ZOX.js";import{a as v,d as h,e as P,f as C,h as w,i as y,l as z,m as R}from"./chunk-U5BBPB3S.js";import{a as b,b as E,e as g}from"./chunk-YNYC3WAN.js";var x=g(v());var n=g(v());var M=["sound","spectrum","analyzer","boxes","mouse","parallax"];var r=g(v());var I=t=>{let i=(0,r.useRef)(null),d=(0,r.useRef)({left:0,top:0}),e=(0,r.useMemo)(()=>h(t.containerSize,"mobile"),[t.containerSize]),[a,c]=(0,r.useState)(null),m=C({backgroundColor:a?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:a?1.3:1,borderRadius:a?"1%":"50%",config:E(b({},P.wobbly),{clamp:!0})}),u=(0,r.useCallback)(()=>{Math.abs(window.scrollY+window.innerHeight/2-d.current.top)<e.scrollMarginSize?c(!0):c(!1)},[e]);(0,r.useEffect)(()=>(i.current&&(d.current={left:i.current.offsetLeft+e.containerSize/2,top:i.current.offsetTop+e.containerSize/2}),u(),t.active&&setTimeout(()=>{var s;(s=i.current)==null||s.scrollIntoView({block:"center"})},300),window.addEventListener("scroll",u,{passive:!0}),()=>{window.removeEventListener("scroll",u)}),[]);let p=(0,r.useCallback)(s=>{var f;a||(f=i.current)==null||f.scrollIntoView({block:"center"}),t.onClickHandler(s)},[a]);return r.default.createElement("div",{ref:i,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:e.containerSize,minHeight:e.containerSize}},r.default.createElement(w.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:e.cubeSize,height:e.cubeSize,scale:m.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},r.default.createElement(w.div,{onClick:p,className:`flex justify-center\r
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
          h-full`,style:{fontSize:e.textSize,backgroundColor:m.backgroundColor,scale:t.springRef.trebleGain.to([0,1],[e.springTrebleScaleSize.start,e.springTrebleScaleSize.end]),outlineWidth:t.springRef.bassGain.to([0,1],[e.outLineRingWidth/2,e.outLineRingWidth*1.2]),outlineColor:t.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:m.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},t.children)))},H=I;var S=280,O=360,L=t=>{let i=(0,n.useRef)(null),{spring:d,isMobileRef:e}=(0,n.useContext)(y),a=z(),c=(0,n.useRef)([0,0]),[m,u]=(0,n.useState)([window.scrollX+window.innerWidth/2,window.scrollY+window.innerHeight/2]),p=(0,n.useCallback)(o=>{u([o.pageX,o.pageY])},[]),s=(0,n.useCallback)(()=>{let o=window.scrollX-c.current[0],l=window.scrollY-c.current[1];u(([N,W])=>[N+o,W+l]),c.current=[window.scrollX,window.scrollY]},[]);(0,n.useEffect)(()=>(e.current||(window.addEventListener("mousemove",p,{passive:!0}),window.addEventListener("scroll",s,{passive:!0})),()=>{e.current||(window.removeEventListener("mousemove",p),window.removeEventListener("scroll",s))}),[]);let f=(0,n.useCallback)(o=>{a(`/cards/${o}`)},[]);return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{ref:i,style:b({},e.current&&{paddingTop:window.innerHeight/2-S*.9,paddingBottom:window.innerHeight/2-S*.9}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},M.map((o,l)=>e.current?n.default.createElement(H,{key:l,active:t.index===l,springRef:d,containerSize:S,onClickHandler:f.bind(null,l)},o):n.default.createElement(k,{key:l,active:t.index===l,springRef:d,centerCoords:m,containerSize:O,mobileBehaviour:e.current,onClickHandler:f.bind(null,l)},o))))};L.defaultProps={index:0};var T=L;var A=()=>{let t=R();return x.default.createElement("div",{className:"flex justify-center items-center flex-1"},x.default.createElement(T,{index:Number(t.id)}))},oe=A;export{oe as default};
