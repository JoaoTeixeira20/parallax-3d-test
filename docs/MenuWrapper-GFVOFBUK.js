import{a as i}from"./chunk-TA4DXXFZ.js";import{a as l,i as m,l as s,m as p}from"./chunk-XX3XNYVE.js";import{e as n}from"./chunk-CW4BMCRM.js";var f=n(l());var e=n(l());var c=["sound","spectrum","analyzer","boxes","mouse","parallax"];var u=r=>{let{spring:d,focusPos:t,isMobileRef:P}=(0,e.useContext)(m),b=s(),v=(0,e.useCallback)(a=>{b(`/cards/${a}`)},[]);return e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"flex flex-row flex-wrap justify-center max-w-screen-xl"},c.map((a,o)=>e.default.createElement(i,{key:o,active:r.index===o,springRef:d,mouseX:t.x,mouseY:t.y,cubeSize:200,mobileBehaviour:P.current,onClickHandler:v.bind(null,o)},a))))};u.defaultProps={index:0};var x=u;var S=()=>{let r=p();return f.default.createElement(x,{index:Number(r.id)})},z=S;export{z as default};