import{c as Q,h as n,p as c,s as B,i as H,g as m,r as q,w as s,l as _,aD as O,v as T,t as $}from"./index-DmP_tqXA.js";import{Q as k}from"./QResizeObserver-BOK00zG3.js";const L=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:f}){const i=n(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>c("div",{class:i.value},B(f.default))}}),R=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:f,emit:i}){const{proxy:{$q:v}}=T(),a=H($,m);if(a===m)return console.error("QHeader needs to be child of QLayout"),m;const d=q(parseInt(t.heightHint,10)),r=q(!0),h=n(()=>t.reveal===!0||a.view.value.indexOf("H")!==-1||v.platform.is.ios&&a.isContainer.value===!0),y=n(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return r.value===!0?d.value:0;const e=d.value-a.scroll.value.position;return e>0?e:0}),b=n(()=>t.modelValue!==!0||h.value===!0&&r.value!==!0),V=n(()=>t.modelValue===!0&&b.value===!0&&t.reveal===!0),p=n(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(b.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),z=n(()=>{const e=a.rows.value.top,u={};return e[0]==="l"&&a.left.space===!0&&(u[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(u[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),u});function l(e,u){a.update("header",e,u)}function o(e,u){e.value!==u&&(e.value=u)}function w({height:e}){o(d,e),l("size",e)}function x(e){V.value===!0&&o(r,!0),i("focusin",e)}s(()=>t.modelValue,e=>{l("space",e),o(r,!0),a.animate()}),s(y,e=>{l("offset",e)}),s(()=>t.reveal,e=>{e===!1&&o(r,t.modelValue)}),s(r,e=>{a.animate(),i("reveal",e)}),s(a.scroll,e=>{t.reveal===!0&&o(r,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const g={};return a.instances.header=g,t.modelValue===!0&&l("size",d.value),l("space",t.modelValue),l("offset",y.value),_(()=>{a.instances.header===g&&(a.instances.header=void 0,l("size",0),l("offset",0),l("space",!1))}),()=>{const e=O(f.default,[]);return t.elevated===!0&&e.push(c("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(c(k,{debounce:0,onResize:w})),c("header",{class:p.value,style:z.value,onFocusin:x},e)}}});export{L as Q,R as a};