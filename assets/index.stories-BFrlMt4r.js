import{j as x}from"./jsx-runtime-BjG_zV1W.js";import{B as M}from"./Box-B5Oq-fNb.js";import{T as O}from"./Text-BtVhSXLZ.js";import{c as D}from"./compiler-runtime-CgWVK7Un.js";import{b as N,c as H,a as q,d as L,_ as E}from"./index-B_Qnr3_3.js";import{R as o,r as n}from"./index-B4xtDKTc.js";import{$ as T,a as P,b as K}from"./index-Djt9V7d_.js";import{s as z}from"./cq-Cb6QpF0y.js";import{I as X,r as Z}from"./IconBase.esm-DgbQrX84.js";import"./index-CSieDl-Q.js";import"./_commonjsHelpers-BosuxZz1.js";var b=new Map;b.set("bold",function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});b.set("duotone",function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});b.set("fill",function(){return o.createElement(o.Fragment,null,o.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});b.set("light",function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});b.set("thin",function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});b.set("regular",function(e){return o.createElement(o.Fragment,null,o.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var G=function(t,r){return Z(t,r,b)},I=n.forwardRef(function(e,t){return o.createElement(X,Object.assign({ref:t},e,{renderPath:G}))});I.displayName="Check";function J(e){const t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Q(e){const[t,r]=n.useState(void 0);return N(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const s=new ResizeObserver(u=>{if(!Array.isArray(u)||!u.length)return;const c=u[0];let f,i;if("borderBoxSize"in c){const d=c.borderBoxSize,h=Array.isArray(d)?d[0]:d;f=h.inlineSize,i=h.blockSize}else f=e.offsetWidth,i=e.offsetHeight;r({width:f,height:i})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}else r(void 0)},[e]),t}const B="Checkbox",[U,ke]=H(B),[V,Y]=U(B),ee=n.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:s,checked:u,defaultChecked:c,required:f,disabled:i,value:d="on",onCheckedChange:h,...w}=e,[l,C]=n.useState(null),F=q(t,a=>C(a)),g=n.useRef(!1),_=l?!!l.closest("form"):!0,[m=!1,y]=T({prop:u,defaultProp:c,onChange:h}),W=n.useRef(m);return n.useEffect(()=>{const a=l==null?void 0:l.form;if(a){const $=()=>y(W.current);return a.addEventListener("reset",$),()=>a.removeEventListener("reset",$)}},[l,y]),n.createElement(V,{scope:r,state:m,disabled:i},n.createElement(L.button,E({type:"button",role:"checkbox","aria-checked":p(m)?"mixed":m,"aria-required":f,"data-state":A(m),"data-disabled":i?"":void 0,disabled:i,value:d},w,{ref:F,onKeyDown:P(e.onKeyDown,a=>{a.key==="Enter"&&a.preventDefault()}),onClick:P(e.onClick,a=>{y($=>p($)?!0:!$),_&&(g.current=a.isPropagationStopped(),g.current||a.stopPropagation())})})),_&&n.createElement(oe,{control:l,bubbles:!g.current,name:s,value:d,checked:m,required:f,disabled:i,style:{transform:"translateX(-100%)"}}))}),te="CheckboxIndicator",re=n.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:s,...u}=e,c=Y(te,r);return n.createElement(K,{present:s||p(c.state)||c.state===!0},n.createElement(L.span,E({"data-state":A(c.state),"data-disabled":c.disabled?"":void 0},u,{ref:t,style:{pointerEvents:"none",...e.style}})))}),oe=e=>{const{control:t,checked:r,bubbles:s=!0,...u}=e,c=n.useRef(null),f=J(r),i=Q(t);return n.useEffect(()=>{const d=c.current,h=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(h,"checked").set;if(f!==r&&l){const C=new Event("click",{bubbles:s});d.indeterminate=p(r),l.call(d,p(r)?!1:r),d.dispatchEvent(C)}},[f,r,s]),n.createElement("input",E({type:"checkbox","aria-hidden":!0,defaultChecked:p(r)?!1:r},u,{tabIndex:-1,ref:c,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function p(e){return e==="indeterminate"}function A(e){return p(e)?"indeterminate":e?"checked":"unchecked"}const ne=ee,se=re,ce=z(ne,{base:{all:"unset",width:"6",height:"6",bgColor:"gray.900",borderRadius:"xs",lineHeight:0,cursor:"pointer",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid",borderColor:"gray.900",_focus:{border:"2px solid",borderColor:"ignite.300"}}}),ae=z(se,{base:{color:"white",width:"4",height:"4"}});function v(e){const t=D.c(3);let r;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsx(ae,{asChild:!0,children:x.jsx(I,{weight:"bold"})}),t[0]=r):r=t[0];let s;return t[1]!==e?(s=x.jsx(ce,{...e,children:r}),t[1]=e,t[2]=s):s=t[2],s}v.displayName="Checkbox";v.__docgenInfo={description:"",methods:[],displayName:"Checkbox",composes:["ComponentProps"]};const Ce={title:"Form/Checkbox",component:v,args:{},decorators:[e=>x.jsxs(M,{style:{display:"flex",flexDirection:"row",gap:"10px"},children:[e(),x.jsx(O,{size:"sm",children:"Accept terms of use"})]})]},k={};var R,S,j;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(j=(S=k.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const ge=["Primary"];export{k as Primary,ge as __namedExportsOrder,Ce as default};
