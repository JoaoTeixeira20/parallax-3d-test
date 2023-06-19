import{a as y}from"./chunk-TUVKK7KI.js";import{a as p,c as v,d as h,e as E,h as b,i as P,l as C,m as w}from"./chunk-HCOZCCMD.js";import{a as d,b as x,e as m}from"./chunk-CW4BMCRM.js";var g=m(p());var t=m(p());var z=["sound","spectrum","analyzer","boxes","mouse","parallax"];var n=m(p());var H=r=>{let o=(0,n.useRef)(null),c=(0,n.useRef)({left:0,top:0}),e=(0,n.useMemo)(()=>v(r.containerSize,"mobile"),[r.containerSize]),[l,s]=(0,n.useState)(null),a=E({backgroundColor:l?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:l?1.3:1,borderRadius:l?"1%":"50%",config:x(d({},h.wobbly),{clamp:!0})}),i=(0,n.useCallback)(()=>{Math.abs(window.scrollY+window.innerHeight/2-c.current.top)<e.scrollMarginSize?s(!0):s(!1)},[e]);(0,n.useEffect)(()=>(o.current&&(c.current={left:o.current.offsetLeft+e.containerSize/2,top:o.current.offsetTop+e.containerSize/2}),i(),r.active&&setTimeout(()=>{var u;(u=o.current)==null||u.scrollIntoView({block:"center"})},300),window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i)}),[]);let T=(0,n.useCallback)(u=>{var S;if(!l){(S=o.current)==null||S.scrollIntoView({block:"center"});return}r.onClickHandler(u)},[l]);return n.default.createElement("div",{ref:o,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:e.containerSize,minHeight:e.containerSize}},n.default.createElement(b.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:e.cubeSize,height:e.cubeSize,scale:a.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},n.default.createElement(b.div,{onClick:T,className:`flex justify-center\r
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
          h-full`,style:{fontSize:e.textSize,backgroundColor:a.backgroundColor,scale:r.springRef.trebleGain.to([0,1],[e.springTrebleScaleSize.start,e.springTrebleScaleSize.end]),outlineWidth:r.springRef.bassGain.to([0,1],[e.outLineRingWidth/2,e.outLineRingWidth*1.2]),outlineColor:r.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:a.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},r.children)))},k=H;var f=280,N=360,R=r=>{let o=(0,t.useRef)(null),{spring:c,isMobileRef:e}=(0,t.useContext)(P),l=C(),s=(0,t.useCallback)(a=>{l(`/cards/${a}`)},[]);return t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{ref:o,style:d({},e.current&&{paddingTop:window.innerHeight/2-f*.9,paddingBottom:window.innerHeight/2-f*.9}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},z.map((a,i)=>e.current?t.default.createElement(k,{key:i,active:r.index===i,springRef:c,containerSize:f,onClickHandler:s.bind(null,i)},a):t.default.createElement(y,{key:i,springRef:c,containerSize:N,onClickHandler:s.bind(null,i)},a))))};R.defaultProps={index:0};var M=R;var L=()=>{let r=w();return g.default.createElement("div",{className:"flex justify-center items-center flex-1"},g.default.createElement(M,{index:Number(r.id)}))},ee=L;export{ee as default};
