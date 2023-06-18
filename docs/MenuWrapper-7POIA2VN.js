import{a as k}from"./chunk-5DNS6LNP.js";import{a as S,d as P,e as z,g as C,h as v,i as E,l as y,m as R}from"./chunk-XLKZFTF3.js";import{a as f,b as h,e as g}from"./chunk-YNYC3WAN.js";var x=g(S());var r=g(S());var M=["sound","spectrum","analyzer","boxes","mouse","parallax"];var t=g(S());var Y=i=>{let l=(0,t.useRef)(null),d=(0,t.useRef)({left:0,top:0}),n=(0,t.useMemo)(()=>{let e=i.containerSize*.71;return{containerSize:i.containerSize,cubeSize:e,springTrebleScaleSize:{start:.8,end:1},springGainInterpolationSize:{start:e/2*.8,end:e/2*1.2},textSize:e*.15,ringContainerDistance:e/2*.6,outLineRingWidth:e*.1,scrollMarginSize:i.containerSize/2}},[i.containerSize]),[s,u]=(0,t.useState)(null),m=z({backgroundColor:s?"rgba(250, 204, 21,0.9)":"rgba(250, 204, 21,0.1)",scale:s?1.3:1,borderRadius:s?"1%":"50%",config:h(f({},P.wobbly),{clamp:!0})});C({onChange:e=>{b(e.value.scrollY)},onStart:(e,c)=>{console.log(e),console.log(c)},immediate:!0});let b=(0,t.useCallback)(e=>{Math.abs(e+window.innerHeight/2-d.current.top)<n.scrollMarginSize?u(!0):u(!1)},[n]);(0,t.useEffect)(()=>{l.current&&(d.current={left:l.current.offsetLeft+n.containerSize/2,top:l.current.offsetTop+n.containerSize/2}),b(window.scrollY),i.active&&setTimeout(()=>{var e;(e=l.current)==null||e.scrollIntoView({block:"center"})},300)},[]);let p=(0,t.useCallback)(e=>{var c;if(!s){(c=l.current)==null||c.scrollIntoView({block:"center"});return}i.onClickHandler(e)},[s]);return t.default.createElement("div",{ref:l,className:`\r
        relative\r
        flex\r
        justify-center\r
        items-center\r
        basis-2/6`,style:{minWidth:n.containerSize,minHeight:n.containerSize}},t.default.createElement(v.div,{className:`flex\r
       border-solid border-8 \r
       border-cyan-900 \r
       outline-1 \r
       outline \r
       outline-cyan-600`,style:{width:n.cubeSize,height:n.cubeSize,scale:m.scale,background:"radial-gradient(circle, rgb(165 243 252), rgb(22 78 99))"}},t.default.createElement(v.div,{onClick:p,className:`flex justify-center\r
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
          h-full`,style:{fontSize:n.textSize,backgroundColor:m.backgroundColor,scale:i.springRef.trebleGain.to([0,1],[n.springTrebleScaleSize.start,n.springTrebleScaleSize.end]),outlineWidth:i.springRef.bassGain.to([0,1],[n.outLineRingWidth/2,n.outLineRingWidth*1.2]),outlineColor:i.springRef.bassGain.to([0,1],["rgb(165 243 252)","rgb(22 78 99)"]),borderRadius:m.borderRadius,textShadow:"-1px -1px 0 rgb(23,23,23),  1px -1px 0 rgb(23,23,23),-1px 1px 0 rgb(23,23,23),1px 1px 0 rgb(23,23,23)"}},i.children)))},H=Y;var w=280,T=i=>{let l=(0,r.useRef)(null),{spring:d,isMobileRef:n}=(0,r.useContext)(E),s=y(),u=(0,r.useRef)([0,0]),[m,b]=(0,r.useState)([window.scrollX+window.innerWidth/2,window.scrollY+window.innerHeight/2]),p=(0,r.useCallback)(o=>{b([o.pageX,o.pageY])},[]),e=(0,r.useCallback)(()=>{let o=window.scrollX-u.current[0],a=window.scrollY-u.current[1];b(([W,N])=>[W+o,N+a]),u.current=[window.scrollX,window.scrollY]},[]);(0,r.useEffect)(()=>(n.current||(window.addEventListener("mousemove",p,{passive:!0}),window.addEventListener("scroll",e,{passive:!0})),()=>{n.current||(window.removeEventListener("mousemove",p),window.removeEventListener("scroll",e))}),[]);let c=(0,r.useCallback)(o=>{s(`/cards/${o}`)},[]);return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{ref:l,style:f({},n.current&&{paddingTop:window.innerHeight/2-w,paddingBottom:window.innerHeight/2-w}),className:`\r
          flex\r
          flex-row\r
          flex-wrap\r
          justify-center\r
          items-center\r
          max-w-screen-xl\r
          `},M.map((o,a)=>n.current?r.default.createElement(H,{key:a,active:i.index===a,springRef:d,containerSize:w,onClickHandler:c.bind(null,a)},o):r.default.createElement(k,{key:a,active:i.index===a,springRef:d,centerCoords:m,cubeSize:200,mobileBehaviour:n.current,onClickHandler:c.bind(null,a)},o))))};T.defaultProps={index:0};var L=T;var A=()=>{let i=R();return x.default.createElement("div",{className:"flex justify-center items-center flex-1"},x.default.createElement(L,{index:Number(i.id)}))},te=A;export{te as default};
