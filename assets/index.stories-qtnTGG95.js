import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{B as _}from"./Box-B5Oq-fNb.js";import{T as j}from"./Text-BtVhSXLZ.js";import{c as C}from"./compiler-runtime-CgWVK7Un.js";import{s as c}from"./cq-Cb6QpF0y.js";import"./index-B4xtDKTc.js";import"./_commonjsHelpers-BosuxZz1.js";const P=c("div",{base:{bgColor:"gray.900",paddingY:"3",paddingX:4,borderRadius:"sm",boxSizing:"border-box",border:"2px solid",borderColor:"gray.900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"ignite.300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}}),S=c("span",{base:{fontFamily:"default",fontSize:"sm",color:"gray.400",fontWeight:"regular"}}),w=c("input",{base:{fontFamily:"default",fontSize:"sm",color:"white",fontWeight:"regular",bgColor:"transparent",border:0,width:"100%",_focus:{outline:0},_disabled:{cursor:"not-allowed"},_placeholder:{color:"gray.400"}}});function m(a){const e=C.c(10);let r,s;e[0]!==a?({prefix:r,...s}=a,e[0]=a,e[1]=r,e[2]=s):(r=e[1],s=e[2]);let o;e[3]!==r?(o=r&&i.jsx(S,{children:r}),e[3]=r,e[4]=o):o=e[4];let t;e[5]!==s?(t=i.jsx(w,{...s}),e[5]=s,e[6]=t):t=e[6];let n;return e[7]!==o||e[8]!==t?(n=i.jsxs(P,{children:[o,t]}),e[7]=o,e[8]=t,e[9]=n):n=e[9],n}m.displayName="TextInput";m.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{prefix:{required:!1,tsType:{name:"string"},description:""}},composes:["ComponentProps"]};const N={title:"Form/Text Input",component:m,args:{},decorators:[a=>i.jsxs(_,{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[i.jsx(j,{size:"sm",children:"Email address"}),a()]})]},p={args:{placeholder:"Type your name"}},l={args:{prefix:"https://"}},d={args:{disabled:!0}};var u,f,x;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your name"
  }
}`,...(x=(f=p.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,b,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prefix: "https://"
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,T,I;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const q=["Primary","WithPrefix","Disabled"];export{d as Disabled,p as Primary,l as WithPrefix,q as __namedExportsOrder,N as default};
