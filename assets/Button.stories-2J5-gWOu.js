import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{s as _}from"./cq-Cb6QpF0y.js";import{R as e,r as B}from"./index-B4xtDKTc.js";import{I as P,r as I}from"./IconBase.esm-DgbQrX84.js";import"./_commonjsHelpers-BosuxZz1.js";const z=_("button",{base:{all:"unset",borderRadius:"sm",fontFamily:"default",fontWeight:"medium",fontSize:"sm",textAlign:"center",minWidth:120,boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",gap:"2",cursor:"pointer",paddingY:"0",paddingX:"4","& svg":{width:"4",height:"4"},_disabled:{cursor:"not-allowed"}},variants:{variant:{primary:{color:"white",bgColor:"ignite.500","&:not(disabled):hover":{backgroundColor:"ignite.300"},_disabled:{backgroundColor:"gray.200"}},secondary:{color:"ignite.300",border:"2px solid",borderColor:"ignite.500","&:not(disabled):hover":{backgroundColor:"ignite.500",color:"white"},_disabled:{color:"gray.200",borderColor:"gray.200"}},tertiary:{color:"gray.100","&:not(disabled):hover":{color:"white"},_disabled:{color:"gray.600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});z.displayName="Button";var t=new Map;t.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});t.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("polygon",{points:"96 48 176 128 96 208 96 48",opacity:"0.2"}),e.createElement("polygon",{points:"96 48 176 128 96 208 96 48",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});t.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))});t.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});t.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});t.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("polyline",{points:"96 48 176 128 96 208",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var N=function(c,w){return I(c,w,t)},R=B.forwardRef(function(r,c){return e.createElement(P,Object.assign({ref:c},r,{renderPath:N}))});R.displayName="CaretRight";const V={title:"Form/Button",component:z,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"click"}}},n={args:{disabled:!1}},o={args:{variant:"secondary",children:"See more"}},a={args:{variant:"tertiary",children:"Cancel"}},s={args:{size:"sm"}},i={args:{disabled:!0}},l={args:{children:d.jsxs(d.Fragment,{children:["Next step",d.jsx(R,{})]})}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "See more"
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,b,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    children: "Cancel"
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var E,v,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,C,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var W,F,L;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <>
                Next step
                <CaretRight />
            </>
  }
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const X=["Primary","Secondary","Tertiary","Small","Disabled","WithIcon"];export{i as Disabled,n as Primary,o as Secondary,s as Small,a as Tertiary,l as WithIcon,X as __namedExportsOrder,V as default};
