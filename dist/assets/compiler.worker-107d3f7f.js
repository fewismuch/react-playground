(function(){"use strict";var ge=`{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"
  }
}
`,we=`:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(255 255 255 / 87%);
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  background-color: #242424;
  color-scheme: light dark;
  font-synthesis: none;
}

#root {
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

body {
  display: flex;
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  place-items: center;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  padding: 0.6em 1.2em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #fff;
  }

  a:hover {
    color: #747bff;
  }

  button {
    background-color: #f9f9f9;
  }
}
`,be=`import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
`,ye=`import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
`,m=Uint8Array,j=Uint16Array,Ae=Int32Array,X=new m([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),K=new m([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),xe=new m([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Y=function(e,n){for(var r=new j(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var a=new Ae(r[30]),t=1;t<30;++t)for(var v=r[t];v<r[t+1];++v)a[v]=v-r[t]<<5|t;return{b:r,r:a}},Q=Y(X,2),Z=Q.b,Ee=Q.r;Z[28]=258,Ee[258]=28;for(var Re=Y(K,0),je=Re.b,B=new j(32768),f=0;f<32768;++f){var A=(f&43690)>>1|(f&21845)<<1;A=(A&52428)>>2|(A&13107)<<2,A=(A&61680)>>4|(A&3855)<<4,B[f]=((A&65280)>>8|(A&255)<<8)>>1}for(var F=function(e,n,r){for(var t=e.length,a=0,v=new j(n);a<t;++a)e[a]&&++v[e[a]-1];var c=new j(n);for(a=1;a<n;++a)c[a]=c[a-1]+v[a-1]<<1;var u;if(r){u=new j(1<<n);var h=15-n;for(a=0;a<t;++a)if(e[a])for(var o=a<<4|e[a],l=n-e[a],i=c[e[a]-1]++<<l,s=i|(1<<l)-1;i<=s;++i)u[B[i]>>h]=o}else for(u=new j(t),a=0;a<t;++a)e[a]&&(u[a]=B[c[e[a]-1]++]>>15-e[a]);return u},L=new m(288),f=0;f<144;++f)L[f]=8;for(var f=144;f<256;++f)L[f]=9;for(var f=256;f<280;++f)L[f]=7;for(var f=280;f<288;++f)L[f]=8;for(var ee=new m(32),f=0;f<32;++f)ee[f]=5;var Ce=F(L,9,1),Me=F(ee,5,1),z=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},b=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},D=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},Te=function(e){return(e+7)/8|0},N=function(e,n,r){return(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length),new m(e.subarray(n,r))},ke=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],g=function(e,n,r){var t=new Error(n||ke[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,g),!r)throw t;return t},Fe=function(e,n,r,t){var a=e.length,v=t?t.length:0;if(!a||n.f&&!n.l)return r||new m(0);var c=!r,u=c||n.i!=2,h=n.i;c&&(r=new m(a*3));var o=function(de){var me=r.length;if(de>me){var he=new m(Math.max(me*2,de));he.set(r),r=he}},l=n.f||0,i=n.p||0,s=n.b||0,p=n.l,C=n.d,x=n.m,y=n.n,M=a*8;do{if(!p){l=b(e,i,1);var R=b(e,i+1,3);if(i+=3,R)if(R==1)p=Ce,C=Me,x=9,y=5;else if(R==2){var P=b(e,i,31)+257,ie=b(e,i+10,15)+4,se=P+b(e,i+5,31)+1;i+=14;for(var U=new m(se),q=new m(19),w=0;w<ie;++w)q[xe[w]]=b(e,i+w*3,7);i+=ie*3;for(var le=z(q),Ge=(1<<le)-1,Je=F(q,le,1),w=0;w<se;){var fe=Je[b(e,i,Ge)];i+=fe&15;var d=fe>>4;if(d<16)U[w++]=d;else{var T=0,I=0;for(d==16?(I=3+b(e,i,3),i+=2,T=U[w-1]):d==17?(I=3+b(e,i,7),i+=3):d==18&&(I=11+b(e,i,127),i+=7);I--;)U[w++]=T}}var ce=U.subarray(0,P),E=U.subarray(P);x=z(ce),y=z(E),p=F(ce,x,1),C=F(E,y,1)}else g(1);else{var d=Te(i)+4,$=e[d-4]|e[d-3]<<8,W=d+$;if(W>a){h&&g(0);break}u&&o(s+$),r.set(e.subarray(d,W),s),n.b=s+=$,n.p=i=W*8,n.f=l;continue}if(i>M){h&&g(0);break}}u&&o(s+131072);for(var Ve=(1<<x)-1,Xe=(1<<y)-1,G=i;;G=i){var T=p[D(e,i)&Ve],k=T>>4;if(i+=T&15,i>M){h&&g(0);break}if(T||g(2),k<256)r[s++]=k;else if(k==256){G=i,p=null;break}else{var ue=k-254;if(k>264){var w=k-257,_=X[w];ue=b(e,i,(1<<_)-1)+Z[w],i+=_}var J=C[D(e,i)&Xe],V=J>>4;J||g(3),i+=J&15;var E=je[V];if(V>3){var _=K[V];E+=D(e,i)&(1<<_)-1,i+=_}if(i>M){h&&g(0);break}u&&o(s+131072);var ve=s+ue;if(s<E){var pe=v-E,Ke=Math.min(E,ve);for(pe+s<0&&g(3);s<Ke;++s)r[s]=t[pe+s]}for(;s<ve;++s)r[s]=r[s-E]}}n.l=p,n.p=G,n.b=s,n.f=l,p&&(l=1,n.m=x,n.d=C,n.n=y)}while(!l);return s!=r.length&&c?N(r,0,s):r.subarray(0,s)},Le=new m(0),Se=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&g(6,"invalid zlib data"),(e[1]>>5&1)==+!n&&g(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function Ue(e,n){return Fe(e.subarray(Se(e,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}var ne=typeof TextEncoder<"u"&&new TextEncoder,H=typeof TextDecoder<"u"&&new TextDecoder,_e=0;try{H.decode(Le,{stream:!0}),_e=1}catch{}var Oe=function(e){for(var n="",r=0;;){var t=e[r++],a=(t>127)+(t>223)+(t>239);if(r+a>e.length)return{s:n,r:N(e,r-1)};a?a==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):a&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function Ie(e,n){if(n){for(var r=new m(e.length),t=0;t<e.length;++t)r[t]=e.charCodeAt(t);return r}if(ne)return ne.encode(e);for(var a=e.length,v=new m(e.length+(e.length>>1)),c=0,u=function(l){v[c++]=l},t=0;t<a;++t){if(c+5>v.length){var h=new m(c+8+(a-t<<1));h.set(v),v=h}var o=e.charCodeAt(t);o<128||n?u(o):o<2048?(u(192|o>>6),u(128|o&63)):o>55295&&o<57344?(o=65536+(o&1047552)|e.charCodeAt(++t)&1023,u(240|o>>18),u(128|o>>12&63),u(128|o>>6&63),u(128|o&63)):(u(224|o>>12),u(128|o>>6&63),u(128|o&63))}return N(v,0,c)}function Be(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(H)return H.decode(e);var a=Oe(e),v=a.s,r=a.r;return r.length&&g(8),v}}var S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ze={exports:{}};(function(e,n){(function(r,t){t()})(S,function(){function r(o,l){return typeof l>"u"?l={autoBom:!1}:typeof l!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function t(o,l,i){var s=new XMLHttpRequest;s.open("GET",o),s.responseType="blob",s.onload=function(){h(s.response,l,i)},s.onerror=function(){console.error("could not download file")},s.send()}function a(o){var l=new XMLHttpRequest;l.open("HEAD",o,!1);try{l.send()}catch{}return 200<=l.status&&299>=l.status}function v(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(l)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof S=="object"&&S.global===S?S:void 0,u=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(o,l,i){var s=c.URL||c.webkitURL,p=document.createElement("a");l=l||o.name||"download",p.download=l,p.rel="noopener",typeof o=="string"?(p.href=o,p.origin===location.origin?v(p):a(p.href)?t(o,l,i):v(p,p.target="_blank")):(p.href=s.createObjectURL(o),setTimeout(function(){s.revokeObjectURL(p.href)},4e4),setTimeout(function(){v(p)},0))}:"msSaveOrOpenBlob"in navigator?function(o,l,i){if(l=l||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(r(o,i),l);else if(a(o))t(o,l,i);else{var s=document.createElement("a");s.href=o,s.target="_blank",setTimeout(function(){v(s)})}}:function(o,l,i,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),typeof o=="string")return t(o,l,i);var p=o.type==="application/octet-stream",C=/constructor/i.test(c.HTMLElement)||c.safari,x=/CriOS\/[\d]+/.test(navigator.userAgent);if((x||p&&C||u)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var d=y.result;d=x?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=d:location=d,s=null},y.readAsDataURL(o)}else{var M=c.URL||c.webkitURL,R=M.createObjectURL(o);s?s.location=R:location.href=R,s=null,setTimeout(function(){M.revokeObjectURL(R)},4e4)}});c.saveAs=h.saveAs=h,e.exports=h})})(ze);function De(e){const n=atob(e);if(n.startsWith("xÚ")){const r=Ie(n,!0),t=Ue(r);return Be(t)}return decodeURIComponent(escape(n))}const Ne=()=>{let e;try{if(typeof window<"u"){const n=window.location.hash;n&&(e=JSON.parse(De(n==null?void 0:n.split("#")[1])))}}catch(n){console.error(n)}return e},re="App.jsx",te="import-map.json",O="main.jsx";Ne()||(O+"",re+"",te+"");const oe={transform:null};importScripts("https://cdn.staticfile.org/babel-standalone/^7.23.1/babel.min.js");const He=(e,n)=>{let r=n.split("./").pop()||"";return r.includes(".")||(r+=".jsx"),e[r]},$e=e=>{const n=`export default {${e.value}}`;return URL.createObjectURL(new Blob([n],{type:"application/javascript"}))},We=e=>{const n=new Date().getTime(),r=`
                  (() => {
                    let stylesheet = document.getElementById('style_${n}_${e.name}');
                    if (!stylesheet) {
                      stylesheet = document.createElement('style')
                      stylesheet.setAttribute('id', 'style_${n}_${e.name}')
                      document.head.appendChild(stylesheet)
                    }
                    const styles = document.createTextNode(\`${e.value}\`)
                    stylesheet.innerHTML = ''
                    stylesheet.appendChild(styles)
                  })()
                  `;return URL.createObjectURL(new Blob([r],{type:"application/javascript"}))},Pe=e=>({visitor:{ImportDeclaration(n){const r=n.node.source.value;if(r.startsWith(".")){const t=He(e,r);if(!t)return;t.name.endsWith(".css")?n.node.source.value=We(t):t.name.endsWith(".json")?n.node.source.value=$e(t):n.node.source.value=URL.createObjectURL(new Blob([ae(t.name,t.value,e)],{type:"application/javascript"}))}}}}),ae=(e,n,r)=>{let t=n;const a=/import\s+React/g;return e.endsWith(".jsx")&&!a.test(n)&&(t=`import React from 'react';
${n}`),oe.transform(t,{presets:["react"],filename:e,plugins:[Pe(r)]}).code},qe=e=>{const n=e[O];return{compileCode:ae(O,n.value,e)}};self.addEventListener("message",async({data:e})=>{if(typeof e=="string"){self.postMessage({type:"UPDATE_FILE",data:oe.transform(e,{presets:["react"],retainLines:!0}).code});return}try{self.postMessage({type:"UPDATE_FILES",data:qe(e)})}catch(n){self.postMessage({type:"ERROR",error:n})}})})();
