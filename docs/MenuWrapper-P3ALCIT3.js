import{a as k}from"./chunk-3G24KIYA.js";import{a as S,d as P,e as z,g as C,h as v,i as E,l as y,m as R}from"./chunk-IYE6TILI.js";import{a as p,b as h,e as g}from"./chunk-CW4BMCRM.js";var x=g(S());var n=g(S());var M=["sound","spectrum","analyzer","boxes","mouse","parallax"];var t=g(S());var Y=i=>{C({onChange:r=>{m(r.value.scrollY)}});let l=(0,t.useRef)(null),u=(0,t.useRef)({left:0,top:0}),e=(0,t.useMemo)(()=>{let r=i.containerSize*.71;return{containerSize:i.containerSize,cubeSize:r,springTrebleScaleSize:{start:.8,end:1},springGainInterpolationSize:{start:r/2*.8,end:r/2*1.2},textSize:r*.15,ringContainerDistance:r/2*.6,outLineRingWidth:r*.1,scrollMarginSize:i.containerSize/2}},[i.containerSize]),[s,c]=(0,t.useState)(null),d=z({backgroundColor:s?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:s?1.3:1,borderRadius:s?"1%":"50%",config:h(p({},P.wobbly),{clamp:!0})}),m=(0,t.useCallback)(r=>{Math.abs(r+window.innerHeight/2-u.current.top)<e.scrollMarginSize?c(!0):c(!1)},[e]);(0,t.useEffect)(()=>{l.current&&(u.current={left:l.current.offsetLeft+e.containerSize/2,top:l.current.offsetTop+e.containerSize/2}),m(window.scrollY),i.active&&setTimeout(()=>{var r;(r=l.current)==null||r.scrollIntoView({block:"center"})},300)},[]);let f=(0,t.useCallback)(r=>{var b;if(!s){(b=l.current)==null||b.scrollIntoView({block:"center"});return}i.onClickHandler(r)},[s]);return t.default.createElement("div",{ref:l,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:e.containerSize,minHeight:e.containerSize}},t.default.createElement(v.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:e.cubeSize,height:e.cubeSize,scale:d.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},t.default.createElement(v.div,{onClick:f,className:`flex justify-center\r
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
          h-full`,style:{fontSize:e.textSize,backgroundColor:d.backgroundColor,scale:i.springRef.trebleGain.to([0,1],[e.springTrebleScaleSize.start,e.springTrebleScaleSize.end]),outlineWidth:i.springRef.bassGain.to([0,1],[e.outLineRingWidth/2,e.outLineRingWidth*1.2]),outlineColor:i.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:d.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},i.children)))},H=Y;var w=280,T=i=>{let l=(0,n.useRef)(null),{spring:u,isMobileRef:e}=(0,n.useContext)(E),s=y(),c=(0,n.useRef)([0,0]),[d,m]=(0,n.useState)([window.scrollX+window.innerWidth/2,window.scrollY+window.innerHeight/2]),f=(0,n.useCallback)(o=>{m([o.pageX,o.pageY])},[]),r=(0,n.useCallback)(()=>{let o=window.scrollX-c.current[0],a=window.scrollY-c.current[1];m(([W,N])=>[W+o,N+a]),c.current=[window.scrollX,window.scrollY]},[]);(0,n.useEffect)(()=>(e.current||(window.addEventListener("mousemove",f,{passive:!0}),window.addEventListener("scroll",r,{passive:!0})),()=>{e.current||(window.removeEventListener("mousemove",f),window.removeEventListener("scroll",r))}),[]);let b=(0,n.useCallback)(o=>{s(`/cards/${o}`)},[]);return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{ref:l,style:p({},e.current&&{paddingTop:window.innerHeight/2-w,paddingBottom:window.innerHeight/2-w}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},M.map((o,a)=>e.current?n.default.createElement(H,{key:a,active:i.index===a,springRef:u,containerSize:w,onClickHandler:b.bind(null,a)},o):n.default.createElement(k,{key:a,active:i.index===a,springRef:u,centerCoords:d,cubeSize:200,mobileBehaviour:e.current,onClickHandler:b.bind(null,a)},o))))};T.defaultProps={index:0};var L=T;var I=()=>{let i=R();return x.default.createElement("div",{className:"flex justify-center items-center flex-1"},x.default.createElement(L,{index:Number(i.id)}))},te=I;export{te as default};
