import{a as R}from"./chunk-72KS67S5.js";import{a as S,d as E,e as z,g as v,h as P,k as C,l as y}from"./chunk-RWMM6DJC.js";import{a as p,b as h,e as g}from"./chunk-YNYC3WAN.js";var x=g(S());var n=g(S());var k=["sound","spectrum","analyzer","boxes","mouse","parallax"];var r=g(S());var N=t=>{let l=(0,r.useRef)(null),d=(0,r.useRef)({left:0,top:0}),e=(0,r.useMemo)(()=>{let i=t.containerSize*.71;return{containerSize:t.containerSize,cubeSize:i,springTrebleScaleSize:{start:.8,end:1},springGainInterpolationSize:{start:i/2*.8,end:i/2*1.2},textSize:i*.15,ringContainerDistance:i/2*.6,outLineRingWidth:i*.1,scrollMarginSize:t.containerSize/2}},[t.containerSize]),[c,s]=(0,r.useState)(null),m=z({backgroundColor:c?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:c?1.3:1,borderRadius:c?"1%":"50%",config:h(p({},E.wobbly),{clamp:!0})}),u=(0,r.useCallback)(()=>{Math.abs(window.scrollY+window.innerHeight/2-d.current.top)<e.scrollMarginSize?s(!0):s(!1)},[e]);(0,r.useEffect)(()=>(l.current&&(d.current={left:l.current.offsetLeft+e.containerSize/2,top:l.current.offsetTop+e.containerSize/2}),u(),t.active&&setTimeout(()=>{var i;(i=l.current)==null||i.scrollIntoView({block:"center"})},300),window.addEventListener("scroll",u,{passive:!0}),()=>{window.removeEventListener("scroll",u)}),[]);let b=(0,r.useCallback)(i=>{var f;if(!c){(f=l.current)==null||f.scrollIntoView({block:"center"});return}t.onClickHandler(i)},[c]);return r.default.createElement("div",{ref:l,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:e.containerSize,minHeight:e.containerSize}},r.default.createElement(v.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:e.cubeSize,height:e.cubeSize,scale:m.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},r.default.createElement(v.div,{onClick:b,className:`flex justify-center\r
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
          h-full`,style:{fontSize:e.textSize,backgroundColor:m.backgroundColor,scale:t.springRef.trebleGain.to([0,1],[e.springTrebleScaleSize.start,e.springTrebleScaleSize.end]),outlineWidth:t.springRef.bassGain.to([0,1],[e.outLineRingWidth/2,e.outLineRingWidth*1.2]),outlineColor:t.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:m.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},t.children)))},M=N;var w=280,H=t=>{let l=(0,n.useRef)(null),{spring:d,isMobileRef:e}=(0,n.useContext)(P),c=C(),s=(0,n.useRef)([0,0]),[m,u]=(0,n.useState)([window.scrollX+window.innerWidth/2,window.scrollY+window.innerHeight/2]),b=(0,n.useCallback)(o=>{u([o.pageX,o.pageY])},[]),i=(0,n.useCallback)(()=>{let o=window.scrollX-s.current[0],a=window.scrollY-s.current[1];u(([T,W])=>[T+o,W+a]),s.current=[window.scrollX,window.scrollY]},[]);(0,n.useEffect)(()=>(e.current||(window.addEventListener("mousemove",b,{passive:!0}),window.addEventListener("scroll",i,{passive:!0})),()=>{e.current||(window.removeEventListener("mousemove",b),window.removeEventListener("scroll",i))}),[]);let f=(0,n.useCallback)(o=>{c(`/cards/${o}`)},[]);return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{ref:l,style:p({},e.current&&{paddingTop:window.innerHeight/2-w,paddingBottom:window.innerHeight/2-w}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},k.map((o,a)=>e.current?n.default.createElement(M,{key:a,active:t.index===a,springRef:d,containerSize:w,onClickHandler:f.bind(null,a)},o):n.default.createElement(R,{key:a,active:t.index===a,springRef:d,centerCoords:m,cubeSize:200,mobileBehaviour:e.current,onClickHandler:f.bind(null,a)},o))))};H.defaultProps={index:0};var L=H;var I=()=>{let t=y();return x.default.createElement("div",{className:"flex justify-center items-center flex-1"},x.default.createElement(L,{index:Number(t.id)}))},ne=I;export{ne as default};
