(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ec(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bc={exports:{}},ra={},Mc={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),Fm=Symbol.for("react.portal"),Im=Symbol.for("react.fragment"),Om=Symbol.for("react.strict_mode"),Vm=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),jm=Symbol.for("react.forward_ref"),zm=Symbol.for("react.suspense"),Um=Symbol.for("react.memo"),Bm=Symbol.for("react.lazy"),Gu=Symbol.iterator;function Wm(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hc=Object.assign,Sc={};function Hr(e,n,t){this.props=e,this.context=n,this.refs=Sc,this.updater=t||Lc}Hr.prototype.isReactComponent={};Hr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xc(){}xc.prototype=Hr.prototype;function Ml(e,n,t){this.props=e,this.context=n,this.refs=Sc,this.updater=t||Lc}var Ll=Ml.prototype=new xc;Ll.constructor=Ml;Hc(Ll,Hr.prototype);Ll.isPureReactComponent=!0;var ju=Array.isArray,Rc=Object.prototype.hasOwnProperty,Hl={current:null},wc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)Rc.call(n,r)&&!wc.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:wi,type:e,key:o,ref:a,props:i,_owner:Hl.current}}function $m(e,n){return{$$typeof:wi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Sl(e){return typeof e=="object"&&e!==null&&e.$$typeof===wi}function Xm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var zu=/\/+/g;function ka(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Xm(""+e.key):n.toString(36)}function yo(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case wi:case Fm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ka(a,0):r,ju(i)?(t="",e!=null&&(t=e.replace(zu,"$&/")+"/"),yo(i,n,t,"",function(u){return u})):i!=null&&(Sl(i)&&(i=$m(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(zu,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",ju(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ka(o,s);a+=yo(o,n,t,l,i)}else if(l=Wm(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ka(o,s++),a+=yo(o,n,t,l,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Ki(e,n,t){if(e==null)return e;var r=[],i=0;return yo(e,r,"","",function(o){return n.call(t,o,i++)}),r}function Jm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},vo={transition:null},Km={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Hl};q.Children={map:Ki,forEach:function(e,n,t){Ki(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ki(e,function(){n++}),n},toArray:function(e){return Ki(e,function(n){return n})||[]},only:function(e){if(!Sl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Hr;q.Fragment=Im;q.Profiler=Vm;q.PureComponent=Ml;q.StrictMode=Om;q.Suspense=zm;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Km;q.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hc({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=Hl.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Rc.call(n,l)&&!wc.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:wi,type:e.type,key:i,ref:o,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:Gm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nm,_context:e},e.Consumer=e};q.createElement=Pc;q.createFactory=function(e){var n=Pc.bind(null,e);return n.type=e,n};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:jm,render:e}};q.isValidElement=Sl;q.lazy=function(e){return{$$typeof:Bm,_payload:{_status:-1,_result:e},_init:Jm}};q.memo=function(e,n){return{$$typeof:Um,type:e,compare:n===void 0?null:n}};q.startTransition=function(e){var n=vo.transition;vo.transition={};try{e()}finally{vo.transition=n}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,n){return Ne.current.useCallback(e,n)};q.useContext=function(e){return Ne.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};q.useEffect=function(e,n){return Ne.current.useEffect(e,n)};q.useId=function(){return Ne.current.useId()};q.useImperativeHandle=function(e,n,t){return Ne.current.useImperativeHandle(e,n,t)};q.useInsertionEffect=function(e,n){return Ne.current.useInsertionEffect(e,n)};q.useLayoutEffect=function(e,n){return Ne.current.useLayoutEffect(e,n)};q.useMemo=function(e,n){return Ne.current.useMemo(e,n)};q.useReducer=function(e,n,t){return Ne.current.useReducer(e,n,t)};q.useRef=function(e){return Ne.current.useRef(e)};q.useState=function(e){return Ne.current.useState(e)};q.useSyncExternalStore=function(e,n,t){return Ne.current.useSyncExternalStore(e,n,t)};q.useTransition=function(){return Ne.current.useTransition()};q.version="18.2.0";Mc.exports=q;var S=Mc.exports;const ke=Ec(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=S,Qm=Symbol.for("react.element"),qm=Symbol.for("react.fragment"),Zm=Object.prototype.hasOwnProperty,eh=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nh={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Zm.call(n,r)&&!nh.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Qm,type:e,key:o,ref:a,props:i,_owner:eh.current}}ra.Fragment=qm;ra.jsx=Cc;ra.jsxs=Cc;bc.exports=ra;var O=bc.exports,bs={},Ac={exports:{}},en={},Dc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,I){var j=P.length;P.push(I);e:for(;0<j;){var k=j-1>>>1,N=P[k];if(0<i(N,I))P[k]=I,P[j]=N,j=k;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],j=P.pop();if(j!==I){P[0]=j;e:for(var k=0,N=P.length,J=N>>>1;k<J;){var Z=2*(k+1)-1,Y=P[Z],ce=Z+1,$=P[ce];if(0>i(Y,j))ce<N&&0>i($,Y)?(P[k]=$,P[ce]=j,k=ce):(P[k]=Y,P[Z]=j,k=Z);else if(ce<N&&0>i($,j))P[k]=$,P[ce]=j,k=ce;else break e}}return I}function i(P,I){var j=P.sortIndex-I.sortIndex;return j!==0?j:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,f=null,h=3,T=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var I=t(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,n(l,I);else break;I=t(u)}}function E(P){if(v=!1,p(P),!g)if(t(l)!==null)g=!0,z(L);else{var I=t(u);I!==null&&W(E,I.startTime-P)}}function L(P,I){g=!1,v&&(v=!1,m(H),H=-1),T=!0;var j=h;try{for(p(I),f=t(l);f!==null&&(!(f.expirationTime>I)||P&&!V());){var k=f.callback;if(typeof k=="function"){f.callback=null,h=f.priorityLevel;var N=k(f.expirationTime<=I);I=e.unstable_now(),typeof N=="function"?f.callback=N:f===t(l)&&r(l),p(I)}else r(l);f=t(l)}if(f!==null)var J=!0;else{var Z=t(u);Z!==null&&W(E,Z.startTime-I),J=!1}return J}finally{f=null,h=j,T=!1}}var R=!1,b=null,H=-1,w=5,C=-1;function V(){return!(e.unstable_now()-C<w)}function U(){if(b!==null){var P=e.unstable_now();C=P;var I=!0;try{I=b(!0,P)}finally{I?K():(R=!1,b=null)}}else R=!1}var K;if(typeof c=="function")K=function(){c(U)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,F=_.port2;_.port1.onmessage=U,K=function(){F.postMessage(null)}}else K=function(){x(U,0)};function z(P){b=P,R||(R=!0,K())}function W(P,I){H=x(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){g||T||(g=!0,z(L))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var j=h;h=I;try{return P()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=h;h=P;try{return I()}finally{h=j}},e.unstable_scheduleCallback=function(P,I,j){var k=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?k+j:k):j=k,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,P={id:d++,callback:I,priorityLevel:P,startTime:j,expirationTime:N,sortIndex:-1},j>k?(P.sortIndex=j,n(u,P),t(l)===null&&P===t(u)&&(v?(m(H),H=-1):v=!0,W(E,j-k))):(P.sortIndex=N,n(l,P),g||T||(g=!0,z(L))),P},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(P){var I=h;return function(){var j=h;h=I;try{return P.apply(this,arguments)}finally{h=j}}}})(kc);Dc.exports=kc;var th=Dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=S,Ze=th;function A(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,li={};function Ut(e,n){Tr(e,n),Tr(e+"Capture",n)}function Tr(e,n){for(li[e]=n,e=0;e<n.length;e++)Fc.add(n[e])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,rh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},Bu={};function ih(e){return Ms.call(Bu,e)?!0:Ms.call(Uu,e)?!1:rh.test(e)?Bu[e]=!0:(Uu[e]=!0,!1)}function oh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ah(e,n,t,r){if(n===null||typeof n>"u"||oh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ge(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new Ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var xl=/[\-:]([a-z])/g;function Rl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xl,Rl);Ce[n]=new Ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xl,Rl);Ce[n]=new Ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xl,Rl);Ce[n]=new Ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function wl(e,n,t,r){var i=Ce.hasOwnProperty(n)?Ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ah(n,t,i,r)&&(t=null),r||i===null?ih(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Kn=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),Ls=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Cl=Symbol.for("react.forward_ref"),Hs=Symbol.for("react.suspense"),Ss=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Vc=Symbol.for("react.offscreen"),Wu=Symbol.iterator;function _r(e){return e===null||typeof e!="object"?null:(e=Wu&&e[Wu]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,_a;function $r(e){if(_a===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);_a=n&&n[1]||""}return`
`+_a+e}var Fa=!1;function Ia(e,n){if(!e||Fa)return"";Fa=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Fa=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?$r(e):""}function sh(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=Ia(e.type,!1),e;case 11:return e=Ia(e.type.render,!1),e;case 1:return e=Ia(e.type,!0),e;default:return""}}function xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case qt:return"Portal";case Ls:return"Profiler";case Pl:return"StrictMode";case Hs:return"Suspense";case Ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case Ic:return(e._context.displayName||"Context")+".Provider";case Cl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Al:return n=e.displayName||null,n!==null?n:xs(e.type)||"Memo";case tt:n=e._payload,e=e._init;try{return xs(e(n))}catch{}}return null}function lh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xs(n);case 8:return n===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function uh(e){var n=Nc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qi(e){e._valueTracker||(e._valueTracker=uh(e))}function Gc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Nc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rs(e,n){var t=n.checked;return he({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function $u(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=yt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function jc(e,n){n=n.checked,n!=null&&wl(e,"checked",n,!1)}function ws(e,n){jc(e,n);var t=yt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ps(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ps(e,n.type,yt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Xu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ps(e,n,t){(n!=="number"||Ao(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Xr=Array.isArray;function cr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+yt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Cs(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(A(91));return he({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ju(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(A(92));if(Xr(t)){if(1<t.length)throw Error(A(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:yt(t)}}function zc(e,n){var t=yt(n.value),r=yt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ku(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function As(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Uc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ui(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dh=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){dh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qr[n]=Qr[e]})});function Wc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+n).trim():n+"px"}function $c(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Wc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var ch=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,n){if(n){if(ch[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(A(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(A(61))}if(n.style!=null&&typeof n.style!="object")throw Error(A(62))}}function ks(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,fr=null,pr=null;function Yu(e){if(e=Ai(e)){if(typeof Fs!="function")throw Error(A(280));var n=e.stateNode;n&&(n=la(n),Fs(e.stateNode,e.type,n))}}function Xc(e){fr?pr?pr.push(e):pr=[e]:fr=e}function Jc(){if(fr){var e=fr,n=pr;if(pr=fr=null,Yu(e),n)for(e=0;e<n.length;e++)Yu(n[e])}}function Kc(e,n){return e(n)}function Yc(){}var Oa=!1;function Qc(e,n,t){if(Oa)return e(n,t);Oa=!0;try{return Kc(e,n,t)}finally{Oa=!1,(fr!==null||pr!==null)&&(Yc(),Jc())}}function di(e,n){var t=e.stateNode;if(t===null)return null;var r=la(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(A(231,n,typeof t));return t}var Is=!1;if(Wn)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Is=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Is=!1}function fh(e,n,t,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var qr=!1,Do=null,ko=!1,Os=null,ph={onError:function(e){qr=!0,Do=e}};function mh(e,n,t,r,i,o,a,s,l){qr=!1,Do=null,fh.apply(ph,arguments)}function hh(e,n,t,r,i,o,a,s,l){if(mh.apply(this,arguments),qr){if(qr){var u=Do;qr=!1,Do=null}else throw Error(A(198));ko||(ko=!0,Os=u)}}function Bt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function qc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Qu(e){if(Bt(e)!==e)throw Error(A(188))}function gh(e){var n=e.alternate;if(!n){if(n=Bt(e),n===null)throw Error(A(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Qu(i),e;if(o===r)return Qu(i),n;o=o.sibling}throw Error(A(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===t){a=!0,t=i,r=o;break}if(s===r){a=!0,r=i,t=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===t){a=!0,t=o,r=i;break}if(s===r){a=!0,r=o,t=i;break}s=s.sibling}if(!a)throw Error(A(189))}}if(t.alternate!==r)throw Error(A(190))}if(t.tag!==3)throw Error(A(188));return t.stateNode.current===t?e:n}function Zc(e){return e=gh(e),e!==null?ef(e):null}function ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ef(e);if(n!==null)return n;e=e.sibling}return null}var nf=Ze.unstable_scheduleCallback,qu=Ze.unstable_cancelCallback,Th=Ze.unstable_shouldYield,yh=Ze.unstable_requestPaint,ye=Ze.unstable_now,vh=Ze.unstable_getCurrentPriorityLevel,kl=Ze.unstable_ImmediatePriority,tf=Ze.unstable_UserBlockingPriority,_o=Ze.unstable_NormalPriority,Eh=Ze.unstable_LowPriority,rf=Ze.unstable_IdlePriority,ia=null,Cn=null;function bh(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(ia,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Hh,Mh=Math.log,Lh=Math.LN2;function Hh(e){return e>>>=0,e===0?32:31-(Mh(e)/Lh|0)|0}var Zi=64,eo=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~i;s!==0?r=Jr(s):(o&=a,o!==0&&(r=Jr(o)))}else a=t&~i,a!==0?r=Jr(a):o!==0&&(r=Jr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-En(n),i=1<<t,r|=e[t],n&=~i;return r}function Sh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-En(o),s=1<<a,l=i[a];l===-1?(!(s&t)||s&r)&&(i[a]=Sh(s,n)):l<=n&&(e.expiredLanes|=s),o&=~s}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function of(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function Va(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Pi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-En(n),e[n]=t}function Rh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-En(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function _l(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-En(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var te=0;function af(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sf,Fl,lf,uf,df,Ns=!1,no=[],ut=null,dt=null,ct=null,ci=new Map,fi=new Map,it=[],wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(e,n){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":ci.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(n.pointerId)}}function Ir(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Ai(n),n!==null&&Fl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Ph(e,n,t,r,i){switch(n){case"focusin":return ut=Ir(ut,e,n,t,r,i),!0;case"dragenter":return dt=Ir(dt,e,n,t,r,i),!0;case"mouseover":return ct=Ir(ct,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return ci.set(o,Ir(ci.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fi.set(o,Ir(fi.get(o)||null,e,n,t,r,i)),!0}return!1}function cf(e){var n=Dt(e.target);if(n!==null){var t=Bt(n);if(t!==null){if(n=t.tag,n===13){if(n=qc(t),n!==null){e.blockedOn=n,df(e.priority,function(){lf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Gs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);_s=r,t.target.dispatchEvent(r),_s=null}else return n=Ai(t),n!==null&&Fl(n),e.blockedOn=t,!1;n.shift()}return!0}function ed(e,n,t){Eo(e)&&t.delete(n)}function Ch(){Ns=!1,ut!==null&&Eo(ut)&&(ut=null),dt!==null&&Eo(dt)&&(dt=null),ct!==null&&Eo(ct)&&(ct=null),ci.forEach(ed),fi.forEach(ed)}function Or(e,n){e.blockedOn===n&&(e.blockedOn=null,Ns||(Ns=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Ch)))}function pi(e){function n(i){return Or(i,e)}if(0<no.length){Or(no[0],e);for(var t=1;t<no.length;t++){var r=no[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Or(ut,e),dt!==null&&Or(dt,e),ct!==null&&Or(ct,e),ci.forEach(n),fi.forEach(n),t=0;t<it.length;t++)r=it[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(t=it[0],t.blockedOn===null);)cf(t),t.blockedOn===null&&it.shift()}var mr=Kn.ReactCurrentBatchConfig,Io=!0;function Ah(e,n,t,r){var i=te,o=mr.transition;mr.transition=null;try{te=1,Il(e,n,t,r)}finally{te=i,mr.transition=o}}function Dh(e,n,t,r){var i=te,o=mr.transition;mr.transition=null;try{te=4,Il(e,n,t,r)}finally{te=i,mr.transition=o}}function Il(e,n,t,r){if(Io){var i=Gs(e,n,t,r);if(i===null)Ja(e,n,r,Oo,t),Zu(e,r);else if(Ph(i,e,n,t,r))r.stopPropagation();else if(Zu(e,r),n&4&&-1<wh.indexOf(e)){for(;i!==null;){var o=Ai(i);if(o!==null&&sf(o),o=Gs(e,n,t,r),o===null&&Ja(e,n,r,Oo,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ja(e,n,r,null,t)}}var Oo=null;function Gs(e,n,t,r){if(Oo=null,e=Dl(r),e=Dt(e),e!==null)if(n=Bt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=qc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Oo=e,null}function ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vh()){case kl:return 1;case tf:return 4;case _o:case Eh:return 16;case rf:return 536870912;default:return 16}default:return 16}}var at=null,Ol=null,bo=null;function pf(){if(bo)return bo;var e,n=Ol,t=n.length,r,i="value"in at?at.value:at.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return bo=i.slice(e,1<r?1-r:void 0)}function Mo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function nd(){return!1}function nn(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?to:nd,this.isPropagationStopped=nd,this}return he(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),n}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=nn(Sr),Ci=he({},Sr,{view:0,detail:0}),kh=nn(Ci),Na,Ga,Vr,oa=he({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Na=e.screenX-Vr.screenX,Ga=e.screenY-Vr.screenY):Ga=Na=0,Vr=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:Ga}}),td=nn(oa),_h=he({},oa,{dataTransfer:0}),Fh=nn(_h),Ih=he({},Ci,{relatedTarget:0}),ja=nn(Ih),Oh=he({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vh=nn(Oh),Nh=he({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gh=nn(Nh),jh=he({},Sr,{data:0}),rd=nn(jh),zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Bh[e])?!!n[e]:!1}function Nl(){return Wh}var $h=he({},Ci,{key:function(e){if(e.key){var n=zh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=nn($h),Jh=he({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=nn(Jh),Kh=he({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),Yh=nn(Kh),Qh=he({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qh=nn(Qh),Zh=he({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=nn(Zh),ng=[9,13,27,32],Gl=Wn&&"CompositionEvent"in window,Zr=null;Wn&&"documentMode"in document&&(Zr=document.documentMode);var tg=Wn&&"TextEvent"in window&&!Zr,mf=Wn&&(!Gl||Zr&&8<Zr&&11>=Zr),od=String.fromCharCode(32),ad=!1;function hf(e,n){switch(e){case"keyup":return ng.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function rg(e,n){switch(e){case"compositionend":return gf(n);case"keypress":return n.which!==32?null:(ad=!0,od);case"textInput":return e=n.data,e===od&&ad?null:e;default:return null}}function ig(e,n){if(er)return e==="compositionend"||!Gl&&hf(e,n)?(e=pf(),bo=Ol=at=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return mf&&n.locale!=="ko"?null:n.data;default:return null}}var og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!og[e.type]:n==="textarea"}function Tf(e,n,t,r){Xc(r),n=Vo(n,"onChange"),0<n.length&&(t=new Vl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ei=null,mi=null;function ag(e){wf(e,0)}function aa(e){var n=rr(e);if(Gc(n))return e}function sg(e,n){if(e==="change")return n}var yf=!1;if(Wn){var za;if(Wn){var Ua="oninput"in document;if(!Ua){var ld=document.createElement("div");ld.setAttribute("oninput","return;"),Ua=typeof ld.oninput=="function"}za=Ua}else za=!1;yf=za&&(!document.documentMode||9<document.documentMode)}function ud(){ei&&(ei.detachEvent("onpropertychange",vf),mi=ei=null)}function vf(e){if(e.propertyName==="value"&&aa(mi)){var n=[];Tf(n,mi,e,Dl(e)),Qc(ag,n)}}function lg(e,n,t){e==="focusin"?(ud(),ei=n,mi=t,ei.attachEvent("onpropertychange",vf)):e==="focusout"&&ud()}function ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(mi)}function dg(e,n){if(e==="click")return aa(n)}function cg(e,n){if(e==="input"||e==="change")return aa(n)}function fg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mn=typeof Object.is=="function"?Object.is:fg;function hi(e,n){if(Mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Ms.call(n,i)||!Mn(e[i],n[i]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cd(e,n){var t=dd(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dd(t)}}function Ef(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ef(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bf(){for(var e=window,n=Ao();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ao(e.document)}return n}function jl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function pg(e){var n=bf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ef(t.ownerDocument.documentElement,t)){if(r!==null&&jl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cd(t,o);var a=cd(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mg=Wn&&"documentMode"in document&&11>=document.documentMode,nr=null,js=null,ni=null,zs=!1;function fd(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;zs||nr==null||nr!==Ao(r)||(r=nr,"selectionStart"in r&&jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&hi(ni,r)||(ni=r,r=Vo(js,"onSelect"),0<r.length&&(n=new Vl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=nr)))}function ro(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var tr={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Ba={},Mf={};Wn&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function sa(e){if(Ba[e])return Ba[e];if(!tr[e])return e;var n=tr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Mf)return Ba[e]=n[t];return e}var Lf=sa("animationend"),Hf=sa("animationiteration"),Sf=sa("animationstart"),xf=sa("transitionend"),Rf=new Map,pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,n){Rf.set(e,n),Ut(n,[e])}for(var Wa=0;Wa<pd.length;Wa++){var $a=pd[Wa],hg=$a.toLowerCase(),gg=$a[0].toUpperCase()+$a.slice(1);bt(hg,"on"+gg)}bt(Lf,"onAnimationEnd");bt(Hf,"onAnimationIteration");bt(Sf,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(xf,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function md(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,hh(r,n,void 0,e),e.currentTarget=null}function wf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;md(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;md(i,s,u),o=l}}}if(ko)throw e=Os,ko=!1,Os=null,e}function le(e,n){var t=n[Xs];t===void 0&&(t=n[Xs]=new Set);var r=e+"__bubble";t.has(r)||(Pf(n,e,2,!1),t.add(r))}function Xa(e,n,t){var r=0;n&&(r|=4),Pf(t,e,r,n)}var io="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[io]){e[io]=!0,Fc.forEach(function(t){t!=="selectionchange"&&(Tg.has(t)||Xa(t,!1,e),Xa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[io]||(n[io]=!0,Xa("selectionchange",!1,n))}}function Pf(e,n,t,r){switch(ff(n)){case 1:var i=Ah;break;case 4:i=Dh;break;default:i=Il}t=i.bind(null,n,t,e),i=void 0,!Is||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ja(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Dt(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Qc(function(){var u=o,d=Dl(t),f=[];e:{var h=Rf.get(e);if(h!==void 0){var T=Vl,g=e;switch(e){case"keypress":if(Mo(t)===0)break e;case"keydown":case"keyup":T=Xh;break;case"focusin":g="focus",T=ja;break;case"focusout":g="blur",T=ja;break;case"beforeblur":case"afterblur":T=ja;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Yh;break;case Lf:case Hf:case Sf:T=Vh;break;case xf:T=qh;break;case"scroll":T=kh;break;case"wheel":T=eg;break;case"copy":case"cut":case"paste":T=Gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=id}var v=(n&4)!==0,x=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,p;c!==null;){p=c;var E=p.stateNode;if(p.tag===5&&E!==null&&(p=E,m!==null&&(E=di(c,m),E!=null&&v.push(Ti(c,E,p)))),x)break;c=c.return}0<v.length&&(h=new T(h,g,null,t,d),f.push({event:h,listeners:v}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",h&&t!==_s&&(g=t.relatedTarget||t.fromElement)&&(Dt(g)||g[$n]))break e;if((T||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,T?(g=t.relatedTarget||t.toElement,T=u,g=g?Dt(g):null,g!==null&&(x=Bt(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(T=null,g=u),T!==g)){if(v=td,E="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=id,E="onPointerLeave",m="onPointerEnter",c="pointer"),x=T==null?h:rr(T),p=g==null?h:rr(g),h=new v(E,c+"leave",T,t,d),h.target=x,h.relatedTarget=p,E=null,Dt(d)===u&&(v=new v(m,c+"enter",g,t,d),v.target=p,v.relatedTarget=x,E=v),x=E,T&&g)n:{for(v=T,m=g,c=0,p=v;p;p=Yt(p))c++;for(p=0,E=m;E;E=Yt(E))p++;for(;0<c-p;)v=Yt(v),c--;for(;0<p-c;)m=Yt(m),p--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break n;v=Yt(v),m=Yt(m)}v=null}else v=null;T!==null&&hd(f,h,T,v,!1),g!==null&&x!==null&&hd(f,x,g,v,!0)}}e:{if(h=u?rr(u):window,T=h.nodeName&&h.nodeName.toLowerCase(),T==="select"||T==="input"&&h.type==="file")var L=sg;else if(sd(h))if(yf)L=cg;else{L=ug;var R=lg}else(T=h.nodeName)&&T.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=dg);if(L&&(L=L(e,u))){Tf(f,L,t,d);break e}R&&R(e,h,u),e==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Ps(h,"number",h.value)}switch(R=u?rr(u):window,e){case"focusin":(sd(R)||R.contentEditable==="true")&&(nr=R,js=u,ni=null);break;case"focusout":ni=js=nr=null;break;case"mousedown":zs=!0;break;case"contextmenu":case"mouseup":case"dragend":zs=!1,fd(f,t,d);break;case"selectionchange":if(mg)break;case"keydown":case"keyup":fd(f,t,d)}var b;if(Gl)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else er?hf(e,t)&&(H="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(H="onCompositionStart");H&&(mf&&t.locale!=="ko"&&(er||H!=="onCompositionStart"?H==="onCompositionEnd"&&er&&(b=pf()):(at=d,Ol="value"in at?at.value:at.textContent,er=!0)),R=Vo(u,H),0<R.length&&(H=new rd(H,e,null,t,d),f.push({event:H,listeners:R}),b?H.data=b:(b=gf(t),b!==null&&(H.data=b)))),(b=tg?rg(e,t):ig(e,t))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(d=new rd("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:u}),d.data=b))}wf(f,n)})}function Ti(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Vo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=di(e,t),o!=null&&r.unshift(Ti(e,o,i)),o=di(e,n),o!=null&&r.push(Ti(e,o,i))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hd(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=di(t,o),l!=null&&a.unshift(Ti(t,l,s))):i||(l=di(t,o),l!=null&&a.push(Ti(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var yg=/\r\n?/g,vg=/\u0000|\uFFFD/g;function gd(e){return(typeof e=="string"?e:""+e).replace(yg,`
`).replace(vg,"")}function oo(e,n,t){if(n=gd(n),gd(e)!==n&&t)throw Error(A(425))}function No(){}var Us=null,Bs=null;function Ws(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $s=typeof setTimeout=="function"?setTimeout:void 0,Eg=typeof clearTimeout=="function"?clearTimeout:void 0,Td=typeof Promise=="function"?Promise:void 0,bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Td<"u"?function(e){return Td.resolve(null).then(e).catch(Mg)}:$s;function Mg(e){setTimeout(function(){throw e})}function Ka(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),pi(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);pi(n)}function ft(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function yd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Pn="__reactFiber$"+xr,yi="__reactProps$"+xr,$n="__reactContainer$"+xr,Xs="__reactEvents$"+xr,Lg="__reactListeners$"+xr,Hg="__reactHandles$"+xr;function Dt(e){var n=e[Pn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$n]||t[Pn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=yd(e);e!==null;){if(t=e[Pn])return t;e=yd(e)}return n}e=t,t=e.parentNode}return null}function Ai(e){return e=e[Pn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function la(e){return e[yi]||null}var Js=[],ir=-1;function Mt(e){return{current:e}}function de(e){0>ir||(e.current=Js[ir],Js[ir]=null,ir--)}function ae(e,n){ir++,Js[ir]=e.current,e.current=n}var vt={},Fe=Mt(vt),Ue=Mt(!1),Ot=vt;function yr(e,n){var t=e.type.contextTypes;if(!t)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function Go(){de(Ue),de(Fe)}function vd(e,n,t){if(Fe.current!==vt)throw Error(A(168));ae(Fe,n),ae(Ue,t)}function Cf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(A(108,lh(e)||"Unknown",i));return he({},t,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Ot=Fe.current,ae(Fe,e),ae(Ue,Ue.current),!0}function Ed(e,n,t){var r=e.stateNode;if(!r)throw Error(A(169));t?(e=Cf(e,n,Ot),r.__reactInternalMemoizedMergedChildContext=e,de(Ue),de(Fe),ae(Fe,e)):de(Ue),ae(Ue,t)}var Nn=null,ua=!1,Ya=!1;function Af(e){Nn===null?Nn=[e]:Nn.push(e)}function Sg(e){ua=!0,Af(e)}function Lt(){if(!Ya&&Nn!==null){Ya=!0;var e=0,n=te;try{var t=Nn;for(te=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Nn=null,ua=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),nf(kl,Lt),i}finally{te=n,Ya=!1}}return null}var or=[],ar=0,zo=null,Uo=0,an=[],sn=0,Vt=null,zn=1,Un="";function Ct(e,n){or[ar++]=Uo,or[ar++]=zo,zo=e,Uo=n}function Df(e,n,t){an[sn++]=zn,an[sn++]=Un,an[sn++]=Vt,Vt=e;var r=zn;e=Un;var i=32-En(r)-1;r&=~(1<<i),t+=1;var o=32-En(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zn=1<<32-En(n)+i|t<<i|r,Un=o+e}else zn=1<<o|t<<i|r,Un=e}function zl(e){e.return!==null&&(Ct(e,1),Df(e,1,0))}function Ul(e){for(;e===zo;)zo=or[--ar],or[ar]=null,Uo=or[--ar],or[ar]=null;for(;e===Vt;)Vt=an[--sn],an[sn]=null,Un=an[--sn],an[sn]=null,zn=an[--sn],an[sn]=null}var Qe=null,Ke=null,fe=!1,vn=null;function kf(e,n){var t=un(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function bd(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Qe=e,Ke=ft(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Qe=e,Ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Vt!==null?{id:zn,overflow:Un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=un(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Qe=e,Ke=null,!0):!1;default:return!1}}function Ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ys(e){if(fe){var n=Ke;if(n){var t=n;if(!bd(e,n)){if(Ks(e))throw Error(A(418));n=ft(t.nextSibling);var r=Qe;n&&bd(e,n)?kf(r,t):(e.flags=e.flags&-4097|2,fe=!1,Qe=e)}}else{if(Ks(e))throw Error(A(418));e.flags=e.flags&-4097|2,fe=!1,Qe=e}}}function Md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function ao(e){if(e!==Qe)return!1;if(!fe)return Md(e),fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ws(e.type,e.memoizedProps)),n&&(n=Ke)){if(Ks(e))throw _f(),Error(A(418));for(;n;)kf(e,n),n=ft(n.nextSibling)}if(Md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ke=ft(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ke=null}}else Ke=Qe?ft(e.stateNode.nextSibling):null;return!0}function _f(){for(var e=Ke;e;)e=ft(e.nextSibling)}function vr(){Ke=Qe=null,fe=!1}function Bl(e){vn===null?vn=[e]:vn.push(e)}var xg=Kn.ReactCurrentBatchConfig;function gn(e,n){if(e&&e.defaultProps){n=he({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Bo=Mt(null),Wo=null,sr=null,Wl=null;function $l(){Wl=sr=Wo=null}function Xl(e){var n=Bo.current;de(Bo),e._currentValue=n}function Qs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function hr(e,n){Wo=e,Wl=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ze=!0),e.firstContext=null)}function cn(e){var n=e._currentValue;if(Wl!==e)if(e={context:e,memoizedValue:n,next:null},sr===null){if(Wo===null)throw Error(A(308));sr=e,Wo.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return n}var kt=null;function Jl(e){kt===null?kt=[e]:kt.push(e)}function Ff(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Jl(n)):(t.next=i.next,i.next=t),n.interleaved=t,Xn(e,r)}function Xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var rt=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Xn(e,t)}return i=r.interleaved,i===null?(n.next=n,Jl(r)):(n.next=i.next,i.next=n),r.interleaved=n,Xn(e,t)}function Lo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,_l(e,t)}}function Ld(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function $o(e,n,t,r){var i=e.updateQueue;rt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,d=u=l=null,s=o;do{var h=s.lane,T=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:T,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,v=s;switch(h=n,T=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(T,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(T,f,h):g,h==null)break e;f=he({},f,h);break e;case 2:rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else T={eventTime:T,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=T,l=f):d=d.next=T,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Gt|=a,e.lanes=a,e.memoizedState=f}}function Hd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var Of=new _c.Component().refs;function qs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:he({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var da={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ve(),i=ht(e),o=Bn(r,i);o.payload=n,t!=null&&(o.callback=t),n=pt(e,o,i),n!==null&&(bn(n,e,i,r),Lo(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ve(),i=ht(e),o=Bn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=pt(e,o,i),n!==null&&(bn(n,e,i,r),Lo(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ve(),r=ht(e),i=Bn(t,r);i.tag=2,n!=null&&(i.callback=n),n=pt(e,i,r),n!==null&&(bn(n,e,r,t),Lo(n,e,r))}};function Sd(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!hi(t,r)||!hi(i,o):!0}function Vf(e,n,t){var r=!1,i=vt,o=n.contextType;return typeof o=="object"&&o!==null?o=cn(o):(i=Be(n)?Ot:Fe.current,r=n.contextTypes,o=(r=r!=null)?yr(e,i):vt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=da,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function xd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&da.enqueueReplaceState(n,n.state,null)}function Zs(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Of,Kl(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=cn(o):(o=Be(n)?Ot:Fe.current,i.context=yr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(qs(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&da.enqueueReplaceState(i,i.state,null),$o(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(A(309));var r=t.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var s=i.refs;s===Of&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(A(284));if(!t._owner)throw Error(A(290,e))}return e}function so(e,n){throw e=Object.prototype.toString.call(n),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Rd(e){var n=e._init;return n(e._payload)}function Nf(e){function n(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function t(m,c){if(!e)return null;for(;c!==null;)n(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=gt(m,c),m.index=0,m.sibling=null,m}function o(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,p,E){return c===null||c.tag!==6?(c=rs(p,m.mode,E),c.return=m,c):(c=i(c,p),c.return=m,c)}function l(m,c,p,E){var L=p.type;return L===Zt?d(m,c,p.props.children,E,p.key):c!==null&&(c.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===tt&&Rd(L)===c.type)?(E=i(c,p.props),E.ref=Nr(m,c,p),E.return=m,E):(E=Po(p.type,p.key,p.props,null,m.mode,E),E.ref=Nr(m,c,p),E.return=m,E)}function u(m,c,p,E){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=is(p,m.mode,E),c.return=m,c):(c=i(c,p.children||[]),c.return=m,c)}function d(m,c,p,E,L){return c===null||c.tag!==7?(c=It(p,m.mode,E,L),c.return=m,c):(c=i(c,p),c.return=m,c)}function f(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=rs(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Yi:return p=Po(c.type,c.key,c.props,null,m.mode,p),p.ref=Nr(m,null,c),p.return=m,p;case qt:return c=is(c,m.mode,p),c.return=m,c;case tt:var E=c._init;return f(m,E(c._payload),p)}if(Xr(c)||_r(c))return c=It(c,m.mode,p,null),c.return=m,c;so(m,c)}return null}function h(m,c,p,E){var L=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return L!==null?null:s(m,c,""+p,E);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:return p.key===L?l(m,c,p,E):null;case qt:return p.key===L?u(m,c,p,E):null;case tt:return L=p._init,h(m,c,L(p._payload),E)}if(Xr(p)||_r(p))return L!==null?null:d(m,c,p,E,null);so(m,p)}return null}function T(m,c,p,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(p)||null,s(c,m,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Yi:return m=m.get(E.key===null?p:E.key)||null,l(c,m,E,L);case qt:return m=m.get(E.key===null?p:E.key)||null,u(c,m,E,L);case tt:var R=E._init;return T(m,c,p,R(E._payload),L)}if(Xr(E)||_r(E))return m=m.get(p)||null,d(c,m,E,L,null);so(c,E)}return null}function g(m,c,p,E){for(var L=null,R=null,b=c,H=c=0,w=null;b!==null&&H<p.length;H++){b.index>H?(w=b,b=null):w=b.sibling;var C=h(m,b,p[H],E);if(C===null){b===null&&(b=w);break}e&&b&&C.alternate===null&&n(m,b),c=o(C,c,H),R===null?L=C:R.sibling=C,R=C,b=w}if(H===p.length)return t(m,b),fe&&Ct(m,H),L;if(b===null){for(;H<p.length;H++)b=f(m,p[H],E),b!==null&&(c=o(b,c,H),R===null?L=b:R.sibling=b,R=b);return fe&&Ct(m,H),L}for(b=r(m,b);H<p.length;H++)w=T(b,m,H,p[H],E),w!==null&&(e&&w.alternate!==null&&b.delete(w.key===null?H:w.key),c=o(w,c,H),R===null?L=w:R.sibling=w,R=w);return e&&b.forEach(function(V){return n(m,V)}),fe&&Ct(m,H),L}function v(m,c,p,E){var L=_r(p);if(typeof L!="function")throw Error(A(150));if(p=L.call(p),p==null)throw Error(A(151));for(var R=L=null,b=c,H=c=0,w=null,C=p.next();b!==null&&!C.done;H++,C=p.next()){b.index>H?(w=b,b=null):w=b.sibling;var V=h(m,b,C.value,E);if(V===null){b===null&&(b=w);break}e&&b&&V.alternate===null&&n(m,b),c=o(V,c,H),R===null?L=V:R.sibling=V,R=V,b=w}if(C.done)return t(m,b),fe&&Ct(m,H),L;if(b===null){for(;!C.done;H++,C=p.next())C=f(m,C.value,E),C!==null&&(c=o(C,c,H),R===null?L=C:R.sibling=C,R=C);return fe&&Ct(m,H),L}for(b=r(m,b);!C.done;H++,C=p.next())C=T(b,m,H,C.value,E),C!==null&&(e&&C.alternate!==null&&b.delete(C.key===null?H:C.key),c=o(C,c,H),R===null?L=C:R.sibling=C,R=C);return e&&b.forEach(function(U){return n(m,U)}),fe&&Ct(m,H),L}function x(m,c,p,E){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Yi:e:{for(var L=p.key,R=c;R!==null;){if(R.key===L){if(L=p.type,L===Zt){if(R.tag===7){t(m,R.sibling),c=i(R,p.props.children),c.return=m,m=c;break e}}else if(R.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===tt&&Rd(L)===R.type){t(m,R.sibling),c=i(R,p.props),c.ref=Nr(m,R,p),c.return=m,m=c;break e}t(m,R);break}else n(m,R);R=R.sibling}p.type===Zt?(c=It(p.props.children,m.mode,E,p.key),c.return=m,m=c):(E=Po(p.type,p.key,p.props,null,m.mode,E),E.ref=Nr(m,c,p),E.return=m,m=E)}return a(m);case qt:e:{for(R=p.key;c!==null;){if(c.key===R)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(m,c.sibling),c=i(c,p.children||[]),c.return=m,m=c;break e}else{t(m,c);break}else n(m,c);c=c.sibling}c=is(p,m.mode,E),c.return=m,m=c}return a(m);case tt:return R=p._init,x(m,c,R(p._payload),E)}if(Xr(p))return g(m,c,p,E);if(_r(p))return v(m,c,p,E);so(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(m,c.sibling),c=i(c,p),c.return=m,m=c):(t(m,c),c=rs(p,m.mode,E),c.return=m,m=c),a(m)):t(m,c)}return x}var Er=Nf(!0),Gf=Nf(!1),Di={},An=Mt(Di),vi=Mt(Di),Ei=Mt(Di);function _t(e){if(e===Di)throw Error(A(174));return e}function Yl(e,n){switch(ae(Ei,n),ae(vi,e),ae(An,Di),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:As(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=As(n,e)}de(An),ae(An,n)}function br(){de(An),de(vi),de(Ei)}function jf(e){_t(Ei.current);var n=_t(An.current),t=As(n,e.type);n!==t&&(ae(vi,e),ae(An,t))}function Ql(e){vi.current===e&&(de(An),de(vi))}var pe=Mt(0);function Xo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qa=[];function ql(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var Ho=Kn.ReactCurrentDispatcher,qa=Kn.ReactCurrentBatchConfig,Nt=0,me=null,Le=null,xe=null,Jo=!1,ti=!1,bi=0,Rg=0;function Ae(){throw Error(A(321))}function Zl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Mn(e[t],n[t]))return!1;return!0}function eu(e,n,t,r,i,o){if(Nt=o,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ho.current=e===null||e.memoizedState===null?Ag:Dg,e=t(r,i),ti){o=0;do{if(ti=!1,bi=0,25<=o)throw Error(A(301));o+=1,xe=Le=null,n.updateQueue=null,Ho.current=kg,e=t(r,i)}while(ti)}if(Ho.current=Ko,n=Le!==null&&Le.next!==null,Nt=0,xe=Le=me=null,Jo=!1,n)throw Error(A(300));return e}function nu(){var e=bi!==0;return bi=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?me.memoizedState=xe=e:xe=xe.next=e,xe}function fn(){if(Le===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=xe===null?me.memoizedState:xe.next;if(n!==null)xe=n,Le=e;else{if(e===null)throw Error(A(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},xe===null?me.memoizedState=xe=e:xe=xe.next=e}return xe}function Mi(e,n){return typeof n=="function"?n(e):n}function Za(e){var n=fn(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((Nt&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,me.lanes|=d,Gt|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Mn(r,n.memoizedState)||(ze=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,me.lanes|=o,Gt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function es(e){var n=fn(),t=n.queue;if(t===null)throw Error(A(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Mn(o,n.memoizedState)||(ze=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function zf(){}function Uf(e,n){var t=me,r=fn(),i=n(),o=!Mn(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,tu($f.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,Li(9,Wf.bind(null,t,r,i,n),void 0,null),Re===null)throw Error(A(349));Nt&30||Bf(t,n,i)}return i}function Bf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=me.updateQueue,n===null?(n={lastEffect:null,stores:null},me.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Wf(e,n,t,r){n.value=t,n.getSnapshot=r,Xf(n)&&Jf(e)}function $f(e,n,t){return t(function(){Xf(n)&&Jf(e)})}function Xf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Mn(e,t)}catch{return!0}}function Jf(e){var n=Xn(e,1);n!==null&&bn(n,e,1,-1)}function wd(e){var n=wn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},n.queue=e,e=e.dispatch=Cg.bind(null,me,e),[n.memoizedState,e]}function Li(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=me.updateQueue,n===null?(n={lastEffect:null,stores:null},me.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Kf(){return fn().memoizedState}function So(e,n,t,r){var i=wn();me.flags|=e,i.memoizedState=Li(1|n,t,void 0,r===void 0?null:r)}function ca(e,n,t,r){var i=fn();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&Zl(r,a.deps)){i.memoizedState=Li(n,t,o,r);return}}me.flags|=e,i.memoizedState=Li(1|n,t,o,r)}function Pd(e,n){return So(8390656,8,e,n)}function tu(e,n){return ca(2048,8,e,n)}function Yf(e,n){return ca(4,2,e,n)}function Qf(e,n){return ca(4,4,e,n)}function qf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zf(e,n,t){return t=t!=null?t.concat([e]):null,ca(4,4,qf.bind(null,n,e),t)}function ru(){}function ep(e,n){var t=fn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Zl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function np(e,n){var t=fn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Zl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function tp(e,n,t){return Nt&21?(Mn(t,n)||(t=of(),me.lanes|=t,Gt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=t)}function wg(e,n){var t=te;te=t!==0&&4>t?t:4,e(!0);var r=qa.transition;qa.transition={};try{e(!1),n()}finally{te=t,qa.transition=r}}function rp(){return fn().memoizedState}function Pg(e,n,t){var r=ht(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ip(e))op(n,t);else if(t=Ff(e,n,t,r),t!==null){var i=Ve();bn(t,e,r,i),ap(t,n,r)}}function Cg(e,n,t){var r=ht(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ip(e))op(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,s=o(a,t);if(i.hasEagerState=!0,i.eagerState=s,Mn(s,a)){var l=n.interleaved;l===null?(i.next=i,Jl(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=Ff(e,n,i,r),t!==null&&(i=Ve(),bn(t,e,r,i),ap(t,n,r))}}function ip(e){var n=e.alternate;return e===me||n!==null&&n===me}function op(e,n){ti=Jo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ap(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,_l(e,t)}}var Ko={readContext:cn,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Ag={readContext:cn,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:Pd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,So(4194308,4,qf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return So(4194308,4,e,n)},useInsertionEffect:function(e,n){return So(4,2,e,n)},useMemo:function(e,n){var t=wn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=wn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Pg.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:wd,useDebugValue:ru,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=wd(!1),n=e[0];return e=wg.bind(null,e[1]),wn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=me,i=wn();if(fe){if(t===void 0)throw Error(A(407));t=t()}else{if(t=n(),Re===null)throw Error(A(349));Nt&30||Bf(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Pd($f.bind(null,r,o,e),[e]),r.flags|=2048,Li(9,Wf.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=wn(),n=Re.identifierPrefix;if(fe){var t=Un,r=zn;t=(r&~(1<<32-En(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=bi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Rg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Dg={readContext:cn,useCallback:ep,useContext:cn,useEffect:tu,useImperativeHandle:Zf,useInsertionEffect:Yf,useLayoutEffect:Qf,useMemo:np,useReducer:Za,useRef:Kf,useState:function(){return Za(Mi)},useDebugValue:ru,useDeferredValue:function(e){var n=fn();return tp(n,Le.memoizedState,e)},useTransition:function(){var e=Za(Mi)[0],n=fn().memoizedState;return[e,n]},useMutableSource:zf,useSyncExternalStore:Uf,useId:rp,unstable_isNewReconciler:!1},kg={readContext:cn,useCallback:ep,useContext:cn,useEffect:tu,useImperativeHandle:Zf,useInsertionEffect:Yf,useLayoutEffect:Qf,useMemo:np,useReducer:es,useRef:Kf,useState:function(){return es(Mi)},useDebugValue:ru,useDeferredValue:function(e){var n=fn();return Le===null?n.memoizedState=e:tp(n,Le.memoizedState,e)},useTransition:function(){var e=es(Mi)[0],n=fn().memoizedState;return[e,n]},useMutableSource:zf,useSyncExternalStore:Uf,useId:rp,unstable_isNewReconciler:!1};function Mr(e,n){try{var t="",r=n;do t+=sh(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function ns(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function el(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _g=typeof WeakMap=="function"?WeakMap:Map;function sp(e,n,t){t=Bn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Qo||(Qo=!0,dl=r),el(e,n)},t}function lp(e,n,t){t=Bn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){el(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){el(e,n),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Cd(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _g;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Jg.bind(null,e,n,t),n.then(e,e))}function Ad(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Dd(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Bn(-1,1),n.tag=2,pt(t,n,1))),t.lanes|=1),e)}var Fg=Kn.ReactCurrentOwner,ze=!1;function Oe(e,n,t,r){n.child=e===null?Gf(n,null,t,r):Er(n,e.child,t,r)}function kd(e,n,t,r,i){t=t.render;var o=n.ref;return hr(n,i),r=eu(e,n,t,r,o,i),t=nu(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Jn(e,n,i)):(fe&&t&&zl(n),n.flags|=1,Oe(e,n,r,i),n.child)}function _d(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!cu(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,up(e,n,o,r,i)):(e=Po(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:hi,t(a,r)&&e.ref===n.ref)return Jn(e,n,i)}return n.flags|=1,e=gt(o,r),e.ref=n.ref,e.return=n,n.child=e}function up(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(hi(o,r)&&e.ref===n.ref)if(ze=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return n.lanes=e.lanes,Jn(e,n,i)}return nl(e,n,t,r,i)}function dp(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(ur,$e),$e|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(ur,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,ae(ur,$e),$e|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,ae(ur,$e),$e|=r;return Oe(e,n,i,t),n.child}function cp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function nl(e,n,t,r,i){var o=Be(t)?Ot:Fe.current;return o=yr(n,o),hr(n,i),t=eu(e,n,t,r,o,i),r=nu(),e!==null&&!ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Jn(e,n,i)):(fe&&r&&zl(n),n.flags|=1,Oe(e,n,t,i),n.child)}function Fd(e,n,t,r,i){if(Be(t)){var o=!0;jo(n)}else o=!1;if(hr(n,i),n.stateNode===null)xo(e,n),Vf(n,t,r),Zs(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=Be(t)?Ot:Fe.current,u=yr(n,u));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&xd(n,a,r,u),rt=!1;var h=n.memoizedState;a.state=h,$o(n,r,a,i),l=n.memoizedState,s!==r||h!==l||Ue.current||rt?(typeof d=="function"&&(qs(n,t,d,r),l=n.memoizedState),(s=rt||Sd(n,t,s,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,If(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:gn(n.type,s),a.props=u,f=n.pendingProps,h=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=Be(t)?Ot:Fe.current,l=yr(n,l));var T=t.getDerivedStateFromProps;(d=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&xd(n,a,r,l),rt=!1,h=n.memoizedState,a.state=h,$o(n,r,a,i);var g=n.memoizedState;s!==f||h!==g||Ue.current||rt?(typeof T=="function"&&(qs(n,t,T,r),g=n.memoizedState),(u=rt||Sd(n,t,u,r,h,g,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return tl(e,n,t,r,o,i)}function tl(e,n,t,r,i,o){cp(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&Ed(n,t,!1),Jn(e,n,o);r=n.stateNode,Fg.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Er(n,e.child,null,o),n.child=Er(n,null,s,o)):Oe(e,n,s,o),n.memoizedState=r.state,i&&Ed(n,t,!0),n.child}function fp(e){var n=e.stateNode;n.pendingContext?vd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&vd(e,n.context,!1),Yl(e,n.containerInfo)}function Id(e,n,t,r,i){return vr(),Bl(i),n.flags|=256,Oe(e,n,t,r),n.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function il(e){return{baseLanes:e,cachePool:null,transitions:null}}function pp(e,n,t){var r=n.pendingProps,i=pe.current,o=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(pe,i&1),e===null)return Ys(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ma(a,r,0,null),e=It(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=il(t),n.memoizedState=rl,e):iu(n,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ig(e,n,a,r,s,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=gt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=gt(s,o):(o=It(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?il(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=rl,r}return o=e.child,e=o.sibling,r=gt(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function iu(e,n){return n=ma({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function lo(e,n,t,r){return r!==null&&Bl(r),Er(n,e.child,null,t),e=iu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ig(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=ns(Error(A(422))),lo(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=ma({mode:"visible",children:r.children},i,0,null),o=It(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&Er(n,e.child,null,a),n.child.memoizedState=il(a),n.memoizedState=rl,o);if(!(n.mode&1))return lo(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(A(419)),r=ns(o,r,void 0),lo(e,n,a,r)}if(s=(a&e.childLanes)!==0,ze||s){if(r=Re,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xn(e,i),bn(r,e,i,-1))}return du(),r=ns(Error(A(421))),lo(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Kg.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Ke=ft(i.nextSibling),Qe=n,fe=!0,vn=null,e!==null&&(an[sn++]=zn,an[sn++]=Un,an[sn++]=Vt,zn=e.id,Un=e.overflow,Vt=n),n=iu(n,r.children),n.flags|=4096,n)}function Od(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Qs(e.return,n,t)}function ts(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function mp(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(Oe(e,n,r.children,t),r=pe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,t,n);else if(e.tag===19)Od(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(pe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Xo(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ts(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ts(n,!0,t,null,o);break;case"together":ts(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(A(153));if(n.child!==null){for(e=n.child,t=gt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Og(e,n,t){switch(n.tag){case 3:fp(n),vr();break;case 5:jf(n);break;case 1:Be(n.type)&&jo(n);break;case 4:Yl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ae(Bo,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),n.flags|=128,null):t&n.child.childLanes?pp(e,n,t):(ae(pe,pe.current&1),e=Jn(e,n,t),e!==null?e.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return n.lanes=0,dp(e,n,t)}return Jn(e,n,t)}var hp,ol,gp,Tp;hp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ol=function(){};gp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,_t(An.current);var o=null;switch(t){case"input":i=Rs(e,i),r=Rs(e,r),o=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),o=[];break;case"textarea":i=Cs(e,i),r=Cs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=No)}Ds(t,r);var a;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(li.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(o||(o=[]),o.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(li.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Tp=function(e,n,t,r){t!==r&&(n.flags|=4)};function Gr(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Vg(e,n,t){var r=n.pendingProps;switch(Ul(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(n),null;case 1:return Be(n.type)&&Go(),De(n),null;case 3:return r=n.stateNode,br(),de(Ue),de(Fe),ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,vn!==null&&(pl(vn),vn=null))),ol(e,n),De(n),null;case 5:Ql(n);var i=_t(Ei.current);if(t=n.type,e!==null&&n.stateNode!=null)gp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(A(166));return De(n),null}if(e=_t(An.current),ao(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Pn]=n,r[yi]=o,e=(n.mode&1)!==0,t){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)le(Kr[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":$u(r,o),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},le("invalid",r);break;case"textarea":Ju(r,o),le("invalid",r)}Ds(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&oo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&oo(r.textContent,s,e),i=["children",""+s]):li.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&le("scroll",r)}switch(t){case"input":Qi(r),Xu(r,o,!0);break;case"textarea":Qi(r),Ku(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=No)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Pn]=n,e[yi]=r,hp(e,n,!1,!1),n.stateNode=e;e:{switch(a=ks(t,r),t){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)le(Kr[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":$u(e,r),i=Rs(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),le("invalid",e);break;case"textarea":Ju(e,r),i=Cs(e,r),le("invalid",e);break;default:i=r}Ds(t,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?$c(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bc(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ui(e,l):typeof l=="number"&&ui(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(li.hasOwnProperty(o)?l!=null&&o==="onScroll"&&le("scroll",e):l!=null&&wl(e,o,l,a))}switch(t){case"input":Qi(e),Xu(e,r,!1);break;case"textarea":Qi(e),Ku(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=No)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return De(n),null;case 6:if(e&&n.stateNode!=null)Tp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(A(166));if(t=_t(Ei.current),_t(An.current),ao(n)){if(r=n.stateNode,t=n.memoizedProps,r[Pn]=n,(o=r.nodeValue!==t)&&(e=Qe,e!==null))switch(e.tag){case 3:oo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oo(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Pn]=n,n.stateNode=r}return De(n),null;case 13:if(de(pe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Ke!==null&&n.mode&1&&!(n.flags&128))_f(),vr(),n.flags|=98560,o=!1;else if(o=ao(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Pn]=n}else vr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;De(n),o=!1}else vn!==null&&(pl(vn),vn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||pe.current&1?Se===0&&(Se=3):du())),n.updateQueue!==null&&(n.flags|=4),De(n),null);case 4:return br(),ol(e,n),e===null&&gi(n.stateNode.containerInfo),De(n),null;case 10:return Xl(n.type._context),De(n),null;case 17:return Be(n.type)&&Go(),De(n),null;case 19:if(de(pe),o=n.memoizedState,o===null)return De(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)Gr(o,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Xo(e),a!==null){for(n.flags|=128,Gr(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(pe,pe.current&1|2),n.child}e=e.sibling}o.tail!==null&&ye()>Lr&&(n.flags|=128,r=!0,Gr(o,!1),n.lanes=4194304)}else{if(!r)if(e=Xo(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!fe)return De(n),null}else 2*ye()-o.renderingStartTime>Lr&&t!==1073741824&&(n.flags|=128,r=!0,Gr(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ye(),n.sibling=null,t=pe.current,ae(pe,r?t&1|2:t&1),n):(De(n),null);case 22:case 23:return uu(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?$e&1073741824&&(De(n),n.subtreeFlags&6&&(n.flags|=8192)):De(n),null;case 24:return null;case 25:return null}throw Error(A(156,n.tag))}function Ng(e,n){switch(Ul(n),n.tag){case 1:return Be(n.type)&&Go(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return br(),de(Ue),de(Fe),ql(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ql(n),null;case 13:if(de(pe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(A(340));vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return de(pe),null;case 4:return br(),null;case 10:return Xl(n.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var uo=!1,_e=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,G=null;function lr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Te(e,n,r)}else t.current=null}function al(e,n,t){try{t()}catch(r){Te(e,n,r)}}var Vd=!1;function jg(e,n){if(Us=Io,e=bf(),jl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,d=0,f=e,h=null;n:for(;;){for(var T;f!==t||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(T=f.firstChild)!==null;)h=f,f=T;for(;;){if(f===e)break n;if(h===t&&++u===i&&(s=a),h===o&&++d===r&&(l=a),(T=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=T}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bs={focusedElem:e,selectionRange:t},Io=!1,G=n;G!==null;)if(n=G,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,G=e;else for(;G!==null;){n=G;try{var g=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,m=n.stateNode,c=m.getSnapshotBeforeUpdate(n.elementType===n.type?v:gn(n.type,v),x);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){Te(n,n.return,E)}if(e=n.sibling,e!==null){e.return=n.return,G=e;break}G=n.return}return g=Vd,Vd=!1,g}function ri(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&al(n,t,o)}i=i.next}while(i!==r)}}function fa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function sl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function yp(e){var n=e.alternate;n!==null&&(e.alternate=null,yp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Pn],delete n[yi],delete n[Xs],delete n[Lg],delete n[Hg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function Nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=No));else if(r!==4&&(e=e.child,e!==null))for(ll(e,n,t),e=e.sibling;e!==null;)ll(e,n,t),e=e.sibling}function ul(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ul(e,n,t),e=e.sibling;e!==null;)ul(e,n,t),e=e.sibling}var we=null,yn=!1;function et(e,n,t){for(t=t.child;t!==null;)Ep(e,n,t),t=t.sibling}function Ep(e,n,t){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(ia,t)}catch{}switch(t.tag){case 5:_e||lr(t,n);case 6:var r=we,i=yn;we=null,et(e,n,t),we=r,yn=i,we!==null&&(yn?(e=we,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):we.removeChild(t.stateNode));break;case 18:we!==null&&(yn?(e=we,t=t.stateNode,e.nodeType===8?Ka(e.parentNode,t):e.nodeType===1&&Ka(e,t),pi(e)):Ka(we,t.stateNode));break;case 4:r=we,i=yn,we=t.stateNode.containerInfo,yn=!0,et(e,n,t),we=r,yn=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&al(t,n,a),i=i.next}while(i!==r)}et(e,n,t);break;case 1:if(!_e&&(lr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Te(t,n,s)}et(e,n,t);break;case 21:et(e,n,t);break;case 22:t.mode&1?(_e=(r=_e)||t.memoizedState!==null,et(e,n,t),_e=r):et(e,n,t);break;default:et(e,n,t)}}function Gd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Gg),n.forEach(function(r){var i=Yg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function mn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,yn=!1;break e;case 3:we=s.stateNode.containerInfo,yn=!0;break e;case 4:we=s.stateNode.containerInfo,yn=!0;break e}s=s.return}if(we===null)throw Error(A(160));Ep(o,a,i),we=null,yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Te(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)bp(n,e),n=n.sibling}function bp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mn(n,e),Rn(e),r&4){try{ri(3,e,e.return),fa(3,e)}catch(v){Te(e,e.return,v)}try{ri(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:mn(n,e),Rn(e),r&512&&t!==null&&lr(t,t.return);break;case 5:if(mn(n,e),Rn(e),r&512&&t!==null&&lr(t,t.return),e.flags&32){var i=e.stateNode;try{ui(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&jc(i,o),ks(s,a);var u=ks(s,o);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?$c(i,f):d==="dangerouslySetInnerHTML"?Bc(i,f):d==="children"?ui(i,f):wl(i,d,f,u)}switch(s){case"input":ws(i,o);break;case"textarea":zc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?cr(i,!!o.multiple,T,!1):h!==!!o.multiple&&(o.defaultValue!=null?cr(i,!!o.multiple,o.defaultValue,!0):cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[yi]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(mn(n,e),Rn(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(mn(n,e),Rn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{pi(n.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:mn(n,e),Rn(e);break;case 13:mn(n,e),Rn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(su=ye())),r&4&&Gd(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(_e=(u=_e)||d,mn(n,e),_e=u):mn(n,e),Rn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(h=G,T=h.child,h.tag){case 0:case 11:case 14:case 15:ri(4,h,h.return);break;case 1:lr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,g.props=n.memoizedProps,g.state=n.memoizedState,g.componentWillUnmount()}catch(v){Te(r,t,v)}}break;case 5:lr(h,h.return);break;case 22:if(h.memoizedState!==null){zd(f);continue}}T!==null?(T.return=h,G=T):zd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Wc("display",a))}catch(v){Te(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Te(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mn(n,e),Rn(e),r&4&&Gd(e);break;case 21:break;default:mn(n,e),Rn(e)}}function Rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(vp(t)){var r=t;break e}t=t.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ui(i,""),r.flags&=-33);var o=Nd(e);ul(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Nd(e);ll(e,s,a);break;default:throw Error(A(161))}}catch(l){Te(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zg(e,n,t){G=e,Mp(e)}function Mp(e,n,t){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||uo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||_e;s=uo;var u=_e;if(uo=a,(_e=l)&&!u)for(G=i;G!==null;)a=G,l=a.child,a.tag===22&&a.memoizedState!==null?Ud(i):l!==null?(l.return=a,G=l):Ud(i);for(;o!==null;)G=o,Mp(o),o=o.sibling;G=i,uo=s,_e=u}jd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):jd(e)}}function jd(e){for(;G!==null;){var n=G;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:_e||fa(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!_e)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:gn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Hd(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Hd(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&pi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}_e||n.flags&512&&sl(n)}catch(h){Te(n,n.return,h)}}if(n===e){G=null;break}if(t=n.sibling,t!==null){t.return=n.return,G=t;break}G=n.return}}function zd(e){for(;G!==null;){var n=G;if(n===e){G=null;break}var t=n.sibling;if(t!==null){t.return=n.return,G=t;break}G=n.return}}function Ud(e){for(;G!==null;){var n=G;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fa(4,n)}catch(l){Te(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(l){Te(n,i,l)}}var o=n.return;try{sl(n)}catch(l){Te(n,o,l)}break;case 5:var a=n.return;try{sl(n)}catch(l){Te(n,a,l)}}}catch(l){Te(n,n.return,l)}if(n===e){G=null;break}var s=n.sibling;if(s!==null){s.return=n.return,G=s;break}G=n.return}}var Ug=Math.ceil,Yo=Kn.ReactCurrentDispatcher,ou=Kn.ReactCurrentOwner,dn=Kn.ReactCurrentBatchConfig,ee=0,Re=null,Ee=null,Pe=0,$e=0,ur=Mt(0),Se=0,Hi=null,Gt=0,pa=0,au=0,ii=null,je=null,su=0,Lr=1/0,Vn=null,Qo=!1,dl=null,mt=null,co=!1,st=null,qo=0,oi=0,cl=null,Ro=-1,wo=0;function Ve(){return ee&6?ye():Ro!==-1?Ro:Ro=ye()}function ht(e){return e.mode&1?ee&2&&Pe!==0?Pe&-Pe:xg.transition!==null?(wo===0&&(wo=of()),wo):(e=te,e!==0||(e=window.event,e=e===void 0?16:ff(e.type)),e):1}function bn(e,n,t,r){if(50<oi)throw oi=0,cl=null,Error(A(185));Pi(e,t,r),(!(ee&2)||e!==Re)&&(e===Re&&(!(ee&2)&&(pa|=t),Se===4&&ot(e,Pe)),We(e,r),t===1&&ee===0&&!(n.mode&1)&&(Lr=ye()+500,ua&&Lt()))}function We(e,n){var t=e.callbackNode;xh(e,n);var r=Fo(e,e===Re?Pe:0);if(r===0)t!==null&&qu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qu(t),n===1)e.tag===0?Sg(Bd.bind(null,e)):Af(Bd.bind(null,e)),bg(function(){!(ee&6)&&Lt()}),t=null;else{switch(af(r)){case 1:t=kl;break;case 4:t=tf;break;case 16:t=_o;break;case 536870912:t=rf;break;default:t=_o}t=Cp(t,Lp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Lp(e,n){if(Ro=-1,wo=0,ee&6)throw Error(A(327));var t=e.callbackNode;if(gr()&&e.callbackNode!==t)return null;var r=Fo(e,e===Re?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Zo(e,r);else{n=r;var i=ee;ee|=2;var o=Sp();(Re!==e||Pe!==n)&&(Vn=null,Lr=ye()+500,Ft(e,n));do try{$g();break}catch(s){Hp(e,s)}while(1);$l(),Yo.current=o,ee=i,Ee!==null?n=0:(Re=null,Pe=0,n=Se)}if(n!==0){if(n===2&&(i=Vs(e),i!==0&&(r=i,n=fl(e,i))),n===1)throw t=Hi,Ft(e,0),ot(e,r),We(e,ye()),t;if(n===6)ot(e,r);else{if(i=e.current.alternate,!(r&30)&&!Bg(i)&&(n=Zo(e,r),n===2&&(o=Vs(e),o!==0&&(r=o,n=fl(e,o))),n===1))throw t=Hi,Ft(e,0),ot(e,r),We(e,ye()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(A(345));case 2:At(e,je,Vn);break;case 3:if(ot(e,r),(r&130023424)===r&&(n=su+500-ye(),10<n)){if(Fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$s(At.bind(null,e,je,Vn),n);break}At(e,je,Vn);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-En(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ug(r/1960))-r,10<r){e.timeoutHandle=$s(At.bind(null,e,je,Vn),r);break}At(e,je,Vn);break;case 5:At(e,je,Vn);break;default:throw Error(A(329))}}}return We(e,ye()),e.callbackNode===t?Lp.bind(null,e):null}function fl(e,n){var t=ii;return e.current.memoizedState.isDehydrated&&(Ft(e,n).flags|=256),e=Zo(e,n),e!==2&&(n=je,je=t,n!==null&&pl(n)),e}function pl(e){je===null?je=e:je.push.apply(je,e)}function Bg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Mn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ot(e,n){for(n&=~au,n&=~pa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-En(n),r=1<<t;e[t]=-1,n&=~r}}function Bd(e){if(ee&6)throw Error(A(327));gr();var n=Fo(e,0);if(!(n&1))return We(e,ye()),null;var t=Zo(e,n);if(e.tag!==0&&t===2){var r=Vs(e);r!==0&&(n=r,t=fl(e,r))}if(t===1)throw t=Hi,Ft(e,0),ot(e,n),We(e,ye()),t;if(t===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,At(e,je,Vn),We(e,ye()),null}function lu(e,n){var t=ee;ee|=1;try{return e(n)}finally{ee=t,ee===0&&(Lr=ye()+500,ua&&Lt())}}function jt(e){st!==null&&st.tag===0&&!(ee&6)&&gr();var n=ee;ee|=1;var t=dn.transition,r=te;try{if(dn.transition=null,te=1,e)return e()}finally{te=r,dn.transition=t,ee=n,!(ee&6)&&Lt()}}function uu(){$e=ur.current,de(ur)}function Ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Eg(t)),Ee!==null)for(t=Ee.return;t!==null;){var r=t;switch(Ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:br(),de(Ue),de(Fe),ql();break;case 5:Ql(r);break;case 4:br();break;case 13:de(pe);break;case 19:de(pe);break;case 10:Xl(r.type._context);break;case 22:case 23:uu()}t=t.return}if(Re=e,Ee=e=gt(e.current,null),Pe=$e=n,Se=0,Hi=null,au=pa=Gt=0,je=ii=null,kt!==null){for(n=0;n<kt.length;n++)if(t=kt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}kt=null}return e}function Hp(e,n){do{var t=Ee;try{if($l(),Ho.current=Ko,Jo){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(Nt=0,xe=Le=me=null,ti=!1,bi=0,ou.current=null,t===null||t.return===null){Se=1,Hi=n,Ee=null;break}e:{var o=e,a=t.return,s=t,l=n;if(n=Pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=Ad(a);if(T!==null){T.flags&=-257,Dd(T,a,s,o,n),T.mode&1&&Cd(o,u,n),n=T,l=u;var g=n.updateQueue;if(g===null){var v=new Set;v.add(l),n.updateQueue=v}else g.add(l);break e}else{if(!(n&1)){Cd(o,u,n),du();break e}l=Error(A(426))}}else if(fe&&s.mode&1){var x=Ad(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Dd(x,a,s,o,n),Bl(Mr(l,s));break e}}o=l=Mr(l,s),Se!==4&&(Se=2),ii===null?ii=[o]:ii.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=sp(o,l,n);Ld(o,m);break e;case 1:s=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mt===null||!mt.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var E=lp(o,s,n);Ld(o,E);break e}}o=o.return}while(o!==null)}Rp(t)}catch(L){n=L,Ee===t&&t!==null&&(Ee=t=t.return);continue}break}while(1)}function Sp(){var e=Yo.current;return Yo.current=Ko,e===null?Ko:e}function du(){(Se===0||Se===3||Se===2)&&(Se=4),Re===null||!(Gt&268435455)&&!(pa&268435455)||ot(Re,Pe)}function Zo(e,n){var t=ee;ee|=2;var r=Sp();(Re!==e||Pe!==n)&&(Vn=null,Ft(e,n));do try{Wg();break}catch(i){Hp(e,i)}while(1);if($l(),ee=t,Yo.current=r,Ee!==null)throw Error(A(261));return Re=null,Pe=0,Se}function Wg(){for(;Ee!==null;)xp(Ee)}function $g(){for(;Ee!==null&&!Th();)xp(Ee)}function xp(e){var n=Pp(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?Rp(e):Ee=n,ou.current=null}function Rp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ng(t,n),t!==null){t.flags&=32767,Ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,Ee=null;return}}else if(t=Vg(t,n,$e),t!==null){Ee=t;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);Se===0&&(Se=5)}function At(e,n,t){var r=te,i=dn.transition;try{dn.transition=null,te=1,Xg(e,n,t,r)}finally{dn.transition=i,te=r}return null}function Xg(e,n,t,r){do gr();while(st!==null);if(ee&6)throw Error(A(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Rh(e,o),e===Re&&(Ee=Re=null,Pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||co||(co=!0,Cp(_o,function(){return gr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=dn.transition,dn.transition=null;var a=te;te=1;var s=ee;ee|=4,ou.current=null,jg(e,t),bp(t,e),pg(Bs),Io=!!Us,Bs=Us=null,e.current=t,zg(t),yh(),ee=s,te=a,dn.transition=o}else e.current=t;if(co&&(co=!1,st=e,qo=i),o=e.pendingLanes,o===0&&(mt=null),bh(t.stateNode),We(e,ye()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qo)throw Qo=!1,e=dl,dl=null,e;return qo&1&&e.tag!==0&&gr(),o=e.pendingLanes,o&1?e===cl?oi++:(oi=0,cl=e):oi=0,Lt(),null}function gr(){if(st!==null){var e=af(qo),n=dn.transition,t=te;try{if(dn.transition=null,te=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,qo=0,ee&6)throw Error(A(331));var i=ee;for(ee|=4,G=e.current;G!==null;){var o=G,a=o.child;if(G.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(G=u;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:ri(8,d,o)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var h=d.sibling,T=d.return;if(yp(d),d===u){G=null;break}if(h!==null){h.return=T,G=h;break}G=T}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}G=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,G=a;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ri(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,G=m;break e}G=o.return}}var c=e.current;for(G=c;G!==null;){a=G;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,G=p;else e:for(a=c;G!==null;){if(s=G,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fa(9,s)}}catch(L){Te(s,s.return,L)}if(s===a){G=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,G=E;break e}G=s.return}}if(ee=i,Lt(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(ia,e)}catch{}r=!0}return r}finally{te=t,dn.transition=n}}return!1}function Wd(e,n,t){n=Mr(t,n),n=sp(e,n,1),e=pt(e,n,1),n=Ve(),e!==null&&(Pi(e,1,n),We(e,n))}function Te(e,n,t){if(e.tag===3)Wd(e,e,t);else for(;n!==null;){if(n.tag===3){Wd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=Mr(t,e),e=lp(n,e,1),n=pt(n,e,1),e=Ve(),n!==null&&(Pi(n,1,e),We(n,e));break}}n=n.return}}function Jg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ve(),e.pingedLanes|=e.suspendedLanes&t,Re===e&&(Pe&t)===t&&(Se===4||Se===3&&(Pe&130023424)===Pe&&500>ye()-su?Ft(e,0):au|=t),We(e,n)}function wp(e,n){n===0&&(e.mode&1?(n=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):n=1);var t=Ve();e=Xn(e,n),e!==null&&(Pi(e,n,t),We(e,t))}function Kg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),wp(e,t)}function Yg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(n),wp(e,t)}var Pp;Pp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ue.current)ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ze=!1,Og(e,n,t);ze=!!(e.flags&131072)}else ze=!1,fe&&n.flags&1048576&&Df(n,Uo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;xo(e,n),e=n.pendingProps;var i=yr(n,Fe.current);hr(n,t),i=eu(null,n,r,e,i,t);var o=nu();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(r)?(o=!0,jo(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kl(n),i.updater=da,n.stateNode=i,i._reactInternals=n,Zs(n,r,e,t),n=tl(null,n,r,!0,o,t)):(n.tag=0,fe&&o&&zl(n),Oe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(xo(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=qg(r),e=gn(r,e),i){case 0:n=nl(null,n,r,e,t);break e;case 1:n=Fd(null,n,r,e,t);break e;case 11:n=kd(null,n,r,e,t);break e;case 14:n=_d(null,n,r,gn(r.type,e),t);break e}throw Error(A(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),nl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),Fd(e,n,r,i,t);case 3:e:{if(fp(n),e===null)throw Error(A(387));r=n.pendingProps,o=n.memoizedState,i=o.element,If(e,n),$o(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Mr(Error(A(423)),n),n=Id(e,n,r,t,i);break e}else if(r!==i){i=Mr(Error(A(424)),n),n=Id(e,n,r,t,i);break e}else for(Ke=ft(n.stateNode.containerInfo.firstChild),Qe=n,fe=!0,vn=null,t=Gf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vr(),r===i){n=Jn(e,n,t);break e}Oe(e,n,r,t)}n=n.child}return n;case 5:return jf(n),e===null&&Ys(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ws(r,i)?a=null:o!==null&&Ws(r,o)&&(n.flags|=32),cp(e,n),Oe(e,n,a,t),n.child;case 6:return e===null&&Ys(n),null;case 13:return pp(e,n,t);case 4:return Yl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Er(n,null,r,t):Oe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),kd(e,n,r,i,t);case 7:return Oe(e,n,n.pendingProps,t),n.child;case 8:return Oe(e,n,n.pendingProps.children,t),n.child;case 12:return Oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,ae(Bo,r._currentValue),r._currentValue=a,o!==null)if(Mn(o.value,a)){if(o.children===i.children&&!Ue.current){n=Jn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Bn(-1,t&-t),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Qs(o.return,t,n),s.lanes|=t;break}l=l.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),Qs(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Oe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,hr(n,t),i=cn(i),r=r(i),n.flags|=1,Oe(e,n,r,t),n.child;case 14:return r=n.type,i=gn(r,n.pendingProps),i=gn(r.type,i),_d(e,n,r,i,t);case 15:return up(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),xo(e,n),n.tag=1,Be(r)?(e=!0,jo(n)):e=!1,hr(n,t),Vf(n,r,i),Zs(n,r,i,t),tl(null,n,r,!0,e,t);case 19:return mp(e,n,t);case 22:return dp(e,n,t)}throw Error(A(156,n.tag))};function Cp(e,n){return nf(e,n)}function Qg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,t,r){return new Qg(e,n,t,r)}function cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qg(e){if(typeof e=="function")return cu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cl)return 11;if(e===Al)return 14}return 2}function gt(e,n){var t=e.alternate;return t===null?(t=un(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Po(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")cu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return It(t.children,i,o,n);case Pl:a=8,i|=8;break;case Ls:return e=un(12,t,n,i|2),e.elementType=Ls,e.lanes=o,e;case Hs:return e=un(13,t,n,i),e.elementType=Hs,e.lanes=o,e;case Ss:return e=un(19,t,n,i),e.elementType=Ss,e.lanes=o,e;case Vc:return ma(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ic:a=10;break e;case Oc:a=9;break e;case Cl:a=11;break e;case Al:a=14;break e;case tt:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return n=un(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function It(e,n,t,r){return e=un(7,e,r,n),e.lanes=t,e}function ma(e,n,t,r){return e=un(22,e,r,n),e.elementType=Vc,e.lanes=t,e.stateNode={isHidden:!1},e}function rs(e,n,t){return e=un(6,e,null,n),e.lanes=t,e}function is(e,n,t){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Va(0),this.expirationTimes=Va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Va(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fu(e,n,t,r,i,o,a,s,l){return e=new Zg(e,n,t,s,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=un(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(o),e}function eT(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ap(e){if(!e)return vt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(A(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(A(171))}if(e.tag===1){var t=e.type;if(Be(t))return Cf(e,t,n)}return n}function Dp(e,n,t,r,i,o,a,s,l){return e=fu(t,r,!0,e,i,o,a,s,l),e.context=Ap(null),t=e.current,r=Ve(),i=ht(t),o=Bn(r,i),o.callback=n??null,pt(t,o,i),e.current.lanes=i,Pi(e,i,r),We(e,r),e}function ha(e,n,t,r){var i=n.current,o=Ve(),a=ht(i);return t=Ap(t),n.context===null?n.context=t:n.pendingContext=t,n=Bn(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=pt(i,n,a),e!==null&&(bn(e,i,a,o),Lo(e,i,a)),a}function ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function pu(e,n){$d(e,n),(e=e.alternate)&&$d(e,n)}function nT(){return null}var kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}ga.prototype.render=mu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(A(409));ha(e,n,null,null)};ga.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jt(function(){ha(null,e,null,null)}),n[$n]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var n=uf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<it.length&&n!==0&&n<it[t].priority;t++);it.splice(t,0,e),t===0&&cf(e)}};function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function tT(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ea(a);o.call(u)}}var a=Dp(n,r,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=a,e[$n]=a.current,gi(e.nodeType===8?e.parentNode:e),jt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ea(l);s.call(u)}}var l=fu(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=l,e[$n]=l.current,gi(e.nodeType===8?e.parentNode:e),jt(function(){ha(n,l,t,r)}),l}function ya(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=ea(a);s.call(l)}}ha(n,a,e,i)}else a=tT(t,n,e,i,r);return ea(a)}sf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Jr(n.pendingLanes);t!==0&&(_l(n,t|1),We(n,ye()),!(ee&6)&&(Lr=ye()+500,Lt()))}break;case 13:jt(function(){var r=Xn(e,1);if(r!==null){var i=Ve();bn(r,e,1,i)}}),pu(e,1)}};Fl=function(e){if(e.tag===13){var n=Xn(e,134217728);if(n!==null){var t=Ve();bn(n,e,134217728,t)}pu(e,134217728)}};lf=function(e){if(e.tag===13){var n=ht(e),t=Xn(e,n);if(t!==null){var r=Ve();bn(t,e,n,r)}pu(e,n)}};uf=function(){return te};df=function(e,n){var t=te;try{return te=e,n()}finally{te=t}};Fs=function(e,n,t){switch(n){case"input":if(ws(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=la(r);if(!i)throw Error(A(90));Gc(r),ws(r,i)}}}break;case"textarea":zc(e,t);break;case"select":n=t.value,n!=null&&cr(e,!!t.multiple,n,!1)}};Kc=lu;Yc=jt;var rT={usingClientEntryPoint:!1,Events:[Ai,rr,la,Xc,Jc,lu]},jr={findFiberByHostInstance:Dt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iT={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zc(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||nT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{ia=fo.inject(iT),Cn=fo}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT;en.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(n))throw Error(A(200));return eT(e,n,null,t)};en.createRoot=function(e,n){if(!hu(e))throw Error(A(299));var t=!1,r="",i=kp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=fu(e,1,!1,null,null,t,!1,r,i),e[$n]=n.current,gi(e.nodeType===8?e.parentNode:e),new mu(n)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Zc(n),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return jt(e)};en.hydrate=function(e,n,t){if(!Ta(n))throw Error(A(200));return ya(null,e,n,!0,t)};en.hydrateRoot=function(e,n,t){if(!hu(e))throw Error(A(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=kp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Dp(n,null,e,1,t??null,i,!1,o,a),e[$n]=n.current,gi(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ga(n)};en.render=function(e,n,t){if(!Ta(n))throw Error(A(200));return ya(null,e,n,!1,t)};en.unmountComponentAtNode=function(e){if(!Ta(e))throw Error(A(40));return e._reactRootContainer?(jt(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};en.unstable_batchedUpdates=lu;en.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ta(t))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return ya(e,n,t,!1,r)};en.version="18.2.0-next-9e3b772b8-20220608";function _p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_p)}catch(e){console.error(e)}}_p(),Ac.exports=en;var oT=Ac.exports,Jd=oT;bs.createRoot=Jd.createRoot,bs.hydrateRoot=Jd.hydrateRoot;function aT(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Kd(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Yd(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Kd(Object(t),!0).forEach(function(r){aT(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Kd(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function sT(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function lT(e,n){if(e==null)return{};var t=sT(e,n),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function uT(e,n){return dT(e)||cT(e,n)||fT(e,n)||pT()}function dT(e){if(Array.isArray(e))return e}function cT(e,n){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],r=!0,i=!1,o=void 0;try{for(var a=e[Symbol.iterator](),s;!(r=(s=a.next()).done)&&(t.push(s.value),!(n&&t.length===n));r=!0);}catch(l){i=!0,o=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw o}}return t}}function fT(e,n){if(e){if(typeof e=="string")return Qd(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Qd(e,n)}}function Qd(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function pT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mT(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function qd(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Zd(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?qd(Object(t),!0).forEach(function(r){mT(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qd(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function hT(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(r){return n.reduceRight(function(i,o){return o(i)},r)}}function Yr(e){return function n(){for(var t=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return n.apply(t,[].concat(i,s))}}}function na(e){return{}.toString.call(e).includes("Object")}function gT(e){return!Object.keys(e).length}function Si(e){return typeof e=="function"}function TT(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function yT(e,n){return na(n)||Tt("changeType"),Object.keys(n).some(function(t){return!TT(e,t)})&&Tt("changeField"),n}function vT(e){Si(e)||Tt("selectorType")}function ET(e){Si(e)||na(e)||Tt("handlerType"),na(e)&&Object.values(e).some(function(n){return!Si(n)})&&Tt("handlersType")}function bT(e){e||Tt("initialIsRequired"),na(e)||Tt("initialType"),gT(e)&&Tt("initialContent")}function MT(e,n){throw new Error(e[n]||e.default)}var LT={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Tt=Yr(MT)(LT),po={changes:yT,selector:vT,handler:ET,initial:bT};function HT(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};po.initial(e),po.handler(n);var t={current:e},r=Yr(RT)(t,n),i=Yr(xT)(t),o=Yr(po.changes)(e),a=Yr(ST)(t);function s(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return po.selector(u),u(t.current)}function l(u){hT(r,i,o,a)(u)}return[s,l]}function ST(e,n){return Si(n)?n(e.current):n}function xT(e,n){return e.current=Zd(Zd({},e.current),n),n}function RT(e,n,t){return Si(n)?n(e.current):Object.keys(t).forEach(function(r){var i;return(i=n[r])===null||i===void 0?void 0:i.call(n,e.current[r])}),t}var wT={create:HT},PT={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function CT(e){return function n(){for(var t=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return n.apply(t,[].concat(i,s))}}}function AT(e){return{}.toString.call(e).includes("Object")}function DT(e){return e||ec("configIsRequired"),AT(e)||ec("configType"),e.urls?(kT(),{paths:{vs:e.urls.monacoBase}}):e}function kT(){console.warn(Fp.deprecation)}function _T(e,n){throw new Error(e[n]||e.default)}var Fp={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},ec=CT(_T)(Fp),FT={config:DT},IT=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return function(i){return t.reduceRight(function(o,a){return a(o)},i)}};function Ip(e,n){return Object.keys(n).forEach(function(t){n[t]instanceof Object&&e[t]&&Object.assign(n[t],Ip(e[t],n[t]))}),Yd(Yd({},e),n)}var OT={type:"cancelation",msg:"operation is manually canceled"};function os(e){var n=!1,t=new Promise(function(r,i){e.then(function(o){return n?i(OT):r(o)}),e.catch(i)});return t.cancel=function(){return n=!0},t}var VT=wT.create({config:PT,isInitialized:!1,resolve:null,reject:null,monaco:null}),Op=uT(VT,2),ki=Op[0],va=Op[1];function NT(e){var n=FT.config(e),t=n.monaco,r=lT(n,["monaco"]);va(function(i){return{config:Ip(i.config,r),monaco:t}})}function GT(){var e=ki(function(n){var t=n.monaco,r=n.isInitialized,i=n.resolve;return{monaco:t,isInitialized:r,resolve:i}});if(!e.isInitialized){if(va({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),os(as);if(window.monaco&&window.monaco.editor)return Vp(window.monaco),e.resolve(window.monaco),os(as);IT(jT,UT)(BT)}return os(as)}function jT(e){return document.body.appendChild(e)}function zT(e){var n=document.createElement("script");return e&&(n.src=e),n}function UT(e){var n=ki(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),t=zT("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function BT(){var e=ki(function(t){var r=t.config,i=t.resolve,o=t.reject;return{config:r,resolve:i,reject:o}}),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],function(t){Vp(t),e.resolve(t)},function(t){e.reject(t)})}function Vp(e){ki().monaco||va({monaco:e})}function WT(){return ki(function(e){var n=e.monaco;return n})}var as=new Promise(function(e,n){return va({resolve:e,reject:n})}),gu={config:NT,init:GT,__getMonacoInstance:WT},$T={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ss=$T,XT={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},JT=XT;function KT({children:e}){return ke.createElement("div",{style:JT.container},e)}var YT=KT,QT=YT;function qT({width:e,height:n,isEditorReady:t,loading:r,_ref:i,className:o,wrapperProps:a}){return ke.createElement("section",{style:{...ss.wrapper,width:e,height:n},...a},!t&&ke.createElement(QT,null,r),ke.createElement("div",{ref:i,style:{...ss.fullWidth,...!t&&ss.hide},className:o}))}var ZT=qT,Np=S.memo(ZT);function ey(e){S.useEffect(e,[])}var Gp=ey;function ny(e,n,t=!0){let r=S.useRef(!0);S.useEffect(r.current||!t?()=>{r.current=!1}:e,n)}var Xe=ny;function ai(){}function dr(e,n,t,r){return ty(e,r)||ry(e,n,t,r)}function ty(e,n){return e.editor.getModel(jp(e,n))}function ry(e,n,t,r){return e.editor.createModel(n,t,r?jp(e,r):void 0)}function jp(e,n){return e.Uri.parse(n)}function iy({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:l=!1,theme:u="light",loading:d="Loading...",options:f={},height:h="100%",width:T="100%",className:g,wrapperProps:v={},beforeMount:x=ai,onMount:m=ai}){let[c,p]=S.useState(!1),[E,L]=S.useState(!0),R=S.useRef(null),b=S.useRef(null),H=S.useRef(null),w=S.useRef(m),C=S.useRef(x),V=S.useRef(!1);Gp(()=>{let F=gu.init();return F.then(z=>(b.current=z)&&L(!1)).catch(z=>(z==null?void 0:z.type)!=="cancelation"&&console.error("Monaco initialization: error:",z)),()=>R.current?_():F.cancel()}),Xe(()=>{if(R.current&&b.current){let F=R.current.getOriginalEditor(),z=dr(b.current,e||"",r||t||"text",o||"");z!==F.getModel()&&F.setModel(z)}},[o],c),Xe(()=>{if(R.current&&b.current){let F=R.current.getModifiedEditor(),z=dr(b.current,n||"",i||t||"text",a||"");z!==F.getModel()&&F.setModel(z)}},[a],c),Xe(()=>{let F=R.current.getModifiedEditor();F.getOption(b.current.editor.EditorOption.readOnly)?F.setValue(n||""):n!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[n],c),Xe(()=>{var F,z;(z=(F=R.current)==null?void 0:F.getModel())==null||z.original.setValue(e||"")},[e],c),Xe(()=>{let{original:F,modified:z}=R.current.getModel();b.current.editor.setModelLanguage(F,r||t||"text"),b.current.editor.setModelLanguage(z,i||t||"text")},[t,r,i],c),Xe(()=>{var F;(F=b.current)==null||F.editor.setTheme(u)},[u],c),Xe(()=>{var F;(F=R.current)==null||F.updateOptions(f)},[f],c);let U=S.useCallback(()=>{var W;if(!b.current)return;C.current(b.current);let F=dr(b.current,e||"",r||t||"text",o||""),z=dr(b.current,n||"",i||t||"text",a||"");(W=R.current)==null||W.setModel({original:F,modified:z})},[t,n,i,e,r,o,a]),K=S.useCallback(()=>{var F;!V.current&&H.current&&(R.current=b.current.editor.createDiffEditor(H.current,{automaticLayout:!0,...f}),U(),(F=b.current)==null||F.editor.setTheme(u),p(!0),V.current=!0)},[f,u,U]);S.useEffect(()=>{c&&w.current(R.current,b.current)},[c]),S.useEffect(()=>{!E&&!c&&K()},[E,c,K]);function _(){var z,W,P,I;let F=(z=R.current)==null?void 0:z.getModel();s||((W=F==null?void 0:F.original)==null||W.dispose()),l||((P=F==null?void 0:F.modified)==null||P.dispose()),(I=R.current)==null||I.dispose()}return ke.createElement(Np,{width:T,height:h,isEditorReady:c,loading:d,_ref:H,className:g,wrapperProps:v})}var oy=iy;S.memo(oy);function ay(e){let n=S.useRef();return S.useEffect(()=>{n.current=e},[e]),n.current}var sy=ay,mo=new Map;function ly({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:i,path:o,theme:a="light",line:s,loading:l="Loading...",options:u={},overrideServices:d={},saveViewState:f=!0,keepCurrentModel:h=!1,width:T="100%",height:g="100%",className:v,wrapperProps:x={},beforeMount:m=ai,onMount:c=ai,onChange:p,onValidate:E=ai}){let[L,R]=S.useState(!1),[b,H]=S.useState(!0),w=S.useRef(null),C=S.useRef(null),V=S.useRef(null),U=S.useRef(c),K=S.useRef(m),_=S.useRef(),F=S.useRef(r),z=sy(o),W=S.useRef(!1),P=S.useRef(!1);Gp(()=>{let k=gu.init();return k.then(N=>(w.current=N)&&H(!1)).catch(N=>(N==null?void 0:N.type)!=="cancelation"&&console.error("Monaco initialization: error:",N)),()=>C.current?j():k.cancel()}),Xe(()=>{var N,J,Z,Y;let k=dr(w.current,e||r||"",n||i||"",o||t||"");k!==((N=C.current)==null?void 0:N.getModel())&&(f&&mo.set(z,(J=C.current)==null?void 0:J.saveViewState()),(Z=C.current)==null||Z.setModel(k),f&&((Y=C.current)==null||Y.restoreViewState(mo.get(o))))},[o],L),Xe(()=>{var k;(k=C.current)==null||k.updateOptions(u)},[u],L),Xe(()=>{!C.current||r===void 0||(C.current.getOption(w.current.editor.EditorOption.readOnly)?C.current.setValue(r):r!==C.current.getValue()&&(P.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),C.current.pushUndoStop(),P.current=!1))},[r],L),Xe(()=>{var N,J;let k=(N=C.current)==null?void 0:N.getModel();k&&i&&((J=w.current)==null||J.editor.setModelLanguage(k,i))},[i],L),Xe(()=>{var k;s!==void 0&&((k=C.current)==null||k.revealLine(s))},[s],L),Xe(()=>{var k;(k=w.current)==null||k.editor.setTheme(a)},[a],L);let I=S.useCallback(()=>{var k;if(!(!V.current||!w.current)&&!W.current){K.current(w.current);let N=o||t,J=dr(w.current,r||e||"",n||i||"",N||"");C.current=(k=w.current)==null?void 0:k.editor.create(V.current,{model:J,automaticLayout:!0,...u},d),f&&C.current.restoreViewState(mo.get(N)),w.current.editor.setTheme(a),R(!0),W.current=!0}},[e,n,t,r,i,o,u,d,f,a]);S.useEffect(()=>{L&&U.current(C.current,w.current)},[L]),S.useEffect(()=>{!b&&!L&&I()},[b,L,I]),F.current=r,S.useEffect(()=>{var k,N;L&&p&&((k=_.current)==null||k.dispose(),_.current=(N=C.current)==null?void 0:N.onDidChangeModelContent(J=>{P.current||p(C.current.getValue(),J)}))},[L,p]),S.useEffect(()=>{if(L){let k=w.current.editor.onDidChangeMarkers(N=>{var Z;let J=(Z=C.current.getModel())==null?void 0:Z.uri;if(J&&N.find(Y=>Y.path===J.path)){let Y=w.current.editor.getModelMarkers({resource:J});E==null||E(Y)}});return()=>{k==null||k.dispose()}}return()=>{}},[L,E]);function j(){var k,N;(k=_.current)==null||k.dispose(),h?f&&mo.set(o,C.current.saveViewState()):(N=C.current.getModel())==null||N.dispose(),C.current.dispose()}return ke.createElement(Np,{width:T,height:g,isEditorReady:L,loading:l,_ref:V,className:v,wrapperProps:x})}var uy=ly,dy=S.memo(uy),zp=dy;const Up={automaticLayout:!0,cursorBlinking:"smooth",fontLigatures:!0,formatOnPaste:!0,formatOnType:!0,fontSize:14,showDeprecated:!0,showUnused:!0,showFoldingControls:"mouseover",scrollBeyondLastLine:!1,minimap:{enabled:!1},inlineSuggest:{enabled:!1},fixedOverflowWidgets:!0,smoothScrolling:!0,smartSelect:{selectSubwords:!0,selectLeadingAndTrailingWhitespace:!0},tabSize:2,overviewRulerBorder:!1,scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6}},cy=`/**
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
`,fy=`/**
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
`,py=`/**
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
`,my=`// Type definitions for React (react-dom) 18.2
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
`,hy=`{
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
}`,gy=`// forward declarations
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
`,Ty=`import {
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
`,yy=`/**
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
`,vy=`/**
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
`,Ey=`/*
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
`,by=`// Type definitions for React 18.2
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
`,My=`import * as React from "./";

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
`,Ly=`import * as React from "./";

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
`,Hy=`{
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
}`,Sy=`/**
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
`,xy=`/**
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
`,Ry=`/*
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
`,wy=`// NOTE: Users of the \`experimental\` builds of React should add a reference
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
`,Py=`import * as React from "./";

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
`,Cy=`import * as React from "./";

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
`,Ay=`{
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
}`,Dy=`{
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
}`;var ky=`/******************************************************************************\r
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
`,_y={worker:ky},Fy=function(){return _y},Iy=function(){function e(n,t,r){var i=this;this.createWorkerFromPureString=function(o,a){window.URL=window.URL||window.webkitURL;var s;o=o.replace("__TYPESCRIPT_CUSTOM_URL__",a!=null&&a.customTypescriptUrl?"'".concat(a==null?void 0:a.customTypescriptUrl,"'"):"undefined");try{s=new Blob([o],{type:"application/javascript"})}catch{window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder,s=new window.BlobBuilder,s.append(o),s=s.getBlob()}var l=new Worker(URL.createObjectURL(s));return URL.revokeObjectURL(s),l},this.highlighterBuilder=function(o){var a=o.editor,s=o.filePath,l=s===void 0?a.getModel().uri.toString():s,u={current:[]},d=function(f){var h=f.data,T=h.classifications,g=h.version,v=h.filePath;requestAnimationFrame(function(){if(v===l&&g===a.getModel().getVersionId()){var x=u.current;u.current=a.deltaDecorations(x,T.map(function(m){return{range:new i.monaco.Range(m.start.row,m.start.column,m.end.row,m.end.column+1),options:{inlineClassName:m.tokens.join(" ")}}}))}})};return i.worker.addEventListener("message",d),{highlighter:function(f){requestAnimationFrame(function(){var h=f||a.getModel().getValue();i.worker.postMessage({code:h,filePath:l,version:a.getModel().getVersionId()})})},dispose:function(){i.worker.removeEventListener("message",d)}}},this.monaco=t,typeof n=="string"?this.worker=new Worker(n):n.worker&&typeof n.worker=="string"?this.worker=this.createWorkerFromPureString(n.worker,r):this.worker=n}return e}();const Oy=()=>({initExtraLibs:r=>{const i=Object.assign({"/node_modules/@types/react-dom/canary.d.ts":cy,"/node_modules/@types/react-dom/client.d.ts":fy,"/node_modules/@types/react-dom/experimental.d.ts":py,"/node_modules/@types/react-dom/index.d.ts":my,"/node_modules/@types/react-dom/package.json":hy,"/node_modules/@types/react-dom/server.d.ts":gy,"/node_modules/@types/react-dom/test-utils/index.d.ts":Ty,"/node_modules/@types/react/canary.d.ts":yy,"/node_modules/@types/react/experimental.d.ts":vy,"/node_modules/@types/react/global.d.ts":Ey,"/node_modules/@types/react/index.d.ts":by,"/node_modules/@types/react/jsx-dev-runtime.d.ts":My,"/node_modules/@types/react/jsx-runtime.d.ts":Ly,"/node_modules/@types/react/package.json":Hy,"/node_modules/@types/react/ts5.0/canary.d.ts":Sy,"/node_modules/@types/react/ts5.0/experimental.d.ts":xy,"/node_modules/@types/react/ts5.0/global.d.ts":Ry,"/node_modules/@types/react/ts5.0/index.d.ts":wy,"/node_modules/@types/react/ts5.0/jsx-dev-runtime.d.ts":Py,"/node_modules/@types/react/ts5.0/jsx-runtime.d.ts":Cy,"/node_modules/react-dom/package.json":Ay,"/node_modules/react/package.json":Dy});Object.keys(i).forEach(o=>{r.languages.typescript.typescriptDefaults.addExtraLib(i[o],`file://${o}`),r.languages.typescript.javascriptDefaults.addExtraLib(i[o],`file://${o}`)})},doOpenEditor:(r,i)=>{const o=i.options?i.options.selection:null;if(o)if(typeof o.endLineNumber=="number"&&typeof o.endColumn=="number")r.setSelection(o),r.revealRangeInCenter(o,1);else{const a={lineNumber:o.startLineNumber,column:o.startColumn};r.setPosition(a),r.revealPositionInCenter(a,1)}console.log("触发鼠标+ctrl点击",i.resource,o)},loadJsxSyntaxHighlight:(r,i)=>(i.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:i.languages.typescript.JsxEmit.Preserve,target:i.languages.typescript.ScriptTarget.ES2020,esModuleInterop:!0}),new Iy(Fy(),i).highlighterBuilder({editor:r}))}),Bp=`{
  "imports": {
    "react": "https://esm.sh/react@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"
  }
}
`,Vy=`:root {
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

  button {
    background-color: #f9f9f9;
  }
}
`,Ny=`import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  )
}

export default App
`,Wp=`import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
`,Gy="modulepreload",jy=function(e,n){return new URL(e,n).href},nc={},zy=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=jy(o,r),o in nc)return;nc[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Gy,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var He=Uint8Array,Ye=Uint16Array,Tu=Int32Array,Ea=new He([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ba=new He([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ml=new He([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$p=function(e,n){for(var t=new Ye(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var i=new Tu(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return{b:t,r:i}},Xp=$p(Ea,2),Jp=Xp.b,hl=Xp.r;Jp[28]=258,hl[258]=28;var Kp=$p(ba,0),Uy=Kp.b,tc=Kp.r,gl=new Ye(32768);for(var ue=0;ue<32768;++ue){var nt=(ue&43690)>>1|(ue&21845)<<1;nt=(nt&52428)>>2|(nt&13107)<<2,nt=(nt&61680)>>4|(nt&3855)<<4,gl[ue]=((nt&65280)>>8|(nt&255)<<8)>>1}var Dn=function(e,n,t){for(var r=e.length,i=0,o=new Ye(n);i<r;++i)e[i]&&++o[e[i]-1];var a=new Ye(n);for(i=1;i<n;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(t){s=new Ye(1<<n);var l=15-n;for(i=0;i<r;++i)if(e[i])for(var u=i<<4|e[i],d=n-e[i],f=a[e[i]-1]++<<d,h=f|(1<<d)-1;f<=h;++f)s[gl[f]>>l]=u}else for(s=new Ye(r),i=0;i<r;++i)e[i]&&(s[i]=gl[a[e[i]-1]++]>>15-e[i]);return s},Et=new He(288);for(var ue=0;ue<144;++ue)Et[ue]=8;for(var ue=144;ue<256;++ue)Et[ue]=9;for(var ue=256;ue<280;++ue)Et[ue]=7;for(var ue=280;ue<288;++ue)Et[ue]=8;var xi=new He(32);for(var ue=0;ue<32;++ue)xi[ue]=5;var By=Dn(Et,9,0),Wy=Dn(Et,9,1),$y=Dn(xi,5,0),Xy=Dn(xi,5,1),ls=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},hn=function(e,n,t){var r=n/8|0;return(e[r]|e[r+1]<<8)>>(n&7)&t},us=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},yu=function(e){return(e+7)/8|0},Ma=function(e,n,t){return(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length),new He(e.subarray(n,t))},Jy=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],on=function(e,n,t){var r=new Error(n||Jy[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,on),!t)throw r;return r},Ky=function(e,n,t,r){var i=e.length,o=r?r.length:0;if(!i||n.f&&!n.l)return t||new He(0);var a=!t,s=a||n.i!=2,l=n.i;a&&(t=new He(i*3));var u=function(Ht){var Ln=t.length;if(Ht>Ln){var Hn=new He(Math.max(Ln*2,Ht));Hn.set(t),t=Hn}},d=n.f||0,f=n.p||0,h=n.b||0,T=n.l,g=n.d,v=n.m,x=n.n,m=i*8;do{if(!T){d=hn(e,f,1);var c=hn(e,f+1,3);if(f+=3,c)if(c==1)T=Wy,g=Xy,v=9,x=5;else if(c==2){var R=hn(e,f,31)+257,b=hn(e,f+10,15)+4,H=R+hn(e,f+5,31)+1;f+=14;for(var w=new He(H),C=new He(19),V=0;V<b;++V)C[ml[V]]=hn(e,f+V*3,7);f+=b*3;for(var U=ls(C),K=(1<<U)-1,_=Dn(C,U,1),V=0;V<H;){var F=_[hn(e,f,K)];f+=F&15;var p=F>>4;if(p<16)w[V++]=p;else{var z=0,W=0;for(p==16?(W=3+hn(e,f,3),f+=2,z=w[V-1]):p==17?(W=3+hn(e,f,7),f+=3):p==18&&(W=11+hn(e,f,127),f+=7);W--;)w[V++]=z}}var P=w.subarray(0,R),I=w.subarray(R);v=ls(P),x=ls(I),T=Dn(P,v,1),g=Dn(I,x,1)}else on(1);else{var p=yu(f)+4,E=e[p-4]|e[p-3]<<8,L=p+E;if(L>i){l&&on(0);break}s&&u(h+E),t.set(e.subarray(p,L),h),n.b=h+=E,n.p=f=L*8,n.f=d;continue}if(f>m){l&&on(0);break}}s&&u(h+131072);for(var j=(1<<v)-1,k=(1<<x)-1,N=f;;N=f){var z=T[us(e,f)&j],J=z>>4;if(f+=z&15,f>m){l&&on(0);break}if(z||on(2),J<256)t[h++]=J;else if(J==256){N=f,T=null;break}else{var Z=J-254;if(J>264){var V=J-257,Y=Ea[V];Z=hn(e,f,(1<<Y)-1)+Jp[V],f+=Y}var ce=g[us(e,f)&k],$=ce>>4;ce||on(3),f+=ce&15;var I=Uy[$];if($>3){var Y=ba[$];I+=us(e,f)&(1<<Y)-1,f+=Y}if(f>m){l&&on(0);break}s&&u(h+131072);var X=h+Z;if(h<I){var re=o-I,oe=Math.min(I,X);for(re+h<0&&on(3);h<oe;++h)t[h]=r[re+h]}for(;h<X;++h)t[h]=t[h-I]}}n.l=T,n.p=N,n.b=h,n.f=d,T&&(d=1,n.m=v,n.d=g,n.n=x)}while(!d);return h!=t.length&&a?Ma(t,0,h):t.subarray(0,h)},On=function(e,n,t){t<<=n&7;var r=n/8|0;e[r]|=t,e[r+1]|=t>>8},zr=function(e,n,t){t<<=n&7;var r=n/8|0;e[r]|=t,e[r+1]|=t>>8,e[r+2]|=t>>16},ds=function(e,n){for(var t=[],r=0;r<e.length;++r)e[r]&&t.push({s:r,f:e[r]});var i=t.length,o=t.slice();if(!i)return{t:Qp,l:0};if(i==1){var a=new He(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(L,R){return L.f-R.f}),t.push({s:-1,f:25001});var s=t[0],l=t[1],u=0,d=1,f=2;for(t[0]={s:-1,f:s.f+l.f,l:s,r:l};d!=i-1;)s=t[t[u].f<t[f].f?u++:f++],l=t[u!=d&&t[u].f<t[f].f?u++:f++],t[d++]={s:-1,f:s.f+l.f,l:s,r:l};for(var h=o[0].s,r=1;r<i;++r)o[r].s>h&&(h=o[r].s);var T=new Ye(h+1),g=Tl(t[d-1],T,0);if(g>n){var r=0,v=0,x=g-n,m=1<<x;for(o.sort(function(R,b){return T[b.s]-T[R.s]||R.f-b.f});r<i;++r){var c=o[r].s;if(T[c]>n)v+=m-(1<<g-T[c]),T[c]=n;else break}for(v>>=x;v>0;){var p=o[r].s;T[p]<n?v-=1<<n-T[p]++-1:++r}for(;r>=0&&v;--r){var E=o[r].s;T[E]==n&&(--T[E],++v)}g=n}return{t:new He(T),l:g}},Tl=function(e,n,t){return e.s==-1?Math.max(Tl(e.l,n,t+1),Tl(e.r,n,t+1)):n[e.s]=t},rc=function(e){for(var n=e.length;n&&!e[--n];);for(var t=new Ye(++n),r=0,i=e[0],o=1,a=function(l){t[r++]=l},s=1;s<=n;++s)if(e[s]==i&&s!=n)++o;else{if(!i&&o>2){for(;o>138;o-=138)a(32754);o>2&&(a(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(a(i),--o;o>6;o-=6)a(8304);o>2&&(a(o-3<<5|8208),o=0)}for(;o--;)a(i);o=1,i=e[s]}return{c:t.subarray(0,r),n}},Ur=function(e,n){for(var t=0,r=0;r<n.length;++r)t+=e[r]*n[r];return t},Yp=function(e,n,t){var r=t.length,i=yu(n+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var o=0;o<r;++o)e[i+o+4]=t[o];return(i+4+r)*8},ic=function(e,n,t,r,i,o,a,s,l,u,d){On(n,d++,t),++i[256];for(var f=ds(i,15),h=f.t,T=f.l,g=ds(o,15),v=g.t,x=g.l,m=rc(h),c=m.c,p=m.n,E=rc(v),L=E.c,R=E.n,b=new Ye(19),H=0;H<c.length;++H)++b[c[H]&31];for(var H=0;H<L.length;++H)++b[L[H]&31];for(var w=ds(b,7),C=w.t,V=w.l,U=19;U>4&&!C[ml[U-1]];--U);var K=u+5<<3,_=Ur(i,Et)+Ur(o,xi)+a,F=Ur(i,h)+Ur(o,v)+a+14+3*U+Ur(b,C)+2*b[16]+3*b[17]+7*b[18];if(l>=0&&K<=_&&K<=F)return Yp(n,d,e.subarray(l,l+u));var z,W,P,I;if(On(n,d,1+(F<_)),d+=2,F<_){z=Dn(h,T,0),W=h,P=Dn(v,x,0),I=v;var j=Dn(C,V,0);On(n,d,p-257),On(n,d+5,R-1),On(n,d+10,U-4),d+=14;for(var H=0;H<U;++H)On(n,d+3*H,C[ml[H]]);d+=3*U;for(var k=[c,L],N=0;N<2;++N)for(var J=k[N],H=0;H<J.length;++H){var Z=J[H]&31;On(n,d,j[Z]),d+=C[Z],Z>15&&(On(n,d,J[H]>>5&127),d+=J[H]>>12)}}else z=By,W=Et,P=$y,I=xi;for(var H=0;H<s;++H){var Y=r[H];if(Y>255){var Z=Y>>18&31;zr(n,d,z[Z+257]),d+=W[Z+257],Z>7&&(On(n,d,Y>>23&31),d+=Ea[Z]);var ce=Y&31;zr(n,d,P[ce]),d+=I[ce],ce>3&&(zr(n,d,Y>>5&8191),d+=ba[ce])}else zr(n,d,z[Y]),d+=W[Y]}return zr(n,d,z[256]),d+W[256]},Yy=new Tu([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Qp=new He(0),Qy=function(e,n,t,r,i,o){var a=o.z||e.length,s=new He(r+a+5*(1+Math.ceil(a/7e3))+i),l=s.subarray(r,s.length-i),u=o.l,d=(o.r||0)&7;if(n){d&&(l[0]=o.r>>3);for(var f=Yy[n-1],h=f>>13,T=f&8191,g=(1<<t)-1,v=o.p||new Ye(32768),x=o.h||new Ye(g+1),m=Math.ceil(t/3),c=2*m,p=function($t){return(e[$t]^e[$t+1]<<m^e[$t+2]<<c)&g},E=new Tu(25e3),L=new Ye(288),R=new Ye(32),b=0,H=0,w=o.i||0,C=0,V=o.w||0,U=0;w+2<a;++w){var K=p(w),_=w&32767,F=x[K];if(v[_]=F,x[K]=_,V<=w){var z=a-w;if((b>7e3||C>24576)&&(z>423||!u)){d=ic(e,l,0,E,L,R,H,C,U,w-U,d),C=b=H=0,U=w;for(var W=0;W<286;++W)L[W]=0;for(var W=0;W<30;++W)R[W]=0}var P=2,I=0,j=T,k=_-F&32767;if(z>2&&K==p(w-k))for(var N=Math.min(h,z)-1,J=Math.min(32767,w),Z=Math.min(258,z);k<=J&&--j&&_!=F;){if(e[w+P]==e[w+P-k]){for(var Y=0;Y<Z&&e[w+Y]==e[w+Y-k];++Y);if(Y>P){if(P=Y,I=k,Y>N)break;for(var ce=Math.min(k,Y-2),$=0,W=0;W<ce;++W){var X=w-k+W&32767,re=v[X],oe=X-re&32767;oe>$&&($=oe,F=X)}}}_=F,F=v[_],k+=_-F&32767}if(I){E[C++]=268435456|hl[P]<<18|tc[I];var Ht=hl[P]&31,Ln=tc[I]&31;H+=Ea[Ht]+ba[Ln],++L[257+Ht],++R[Ln],V=w+P,++b}else E[C++]=e[w],++L[e[w]]}}for(w=Math.max(w,V);w<a;++w)E[C++]=e[w],++L[e[w]];d=ic(e,l,u,E,L,R,H,C,U,w-U,d),u||(o.r=d&7|l[d/8|0]<<3,d-=7,o.h=x,o.p=v,o.i=w,o.w=V)}else{for(var w=o.w||0;w<a+u;w+=65535){var Hn=w+65535;Hn>=a&&(l[d/8|0]=u,Hn=a),d=Yp(l,d+1,e.subarray(w,Hn))}o.i=a}return Ma(s,0,r+yu(d)+i)},qp=function(){var e=1,n=0;return{p:function(t){for(var r=e,i=n,o=t.length|0,a=0;a!=o;){for(var s=Math.min(a+2655,o);a<s;++a)i+=r+=t[a];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}e=r,n=i},d:function(){return e%=65521,n%=65521,(e&255)<<24|(e&65280)<<8|(n&255)<<8|n>>8}}},qy=function(e,n,t,r,i){if(!i&&(i={l:1},n.dictionary)){var o=n.dictionary.subarray(-32768),a=new He(o.length+e.length);a.set(o),a.set(e,o.length),e=a,i.w=o.length}return Qy(e,n.level==null?6:n.level,n.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):12+n.mem,t,r,i)},Zp=function(e,n,t){for(;t;++n)e[n]=t,t>>>=8},Zy=function(e,n){var t=n.level,r=t==0?0:t<6?1:t==9?3:2;if(e[0]=120,e[1]=r<<6|(n.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,n.dictionary){var i=qp();i.p(n.dictionary),Zp(e,2,i.d())}},ev=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&on(6,"invalid zlib data"),(e[1]>>5&1)==+!n&&on(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function nv(e,n){n||(n={});var t=qp();t.p(e);var r=qy(e,n,n.dictionary?6:2,4);return Zy(r,n),Zp(r,r.length-4,t.d()),r}function tv(e,n){return Ky(e.subarray(ev(e,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}var oc=typeof TextEncoder<"u"&&new TextEncoder,yl=typeof TextDecoder<"u"&&new TextDecoder,rv=0;try{yl.decode(Qp,{stream:!0}),rv=1}catch{}var iv=function(e){for(var n="",t=0;;){var r=e[t++],i=(r>127)+(r>223)+(r>239);if(t+i>e.length)return{s:n,r:Ma(e,t-1)};i?i==3?(r=((r&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?n+=String.fromCharCode((r&31)<<6|e[t++]&63):n+=String.fromCharCode((r&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(r)}};function em(e,n){if(n){for(var t=new He(e.length),r=0;r<e.length;++r)t[r]=e.charCodeAt(r);return t}if(oc)return oc.encode(e);for(var i=e.length,o=new He(e.length+(e.length>>1)),a=0,s=function(d){o[a++]=d},r=0;r<i;++r){if(a+5>o.length){var l=new He(a+8+(i-r<<1));l.set(o),o=l}var u=e.charCodeAt(r);u<128||n?s(u):u<2048?(s(192|u>>6),s(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|e.charCodeAt(++r)&1023,s(240|u>>18),s(128|u>>12&63),s(128|u>>6&63),s(128|u&63)):(s(224|u>>12),s(128|u>>6&63),s(128|u&63))}return Ma(o,0,a)}function nm(e,n){if(n){for(var t="",r=0;r<e.length;r+=16384)t+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return t}else{if(yl)return yl.decode(e);var i=iv(e),o=i.s,t=i.r;return t.length&&on(8),o}}var tm={exports:{}};(function(e,n){(function(t,r){r()})(kr,function(){function t(u,d){return typeof d>"u"?d={autoBom:!1}:typeof d!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function r(u,d,f){var h=new XMLHttpRequest;h.open("GET",u),h.responseType="blob",h.onload=function(){l(h.response,d,f)},h.onerror=function(){console.error("could not download file")},h.send()}function i(u){var d=new XMLHttpRequest;d.open("HEAD",u,!1);try{d.send()}catch{}return 200<=d.status&&299>=d.status}function o(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(d)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof kr=="object"&&kr.global===kr?kr:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(u,d,f){var h=a.URL||a.webkitURL,T=document.createElement("a");d=d||u.name||"download",T.download=d,T.rel="noopener",typeof u=="string"?(T.href=u,T.origin===location.origin?o(T):i(T.href)?r(u,d,f):o(T,T.target="_blank")):(T.href=h.createObjectURL(u),setTimeout(function(){h.revokeObjectURL(T.href)},4e4),setTimeout(function(){o(T)},0))}:"msSaveOrOpenBlob"in navigator?function(u,d,f){if(d=d||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(t(u,f),d);else if(i(u))r(u,d,f);else{var h=document.createElement("a");h.href=u,h.target="_blank",setTimeout(function(){o(h)})}}:function(u,d,f,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof u=="string")return r(u,d,f);var T=u.type==="application/octet-stream",g=/constructor/i.test(a.HTMLElement)||a.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||T&&g||s)&&typeof FileReader<"u"){var x=new FileReader;x.onloadend=function(){var p=x.result;p=v?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=p:location=p,h=null},x.readAsDataURL(u)}else{var m=a.URL||a.webkitURL,c=m.createObjectURL(u);h?h.location=c:location.href=c,h=null,setTimeout(function(){m.revokeObjectURL(c)},4e4)}});a.saveAs=l.saveAs=l,e.exports=l})})(tm);var ov=tm.exports;const av=`<!doctype html>
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
`,sv=`{
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
`,lv=`# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
`,uv=`import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
`;async function dv(e){const{default:n}=await zy(()=>import("./jszip.min-6b5e9650.js").then(o=>o.j),[],import.meta.url),t=new n;t.file("index.html",av),t.file("package.json",sv),t.file("vite.config.js",uv),t.file("README.md",lv);const r=t.folder("src");Object.keys(e).forEach(o=>{e[o].name!==qe?r.file(o,e[o].value):t.file(o,e[o].value)});const i=await t.generateAsync({type:"blob"});ov.saveAs(i,"react-project.zip")}function rm(e,n=100){let t;return(...r)=>{t&&clearTimeout(t),t=setTimeout(()=>{e(...r)},n)}}function cv(e){const n=em(e),t=nv(n,{level:9}),r=nm(t,!0);return btoa(r)}function fv(e){const n=atob(e);if(n.startsWith("xÚ")){const t=em(n,!0),r=tv(t);return nm(r)}return decodeURIComponent(escape(n))}const im="react-playground-prefer-dark",pv=e=>{var n;localStorage.setItem(im,String(e==="dark")),(n=document.querySelector("#react-playground"))==null||n.setAttribute("class",e)},mv=()=>JSON.parse(localStorage.getItem(im)||"false")?"dark":"light",hv=(e,n)=>e?n?{...ac,...e,[qe]:{name:qe,language:"json",value:JSON.stringify(n,null,2)}}:{...ac,...e}:null,gv=()=>{let e;try{if(typeof window<"u"){const n=window.location.hash;n&&(e=JSON.parse(fv(n==null?void 0:n.split("#")[1])))}}catch(n){console.error(n)}return e},Tv=e=>{const n=e.split(".").pop()||"";return["js","jsx","json"].includes(n)?"javascript":["ts","tsx"].includes(n)?"typescript":["css"].includes(n)?"css":"javascript"},zt="App.jsx",qe="import-map.json",Ri="main.jsx",yv=gv()||{[Ri]:{name:Ri,language:"javascript",value:Wp},[zt]:{name:zt,language:"javascript",value:Ny},"App.css":{name:"App.css",language:"css",value:Vy},[qe]:{name:qe,language:"json",value:Bp}},ac={[Ri]:{name:Ri,language:"javascript",value:Wp},[qe]:{name:qe,language:"json",value:Bp}},Co={files:yv,selectedFileName:zt},Wt=S.createContext(Co),vv=e=>{const{children:n}=e,[t,r]=S.useState(Co.files),[i,o]=S.useState(Co.theme),[a,s]=S.useState(Co.selectedFileName),[l,u]=S.useState(""),d=g=>{t[g]={name:g,language:Tv(g),value:""},r({...t})},f=g=>{delete t[g],r({...t})},h=(g,v)=>{if(!t[g]||v===void 0||v===null)return;const{[g]:x,...m}=t,c={[v]:{...x,name:v}};r({...m,...c})},T=g=>{pv(g),o(g)};return S.useEffect(()=>{const g=cv(JSON.stringify(t));window.location.hash=g,u(g)},[t]),S.useEffect(()=>{T(mv())},[]),O.jsx(Wt.Provider,{value:{theme:i,filesHash:l,files:t,selectedFileName:a,setTheme:o,changeTheme:T,setSelectedFileName:s,setFiles:r,addFile:d,removeFile:f,updateFileName:h},children:n})};gu.config({paths:{vs:"https://cdn.staticfile.org/monaco-editor/0.43.0/min/vs"}});const Ev=({file:e,onChange:n,options:t})=>{const{theme:r,files:i,setSelectedFileName:o}=S.useContext(Wt),a=S.useRef(null),{doOpenEditor:s,loadJsxSyntaxHighlight:l,initExtraLibs:u}=Oy(),d=S.useRef({highlighter:null}),f=S.useCallback((g,v)=>{var x,m;return a.current=g,g.addCommand(v.KeyMod.CtrlCmd|v.KeyCode.KeyS,()=>{}),Object.entries(i).forEach(([c,p])=>{var E,L;(E=v==null?void 0:v.editor)!=null&&E.getModel(v.Uri.parse(`file:///${c}`))||(L=v==null?void 0:v.editor)==null||L.createModel(i[c].value,p.language,v.Uri.parse(`file:///${c}`))}),g._codeEditorService.doOpenEditor=function(c,p){const E=p.resource.path;o(E.replace("/","")),E.startsWith("/node_modules/")||s(c,p)},u(v),d.current=l(g,v),(x=d.current)==null||x.highlighter(),(m=d.current)==null?void 0:m.dispose},[]),h=g=>{g.forEach(v=>{console.log(v.message)})},T=rm(()=>{var g,v;(v=(g=d==null?void 0:d.current)==null?void 0:g.highlighter)==null||v.call(g)},200);return S.useEffect(()=>{var g;(g=a.current)==null||g.focus(),T()},[e.name]),S.useEffect(()=>{T()},[e.value]),O.jsx(zp,{className:"react-playground-editor",height:"100%",theme:`vs-${r}`,path:e.name,language:e.language,value:e.value,onChange:n,onMount:f,onValidate:h,options:{...Up,...t,theme:void 0}})};var om={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)n.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(om);var bv=om.exports;const La=Ec(bv),Mv="_dialog_eaiwm_1",Lv="_content_eaiwm_37",ho={dialog:Mv,"dialog-footer":"_dialog-footer_eaiwm_13","dialog-btn":"_dialog-btn_eaiwm_29",content:Lv},Hv=e=>{const{message:n,onConfirm:t,children:r}=e,i=S.useRef(null),o=a=>{var s;a.stopPropagation(),(s=i.current)==null||s.showModal()};return O.jsxs("span",{onClick:a=>a.stopPropagation(),children:[O.jsx("span",{onClick:o,children:r}),O.jsxs("dialog",{ref:i,className:ho.dialog,children:[O.jsxs("span",{className:ho.content,children:[O.jsxs("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"exclamation-circle",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:[O.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),O.jsx("path",{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"})]}),n]}),O.jsx("form",{method:"dialog",children:O.jsxs("div",{className:ho["dialog-footer"],children:[O.jsx("button",{onClick:()=>{var a;return(a=i.current)==null?void 0:a.close()},children:"取 消"}),O.jsx("button",{className:ho["dialog-btn"],onClick:t,children:"确 定"})]})})]})]})},Sv="_tabs_16nwc_1",xv="_actived_16nwc_32",Rv="_add_16nwc_51",jn={tabs:Sv,"tab-item":"_tab-item_16nwc_22",actived:xv,"import-map-wrapper":"_import-map-wrapper_16nwc_39",add:Rv,"tabs-item-input":"_tabs-item-input_16nwc_65","input-mask":"_input-mask_16nwc_76"},wv=e=>{const{readOnlyTabs:n=[""],value:t,actived:r=!1,onOk:i,onCancel:o,onRemove:a,onClick:s,onValidate:l}=e,u=S.useRef(null),[d,f]=S.useState(t),[h,T]=S.useState(e.creating),g=c=>{c.key==="Enter"?(c.preventDefault(),x()):c.key==="Escape"&&(c.preventDefault(),v())},v=()=>{f(t),T(!1),o()};function x(){if(h&&l(d,t)){if(d===t&&r){T(!1);return}i(d),T(!1)}}const m=()=>{n.includes(d)||(T(!0),setTimeout(()=>{var c;(c=u==null?void 0:u.current)==null||c.focus()},0))};return S.useEffect(()=>{var c;(c=u==null?void 0:u.current)==null||c.focus()},[]),O.jsx("div",{className:La(jn["tab-item"],r?jn.actived:null),onClick:s,children:h?O.jsxs(O.Fragment,{children:[O.jsx("input",{ref:u,className:jn["tabs-item-input"],value:d,onChange:c=>f(c.target.value),onBlur:x,onKeyDown:g}),O.jsx("div",{className:jn["input-mask"]})]}):O.jsxs(O.Fragment,{children:[O.jsx("span",{onDoubleClick:m,children:d}),n.includes(d)?null:O.jsx(Hv,{message:`确定要删除 ${d} 吗?`,onConfirm:()=>a(d),children:O.jsx("span",{style:{marginLeft:5,display:"flex"},children:O.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",children:[O.jsx("line",{stroke:"#999",x1:"18",y1:"6",x2:"6",y2:"18"}),O.jsx("line",{stroke:"#999",x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]})})},Pv=e=>`Comp${e.reduce((t,r)=>{const i=r.match(/Comp(\d+)\.jsx/);if(i){const o=parseInt(i[1],10);return Math.max(t,o)}return t},0)+1}.jsx`,Cv=e=>{const{onChange:n,onError:t,readOnly:r=!1}=e,{files:i,removeFile:o,addFile:a,updateFileName:s,selectedFileName:l,setSelectedFileName:u}=S.useContext(Wt),[d,f]=S.useState([""]),[h,T]=S.useState(!1),g=()=>{f([...d,Pv(d)]),T(!0)},v=()=>{h&&(d.pop(),f([...d]),T(!1))},x=E=>{h||(n(E),u(E))},m=()=>{n(qe)},c=(E,L)=>{h?(a(E),T(!1)):s(L,E),setTimeout(()=>{x(E)},0)},p=(E,L)=>/\.(jsx|tsx|js|ts|css|json)$/.test(E)?d.includes(E)&&E!==L?(t(`File "${E}" already exists.`),!1):(t(""),!0):(t("Playground only supports *.jsx, *.js, *.css, *.json files."),!1);return S.useEffect(()=>{f(Object.keys(i).filter(E=>![qe,Ri].includes(E)))},[i]),O.jsxs("div",{className:jn.tabs,children:[d.map((E,L)=>O.jsx(wv,{value:E,actived:l===E,creating:h,readOnlyTabs:r?d:[zt],onValidate:p,onOk:R=>c(R,E),onCancel:v,onRemove:R=>{o(R),x(zt)},onClick:()=>x(E)},L+E)),!r&&O.jsxs(O.Fragment,{children:[O.jsx("div",{className:jn.add,onClick:g,children:"+"}),O.jsx("div",{className:jn["import-map-wrapper"],children:O.jsx("div",{className:La(jn["tab-item"],l===qe?jn.actived:null),onClick:m,children:"Import Map"})})]})]})},Av="_msg_d1icg_1",Dv="_error_d1icg_20",kv="_warn_d1icg_24",_v="_dismiss_d1icg_34",cs={msg:Av,error:Dv,warn:kv,dismiss:_v},am=e=>{const{type:n,context:t}=e,[r,i]=S.useState(!1);return S.useEffect(()=>{i(!!t)},[t]),r?O.jsxs("div",{className:La(cs.msg,cs[n]),children:[O.jsx("pre",{dangerouslySetInnerHTML:{__html:t}}),O.jsx("button",{className:cs.dismiss,onClick:()=>i(!1),children:"✕"})]}):null},Fv=e=>{const{showFileSelector:n,fileSelectorReadOnly:t,options:r={}}=e,{files:i,setFiles:o,selectedFileName:a,setSelectedFileName:s}=S.useContext(Wt),[l,u]=S.useState(""),d=i[a]||{},f=rm(g=>{i[d.name].value=g,o({...i})},250),h=g=>{s(g)},T=g=>{u(g)};return O.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[n?O.jsx(Cv,{onChange:h,onError:T,readOnly:t}):null,O.jsx(Ev,{onChange:f,file:d,options:r,selectFile:h}),O.jsx(am,{type:"error",context:l})]})},Iv=`<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><g><rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path></g></svg>
`,Ov=`<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
`,Vv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="dark"><path fill="currentColor" d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>
`,Nv=""+new URL("react-9d72e876.svg",import.meta.url).href,Gv=`<svg width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g></svg>
`,jv=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="light"><path fill="currentColor" d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path fill="currentColor" d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path fill="currentColor" d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path fill="currentColor" d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path fill="currentColor" d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path fill="currentColor" d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path fill="currentColor" d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path fill="currentColor" d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path fill="currentColor" d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>
`,zv="_header_3x95s_1",Uv="_logo_3x95s_15",Bv="_links_3x95s_24",Wv="_theme_3x95s_42",Br={header:zv,logo:Uv,links:Bv,theme:Wv},$v=()=>{const{files:e,theme:n,changeTheme:t}=S.useContext(Wt),r=async()=>{await navigator.clipboard.writeText(location.href),alert("Sharable URL has been copied to clipboard.")},i=()=>{confirm("Download project files?")&&dv(e).then(()=>console.log("download success"))};return S.useMemo(()=>O.jsxs("nav",{className:Br.header,children:[O.jsxs("div",{className:Br.logo,children:[O.jsx("img",{alt:"logo",src:Nv}),O.jsx("span",{children:"React Playground"})]}),O.jsxs("div",{className:Br.links,children:[n==="light"&&O.jsx("button",{title:"Toggle dark mode",className:Br.theme,dangerouslySetInnerHTML:{__html:jv},onClick:()=>t("dark")}),n==="dark"&&O.jsx("button",{title:"Toggle light mode",className:Br.theme,dangerouslySetInnerHTML:{__html:Vv},onClick:()=>t("light")}),O.jsx("button",{title:"Copy sharable URL",dangerouslySetInnerHTML:{__html:Gv},onClick:r}),O.jsx("button",{title:"Download project files",dangerouslySetInnerHTML:{__html:Iv},onClick:i}),O.jsx("a",{href:"https://github.com/fewismuch/react-playground",target:"_blank",title:"View on GitHub",children:O.jsx("button",{dangerouslySetInnerHTML:{__html:Ov}})})]})]}),[n])};function Xv(){return new Worker(""+new URL("compiler.worker-50a9e42a.js",import.meta.url).href)}const sc=`<!doctype html>
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
    window.parent.postMessage({type:'ERROR',message:e.message})
  })

  window.addEventListener('load', () => {
    window.parent.postMessage({type: 'LOADED', message: ''})
  })

  window.addEventListener('message', ({data}) => {
    if (data?.type === 'UPDATE_FILES') {
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
`,Jv=()=>{const e="//unpkg.com/es-module-shims@1.8.0/dist/es-module-shims.js",n=typeof import.meta>"u"?sc.replace("<!-- es-module-shims -->",`<script async src="${e}"><\/script>`):sc;return URL.createObjectURL(new Blob([n],{type:"text/html"}))},Kv=Jv(),Yv=e=>{const{hidden:n,data:t}=e,r=S.useRef(null),[i,o]=S.useState("");S.useEffect(()=>{var s,l;t&&((l=(s=r.current)==null?void 0:s.contentWindow)==null||l.postMessage(t))},[t]);const a=s=>{var d,f;const{type:l,message:u}=s.data;l==="LOADED"?(f=(d=r.current)==null?void 0:d.contentWindow)==null||f.postMessage(t):l==="ERROR"?o(typeof u=="string"?u:""):l||o("")};return S.useEffect(()=>(window.addEventListener("message",a),()=>{window.removeEventListener("message",a)}),[]),O.jsxs(O.Fragment,{children:[O.jsx("iframe",{ref:r,src:Kv,style:{width:"100%",height:"100%",padding:0,border:"none",display:n?"none":""},sandbox:"allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"}),O.jsx(am,{type:"error",context:i})]})},Qv="_tabs_1vzew_1",qv="_actived_1vzew_20",fs={tabs:Qv,"tab-item":"_tab-item_1vzew_11",actived:qv},Zv=e=>{const{onChange:n,items:t,value:r=t[0],hidden:i}=e;return i?null:O.jsx("div",{className:fs.tabs,children:t.map(o=>O.jsx("div",{className:La(fs["tab-item"],r===o?fs.actived:""),onClick:()=>n(o),children:o},o))})},eE=["PREVIEW","JS"],nE=e=>{const{showCompileOutput:n=!0}=e,{files:t,theme:r,selectedFileName:i}=S.useContext(Wt),[o,a]=S.useState("PREVIEW"),s=S.useRef(null),[l,u]=S.useState(),[d,f]=S.useState(""),h=g=>{a(g)},T=()=>{var g,v;o==="PREVIEW"&&((g=s.current)==null||g.postMessage(t)),o==="JS"&&((v=s.current)==null||v.postMessage(t[i].value))};return S.useEffect(()=>{s.current||(s.current=new Xv,s.current.addEventListener("message",({data:g})=>{g.type==="UPDATE_FILES"?(g.data.importmap=t[qe].value,u(g)):g.type==="UPDATE_FILE"?f(g.data):g.type==="ERROR"&&console.log(g)}),s.current.postMessage(t))},[]),S.useEffect(()=>{T()},[o,t]),S.useEffect(()=>{var g,v;i!==qe&&(["javascript","typescript"].includes(t[i].language)?(g=s.current)==null||g.postMessage(t[i].value):(v=s.current)==null||v.postMessage(""))},[i]),O.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[O.jsx(Zv,{items:eE,value:o,onChange:h,hidden:!n}),O.jsx(Yv,{hidden:o!=="PREVIEW",data:l},t[qe].value),n?O.jsx("div",{style:{display:o!=="JS"?"none":"",height:"100%"},children:O.jsx(zp,{className:"react-playground-editor",height:"100%",theme:`vs-${r}`,value:d,language:"javascript",options:{...Up,readOnly:!0}})}):null]})};function si(){return si=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},si.apply(this,arguments)}var lt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ps,sm={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ps=sm,function(){var e={}.hasOwnProperty;function n(){for(var t=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if(o==="string"||o==="number")t.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&t.push(a)}}else if(o==="object")if(i.toString===Object.prototype.toString)for(var s in i)e.call(i,s)&&i[s]&&t.push(s);else t.push(i.toString())}}return t.join(" ")}ps.exports?(n.default=n,ps.exports=n):window.classNames=n}();var vl=_i(sm.exports),lc=NaN,tE="[object Symbol]",rE=/^\s+|\s+$/g,iE=/^[-+]0x[0-9a-f]+$/i,oE=/^0b[01]+$/i,aE=/^0o[0-7]+$/i,sE=parseInt,lE=Object.prototype.toString;function uc(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function ms(e){if(typeof e=="number")return e;if(function(r){return typeof r=="symbol"||function(i){return!!i&&typeof i=="object"}(r)&&lE.call(r)==tE}(e))return lc;if(uc(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=uc(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(rE,"");var t=oE.test(e);return t||aE.test(e)?sE(e.slice(2),t?2:8):iE.test(e)?lc:+e}var Tn=_i(function(e,n,t){return t===void 0&&(t=n,n=void 0),t!==void 0&&(t=(t=ms(t))==t?t:0),n!==void 0&&(n=(n=ms(n))==n?n:0),function(r,i,o){return r==r&&(o!==void 0&&(r=r<=o?r:o),i!==void 0&&(r=r>=i?r:i)),r}(ms(e),n,t)}),El={exports:{}};(function(e,n){var t="__lodash_hash_undefined__",r=1,i=2,o=9007199254740991,a="[object Arguments]",s="[object Array]",l="[object AsyncFunction]",u="[object Boolean]",d="[object Date]",f="[object Error]",h="[object Function]",T="[object GeneratorFunction]",g="[object Map]",v="[object Number]",x="[object Null]",m="[object Object]",c="[object Promise]",p="[object Proxy]",E="[object RegExp]",L="[object Set]",R="[object String]",b="[object Symbol]",H="[object Undefined]",w="[object WeakMap]",C="[object ArrayBuffer]",V="[object DataView]",U=/^\[object .+?Constructor\]$/,K=/^(?:0|[1-9]\d*)$/,_={};_["[object Float32Array]"]=_["[object Float64Array]"]=_["[object Int8Array]"]=_["[object Int16Array]"]=_["[object Int32Array]"]=_["[object Uint8Array]"]=_["[object Uint8ClampedArray]"]=_["[object Uint16Array]"]=_["[object Uint32Array]"]=!0,_[a]=_[s]=_[C]=_[u]=_[V]=_[d]=_[f]=_[h]=_[g]=_[v]=_[m]=_[E]=_[L]=_[R]=_[w]=!1;var F=typeof lt=="object"&&lt&&lt.Object===Object&&lt,z=typeof self=="object"&&self&&self.Object===Object&&self,W=F||z||Function("return this")(),P=n&&!n.nodeType&&n,I=P&&e&&!e.nodeType&&e,j=I&&I.exports===P,k=j&&F.process,N=function(){try{return k&&k.binding&&k.binding("util")}catch{}}(),J=N&&N.isTypedArray;function Z(y,M){for(var D=-1,B=y==null?0:y.length;++D<B;)if(M(y[D],D,y))return!0;return!1}function Y(y){var M=-1,D=Array(y.size);return y.forEach(function(B,se){D[++M]=[se,B]}),D}function ce(y){var M=-1,D=Array(y.size);return y.forEach(function(B){D[++M]=B}),D}var $,X,re,oe=Array.prototype,Ht=Function.prototype,Ln=Object.prototype,Hn=W["__core-js_shared__"],$t=Ht.toString,Sn=Ln.hasOwnProperty,bu=($=/[^.]+$/.exec(Hn&&Hn.keys&&Hn.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"",Mu=Ln.toString,Tm=RegExp("^"+$t.call(Sn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lu=j?W.Buffer:void 0,Fi=W.Symbol,Hu=W.Uint8Array,Su=Ln.propertyIsEnumerable,ym=oe.splice,St=Fi?Fi.toStringTag:void 0,xu=Object.getOwnPropertySymbols,vm=Lu?Lu.isBuffer:void 0,Em=(X=Object.keys,re=Object,function(y){return X(re(y))}),Ha=Xt(W,"DataView"),Rr=Xt(W,"Map"),Sa=Xt(W,"Promise"),xa=Xt(W,"Set"),Ra=Xt(W,"WeakMap"),wr=Xt(Object,"create"),bm=wt(Ha),Mm=wt(Rr),Lm=wt(Sa),Hm=wt(xa),Sm=wt(Ra),Ru=Fi?Fi.prototype:void 0,wa=Ru?Ru.valueOf:void 0;function xt(y){var M=-1,D=y==null?0:y.length;for(this.clear();++M<D;){var B=y[M];this.set(B[0],B[1])}}function kn(y){var M=-1,D=y==null?0:y.length;for(this.clear();++M<D;){var B=y[M];this.set(B[0],B[1])}}function Rt(y){var M=-1,D=y==null?0:y.length;for(this.clear();++M<D;){var B=y[M];this.set(B[0],B[1])}}function Ii(y){var M=-1,D=y==null?0:y.length;for(this.__data__=new Rt;++M<D;)this.add(y[M])}function Yn(y){var M=this.__data__=new kn(y);this.size=M.size}function xm(y,M){var D=Ni(y),B=!D&&Am(y),se=!D&&!B&&Pa(y),Q=!D&&!B&&!se&&Iu(y),ge=D||B||se||Q,ve=ge?function(Me,xn){for(var _n=-1,Ie=Array(Me);++_n<Me;)Ie[_n]=xn(_n);return Ie}(y.length,String):[],pn=ve.length;for(var be in y)!M&&!Sn.call(y,be)||ge&&(be=="length"||se&&(be=="offset"||be=="parent")||Q&&(be=="buffer"||be=="byteLength"||be=="byteOffset")||Cm(be,pn))||ve.push(be);return ve}function Oi(y,M){for(var D=y.length;D--;)if(Du(y[D][0],M))return D;return-1}function Pr(y){return y==null?y===void 0?H:x:St&&St in Object(y)?function(M){var D=Sn.call(M,St),B=M[St];try{M[St]=void 0;var se=!0}catch{}var Q=Mu.call(M);return se&&(D?M[St]=B:delete M[St]),Q}(y):function(M){return Mu.call(M)}(y)}function wu(y){return Cr(y)&&Pr(y)==a}function Pu(y,M,D,B,se){return y===M||(y==null||M==null||!Cr(y)&&!Cr(M)?y!=y&&M!=M:function(Q,ge,ve,pn,be,Me){var xn=Ni(Q),_n=Ni(ge),Ie=xn?s:Qn(Q),Fn=_n?s:Qn(ge),Jt=(Ie=Ie==a?m:Ie)==m,Gi=(Fn=Fn==a?m:Fn)==m,Kt=Ie==Fn;if(Kt&&Pa(Q)){if(!Pa(ge))return!1;xn=!0,Jt=!1}if(Kt&&!Jt)return Me||(Me=new Yn),xn||Iu(Q)?Cu(Q,ge,ve,pn,be,Me):function(ie,ne,ji,qn,Ca,tn,In){switch(ji){case V:if(ie.byteLength!=ne.byteLength||ie.byteOffset!=ne.byteOffset)return!1;ie=ie.buffer,ne=ne.buffer;case C:return!(ie.byteLength!=ne.byteLength||!tn(new Hu(ie),new Hu(ne)));case u:case d:case v:return Du(+ie,+ne);case f:return ie.name==ne.name&&ie.message==ne.message;case E:case R:return ie==ne+"";case g:var Zn=Y;case L:var Dr=qn&r;if(Zn||(Zn=ce),ie.size!=ne.size&&!Dr)return!1;var zi=In.get(ie);if(zi)return zi==ne;qn|=i,In.set(ie,ne);var Aa=Cu(Zn(ie),Zn(ne),qn,Ca,tn,In);return In.delete(ie),Aa;case b:if(wa)return wa.call(ie)==wa.call(ne)}return!1}(Q,ge,Ie,ve,pn,be,Me);if(!(ve&r)){var Ar=Jt&&Sn.call(Q,"__wrapped__"),Ou=Gi&&Sn.call(ge,"__wrapped__");if(Ar||Ou){var km=Ar?Q.value():Q,_m=Ou?ge.value():ge;return Me||(Me=new Yn),be(km,_m,ve,pn,Me)}}return Kt?(Me||(Me=new Yn),function(ie,ne,ji,qn,Ca,tn){var In=ji&r,Zn=Au(ie),Dr=Zn.length,zi=Au(ne),Aa=zi.length;if(Dr!=Aa&&!In)return!1;for(var Ui=Dr;Ui--;){var Pt=Zn[Ui];if(!(In?Pt in ne:Sn.call(ne,Pt)))return!1}var Vu=tn.get(ie);if(Vu&&tn.get(ne))return Vu==ne;var Bi=!0;tn.set(ie,ne),tn.set(ne,ie);for(var Da=In;++Ui<Dr;){var Wi=ie[Pt=Zn[Ui]],$i=ne[Pt];if(qn)var Nu=In?qn($i,Wi,Pt,ne,ie,tn):qn(Wi,$i,Pt,ie,ne,tn);if(!(Nu===void 0?Wi===$i||Ca(Wi,$i,ji,qn,tn):Nu)){Bi=!1;break}Da||(Da=Pt=="constructor")}if(Bi&&!Da){var Xi=ie.constructor,Ji=ne.constructor;Xi==Ji||!("constructor"in ie)||!("constructor"in ne)||typeof Xi=="function"&&Xi instanceof Xi&&typeof Ji=="function"&&Ji instanceof Ji||(Bi=!1)}return tn.delete(ie),tn.delete(ne),Bi}(Q,ge,ve,pn,be,Me)):!1}(y,M,D,B,Pu,se))}function Rm(y){return!(!Fu(y)||function(M){return!!bu&&bu in M}(y))&&(ku(y)?Tm:U).test(wt(y))}function wm(y){if(D=(M=y)&&M.constructor,B=typeof D=="function"&&D.prototype||Ln,M!==B)return Em(y);var M,D,B,se=[];for(var Q in Object(y))Sn.call(y,Q)&&Q!="constructor"&&se.push(Q);return se}function Cu(y,M,D,B,se,Q){var ge=D&r,ve=y.length,pn=M.length;if(ve!=pn&&!(ge&&pn>ve))return!1;var be=Q.get(y);if(be&&Q.get(M))return be==M;var Me=-1,xn=!0,_n=D&i?new Ii:void 0;for(Q.set(y,M),Q.set(M,y);++Me<ve;){var Ie=y[Me],Fn=M[Me];if(B)var Jt=ge?B(Fn,Ie,Me,M,y,Q):B(Ie,Fn,Me,y,M,Q);if(Jt!==void 0){if(Jt)continue;xn=!1;break}if(_n){if(!Z(M,function(Gi,Kt){if(Ar=Kt,!_n.has(Ar)&&(Ie===Gi||se(Ie,Gi,D,B,Q)))return _n.push(Kt);var Ar})){xn=!1;break}}else if(Ie!==Fn&&!se(Ie,Fn,D,B,Q)){xn=!1;break}}return Q.delete(y),Q.delete(M),xn}function Au(y){return function(M,D,B){var se=D(M);return Ni(M)?se:function(Q,ge){for(var ve=-1,pn=ge.length,be=Q.length;++ve<pn;)Q[be+ve]=ge[ve];return Q}(se,B(M))}(y,Dm,Pm)}function Vi(y,M){var D,B,se=y.__data__;return((B=typeof(D=M))=="string"||B=="number"||B=="symbol"||B=="boolean"?D!=="__proto__":D===null)?se[typeof M=="string"?"string":"hash"]:se.map}function Xt(y,M){var D=function(B,se){return B==null?void 0:B[se]}(y,M);return Rm(D)?D:void 0}xt.prototype.clear=function(){this.__data__=wr?wr(null):{},this.size=0},xt.prototype.delete=function(y){var M=this.has(y)&&delete this.__data__[y];return this.size-=M?1:0,M},xt.prototype.get=function(y){var M=this.__data__;if(wr){var D=M[y];return D===t?void 0:D}return Sn.call(M,y)?M[y]:void 0},xt.prototype.has=function(y){var M=this.__data__;return wr?M[y]!==void 0:Sn.call(M,y)},xt.prototype.set=function(y,M){var D=this.__data__;return this.size+=this.has(y)?0:1,D[y]=wr&&M===void 0?t:M,this},kn.prototype.clear=function(){this.__data__=[],this.size=0},kn.prototype.delete=function(y){var M=this.__data__,D=Oi(M,y);return!(D<0)&&(D==M.length-1?M.pop():ym.call(M,D,1),--this.size,!0)},kn.prototype.get=function(y){var M=this.__data__,D=Oi(M,y);return D<0?void 0:M[D][1]},kn.prototype.has=function(y){return Oi(this.__data__,y)>-1},kn.prototype.set=function(y,M){var D=this.__data__,B=Oi(D,y);return B<0?(++this.size,D.push([y,M])):D[B][1]=M,this},Rt.prototype.clear=function(){this.size=0,this.__data__={hash:new xt,map:new(Rr||kn),string:new xt}},Rt.prototype.delete=function(y){var M=Vi(this,y).delete(y);return this.size-=M?1:0,M},Rt.prototype.get=function(y){return Vi(this,y).get(y)},Rt.prototype.has=function(y){return Vi(this,y).has(y)},Rt.prototype.set=function(y,M){var D=Vi(this,y),B=D.size;return D.set(y,M),this.size+=D.size==B?0:1,this},Ii.prototype.add=Ii.prototype.push=function(y){return this.__data__.set(y,t),this},Ii.prototype.has=function(y){return this.__data__.has(y)},Yn.prototype.clear=function(){this.__data__=new kn,this.size=0},Yn.prototype.delete=function(y){var M=this.__data__,D=M.delete(y);return this.size=M.size,D},Yn.prototype.get=function(y){return this.__data__.get(y)},Yn.prototype.has=function(y){return this.__data__.has(y)},Yn.prototype.set=function(y,M){var D=this.__data__;if(D instanceof kn){var B=D.__data__;if(!Rr||B.length<199)return B.push([y,M]),this.size=++D.size,this;D=this.__data__=new Rt(B)}return D.set(y,M),this.size=D.size,this};var Pm=xu?function(y){return y==null?[]:(y=Object(y),function(M,D){for(var B=-1,se=M==null?0:M.length,Q=0,ge=[];++B<se;){var ve=M[B];D(ve,B,M)&&(ge[Q++]=ve)}return ge}(xu(y),function(M){return Su.call(y,M)}))}:function(){return[]},Qn=Pr;function Cm(y,M){return!!(M=M??o)&&(typeof y=="number"||K.test(y))&&y>-1&&y%1==0&&y<M}function wt(y){if(y!=null){try{return $t.call(y)}catch{}try{return y+""}catch{}}return""}function Du(y,M){return y===M||y!=y&&M!=M}(Ha&&Qn(new Ha(new ArrayBuffer(1)))!=V||Rr&&Qn(new Rr)!=g||Sa&&Qn(Sa.resolve())!=c||xa&&Qn(new xa)!=L||Ra&&Qn(new Ra)!=w)&&(Qn=function(y){var M=Pr(y),D=M==m?y.constructor:void 0,B=D?wt(D):"";if(B)switch(B){case bm:return V;case Mm:return g;case Lm:return c;case Hm:return L;case Sm:return w}return M});var Am=wu(function(){return arguments}())?wu:function(y){return Cr(y)&&Sn.call(y,"callee")&&!Su.call(y,"callee")},Ni=Array.isArray,Pa=vm||function(){return!1};function ku(y){if(!Fu(y))return!1;var M=Pr(y);return M==h||M==T||M==l||M==p}function _u(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=o}function Fu(y){var M=typeof y;return y!=null&&(M=="object"||M=="function")}function Cr(y){return y!=null&&typeof y=="object"}var Iu=J?function(y){return function(M){return y(M)}}(J):function(y){return Cr(y)&&_u(y.length)&&!!_[Pr(y)]};function Dm(y){return(M=y)!=null&&_u(M.length)&&!ku(M)?xm(y):wm(y);var M}e.exports=function(y,M){return Pu(y,M)}})(El,El.exports);var uE=_i(El.exports);function dc(e,n,t){return e[n]?e[n][0]?e[n][0][t]:e[n][t]:n==="contentBoxSize"?e.contentRect[t==="inlineSize"?"width":"height"]:void 0}function dE(e){e===void 0&&(e={});var n=e.onResize,t=S.useRef(void 0);t.current=n;var r=e.round||Math.round,i=S.useRef(),o=S.useState({width:void 0,height:void 0}),a=o[0],s=o[1],l=S.useRef(!1);S.useEffect(function(){return l.current=!1,function(){l.current=!0}},[]);var u=S.useRef({width:void 0,height:void 0}),d=function(f,h){var T=S.useRef(null),g=S.useRef(null);g.current=h;var v=S.useRef(null);S.useEffect(function(){x()});var x=S.useCallback(function(){var m=v.current,c=g.current,p=m||(c?c instanceof Element?c:c.current:null);T.current&&T.current.element===p&&T.current.subscriber===f||(T.current&&T.current.cleanup&&T.current.cleanup(),T.current={element:p,subscriber:f,cleanup:p?f(p):void 0})},[f]);return S.useEffect(function(){return function(){T.current&&T.current.cleanup&&(T.current.cleanup(),T.current=null)}},[]),S.useCallback(function(m){v.current=m,x()},[x])}(S.useCallback(function(f){return i.current&&i.current.box===e.box&&i.current.round===r||(i.current={box:e.box,round:r,instance:new ResizeObserver(function(h){var T=h[0],g=e.box==="border-box"?"borderBoxSize":e.box==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",v=dc(T,g,"inlineSize"),x=dc(T,g,"blockSize"),m=v?r(v):void 0,c=x?r(x):void 0;if(u.current.width!==m||u.current.height!==c){var p={width:m,height:c};u.current.width=m,u.current.height=c,t.current?t.current(p):l.current||s(p)}})}),i.current.instance.observe(f,{box:e.box}),function(){i.current&&i.current.instance.unobserve(f)}},[e.box,r]),e.ref);return S.useMemo(function(){return{ref:d,width:a.width,height:a.height}},[d,a.width,a.height])}var cE="allotment-module_splitView__L-yRc",fE="allotment-module_sashContainer__fzwJF",pE="allotment-module_splitViewContainer__rQnVa",lm="allotment-module_splitViewView__MGZ6O",mE="allotment-module_vertical__WSwwa",hE="allotment-module_horizontal__7doS8",gE="allotment-module_separatorBorder__x-rDS";let Wr,um=!1,dm=!1;typeof navigator=="object"&&(Wr=navigator.userAgent,dm=Wr.indexOf("Macintosh")>=0,um=(Wr.indexOf("Macintosh")>=0||Wr.indexOf("iPad")>=0||Wr.indexOf("iPhone")>=0)&&!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0);const cm=um,TE=dm,hs=typeof window<"u"&&window.document!==void 0&&window.document.createElement!==void 0?S.useLayoutEffect:S.useEffect;class yE{constructor(){this._size=void 0}getSize(){return this._size}setSize(n){this._size=n}}function go(e,n){const t=e.length,r=t-n.length;return r>=0&&e.slice(r,t)===n}var fm={exports:{}};(function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}function i(l,u,d){this.fn=l,this.context=u,this.once=d||!1}function o(l,u,d,f,h){if(typeof d!="function")throw new TypeError("The listener must be a function");var T=new i(d,f||l,h),g=t?t+u:u;return l._events[g]?l._events[g].fn?l._events[g]=[l._events[g],T]:l._events[g].push(T):(l._events[g]=T,l._eventsCount++),l}function a(l,u){--l._eventsCount==0?l._events=new r:delete l._events[u]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1)),s.prototype.eventNames=function(){var l,u,d=[];if(this._eventsCount===0)return d;for(u in l=this._events)n.call(l,u)&&d.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(l)):d},s.prototype.listeners=function(l){var u=t?t+l:l,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var f=0,h=d.length,T=new Array(h);f<h;f++)T[f]=d[f].fn;return T},s.prototype.listenerCount=function(l){var u=t?t+l:l,d=this._events[u];return d?d.fn?1:d.length:0},s.prototype.emit=function(l,u,d,f,h,T){var g=t?t+l:l;if(!this._events[g])return!1;var v,x,m=this._events[g],c=arguments.length;if(m.fn){switch(m.once&&this.removeListener(l,m.fn,void 0,!0),c){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,u),!0;case 3:return m.fn.call(m.context,u,d),!0;case 4:return m.fn.call(m.context,u,d,f),!0;case 5:return m.fn.call(m.context,u,d,f,h),!0;case 6:return m.fn.call(m.context,u,d,f,h,T),!0}for(x=1,v=new Array(c-1);x<c;x++)v[x-1]=arguments[x];m.fn.apply(m.context,v)}else{var p,E=m.length;for(x=0;x<E;x++)switch(m[x].once&&this.removeListener(l,m[x].fn,void 0,!0),c){case 1:m[x].fn.call(m[x].context);break;case 2:m[x].fn.call(m[x].context,u);break;case 3:m[x].fn.call(m[x].context,u,d);break;case 4:m[x].fn.call(m[x].context,u,d,f);break;default:if(!v)for(p=1,v=new Array(c-1);p<c;p++)v[p-1]=arguments[p];m[x].fn.apply(m[x].context,v)}}return!0},s.prototype.on=function(l,u,d){return o(this,l,u,d,!1)},s.prototype.once=function(l,u,d){return o(this,l,u,d,!0)},s.prototype.removeListener=function(l,u,d,f){var h=t?t+l:l;if(!this._events[h])return this;if(!u)return a(this,h),this;var T=this._events[h];if(T.fn)T.fn!==u||f&&!T.once||d&&T.context!==d||a(this,h);else{for(var g=0,v=[],x=T.length;g<x;g++)(T[g].fn!==u||f&&!T[g].once||d&&T[g].context!==d)&&v.push(T[g]);v.length?this._events[h]=v.length===1?v[0]:v:a(this,h)}return this},s.prototype.removeAllListeners=function(l){var u;return l?(u=t?t+l:l,this._events[u]&&a(this,u)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s})(fm);var vu=_i(fm.exports);function cc(e,n){const t=e.indexOf(n);t>-1&&(e.splice(t,1),e.unshift(n))}function gs(e,n){const t=e.indexOf(n);t>-1&&(e.splice(t,1),e.push(n))}function rn(e,n,t=1){const r=Math.max(0,Math.ceil((n-e)/t)),i=new Array(r);let o=-1;for(;++o<r;)i[o]=e+o*t;return i}var fc=NaN,vE="[object Symbol]",EE=/^\s+|\s+$/g,bE=/^[-+]0x[0-9a-f]+$/i,ME=/^0b[01]+$/i,LE=/^0o[0-7]+$/i,HE=parseInt,SE=typeof lt=="object"&&lt&&lt.Object===Object&&lt,xE=typeof self=="object"&&self&&self.Object===Object&&self,RE=SE||xE||Function("return this")(),wE=Object.prototype.toString,PE=Math.max,CE=Math.min,Ts=function(){return RE.Date.now()};function bl(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function pc(e){if(typeof e=="number")return e;if(function(r){return typeof r=="symbol"||function(i){return!!i&&typeof i=="object"}(r)&&wE.call(r)==vE}(e))return fc;if(bl(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=bl(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(EE,"");var t=ME.test(e);return t||LE.test(e)?HE(e.slice(2),t?2:8):bE.test(e)?fc:+e}var AE=_i(function(e,n,t){var r,i,o,a,s,l,u=0,d=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError("Expected a function");function T(c){var p=r,E=i;return r=i=void 0,u=c,a=e.apply(E,p)}function g(c){var p=c-l;return l===void 0||p>=n||p<0||f&&c-u>=o}function v(){var c=Ts();if(g(c))return x(c);s=setTimeout(v,function(p){var E=n-(p-l);return f?CE(E,o-(p-u)):E}(c))}function x(c){return s=void 0,h&&r?T(c):(r=i=void 0,a)}function m(){var c=Ts(),p=g(c);if(r=arguments,i=this,l=c,p){if(s===void 0)return function(E){return u=E,s=setTimeout(v,n),d?T(E):a}(l);if(f)return s=setTimeout(v,n),T(l)}return s===void 0&&(s=setTimeout(v,n)),a}return n=pc(n)||0,bl(t)&&(d=!!t.leading,o=(f="maxWait"in t)?PE(pc(t.maxWait)||0,n):o,h="trailing"in t?!!t.trailing:h),m.cancel=function(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0},m.flush=function(){return s===void 0?a:x(Ts())},m}),DE="sash-module_sash__K-9lB",kE="sash-module_disabled__Hm-wx",_E="sash-module_mac__Jf6OJ",mc="sash-module_vertical__pB-rs",FE="sash-module_minimum__-UKxp",IE="sash-module_maximum__TCWxD",hc="sash-module_horizontal__kFbiw",ys="sash-module_hover__80W6I",vs="sash-module_active__bJspD";let ln=function(e){return e.Vertical="VERTICAL",e.Horizontal="HORIZONTAL",e}({}),Je=function(e){return e.Disabled="DISABLED",e.Minimum="MINIMUM",e.Maximum="MAXIMUM",e.Enabled="ENABLED",e}({}),pm=cm?20:8;const mm=new vu;class gc extends vu{get state(){return this._state}set state(n){this._state!==n&&(this.el.classList.toggle(kE,n===Je.Disabled),this.el.classList.toggle("sash-disabled",n===Je.Disabled),this.el.classList.toggle(FE,n===Je.Minimum),this.el.classList.toggle("sash-minimum",n===Je.Minimum),this.el.classList.toggle(IE,n===Je.Maximum),this.el.classList.toggle("sash-maximum",n===Je.Maximum),this._state=n,this.emit("enablementChange",n))}constructor(n,t,r){var i;super(),this.el=void 0,this.layoutProvider=void 0,this.orientation=void 0,this.size=void 0,this.hoverDelay=300,this.hoverDelayer=AE(o=>o.classList.add("sash-hover",ys),this.hoverDelay),this._state=Je.Enabled,this.onPointerStart=o=>{const a=o.pageX,s=o.pageY,l={startX:a,currentX:a,startY:s,currentY:s};this.el.classList.add("sash-active",vs),this.emit("start",l),this.el.setPointerCapture(o.pointerId);const u=f=>{f.preventDefault();const h={startX:a,currentX:f.pageX,startY:s,currentY:f.pageY};this.emit("change",h)},d=f=>{f.preventDefault(),this.el.classList.remove("sash-active",vs),this.hoverDelayer.cancel(),this.emit("end"),this.el.releasePointerCapture(f.pointerId),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",d)};window.addEventListener("pointermove",u),window.addEventListener("pointerup",d)},this.onPointerDoublePress=()=>{this.emit("reset")},this.onMouseEnter=()=>{this.el.classList.contains(vs)?(this.hoverDelayer.cancel(),this.el.classList.add("sash-hover",ys)):this.hoverDelayer(this.el)},this.onMouseLeave=()=>{this.hoverDelayer.cancel(),this.el.classList.remove("sash-hover",ys)},this.el=document.createElement("div"),this.el.classList.add("sash",DE),this.el.dataset.testid="sash",n.append(this.el),TE&&this.el.classList.add("sash-mac",_E),this.el.addEventListener("pointerdown",this.onPointerStart),this.el.addEventListener("dblclick",this.onPointerDoublePress),this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("mouseleave",this.onMouseLeave),typeof r.size=="number"?(this.size=r.size,r.orientation===ln.Vertical?this.el.style.width=`${this.size}px`:this.el.style.height=`${this.size}px`):(this.size=pm,mm.on("onDidChangeGlobalSize",o=>{this.size=o,this.layout()})),this.layoutProvider=t,this.orientation=(i=r.orientation)!=null?i:ln.Vertical,this.orientation===ln.Horizontal?(this.el.classList.add("sash-horizontal",hc),this.el.classList.remove("sash-vertical",mc)):(this.el.classList.remove("sash-horizontal",hc),this.el.classList.add("sash-vertical",mc)),this.layout()}layout(){if(this.orientation===ln.Vertical){const n=this.layoutProvider;this.el.style.left=n.getVerticalSashLeft(this)-this.size/2+"px",n.getVerticalSashTop&&(this.el.style.top=n.getVerticalSashTop(this)+"px"),n.getVerticalSashHeight&&(this.el.style.height=n.getVerticalSashHeight(this)+"px")}else{const n=this.layoutProvider;this.el.style.top=n.getHorizontalSashTop(this)-this.size/2+"px",n.getHorizontalSashLeft&&(this.el.style.left=n.getHorizontalSashLeft(this)+"px"),n.getHorizontalSashWidth&&(this.el.style.width=n.getHorizontalSashWidth(this)+"px")}}dispose(){this.el.removeEventListener("pointerdown",this.onPointerStart),this.el.removeEventListener("dblclick",this.onPointerDoublePress),this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("mouseleave",()=>this.onMouseLeave),this.el.remove()}}let ta;var Es;(Es=ta||(ta={})).Distribute={type:"distribute"},Es.Split=function(e){return{type:"split",index:e}},Es.Invisible=function(e){return{type:"invisible",cachedVisibleSize:e}};let Gn=function(e){return e.Normal="NORMAL",e.Low="LOW",e.High="HIGH",e}({});class hm{constructor(n,t,r){this.container=void 0,this.view=void 0,this._size=void 0,this._cachedVisibleSize=void 0,this.container=n,this.view=t,this.container.classList.add("split-view-view",lm),this.container.dataset.testid="split-view-view",typeof r=="number"?(this._size=r,this._cachedVisibleSize=void 0,n.classList.add("split-view-view-visible")):(this._size=0,this._cachedVisibleSize=r.cachedVisibleSize)}set size(n){this._size=n}get size(){return this._size}get priority(){return this.view.priority}get snap(){return!!this.view.snap}get cachedVisibleSize(){return this._cachedVisibleSize}get visible(){return this._cachedVisibleSize===void 0}setVisible(n,t){n!==this.visible&&(n?(this.size=Tn(this._cachedVisibleSize,this.viewMinimumSize,this.viewMaximumSize),this._cachedVisibleSize=void 0):(this._cachedVisibleSize=typeof t=="number"?t:this.size,this.size=0),this.container.classList.toggle("split-view-view-visible",n),this.view.setVisible&&this.view.setVisible(n))}get minimumSize(){return this.visible?this.view.minimumSize:0}get viewMinimumSize(){return this.view.minimumSize}get maximumSize(){return this.visible?this.view.maximumSize:0}get viewMaximumSize(){return this.view.maximumSize}set enabled(n){this.container.style.pointerEvents=n?"":"none"}layout(n){this.layoutContainer(n),this.view.layout(this.size,n)}}class OE extends hm{layoutContainer(n){this.container.style.left=`${n}px`,this.container.style.width=`${this.size}px`}}class VE extends hm{layoutContainer(n){this.container.style.top=`${n}px`,this.container.style.height=`${this.size}px`}}class NE extends vu{get startSnappingEnabled(){return this._startSnappingEnabled}set startSnappingEnabled(n){this._startSnappingEnabled!==n&&(this._startSnappingEnabled=n,this.updateSashEnablement())}get endSnappingEnabled(){return this._endSnappingEnabled}set endSnappingEnabled(n){this._endSnappingEnabled!==n&&(this._endSnappingEnabled=n,this.updateSashEnablement())}constructor(n,t={},r,i,o){var a,s;if(super(),this.onDidChange=void 0,this.onDidDragStart=void 0,this.onDidDragEnd=void 0,this.orientation=void 0,this.sashContainer=void 0,this.size=0,this.contentSize=0,this.proportions=void 0,this.viewItems=[],this.sashItems=[],this.sashDragState=void 0,this.proportionalLayout=void 0,this.getSashOrthogonalSize=void 0,this._startSnappingEnabled=!0,this._endSnappingEnabled=!0,this.onSashEnd=l=>{this.emit("sashchange",l),this.saveProportions();for(const u of this.viewItems)u.enabled=!0},this.orientation=(a=t.orientation)!=null?a:ln.Vertical,this.proportionalLayout=(s=t.proportionalLayout)!=null?s:!0,this.getSashOrthogonalSize=t.getSashOrthogonalSize,r&&(this.onDidChange=r),i&&(this.onDidDragStart=i),o&&(this.onDidDragEnd=o),this.sashContainer=document.createElement("div"),this.sashContainer.classList.add("sash-container",fE),n.prepend(this.sashContainer),t.descriptor){this.size=t.descriptor.size;for(const[l,u]of t.descriptor.views.entries()){const d=u.size,f=u.container,h=u.view;this.addView(f,h,d,l,!0)}this.contentSize=this.viewItems.reduce((l,u)=>l+u.size,0),this.saveProportions()}}addView(n,t,r,i=this.viewItems.length,o){let a;a=typeof r=="number"?r:r.type==="split"?this.getViewSize(r.index)/2:r.type==="invisible"?{cachedVisibleSize:r.cachedVisibleSize}:t.minimumSize;const s=this.orientation===ln.Vertical?new VE(n,t,a):new OE(n,t,a);if(this.viewItems.splice(i,0,s),this.viewItems.length>1){const l=this.orientation===ln.Vertical?new gc(this.sashContainer,{getHorizontalSashTop:f=>this.getSashPosition(f),getHorizontalSashWidth:this.getSashOrthogonalSize},{orientation:ln.Horizontal}):new gc(this.sashContainer,{getVerticalSashLeft:f=>this.getSashPosition(f),getVerticalSashHeight:this.getSashOrthogonalSize},{orientation:ln.Vertical}),u=this.orientation===ln.Vertical?f=>({sash:l,start:f.startY,current:f.currentY}):f=>({sash:l,start:f.startX,current:f.currentX});l.on("start",f=>{var h;this.emit("sashDragStart"),this.onSashStart(u(f));const T=this.viewItems.map(g=>g.size);(h=this.onDidDragStart)==null||h.call(this,T)}),l.on("change",f=>this.onSashChange(u(f))),l.on("end",()=>{var f;this.emit("sashDragEnd"),this.onSashEnd(this.sashItems.findIndex(T=>T.sash===l));const h=this.viewItems.map(T=>T.size);(f=this.onDidDragEnd)==null||f.call(this,h)}),l.on("reset",()=>{const f=this.sashItems.findIndex(x=>x.sash===l),h=rn(f,-1,-1),T=rn(f+1,this.viewItems.length),g=this.findFirstSnapIndex(h),v=this.findFirstSnapIndex(T);(typeof g!="number"||this.viewItems[g].visible)&&(typeof v!="number"||this.viewItems[v].visible)&&this.emit("sashreset",f)});const d={sash:l};this.sashItems.splice(i-1,0,d)}o||this.relayout(),o||typeof r=="number"||r.type!=="distribute"||this.distributeViewSizes()}removeView(n,t){if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");const r=this.viewItems.splice(n,1)[0].view;if(this.viewItems.length>=1){const i=Math.max(n-1,0);this.sashItems.splice(i,1)[0].sash.dispose()}return this.relayout(),t&&t.type==="distribute"&&this.distributeViewSizes(),r}moveView(n,t,r){const i=this.getViewCachedVisibleSize(t),o=i===void 0?this.getViewSize(t):ta.Invisible(i),a=this.removeView(t);this.addView(n,a,o,r)}getViewCachedVisibleSize(n){if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");return this.viewItems[n].cachedVisibleSize}layout(n=this.size){const t=Math.max(this.size,this.contentSize);if(this.size=n,this.proportions)for(let r=0;r<this.viewItems.length;r++){const i=this.viewItems[r];i.size=Tn(Math.round(this.proportions[r]*n),i.minimumSize,i.maximumSize)}else{const r=rn(0,this.viewItems.length),i=r.filter(a=>this.viewItems[a].priority===Gn.Low),o=r.filter(a=>this.viewItems[a].priority===Gn.High);this.resize(this.viewItems.length-1,n-t,void 0,i,o)}this.distributeEmptySpace(),this.layoutViews()}resizeView(n,t){if(n<0||n>=this.viewItems.length)return;const r=rn(0,this.viewItems.length).filter(s=>s!==n),i=[...r.filter(s=>this.viewItems[s].priority===Gn.Low),n],o=r.filter(s=>this.viewItems[s].priority===Gn.High),a=this.viewItems[n];t=Math.round(t),t=Tn(t,a.minimumSize,Math.min(a.maximumSize,this.size)),a.size=t,this.relayout(i,o)}resizeViews(n){for(let t=0;t<n.length;t++){const r=this.viewItems[t];let i=n[t];i=Math.round(i),i=Tn(i,r.minimumSize,Math.min(r.maximumSize,this.size)),r.size=i}this.contentSize=this.viewItems.reduce((t,r)=>t+r.size,0),this.saveProportions(),this.layout(this.size)}getViewSize(n){return n<0||n>=this.viewItems.length?-1:this.viewItems[n].size}isViewVisible(n){if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");return this.viewItems[n].visible}setViewVisible(n,t){if(n<0||n>=this.viewItems.length)throw new Error("Index out of bounds");this.viewItems[n].setVisible(t),this.distributeEmptySpace(n),this.layoutViews(),this.saveProportions()}distributeViewSizes(){const n=[];let t=0;for(const s of this.viewItems)s.maximumSize-s.minimumSize>0&&(n.push(s),t+=s.size);const r=Math.floor(t/n.length);for(const s of n)s.size=Tn(r,s.minimumSize,s.maximumSize);const i=rn(0,this.viewItems.length),o=i.filter(s=>this.viewItems[s].priority===Gn.Low),a=i.filter(s=>this.viewItems[s].priority===Gn.High);this.relayout(o,a)}dispose(){this.sashItems.forEach(n=>n.sash.dispose()),this.sashItems=[],this.sashContainer.remove()}relayout(n,t){const r=this.viewItems.reduce((i,o)=>i+o.size,0);this.resize(this.viewItems.length-1,this.size-r,void 0,n,t),this.distributeEmptySpace(),this.layoutViews(),this.saveProportions()}onSashStart({sash:n,start:t}){const r=this.sashItems.findIndex(i=>i.sash===n);(i=>{const o=this.viewItems.map(c=>c.size);let a,s,l=Number.NEGATIVE_INFINITY,u=Number.POSITIVE_INFINITY;const d=rn(r,-1,-1),f=rn(r+1,this.viewItems.length),h=d.reduce((c,p)=>c+(this.viewItems[p].minimumSize-o[p]),0),T=d.reduce((c,p)=>c+(this.viewItems[p].viewMaximumSize-o[p]),0),g=f.length===0?Number.POSITIVE_INFINITY:f.reduce((c,p)=>c+(o[p]-this.viewItems[p].minimumSize),0),v=f.length===0?Number.NEGATIVE_INFINITY:f.reduce((c,p)=>c+(o[p]-this.viewItems[p].viewMaximumSize),0);l=Math.max(h,v),u=Math.min(g,T);const x=this.findFirstSnapIndex(d),m=this.findFirstSnapIndex(f);if(typeof x=="number"){const c=this.viewItems[x],p=Math.floor(c.viewMinimumSize/2);a={index:x,limitDelta:c.visible?l-p:l+p,size:c.size}}if(typeof m=="number"){const c=this.viewItems[m],p=Math.floor(c.viewMinimumSize/2);s={index:m,limitDelta:c.visible?u+p:u-p,size:c.size}}this.sashDragState={start:i,current:i,index:r,sizes:o,minDelta:l,maxDelta:u,snapBefore:a,snapAfter:s}})(t)}onSashChange({current:n}){const{index:t,start:r,sizes:i,minDelta:o,maxDelta:a,snapBefore:s,snapAfter:l}=this.sashDragState;this.sashDragState.current=n;const u=n-r;this.resize(t,u,i,void 0,void 0,o,a,s,l),this.distributeEmptySpace(),this.layoutViews()}getSashPosition(n){let t=0;for(let r=0;r<this.sashItems.length;r++)if(t+=this.viewItems[r].size,this.sashItems[r].sash===n)return t;return 0}resize(n,t,r=this.viewItems.map(d=>d.size),i,o,a=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,l,u){if(n<0||n>=this.viewItems.length)return 0;const d=rn(n,-1,-1),f=rn(n+1,this.viewItems.length);if(o)for(const b of o)cc(d,b),cc(f,b);if(i)for(const b of i)gs(d,b),gs(f,b);const h=d.map(b=>this.viewItems[b]),T=d.map(b=>r[b]),g=f.map(b=>this.viewItems[b]),v=f.map(b=>r[b]),x=d.reduce((b,H)=>b+(this.viewItems[H].minimumSize-r[H]),0),m=d.reduce((b,H)=>b+(this.viewItems[H].maximumSize-r[H]),0),c=f.length===0?Number.POSITIVE_INFINITY:f.reduce((b,H)=>b+(r[H]-this.viewItems[H].minimumSize),0),p=f.length===0?Number.NEGATIVE_INFINITY:f.reduce((b,H)=>b+(r[H]-this.viewItems[H].maximumSize),0),E=Math.max(x,p,a),L=Math.min(c,m,s);let R=!1;if(l){const b=this.viewItems[l.index],H=t>=l.limitDelta;R=H!==b.visible,b.setVisible(H,l.size)}if(!R&&u){const b=this.viewItems[u.index],H=t<u.limitDelta;R=H!==b.visible,b.setVisible(H,u.size)}if(R)return this.resize(n,t,r,i,o,a,s);for(let b=0,H=t=Tn(t,E,L);b<h.length;b++){const w=h[b],C=Tn(T[b]+H,w.minimumSize,w.maximumSize);H-=C-T[b],w.size=C}for(let b=0,H=t;b<g.length;b++){const w=g[b],C=Tn(v[b]-H,w.minimumSize,w.maximumSize);H+=C-v[b],w.size=C}return t}distributeEmptySpace(n){const t=this.viewItems.reduce((o,a)=>o+a.size,0);let r=this.size-t;const i=rn(this.viewItems.length-1,-1,-1);typeof n=="number"&&gs(i,n);for(let o=0;r!==0&&o<i.length;o++){const a=this.viewItems[i[o]],s=Tn(a.size+r,a.minimumSize,a.maximumSize);r-=s-a.size,a.size=s}}layoutViews(){var n;this.contentSize=this.viewItems.reduce((r,i)=>r+i.size,0);let t=0;for(const r of this.viewItems)r.layout(t),t+=r.size;(n=this.onDidChange)!=null&&n.call(this,this.viewItems.map(r=>r.size)),this.sashItems.forEach(r=>r.sash.layout()),this.updateSashEnablement()}saveProportions(){this.proportionalLayout&&this.contentSize>0&&(this.proportions=this.viewItems.map(n=>n.size/this.contentSize))}updateSashEnablement(){let n=!1;const t=this.viewItems.map(l=>n=l.size-l.minimumSize>0||n);n=!1;const r=this.viewItems.map(l=>n=l.maximumSize-l.size>0||n),i=[...this.viewItems].reverse();n=!1;const o=i.map(l=>n=l.size-l.minimumSize>0||n).reverse();n=!1;const a=i.map(l=>n=l.maximumSize-l.size>0||n).reverse();let s=0;for(let l=0;l<this.sashItems.length;l++){const{sash:u}=this.sashItems[l];s+=this.viewItems[l].size;const d=!(t[l]&&a[l+1]),f=!(r[l]&&o[l+1]);if(d&&f){const h=rn(l,-1,-1),T=rn(l+1,this.viewItems.length),g=this.findFirstSnapIndex(h),v=this.findFirstSnapIndex(T),x=typeof g=="number"&&!this.viewItems[g].visible,m=typeof v=="number"&&!this.viewItems[v].visible;x&&o[l]&&(s>0||this.startSnappingEnabled)?u.state=Je.Minimum:m&&t[l]&&(s<this.contentSize||this.endSnappingEnabled)?u.state=Je.Maximum:u.state=Je.Disabled}else u.state=d&&!f?Je.Minimum:!d&&f?Je.Maximum:Je.Enabled}}findFirstSnapIndex(n){for(const t of n){const r=this.viewItems[t];if(r.visible&&r.snap)return t}for(const t of n){const r=this.viewItems[t];if(r.visible&&r.maximumSize-r.minimumSize>0)return;if(!r.visible&&r.snap)return t}}}class Qt{constructor(n){this.size=void 0,this.size=n}getPreferredSize(){return this.size}}class Tc{constructor(n,t){this.proportion=void 0,this.layoutService=void 0,this.proportion=n,this.layoutService=t}getPreferredSize(){return this.proportion*this.layoutService.getSize()}}class To{getPreferredSize(){}}class yc{get preferredSize(){return this.layoutStrategy.getPreferredSize()}set preferredSize(n){if(typeof n=="number")this.layoutStrategy=new Qt(n);else if(typeof n=="string"){const t=n.trim();if(go(t,"%")){const r=Number(t.slice(0,-1))/100;this.layoutStrategy=new Tc(r,this.layoutService)}else if(go(t,"px")){const r=Number(t.slice(0,-2))/100;this.layoutStrategy=new Qt(r)}else if(typeof Number.parseFloat(t)=="number"){const r=Number.parseFloat(t);this.layoutStrategy=new Qt(r)}else this.layoutStrategy=new To}else this.layoutStrategy=new To}constructor(n,t){var r;if(this.minimumSize=0,this.maximumSize=Number.POSITIVE_INFINITY,this.element=void 0,this.priority=void 0,this.snap=void 0,this.layoutService=void 0,this.layoutStrategy=void 0,this.layoutService=n,this.element=t.element,this.minimumSize=typeof t.minimumSize=="number"?t.minimumSize:30,this.maximumSize=typeof t.maximumSize=="number"?t.maximumSize:Number.POSITIVE_INFINITY,typeof t.preferredSize=="number")this.layoutStrategy=new Qt(t.preferredSize);else if(typeof t.preferredSize=="string"){const i=t.preferredSize.trim();if(go(i,"%")){const o=Number(i.slice(0,-1))/100;this.layoutStrategy=new Tc(o,this.layoutService)}else if(go(i,"px")){const o=Number(i.slice(0,-2));this.layoutStrategy=new Qt(o)}else if(typeof Number.parseFloat(i)=="number"){const o=Number.parseFloat(i);this.layoutStrategy=new Qt(o)}else this.layoutStrategy=new To}else this.layoutStrategy=new To;this.priority=(r=t.priority)!=null?r:Gn.Normal,this.snap=typeof t.snap=="boolean"&&t.snap}layout(n){}}function vc(e){return e.minSize!==void 0||e.maxSize!==void 0||e.preferredSize!==void 0||e.priority!==void 0||e.visible!==void 0}const Eu=S.forwardRef(({className:e,children:n},t)=>ke.createElement("div",{ref:t,className:vl("split-view-view",lm,e)},n));Eu.displayName="Allotment.Pane";const gm=S.forwardRef(({children:e,className:n,maxSize:t=1/0,minSize:r=30,proportionalLayout:i=!0,separator:o=!0,sizes:a,defaultSizes:s=a,snap:l=!1,vertical:u=!1,onChange:d,onReset:f,onVisibleChange:h,onDragStart:T,onDragEnd:g},v)=>{const x=S.useRef(null),m=S.useRef([]),c=S.useRef(new Map),p=S.useRef(null),E=S.useRef(new Map),L=S.useRef(new yE),R=S.useRef([]),[b,H]=S.useState(!1),w=S.useMemo(()=>ke.Children.toArray(e).filter(ke.isValidElement),[e]),C=S.useCallback(V=>{var U,K;const _=(U=R.current)==null?void 0:U[V];return typeof(_==null?void 0:_.preferredSize)=="number"&&((K=p.current)!=null&&K.resizeView(V,Math.round(_.preferredSize)),!0)},[]);return S.useImperativeHandle(v,()=>({reset:()=>{if(f)f();else{var V;(V=p.current)==null||V.distributeViewSizes();for(let U=0;U<R.current.length;U++)C(U)}},resize:V=>{var U;(U=p.current)==null||U.resizeViews(V)}})),hs(()=>{let V=!0;s&&E.current.size!==s.length&&(V=!1,console.warn(`Expected ${s.length} children based on defaultSizes but found ${E.current.size}`)),V&&s&&(m.current=w.map(_=>_.key));const U=si({orientation:u?ln.Vertical:ln.Horizontal,proportionalLayout:i},V&&s&&{descriptor:{size:s.reduce((_,F)=>_+F,0),views:s.map((_,F)=>{var z,W,P,I;const j=c.current.get(m.current[F]),k=new yc(L.current,si({element:document.createElement("div"),minimumSize:(z=j==null?void 0:j.minSize)!=null?z:r,maximumSize:(W=j==null?void 0:j.maxSize)!=null?W:t,priority:(P=j==null?void 0:j.priority)!=null?P:Gn.Normal},(j==null?void 0:j.preferredSize)&&{preferredSize:j==null?void 0:j.preferredSize},{snap:(I=j==null?void 0:j.snap)!=null?I:l}));return R.current.push(k),{container:[...E.current.values()][F],size:_,view:k}})}});p.current=new NE(x.current,U,d,T,g),p.current.on("sashDragStart",()=>{var _;(_=x.current)==null||_.classList.add("split-view-sash-dragging")}),p.current.on("sashDragEnd",()=>{var _;(_=x.current)==null||_.classList.remove("split-view-sash-dragging")}),p.current.on("sashchange",_=>{if(h&&p.current){const F=w.map(z=>z.key);for(let z=0;z<F.length;z++){const W=c.current.get(F[z]);(W==null?void 0:W.visible)!==void 0&&W.visible!==p.current.isViewVisible(z)&&h(z,p.current.isViewVisible(z))}}}),p.current.on("sashreset",_=>{if(f)f();else{var F;if(C(_)||C(_+1))return;(F=p.current)==null||F.distributeViewSizes()}});const K=p.current;return()=>{K.dispose()}},[]),hs(()=>{if(b){const N=w.map($=>$.key),J=[...m.current],Z=N.filter($=>!m.current.includes($)),Y=N.filter($=>m.current.includes($)),ce=m.current.map($=>!N.includes($));for(let $=ce.length-1;$>=0;$--){var V;ce[$]&&((V=p.current)!=null&&V.removeView($),J.splice($,1),R.current.splice($,1))}for(const $ of Z){var U,K,_,F,z;const X=c.current.get($),re=new yc(L.current,si({element:document.createElement("div"),minimumSize:(U=X==null?void 0:X.minSize)!=null?U:r,maximumSize:(K=X==null?void 0:X.maxSize)!=null?K:t,priority:(_=X==null?void 0:X.priority)!=null?_:Gn.Normal},(X==null?void 0:X.preferredSize)&&{preferredSize:X==null?void 0:X.preferredSize},{snap:(F=X==null?void 0:X.snap)!=null?F:l}));(z=p.current)!=null&&z.addView(E.current.get($),re,ta.Distribute,N.findIndex(oe=>oe===$)),J.splice(N.findIndex(oe=>oe===$),0,$),R.current.splice(N.findIndex(oe=>oe===$),0,re)}for(;!uE(N,J);)for(const[$,X]of N.entries()){const re=J.findIndex(oe=>oe===X);if(re!==$){var W;(W=p.current)==null||W.moveView(E.current.get(X),re,$);const oe=J[re];J.splice(re,1),J.splice($,0,oe);break}}for(const $ of Z){var P;const X=N.findIndex(oe=>oe===$),re=R.current[X].preferredSize;re!==void 0&&((P=p.current)==null||P.resizeView(X,re))}for(const $ of[...Z,...Y]){var I,j;const X=c.current.get($),re=N.findIndex(oe=>oe===$);X&&vc(X)&&X.visible!==void 0&&((I=p.current)==null?void 0:I.isViewVisible(re))!==X.visible&&((j=p.current)==null||j.setViewVisible(re,X.visible))}for(const $ of Y){const X=c.current.get($),re=N.findIndex(oe=>oe===$);if(X&&vc(X)){var k;X.preferredSize!==void 0&&R.current[re].preferredSize!==X.preferredSize&&(R.current[re].preferredSize=X.preferredSize);let oe=!1;X.minSize!==void 0&&R.current[re].minimumSize!==X.minSize&&(R.current[re].minimumSize=X.minSize,oe=!0),X.maxSize!==void 0&&R.current[re].maximumSize!==X.maxSize&&(R.current[re].maximumSize=X.maxSize,oe=!0),oe&&((k=p.current)==null||k.layout())}}(Z.length>0||ce.length>0)&&(m.current=N)}},[w,b,t,r,l]),S.useEffect(()=>{p.current&&(p.current.onDidChange=d)},[d]),S.useEffect(()=>{p.current&&(p.current.onDidDragStart=T)},[T]),S.useEffect(()=>{p.current&&(p.current.onDidDragEnd=g)},[g]),dE({ref:x,onResize:({width:V,height:U})=>{var K;V&&U&&((K=p.current)!=null&&K.layout(u?U:V),L.current.setSize(u?U:V),H(!0))}}),hs(()=>{if(!b){var V;const{height:U,width:K}=x.current.getBoundingClientRect();(V=p.current)!=null&&V.layout(u?U:K),L.current.setSize(u?U:K),H(!0)}},[b,u]),S.useEffect(()=>{cm&&GE(20)},[]),ke.createElement("div",{ref:x,className:vl("split-view",u?"split-view-vertical":"split-view-horizontal",{"split-view-separator-border":o},cE,u?mE:hE,{[gE]:o},n)},ke.createElement("div",{className:vl("split-view-container",pE)},ke.Children.toArray(e).map(V=>{if(!ke.isValidElement(V))return null;const U=V.key;return V.type.displayName==="Allotment.Pane"?(c.current.set(U,V.props),ke.cloneElement(V,{key:U,ref:K=>{const _=V.ref;_&&(_.current=K),K?E.current.set(U,K):E.current.delete(U)}})):ke.createElement(Eu,{key:U,ref:K=>{K?E.current.set(U,K):E.current.delete(U)}},V)})))});function GE(e){const n=Tn(e,4,20),t=Tn(e,1,8);document.documentElement.style.setProperty("--sash-size",n+"px"),document.documentElement.style.setProperty("--sash-hover-size",t+"px"),function(r){pm=r,mm.emit("onDidChangeGlobalSize",r)}(n)}gm.displayName="Allotment";var jE=Object.assign(gm,{Pane:Eu});const zE=e=>O.jsx(jE,{children:e.children});const UE={theme:"dark",editorHeight:"100vh"},BE=e=>{const{width:n="100vw",height:t="100vh",theme:r,importMap:i,files:o,showCompileOutput:a=!0,showHeader:s=!0,showFileSelector:l=!0,fileSelectorReadOnly:u=!1,border:d=!1,onUrlChange:f}=e,{filesHash:h,changeTheme:T,setFiles:g}=S.useContext(Wt),v=Object.assign(UE,e.options||{});return S.useEffect(()=>{if(o&&!(o!=null&&o[zt]))throw new Error(`Missing required property : '${zt}' is a mandatory property for 'files'`);{const x=hv(o,i);x&&g(x)}},[o]),S.useEffect(()=>{r&&T(r)},[r]),S.useEffect(()=>{f==null||f(h)},[h]),O.jsxs("div",{id:"react-playground",style:{width:n,height:t,border:d?"1px solid var(--border)":""},children:[s?O.jsx($v,{}):null,O.jsx("div",{style:{height:`calc(100% - ${s?50:0}px)`},children:O.jsxs(zE,{children:[O.jsx(Fv,{options:v,showFileSelector:l,fileSelectorReadOnly:u}),O.jsx(nE,{showCompileOutput:a})]})})]})},WE=e=>O.jsx(vv,{children:O.jsx(BE,{...e})});function $E(){return O.jsx(WE,{})}bs.createRoot(document.getElementById("root")).render(O.jsx(ke.StrictMode,{children:O.jsx($E,{})}));export{kr as c,Ec as g};
