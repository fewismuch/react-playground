(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ec={exports:{}},ta={},bc={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),km=Symbol.for("react.portal"),_m=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),Im=Symbol.for("react.profiler"),Om=Symbol.for("react.provider"),Vm=Symbol.for("react.context"),Nm=Symbol.for("react.forward_ref"),Gm=Symbol.for("react.suspense"),jm=Symbol.for("react.memo"),zm=Symbol.for("react.lazy"),Nu=Symbol.iterator;function Um(e){return e===null||typeof e!="object"?null:(e=Nu&&e[Nu]||e["@@iterator"],typeof e=="function"?e:null)}var Mc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lc=Object.assign,Hc={};function Hr(e,n,t){this.props=e,this.context=n,this.refs=Hc,this.updater=t||Mc}Hr.prototype.isReactComponent={};Hr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sc(){}Sc.prototype=Hr.prototype;function bl(e,n,t){this.props=e,this.context=n,this.refs=Hc,this.updater=t||Mc}var Ml=bl.prototype=new Sc;Ml.constructor=bl;Lc(Ml,Hr.prototype);Ml.isPureReactComponent=!0;var Gu=Array.isArray,xc=Object.prototype.hasOwnProperty,Ll={current:null},Rc={key:!0,ref:!0,__self:!0,__source:!0};function wc(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)xc.call(n,r)&&!Rc.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:wi,type:e,key:o,ref:a,props:i,_owner:Ll.current}}function Bm(e,n){return{$$typeof:wi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===wi}function Wm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ju=/\/+/g;function Da(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Wm(""+e.key):n.toString(36)}function To(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wi:case km:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Da(a,0):r,Gu(i)?(t="",e!=null&&(t=e.replace(ju,"$&/")+"/"),To(i,n,t,"",function(u){return u})):i!=null&&(Hl(i)&&(i=Bm(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ju,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",Gu(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Da(o,s);a+=To(o,n,t,l,i)}else if(l=Um(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Da(o,s++),a+=To(o,n,t,l,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Ki(e,n,t){if(e==null)return e;var r=[],i=0;return To(e,r,"","",function(o){return n.call(t,o,i++)}),r}function $m(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},yo={transition:null},Xm={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Ll};q.Children={map:Ki,forEach:function(e,n,t){Ki(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ki(e,function(){n++}),n},toArray:function(e){return Ki(e,function(n){return n})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Hr;q.Fragment=_m;q.Profiler=Im;q.PureComponent=bl;q.StrictMode=Fm;q.Suspense=Gm;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;q.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lc({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=Ll.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)xc.call(n,l)&&!Rc.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:wi,type:e.type,key:i,ref:o,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:Vm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Om,_context:e},e.Consumer=e};q.createElement=wc;q.createFactory=function(e){var n=wc.bind(null,e);return n.type=e,n};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Nm,render:e}};q.isValidElement=Hl;q.lazy=function(e){return{$$typeof:zm,_payload:{_status:-1,_result:e},_init:$m}};q.memo=function(e,n){return{$$typeof:jm,type:e,compare:n===void 0?null:n}};q.startTransition=function(e){var n=yo.transition;yo.transition={};try{e()}finally{yo.transition=n}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,n){return Ne.current.useCallback(e,n)};q.useContext=function(e){return Ne.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};q.useEffect=function(e,n){return Ne.current.useEffect(e,n)};q.useId=function(){return Ne.current.useId()};q.useImperativeHandle=function(e,n,t){return Ne.current.useImperativeHandle(e,n,t)};q.useInsertionEffect=function(e,n){return Ne.current.useInsertionEffect(e,n)};q.useLayoutEffect=function(e,n){return Ne.current.useLayoutEffect(e,n)};q.useMemo=function(e,n){return Ne.current.useMemo(e,n)};q.useReducer=function(e,n,t){return Ne.current.useReducer(e,n,t)};q.useRef=function(e){return Ne.current.useRef(e)};q.useState=function(e){return Ne.current.useState(e)};q.useSyncExternalStore=function(e,n,t){return Ne.current.useSyncExternalStore(e,n,t)};q.useTransition=function(){return Ne.current.useTransition()};q.version="18.2.0";bc.exports=q;var x=bc.exports;const ke=vc(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=x,Km=Symbol.for("react.element"),Ym=Symbol.for("react.fragment"),Qm=Object.prototype.hasOwnProperty,qm=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zm={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Qm.call(n,r)&&!Zm.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Km,type:e,key:o,ref:a,props:i,_owner:qm.current}}ta.Fragment=Ym;ta.jsx=Pc;ta.jsxs=Pc;Ec.exports=ta;var z=Ec.exports,Es={},Cc={exports:{}},Ze={},Ac={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,I){var G=P.length;P.push(I);e:for(;0<G;){var k=G-1>>>1,V=P[k];if(0<i(V,I))P[k]=I,P[G]=V,G=k;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],G=P.pop();if(G!==I){P[0]=G;e:for(var k=0,V=P.length,J=V>>>1;k<J;){var Z=2*(k+1)-1,Y=P[Z],ce=Z+1,$=P[ce];if(0>i(Y,G))ce<V&&0>i($,Y)?(P[k]=$,P[ce]=G,k=ce):(P[k]=Y,P[Z]=G,k=Z);else if(ce<V&&0>i($,G))P[k]=$,P[ce]=G,k=ce;else break e}}return I}function i(P,I){var G=P.sortIndex-I.sortIndex;return G!==0?G:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,T=!1,g=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var I=t(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,n(l,I);else break;I=t(u)}}function E(P){if(v=!1,p(P),!g)if(t(l)!==null)g=!0,j(H);else{var I=t(u);I!==null&&W(E,I.startTime-P)}}function H(P,I){g=!1,v&&(v=!1,m(L),L=-1),T=!0;var G=h;try{for(p(I),f=t(l);f!==null&&(!(f.expirationTime>I)||P&&!O());){var k=f.callback;if(typeof k=="function"){f.callback=null,h=f.priorityLevel;var V=k(f.expirationTime<=I);I=e.unstable_now(),typeof V=="function"?f.callback=V:f===t(l)&&r(l),p(I)}else r(l);f=t(l)}if(f!==null)var J=!0;else{var Z=t(u);Z!==null&&W(E,Z.startTime-I),J=!1}return J}finally{f=null,h=G,T=!1}}var S=!1,b=null,L=-1,w=5,C=-1;function O(){return!(e.unstable_now()-C<w)}function U(){if(b!==null){var P=e.unstable_now();C=P;var I=!0;try{I=b(!0,P)}finally{I?K():(S=!1,b=null)}}else S=!1}var K;if(typeof d=="function")K=function(){d(U)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,F=_.port2;_.port1.onmessage=U,K=function(){F.postMessage(null)}}else K=function(){R(U,0)};function j(P){b=P,S||(S=!0,K())}function W(P,I){L=R(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){g||T||(g=!0,j(H))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var G=h;h=I;try{return P()}finally{h=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=h;h=P;try{return I()}finally{h=G}},e.unstable_scheduleCallback=function(P,I,G){var k=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?k+G:k):G=k,P){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=G+V,P={id:c++,callback:I,priorityLevel:P,startTime:G,expirationTime:V,sortIndex:-1},G>k?(P.sortIndex=G,n(u,P),t(l)===null&&P===t(u)&&(v?(m(L),L=-1):v=!0,W(E,G-k))):(P.sortIndex=V,n(l,P),g||T||(g=!0,j(H))),P},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(P){var I=h;return function(){var G=h;h=I;try{return P.apply(this,arguments)}finally{h=G}}}})(Dc);Ac.exports=Dc;var eh=Ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=x,qe=eh;function A(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _c=new Set,li={};function Ut(e,n){Tr(e,n),Tr(e+"Capture",n)}function Tr(e,n){for(li[e]=n,e=0;e<n.length;e++)_c.add(n[e])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=Object.prototype.hasOwnProperty,nh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zu={},Uu={};function th(e){return bs.call(Uu,e)?!0:bs.call(zu,e)?!1:nh.test(e)?Uu[e]=!0:(zu[e]=!0,!1)}function rh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ih(e,n,t,r){if(n===null||typeof n>"u"||rh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ge(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new Ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Sl,xl);Ce[n]=new Ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Sl,xl);Ce[n]=new Ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Sl,xl);Ce[n]=new Ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rl(e,n,t,r){var i=Ce.hasOwnProperty(n)?Ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ih(n,t,i,r)&&(t=null),r||i===null?th(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Kn=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),wl=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),Fc=Symbol.for("react.provider"),Ic=Symbol.for("react.context"),Pl=Symbol.for("react.forward_ref"),Ls=Symbol.for("react.suspense"),Hs=Symbol.for("react.suspense_list"),Cl=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),Bu=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,ka;function $r(e){if(ka===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ka=n&&n[1]||""}return`
`+ka+e}var _a=!1;function Fa(e,n){if(!e||_a)return"";_a=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{_a=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?$r(e):""}function oh(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=Fa(e.type,!1),e;case 11:return e=Fa(e.type.render,!1),e;case 1:return e=Fa(e.type,!0),e;default:return""}}function Ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case qt:return"Portal";case Ms:return"Profiler";case wl:return"StrictMode";case Ls:return"Suspense";case Hs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ic:return(e.displayName||"Context")+".Consumer";case Fc:return(e._context.displayName||"Context")+".Provider";case Pl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cl:return n=e.displayName||null,n!==null?n:Ss(e.type)||"Memo";case tt:n=e._payload,e=e._init;try{return Ss(e(n))}catch{}}return null}function ah(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ss(n);case 8:return n===wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sh(e){var n=Vc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qi(e){e._valueTracker||(e._valueTracker=sh(e))}function Nc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Vc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xs(e,n){var t=n.checked;return he({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Wu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=yt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Gc(e,n){n=n.checked,n!=null&&Rl(e,"checked",n,!1)}function Rs(e,n){Gc(e,n);var t=yt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ws(e,n.type,t):n.hasOwnProperty("defaultValue")&&ws(e,n.type,yt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $u(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ws(e,n,t){(n!=="number"||Co(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Xr=Array.isArray;function cr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+yt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ps(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(A(91));return he({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(A(92));if(Xr(t)){if(1<t.length)throw Error(A(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:yt(t)}}function jc(e,n){var t=yt(n.value),r=yt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ui(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lh=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){lh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qr[n]=Qr[e]})});function Bc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+n).trim():n+"px"}function Wc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Bc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var uh=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,n){if(n){if(uh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(A(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(A(61))}if(n.style!=null&&typeof n.style!="object")throw Error(A(62))}}function Ds(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ks=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _s=null,fr=null,pr=null;function Ku(e){if(e=Ai(e)){if(typeof _s!="function")throw Error(A(280));var n=e.stateNode;n&&(n=sa(n),_s(e.stateNode,e.type,n))}}function $c(e){fr?pr?pr.push(e):pr=[e]:fr=e}function Xc(){if(fr){var e=fr,n=pr;if(pr=fr=null,Ku(e),n)for(e=0;e<n.length;e++)Ku(n[e])}}function Jc(e,n){return e(n)}function Kc(){}var Ia=!1;function Yc(e,n,t){if(Ia)return e(n,t);Ia=!0;try{return Jc(e,n,t)}finally{Ia=!1,(fr!==null||pr!==null)&&(Kc(),Xc())}}function di(e,n){var t=e.stateNode;if(t===null)return null;var r=sa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(A(231,n,typeof t));return t}var Fs=!1;if(Wn)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Fs=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Fs=!1}function dh(e,n,t,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var qr=!1,Ao=null,Do=!1,Is=null,ch={onError:function(e){qr=!0,Ao=e}};function fh(e,n,t,r,i,o,a,s,l){qr=!1,Ao=null,dh.apply(ch,arguments)}function ph(e,n,t,r,i,o,a,s,l){if(fh.apply(this,arguments),qr){if(qr){var u=Ao;qr=!1,Ao=null}else throw Error(A(198));Do||(Do=!0,Is=u)}}function Bt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Qc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yu(e){if(Bt(e)!==e)throw Error(A(188))}function mh(e){var n=e.alternate;if(!n){if(n=Bt(e),n===null)throw Error(A(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Yu(i),e;if(o===r)return Yu(i),n;o=o.sibling}throw Error(A(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===t){a=!0,t=i,r=o;break}if(s===r){a=!0,r=i,t=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===t){a=!0,t=o,r=i;break}if(s===r){a=!0,r=o,t=i;break}s=s.sibling}if(!a)throw Error(A(189))}}if(t.alternate!==r)throw Error(A(190))}if(t.tag!==3)throw Error(A(188));return t.stateNode.current===t?e:n}function qc(e){return e=mh(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Zc(e);if(n!==null)return n;e=e.sibling}return null}var ef=qe.unstable_scheduleCallback,Qu=qe.unstable_cancelCallback,hh=qe.unstable_shouldYield,gh=qe.unstable_requestPaint,ye=qe.unstable_now,Th=qe.unstable_getCurrentPriorityLevel,Dl=qe.unstable_ImmediatePriority,nf=qe.unstable_UserBlockingPriority,ko=qe.unstable_NormalPriority,yh=qe.unstable_LowPriority,tf=qe.unstable_IdlePriority,ra=null,Cn=null;function vh(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(ra,e,void 0,(e.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:Mh,Eh=Math.log,bh=Math.LN2;function Mh(e){return e>>>=0,e===0?32:31-(Eh(e)/bh|0)|0}var Zi=64,eo=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~i;s!==0?r=Jr(s):(o&=a,o!==0&&(r=Jr(o)))}else a=t&~i,a!==0?r=Jr(a):o!==0&&(r=Jr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-vn(n),i=1<<t,r|=e[t],n&=~i;return r}function Lh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-vn(o),s=1<<a,l=i[a];l===-1?(!(s&t)||s&r)&&(i[a]=Lh(s,n)):l<=n&&(e.expiredLanes|=s),o&=~s}}function Os(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rf(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function Oa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Pi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-vn(n),e[n]=t}function Sh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-vn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function kl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-vn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var te=0;function of(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var af,_l,sf,lf,uf,Vs=!1,no=[],ut=null,dt=null,ct=null,ci=new Map,fi=new Map,it=[],xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qu(e,n){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":ci.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(n.pointerId)}}function Ir(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Ai(n),n!==null&&_l(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Rh(e,n,t,r,i){switch(n){case"focusin":return ut=Ir(ut,e,n,t,r,i),!0;case"dragenter":return dt=Ir(dt,e,n,t,r,i),!0;case"mouseover":return ct=Ir(ct,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return ci.set(o,Ir(ci.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fi.set(o,Ir(fi.get(o)||null,e,n,t,r,i)),!0}return!1}function df(e){var n=Dt(e.target);if(n!==null){var t=Bt(n);if(t!==null){if(n=t.tag,n===13){if(n=Qc(t),n!==null){e.blockedOn=n,uf(e.priority,function(){sf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ns(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ks=r,t.target.dispatchEvent(r),ks=null}else return n=Ai(t),n!==null&&_l(n),e.blockedOn=t,!1;n.shift()}return!0}function Zu(e,n,t){vo(e)&&t.delete(n)}function wh(){Vs=!1,ut!==null&&vo(ut)&&(ut=null),dt!==null&&vo(dt)&&(dt=null),ct!==null&&vo(ct)&&(ct=null),ci.forEach(Zu),fi.forEach(Zu)}function Or(e,n){e.blockedOn===n&&(e.blockedOn=null,Vs||(Vs=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,wh)))}function pi(e){function n(i){return Or(i,e)}if(0<no.length){Or(no[0],e);for(var t=1;t<no.length;t++){var r=no[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Or(ut,e),dt!==null&&Or(dt,e),ct!==null&&Or(ct,e),ci.forEach(n),fi.forEach(n),t=0;t<it.length;t++)r=it[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(t=it[0],t.blockedOn===null);)df(t),t.blockedOn===null&&it.shift()}var mr=Kn.ReactCurrentBatchConfig,Fo=!0;function Ph(e,n,t,r){var i=te,o=mr.transition;mr.transition=null;try{te=1,Fl(e,n,t,r)}finally{te=i,mr.transition=o}}function Ch(e,n,t,r){var i=te,o=mr.transition;mr.transition=null;try{te=4,Fl(e,n,t,r)}finally{te=i,mr.transition=o}}function Fl(e,n,t,r){if(Fo){var i=Ns(e,n,t,r);if(i===null)Xa(e,n,r,Io,t),qu(e,r);else if(Rh(i,e,n,t,r))r.stopPropagation();else if(qu(e,r),n&4&&-1<xh.indexOf(e)){for(;i!==null;){var o=Ai(i);if(o!==null&&af(o),o=Ns(e,n,t,r),o===null&&Xa(e,n,r,Io,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xa(e,n,r,null,t)}}var Io=null;function Ns(e,n,t,r){if(Io=null,e=Al(r),e=Dt(e),e!==null)if(n=Bt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Qc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Io=e,null}function cf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Th()){case Dl:return 1;case nf:return 4;case ko:case yh:return 16;case tf:return 536870912;default:return 16}default:return 16}}var at=null,Il=null,Eo=null;function ff(){if(Eo)return Eo;var e,n=Il,t=n.length,r,i="value"in at?at.value:at.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return Eo=i.slice(e,1<r?1-r:void 0)}function bo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function ed(){return!1}function en(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?to:ed,this.isPropagationStopped=ed,this}return he(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),n}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=en(Sr),Ci=he({},Sr,{view:0,detail:0}),Ah=en(Ci),Va,Na,Vr,ia=he({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Va=e.screenX-Vr.screenX,Na=e.screenY-Vr.screenY):Na=Va=0,Vr=e),Va)},movementY:function(e){return"movementY"in e?e.movementY:Na}}),nd=en(ia),Dh=he({},ia,{dataTransfer:0}),kh=en(Dh),_h=he({},Ci,{relatedTarget:0}),Ga=en(_h),Fh=he({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ih=en(Fh),Oh=he({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vh=en(Oh),Nh=he({},Sr,{data:0}),td=en(Nh),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zh[e])?!!n[e]:!1}function Vl(){return Uh}var Bh=he({},Ci,{key:function(e){if(e.key){var n=Gh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(e){return e.type==="keypress"?bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wh=en(Bh),$h=he({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=en($h),Xh=he({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),Jh=en(Xh),Kh=he({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yh=en(Kh),Qh=he({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qh=en(Qh),Zh=[9,13,27,32],Nl=Wn&&"CompositionEvent"in window,Zr=null;Wn&&"documentMode"in document&&(Zr=document.documentMode);var eg=Wn&&"TextEvent"in window&&!Zr,pf=Wn&&(!Nl||Zr&&8<Zr&&11>=Zr),id=String.fromCharCode(32),od=!1;function mf(e,n){switch(e){case"keyup":return Zh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function ng(e,n){switch(e){case"compositionend":return hf(n);case"keypress":return n.which!==32?null:(od=!0,id);case"textInput":return e=n.data,e===id&&od?null:e;default:return null}}function tg(e,n){if(er)return e==="compositionend"||!Nl&&mf(e,n)?(e=ff(),Eo=Il=at=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pf&&n.locale!=="ko"?null:n.data;default:return null}}var rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rg[e.type]:n==="textarea"}function gf(e,n,t,r){$c(r),n=Oo(n,"onChange"),0<n.length&&(t=new Ol("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ei=null,mi=null;function ig(e){Rf(e,0)}function oa(e){var n=rr(e);if(Nc(n))return e}function og(e,n){if(e==="change")return n}var Tf=!1;if(Wn){var ja;if(Wn){var za="oninput"in document;if(!za){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),za=typeof sd.oninput=="function"}ja=za}else ja=!1;Tf=ja&&(!document.documentMode||9<document.documentMode)}function ld(){ei&&(ei.detachEvent("onpropertychange",yf),mi=ei=null)}function yf(e){if(e.propertyName==="value"&&oa(mi)){var n=[];gf(n,mi,e,Al(e)),Yc(ig,n)}}function ag(e,n,t){e==="focusin"?(ld(),ei=n,mi=t,ei.attachEvent("onpropertychange",yf)):e==="focusout"&&ld()}function sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oa(mi)}function lg(e,n){if(e==="click")return oa(n)}function ug(e,n){if(e==="input"||e==="change")return oa(n)}function dg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mn=typeof Object.is=="function"?Object.is:dg;function hi(e,n){if(Mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!bs.call(n,i)||!Mn(e[i],n[i]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dd(e,n){var t=ud(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ud(t)}}function vf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ef(){for(var e=window,n=Co();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Co(e.document)}return n}function Gl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cg(e){var n=Ef(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&vf(t.ownerDocument.documentElement,t)){if(r!==null&&Gl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=dd(t,o);var a=dd(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fg=Wn&&"documentMode"in document&&11>=document.documentMode,nr=null,Gs=null,ni=null,js=!1;function cd(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;js||nr==null||nr!==Co(r)||(r=nr,"selectionStart"in r&&Gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&hi(ni,r)||(ni=r,r=Oo(Gs,"onSelect"),0<r.length&&(n=new Ol("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=nr)))}function ro(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var tr={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Ua={},bf={};Wn&&(bf=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function aa(e){if(Ua[e])return Ua[e];if(!tr[e])return e;var n=tr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bf)return Ua[e]=n[t];return e}var Mf=aa("animationend"),Lf=aa("animationiteration"),Hf=aa("animationstart"),Sf=aa("transitionend"),xf=new Map,fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,n){xf.set(e,n),Ut(n,[e])}for(var Ba=0;Ba<fd.length;Ba++){var Wa=fd[Ba],pg=Wa.toLowerCase(),mg=Wa[0].toUpperCase()+Wa.slice(1);bt(pg,"on"+mg)}bt(Mf,"onAnimationEnd");bt(Lf,"onAnimationIteration");bt(Hf,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Sf,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function pd(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ph(r,n,void 0,e),e.currentTarget=null}function Rf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;pd(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;pd(i,s,u),o=l}}}if(Do)throw e=Is,Do=!1,Is=null,e}function le(e,n){var t=n[$s];t===void 0&&(t=n[$s]=new Set);var r=e+"__bubble";t.has(r)||(wf(n,e,2,!1),t.add(r))}function $a(e,n,t){var r=0;n&&(r|=4),wf(t,e,r,n)}var io="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[io]){e[io]=!0,_c.forEach(function(t){t!=="selectionchange"&&(hg.has(t)||$a(t,!1,e),$a(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[io]||(n[io]=!0,$a("selectionchange",!1,n))}}function wf(e,n,t,r){switch(cf(n)){case 1:var i=Ph;break;case 4:i=Ch;break;default:i=Fl}t=i.bind(null,n,t,e),i=void 0,!Fs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Xa(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Dt(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Yc(function(){var u=o,c=Al(t),f=[];e:{var h=xf.get(e);if(h!==void 0){var T=Ol,g=e;switch(e){case"keypress":if(bo(t)===0)break e;case"keydown":case"keyup":T=Wh;break;case"focusin":g="focus",T=Ga;break;case"focusout":g="blur",T=Ga;break;case"beforeblur":case"afterblur":T=Ga;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Jh;break;case Mf:case Lf:case Hf:T=Ih;break;case Sf:T=Yh;break;case"scroll":T=Ah;break;case"wheel":T=qh;break;case"copy":case"cut":case"paste":T=Vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=rd}var v=(n&4)!==0,R=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var d=u,p;d!==null;){p=d;var E=p.stateNode;if(p.tag===5&&E!==null&&(p=E,m!==null&&(E=di(d,m),E!=null&&v.push(Ti(d,E,p)))),R)break;d=d.return}0<v.length&&(h=new T(h,g,null,t,c),f.push({event:h,listeners:v}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",h&&t!==ks&&(g=t.relatedTarget||t.fromElement)&&(Dt(g)||g[$n]))break e;if((T||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,T?(g=t.relatedTarget||t.toElement,T=u,g=g?Dt(g):null,g!==null&&(R=Bt(g),g!==R||g.tag!==5&&g.tag!==6)&&(g=null)):(T=null,g=u),T!==g)){if(v=nd,E="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=rd,E="onPointerLeave",m="onPointerEnter",d="pointer"),R=T==null?h:rr(T),p=g==null?h:rr(g),h=new v(E,d+"leave",T,t,c),h.target=R,h.relatedTarget=p,E=null,Dt(c)===u&&(v=new v(m,d+"enter",g,t,c),v.target=p,v.relatedTarget=R,E=v),R=E,T&&g)n:{for(v=T,m=g,d=0,p=v;p;p=Yt(p))d++;for(p=0,E=m;E;E=Yt(E))p++;for(;0<d-p;)v=Yt(v),d--;for(;0<p-d;)m=Yt(m),p--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break n;v=Yt(v),m=Yt(m)}v=null}else v=null;T!==null&&md(f,h,T,v,!1),g!==null&&R!==null&&md(f,R,g,v,!0)}}e:{if(h=u?rr(u):window,T=h.nodeName&&h.nodeName.toLowerCase(),T==="select"||T==="input"&&h.type==="file")var H=og;else if(ad(h))if(Tf)H=ug;else{H=sg;var S=ag}else(T=h.nodeName)&&T.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(H=lg);if(H&&(H=H(e,u))){gf(f,H,t,c);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&ws(h,"number",h.value)}switch(S=u?rr(u):window,e){case"focusin":(ad(S)||S.contentEditable==="true")&&(nr=S,Gs=u,ni=null);break;case"focusout":ni=Gs=nr=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,cd(f,t,c);break;case"selectionchange":if(fg)break;case"keydown":case"keyup":cd(f,t,c)}var b;if(Nl)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else er?mf(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(pf&&t.locale!=="ko"&&(er||L!=="onCompositionStart"?L==="onCompositionEnd"&&er&&(b=ff()):(at=c,Il="value"in at?at.value:at.textContent,er=!0)),S=Oo(u,L),0<S.length&&(L=new td(L,e,null,t,c),f.push({event:L,listeners:S}),b?L.data=b:(b=hf(t),b!==null&&(L.data=b)))),(b=eg?ng(e,t):tg(e,t))&&(u=Oo(u,"onBeforeInput"),0<u.length&&(c=new td("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=b))}Rf(f,n)})}function Ti(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Oo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=di(e,t),o!=null&&r.unshift(Ti(e,o,i)),o=di(e,n),o!=null&&r.push(Ti(e,o,i))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function md(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=di(t,o),l!=null&&a.unshift(Ti(t,l,s))):i||(l=di(t,o),l!=null&&a.push(Ti(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var gg=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function hd(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(Tg,"")}function oo(e,n,t){if(n=hd(n),hd(e)!==n&&t)throw Error(A(425))}function Vo(){}var zs=null,Us=null;function Bs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ws=typeof setTimeout=="function"?setTimeout:void 0,yg=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(e){return gd.resolve(null).then(e).catch(Eg)}:Ws;function Eg(e){setTimeout(function(){throw e})}function Ja(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),pi(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);pi(n)}function ft(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Td(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Pn="__reactFiber$"+xr,yi="__reactProps$"+xr,$n="__reactContainer$"+xr,$s="__reactEvents$"+xr,bg="__reactListeners$"+xr,Mg="__reactHandles$"+xr;function Dt(e){var n=e[Pn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$n]||t[Pn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Td(e);e!==null;){if(t=e[Pn])return t;e=Td(e)}return n}e=t,t=e.parentNode}return null}function Ai(e){return e=e[Pn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function sa(e){return e[yi]||null}var Xs=[],ir=-1;function Mt(e){return{current:e}}function de(e){0>ir||(e.current=Xs[ir],Xs[ir]=null,ir--)}function ae(e,n){ir++,Xs[ir]=e.current,e.current=n}var vt={},Fe=Mt(vt),Ue=Mt(!1),Ot=vt;function yr(e,n){var t=e.type.contextTypes;if(!t)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function No(){de(Ue),de(Fe)}function yd(e,n,t){if(Fe.current!==vt)throw Error(A(168));ae(Fe,n),ae(Ue,t)}function Pf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(A(108,ah(e)||"Unknown",i));return he({},t,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Ot=Fe.current,ae(Fe,e),ae(Ue,Ue.current),!0}function vd(e,n,t){var r=e.stateNode;if(!r)throw Error(A(169));t?(e=Pf(e,n,Ot),r.__reactInternalMemoizedMergedChildContext=e,de(Ue),de(Fe),ae(Fe,e)):de(Ue),ae(Ue,t)}var Nn=null,la=!1,Ka=!1;function Cf(e){Nn===null?Nn=[e]:Nn.push(e)}function Lg(e){la=!0,Cf(e)}function Lt(){if(!Ka&&Nn!==null){Ka=!0;var e=0,n=te;try{var t=Nn;for(te=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Nn=null,la=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),ef(Dl,Lt),i}finally{te=n,Ka=!1}}return null}var or=[],ar=0,jo=null,zo=0,on=[],an=0,Vt=null,zn=1,Un="";function Ct(e,n){or[ar++]=zo,or[ar++]=jo,jo=e,zo=n}function Af(e,n,t){on[an++]=zn,on[an++]=Un,on[an++]=Vt,Vt=e;var r=zn;e=Un;var i=32-vn(r)-1;r&=~(1<<i),t+=1;var o=32-vn(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zn=1<<32-vn(n)+i|t<<i|r,Un=o+e}else zn=1<<o|t<<i|r,Un=e}function jl(e){e.return!==null&&(Ct(e,1),Af(e,1,0))}function zl(e){for(;e===jo;)jo=or[--ar],or[ar]=null,zo=or[--ar],or[ar]=null;for(;e===Vt;)Vt=on[--an],on[an]=null,Un=on[--an],on[an]=null,zn=on[--an],on[an]=null}var Qe=null,Ke=null,fe=!1,yn=null;function Df(e,n){var t=ln(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ed(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Qe=e,Ke=ft(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Qe=e,Ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Vt!==null?{id:zn,overflow:Un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ln(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Qe=e,Ke=null,!0):!1;default:return!1}}function Js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if(fe){var n=Ke;if(n){var t=n;if(!Ed(e,n)){if(Js(e))throw Error(A(418));n=ft(t.nextSibling);var r=Qe;n&&Ed(e,n)?Df(r,t):(e.flags=e.flags&-4097|2,fe=!1,Qe=e)}}else{if(Js(e))throw Error(A(418));e.flags=e.flags&-4097|2,fe=!1,Qe=e}}}function bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function ao(e){if(e!==Qe)return!1;if(!fe)return bd(e),fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Bs(e.type,e.memoizedProps)),n&&(n=Ke)){if(Js(e))throw kf(),Error(A(418));for(;n;)Df(e,n),n=ft(n.nextSibling)}if(bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ke=ft(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ke=null}}else Ke=Qe?ft(e.stateNode.nextSibling):null;return!0}function kf(){for(var e=Ke;e;)e=ft(e.nextSibling)}function vr(){Ke=Qe=null,fe=!1}function Ul(e){yn===null?yn=[e]:yn.push(e)}var Hg=Kn.ReactCurrentBatchConfig;function hn(e,n){if(e&&e.defaultProps){n=he({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Uo=Mt(null),Bo=null,sr=null,Bl=null;function Wl(){Bl=sr=Bo=null}function $l(e){var n=Uo.current;de(Uo),e._currentValue=n}function Ys(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function hr(e,n){Bo=e,Bl=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ze=!0),e.firstContext=null)}function dn(e){var n=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:n,next:null},sr===null){if(Bo===null)throw Error(A(308));sr=e,Bo.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return n}var kt=null;function Xl(e){kt===null?kt=[e]:kt.push(e)}function _f(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Xl(n)):(t.next=i.next,i.next=t),n.interleaved=t,Xn(e,r)}function Xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var rt=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ff(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Xn(e,t)}return i=r.interleaved,i===null?(n.next=n,Xl(r)):(n.next=i.next,i.next=n),r.interleaved=n,Xn(e,t)}function Mo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}function Md(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Wo(e,n,t,r){var i=e.updateQueue;rt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,T=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:T,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,v=s;switch(h=n,T=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(T,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(T,f,h):g,h==null)break e;f=he({},f,h);break e;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else T={eventTime:T,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=T,l=f):c=c.next=T,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Gt|=a,e.lanes=a,e.memoizedState=f}}function Ld(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var If=new kc.Component().refs;function Qs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:he({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ua={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ve(),i=ht(e),o=Bn(r,i);o.payload=n,t!=null&&(o.callback=t),n=pt(e,o,i),n!==null&&(En(n,e,i,r),Mo(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ve(),i=ht(e),o=Bn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=pt(e,o,i),n!==null&&(En(n,e,i,r),Mo(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ve(),r=ht(e),i=Bn(t,r);i.tag=2,n!=null&&(i.callback=n),n=pt(e,i,r),n!==null&&(En(n,e,r,t),Mo(n,e,r))}};function Hd(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!hi(t,r)||!hi(i,o):!0}function Of(e,n,t){var r=!1,i=vt,o=n.contextType;return typeof o=="object"&&o!==null?o=dn(o):(i=Be(n)?Ot:Fe.current,r=n.contextTypes,o=(r=r!=null)?yr(e,i):vt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ua,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Sd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ua.enqueueReplaceState(n,n.state,null)}function qs(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=If,Jl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=dn(o):(o=Be(n)?Ot:Fe.current,i.context=yr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Qs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ua.enqueueReplaceState(i,i.state,null),Wo(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(A(309));var r=t.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var s=i.refs;s===If&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(A(284));if(!t._owner)throw Error(A(290,e))}return e}function so(e,n){throw e=Object.prototype.toString.call(n),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function xd(e){var n=e._init;return n(e._payload)}function Vf(e){function n(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function t(m,d){if(!e)return null;for(;d!==null;)n(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=gt(m,d),m.index=0,m.sibling=null,m}function o(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,p,E){return d===null||d.tag!==6?(d=ts(p,m.mode,E),d.return=m,d):(d=i(d,p),d.return=m,d)}function l(m,d,p,E){var H=p.type;return H===Zt?c(m,d,p.props.children,E,p.key):d!==null&&(d.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===tt&&xd(H)===d.type)?(E=i(d,p.props),E.ref=Nr(m,d,p),E.return=m,E):(E=wo(p.type,p.key,p.props,null,m.mode,E),E.ref=Nr(m,d,p),E.return=m,E)}function u(m,d,p,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=rs(p,m.mode,E),d.return=m,d):(d=i(d,p.children||[]),d.return=m,d)}function c(m,d,p,E,H){return d===null||d.tag!==7?(d=It(p,m.mode,E,H),d.return=m,d):(d=i(d,p),d.return=m,d)}function f(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ts(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yi:return p=wo(d.type,d.key,d.props,null,m.mode,p),p.ref=Nr(m,null,d),p.return=m,p;case qt:return d=rs(d,m.mode,p),d.return=m,d;case tt:var E=d._init;return f(m,E(d._payload),p)}if(Xr(d)||_r(d))return d=It(d,m.mode,p,null),d.return=m,d;so(m,d)}return null}function h(m,d,p,E){var H=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return H!==null?null:s(m,d,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:return p.key===H?l(m,d,p,E):null;case qt:return p.key===H?u(m,d,p,E):null;case tt:return H=p._init,h(m,d,H(p._payload),E)}if(Xr(p)||_r(p))return H!==null?null:c(m,d,p,E,null);so(m,p)}return null}function T(m,d,p,E,H){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(p)||null,s(d,m,""+E,H);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Yi:return m=m.get(E.key===null?p:E.key)||null,l(d,m,E,H);case qt:return m=m.get(E.key===null?p:E.key)||null,u(d,m,E,H);case tt:var S=E._init;return T(m,d,p,S(E._payload),H)}if(Xr(E)||_r(E))return m=m.get(p)||null,c(d,m,E,H,null);so(d,E)}return null}function g(m,d,p,E){for(var H=null,S=null,b=d,L=d=0,w=null;b!==null&&L<p.length;L++){b.index>L?(w=b,b=null):w=b.sibling;var C=h(m,b,p[L],E);if(C===null){b===null&&(b=w);break}e&&b&&C.alternate===null&&n(m,b),d=o(C,d,L),S===null?H=C:S.sibling=C,S=C,b=w}if(L===p.length)return t(m,b),fe&&Ct(m,L),H;if(b===null){for(;L<p.length;L++)b=f(m,p[L],E),b!==null&&(d=o(b,d,L),S===null?H=b:S.sibling=b,S=b);return fe&&Ct(m,L),H}for(b=r(m,b);L<p.length;L++)w=T(b,m,L,p[L],E),w!==null&&(e&&w.alternate!==null&&b.delete(w.key===null?L:w.key),d=o(w,d,L),S===null?H=w:S.sibling=w,S=w);return e&&b.forEach(function(O){return n(m,O)}),fe&&Ct(m,L),H}function v(m,d,p,E){var H=_r(p);if(typeof H!="function")throw Error(A(150));if(p=H.call(p),p==null)throw Error(A(151));for(var S=H=null,b=d,L=d=0,w=null,C=p.next();b!==null&&!C.done;L++,C=p.next()){b.index>L?(w=b,b=null):w=b.sibling;var O=h(m,b,C.value,E);if(O===null){b===null&&(b=w);break}e&&b&&O.alternate===null&&n(m,b),d=o(O,d,L),S===null?H=O:S.sibling=O,S=O,b=w}if(C.done)return t(m,b),fe&&Ct(m,L),H;if(b===null){for(;!C.done;L++,C=p.next())C=f(m,C.value,E),C!==null&&(d=o(C,d,L),S===null?H=C:S.sibling=C,S=C);return fe&&Ct(m,L),H}for(b=r(m,b);!C.done;L++,C=p.next())C=T(b,m,L,C.value,E),C!==null&&(e&&C.alternate!==null&&b.delete(C.key===null?L:C.key),d=o(C,d,L),S===null?H=C:S.sibling=C,S=C);return e&&b.forEach(function(U){return n(m,U)}),fe&&Ct(m,L),H}function R(m,d,p,E){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:e:{for(var H=p.key,S=d;S!==null;){if(S.key===H){if(H=p.type,H===Zt){if(S.tag===7){t(m,S.sibling),d=i(S,p.props.children),d.return=m,m=d;break e}}else if(S.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===tt&&xd(H)===S.type){t(m,S.sibling),d=i(S,p.props),d.ref=Nr(m,S,p),d.return=m,m=d;break e}t(m,S);break}else n(m,S);S=S.sibling}p.type===Zt?(d=It(p.props.children,m.mode,E,p.key),d.return=m,m=d):(E=wo(p.type,p.key,p.props,null,m.mode,E),E.ref=Nr(m,d,p),E.return=m,m=E)}return a(m);case qt:e:{for(S=p.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(m,d.sibling),d=i(d,p.children||[]),d.return=m,m=d;break e}else{t(m,d);break}else n(m,d);d=d.sibling}d=rs(p,m.mode,E),d.return=m,m=d}return a(m);case tt:return S=p._init,R(m,d,S(p._payload),E)}if(Xr(p))return g(m,d,p,E);if(_r(p))return v(m,d,p,E);so(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(m,d.sibling),d=i(d,p),d.return=m,m=d):(t(m,d),d=ts(p,m.mode,E),d.return=m,m=d),a(m)):t(m,d)}return R}var Er=Vf(!0),Nf=Vf(!1),Di={},An=Mt(Di),vi=Mt(Di),Ei=Mt(Di);function _t(e){if(e===Di)throw Error(A(174));return e}function Kl(e,n){switch(ae(Ei,n),ae(vi,e),ae(An,Di),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cs(n,e)}de(An),ae(An,n)}function br(){de(An),de(vi),de(Ei)}function Gf(e){_t(Ei.current);var n=_t(An.current),t=Cs(n,e.type);n!==t&&(ae(vi,e),ae(An,t))}function Yl(e){vi.current===e&&(de(An),de(vi))}var pe=Mt(0);function $o(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ya=[];function Ql(){for(var e=0;e<Ya.length;e++)Ya[e]._workInProgressVersionPrimary=null;Ya.length=0}var Lo=Kn.ReactCurrentDispatcher,Qa=Kn.ReactCurrentBatchConfig,Nt=0,me=null,Le=null,xe=null,Xo=!1,ti=!1,bi=0,Sg=0;function Ae(){throw Error(A(321))}function ql(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Mn(e[t],n[t]))return!1;return!0}function Zl(e,n,t,r,i,o){if(Nt=o,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Lo.current=e===null||e.memoizedState===null?Pg:Cg,e=t(r,i),ti){o=0;do{if(ti=!1,bi=0,25<=o)throw Error(A(301));o+=1,xe=Le=null,n.updateQueue=null,Lo.current=Ag,e=t(r,i)}while(ti)}if(Lo.current=Jo,n=Le!==null&&Le.next!==null,Nt=0,xe=Le=me=null,Xo=!1,n)throw Error(A(300));return e}function eu(){var e=bi!==0;return bi=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?me.memoizedState=xe=e:xe=xe.next=e,xe}function cn(){if(Le===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=xe===null?me.memoizedState:xe.next;if(n!==null)xe=n,Le=e;else{if(e===null)throw Error(A(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},xe===null?me.memoizedState=xe=e:xe=xe.next=e}return xe}function Mi(e,n){return typeof n=="function"?n(e):n}function qa(e){var n=cn(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Nt&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,me.lanes|=c,Gt|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Mn(r,n.memoizedState)||(ze=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Gt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Za(e){var n=cn(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Mn(o,n.memoizedState)||(ze=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function jf(){}function zf(e,n){var t=me,r=cn(),i=n(),o=!Mn(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,nu(Wf.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,Li(9,Bf.bind(null,t,r,i,n),void 0,null),Re===null)throw Error(A(349));Nt&30||Uf(t,n,i)}return i}function Uf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=me.updateQueue,n===null?(n={lastEffect:null,stores:null},me.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Bf(e,n,t,r){n.value=t,n.getSnapshot=r,$f(n)&&Xf(e)}function Wf(e,n,t){return t(function(){$f(n)&&Xf(e)})}function $f(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Mn(e,t)}catch{return!0}}function Xf(e){var n=Xn(e,1);n!==null&&En(n,e,1,-1)}function Rd(e){var n=wn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},n.queue=e,e=e.dispatch=wg.bind(null,me,e),[n.memoizedState,e]}function Li(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=me.updateQueue,n===null?(n={lastEffect:null,stores:null},me.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Jf(){return cn().memoizedState}function Ho(e,n,t,r){var i=wn();me.flags|=e,i.memoizedState=Li(1|n,t,void 0,r===void 0?null:r)}function da(e,n,t,r){var i=cn();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&ql(r,a.deps)){i.memoizedState=Li(n,t,o,r);return}}me.flags|=e,i.memoizedState=Li(1|n,t,o,r)}function wd(e,n){return Ho(8390656,8,e,n)}function nu(e,n){return da(2048,8,e,n)}function Kf(e,n){return da(4,2,e,n)}function Yf(e,n){return da(4,4,e,n)}function Qf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qf(e,n,t){return t=t!=null?t.concat([e]):null,da(4,4,Qf.bind(null,n,e),t)}function tu(){}function Zf(e,n){var t=cn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ql(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ep(e,n){var t=cn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ql(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function np(e,n,t){return Nt&21?(Mn(t,n)||(t=rf(),me.lanes|=t,Gt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=t)}function xg(e,n){var t=te;te=t!==0&&4>t?t:4,e(!0);var r=Qa.transition;Qa.transition={};try{e(!1),n()}finally{te=t,Qa.transition=r}}function tp(){return cn().memoizedState}function Rg(e,n,t){var r=ht(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},rp(e))ip(n,t);else if(t=_f(e,n,t,r),t!==null){var i=Ve();En(t,e,r,i),op(t,n,r)}}function wg(e,n,t){var r=ht(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(rp(e))ip(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,s=o(a,t);if(i.hasEagerState=!0,i.eagerState=s,Mn(s,a)){var l=n.interleaved;l===null?(i.next=i,Xl(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=_f(e,n,i,r),t!==null&&(i=Ve(),En(t,e,r,i),op(t,n,r))}}function rp(e){var n=e.alternate;return e===me||n!==null&&n===me}function ip(e,n){ti=Xo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function op(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,kl(e,t)}}var Jo={readContext:dn,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Pg={readContext:dn,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:dn,useEffect:wd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ho(4194308,4,Qf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ho(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ho(4,2,e,n)},useMemo:function(e,n){var t=wn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=wn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Rg.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:Rd,useDebugValue:tu,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=Rd(!1),n=e[0];return e=xg.bind(null,e[1]),wn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=me,i=wn();if(fe){if(t===void 0)throw Error(A(407));t=t()}else{if(t=n(),Re===null)throw Error(A(349));Nt&30||Uf(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,wd(Wf.bind(null,r,o,e),[e]),r.flags|=2048,Li(9,Bf.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=wn(),n=Re.identifierPrefix;if(fe){var t=Un,r=zn;t=(r&~(1<<32-vn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=bi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Sg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Cg={readContext:dn,useCallback:Zf,useContext:dn,useEffect:nu,useImperativeHandle:qf,useInsertionEffect:Kf,useLayoutEffect:Yf,useMemo:ep,useReducer:qa,useRef:Jf,useState:function(){return qa(Mi)},useDebugValue:tu,useDeferredValue:function(e){var n=cn();return np(n,Le.memoizedState,e)},useTransition:function(){var e=qa(Mi)[0],n=cn().memoizedState;return[e,n]},useMutableSource:jf,useSyncExternalStore:zf,useId:tp,unstable_isNewReconciler:!1},Ag={readContext:dn,useCallback:Zf,useContext:dn,useEffect:nu,useImperativeHandle:qf,useInsertionEffect:Kf,useLayoutEffect:Yf,useMemo:ep,useReducer:Za,useRef:Jf,useState:function(){return Za(Mi)},useDebugValue:tu,useDeferredValue:function(e){var n=cn();return Le===null?n.memoizedState=e:np(n,Le.memoizedState,e)},useTransition:function(){var e=Za(Mi)[0],n=cn().memoizedState;return[e,n]},useMutableSource:jf,useSyncExternalStore:zf,useId:tp,unstable_isNewReconciler:!1};function Mr(e,n){try{var t="",r=n;do t+=oh(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function es(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Zs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Dg=typeof WeakMap=="function"?WeakMap:Map;function ap(e,n,t){t=Bn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Yo||(Yo=!0,ul=r),Zs(e,n)},t}function sp(e,n,t){t=Bn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Zs(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Zs(e,n),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Pd(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Dg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=$g.bind(null,e,n,t),n.then(e,e))}function Cd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ad(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Bn(-1,1),n.tag=2,pt(t,n,1))),t.lanes|=1),e)}var kg=Kn.ReactCurrentOwner,ze=!1;function Oe(e,n,t,r){n.child=e===null?Nf(n,null,t,r):Er(n,e.child,t,r)}function Dd(e,n,t,r,i){t=t.render;var o=n.ref;return hr(n,i),r=Zl(e,n,t,r,o,i),t=eu(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Jn(e,n,i)):(fe&&t&&jl(n),n.flags|=1,Oe(e,n,r,i),n.child)}function kd(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!du(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,lp(e,n,o,r,i)):(e=wo(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:hi,t(a,r)&&e.ref===n.ref)return Jn(e,n,i)}return n.flags|=1,e=gt(o,r),e.ref=n.ref,e.return=n,n.child=e}function lp(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(hi(o,r)&&e.ref===n.ref)if(ze=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return n.lanes=e.lanes,Jn(e,n,i)}return el(e,n,t,r,i)}function up(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(ur,$e),$e|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(ur,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ae(ur,$e),$e|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ae(ur,$e),$e|=r;return Oe(e,n,i,t),n.child}function dp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function el(e,n,t,r,i){var o=Be(t)?Ot:Fe.current;return o=yr(n,o),hr(n,i),t=Zl(e,n,t,r,o,i),r=eu(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Jn(e,n,i)):(fe&&r&&jl(n),n.flags|=1,Oe(e,n,t,i),n.child)}function _d(e,n,t,r,i){if(Be(t)){var o=!0;Go(n)}else o=!1;if(hr(n,i),n.stateNode===null)So(e,n),Of(n,t,r),qs(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=dn(u):(u=Be(t)?Ot:Fe.current,u=yr(n,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Sd(n,a,r,u),rt=!1;var h=n.memoizedState;a.state=h,Wo(n,r,a,i),l=n.memoizedState,s!==r||h!==l||Ue.current||rt?(typeof c=="function"&&(Qs(n,t,c,r),l=n.memoizedState),(s=rt||Hd(n,t,s,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Ff(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:hn(n.type,s),a.props=u,f=n.pendingProps,h=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=dn(l):(l=Be(t)?Ot:Fe.current,l=yr(n,l));var T=t.getDerivedStateFromProps;(c=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Sd(n,a,r,l),rt=!1,h=n.memoizedState,a.state=h,Wo(n,r,a,i);var g=n.memoizedState;s!==f||h!==g||Ue.current||rt?(typeof T=="function"&&(Qs(n,t,T,r),g=n.memoizedState),(u=rt||Hd(n,t,u,r,h,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return nl(e,n,t,r,o,i)}function nl(e,n,t,r,i,o){dp(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&vd(n,t,!1),Jn(e,n,o);r=n.stateNode,kg.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Er(n,e.child,null,o),n.child=Er(n,null,s,o)):Oe(e,n,s,o),n.memoizedState=r.state,i&&vd(n,t,!0),n.child}function cp(e){var n=e.stateNode;n.pendingContext?yd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&yd(e,n.context,!1),Kl(e,n.containerInfo)}function Fd(e,n,t,r,i){return vr(),Ul(i),n.flags|=256,Oe(e,n,t,r),n.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function fp(e,n,t){var r=n.pendingProps,i=pe.current,o=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(pe,i&1),e===null)return Ks(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=pa(a,r,0,null),e=It(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=rl(t),n.memoizedState=tl,e):ru(n,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return _g(e,n,a,r,s,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=gt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=gt(s,o):(o=It(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?rl(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=tl,r}return o=e.child,e=o.sibling,r=gt(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ru(e,n){return n=pa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function lo(e,n,t,r){return r!==null&&Ul(r),Er(n,e.child,null,t),e=ru(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _g(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=es(Error(A(422))),lo(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=pa({mode:"visible",children:r.children},i,0,null),o=It(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Er(n,e.child,null,a),n.child.memoizedState=rl(a),n.memoizedState=tl,o);if(!(n.mode&1))return lo(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(A(419)),r=es(o,r,void 0),lo(e,n,a,r)}if(s=(a&e.childLanes)!==0,ze||s){if(r=Re,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xn(e,i),En(r,e,i,-1))}return uu(),r=es(Error(A(421))),lo(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Xg.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ke=ft(i.nextSibling),Qe=n,fe=!0,yn=null,e!==null&&(on[an++]=zn,on[an++]=Un,on[an++]=Vt,zn=e.id,Un=e.overflow,Vt=n),n=ru(n,r.children),n.flags|=4096,n)}function Id(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ys(e.return,n,t)}function ns(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function pp(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(Oe(e,n,r.children,t),r=pe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,t,n);else if(e.tag===19)Id(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(pe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&$o(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ns(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&$o(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ns(n,!0,t,null,o);break;case"together":ns(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function So(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(A(153));if(n.child!==null){for(e=n.child,t=gt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Fg(e,n,t){switch(n.tag){case 3:cp(n),vr();break;case 5:Gf(n);break;case 1:Be(n.type)&&Go(n);break;case 4:Kl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ae(Uo,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),n.flags|=128,null):t&n.child.childLanes?fp(e,n,t):(ae(pe,pe.current&1),e=Jn(e,n,t),e!==null?e.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return pp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return n.lanes=0,up(e,n,t)}return Jn(e,n,t)}var mp,il,hp,gp;mp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};il=function(){};hp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,_t(An.current);var o=null;switch(t){case"input":i=xs(e,i),r=xs(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=Ps(e,i),r=Ps(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vo)}As(t,r);var a;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(o||(o=[]),o.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};gp=function(e,n,t,r){t!==r&&(n.flags|=4)};function Gr(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ig(e,n,t){var r=n.pendingProps;switch(zl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(n),null;case 1:return Be(n.type)&&No(),De(n),null;case 3:return r=n.stateNode,br(),de(Ue),de(Fe),Ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,yn!==null&&(fl(yn),yn=null))),il(e,n),De(n),null;case 5:Yl(n);var i=_t(Ei.current);if(t=n.type,e!==null&&n.stateNode!=null)hp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(A(166));return De(n),null}if(e=_t(An.current),ao(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Pn]=n,r[yi]=o,e=(n.mode&1)!==0,t){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)le(Kr[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Wu(r,o),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},le("invalid",r);break;case"textarea":Xu(r,o),le("invalid",r)}As(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&oo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&oo(r.textContent,s,e),i=["children",""+s]):li.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&le("scroll",r)}switch(t){case"input":Qi(r),$u(r,o,!0);break;case"textarea":Qi(r),Ju(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vo)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Pn]=n,e[yi]=r,mp(e,n,!1,!1),n.stateNode=e;e:{switch(a=Ds(t,r),t){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)le(Kr[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":Wu(e,r),i=xs(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),le("invalid",e);break;case"textarea":Xu(e,r),i=Ps(e,r),le("invalid",e);break;default:i=r}As(t,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Wc(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Uc(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ui(e,l):typeof l=="number"&&ui(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(li.hasOwnProperty(o)?l!=null&&o==="onScroll"&&le("scroll",e):l!=null&&Rl(e,o,l,a))}switch(t){case"input":Qi(e),$u(e,r,!1);break;case"textarea":Qi(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return De(n),null;case 6:if(e&&n.stateNode!=null)gp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(A(166));if(t=_t(Ei.current),_t(An.current),ao(n)){if(r=n.stateNode,t=n.memoizedProps,r[Pn]=n,(o=r.nodeValue!==t)&&(e=Qe,e!==null))switch(e.tag){case 3:oo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Pn]=n,n.stateNode=r}return De(n),null;case 13:if(de(pe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Ke!==null&&n.mode&1&&!(n.flags&128))kf(),vr(),n.flags|=98560,o=!1;else if(o=ao(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Pn]=n}else vr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;De(n),o=!1}else yn!==null&&(fl(yn),yn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||pe.current&1?Se===0&&(Se=3):uu())),n.updateQueue!==null&&(n.flags|=4),De(n),null);case 4:return br(),il(e,n),e===null&&gi(n.stateNode.containerInfo),De(n),null;case 10:return $l(n.type._context),De(n),null;case 17:return Be(n.type)&&No(),De(n),null;case 19:if(de(pe),o=n.memoizedState,o===null)return De(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)Gr(o,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=$o(e),a!==null){for(n.flags|=128,Gr(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(pe,pe.current&1|2),n.child}e=e.sibling}o.tail!==null&&ye()>Lr&&(n.flags|=128,r=!0,Gr(o,!1),n.lanes=4194304)}else{if(!r)if(e=$o(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!fe)return De(n),null}else 2*ye()-o.renderingStartTime>Lr&&t!==1073741824&&(n.flags|=128,r=!0,Gr(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ye(),n.sibling=null,t=pe.current,ae(pe,r?t&1|2:t&1),n):(De(n),null);case 22:case 23:return lu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?$e&1073741824&&(De(n),n.subtreeFlags&6&&(n.flags|=8192)):De(n),null;case 24:return null;case 25:return null}throw Error(A(156,n.tag))}function Og(e,n){switch(zl(n),n.tag){case 1:return Be(n.type)&&No(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return br(),de(Ue),de(Fe),Ql(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Yl(n),null;case 13:if(de(pe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(A(340));vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(pe),null;case 4:return br(),null;case 10:return $l(n.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var uo=!1,_e=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,N=null;function lr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Te(e,n,r)}else t.current=null}function ol(e,n,t){try{t()}catch(r){Te(e,n,r)}}var Od=!1;function Ng(e,n){if(zs=Fo,e=Ef(),Gl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,h=null;n:for(;;){for(var T;f!==t||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(T=f.firstChild)!==null;)h=f,f=T;for(;;){if(f===e)break n;if(h===t&&++u===i&&(s=a),h===o&&++c===r&&(l=a),(T=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=T}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Us={focusedElem:e,selectionRange:t},Fo=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,R=g.memoizedState,m=n.stateNode,d=m.getSnapshotBeforeUpdate(n.elementType===n.type?v:hn(n.type,v),R);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){Te(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return g=Od,Od=!1,g}function ri(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ol(n,t,o)}i=i.next}while(i!==r)}}function ca(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function al(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Tp(e){var n=e.alternate;n!==null&&(e.alternate=null,Tp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Pn],delete n[yi],delete n[$s],delete n[bg],delete n[Mg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yp(e){return e.tag===5||e.tag===3||e.tag===4}function Vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vo));else if(r!==4&&(e=e.child,e!==null))for(sl(e,n,t),e=e.sibling;e!==null;)sl(e,n,t),e=e.sibling}function ll(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ll(e,n,t),e=e.sibling;e!==null;)ll(e,n,t),e=e.sibling}var we=null,Tn=!1;function et(e,n,t){for(t=t.child;t!==null;)vp(e,n,t),t=t.sibling}function vp(e,n,t){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(ra,t)}catch{}switch(t.tag){case 5:_e||lr(t,n);case 6:var r=we,i=Tn;we=null,et(e,n,t),we=r,Tn=i,we!==null&&(Tn?(e=we,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):we.removeChild(t.stateNode));break;case 18:we!==null&&(Tn?(e=we,t=t.stateNode,e.nodeType===8?Ja(e.parentNode,t):e.nodeType===1&&Ja(e,t),pi(e)):Ja(we,t.stateNode));break;case 4:r=we,i=Tn,we=t.stateNode.containerInfo,Tn=!0,et(e,n,t),we=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ol(t,n,a),i=i.next}while(i!==r)}et(e,n,t);break;case 1:if(!_e&&(lr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Te(t,n,s)}et(e,n,t);break;case 21:et(e,n,t);break;case 22:t.mode&1?(_e=(r=_e)||t.memoizedState!==null,et(e,n,t),_e=r):et(e,n,t);break;default:et(e,n,t)}}function Nd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Vg),n.forEach(function(r){var i=Jg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function pn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,Tn=!1;break e;case 3:we=s.stateNode.containerInfo,Tn=!0;break e;case 4:we=s.stateNode.containerInfo,Tn=!0;break e}s=s.return}if(we===null)throw Error(A(160));vp(o,a,i),we=null,Tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ep(n,e),n=n.sibling}function Ep(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(n,e),Rn(e),r&4){try{ri(3,e,e.return),ca(3,e)}catch(v){Te(e,e.return,v)}try{ri(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:pn(n,e),Rn(e),r&512&&t!==null&&lr(t,t.return);break;case 5:if(pn(n,e),Rn(e),r&512&&t!==null&&lr(t,t.return),e.flags&32){var i=e.stateNode;try{ui(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Gc(i,o),Ds(s,a);var u=Ds(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Wc(i,f):c==="dangerouslySetInnerHTML"?Uc(i,f):c==="children"?ui(i,f):Rl(i,c,f,u)}switch(s){case"input":Rs(i,o);break;case"textarea":jc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?cr(i,!!o.multiple,T,!1):h!==!!o.multiple&&(o.defaultValue!=null?cr(i,!!o.multiple,o.defaultValue,!0):cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[yi]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(pn(n,e),Rn(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(pn(n,e),Rn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{pi(n.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:pn(n,e),Rn(e);break;case 13:pn(n,e),Rn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(au=ye())),r&4&&Nd(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,pn(n,e),_e=u):pn(n,e),Rn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(N=e,c=e.child;c!==null;){for(f=N=c;N!==null;){switch(h=N,T=h.child,h.tag){case 0:case 11:case 14:case 15:ri(4,h,h.return);break;case 1:lr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(v){Te(r,t,v)}}break;case 5:lr(h,h.return);break;case 22:if(h.memoizedState!==null){jd(f);continue}}T!==null?(T.return=h,N=T):jd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Bc("display",a))}catch(v){Te(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Te(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pn(n,e),Rn(e),r&4&&Nd(e);break;case 21:break;default:pn(n,e),Rn(e)}}function Rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yp(t)){var r=t;break e}t=t.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ui(i,""),r.flags&=-33);var o=Vd(e);ll(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Vd(e);sl(e,s,a);break;default:throw Error(A(161))}}catch(l){Te(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gg(e,n,t){N=e,bp(e)}function bp(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||uo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||_e;s=uo;var u=_e;if(uo=a,(_e=l)&&!u)for(N=i;N!==null;)a=N,l=a.child,a.tag===22&&a.memoizedState!==null?zd(i):l!==null?(l.return=a,N=l):zd(i);for(;o!==null;)N=o,bp(o),o=o.sibling;N=i,uo=s,_e=u}Gd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Gd(e)}}function Gd(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:_e||ca(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!_e)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:hn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ld(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ld(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&pi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}_e||n.flags&512&&al(n)}catch(h){Te(n,n.return,h)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function jd(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function zd(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ca(4,n)}catch(l){Te(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(l){Te(n,i,l)}}var o=n.return;try{al(n)}catch(l){Te(n,o,l)}break;case 5:var a=n.return;try{al(n)}catch(l){Te(n,a,l)}}}catch(l){Te(n,n.return,l)}if(n===e){N=null;break}var s=n.sibling;if(s!==null){s.return=n.return,N=s;break}N=n.return}}var jg=Math.ceil,Ko=Kn.ReactCurrentDispatcher,iu=Kn.ReactCurrentOwner,un=Kn.ReactCurrentBatchConfig,ee=0,Re=null,Ee=null,Pe=0,$e=0,ur=Mt(0),Se=0,Hi=null,Gt=0,fa=0,ou=0,ii=null,je=null,au=0,Lr=1/0,Vn=null,Yo=!1,ul=null,mt=null,co=!1,st=null,Qo=0,oi=0,dl=null,xo=-1,Ro=0;function Ve(){return ee&6?ye():xo!==-1?xo:xo=ye()}function ht(e){return e.mode&1?ee&2&&Pe!==0?Pe&-Pe:Hg.transition!==null?(Ro===0&&(Ro=rf()),Ro):(e=te,e!==0||(e=window.event,e=e===void 0?16:cf(e.type)),e):1}function En(e,n,t,r){if(50<oi)throw oi=0,dl=null,Error(A(185));Pi(e,t,r),(!(ee&2)||e!==Re)&&(e===Re&&(!(ee&2)&&(fa|=t),Se===4&&ot(e,Pe)),We(e,r),t===1&&ee===0&&!(n.mode&1)&&(Lr=ye()+500,la&&Lt()))}function We(e,n){var t=e.callbackNode;Hh(e,n);var r=_o(e,e===Re?Pe:0);if(r===0)t!==null&&Qu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Qu(t),n===1)e.tag===0?Lg(Ud.bind(null,e)):Cf(Ud.bind(null,e)),vg(function(){!(ee&6)&&Lt()}),t=null;else{switch(of(r)){case 1:t=Dl;break;case 4:t=nf;break;case 16:t=ko;break;case 536870912:t=tf;break;default:t=ko}t=Pp(t,Mp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Mp(e,n){if(xo=-1,Ro=0,ee&6)throw Error(A(327));var t=e.callbackNode;if(gr()&&e.callbackNode!==t)return null;var r=_o(e,e===Re?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=qo(e,r);else{n=r;var i=ee;ee|=2;var o=Hp();(Re!==e||Pe!==n)&&(Vn=null,Lr=ye()+500,Ft(e,n));do try{Bg();break}catch(s){Lp(e,s)}while(1);Wl(),Ko.current=o,ee=i,Ee!==null?n=0:(Re=null,Pe=0,n=Se)}if(n!==0){if(n===2&&(i=Os(e),i!==0&&(r=i,n=cl(e,i))),n===1)throw t=Hi,Ft(e,0),ot(e,r),We(e,ye()),t;if(n===6)ot(e,r);else{if(i=e.current.alternate,!(r&30)&&!zg(i)&&(n=qo(e,r),n===2&&(o=Os(e),o!==0&&(r=o,n=cl(e,o))),n===1))throw t=Hi,Ft(e,0),ot(e,r),We(e,ye()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(A(345));case 2:At(e,je,Vn);break;case 3:if(ot(e,r),(r&130023424)===r&&(n=au+500-ye(),10<n)){if(_o(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ws(At.bind(null,e,je,Vn),n);break}At(e,je,Vn);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-vn(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jg(r/1960))-r,10<r){e.timeoutHandle=Ws(At.bind(null,e,je,Vn),r);break}At(e,je,Vn);break;case 5:At(e,je,Vn);break;default:throw Error(A(329))}}}return We(e,ye()),e.callbackNode===t?Mp.bind(null,e):null}function cl(e,n){var t=ii;return e.current.memoizedState.isDehydrated&&(Ft(e,n).flags|=256),e=qo(e,n),e!==2&&(n=je,je=t,n!==null&&fl(n)),e}function fl(e){je===null?je=e:je.push.apply(je,e)}function zg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Mn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ot(e,n){for(n&=~ou,n&=~fa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-vn(n),r=1<<t;e[t]=-1,n&=~r}}function Ud(e){if(ee&6)throw Error(A(327));gr();var n=_o(e,0);if(!(n&1))return We(e,ye()),null;var t=qo(e,n);if(e.tag!==0&&t===2){var r=Os(e);r!==0&&(n=r,t=cl(e,r))}if(t===1)throw t=Hi,Ft(e,0),ot(e,n),We(e,ye()),t;if(t===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,At(e,je,Vn),We(e,ye()),null}function su(e,n){var t=ee;ee|=1;try{return e(n)}finally{ee=t,ee===0&&(Lr=ye()+500,la&&Lt())}}function jt(e){st!==null&&st.tag===0&&!(ee&6)&&gr();var n=ee;ee|=1;var t=un.transition,r=te;try{if(un.transition=null,te=1,e)return e()}finally{te=r,un.transition=t,ee=n,!(ee&6)&&Lt()}}function lu(){$e=ur.current,de(ur)}function Ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,yg(t)),Ee!==null)for(t=Ee.return;t!==null;){var r=t;switch(zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&No();break;case 3:br(),de(Ue),de(Fe),Ql();break;case 5:Yl(r);break;case 4:br();break;case 13:de(pe);break;case 19:de(pe);break;case 10:$l(r.type._context);break;case 22:case 23:lu()}t=t.return}if(Re=e,Ee=e=gt(e.current,null),Pe=$e=n,Se=0,Hi=null,ou=fa=Gt=0,je=ii=null,kt!==null){for(n=0;n<kt.length;n++)if(t=kt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}kt=null}return e}function Lp(e,n){do{var t=Ee;try{if(Wl(),Lo.current=Jo,Xo){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xo=!1}if(Nt=0,xe=Le=me=null,ti=!1,bi=0,iu.current=null,t===null||t.return===null){Se=1,Hi=n,Ee=null;break}e:{var o=e,a=t.return,s=t,l=n;if(n=Pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var T=Cd(a);if(T!==null){T.flags&=-257,Ad(T,a,s,o,n),T.mode&1&&Pd(o,u,n),n=T,l=u;var g=n.updateQueue;if(g===null){var v=new Set;v.add(l),n.updateQueue=v}else g.add(l);break e}else{if(!(n&1)){Pd(o,u,n),uu();break e}l=Error(A(426))}}else if(fe&&s.mode&1){var R=Cd(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ad(R,a,s,o,n),Ul(Mr(l,s));break e}}o=l=Mr(l,s),Se!==4&&(Se=2),ii===null?ii=[o]:ii.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=ap(o,l,n);Md(o,m);break e;case 1:s=l;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mt===null||!mt.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var E=sp(o,s,n);Md(o,E);break e}}o=o.return}while(o!==null)}xp(t)}catch(H){n=H,Ee===t&&t!==null&&(Ee=t=t.return);continue}break}while(1)}function Hp(){var e=Ko.current;return Ko.current=Jo,e===null?Jo:e}function uu(){(Se===0||Se===3||Se===2)&&(Se=4),Re===null||!(Gt&268435455)&&!(fa&268435455)||ot(Re,Pe)}function qo(e,n){var t=ee;ee|=2;var r=Hp();(Re!==e||Pe!==n)&&(Vn=null,Ft(e,n));do try{Ug();break}catch(i){Lp(e,i)}while(1);if(Wl(),ee=t,Ko.current=r,Ee!==null)throw Error(A(261));return Re=null,Pe=0,Se}function Ug(){for(;Ee!==null;)Sp(Ee)}function Bg(){for(;Ee!==null&&!hh();)Sp(Ee)}function Sp(e){var n=wp(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?xp(e):Ee=n,iu.current=null}function xp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Og(t,n),t!==null){t.flags&=32767,Ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,Ee=null;return}}else if(t=Ig(t,n,$e),t!==null){Ee=t;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);Se===0&&(Se=5)}function At(e,n,t){var r=te,i=un.transition;try{un.transition=null,te=1,Wg(e,n,t,r)}finally{un.transition=i,te=r}return null}function Wg(e,n,t,r){do gr();while(st!==null);if(ee&6)throw Error(A(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Sh(e,o),e===Re&&(Ee=Re=null,Pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||co||(co=!0,Pp(ko,function(){return gr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=un.transition,un.transition=null;var a=te;te=1;var s=ee;ee|=4,iu.current=null,Ng(e,t),Ep(t,e),cg(Us),Fo=!!zs,Us=zs=null,e.current=t,Gg(t),gh(),ee=s,te=a,un.transition=o}else e.current=t;if(co&&(co=!1,st=e,Qo=i),o=e.pendingLanes,o===0&&(mt=null),vh(t.stateNode),We(e,ye()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yo)throw Yo=!1,e=ul,ul=null,e;return Qo&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===dl?oi++:(oi=0,dl=e):oi=0,Lt(),null}function gr(){if(st!==null){var e=of(Qo),n=un.transition,t=te;try{if(un.transition=null,te=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,Qo=0,ee&6)throw Error(A(331));var i=ee;for(ee|=4,N=e.current;N!==null;){var o=N,a=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:ri(8,c,o)}var f=c.child;if(f!==null)f.return=c,N=f;else for(;N!==null;){c=N;var h=c.sibling,T=c.return;if(Tp(c),c===u){N=null;break}if(h!==null){h.return=T,N=h;break}N=T}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}N=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,N=a;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ri(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,N=m;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){a=N;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,N=p;else e:for(a=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ca(9,s)}}catch(H){Te(s,s.return,H)}if(s===a){N=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,N=E;break e}N=s.return}}if(ee=i,Lt(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(ra,e)}catch{}r=!0}return r}finally{te=t,un.transition=n}}return!1}function Bd(e,n,t){n=Mr(t,n),n=ap(e,n,1),e=pt(e,n,1),n=Ve(),e!==null&&(Pi(e,1,n),We(e,n))}function Te(e,n,t){if(e.tag===3)Bd(e,e,t);else for(;n!==null;){if(n.tag===3){Bd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=Mr(t,e),e=sp(n,e,1),n=pt(n,e,1),e=Ve(),n!==null&&(Pi(n,1,e),We(n,e));break}}n=n.return}}function $g(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ve(),e.pingedLanes|=e.suspendedLanes&t,Re===e&&(Pe&t)===t&&(Se===4||Se===3&&(Pe&130023424)===Pe&&500>ye()-au?Ft(e,0):ou|=t),We(e,n)}function Rp(e,n){n===0&&(e.mode&1?(n=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):n=1);var t=Ve();e=Xn(e,n),e!==null&&(Pi(e,n,t),We(e,t))}function Xg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Rp(e,t)}function Jg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(n),Rp(e,t)}var wp;wp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ue.current)ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ze=!1,Fg(e,n,t);ze=!!(e.flags&131072)}else ze=!1,fe&&n.flags&1048576&&Af(n,zo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;So(e,n),e=n.pendingProps;var i=yr(n,Fe.current);hr(n,t),i=Zl(null,n,r,e,i,t);var o=eu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(r)?(o=!0,Go(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jl(n),i.updater=ua,n.stateNode=i,i._reactInternals=n,qs(n,r,e,t),n=nl(null,n,r,!0,o,t)):(n.tag=0,fe&&o&&jl(n),Oe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(So(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Yg(r),e=hn(r,e),i){case 0:n=el(null,n,r,e,t);break e;case 1:n=_d(null,n,r,e,t);break e;case 11:n=Dd(null,n,r,e,t);break e;case 14:n=kd(null,n,r,hn(r.type,e),t);break e}throw Error(A(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),el(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),_d(e,n,r,i,t);case 3:e:{if(cp(n),e===null)throw Error(A(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Ff(e,n),Wo(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Mr(Error(A(423)),n),n=Fd(e,n,r,t,i);break e}else if(r!==i){i=Mr(Error(A(424)),n),n=Fd(e,n,r,t,i);break e}else for(Ke=ft(n.stateNode.containerInfo.firstChild),Qe=n,fe=!0,yn=null,t=Nf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vr(),r===i){n=Jn(e,n,t);break e}Oe(e,n,r,t)}n=n.child}return n;case 5:return Gf(n),e===null&&Ks(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Bs(r,i)?a=null:o!==null&&Bs(r,o)&&(n.flags|=32),dp(e,n),Oe(e,n,a,t),n.child;case 6:return e===null&&Ks(n),null;case 13:return fp(e,n,t);case 4:return Kl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Er(n,null,r,t):Oe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),Dd(e,n,r,i,t);case 7:return Oe(e,n,n.pendingProps,t),n.child;case 8:return Oe(e,n,n.pendingProps.children,t),n.child;case 12:return Oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,ae(Uo,r._currentValue),r._currentValue=a,o!==null)if(Mn(o.value,a)){if(o.children===i.children&&!Ue.current){n=Jn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Bn(-1,t&-t),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Ys(o.return,t,n),s.lanes|=t;break}l=l.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Ys(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Oe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,hr(n,t),i=dn(i),r=r(i),n.flags|=1,Oe(e,n,r,t),n.child;case 14:return r=n.type,i=hn(r,n.pendingProps),i=hn(r.type,i),kd(e,n,r,i,t);case 15:return lp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:hn(r,i),So(e,n),n.tag=1,Be(r)?(e=!0,Go(n)):e=!1,hr(n,t),Of(n,r,i),qs(n,r,i,t),nl(null,n,r,!0,e,t);case 19:return pp(e,n,t);case 22:return up(e,n,t)}throw Error(A(156,n.tag))};function Pp(e,n){return ef(e,n)}function Kg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,n,t,r){return new Kg(e,n,t,r)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yg(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pl)return 11;if(e===Cl)return 14}return 2}function gt(e,n){var t=e.alternate;return t===null?(t=ln(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function wo(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")du(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return It(t.children,i,o,n);case wl:a=8,i|=8;break;case Ms:return e=ln(12,t,n,i|2),e.elementType=Ms,e.lanes=o,e;case Ls:return e=ln(13,t,n,i),e.elementType=Ls,e.lanes=o,e;case Hs:return e=ln(19,t,n,i),e.elementType=Hs,e.lanes=o,e;case Oc:return pa(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fc:a=10;break e;case Ic:a=9;break e;case Pl:a=11;break e;case Cl:a=14;break e;case tt:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return n=ln(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function It(e,n,t,r){return e=ln(7,e,r,n),e.lanes=t,e}function pa(e,n,t,r){return e=ln(22,e,r,n),e.elementType=Oc,e.lanes=t,e.stateNode={isHidden:!1},e}function ts(e,n,t){return e=ln(6,e,null,n),e.lanes=t,e}function rs(e,n,t){return n=ln(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Qg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cu(e,n,t,r,i,o,a,s,l){return e=new Qg(e,n,t,s,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=ln(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(o),e}function qg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Cp(e){if(!e)return vt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(A(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(A(171))}if(e.tag===1){var t=e.type;if(Be(t))return Pf(e,t,n)}return n}function Ap(e,n,t,r,i,o,a,s,l){return e=cu(t,r,!0,e,i,o,a,s,l),e.context=Cp(null),t=e.current,r=Ve(),i=ht(t),o=Bn(r,i),o.callback=n??null,pt(t,o,i),e.current.lanes=i,Pi(e,i,r),We(e,r),e}function ma(e,n,t,r){var i=n.current,o=Ve(),a=ht(i);return t=Cp(t),n.context===null?n.context=t:n.pendingContext=t,n=Bn(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=pt(i,n,a),e!==null&&(En(e,i,a,o),Mo(e,i,a)),a}function Zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function fu(e,n){Wd(e,n),(e=e.alternate)&&Wd(e,n)}function Zg(){return null}var Dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}ha.prototype.render=pu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(A(409));ma(e,n,null,null)};ha.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jt(function(){ma(null,e,null,null)}),n[$n]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var n=lf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<it.length&&n!==0&&n<it[t].priority;t++);it.splice(t,0,e),t===0&&df(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function eT(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Zo(a);o.call(u)}}var a=Ap(n,r,e,0,null,!1,!1,"",$d);return e._reactRootContainer=a,e[$n]=a.current,gi(e.nodeType===8?e.parentNode:e),jt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Zo(l);s.call(u)}}var l=cu(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=l,e[$n]=l.current,gi(e.nodeType===8?e.parentNode:e),jt(function(){ma(n,l,t,r)}),l}function Ta(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Zo(a);s.call(l)}}ma(n,a,e,i)}else a=eT(t,n,e,i,r);return Zo(a)}af=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Jr(n.pendingLanes);t!==0&&(kl(n,t|1),We(n,ye()),!(ee&6)&&(Lr=ye()+500,Lt()))}break;case 13:jt(function(){var r=Xn(e,1);if(r!==null){var i=Ve();En(r,e,1,i)}}),fu(e,1)}};_l=function(e){if(e.tag===13){var n=Xn(e,134217728);if(n!==null){var t=Ve();En(n,e,134217728,t)}fu(e,134217728)}};sf=function(e){if(e.tag===13){var n=ht(e),t=Xn(e,n);if(t!==null){var r=Ve();En(t,e,n,r)}fu(e,n)}};lf=function(){return te};uf=function(e,n){var t=te;try{return te=e,n()}finally{te=t}};_s=function(e,n,t){switch(n){case"input":if(Rs(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=sa(r);if(!i)throw Error(A(90));Nc(r),Rs(r,i)}}}break;case"textarea":jc(e,t);break;case"select":n=t.value,n!=null&&cr(e,!!t.multiple,n,!1)}};Jc=su;Kc=jt;var nT={usingClientEntryPoint:!1,Events:[Ai,rr,sa,$c,Xc,su]},jr={findFiberByHostInstance:Dt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tT={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Zg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{ra=fo.inject(tT),Cn=fo}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nT;Ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(n))throw Error(A(200));return qg(e,n,null,t)};Ze.createRoot=function(e,n){if(!mu(e))throw Error(A(299));var t=!1,r="",i=Dp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=cu(e,1,!1,null,null,t,!1,r,i),e[$n]=n.current,gi(e.nodeType===8?e.parentNode:e),new pu(n)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=qc(n),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return jt(e)};Ze.hydrate=function(e,n,t){if(!ga(n))throw Error(A(200));return Ta(null,e,n,!0,t)};Ze.hydrateRoot=function(e,n,t){if(!mu(e))throw Error(A(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=Dp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Ap(n,null,e,1,t??null,i,!1,o,a),e[$n]=n.current,gi(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ha(n)};Ze.render=function(e,n,t){if(!ga(n))throw Error(A(200));return Ta(null,e,n,!1,t)};Ze.unmountComponentAtNode=function(e){if(!ga(e))throw Error(A(40));return e._reactRootContainer?(jt(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};Ze.unstable_batchedUpdates=su;Ze.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ga(t))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Ta(e,n,t,!1,r)};Ze.version="18.2.0-next-9e3b772b8-20220608";function kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kp)}catch(e){console.error(e)}}kp(),Cc.exports=Ze;var rT=Cc.exports,Xd=rT;Es.createRoot=Xd.createRoot,Es.hydrateRoot=Xd.hydrateRoot;function iT(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Jd(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Kd(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Jd(Object(t),!0).forEach(function(r){iT(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Jd(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function oT(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function aT(e,n){if(e==null)return{};var t=oT(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function sT(e,n){return lT(e)||uT(e,n)||dT(e,n)||cT()}function lT(e){if(Array.isArray(e))return e}function uT(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,i=!1,o=void 0;try{for(var a=e[Symbol.iterator](),s;!(r=(s=a.next()).done)&&(t.push(s.value),!(n&&t.length===n));r=!0);}catch(l){i=!0,o=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw o}}return t}}function dT(e,n){if(e){if(typeof e=="string")return Yd(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Yd(e,n)}}function Yd(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function cT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fT(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Qd(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function qd(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Qd(Object(t),!0).forEach(function(r){fT(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Qd(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function pT(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){return n.reduceRight(function(i,o){return o(i)},r)}}function Yr(e){return function n(){for(var t=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return n.apply(t,[].concat(i,s))}}}function ea(e){return{}.toString.call(e).includes("Object")}function mT(e){return!Object.keys(e).length}function Si(e){return typeof e=="function"}function hT(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function gT(e,n){return ea(n)||Tt("changeType"),Object.keys(n).some(function(t){return!hT(e,t)})&&Tt("changeField"),n}function TT(e){Si(e)||Tt("selectorType")}function yT(e){Si(e)||ea(e)||Tt("handlerType"),ea(e)&&Object.values(e).some(function(n){return!Si(n)})&&Tt("handlersType")}function vT(e){e||Tt("initialIsRequired"),ea(e)||Tt("initialType"),mT(e)&&Tt("initialContent")}function ET(e,n){throw new Error(e[n]||e.default)}var bT={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Tt=Yr(ET)(bT),po={changes:gT,selector:TT,handler:yT,initial:vT};function MT(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};po.initial(e),po.handler(n);var t={current:e},r=Yr(ST)(t,n),i=Yr(HT)(t),o=Yr(po.changes)(e),a=Yr(LT)(t);function s(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(c){return c};return po.selector(u),u(t.current)}function l(u){pT(r,i,o,a)(u)}return[s,l]}function LT(e,n){return Si(n)?n(e.current):n}function HT(e,n){return e.current=qd(qd({},e.current),n),n}function ST(e,n,t){return Si(n)?n(e.current):Object.keys(t).forEach(function(r){var i;return(i=n[r])===null||i===void 0?void 0:i.call(n,e.current[r])}),t}var xT={create:MT},RT={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function wT(e){return function n(){for(var t=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return n.apply(t,[].concat(i,s))}}}function PT(e){return{}.toString.call(e).includes("Object")}function CT(e){return e||Zd("configIsRequired"),PT(e)||Zd("configType"),e.urls?(AT(),{paths:{vs:e.urls.monacoBase}}):e}function AT(){console.warn(_p.deprecation)}function DT(e,n){throw new Error(e[n]||e.default)}var _p={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Zd=wT(DT)(_p),kT={config:CT},_T=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(i){return t.reduceRight(function(o,a){return a(o)},i)}};function Fp(e,n){return Object.keys(n).forEach(function(t){n[t]instanceof Object&&e[t]&&Object.assign(n[t],Fp(e[t],n[t]))}),Kd(Kd({},e),n)}var FT={type:"cancelation",msg:"operation is manually canceled"};function is(e){var n=!1,t=new Promise(function(r,i){e.then(function(o){return n?i(FT):r(o)}),e.catch(i)});return t.cancel=function(){return n=!0},t}var IT=xT.create({config:RT,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ip=sT(IT,2),ki=Ip[0],ya=Ip[1];function OT(e){var n=kT.config(e),t=n.monaco,r=aT(n,["monaco"]);ya(function(i){return{config:Fp(i.config,r),monaco:t}})}function VT(){var e=ki(function(n){var t=n.monaco,r=n.isInitialized,i=n.resolve;return{monaco:t,isInitialized:r,resolve:i}});if(!e.isInitialized){if(ya({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),is(os);if(window.monaco&&window.monaco.editor)return Op(window.monaco),e.resolve(window.monaco),is(os);_T(NT,jT)(zT)}return is(os)}function NT(e){return document.body.appendChild(e)}function GT(e){var n=document.createElement("script");return e&&(n.src=e),n}function jT(e){var n=ki(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),t=GT("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function zT(){var e=ki(function(t){var r=t.config,i=t.resolve,o=t.reject;return{config:r,resolve:i,reject:o}}),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],function(t){Op(t),e.resolve(t)},function(t){e.reject(t)})}function Op(e){ki().monaco||ya({monaco:e})}function UT(){return ki(function(e){var n=e.monaco;return n})}var os=new Promise(function(e,n){return ya({resolve:e,reject:n})}),hu={config:OT,init:VT,__getMonacoInstance:UT},BT={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},as=BT,WT={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},$T=WT;function XT({children:e}){return ke.createElement("div",{style:$T.container},e)}var JT=XT,KT=JT;function YT({width:e,height:n,isEditorReady:t,loading:r,_ref:i,className:o,wrapperProps:a}){return ke.createElement("section",{style:{...as.wrapper,width:e,height:n},...a},!t&&ke.createElement(KT,null,r),ke.createElement("div",{ref:i,style:{...as.fullWidth,...!t&&as.hide},className:o}))}var QT=YT,Vp=x.memo(QT);function qT(e){x.useEffect(e,[])}var Np=qT;function ZT(e,n,t=!0){let r=x.useRef(!0);x.useEffect(r.current||!t?()=>{r.current=!1}:e,n)}var Xe=ZT;function ai(){}function dr(e,n,t,r){return ey(e,r)||ny(e,n,t,r)}function ey(e,n){return e.editor.getModel(Gp(e,n))}function ny(e,n,t,r){return e.editor.createModel(n,t,r?Gp(e,r):void 0)}function Gp(e,n){return e.Uri.parse(n)}function ty({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:l=!1,theme:u="light",loading:c="Loading...",options:f={},height:h="100%",width:T="100%",className:g,wrapperProps:v={},beforeMount:R=ai,onMount:m=ai}){let[d,p]=x.useState(!1),[E,H]=x.useState(!0),S=x.useRef(null),b=x.useRef(null),L=x.useRef(null),w=x.useRef(m),C=x.useRef(R),O=x.useRef(!1);Np(()=>{let F=hu.init();return F.then(j=>(b.current=j)&&H(!1)).catch(j=>(j==null?void 0:j.type)!=="cancelation"&&console.error("Monaco initialization: error:",j)),()=>S.current?_():F.cancel()}),Xe(()=>{if(S.current&&b.current){let F=S.current.getOriginalEditor(),j=dr(b.current,e||"",r||t||"text",o||"");j!==F.getModel()&&F.setModel(j)}},[o],d),Xe(()=>{if(S.current&&b.current){let F=S.current.getModifiedEditor(),j=dr(b.current,n||"",i||t||"text",a||"");j!==F.getModel()&&F.setModel(j)}},[a],d),Xe(()=>{let F=S.current.getModifiedEditor();F.getOption(b.current.editor.EditorOption.readOnly)?F.setValue(n||""):n!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[n],d),Xe(()=>{var F,j;(j=(F=S.current)==null?void 0:F.getModel())==null||j.original.setValue(e||"")},[e],d),Xe(()=>{let{original:F,modified:j}=S.current.getModel();b.current.editor.setModelLanguage(F,r||t||"text"),b.current.editor.setModelLanguage(j,i||t||"text")},[t,r,i],d),Xe(()=>{var F;(F=b.current)==null||F.editor.setTheme(u)},[u],d),Xe(()=>{var F;(F=S.current)==null||F.updateOptions(f)},[f],d);let U=x.useCallback(()=>{var W;if(!b.current)return;C.current(b.current);let F=dr(b.current,e||"",r||t||"text",o||""),j=dr(b.current,n||"",i||t||"text",a||"");(W=S.current)==null||W.setModel({original:F,modified:j})},[t,n,i,e,r,o,a]),K=x.useCallback(()=>{var F;!O.current&&L.current&&(S.current=b.current.editor.createDiffEditor(L.current,{automaticLayout:!0,...f}),U(),(F=b.current)==null||F.editor.setTheme(u),p(!0),O.current=!0)},[f,u,U]);x.useEffect(()=>{d&&w.current(S.current,b.current)},[d]),x.useEffect(()=>{!E&&!d&&K()},[E,d,K]);function _(){var j,W,P,I;let F=(j=S.current)==null?void 0:j.getModel();s||((W=F==null?void 0:F.original)==null||W.dispose()),l||((P=F==null?void 0:F.modified)==null||P.dispose()),(I=S.current)==null||I.dispose()}return ke.createElement(Vp,{width:T,height:h,isEditorReady:d,loading:c,_ref:L,className:g,wrapperProps:v})}var ry=ty;x.memo(ry);function iy(e){let n=x.useRef();return x.useEffect(()=>{n.current=e},[e]),n.current}var oy=iy,mo=new Map;function ay({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:i,path:o,theme:a="light",line:s,loading:l="Loading...",options:u={},overrideServices:c={},saveViewState:f=!0,keepCurrentModel:h=!1,width:T="100%",height:g="100%",className:v,wrapperProps:R={},beforeMount:m=ai,onMount:d=ai,onChange:p,onValidate:E=ai}){let[H,S]=x.useState(!1),[b,L]=x.useState(!0),w=x.useRef(null),C=x.useRef(null),O=x.useRef(null),U=x.useRef(d),K=x.useRef(m),_=x.useRef(),F=x.useRef(r),j=oy(o),W=x.useRef(!1),P=x.useRef(!1);Np(()=>{let k=hu.init();return k.then(V=>(w.current=V)&&L(!1)).catch(V=>(V==null?void 0:V.type)!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>C.current?G():k.cancel()}),Xe(()=>{var V,J,Z,Y;let k=dr(w.current,e||r||"",n||i||"",o||t||"");k!==((V=C.current)==null?void 0:V.getModel())&&(f&&mo.set(j,(J=C.current)==null?void 0:J.saveViewState()),(Z=C.current)==null||Z.setModel(k),f&&((Y=C.current)==null||Y.restoreViewState(mo.get(o))))},[o],H),Xe(()=>{var k;(k=C.current)==null||k.updateOptions(u)},[u],H),Xe(()=>{!C.current||r===void 0||(C.current.getOption(w.current.editor.EditorOption.readOnly)?C.current.setValue(r):r!==C.current.getValue()&&(P.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),C.current.pushUndoStop(),P.current=!1))},[r],H),Xe(()=>{var V,J;let k=(V=C.current)==null?void 0:V.getModel();k&&i&&((J=w.current)==null||J.editor.setModelLanguage(k,i))},[i],H),Xe(()=>{var k;s!==void 0&&((k=C.current)==null||k.revealLine(s))},[s],H),Xe(()=>{var k;(k=w.current)==null||k.editor.setTheme(a)},[a],H);let I=x.useCallback(()=>{var k;if(!(!O.current||!w.current)&&!W.current){K.current(w.current);let V=o||t,J=dr(w.current,r||e||"",n||i||"",V||"");C.current=(k=w.current)==null?void 0:k.editor.create(O.current,{model:J,automaticLayout:!0,...u},c),f&&C.current.restoreViewState(mo.get(V)),w.current.editor.setTheme(a),S(!0),W.current=!0}},[e,n,t,r,i,o,u,c,f,a]);x.useEffect(()=>{H&&U.current(C.current,w.current)},[H]),x.useEffect(()=>{!b&&!H&&I()},[b,H,I]),F.current=r,x.useEffect(()=>{var k,V;H&&p&&((k=_.current)==null||k.dispose(),_.current=(V=C.current)==null?void 0:V.onDidChangeModelContent(J=>{P.current||p(C.current.getValue(),J)}))},[H,p]),x.useEffect(()=>{if(H){let k=w.current.editor.onDidChangeMarkers(V=>{var Z;let J=(Z=C.current.getModel())==null?void 0:Z.uri;if(J&&V.find(Y=>Y.path===J.path)){let Y=w.current.editor.getModelMarkers({resource:J});E==null||E(Y)}});return()=>{k==null||k.dispose()}}return()=>{}},[H,E]);function G(){var k,V;(k=_.current)==null||k.dispose(),h?f&&mo.set(o,C.current.saveViewState()):(V=C.current.getModel())==null||V.dispose(),C.current.dispose()}return ke.createElement(Vp,{width:T,height:g,isEditorReady:H,loading:l,_ref:O,className:v,wrapperProps:R})}var sy=ay,ly=x.memo(sy),jp=ly;const zp={automaticLayout:!0,cursorBlinking:"smooth",fontLigatures:!0,formatOnPaste:!0,formatOnType:!0,fontSize:14,showDeprecated:!0,showUnused:!0,showFoldingControls:"mouseover",scrollBeyondLastLine:!1,minimap:{enabled:!1},inlineSuggest:{enabled:!1},fixedOverflowWidgets:!0,smoothScrolling:!0,smartSelect:{selectSubwords:!0,selectLeadingAndTrailingWhitespace:!0},tabSize:2,overviewRulerBorder:!1,scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6}},uy=`/**
 * These are types for things that are present in the upcoming React 18 release.
 *
 * Once React 18 is released they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your \`tsconfig.json\` already has a \`"types"\` array in the \`"compilerOptions"\` section,
 * is to add \`"react-dom/canary"\` to the \`"types"\` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * \`\`\`ts
 * import {} from 'react-dom/canary'
 * \`\`\`
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * \`\`\`ts
 * /// <reference types="react-dom/canary" />
 * \`\`\`
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/index.js to see how the exports are declared,
// but confirm with published source code (e.g. https://unpkg.com/react-dom@canary) that these exports end up in the published code

import React = require("react");
import ReactDOM = require(".");

export {};

declare module "." {
    type PreloadAs = "font" | "script" | "style";
    interface PreloadOptions {
        as: PreloadAs;
        crossOrigin?: string | undefined;
        integrity?: string | undefined;
    }
    function preload(href: string, options?: PreloadOptions): void;

    type PreinitAs = "script" | "style";
    interface PreinitOptions {
        as: PreinitAs;
        crossOrigin?: string | undefined;
        precedence?: string | undefined;
        integrity?: string | undefined;
        nonce?: string | undefined;
    }
    function preinit(href: string, options?: PreinitOptions): void;
}
`,dy=`/**
 * WARNING: This entrypoint is only available starting with \`react-dom@18.0.0-rc.1\`
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/client.js to see how the exports are declared,

import React = require("react");
export interface HydrationOptions {
    /**
     * Prefix for \`useId\`.
     */
    identifierPrefix?: string;
    onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
}

export interface RootOptions {
    /**
     * Prefix for \`useId\`.
     */
    identifierPrefix?: string;
    onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
}

export interface ErrorInfo {
    digest?: string;
    componentStack?: string;
}

export interface Root {
    render(children: React.ReactNode): void;
    unmount(): void;
}

/**
 * Replaces \`ReactDOM.render\` when the \`.render\` method is called and enables Concurrent Mode.
 *
 * @see https://reactjs.org/docs/concurrent-mode-reference.html#createroot
 */
export function createRoot(container: Element | DocumentFragment, options?: RootOptions): Root;

/**
 * Same as \`createRoot()\`, but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer.
 *
 * React will attempt to attach event listeners to the existing markup.
 *
 * **Example Usage**
 *
 * \`\`\`jsx
 * hydrateRoot(document.querySelector('#root'), <App />)
 * \`\`\`
 *
 * @see https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
export function hydrateRoot(
    container: Element | Document,
    initialChildren: React.ReactNode,
    options?: HydrationOptions,
): Root;
`,cy=`/**
 * These are types for things that are present in the \`experimental\` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your \`tsconfig.json\` already has a \`"types"\` array in the \`"compilerOptions"\` section,
 * is to add \`"react-dom/experimental"\` to the \`"types"\` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * \`\`\`ts
 * import {} from 'react-dom/experimental'
 * \`\`\`
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * \`\`\`ts
 * /// <reference types="react-dom/experimental" />
 * \`\`\`
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/index.experimental.js to see how the exports are declared,
// but confirm with published source code (e.g. https://unpkg.com/react-dom@experimental) that these exports end up in the published code

import React = require("react");
import ReactDOM = require("./canary");

export {};

declare module "." {
    interface FormStatusNotPending {
        pending: false;
        data: null;
        method: null;
        action: null;
    }

    interface FormStatusPending {
        pending: true;
        data: FormData;
        method: string;
        action: string | ((formData: FormData) => void | Promise<void>);
    }

    type FormStatus = FormStatusPending | FormStatusNotPending;

    function experimental_useFormStatus(): FormStatus;
}
`,fy=`// Type definitions for React (react-dom) 18.2
// Project: https://reactjs.org
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// NOTE: Users of the \`experimental\` builds of React should add a reference
// to 'react-dom/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

export as namespace ReactDOM;

import {
    CElement,
    Component,
    ComponentState,
    DOMAttributes,
    DOMElement,
    FunctionComponentElement,
    ReactElement,
    ReactInstance,
    ReactNode,
    ReactPortal,
} from "react";

export function findDOMNode(instance: ReactInstance | null | undefined): Element | null | Text;
export function unmountComponentAtNode(container: Element | DocumentFragment): boolean;

export function createPortal(
    children: ReactNode,
    container: Element | DocumentFragment,
    key?: null | string,
): ReactPortal;

export const version: string;
export const render: Renderer;
export const hydrate: Renderer;

export function flushSync<R>(fn: () => R): R;
export function flushSync<A, R>(fn: (a: A) => R, a: A): R;

export function unstable_batchedUpdates<A, R>(callback: (a: A) => R, a: A): R;
export function unstable_batchedUpdates<R>(callback: () => R): R;

export function unstable_renderSubtreeIntoContainer<T extends Element>(
    parentComponent: Component<any>,
    element: DOMElement<DOMAttributes<T>, T>,
    container: Element,
    callback?: (element: T) => any,
): T;
export function unstable_renderSubtreeIntoContainer<P, T extends Component<P, ComponentState>>(
    parentComponent: Component<any>,
    element: CElement<P, T>,
    container: Element,
    callback?: (component: T) => any,
): T;
export function unstable_renderSubtreeIntoContainer<P>(
    parentComponent: Component<any>,
    element: ReactElement<P>,
    container: Element,
    callback?: (component?: Component<P, ComponentState> | Element) => any,
): Component<P, ComponentState> | Element | void;

export type Container = Element | Document | DocumentFragment;

export interface Renderer {
    // Deprecated(render): The return value is deprecated.
    // In future releases the render function's return type will be void.

    <T extends Element>(
        element: DOMElement<DOMAttributes<T>, T>,
        container: Container | null,
        callback?: () => void,
    ): T;

    (
        element: Array<DOMElement<DOMAttributes<any>, any>>,
        container: Container | null,
        callback?: () => void,
    ): Element;

    (
        element: FunctionComponentElement<any> | Array<FunctionComponentElement<any>>,
        container: Container | null,
        callback?: () => void,
    ): void;

    <P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        container: Container | null,
        callback?: () => void,
    ): T;

    (
        element: Array<CElement<any, Component<any, ComponentState>>>,
        container: Container | null,
        callback?: () => void,
    ): Component<any, ComponentState>;

    <P>(
        element: ReactElement<P>,
        container: Container | null,
        callback?: () => void,
    ): Component<P, ComponentState> | Element | void;

    (
        element: ReactElement[],
        container: Container | null,
        callback?: () => void,
    ): Component<any, ComponentState> | Element | void;
}
`,py=`{
    "name": "@types/react-dom",
    "version": "18.2.8",
    "description": "TypeScript definitions for React (react-dom)",
    "homepage": "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom",
    "license": "MIT",
    "contributors": [
        {
            "name": "Asana",
            "url": "https://asana.com"
        },
        {
            "name": "AssureSign",
            "url": "http://www.assuresign.com"
        },
        {
            "name": "Microsoft",
            "url": "https://microsoft.com"
        },
        {
            "name": "MartynasZilinskas",
            "url": "https://github.com/MartynasZilinskas",
            "githubUsername": "MartynasZilinskas"
        },
        {
            "name": "Josh Rutherford",
            "url": "https://github.com/theruther4d",
            "githubUsername": "theruther4d"
        },
        {
            "name": "Jessica Franco",
            "url": "https://github.com/Jessidhia",
            "githubUsername": "Jessidhia"
        },
        {
            "name": "Sebastian Silbermann",
            "url": "https://github.com/eps1lon",
            "githubUsername": "eps1lon"
        }
    ],
    "main": "",
    "types": "index.d.ts",
    "repository": {
        "type": "git",
        "url": "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
        "directory": "types/react-dom"
    },
    "scripts": {},
    "dependencies": {
        "@types/react": "*"
    },
    "typesPublisherContentHash": "f37f361aad53e3f7a39972574a1b1cab2abe083c8bf24b0529d11877c5e0f940",
    "typeScriptVersion": "4.5",
    "exports": {
        ".": {
            "types": {
                "default": "./index.d.ts"
            }
        },
        "./client": {
            "types": {
                "default": "./client.d.ts"
            }
        },
        "./canary": {
            "types": {
                "default": "./canary.d.ts"
            }
        },
        "./server": {
            "types": {
                "default": "./server.d.ts"
            }
        },
        "./experimental": {
            "types": {
                "default": "./experimental.d.ts"
            }
        },
        "./test-utils": {
            "types": {
                "default": "./test-utils/index.d.ts"
            }
        },
        "./package.json": "./package.json"
    }
}`,my=`// forward declarations
declare global {
    namespace NodeJS {
        // tslint:disable-next-line:no-empty-interface
        interface ReadableStream {}

        // tslint:disable-next-line:no-empty-interface
        interface WritableStream {}
    }

    /**
     * Stub for https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    // tslint:disable-next-line:no-empty-interface
    interface AbortSignal {}

    /**
     * Stub for https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
     */
    // tslint:disable-next-line:no-empty-interface
    interface ReadableStream {}
}

import { ReactElement, ReactNode } from "react";
import { ErrorInfo } from "./client";

export interface RenderToPipeableStreamOptions {
    identifierPrefix?: string;
    namespaceURI?: string;
    nonce?: string;
    bootstrapScriptContent?: string;
    bootstrapScripts?: string[];
    bootstrapModules?: string[];
    progressiveChunkSize?: number;
    onShellReady?: () => void;
    onShellError?: (error: unknown) => void;
    onAllReady?: () => void;
    onError?: (error: unknown, errorInfo: ErrorInfo) => string | void;
}

export interface PipeableStream {
    abort: (reason?: unknown) => void;
    pipe: <Writable extends NodeJS.WritableStream>(destination: Writable) => Writable;
}

/**
 * Only available in the environments with [Node.js Streams](https://nodejs.dev/learn/nodejs-streams).
 *
 * @see [API](https://reactjs.org/docs/react-dom-server.html#rendertopipeablestream)
 *
 * @param children
 * @param options
 */
export function renderToPipeableStream(children: ReactNode, options?: RenderToPipeableStreamOptions): PipeableStream;

/**
 * Render a React element to its initial HTML. This should only be used on the server.
 * React will return an HTML string. You can use this method to generate HTML on the server
 * and send the markup down on the initial request for faster page loads and to allow search
 * engines to crawl your pages for SEO purposes.
 *
 * If you call \`ReactDOMClient.hydrateRoot()\` on a node that already has this server-rendered markup,
 * React will preserve it and only attach event handlers, allowing you
 * to have a very performant first-load experience.
 */
export function renderToString(element: ReactElement): string;

/**
 * Render a React element to its initial HTML. Returns a Readable stream that outputs
 * an HTML string. The HTML output by this stream is exactly equal to what
 * \`ReactDOMServer.renderToString()\` would return.
 *
 * @deprecated
 */
export function renderToNodeStream(element: ReactElement): NodeJS.ReadableStream;

/**
 * Similar to \`renderToString\`, except this doesn't create extra DOM attributes
 * such as \`data-reactid\`, that React uses internally. This is useful if you want
 * to use React as a simple static page generator, as stripping away the extra
 * attributes can save lots of bytes.
 */
export function renderToStaticMarkup(element: ReactElement): string;

/**
 * Similar to \`renderToNodeStream\`, except this doesn't create extra DOM attributes
 * such as \`data-reactid\`, that React uses internally. The HTML output by this stream
 * is exactly equal to what \`ReactDOMServer.renderToStaticMarkup()\` would return.
 */
export function renderToStaticNodeStream(element: ReactElement): NodeJS.ReadableStream;

export interface RenderToReadableStreamOptions {
    identifierPrefix?: string;
    namespaceURI?: string;
    nonce?: string;
    bootstrapScriptContent?: string;
    bootstrapScripts?: string[];
    bootstrapModules?: string[];
    progressiveChunkSize?: number;
    signal?: AbortSignal;
    onError?: (error: unknown, errorInfo: ErrorInfo) => string | void;
}

export interface ReactDOMServerReadableStream extends ReadableStream {
    allReady: Promise<void>;
}

/**
 * Only available in the environments with [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) (this includes browsers, Deno, and some modern edge runtimes).
 *
 * @see [API](https://reactjs.org/docs/react-dom-server.html#rendertoreadablestream)
 */
export function renderToReadableStream(
    children: ReactNode,
    options?: RenderToReadableStreamOptions,
): Promise<ReactDOMServerReadableStream>;

export const version: string;

export as namespace ReactDOMServer;
`,hy=`import {
    AbstractView,
    CElement,
    ClassType,
    Component,
    ComponentClass,
    DOMAttributes,
    DOMElement,
    FC,
    FunctionComponentElement,
    ReactElement,
    ReactHTMLElement,
    ReactInstance,
} from "react";

import * as ReactTestUtils from ".";

export {};

export interface OptionalEventProperties {
    bubbles?: boolean | undefined;
    cancelable?: boolean | undefined;
    currentTarget?: EventTarget | undefined;
    defaultPrevented?: boolean | undefined;
    eventPhase?: number | undefined;
    isTrusted?: boolean | undefined;
    nativeEvent?: Event | undefined;
    preventDefault?(): void;
    stopPropagation?(): void;
    target?: EventTarget | undefined;
    timeStamp?: Date | undefined;
    type?: string | undefined;
}

export type ModifierKey =
    | "Alt"
    | "AltGraph"
    | "CapsLock"
    | "Control"
    | "Fn"
    | "FnLock"
    | "Hyper"
    | "Meta"
    | "NumLock"
    | "ScrollLock"
    | "Shift"
    | "Super"
    | "Symbol"
    | "SymbolLock";

export interface SyntheticEventData extends OptionalEventProperties {
    altKey?: boolean | undefined;
    button?: number | undefined;
    buttons?: number | undefined;
    clientX?: number | undefined;
    clientY?: number | undefined;
    changedTouches?: TouchList | undefined;
    charCode?: number | undefined;
    clipboardData?: DataTransfer | undefined;
    ctrlKey?: boolean | undefined;
    deltaMode?: number | undefined;
    deltaX?: number | undefined;
    deltaY?: number | undefined;
    deltaZ?: number | undefined;
    detail?: number | undefined;
    getModifierState?(key: ModifierKey): boolean;
    key?: string | undefined;
    keyCode?: number | undefined;
    locale?: string | undefined;
    location?: number | undefined;
    metaKey?: boolean | undefined;
    pageX?: number | undefined;
    pageY?: number | undefined;
    relatedTarget?: EventTarget | undefined;
    repeat?: boolean | undefined;
    screenX?: number | undefined;
    screenY?: number | undefined;
    shiftKey?: boolean | undefined;
    targetTouches?: TouchList | undefined;
    touches?: TouchList | undefined;
    view?: AbstractView | undefined;
    which?: number | undefined;
}

export type EventSimulator = (element: Element | Component<any>, eventData?: SyntheticEventData) => void;

export interface MockedComponentClass {
    new(props: any): any;
}

export interface ShallowRenderer {
    /**
     * After \`shallowRenderer.render()\` has been called, returns shallowly rendered output.
     */
    getRenderOutput<E extends ReactElement>(): E;
    /**
     * Similar to \`ReactDOM.render\` but it doesn't require DOM and only renders a single level deep.
     */
    render(element: ReactElement, context?: any): void;
    unmount(): void;
}

/**
 * Simulate an event dispatch on a DOM node with optional \`eventData\` event data.
 * \`Simulate\` has a method for every event that React understands.
 */
export namespace Simulate {
    const abort: EventSimulator;
    const animationEnd: EventSimulator;
    const animationIteration: EventSimulator;
    const animationStart: EventSimulator;
    const blur: EventSimulator;
    const cancel: EventSimulator;
    const canPlay: EventSimulator;
    const canPlayThrough: EventSimulator;
    const change: EventSimulator;
    const click: EventSimulator;
    const close: EventSimulator;
    const compositionEnd: EventSimulator;
    const compositionStart: EventSimulator;
    const compositionUpdate: EventSimulator;
    const contextMenu: EventSimulator;
    const copy: EventSimulator;
    const cut: EventSimulator;
    const auxClick: EventSimulator;
    const doubleClick: EventSimulator;
    const drag: EventSimulator;
    const dragEnd: EventSimulator;
    const dragEnter: EventSimulator;
    const dragExit: EventSimulator;
    const dragLeave: EventSimulator;
    const dragOver: EventSimulator;
    const dragStart: EventSimulator;
    const drop: EventSimulator;
    const durationChange: EventSimulator;
    const emptied: EventSimulator;
    const encrypted: EventSimulator;
    const ended: EventSimulator;
    const error: EventSimulator;
    const focus: EventSimulator;
    const input: EventSimulator;
    const invalid: EventSimulator;
    const keyDown: EventSimulator;
    const keyPress: EventSimulator;
    const keyUp: EventSimulator;
    const load: EventSimulator;
    const loadStart: EventSimulator;
    const loadedData: EventSimulator;
    const loadedMetadata: EventSimulator;
    const mouseDown: EventSimulator;
    const mouseEnter: EventSimulator;
    const mouseLeave: EventSimulator;
    const mouseMove: EventSimulator;
    const mouseOut: EventSimulator;
    const mouseOver: EventSimulator;
    const mouseUp: EventSimulator;
    const paste: EventSimulator;
    const pause: EventSimulator;
    const play: EventSimulator;
    const playing: EventSimulator;
    const progress: EventSimulator;
    const pointerCancel: EventSimulator;
    const pointerDown: EventSimulator;
    const pointerUp: EventSimulator;
    const pointerMove: EventSimulator;
    const pointerOut: EventSimulator;
    const pointerOver: EventSimulator;
    const pointerEnter: EventSimulator;
    const pointerLeave: EventSimulator;
    const gotPointerCapture: EventSimulator;
    const lostPointerCapture: EventSimulator;
    const rateChange: EventSimulator;
    const reset: EventSimulator;
    const resize: EventSimulator;
    const scroll: EventSimulator;
    const toggle: EventSimulator;
    const seeked: EventSimulator;
    const seeking: EventSimulator;
    const select: EventSimulator;
    const beforeInput: EventSimulator;
    const stalled: EventSimulator;
    const submit: EventSimulator;
    const suspend: EventSimulator;
    const timeUpdate: EventSimulator;
    const touchCancel: EventSimulator;
    const touchEnd: EventSimulator;
    const touchMove: EventSimulator;
    const touchStart: EventSimulator;
    const transitionEnd: EventSimulator;
    const volumeChange: EventSimulator;
    const waiting: EventSimulator;
    const wheel: EventSimulator;
}

/**
 * Render a React element into a detached DOM node in the document. __This function requires a DOM__.
 */
export function renderIntoDocument<T extends Element>(
    element: DOMElement<any, T>,
): T;
export function renderIntoDocument(
    element: FunctionComponentElement<any>,
): void;
// If we replace \`P\` with \`any\` in this overload, then some tests fail because
// calls to \`renderIntoDocument\` choose the last overload on the
// subtype-relation pass and get an undesirably broad return type.  Using \`P\`
// allows this overload to match on the subtype-relation pass.
export function renderIntoDocument<P, T extends Component<P>>(
    element: CElement<P, T>,
): T;
export function renderIntoDocument<P>(
    element: ReactElement<P>,
): Component<P> | Element | void;

/**
 * Pass a mocked component module to this method to augment it with useful methods that allow it to
 * be used as a dummy React component. Instead of rendering as usual, the component will become
 * a simple \`<div>\` (or other tag if \`mockTagName\` is provided) containing any provided children.
 */
export function mockComponent(
    mocked: MockedComponentClass,
    mockTagName?: string,
): typeof ReactTestUtils;

/**
 * Returns \`true\` if \`element\` is any React element.
 */
export function isElement(element: any): boolean;

/**
 * Returns \`true\` if \`element\` is a React element whose type is of a React \`componentClass\`.
 */
export function isElementOfType<T extends HTMLElement>(
    element: ReactElement,
    type: string,
): element is ReactHTMLElement<T>;
/**
 * Returns \`true\` if \`element\` is a React element whose type is of a React \`componentClass\`.
 */
export function isElementOfType<P extends DOMAttributes<{}>, T extends Element>(
    element: ReactElement,
    type: string,
): element is DOMElement<P, T>;
/**
 * Returns \`true\` if \`element\` is a React element whose type is of a React \`componentClass\`.
 */
export function isElementOfType<P>(
    element: ReactElement,
    type: FC<P>,
): element is FunctionComponentElement<P>;
/**
 * Returns \`true\` if \`element\` is a React element whose type is of a React \`componentClass\`.
 */
export function isElementOfType<P, T extends Component<P>, C extends ComponentClass<P>>(
    element: ReactElement,
    type: ClassType<P, T, C>,
): element is CElement<P, T>;

/**
 * Returns \`true\` if \`instance\` is a DOM component (such as a \`<div>\` or \`<span>\`).
 */
export function isDOMComponent(instance: ReactInstance): instance is Element;
/**
 * Returns \`true\` if \`instance\` is a user-defined component, such as a class or a function.
 */
export function isCompositeComponent(instance: ReactInstance): instance is Component<any>;
/**
 * Returns \`true\` if \`instance\` is a component whose type is of a React \`componentClass\`.
 */
export function isCompositeComponentWithType<T extends Component<any>, C extends ComponentClass<any>>(
    instance: ReactInstance,
    type: ClassType<any, T, C>,
): boolean;

/**
 * Traverse all components in \`tree\` and accumulate all components where
 * \`test(component)\` is \`true\`. This is not that useful on its own, but it's used
 * as a primitive for other test utils.
 */
export function findAllInRenderedTree(
    root: Component<any>,
    fn: (i: ReactInstance) => boolean,
): ReactInstance[];

/**
 * Finds all DOM elements of components in the rendered tree that are
 * DOM components with the class name matching \`className\`.
 */
export function scryRenderedDOMComponentsWithClass(
    root: Component<any>,
    className: string,
): Element[];
/**
 * Like \`scryRenderedDOMComponentsWithClass()\` but expects there to be one result,
 * and returns that one result, or throws exception if there is any other
 * number of matches besides one.
 */
export function findRenderedDOMComponentWithClass(
    root: Component<any>,
    className: string,
): Element;

/**
 * Finds all DOM elements of components in the rendered tree that are
 * DOM components with the tag name matching \`tagName\`.
 */
export function scryRenderedDOMComponentsWithTag(
    root: Component<any>,
    tagName: string,
): Element[];
/**
 * Like \`scryRenderedDOMComponentsWithTag()\` but expects there to be one result,
 * and returns that one result, or throws exception if there is any other
 * number of matches besides one.
 */
export function findRenderedDOMComponentWithTag(
    root: Component<any>,
    tagName: string,
): Element;

/**
 * Finds all instances of components with type equal to \`componentClass\`.
 */
export function scryRenderedComponentsWithType<T extends Component<any>, C extends ComponentClass<any>>(
    root: Component<any>,
    type: ClassType<any, T, C>,
): T[];

/**
 * Same as \`scryRenderedComponentsWithType()\` but expects there to be one result
 * and returns that one result, or throws exception if there is any other
 * number of matches besides one.
 */
export function findRenderedComponentWithType<T extends Component<any>, C extends ComponentClass<any>>(
    root: Component<any>,
    type: ClassType<any, T, C>,
): T;

/**
 * Call this in your tests to create a shallow renderer.
 */
export function createRenderer(): ShallowRenderer;

/**
 * Wrap any code rendering and triggering updates to your components into \`act()\` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending \`useEffect\`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback A synchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 */
// NOTES
// - the order of these signatures matters - typescript will check the signatures in source order.
//   If the \`() => VoidOrUndefinedOnly\` signature is first, it'll erroneously match a Promise returning function for users with
//   \`strictNullChecks: false\`.
// - VoidOrUndefinedOnly is there to forbid any non-void return values for users with \`strictNullChecks: true\`
declare const UNDEFINED_VOID_ONLY: unique symbol;
// tslint:disable-next-line: void-return
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };
// While act does always return Thenable, if a void function is passed, we pretend the return value is also void to not trigger dangling Promise lint rules.
export function act(callback: () => VoidOrUndefinedOnly): void;
export function act<T>(callback: () => T | Promise<T>): Promise<T>;

// Intentionally doesn't extend PromiseLike<never>.
// Ideally this should be as hard to accidentally use as possible.
export interface DebugPromiseLike {
    // the actual then() in here is 0-ary, but that doesn't count as a PromiseLike.
    then(onfulfilled: (value: never) => never, onrejected: (reason: never) => never): never;
}
`,gy=`/**
 * These are types for things that are present in the React \`canary\` release channel.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your \`tsconfig.json\` already has a \`"types"\` array in the \`"compilerOptions"\` section,
 * is to add \`"react/canary"\` to the \`"types"\` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * \`\`\`ts
 * import {} from 'react/canary'
 * \`\`\`
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * \`\`\`ts
 * /// <reference types="react/canary" />
 * \`\`\`
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react/src/React.js to see how the exports are declared,

import React = require(".");

export {};

declare module "." {
    interface ThenableImpl<T> {
        then(onFulfill: (value: T) => unknown, onReject: (error: unknown) => unknown): void | PromiseLike<unknown>;
    }
    interface UntrackedThenable<T> extends ThenableImpl<T> {
        status?: void;
    }

    export interface PendingThenable<T> extends ThenableImpl<T> {
        status: "pending";
    }

    export interface FulfilledThenable<T> extends ThenableImpl<T> {
        status: "fulfilled";
        value: T;
    }

    export interface RejectedThenable<T> extends ThenableImpl<T> {
        status: "rejected";
        reason: unknown;
    }

    export type Thenable<T> = UntrackedThenable<T> | PendingThenable<T> | FulfilledThenable<T> | RejectedThenable<T>;

    export type Usable<T> = Thenable<T> | Context<T>;

    export function use<T>(usable: Usable<T>): T;

    interface ServerContextJSONArray extends ReadonlyArray<ServerContextJSONValue> {}
    export type ServerContextJSONValue =
        | string
        | boolean
        | number
        | null
        | ServerContextJSONArray
        | { [key: string]: ServerContextJSONValue };
    export interface ServerContext<T extends ServerContextJSONValue> {
        Provider: Provider<T>;
    }
    /**
     * Accepts a context object (the value returned from \`React.createContext\` or \`React.createServerContext\`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useContext
     */
    function useContext<T extends ServerContextJSONValue>(context: ServerContext<T>): T;
    export function createServerContext<T extends ServerContextJSONValue>(
        globalName: string,
        defaultValue: T,
    ): ServerContext<T>;

    // tslint:disable-next-line ban-types
    export function cache<CachedFunction extends Function>(fn: CachedFunction): CachedFunction;

    export function unstable_useCacheRefresh(): () => void;
}
`,Ty=`/**
 * These are types for things that are present in the \`experimental\` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your \`tsconfig.json\` already has a \`"types"\` array in the \`"compilerOptions"\` section,
 * is to add \`"react/experimental"\` to the \`"types"\` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * \`\`\`ts
 * import {} from 'react/experimental'
 * \`\`\`
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * \`\`\`ts
 * /// <reference types="react/experimental" />
 * \`\`\`
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react/src/React.js to see how the exports are declared,
// and https://github.com/facebook/react/blob/master/packages/shared/ReactFeatureFlags.js to verify which APIs are
// flagged experimental or not. Experimental APIs will be tagged with \`__EXPERIMENTAL__\`.
//
// For the inputs of types exported as simply a fiber tag, the \`beginWork\` function of ReactFiberBeginWork.js
// is a good place to start looking for details; it generally calls prop validation functions or delegates
// all tasks done as part of the render phase (the concurrent part of the React update cycle).
//
// Suspense-related handling can be found in ReactFiberThrow.js.

import React = require("./canary");

export {};

declare const UNDEFINED_VOID_ONLY: unique symbol;
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

declare module "." {
    // Need an interface to not cause ReactNode to be a self-referential type.
    interface PromiseLikeOfReactNode extends PromiseLike<ReactNode> {}
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {
        promises: PromiseLikeOfReactNode;
    }

    export interface SuspenseProps {
        /**
         * The presence of this prop indicates that the content is computationally expensive to render.
         * In other words, the tree is CPU bound and not I/O bound (e.g. due to fetching data).
         * @see {@link https://github.com/facebook/react/pull/19936}
         */
        unstable_expectedLoadTime?: number | undefined;
    }

    export type SuspenseListRevealOrder = "forwards" | "backwards" | "together";
    export type SuspenseListTailMode = "collapsed" | "hidden";

    export interface SuspenseListCommonProps {
        /**
         * Note that SuspenseList require more than one child;
         * it is a runtime warning to provide only a single child.
         *
         * It does, however, allow those children to be wrapped inside a single
         * level of \`<React.Fragment>\`.
         */
        children: ReactElement | Iterable<ReactElement>;
    }

    interface DirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the \`SuspenseList\` children should be revealed.
         */
        revealOrder: "forwards" | "backwards";
        /**
         * Dictates how unloaded items in a SuspenseList is shown.
         *
         * - By default, \`SuspenseList\` will show all fallbacks in the list.
         * - \`collapsed\` shows only the next fallback in the list.
         * - \`hidden\` doesn’t show any unloaded items.
         */
        tail?: SuspenseListTailMode | undefined;
    }

    interface NonDirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the \`SuspenseList\` children should be revealed.
         */
        revealOrder?: Exclude<SuspenseListRevealOrder, DirectionalSuspenseListProps["revealOrder"]> | undefined;
        /**
         * The tail property is invalid when not using the \`forwards\` or \`backwards\` reveal orders.
         */
        tail?: never | undefined;
    }

    export type SuspenseListProps = DirectionalSuspenseListProps | NonDirectionalSuspenseListProps;

    /**
     * \`SuspenseList\` helps coordinate many components that can suspend by orchestrating the order
     * in which these components are revealed to the user.
     *
     * When multiple components need to fetch data, this data may arrive in an unpredictable order.
     * However, if you wrap these items in a \`SuspenseList\`, React will not show an item in the list
     * until previous items have been displayed (this behavior is adjustable).
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist
     * @see https://reactjs.org/docs/concurrent-mode-patterns.html#suspenselist
     */
    export const unstable_SuspenseList: ExoticComponent<SuspenseListProps>;

    // tslint:disable-next-line ban-types
    export function experimental_useEffectEvent<T extends Function>(event: T): T;

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS {
        functions: (formData: FormData) => void;
    }

    export interface TransitionStartFunction {
        /**
         * Marks all state updates inside the async function as transitions
         *
         * @see {https://react.dev/reference/react/useTransition#starttransition}
         *
         * @param callback
         */
        (callback: () => Promise<VoidOrUndefinedOnly>): void;
    }

    function experimental_useOptimistic<State>(
        passthrough: State,
    ): [State, (action: State | ((pendingState: State) => State)) => void];
    function experimental_useOptimistic<State, Action>(
        passthrough: State,
        reducer: (state: State, action: Action) => State,
    ): [State, (action: Action) => void];
}
`,yy=`/*
React projects that don't include the DOM library need these interfaces to compile.
React Native applications use React, but there is no DOM available. The JavaScript runtime
is ES6/ES2015 only. These definitions allow such projects to compile with only \`--lib ES6\`.

Warning: all of these interfaces are empty. If you want type definitions for various properties
(such as HTMLInputElement.prototype.value), you need to add \`--lib DOM\` (via command line or tsconfig.json).
*/

interface Event {}
interface AnimationEvent extends Event {}
interface ClipboardEvent extends Event {}
interface CompositionEvent extends Event {}
interface DragEvent extends Event {}
interface FocusEvent extends Event {}
interface KeyboardEvent extends Event {}
interface MouseEvent extends Event {}
interface TouchEvent extends Event {}
interface PointerEvent extends Event {}
interface TransitionEvent extends Event {}
interface UIEvent extends Event {}
interface WheelEvent extends Event {}

interface EventTarget {}
interface Document {}
interface DataTransfer {}
interface StyleMedia {}

interface Element {}
interface DocumentFragment {}

interface HTMLElement extends Element {}
interface HTMLAnchorElement extends HTMLElement {}
interface HTMLAreaElement extends HTMLElement {}
interface HTMLAudioElement extends HTMLElement {}
interface HTMLBaseElement extends HTMLElement {}
interface HTMLBodyElement extends HTMLElement {}
interface HTMLBRElement extends HTMLElement {}
interface HTMLButtonElement extends HTMLElement {}
interface HTMLCanvasElement extends HTMLElement {}
interface HTMLDataElement extends HTMLElement {}
interface HTMLDataListElement extends HTMLElement {}
interface HTMLDetailsElement extends HTMLElement {}
interface HTMLDialogElement extends HTMLElement {}
interface HTMLDivElement extends HTMLElement {}
interface HTMLDListElement extends HTMLElement {}
interface HTMLEmbedElement extends HTMLElement {}
interface HTMLFieldSetElement extends HTMLElement {}
interface HTMLFormElement extends HTMLElement {}
interface HTMLHeadingElement extends HTMLElement {}
interface HTMLHeadElement extends HTMLElement {}
interface HTMLHRElement extends HTMLElement {}
interface HTMLHtmlElement extends HTMLElement {}
interface HTMLIFrameElement extends HTMLElement {}
interface HTMLImageElement extends HTMLElement {}
interface HTMLInputElement extends HTMLElement {}
interface HTMLModElement extends HTMLElement {}
interface HTMLLabelElement extends HTMLElement {}
interface HTMLLegendElement extends HTMLElement {}
interface HTMLLIElement extends HTMLElement {}
interface HTMLLinkElement extends HTMLElement {}
interface HTMLMapElement extends HTMLElement {}
interface HTMLMetaElement extends HTMLElement {}
interface HTMLMeterElement extends HTMLElement {}
interface HTMLObjectElement extends HTMLElement {}
interface HTMLOListElement extends HTMLElement {}
interface HTMLOptGroupElement extends HTMLElement {}
interface HTMLOptionElement extends HTMLElement {}
interface HTMLOutputElement extends HTMLElement {}
interface HTMLParagraphElement extends HTMLElement {}
interface HTMLParamElement extends HTMLElement {}
interface HTMLPreElement extends HTMLElement {}
interface HTMLProgressElement extends HTMLElement {}
interface HTMLQuoteElement extends HTMLElement {}
interface HTMLSlotElement extends HTMLElement {}
interface HTMLScriptElement extends HTMLElement {}
interface HTMLSelectElement extends HTMLElement {}
interface HTMLSourceElement extends HTMLElement {}
interface HTMLSpanElement extends HTMLElement {}
interface HTMLStyleElement extends HTMLElement {}
interface HTMLTableElement extends HTMLElement {}
interface HTMLTableColElement extends HTMLElement {}
interface HTMLTableDataCellElement extends HTMLElement {}
interface HTMLTableHeaderCellElement extends HTMLElement {}
interface HTMLTableRowElement extends HTMLElement {}
interface HTMLTableSectionElement extends HTMLElement {}
interface HTMLTemplateElement extends HTMLElement {}
interface HTMLTextAreaElement extends HTMLElement {}
interface HTMLTimeElement extends HTMLElement {}
interface HTMLTitleElement extends HTMLElement {}
interface HTMLTrackElement extends HTMLElement {}
interface HTMLUListElement extends HTMLElement {}
interface HTMLVideoElement extends HTMLElement {}
interface HTMLWebViewElement extends HTMLElement {}

interface SVGElement extends Element {}
interface SVGSVGElement extends SVGElement {}
interface SVGCircleElement extends SVGElement {}
interface SVGClipPathElement extends SVGElement {}
interface SVGDefsElement extends SVGElement {}
interface SVGDescElement extends SVGElement {}
interface SVGEllipseElement extends SVGElement {}
interface SVGFEBlendElement extends SVGElement {}
interface SVGFEColorMatrixElement extends SVGElement {}
interface SVGFEComponentTransferElement extends SVGElement {}
interface SVGFECompositeElement extends SVGElement {}
interface SVGFEConvolveMatrixElement extends SVGElement {}
interface SVGFEDiffuseLightingElement extends SVGElement {}
interface SVGFEDisplacementMapElement extends SVGElement {}
interface SVGFEDistantLightElement extends SVGElement {}
interface SVGFEDropShadowElement extends SVGElement {}
interface SVGFEFloodElement extends SVGElement {}
interface SVGFEFuncAElement extends SVGElement {}
interface SVGFEFuncBElement extends SVGElement {}
interface SVGFEFuncGElement extends SVGElement {}
interface SVGFEFuncRElement extends SVGElement {}
interface SVGFEGaussianBlurElement extends SVGElement {}
interface SVGFEImageElement extends SVGElement {}
interface SVGFEMergeElement extends SVGElement {}
interface SVGFEMergeNodeElement extends SVGElement {}
interface SVGFEMorphologyElement extends SVGElement {}
interface SVGFEOffsetElement extends SVGElement {}
interface SVGFEPointLightElement extends SVGElement {}
interface SVGFESpecularLightingElement extends SVGElement {}
interface SVGFESpotLightElement extends SVGElement {}
interface SVGFETileElement extends SVGElement {}
interface SVGFETurbulenceElement extends SVGElement {}
interface SVGFilterElement extends SVGElement {}
interface SVGForeignObjectElement extends SVGElement {}
interface SVGGElement extends SVGElement {}
interface SVGImageElement extends SVGElement {}
interface SVGLineElement extends SVGElement {}
interface SVGLinearGradientElement extends SVGElement {}
interface SVGMarkerElement extends SVGElement {}
interface SVGMaskElement extends SVGElement {}
interface SVGMetadataElement extends SVGElement {}
interface SVGPathElement extends SVGElement {}
interface SVGPatternElement extends SVGElement {}
interface SVGPolygonElement extends SVGElement {}
interface SVGPolylineElement extends SVGElement {}
interface SVGRadialGradientElement extends SVGElement {}
interface SVGRectElement extends SVGElement {}
interface SVGStopElement extends SVGElement {}
interface SVGSwitchElement extends SVGElement {}
interface SVGSymbolElement extends SVGElement {}
interface SVGTextElement extends SVGElement {}
interface SVGTextPathElement extends SVGElement {}
interface SVGTSpanElement extends SVGElement {}
interface SVGUseElement extends SVGElement {}
interface SVGViewElement extends SVGElement {}

interface FormData {}
interface Text {}
interface TouchList {}
interface WebGLRenderingContext {}
interface WebGL2RenderingContext {}

interface TrustedHTML {}
`,vy=`// Type definitions for React 18.2
// Project: https://react.dev/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Benoit Benezech <https://github.com/bbenezech>
//                 Patricio Zavolinsky <https://github.com/pzavolinsky>
//                 Eric Anderson <https://github.com/ericanderson>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Guilherme Hübner <https://github.com/guilhermehubner>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Olivier Pascal <https://github.com/pascaloliv>
//                 Martin Hochel <https://github.com/hotell>
//                 Frank Li <https://github.com/franklixuefei>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Kyle Scully <https://github.com/zieka>
//                 Cong Zhang <https://github.com/dancerphil>
//                 Dimitri Mitropoulos <https://github.com/dimitropoulos>
//                 JongChan Choi <https://github.com/disjukr>
//                 Victor Magalhães <https://github.com/vhfmag>
//                 Dale Tan <https://github.com/hellatan>
//                 Priyanshu Rav <https://github.com/priyanshurav>
//                 Dmitry Semigradsky <https://github.com/Semigradsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// NOTE: Users of the \`experimental\` builds of React should add a reference
// to 'react/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

/// <reference path="global.d.ts" />

import * as CSS from "csstype";
import * as PropTypes from "prop-types";
import { Interaction as SchedulerInteraction } from "scheduler/tracing";

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;
type Booleanish = boolean | "true" | "false";
type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;

declare const UNDEFINED_VOID_ONLY: unique symbol;
// Destructors are only allowed to return void.
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = React;
export as namespace React;

declare namespace React {
    //
    // React Elements
    // ----------------------------------------------------------------------

    type ElementType<P = any> =
        | {
            [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never;
        }[keyof JSX.IntrinsicElements]
        | ComponentType<P>;
    type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

    type JSXElementConstructor<P> =
        | ((
            props: P,
            /**
             * @deprecated https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-stateless-function-components
             */
            deprecatedLegacyContext?: any,
        ) => ReactNode)
        | (new(
            props: P,
            /**
             * @deprecated https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods
             */
            deprecatedLegacyContext?: any,
        ) => Component<any, any>);

    interface RefObject<T> {
        readonly current: T | null;
    }
    // Bivariance hack for consistent unsoundness with RefObject
    type RefCallback<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"];
    type Ref<T> = RefCallback<T> | RefObject<T> | null;
    type LegacyRef<T> = string | Ref<T>;
    /**
     * Gets the instance type for a React element. The instance will be different for various component types:
     *
     * - React class components will be the class instance. So if you had \`class Foo extends React.Component<{}> {}\`
     *   and used \`React.ElementRef<typeof Foo>\` then the type would be the instance of \`Foo\`.
     * - React stateless functional components do not have a backing instance and so \`React.ElementRef<typeof Bar>\`
     *   (when \`Bar\` is \`function Bar() {}\`) will give you the \`undefined\` type.
     * - JSX intrinsics like \`div\` will give you their DOM instance. For \`React.ElementRef<'div'>\` that would be
     *   \`HTMLDivElement\`. For \`React.ElementRef<'input'>\` that would be \`HTMLInputElement\`.
     * - React stateless functional components that forward a \`ref\` will give you the \`ElementRef\` of the forwarded
     *   to component.
     *
     * \`C\` must be the type _of_ a React component so you need to use typeof as in \`React.ElementRef<typeof MyComponent>\`.
     *
     * @todo In Flow, this works a little different with forwarded refs and the \`AbstractComponent\` that
     *       \`React.forwardRef()\` returns.
     */
    type ElementRef<
        C extends
            | ForwardRefExoticComponent<any>
            | { new(props: any): Component<any> }
            | ((props: any, context?: any) => ReactNode)
            | keyof JSX.IntrinsicElements,
    > =
        // need to check first if \`ref\` is a valid prop for ts@3.0
        // otherwise it will infer \`{}\` instead of \`never\`
        "ref" extends keyof ComponentPropsWithRef<C> ? NonNullable<ComponentPropsWithRef<C>["ref"]> extends Ref<
                infer Instance
            > ? Instance
            : never
            : never;

    type ComponentState = any;

    type Key = string | number | bigint;

    /**
     * @internal You shouldn't need to use this type since you never see these attributes
     * inside your component or have to validate them.
     */
    interface Attributes {
        key?: Key | null | undefined;
    }
    interface RefAttributes<T> extends Attributes {
        /**
         * Allows getting a ref to the component instance.
         * Once the component unmounts, React will set \`ref.current\` to \`null\` (or call the ref with \`null\` if you passed a callback ref).
         * @see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
         */
        ref?: Ref<T> | undefined;
    }
    interface ClassAttributes<T> extends Attributes {
        /**
         * Allows getting a ref to the component instance.
         * Once the component unmounts, React will set \`ref.current\` to \`null\` (or call the ref with \`null\` if you passed a callback ref).
         * @see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
         */
        ref?: LegacyRef<T> | undefined;
    }

    interface ReactElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }

    interface ReactComponentElement<
        T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
        P = Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, "key" | "ref">>,
    > extends ReactElement<P, Exclude<T, number>> {}

    interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {
        ref?: ("ref" extends keyof P ? P extends { ref?: infer R | undefined } ? R : never : never) | undefined;
    }

    type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
    interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P, ComponentClass<P>> {
        ref?: LegacyRef<T> | undefined;
    }

    type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

    // string fallback for custom web-components
    interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element>
        extends ReactElement<P, string>
    {
        ref: LegacyRef<T>;
    }

    // ReactHTML for ReactHTMLElement
    interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> {}

    interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
        type: keyof ReactHTML;
    }

    // ReactSVG for ReactSVGElement
    interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
        type: keyof ReactSVG;
    }

    interface ReactPortal extends ReactElement {
        children: ReactNode;
    }

    //
    // Factories
    // ----------------------------------------------------------------------

    type Factory<P> = (props?: Attributes & P, ...children: ReactNode[]) => ReactElement<P>;

    /**
     * @deprecated Please use \`FunctionComponentFactory\`
     */
    type SFCFactory<P> = FunctionComponentFactory<P>;

    type FunctionComponentFactory<P> = (
        props?: Attributes & P,
        ...children: ReactNode[]
    ) => FunctionComponentElement<P>;

    type ComponentFactory<P, T extends Component<P, ComponentState>> = (
        props?: ClassAttributes<T> & P,
        ...children: ReactNode[]
    ) => CElement<P, T>;

    type CFactory<P, T extends Component<P, ComponentState>> = ComponentFactory<P, T>;
    type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

    type DOMFactory<P extends DOMAttributes<T>, T extends Element> = (
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ) => DOMElement<P, T>;

    interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {}

    interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
        (props?: ClassAttributes<T> & P | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
    }

    interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
        (
            props?: ClassAttributes<SVGElement> & SVGAttributes<SVGElement> | null,
            ...children: ReactNode[]
        ): ReactSVGElement;
    }

    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactText = string | number;
    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactChild = ReactElement | string | number;

    /**
     * @deprecated Use either \`ReactNode[]\` if you need an array or \`Iterable<ReactNode>\` if its passed to a host component.
     */
    interface ReactNodeArray extends ReadonlyArray<ReactNode> {}
    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactFragment = Iterable<ReactNode>;

    /**
     * For internal usage only.
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {}
    type ReactNode =
        | ReactElement
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
        | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
            keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
        ];

    //
    // Top Level API
    // ----------------------------------------------------------------------

    // DOM Elements
    function createFactory<T extends HTMLElement>(
        type: keyof ReactHTML,
    ): HTMLFactory<T>;
    function createFactory(
        type: keyof ReactSVG,
    ): SVGFactory;
    function createFactory<P extends DOMAttributes<T>, T extends Element>(
        type: string,
    ): DOMFactory<P, T>;

    // Custom components
    function createFactory<P>(type: FunctionComponent<P>): FunctionComponentFactory<P>;
    function createFactory<P>(
        type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
    ): CFactory<P, ClassicComponent<P, ComponentState>>;
    function createFactory<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
    ): CFactory<P, T>;
    function createFactory<P>(type: ComponentClass<P>): Factory<P>;

    // DOM Elements
    // TODO: generalize this to everything in \`keyof ReactHTML\`, not just "input"
    function createElement(
        type: "input",
        props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        type: keyof ReactHTML,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
        type: keyof ReactSVG,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): ReactSVGElement;
    function createElement<P extends DOMAttributes<T>, T extends Element>(
        type: string,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components

    function createElement<P extends {}>(
        type: FunctionComponent<P>,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function createElement<P extends {}>(
        type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
        props?: ClassAttributes<ClassicComponent<P, ComponentState>> & P | null,
        ...children: ReactNode[]
    ): CElement<P, ClassicComponent<P, ComponentState>>;
    function createElement<P extends {}, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function createElement<P extends {}>(
        type: FunctionComponent<P> | ComponentClass<P> | string,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): ReactElement<P>;

    // DOM Elements
    // ReactHTMLElement
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: DetailedReactHTMLElement<P, T>,
        props?: P,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    // ReactHTMLElement, less specific
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: ReactHTMLElement<T>,
        props?: P,
        ...children: ReactNode[]
    ): ReactHTMLElement<T>;
    // SVGElement
    function cloneElement<P extends SVGAttributes<T>, T extends SVGElement>(
        element: ReactSVGElement,
        props?: P,
        ...children: ReactNode[]
    ): ReactSVGElement;
    // DOM Element (has to be the last, because type checking stops at first overload that fits)
    function cloneElement<P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        props?: DOMAttributes<T> & P,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components
    function cloneElement<P>(
        element: FunctionComponentElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function cloneElement<P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        props?: Partial<P> & ClassAttributes<T>,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function cloneElement<P>(
        element: ReactElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): ReactElement<P>;

    // Context via RenderProps
    interface ProviderProps<T> {
        value: T;
        children?: ReactNode | undefined;
    }

    interface ConsumerProps<T> {
        children: (value: T) => ReactNode;
    }

    // TODO: similar to how Fragment is actually a symbol, the values returned from createContext,
    // forwardRef and memo are actually objects that are treated specially by the renderer; see:
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/ReactContext.js#L35-L48
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/forwardRef.js#L42-L45
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/memo.js#L27-L31
    // However, we have no way of telling the JSX parser that it's a JSX element type or its props other than
    // by pretending to be a normal component.
    //
    // We don't just use ComponentType or FunctionComponent types because you are not supposed to attach statics to this
    // object, but rather to the original function.
    interface ExoticComponent<P = {}> {
        /**
         * **NOTE**: Exotic components are not callable.
         */
        (props: P): ReactNode;
        readonly $$typeof: symbol;
    }

    interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
        displayName?: string | undefined;
    }

    interface ProviderExoticComponent<P> extends ExoticComponent<P> {
        propTypes?: WeakValidationMap<P> | undefined;
    }

    type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

    // NOTE: only the Context object itself can get a displayName
    // https://github.com/facebook/react-devtools/blob/e0b854e4c/backend/attachRendererFiber.js#L310-L325
    type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
    type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
    interface Context<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
        displayName?: string | undefined;
    }
    function createContext<T>(
        // If you thought this should be optional, see
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
        defaultValue: T,
    ): Context<T>;

    function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;

    // Sync with \`ReactChildren\` until \`ReactChildren\` is removed.
    const Children: {
        map<T, C>(
            children: C | ReadonlyArray<C>,
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    };
    const Fragment: ExoticComponent<{ children?: ReactNode | undefined }>;
    const StrictMode: ExoticComponent<{ children?: ReactNode | undefined }>;

    interface SuspenseProps {
        children?: ReactNode | undefined;

        /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
        fallback?: ReactNode;
    }

    const Suspense: ExoticComponent<SuspenseProps>;
    const version: string;

    /**
     * {@link https://react.dev/reference/react/Profiler#onrender-callback Profiler API}
     */
    type ProfilerOnRenderCallback = (
        id: string,
        phase: "mount" | "update",
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<SchedulerInteraction>,
    ) => void;
    interface ProfilerProps {
        children?: ReactNode | undefined;
        id: string;
        onRender: ProfilerOnRenderCallback;
    }

    const Profiler: ExoticComponent<ProfilerProps>;

    //
    // Component API
    // ----------------------------------------------------------------------

    type ReactInstance = Component<any> | Element;

    // Base component for plain JS classes
    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {}
    class Component<P, S> {
        // tslint won't let me format the sample code in a way that vscode likes it :(
        /**
         * If set, \`this.context\` will be set at runtime to the current value of the given Context.
         *
         * Usage:
         *
         * \`\`\`ts
         * type MyContext = number
         * const Ctx = React.createContext<MyContext>(0)
         *
         * class Foo extends React.Component {
         *   static contextType = Ctx
         *   context!: React.ContextType<typeof Ctx>
         *   render () {
         *     return <>My context's value: {this.context}</>;
         *   }
         * }
         * \`\`\`
         *
         * @see https://react.dev/reference/react/Component#static-contexttype
         */
        static contextType?: Context<any> | undefined;

        /**
         * If using the new style context, re-declare this in your class to be the
         * \`React.ContextType\` of your \`static contextType\`.
         * Should be used with type annotation or static contextType.
         *
         * \`\`\`ts
         * static contextType = MyContext
         * // For TS pre-3.7:
         * context!: React.ContextType<typeof MyContext>
         * // For TS 3.7 and above:
         * declare context: React.ContextType<typeof MyContext>
         * \`\`\`
         *
         * @see https://react.dev/reference/react/Component#context
         */
        context: unknown;

        constructor(props: Readonly<P> | P);
        /**
         * @deprecated
         * @see https://legacy.reactjs.org/docs/legacy-context.html
         */
        constructor(props: P, context: any);

        // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
        // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
        // Also, the \` | S\` allows intellisense to not be dumbisense
        setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null) | (Pick<S, K> | S | null),
            callback?: () => void,
        ): void;

        forceUpdate(callback?: () => void): void;
        render(): ReactNode;

        readonly props: Readonly<P>;
        state: Readonly<S>;
        /**
         * @deprecated
         * https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
         */
        refs: {
            [key: string]: ReactInstance;
        };
    }

    class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}

    interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
        replaceState(nextState: S, callback?: () => void): void;
        isMounted(): boolean;
        getInitialState?(): S;
    }

    interface ChildContextProvider<CC> {
        getChildContext(): CC;
    }

    //
    // Class Interfaces
    // ----------------------------------------------------------------------

    type FC<P = {}> = FunctionComponent<P>;

    interface FunctionComponent<P = {}> {
        (props: P, context?: any): ReactNode;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    /**
     * @deprecated - Equivalent with \`React.FC\`.
     */
    type VFC<P = {}> = VoidFunctionComponent<P>;

    /**
     * @deprecated - Equivalent with \`React.FunctionComponent\`.
     */
    interface VoidFunctionComponent<P = {}> {
        (props: P, context?: any): ReactNode;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

    interface ForwardRefRenderFunction<T, P = {}> {
        (props: P, ref: ForwardedRef<T>): ReactNode;
        displayName?: string | undefined;
        // explicit rejected with \`never\` required due to
        // https://github.com/microsoft/TypeScript/issues/36826
        /**
         * defaultProps are not supported on render functions
         */
        defaultProps?: never | undefined;
        /**
         * propTypes are not supported on render functions
         */
        propTypes?: never | undefined;
    }

    interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
        new(props: P, context?: any): Component<P, S>;
        propTypes?: WeakValidationMap<P> | undefined;
        contextType?: Context<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
        new(props: P, context?: any): ClassicComponent<P, ComponentState>;
        getDefaultProps?(): P;
    }

    /**
     * We use an intersection type to infer multiple type parameters from
     * a single argument, which is useful for many top-level API defs.
     * See https://github.com/Microsoft/TypeScript/issues/7234 for more info.
     */
    type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> =
        & C
        & (new(props: P, context?: any) => T);

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    // This should actually be something like \`Lifecycle<P, S> | DeprecatedLifecycle<P, S>\`,
    // as React will _not_ call the deprecated lifecycle methods if any of the new lifecycle
    // methods are present.
    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
        /**
         * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
         */
        componentDidMount?(): void;
        /**
         * Called to determine whether the change in props and state should trigger a re-render.
         *
         * \`Component\` always returns true.
         * \`PureComponent\` implements a shallow comparison on props and state and returns true if any
         * props or states have changed.
         *
         * If false is returned, \`Component#render\`, \`componentWillUpdate\`
         * and \`componentDidUpdate\` will not be called.
         */
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
        /**
         * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
         * cancelled network requests, or cleaning up any DOM elements created in \`componentDidMount\`.
         */
        componentWillUnmount?(): void;
        /**
         * Catches exceptions generated in descendant components. Unhandled exceptions will cause
         * the entire component tree to unmount.
         */
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    }

    // Unfortunately, we have no way of declaring that the component constructor must implement this
    interface StaticLifecycle<P, S> {
        getDerivedStateFromProps?: GetDerivedStateFromProps<P, S> | undefined;
        getDerivedStateFromError?: GetDerivedStateFromError<P, S> | undefined;
    }

    type GetDerivedStateFromProps<P, S> =
        /**
         * Returns an update to a component's state based on its new props and old state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;

    type GetDerivedStateFromError<P, S> =
        /**
         * This lifecycle is invoked after an error has been thrown by a descendant component.
         * It receives the error that was thrown as a parameter and should return a value to update state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (error: any) => Partial<S> | null;

    // This should be "infer SS" but can't use it yet
    interface NewLifecycle<P, S, SS> {
        /**
         * Runs before React applies the result of \`render\` to the document, and
         * returns an object to be given to componentDidUpdate. Useful for saving
         * things such as scroll position before \`render\` causes changes to it.
         *
         * Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
         * lifecycle events from running.
         */
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
        /**
         * Called immediately after updating occurs. Not called for the initial render.
         *
         * The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.
         */
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
    }

    interface DeprecatedLifecycle<P, S> {
        /**
         * Called immediately before mounting occurs, and before \`Component#render\`.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use componentDidMount or the constructor instead; will stop working in React 17
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillMount?(): void;
        /**
         * Called immediately before mounting occurs, and before \`Component#render\`.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use componentDidMount or the constructor instead
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillMount?(): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling \`Component#setState\` generally does not trigger this method.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling \`Component#setState\` generally does not trigger this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use static getDerivedStateFromProps instead
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call \`Component#setState\` here.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call \`Component#setState\` here.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    }

    interface Mixin<P, S> extends ComponentLifecycle<P, S> {
        mixins?: Array<Mixin<P, S>> | undefined;
        statics?: {
            [key: string]: any;
        } | undefined;

        displayName?: string | undefined;
        propTypes?: ValidationMap<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;

        getDefaultProps?(): P;
        getInitialState?(): S;
    }

    interface ComponentSpec<P, S> extends Mixin<P, S> {
        render(): ReactNode;

        [propertyName: string]: any;
    }

    function createRef<T>(): RefObject<T>;

    // will show \`ForwardRef(\${Component.displayName || Component.name})\` in devtools by default,
    // but can be given its own specific name
    interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
        defaultProps?: Partial<P> | undefined;
        propTypes?: WeakValidationMap<P> | undefined;
    }

    function forwardRef<T, P = {}>(
        render: ForwardRefRenderFunction<T, P>,
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

    /** Ensures that the props do not include ref at all */
    type PropsWithoutRef<P> =
        // Omit would not be sufficient for this. We'd like to avoid unnecessary mapping and need a distributive conditional to support unions.
        // see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
        // https://github.com/Microsoft/TypeScript/issues/28339
        P extends any ? ("ref" extends keyof P ? Omit<P, "ref"> : P) : P;
    /** Ensures that the props do not include string ref, which cannot be forwarded */
    type PropsWithRef<P> =
        // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
        "ref" extends keyof P
            ? P extends { ref?: infer R | undefined }
                ? string extends R ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
                : P
            : P
            : P;

    type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

    /**
     * NOTE: prefer ComponentPropsWithRef, if the ref is forwarded,
     * or ComponentPropsWithoutRef when refs are not supported.
     */
    type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = T extends
        JSXElementConstructor<infer P> ? P
        : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T]
        : {};
    type ComponentPropsWithRef<T extends ElementType> = T extends (new(props: infer P) => Component<any, any>)
        ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
        : PropsWithRef<ComponentProps<T>>;
    type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;

    type ComponentRef<T extends ElementType> = T extends NamedExoticComponent<
        ComponentPropsWithoutRef<T> & RefAttributes<infer Method>
    > ? Method
        : ComponentPropsWithRef<T> extends RefAttributes<infer Method> ? Method
        : never;

    // will show \`Memo(\${Component.displayName || Component.name})\` in devtools by default,
    // but can be given its own specific name
    type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<ComponentPropsWithRef<T>> & {
        readonly type: T;
    };

    function memo<P extends object>(
        Component: FunctionComponent<P>,
        propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean,
    ): NamedExoticComponent<P>;
    function memo<T extends ComponentType<any>>(
        Component: T,
        propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean,
    ): MemoExoticComponent<T>;

    type LazyExoticComponent<T extends ComponentType<any>> = ExoticComponent<ComponentPropsWithRef<T>> & {
        readonly _result: T;
    };

    function lazy<T extends ComponentType<any>>(
        factory: () => Promise<{ default: T }>,
    ): LazyExoticComponent<T>;

    //
    // React Hooks
    // ----------------------------------------------------------------------

    // based on the code in https://github.com/facebook/react/pull/13968

    // Unlike the class component setState, the updates are not allowed to be partial
    type SetStateAction<S> = S | ((prevState: S) => S);
    // this technically does accept a second argument, but it's already under a deprecation warning
    // and it's not even released so probably better to not define it.
    type Dispatch<A> = (value: A) => void;
    // Since action _can_ be undefined, dispatch may be called without any parameters.
    type DispatchWithoutAction = () => void;
    // Unlike redux, the actions _can_ be anything
    type Reducer<S, A> = (prevState: S, action: A) => S;
    // If useReducer accepts a reducer without action, dispatch may be called without any parameters.
    type ReducerWithoutAction<S> = (prevState: S) => S;
    // types used to try and prevent the compiler from reducing S
    // to a supertype common with the second argument to useReducer()
    type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
    type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
    // The identity check is done with the SameValue algorithm (Object.is), which is stricter than ===
    type ReducerStateWithoutAction<R extends ReducerWithoutAction<any>> = R extends ReducerWithoutAction<infer S> ? S
        : never;
    type DependencyList = ReadonlyArray<unknown>;

    // NOTE: callbacks are _only_ allowed to return either void, or a destructor.
    type EffectCallback = () => void | Destructor;

    interface MutableRefObject<T> {
        current: T;
    }

    // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
    /**
     * Accepts a context object (the value returned from \`React.createContext\`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useContext
     */
    function useContext<T>(context: Context<T> /*, (not public API) observedBits?: number|boolean */): T;
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useState
     */
    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    // convenience overload when first argument is omitted
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useState
     */
    function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerStateWithoutAction<R>,
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>>(
        reducer: R,
        initializerArg: ReducerStateWithoutAction<R>,
        initializer?: undefined,
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */
    // overload where "I" may be a subset of ReducerState<R>; used to provide autocompletion.
    // If "I" matches ReducerState<R> exactly then the last overload will allow initializer to be omitted.
    // the last overload effectively behaves as if the identity function (x => x) is the initializer.
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I & ReducerState<R>,
        initializer: (arg: I & ReducerState<R>) => ReducerState<R>,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */
    // overload for free "I"; all goes as long as initializer converts it into "ReducerState<R>".
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerState<R>,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */

    // I'm not sure if I keep this 2-ary or if I make it (2,3)-ary; it's currently (2,3)-ary.
    // The Flow types do have an overload for 3-ary invocation with undefined initializer.

    // NOTE: without the ReducerState indirection, TypeScript would reduce S to be the most common
    // supertype between the reducer's return type and the initialState (or the initializer's return type),
    // which would prevent autocompletion from ever working.

    // TODO: double-check if this weird overload logic is necessary. It is possible it's either a bug
    // in older versions, or a regression in newer versions of the typescript completion service.
    function useReducer<R extends Reducer<any, any>>(
        reducer: R,
        initialState: ReducerState<R>,
        initializer?: undefined,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useRef
     */
    function useRef<T>(initialValue: T): MutableRefObject<T>;
    // convenience overload for refs given as a ref prop as they typically start with a null value
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * Usage note: if you need the result of useRef to be directly mutable, include \`| null\` in the type
     * of the generic argument.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useRef
     */
    function useRef<T>(initialValue: T | null): RefObject<T>;
    // convenience overload for potentially undefined initialValue / call with 0 arguments
    // has a default to stop it from defaulting to {} instead
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useRef
     */
    function useRef<T = undefined>(): MutableRefObject<T | undefined>;
    /**
     * The signature is identical to \`useEffect\`, but it fires synchronously after all DOM mutations.
     * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
     * \`useLayoutEffect\` will be flushed synchronously, before the browser has a chance to paint.
     *
     * Prefer the standard \`useEffect\` when possible to avoid blocking visual updates.
     *
     * If you’re migrating code from a class component, \`useLayoutEffect\` fires in the same phase as
     * \`componentDidMount\` and \`componentDidUpdate\`.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useLayoutEffect
     */
    function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
    /**
     * Accepts a function that contains imperative, possibly effectful code.
     *
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useEffect
     */
    function useEffect(effect: EffectCallback, deps?: DependencyList): void;
    // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
    /**
     * \`useImperativeHandle\` customizes the instance value that is exposed to parent components when using
     * \`ref\`. As always, imperative code using refs should be avoided in most cases.
     *
     * \`useImperativeHandle\` should be used with \`React.forwardRef\`.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useImperativeHandle
     */
    function useImperativeHandle<T, R extends T>(ref: Ref<T> | undefined, init: () => R, deps?: DependencyList): void;
    // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
    // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
    /**
     * \`useCallback\` will return a memoized version of the callback that only changes if one of the \`inputs\`
     * has changed.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useCallback
     */
    // A specific function type would not trigger implicit any.
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/52873#issuecomment-845806435 for a comparison between \`Function\` and more specific types.
    // tslint:disable-next-line ban-types
    function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
    /**
     * \`useMemo\` will only recompute the memoized value when one of the \`deps\` has changed.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useMemo
     */
    // allow undefined, but don't make it optional as that is very likely a mistake
    function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
    /**
     * \`useDebugValue\` can be used to display a label for custom hooks in React DevTools.
     *
     * NOTE: We don’t recommend adding debug values to every custom hook.
     * It’s most valuable for custom hooks that are part of shared libraries.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useDebugValue
     */
    // the name of the custom hook is itself derived from the function name at runtime:
    // it's just the function name without the "use" prefix.
    function useDebugValue<T>(value: T, format?: (value: T) => any): void;

    // must be synchronous
    export type TransitionFunction = () => VoidOrUndefinedOnly;
    // strange definition to allow vscode to show documentation on the invocation
    export interface TransitionStartFunction {
        /**
         * State updates caused inside the callback are allowed to be deferred.
         *
         * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
         *
         * @param callback A _synchronous_ function which causes state updates that can be deferred.
         */
        (callback: TransitionFunction): void;
    }

    /**
     * Returns a deferred version of the value that may “lag behind” it.
     *
     * This is commonly used to keep the interface responsive when you have something that renders immediately
     * based on user input and something that needs to wait for a data fetch.
     *
     * A good example of this is a text input.
     *
     * @param value The value that is going to be deferred
     *
     * @see https://react.dev/reference/react/useDeferredValue
     */
    export function useDeferredValue<T>(value: T): T;

    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The \`useTransition\` hook returns two values in an array.
     *
     * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish.
     * The second is a function that takes a callback. We can use it to tell React which state we want to defer.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**\`
     *
     * @see https://react.dev/reference/react/useTransition
     */
    export function useTransition(): [boolean, TransitionStartFunction];

    /**
     * Similar to \`useTransition\` but allows uses where hooks are not available.
     *
     * @param callback A _synchronous_ function which causes state updates that can be deferred.
     */
    export function startTransition(scope: TransitionFunction): void;

    export function useId(): string;

    /**
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @see https://github.com/facebook/react/pull/21913
     */
    export function useInsertionEffect(effect: EffectCallback, deps?: DependencyList): void;

    /**
     * @param subscribe
     * @param getSnapshot
     *
     * @see https://github.com/reactwg/react-18/discussions/86
     */
    // keep in sync with \`useSyncExternalStore\` from \`use-sync-external-store\`
    export function useSyncExternalStore<Snapshot>(
        subscribe: (onStoreChange: () => void) => () => void,
        getSnapshot: () => Snapshot,
        getServerSnapshot?: () => Snapshot,
    ): Snapshot;

    //
    // Event System
    // ----------------------------------------------------------------------
    // TODO: change any to unknown when moving to TS v3
    interface BaseSyntheticEvent<E = object, C = any, T = any> {
        nativeEvent: E;
        currentTarget: C;
        target: T;
        bubbles: boolean;
        cancelable: boolean;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        preventDefault(): void;
        isDefaultPrevented(): boolean;
        stopPropagation(): void;
        isPropagationStopped(): boolean;
        persist(): void;
        timeStamp: number;
        type: string;
    }

    /**
     * currentTarget - a reference to the element on which the event listener is registered.
     *
     * target - a reference to the element from which the event was originally dispatched.
     * This might be a child element to the element on which the event listener is registered.
     * If you thought this should be \`EventTarget & T\`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
     */
    interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

    interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
        clipboardData: DataTransfer;
    }

    interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
        data: string;
    }

    interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
        dataTransfer: DataTransfer;
    }

    interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
        pointerId: number;
        pressure: number;
        tangentialPressure: number;
        tiltX: number;
        tiltY: number;
        twist: number;
        width: number;
        height: number;
        pointerType: "mouse" | "pen" | "touch";
        isPrimary: boolean;
    }

    interface FocusEvent<Target = Element, RelatedTarget = Element> extends SyntheticEvent<Target, NativeFocusEvent> {
        relatedTarget: (EventTarget & RelatedTarget) | null;
        target: EventTarget & Target;
    }

    interface FormEvent<T = Element> extends SyntheticEvent<T> {
    }

    interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    export type ModifierKey =
        | "Alt"
        | "AltGraph"
        | "CapsLock"
        | "Control"
        | "Fn"
        | "FnLock"
        | "Hyper"
        | "Meta"
        | "NumLock"
        | "ScrollLock"
        | "Shift"
        | "Super"
        | "Symbol"
        | "SymbolLock";

    interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {
        altKey: boolean;
        /** @deprecated */
        charCode: number;
        ctrlKey: boolean;
        code: string;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        /**
         * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
         */
        key: string;
        /** @deprecated */
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        /** @deprecated */
        which: number;
    }

    interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        movementX: number;
        movementY: number;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget | null;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
        detail: number;
        view: AbstractView;
    }

    interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
        animationName: string;
        elapsedTime: number;
        pseudoElement: string;
    }

    interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
        elapsedTime: number;
        propertyName: string;
        pseudoElement: string;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
    type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
    type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
    type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

    //
    // Props / DOM Attributes
    // ----------------------------------------------------------------------

    interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    }

    interface SVGLineElementAttributes<T> extends SVGProps<T> {}
    interface SVGTextElementAttributes<T> extends SVGProps<T> {}

    interface DOMAttributes<T> {
        children?: ReactNode | undefined;
        dangerouslySetInnerHTML?: {
            // Should be InnerHTML['innerHTML'].
            // But unfortunately we're mixing renderer-specific type declarations.
            __html: string | TrustedHTML;
        } | undefined;

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T> | undefined;
        onCopyCapture?: ClipboardEventHandler<T> | undefined;
        onCut?: ClipboardEventHandler<T> | undefined;
        onCutCapture?: ClipboardEventHandler<T> | undefined;
        onPaste?: ClipboardEventHandler<T> | undefined;
        onPasteCapture?: ClipboardEventHandler<T> | undefined;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T> | undefined;
        onCompositionEndCapture?: CompositionEventHandler<T> | undefined;
        onCompositionStart?: CompositionEventHandler<T> | undefined;
        onCompositionStartCapture?: CompositionEventHandler<T> | undefined;
        onCompositionUpdate?: CompositionEventHandler<T> | undefined;
        onCompositionUpdateCapture?: CompositionEventHandler<T> | undefined;

        // Focus Events
        onFocus?: FocusEventHandler<T> | undefined;
        onFocusCapture?: FocusEventHandler<T> | undefined;
        onBlur?: FocusEventHandler<T> | undefined;
        onBlurCapture?: FocusEventHandler<T> | undefined;

        // Form Events
        onChange?: FormEventHandler<T> | undefined;
        onChangeCapture?: FormEventHandler<T> | undefined;
        onBeforeInput?: FormEventHandler<T> | undefined;
        onBeforeInputCapture?: FormEventHandler<T> | undefined;
        onInput?: FormEventHandler<T> | undefined;
        onInputCapture?: FormEventHandler<T> | undefined;
        onReset?: FormEventHandler<T> | undefined;
        onResetCapture?: FormEventHandler<T> | undefined;
        onSubmit?: FormEventHandler<T> | undefined;
        onSubmitCapture?: FormEventHandler<T> | undefined;
        onInvalid?: FormEventHandler<T> | undefined;
        onInvalidCapture?: FormEventHandler<T> | undefined;

        // Image Events
        onLoad?: ReactEventHandler<T> | undefined;
        onLoadCapture?: ReactEventHandler<T> | undefined;
        onError?: ReactEventHandler<T> | undefined; // also a Media Event
        onErrorCapture?: ReactEventHandler<T> | undefined; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T> | undefined;
        onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
        /** @deprecated */
        onKeyPress?: KeyboardEventHandler<T> | undefined;
        /** @deprecated */
        onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
        onKeyUp?: KeyboardEventHandler<T> | undefined;
        onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

        // Media Events
        onAbort?: ReactEventHandler<T> | undefined;
        onAbortCapture?: ReactEventHandler<T> | undefined;
        onCanPlay?: ReactEventHandler<T> | undefined;
        onCanPlayCapture?: ReactEventHandler<T> | undefined;
        onCanPlayThrough?: ReactEventHandler<T> | undefined;
        onCanPlayThroughCapture?: ReactEventHandler<T> | undefined;
        onDurationChange?: ReactEventHandler<T> | undefined;
        onDurationChangeCapture?: ReactEventHandler<T> | undefined;
        onEmptied?: ReactEventHandler<T> | undefined;
        onEmptiedCapture?: ReactEventHandler<T> | undefined;
        onEncrypted?: ReactEventHandler<T> | undefined;
        onEncryptedCapture?: ReactEventHandler<T> | undefined;
        onEnded?: ReactEventHandler<T> | undefined;
        onEndedCapture?: ReactEventHandler<T> | undefined;
        onLoadedData?: ReactEventHandler<T> | undefined;
        onLoadedDataCapture?: ReactEventHandler<T> | undefined;
        onLoadedMetadata?: ReactEventHandler<T> | undefined;
        onLoadedMetadataCapture?: ReactEventHandler<T> | undefined;
        onLoadStart?: ReactEventHandler<T> | undefined;
        onLoadStartCapture?: ReactEventHandler<T> | undefined;
        onPause?: ReactEventHandler<T> | undefined;
        onPauseCapture?: ReactEventHandler<T> | undefined;
        onPlay?: ReactEventHandler<T> | undefined;
        onPlayCapture?: ReactEventHandler<T> | undefined;
        onPlaying?: ReactEventHandler<T> | undefined;
        onPlayingCapture?: ReactEventHandler<T> | undefined;
        onProgress?: ReactEventHandler<T> | undefined;
        onProgressCapture?: ReactEventHandler<T> | undefined;
        onRateChange?: ReactEventHandler<T> | undefined;
        onRateChangeCapture?: ReactEventHandler<T> | undefined;
        onResize?: ReactEventHandler<T> | undefined;
        onResizeCapture?: ReactEventHandler<T> | undefined;
        onSeeked?: ReactEventHandler<T> | undefined;
        onSeekedCapture?: ReactEventHandler<T> | undefined;
        onSeeking?: ReactEventHandler<T> | undefined;
        onSeekingCapture?: ReactEventHandler<T> | undefined;
        onStalled?: ReactEventHandler<T> | undefined;
        onStalledCapture?: ReactEventHandler<T> | undefined;
        onSuspend?: ReactEventHandler<T> | undefined;
        onSuspendCapture?: ReactEventHandler<T> | undefined;
        onTimeUpdate?: ReactEventHandler<T> | undefined;
        onTimeUpdateCapture?: ReactEventHandler<T> | undefined;
        onVolumeChange?: ReactEventHandler<T> | undefined;
        onVolumeChangeCapture?: ReactEventHandler<T> | undefined;
        onWaiting?: ReactEventHandler<T> | undefined;
        onWaitingCapture?: ReactEventHandler<T> | undefined;

        // MouseEvents
        onAuxClick?: MouseEventHandler<T> | undefined;
        onAuxClickCapture?: MouseEventHandler<T> | undefined;
        onClick?: MouseEventHandler<T> | undefined;
        onClickCapture?: MouseEventHandler<T> | undefined;
        onContextMenu?: MouseEventHandler<T> | undefined;
        onContextMenuCapture?: MouseEventHandler<T> | undefined;
        onDoubleClick?: MouseEventHandler<T> | undefined;
        onDoubleClickCapture?: MouseEventHandler<T> | undefined;
        onDrag?: DragEventHandler<T> | undefined;
        onDragCapture?: DragEventHandler<T> | undefined;
        onDragEnd?: DragEventHandler<T> | undefined;
        onDragEndCapture?: DragEventHandler<T> | undefined;
        onDragEnter?: DragEventHandler<T> | undefined;
        onDragEnterCapture?: DragEventHandler<T> | undefined;
        onDragExit?: DragEventHandler<T> | undefined;
        onDragExitCapture?: DragEventHandler<T> | undefined;
        onDragLeave?: DragEventHandler<T> | undefined;
        onDragLeaveCapture?: DragEventHandler<T> | undefined;
        onDragOver?: DragEventHandler<T> | undefined;
        onDragOverCapture?: DragEventHandler<T> | undefined;
        onDragStart?: DragEventHandler<T> | undefined;
        onDragStartCapture?: DragEventHandler<T> | undefined;
        onDrop?: DragEventHandler<T> | undefined;
        onDropCapture?: DragEventHandler<T> | undefined;
        onMouseDown?: MouseEventHandler<T> | undefined;
        onMouseDownCapture?: MouseEventHandler<T> | undefined;
        onMouseEnter?: MouseEventHandler<T> | undefined;
        onMouseLeave?: MouseEventHandler<T> | undefined;
        onMouseMove?: MouseEventHandler<T> | undefined;
        onMouseMoveCapture?: MouseEventHandler<T> | undefined;
        onMouseOut?: MouseEventHandler<T> | undefined;
        onMouseOutCapture?: MouseEventHandler<T> | undefined;
        onMouseOver?: MouseEventHandler<T> | undefined;
        onMouseOverCapture?: MouseEventHandler<T> | undefined;
        onMouseUp?: MouseEventHandler<T> | undefined;
        onMouseUpCapture?: MouseEventHandler<T> | undefined;

        // Selection Events
        onSelect?: ReactEventHandler<T> | undefined;
        onSelectCapture?: ReactEventHandler<T> | undefined;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T> | undefined;
        onTouchCancelCapture?: TouchEventHandler<T> | undefined;
        onTouchEnd?: TouchEventHandler<T> | undefined;
        onTouchEndCapture?: TouchEventHandler<T> | undefined;
        onTouchMove?: TouchEventHandler<T> | undefined;
        onTouchMoveCapture?: TouchEventHandler<T> | undefined;
        onTouchStart?: TouchEventHandler<T> | undefined;
        onTouchStartCapture?: TouchEventHandler<T> | undefined;

        // Pointer Events
        onPointerDown?: PointerEventHandler<T> | undefined;
        onPointerDownCapture?: PointerEventHandler<T> | undefined;
        onPointerMove?: PointerEventHandler<T> | undefined;
        onPointerMoveCapture?: PointerEventHandler<T> | undefined;
        onPointerUp?: PointerEventHandler<T> | undefined;
        onPointerUpCapture?: PointerEventHandler<T> | undefined;
        onPointerCancel?: PointerEventHandler<T> | undefined;
        onPointerCancelCapture?: PointerEventHandler<T> | undefined;
        onPointerEnter?: PointerEventHandler<T> | undefined;
        onPointerEnterCapture?: PointerEventHandler<T> | undefined;
        onPointerLeave?: PointerEventHandler<T> | undefined;
        onPointerLeaveCapture?: PointerEventHandler<T> | undefined;
        onPointerOver?: PointerEventHandler<T> | undefined;
        onPointerOverCapture?: PointerEventHandler<T> | undefined;
        onPointerOut?: PointerEventHandler<T> | undefined;
        onPointerOutCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined;

        // UI Events
        onScroll?: UIEventHandler<T> | undefined;
        onScrollCapture?: UIEventHandler<T> | undefined;

        // Wheel Events
        onWheel?: WheelEventHandler<T> | undefined;
        onWheelCapture?: WheelEventHandler<T> | undefined;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T> | undefined;
        onAnimationStartCapture?: AnimationEventHandler<T> | undefined;
        onAnimationEnd?: AnimationEventHandler<T> | undefined;
        onAnimationEndCapture?: AnimationEventHandler<T> | undefined;
        onAnimationIteration?: AnimationEventHandler<T> | undefined;
        onAnimationIterationCapture?: AnimationEventHandler<T> | undefined;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T> | undefined;
        onTransitionEndCapture?: TransitionEventHandler<T> | undefined;
    }

    export interface CSSProperties extends CSS.Properties<string | number> {
        /**
         * The index signature was removed to enable closed typing for style
         * using CSSType. You're able to use type assertion or module augmentation
         * to add properties or an index signature of your own.
         *
         * For examples and more information, visit:
         * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
         */
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        "aria-activedescendant"?: string | undefined;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        "aria-atomic"?: Booleanish | undefined;
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        /**
         * Defines a string value that labels the current element, which is intended to be converted into Braille.
         * @see aria-label.
         */
        "aria-braillelabel"?: string | undefined;
        /**
         * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
         * @see aria-roledescription.
         */
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: Booleanish | undefined;
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        "aria-colcount"?: number | undefined;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        "aria-colindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-colindex.
         * @see aria-rowindextext.
         */
        "aria-colindextext"?: string | undefined;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        "aria-colspan"?: number | undefined;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        "aria-controls"?: string | undefined;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        "aria-describedby"?: string | undefined;
        /**
         * Defines a string value that describes or annotates the current element.
         * @see related aria-describedby.
         */
        "aria-description"?: string | undefined;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        "aria-details"?: string | undefined;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        "aria-disabled"?: Booleanish | undefined;
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        "aria-errormessage"?: string | undefined;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        "aria-expanded"?: Booleanish | undefined;
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        "aria-flowto"?: string | undefined;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        "aria-grabbed"?: Booleanish | undefined;
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        "aria-hidden"?: Booleanish | undefined;
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        "aria-keyshortcuts"?: string | undefined;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        "aria-label"?: string | undefined;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        "aria-labelledby"?: string | undefined;
        /** Defines the hierarchical level of an element within a structure. */
        "aria-level"?: number | undefined;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        /** Indicates whether an element is modal when displayed. */
        "aria-modal"?: Booleanish | undefined;
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        "aria-multiline"?: Booleanish | undefined;
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        "aria-multiselectable"?: Booleanish | undefined;
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        "aria-owns"?: string | undefined;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        "aria-placeholder"?: string | undefined;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        "aria-posinset"?: number | undefined;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        "aria-readonly"?: Booleanish | undefined;
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        "aria-relevant"?:
            | "additions"
            | "additions removals"
            | "additions text"
            | "all"
            | "removals"
            | "removals additions"
            | "removals text"
            | "text"
            | "text additions"
            | "text removals"
            | undefined;
        /** Indicates that user input is required on the element before a form may be submitted. */
        "aria-required"?: Booleanish | undefined;
        /** Defines a human-readable, author-localized description for the role of an element. */
        "aria-roledescription"?: string | undefined;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        "aria-rowcount"?: number | undefined;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        "aria-rowindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-rowindex.
         * @see aria-colindextext.
         */
        "aria-rowindextext"?: string | undefined;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        "aria-rowspan"?: number | undefined;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        "aria-selected"?: Booleanish | undefined;
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        "aria-setsize"?: number | undefined;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        /** Defines the maximum allowed value for a range widget. */
        "aria-valuemax"?: number | undefined;
        /** Defines the minimum allowed value for a range widget. */
        "aria-valuemin"?: number | undefined;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        "aria-valuenow"?: number | undefined;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        "aria-valuetext"?: string | undefined;
    }

    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
        | "alert"
        | "alertdialog"
        | "application"
        | "article"
        | "banner"
        | "button"
        | "cell"
        | "checkbox"
        | "columnheader"
        | "combobox"
        | "complementary"
        | "contentinfo"
        | "definition"
        | "dialog"
        | "directory"
        | "document"
        | "feed"
        | "figure"
        | "form"
        | "grid"
        | "gridcell"
        | "group"
        | "heading"
        | "img"
        | "link"
        | "list"
        | "listbox"
        | "listitem"
        | "log"
        | "main"
        | "marquee"
        | "math"
        | "menu"
        | "menubar"
        | "menuitem"
        | "menuitemcheckbox"
        | "menuitemradio"
        | "navigation"
        | "none"
        | "note"
        | "option"
        | "presentation"
        | "progressbar"
        | "radio"
        | "radiogroup"
        | "region"
        | "row"
        | "rowgroup"
        | "rowheader"
        | "scrollbar"
        | "search"
        | "searchbox"
        | "separator"
        | "slider"
        | "spinbutton"
        | "status"
        | "switch"
        | "tab"
        | "table"
        | "tablist"
        | "tabpanel"
        | "term"
        | "textbox"
        | "timer"
        | "toolbar"
        | "tooltip"
        | "tree"
        | "treegrid"
        | "treeitem"
        | (string & {});

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | ReadonlyArray<string> | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;

        // Standard HTML Attributes
        accessKey?: string | undefined;
        autoFocus?: boolean | undefined;
        className?: string | undefined;
        contentEditable?: Booleanish | "inherit" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: Booleanish | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        placeholder?: string | undefined;
        slot?: string | undefined;
        spellCheck?: Booleanish | undefined;
        style?: CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;

        // Unknown
        radioGroup?: string | undefined; // <command>, <menuitem>

        // WAI-ARIA
        role?: AriaRole | undefined;

        // RDFa Attributes
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;

        // Non-standard Attributes
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;

        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
         */
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
         */
        is?: string | undefined;
    }

    /**
     * For internal usage only.
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS {}

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        as?: string | undefined;
        async?: boolean | undefined;
        autoComplete?: string | undefined;
        autoPlay?: boolean | undefined;
        capture?: boolean | "user" | "environment" | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        cite?: string | undefined;
        classID?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: CrossOrigin;
        data?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        disabled?: boolean | undefined;
        download?: any;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        frameBorder?: number | string | undefined;
        headers?: string | undefined;
        height?: number | string | undefined;
        high?: number | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        htmlFor?: string | undefined;
        httpEquiv?: string | undefined;
        integrity?: string | undefined;
        keyParams?: string | undefined;
        keyType?: string | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        list?: string | undefined;
        loop?: boolean | undefined;
        low?: number | undefined;
        manifest?: string | undefined;
        marginHeight?: number | undefined;
        marginWidth?: number | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        media?: string | undefined;
        mediaGroup?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        muted?: boolean | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        reversed?: boolean | undefined;
        rows?: number | undefined;
        rowSpan?: number | undefined;
        sandbox?: string | undefined;
        scope?: string | undefined;
        scoped?: boolean | undefined;
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        selected?: boolean | undefined;
        shape?: string | undefined;
        size?: number | undefined;
        sizes?: string | undefined;
        span?: number | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        srcLang?: string | undefined;
        srcSet?: string | undefined;
        start?: number | undefined;
        step?: number | string | undefined;
        summary?: string | undefined;
        target?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;
    }

    type HTMLAttributeReferrerPolicy =
        | ""
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";

    type HTMLAttributeAnchorTarget =
        | "_self"
        | "_blank"
        | "_parent"
        | "_top"
        | (string & {});

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        ping?: string | undefined;
        target?: HTMLAttributeAnchorTarget | undefined;
        type?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        coords?: string | undefined;
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        shape?: string | undefined;
        target?: string | undefined;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string | undefined;
        target?: string | undefined;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        name?: string | undefined;
        type?: "submit" | "reset" | "button" | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        width?: number | string | undefined;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
        width?: number | string | undefined;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean | undefined;
        onToggle?: ReactEventHandler<T> | undefined;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        onCancel?: ReactEventHandler<T> | undefined;
        onClose?: ReactEventHandler<T> | undefined;
        open?: boolean | undefined;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        src?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        name?: string | undefined;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        autoComplete?: string | undefined;
        encType?: string | undefined;
        method?: string | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        target?: string | undefined;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string | undefined;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        /** @deprecated */
        frameBorder?: number | string | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        /** @deprecated */
        marginHeight?: number | undefined;
        /** @deprecated */
        marginWidth?: number | undefined;
        name?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sandbox?: string | undefined;
        /** @deprecated */
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        width?: number | string | undefined;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        crossOrigin?: CrossOrigin;
        decoding?: "async" | "auto" | "sync" | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    type HTMLInputTypeAttribute =
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
        | (string & {});

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string | undefined;
        alt?: string | undefined;
        autoComplete?: string | undefined;
        capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        height?: number | string | undefined;
        list?: string | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        src?: string | undefined;
        step?: number | string | undefined;
        type?: HTMLInputTypeAttribute | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        width?: number | string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        challenge?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        keyType?: string | undefined;
        keyParams?: string | undefined;
        name?: string | undefined;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string | undefined;
        crossOrigin?: CrossOrigin;
        fetchPriority?: "high" | "low" | "auto";
        href?: string | undefined;
        hrefLang?: string | undefined;
        integrity?: string | undefined;
        media?: string | undefined;
        imageSrcSet?: string | undefined;
        imageSizes?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        type?: string | undefined;
        charSet?: string | undefined;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string | undefined;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean | undefined;
        controls?: boolean | undefined;
        controlsList?: string | undefined;
        crossOrigin?: CrossOrigin;
        loop?: boolean | undefined;
        mediaGroup?: string | undefined;
        muted?: boolean | undefined;
        playsInline?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string | undefined;
        httpEquiv?: string | undefined;
        name?: string | undefined;
        media?: string | undefined;
        content?: string | undefined;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        high?: number | undefined;
        low?: number | undefined;
        max?: number | string | undefined;
        min?: number | string | undefined;
        optimum?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string | undefined;
        data?: string | undefined;
        form?: string | undefined;
        height?: number | string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean | undefined;
        start?: number | undefined;
        type?: "1" | "a" | "A" | "i" | "I" | undefined;
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
        selected?: boolean | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
        name?: string | undefined;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean | undefined;
        /** @deprecated */
        charSet?: string | undefined;
        crossOrigin?: CrossOrigin;
        defer?: boolean | undefined;
        integrity?: string | undefined;
        noModule?: boolean | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        src?: string | undefined;
        type?: string | undefined;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        media?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string | undefined;
        scoped?: boolean | undefined;
        type?: string | undefined;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | undefined;
        bgcolor?: string | undefined;
        border?: number | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        frame?: boolean | undefined;
        rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
        summary?: string | undefined;
        width?: number | string | undefined;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        cols?: number | undefined;
        dirName?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
        name?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        rows?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        wrap?: string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
        height?: number | string | undefined;
        width?: number | string | undefined;
        valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string | undefined;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        src?: string | undefined;
        srcLang?: string | undefined;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        width?: number | string | undefined;
        disablePictureInPicture?: boolean | undefined;
        disableRemotePlayback?: boolean | undefined;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        suppressHydrationWarning?: boolean | undefined;

        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
        className?: string | undefined;
        color?: string | undefined;
        height?: number | string | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        max?: number | string | undefined;
        media?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        name?: string | undefined;
        style?: CSSProperties | undefined;
        target?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;

        // Other HTML properties supported by SVG elements in browsers
        role?: AriaRole | undefined;
        tabIndex?: number | undefined;
        crossOrigin?: CrossOrigin;

        // SVG Specific attributes
        accentHeight?: number | string | undefined;
        accumulate?: "none" | "sum" | undefined;
        additive?: "replace" | "sum" | undefined;
        alignmentBaseline?:
            | "auto"
            | "baseline"
            | "before-edge"
            | "text-before-edge"
            | "middle"
            | "central"
            | "after-edge"
            | "text-after-edge"
            | "ideographic"
            | "alphabetic"
            | "hanging"
            | "mathematical"
            | "inherit"
            | undefined;
        allowReorder?: "no" | "yes" | undefined;
        alphabetic?: number | string | undefined;
        amplitude?: number | string | undefined;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
        ascent?: number | string | undefined;
        attributeName?: string | undefined;
        attributeType?: string | undefined;
        autoReverse?: Booleanish | undefined;
        azimuth?: number | string | undefined;
        baseFrequency?: number | string | undefined;
        baselineShift?: number | string | undefined;
        baseProfile?: number | string | undefined;
        bbox?: number | string | undefined;
        begin?: number | string | undefined;
        bias?: number | string | undefined;
        by?: number | string | undefined;
        calcMode?: number | string | undefined;
        capHeight?: number | string | undefined;
        clip?: number | string | undefined;
        clipPath?: string | undefined;
        clipPathUnits?: number | string | undefined;
        clipRule?: number | string | undefined;
        colorInterpolation?: number | string | undefined;
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
        colorProfile?: number | string | undefined;
        colorRendering?: number | string | undefined;
        contentScriptType?: number | string | undefined;
        contentStyleType?: number | string | undefined;
        cursor?: number | string | undefined;
        cx?: number | string | undefined;
        cy?: number | string | undefined;
        d?: string | undefined;
        decelerate?: number | string | undefined;
        descent?: number | string | undefined;
        diffuseConstant?: number | string | undefined;
        direction?: number | string | undefined;
        display?: number | string | undefined;
        divisor?: number | string | undefined;
        dominantBaseline?: number | string | undefined;
        dur?: number | string | undefined;
        dx?: number | string | undefined;
        dy?: number | string | undefined;
        edgeMode?: number | string | undefined;
        elevation?: number | string | undefined;
        enableBackground?: number | string | undefined;
        end?: number | string | undefined;
        exponent?: number | string | undefined;
        externalResourcesRequired?: Booleanish | undefined;
        fill?: string | undefined;
        fillOpacity?: number | string | undefined;
        fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
        filter?: string | undefined;
        filterRes?: number | string | undefined;
        filterUnits?: number | string | undefined;
        floodColor?: number | string | undefined;
        floodOpacity?: number | string | undefined;
        focusable?: Booleanish | "auto" | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | string | undefined;
        fontSizeAdjust?: number | string | undefined;
        fontStretch?: number | string | undefined;
        fontStyle?: number | string | undefined;
        fontVariant?: number | string | undefined;
        fontWeight?: number | string | undefined;
        format?: number | string | undefined;
        fr?: number | string | undefined;
        from?: number | string | undefined;
        fx?: number | string | undefined;
        fy?: number | string | undefined;
        g1?: number | string | undefined;
        g2?: number | string | undefined;
        glyphName?: number | string | undefined;
        glyphOrientationHorizontal?: number | string | undefined;
        glyphOrientationVertical?: number | string | undefined;
        glyphRef?: number | string | undefined;
        gradientTransform?: string | undefined;
        gradientUnits?: string | undefined;
        hanging?: number | string | undefined;
        horizAdvX?: number | string | undefined;
        horizOriginX?: number | string | undefined;
        href?: string | undefined;
        ideographic?: number | string | undefined;
        imageRendering?: number | string | undefined;
        in2?: number | string | undefined;
        in?: string | undefined;
        intercept?: number | string | undefined;
        k1?: number | string | undefined;
        k2?: number | string | undefined;
        k3?: number | string | undefined;
        k4?: number | string | undefined;
        k?: number | string | undefined;
        kernelMatrix?: number | string | undefined;
        kernelUnitLength?: number | string | undefined;
        kerning?: number | string | undefined;
        keyPoints?: number | string | undefined;
        keySplines?: number | string | undefined;
        keyTimes?: number | string | undefined;
        lengthAdjust?: number | string | undefined;
        letterSpacing?: number | string | undefined;
        lightingColor?: number | string | undefined;
        limitingConeAngle?: number | string | undefined;
        local?: number | string | undefined;
        markerEnd?: string | undefined;
        markerHeight?: number | string | undefined;
        markerMid?: string | undefined;
        markerStart?: string | undefined;
        markerUnits?: number | string | undefined;
        markerWidth?: number | string | undefined;
        mask?: string | undefined;
        maskContentUnits?: number | string | undefined;
        maskUnits?: number | string | undefined;
        mathematical?: number | string | undefined;
        mode?: number | string | undefined;
        numOctaves?: number | string | undefined;
        offset?: number | string | undefined;
        opacity?: number | string | undefined;
        operator?: number | string | undefined;
        order?: number | string | undefined;
        orient?: number | string | undefined;
        orientation?: number | string | undefined;
        origin?: number | string | undefined;
        overflow?: number | string | undefined;
        overlinePosition?: number | string | undefined;
        overlineThickness?: number | string | undefined;
        paintOrder?: number | string | undefined;
        panose1?: number | string | undefined;
        path?: string | undefined;
        pathLength?: number | string | undefined;
        patternContentUnits?: string | undefined;
        patternTransform?: number | string | undefined;
        patternUnits?: string | undefined;
        pointerEvents?: number | string | undefined;
        points?: string | undefined;
        pointsAtX?: number | string | undefined;
        pointsAtY?: number | string | undefined;
        pointsAtZ?: number | string | undefined;
        preserveAlpha?: Booleanish | undefined;
        preserveAspectRatio?: string | undefined;
        primitiveUnits?: number | string | undefined;
        r?: number | string | undefined;
        radius?: number | string | undefined;
        refX?: number | string | undefined;
        refY?: number | string | undefined;
        renderingIntent?: number | string | undefined;
        repeatCount?: number | string | undefined;
        repeatDur?: number | string | undefined;
        requiredExtensions?: number | string | undefined;
        requiredFeatures?: number | string | undefined;
        restart?: number | string | undefined;
        result?: string | undefined;
        rotate?: number | string | undefined;
        rx?: number | string | undefined;
        ry?: number | string | undefined;
        scale?: number | string | undefined;
        seed?: number | string | undefined;
        shapeRendering?: number | string | undefined;
        slope?: number | string | undefined;
        spacing?: number | string | undefined;
        specularConstant?: number | string | undefined;
        specularExponent?: number | string | undefined;
        speed?: number | string | undefined;
        spreadMethod?: string | undefined;
        startOffset?: number | string | undefined;
        stdDeviation?: number | string | undefined;
        stemh?: number | string | undefined;
        stemv?: number | string | undefined;
        stitchTiles?: number | string | undefined;
        stopColor?: string | undefined;
        stopOpacity?: number | string | undefined;
        strikethroughPosition?: number | string | undefined;
        strikethroughThickness?: number | string | undefined;
        string?: number | string | undefined;
        stroke?: string | undefined;
        strokeDasharray?: string | number | undefined;
        strokeDashoffset?: string | number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
        strokeMiterlimit?: number | string | undefined;
        strokeOpacity?: number | string | undefined;
        strokeWidth?: number | string | undefined;
        surfaceScale?: number | string | undefined;
        systemLanguage?: number | string | undefined;
        tableValues?: number | string | undefined;
        targetX?: number | string | undefined;
        targetY?: number | string | undefined;
        textAnchor?: string | undefined;
        textDecoration?: number | string | undefined;
        textLength?: number | string | undefined;
        textRendering?: number | string | undefined;
        to?: number | string | undefined;
        transform?: string | undefined;
        u1?: number | string | undefined;
        u2?: number | string | undefined;
        underlinePosition?: number | string | undefined;
        underlineThickness?: number | string | undefined;
        unicode?: number | string | undefined;
        unicodeBidi?: number | string | undefined;
        unicodeRange?: number | string | undefined;
        unitsPerEm?: number | string | undefined;
        vAlphabetic?: number | string | undefined;
        values?: string | undefined;
        vectorEffect?: number | string | undefined;
        version?: string | undefined;
        vertAdvY?: number | string | undefined;
        vertOriginX?: number | string | undefined;
        vertOriginY?: number | string | undefined;
        vHanging?: number | string | undefined;
        vIdeographic?: number | string | undefined;
        viewBox?: string | undefined;
        viewTarget?: number | string | undefined;
        visibility?: number | string | undefined;
        vMathematical?: number | string | undefined;
        widths?: number | string | undefined;
        wordSpacing?: number | string | undefined;
        writingMode?: number | string | undefined;
        x1?: number | string | undefined;
        x2?: number | string | undefined;
        x?: number | string | undefined;
        xChannelSelector?: string | undefined;
        xHeight?: number | string | undefined;
        xlinkActuate?: string | undefined;
        xlinkArcrole?: string | undefined;
        xlinkHref?: string | undefined;
        xlinkRole?: string | undefined;
        xlinkShow?: string | undefined;
        xlinkTitle?: string | undefined;
        xlinkType?: string | undefined;
        xmlBase?: string | undefined;
        xmlLang?: string | undefined;
        xmlns?: string | undefined;
        xmlnsXlink?: string | undefined;
        xmlSpace?: string | undefined;
        y1?: number | string | undefined;
        y2?: number | string | undefined;
        y?: number | string | undefined;
        yChannelSelector?: string | undefined;
        z?: number | string | undefined;
        zoomAndPan?: string | undefined;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean | undefined;
        allowpopups?: boolean | undefined;
        autosize?: boolean | undefined;
        blinkfeatures?: string | undefined;
        disableblinkfeatures?: string | undefined;
        disableguestresize?: boolean | undefined;
        disablewebsecurity?: boolean | undefined;
        guestinstance?: string | undefined;
        httpreferrer?: string | undefined;
        nodeintegration?: boolean | undefined;
        partition?: string | undefined;
        plugins?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
        useragent?: string | undefined;
        webpreferences?: string | undefined;
    }

    //
    // React.DOM
    // ----------------------------------------------------------------------

    interface ReactHTML {
        a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
        article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
        b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
        bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
        br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
        button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
        caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        center: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        data: DetailedHTMLFactory<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
        datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
        dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        del: DetailedHTMLFactory<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
        details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
        dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
        div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
        dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
        fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
        figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
        header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
        html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
        i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
        img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
        kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
        label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
        li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
        main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
        mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
        menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
        meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
        nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
        ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
        option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
        output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
        p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
        picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
        progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
        q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        search: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        slot: DetailedHTMLFactory<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
        script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
        section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
        span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
        sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
        template: DetailedHTMLFactory<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
        tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
        textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
        thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
        title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
        tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
        track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
        u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        "var": DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
        wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
    }

    interface ReactSVG {
        animate: SVGFactory;
        circle: SVGFactory;
        clipPath: SVGFactory;
        defs: SVGFactory;
        desc: SVGFactory;
        ellipse: SVGFactory;
        feBlend: SVGFactory;
        feColorMatrix: SVGFactory;
        feComponentTransfer: SVGFactory;
        feComposite: SVGFactory;
        feConvolveMatrix: SVGFactory;
        feDiffuseLighting: SVGFactory;
        feDisplacementMap: SVGFactory;
        feDistantLight: SVGFactory;
        feDropShadow: SVGFactory;
        feFlood: SVGFactory;
        feFuncA: SVGFactory;
        feFuncB: SVGFactory;
        feFuncG: SVGFactory;
        feFuncR: SVGFactory;
        feGaussianBlur: SVGFactory;
        feImage: SVGFactory;
        feMerge: SVGFactory;
        feMergeNode: SVGFactory;
        feMorphology: SVGFactory;
        feOffset: SVGFactory;
        fePointLight: SVGFactory;
        feSpecularLighting: SVGFactory;
        feSpotLight: SVGFactory;
        feTile: SVGFactory;
        feTurbulence: SVGFactory;
        filter: SVGFactory;
        foreignObject: SVGFactory;
        g: SVGFactory;
        image: SVGFactory;
        line: SVGFactory;
        linearGradient: SVGFactory;
        marker: SVGFactory;
        mask: SVGFactory;
        metadata: SVGFactory;
        path: SVGFactory;
        pattern: SVGFactory;
        polygon: SVGFactory;
        polyline: SVGFactory;
        radialGradient: SVGFactory;
        rect: SVGFactory;
        stop: SVGFactory;
        svg: SVGFactory;
        switch: SVGFactory;
        symbol: SVGFactory;
        text: SVGFactory;
        textPath: SVGFactory;
        tspan: SVGFactory;
        use: SVGFactory;
        view: SVGFactory;
    }

    interface ReactDOM extends ReactHTML, ReactSVG {}

    //
    // React.PropTypes
    // ----------------------------------------------------------------------

    type Validator<T> = PropTypes.Validator<T>;

    type Requireable<T> = PropTypes.Requireable<T>;

    type ValidationMap<T> = PropTypes.ValidationMap<T>;

    type WeakValidationMap<T> = {
        [K in keyof T]?: null extends T[K] ? Validator<T[K] | null | undefined>
            : undefined extends T[K] ? Validator<T[K] | null | undefined>
            : Validator<T[K]>;
    };

    interface ReactPropTypes {
        any: typeof PropTypes.any;
        array: typeof PropTypes.array;
        bool: typeof PropTypes.bool;
        func: typeof PropTypes.func;
        number: typeof PropTypes.number;
        object: typeof PropTypes.object;
        string: typeof PropTypes.string;
        node: typeof PropTypes.node;
        element: typeof PropTypes.element;
        instanceOf: typeof PropTypes.instanceOf;
        oneOf: typeof PropTypes.oneOf;
        oneOfType: typeof PropTypes.oneOfType;
        arrayOf: typeof PropTypes.arrayOf;
        objectOf: typeof PropTypes.objectOf;
        shape: typeof PropTypes.shape;
        exact: typeof PropTypes.exact;
    }

    //
    // React.Children
    // ----------------------------------------------------------------------

    /**
     * @deprecated - Use \`typeof React.Children\` instead.
     */
    // Sync with type of \`const Children\`.
    interface ReactChildren {
        map<T, C>(
            children: C | ReadonlyArray<C>,
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    }

    //
    // Browser Interfaces
    // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    // ----------------------------------------------------------------------

    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }

    interface TouchList {
        [index: number]: Touch;
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }

    //
    // Error Interfaces
    // ----------------------------------------------------------------------
    interface ErrorInfo {
        /**
         * Captures which component contained the exception, and its ancestors.
         */
        componentStack: string;
    }

    // Keep in sync with JSX namespace in ./jsx-runtime.d.ts and ./jsx-dev-runtime.d.ts
    namespace JSX {
        type ElementType = GlobalJSXElementType;
        interface Element extends GlobalJSXElement {}
        interface ElementClass extends GlobalJSXElementClass {}
        interface ElementAttributesProperty extends GlobalJSXElementAttributesProperty {}
        interface ElementChildrenAttribute extends GlobalJSXElementChildrenAttribute {}

        type LibraryManagedAttributes<C, P> = GlobalJSXLibraryManagedAttributes<C, P>;

        interface IntrinsicAttributes extends GlobalJSXIntrinsicAttributes {}
        interface IntrinsicClassAttributes<T> extends GlobalJSXIntrinsicClassAttributes<T> {}
        interface IntrinsicElements extends GlobalJSXIntrinsicElements {}
    }
}

// naked 'any' type in a conditional type will short circuit and union both the then/else branches
// so boolean is only resolved for T = any
type IsExactlyAny<T> = boolean extends (T extends never ? true : false) ? true : false;

type ExactlyAnyPropertyKeys<T> = { [K in keyof T]: IsExactlyAny<T[K]> extends true ? K : never }[keyof T];
type NotExactlyAnyPropertyKeys<T> = Exclude<keyof T, ExactlyAnyPropertyKeys<T>>;

// Try to resolve ill-defined props like for JS users: props can be any, or sometimes objects with properties of type any
type MergePropTypes<P, T> =
    // Distribute over P in case it is a union type
    P extends any
        // If props is type any, use propTypes definitions
        ? IsExactlyAny<P> extends true ? T
            // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
        : string extends keyof P ? P
            // Prefer declared types which are not exactly any
        :
            & Pick<P, NotExactlyAnyPropertyKeys<P>>
            // For props which are exactly any, use the type inferred from propTypes if present
            & Pick<T, Exclude<keyof T, NotExactlyAnyPropertyKeys<P>>>
            // Keep leftover props not specified in propTypes
            & Pick<P, Exclude<keyof P, keyof T>>
        : never;

type InexactPartial<T> = { [K in keyof T]?: T[K] | undefined };

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any ? string extends keyof P ? P
    :
        & Pick<P, Exclude<keyof P, keyof D>>
        & InexactPartial<Pick<P, Extract<keyof P, keyof D>>>
        & InexactPartial<Pick<D, Exclude<keyof D, keyof P>>>
    : never;

type ReactManagedAttributes<C, P> = C extends { propTypes: infer T; defaultProps: infer D }
    ? Defaultize<MergePropTypes<P, PropTypes.InferProps<T>>, D>
    : C extends { propTypes: infer T } ? MergePropTypes<P, PropTypes.InferProps<T>>
    : C extends { defaultProps: infer D } ? Defaultize<P, D>
    : P;

declare global {
    /**
     * @deprecated Use \`React.JSX\` instead of the global \`JSX\` namespace.
     */
    namespace JSX {
        // We don't just alias React.ElementType because React.ElementType
        // historically does more than we need it to.
        // E.g. it also contains .propTypes and so TS also verifies the declared
        // props type does match the declared .propTypes.
        // But if libraries declared their .propTypes but not props type,
        // or they mismatch, you won't be able to use the class component
        // as a JSX.ElementType.
        // We could fix this everywhere but we're ultimately not interested in
        // .propTypes assignability so we might as well drop it entirely here to
        //  reduce the work of the type-checker.
        // TODO: Check impact of making React.ElementType<P = any> = React.JSXElementConstructor<P>
        type ElementType = string | React.JSXElementConstructor<any>;
        interface Element extends React.ReactElement<any, any> {}
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }

        // We can't recurse forever because \`type\` can't be self-referential;
        // let's assume it's reasonable to do a single React.lazy() around a single React.memo() / vice-versa
        type LibraryManagedAttributes<C, P> = C extends
            React.MemoExoticComponent<infer T> | React.LazyExoticComponent<infer T>
            ? T extends React.MemoExoticComponent<infer U> | React.LazyExoticComponent<infer U>
                ? ReactManagedAttributes<U, P>
            : ReactManagedAttributes<T, P>
            : ReactManagedAttributes<C, P>;

        interface IntrinsicAttributes extends React.Attributes {}
        interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}

        interface IntrinsicElements {
            // HTML
            a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
            details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
            nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
            p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
            script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
            title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: React.SVGProps<SVGSVGElement>;

            animate: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateMotion: React.SVGProps<SVGElement>;
            animateTransform: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: React.SVGProps<SVGCircleElement>;
            clipPath: React.SVGProps<SVGClipPathElement>;
            defs: React.SVGProps<SVGDefsElement>;
            desc: React.SVGProps<SVGDescElement>;
            ellipse: React.SVGProps<SVGEllipseElement>;
            feBlend: React.SVGProps<SVGFEBlendElement>;
            feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
            feComposite: React.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
            feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
            feFlood: React.SVGProps<SVGFEFloodElement>;
            feFuncA: React.SVGProps<SVGFEFuncAElement>;
            feFuncB: React.SVGProps<SVGFEFuncBElement>;
            feFuncG: React.SVGProps<SVGFEFuncGElement>;
            feFuncR: React.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
            feImage: React.SVGProps<SVGFEImageElement>;
            feMerge: React.SVGProps<SVGFEMergeElement>;
            feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: React.SVGProps<SVGFEMorphologyElement>;
            feOffset: React.SVGProps<SVGFEOffsetElement>;
            fePointLight: React.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: React.SVGProps<SVGFESpotLightElement>;
            feTile: React.SVGProps<SVGFETileElement>;
            feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
            filter: React.SVGProps<SVGFilterElement>;
            foreignObject: React.SVGProps<SVGForeignObjectElement>;
            g: React.SVGProps<SVGGElement>;
            image: React.SVGProps<SVGImageElement>;
            line: React.SVGLineElementAttributes<SVGLineElement>;
            linearGradient: React.SVGProps<SVGLinearGradientElement>;
            marker: React.SVGProps<SVGMarkerElement>;
            mask: React.SVGProps<SVGMaskElement>;
            metadata: React.SVGProps<SVGMetadataElement>;
            mpath: React.SVGProps<SVGElement>;
            path: React.SVGProps<SVGPathElement>;
            pattern: React.SVGProps<SVGPatternElement>;
            polygon: React.SVGProps<SVGPolygonElement>;
            polyline: React.SVGProps<SVGPolylineElement>;
            radialGradient: React.SVGProps<SVGRadialGradientElement>;
            rect: React.SVGProps<SVGRectElement>;
            stop: React.SVGProps<SVGStopElement>;
            switch: React.SVGProps<SVGSwitchElement>;
            symbol: React.SVGProps<SVGSymbolElement>;
            text: React.SVGTextElementAttributes<SVGTextElement>;
            textPath: React.SVGProps<SVGTextPathElement>;
            tspan: React.SVGProps<SVGTSpanElement>;
            use: React.SVGProps<SVGUseElement>;
            view: React.SVGProps<SVGViewElement>;
        }
    }
}

// React.JSX needs to point to global.JSX to keep global module augmentations intact.
// But we can't access global.JSX so we need to create these aliases instead.
// Once the global JSX namespace will be removed we replace React.JSX with the contents of global.JSX
type GlobalJSXElementType = JSX.ElementType;
interface GlobalJSXElement extends JSX.Element {}
interface GlobalJSXElementClass extends JSX.ElementClass {}
interface GlobalJSXElementAttributesProperty extends JSX.ElementAttributesProperty {}
interface GlobalJSXElementChildrenAttribute extends JSX.ElementChildrenAttribute {}

type GlobalJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;

interface GlobalJSXIntrinsicAttributes extends JSX.IntrinsicAttributes {}
interface GlobalJSXIntrinsicClassAttributes<T> extends JSX.IntrinsicClassAttributes<T> {}

interface GlobalJSXIntrinsicElements extends JSX.IntrinsicElements {}
`,Ey=`import * as React from "./";

export namespace JSX {
    type ElementType = React.JSX.ElementType;
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
}
`,by=`import * as React from "./";

export namespace JSX {
    type ElementType = React.JSX.ElementType;
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
}
`,My=`{
    "name": "@types/react",
    "version": "18.2.24",
    "description": "TypeScript definitions for React",
    "homepage": "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react",
    "license": "MIT",
    "contributors": [
        {
            "name": "Asana",
            "url": "https://asana.com"
        },
        {
            "name": "AssureSign",
            "url": "http://www.assuresign.com"
        },
        {
            "name": "Microsoft",
            "url": "https://microsoft.com"
        },
        {
            "name": "John Reilly",
            "url": "https://github.com/johnnyreilly",
            "githubUsername": "johnnyreilly"
        },
        {
            "name": "Benoit Benezech",
            "url": "https://github.com/bbenezech",
            "githubUsername": "bbenezech"
        },
        {
            "name": "Patricio Zavolinsky",
            "url": "https://github.com/pzavolinsky",
            "githubUsername": "pzavolinsky"
        },
        {
            "name": "Eric Anderson",
            "url": "https://github.com/ericanderson",
            "githubUsername": "ericanderson"
        },
        {
            "name": "Dovydas Navickas",
            "url": "https://github.com/DovydasNavickas",
            "githubUsername": "DovydasNavickas"
        },
        {
            "name": "Josh Rutherford",
            "url": "https://github.com/theruther4d",
            "githubUsername": "theruther4d"
        },
        {
            "name": "Guilherme Hübner",
            "url": "https://github.com/guilhermehubner",
            "githubUsername": "guilhermehubner"
        },
        {
            "name": "Ferdy Budhidharma",
            "url": "https://github.com/ferdaber",
            "githubUsername": "ferdaber"
        },
        {
            "name": "Johann Rakotoharisoa",
            "url": "https://github.com/jrakotoharisoa",
            "githubUsername": "jrakotoharisoa"
        },
        {
            "name": "Olivier Pascal",
            "url": "https://github.com/pascaloliv",
            "githubUsername": "pascaloliv"
        },
        {
            "name": "Martin Hochel",
            "url": "https://github.com/hotell",
            "githubUsername": "hotell"
        },
        {
            "name": "Frank Li",
            "url": "https://github.com/franklixuefei",
            "githubUsername": "franklixuefei"
        },
        {
            "name": "Jessica Franco",
            "url": "https://github.com/Jessidhia",
            "githubUsername": "Jessidhia"
        },
        {
            "name": "Saransh Kataria",
            "url": "https://github.com/saranshkataria",
            "githubUsername": "saranshkataria"
        },
        {
            "name": "Kanitkorn Sujautra",
            "url": "https://github.com/lukyth",
            "githubUsername": "lukyth"
        },
        {
            "name": "Sebastian Silbermann",
            "url": "https://github.com/eps1lon",
            "githubUsername": "eps1lon"
        },
        {
            "name": "Kyle Scully",
            "url": "https://github.com/zieka",
            "githubUsername": "zieka"
        },
        {
            "name": "Cong Zhang",
            "url": "https://github.com/dancerphil",
            "githubUsername": "dancerphil"
        },
        {
            "name": "Dimitri Mitropoulos",
            "url": "https://github.com/dimitropoulos",
            "githubUsername": "dimitropoulos"
        },
        {
            "name": "JongChan Choi",
            "url": "https://github.com/disjukr",
            "githubUsername": "disjukr"
        },
        {
            "name": "Victor Magalhães",
            "url": "https://github.com/vhfmag",
            "githubUsername": "vhfmag"
        },
        {
            "name": "Dale Tan",
            "url": "https://github.com/hellatan",
            "githubUsername": "hellatan"
        },
        {
            "name": "Priyanshu Rav",
            "url": "https://github.com/priyanshurav",
            "githubUsername": "priyanshurav"
        },
        {
            "name": "Dmitry Semigradsky",
            "url": "https://github.com/Semigradsky",
            "githubUsername": "Semigradsky"
        }
    ],
    "main": "",
    "types": "index.d.ts",
    "typesVersions": {
        "<=5.0": {
            "*": [
                "ts5.0/*"
            ]
        }
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
        "directory": "types/react"
    },
    "scripts": {},
    "dependencies": {
        "@types/prop-types": "*",
        "@types/scheduler": "*",
        "csstype": "^3.0.2"
    },
    "typesPublisherContentHash": "c17adf75e0ce8a2aea840595092cfa07671746c86fd5213d1c3bdd302ab350d9",
    "typeScriptVersion": "4.5",
    "exports": {
        ".": {
            "types@<=5.0": {
                "default": "./ts5.0/index.d.ts"
            },
            "types": {
                "default": "./index.d.ts"
            }
        },
        "./canary": {
            "types@<=5.0": {
                "default": "./ts5.0/canary.d.ts"
            },
            "types": {
                "default": "./canary.d.ts"
            }
        },
        "./experimental": {
            "types@<=5.0": {
                "default": "./ts5.0/experimental.d.ts"
            },
            "types": {
                "default": "./experimental.d.ts"
            }
        },
        "./jsx-runtime": {
            "types@<=5.0": {
                "default": "./ts5.0/jsx-runtime.d.ts"
            },
            "types": {
                "default": "./jsx-runtime.d.ts"
            }
        },
        "./jsx-dev-runtime": {
            "types@<=5.0": {
                "default": "./ts5.0/jsx-dev-runtime.d.ts"
            },
            "types": {
                "default": "./jsx-dev-runtime.d.ts"
            }
        },
        "./package.json": "./package.json"
    }
}`,Ly=`/**
 * These are types for things that are present in the React \`canary\` release channel.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your \`tsconfig.json\` already has a \`"types"\` array in the \`"compilerOptions"\` section,
 * is to add \`"react/canary"\` to the \`"types"\` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * \`\`\`ts
 * import {} from 'react/canary'
 * \`\`\`
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * \`\`\`ts
 * /// <reference types="react/canary" />
 * \`\`\`
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react/src/React.js to see how the exports are declared,

import React = require(".");

export {};

declare module "." {
    interface ThenableImpl<T> {
        then(onFulfill: (value: T) => unknown, onReject: (error: unknown) => unknown): void | PromiseLike<unknown>;
    }
    interface UntrackedThenable<T> extends ThenableImpl<T> {
        status?: void;
    }

    export interface PendingThenable<T> extends ThenableImpl<T> {
        status: "pending";
    }

    export interface FulfilledThenable<T> extends ThenableImpl<T> {
        status: "fulfilled";
        value: T;
    }

    export interface RejectedThenable<T> extends ThenableImpl<T> {
        status: "rejected";
        reason: unknown;
    }

    export type Thenable<T> = UntrackedThenable<T> | PendingThenable<T> | FulfilledThenable<T> | RejectedThenable<T>;

    export type Usable<T> = Thenable<T> | Context<T>;

    export function use<T>(usable: Usable<T>): T;

    interface ServerContextJSONArray extends ReadonlyArray<ServerContextJSONValue> {}
    export type ServerContextJSONValue =
        | string
        | boolean
        | number
        | null
        | ServerContextJSONArray
        | { [key: string]: ServerContextJSONValue };
    export interface ServerContext<T extends ServerContextJSONValue> {
        Provider: Provider<T>;
    }
    /**
     * Accepts a context object (the value returned from \`React.createContext\` or \`React.createServerContext\`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useContext
     */
    function useContext<T extends ServerContextJSONValue>(context: ServerContext<T>): T;
    export function createServerContext<T extends ServerContextJSONValue>(
        globalName: string,
        defaultValue: T,
    ): ServerContext<T>;

    // tslint:disable-next-line ban-types
    export function cache<CachedFunction extends Function>(fn: CachedFunction): CachedFunction;

    export function unstable_useCacheRefresh(): () => void;
}
`,Hy=`/**
 * These are types for things that are present in the \`experimental\` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your \`tsconfig.json\` already has a \`"types"\` array in the \`"compilerOptions"\` section,
 * is to add \`"react/experimental"\` to the \`"types"\` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * \`\`\`ts
 * import {} from 'react/experimental'
 * \`\`\`
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * \`\`\`ts
 * /// <reference types="react/experimental" />
 * \`\`\`
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react/src/React.js to see how the exports are declared,
// and https://github.com/facebook/react/blob/master/packages/shared/ReactFeatureFlags.js to verify which APIs are
// flagged experimental or not. Experimental APIs will be tagged with \`__EXPERIMENTAL__\`.
//
// For the inputs of types exported as simply a fiber tag, the \`beginWork\` function of ReactFiberBeginWork.js
// is a good place to start looking for details; it generally calls prop validation functions or delegates
// all tasks done as part of the render phase (the concurrent part of the React update cycle).
//
// Suspense-related handling can be found in ReactFiberThrow.js.

import React = require("./canary");

export {};

declare const UNDEFINED_VOID_ONLY: unique symbol;
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

declare module "." {
    // Need an interface to not cause ReactNode to be a self-referential type.
    interface PromiseLikeOfReactNode extends PromiseLike<ReactNode> {}
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {
        promises: PromiseLikeOfReactNode;
    }

    export interface SuspenseProps {
        /**
         * The presence of this prop indicates that the content is computationally expensive to render.
         * In other words, the tree is CPU bound and not I/O bound (e.g. due to fetching data).
         * @see {@link https://github.com/facebook/react/pull/19936}
         */
        unstable_expectedLoadTime?: number | undefined;
    }

    export type SuspenseListRevealOrder = "forwards" | "backwards" | "together";
    export type SuspenseListTailMode = "collapsed" | "hidden";

    export interface SuspenseListCommonProps {
        /**
         * Note that SuspenseList require more than one child;
         * it is a runtime warning to provide only a single child.
         *
         * It does, however, allow those children to be wrapped inside a single
         * level of \`<React.Fragment>\`.
         */
        children: ReactElement | Iterable<ReactElement>;
    }

    interface DirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the \`SuspenseList\` children should be revealed.
         */
        revealOrder: "forwards" | "backwards";
        /**
         * Dictates how unloaded items in a SuspenseList is shown.
         *
         * - By default, \`SuspenseList\` will show all fallbacks in the list.
         * - \`collapsed\` shows only the next fallback in the list.
         * - \`hidden\` doesn’t show any unloaded items.
         */
        tail?: SuspenseListTailMode | undefined;
    }

    interface NonDirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the \`SuspenseList\` children should be revealed.
         */
        revealOrder?: Exclude<SuspenseListRevealOrder, DirectionalSuspenseListProps["revealOrder"]> | undefined;
        /**
         * The tail property is invalid when not using the \`forwards\` or \`backwards\` reveal orders.
         */
        tail?: never | undefined;
    }

    export type SuspenseListProps = DirectionalSuspenseListProps | NonDirectionalSuspenseListProps;

    /**
     * \`SuspenseList\` helps coordinate many components that can suspend by orchestrating the order
     * in which these components are revealed to the user.
     *
     * When multiple components need to fetch data, this data may arrive in an unpredictable order.
     * However, if you wrap these items in a \`SuspenseList\`, React will not show an item in the list
     * until previous items have been displayed (this behavior is adjustable).
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist
     * @see https://reactjs.org/docs/concurrent-mode-patterns.html#suspenselist
     */
    export const SuspenseList: ExoticComponent<SuspenseListProps>;

    // tslint:disable-next-line ban-types
    export function experimental_useEffectEvent<T extends Function>(event: T): T;

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS {
        functions: (formData: FormData) => void;
    }

    export interface TransitionStartFunction {
        /**
         * Marks all state updates inside the async function as transitions
         *
         * @see {https://react.dev/reference/react/ts5.0/useTransition#starttransition}
         *
         * @param callback
         */
        (callback: () => Promise<VoidOrUndefinedOnly>): void;
    }

    function experimental_useOptimistic<State>(
        passthrough: State,
    ): [State, (action: State | ((pendingState: State) => State)) => void];
    function experimental_useOptimistic<State, Action>(
        passthrough: State,
        reducer: (state: State, action: Action) => State,
    ): [State, (action: Action) => void];
}
`,Sy=`/*
React projects that don't include the DOM library need these interfaces to compile.
React Native applications use React, but there is no DOM available. The JavaScript runtime
is ES6/ES2015 only. These definitions allow such projects to compile with only \`--lib ES6\`.

Warning: all of these interfaces are empty. If you want type definitions for various properties
(such as HTMLInputElement.prototype.value), you need to add \`--lib DOM\` (via command line or tsconfig.json).
*/

interface Event {}
interface AnimationEvent extends Event {}
interface ClipboardEvent extends Event {}
interface CompositionEvent extends Event {}
interface DragEvent extends Event {}
interface FocusEvent extends Event {}
interface KeyboardEvent extends Event {}
interface MouseEvent extends Event {}
interface TouchEvent extends Event {}
interface PointerEvent extends Event {}
interface TransitionEvent extends Event {}
interface UIEvent extends Event {}
interface WheelEvent extends Event {}

interface EventTarget {}
interface Document {}
interface DataTransfer {}
interface StyleMedia {}

interface Element {}
interface DocumentFragment {}

interface HTMLElement extends Element {}
interface HTMLAnchorElement extends HTMLElement {}
interface HTMLAreaElement extends HTMLElement {}
interface HTMLAudioElement extends HTMLElement {}
interface HTMLBaseElement extends HTMLElement {}
interface HTMLBodyElement extends HTMLElement {}
interface HTMLBRElement extends HTMLElement {}
interface HTMLButtonElement extends HTMLElement {}
interface HTMLCanvasElement extends HTMLElement {}
interface HTMLDataElement extends HTMLElement {}
interface HTMLDataListElement extends HTMLElement {}
interface HTMLDetailsElement extends HTMLElement {}
interface HTMLDialogElement extends HTMLElement {}
interface HTMLDivElement extends HTMLElement {}
interface HTMLDListElement extends HTMLElement {}
interface HTMLEmbedElement extends HTMLElement {}
interface HTMLFieldSetElement extends HTMLElement {}
interface HTMLFormElement extends HTMLElement {}
interface HTMLHeadingElement extends HTMLElement {}
interface HTMLHeadElement extends HTMLElement {}
interface HTMLHRElement extends HTMLElement {}
interface HTMLHtmlElement extends HTMLElement {}
interface HTMLIFrameElement extends HTMLElement {}
interface HTMLImageElement extends HTMLElement {}
interface HTMLInputElement extends HTMLElement {}
interface HTMLModElement extends HTMLElement {}
interface HTMLLabelElement extends HTMLElement {}
interface HTMLLegendElement extends HTMLElement {}
interface HTMLLIElement extends HTMLElement {}
interface HTMLLinkElement extends HTMLElement {}
interface HTMLMapElement extends HTMLElement {}
interface HTMLMetaElement extends HTMLElement {}
interface HTMLMeterElement extends HTMLElement {}
interface HTMLObjectElement extends HTMLElement {}
interface HTMLOListElement extends HTMLElement {}
interface HTMLOptGroupElement extends HTMLElement {}
interface HTMLOptionElement extends HTMLElement {}
interface HTMLOutputElement extends HTMLElement {}
interface HTMLParagraphElement extends HTMLElement {}
interface HTMLParamElement extends HTMLElement {}
interface HTMLPreElement extends HTMLElement {}
interface HTMLProgressElement extends HTMLElement {}
interface HTMLQuoteElement extends HTMLElement {}
interface HTMLSlotElement extends HTMLElement {}
interface HTMLScriptElement extends HTMLElement {}
interface HTMLSelectElement extends HTMLElement {}
interface HTMLSourceElement extends HTMLElement {}
interface HTMLSpanElement extends HTMLElement {}
interface HTMLStyleElement extends HTMLElement {}
interface HTMLTableElement extends HTMLElement {}
interface HTMLTableColElement extends HTMLElement {}
interface HTMLTableDataCellElement extends HTMLElement {}
interface HTMLTableHeaderCellElement extends HTMLElement {}
interface HTMLTableRowElement extends HTMLElement {}
interface HTMLTableSectionElement extends HTMLElement {}
interface HTMLTemplateElement extends HTMLElement {}
interface HTMLTextAreaElement extends HTMLElement {}
interface HTMLTimeElement extends HTMLElement {}
interface HTMLTitleElement extends HTMLElement {}
interface HTMLTrackElement extends HTMLElement {}
interface HTMLUListElement extends HTMLElement {}
interface HTMLVideoElement extends HTMLElement {}
interface HTMLWebViewElement extends HTMLElement {}

interface SVGElement extends Element {}
interface SVGSVGElement extends SVGElement {}
interface SVGCircleElement extends SVGElement {}
interface SVGClipPathElement extends SVGElement {}
interface SVGDefsElement extends SVGElement {}
interface SVGDescElement extends SVGElement {}
interface SVGEllipseElement extends SVGElement {}
interface SVGFEBlendElement extends SVGElement {}
interface SVGFEColorMatrixElement extends SVGElement {}
interface SVGFEComponentTransferElement extends SVGElement {}
interface SVGFECompositeElement extends SVGElement {}
interface SVGFEConvolveMatrixElement extends SVGElement {}
interface SVGFEDiffuseLightingElement extends SVGElement {}
interface SVGFEDisplacementMapElement extends SVGElement {}
interface SVGFEDistantLightElement extends SVGElement {}
interface SVGFEDropShadowElement extends SVGElement {}
interface SVGFEFloodElement extends SVGElement {}
interface SVGFEFuncAElement extends SVGElement {}
interface SVGFEFuncBElement extends SVGElement {}
interface SVGFEFuncGElement extends SVGElement {}
interface SVGFEFuncRElement extends SVGElement {}
interface SVGFEGaussianBlurElement extends SVGElement {}
interface SVGFEImageElement extends SVGElement {}
interface SVGFEMergeElement extends SVGElement {}
interface SVGFEMergeNodeElement extends SVGElement {}
interface SVGFEMorphologyElement extends SVGElement {}
interface SVGFEOffsetElement extends SVGElement {}
interface SVGFEPointLightElement extends SVGElement {}
interface SVGFESpecularLightingElement extends SVGElement {}
interface SVGFESpotLightElement extends SVGElement {}
interface SVGFETileElement extends SVGElement {}
interface SVGFETurbulenceElement extends SVGElement {}
interface SVGFilterElement extends SVGElement {}
interface SVGForeignObjectElement extends SVGElement {}
interface SVGGElement extends SVGElement {}
interface SVGImageElement extends SVGElement {}
interface SVGLineElement extends SVGElement {}
interface SVGLinearGradientElement extends SVGElement {}
interface SVGMarkerElement extends SVGElement {}
interface SVGMaskElement extends SVGElement {}
interface SVGMetadataElement extends SVGElement {}
interface SVGPathElement extends SVGElement {}
interface SVGPatternElement extends SVGElement {}
interface SVGPolygonElement extends SVGElement {}
interface SVGPolylineElement extends SVGElement {}
interface SVGRadialGradientElement extends SVGElement {}
interface SVGRectElement extends SVGElement {}
interface SVGStopElement extends SVGElement {}
interface SVGSwitchElement extends SVGElement {}
interface SVGSymbolElement extends SVGElement {}
interface SVGTextElement extends SVGElement {}
interface SVGTextPathElement extends SVGElement {}
interface SVGTSpanElement extends SVGElement {}
interface SVGUseElement extends SVGElement {}
interface SVGViewElement extends SVGElement {}

interface FormData {}
interface Text {}
interface TouchList {}
interface WebGLRenderingContext {}
interface WebGL2RenderingContext {}

interface TrustedHTML {}
`,xy=`// NOTE: Users of the \`experimental\` builds of React should add a reference
// to 'react/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

/// <reference path="global.d.ts" />

import * as CSS from "csstype";
import * as PropTypes from "prop-types";
import { Interaction as SchedulerInteraction } from "scheduler/tracing";

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;
type Booleanish = boolean | "true" | "false";
type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;

declare const UNDEFINED_VOID_ONLY: unique symbol;
// Destructors are only allowed to return void.
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = React;
export as namespace React;

declare namespace React {
    //
    // React Elements
    // ----------------------------------------------------------------------

    type ElementType<P = any> =
        | {
            [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never;
        }[keyof JSX.IntrinsicElements]
        | ComponentType<P>;
    type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

    type JSXElementConstructor<P> =
        | ((
            props: P,
            /**
             * @deprecated https://legacy.react/ts5.0js.org/docs/legacy-context.html#referencing-context-in-stateless-function-components
             */
            deprecatedLegacyContext?: any,
        ) => ReactElement<any, any> | null)
        | (new(
            props: P,
            /**
             * @deprecated https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods
             */
            deprecatedLegacyContext?: any,
        ) => Component<any, any>);

    interface RefObject<T> {
        readonly current: T | null;
    }
    // Bivariance hack for consistent unsoundness with RefObject
    type RefCallback<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"];
    type Ref<T> = RefCallback<T> | RefObject<T> | null;
    type LegacyRef<T> = string | Ref<T>;
    /**
     * Gets the instance type for a React element. The instance will be different for various component types:
     *
     * - React class components will be the class instance. So if you had \`class Foo extends React.Component<{}> {}\`
     *   and used \`React.ElementRef<typeof Foo>\` then the type would be the instance of \`Foo\`.
     * - React stateless functional components do not have a backing instance and so \`React.ElementRef<typeof Bar>\`
     *   (when \`Bar\` is \`function Bar() {}\`) will give you the \`undefined\` type.
     * - JSX intrinsics like \`div\` will give you their DOM instance. For \`React.ElementRef<'div'>\` that would be
     *   \`HTMLDivElement\`. For \`React.ElementRef<'input'>\` that would be \`HTMLInputElement\`.
     * - React stateless functional components that forward a \`ref\` will give you the \`ElementRef\` of the forwarded
     *   to component.
     *
     * \`C\` must be the type _of_ a React component so you need to use typeof as in \`React.ElementRef<typeof MyComponent>\`.
     *
     * @todo In Flow, this works a little different with forwarded refs and the \`AbstractComponent\` that
     *       \`React.forwardRef()\` returns.
     */
    type ElementRef<
        C extends
            | ForwardRefExoticComponent<any>
            | { new(props: any): Component<any> }
            | ((props: any, context?: any) => ReactElement | null)
            | keyof JSX.IntrinsicElements,
    > =
        // need to check first if \`ref\` is a valid prop for ts@3.0
        // otherwise it will infer \`{}\` instead of \`never\`
        "ref" extends keyof ComponentPropsWithRef<C> ? NonNullable<ComponentPropsWithRef<C>["ref"]> extends Ref<
                infer Instance
            > ? Instance
            : never
            : never;

    type ComponentState = any;

    type Key = string | number | bigint;

    /**
     * @internal You shouldn't need to use this type since you never see these attributes
     * inside your component or have to validate them.
     */
    interface Attributes {
        key?: Key | null | undefined;
    }
    interface RefAttributes<T> extends Attributes {
        /**
         * Allows getting a ref to the component instance.
         * Once the component unmounts, React will set \`ref.current\` to \`null\` (or call the ref with \`null\` if you passed a callback ref).
         * @see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
         */
        ref?: Ref<T> | undefined;
    }
    interface ClassAttributes<T> extends Attributes {
        /**
         * Allows getting a ref to the component instance.
         * Once the component unmounts, React will set \`ref.current\` to \`null\` (or call the ref with \`null\` if you passed a callback ref).
         * @see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
         */
        ref?: LegacyRef<T> | undefined;
    }

    interface ReactElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }

    interface ReactComponentElement<
        T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
        P = Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, "key" | "ref">>,
    > extends ReactElement<P, Exclude<T, number>> {}

    interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {
        ref?: ("ref" extends keyof P ? P extends { ref?: infer R | undefined } ? R : never : never) | undefined;
    }

    type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
    interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P, ComponentClass<P>> {
        ref?: LegacyRef<T> | undefined;
    }

    type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

    // string fallback for custom web-components
    interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element>
        extends ReactElement<P, string>
    {
        ref: LegacyRef<T>;
    }

    // ReactHTML for ReactHTMLElement
    interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> {}

    interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
        type: keyof ReactHTML;
    }

    // ReactSVG for ReactSVGElement
    interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
        type: keyof ReactSVG;
    }

    interface ReactPortal extends ReactElement {
        children: ReactNode;
    }

    //
    // Factories
    // ----------------------------------------------------------------------

    type Factory<P> = (props?: Attributes & P, ...children: ReactNode[]) => ReactElement<P>;

    /**
     * @deprecated Please use \`FunctionComponentFactory\`
     */
    type SFCFactory<P> = FunctionComponentFactory<P>;

    type FunctionComponentFactory<P> = (
        props?: Attributes & P,
        ...children: ReactNode[]
    ) => FunctionComponentElement<P>;

    type ComponentFactory<P, T extends Component<P, ComponentState>> = (
        props?: ClassAttributes<T> & P,
        ...children: ReactNode[]
    ) => CElement<P, T>;

    type CFactory<P, T extends Component<P, ComponentState>> = ComponentFactory<P, T>;
    type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

    type DOMFactory<P extends DOMAttributes<T>, T extends Element> = (
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ) => DOMElement<P, T>;

    interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {}

    interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
        (props?: ClassAttributes<T> & P | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
    }

    interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
        (
            props?: ClassAttributes<SVGElement> & SVGAttributes<SVGElement> | null,
            ...children: ReactNode[]
        ): ReactSVGElement;
    }

    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactText = string | number;
    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactChild = ReactElement | string | number;

    /**
     * @deprecated Use either \`ReactNode[]\` if you need an array or \`Iterable<ReactNode>\` if its passed to a host component.
     */
    interface ReactNodeArray extends ReadonlyArray<ReactNode> {}
    /**
     * WARNING: Not related to \`React.Fragment\`.
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactFragment = Iterable<ReactNode>;

    /**
     * For internal usage only.
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {}
    type ReactNode =
        | ReactElement
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
        | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
            keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
        ];

    //
    // Top Level API
    // ----------------------------------------------------------------------

    // DOM Elements
    function createFactory<T extends HTMLElement>(
        type: keyof ReactHTML,
    ): HTMLFactory<T>;
    function createFactory(
        type: keyof ReactSVG,
    ): SVGFactory;
    function createFactory<P extends DOMAttributes<T>, T extends Element>(
        type: string,
    ): DOMFactory<P, T>;

    // Custom components
    function createFactory<P>(type: FunctionComponent<P>): FunctionComponentFactory<P>;
    function createFactory<P>(
        type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
    ): CFactory<P, ClassicComponent<P, ComponentState>>;
    function createFactory<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
    ): CFactory<P, T>;
    function createFactory<P>(type: ComponentClass<P>): Factory<P>;

    // DOM Elements
    // TODO: generalize this to everything in \`keyof ReactHTML\`, not just "input"
    function createElement(
        type: "input",
        props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        type: keyof ReactHTML,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
        type: keyof ReactSVG,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): ReactSVGElement;
    function createElement<P extends DOMAttributes<T>, T extends Element>(
        type: string,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components

    function createElement<P extends {}>(
        type: FunctionComponent<P>,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function createElement<P extends {}>(
        type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
        props?: ClassAttributes<ClassicComponent<P, ComponentState>> & P | null,
        ...children: ReactNode[]
    ): CElement<P, ClassicComponent<P, ComponentState>>;
    function createElement<P extends {}, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function createElement<P extends {}>(
        type: FunctionComponent<P> | ComponentClass<P> | string,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): ReactElement<P>;

    // DOM Elements
    // ReactHTMLElement
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: DetailedReactHTMLElement<P, T>,
        props?: P,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    // ReactHTMLElement, less specific
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: ReactHTMLElement<T>,
        props?: P,
        ...children: ReactNode[]
    ): ReactHTMLElement<T>;
    // SVGElement
    function cloneElement<P extends SVGAttributes<T>, T extends SVGElement>(
        element: ReactSVGElement,
        props?: P,
        ...children: ReactNode[]
    ): ReactSVGElement;
    // DOM Element (has to be the last, because type checking stops at first overload that fits)
    function cloneElement<P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        props?: DOMAttributes<T> & P,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components
    function cloneElement<P>(
        element: FunctionComponentElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function cloneElement<P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        props?: Partial<P> & ClassAttributes<T>,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function cloneElement<P>(
        element: ReactElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): ReactElement<P>;

    // Context via RenderProps
    interface ProviderProps<T> {
        value: T;
        children?: ReactNode | undefined;
    }

    interface ConsumerProps<T> {
        children: (value: T) => ReactNode;
    }

    // TODO: similar to how Fragment is actually a symbol, the values returned from createContext,
    // forwardRef and memo are actually objects that are treated specially by the renderer; see:
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/ReactContext.js#L35-L48
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/forwardRef.js#L42-L45
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/memo.js#L27-L31
    // However, we have no way of telling the JSX parser that it's a JSX element type or its props other than
    // by pretending to be a normal component.
    //
    // We don't just use ComponentType or FunctionComponent types because you are not supposed to attach statics to this
    // object, but rather to the original function.
    interface ExoticComponent<P = {}> {
        /**
         * **NOTE**: Exotic components are not callable.
         */
        (props: P): ReactElement | null;
        readonly $$typeof: symbol;
    }

    interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
        displayName?: string | undefined;
    }

    interface ProviderExoticComponent<P> extends ExoticComponent<P> {
        propTypes?: WeakValidationMap<P> | undefined;
    }

    type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

    // NOTE: only the Context object itself can get a displayName
    // https://github.com/facebook/react-devtools/blob/e0b854e4c/backend/attachRendererFiber.js#L310-L325
    type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
    type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
    interface Context<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
        displayName?: string | undefined;
    }
    function createContext<T>(
        // If you thought this should be optional, see
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
        defaultValue: T,
    ): Context<T>;

    function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;

    // Sync with \`ReactChildren\` until \`ReactChildren\` is removed.
    const Children: {
        map<T, C>(
            children: C | ReadonlyArray<C>,
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    };
    const Fragment: ExoticComponent<{ children?: ReactNode | undefined }>;
    const StrictMode: ExoticComponent<{ children?: ReactNode | undefined }>;

    interface SuspenseProps {
        children?: ReactNode | undefined;

        /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
        fallback?: ReactNode;
    }

    const Suspense: ExoticComponent<SuspenseProps>;
    const version: string;

    /**
     * {@link https://react.dev/reference/react/Profiler#onrender-callback Profiler API}
     */
    type ProfilerOnRenderCallback = (
        id: string,
        phase: "mount" | "update",
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<SchedulerInteraction>,
    ) => void;
    interface ProfilerProps {
        children?: ReactNode | undefined;
        id: string;
        onRender: ProfilerOnRenderCallback;
    }

    const Profiler: ExoticComponent<ProfilerProps>;

    //
    // Component API
    // ----------------------------------------------------------------------

    type ReactInstance = Component<any> | Element;

    // Base component for plain JS classes
    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {}
    class Component<P, S> {
        // tslint won't let me format the sample code in a way that vscode likes it :(
        /**
         * If set, \`this.context\` will be set at runtime to the current value of the given Context.
         *
         * Usage:
         *
         * \`\`\`ts
         * type MyContext = number
         * const Ctx = React.createContext<MyContext>(0)
         *
         * class Foo extends React.Component {
         *   static contextType = Ctx
         *   context!: React.ContextType<typeof Ctx>
         *   render () {
         *     return <>My context's value: {this.context}</>;
         *   }
         * }
         * \`\`\`
         *
         * @see https://react.dev/reference/react/Component#static-contexttype
         */
        static contextType?: Context<any> | undefined;

        /**
         * If using the new style context, re-declare this in your class to be the
         * \`React.ContextType\` of your \`static contextType\`.
         * Should be used with type annotation or static contextType.
         *
         * \`\`\`ts
         * static contextType = MyContext
         * // For TS pre-3.7:
         * context!: React.ContextType<typeof MyContext>
         * // For TS 3.7 and above:
         * declare context: React.ContextType<typeof MyContext>
         * \`\`\`
         *
         * @see https://react.dev/reference/react/Component#context
         */
        context: unknown;

        constructor(props: Readonly<P> | P);
        /**
         * @deprecated
         * @see https://legacy.reactjs.org/docs/legacy-context.html
         */
        constructor(props: P, context: any);

        // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
        // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
        // Also, the \` | S\` allows intellisense to not be dumbisense
        setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null) | (Pick<S, K> | S | null),
            callback?: () => void,
        ): void;

        forceUpdate(callback?: () => void): void;
        render(): ReactNode;

        readonly props: Readonly<P>;
        state: Readonly<S>;
        /**
         * @deprecated
         * https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
         */
        refs: {
            [key: string]: ReactInstance;
        };
    }

    class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}

    interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
        replaceState(nextState: S, callback?: () => void): void;
        isMounted(): boolean;
        getInitialState?(): S;
    }

    interface ChildContextProvider<CC> {
        getChildContext(): CC;
    }

    //
    // Class Interfaces
    // ----------------------------------------------------------------------

    type FC<P = {}> = FunctionComponent<P>;

    interface FunctionComponent<P = {}> {
        (props: P, context?: any): ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    /**
     * @deprecated - Equivalent with \`React.FC\`.
     */
    type VFC<P = {}> = VoidFunctionComponent<P>;

    /**
     * @deprecated - Equivalent with \`React.FunctionComponent\`.
     */
    interface VoidFunctionComponent<P = {}> {
        (props: P, context?: any): ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

    interface ForwardRefRenderFunction<T, P = {}> {
        (props: P, ref: ForwardedRef<T>): ReactElement | null;
        displayName?: string | undefined;
        // explicit rejected with \`never\` required due to
        // https://github.com/microsoft/TypeScript/issues/36826
        /**
         * defaultProps are not supported on render functions
         */
        defaultProps?: never | undefined;
        /**
         * propTypes are not supported on render functions
         */
        propTypes?: never | undefined;
    }

    interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
        new(props: P, context?: any): Component<P, S>;
        propTypes?: WeakValidationMap<P> | undefined;
        contextType?: Context<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
        new(props: P, context?: any): ClassicComponent<P, ComponentState>;
        getDefaultProps?(): P;
    }

    /**
     * We use an intersection type to infer multiple type parameters from
     * a single argument, which is useful for many top-level API defs.
     * See https://github.com/Microsoft/TypeScript/issues/7234 for more info.
     */
    type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> =
        & C
        & (new(props: P, context?: any) => T);

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    // This should actually be something like \`Lifecycle<P, S> | DeprecatedLifecycle<P, S>\`,
    // as React will _not_ call the deprecated lifecycle methods if any of the new lifecycle
    // methods are present.
    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
        /**
         * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
         */
        componentDidMount?(): void;
        /**
         * Called to determine whether the change in props and state should trigger a re-render.
         *
         * \`Component\` always returns true.
         * \`PureComponent\` implements a shallow comparison on props and state and returns true if any
         * props or states have changed.
         *
         * If false is returned, \`Component#render\`, \`componentWillUpdate\`
         * and \`componentDidUpdate\` will not be called.
         */
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
        /**
         * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
         * cancelled network requests, or cleaning up any DOM elements created in \`componentDidMount\`.
         */
        componentWillUnmount?(): void;
        /**
         * Catches exceptions generated in descendant components. Unhandled exceptions will cause
         * the entire component tree to unmount.
         */
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    }

    // Unfortunately, we have no way of declaring that the component constructor must implement this
    interface StaticLifecycle<P, S> {
        getDerivedStateFromProps?: GetDerivedStateFromProps<P, S> | undefined;
        getDerivedStateFromError?: GetDerivedStateFromError<P, S> | undefined;
    }

    type GetDerivedStateFromProps<P, S> =
        /**
         * Returns an update to a component's state based on its new props and old state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;

    type GetDerivedStateFromError<P, S> =
        /**
         * This lifecycle is invoked after an error has been thrown by a descendant component.
         * It receives the error that was thrown as a parameter and should return a value to update state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (error: any) => Partial<S> | null;

    // This should be "infer SS" but can't use it yet
    interface NewLifecycle<P, S, SS> {
        /**
         * Runs before React applies the result of \`render\` to the document, and
         * returns an object to be given to componentDidUpdate. Useful for saving
         * things such as scroll position before \`render\` causes changes to it.
         *
         * Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
         * lifecycle events from running.
         */
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
        /**
         * Called immediately after updating occurs. Not called for the initial render.
         *
         * The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.
         */
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
    }

    interface DeprecatedLifecycle<P, S> {
        /**
         * Called immediately before mounting occurs, and before \`Component#render\`.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use componentDidMount or the constructor instead; will stop working in React 17
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillMount?(): void;
        /**
         * Called immediately before mounting occurs, and before \`Component#render\`.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use componentDidMount or the constructor instead
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillMount?(): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling \`Component#setState\` generally does not trigger this method.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling \`Component#setState\` generally does not trigger this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use static getDerivedStateFromProps instead
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call \`Component#setState\` here.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call \`Component#setState\` here.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
         * @see https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    }

    interface Mixin<P, S> extends ComponentLifecycle<P, S> {
        mixins?: Array<Mixin<P, S>> | undefined;
        statics?: {
            [key: string]: any;
        } | undefined;

        displayName?: string | undefined;
        propTypes?: ValidationMap<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;

        getDefaultProps?(): P;
        getInitialState?(): S;
    }

    interface ComponentSpec<P, S> extends Mixin<P, S> {
        render(): ReactNode;

        [propertyName: string]: any;
    }

    function createRef<T>(): RefObject<T>;

    // will show \`ForwardRef(\${Component.displayName || Component.name})\` in devtools by default,
    // but can be given its own specific name
    interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
        defaultProps?: Partial<P> | undefined;
        propTypes?: WeakValidationMap<P> | undefined;
    }

    function forwardRef<T, P = {}>(
        render: ForwardRefRenderFunction<T, P>,
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

    /** Ensures that the props do not include ref at all */
    type PropsWithoutRef<P> =
        // Omit would not be sufficient for this. We'd like to avoid unnecessary mapping and need a distributive conditional to support unions.
        // see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
        // https://github.com/Microsoft/TypeScript/issues/28339
        P extends any ? ("ref" extends keyof P ? Omit<P, "ref"> : P) : P;
    /** Ensures that the props do not include string ref, which cannot be forwarded */
    type PropsWithRef<P> =
        // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
        "ref" extends keyof P
            ? P extends { ref?: infer R | undefined }
                ? string extends R ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
                : P
            : P
            : P;

    type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

    /**
     * NOTE: prefer ComponentPropsWithRef, if the ref is forwarded,
     * or ComponentPropsWithoutRef when refs are not supported.
     */
    type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = T extends
        JSXElementConstructor<infer P> ? P
        : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T]
        : {};
    type ComponentPropsWithRef<T extends ElementType> = T extends (new(props: infer P) => Component<any, any>)
        ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
        : PropsWithRef<ComponentProps<T>>;
    type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;

    type ComponentRef<T extends ElementType> = T extends NamedExoticComponent<
        ComponentPropsWithoutRef<T> & RefAttributes<infer Method>
    > ? Method
        : ComponentPropsWithRef<T> extends RefAttributes<infer Method> ? Method
        : never;

    // will show \`Memo(\${Component.displayName || Component.name})\` in devtools by default,
    // but can be given its own specific name
    type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<ComponentPropsWithRef<T>> & {
        readonly type: T;
    };

    function memo<P extends object>(
        Component: FunctionComponent<P>,
        propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean,
    ): NamedExoticComponent<P>;
    function memo<T extends ComponentType<any>>(
        Component: T,
        propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean,
    ): MemoExoticComponent<T>;

    type LazyExoticComponent<T extends ComponentType<any>> = ExoticComponent<ComponentPropsWithRef<T>> & {
        readonly _result: T;
    };

    function lazy<T extends ComponentType<any>>(
        factory: () => Promise<{ default: T }>,
    ): LazyExoticComponent<T>;

    //
    // React Hooks
    // ----------------------------------------------------------------------

    // based on the code in https://github.com/facebook/react/pull/13968

    // Unlike the class component setState, the updates are not allowed to be partial
    type SetStateAction<S> = S | ((prevState: S) => S);
    // this technically does accept a second argument, but it's already under a deprecation warning
    // and it's not even released so probably better to not define it.
    type Dispatch<A> = (value: A) => void;
    // Since action _can_ be undefined, dispatch may be called without any parameters.
    type DispatchWithoutAction = () => void;
    // Unlike redux, the actions _can_ be anything
    type Reducer<S, A> = (prevState: S, action: A) => S;
    // If useReducer accepts a reducer without action, dispatch may be called without any parameters.
    type ReducerWithoutAction<S> = (prevState: S) => S;
    // types used to try and prevent the compiler from reducing S
    // to a supertype common with the second argument to useReducer()
    type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
    type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
    // The identity check is done with the SameValue algorithm (Object.is), which is stricter than ===
    type ReducerStateWithoutAction<R extends ReducerWithoutAction<any>> = R extends ReducerWithoutAction<infer S> ? S
        : never;
    type DependencyList = ReadonlyArray<unknown>;

    // NOTE: callbacks are _only_ allowed to return either void, or a destructor.
    type EffectCallback = () => void | Destructor;

    interface MutableRefObject<T> {
        current: T;
    }

    // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
    /**
     * Accepts a context object (the value returned from \`React.createContext\`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useContext
     */
    function useContext<T>(context: Context<T> /*, (not public API) observedBits?: number|boolean */): T;
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useState
     */
    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    // convenience overload when first argument is omitted
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useState
     */
    function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerStateWithoutAction<R>,
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>>(
        reducer: R,
        initializerArg: ReducerStateWithoutAction<R>,
        initializer?: undefined,
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */
    // overload where "I" may be a subset of ReducerState<R>; used to provide autocompletion.
    // If "I" matches ReducerState<R> exactly then the last overload will allow initializer to be omitted.
    // the last overload effectively behaves as if the identity function (x => x) is the initializer.
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I & ReducerState<R>,
        initializer: (arg: I & ReducerState<R>) => ReducerState<R>,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */
    // overload for free "I"; all goes as long as initializer converts it into "ReducerState<R>".
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerState<R>,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useReducer
     */

    // I'm not sure if I keep this 2-ary or if I make it (2,3)-ary; it's currently (2,3)-ary.
    // The Flow types do have an overload for 3-ary invocation with undefined initializer.

    // NOTE: without the ReducerState indirection, TypeScript would reduce S to be the most common
    // supertype between the reducer's return type and the initialState (or the initializer's return type),
    // which would prevent autocompletion from ever working.

    // TODO: double-check if this weird overload logic is necessary. It is possible it's either a bug
    // in older versions, or a regression in newer versions of the typescript completion service.
    function useReducer<R extends Reducer<any, any>>(
        reducer: R,
        initialState: ReducerState<R>,
        initializer?: undefined,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useRef
     */
    function useRef<T>(initialValue: T): MutableRefObject<T>;
    // convenience overload for refs given as a ref prop as they typically start with a null value
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * Usage note: if you need the result of useRef to be directly mutable, include \`| null\` in the type
     * of the generic argument.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useRef
     */
    function useRef<T>(initialValue: T | null): RefObject<T>;
    // convenience overload for potentially undefined initialValue / call with 0 arguments
    // has a default to stop it from defaulting to {} instead
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useRef
     */
    function useRef<T = undefined>(): MutableRefObject<T | undefined>;
    /**
     * The signature is identical to \`useEffect\`, but it fires synchronously after all DOM mutations.
     * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
     * \`useLayoutEffect\` will be flushed synchronously, before the browser has a chance to paint.
     *
     * Prefer the standard \`useEffect\` when possible to avoid blocking visual updates.
     *
     * If you’re migrating code from a class component, \`useLayoutEffect\` fires in the same phase as
     * \`componentDidMount\` and \`componentDidUpdate\`.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useLayoutEffect
     */
    function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
    /**
     * Accepts a function that contains imperative, possibly effectful code.
     *
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useEffect
     */
    function useEffect(effect: EffectCallback, deps?: DependencyList): void;
    // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
    /**
     * \`useImperativeHandle\` customizes the instance value that is exposed to parent components when using
     * \`ref\`. As always, imperative code using refs should be avoided in most cases.
     *
     * \`useImperativeHandle\` should be used with \`React.forwardRef\`.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useImperativeHandle
     */
    function useImperativeHandle<T, R extends T>(ref: Ref<T> | undefined, init: () => R, deps?: DependencyList): void;
    // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
    // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
    /**
     * \`useCallback\` will return a memoized version of the callback that only changes if one of the \`inputs\`
     * has changed.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useCallback
     */
    // A specific function type would not trigger implicit any.
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/52873#issuecomment-845806435 for a comparison between \`Function\` and more specific types.
    // tslint:disable-next-line ban-types
    function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
    /**
     * \`useMemo\` will only recompute the memoized value when one of the \`deps\` has changed.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useMemo
     */
    // allow undefined, but don't make it optional as that is very likely a mistake
    function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
    /**
     * \`useDebugValue\` can be used to display a label for custom hooks in React DevTools.
     *
     * NOTE: We don’t recommend adding debug values to every custom hook.
     * It’s most valuable for custom hooks that are part of shared libraries.
     *
     * @version 16.8.0
     * @see https://react.dev/reference/react/useDebugValue
     */
    // the name of the custom hook is itself derived from the function name at runtime:
    // it's just the function name without the "use" prefix.
    function useDebugValue<T>(value: T, format?: (value: T) => any): void;

    // must be synchronous
    export type TransitionFunction = () => VoidOrUndefinedOnly;
    // strange definition to allow vscode to show documentation on the invocation
    export interface TransitionStartFunction {
        /**
         * State updates caused inside the callback are allowed to be deferred.
         *
         * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
         *
         * @param callback A _synchronous_ function which causes state updates that can be deferred.
         */
        (callback: TransitionFunction): void;
    }

    /**
     * Returns a deferred version of the value that may “lag behind” it.
     *
     * This is commonly used to keep the interface responsive when you have something that renders immediately
     * based on user input and something that needs to wait for a data fetch.
     *
     * A good example of this is a text input.
     *
     * @param value The value that is going to be deferred
     *
     * @see https://react.dev/reference/react/useDeferredValue
     */
    export function useDeferredValue<T>(value: T): T;

    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The \`useTransition\` hook returns two values in an array.
     *
     * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish.
     * The second is a function that takes a callback. We can use it to tell React which state we want to defer.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**\`
     *
     * @see https://react.dev/reference/react/useTransition
     */
    export function useTransition(): [boolean, TransitionStartFunction];

    /**
     * Similar to \`useTransition\` but allows uses where hooks are not available.
     *
     * @param callback A _synchronous_ function which causes state updates that can be deferred.
     */
    export function startTransition(scope: TransitionFunction): void;

    export function useId(): string;

    /**
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @see https://github.com/facebook/react/pull/21913
     */
    export function useInsertionEffect(effect: EffectCallback, deps?: DependencyList): void;

    /**
     * @param subscribe
     * @param getSnapshot
     *
     * @see https://github.com/reactwg/react-18/discussions/86
     */
    // keep in sync with \`useSyncExternalStore\` from \`use-sync-external-store\`
    export function useSyncExternalStore<Snapshot>(
        subscribe: (onStoreChange: () => void) => () => void,
        getSnapshot: () => Snapshot,
        getServerSnapshot?: () => Snapshot,
    ): Snapshot;

    //
    // Event System
    // ----------------------------------------------------------------------
    // TODO: change any to unknown when moving to TS v3
    interface BaseSyntheticEvent<E = object, C = any, T = any> {
        nativeEvent: E;
        currentTarget: C;
        target: T;
        bubbles: boolean;
        cancelable: boolean;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        preventDefault(): void;
        isDefaultPrevented(): boolean;
        stopPropagation(): void;
        isPropagationStopped(): boolean;
        persist(): void;
        timeStamp: number;
        type: string;
    }

    /**
     * currentTarget - a reference to the element on which the event listener is registered.
     *
     * target - a reference to the element from which the event was originally dispatched.
     * This might be a child element to the element on which the event listener is registered.
     * If you thought this should be \`EventTarget & T\`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
     */
    interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

    interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
        clipboardData: DataTransfer;
    }

    interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
        data: string;
    }

    interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
        dataTransfer: DataTransfer;
    }

    interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
        pointerId: number;
        pressure: number;
        tangentialPressure: number;
        tiltX: number;
        tiltY: number;
        twist: number;
        width: number;
        height: number;
        pointerType: "mouse" | "pen" | "touch";
        isPrimary: boolean;
    }

    interface FocusEvent<Target = Element, RelatedTarget = Element> extends SyntheticEvent<Target, NativeFocusEvent> {
        relatedTarget: (EventTarget & RelatedTarget) | null;
        target: EventTarget & Target;
    }

    interface FormEvent<T = Element> extends SyntheticEvent<T> {
    }

    interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    export type ModifierKey =
        | "Alt"
        | "AltGraph"
        | "CapsLock"
        | "Control"
        | "Fn"
        | "FnLock"
        | "Hyper"
        | "Meta"
        | "NumLock"
        | "ScrollLock"
        | "Shift"
        | "Super"
        | "Symbol"
        | "SymbolLock";

    interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {
        altKey: boolean;
        /** @deprecated */
        charCode: number;
        ctrlKey: boolean;
        code: string;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        /**
         * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
         */
        key: string;
        /** @deprecated */
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        /** @deprecated */
        which: number;
    }

    interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        movementX: number;
        movementY: number;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget | null;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
        detail: number;
        view: AbstractView;
    }

    interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
        animationName: string;
        elapsedTime: number;
        pseudoElement: string;
    }

    interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
        elapsedTime: number;
        propertyName: string;
        pseudoElement: string;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
    type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
    type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
    type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

    //
    // Props / DOM Attributes
    // ----------------------------------------------------------------------

    interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    }

    interface SVGLineElementAttributes<T> extends SVGProps<T> {}
    interface SVGTextElementAttributes<T> extends SVGProps<T> {}

    interface DOMAttributes<T> {
        children?: ReactNode | undefined;
        dangerouslySetInnerHTML?: {
            // Should be InnerHTML['innerHTML'].
            // But unfortunately we're mixing renderer-specific type declarations.
            __html: string | TrustedHTML;
        } | undefined;

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T> | undefined;
        onCopyCapture?: ClipboardEventHandler<T> | undefined;
        onCut?: ClipboardEventHandler<T> | undefined;
        onCutCapture?: ClipboardEventHandler<T> | undefined;
        onPaste?: ClipboardEventHandler<T> | undefined;
        onPasteCapture?: ClipboardEventHandler<T> | undefined;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T> | undefined;
        onCompositionEndCapture?: CompositionEventHandler<T> | undefined;
        onCompositionStart?: CompositionEventHandler<T> | undefined;
        onCompositionStartCapture?: CompositionEventHandler<T> | undefined;
        onCompositionUpdate?: CompositionEventHandler<T> | undefined;
        onCompositionUpdateCapture?: CompositionEventHandler<T> | undefined;

        // Focus Events
        onFocus?: FocusEventHandler<T> | undefined;
        onFocusCapture?: FocusEventHandler<T> | undefined;
        onBlur?: FocusEventHandler<T> | undefined;
        onBlurCapture?: FocusEventHandler<T> | undefined;

        // Form Events
        onChange?: FormEventHandler<T> | undefined;
        onChangeCapture?: FormEventHandler<T> | undefined;
        onBeforeInput?: FormEventHandler<T> | undefined;
        onBeforeInputCapture?: FormEventHandler<T> | undefined;
        onInput?: FormEventHandler<T> | undefined;
        onInputCapture?: FormEventHandler<T> | undefined;
        onReset?: FormEventHandler<T> | undefined;
        onResetCapture?: FormEventHandler<T> | undefined;
        onSubmit?: FormEventHandler<T> | undefined;
        onSubmitCapture?: FormEventHandler<T> | undefined;
        onInvalid?: FormEventHandler<T> | undefined;
        onInvalidCapture?: FormEventHandler<T> | undefined;

        // Image Events
        onLoad?: ReactEventHandler<T> | undefined;
        onLoadCapture?: ReactEventHandler<T> | undefined;
        onError?: ReactEventHandler<T> | undefined; // also a Media Event
        onErrorCapture?: ReactEventHandler<T> | undefined; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T> | undefined;
        onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
        /** @deprecated */
        onKeyPress?: KeyboardEventHandler<T> | undefined;
        /** @deprecated */
        onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
        onKeyUp?: KeyboardEventHandler<T> | undefined;
        onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

        // Media Events
        onAbort?: ReactEventHandler<T> | undefined;
        onAbortCapture?: ReactEventHandler<T> | undefined;
        onCanPlay?: ReactEventHandler<T> | undefined;
        onCanPlayCapture?: ReactEventHandler<T> | undefined;
        onCanPlayThrough?: ReactEventHandler<T> | undefined;
        onCanPlayThroughCapture?: ReactEventHandler<T> | undefined;
        onDurationChange?: ReactEventHandler<T> | undefined;
        onDurationChangeCapture?: ReactEventHandler<T> | undefined;
        onEmptied?: ReactEventHandler<T> | undefined;
        onEmptiedCapture?: ReactEventHandler<T> | undefined;
        onEncrypted?: ReactEventHandler<T> | undefined;
        onEncryptedCapture?: ReactEventHandler<T> | undefined;
        onEnded?: ReactEventHandler<T> | undefined;
        onEndedCapture?: ReactEventHandler<T> | undefined;
        onLoadedData?: ReactEventHandler<T> | undefined;
        onLoadedDataCapture?: ReactEventHandler<T> | undefined;
        onLoadedMetadata?: ReactEventHandler<T> | undefined;
        onLoadedMetadataCapture?: ReactEventHandler<T> | undefined;
        onLoadStart?: ReactEventHandler<T> | undefined;
        onLoadStartCapture?: ReactEventHandler<T> | undefined;
        onPause?: ReactEventHandler<T> | undefined;
        onPauseCapture?: ReactEventHandler<T> | undefined;
        onPlay?: ReactEventHandler<T> | undefined;
        onPlayCapture?: ReactEventHandler<T> | undefined;
        onPlaying?: ReactEventHandler<T> | undefined;
        onPlayingCapture?: ReactEventHandler<T> | undefined;
        onProgress?: ReactEventHandler<T> | undefined;
        onProgressCapture?: ReactEventHandler<T> | undefined;
        onRateChange?: ReactEventHandler<T> | undefined;
        onRateChangeCapture?: ReactEventHandler<T> | undefined;
        onResize?: ReactEventHandler<T> | undefined;
        onResizeCapture?: ReactEventHandler<T> | undefined;
        onSeeked?: ReactEventHandler<T> | undefined;
        onSeekedCapture?: ReactEventHandler<T> | undefined;
        onSeeking?: ReactEventHandler<T> | undefined;
        onSeekingCapture?: ReactEventHandler<T> | undefined;
        onStalled?: ReactEventHandler<T> | undefined;
        onStalledCapture?: ReactEventHandler<T> | undefined;
        onSuspend?: ReactEventHandler<T> | undefined;
        onSuspendCapture?: ReactEventHandler<T> | undefined;
        onTimeUpdate?: ReactEventHandler<T> | undefined;
        onTimeUpdateCapture?: ReactEventHandler<T> | undefined;
        onVolumeChange?: ReactEventHandler<T> | undefined;
        onVolumeChangeCapture?: ReactEventHandler<T> | undefined;
        onWaiting?: ReactEventHandler<T> | undefined;
        onWaitingCapture?: ReactEventHandler<T> | undefined;

        // MouseEvents
        onAuxClick?: MouseEventHandler<T> | undefined;
        onAuxClickCapture?: MouseEventHandler<T> | undefined;
        onClick?: MouseEventHandler<T> | undefined;
        onClickCapture?: MouseEventHandler<T> | undefined;
        onContextMenu?: MouseEventHandler<T> | undefined;
        onContextMenuCapture?: MouseEventHandler<T> | undefined;
        onDoubleClick?: MouseEventHandler<T> | undefined;
        onDoubleClickCapture?: MouseEventHandler<T> | undefined;
        onDrag?: DragEventHandler<T> | undefined;
        onDragCapture?: DragEventHandler<T> | undefined;
        onDragEnd?: DragEventHandler<T> | undefined;
        onDragEndCapture?: DragEventHandler<T> | undefined;
        onDragEnter?: DragEventHandler<T> | undefined;
        onDragEnterCapture?: DragEventHandler<T> | undefined;
        onDragExit?: DragEventHandler<T> | undefined;
        onDragExitCapture?: DragEventHandler<T> | undefined;
        onDragLeave?: DragEventHandler<T> | undefined;
        onDragLeaveCapture?: DragEventHandler<T> | undefined;
        onDragOver?: DragEventHandler<T> | undefined;
        onDragOverCapture?: DragEventHandler<T> | undefined;
        onDragStart?: DragEventHandler<T> | undefined;
        onDragStartCapture?: DragEventHandler<T> | undefined;
        onDrop?: DragEventHandler<T> | undefined;
        onDropCapture?: DragEventHandler<T> | undefined;
        onMouseDown?: MouseEventHandler<T> | undefined;
        onMouseDownCapture?: MouseEventHandler<T> | undefined;
        onMouseEnter?: MouseEventHandler<T> | undefined;
        onMouseLeave?: MouseEventHandler<T> | undefined;
        onMouseMove?: MouseEventHandler<T> | undefined;
        onMouseMoveCapture?: MouseEventHandler<T> | undefined;
        onMouseOut?: MouseEventHandler<T> | undefined;
        onMouseOutCapture?: MouseEventHandler<T> | undefined;
        onMouseOver?: MouseEventHandler<T> | undefined;
        onMouseOverCapture?: MouseEventHandler<T> | undefined;
        onMouseUp?: MouseEventHandler<T> | undefined;
        onMouseUpCapture?: MouseEventHandler<T> | undefined;

        // Selection Events
        onSelect?: ReactEventHandler<T> | undefined;
        onSelectCapture?: ReactEventHandler<T> | undefined;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T> | undefined;
        onTouchCancelCapture?: TouchEventHandler<T> | undefined;
        onTouchEnd?: TouchEventHandler<T> | undefined;
        onTouchEndCapture?: TouchEventHandler<T> | undefined;
        onTouchMove?: TouchEventHandler<T> | undefined;
        onTouchMoveCapture?: TouchEventHandler<T> | undefined;
        onTouchStart?: TouchEventHandler<T> | undefined;
        onTouchStartCapture?: TouchEventHandler<T> | undefined;

        // Pointer Events
        onPointerDown?: PointerEventHandler<T> | undefined;
        onPointerDownCapture?: PointerEventHandler<T> | undefined;
        onPointerMove?: PointerEventHandler<T> | undefined;
        onPointerMoveCapture?: PointerEventHandler<T> | undefined;
        onPointerUp?: PointerEventHandler<T> | undefined;
        onPointerUpCapture?: PointerEventHandler<T> | undefined;
        onPointerCancel?: PointerEventHandler<T> | undefined;
        onPointerCancelCapture?: PointerEventHandler<T> | undefined;
        onPointerEnter?: PointerEventHandler<T> | undefined;
        onPointerEnterCapture?: PointerEventHandler<T> | undefined;
        onPointerLeave?: PointerEventHandler<T> | undefined;
        onPointerLeaveCapture?: PointerEventHandler<T> | undefined;
        onPointerOver?: PointerEventHandler<T> | undefined;
        onPointerOverCapture?: PointerEventHandler<T> | undefined;
        onPointerOut?: PointerEventHandler<T> | undefined;
        onPointerOutCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined;

        // UI Events
        onScroll?: UIEventHandler<T> | undefined;
        onScrollCapture?: UIEventHandler<T> | undefined;

        // Wheel Events
        onWheel?: WheelEventHandler<T> | undefined;
        onWheelCapture?: WheelEventHandler<T> | undefined;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T> | undefined;
        onAnimationStartCapture?: AnimationEventHandler<T> | undefined;
        onAnimationEnd?: AnimationEventHandler<T> | undefined;
        onAnimationEndCapture?: AnimationEventHandler<T> | undefined;
        onAnimationIteration?: AnimationEventHandler<T> | undefined;
        onAnimationIterationCapture?: AnimationEventHandler<T> | undefined;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T> | undefined;
        onTransitionEndCapture?: TransitionEventHandler<T> | undefined;
    }

    export interface CSSProperties extends CSS.Properties<string | number> {
        /**
         * The index signature was removed to enable closed typing for style
         * using CSSType. You're able to use type assertion or module augmentation
         * to add properties or an index signature of your own.
         *
         * For examples and more information, visit:
         * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
         */
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        "aria-activedescendant"?: string | undefined;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        "aria-atomic"?: Booleanish | undefined;
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        /**
         * Defines a string value that labels the current element, which is intended to be converted into Braille.
         * @see aria-label.
         */
        "aria-braillelabel"?: string | undefined;
        /**
         * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
         * @see aria-roledescription.
         */
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: Booleanish | undefined;
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        "aria-colcount"?: number | undefined;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        "aria-colindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-colindex.
         * @see aria-rowindextext.
         */
        "aria-colindextext"?: string | undefined;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        "aria-colspan"?: number | undefined;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        "aria-controls"?: string | undefined;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        "aria-describedby"?: string | undefined;
        /**
         * Defines a string value that describes or annotates the current element.
         * @see related aria-describedby.
         */
        "aria-description"?: string | undefined;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        "aria-details"?: string | undefined;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        "aria-disabled"?: Booleanish | undefined;
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        "aria-errormessage"?: string | undefined;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        "aria-expanded"?: Booleanish | undefined;
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        "aria-flowto"?: string | undefined;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        "aria-grabbed"?: Booleanish | undefined;
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        "aria-hidden"?: Booleanish | undefined;
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        "aria-keyshortcuts"?: string | undefined;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        "aria-label"?: string | undefined;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        "aria-labelledby"?: string | undefined;
        /** Defines the hierarchical level of an element within a structure. */
        "aria-level"?: number | undefined;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        /** Indicates whether an element is modal when displayed. */
        "aria-modal"?: Booleanish | undefined;
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        "aria-multiline"?: Booleanish | undefined;
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        "aria-multiselectable"?: Booleanish | undefined;
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        "aria-owns"?: string | undefined;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        "aria-placeholder"?: string | undefined;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        "aria-posinset"?: number | undefined;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        "aria-readonly"?: Booleanish | undefined;
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        "aria-relevant"?:
            | "additions"
            | "additions removals"
            | "additions text"
            | "all"
            | "removals"
            | "removals additions"
            | "removals text"
            | "text"
            | "text additions"
            | "text removals"
            | undefined;
        /** Indicates that user input is required on the element before a form may be submitted. */
        "aria-required"?: Booleanish | undefined;
        /** Defines a human-readable, author-localized description for the role of an element. */
        "aria-roledescription"?: string | undefined;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        "aria-rowcount"?: number | undefined;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        "aria-rowindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-rowindex.
         * @see aria-colindextext.
         */
        "aria-rowindextext"?: string | undefined;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        "aria-rowspan"?: number | undefined;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        "aria-selected"?: Booleanish | undefined;
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        "aria-setsize"?: number | undefined;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        /** Defines the maximum allowed value for a range widget. */
        "aria-valuemax"?: number | undefined;
        /** Defines the minimum allowed value for a range widget. */
        "aria-valuemin"?: number | undefined;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        "aria-valuenow"?: number | undefined;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        "aria-valuetext"?: string | undefined;
    }

    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
        | "alert"
        | "alertdialog"
        | "application"
        | "article"
        | "banner"
        | "button"
        | "cell"
        | "checkbox"
        | "columnheader"
        | "combobox"
        | "complementary"
        | "contentinfo"
        | "definition"
        | "dialog"
        | "directory"
        | "document"
        | "feed"
        | "figure"
        | "form"
        | "grid"
        | "gridcell"
        | "group"
        | "heading"
        | "img"
        | "link"
        | "list"
        | "listbox"
        | "listitem"
        | "log"
        | "main"
        | "marquee"
        | "math"
        | "menu"
        | "menubar"
        | "menuitem"
        | "menuitemcheckbox"
        | "menuitemradio"
        | "navigation"
        | "none"
        | "note"
        | "option"
        | "presentation"
        | "progressbar"
        | "radio"
        | "radiogroup"
        | "region"
        | "row"
        | "rowgroup"
        | "rowheader"
        | "scrollbar"
        | "search"
        | "searchbox"
        | "separator"
        | "slider"
        | "spinbutton"
        | "status"
        | "switch"
        | "tab"
        | "table"
        | "tablist"
        | "tabpanel"
        | "term"
        | "textbox"
        | "timer"
        | "toolbar"
        | "tooltip"
        | "tree"
        | "treegrid"
        | "treeitem"
        | (string & {});

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | ReadonlyArray<string> | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;

        // Standard HTML Attributes
        accessKey?: string | undefined;
        autoFocus?: boolean | undefined;
        className?: string | undefined;
        contentEditable?: Booleanish | "inherit" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: Booleanish | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        placeholder?: string | undefined;
        slot?: string | undefined;
        spellCheck?: Booleanish | undefined;
        style?: CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;

        // Unknown
        radioGroup?: string | undefined; // <command>, <menuitem>

        // WAI-ARIA
        role?: AriaRole | undefined;

        // RDFa Attributes
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;

        // Non-standard Attributes
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;

        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
         */
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
         */
        is?: string | undefined;
    }

    /**
     * For internal usage only.
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS {}

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        as?: string | undefined;
        async?: boolean | undefined;
        autoComplete?: string | undefined;
        autoPlay?: boolean | undefined;
        capture?: boolean | "user" | "environment" | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        cite?: string | undefined;
        classID?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: CrossOrigin;
        data?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        disabled?: boolean | undefined;
        download?: any;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        frameBorder?: number | string | undefined;
        headers?: string | undefined;
        height?: number | string | undefined;
        high?: number | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        htmlFor?: string | undefined;
        httpEquiv?: string | undefined;
        integrity?: string | undefined;
        keyParams?: string | undefined;
        keyType?: string | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        list?: string | undefined;
        loop?: boolean | undefined;
        low?: number | undefined;
        manifest?: string | undefined;
        marginHeight?: number | undefined;
        marginWidth?: number | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        media?: string | undefined;
        mediaGroup?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        muted?: boolean | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        reversed?: boolean | undefined;
        rows?: number | undefined;
        rowSpan?: number | undefined;
        sandbox?: string | undefined;
        scope?: string | undefined;
        scoped?: boolean | undefined;
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        selected?: boolean | undefined;
        shape?: string | undefined;
        size?: number | undefined;
        sizes?: string | undefined;
        span?: number | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        srcLang?: string | undefined;
        srcSet?: string | undefined;
        start?: number | undefined;
        step?: number | string | undefined;
        summary?: string | undefined;
        target?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;
    }

    type HTMLAttributeReferrerPolicy =
        | ""
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";

    type HTMLAttributeAnchorTarget =
        | "_self"
        | "_blank"
        | "_parent"
        | "_top"
        | (string & {});

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        ping?: string | undefined;
        target?: HTMLAttributeAnchorTarget | undefined;
        type?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        coords?: string | undefined;
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        shape?: string | undefined;
        target?: string | undefined;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string | undefined;
        target?: string | undefined;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        name?: string | undefined;
        type?: "submit" | "reset" | "button" | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        width?: number | string | undefined;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
        width?: number | string | undefined;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean | undefined;
        onToggle?: ReactEventHandler<T> | undefined;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        onCancel?: ReactEventHandler<T> | undefined;
        onClose?: ReactEventHandler<T> | undefined;
        open?: boolean | undefined;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        src?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        name?: string | undefined;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        autoComplete?: string | undefined;
        encType?: string | undefined;
        method?: string | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        target?: string | undefined;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string | undefined;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        /** @deprecated */
        frameBorder?: number | string | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        /** @deprecated */
        marginHeight?: number | undefined;
        /** @deprecated */
        marginWidth?: number | undefined;
        name?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sandbox?: string | undefined;
        /** @deprecated */
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        width?: number | string | undefined;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        crossOrigin?: CrossOrigin;
        decoding?: "async" | "auto" | "sync" | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    type HTMLInputTypeAttribute =
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
        | (string & {});

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string | undefined;
        alt?: string | undefined;
        autoComplete?: string | undefined;
        capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        height?: number | string | undefined;
        list?: string | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        src?: string | undefined;
        step?: number | string | undefined;
        type?: HTMLInputTypeAttribute | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        width?: number | string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        challenge?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        keyType?: string | undefined;
        keyParams?: string | undefined;
        name?: string | undefined;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string | undefined;
        crossOrigin?: CrossOrigin;
        fetchPriority?: "high" | "low" | "auto";
        href?: string | undefined;
        hrefLang?: string | undefined;
        integrity?: string | undefined;
        media?: string | undefined;
        imageSrcSet?: string | undefined;
        imageSizes?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        type?: string | undefined;
        charSet?: string | undefined;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string | undefined;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean | undefined;
        controls?: boolean | undefined;
        controlsList?: string | undefined;
        crossOrigin?: CrossOrigin;
        loop?: boolean | undefined;
        mediaGroup?: string | undefined;
        muted?: boolean | undefined;
        playsInline?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string | undefined;
        httpEquiv?: string | undefined;
        name?: string | undefined;
        media?: string | undefined;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        high?: number | undefined;
        low?: number | undefined;
        max?: number | string | undefined;
        min?: number | string | undefined;
        optimum?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string | undefined;
        data?: string | undefined;
        form?: string | undefined;
        height?: number | string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean | undefined;
        start?: number | undefined;
        type?: "1" | "a" | "A" | "i" | "I" | undefined;
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
        selected?: boolean | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
        name?: string | undefined;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean | undefined;
        /** @deprecated */
        charSet?: string | undefined;
        crossOrigin?: CrossOrigin;
        defer?: boolean | undefined;
        integrity?: string | undefined;
        noModule?: boolean | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        src?: string | undefined;
        type?: string | undefined;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        media?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string | undefined;
        scoped?: boolean | undefined;
        type?: string | undefined;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | undefined;
        bgcolor?: string | undefined;
        border?: number | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        frame?: boolean | undefined;
        rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
        summary?: string | undefined;
        width?: number | string | undefined;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        cols?: number | undefined;
        dirName?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
        name?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        rows?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        wrap?: string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
        height?: number | string | undefined;
        width?: number | string | undefined;
        valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string | undefined;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        src?: string | undefined;
        srcLang?: string | undefined;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        width?: number | string | undefined;
        disablePictureInPicture?: boolean | undefined;
        disableRemotePlayback?: boolean | undefined;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        suppressHydrationWarning?: boolean | undefined;

        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
        className?: string | undefined;
        color?: string | undefined;
        height?: number | string | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        max?: number | string | undefined;
        media?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        name?: string | undefined;
        style?: CSSProperties | undefined;
        target?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;

        // Other HTML properties supported by SVG elements in browsers
        role?: AriaRole | undefined;
        tabIndex?: number | undefined;
        crossOrigin?: CrossOrigin;

        // SVG Specific attributes
        accentHeight?: number | string | undefined;
        accumulate?: "none" | "sum" | undefined;
        additive?: "replace" | "sum" | undefined;
        alignmentBaseline?:
            | "auto"
            | "baseline"
            | "before-edge"
            | "text-before-edge"
            | "middle"
            | "central"
            | "after-edge"
            | "text-after-edge"
            | "ideographic"
            | "alphabetic"
            | "hanging"
            | "mathematical"
            | "inherit"
            | undefined;
        allowReorder?: "no" | "yes" | undefined;
        alphabetic?: number | string | undefined;
        amplitude?: number | string | undefined;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
        ascent?: number | string | undefined;
        attributeName?: string | undefined;
        attributeType?: string | undefined;
        autoReverse?: Booleanish | undefined;
        azimuth?: number | string | undefined;
        baseFrequency?: number | string | undefined;
        baselineShift?: number | string | undefined;
        baseProfile?: number | string | undefined;
        bbox?: number | string | undefined;
        begin?: number | string | undefined;
        bias?: number | string | undefined;
        by?: number | string | undefined;
        calcMode?: number | string | undefined;
        capHeight?: number | string | undefined;
        clip?: number | string | undefined;
        clipPath?: string | undefined;
        clipPathUnits?: number | string | undefined;
        clipRule?: number | string | undefined;
        colorInterpolation?: number | string | undefined;
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
        colorProfile?: number | string | undefined;
        colorRendering?: number | string | undefined;
        contentScriptType?: number | string | undefined;
        contentStyleType?: number | string | undefined;
        cursor?: number | string | undefined;
        cx?: number | string | undefined;
        cy?: number | string | undefined;
        d?: string | undefined;
        decelerate?: number | string | undefined;
        descent?: number | string | undefined;
        diffuseConstant?: number | string | undefined;
        direction?: number | string | undefined;
        display?: number | string | undefined;
        divisor?: number | string | undefined;
        dominantBaseline?: number | string | undefined;
        dur?: number | string | undefined;
        dx?: number | string | undefined;
        dy?: number | string | undefined;
        edgeMode?: number | string | undefined;
        elevation?: number | string | undefined;
        enableBackground?: number | string | undefined;
        end?: number | string | undefined;
        exponent?: number | string | undefined;
        externalResourcesRequired?: Booleanish | undefined;
        fill?: string | undefined;
        fillOpacity?: number | string | undefined;
        fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
        filter?: string | undefined;
        filterRes?: number | string | undefined;
        filterUnits?: number | string | undefined;
        floodColor?: number | string | undefined;
        floodOpacity?: number | string | undefined;
        focusable?: Booleanish | "auto" | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | string | undefined;
        fontSizeAdjust?: number | string | undefined;
        fontStretch?: number | string | undefined;
        fontStyle?: number | string | undefined;
        fontVariant?: number | string | undefined;
        fontWeight?: number | string | undefined;
        format?: number | string | undefined;
        fr?: number | string | undefined;
        from?: number | string | undefined;
        fx?: number | string | undefined;
        fy?: number | string | undefined;
        g1?: number | string | undefined;
        g2?: number | string | undefined;
        glyphName?: number | string | undefined;
        glyphOrientationHorizontal?: number | string | undefined;
        glyphOrientationVertical?: number | string | undefined;
        glyphRef?: number | string | undefined;
        gradientTransform?: string | undefined;
        gradientUnits?: string | undefined;
        hanging?: number | string | undefined;
        horizAdvX?: number | string | undefined;
        horizOriginX?: number | string | undefined;
        href?: string | undefined;
        ideographic?: number | string | undefined;
        imageRendering?: number | string | undefined;
        in2?: number | string | undefined;
        in?: string | undefined;
        intercept?: number | string | undefined;
        k1?: number | string | undefined;
        k2?: number | string | undefined;
        k3?: number | string | undefined;
        k4?: number | string | undefined;
        k?: number | string | undefined;
        kernelMatrix?: number | string | undefined;
        kernelUnitLength?: number | string | undefined;
        kerning?: number | string | undefined;
        keyPoints?: number | string | undefined;
        keySplines?: number | string | undefined;
        keyTimes?: number | string | undefined;
        lengthAdjust?: number | string | undefined;
        letterSpacing?: number | string | undefined;
        lightingColor?: number | string | undefined;
        limitingConeAngle?: number | string | undefined;
        local?: number | string | undefined;
        markerEnd?: string | undefined;
        markerHeight?: number | string | undefined;
        markerMid?: string | undefined;
        markerStart?: string | undefined;
        markerUnits?: number | string | undefined;
        markerWidth?: number | string | undefined;
        mask?: string | undefined;
        maskContentUnits?: number | string | undefined;
        maskUnits?: number | string | undefined;
        mathematical?: number | string | undefined;
        mode?: number | string | undefined;
        numOctaves?: number | string | undefined;
        offset?: number | string | undefined;
        opacity?: number | string | undefined;
        operator?: number | string | undefined;
        order?: number | string | undefined;
        orient?: number | string | undefined;
        orientation?: number | string | undefined;
        origin?: number | string | undefined;
        overflow?: number | string | undefined;
        overlinePosition?: number | string | undefined;
        overlineThickness?: number | string | undefined;
        paintOrder?: number | string | undefined;
        panose1?: number | string | undefined;
        path?: string | undefined;
        pathLength?: number | string | undefined;
        patternContentUnits?: string | undefined;
        patternTransform?: number | string | undefined;
        patternUnits?: string | undefined;
        pointerEvents?: number | string | undefined;
        points?: string | undefined;
        pointsAtX?: number | string | undefined;
        pointsAtY?: number | string | undefined;
        pointsAtZ?: number | string | undefined;
        preserveAlpha?: Booleanish | undefined;
        preserveAspectRatio?: string | undefined;
        primitiveUnits?: number | string | undefined;
        r?: number | string | undefined;
        radius?: number | string | undefined;
        refX?: number | string | undefined;
        refY?: number | string | undefined;
        renderingIntent?: number | string | undefined;
        repeatCount?: number | string | undefined;
        repeatDur?: number | string | undefined;
        requiredExtensions?: number | string | undefined;
        requiredFeatures?: number | string | undefined;
        restart?: number | string | undefined;
        result?: string | undefined;
        rotate?: number | string | undefined;
        rx?: number | string | undefined;
        ry?: number | string | undefined;
        scale?: number | string | undefined;
        seed?: number | string | undefined;
        shapeRendering?: number | string | undefined;
        slope?: number | string | undefined;
        spacing?: number | string | undefined;
        specularConstant?: number | string | undefined;
        specularExponent?: number | string | undefined;
        speed?: number | string | undefined;
        spreadMethod?: string | undefined;
        startOffset?: number | string | undefined;
        stdDeviation?: number | string | undefined;
        stemh?: number | string | undefined;
        stemv?: number | string | undefined;
        stitchTiles?: number | string | undefined;
        stopColor?: string | undefined;
        stopOpacity?: number | string | undefined;
        strikethroughPosition?: number | string | undefined;
        strikethroughThickness?: number | string | undefined;
        string?: number | string | undefined;
        stroke?: string | undefined;
        strokeDasharray?: string | number | undefined;
        strokeDashoffset?: string | number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
        strokeMiterlimit?: number | string | undefined;
        strokeOpacity?: number | string | undefined;
        strokeWidth?: number | string | undefined;
        surfaceScale?: number | string | undefined;
        systemLanguage?: number | string | undefined;
        tableValues?: number | string | undefined;
        targetX?: number | string | undefined;
        targetY?: number | string | undefined;
        textAnchor?: string | undefined;
        textDecoration?: number | string | undefined;
        textLength?: number | string | undefined;
        textRendering?: number | string | undefined;
        to?: number | string | undefined;
        transform?: string | undefined;
        u1?: number | string | undefined;
        u2?: number | string | undefined;
        underlinePosition?: number | string | undefined;
        underlineThickness?: number | string | undefined;
        unicode?: number | string | undefined;
        unicodeBidi?: number | string | undefined;
        unicodeRange?: number | string | undefined;
        unitsPerEm?: number | string | undefined;
        vAlphabetic?: number | string | undefined;
        values?: string | undefined;
        vectorEffect?: number | string | undefined;
        version?: string | undefined;
        vertAdvY?: number | string | undefined;
        vertOriginX?: number | string | undefined;
        vertOriginY?: number | string | undefined;
        vHanging?: number | string | undefined;
        vIdeographic?: number | string | undefined;
        viewBox?: string | undefined;
        viewTarget?: number | string | undefined;
        visibility?: number | string | undefined;
        vMathematical?: number | string | undefined;
        widths?: number | string | undefined;
        wordSpacing?: number | string | undefined;
        writingMode?: number | string | undefined;
        x1?: number | string | undefined;
        x2?: number | string | undefined;
        x?: number | string | undefined;
        xChannelSelector?: string | undefined;
        xHeight?: number | string | undefined;
        xlinkActuate?: string | undefined;
        xlinkArcrole?: string | undefined;
        xlinkHref?: string | undefined;
        xlinkRole?: string | undefined;
        xlinkShow?: string | undefined;
        xlinkTitle?: string | undefined;
        xlinkType?: string | undefined;
        xmlBase?: string | undefined;
        xmlLang?: string | undefined;
        xmlns?: string | undefined;
        xmlnsXlink?: string | undefined;
        xmlSpace?: string | undefined;
        y1?: number | string | undefined;
        y2?: number | string | undefined;
        y?: number | string | undefined;
        yChannelSelector?: string | undefined;
        z?: number | string | undefined;
        zoomAndPan?: string | undefined;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean | undefined;
        allowpopups?: boolean | undefined;
        autosize?: boolean | undefined;
        blinkfeatures?: string | undefined;
        disableblinkfeatures?: string | undefined;
        disableguestresize?: boolean | undefined;
        disablewebsecurity?: boolean | undefined;
        guestinstance?: string | undefined;
        httpreferrer?: string | undefined;
        nodeintegration?: boolean | undefined;
        partition?: string | undefined;
        plugins?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
        useragent?: string | undefined;
        webpreferences?: string | undefined;
    }

    //
    // React.DOM
    // ----------------------------------------------------------------------

    interface ReactHTML {
        a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
        article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
        b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
        bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
        br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
        button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
        caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        center: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        data: DetailedHTMLFactory<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
        datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
        dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        del: DetailedHTMLFactory<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
        details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
        dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
        div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
        dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
        fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
        figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
        header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
        html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
        i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
        img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
        kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
        label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
        li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
        main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
        mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
        menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
        meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
        nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
        ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
        option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
        output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
        p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
        picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
        progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
        q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        search: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        slot: DetailedHTMLFactory<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
        script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
        section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
        span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
        sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
        template: DetailedHTMLFactory<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
        tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
        textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
        thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
        title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
        tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
        track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
        u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        "var": DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
        wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
    }

    interface ReactSVG {
        animate: SVGFactory;
        circle: SVGFactory;
        clipPath: SVGFactory;
        defs: SVGFactory;
        desc: SVGFactory;
        ellipse: SVGFactory;
        feBlend: SVGFactory;
        feColorMatrix: SVGFactory;
        feComponentTransfer: SVGFactory;
        feComposite: SVGFactory;
        feConvolveMatrix: SVGFactory;
        feDiffuseLighting: SVGFactory;
        feDisplacementMap: SVGFactory;
        feDistantLight: SVGFactory;
        feDropShadow: SVGFactory;
        feFlood: SVGFactory;
        feFuncA: SVGFactory;
        feFuncB: SVGFactory;
        feFuncG: SVGFactory;
        feFuncR: SVGFactory;
        feGaussianBlur: SVGFactory;
        feImage: SVGFactory;
        feMerge: SVGFactory;
        feMergeNode: SVGFactory;
        feMorphology: SVGFactory;
        feOffset: SVGFactory;
        fePointLight: SVGFactory;
        feSpecularLighting: SVGFactory;
        feSpotLight: SVGFactory;
        feTile: SVGFactory;
        feTurbulence: SVGFactory;
        filter: SVGFactory;
        foreignObject: SVGFactory;
        g: SVGFactory;
        image: SVGFactory;
        line: SVGFactory;
        linearGradient: SVGFactory;
        marker: SVGFactory;
        mask: SVGFactory;
        metadata: SVGFactory;
        path: SVGFactory;
        pattern: SVGFactory;
        polygon: SVGFactory;
        polyline: SVGFactory;
        radialGradient: SVGFactory;
        rect: SVGFactory;
        stop: SVGFactory;
        svg: SVGFactory;
        switch: SVGFactory;
        symbol: SVGFactory;
        text: SVGFactory;
        textPath: SVGFactory;
        tspan: SVGFactory;
        use: SVGFactory;
        view: SVGFactory;
    }

    interface ReactDOM extends ReactHTML, ReactSVG {}

    //
    // React.PropTypes
    // ----------------------------------------------------------------------

    type Validator<T> = PropTypes.Validator<T>;

    type Requireable<T> = PropTypes.Requireable<T>;

    type ValidationMap<T> = PropTypes.ValidationMap<T>;

    type WeakValidationMap<T> = {
        [K in keyof T]?: null extends T[K] ? Validator<T[K] | null | undefined>
            : undefined extends T[K] ? Validator<T[K] | null | undefined>
            : Validator<T[K]>;
    };

    interface ReactPropTypes {
        any: typeof PropTypes.any;
        array: typeof PropTypes.array;
        bool: typeof PropTypes.bool;
        func: typeof PropTypes.func;
        number: typeof PropTypes.number;
        object: typeof PropTypes.object;
        string: typeof PropTypes.string;
        node: typeof PropTypes.node;
        element: typeof PropTypes.element;
        instanceOf: typeof PropTypes.instanceOf;
        oneOf: typeof PropTypes.oneOf;
        oneOfType: typeof PropTypes.oneOfType;
        arrayOf: typeof PropTypes.arrayOf;
        objectOf: typeof PropTypes.objectOf;
        shape: typeof PropTypes.shape;
        exact: typeof PropTypes.exact;
    }

    //
    // React.Children
    // ----------------------------------------------------------------------

    /**
     * @deprecated - Use \`typeof React.Children\` instead.
     */
    // Sync with type of \`const Children\`.
    interface ReactChildren {
        map<T, C>(
            children: C | ReadonlyArray<C>,
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    }

    //
    // Browser Interfaces
    // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    // ----------------------------------------------------------------------

    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }

    interface TouchList {
        [index: number]: Touch;
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }

    //
    // Error Interfaces
    // ----------------------------------------------------------------------
    interface ErrorInfo {
        /**
         * Captures which component contained the exception, and its ancestors.
         */
        componentStack: string;
    }

    namespace JSX {
        interface Element extends GlobalJSXElement {}
        interface ElementClass extends GlobalJSXElementClass {}
        interface ElementAttributesProperty extends GlobalJSXElementAttributesProperty {}
        interface ElementChildrenAttribute extends GlobalJSXElementChildrenAttribute {}

        type LibraryManagedAttributes<C, P> = GlobalJSXLibraryManagedAttributes<C, P>;

        interface IntrinsicAttributes extends GlobalJSXIntrinsicAttributes {}
        interface IntrinsicClassAttributes<T> extends GlobalJSXIntrinsicClassAttributes<T> {}
        interface IntrinsicElements extends GlobalJSXIntrinsicElements {}
    }
}

// naked 'any' type in a conditional type will short circuit and union both the then/else branches
// so boolean is only resolved for T = any
type IsExactlyAny<T> = boolean extends (T extends never ? true : false) ? true : false;

type ExactlyAnyPropertyKeys<T> = { [K in keyof T]: IsExactlyAny<T[K]> extends true ? K : never }[keyof T];
type NotExactlyAnyPropertyKeys<T> = Exclude<keyof T, ExactlyAnyPropertyKeys<T>>;

// Try to resolve ill-defined props like for JS users: props can be any, or sometimes objects with properties of type any
type MergePropTypes<P, T> =
    // Distribute over P in case it is a union type
    P extends any
        // If props is type any, use propTypes definitions
        ? IsExactlyAny<P> extends true ? T
            // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
        : string extends keyof P ? P
            // Prefer declared types which are not exactly any
        :
            & Pick<P, NotExactlyAnyPropertyKeys<P>>
            // For props which are exactly any, use the type inferred from propTypes if present
            & Pick<T, Exclude<keyof T, NotExactlyAnyPropertyKeys<P>>>
            // Keep leftover props not specified in propTypes
            & Pick<P, Exclude<keyof P, keyof T>>
        : never;

type InexactPartial<T> = { [K in keyof T]?: T[K] | undefined };

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any ? string extends keyof P ? P
    :
        & Pick<P, Exclude<keyof P, keyof D>>
        & InexactPartial<Pick<P, Extract<keyof P, keyof D>>>
        & InexactPartial<Pick<D, Exclude<keyof D, keyof P>>>
    : never;

type ReactManagedAttributes<C, P> = C extends { propTypes: infer T; defaultProps: infer D }
    ? Defaultize<MergePropTypes<P, PropTypes.InferProps<T>>, D>
    : C extends { propTypes: infer T } ? MergePropTypes<P, PropTypes.InferProps<T>>
    : C extends { defaultProps: infer D } ? Defaultize<P, D>
    : P;

declare global {
    /**
     * @deprecated Use \`React.JSX\` instead of the global \`JSX\` namespace.
     */
    namespace JSX {
        interface Element extends React.ReactElement<any, any> {}
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }

        // We can't recurse forever because \`type\` can't be self-referential;
        // let's assume it's reasonable to do a single React.lazy() around a single React.memo() / vice-versa
        type LibraryManagedAttributes<C, P> = C extends
            React.MemoExoticComponent<infer T> | React.LazyExoticComponent<infer T>
            ? T extends React.MemoExoticComponent<infer U> | React.LazyExoticComponent<infer U>
                ? ReactManagedAttributes<U, P>
            : ReactManagedAttributes<T, P>
            : ReactManagedAttributes<C, P>;

        interface IntrinsicAttributes extends React.Attributes {}
        interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}

        interface IntrinsicElements {
            // HTML
            a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
            details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
            nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
            p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
            script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
            title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: React.SVGProps<SVGSVGElement>;

            animate: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateMotion: React.SVGProps<SVGElement>;
            animateTransform: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: React.SVGProps<SVGCircleElement>;
            clipPath: React.SVGProps<SVGClipPathElement>;
            defs: React.SVGProps<SVGDefsElement>;
            desc: React.SVGProps<SVGDescElement>;
            ellipse: React.SVGProps<SVGEllipseElement>;
            feBlend: React.SVGProps<SVGFEBlendElement>;
            feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
            feComposite: React.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
            feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
            feFlood: React.SVGProps<SVGFEFloodElement>;
            feFuncA: React.SVGProps<SVGFEFuncAElement>;
            feFuncB: React.SVGProps<SVGFEFuncBElement>;
            feFuncG: React.SVGProps<SVGFEFuncGElement>;
            feFuncR: React.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
            feImage: React.SVGProps<SVGFEImageElement>;
            feMerge: React.SVGProps<SVGFEMergeElement>;
            feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: React.SVGProps<SVGFEMorphologyElement>;
            feOffset: React.SVGProps<SVGFEOffsetElement>;
            fePointLight: React.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: React.SVGProps<SVGFESpotLightElement>;
            feTile: React.SVGProps<SVGFETileElement>;
            feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
            filter: React.SVGProps<SVGFilterElement>;
            foreignObject: React.SVGProps<SVGForeignObjectElement>;
            g: React.SVGProps<SVGGElement>;
            image: React.SVGProps<SVGImageElement>;
            line: React.SVGLineElementAttributes<SVGLineElement>;
            linearGradient: React.SVGProps<SVGLinearGradientElement>;
            marker: React.SVGProps<SVGMarkerElement>;
            mask: React.SVGProps<SVGMaskElement>;
            metadata: React.SVGProps<SVGMetadataElement>;
            mpath: React.SVGProps<SVGElement>;
            path: React.SVGProps<SVGPathElement>;
            pattern: React.SVGProps<SVGPatternElement>;
            polygon: React.SVGProps<SVGPolygonElement>;
            polyline: React.SVGProps<SVGPolylineElement>;
            radialGradient: React.SVGProps<SVGRadialGradientElement>;
            rect: React.SVGProps<SVGRectElement>;
            stop: React.SVGProps<SVGStopElement>;
            switch: React.SVGProps<SVGSwitchElement>;
            symbol: React.SVGProps<SVGSymbolElement>;
            text: React.SVGTextElementAttributes<SVGTextElement>;
            textPath: React.SVGProps<SVGTextPathElement>;
            tspan: React.SVGProps<SVGTSpanElement>;
            use: React.SVGProps<SVGUseElement>;
            view: React.SVGProps<SVGViewElement>;
        }
    }
}

// React.JSX needs to point to global.JSX to keep global module augmentations intact.
// But we can't access global.JSX so we need to create these aliases instead.
// Once the global JSX namespace will be removed we replace React.JSX with the contents of global.JSX
interface GlobalJSXElement extends JSX.Element {}
interface GlobalJSXElementClass extends JSX.ElementClass {}
interface GlobalJSXElementAttributesProperty extends JSX.ElementAttributesProperty {}
interface GlobalJSXElementChildrenAttribute extends JSX.ElementChildrenAttribute {}

type GlobalJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;

interface GlobalJSXIntrinsicAttributes extends JSX.IntrinsicAttributes {}
interface GlobalJSXIntrinsicClassAttributes<T> extends JSX.IntrinsicClassAttributes<T> {}

interface GlobalJSXIntrinsicElements extends JSX.IntrinsicElements {}
`,Ry=`import * as React from "./";

export namespace JSX {
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
}
`,wy=`import * as React from "./";

export namespace JSX {
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
}
`,Py=`{
  "name": "react-dom",
  "version": "18.2.0",
  "description": "React package for working with the DOM.",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  },
  "keywords": [
    "react"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/facebook/react/issues"
  },
  "homepage": "https://reactjs.org/",
  "dependencies": {
    "loose-envify": "^1.1.0",
    "scheduler": "^0.23.0"
  },
  "peerDependencies": {
    "react": "^18.2.0"
  },
  "files": [
    "LICENSE",
    "README.md",
    "index.js",
    "client.js",
    "profiling.js",
    "server.js",
    "server.browser.js",
    "server.node.js",
    "test-utils.js",
    "cjs/",
    "umd/"
  ],
  "exports": {
    ".": "./index.js",
    "./client": "./client.js",
    "./server": {
      "deno": "./server.browser.js",
      "worker": "./server.browser.js",
      "browser": "./server.browser.js",
      "default": "./server.node.js"
    },
    "./server.browser": "./server.browser.js",
    "./server.node": "./server.node.js",
    "./profiling": "./profiling.js",
    "./test-utils": "./test-utils.js",
    "./package.json": "./package.json"
  },
  "browser": {
    "./server.js": "./server.browser.js"
  },
  "browserify": {
    "transform": [
      "loose-envify"
    ]
  }
}`,Cy=`{
  "name": "react",
  "description": "React is a JavaScript library for building user interfaces.",
  "keywords": [
    "react"
  ],
  "version": "18.2.0",
  "homepage": "https://reactjs.org/",
  "bugs": "https://github.com/facebook/react/issues",
  "license": "MIT",
  "files": [
    "LICENSE",
    "README.md",
    "index.js",
    "cjs/",
    "umd/",
    "jsx-runtime.js",
    "jsx-dev-runtime.js",
    "react.shared-subset.js"
  ],
  "main": "index.js",
  "exports": {
    ".": {
      "react-server": "./react.shared-subset.js",
      "default": "./index.js"
    },
    "./package.json": "./package.json",
    "./jsx-runtime": "./jsx-runtime.js",
    "./jsx-dev-runtime": "./jsx-dev-runtime.js"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react"
  },
  "engines": {
    "node": ">=0.10.0"
  },
  "dependencies": {
    "loose-envify": "^1.1.0"
  },
  "browserify": {
    "transform": [
      "loose-envify"
    ]
  }
}`;var Ay=`/******************************************************************************\r
Copyright (c) Microsoft Corporation.\r
\r
Permission to use, copy, modify, and/or distribute this software for any\r
purpose with or without fee is hereby granted.\r
\r
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r
PERFORMANCE OF THIS SOFTWARE.\r
***************************************************************************** */\r
\r
var __assign = function() {\r
    __assign = Object.assign || function __assign(t) {\r
        for (var s, i = 1, n = arguments.length; i < n; i++) {\r
            s = arguments[i];\r
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r
        }\r
        return t;\r
    };\r
    return __assign.apply(this, arguments);\r
};

var getTypescriptUrl=function(){var t="https://cdnjs.cloudflare.com/ajax/libs/typescript/4.6.4/typescript.min.js";try{return __TYPESCRIPT_CUSTOM_URL__||t}catch(r){return t}};self.importScripts([getTypescriptUrl()]);var Typescript=self.ts;

var JsxToken={angleBracket:"jsx-tag-angle-bracket",attributeKey:"jsx-tag-attribute-key",tagName:"jsx-tag-name",expressionBraces:"jsx-expression-braces",text:"jsx-text",orderTokenPrefix:"jsx-tag-order"};

var getRowAndColumn=function(n,o){for(var t=0,e=0;e+o[t]<n;)e+=o[t],t+=1;return {row:t+1,column:n-e}};var getNodeRange=function(n){return "function"==typeof n.getStart&&"function"==typeof n.getEnd?[n.getStart(),n.getEnd()]:void 0!==n.pos&&void 0!==n.end?[n.pos,n.end]:[0,0]};var calcPosition=function(n,o){var t=getNodeRange(n),e=t[0],r=t[1];return {indexes:[e,r],positions:[getRowAndColumn(e+1,o),getRowAndColumn(r,o)]}};

var disposeJsxElementOrFragment=function(n){var s=n.node,e=n.lines,t=n.classifications,o=n.config,a=n.context,i="".concat(JsxToken.orderTokenPrefix,"-").concat(a.jsxTagOrder);if(a.jsxTagOrder=a.jsxTagOrder+1>o.jsxTagCycle?1:a.jsxTagOrder+1,s.kind===Typescript.SyntaxKind.JsxSelfClosingElement){var r=calcPosition(s,e).positions,c=calcPosition(s.tagName,e).positions;t.push({start:r[0],end:r[0],tokens:[JsxToken.angleBracket,i]}),t.push({start:__assign(__assign({},r[1]),{column:r[1].column-1}),end:r[1],tokens:[JsxToken.angleBracket,i]}),t.push({start:c[0],end:c[1],tokens:[JsxToken.tagName,i]});}else {var p=s.kind===Typescript.SyntaxKind.JsxFragment?s.openingFragment:s.openingElement,g=s.kind===Typescript.SyntaxKind.JsxFragment?s.closingFragment:s.closingElement,l=calcPosition(p,e).positions,k=calcPosition(g,e).positions;if(t.push({start:l[0],end:l[0],tokens:[JsxToken.angleBracket,i]}),t.push({start:l[1],end:l[1],tokens:[JsxToken.angleBracket,i]}),t.push({start:k[0],end:__assign(__assign({},k[0]),{column:k[0].column+1}),tokens:[JsxToken.angleBracket,i]}),t.push({start:k[1],end:k[1],tokens:[JsxToken.angleBracket,i]}),s.kind===Typescript.SyntaxKind.JsxElement){var m=calcPosition(p.tagName,e).positions,x=calcPosition(g.tagName,e).positions;t.push({start:m[0],end:m[1],tokens:[JsxToken.tagName,i]}),t.push({start:x[0],end:x[1],tokens:[JsxToken.tagName,i]});}}};

var disposeJsxAttributeKey=function(o){var t=o.node,i=o.lines,s=o.classifications,e=calcPosition(t,i).positions;s.push({start:e[0],end:e[1],tokens:[JsxToken.attributeKey]});};

var disposeJsxExpression=function(s){var o=s.node,e=s.lines,n=s.classifications,i=calcPosition(o,e).positions;n.push({start:i[0],end:i[0],tokens:[JsxToken.expressionBraces]}),n.push({start:i[1],end:i[1],tokens:[JsxToken.expressionBraces]});};

var disposeJsxText=function(o){var s=o.node,i=o.lines,t=o.classifications,n=calcPosition(s,i).positions;t.push({start:n[0],end:n[1],tokens:[JsxToken.text]});};

var disposeNode=function(e){var s=e.node,i=e.index;[Typescript.SyntaxKind.JsxFragment,Typescript.SyntaxKind.JsxElement,Typescript.SyntaxKind.JsxSelfClosingElement].includes(s.kind)&&disposeJsxElementOrFragment(e),s.parent&&s.parent.kind===Typescript.SyntaxKind.JsxAttribute&&s.kind===Typescript.SyntaxKind.Identifier&&0===i&&disposeJsxAttributeKey(e),s.kind===Typescript.SyntaxKind.JsxExpression&&disposeJsxExpression(e),s.kind===Typescript.SyntaxKind.JsxText&&disposeJsxText(e);},walkAST=function(e){disposeNode(e);var s=0;Typescript.forEachChild(e.node,(function(i){return walkAST(__assign(__assign({},e),{node:i,index:s++}))}));},withDefaultConfig=function(e){var s=(e||{}).jsxTagCycle;return {jsxTagCycle:void 0===s?3:s}};var analysis=function(e,s,i){try{var t=[],n=Typescript.createSourceFile(e,s,Typescript.ScriptTarget.ES2020,!0),r=s.split("\\n").map((function(e){return e.length+1}));return walkAST({node:n,lines:r,context:{jsxTagOrder:1},classifications:t,config:withDefaultConfig(i),index:0}),t}catch(e){return (null==i?void 0:i.enableConsole)&&console.error(e),[]}};

self.addEventListener("message",(function(s){var a=s.data,e=a.code,i=a.filePath,n=a.version,o=a.config;try{var l=analysis(i,e,o);self.postMessage({classifications:l,version:n,filePath:i});}catch(s){(null==o?void 0:o.enableConsole)&&console.error(s);}}));
`,Dy={worker:Ay},ky=function(){return Dy},_y=function(){function e(n,t,r){var i=this;this.createWorkerFromPureString=function(o,a){window.URL=window.URL||window.webkitURL;var s;o=o.replace("__TYPESCRIPT_CUSTOM_URL__",a!=null&&a.customTypescriptUrl?"'".concat(a==null?void 0:a.customTypescriptUrl,"'"):"undefined");try{s=new Blob([o],{type:"application/javascript"})}catch{window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder,s=new window.BlobBuilder,s.append(o),s=s.getBlob()}var l=new Worker(URL.createObjectURL(s));return URL.revokeObjectURL(s),l},this.highlighterBuilder=function(o){var a=o.editor,s=o.filePath,l=s===void 0?a.getModel().uri.toString():s,u={current:[]},c=function(f){var h=f.data,T=h.classifications,g=h.version,v=h.filePath;requestAnimationFrame(function(){if(v===l&&g===a.getModel().getVersionId()){var R=u.current;u.current=a.deltaDecorations(R,T.map(function(m){return{range:new i.monaco.Range(m.start.row,m.start.column,m.end.row,m.end.column+1),options:{inlineClassName:m.tokens.join(" ")}}}))}})};return i.worker.addEventListener("message",c),{highlighter:function(f){requestAnimationFrame(function(){var h=f||a.getModel().getValue();i.worker.postMessage({code:h,filePath:l,version:a.getModel().getVersionId()})})},dispose:function(){i.worker.removeEventListener("message",c)}}},this.monaco=t,typeof n=="string"?this.worker=new Worker(n):n.worker&&typeof n.worker=="string"?this.worker=this.createWorkerFromPureString(n.worker,r):this.worker=n}return e}();const Fy=()=>({initExtraLibs:r=>{const i=Object.assign({"/node_modules/@types/react-dom/canary.d.ts":uy,"/node_modules/@types/react-dom/client.d.ts":dy,"/node_modules/@types/react-dom/experimental.d.ts":cy,"/node_modules/@types/react-dom/index.d.ts":fy,"/node_modules/@types/react-dom/package.json":py,"/node_modules/@types/react-dom/server.d.ts":my,"/node_modules/@types/react-dom/test-utils/index.d.ts":hy,"/node_modules/@types/react/canary.d.ts":gy,"/node_modules/@types/react/experimental.d.ts":Ty,"/node_modules/@types/react/global.d.ts":yy,"/node_modules/@types/react/index.d.ts":vy,"/node_modules/@types/react/jsx-dev-runtime.d.ts":Ey,"/node_modules/@types/react/jsx-runtime.d.ts":by,"/node_modules/@types/react/package.json":My,"/node_modules/@types/react/ts5.0/canary.d.ts":Ly,"/node_modules/@types/react/ts5.0/experimental.d.ts":Hy,"/node_modules/@types/react/ts5.0/global.d.ts":Sy,"/node_modules/@types/react/ts5.0/index.d.ts":xy,"/node_modules/@types/react/ts5.0/jsx-dev-runtime.d.ts":Ry,"/node_modules/@types/react/ts5.0/jsx-runtime.d.ts":wy,"/node_modules/react-dom/package.json":Py,"/node_modules/react/package.json":Cy});Object.keys(i).forEach(o=>{r.languages.typescript.typescriptDefaults.addExtraLib(i[o],`file://${o}`),r.languages.typescript.javascriptDefaults.addExtraLib(i[o],`file://${o}`)})},doOpenEditor:(r,i)=>{const o=i.options?i.options.selection:null;if(o)if(typeof o.endLineNumber=="number"&&typeof o.endColumn=="number")r.setSelection(o),r.revealRangeInCenter(o,1);else{const a={lineNumber:o.startLineNumber,column:o.startColumn};r.setPosition(a),r.revealPositionInCenter(a,1)}console.log("触发鼠标+ctrl点击",i.resource,o)},loadJsxSyntaxHighlight:(r,i)=>(i.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:i.languages.typescript.JsxEmit.Preserve,target:i.languages.typescript.ScriptTarget.ES2020,esModuleInterop:!0}),new _y(ky(),i).highlighterBuilder({editor:r}))}),Up=`{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"
  }
}
`,Iy=`:root {
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
`,Oy=`import { useState } from 'react'
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
`,Bp=`import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
`,Vy="modulepreload",Ny=function(e,n){return new URL(e,n).href},ec={},Gy=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=Ny(o,r),o in ec)return;ec[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Vy,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var He=Uint8Array,Ye=Uint16Array,gu=Int32Array,va=new He([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ea=new He([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pl=new He([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Wp=function(e,n){for(var t=new Ye(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var i=new gu(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return{b:t,r:i}},$p=Wp(va,2),Xp=$p.b,ml=$p.r;Xp[28]=258,ml[258]=28;var Jp=Wp(Ea,0),jy=Jp.b,nc=Jp.r,hl=new Ye(32768);for(var ue=0;ue<32768;++ue){var nt=(ue&43690)>>1|(ue&21845)<<1;nt=(nt&52428)>>2|(nt&13107)<<2,nt=(nt&61680)>>4|(nt&3855)<<4,hl[ue]=((nt&65280)>>8|(nt&255)<<8)>>1}var Dn=function(e,n,t){for(var r=e.length,i=0,o=new Ye(n);i<r;++i)e[i]&&++o[e[i]-1];var a=new Ye(n);for(i=1;i<n;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(t){s=new Ye(1<<n);var l=15-n;for(i=0;i<r;++i)if(e[i])for(var u=i<<4|e[i],c=n-e[i],f=a[e[i]-1]++<<c,h=f|(1<<c)-1;f<=h;++f)s[hl[f]>>l]=u}else for(s=new Ye(r),i=0;i<r;++i)e[i]&&(s[i]=hl[a[e[i]-1]++]>>15-e[i]);return s},Et=new He(288);for(var ue=0;ue<144;++ue)Et[ue]=8;for(var ue=144;ue<256;++ue)Et[ue]=9;for(var ue=256;ue<280;++ue)Et[ue]=7;for(var ue=280;ue<288;++ue)Et[ue]=8;var xi=new He(32);for(var ue=0;ue<32;++ue)xi[ue]=5;var zy=Dn(Et,9,0),Uy=Dn(Et,9,1),By=Dn(xi,5,0),Wy=Dn(xi,5,1),ss=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},mn=function(e,n,t){var r=n/8|0;return(e[r]|e[r+1]<<8)>>(n&7)&t},ls=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},Tu=function(e){return(e+7)/8|0},ba=function(e,n,t){return(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length),new He(e.subarray(n,t))},$y=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],rn=function(e,n,t){var r=new Error(n||$y[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,rn),!t)throw r;return r},Xy=function(e,n,t,r){var i=e.length,o=r?r.length:0;if(!i||n.f&&!n.l)return t||new He(0);var a=!t,s=a||n.i!=2,l=n.i;a&&(t=new He(i*3));var u=function(Ht){var Ln=t.length;if(Ht>Ln){var Hn=new He(Math.max(Ln*2,Ht));Hn.set(t),t=Hn}},c=n.f||0,f=n.p||0,h=n.b||0,T=n.l,g=n.d,v=n.m,R=n.n,m=i*8;do{if(!T){c=mn(e,f,1);var d=mn(e,f+1,3);if(f+=3,d)if(d==1)T=Uy,g=Wy,v=9,R=5;else if(d==2){var S=mn(e,f,31)+257,b=mn(e,f+10,15)+4,L=S+mn(e,f+5,31)+1;f+=14;for(var w=new He(L),C=new He(19),O=0;O<b;++O)C[pl[O]]=mn(e,f+O*3,7);f+=b*3;for(var U=ss(C),K=(1<<U)-1,_=Dn(C,U,1),O=0;O<L;){var F=_[mn(e,f,K)];f+=F&15;var p=F>>4;if(p<16)w[O++]=p;else{var j=0,W=0;for(p==16?(W=3+mn(e,f,3),f+=2,j=w[O-1]):p==17?(W=3+mn(e,f,7),f+=3):p==18&&(W=11+mn(e,f,127),f+=7);W--;)w[O++]=j}}var P=w.subarray(0,S),I=w.subarray(S);v=ss(P),R=ss(I),T=Dn(P,v,1),g=Dn(I,R,1)}else rn(1);else{var p=Tu(f)+4,E=e[p-4]|e[p-3]<<8,H=p+E;if(H>i){l&&rn(0);break}s&&u(h+E),t.set(e.subarray(p,H),h),n.b=h+=E,n.p=f=H*8,n.f=c;continue}if(f>m){l&&rn(0);break}}s&&u(h+131072);for(var G=(1<<v)-1,k=(1<<R)-1,V=f;;V=f){var j=T[ls(e,f)&G],J=j>>4;if(f+=j&15,f>m){l&&rn(0);break}if(j||rn(2),J<256)t[h++]=J;else if(J==256){V=f,T=null;break}else{var Z=J-254;if(J>264){var O=J-257,Y=va[O];Z=mn(e,f,(1<<Y)-1)+Xp[O],f+=Y}var ce=g[ls(e,f)&k],$=ce>>4;ce||rn(3),f+=ce&15;var I=jy[$];if($>3){var Y=Ea[$];I+=ls(e,f)&(1<<Y)-1,f+=Y}if(f>m){l&&rn(0);break}s&&u(h+131072);var X=h+Z;if(h<I){var re=o-I,oe=Math.min(I,X);for(re+h<0&&rn(3);h<oe;++h)t[h]=r[re+h]}for(;h<X;++h)t[h]=t[h-I]}}n.l=T,n.p=V,n.b=h,n.f=c,T&&(c=1,n.m=v,n.d=g,n.n=R)}while(!c);return h!=t.length&&a?ba(t,0,h):t.subarray(0,h)},On=function(e,n,t){t<<=n&7;var r=n/8|0;e[r]|=t,e[r+1]|=t>>8},zr=function(e,n,t){t<<=n&7;var r=n/8|0;e[r]|=t,e[r+1]|=t>>8,e[r+2]|=t>>16},us=function(e,n){for(var t=[],r=0;r<e.length;++r)e[r]&&t.push({s:r,f:e[r]});var i=t.length,o=t.slice();if(!i)return{t:Yp,l:0};if(i==1){var a=new He(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(H,S){return H.f-S.f}),t.push({s:-1,f:25001});var s=t[0],l=t[1],u=0,c=1,f=2;for(t[0]={s:-1,f:s.f+l.f,l:s,r:l};c!=i-1;)s=t[t[u].f<t[f].f?u++:f++],l=t[u!=c&&t[u].f<t[f].f?u++:f++],t[c++]={s:-1,f:s.f+l.f,l:s,r:l};for(var h=o[0].s,r=1;r<i;++r)o[r].s>h&&(h=o[r].s);var T=new Ye(h+1),g=gl(t[c-1],T,0);if(g>n){var r=0,v=0,R=g-n,m=1<<R;for(o.sort(function(S,b){return T[b.s]-T[S.s]||S.f-b.f});r<i;++r){var d=o[r].s;if(T[d]>n)v+=m-(1<<g-T[d]),T[d]=n;else break}for(v>>=R;v>0;){var p=o[r].s;T[p]<n?v-=1<<n-T[p]++-1:++r}for(;r>=0&&v;--r){var E=o[r].s;T[E]==n&&(--T[E],++v)}g=n}return{t:new He(T),l:g}},gl=function(e,n,t){return e.s==-1?Math.max(gl(e.l,n,t+1),gl(e.r,n,t+1)):n[e.s]=t},tc=function(e){for(var n=e.length;n&&!e[--n];);for(var t=new Ye(++n),r=0,i=e[0],o=1,a=function(l){t[r++]=l},s=1;s<=n;++s)if(e[s]==i&&s!=n)++o;else{if(!i&&o>2){for(;o>138;o-=138)a(32754);o>2&&(a(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(a(i),--o;o>6;o-=6)a(8304);o>2&&(a(o-3<<5|8208),o=0)}for(;o--;)a(i);o=1,i=e[s]}return{c:t.subarray(0,r),n}},Ur=function(e,n){for(var t=0,r=0;r<n.length;++r)t+=e[r]*n[r];return t},Kp=function(e,n,t){var r=t.length,i=Tu(n+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var o=0;o<r;++o)e[i+o+4]=t[o];return(i+4+r)*8},rc=function(e,n,t,r,i,o,a,s,l,u,c){On(n,c++,t),++i[256];for(var f=us(i,15),h=f.t,T=f.l,g=us(o,15),v=g.t,R=g.l,m=tc(h),d=m.c,p=m.n,E=tc(v),H=E.c,S=E.n,b=new Ye(19),L=0;L<d.length;++L)++b[d[L]&31];for(var L=0;L<H.length;++L)++b[H[L]&31];for(var w=us(b,7),C=w.t,O=w.l,U=19;U>4&&!C[pl[U-1]];--U);var K=u+5<<3,_=Ur(i,Et)+Ur(o,xi)+a,F=Ur(i,h)+Ur(o,v)+a+14+3*U+Ur(b,C)+2*b[16]+3*b[17]+7*b[18];if(l>=0&&K<=_&&K<=F)return Kp(n,c,e.subarray(l,l+u));var j,W,P,I;if(On(n,c,1+(F<_)),c+=2,F<_){j=Dn(h,T,0),W=h,P=Dn(v,R,0),I=v;var G=Dn(C,O,0);On(n,c,p-257),On(n,c+5,S-1),On(n,c+10,U-4),c+=14;for(var L=0;L<U;++L)On(n,c+3*L,C[pl[L]]);c+=3*U;for(var k=[d,H],V=0;V<2;++V)for(var J=k[V],L=0;L<J.length;++L){var Z=J[L]&31;On(n,c,G[Z]),c+=C[Z],Z>15&&(On(n,c,J[L]>>5&127),c+=J[L]>>12)}}else j=zy,W=Et,P=By,I=xi;for(var L=0;L<s;++L){var Y=r[L];if(Y>255){var Z=Y>>18&31;zr(n,c,j[Z+257]),c+=W[Z+257],Z>7&&(On(n,c,Y>>23&31),c+=va[Z]);var ce=Y&31;zr(n,c,P[ce]),c+=I[ce],ce>3&&(zr(n,c,Y>>5&8191),c+=Ea[ce])}else zr(n,c,j[Y]),c+=W[Y]}return zr(n,c,j[256]),c+W[256]},Jy=new gu([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Yp=new He(0),Ky=function(e,n,t,r,i,o){var a=o.z||e.length,s=new He(r+a+5*(1+Math.ceil(a/7e3))+i),l=s.subarray(r,s.length-i),u=o.l,c=(o.r||0)&7;if(n){c&&(l[0]=o.r>>3);for(var f=Jy[n-1],h=f>>13,T=f&8191,g=(1<<t)-1,v=o.p||new Ye(32768),R=o.h||new Ye(g+1),m=Math.ceil(t/3),d=2*m,p=function($t){return(e[$t]^e[$t+1]<<m^e[$t+2]<<d)&g},E=new gu(25e3),H=new Ye(288),S=new Ye(32),b=0,L=0,w=o.i||0,C=0,O=o.w||0,U=0;w+2<a;++w){var K=p(w),_=w&32767,F=R[K];if(v[_]=F,R[K]=_,O<=w){var j=a-w;if((b>7e3||C>24576)&&(j>423||!u)){c=rc(e,l,0,E,H,S,L,C,U,w-U,c),C=b=L=0,U=w;for(var W=0;W<286;++W)H[W]=0;for(var W=0;W<30;++W)S[W]=0}var P=2,I=0,G=T,k=_-F&32767;if(j>2&&K==p(w-k))for(var V=Math.min(h,j)-1,J=Math.min(32767,w),Z=Math.min(258,j);k<=J&&--G&&_!=F;){if(e[w+P]==e[w+P-k]){for(var Y=0;Y<Z&&e[w+Y]==e[w+Y-k];++Y);if(Y>P){if(P=Y,I=k,Y>V)break;for(var ce=Math.min(k,Y-2),$=0,W=0;W<ce;++W){var X=w-k+W&32767,re=v[X],oe=X-re&32767;oe>$&&($=oe,F=X)}}}_=F,F=v[_],k+=_-F&32767}if(I){E[C++]=268435456|ml[P]<<18|nc[I];var Ht=ml[P]&31,Ln=nc[I]&31;L+=va[Ht]+Ea[Ln],++H[257+Ht],++S[Ln],O=w+P,++b}else E[C++]=e[w],++H[e[w]]}}for(w=Math.max(w,O);w<a;++w)E[C++]=e[w],++H[e[w]];c=rc(e,l,u,E,H,S,L,C,U,w-U,c),u||(o.r=c&7|l[c/8|0]<<3,c-=7,o.h=R,o.p=v,o.i=w,o.w=O)}else{for(var w=o.w||0;w<a+u;w+=65535){var Hn=w+65535;Hn>=a&&(l[c/8|0]=u,Hn=a),c=Kp(l,c+1,e.subarray(w,Hn))}o.i=a}return ba(s,0,r+Tu(c)+i)},Qp=function(){var e=1,n=0;return{p:function(t){for(var r=e,i=n,o=t.length|0,a=0;a!=o;){for(var s=Math.min(a+2655,o);a<s;++a)i+=r+=t[a];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}e=r,n=i},d:function(){return e%=65521,n%=65521,(e&255)<<24|(e&65280)<<8|(n&255)<<8|n>>8}}},Yy=function(e,n,t,r,i){if(!i&&(i={l:1},n.dictionary)){var o=n.dictionary.subarray(-32768),a=new He(o.length+e.length);a.set(o),a.set(e,o.length),e=a,i.w=o.length}return Ky(e,n.level==null?6:n.level,n.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):12+n.mem,t,r,i)},qp=function(e,n,t){for(;t;++n)e[n]=t,t>>>=8},Qy=function(e,n){var t=n.level,r=t==0?0:t<6?1:t==9?3:2;if(e[0]=120,e[1]=r<<6|(n.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,n.dictionary){var i=Qp();i.p(n.dictionary),qp(e,2,i.d())}},qy=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&rn(6,"invalid zlib data"),(e[1]>>5&1)==+!n&&rn(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function Zy(e,n){n||(n={});var t=Qp();t.p(e);var r=Yy(e,n,n.dictionary?6:2,4);return Qy(r,n),qp(r,r.length-4,t.d()),r}function ev(e,n){return Xy(e.subarray(qy(e,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}var ic=typeof TextEncoder<"u"&&new TextEncoder,Tl=typeof TextDecoder<"u"&&new TextDecoder,nv=0;try{Tl.decode(Yp,{stream:!0}),nv=1}catch{}var tv=function(e){for(var n="",t=0;;){var r=e[t++],i=(r>127)+(r>223)+(r>239);if(t+i>e.length)return{s:n,r:ba(e,t-1)};i?i==3?(r=((r&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?n+=String.fromCharCode((r&31)<<6|e[t++]&63):n+=String.fromCharCode((r&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(r)}};function Zp(e,n){if(n){for(var t=new He(e.length),r=0;r<e.length;++r)t[r]=e.charCodeAt(r);return t}if(ic)return ic.encode(e);for(var i=e.length,o=new He(e.length+(e.length>>1)),a=0,s=function(c){o[a++]=c},r=0;r<i;++r){if(a+5>o.length){var l=new He(a+8+(i-r<<1));l.set(o),o=l}var u=e.charCodeAt(r);u<128||n?s(u):u<2048?(s(192|u>>6),s(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|e.charCodeAt(++r)&1023,s(240|u>>18),s(128|u>>12&63),s(128|u>>6&63),s(128|u&63)):(s(224|u>>12),s(128|u>>6&63),s(128|u&63))}return ba(o,0,a)}function em(e,n){if(n){for(var t="",r=0;r<e.length;r+=16384)t+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return t}else{if(Tl)return Tl.decode(e);var i=tv(e),o=i.s,t=i.r;return t.length&&rn(8),o}}var nm={exports:{}};(function(e,n){(function(t,r){r()})(kr,function(){function t(u,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function r(u,c,f){var h=new XMLHttpRequest;h.open("GET",u),h.responseType="blob",h.onload=function(){l(h.response,c,f)},h.onerror=function(){console.error("could not download file")},h.send()}function i(u){var c=new XMLHttpRequest;c.open("HEAD",u,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function o(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(c)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof kr=="object"&&kr.global===kr?kr:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(u,c,f){var h=a.URL||a.webkitURL,T=document.createElement("a");c=c||u.name||"download",T.download=c,T.rel="noopener",typeof u=="string"?(T.href=u,T.origin===location.origin?o(T):i(T.href)?r(u,c,f):o(T,T.target="_blank")):(T.href=h.createObjectURL(u),setTimeout(function(){h.revokeObjectURL(T.href)},4e4),setTimeout(function(){o(T)},0))}:"msSaveOrOpenBlob"in navigator?function(u,c,f){if(c=c||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(t(u,f),c);else if(i(u))r(u,c,f);else{var h=document.createElement("a");h.href=u,h.target="_blank",setTimeout(function(){o(h)})}}:function(u,c,f,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof u=="string")return r(u,c,f);var T=u.type==="application/octet-stream",g=/constructor/i.test(a.HTMLElement)||a.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||T&&g||s)&&typeof FileReader<"u"){var R=new FileReader;R.onloadend=function(){var p=R.result;p=v?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=p:location=p,h=null},R.readAsDataURL(u)}else{var m=a.URL||a.webkitURL,d=m.createObjectURL(u);h?h.location=d:location.href=d,h=null,setTimeout(function(){m.revokeObjectURL(d)},4e4)}});a.saveAs=l.saveAs=l,e.exports=l})})(nm);var rv=nm.exports;const iv=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"><\/script>
  </body>
</html>
`,ov=`{
  "name": "react-playground",
  "author": "fewismuch",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react-swc": "^3.3.2",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "vite": "^4.4.5"
  }
}
`,av=`# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
`,sv=`import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
`;async function lv(e){const{default:n}=await Gy(()=>import("./jszip.min-764fd08f.js").then(o=>o.j),[],import.meta.url),t=new n;t.file("index.html",iv),t.file("package.json",ov),t.file("vite.config.js",sv),t.file("README.md",av);const r=t.folder("src");Object.keys(e).forEach(o=>{e[o].name!==bn?r.file(o,e[o].value):t.file(o,e[o].value)});const i=await t.generateAsync({type:"blob"});rv.saveAs(i,"react-project.zip")}function uv(e,n=100){let t;return(...r)=>{t&&clearTimeout(t),t=setTimeout(()=>{e(...r)},n)}}function dv(e){const n=Zp(e),t=Zy(n,{level:9}),r=em(t,!0);return btoa(r)}function cv(e){const n=atob(e);if(n.startsWith("xÚ")){const t=Zp(n,!0),r=ev(t);return em(r)}return decodeURIComponent(escape(n))}const tm="react-playground-prefer-dark",fv=e=>{var n;localStorage.setItem(tm,String(e==="dark")),(n=document.querySelector("#react-playground"))==null||n.setAttribute("class",e)},pv=()=>JSON.parse(localStorage.getItem(tm)||"false")?"dark":"light",mv=(e,n)=>e?n?{...oc,...e,[bn]:{name:bn,language:"json",value:JSON.stringify(n,null,2)}}:{...oc,...e}:null,hv=()=>{let e;try{if(typeof window<"u"){const n=window.location.hash;n&&(e=JSON.parse(cv(n==null?void 0:n.split("#")[1])))}}catch(n){console.error(n)}return e},gv=e=>{const n=e.split(".").pop()||"";return["js","jsx","json"].includes(n)?"javascript":["ts","tsx"].includes(n)?"typescript":["css"].includes(n)?"css":"javascript"},zt="App.jsx",bn="import-map.json",Ri="main.jsx",Tv=hv()||{[Ri]:{name:Ri,language:"javascript",value:Bp},[zt]:{name:zt,language:"javascript",value:Oy},"App.css":{name:"App.css",language:"css",value:Iy},[bn]:{name:bn,language:"json",value:Up}},oc={[Ri]:{name:Ri,language:"javascript",value:Bp},[bn]:{name:bn,language:"json",value:Up}},Po={files:Tv,selectedFileName:zt},Wt=x.createContext(Po),yv=e=>{const{children:n}=e,[t,r]=x.useState(Po.files),[i,o]=x.useState(Po.theme),[a,s]=x.useState(Po.selectedFileName),[l,u]=x.useState(""),c=g=>{t[g]={name:g,language:gv(g),value:""},r({...t})},f=g=>{delete t[g],r({...t})},h=(g,v)=>{if(!t[g]||v===void 0||v===null)return;const{[g]:R,...m}=t,d={[v]:{...R,name:v}};r({...m,...d})},T=g=>{fv(g),o(g)};return x.useEffect(()=>{const g=dv(JSON.stringify(t));window.location.hash=g,u(g)},[t]),x.useEffect(()=>{T(pv())},[]),z.jsx(Wt.Provider,{value:{theme:i,filesHash:l,files:t,selectedFileName:a,setTheme:o,changeTheme:T,setSelectedFileName:s,setFiles:r,addFile:c,removeFile:f,updateFileName:h},children:n})};hu.config({paths:{vs:"https://cdn.staticfile.org/monaco-editor/0.43.0/min/vs"}});const vv=({file:e,onChange:n,options:t})=>{const{theme:r,files:i,setSelectedFileName:o}=x.useContext(Wt),a=x.useRef(null),{doOpenEditor:s,loadJsxSyntaxHighlight:l,initExtraLibs:u}=Fy(),c=x.useRef({highlighter:null}),f=x.useCallback((T,g)=>{var v,R;return a.current=T,T.addCommand(g.KeyMod.CtrlCmd|g.KeyCode.KeyS,()=>{}),Object.entries(i).forEach(([m,d])=>{var p,E;(p=g==null?void 0:g.editor)!=null&&p.getModel(g.Uri.parse(`file:///${m}`))||(E=g==null?void 0:g.editor)==null||E.createModel(i[m].value,d.language,g.Uri.parse(`file:///${m}`))}),T._codeEditorService.doOpenEditor=function(m,d){const p=d.resource.path;o(p.replace("/","")),p.startsWith("/node_modules/")||s(m,d)},u(g),c.current=l(T,g),(v=c.current)==null||v.highlighter(),(R=c.current)==null?void 0:R.dispose},[]),h=T=>{T.forEach(g=>{console.log(g.message)})};return x.useEffect(()=>{var T,g,v;(T=a.current)==null||T.focus(),(v=(g=c==null?void 0:c.current)==null?void 0:g.highlighter)==null||v.call(g)},[e.name]),x.useMemo(()=>z.jsx(jp,{className:"react-playground-editor",height:"100%",theme:`vs-${r}`,path:e.name,language:e.language,value:e.value,onChange:n,onMount:f,onValidate:h,options:{...zp,...t}}),[e,r])};var rm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)n.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(rm);var Ev=rm.exports;const Ma=vc(Ev),bv="_tabs_16nwc_1",Mv="_actived_16nwc_32",Lv="_add_16nwc_51",jn={tabs:bv,"tab-item":"_tab-item_16nwc_22",actived:Mv,"import-map-wrapper":"_import-map-wrapper_16nwc_39",add:Lv,"tabs-item-input":"_tabs-item-input_16nwc_65","input-mask":"_input-mask_16nwc_76"},Hv=e=>{const{readOnlyTabs:n=[""],value:t,actived:r=!1,onOk:i,onCancel:o,onRemove:a,onClick:s,onValidate:l}=e,u=x.useRef(null),[c,f]=x.useState(t),[h,T]=x.useState(e.creating),g=d=>{d.key==="Entry"?(d.preventDefault(),R()):d.key==="Escape"&&(d.preventDefault(),v())},v=()=>{f(t),T(!1),o()};function R(){if(h&&l(c,t)){if(c===t&&r){T(!1);return}i(c),T(!1)}}const m=()=>{n.includes(c)||(T(!0),setTimeout(()=>{var d;(d=u==null?void 0:u.current)==null||d.focus()},0))};return x.useEffect(()=>{var d;(d=u==null?void 0:u.current)==null||d.focus()},[]),z.jsx("div",{className:Ma(jn["tab-item"],r?jn.actived:null),onClick:s,children:h?z.jsxs(z.Fragment,{children:[z.jsx("input",{ref:u,className:jn["tabs-item-input"],value:c,onChange:d=>f(d.target.value),onBlur:R,onKeyDown:g}),z.jsx("div",{className:jn["input-mask"]})]}):z.jsxs(z.Fragment,{children:[z.jsx("span",{onDoubleClick:m,children:c}),n.includes(c)?null:z.jsx("span",{onClick:d=>{d.stopPropagation(),a(c)},style:{marginLeft:5,display:"flex"},children:z.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",children:[z.jsx("line",{stroke:"#999",x1:"18",y1:"6",x2:"6",y2:"18"}),z.jsx("line",{stroke:"#999",x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})})},Sv=e=>`Comp${e.reduce((t,r)=>{const i=r.match(/Comp(\d+)\.jsx/);if(i){const o=parseInt(i[1],10);return Math.max(t,o)}return t},0)+1}.jsx`,xv=e=>{const{onChange:n,onError:t,readOnly:r=!1}=e,{files:i,removeFile:o,addFile:a,updateFileName:s,selectedFileName:l,setSelectedFileName:u}=x.useContext(Wt),[c,f]=x.useState([""]),[h,T]=x.useState(!1),g=()=>{f([...c,Sv(c)]),T(!0)},v=()=>{h&&(c.pop(),f([...c]),T(!1))},R=E=>{h||(n(E),u(E))},m=()=>{n(bn)},d=(E,H)=>{h?(a(E),T(!1)):s(H,E),setTimeout(()=>{R(E)},0)},p=(E,H)=>/\.(jsx|tsx|js|ts|css|json)$/.test(E)?c.includes(E)&&E!==H?(t(`File "${E}" already exists.`),!1):(t(""),!0):(t("Playground only supports *.jsx, *.tsx, *.js, *.ts, *.css, *.json files."),!1);return x.useEffect(()=>{f(Object.keys(i).filter(E=>![bn,Ri].includes(E)))},[i]),z.jsxs("div",{className:jn.tabs,children:[c.map((E,H)=>z.jsx(Hv,{value:E,actived:l===E,creating:h,readOnlyTabs:r?c:[zt],onValidate:p,onOk:S=>d(S,E),onCancel:v,onRemove:S=>{confirm(`你确定要删除 ${S} 吗？`)&&(o(S),R(zt))},onClick:()=>R(E)},H+E)),!r&&z.jsxs(z.Fragment,{children:[z.jsx("div",{className:jn.add,onClick:g,children:"+"}),z.jsx("div",{className:jn["import-map-wrapper"],children:z.jsx("div",{className:Ma(jn["tab-item"],l===bn?jn.actived:null),onClick:m,children:"Import Map"})})]})]})},Rv="_msg_d1icg_1",wv="_error_d1icg_20",Pv="_warn_d1icg_24",Cv="_dismiss_d1icg_34",ds={msg:Rv,error:wv,warn:Pv,dismiss:Cv},im=e=>{const{type:n,context:t}=e,[r,i]=x.useState(!1);return x.useEffect(()=>{i(!!t)},[t]),r?z.jsxs("div",{className:Ma(ds.msg,ds[n]),children:[z.jsx("pre",{dangerouslySetInnerHTML:{__html:t}}),z.jsx("button",{className:ds.dismiss,onClick:()=>i(!1),children:"✕"})]}):null},Av=e=>{const{showFileSelector:n,fileSelectorReadOnly:t,options:r={}}=e,{files:i,setFiles:o,selectedFileName:a,setSelectedFileName:s}=x.useContext(Wt),[l,u]=x.useState(""),c=i[a]||{},f=uv(g=>{i[c.name].value=g,o==null||o({...i})},250),h=g=>{s(g)},T=g=>{u(g)};return z.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[n?z.jsx(xv,{onChange:h,onError:T,readOnly:t}):null,z.jsx(vv,{onChange:f,file:c,options:r,selectFile:h}),z.jsx(im,{type:"error",context:l})]})},Dv=`<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><g><rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path></g></svg>
`,kv=`<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
`,_v=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="dark"><path fill="currentColor" d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>
`,Fv=""+new URL("react-9d72e876.svg",import.meta.url).href,Iv=`<svg width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g></svg>
`,Ov=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="light"><path fill="currentColor" d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path fill="currentColor" d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path fill="currentColor" d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path fill="currentColor" d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path fill="currentColor" d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path fill="currentColor" d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path fill="currentColor" d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path fill="currentColor" d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path fill="currentColor" d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>
`,Vv="_header_3x95s_1",Nv="_logo_3x95s_15",Gv="_links_3x95s_24",jv="_theme_3x95s_42",Br={header:Vv,logo:Nv,links:Gv,theme:jv},zv=()=>{const{files:e,theme:n,changeTheme:t}=x.useContext(Wt),r=async()=>{await navigator.clipboard.writeText(location.href),alert("Sharable URL has been copied to clipboard.")},i=()=>{confirm("Download project files?")&&lv(e).then(()=>console.log("download success"))};return x.useMemo(()=>z.jsxs("nav",{className:Br.header,children:[z.jsxs("div",{className:Br.logo,children:[z.jsx("img",{alt:"logo",src:Fv}),z.jsx("span",{children:"React Playground"})]}),z.jsxs("div",{className:Br.links,children:[n==="light"&&z.jsx("button",{title:"Toggle dark mode",className:Br.theme,dangerouslySetInnerHTML:{__html:Ov},onClick:()=>t("dark")}),n==="dark"&&z.jsx("button",{title:"Toggle light mode",className:Br.theme,dangerouslySetInnerHTML:{__html:_v},onClick:()=>t("light")}),z.jsx("button",{title:"Copy sharable URL",dangerouslySetInnerHTML:{__html:Iv},onClick:r}),z.jsx("button",{title:"Download project files",dangerouslySetInnerHTML:{__html:Dv},onClick:i}),z.jsx("a",{href:"https://github.com/vuejs/core/tree/main/packages/sfc-playground",target:"_blank",title:"View on GitHub",children:z.jsx("button",{dangerouslySetInnerHTML:{__html:kv}})})]})]}),[n])};function Uv(){return new Worker(""+new URL("compiler.worker-107d3f7f.js",import.meta.url).href)}const ac=`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview</title>
  <!-- es-module-shims -->
</head>
<body>
<script>
  window.addEventListener('error', (e) => {
    window.parent.postMessage(e.message)
  })

  window.addEventListener('message', ({data}) => {
    if (data.type === 'UPDATE_FILES') {
      const importmapTag = document.querySelector(
        'script[type="importmap"]',
      );
      importmapTag.innerHTML = data.data.importmap

      // 即将要清除的样式
      const appStyleTags = document.querySelectorAll('style[id^="style_"]') || []

      // 清除旧app
      const appSrcTag = document.querySelector('#appSrc');
      const oldSrc = appSrcTag.getAttribute('src');
      appSrcTag.remove();

      // 插入新app
      const script = document.createElement('script');
      const newSrc = URL.createObjectURL(
        new Blob([data.data.compileCode], {
          type: 'application/javascript',
        }),
      );
      script.src = newSrc;
      script.id = 'appSrc';
      script.type = 'module';
      script.onload = () => {
        // 防止先移除样式后页面闪烁
        appStyleTags.forEach(div => {
          div.remove();
        });
      }
      document.body.appendChild(script);
      URL.revokeObjectURL(oldSrc);
    }
  });
<\/script>
<script type="importmap"><\/script>
<script type="module" id="appSrc"><\/script>
<div id="root">
  <div style="position:absolute;top: 0;left:0;width:100%;height:100%;display: flex;justify-content: center;align-items: center;">
    Loading...
  </div>
</div>
</body>
</html>
`,Bv=()=>{const e="//unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js",n=typeof import.meta>"u"?ac.replace("<!-- es-module-shims -->",`<script async src="${e}"><\/script>`):ac;return URL.createObjectURL(new Blob([n],{type:"text/html"}))},Wv=Bv(),$v=e=>{const{hidden:n,data:t}=e,r=x.useRef(null),[i,o]=x.useState("");x.useEffect(()=>{var s,l;t&&((l=(s=r.current)==null?void 0:s.contentWindow)==null||l.postMessage(t))},[t]);const a=s=>{o(typeof s.data=="string"?s.data:"")};return x.useEffect(()=>(window.addEventListener("message",a),()=>{window.removeEventListener("message",a)}),[]),z.jsxs(z.Fragment,{children:[z.jsx("iframe",{ref:r,src:Wv,style:{width:"100%",height:"100%",padding:0,border:"none",display:n?"none":""},sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),z.jsx(im,{type:"error",context:i})]})},Xv="_tabs_1vzew_1",Jv="_actived_1vzew_20",cs={tabs:Xv,"tab-item":"_tab-item_1vzew_11",actived:Jv},Kv=e=>{const{onChange:n,items:t,value:r=t[0],hidden:i}=e;return i?null:z.jsx("div",{className:cs.tabs,children:t.map(o=>z.jsx("div",{className:Ma(cs["tab-item"],r===o?cs.actived:""),onClick:()=>n(o),children:o},o))})},Yv=["PREVIEW","JS"],Qv=e=>{const{showCompileOutput:n=!0}=e,{files:t,theme:r,selectedFileName:i}=x.useContext(Wt),[o,a]=x.useState("PREVIEW"),s=x.useRef(null),[l,u]=x.useState(),[c,f]=x.useState(""),h=g=>{a(g)},T=()=>{var g,v;o==="PREVIEW"&&((g=s.current)==null||g.postMessage(t)),o==="JS"&&((v=s.current)==null||v.postMessage(t[i].value))};return x.useEffect(()=>{s.current||(s.current=new Uv,s.current.addEventListener("message",({data:g})=>{g.type==="UPDATE_FILES"?(g.data.importmap=t[bn].value,u(g)):g.type==="UPDATE_FILE"?f(g.data):g.type==="ERROR"?console.log(g):g.type==="INITED"&&s.current.postMessage(t)}))},[]),x.useEffect(()=>{T()},[o,t]),x.useEffect(()=>{var g,v;["javascript","typescript"].includes(t[i].language)?(g=s.current)==null||g.postMessage(t[i].value):(v=s.current)==null||v.postMessage("")},[i]),z.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[z.jsx(Kv,{items:Yv,value:o,onChange:h,hidden:!n}),z.jsx($v,{hidden:o!=="PREVIEW",data:l}),n?z.jsx("div",{style:{display:o!=="JS"?"none":"",height:"100%"},children:z.jsx(jp,{className:"react-playground-editor",height:"100%",theme:`vs-${r}`,value:c,language:"javascript",options:{...zp,readOnly:!0}})}):null]})};function si(){return si=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},si.apply(this,arguments)}var lt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fs,om={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/fs=om,function(){var e={}.hasOwnProperty;function n(){for(var t=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if(o==="string"||o==="number")t.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&t.push(a)}}else if(o==="object")if(i.toString===Object.prototype.toString)for(var s in i)e.call(i,s)&&i[s]&&t.push(s);else t.push(i.toString())}}return t.join(" ")}fs.exports?(n.default=n,fs.exports=n):window.classNames=n}();var yl=_i(om.exports),sc=NaN,qv="[object Symbol]",Zv=/^\s+|\s+$/g,eE=/^[-+]0x[0-9a-f]+$/i,nE=/^0b[01]+$/i,tE=/^0o[0-7]+$/i,rE=parseInt,iE=Object.prototype.toString;function lc(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function ps(e){if(typeof e=="number")return e;if(function(r){return typeof r=="symbol"||function(i){return!!i&&typeof i=="object"}(r)&&iE.call(r)==qv}(e))return sc;if(lc(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=lc(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(Zv,"");var t=nE.test(e);return t||tE.test(e)?rE(e.slice(2),t?2:8):eE.test(e)?sc:+e}var gn=_i(function(e,n,t){return t===void 0&&(t=n,n=void 0),t!==void 0&&(t=(t=ps(t))==t?t:0),n!==void 0&&(n=(n=ps(n))==n?n:0),function(r,i,o){return r==r&&(o!==void 0&&(r=r<=o?r:o),i!==void 0&&(r=r>=i?r:i)),r}(ps(e),n,t)}),vl={exports:{}};(function(e,n){var t="__lodash_hash_undefined__",r=1,i=2,o=9007199254740991,a="[object Arguments]",s="[object Array]",l="[object AsyncFunction]",u="[object Boolean]",c="[object Date]",f="[object Error]",h="[object Function]",T="[object GeneratorFunction]",g="[object Map]",v="[object Number]",R="[object Null]",m="[object Object]",d="[object Promise]",p="[object Proxy]",E="[object RegExp]",H="[object Set]",S="[object String]",b="[object Symbol]",L="[object Undefined]",w="[object WeakMap]",C="[object ArrayBuffer]",O="[object DataView]",U=/^\[object .+?Constructor\]$/,K=/^(?:0|[1-9]\d*)$/,_={};_["[object Float32Array]"]=_["[object Float64Array]"]=_["[object Int8Array]"]=_["[object Int16Array]"]=_["[object Int32Array]"]=_["[object Uint8Array]"]=_["[object Uint8ClampedArray]"]=_["[object Uint16Array]"]=_["[object Uint32Array]"]=!0,_[a]=_[s]=_[C]=_[u]=_[O]=_[c]=_[f]=_[h]=_[g]=_[v]=_[m]=_[E]=_[H]=_[S]=_[w]=!1;var F=typeof lt=="object"&&lt&&lt.Object===Object&&lt,j=typeof self=="object"&&self&&self.Object===Object&&self,W=F||j||Function("return this")(),P=n&&!n.nodeType&&n,I=P&&e&&!e.nodeType&&e,G=I&&I.exports===P,k=G&&F.process,V=function(){try{return k&&k.binding&&k.binding("util")}catch{}}(),J=V&&V.isTypedArray;function Z(y,M){for(var D=-1,B=y==null?0:y.length;++D<B;)if(M(y[D],D,y))return!0;return!1}function Y(y){var M=-1,D=Array(y.size);return y.forEach(function(B,se){D[++M]=[se,B]}),D}function ce(y){var M=-1,D=Array(y.size);return y.forEach(function(B){D[++M]=B}),D}var $,X,re,oe=Array.prototype,Ht=Function.prototype,Ln=Object.prototype,Hn=W["__core-js_shared__"],$t=Ht.toString,Sn=Ln.hasOwnProperty,Eu=($=/[^.]+$/.exec(Hn&&Hn.keys&&Hn.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"",bu=Ln.toString,hm=RegExp("^"+$t.call(Sn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Mu=G?W.Buffer:void 0,Fi=W.Symbol,Lu=W.Uint8Array,Hu=Ln.propertyIsEnumerable,gm=oe.splice,St=Fi?Fi.toStringTag:void 0,Su=Object.getOwnPropertySymbols,Tm=Mu?Mu.isBuffer:void 0,ym=(X=Object.keys,re=Object,function(y){return X(re(y))}),La=Xt(W,"DataView"),Rr=Xt(W,"Map"),Ha=Xt(W,"Promise"),Sa=Xt(W,"Set"),xa=Xt(W,"WeakMap"),wr=Xt(Object,"create"),vm=wt(La),Em=wt(Rr),bm=wt(Ha),Mm=wt(Sa),Lm=wt(xa),xu=Fi?Fi.prototype:void 0,Ra=xu?xu.valueOf:void 0;function xt(y){var M=-1,D=y==null?0:y.length;for(this.clear();++M<D;){var B=y[M];this.set(B[0],B[1])}}function kn(y){var M=-1,D=y==null?0:y.length;for(this.clear();++M<D;){var B=y[M];this.set(B[0],B[1])}}function Rt(y){var M=-1,D=y==null?0:y.length;for(this.clear();++M<D;){var B=y[M];this.set(B[0],B[1])}}function Ii(y){var M=-1,D=y==null?0:y.length;for(this.__data__=new Rt;++M<D;)this.add(y[M])}function Yn(y){var M=this.__data__=new kn(y);this.size=M.size}function Hm(y,M){var D=Ni(y),B=!D&&Pm(y),se=!D&&!B&&wa(y),Q=!D&&!B&&!se&&Fu(y),ge=D||B||se||Q,ve=ge?function(Me,xn){for(var _n=-1,Ie=Array(Me);++_n<Me;)Ie[_n]=xn(_n);return Ie}(y.length,String):[],fn=ve.length;for(var be in y)!M&&!Sn.call(y,be)||ge&&(be=="length"||se&&(be=="offset"||be=="parent")||Q&&(be=="buffer"||be=="byteLength"||be=="byteOffset")||wm(be,fn))||ve.push(be);return ve}function Oi(y,M){for(var D=y.length;D--;)if(Au(y[D][0],M))return D;return-1}function Pr(y){return y==null?y===void 0?L:R:St&&St in Object(y)?function(M){var D=Sn.call(M,St),B=M[St];try{M[St]=void 0;var se=!0}catch{}var Q=bu.call(M);return se&&(D?M[St]=B:delete M[St]),Q}(y):function(M){return bu.call(M)}(y)}function Ru(y){return Cr(y)&&Pr(y)==a}function wu(y,M,D,B,se){return y===M||(y==null||M==null||!Cr(y)&&!Cr(M)?y!=y&&M!=M:function(Q,ge,ve,fn,be,Me){var xn=Ni(Q),_n=Ni(ge),Ie=xn?s:Qn(Q),Fn=_n?s:Qn(ge),Jt=(Ie=Ie==a?m:Ie)==m,Gi=(Fn=Fn==a?m:Fn)==m,Kt=Ie==Fn;if(Kt&&wa(Q)){if(!wa(ge))return!1;xn=!0,Jt=!1}if(Kt&&!Jt)return Me||(Me=new Yn),xn||Fu(Q)?Pu(Q,ge,ve,fn,be,Me):function(ie,ne,ji,qn,Pa,nn,In){switch(ji){case O:if(ie.byteLength!=ne.byteLength||ie.byteOffset!=ne.byteOffset)return!1;ie=ie.buffer,ne=ne.buffer;case C:return!(ie.byteLength!=ne.byteLength||!nn(new Lu(ie),new Lu(ne)));case u:case c:case v:return Au(+ie,+ne);case f:return ie.name==ne.name&&ie.message==ne.message;case E:case S:return ie==ne+"";case g:var Zn=Y;case H:var Dr=qn&r;if(Zn||(Zn=ce),ie.size!=ne.size&&!Dr)return!1;var zi=In.get(ie);if(zi)return zi==ne;qn|=i,In.set(ie,ne);var Ca=Pu(Zn(ie),Zn(ne),qn,Pa,nn,In);return In.delete(ie),Ca;case b:if(Ra)return Ra.call(ie)==Ra.call(ne)}return!1}(Q,ge,Ie,ve,fn,be,Me);if(!(ve&r)){var Ar=Jt&&Sn.call(Q,"__wrapped__"),Iu=Gi&&Sn.call(ge,"__wrapped__");if(Ar||Iu){var Am=Ar?Q.value():Q,Dm=Iu?ge.value():ge;return Me||(Me=new Yn),be(Am,Dm,ve,fn,Me)}}return Kt?(Me||(Me=new Yn),function(ie,ne,ji,qn,Pa,nn){var In=ji&r,Zn=Cu(ie),Dr=Zn.length,zi=Cu(ne),Ca=zi.length;if(Dr!=Ca&&!In)return!1;for(var Ui=Dr;Ui--;){var Pt=Zn[Ui];if(!(In?Pt in ne:Sn.call(ne,Pt)))return!1}var Ou=nn.get(ie);if(Ou&&nn.get(ne))return Ou==ne;var Bi=!0;nn.set(ie,ne),nn.set(ne,ie);for(var Aa=In;++Ui<Dr;){var Wi=ie[Pt=Zn[Ui]],$i=ne[Pt];if(qn)var Vu=In?qn($i,Wi,Pt,ne,ie,nn):qn(Wi,$i,Pt,ie,ne,nn);if(!(Vu===void 0?Wi===$i||Pa(Wi,$i,ji,qn,nn):Vu)){Bi=!1;break}Aa||(Aa=Pt=="constructor")}if(Bi&&!Aa){var Xi=ie.constructor,Ji=ne.constructor;Xi==Ji||!("constructor"in ie)||!("constructor"in ne)||typeof Xi=="function"&&Xi instanceof Xi&&typeof Ji=="function"&&Ji instanceof Ji||(Bi=!1)}return nn.delete(ie),nn.delete(ne),Bi}(Q,ge,ve,fn,be,Me)):!1}(y,M,D,B,wu,se))}function Sm(y){return!(!_u(y)||function(M){return!!Eu&&Eu in M}(y))&&(Du(y)?hm:U).test(wt(y))}function xm(y){if(D=(M=y)&&M.constructor,B=typeof D=="function"&&D.prototype||Ln,M!==B)return ym(y);var M,D,B,se=[];for(var Q in Object(y))Sn.call(y,Q)&&Q!="constructor"&&se.push(Q);return se}function Pu(y,M,D,B,se,Q){var ge=D&r,ve=y.length,fn=M.length;if(ve!=fn&&!(ge&&fn>ve))return!1;var be=Q.get(y);if(be&&Q.get(M))return be==M;var Me=-1,xn=!0,_n=D&i?new Ii:void 0;for(Q.set(y,M),Q.set(M,y);++Me<ve;){var Ie=y[Me],Fn=M[Me];if(B)var Jt=ge?B(Fn,Ie,Me,M,y,Q):B(Ie,Fn,Me,y,M,Q);if(Jt!==void 0){if(Jt)continue;xn=!1;break}if(_n){if(!Z(M,function(Gi,Kt){if(Ar=Kt,!_n.has(Ar)&&(Ie===Gi||se(Ie,Gi,D,B,Q)))return _n.push(Kt);var Ar})){xn=!1;break}}else if(Ie!==Fn&&!se(Ie,Fn,D,B,Q)){xn=!1;break}}return Q.delete(y),Q.delete(M),xn}function Cu(y){return function(M,D,B){var se=D(M);return Ni(M)?se:function(Q,ge){for(var ve=-1,fn=ge.length,be=Q.length;++ve<fn;)Q[be+ve]=ge[ve];return Q}(se,B(M))}(y,Cm,Rm)}function Vi(y,M){var D,B,se=y.__data__;return((B=typeof(D=M))=="string"||B=="number"||B=="symbol"||B=="boolean"?D!=="__proto__":D===null)?se[typeof M=="string"?"string":"hash"]:se.map}function Xt(y,M){var D=function(B,se){return B==null?void 0:B[se]}(y,M);return Sm(D)?D:void 0}xt.prototype.clear=function(){this.__data__=wr?wr(null):{},this.size=0},xt.prototype.delete=function(y){var M=this.has(y)&&delete this.__data__[y];return this.size-=M?1:0,M},xt.prototype.get=function(y){var M=this.__data__;if(wr){var D=M[y];return D===t?void 0:D}return Sn.call(M,y)?M[y]:void 0},xt.prototype.has=function(y){var M=this.__data__;return wr?M[y]!==void 0:Sn.call(M,y)},xt.prototype.set=function(y,M){var D=this.__data__;return this.size+=this.has(y)?0:1,D[y]=wr&&M===void 0?t:M,this},kn.prototype.clear=function(){this.__data__=[],this.size=0},kn.prototype.delete=function(y){var M=this.__data__,D=Oi(M,y);return!(D<0)&&(D==M.length-1?M.pop():gm.call(M,D,1),--this.size,!0)},kn.prototype.get=function(y){var M=this.__data__,D=Oi(M,y);return D<0?void 0:M[D][1]},kn.prototype.has=function(y){return Oi(this.__data__,y)>-1},kn.prototype.set=function(y,M){var D=this.__data__,B=Oi(D,y);return B<0?(++this.size,D.push([y,M])):D[B][1]=M,this},Rt.prototype.clear=function(){this.size=0,this.__data__={hash:new xt,map:new(Rr||kn),string:new xt}},Rt.prototype.delete=function(y){var M=Vi(this,y).delete(y);return this.size-=M?1:0,M},Rt.prototype.get=function(y){return Vi(this,y).get(y)},Rt.prototype.has=function(y){return Vi(this,y).has(y)},Rt.prototype.set=function(y,M){var D=Vi(this,y),B=D.size;return D.set(y,M),this.size+=D.size==B?0:1,this},Ii.prototype.add=Ii.prototype.push=function(y){return this.__data__.set(y,t),this},Ii.prototype.has=function(y){return this.__data__.has(y)},Yn.prototype.clear=function(){this.__data__=new kn,this.size=0},Yn.prototype.delete=function(y){var M=this.__data__,D=M.delete(y);return this.size=M.size,D},Yn.prototype.get=function(y){return this.__data__.get(y)},Yn.prototype.has=function(y){return this.__data__.has(y)},Yn.prototype.set=function(y,M){var D=this.__data__;if(D instanceof kn){var B=D.__data__;if(!Rr||B.length<199)return B.push([y,M]),this.size=++D.size,this;D=this.__data__=new Rt(B)}return D.set(y,M),this.size=D.size,this};var Rm=Su?function(y){return y==null?[]:(y=Object(y),function(M,D){for(var B=-1,se=M==null?0:M.length,Q=0,ge=[];++B<se;){var ve=M[B];D(ve,B,M)&&(ge[Q++]=ve)}return ge}(Su(y),function(M){return Hu.call(y,M)}))}:function(){return[]},Qn=Pr;function wm(y,M){return!!(M=M??o)&&(typeof y=="number"||K.test(y))&&y>-1&&y%1==0&&y<M}function wt(y){if(y!=null){try{return $t.call(y)}catch{}try{return y+""}catch{}}return""}function Au(y,M){return y===M||y!=y&&M!=M}(La&&Qn(new La(new ArrayBuffer(1)))!=O||Rr&&Qn(new Rr)!=g||Ha&&Qn(Ha.resolve())!=d||Sa&&Qn(new Sa)!=H||xa&&Qn(new xa)!=w)&&(Qn=function(y){var M=Pr(y),D=M==m?y.constructor:void 0,B=D?wt(D):"";if(B)switch(B){case vm:return O;case Em:return g;case bm:return d;case Mm:return H;case Lm:return w}return M});var Pm=Ru(function(){return arguments}())?Ru:function(y){return Cr(y)&&Sn.call(y,"callee")&&!Hu.call(y,"callee")},Ni=Array.isArray,wa=Tm||function(){return!1};function Du(y){if(!_u(y))return!1;var M=Pr(y);return M==h||M==T||M==l||M==p}function ku(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=o}function _u(y){var M=typeof y;return y!=null&&(M=="object"||M=="function")}function Cr(y){return y!=null&&typeof y=="object"}var Fu=J?function(y){return function(M){return y(M)}}(J):function(y){return Cr(y)&&ku(y.length)&&!!_[Pr(y)]};function Cm(y){return(M=y)!=null&&ku(M.length)&&!Du(M)?Hm(y):xm(y);var M}e.exports=function(y,M){return wu(y,M)}})(vl,vl.exports);var oE=_i(vl.exports);function uc(e,n,t){return e[n]?e[n][0]?e[n][0][t]:e[n][t]:n==="contentBoxSize"?e.contentRect[t==="inlineSize"?"width":"height"]:void 0}function aE(e){e===void 0&&(e={});var n=e.onResize,t=x.useRef(void 0);t.current=n;var r=e.round||Math.round,i=x.useRef(),o=x.useState({width:void 0,height:void 0}),a=o[0],s=o[1],l=x.useRef(!1);x.useEffect(function(){return l.current=!1,function(){l.current=!0}},[]);var u=x.useRef({width:void 0,height:void 0}),c=function(f,h){var T=x.useRef(null),g=x.useRef(null);g.current=h;var v=x.useRef(null);x.useEffect(function(){R()});var R=x.useCallback(function(){var m=v.current,d=g.current,p=m||(d?d instanceof Element?d:d.current:null);T.current&&T.current.element===p&&T.current.subscriber===f||(T.current&&T.current.cleanup&&T.current.cleanup(),T.current={element:p,subscriber:f,cleanup:p?f(p):void 0})},[f]);return x.useEffect(function(){return function(){T.current&&T.current.cleanup&&(T.current.cleanup(),T.current=null)}},[]),x.useCallback(function(m){v.current=m,R()},[R])}(x.useCallback(function(f){return i.current&&i.current.box===e.box&&i.current.round===r||(i.current={box:e.box,round:r,instance:new ResizeObserver(function(h){var T=h[0],g=e.box==="border-box"?"borderBoxSize":e.box==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",v=uc(T,g,"inlineSize"),R=uc(T,g,"blockSize"),m=v?r(v):void 0,d=R?r(R):void 0;if(u.current.width!==m||u.current.height!==d){var p={width:m,height:d};u.current.width=m,u.current.height=d,t.current?t.current(p):l.current||s(p)}})}),i.current.instance.observe(f,{box:e.box}),function(){i.current&&i.current.instance.unobserve(f)}},[e.box,r]),e.ref);return x.useMemo(function(){return{ref:c,width:a.width,height:a.height}},[c,a.width,a.height])}var sE="allotment-module_splitView__L-yRc",lE="allotment-module_sashContainer__fzwJF",uE="allotment-module_splitViewContainer__rQnVa",am="allotment-module_splitViewView__MGZ6O",dE="allotment-module_vertical__WSwwa",cE="allotment-module_horizontal__7doS8",fE="allotment-module_separatorBorder__x-rDS";let Wr,sm=!1,lm=!1;typeof navigator=="object"&&(Wr=navigator.userAgent,lm=Wr.indexOf("Macintosh")>=0,sm=(Wr.indexOf("Macintosh")>=0||Wr.indexOf("iPad")>=0||Wr.indexOf("iPhone")>=0)&&!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0);const um=sm,pE=lm,ms=typeof window<"u"&&window.document!==void 0&&window.document.createElement!==void 0?x.useLayoutEffect:x.useEffect;class mE{constructor(){this._size=void 0}getSize(){return this._size}setSize(n){this._size=n}}function ho(e,n){const t=e.length,r=t-n.length;return r>=0&&e.slice(r,t)===n}var dm={exports:{}};(function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function o(l,u,c,f,h){if(typeof c!="function")throw new TypeError("The listener must be a function");var T=new i(c,f||l,h),g=t?t+u:u;return l._events[g]?l._events[g].fn?l._events[g]=[l._events[g],T]:l._events[g].push(T):(l._events[g]=T,l._eventsCount++),l}function a(l,u){--l._eventsCount==0?l._events=new r:delete l._events[u]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1)),s.prototype.eventNames=function(){var l,u,c=[];if(this._eventsCount===0)return c;for(u in l=this._events)n.call(l,u)&&c.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(l)):c},s.prototype.listeners=function(l){var u=t?t+l:l,c=this._events[u];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,h=c.length,T=new Array(h);f<h;f++)T[f]=c[f].fn;return T},s.prototype.listenerCount=function(l){var u=t?t+l:l,c=this._events[u];return c?c.fn?1:c.length:0},s.prototype.emit=function(l,u,c,f,h,T){var g=t?t+l:l;if(!this._events[g])return!1;var v,R,m=this._events[g],d=arguments.length;if(m.fn){switch(m.once&&this.removeListener(l,m.fn,void 0,!0),d){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,u),!0;case 3:return m.fn.call(m.context,u,c),!0;case 4:return m.fn.call(m.context,u,c,f),!0;case 5:return m.fn.call(m.context,u,c,f,h),!0;case 6:return m.fn.call(m.context,u,c,f,h,T),!0}for(R=1,v=new Array(d-1);R<d;R++)v[R-1]=arguments[R];m.fn.apply(m.context,v)}else{var p,E=m.length;for(R=0;R<E;R++)switch(m[R].once&&this.removeListener(l,m[R].fn,void 0,!0),d){case 1:m[R].fn.call(m[R].context);break;case 2:m[R].fn.call(m[R].context,u);break;case 3:m[R].fn.call(m[R].context,u,c);break;case 4:m[R].fn.call(m[R].context,u,c,f);break;default:if(!v)for(p=1,v=new Array(d-1);p<d;p++)v[p-1]=arguments[p];m[R].fn.apply(m[R].context,v)}}return!0},s.prototype.on=function(l,u,c){return o(this,l,u,c,!1)},s.prototype.once=function(l,u,c){return o(this,l,u,c,!0)},s.prototype.removeListener=function(l,u,c,f){var h=t?t+l:l;if(!this._events[h])return this;if(!u)return a(this,h),this;var T=this._events[h];if(T.fn)T.fn!==u||f&&!T.once||c&&T.context!==c||a(this,h);else{for(var g=0,v=[],R=T.length;g<R;g++)(T[g].fn!==u||f&&!T[g].once||c&&T[g].context!==c)&&v.push(T[g]);v.length?this._events[h]=v.length===1?v[0]:v:a(this,h)}return this},s.prototype.removeAllListeners=function(l){var u;return l?(u=t?t+l:l,this._events[u]&&a(this,u)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s})(dm);var yu=_i(dm.exports);function dc(e,n){const t=e.indexOf(n);t>-1&&(e.splice(t,1),e.unshift(n))}function hs(e,n){const t=e.indexOf(n);t>-1&&(e.splice(t,1),e.push(n))}function tn(e,n,t=1){const r=Math.max(0,Math.ceil((n-e)/t)),i=new Array(r);let o=-1;for(;++o<r;)i[o]=e+o*t;return i}var cc=NaN,hE="[object Symbol]",gE=/^\s+|\s+$/g,TE=/^[-+]0x[0-9a-f]+$/i,yE=/^0b[01]+$/i,vE=/^0o[0-7]+$/i,EE=parseInt,bE=typeof lt=="object"&&lt&&lt.Object===Object&&lt,ME=typeof self=="object"&&self&&self.Object===Object&&self,LE=bE||ME||Function("return this")(),HE=Object.prototype.toString,SE=Math.max,xE=Math.min,gs=function(){return LE.Date.now()};function El(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function fc(e){if(typeof e=="number")return e;if(function(r){return typeof r=="symbol"||function(i){return!!i&&typeof i=="object"}(r)&&HE.call(r)==hE}(e))return cc;if(El(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=El(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(gE,"");var t=yE.test(e);return t||vE.test(e)?EE(e.slice(2),t?2:8):TE.test(e)?cc:+e}var RE=_i(function(e,n,t){var r,i,o,a,s,l,u=0,c=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError("Expected a function");function T(d){var p=r,E=i;return r=i=void 0,u=d,a=e.apply(E,p)}function g(d){var p=d-l;return l===void 0||p>=n||p<0||f&&d-u>=o}function v(){var d=gs();if(g(d))return R(d);s=setTimeout(v,function(p){var E=n-(p-l);return f?xE(E,o-(p-u)):E}(d))}function R(d){return s=void 0,h&&r?T(d):(r=i=void 0,a)}function m(){var d=gs(),p=g(d);if(r=arguments,i=this,l=d,p){if(s===void 0)return function(E){return u=E,s=setTimeout(v,n),c?T(E):a}(l);if(f)return s=setTimeout(v,n),T(l)}return s===void 0&&(s=setTimeout(v,n)),a}return n=fc(n)||0,El(t)&&(c=!!t.leading,o=(f="maxWait"in t)?SE(fc(t.maxWait)||0,n):o,h="trailing"in t?!!t.trailing:h),m.cancel=function(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0},m.flush=function(){return s===void 0?a:R(gs())},m}),wE="sash-module_sash__K-9lB",PE="sash-module_disabled__Hm-wx",CE="sash-module_mac__Jf6OJ",pc="sash-module_vertical__pB-rs",AE="sash-module_minimum__-UKxp",DE="sash-module_maximum__TCWxD",mc="sash-module_horizontal__kFbiw",Ts="sash-module_hover__80W6I",ys="sash-module_active__bJspD";let sn=function(e){return e.Vertical="VERTICAL",e.Horizontal="HORIZONTAL",e}({}),Je=function(e){return e.Disabled="DISABLED",e.Minimum="MINIMUM",e.Maximum="MAXIMUM",e.Enabled="ENABLED",e}({}),cm=um?20:8;const fm=new yu;class hc extends yu{get state(){return this._state}set state(n){this._state!==n&&(this.el.classList.toggle(PE,n===Je.Disabled),this.el.classList.toggle("sash-disabled",n===Je.Disabled),this.el.classList.toggle(AE,n===Je.Minimum),this.el.classList.toggle("sash-minimum",n===Je.Minimum),this.el.classList.toggle(DE,n===Je.Maximum),this.el.classList.toggle("sash-maximum",n===Je.Maximum),this._state=n,this.emit("enablementChange",n))}constructor(n,t,r){var i;super(),this.el=void 0,this.layoutProvider=void 0,this.orientation=void 0,this.size=void 0,this.hoverDelay=300,this.hoverDelayer=RE(o=>o.classList.add("sash-hover",Ts),this.hoverDelay),this._state=Je.Enabled,this.onPointerStart=o=>{const a=o.pageX,s=o.pageY,l={startX:a,currentX:a,startY:s,currentY:s};this.el.classList.add("sash-active",ys),this.emit("start",l),this.el.setPointerCapture(o.pointerId);const u=f=>{f.preventDefault();const h={startX:a,currentX:f.pageX,startY:s,currentY:f.pageY};this.emit("change",h)},c=f=>{f.preventDefault(),this.el.classList.remove("sash-active",ys),this.hoverDelayer.cancel(),this.emit("end"),this.el.releasePointerCapture(f.pointerId),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",c)};window.addEventListener("pointermove",u),window.addEventListener("pointerup",c)},this.onPointerDoublePress=()=>{this.emit("reset")},this.onMouseEnter=()=>{this.el.classList.contains(ys)?(this.hoverDelayer.cancel(),this.el.classList.add("sash-hover",Ts)):this.hoverDelayer(this.el)},this.onMouseLeave=()=>{this.hoverDelayer.cancel(),this.el.classList.remove("sash-hover",Ts)},this.el=document.createElement("div"),this.el.classList.add("sash",wE),this.el.dataset.testid="sash",n.append(this.el),pE&&this.el.classList.add("sash-mac",CE),this.el.addEventListener("pointerdown",this.onPointerStart),this.el.addEventListener("dblclick",this.onPointerDoublePress),this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("mouseleave",this.onMouseLeave),typeof r.size=="number"?(this.size=r.size,r.orientation===sn.Vertical?this.el.style.width=`${this.size}px`:this.el.style.height=`${this.size}px`):(this.size=cm,fm.on("onDidChangeGlobalSize",o=>{this.size=o,this.layout()})),this.layoutProvider=t,this.orientation=(i=r.orientation)!=null?i:sn.Vertical,this.orientation===sn.Horizontal?(this.el.classList.add("sash-horizontal",mc),this.el.classList.remove("sash-vertical",pc)):(this.el.classList.remove("sash-horizontal",mc),this.el.classList.add("sash-vertical",pc)),this.layout()}layout(){if(this.orientation===sn.Vertical){const n=this.layoutProvider;this.el.style.left=n.getVerticalSashLeft(this)-this.size/2+"px",n.getVerticalSashTop&&(this.el.style.top=n.getVerticalSashTop(this)+"px"),n.getVerticalSashHeight&&(this.el.style.height=n.getVerticalSashHeight(this)+"px")}else{const n=this.layoutProvider;this.el.style.top=n.getHorizontalSashTop(this)-this.size/2+"px",n.getHorizontalSashLeft&&(this.el.style.left=n.getHorizontalSashLeft(this)+"px"),n.getHorizontalSashWidth&&(this.el.style.width=n.getHorizontalSashWidth(this)+"px")}}dispose(){this.el.removeEventListener("pointerdown",this.onPointerStart),this.el.removeEventListener("dblclick",this.onPointerDoublePress),this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("mouseleave",()=>this.onMouseLeave),this.el.remove()}}let na;var vs;(vs=na||(na={})).Distribute={type:"distribute"},vs.Split=function(e){return{type:"split",index:e}},vs.Invisible=function(e){return{type:"invisible",cachedVisibleSize:e}};let Gn=function(e){return e.Normal="NORMAL",e.Low="LOW",e.High="HIGH",e}({});class pm{constructor(n,t,r){this.container=void 0,this.view=void 0,this._size=void 0,this._cachedVisibleSize=void 0,this.container=n,this.view=t,this.container.classList.add("split-view-view",am),this.container.dataset.testid="split-view-view",typeof r=="number"?(this._size=r,this._cachedVisibleSize=void 0,n.classList.add("split-view-view-visible")):(this._size=0,this._cachedVisibleSize=r.cachedVisibleSize)}set size(n){this._size=n}get size(){return this._size}get priority(){return this.view.priority}get snap(){return!!this.view.snap}get cachedVisibleSize(){return this._cachedVisibleSize}get visible(){return this._cachedVisibleSize===void 0}setVisible(n,t){n!==this.visible&&(n?(this.size=gn(this._cachedVisibleSize,this.viewMinimumSize,this.viewMaximumSize),this._cachedVisibleSize=void 0):(this._cachedVisibleSize=typeof t=="number"?t:this.size,this.size=0),this.container.classList.toggle("split-view-view-visible",n),this.view.setVisible&&this.view.setVisible(n))}get minimumSize(){return this.visible?this.view.minimumSize:0}get viewMinimumSize(){return this.view.minimumSize}get maximumSize(){return this.visible?this.view.maximumSize:0}get viewMaximumSize(){return this.view.maximumSize}set enabled(n){this.container.style.pointerEvents=n?"":"none"}layout(n){this.layoutContainer(n),this.view.layout(this.size,n)}}class kE extends pm{layoutContainer(n){this.container.style.left=`${n}px`,this.container.style.width=`${this.size}px`}}class _E extends pm{layoutContainer(n){this.container.style.top=`${n}px`,this.container.style.height=`${this.size}px`}}class FE extends yu{get startSnappingEnabled(){return this._startSnappingEnabled}set startSnappingEnabled(n){this._startSnappingEnabled!==n&&(this._startSnappingEnabled=n,this.updateSashEnablement())}get endSnappingEnabled(){return this._endSnappingEnabled}set endSnappingEnabled(n){this._endSnappingEnabled!==n&&(this._endSnappingEnabled=n,this.updateSashEnablement())}constructor(n,t={},r,i,o){var a,s;if(super(),this.onDidChange=void 0,this.onDidDragStart=void 0,this.onDidDragEnd=void 0,this.orientation=void 0,this.sashContainer=void 0,this.size=0,this.contentSize=0,this.proportions=void 0,this.viewItems=[],this.sashItems=[],this.sashDragState=void 0,this.proportionalLayout=void 0,this.getSashOrthogonalSize=void 0,this._startSnappingEnabled=!0,this._endSnappingEnabled=!0,this.onSashEnd=l=>{this.emit("sashchange",l),this.saveProportions();for(const u of this.viewItems)u.enabled=!0},this.orientation=(a=t.orientation)!=null?a:sn.Vertical,this.proportionalLayout=(s=t.proportionalLayout)!=null?s:!0,this.getSashOrthogonalSize=t.getSashOrthogonalSize,r&&(this.onDidChange=r),i&&(this.onDidDragStart=i),o&&(this.onDidDragEnd=o),this.sashContainer=document.createElement("div"),this.sashContainer.classList.add("sash-container",lE),n.prepend(this.sashContainer),t.descriptor){this.size=t.descriptor.size;for(const[l,u]of t.descriptor.views.entries()){const c=u.size,f=u.container,h=u.view;this.addView(f,h,c,l,!0)}this.contentSize=this.viewItems.reduce((l,u)=>l+u.size,0),this.saveProportions()}}addView(n,t,r,i=this.viewItems.length,o){let a;a=typeof r=="number"?r:r.type==="split"?this.getViewSize(r.index)/2:r.type==="invisible"?{cachedVisibleSize:r.cachedVisibleSize}:t.minimumSize;const s=this.orientation===sn.Vertical?new _E(n,t,a):new kE(n,t,a);if(this.viewItems.splice(i,0,s),this.viewItems.length>1){const l=this.orientation===sn.Vertical?new hc(this.sashContainer,{getHorizontalSashTop:f=>this.getSashPosition(f),getHorizontalSashWidth:this.getSashOrthogonalSize},{orientation:sn.Horizontal}):new hc(this.sashContainer,{getVerticalSashLeft:f=>this.getSashPosition(f),getVerticalSashHeight:this.getSashOrthogonalSize},{orientation:sn.Vertical}),u=this.orientation===sn.Vertical?f=>({sash:l,start:f.startY,current:f.currentY}):f=>({sash:l,start:f.startX,current:f.currentX});l.on("start",f=>{var h;this.emit("sashDragStart"),this.onSashStart(u(f));const T=this.viewItems.map(g=>g.size);(h=this.onDidDragStart)==null||h.call(this,T)}),l.on("change",f=>this.onSashChange(u(f))),l.on("end",()=>{var f;this.emit("sashDragEnd"),this.onSashEnd(this.sashItems.findIndex(T=>T.sash===l));const h=this.viewItems.map(T=>T.size);(f=this.onDidDragEnd)==null||f.call(this,h)}),l.on("reset",()=>{const f=this.sashItems.findIndex(R=>R.sash===l),h=tn(f,-1,-1),T=tn(f+1,this.viewItems.length),g=this.findFirstSnapIndex(h),v=this.findFirstSnapIndex(T);(typeof g!="number"||this.viewItems[g].visible)&&(typeof v!="number"||this.viewItems[v].visible)&&this.emit("sashreset",f)});const c={sash:l};this.sashItems.splice(i-1,0,c)}o||this.relayout(),o||typeof r=="number"||r.type!=="distribute"||this.distributeViewSizes()}removeView(n,t){if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");const r=this.viewItems.splice(n,1)[0].view;if(this.viewItems.length>=1){const i=Math.max(n-1,0);this.sashItems.splice(i,1)[0].sash.dispose()}return this.relayout(),t&&t.type==="distribute"&&this.distributeViewSizes(),r}moveView(n,t,r){const i=this.getViewCachedVisibleSize(t),o=i===void 0?this.getViewSize(t):na.Invisible(i),a=this.removeView(t);this.addView(n,a,o,r)}getViewCachedVisibleSize(n){if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");return this.viewItems[n].cachedVisibleSize}layout(n=this.size){const t=Math.max(this.size,this.contentSize);if(this.size=n,this.proportions)for(let r=0;r<this.viewItems.length;r++){const i=this.viewItems[r];i.size=gn(Math.round(this.proportions[r]*n),i.minimumSize,i.maximumSize)}else{const r=tn(0,this.viewItems.length),i=r.filter(a=>this.viewItems[a].priority===Gn.Low),o=r.filter(a=>this.viewItems[a].priority===Gn.High);this.resize(this.viewItems.length-1,n-t,void 0,i,o)}this.distributeEmptySpace(),this.layoutViews()}resizeView(n,t){if(n<0||n>=this.viewItems.length)return;const r=tn(0,this.viewItems.length).filter(s=>s!==n),i=[...r.filter(s=>this.viewItems[s].priority===Gn.Low),n],o=r.filter(s=>this.viewItems[s].priority===Gn.High),a=this.viewItems[n];t=Math.round(t),t=gn(t,a.minimumSize,Math.min(a.maximumSize,this.size)),a.size=t,this.relayout(i,o)}resizeViews(n){for(let t=0;t<n.length;t++){const r=this.viewItems[t];let i=n[t];i=Math.round(i),i=gn(i,r.minimumSize,Math.min(r.maximumSize,this.size)),r.size=i}this.contentSize=this.viewItems.reduce((t,r)=>t+r.size,0),this.saveProportions(),this.layout(this.size)}getViewSize(n){return n<0||n>=this.viewItems.length?-1:this.viewItems[n].size}isViewVisible(n){if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");return this.viewItems[n].visible}setViewVisible(n,t){if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");this.viewItems[n].setVisible(t),this.distributeEmptySpace(n),this.layoutViews(),this.saveProportions()}distributeViewSizes(){const n=[];let t=0;for(const s of this.viewItems)s.maximumSize-s.minimumSize>0&&(n.push(s),t+=s.size);const r=Math.floor(t/n.length);for(const s of n)s.size=gn(r,s.minimumSize,s.maximumSize);const i=tn(0,this.viewItems.length),o=i.filter(s=>this.viewItems[s].priority===Gn.Low),a=i.filter(s=>this.viewItems[s].priority===Gn.High);this.relayout(o,a)}dispose(){this.sashItems.forEach(n=>n.sash.dispose()),this.sashItems=[],this.sashContainer.remove()}relayout(n,t){const r=this.viewItems.reduce((i,o)=>i+o.size,0);this.resize(this.viewItems.length-1,this.size-r,void 0,n,t),this.distributeEmptySpace(),this.layoutViews(),this.saveProportions()}onSashStart({sash:n,start:t}){const r=this.sashItems.findIndex(i=>i.sash===n);(i=>{const o=this.viewItems.map(d=>d.size);let a,s,l=Number.NEGATIVE_INFINITY,u=Number.POSITIVE_INFINITY;const c=tn(r,-1,-1),f=tn(r+1,this.viewItems.length),h=c.reduce((d,p)=>d+(this.viewItems[p].minimumSize-o[p]),0),T=c.reduce((d,p)=>d+(this.viewItems[p].viewMaximumSize-o[p]),0),g=f.length===0?Number.POSITIVE_INFINITY:f.reduce((d,p)=>d+(o[p]-this.viewItems[p].minimumSize),0),v=f.length===0?Number.NEGATIVE_INFINITY:f.reduce((d,p)=>d+(o[p]-this.viewItems[p].viewMaximumSize),0);l=Math.max(h,v),u=Math.min(g,T);const R=this.findFirstSnapIndex(c),m=this.findFirstSnapIndex(f);if(typeof R=="number"){const d=this.viewItems[R],p=Math.floor(d.viewMinimumSize/2);a={index:R,limitDelta:d.visible?l-p:l+p,size:d.size}}if(typeof m=="number"){const d=this.viewItems[m],p=Math.floor(d.viewMinimumSize/2);s={index:m,limitDelta:d.visible?u+p:u-p,size:d.size}}this.sashDragState={start:i,current:i,index:r,sizes:o,minDelta:l,maxDelta:u,snapBefore:a,snapAfter:s}})(t)}onSashChange({current:n}){const{index:t,start:r,sizes:i,minDelta:o,maxDelta:a,snapBefore:s,snapAfter:l}=this.sashDragState;this.sashDragState.current=n;const u=n-r;this.resize(t,u,i,void 0,void 0,o,a,s,l),this.distributeEmptySpace(),this.layoutViews()}getSashPosition(n){let t=0;for(let r=0;r<this.sashItems.length;r++)if(t+=this.viewItems[r].size,this.sashItems[r].sash===n)return t;return 0}resize(n,t,r=this.viewItems.map(c=>c.size),i,o,a=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,l,u){if(n<0||n>=this.viewItems.length)return 0;const c=tn(n,-1,-1),f=tn(n+1,this.viewItems.length);if(o)for(const b of o)dc(c,b),dc(f,b);if(i)for(const b of i)hs(c,b),hs(f,b);const h=c.map(b=>this.viewItems[b]),T=c.map(b=>r[b]),g=f.map(b=>this.viewItems[b]),v=f.map(b=>r[b]),R=c.reduce((b,L)=>b+(this.viewItems[L].minimumSize-r[L]),0),m=c.reduce((b,L)=>b+(this.viewItems[L].maximumSize-r[L]),0),d=f.length===0?Number.POSITIVE_INFINITY:f.reduce((b,L)=>b+(r[L]-this.viewItems[L].minimumSize),0),p=f.length===0?Number.NEGATIVE_INFINITY:f.reduce((b,L)=>b+(r[L]-this.viewItems[L].maximumSize),0),E=Math.max(R,p,a),H=Math.min(d,m,s);let S=!1;if(l){const b=this.viewItems[l.index],L=t>=l.limitDelta;S=L!==b.visible,b.setVisible(L,l.size)}if(!S&&u){const b=this.viewItems[u.index],L=t<u.limitDelta;S=L!==b.visible,b.setVisible(L,u.size)}if(S)return this.resize(n,t,r,i,o,a,s);for(let b=0,L=t=gn(t,E,H);b<h.length;b++){const w=h[b],C=gn(T[b]+L,w.minimumSize,w.maximumSize);L-=C-T[b],w.size=C}for(let b=0,L=t;b<g.length;b++){const w=g[b],C=gn(v[b]-L,w.minimumSize,w.maximumSize);L+=C-v[b],w.size=C}return t}distributeEmptySpace(n){const t=this.viewItems.reduce((o,a)=>o+a.size,0);let r=this.size-t;const i=tn(this.viewItems.length-1,-1,-1);typeof n=="number"&&hs(i,n);for(let o=0;r!==0&&o<i.length;o++){const a=this.viewItems[i[o]],s=gn(a.size+r,a.minimumSize,a.maximumSize);r-=s-a.size,a.size=s}}layoutViews(){var n;this.contentSize=this.viewItems.reduce((r,i)=>r+i.size,0);let t=0;for(const r of this.viewItems)r.layout(t),t+=r.size;(n=this.onDidChange)!=null&&n.call(this,this.viewItems.map(r=>r.size)),this.sashItems.forEach(r=>r.sash.layout()),this.updateSashEnablement()}saveProportions(){this.proportionalLayout&&this.contentSize>0&&(this.proportions=this.viewItems.map(n=>n.size/this.contentSize))}updateSashEnablement(){let n=!1;const t=this.viewItems.map(l=>n=l.size-l.minimumSize>0||n);n=!1;const r=this.viewItems.map(l=>n=l.maximumSize-l.size>0||n),i=[...this.viewItems].reverse();n=!1;const o=i.map(l=>n=l.size-l.minimumSize>0||n).reverse();n=!1;const a=i.map(l=>n=l.maximumSize-l.size>0||n).reverse();let s=0;for(let l=0;l<this.sashItems.length;l++){const{sash:u}=this.sashItems[l];s+=this.viewItems[l].size;const c=!(t[l]&&a[l+1]),f=!(r[l]&&o[l+1]);if(c&&f){const h=tn(l,-1,-1),T=tn(l+1,this.viewItems.length),g=this.findFirstSnapIndex(h),v=this.findFirstSnapIndex(T),R=typeof g=="number"&&!this.viewItems[g].visible,m=typeof v=="number"&&!this.viewItems[v].visible;R&&o[l]&&(s>0||this.startSnappingEnabled)?u.state=Je.Minimum:m&&t[l]&&(s<this.contentSize||this.endSnappingEnabled)?u.state=Je.Maximum:u.state=Je.Disabled}else u.state=c&&!f?Je.Minimum:!c&&f?Je.Maximum:Je.Enabled}}findFirstSnapIndex(n){for(const t of n){const r=this.viewItems[t];if(r.visible&&r.snap)return t}for(const t of n){const r=this.viewItems[t];if(r.visible&&r.maximumSize-r.minimumSize>0)return;if(!r.visible&&r.snap)return t}}}class Qt{constructor(n){this.size=void 0,this.size=n}getPreferredSize(){return this.size}}class gc{constructor(n,t){this.proportion=void 0,this.layoutService=void 0,this.proportion=n,this.layoutService=t}getPreferredSize(){return this.proportion*this.layoutService.getSize()}}class go{getPreferredSize(){}}class Tc{get preferredSize(){return this.layoutStrategy.getPreferredSize()}set preferredSize(n){if(typeof n=="number")this.layoutStrategy=new Qt(n);else if(typeof n=="string"){const t=n.trim();if(ho(t,"%")){const r=Number(t.slice(0,-1))/100;this.layoutStrategy=new gc(r,this.layoutService)}else if(ho(t,"px")){const r=Number(t.slice(0,-2))/100;this.layoutStrategy=new Qt(r)}else if(typeof Number.parseFloat(t)=="number"){const r=Number.parseFloat(t);this.layoutStrategy=new Qt(r)}else this.layoutStrategy=new go}else this.layoutStrategy=new go}constructor(n,t){var r;if(this.minimumSize=0,this.maximumSize=Number.POSITIVE_INFINITY,this.element=void 0,this.priority=void 0,this.snap=void 0,this.layoutService=void 0,this.layoutStrategy=void 0,this.layoutService=n,this.element=t.element,this.minimumSize=typeof t.minimumSize=="number"?t.minimumSize:30,this.maximumSize=typeof t.maximumSize=="number"?t.maximumSize:Number.POSITIVE_INFINITY,typeof t.preferredSize=="number")this.layoutStrategy=new Qt(t.preferredSize);else if(typeof t.preferredSize=="string"){const i=t.preferredSize.trim();if(ho(i,"%")){const o=Number(i.slice(0,-1))/100;this.layoutStrategy=new gc(o,this.layoutService)}else if(ho(i,"px")){const o=Number(i.slice(0,-2));this.layoutStrategy=new Qt(o)}else if(typeof Number.parseFloat(i)=="number"){const o=Number.parseFloat(i);this.layoutStrategy=new Qt(o)}else this.layoutStrategy=new go}else this.layoutStrategy=new go;this.priority=(r=t.priority)!=null?r:Gn.Normal,this.snap=typeof t.snap=="boolean"&&t.snap}layout(n){}}function yc(e){return e.minSize!==void 0||e.maxSize!==void 0||e.preferredSize!==void 0||e.priority!==void 0||e.visible!==void 0}const vu=x.forwardRef(({className:e,children:n},t)=>ke.createElement("div",{ref:t,className:yl("split-view-view",am,e)},n));vu.displayName="Allotment.Pane";const mm=x.forwardRef(({children:e,className:n,maxSize:t=1/0,minSize:r=30,proportionalLayout:i=!0,separator:o=!0,sizes:a,defaultSizes:s=a,snap:l=!1,vertical:u=!1,onChange:c,onReset:f,onVisibleChange:h,onDragStart:T,onDragEnd:g},v)=>{const R=x.useRef(null),m=x.useRef([]),d=x.useRef(new Map),p=x.useRef(null),E=x.useRef(new Map),H=x.useRef(new mE),S=x.useRef([]),[b,L]=x.useState(!1),w=x.useMemo(()=>ke.Children.toArray(e).filter(ke.isValidElement),[e]),C=x.useCallback(O=>{var U,K;const _=(U=S.current)==null?void 0:U[O];return typeof(_==null?void 0:_.preferredSize)=="number"&&((K=p.current)!=null&&K.resizeView(O,Math.round(_.preferredSize)),!0)},[]);return x.useImperativeHandle(v,()=>({reset:()=>{if(f)f();else{var O;(O=p.current)==null||O.distributeViewSizes();for(let U=0;U<S.current.length;U++)C(U)}},resize:O=>{var U;(U=p.current)==null||U.resizeViews(O)}})),ms(()=>{let O=!0;s&&E.current.size!==s.length&&(O=!1,console.warn(`Expected ${s.length} children based on defaultSizes but found ${E.current.size}`)),O&&s&&(m.current=w.map(_=>_.key));const U=si({orientation:u?sn.Vertical:sn.Horizontal,proportionalLayout:i},O&&s&&{descriptor:{size:s.reduce((_,F)=>_+F,0),views:s.map((_,F)=>{var j,W,P,I;const G=d.current.get(m.current[F]),k=new Tc(H.current,si({element:document.createElement("div"),minimumSize:(j=G==null?void 0:G.minSize)!=null?j:r,maximumSize:(W=G==null?void 0:G.maxSize)!=null?W:t,priority:(P=G==null?void 0:G.priority)!=null?P:Gn.Normal},(G==null?void 0:G.preferredSize)&&{preferredSize:G==null?void 0:G.preferredSize},{snap:(I=G==null?void 0:G.snap)!=null?I:l}));return S.current.push(k),{container:[...E.current.values()][F],size:_,view:k}})}});p.current=new FE(R.current,U,c,T,g),p.current.on("sashDragStart",()=>{var _;(_=R.current)==null||_.classList.add("split-view-sash-dragging")}),p.current.on("sashDragEnd",()=>{var _;(_=R.current)==null||_.classList.remove("split-view-sash-dragging")}),p.current.on("sashchange",_=>{if(h&&p.current){const F=w.map(j=>j.key);for(let j=0;j<F.length;j++){const W=d.current.get(F[j]);(W==null?void 0:W.visible)!==void 0&&W.visible!==p.current.isViewVisible(j)&&h(j,p.current.isViewVisible(j))}}}),p.current.on("sashreset",_=>{if(f)f();else{var F;if(C(_)||C(_+1))return;(F=p.current)==null||F.distributeViewSizes()}});const K=p.current;return()=>{K.dispose()}},[]),ms(()=>{if(b){const V=w.map($=>$.key),J=[...m.current],Z=V.filter($=>!m.current.includes($)),Y=V.filter($=>m.current.includes($)),ce=m.current.map($=>!V.includes($));for(let $=ce.length-1;$>=0;$--){var O;ce[$]&&((O=p.current)!=null&&O.removeView($),J.splice($,1),S.current.splice($,1))}for(const $ of Z){var U,K,_,F,j;const X=d.current.get($),re=new Tc(H.current,si({element:document.createElement("div"),minimumSize:(U=X==null?void 0:X.minSize)!=null?U:r,maximumSize:(K=X==null?void 0:X.maxSize)!=null?K:t,priority:(_=X==null?void 0:X.priority)!=null?_:Gn.Normal},(X==null?void 0:X.preferredSize)&&{preferredSize:X==null?void 0:X.preferredSize},{snap:(F=X==null?void 0:X.snap)!=null?F:l}));(j=p.current)!=null&&j.addView(E.current.get($),re,na.Distribute,V.findIndex(oe=>oe===$)),J.splice(V.findIndex(oe=>oe===$),0,$),S.current.splice(V.findIndex(oe=>oe===$),0,re)}for(;!oE(V,J);)for(const[$,X]of V.entries()){const re=J.findIndex(oe=>oe===X);if(re!==$){var W;(W=p.current)==null||W.moveView(E.current.get(X),re,$);const oe=J[re];J.splice(re,1),J.splice($,0,oe);break}}for(const $ of Z){var P;const X=V.findIndex(oe=>oe===$),re=S.current[X].preferredSize;re!==void 0&&((P=p.current)==null||P.resizeView(X,re))}for(const $ of[...Z,...Y]){var I,G;const X=d.current.get($),re=V.findIndex(oe=>oe===$);X&&yc(X)&&X.visible!==void 0&&((I=p.current)==null?void 0:I.isViewVisible(re))!==X.visible&&((G=p.current)==null||G.setViewVisible(re,X.visible))}for(const $ of Y){const X=d.current.get($),re=V.findIndex(oe=>oe===$);if(X&&yc(X)){var k;X.preferredSize!==void 0&&S.current[re].preferredSize!==X.preferredSize&&(S.current[re].preferredSize=X.preferredSize);let oe=!1;X.minSize!==void 0&&S.current[re].minimumSize!==X.minSize&&(S.current[re].minimumSize=X.minSize,oe=!0),X.maxSize!==void 0&&S.current[re].maximumSize!==X.maxSize&&(S.current[re].maximumSize=X.maxSize,oe=!0),oe&&((k=p.current)==null||k.layout())}}(Z.length>0||ce.length>0)&&(m.current=V)}},[w,b,t,r,l]),x.useEffect(()=>{p.current&&(p.current.onDidChange=c)},[c]),x.useEffect(()=>{p.current&&(p.current.onDidDragStart=T)},[T]),x.useEffect(()=>{p.current&&(p.current.onDidDragEnd=g)},[g]),aE({ref:R,onResize:({width:O,height:U})=>{var K;O&&U&&((K=p.current)!=null&&K.layout(u?U:O),H.current.setSize(u?U:O),L(!0))}}),ms(()=>{if(!b){var O;const{height:U,width:K}=R.current.getBoundingClientRect();(O=p.current)!=null&&O.layout(u?U:K),H.current.setSize(u?U:K),L(!0)}},[b,u]),x.useEffect(()=>{um&&IE(20)},[]),ke.createElement("div",{ref:R,className:yl("split-view",u?"split-view-vertical":"split-view-horizontal",{"split-view-separator-border":o},sE,u?dE:cE,{[fE]:o},n)},ke.createElement("div",{className:yl("split-view-container",uE)},ke.Children.toArray(e).map(O=>{if(!ke.isValidElement(O))return null;const U=O.key;return O.type.displayName==="Allotment.Pane"?(d.current.set(U,O.props),ke.cloneElement(O,{key:U,ref:K=>{const _=O.ref;_&&(_.current=K),K?E.current.set(U,K):E.current.delete(U)}})):ke.createElement(vu,{key:U,ref:K=>{K?E.current.set(U,K):E.current.delete(U)}},O)})))});function IE(e){const n=gn(e,4,20),t=gn(e,1,8);document.documentElement.style.setProperty("--sash-size",n+"px"),document.documentElement.style.setProperty("--sash-hover-size",t+"px"),function(r){cm=r,fm.emit("onDidChangeGlobalSize",r)}(n)}mm.displayName="Allotment";var OE=Object.assign(mm,{Pane:vu});const VE=e=>z.jsx(OE,{children:e.children});const NE={theme:"dark",editorHeight:"100vh"},GE=e=>{const{width:n="100vw",height:t="100vh",theme:r,importMap:i,files:o,showCompileOutput:a=!0,showHeader:s=!0,showFileSelector:l=!0,fileSelectorReadOnly:u=!1,onUrlChange:c}=e,{filesHash:f,changeTheme:h,setFiles:T}=x.useContext(Wt),g=Object.assign(NE,e.options||{});return x.useEffect(()=>{if(o&&!(o!=null&&o[zt]))throw new Error(`Missing required property : '${zt}' is a mandatory property for 'files'`);{const v=mv(o,i);v&&T(v)}},[o]),x.useEffect(()=>{r&&h(r)},[r]),x.useEffect(()=>{c==null||c(f)},[f]),z.jsxs("div",{id:"react-playground",style:{width:n,height:t},children:[s?z.jsx(zv,{}):null,z.jsx("div",{style:{height:`calc(100% - ${s?50:0}px)`},children:z.jsxs(VE,{children:[z.jsx(Av,{options:g,showFileSelector:l,fileSelectorReadOnly:u}),z.jsx(Qv,{showCompileOutput:a})]})})]})},jE=e=>z.jsx(yv,{children:z.jsx(GE,{...e})});function zE(){return z.jsx(jE,{})}Es.createRoot(document.getElementById("root")).render(z.jsx(ke.StrictMode,{children:z.jsx(zE,{})}));export{kr as c,vc as g};
