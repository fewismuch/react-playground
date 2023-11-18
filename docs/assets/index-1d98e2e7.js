(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();var v={exports:{}},p={};const x=React;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=x,O=Symbol.for("react.element"),E=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,j=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D={key:!0,ref:!0,__self:!0,__source:!0};function w(n,t,i){var r,e={},s=null,a=null;i!==void 0&&(s=""+i),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)S.call(t,r)&&!D.hasOwnProperty(r)&&(e[r]=t[r]);if(n&&n.defaultProps)for(r in t=n.defaultProps,t)e[r]===void 0&&(e[r]=t[r]);return{$$typeof:O,type:n,key:s,ref:a,props:e,_owner:j.current}}p.Fragment=E;p.jsx=w;p.jsxs=w;v.exports=p;var d=v.exports,u={};const N=ReactDOM;var h=N;u.createRoot=h.createRoot,u.hydrateRoot=h.hydrateRoot;const L=`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview</title>
  <!-- es-module-shims -->
  <style>
    * {
      padding: 0;
      margin: 0;
    }
  </style>
</head>
<body>
<script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@18.2.0",
      "react-dom/client": "https://esm.sh/react-dom@18.2.0"
    }
  }
<\/script>
<script>

<\/script>
<script type="module">
  import React, {useState, useEffect} from 'react';
  import ReactDOM from 'react-dom/client';
  import {Playground} from 'https://esm.sh/react-exercise-playground@#version#'

  const App = () => {
    const [sandboxProps, setSandboxProps] = useState(null);

    useEffect(() => {
      window.addEventListener('message', ({data}) => {
        if (data?.type === 'SANDBOX_RUN') {
          data.data.onFilesChange = (val) => {
            window.parent.postMessage({type: 'SANDBOX_ON_FILES_CHANGE', message: val})
          }
          setSandboxProps(data.data)
        }
      })
    }, [])

    return sandboxProps ? React.createElement(React.StrictMode, null, React.createElement(Playground, sandboxProps)) : null
  };

  window.addEventListener('load', () => {
    window.parent.postMessage({type: 'SANDBOX_LOADED', message: ''})
    const root = document.getElementById('root')
    ReactDOM.createRoot(root).render(React.createElement(App, null))
  })
<\/script>
<div id="root">
  <div style="position:absolute;top: 0;left:0;width:100%;height:100%;display: flex;justify-content: center;align-items: center;">
    Loading...
  </div>
</div>
</body>
</html>
`,P="react-exercise-playground",A="react-exercise-playground是一个react在线代码编辑器可实时预览运行效果",I="0.1.91",M="dist/@types/Playground/index.d.ts",F="dist/index.mjs",B=["dist/*"],U={type:"git",url:"https://github.com/fewismuch/react-playground.git"},C={url:"https://github.com/fewismuch/react-playground/issues",email:"779205344@qq.com"},k=["react","react-playground","playground","react-live","live-editor","codeSandbox","sandbox","live"],X="fewismuch",T="MIT",q={dev:"vite",build:"vite build && tsc",docs:"vite build && tsc",preview:"vite preview",prepare:"husky install",report:"tsc && vite build",prepublish:"npm run docs && npm run build && npm publish"},$={"@babel/standalone":"^7.23.1","@monaco-editor/react":"^4.5.2","@typescript/ata":"^0.9.4",allotment:"^1.19.3",classnames:"^2.3.2",fflate:"^0.8.1","file-saver":"^2.0.5",jszip:"^3.10.1","monaco-editor":"^0.43.0","monaco-jsx-syntax-highlight":"^1.2.0",react:"^18.2.0","react-copy-to-clipboard":"^5.1.0","react-dom":"^18.2.0"},H={react:">=18.2.0","react-dom":">=18.2.0"},V={"@types/babel__standalone":"^7.1.5","@types/file-saver":"^2.0.5","@types/node":"^20.8.10","@types/react":"^18.2.15","@types/react-dom":"^18.2.7","@typescript-eslint/eslint-plugin":"^6.8.0","@typescript-eslint/parser":"^6.8.0","@vitejs/plugin-react-swc":"^3.3.2",eslint:"^8.45.0","eslint-config-prettier":"^9.0.0","eslint-config-standard":"^17.1.0","eslint-plugin-import":"^2.28.1","eslint-plugin-n":"^16.2.0","eslint-plugin-prettier":"^5.0.1","eslint-plugin-promise":"^6.1.1","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-react-refresh":"^0.4.3","eslint-plugin-standard":"^5.0.0",husky:"^8.0.3",less:"^4.1.3","less-loader":"^11.1.2","lint-staged":"^15.0.2",prettier:"^3.0.3","rollup-plugin-visualizer":"^5.9.2",stylelint:"^15.11.0","stylelint-config-css-modules":"^4.3.0","stylelint-config-prettier":"^9.0.5","stylelint-config-recommended-less":"^2.0.0","stylelint-config-standard":"^34.0.0","stylelint-less":"^2.0.0","stylelint-order":"^6.0.3","stylelint-prettier":"^4.0.2",typescript:"^5.0.2",vite:"^4.4.5","vite-plugin-cdn-import":"^0.3.5","vite-plugin-css-injected-by-js":"^3.3.0"},W={name:P,description:A,private:!1,version:I,types:M,main:F,files:B,repository:U,bugs:C,keywords:k,author:X,license:T,scripts:q,dependencies:$,peerDependencies:H,devDependencies:V,"lint-staged":{"src/**/*.{js,jsx,ts,tsx}":["eslint --max-warnings 0"],"src/**/*.{css,less,scss}":["stylelint --max-warnings 0"]}},z=n=>{const t="//unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js",i=typeof import.meta>"u"?n.replace("<!-- es-module-shims -->",`<script async src="${t}"><\/script>`):n;return URL.createObjectURL(new Blob([i],{type:"text/html"}))},G=L.replace("#version#",W.version),J=z(G)+window.location.hash,K=n=>{const{width:t="100vw",height:i="100vh"}=n,r=React.useRef(null),e=React.useRef(!1),[s,a]=React.useState(!1),l=React.useRef(null),b=o=>{o.forEach(c=>{c.isIntersecting&&a(!0)})},m=o=>{var f,y,g;const{type:c,message:R}=o.data;c==="SANDBOX_LOADED"?((y=(f=r.current)==null?void 0:f.contentWindow)==null||y.postMessage({type:"SANDBOX_RUN",data:{...n,onFilesChange:void 0}}),e.current=!0):c==="SANDBOX_ON_FILES_CHANGE"&&((g=n.onFilesChange)==null||g.call(n,R))};return React.useEffect(()=>{const o=new IntersectionObserver(b,{threshold:.2});return l.current&&o.observe(l.current),()=>{l.current&&o.unobserve(l.current)}},[]),React.useEffect(()=>(window.addEventListener("message",m),()=>{window.removeEventListener("message",m)}),[]),React.useEffect(()=>{var o,c;e.current&&((c=(o=r.current)==null?void 0:o.contentWindow)==null||c.postMessage({type:"SANDBOX_RUN",data:{...n,onFilesChange:void 0}}))},[n]),d.jsx("div",{ref:l,style:{width:t,height:i},children:s?d.jsx("iframe",{ref:r,src:J,style:{width:"100%",height:"100%",padding:0,border:"none"},sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}):null})},Y=K;function Q(){const n=t=>{window.location.hash=t};return d.jsx(Y,{onFilesChange:n})}u.createRoot(document.getElementById("root")).render(d.jsx(React.StrictMode,{children:d.jsx(Q,{})}));
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("*{padding:0;margin:0}body{font-family:Helvetica Neue,Segoe UI,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
