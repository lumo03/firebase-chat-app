(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function B1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pe={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=Symbol.for("react.element"),H1=Symbol.for("react.portal"),q1=Symbol.for("react.fragment"),K1=Symbol.for("react.strict_mode"),W1=Symbol.for("react.profiler"),G1=Symbol.for("react.provider"),Q1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),X1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),Z1=Symbol.for("react.lazy"),wf=Symbol.iterator;function eE(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,rg={};function mi(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||tg}mi.prototype.isReactComponent={};mi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=mi.prototype;function ph(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||tg}var mh=ph.prototype=new ig;mh.constructor=ph;ng(mh,mi.prototype);mh.isPureReactComponent=!0;var Ef=Array.isArray,sg=Object.prototype.hasOwnProperty,gh={current:null},og={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sg.call(e,r)&&!og.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vs,type:t,key:s,ref:o,props:i,_owner:gh.current}}function tE(t,e){return{$$typeof:Vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vs}function nE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var If=/\/+/g;function Jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nE(""+t.key):e.toString(36)}function Vo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vs:case H1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jl(o,0):r,Ef(i)?(n="",t!=null&&(n=t.replace(If,"$&/")+"/"),Vo(i,e,n,"",function(u){return u})):i!=null&&(yh(i)&&(i=tE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(If,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ef(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Jl(s,a);o+=Vo(s,e,n,l,i)}else if(l=eE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Jl(s,a++),o+=Vo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function go(t,e,n){if(t==null)return t;var r=[],i=0;return Vo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ke={current:null},zo={transition:null},iE={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:zo,ReactCurrentOwner:gh};B.Children={map:go,forEach:function(t,e,n){go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return go(t,function(){e++}),e},toArray:function(t){return go(t,function(e){return e})||[]},only:function(t){if(!yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=mi;B.Fragment=q1;B.Profiler=W1;B.PureComponent=ph;B.StrictMode=K1;B.Suspense=X1;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ng({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sg.call(e,l)&&!og.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vs,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:Q1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G1,_context:t},t.Consumer=t};B.createElement=ag;B.createFactory=function(t){var e=ag.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:Y1,render:t}};B.isValidElement=yh;B.lazy=function(t){return{$$typeof:Z1,_payload:{_status:-1,_result:t},_init:rE}};B.memo=function(t,e){return{$$typeof:J1,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=zo.transition;zo.transition={};try{t()}finally{zo.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return Ke.current.useCallback(t,e)};B.useContext=function(t){return Ke.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Ke.current.useDeferredValue(t)};B.useEffect=function(t,e){return Ke.current.useEffect(t,e)};B.useId=function(){return Ke.current.useId()};B.useImperativeHandle=function(t,e,n){return Ke.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Ke.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Ke.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Ke.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Ke.current.useReducer(t,e,n)};B.useRef=function(t){return Ke.current.useRef(t)};B.useState=function(t){return Ke.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Ke.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Ke.current.useTransition()};B.version="18.2.0";(function(t){t.exports=B})(pe);const sE=B1(pe.exports);var qu={},lg={exports:{}},ot={},ug={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,b){var F=k.length;k.push(b);e:for(;0<F;){var ue=F-1>>>1,Ee=k[ue];if(0<i(Ee,b))k[ue]=b,k[F]=Ee,F=ue;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var b=k[0],F=k.pop();if(F!==b){k[0]=F;e:for(var ue=0,Ee=k.length,po=Ee>>>1;ue<po;){var zn=2*(ue+1)-1,Xl=k[zn],jn=zn+1,mo=k[jn];if(0>i(Xl,F))jn<Ee&&0>i(mo,Xl)?(k[ue]=mo,k[jn]=F,ue=jn):(k[ue]=Xl,k[zn]=F,ue=zn);else if(jn<Ee&&0>i(mo,F))k[ue]=mo,k[jn]=F,ue=jn;else break e}}return b}function i(k,b){var F=k.sortIndex-b.sortIndex;return F!==0?F:k.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=k)r(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function w(k){if(v=!1,m(k),!y)if(n(l)!==null)y=!0,Ql(S);else{var b=n(u);b!==null&&Yl(w,b.startTime-k)}}function S(k,b){y=!1,v&&(v=!1,p(O),O=-1),g=!0;var F=d;try{for(m(b),h=n(l);h!==null&&(!(h.expirationTime>b)||k&&!vt());){var ue=h.callback;if(typeof ue=="function"){h.callback=null,d=h.priorityLevel;var Ee=ue(h.expirationTime<=b);b=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),m(b)}else r(l);h=n(l)}if(h!==null)var po=!0;else{var zn=n(u);zn!==null&&Yl(w,zn.startTime-b),po=!1}return po}finally{h=null,d=F,g=!1}}var C=!1,A=null,O=-1,X=5,z=-1;function vt(){return!(t.unstable_now()-z<X)}function Ti(){if(A!==null){var k=t.unstable_now();z=k;var b=!0;try{b=A(!0,k)}finally{b?ki():(C=!1,A=null)}}else C=!1}var ki;if(typeof f=="function")ki=function(){f(Ti)};else if(typeof MessageChannel<"u"){var vf=new MessageChannel,j1=vf.port2;vf.port1.onmessage=Ti,ki=function(){j1.postMessage(null)}}else ki=function(){N(Ti,0)};function Ql(k){A=k,C||(C=!0,ki())}function Yl(k,b){O=N(function(){k(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Ql(S))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var F=d;d=b;try{return k()}finally{d=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,b){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var F=d;d=k;try{return b()}finally{d=F}},t.unstable_scheduleCallback=function(k,b,F){var ue=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ue+F:ue):F=ue,k){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=F+Ee,k={id:c++,callback:b,priorityLevel:k,startTime:F,expirationTime:Ee,sortIndex:-1},F>ue?(k.sortIndex=F,e(u,k),n(l)===null&&k===n(u)&&(v?(p(O),O=-1):v=!0,Yl(w,F-ue))):(k.sortIndex=Ee,e(l,k),y||g||(y=!0,Ql(S))),k},t.unstable_shouldYield=vt,t.unstable_wrapCallback=function(k){var b=d;return function(){var F=d;d=b;try{return k.apply(this,arguments)}finally{d=F}}}})(cg);(function(t){t.exports=cg})(ug);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg=pe.exports,it=ug.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dg=new Set,os={};function vr(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(os[t]=e,t=0;t<e.length;t++)dg.add(e[t])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,oE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},Sf={};function aE(t){return Ku.call(Sf,t)?!0:Ku.call(_f,t)?!1:oE.test(t)?Sf[t]=!0:(_f[t]=!0,!1)}function lE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uE(t,e,n,r){if(e===null||typeof e>"u"||lE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var vh=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vh,wh);Oe[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vh,wh);Oe[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vh,wh);Oe[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function Eh(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uE(e,n,i,r)&&(n=null),r||i===null?aE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),pg=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),Sh=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),mg=Symbol.for("react.offscreen"),Tf=Symbol.iterator;function Ci(t){return t===null||typeof t!="object"?null:(t=Tf&&t[Tf]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,Zl;function Mi(t){if(Zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var eu=!1;function tu(t,e){if(!t||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mi(t):""}function cE(t){switch(t.tag){case 5:return Mi(t.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return t=tu(t.type,!1),t;case 11:return t=tu(t.type.render,!1),t;case 1:return t=tu(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nr:return"Fragment";case Ar:return"Portal";case Wu:return"Profiler";case Ih:return"StrictMode";case Gu:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pg:return(t.displayName||"Context")+".Consumer";case fg:return(t._context.displayName||"Context")+".Provider";case _h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sh:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case cn:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function hE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dE(t){var e=gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vo(t){t._valueTracker||(t._valueTracker=dE(t))}function yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vg(t,e){e=e.checked,e!=null&&Eh(t,"checked",e,!1)}function Ju(t,e){vg(t,e);var n=Rn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,Rn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $i=Array.isArray;function Br(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if($i(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rn(n)}}function wg(t,e){var n=Rn(e.value),r=Rn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wo,Ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function as(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fE=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(t){fE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hi[e]=Hi[t]})});function _g(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hi.hasOwnProperty(t)&&Hi[t]?(""+e).trim():e+"px"}function Sg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_g(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pE=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(t,e){if(e){if(pE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ic=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sc=null,Hr=null,qr=null;function Df(t){if(t=Bs(t)){if(typeof sc!="function")throw Error(I(280));var e=t.stateNode;e&&(e=il(e),sc(t.stateNode,t.type,e))}}function Tg(t){Hr?qr?qr.push(t):qr=[t]:Hr=t}function kg(){if(Hr){var t=Hr,e=qr;if(qr=Hr=null,Df(t),e)for(t=0;t<e.length;t++)Df(e[t])}}function Cg(t,e){return t(e)}function Ag(){}var nu=!1;function Ng(t,e,n){if(nu)return t(e,n);nu=!0;try{return Cg(t,e,n)}finally{nu=!1,(Hr!==null||qr!==null)&&(Ag(),kg())}}function ls(t,e){var n=t.stateNode;if(n===null)return null;var r=il(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var oc=!1;if(Xt)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){oc=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{oc=!1}function mE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var qi=!1,aa=null,la=!1,ac=null,gE={onError:function(t){qi=!0,aa=t}};function yE(t,e,n,r,i,s,o,a,l){qi=!1,aa=null,mE.apply(gE,arguments)}function vE(t,e,n,r,i,s,o,a,l){if(yE.apply(this,arguments),qi){if(qi){var u=aa;qi=!1,aa=null}else throw Error(I(198));la||(la=!0,ac=u)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(wr(t)!==t)throw Error(I(188))}function wE(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rf(i),t;if(s===r)return Rf(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Rg(t){return t=wE(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var xg=it.unstable_scheduleCallback,Of=it.unstable_cancelCallback,EE=it.unstable_shouldYield,IE=it.unstable_requestPaint,ce=it.unstable_now,_E=it.unstable_getCurrentPriorityLevel,kh=it.unstable_ImmediatePriority,Pg=it.unstable_UserBlockingPriority,ua=it.unstable_NormalPriority,SE=it.unstable_LowPriority,Lg=it.unstable_IdlePriority,el=null,xt=null;function TE(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(el,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:AE,kE=Math.log,CE=Math.LN2;function AE(t){return t>>>=0,t===0?32:31-(kE(t)/CE|0)|0}var Eo=64,Io=4194304;function Ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ca(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ui(a):(s&=o,s!==0&&(r=Ui(s)))}else o=n&~i,o!==0?r=Ui(o):s!==0&&(r=Ui(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function NE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=NE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mg(){var t=Eo;return Eo<<=1,(Eo&4194240)===0&&(Eo=64),t}function ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function RE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function $g(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ug,Ah,bg,Fg,Vg,uc=!1,_o=[],wn=null,En=null,In=null,us=new Map,cs=new Map,dn=[],OE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(e.pointerId)}}function Ni(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Bs(e),e!==null&&Ah(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xE(t,e,n,r,i){switch(e){case"focusin":return wn=Ni(wn,t,e,n,r,i),!0;case"dragenter":return En=Ni(En,t,e,n,r,i),!0;case"mouseover":return In=Ni(In,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return us.set(s,Ni(us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cs.set(s,Ni(cs.get(s)||null,t,e,n,r,i)),!0}return!1}function zg(t){var e=Wn(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dg(n),e!==null){t.blockedOn=e,Vg(t.priority,function(){bg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ic=r,n.target.dispatchEvent(r),ic=null}else return e=Bs(n),e!==null&&Ah(e),t.blockedOn=n,!1;e.shift()}return!0}function Pf(t,e,n){jo(t)&&n.delete(e)}function PE(){uc=!1,wn!==null&&jo(wn)&&(wn=null),En!==null&&jo(En)&&(En=null),In!==null&&jo(In)&&(In=null),us.forEach(Pf),cs.forEach(Pf)}function Di(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,PE)))}function hs(t){function e(i){return Di(i,t)}if(0<_o.length){Di(_o[0],t);for(var n=1;n<_o.length;n++){var r=_o[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wn!==null&&Di(wn,t),En!==null&&Di(En,t),In!==null&&Di(In,t),us.forEach(e),cs.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&dn.shift()}var Kr=an.ReactCurrentBatchConfig,ha=!0;function LE(t,e,n,r){var i=G,s=Kr.transition;Kr.transition=null;try{G=1,Nh(t,e,n,r)}finally{G=i,Kr.transition=s}}function ME(t,e,n,r){var i=G,s=Kr.transition;Kr.transition=null;try{G=4,Nh(t,e,n,r)}finally{G=i,Kr.transition=s}}function Nh(t,e,n,r){if(ha){var i=cc(t,e,n,r);if(i===null)fu(t,e,r,da,n),xf(t,r);else if(xE(i,t,e,n,r))r.stopPropagation();else if(xf(t,r),e&4&&-1<OE.indexOf(t)){for(;i!==null;){var s=Bs(i);if(s!==null&&Ug(s),s=cc(t,e,n,r),s===null&&fu(t,e,r,da,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fu(t,e,r,null,n)}}var da=null;function cc(t,e,n,r){if(da=null,t=Th(r),t=Wn(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return da=t,null}function jg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_E()){case kh:return 1;case Pg:return 4;case ua:case SE:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var yn=null,Dh=null,Bo=null;function Bg(){if(Bo)return Bo;var t,e=Dh,n=e.length,r,i="value"in yn?yn.value:yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bo=i.slice(t,1<r?1-r:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function Lf(){return!1}function at(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?So:Lf,this.isPropagationStopped=Lf,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=at(gi),js=se({},gi,{view:0,detail:0}),$E=at(js),iu,su,Ri,tl=se({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ri&&(Ri&&t.type==="mousemove"?(iu=t.screenX-Ri.screenX,su=t.screenY-Ri.screenY):su=iu=0,Ri=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Mf=at(tl),UE=se({},tl,{dataTransfer:0}),bE=at(UE),FE=se({},js,{relatedTarget:0}),ou=at(FE),VE=se({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),zE=at(VE),jE=se({},gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BE=at(jE),HE=se({},gi,{data:0}),$f=at(HE),qE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WE[t])?!!e[t]:!1}function Oh(){return GE}var QE=se({},js,{key:function(t){if(t.key){var e=qE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YE=at(QE),XE=se({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=at(XE),JE=se({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),ZE=at(JE),eI=se({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),tI=at(eI),nI=se({},tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rI=at(nI),iI=[9,13,27,32],xh=Xt&&"CompositionEvent"in window,Ki=null;Xt&&"documentMode"in document&&(Ki=document.documentMode);var sI=Xt&&"TextEvent"in window&&!Ki,Hg=Xt&&(!xh||Ki&&8<Ki&&11>=Ki),bf=String.fromCharCode(32),Ff=!1;function qg(t,e){switch(t){case"keyup":return iI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function oI(t,e){switch(t){case"compositionend":return Kg(e);case"keypress":return e.which!==32?null:(Ff=!0,bf);case"textInput":return t=e.data,t===bf&&Ff?null:t;default:return null}}function aI(t,e){if(Dr)return t==="compositionend"||!xh&&qg(t,e)?(t=Bg(),Bo=Dh=yn=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hg&&e.locale!=="ko"?null:e.data;default:return null}}var lI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lI[t.type]:e==="textarea"}function Wg(t,e,n,r){Tg(r),e=fa(e,"onChange"),0<e.length&&(n=new Rh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wi=null,ds=null;function uI(t){iy(t,0)}function nl(t){var e=xr(t);if(yg(e))return t}function cI(t,e){if(t==="change")return e}var Gg=!1;if(Xt){var au;if(Xt){var lu="oninput"in document;if(!lu){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),lu=typeof zf.oninput=="function"}au=lu}else au=!1;Gg=au&&(!document.documentMode||9<document.documentMode)}function jf(){Wi&&(Wi.detachEvent("onpropertychange",Qg),ds=Wi=null)}function Qg(t){if(t.propertyName==="value"&&nl(ds)){var e=[];Wg(e,ds,t,Th(t)),Ng(uI,e)}}function hI(t,e,n){t==="focusin"?(jf(),Wi=e,ds=n,Wi.attachEvent("onpropertychange",Qg)):t==="focusout"&&jf()}function dI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nl(ds)}function fI(t,e){if(t==="click")return nl(e)}function pI(t,e){if(t==="input"||t==="change")return nl(e)}function mI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:mI;function fs(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ku.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function Bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,e){var n=Bf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function Yg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xg(){for(var t=window,e=oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oa(t.document)}return e}function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gI(t){var e=Xg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yg(n.ownerDocument.documentElement,n)){if(r!==null&&Ph(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hf(n,s);var o=Hf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yI=Xt&&"documentMode"in document&&11>=document.documentMode,Rr=null,hc=null,Gi=null,dc=!1;function qf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||Rr==null||Rr!==oa(r)||(r=Rr,"selectionStart"in r&&Ph(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&fs(Gi,r)||(Gi=r,r=fa(hc,"onSelect"),0<r.length&&(e=new Rh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Rr)))}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Or={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},uu={},Jg={};Xt&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function rl(t){if(uu[t])return uu[t];if(!Or[t])return t;var e=Or[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jg)return uu[t]=e[n];return t}var Zg=rl("animationend"),ey=rl("animationiteration"),ty=rl("animationstart"),ny=rl("transitionend"),ry=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){ry.set(t,e),vr(e,[t])}for(var cu=0;cu<Kf.length;cu++){var hu=Kf[cu],vI=hu.toLowerCase(),wI=hu[0].toUpperCase()+hu.slice(1);$n(vI,"on"+wI)}$n(Zg,"onAnimationEnd");$n(ey,"onAnimationIteration");$n(ty,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(ny,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EI=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function Wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vE(r,e,void 0,t),t.currentTarget=null}function iy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wf(i,a,u),s=l}}}if(la)throw t=ac,la=!1,ac=null,t}function J(t,e){var n=e[yc];n===void 0&&(n=e[yc]=new Set);var r=t+"__bubble";n.has(r)||(sy(e,t,2,!1),n.add(r))}function du(t,e,n){var r=0;e&&(r|=4),sy(n,t,r,e)}var ko="_reactListening"+Math.random().toString(36).slice(2);function ps(t){if(!t[ko]){t[ko]=!0,dg.forEach(function(n){n!=="selectionchange"&&(EI.has(n)||du(n,!1,t),du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ko]||(e[ko]=!0,du("selectionchange",!1,e))}}function sy(t,e,n,r){switch(jg(e)){case 1:var i=LE;break;case 4:i=ME;break;default:i=Nh}n=i.bind(null,e,n,t),i=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ng(function(){var u=s,c=Th(n),h=[];e:{var d=ry.get(t);if(d!==void 0){var g=Rh,y=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":g=YE;break;case"focusin":y="focus",g=ou;break;case"focusout":y="blur",g=ou;break;case"beforeblur":case"afterblur":g=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ZE;break;case Zg:case ey:case ty:g=zE;break;case ny:g=tI;break;case"scroll":g=$E;break;case"wheel":g=rI;break;case"copy":case"cut":case"paste":g=BE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Uf}var v=(e&4)!==0,N=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=ls(f,p),w!=null&&v.push(ms(f,w,m)))),N)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==ic&&(y=n.relatedTarget||n.fromElement)&&(Wn(y)||y[Jt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Wn(y):null,y!==null&&(N=wr(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Mf,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Uf,w="onPointerLeave",p="onPointerEnter",f="pointer"),N=g==null?d:xr(g),m=y==null?d:xr(y),d=new v(w,f+"leave",g,n,c),d.target=N,d.relatedTarget=m,w=null,Wn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=N,w=v),N=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=kr(m))f++;for(m=0,w=p;w;w=kr(w))m++;for(;0<f-m;)v=kr(v),f--;for(;0<m-f;)p=kr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=kr(v),p=kr(p)}v=null}else v=null;g!==null&&Gf(h,d,g,v,!1),y!==null&&N!==null&&Gf(h,N,y,v,!0)}}e:{if(d=u?xr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var S=cI;else if(Vf(d))if(Gg)S=pI;else{S=dI;var C=hI}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=fI);if(S&&(S=S(t,u))){Wg(h,S,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Zu(d,"number",d.value)}switch(C=u?xr(u):window,t){case"focusin":(Vf(C)||C.contentEditable==="true")&&(Rr=C,hc=u,Gi=null);break;case"focusout":Gi=hc=Rr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,qf(h,n,c);break;case"selectionchange":if(yI)break;case"keydown":case"keyup":qf(h,n,c)}var A;if(xh)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Dr?qg(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Hg&&n.locale!=="ko"&&(Dr||O!=="onCompositionStart"?O==="onCompositionEnd"&&Dr&&(A=Bg()):(yn=c,Dh="value"in yn?yn.value:yn.textContent,Dr=!0)),C=fa(u,O),0<C.length&&(O=new $f(O,t,null,n,c),h.push({event:O,listeners:C}),A?O.data=A:(A=Kg(n),A!==null&&(O.data=A)))),(A=sI?oI(t,n):aI(t,n))&&(u=fa(u,"onBeforeInput"),0<u.length&&(c=new $f("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}iy(h,e)})}function ms(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ls(t,n),s!=null&&r.unshift(ms(t,s,i)),s=ls(t,e),s!=null&&r.push(ms(t,s,i))),t=t.return}return r}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ls(n,s),l!=null&&o.unshift(ms(n,l,a))):i||(l=ls(n,s),l!=null&&o.push(ms(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var II=/\r\n?/g,_I=/\u0000|\uFFFD/g;function Qf(t){return(typeof t=="string"?t:""+t).replace(II,`
`).replace(_I,"")}function Co(t,e,n){if(e=Qf(e),Qf(t)!==e&&n)throw Error(I(425))}function pa(){}var fc=null,pc=null;function mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,SI=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,TI=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(t){return Yf.resolve(null).then(t).catch(kI)}:gc;function kI(t){setTimeout(function(){throw t})}function pu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),hs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);hs(e)}function _n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yi=Math.random().toString(36).slice(2),Rt="__reactFiber$"+yi,gs="__reactProps$"+yi,Jt="__reactContainer$"+yi,yc="__reactEvents$"+yi,CI="__reactListeners$"+yi,AI="__reactHandles$"+yi;function Wn(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jt]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xf(t);t!==null;){if(n=t[Rt])return n;t=Xf(t)}return e}t=n,n=t.parentNode}return null}function Bs(t){return t=t[Rt]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function il(t){return t[gs]||null}var vc=[],Pr=-1;function Un(t){return{current:t}}function Z(t){0>Pr||(t.current=vc[Pr],vc[Pr]=null,Pr--)}function Q(t,e){Pr++,vc[Pr]=t.current,t.current=e}var On={},Ve=Un(On),Xe=Un(!1),ar=On;function ti(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Je(t){return t=t.childContextTypes,t!=null}function ma(){Z(Xe),Z(Ve)}function Jf(t,e,n){if(Ve.current!==On)throw Error(I(168));Q(Ve,e),Q(Xe,n)}function oy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,hE(t)||"Unknown",i));return se({},n,r)}function ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,ar=Ve.current,Q(Ve,t),Q(Xe,Xe.current),!0}function Zf(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=oy(t,e,ar),r.__reactInternalMemoizedMergedChildContext=t,Z(Xe),Z(Ve),Q(Ve,t)):Z(Xe),Q(Xe,n)}var zt=null,sl=!1,mu=!1;function ay(t){zt===null?zt=[t]:zt.push(t)}function NI(t){sl=!0,ay(t)}function bn(){if(!mu&&zt!==null){mu=!0;var t=0,e=G;try{var n=zt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zt=null,sl=!1}catch(i){throw zt!==null&&(zt=zt.slice(t+1)),xg(kh,bn),i}finally{G=e,mu=!1}}return null}var Lr=[],Mr=0,ya=null,va=0,lt=[],ut=0,lr=null,Bt=1,Ht="";function Bn(t,e){Lr[Mr++]=va,Lr[Mr++]=ya,ya=t,va=e}function ly(t,e,n){lt[ut++]=Bt,lt[ut++]=Ht,lt[ut++]=lr,lr=t;var r=Bt;t=Ht;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bt=1<<32-St(e)+i|n<<i|r,Ht=s+t}else Bt=1<<s|n<<i|r,Ht=t}function Lh(t){t.return!==null&&(Bn(t,1),ly(t,1,0))}function Mh(t){for(;t===ya;)ya=Lr[--Mr],Lr[Mr]=null,va=Lr[--Mr],Lr[Mr]=null;for(;t===lr;)lr=lt[--ut],lt[ut]=null,Ht=lt[--ut],lt[ut]=null,Bt=lt[--ut],lt[ut]=null}var nt=null,tt=null,ee=!1,_t=null;function uy(t,e){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,tt=_n(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lr!==null?{id:Bt,overflow:Ht}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,tt=null,!0):!1;default:return!1}}function wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(ee){var e=tt;if(e){var n=e;if(!ep(t,e)){if(wc(t))throw Error(I(418));e=_n(n.nextSibling);var r=nt;e&&ep(t,e)?uy(r,n):(t.flags=t.flags&-4097|2,ee=!1,nt=t)}}else{if(wc(t))throw Error(I(418));t.flags=t.flags&-4097|2,ee=!1,nt=t}}}function tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function Ao(t){if(t!==nt)return!1;if(!ee)return tp(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mc(t.type,t.memoizedProps)),e&&(e=tt)){if(wc(t))throw cy(),Error(I(418));for(;e;)uy(t,e),e=_n(e.nextSibling)}if(tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=_n(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=nt?_n(t.stateNode.nextSibling):null;return!0}function cy(){for(var t=tt;t;)t=_n(t.nextSibling)}function ni(){tt=nt=null,ee=!1}function $h(t){_t===null?_t=[t]:_t.push(t)}var DI=an.ReactCurrentBatchConfig;function Et(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wa=Un(null),Ea=null,$r=null,Uh=null;function bh(){Uh=$r=Ea=null}function Fh(t){var e=wa.current;Z(wa),t._currentValue=e}function Ic(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wr(t,e){Ea=t,Uh=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Qe=!0),t.firstContext=null)}function gt(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(Ea===null)throw Error(I(308));$r=t,Ea.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var Gn=null;function Vh(t){Gn===null?Gn=[t]:Gn.push(t)}function hy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Vh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zt(t,r)}function Zt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hn=!1;function zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(q&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zt(t,n)}return i=r.interleaved,i===null?(e.next=e,Vh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zt(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ch(t,n)}}function np(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ia(t,e,n,r){var i=t.updateQueue;hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=se({},h,d);break e;case 2:hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cr|=o,t.lanes=o,t.memoizedState=h}}function rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var fy=new hg.Component().refs;function _c(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ol={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=kn(t),s=Gt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(Tt(e,t,i,r),qo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=kn(t),s=Gt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sn(t,s,i),e!==null&&(Tt(e,t,i,r),qo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=kn(t),i=Gt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sn(t,i,r),e!==null&&(Tt(e,t,r,n),qo(e,t,r))}};function ip(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fs(n,r)||!fs(i,s):!0}function py(t,e,n){var r=!1,i=On,s=e.contextType;return typeof s=="object"&&s!==null?s=gt(s):(i=Je(e)?ar:Ve.current,r=e.contextTypes,s=(r=r!=null)?ti(t,i):On),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ol.enqueueReplaceState(e,e.state,null)}function Sc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=fy,zh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gt(s):(s=Je(e)?ar:Ve.current,i.context=ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_c(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ol.enqueueReplaceState(i,i.state,null),Ia(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Oi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===fy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function No(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function op(t){var e=t._init;return e(t._payload)}function my(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Cn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=_u(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var S=m.type;return S===Nr?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cn&&op(S)===f.type)?(w=i(f,m.props),w.ref=Oi(p,f,m),w.return=p,w):(w=Xo(m.type,m.key,m.props,null,p.mode,w),w.ref=Oi(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Su(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,S){return f===null||f.tag!==7?(f=nr(m,p.mode,w,S),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_u(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case yo:return m=Xo(f.type,f.key,f.props,null,p.mode,m),m.ref=Oi(p,null,f),m.return=p,m;case Ar:return f=Su(f,p.mode,m),f.return=p,f;case cn:var w=f._init;return h(p,w(f._payload),m)}if($i(f)||Ci(f))return f=nr(f,p.mode,m,null),f.return=p,f;No(p,f)}return null}function d(p,f,m,w){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yo:return m.key===S?l(p,f,m,w):null;case Ar:return m.key===S?u(p,f,m,w):null;case cn:return S=m._init,d(p,f,S(m._payload),w)}if($i(m)||Ci(m))return S!==null?null:c(p,f,m,w,null);No(p,m)}return null}function g(p,f,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yo:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,S);case Ar:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,S);case cn:var C=w._init;return g(p,f,m,C(w._payload),S)}if($i(w)||Ci(w))return p=p.get(m)||null,c(f,p,w,S,null);No(f,w)}return null}function y(p,f,m,w){for(var S=null,C=null,A=f,O=f=0,X=null;A!==null&&O<m.length;O++){A.index>O?(X=A,A=null):X=A.sibling;var z=d(p,A,m[O],w);if(z===null){A===null&&(A=X);break}t&&A&&z.alternate===null&&e(p,A),f=s(z,f,O),C===null?S=z:C.sibling=z,C=z,A=X}if(O===m.length)return n(p,A),ee&&Bn(p,O),S;if(A===null){for(;O<m.length;O++)A=h(p,m[O],w),A!==null&&(f=s(A,f,O),C===null?S=A:C.sibling=A,C=A);return ee&&Bn(p,O),S}for(A=r(p,A);O<m.length;O++)X=g(A,p,O,m[O],w),X!==null&&(t&&X.alternate!==null&&A.delete(X.key===null?O:X.key),f=s(X,f,O),C===null?S=X:C.sibling=X,C=X);return t&&A.forEach(function(vt){return e(p,vt)}),ee&&Bn(p,O),S}function v(p,f,m,w){var S=Ci(m);if(typeof S!="function")throw Error(I(150));if(m=S.call(m),m==null)throw Error(I(151));for(var C=S=null,A=f,O=f=0,X=null,z=m.next();A!==null&&!z.done;O++,z=m.next()){A.index>O?(X=A,A=null):X=A.sibling;var vt=d(p,A,z.value,w);if(vt===null){A===null&&(A=X);break}t&&A&&vt.alternate===null&&e(p,A),f=s(vt,f,O),C===null?S=vt:C.sibling=vt,C=vt,A=X}if(z.done)return n(p,A),ee&&Bn(p,O),S;if(A===null){for(;!z.done;O++,z=m.next())z=h(p,z.value,w),z!==null&&(f=s(z,f,O),C===null?S=z:C.sibling=z,C=z);return ee&&Bn(p,O),S}for(A=r(p,A);!z.done;O++,z=m.next())z=g(A,p,O,z.value,w),z!==null&&(t&&z.alternate!==null&&A.delete(z.key===null?O:z.key),f=s(z,f,O),C===null?S=z:C.sibling=z,C=z);return t&&A.forEach(function(Ti){return e(p,Ti)}),ee&&Bn(p,O),S}function N(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Nr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yo:e:{for(var S=m.key,C=f;C!==null;){if(C.key===S){if(S=m.type,S===Nr){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cn&&op(S)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=Oi(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===Nr?(f=nr(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Xo(m.type,m.key,m.props,null,p.mode,w),w.ref=Oi(p,f,m),w.return=p,p=w)}return o(p);case Ar:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Su(m,p.mode,w),f.return=p,p=f}return o(p);case cn:return C=m._init,N(p,f,C(m._payload),w)}if($i(m))return y(p,f,m,w);if(Ci(m))return v(p,f,m,w);No(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=_u(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return N}var ri=my(!0),gy=my(!1),Hs={},Pt=Un(Hs),ys=Un(Hs),vs=Un(Hs);function Qn(t){if(t===Hs)throw Error(I(174));return t}function jh(t,e){switch(Q(vs,e),Q(ys,t),Q(Pt,Hs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tc(e,t)}Z(Pt),Q(Pt,e)}function ii(){Z(Pt),Z(ys),Z(vs)}function yy(t){Qn(vs.current);var e=Qn(Pt.current),n=tc(e,t.type);e!==n&&(Q(ys,t),Q(Pt,n))}function Bh(t){ys.current===t&&(Z(Pt),Z(ys))}var re=Un(0);function _a(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gu=[];function Hh(){for(var t=0;t<gu.length;t++)gu[t]._workInProgressVersionPrimary=null;gu.length=0}var Ko=an.ReactCurrentDispatcher,yu=an.ReactCurrentBatchConfig,ur=0,ie=null,me=null,_e=null,Sa=!1,Qi=!1,ws=0,RI=0;function Pe(){throw Error(I(321))}function qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Kh(t,e,n,r,i,s){if(ur=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?LI:MI,t=n(r,i),Qi){s=0;do{if(Qi=!1,ws=0,25<=s)throw Error(I(301));s+=1,_e=me=null,e.updateQueue=null,Ko.current=$I,t=n(r,i)}while(Qi)}if(Ko.current=Ta,e=me!==null&&me.next!==null,ur=0,_e=me=ie=null,Sa=!1,e)throw Error(I(300));return t}function Wh(){var t=ws!==0;return ws=0,t}function Dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ie.memoizedState=_e=t:_e=_e.next=t,_e}function yt(){if(me===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=_e===null?ie.memoizedState:_e.next;if(e!==null)_e=e,me=t;else{if(t===null)throw Error(I(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},_e===null?ie.memoizedState=_e=t:_e=_e.next=t}return _e}function Es(t,e){return typeof e=="function"?e(t):e}function vu(t){var e=yt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ie.lanes|=c,cr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(Qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,cr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=yt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(Qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vy(){}function wy(t,e){var n=ie,r=yt(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,Gh(_y.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Is(9,Iy.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(I(349));(ur&30)!==0||Ey(n,e,i)}return i}function Ey(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iy(t,e,n,r){e.value=n,e.getSnapshot=r,Sy(e)&&Ty(t)}function _y(t,e,n){return n(function(){Sy(e)&&Ty(t)})}function Sy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function Ty(t){var e=Zt(t,1);e!==null&&Tt(e,t,1,-1)}function ap(t){var e=Dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:t},e.queue=t,t=t.dispatch=PI.bind(null,ie,t),[e.memoizedState,t]}function Is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ky(){return yt().memoizedState}function Wo(t,e,n,r){var i=Dt();ie.flags|=t,i.memoizedState=Is(1|e,n,void 0,r===void 0?null:r)}function al(t,e,n,r){var i=yt();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&qh(r,o.deps)){i.memoizedState=Is(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Is(1|e,n,s,r)}function lp(t,e){return Wo(8390656,8,t,e)}function Gh(t,e){return al(2048,8,t,e)}function Cy(t,e){return al(4,2,t,e)}function Ay(t,e){return al(4,4,t,e)}function Ny(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dy(t,e,n){return n=n!=null?n.concat([t]):null,al(4,4,Ny.bind(null,e,t),n)}function Qh(){}function Ry(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Oy(t,e){var n=yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xy(t,e,n){return(ur&21)===0?(t.baseState&&(t.baseState=!1,Qe=!0),t.memoizedState=n):(kt(n,e)||(n=Mg(),ie.lanes|=n,cr|=n,t.baseState=!0),e)}function OI(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=yu.transition;yu.transition={};try{t(!1),e()}finally{G=n,yu.transition=r}}function Py(){return yt().memoizedState}function xI(t,e,n){var r=kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ly(t))My(e,n);else if(n=hy(t,e,n,r),n!==null){var i=qe();Tt(n,t,r,i),$y(n,e,r)}}function PI(t,e,n){var r=kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ly(t))My(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Vh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=hy(t,e,i,r),n!==null&&(i=qe(),Tt(n,t,r,i),$y(n,e,r))}}function Ly(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function My(t,e){Qi=Sa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $y(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ch(t,n)}}var Ta={readContext:gt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},LI={readContext:gt,useCallback:function(t,e){return Dt().memoizedState=[t,e===void 0?null:e],t},useContext:gt,useEffect:lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4194308,4,Ny.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wo(4,2,t,e)},useMemo:function(t,e){var n=Dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xI.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=Dt();return t={current:t},e.memoizedState=t},useState:ap,useDebugValue:Qh,useDeferredValue:function(t){return Dt().memoizedState=t},useTransition:function(){var t=ap(!1),e=t[0];return t=OI.bind(null,t[1]),Dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=Dt();if(ee){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Se===null)throw Error(I(349));(ur&30)!==0||Ey(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lp(_y.bind(null,r,s,t),[t]),r.flags|=2048,Is(9,Iy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dt(),e=Se.identifierPrefix;if(ee){var n=Ht,r=Bt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MI={readContext:gt,useCallback:Ry,useContext:gt,useEffect:Gh,useImperativeHandle:Dy,useInsertionEffect:Cy,useLayoutEffect:Ay,useMemo:Oy,useReducer:vu,useRef:ky,useState:function(){return vu(Es)},useDebugValue:Qh,useDeferredValue:function(t){var e=yt();return xy(e,me.memoizedState,t)},useTransition:function(){var t=vu(Es)[0],e=yt().memoizedState;return[t,e]},useMutableSource:vy,useSyncExternalStore:wy,useId:Py,unstable_isNewReconciler:!1},$I={readContext:gt,useCallback:Ry,useContext:gt,useEffect:Gh,useImperativeHandle:Dy,useInsertionEffect:Cy,useLayoutEffect:Ay,useMemo:Oy,useReducer:wu,useRef:ky,useState:function(){return wu(Es)},useDebugValue:Qh,useDeferredValue:function(t){var e=yt();return me===null?e.memoizedState=t:xy(e,me.memoizedState,t)},useTransition:function(){var t=wu(Es)[0],e=yt().memoizedState;return[t,e]},useMutableSource:vy,useSyncExternalStore:wy,useId:Py,unstable_isNewReconciler:!1};function si(t,e){try{var n="",r=e;do n+=cE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Eu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Tc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UI=typeof WeakMap=="function"?WeakMap:Map;function Uy(t,e,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ca||(Ca=!0,Lc=r),Tc(t,e)},n}function by(t,e,n){n=Gt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Tc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tc(t,e),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function up(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=XI.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gt(-1,1),e.tag=2,Sn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var bI=an.ReactCurrentOwner,Qe=!1;function Be(t,e,n,r){e.child=t===null?gy(e,null,n,r):ri(e,t.child,n,r)}function dp(t,e,n,r,i){n=n.render;var s=e.ref;return Wr(e,i),r=Kh(t,e,n,r,s,i),n=Wh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,en(t,e,i)):(ee&&n&&Lh(e),e.flags|=1,Be(t,e,r,i),e.child)}function fp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Fy(t,e,s,r,i)):(t=Xo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fs,n(o,r)&&t.ref===e.ref)return en(t,e,i)}return e.flags|=1,t=Cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Fy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fs(s,r)&&t.ref===e.ref)if(Qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Qe=!0);else return e.lanes=t.lanes,en(t,e,i)}return kc(t,e,n,r,i)}function Vy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(br,et),et|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(br,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(br,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(br,et),et|=r;return Be(t,e,i,n),e.child}function zy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kc(t,e,n,r,i){var s=Je(n)?ar:Ve.current;return s=ti(e,s),Wr(e,i),n=Kh(t,e,n,r,s,i),r=Wh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,en(t,e,i)):(ee&&r&&Lh(e),e.flags|=1,Be(t,e,n,i),e.child)}function pp(t,e,n,r,i){if(Je(n)){var s=!0;ga(e)}else s=!1;if(Wr(e,i),e.stateNode===null)Go(t,e),py(e,n,r),Sc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gt(u):(u=Je(n)?ar:Ve.current,u=ti(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sp(e,o,r,u),hn=!1;var d=e.memoizedState;o.state=d,Ia(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Xe.current||hn?(typeof c=="function"&&(_c(e,n,c,r),l=e.memoizedState),(a=hn||ip(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Et(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gt(l):(l=Je(n)?ar:Ve.current,l=ti(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&sp(e,o,r,l),hn=!1,d=e.memoizedState,o.state=d,Ia(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Xe.current||hn?(typeof g=="function"&&(_c(e,n,g,r),y=e.memoizedState),(u=hn||ip(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Cc(t,e,n,r,s,i)}function Cc(t,e,n,r,i,s){zy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Zf(e,n,!1),en(t,e,s);r=e.stateNode,bI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,s),e.child=ri(e,null,a,s)):Be(t,e,a,s),e.memoizedState=r.state,i&&Zf(e,n,!0),e.child}function jy(t){var e=t.stateNode;e.pendingContext?Jf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jf(t,e.context,!1),jh(t,e.containerInfo)}function mp(t,e,n,r,i){return ni(),$h(i),e.flags|=256,Be(t,e,n,r),e.child}var Ac={dehydrated:null,treeContext:null,retryLane:0};function Nc(t){return{baseLanes:t,cachePool:null,transitions:null}}function By(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(re,i&1),t===null)return Ec(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cl(o,r,0,null),t=nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nc(n),e.memoizedState=Ac,t):Yh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return FI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cn(a,s):(s=nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ac,r}return s=t.child,t=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yh(t,e){return e=cl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Do(t,e,n,r){return r!==null&&$h(r),ri(e,t.child,null,n),t=Yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Eu(Error(I(422))),Do(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=cl({mode:"visible",children:r.children},i,0,null),s=nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ri(e,t.child,null,o),e.child.memoizedState=Nc(o),e.memoizedState=Ac,s);if((e.mode&1)===0)return Do(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Eu(s,r,void 0),Do(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qe||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zt(t,i),Tt(r,t,i,-1))}return nd(),r=Eu(Error(I(421))),Do(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=JI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tt=_n(i.nextSibling),nt=e,ee=!0,_t=null,t!==null&&(lt[ut++]=Bt,lt[ut++]=Ht,lt[ut++]=lr,Bt=t.id,Ht=t.overflow,lr=e),e=Yh(e,r.children),e.flags|=4096,e)}function gp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ic(t.return,e,n)}function Iu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Hy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Be(t,e,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gp(t,n,e);else if(t.tag===19)gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(re,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_a(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Iu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_a(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Iu(e,!0,n,null,s);break;case"together":Iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Go(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function en(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VI(t,e,n){switch(e.tag){case 3:jy(e),ni();break;case 5:yy(e);break;case 1:Je(e.type)&&ga(e);break;case 4:jh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(wa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(re,re.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?By(t,e,n):(Q(re,re.current&1),t=en(t,e,n),t!==null?t.sibling:null);Q(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Hy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,Vy(t,e,n)}return en(t,e,n)}var qy,Dc,Ky,Wy;qy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dc=function(){};Ky=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qn(Pt.current);var s=null;switch(n){case"input":i=Xu(t,i),r=Xu(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=ec(t,i),r=ec(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pa)}nc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(os.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(os.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Wy=function(t,e,n,r){n!==r&&(e.flags|=4)};function xi(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zI(t,e,n){var r=e.pendingProps;switch(Mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return Je(e.type)&&ma(),Le(e),null;case 3:return r=e.stateNode,ii(),Z(Xe),Z(Ve),Hh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,_t!==null&&(Uc(_t),_t=null))),Dc(t,e),Le(e),null;case 5:Bh(e);var i=Qn(vs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ky(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Le(e),null}if(t=Qn(Pt.current),Ao(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rt]=e,r[gs]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<bi.length;i++)J(bi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":kf(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Af(r,s),J("invalid",r)}nc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Co(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Co(r.textContent,a,t),i=["children",""+a]):os.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":vo(r),Cf(r,s,!0);break;case"textarea":vo(r),Nf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[gs]=r,qy(t,e,!1,!1),e.stateNode=t;e:{switch(o=rc(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<bi.length;i++)J(bi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":kf(t,r),i=Xu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),J("invalid",t);break;case"textarea":Af(t,r),i=ec(t,r),J("invalid",t);break;default:i=r}nc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ig(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&as(t,l):typeof l=="number"&&as(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(os.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&Eh(t,s,l,o))}switch(n){case"input":vo(t),Cf(t,r,!1);break;case"textarea":vo(t),Nf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Br(t,!!r.multiple,s,!1):r.defaultValue!=null&&Br(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)Wy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Qn(vs.current),Qn(Pt.current),Ao(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:Co(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return Le(e),null;case 13:if(Z(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&tt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)cy(),ni(),e.flags|=98560,s=!1;else if(s=Ao(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Rt]=e}else ni(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else _t!==null&&(Uc(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(re.current&1)!==0?ge===0&&(ge=3):nd())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return ii(),Dc(t,e),t===null&&ps(e.stateNode.containerInfo),Le(e),null;case 10:return Fh(e.type._context),Le(e),null;case 17:return Je(e.type)&&ma(),Le(e),null;case 19:if(Z(re),s=e.memoizedState,s===null)return Le(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xi(s,!1);else{if(ge!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=_a(t),o!==null){for(e.flags|=128,xi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>oi&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304)}else{if(!r)if(t=_a(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Le(e),null}else 2*ce()-s.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=re.current,Q(re,r?n&1|2:n&1),e):(Le(e),null);case 22:case 23:return td(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(et&1073741824)!==0&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function jI(t,e){switch(Mh(e),e.tag){case 1:return Je(e.type)&&ma(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ii(),Z(Xe),Z(Ve),Hh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Bh(e),null;case 13:if(Z(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(re),null;case 4:return ii(),null;case 10:return Fh(e.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var Ro=!1,$e=!1,BI=typeof WeakSet=="function"?WeakSet:Set,T=null;function Ur(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Rc(t,e,n){try{n()}catch(r){ae(t,e,r)}}var yp=!1;function HI(t,e){if(fc=ha,t=Xg(),Ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:t,selectionRange:n},ha=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,N=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Et(e.type,v),N);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=yp,yp=!1,y}function Yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rc(e,n,s)}i=i.next}while(i!==r)}}function ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Oc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gy(t){var e=t.alternate;e!==null&&(t.alternate=null,Gy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[gs],delete e[yc],delete e[CI],delete e[AI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qy(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pa));else if(r!==4&&(t=t.child,t!==null))for(xc(t,e,n),t=t.sibling;t!==null;)xc(t,e,n),t=t.sibling}function Pc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pc(t,e,n),t=t.sibling;t!==null;)Pc(t,e,n),t=t.sibling}var Ce=null,It=!1;function ln(t,e,n){for(n=n.child;n!==null;)Yy(t,e,n),n=n.sibling}function Yy(t,e,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 5:$e||Ur(n,e);case 6:var r=Ce,i=It;Ce=null,ln(t,e,n),Ce=r,It=i,Ce!==null&&(It?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(It?(t=Ce,n=n.stateNode,t.nodeType===8?pu(t.parentNode,n):t.nodeType===1&&pu(t,n),hs(t)):pu(Ce,n.stateNode));break;case 4:r=Ce,i=It,Ce=n.stateNode.containerInfo,It=!0,ln(t,e,n),Ce=r,It=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Rc(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!$e&&(Ur(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,ln(t,e,n),$e=r):ln(t,e,n);break;default:ln(t,e,n)}}function wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BI),e.forEach(function(r){var i=ZI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,It=!1;break e;case 3:Ce=a.stateNode.containerInfo,It=!0;break e;case 4:Ce=a.stateNode.containerInfo,It=!0;break e}a=a.return}if(Ce===null)throw Error(I(160));Yy(s,o,i),Ce=null,It=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xy(e,t),e=e.sibling}function Xy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wt(e,t),Nt(t),r&4){try{Yi(3,t,t.return),ll(3,t)}catch(v){ae(t,t.return,v)}try{Yi(5,t,t.return)}catch(v){ae(t,t.return,v)}}break;case 1:wt(e,t),Nt(t),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(wt(e,t),Nt(t),r&512&&n!==null&&Ur(n,n.return),t.flags&32){var i=t.stateNode;try{as(i,"")}catch(v){ae(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vg(i,s),rc(a,o);var u=rc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Sg(i,h):c==="dangerouslySetInnerHTML"?Ig(i,h):c==="children"?as(i,h):Eh(i,c,h,u)}switch(a){case"input":Ju(i,s);break;case"textarea":wg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Br(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Br(i,!!s.multiple,s.defaultValue,!0):Br(i,!!s.multiple,s.multiple?[]:"",!1))}i[gs]=s}catch(v){ae(t,t.return,v)}}break;case 6:if(wt(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ae(t,t.return,v)}}break;case 3:if(wt(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hs(e.containerInfo)}catch(v){ae(t,t.return,v)}break;case 4:wt(e,t),Nt(t);break;case 13:wt(e,t),Nt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zh=ce())),r&4&&wp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?($e=(u=$e)||c,wt(e,t),$e=u):wt(e,t),Nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(T=t,c=t.child;c!==null;){for(h=T=c;T!==null;){switch(d=T,g=d.child,d.tag){case 0:case 11:case 14:case 15:Yi(4,d,d.return);break;case 1:Ur(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Ur(d,d.return);break;case 22:if(d.memoizedState!==null){Ip(h);continue}}g!==null?(g.return=d,T=g):Ip(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_g("display",o))}catch(v){ae(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ae(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wt(e,t),Nt(t),r&4&&wp(t);break;case 21:break;default:wt(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qy(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(as(i,""),r.flags&=-33);var s=vp(t);Pc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vp(t);xc(t,a,o);break;default:throw Error(I(161))}}catch(l){ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qI(t,e,n){T=t,Jy(t)}function Jy(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ro;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||$e;a=Ro;var u=$e;if(Ro=o,($e=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?_p(i):l!==null?(l.return=o,T=l):_p(i);for(;s!==null;)T=s,Jy(s),s=s.sibling;T=i,Ro=a,$e=u}Ep(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,T=s):Ep(t)}}function Ep(t){for(;T!==null;){var e=T;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:$e||ll(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&hs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}$e||e.flags&512&&Oc(e)}catch(d){ae(e,e.return,d)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Ip(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function _p(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ll(4,e)}catch(l){ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ae(e,i,l)}}var s=e.return;try{Oc(e)}catch(l){ae(e,s,l)}break;case 5:var o=e.return;try{Oc(e)}catch(l){ae(e,o,l)}}}catch(l){ae(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var KI=Math.ceil,ka=an.ReactCurrentDispatcher,Xh=an.ReactCurrentOwner,dt=an.ReactCurrentBatchConfig,q=0,Se=null,fe=null,De=0,et=0,br=Un(0),ge=0,_s=null,cr=0,ul=0,Jh=0,Xi=null,Ge=null,Zh=0,oi=1/0,Vt=null,Ca=!1,Lc=null,Tn=null,Oo=!1,vn=null,Aa=0,Ji=0,Mc=null,Qo=-1,Yo=0;function qe(){return(q&6)!==0?ce():Qo!==-1?Qo:Qo=ce()}function kn(t){return(t.mode&1)===0?1:(q&2)!==0&&De!==0?De&-De:DI.transition!==null?(Yo===0&&(Yo=Mg()),Yo):(t=G,t!==0||(t=window.event,t=t===void 0?16:jg(t.type)),t)}function Tt(t,e,n,r){if(50<Ji)throw Ji=0,Mc=null,Error(I(185));zs(t,n,r),((q&2)===0||t!==Se)&&(t===Se&&((q&2)===0&&(ul|=n),ge===4&&fn(t,De)),Ze(t,r),n===1&&q===0&&(e.mode&1)===0&&(oi=ce()+500,sl&&bn()))}function Ze(t,e){var n=t.callbackNode;DE(t,e);var r=ca(t,t===Se?De:0);if(r===0)n!==null&&Of(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Of(n),e===1)t.tag===0?NI(Sp.bind(null,t)):ay(Sp.bind(null,t)),TI(function(){(q&6)===0&&bn()}),n=null;else{switch($g(r)){case 1:n=kh;break;case 4:n=Pg;break;case 16:n=ua;break;case 536870912:n=Lg;break;default:n=ua}n=ov(n,Zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zy(t,e){if(Qo=-1,Yo=0,(q&6)!==0)throw Error(I(327));var n=t.callbackNode;if(Gr()&&t.callbackNode!==n)return null;var r=ca(t,t===Se?De:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Na(t,r);else{e=r;var i=q;q|=2;var s=tv();(Se!==t||De!==e)&&(Vt=null,oi=ce()+500,tr(t,e));do try{QI();break}catch(a){ev(t,a)}while(1);bh(),ka.current=s,q=i,fe!==null?e=0:(Se=null,De=0,e=ge)}if(e!==0){if(e===2&&(i=lc(t),i!==0&&(r=i,e=$c(t,i))),e===1)throw n=_s,tr(t,0),fn(t,r),Ze(t,ce()),n;if(e===6)fn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!WI(i)&&(e=Na(t,r),e===2&&(s=lc(t),s!==0&&(r=s,e=$c(t,s))),e===1))throw n=_s,tr(t,0),fn(t,r),Ze(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Hn(t,Ge,Vt);break;case 3:if(fn(t,r),(r&130023424)===r&&(e=Zh+500-ce(),10<e)){if(ca(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gc(Hn.bind(null,t,Ge,Vt),e);break}Hn(t,Ge,Vt);break;case 4:if(fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KI(r/1960))-r,10<r){t.timeoutHandle=gc(Hn.bind(null,t,Ge,Vt),r);break}Hn(t,Ge,Vt);break;case 5:Hn(t,Ge,Vt);break;default:throw Error(I(329))}}}return Ze(t,ce()),t.callbackNode===n?Zy.bind(null,t):null}function $c(t,e){var n=Xi;return t.current.memoizedState.isDehydrated&&(tr(t,e).flags|=256),t=Na(t,e),t!==2&&(e=Ge,Ge=n,e!==null&&Uc(e)),t}function Uc(t){Ge===null?Ge=t:Ge.push.apply(Ge,t)}function WI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fn(t,e){for(e&=~Jh,e&=~ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Sp(t){if((q&6)!==0)throw Error(I(327));Gr();var e=ca(t,0);if((e&1)===0)return Ze(t,ce()),null;var n=Na(t,e);if(t.tag!==0&&n===2){var r=lc(t);r!==0&&(e=r,n=$c(t,r))}if(n===1)throw n=_s,tr(t,0),fn(t,e),Ze(t,ce()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hn(t,Ge,Vt),Ze(t,ce()),null}function ed(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(oi=ce()+500,sl&&bn())}}function hr(t){vn!==null&&vn.tag===0&&(q&6)===0&&Gr();var e=q;q|=1;var n=dt.transition,r=G;try{if(dt.transition=null,G=1,t)return t()}finally{G=r,dt.transition=n,q=e,(q&6)===0&&bn()}}function td(){et=br.current,Z(br)}function tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SI(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:ii(),Z(Xe),Z(Ve),Hh();break;case 5:Bh(r);break;case 4:ii();break;case 13:Z(re);break;case 19:Z(re);break;case 10:Fh(r.type._context);break;case 22:case 23:td()}n=n.return}if(Se=t,fe=t=Cn(t.current,null),De=et=e,ge=0,_s=null,Jh=ul=cr=0,Ge=Xi=null,Gn!==null){for(e=0;e<Gn.length;e++)if(n=Gn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gn=null}return t}function ev(t,e){do{var n=fe;try{if(bh(),Ko.current=Ta,Sa){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sa=!1}if(ur=0,_e=me=ie=null,Qi=!1,ws=0,Xh.current=null,n===null||n.return===null){ge=1,_s=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=cp(o);if(g!==null){g.flags&=-257,hp(g,o,a,s,e),g.mode&1&&up(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if((e&1)===0){up(s,u,e),nd();break e}l=Error(I(426))}}else if(ee&&a.mode&1){var N=cp(o);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),hp(N,o,a,s,e),$h(si(l,a));break e}}s=l=si(l,a),ge!==4&&(ge=2),Xi===null?Xi=[s]:Xi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Uy(s,l,e);np(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Tn===null||!Tn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=by(s,a,e);np(s,w);break e}}s=s.return}while(s!==null)}rv(n)}catch(S){e=S,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function tv(){var t=ka.current;return ka.current=Ta,t===null?Ta:t}function nd(){(ge===0||ge===3||ge===2)&&(ge=4),Se===null||(cr&268435455)===0&&(ul&268435455)===0||fn(Se,De)}function Na(t,e){var n=q;q|=2;var r=tv();(Se!==t||De!==e)&&(Vt=null,tr(t,e));do try{GI();break}catch(i){ev(t,i)}while(1);if(bh(),q=n,ka.current=r,fe!==null)throw Error(I(261));return Se=null,De=0,ge}function GI(){for(;fe!==null;)nv(fe)}function QI(){for(;fe!==null&&!EE();)nv(fe)}function nv(t){var e=sv(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?rv(t):fe=e,Xh.current=null}function rv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=zI(n,e,et),n!==null){fe=n;return}}else{if(n=jI(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,fe=null;return}}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ge===0&&(ge=5)}function Hn(t,e,n){var r=G,i=dt.transition;try{dt.transition=null,G=1,YI(t,e,n,r)}finally{dt.transition=i,G=r}return null}function YI(t,e,n,r){do Gr();while(vn!==null);if((q&6)!==0)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RE(t,s),t===Se&&(fe=Se=null,De=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Oo||(Oo=!0,ov(ua,function(){return Gr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=dt.transition,dt.transition=null;var o=G;G=1;var a=q;q|=4,Xh.current=null,HI(t,n),Xy(n,t),gI(pc),ha=!!fc,pc=fc=null,t.current=n,qI(n),IE(),q=a,G=o,dt.transition=s}else t.current=n;if(Oo&&(Oo=!1,vn=t,Aa=i),s=t.pendingLanes,s===0&&(Tn=null),TE(n.stateNode),Ze(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ca)throw Ca=!1,t=Lc,Lc=null,t;return(Aa&1)!==0&&t.tag!==0&&Gr(),s=t.pendingLanes,(s&1)!==0?t===Mc?Ji++:(Ji=0,Mc=t):Ji=0,bn(),null}function Gr(){if(vn!==null){var t=$g(Aa),e=dt.transition,n=G;try{if(dt.transition=null,G=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,Aa=0,(q&6)!==0)throw Error(I(331));var i=q;for(q|=4,T=t.current;T!==null;){var s=T,o=s.child;if((T.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Yi(8,c,s)}var h=c.child;if(h!==null)h.return=c,T=h;else for(;T!==null;){c=T;var d=c.sibling,g=c.return;if(Gy(c),c===u){T=null;break}if(d!==null){d.return=g,T=d;break}T=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}T=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Yi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=t.current;for(T=f;T!==null;){o=T;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(a=T,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:ll(9,a)}}catch(S){ae(a,a.return,S)}if(a===o){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(q=i,bn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(el,t)}catch{}r=!0}return r}finally{G=n,dt.transition=e}}return!1}function Tp(t,e,n){e=si(n,e),e=Uy(t,e,1),t=Sn(t,e,1),e=qe(),t!==null&&(zs(t,1,e),Ze(t,e))}function ae(t,e,n){if(t.tag===3)Tp(t,t,n);else for(;e!==null;){if(e.tag===3){Tp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){t=si(n,t),t=by(e,t,1),e=Sn(e,t,1),t=qe(),e!==null&&(zs(e,1,t),Ze(e,t));break}}e=e.return}}function XI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(De&n)===n&&(ge===4||ge===3&&(De&130023424)===De&&500>ce()-Zh?tr(t,0):Jh|=n),Ze(t,e)}function iv(t,e){e===0&&((t.mode&1)===0?e=1:(e=Io,Io<<=1,(Io&130023424)===0&&(Io=4194304)));var n=qe();t=Zt(t,e),t!==null&&(zs(t,e,n),Ze(t,n))}function JI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iv(t,n)}function ZI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),iv(t,n)}var sv;sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xe.current)Qe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Qe=!1,VI(t,e,n);Qe=(t.flags&131072)!==0}else Qe=!1,ee&&(e.flags&1048576)!==0&&ly(e,va,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Go(t,e),t=e.pendingProps;var i=ti(e,Ve.current);Wr(e,n),i=Kh(null,e,r,t,i,n);var s=Wh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Je(r)?(s=!0,ga(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zh(e),i.updater=ol,e.stateNode=i,i._reactInternals=e,Sc(e,r,t,n),e=Cc(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&Lh(e),Be(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Go(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=t_(r),t=Et(r,t),i){case 0:e=kc(null,e,r,t,n);break e;case 1:e=pp(null,e,r,t,n);break e;case 11:e=dp(null,e,r,t,n);break e;case 14:e=fp(null,e,r,Et(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),kc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),pp(t,e,r,i,n);case 3:e:{if(jy(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dy(t,e),Ia(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=si(Error(I(423)),e),e=mp(t,e,r,n,i);break e}else if(r!==i){i=si(Error(I(424)),e),e=mp(t,e,r,n,i);break e}else for(tt=_n(e.stateNode.containerInfo.firstChild),nt=e,ee=!0,_t=null,n=gy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===i){e=en(t,e,n);break e}Be(t,e,r,n)}e=e.child}return e;case 5:return yy(e),t===null&&Ec(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mc(r,i)?o=null:s!==null&&mc(r,s)&&(e.flags|=32),zy(t,e),Be(t,e,o,n),e.child;case 6:return t===null&&Ec(e),null;case 13:return By(t,e,n);case 4:return jh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):Be(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),dp(t,e,r,i,n);case 7:return Be(t,e,e.pendingProps,n),e.child;case 8:return Be(t,e,e.pendingProps.children,n),e.child;case 12:return Be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(wa,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!Xe.current){e=en(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Gt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ic(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ic(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Be(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wr(e,n),i=gt(i),r=r(i),e.flags|=1,Be(t,e,r,n),e.child;case 14:return r=e.type,i=Et(r,e.pendingProps),i=Et(r.type,i),fp(t,e,r,i,n);case 15:return Fy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Et(r,i),Go(t,e),e.tag=1,Je(r)?(t=!0,ga(e)):t=!1,Wr(e,n),py(e,r,i),Sc(e,r,i,n),Cc(null,e,r,!0,t,n);case 19:return Hy(t,e,n);case 22:return Vy(t,e,n)}throw Error(I(156,e.tag))};function ov(t,e){return xg(t,e)}function e_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(t,e,n,r){return new e_(t,e,n,r)}function rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t_(t){if(typeof t=="function")return rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_h)return 11;if(t===Sh)return 14}return 2}function Cn(t,e){var n=t.alternate;return n===null?(n=ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Nr:return nr(n.children,i,s,e);case Ih:o=8,i|=8;break;case Wu:return t=ht(12,n,e,i|2),t.elementType=Wu,t.lanes=s,t;case Gu:return t=ht(13,n,e,i),t.elementType=Gu,t.lanes=s,t;case Qu:return t=ht(19,n,e,i),t.elementType=Qu,t.lanes=s,t;case mg:return cl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fg:o=10;break e;case pg:o=9;break e;case _h:o=11;break e;case Sh:o=14;break e;case cn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function nr(t,e,n,r){return t=ht(7,t,r,e),t.lanes=n,t}function cl(t,e,n,r){return t=ht(22,t,r,e),t.elementType=mg,t.lanes=n,t.stateNode={isHidden:!1},t}function _u(t,e,n){return t=ht(6,t,null,e),t.lanes=n,t}function Su(t,e,n){return e=ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function n_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function id(t,e,n,r,i,s,o,a,l){return t=new n_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(s),t}function r_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function av(t){if(!t)return On;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Je(n))return oy(t,n,e)}return e}function lv(t,e,n,r,i,s,o,a,l){return t=id(n,r,!0,t,i,s,o,a,l),t.context=av(null),n=t.current,r=qe(),i=kn(n),s=Gt(r,i),s.callback=e!=null?e:null,Sn(n,s,i),t.current.lanes=i,zs(t,i,r),Ze(t,r),t}function hl(t,e,n,r){var i=e.current,s=qe(),o=kn(i);return n=av(n),e.context===null?e.context=n:e.pendingContext=n,e=Gt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sn(i,e,o),t!==null&&(Tt(t,i,o,s),qo(t,i,o)),o}function Da(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sd(t,e){kp(t,e),(t=t.alternate)&&kp(t,e)}function i_(){return null}var uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function od(t){this._internalRoot=t}dl.prototype.render=od.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));hl(t,e,null,null)};dl.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hr(function(){hl(null,t,null,null)}),e[Jt]=null}};function dl(t){this._internalRoot=t}dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&zg(t)}};function ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function s_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Da(o);s.call(u)}}var o=lv(e,r,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=o,t[Jt]=o.current,ps(t.nodeType===8?t.parentNode:t),hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Da(l);a.call(u)}}var l=id(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=l,t[Jt]=l.current,ps(t.nodeType===8?t.parentNode:t),hr(function(){hl(e,l,n,r)}),l}function pl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Da(o);a.call(l)}}hl(e,o,t,i)}else o=s_(n,e,t,i,r);return Da(o)}Ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ui(e.pendingLanes);n!==0&&(Ch(e,n|1),Ze(e,ce()),(q&6)===0&&(oi=ce()+500,bn()))}break;case 13:hr(function(){var r=Zt(t,1);if(r!==null){var i=qe();Tt(r,t,1,i)}}),sd(t,1)}};Ah=function(t){if(t.tag===13){var e=Zt(t,134217728);if(e!==null){var n=qe();Tt(e,t,134217728,n)}sd(t,134217728)}};bg=function(t){if(t.tag===13){var e=kn(t),n=Zt(t,e);if(n!==null){var r=qe();Tt(n,t,e,r)}sd(t,e)}};Fg=function(){return G};Vg=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};sc=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=il(r);if(!i)throw Error(I(90));yg(r),Ju(r,i)}}}break;case"textarea":wg(t,n);break;case"select":e=n.value,e!=null&&Br(t,!!n.multiple,e,!1)}};Cg=ed;Ag=hr;var o_={usingClientEntryPoint:!1,Events:[Bs,xr,il,Tg,kg,ed]},Pi={findFiberByHostInstance:Wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a_={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rg(t),t===null?null:t.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||i_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{el=xo.inject(a_),xt=xo}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o_;ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(e))throw Error(I(200));return r_(t,e,null,n)};ot.createRoot=function(t,e){if(!ad(t))throw Error(I(299));var n=!1,r="",i=uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=id(t,1,!1,null,null,n,!1,r,i),t[Jt]=e.current,ps(t.nodeType===8?t.parentNode:t),new od(e)};ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Rg(e),t=t===null?null:t.stateNode,t};ot.flushSync=function(t){return hr(t)};ot.hydrate=function(t,e,n){if(!fl(e))throw Error(I(200));return pl(null,t,e,!0,n)};ot.hydrateRoot=function(t,e,n){if(!ad(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lv(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Jt]=e.current,ps(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new dl(e)};ot.render=function(t,e,n){if(!fl(e))throw Error(I(200));return pl(null,t,e,!1,n)};ot.unmountComponentAtNode=function(t){if(!fl(t))throw Error(I(40));return t._reactRootContainer?(hr(function(){pl(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1};ot.unstable_batchedUpdates=ed;ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return pl(t,e,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ot})(lg);var Ap=lg.exports;qu.createRoot=Ap.createRoot,qu.hydrateRoot=Ap.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},l_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},u_=function(t){const e=cv(t);return hv.encodeByteArray(e,!0)},Ra=function(t){return u_(t).replace(/\./g,"")},dv=function(t){try{return hv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function fv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function h_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d_(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pv(){return typeof indexedDB=="object"}function mv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function f_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function p_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=()=>p_().__FIREBASE_DEFAULTS__,g_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},y_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dv(t[1]);return e&&JSON.parse(e)},ld=()=>{try{return m_()||g_()||y_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gv=t=>{var e,n;return(n=(e=ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},v_=t=>{const e=gv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},w_=()=>{var t;return(t=ld())===null||t===void 0?void 0:t.config},yv=t=>{var e;return(e=ld())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ra(JSON.stringify(n)),Ra(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=__,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?S_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function S_(t,e){return t.replace(T_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const T_=/\{\$([^}]+)}/g;function k_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Np(s)&&Np(o)){if(!Ss(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function C_(t,e){const n=new A_(t,e);return n.subscribe.bind(n)}class A_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");N_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tu),i.error===void 0&&(i.error=Tu),i.complete===void 0&&(i.complete=Tu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=1e3,R_=2,O_=4*60*60*1e3,x_=.5;function Dp(t,e=D_,n=R_){const r=e*Math.pow(n,t),i=Math.round(x_*r*(Math.random()-.5)*2);return Math.min(O_,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class Ct{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new E_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(M_(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:L_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L_(t){return t===qn?void 0:t}function M_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new P_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const U_={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},b_=K.INFO,F_={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},V_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=F_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=b_,this._logHandler=V_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const z_=(t,e)=>e.some(n=>t instanceof n);let Rp,Op;function j_(){return Rp||(Rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function B_(){return Op||(Op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vv=new WeakMap,bc=new WeakMap,wv=new WeakMap,ku=new WeakMap,ud=new WeakMap;function H_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(An(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vv.set(n,t)}).catch(()=>{}),ud.set(e,t),e}function q_(t){if(bc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bc.set(t,e)}let Fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function K_(t){Fc=t(Fc)}function W_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cu(this),e,...n);return wv.set(r,e.sort?e.sort():[e]),An(r)}:B_().includes(t)?function(...e){return t.apply(Cu(this),e),An(vv.get(this))}:function(...e){return An(t.apply(Cu(this),e))}}function G_(t){return typeof t=="function"?W_(t):(t instanceof IDBTransaction&&q_(t),z_(t,j_())?new Proxy(t,Fc):t)}function An(t){if(t instanceof IDBRequest)return H_(t);if(ku.has(t))return ku.get(t);const e=G_(t);return e!==t&&(ku.set(t,e),ud.set(e,t)),e}const Cu=t=>ud.get(t);function Ev(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=An(o);return r&&o.addEventListener("upgradeneeded",l=>{r(An(o.result),l.oldVersion,l.newVersion,An(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Q_=["get","getKey","getAll","getAllKeys","count"],Y_=["put","add","delete","clear"],Au=new Map;function xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Au.get(e))return Au.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Y_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Q_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Au.set(e,s),s}K_(t=>({...t,get:(e,n,r)=>xp(e,n)||t.get(e,n,r),has:(e,n)=>!!xp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vc="@firebase/app",Pp="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new ml("@firebase/app"),Z_="@firebase/app-compat",eS="@firebase/analytics-compat",tS="@firebase/analytics",nS="@firebase/app-check-compat",rS="@firebase/app-check",iS="@firebase/auth",sS="@firebase/auth-compat",oS="@firebase/database",aS="@firebase/database-compat",lS="@firebase/functions",uS="@firebase/functions-compat",cS="@firebase/installations",hS="@firebase/installations-compat",dS="@firebase/messaging",fS="@firebase/messaging-compat",pS="@firebase/performance",mS="@firebase/performance-compat",gS="@firebase/remote-config",yS="@firebase/remote-config-compat",vS="@firebase/storage",wS="@firebase/storage-compat",ES="@firebase/firestore",IS="@firebase/firestore-compat",_S="firebase",SS="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="[DEFAULT]",TS={[Vc]:"fire-core",[Z_]:"fire-core-compat",[tS]:"fire-analytics",[eS]:"fire-analytics-compat",[rS]:"fire-app-check",[nS]:"fire-app-check-compat",[iS]:"fire-auth",[sS]:"fire-auth-compat",[oS]:"fire-rtdb",[aS]:"fire-rtdb-compat",[lS]:"fire-fn",[uS]:"fire-fn-compat",[cS]:"fire-iid",[hS]:"fire-iid-compat",[dS]:"fire-fcm",[fS]:"fire-fcm-compat",[pS]:"fire-perf",[mS]:"fire-perf-compat",[gS]:"fire-rc",[yS]:"fire-rc-compat",[vS]:"fire-gcs",[wS]:"fire-gcs-compat",[ES]:"fire-fst",[IS]:"fire-fst-compat","fire-js":"fire-js",[_S]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map,jc=new Map;function kS(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(jc.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;jc.set(e,t);for(const n of Oa.values())kS(n,t);return!0}function Ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new Er("app","Firebase",CS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=SS;function Iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=w_()),!n)throw Nn.create("no-options");const s=Oa.get(i);if(s){if(Ss(n,s.options)&&Ss(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new $_(i);for(const l of jc.values())o.addComponent(l);const a=new AS(n,r,o);return Oa.set(i,a),a}function cd(t=zc){const e=Oa.get(t);if(!e&&t===zc)return Iv();if(!e)throw Nn.create("no-app",{appName:t});return e}function ft(t,e,n){var r;let i=(r=TS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}Ut(new Ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="firebase-heartbeat-database",DS=1,Ts="firebase-heartbeat-store";let Nu=null;function _v(){return Nu||(Nu=Ev(NS,DS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ts)}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),Nu}async function RS(t){var e;try{return(await _v()).transaction(Ts).objectStore(Ts).get(Sv(t))}catch(n){if(n instanceof At)dr.warn(n.message);else{const r=Nn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});dr.warn(r.message)}}}async function Lp(t,e){var n;try{const i=(await _v()).transaction(Ts,"readwrite");return await i.objectStore(Ts).put(e,Sv(t)),i.done}catch(r){if(r instanceof At)dr.warn(r.message);else{const i=Nn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});dr.warn(i.message)}}}function Sv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=1024,xS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=xS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mp(),{heartbeatsToSend:n,unsentEntries:r}=LS(this._heartbeatsCache.heartbeats),i=Ra(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mp(){return new Date().toISOString().substring(0,10)}function LS(t,e=OS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$p(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$p(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pv()?mv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $p(t){return Ra(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){Ut(new Ct("platform-logger",e=>new X_(e),"PRIVATE")),Ut(new Ct("heartbeat",e=>new PS(e),"PRIVATE")),ft(Vc,Pp,t),ft(Vc,Pp,"esm2017"),ft("fire-js","")}$S("");var US=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,hd=hd||{},M=US||self;function xa(){}function gl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ws(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bS(t){return Object.prototype.hasOwnProperty.call(t,Du)&&t[Du]||(t[Du]=++FS)}var Du="closure_uid_"+(1e9*Math.random()>>>0),FS=0;function VS(t,e,n){return t.call.apply(t.bind,arguments)}function zS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=VS:be=zS,be.apply(null,arguments)}function Po(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Fn(){this.s=this.s,this.o=this.o}var jS=0;Fn.prototype.s=!1;Fn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),jS!=0)&&bS(this)};Fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Up(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var BS=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",xa,e),M.removeEventListener("test",xa,e)}catch{}return t}();function Pa(t){return/^[\s\xa0]*$/.test(t)}var bp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ru(t,e){return t<e?-1:t>e?1:0}function yl(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function Ot(t){return yl().indexOf(t)!=-1}function fd(t){return fd[" "](t),t}fd[" "]=xa;function HS(t){var e=WS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var qS=Ot("Opera"),ai=Ot("Trident")||Ot("MSIE"),kv=Ot("Edge"),Bc=kv||ai,Cv=Ot("Gecko")&&!(yl().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),KS=yl().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function Av(){var t=M.document;return t?t.documentMode:void 0}var La;e:{var Ou="",xu=function(){var t=yl();if(Cv)return/rv:([^\);]+)(\)|;)/.exec(t);if(kv)return/Edge\/([\d\.]+)/.exec(t);if(ai)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(KS)return/WebKit\/(\S+)/.exec(t);if(qS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xu&&(Ou=xu?xu[1]:""),ai){var Pu=Av();if(Pu!=null&&Pu>parseFloat(Ou)){La=String(Pu);break e}}La=Ou}var WS={};function GS(){return HS(function(){let t=0;const e=bp(String(La)).split("."),n=bp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ru(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ru(i[2].length==0,s[2].length==0)||Ru(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Hc;if(M.document&&ai){var Fp=Av();Hc=Fp||parseInt(La,10)||void 0}else Hc=void 0;var QS=Hc;function ks(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Cv){e:{try{fd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ks.X.h.call(this)}}xe(ks,Fe);var YS={2:"touch",3:"pen",4:"mouse"};ks.prototype.h=function(){ks.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gs="closure_listenable_"+(1e6*Math.random()|0),XS=0;function JS(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++XS,this.ba=this.ea=!1}function vl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Nv(t){const e={};for(const n in t)e[n]=t[n];return e}const Vp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Vp.length;s++)n=Vp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wl(t){this.src=t,this.g={},this.h=0}wl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Kc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new JS(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function qc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Tv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var md="closure_lm_"+(1e6*Math.random()|0),Lu={};function Rv(t,e,n,r,i){if(r&&r.once)return xv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Rv(t,e[s],n,r,i);return null}return n=vd(n),t&&t[Gs]?t.N(e,n,Ws(r)?!!r.capture:!!r,i):Ov(t,e,n,!1,r,i)}function Ov(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ws(i)?!!i.capture:!!i,a=yd(t);if(a||(t[md]=a=new wl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ZS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Lv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZS(){function t(n){return e.call(t.src,t.listener,n)}const e=eT;return t}function xv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)xv(t,e[s],n,r,i);return null}return n=vd(n),t&&t[Gs]?t.O(e,n,Ws(r)?!!r.capture:!!r,i):Ov(t,e,n,!0,r,i)}function Pv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Pv(t,e[s],n,r,i);else r=Ws(r)?!!r.capture:!!r,n=vd(n),t&&t[Gs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Kc(s,n,r,i),-1<n&&(vl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kc(e,n,r,i)),(n=-1<t?e[t]:null)&&gd(n))}function gd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Gs])qc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Lv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yd(e))?(qc(n,t),n.h==0&&(n.src=null,e[md]=null)):vl(t)}}}function Lv(t){return t in Lu?Lu[t]:Lu[t]="on"+t}function eT(t,e){if(t.ba)t=!0;else{e=new ks(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gd(t),t=n.call(r,e)}return t}function yd(t){return t=t[md],t instanceof wl?t:null}var Mu="__closure_events_fn_"+(1e9*Math.random()>>>0);function vd(t){return typeof t=="function"?t:(t[Mu]||(t[Mu]=function(e){return t.handleEvent(e)}),t[Mu])}function ke(){Fn.call(this),this.i=new wl(this),this.P=this,this.I=null}xe(ke,Fn);ke.prototype[Gs]=!0;ke.prototype.removeEventListener=function(t,e,n,r){Pv(this,t,e,n,r)};function Re(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var i=e;e=new Fe(r,t),Dv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Lo(o,r,!0,e)&&i}if(o=e.g=t,i=Lo(o,r,!0,e)&&i,i=Lo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Lo(o,r,!1,e)&&i}ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vl(n[r]);delete t.g[e],t.h--}}this.I=null};ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Lo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&qc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wd=M.JSON.stringify;function tT(){var t=Uv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nT{constructor(){this.h=this.g=null}add(e,n){const r=Mv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Mv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rT,t=>t.reset());class rT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iT(t){M.setTimeout(()=>{throw t},0)}function $v(t,e){Wc||sT(),Gc||(Wc(),Gc=!0),Uv.add(t,e)}var Wc;function sT(){var t=M.Promise.resolve(void 0);Wc=function(){t.then(oT)}}var Gc=!1,Uv=new nT;function oT(){for(var t;t=tT();){try{t.h.call(t.g)}catch(n){iT(n)}var e=Mv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gc=!1}function El(t,e){ke.call(this),this.h=t||1,this.g=e||M,this.j=be(this.lb,this),this.l=Date.now()}xe(El,ke);D=El.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Re(this,"tick"),this.ca&&(Ed(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ed(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){El.X.M.call(this),Ed(this),delete this.g};function Id(t,e,n){if(typeof t=="function")n&&(t=be(t,n));else if(t&&typeof t.handleEvent=="function")t=be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function bv(t){t.g=Id(()=>{t.g=null,t.i&&(t.i=!1,bv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aT extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bv(this)}M(){super.M(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(t){Fn.call(this),this.h=t,this.g={}}xe(Cs,Fn);var zp=[];function Fv(t,e,n,r){Array.isArray(n)||(n&&(zp[0]=n.toString()),n=zp);for(var i=0;i<n.length;i++){var s=Rv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Vv(t){pd(t.g,function(e,n){this.g.hasOwnProperty(n)&&gd(e)},t),t.g={}}Cs.prototype.M=function(){Cs.X.M.call(this),Vv(this)};Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Il(){this.g=!0}Il.prototype.Aa=function(){this.g=!1};function lT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function uT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Fr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hT(t,n)+(r?" "+r:"")})}function cT(t,e){t.info(function(){return"TIMEOUT: "+e})}Il.prototype.info=function(){};function hT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wd(n)}catch{return e}}var _r={},jp=null;function _l(){return jp=jp||new ke}_r.Pa="serverreachability";function zv(t){Fe.call(this,_r.Pa,t)}xe(zv,Fe);function As(t){const e=_l();Re(e,new zv(e))}_r.STAT_EVENT="statevent";function jv(t,e){Fe.call(this,_r.STAT_EVENT,t),this.stat=e}xe(jv,Fe);function He(t){const e=_l();Re(e,new jv(e,t))}_r.Qa="timingevent";function Bv(t,e){Fe.call(this,_r.Qa,t),this.size=e}xe(Bv,Fe);function Qs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var Sl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Hv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _d(){}_d.prototype.h=null;function Bp(t){return t.h||(t.h=t.i())}function qv(){}var Ys={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Sd(){Fe.call(this,"d")}xe(Sd,Fe);function Td(){Fe.call(this,"c")}xe(Td,Fe);var Qc;function Tl(){}xe(Tl,_d);Tl.prototype.g=function(){return new XMLHttpRequest};Tl.prototype.i=function(){return{}};Qc=new Tl;function Xs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Cs(this),this.O=dT,t=Bc?125:void 0,this.T=new El(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Kv}function Kv(){this.i=null,this.g="",this.h=!1}var dT=45e3,Yc={},Ma={};D=Xs.prototype;D.setTimeout=function(t){this.O=t};function Xc(t,e,n){t.K=1,t.v=Cl(tn(e)),t.s=n,t.P=!0,Wv(t,null)}function Wv(t,e){t.F=Date.now(),Js(t),t.A=tn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),t0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Kv,t.g=_0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new aT(be(t.La,t,t.g),t.N)),Fv(t.S,t.g,"readystatechange",t.ib),e=t.H?Nv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),As(),lT(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const c=qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Bc||this.g&&(this.h.h||this.g.fa()||Wp(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?As(3):As(2)),kl(this);var n=this.g.aa();this.Y=n;t:if(Gv(this)){var r=Wp(this.g);t="";var i=r.length,s=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Zi(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,uT(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pa(a)){var u=a;break t}}u=null}if(n=u)Fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jc(this,n);else{this.i=!1,this.o=3,He(12),Yn(this),Zi(this);break e}}this.P?(Qv(this,c,o),Bc&&this.i&&c==3&&(Fv(this.S,this.T,"tick",this.hb),this.T.start())):(Fr(this.j,this.m,o,null),Jc(this,o)),c==4&&Yn(this),this.i&&!this.I&&(c==4?v0(this.l,this):(this.i=!1,Js(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),Yn(this),Zi(this)}}}catch{}finally{}};function Gv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Qv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=fT(t,n),i==Ma){e==4&&(t.o=4,He(14),r=!1),Fr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yc){t.o=4,He(15),Fr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fr(t.j,t.m,i,null),Jc(t,i);Gv(t)&&i!=Ma&&i!=Yc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Od(e),e.K=!0,He(11))):(Fr(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),Zi(t))}D.hb=function(){if(this.g){var t=qt(this.g),e=this.g.fa();this.C<e.length&&(kl(this),Qv(this,t,e),this.i&&t!=4&&Js(this))}};function fT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ma:(n=Number(e.substring(n,r)),isNaN(n)?Yc:(r+=1,r+n>e.length?Ma:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Yn(this)};function Js(t){t.V=Date.now()+t.O,Yv(t,t.O)}function Yv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qs(be(t.gb,t),e)}function kl(t){t.B&&(M.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(cT(this.j,this.A),this.K!=2&&(As(),He(17)),Yn(this),this.o=2,Zi(this)):Yv(this,this.V-t)};function Zi(t){t.l.G==0||t.I||v0(t.l,t)}function Yn(t){kl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ed(t.T),Vv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Jc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Zc(n.h,t))){if(!t.J&&Zc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ba(n),Dl(n);else break e;Rd(n),He(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Qs(be(n.cb,n),6e3));if(1>=i0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&ba(n),!Pa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(kd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,te(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=I0(r,r.H?r.ka:null,r.V),o.J){s0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(kl(a),Js(a)),r.g=o}else g0(r);0<n.i.length&&Rl(n)}else u[0]!="stop"&&u[0]!="close"||Xn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xn(n,7):Dd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}As(4)}catch{}}function pT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function mT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Xv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mT(t),r=pT(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Jv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function rr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rr){this.h=e!==void 0?e:t.h,$a(this,t.j),this.s=t.s,this.g=t.g,Ua(this,t.m),this.l=t.l,e=t.i;var n=new Ns;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hp(this,n),this.o=t.o}else t&&(n=String(t).match(Jv))?(this.h=!!e,$a(this,n[1]||"",!0),this.s=Fi(n[2]||""),this.g=Fi(n[3]||"",!0),Ua(this,n[4]),this.l=Fi(n[5]||"",!0),Hp(this,n[6]||"",!0),this.o=Fi(n[7]||"")):(this.h=!!e,this.i=new Ns(null,this.h))}rr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vi(e,qp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vi(e,qp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vi(n,n.charAt(0)=="/"?wT:vT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vi(n,IT)),t.join("")};function tn(t){return new rr(t)}function $a(t,e,n){t.j=n?Fi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ua(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hp(t,e,n){e instanceof Ns?(t.i=e,_T(t.i,t.h)):(n||(e=Vi(e,ET)),t.i=new Ns(e,t.h))}function te(t,e,n){t.i.set(e,n)}function Cl(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qp=/[#\/\?@]/g,vT=/[#\?:]/g,wT=/[#\?]/g,ET=/[#\?@]/g,IT=/#/g;function Ns(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new Map,t.h=0,t.i&&gT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ns.prototype;D.add=function(t,e){Vn(this),this.i=null,t=vi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zv(t,e){Vn(t),e=vi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function e0(t,e){return Vn(t),e=vi(t,e),t.g.has(e)}D.forEach=function(t,e){Vn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){Vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){Vn(this);let e=[];if(typeof t=="string")e0(this,t)&&(e=e.concat(this.g.get(vi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Vn(this),this.i=null,t=vi(this,t),e0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function t0(t,e,n){Zv(t,e),0<n.length&&(t.i=null,t.g.set(vi(t,e),dd(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function vi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _T(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Zv(this,r),t0(this,i,n))},t)),t.j=e}var ST=class{constructor(t,e){this.h=t,this.g=e}};function n0(t){this.l=t||TT,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ga&&M.g.Ga()&&M.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TT=10;function r0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function i0(t){return t.h?1:t.g?t.g.size:0}function Zc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kd(t,e){t.g?t.g.add(e):t.h=e}function s0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}n0.prototype.cancel=function(){if(this.i=o0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function o0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dd(t.i)}function Cd(){}Cd.prototype.stringify=function(t){return M.JSON.stringify(t,void 0)};Cd.prototype.parse=function(t){return M.JSON.parse(t,void 0)};function kT(){this.g=new Cd}function CT(t,e,n){const r=n||"";try{Xv(t,function(i,s){let o=i;Ws(i)&&(o=wd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function AT(t,e){const n=new Il;if(M.Image){const r=new Image;r.onload=Po(Mo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Po(Mo,n,r,"TestLoadImage: error",!1,e),r.onabort=Po(Mo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Po(Mo,n,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Mo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Zs(t){this.l=t.ac||null,this.j=t.jb||!1}xe(Zs,_d);Zs.prototype.g=function(){return new Al(this.l,this.j)};Zs.prototype.i=function(t){return function(){return t}}({});function Al(t,e){ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ad,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(Al,ke);var Ad=0;D=Al.prototype;D.open=function(t,e){if(this.readyState!=Ad)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ds(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||M).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=Ad};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;a0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function a0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eo(this):Ds(this),this.readyState==3&&a0(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,eo(this))};D.Ua=function(t){this.g&&(this.response=t,eo(this))};D.ga=function(){this.g&&eo(this)};function eo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ds(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ds(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NT=M.JSON.parse;function le(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=l0,this.K=this.L=!1}xe(le,ke);var l0="",DT=/^https?$/i,RT=["POST","PUT"];D=le.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qc.g(),this.C=this.u?Bp(this.u):Bp(Qc),this.g.onreadystatechange=be(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Kp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=Tv(RT,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{h0(this),0<this.B&&((this.K=OT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.qa,this)):this.A=Id(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kp(this,s)}};function OT(t){return ai&&GS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof hd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function Kp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,u0(t),Nl(t)}function u0(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),Nl(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Nl(this,!0)),le.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?c0(this):this.fb())};D.fb=function(){c0(this)};function c0(t){if(t.h&&typeof hd<"u"&&(!t.C[1]||qt(t)!=4||t.aa()!=2)){if(t.v&&qt(t)==4)Id(t.Ha,0,t);else if(Re(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Jv)[1]||null;if(!i&&M.self&&M.self.location){var s=M.self.location.protocol;i=s.substr(0,s.length-1)}r=!DT.test(i?i.toLowerCase():"")}n=r}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",u0(t)}}finally{Nl(t)}}}}function Nl(t,e){if(t.g){h0(t);const n=t.g,r=t.C[0]?xa:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=r}catch{}}}function h0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NT(e)}};function Wp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case l0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function d0(t){let e="";return pd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Nd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=d0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function Li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function f0(t){this.Ca=0,this.i=[],this.j=new Il,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Li("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Li("baseRetryDelayMs",5e3,t),this.bb=Li("retryDelaySeedMs",1e4,t),this.$a=Li("forwardChannelMaxRetries",2,t),this.ta=Li("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new n0(t&&t.concurrentRequestLimit),this.Fa=new kT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=f0.prototype;D.ma=8;D.G=1;function Dd(t){if(p0(t),t.G==3){var e=t.U++,n=tn(t.F);te(n,"SID",t.I),te(n,"RID",e),te(n,"TYPE","terminate"),to(t,n),e=new Xs(t,t.j,e,void 0),e.K=2,e.v=Cl(tn(n)),n=!1,M.navigator&&M.navigator.sendBeacon&&(n=M.navigator.sendBeacon(e.v.toString(),"")),!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=_0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Js(e)}E0(t)}function Dl(t){t.g&&(Od(t),t.g.cancel(),t.g=null)}function p0(t){Dl(t),t.u&&(M.clearTimeout(t.u),t.u=null),ba(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function Rl(t){r0(t.h)||t.m||(t.m=!0,$v(t.Ja,t),t.C=0)}function xT(t,e){return i0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Qs(be(t.Ja,t,e),w0(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Xs(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Nv(s),Dv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=m0(this,i,e),n=tn(this.F),te(n,"RID",t),te(n,"CVER",22),this.D&&te(n,"X-HTTP-Session-Id",this.D),to(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(d0(s)))+"&"+e:this.o&&Nd(n,this.o,s)),kd(this.h,i),this.Ya&&te(n,"TYPE","init"),this.O?(te(n,"$req",e),te(n,"SID","null"),i.Z=!0,Xc(i,n,null)):Xc(i,n,e),this.G=2}}else this.G==3&&(t?Gp(this,t):this.i.length==0||r0(this.h)||Gp(this))};function Gp(t,e){var n;e?n=e.m:n=t.U++;const r=tn(t.F);te(r,"SID",t.I),te(r,"RID",n),te(r,"AID",t.T),to(t,r),t.o&&t.s&&Nd(r,t.o,t.s),n=new Xs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=m0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),kd(t.h,n),Xc(n,r,e)}function to(t,e){t.ia&&pd(t.ia,function(n,r){te(e,r,n)}),t.l&&Xv({},function(n,r){te(e,r,n)})}function m0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?be(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{CT(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function g0(t){t.g||t.u||(t.Z=1,$v(t.Ia,t),t.A=0)}function Rd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Qs(be(t.Ia,t),w0(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,y0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Qs(be(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,He(10),Dl(this),y0(this))};function Od(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function y0(t){t.g=new Xs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=tn(t.sa);te(e,"RID","rpc"),te(e,"SID",t.I),te(e,"CI",t.L?"0":"1"),te(e,"AID",t.T),te(e,"TYPE","xmlhttp"),to(t,e),t.o&&t.s&&Nd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Cl(tn(e)),n.s=null,n.P=!0,Wv(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Dl(this),Rd(this),He(19))};function ba(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function v0(t,e){var n=null;if(t.g==e){ba(t),Od(t),t.g=null;var r=2}else if(Zc(t.h,e))n=e.D,s0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=_l(),Re(r,new Bv(r,n)),Rl(t)}else g0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&xT(t,e)||r==2&&Rd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function w0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=be(t.kb,t);n||(n=new rr("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||$a(n,"https"),Cl(n)),AT(n.toString(),r)}else He(2);t.G=0,t.l&&t.l.va(e),E0(t),p0(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function E0(t){if(t.G=0,t.la=[],t.l){const e=o0(t.h);(e.length!=0||t.i.length!=0)&&(Up(t.la,e),Up(t.la,t.i),t.h.i.length=0,dd(t.i),t.i.length=0),t.l.ua()}}function I0(t,e,n){var r=n instanceof rr?tn(n):new rr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ua(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new rr(null,void 0);r&&$a(s,r),e&&(s.g=e),i&&Ua(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&te(r,n,e),te(r,"VER",t.ma),to(t,r),r}function _0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new le(new Zs({jb:!0})):new le(t.ra),e.Ka(t.H),e}function S0(){}D=S0.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Fa(){if(ai&&!(10<=Number(QS)))throw Error("Environmental error: no available transport.")}Fa.prototype.g=function(t,e){return new st(t,e)};function st(t,e){ke.call(this),this.g=new f0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Pa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wi(this)}xe(st,ke);st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;He(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=I0(t,null,t.V),Rl(t)};st.prototype.close=function(){Dd(this.g)};st.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wd(t),t=n);e.i.push(new ST(e.ab++,t)),e.G==3&&Rl(e)};st.prototype.M=function(){this.g.l=null,delete this.j,Dd(this.g),delete this.g,st.X.M.call(this)};function T0(t){Sd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(T0,Sd);function k0(){Td.call(this),this.status=1}xe(k0,Td);function wi(t){this.g=t}xe(wi,S0);wi.prototype.xa=function(){Re(this.g,"a")};wi.prototype.wa=function(t){Re(this.g,new T0(t))};wi.prototype.va=function(t){Re(this.g,new k0)};wi.prototype.ua=function(){Re(this.g,"b")};Fa.prototype.createWebChannel=Fa.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Sl.NO_ERROR=0;Sl.TIMEOUT=8;Sl.HTTP_ERROR=6;Hv.COMPLETE="complete";qv.EventType=Ys;Ys.OPEN="a";Ys.CLOSE="b";Ys.ERROR="c";Ys.MESSAGE="d";ke.prototype.listen=ke.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.Oa;le.prototype.getLastErrorCode=le.prototype.Ea;le.prototype.getStatus=le.prototype.aa;le.prototype.getResponseJson=le.prototype.Sa;le.prototype.getResponseText=le.prototype.fa;le.prototype.send=le.prototype.da;le.prototype.setWithCredentials=le.prototype.Ka;var PT=function(){return new Fa},LT=function(){return _l()},$u=Sl,MT=Hv,$T=_r,Qp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},UT=Zs,$o=qv,bT=le;const Yp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new ml("@firebase/firestore");function Xp(){return fr.logLevel}function R(t,...e){if(fr.logLevel<=K.DEBUG){const n=e.map(xd);fr.debug(`Firestore (${Ei}): ${t}`,...n)}}function nn(t,...e){if(fr.logLevel<=K.ERROR){const n=e.map(xd);fr.error(`Firestore (${Ei}): ${t}`,...n)}}function eh(t,...e){if(fr.logLevel<=K.WARN){const n=e.map(xd);fr.warn(`Firestore (${Ei}): ${t}`,...n)}}function xd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: `+t;throw nn(e),new Error(e)}function Y(t,e){t||$()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class VT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zT{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new C0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Me(e)}}class jT{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Y(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class BT{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new jT(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class HT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qT{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.A=n.token,new HT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=KT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function W(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new ye(0,0))}static max(){return new V(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ne extends Rs{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const WT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Rs{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return WT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ne.fromString(e))}static fromName(e){return new P(ne.fromString(e).popFirst(5))}static empty(){return new P(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ne(e.slice()))}}function GT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new xn(i,P.empty(),e)}function QT(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xn(V.min(),P.empty(),-1)}static max(){return new xn(V.max(),P.empty(),-1)}}function YT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==XT)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function N0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pd.at=-1;class we{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uo(this.root,e,this.comparator,!0)}}class Uo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ae.RED,this.left=i!=null?i:Ae.EMPTY,this.right=s!=null?s:Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zp(this.data.getIterator())}getIteratorFrom(e){return new Zp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class Zp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ve(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new je(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const ZT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(Y(!!t),typeof t=="string"){let e=0;const n=ZT.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function R0(t){const e=t.mapValue.fields.__previous_value__;return D0(e)?R0(e):e}function Os(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class xs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xs&&e.projectId===this.projectId&&e.database===this.database}}function Ol(t){return t==null}function Va(t){return t===0&&1/t==-1/0}function tk(t){return typeof t=="number"&&Number.isInteger(t)&&!Va(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?D0(t)?4:nk(t)?9007199254740991:10:$()}function bt(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Os(t).isEqual(Os(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pn(r.timestampValue),o=Pn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ui(r.bytesValue).isEqual(ui(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return de(r.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(r.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return de(r.integerValue)===de(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=de(r.doubleValue),o=de(i.doubleValue);return s===o?Va(s)===Va(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Jp(s)!==Jp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!bt(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function Ps(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function ci(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=de(i.integerValue||i.doubleValue),a=de(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return em(t.timestampValue,e.timestampValue);case 4:return em(Os(t),Os(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ui(i),a=ui(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=W(o[l],a[l]);if(u!==0)return u}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=W(de(i.latitude),de(s.latitude));return o!==0?o:W(de(i.longitude),de(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ci(o[l],a[l]);if(u)return u}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===bo.mapValue&&s===bo.mapValue)return 0;if(i===bo.mapValue)return 1;if(s===bo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=W(a[c],u[c]);if(h!==0)return h;const d=ci(o[a[c]],l[u[c]]);if(d!==0)return d}return W(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function em(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=Pn(t),r=Pn(e),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function Qr(t){return th(t)}function th(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Pn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=th(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${th(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function nh(t){return!!t&&"integerValue"in t}function Ld(t){return!!t&&"arrayValue"in t}function tm(t){return!!t&&"nullValue"in t}function nm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jo(t){return!!t&&"mapValue"in t}function es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=es(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=es(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=es(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Jo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Jo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(es(this.value))}}function O0(t){const e=[];return Ii(t.fields,(n,r)=>{const i=new Ue([n]);if(Jo(r)){const s=O0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ne(e,0,V.min(),V.min(),ct.empty(),0)}static newFoundDocument(e,n,r){return new Ne(e,1,n,V.min(),r,0)}static newNoDocument(e,n){return new Ne(e,2,n,V.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,V.min(),ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function rm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rk(t,e,n,r,i,s,o)}function Md(t){const e=U(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Qr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qr(r)).join(",")),e.ht=n}return e.ht}function ik(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Qr(r.value)}`;var r}).join(", ")}]`),Ol(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Qr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Qr(n)).join(",")),`Target(${e})`}function $d(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!dk(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!bt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sm(t.startAt,e.startAt)&&sm(t.endAt,e.endAt)}function rh(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ye extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new sk(e,n,r):n==="array-contains"?new lk(e,r):n==="in"?new uk(e,r):n==="not-in"?new ck(e,r):n==="array-contains-any"?new hk(e,r):new Ye(e,n,r)}static lt(e,n,r){return n==="in"?new ok(e,r):new ak(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ci(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.ft(ci(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class sk extends Ye{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.ft(n)}}class ok extends Ye{constructor(e,n){super(e,"in",n),this.keys=x0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ak extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=x0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function x0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class lk extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ld(n)&&Ps(n.arrayValue,this.value)}}class uk extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ps(this.value.arrayValue,n)}}class ck extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ps(this.value.arrayValue,n)}}class hk extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ld(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ps(this.value.arrayValue,r))}}class za{constructor(e,n){this.position=e,this.inclusive=n}}class Yr{constructor(e,n="asc"){this.field=e,this.dir=n}}function dk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function im(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=ci(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function fk(t,e,n,r,i,s,o,a){return new io(t,e,n,r,i,s,o,a)}function Ud(t){return new io(t)}function om(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function P0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function L0(t){for(const e of t.filters)if(e.dt())return e.field;return null}function pk(t){return t.collectionGroup!==null}function Ls(t){const e=U(t);if(e._t===null){e._t=[];const n=L0(e),r=P0(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Yr(n)),e._t.push(new Yr(Ue.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Yr(Ue.keyField(),s))}}}return e._t}function rn(t){const e=U(t);if(!e.wt)if(e.limitType==="F")e.wt=rm(e.path,e.collectionGroup,Ls(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ls(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Yr(s.field,o))}const r=e.endAt?new za(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new za(e.startAt.position,e.startAt.inclusive):null;e.wt=rm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function ja(t,e,n){return new io(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function so(t,e){return $d(rn(t),rn(e))&&t.limitType===e.limitType}function M0(t){return`${Md(rn(t))}|lt:${t.limitType}`}function ih(t){return`Query(target=${ik(rn(t))}; limitType=${t.limitType})`}function bd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=im(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ls(n),r)||n.endAt&&!function(i,s,o){const a=im(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ls(n),r))}(t,e)}function mk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $0(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=gk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gk(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ci(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Va(e)?"-0":e}}function b0(t){return{integerValue:""+t}}function yk(t,e){return tk(e)?b0(e):U0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this._=void 0}}function vk(t,e,n){return t instanceof Ms?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof $s?V0(t,e):t instanceof Us?z0(t,e):function(r,i){const s=F0(r,i),o=am(s)+am(r.yt);return nh(s)&&nh(r.yt)?b0(o):U0(r.It,o)}(t,e)}function wk(t,e,n){return t instanceof $s?V0(t,e):t instanceof Us?z0(t,e):n}function F0(t,e){return t instanceof Ba?nh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ms extends xl{}class $s extends xl{constructor(e){super(),this.elements=e}}function V0(t,e){const n=j0(e);for(const r of t.elements)n.some(i=>bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Us extends xl{constructor(e){super(),this.elements=e}}function z0(t,e){let n=j0(e);for(const r of t.elements)n=n.filter(i=>!bt(i,r));return{arrayValue:{values:n}}}class Ba extends xl{constructor(e,n){super(),this.It=e,this.yt=n}}function am(t){return de(t.integerValue||t.doubleValue)}function j0(t){return Ld(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n){this.field=e,this.transform=n}}function Ik(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof $s&&r instanceof $s||n instanceof Us&&r instanceof Us?li(n.elements,r.elements,bt):n instanceof Ba&&r instanceof Ba?bt(n.yt,r.yt):n instanceof Ms&&r instanceof Ms}(t.transform,e.transform)}class _k{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pl{}function B0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new q0(t.key,Qt.none()):new oo(t.key,t.data,Qt.none());{const n=t.data,r=ct.empty();let i=new ve(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sr(t.key,r,new Lt(i.toArray()),Qt.none())}}function Sk(t,e,n){t instanceof oo?function(r,i,s){const o=r.value.clone(),a=um(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(r,i,s){if(!Zo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=um(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(H0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ts(t,e,n,r){return t instanceof oo?function(i,s,o,a){if(!Zo(i.precondition,s))return o;const l=i.value.clone(),u=cm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,s,o,a){if(!Zo(i.precondition,s))return o;const l=cm(i.fieldTransforms,a,s),u=s.data;return u.setAll(H0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Zo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Tk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=F0(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function lm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&li(n,r,(i,s)=>Ik(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends Pl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sr extends Pl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function H0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function um(t,e,n){const r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,wk(o,a,n[i]))}return r}function cm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vk(s,o,e))}return r}class q0 extends Pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kk extends Pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,H;function Ak(t){switch(t){default:return $();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function K0(t){if(t===void 0)return nn("GRPC error has no .code"),E.UNKNOWN;switch(t){case he.OK:return E.OK;case he.CANCELLED:return E.CANCELLED;case he.UNKNOWN:return E.UNKNOWN;case he.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case he.INTERNAL:return E.INTERNAL;case he.UNAVAILABLE:return E.UNAVAILABLE;case he.UNAUTHENTICATED:return E.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case he.NOT_FOUND:return E.NOT_FOUND;case he.ALREADY_EXISTS:return E.ALREADY_EXISTS;case he.PERMISSION_DENIED:return E.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case he.ABORTED:return E.ABORTED;case he.OUT_OF_RANGE:return E.OUT_OF_RANGE;case he.UNIMPLEMENTED:return E.UNIMPLEMENTED;case he.DATA_LOSS:return E.DATA_LOSS;default:return $()}}(H=he||(he={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return N0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new we(P.comparator);function sn(){return Nk}const W0=new we(P.comparator);function zi(...t){let e=W0;for(const n of t)e=e.insert(n.key,n);return e}function G0(t){let e=W0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jn(){return ns()}function Q0(){return ns()}function ns(){return new _i(t=>t.toString(),(t,e)=>t.isEqual(e))}const Dk=new we(P.comparator),Rk=new ve(P.comparator);function j(...t){let e=Rk;for(const n of t)e=e.add(n);return e}const Ok=new ve(W);function Y0(){return Ok}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ll(V.min(),i,Y0(),sn(),j())}}class ao{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ao(r,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class X0{constructor(e,n){this.targetId=e,this.At=n}}class J0{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hm{constructor(){this.Rt=0,this.bt=fm(),this.Pt=je.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=j(),n=j(),r=j();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new ao(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=fm()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class xk{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=sn(),this.qt=dm(),this.Kt=new ve(W)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(rh(s))if(r===0){const o=new P(s.path);this.jt(n,o,Ne.newNoDocument(o,V.min()))}else Y(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&rh(a.target)){const l=new P(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Ne.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=j();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Ll(e,n,this.Kt,this.Ut,r);return this.Ut=sn(),this.qt=dm(),this.Kt=new ve(W),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new hm,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ve(W),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new hm),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function dm(){return new we(P.comparator)}function fm(){return new we(P.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Lk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Mk{constructor(e,n){this.databaseId=e,this.gt=n}}function Ha(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z0(t,e){return t.gt?e.toBase64():e.toUint8Array()}function $k(t,e){return Ha(t,e.toTimestamp())}function Yt(t){return Y(!!t),V.fromTimestamp(function(e){const n=Pn(e);return new ye(n.seconds,n.nanos)}(t))}function Fd(t,e){return function(n){return new ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ew(t){const e=ne.fromString(t);return Y(rw(e)),e}function sh(t,e){return Fd(t.databaseId,e.path)}function Uu(t,e){const n=ew(e);if(n.get(1)!==t.databaseId.projectId)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(tw(n))}function oh(t,e){return Fd(t.databaseId,e)}function Uk(t){const e=ew(t);return e.length===4?ne.emptyPath():tw(e)}function ah(t){return new ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tw(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pm(t,e,n){return{name:sh(t,e),fields:n.value.mapValue.fields}}function bk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(Y(u===void 0||typeof u=="string"),je.fromBase64String(u||"")):(Y(u===void 0||u instanceof Uint8Array),je.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:K0(l.code);return new x(u,l.message||"")}(o);n=new J0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uu(t,r.document.name),s=Yt(r.document.updateTime),o=new ct({mapValue:{fields:r.document.fields}}),a=Ne.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ea(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uu(t,r.document),s=r.readTime?Yt(r.readTime):V.min(),o=Ne.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ea([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uu(t,r.document),s=r.removedTargetIds||[];n=new ea([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Ck(i),o=r.targetId;n=new X0(o,s)}}return n}function Fk(t,e){let n;if(e instanceof oo)n={update:pm(t,e.key,e.value)};else if(e instanceof q0)n={delete:sh(t,e.key)};else if(e instanceof Sr)n={update:pm(t,e.key,e.data),updateMask:Qk(e.fieldMask)};else{if(!(e instanceof kk))return $();n={verify:sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ms)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $s)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Us)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ba)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:$k(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function Vk(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Yt(r.updateTime):Yt(i);return s.isEqual(V.min())&&(s=Yt(i)),new _k(s,r.transformResults||[])}(n,e))):[]}function zk(t,e){return{documents:[oh(t,e.path)]}}function jk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=oh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(nm(h.value))return{unaryFilter:{field:Cr(h.field),op:"IS_NAN"}};if(tm(h.value))return{unaryFilter:{field:Cr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(nm(h.value))return{unaryFilter:{field:Cr(h.field),op:"IS_NOT_NAN"}};if(tm(h.value))return{unaryFilter:{field:Cr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(h.field),op:Kk(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Cr(c.field),direction:qk(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Ol(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Bk(t){let e=Uk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Y(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=nw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Yr(Vr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ol(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new za(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new za(d,h)}(n.endAt)),fk(e,i,o,s,a,"F",l,u)}function Hk(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nw(t){return t?t.unaryFilter!==void 0?[Gk(t)]:t.fieldFilter!==void 0?[Wk(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>nw(e)).reduce((e,n)=>e.concat(n)):$():[]}function qk(t){return Pk[t]}function Kk(t){return Lk[t]}function Cr(t){return{fieldPath:t.canonicalString()}}function Vr(t){return Ue.fromServerFormat(t.fieldPath)}function Wk(t){return Ye.create(Vr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}function Gk(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Vr(t.unaryFilter.field);return Ye.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Vr(t.unaryFilter.field);return Ye.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vr(t.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vr(t.unaryFilter.field);return Ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $()}}function Qk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Sk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ts(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ts(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=B0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(n,r)=>lm(n,r))&&li(this.baseMutations,e.baseMutations,(n,r)=>lm(n,r))}}class Vd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=Dk;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,i,s=V.min(),o=V.min(),a=je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.re=e}}function Zk(t){const e=Bk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ja(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.Ye=new tC}addToCollectionParentIndex(e,n){return this.Ye.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(xn.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class tC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ve(ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ve(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new hi(0)}static vn(){return new hi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.changes=new _i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ts(r.mutation,i,Lt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,n,r=j()){const i=Jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,j()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=sn();const o=ns(),a=ns();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Sr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),ts(c.mutation,u,c.mutation.getFieldMask(),ye.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new rC(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ns();let i=new we((o,a)=>o-a),s=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Lt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||j()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Q0();c.forEach(d=>{if(!s.has(d)){const g=B0(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(Jn());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?_.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,j())).next(c=>({batchId:a,changes:G0(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=zi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zi();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(u,c){return new io(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Ne.newInvalidDocument(u)))});let o=zi();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ts(u.mutation,l,Lt.empty(),ye.now()),bd(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(Ne.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return _.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Yt(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Zk(r.bundledQuery),readTime:Yt(r.readTime)}}(n)),_.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.overlays=new we(P.comparator),this.es=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=Jn(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Jn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Jn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xk(n,r));let s=this.es.get(n);s===void 0&&(s=j(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.ns=new ve(Ie.ss),this.rs=new ve(Ie.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ie(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new P(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new P(new ne([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=j();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return P.comparator(e.key,n.key)||W(e._s,n._s)}static os(e,n){return W(e._s,n._s)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ve(Ie.ss)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yk(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ve(W);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),_.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new P(s),0);let a=new ve(W);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),_.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return _.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ie(n,0),i=this.gs.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.Es=e,this.docs=new we(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=sn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ne.newInvalidDocument(i))}),_.resolve(r)}getAllFromCollection(e,n,r){let i=sn();const s=new P(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||YT(QT(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,i){$()}As(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uC(this)}getSize(e){return _.resolve(this.size)}}class uC extends nC{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.persistence=e,this.Rs=new _i(n=>Md(n),$d),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.bs=0,this.Ps=new zd,this.targetCount=0,this.vs=hi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),_.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new hi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.Dn(n),_.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Pd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new cC(this),this.indexManager=new eC,this.remoteDocumentCache=function(r){return new lC(r)}(r=>this.referenceDelegate.xs(r)),this.It=new Jk(n),this.Ns=new sC(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new aC(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new dC(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return _.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class dC extends JT{constructor(e){super(),this.currentSequenceNumber=e}}class jd{constructor(e){this.persistence=e,this.Fs=new zd,this.$s=null}static Bs(e){return new jd(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),_.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Ls,r=>{const i=P.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return _.or([()=>_.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=j(),i=j();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(om(n))return _.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ja(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=j(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,ja(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return om(n)||i.isEqual(V.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Xp()<=K.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ih(n)),this.Bi(e,o,n,GT(i,-1)))})}Fi(e,n){let r=new ve($0(e));return n.forEach((i,s)=>{bd(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Xp()<=K.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",ih(n)),this.Ni.getDocumentsMatchingQuery(e,n,xn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new we(W),this.qi=new _i(s=>Md(s),$d),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iC(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function mC(t,e,n,r){return new pC(t,e,n,r)}async function iw(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=j();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function gC(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=_.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);Y(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=j();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sw(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function yC(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(je.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,N){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=sn(),u=j();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(vC(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(V.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function vC(t,e,n){let r=j(),i=j();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=sn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function wC(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EC(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new sr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function lh(t,e,n){const r=U(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ro(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function mm(t,e,n){const r=U(t);let i=V.min(),s=j();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=U(a),h=c.qi.get(u);return h!==void 0?_.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,rn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:j())).next(a=>(IC(r,mk(e),a),{documents:a,Hi:s})))}function IC(t,e,n){let r=t.Ki.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class gm{constructor(){this.activeTargetIds=Y0()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _C{constructor(){this.Lr=new gm,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new gm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);R("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(R("RestConnection","Received: ",l),l),l=>{throw eh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ei,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=TC[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new bT;a.setWithCredentials(!0),a.listenOnce(MT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $u.NO_ERROR:const u=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),s(u);break;case $u.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new x(E.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const c=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(h.status);o(new x(d,h.message))}else o(new x(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(E.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=PT(),o=LT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new UT({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");R("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new kC({Hr:y=>{h?R("Connection","Not sending because WebChannel is closed:",y):(c||(R("Connection","Opening WebChannel transport."),u.open(),c=!0),R("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,N)=>{y.listen(v,p=>{try{N(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,$o.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),g(u,$o.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),d.io())}),g(u,$o.EventType.ERROR,y=>{h||(h=!0,eh("Connection","WebChannel transport errored:",y),d.io(new x(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,$o.EventType.MESSAGE,y=>{var v;if(!h){const N=y.data[0];Y(!!N);const p=N,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){R("Connection","WebChannel received error:",f);const m=f.status;let w=function(C){const A=he[C];if(A!==void 0)return K0(A)}(m),S=f.message;w===void 0&&(w=E.INTERNAL,S="Unknown error status: "+m+" with message "+f.message),h=!0,d.io(new x(w,S)),u.close()}else R("Connection","WebChannel received:",N),d.ro(N)}}),g(o,$T.STAT_EVENT,y=>{y.stat===Qp.PROXY?R("Connection","Detected buffering proxy"):y.stat===Qp.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function bu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t){return new Mk(t,!0)}class ow{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new ow(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(nn(n.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new x(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AC extends aw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=bk(this.It,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?Yt(s.readTime):V.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=ah(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=rh(a)?{documents:zk(i,a)}:{query:jk(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Z0(i,s.resumeToken):s.snapshotVersion.compareTo(V.min())>0&&(o.readTime=Ha(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=Hk(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=ah(this.It),n.removeTarget=e,this.Lo(n)}}class NC extends aw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Vk(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.tu(r,n)}return Y(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=ah(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Fk(this.It,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(E.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(E.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class RC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(nn(n),this.uu=!1):R("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Tr(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l.wu.add(4),await lo(l),l.yu.set("Unknown"),l.wu.delete(4),await $l(l)}(this))})}),this.yu=new RC(r,i)}}async function $l(t){if(Tr(t))for(const e of t.mu)await e(!0)}async function lo(t){for(const e of t.mu)await e(!1)}function lw(t,e){const n=U(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Kd(n)?qd(n):Si(n).Oo()&&Hd(n,e))}function uw(t,e){const n=U(t),r=Si(n);n._u.delete(e),r.Oo()&&cw(n,e),n._u.size===0&&(r.Oo()?r.$o():Tr(n)&&n.yu.set("Unknown"))}function Hd(t,e){t.pu.Mt(e.targetId),Si(t).Ho(e)}function cw(t,e){t.pu.Mt(e),Si(t).Jo(e)}function qd(t){t.pu=new xk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Si(t).start(),t.yu.cu()}function Kd(t){return Tr(t)&&!Si(t).ko()&&t._u.size>0}function Tr(t){return U(t).wu.size===0}function hw(t){t.pu=void 0}async function xC(t){t._u.forEach((e,n)=>{Hd(t,e)})}async function PC(t,e){hw(t),Kd(t)?(t.yu.lu(e),qd(t)):t.yu.set("Unknown")}async function LC(t,e,n){if(t.yu.set("Online"),e instanceof J0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qa(t,r)}else if(e instanceof ea?t.pu.Gt(e):e instanceof X0?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(V.min()))try{const r=await sw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(je.EMPTY_BYTE_STRING,l.snapshotVersion)),cw(i,a);const u=new sr(l.target,a,1,l.sequenceNumber);Hd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await qa(t,r)}}async function qa(t,e,n){if(!ro(e))throw e;t.wu.add(1),await lo(t),t.yu.set("Offline"),n||(n=()=>sw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await $l(t)})}function dw(t,e){return e().catch(n=>qa(t,n,e))}async function Ul(t){const e=U(t),n=Ln(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;MC(e);)try{const i=await wC(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,$C(e,i)}catch(i){await qa(e,i)}fw(e)&&pw(e)}function MC(t){return Tr(t)&&t.du.length<10}function $C(t,e){t.du.push(e);const n=Ln(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function fw(t){return Tr(t)&&!Ln(t).ko()&&t.du.length>0}function pw(t){Ln(t).start()}async function UC(t){Ln(t).nu()}async function bC(t){const e=Ln(t);for(const n of t.du)e.Zo(n.mutations)}async function FC(t,e,n){const r=t.du.shift(),i=Vd.from(r,e,n);await dw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ul(t)}async function VC(t,e){e&&Ln(t).Xo&&await async function(n,r){if(i=r.code,Ak(i)&&i!==E.ABORTED){const s=n.du.shift();Ln(n).Fo(),await dw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ul(n)}var i}(t,e),fw(t)&&pw(t)}async function vm(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Tr(n);n.wu.add(3),await lo(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await $l(n)}async function zC(t,e){const n=U(t);e?(n.wu.delete(2),await $l(n)):e||(n.wu.add(2),await lo(n),n.yu.set("Unknown"))}function Si(t){return t.Iu||(t.Iu=function(e,n,r){const i=U(e);return i.iu(),new AC(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:xC.bind(null,t),Zr:PC.bind(null,t),zo:LC.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Kd(t)?qd(t):t.yu.set("Unknown")):(await t.Iu.stop(),hw(t))})),t.Iu}function Ln(t){return t.Tu||(t.Tu=function(e,n,r){const i=U(e);return i.iu(),new NC(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:UC.bind(null,t),Zr:VC.bind(null,t),eu:bC.bind(null,t),tu:FC.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Ul(t)):(await t.Tu.stop(),t.du.length>0&&(R("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Wd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gd(t,e){if(nn("AsyncQueue",`${e}: ${t}`),ro(t))return new x(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=zi(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.Eu=new we(P.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):$():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class di{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new di(e,n,Xr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&so(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.Ru=void 0,this.listeners=[]}}class BC{constructor(){this.queries=new _i(e=>M0(e),so),this.onlineState="Unknown",this.bu=new Set}}async function HC(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jC),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Gd(o,`Initialization of query '${ih(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&Qd(n)}async function qC(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KC(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&Qd(n)}function WC(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qd(t){t.bu.forEach(e=>{e.next()})}class GC{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.key=e}}class gw{constructor(e){this.key=e}}class QC{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=j(),this.mutatedKeys=j(),this.Gu=$0(e),this.Qu=new Xr(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new wm,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=bd(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),N=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),N=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),N=!0):d&&!g&&(r.track({type:1,doc:d}),N=!0,(l||u)&&(a=!0)),N&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(h)-g(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new di(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new wm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=j(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new gw(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new mw(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=j();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return di.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class YC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XC{constructor(e){this.key=e,this.nc=!1}}class JC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new _i(a=>M0(a),so),this.rc=new Map,this.oc=new Set,this.uc=new we(P.comparator),this.cc=new Map,this.ac=new zd,this.hc={},this.lc=new Map,this.fc=hi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ZC(t,e){const n=uA(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await EC(n.localStore,rn(e));n.isPrimaryClient&&lw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await eA(n,e,r,a==="current",o.resumeToken)}return i}async function eA(t,e,n,r,i){t._c=(h,d,g)=>async function(y,v,N,p){let f=v.view.Wu(N);f.$i&&(f=await mm(y.localStore,v.query,!1).then(({documents:S})=>v.view.Wu(S,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return Im(y,v.targetId,w.Xu),w.snapshot}(t,h,d,g);const s=await mm(t.localStore,e,!0),o=new QC(e,s.Hi),a=o.Wu(s.documents),l=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Im(t,n,u.Xu);const c=new YC(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function tA(t,e){const n=U(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!so(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),uw(n.remoteStore,r.targetId),uh(n,r.targetId)}).catch(no)):(uh(n,r.targetId),await lh(n.localStore,r.targetId,!0))}async function nA(t,e,n){const r=cA(t);try{const i=await function(s,o){const a=U(s),l=ye.now(),u=o.reduce((d,g)=>d.add(g.key),j());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=sn(),y=j();return a.Gi.getEntries(d,u).next(v=>{g=v,g.forEach((N,p)=>{p.isValidDocument()||(y=y.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const N=[];for(const p of o){const f=Tk(p,c.get(p.key).overlayedDocument);f!=null&&N.push(new Sr(p.key,f,O0(f.value.mapValue),Qt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,N,o)}).next(v=>{h=v;const N=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,N)})}).then(()=>({batchId:h.batchId,changes:G0(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new we(W)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await uo(r,i.changes),await Ul(r.remoteStore)}catch(i){const s=Gd(i,"Failed to persist write");n.reject(s)}}async function yw(t,e){const n=U(t);try{const r=await yC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Y(o.nc):i.removedDocuments.size>0&&(Y(o.nc),o.nc=!1))}),await uo(n,r,e)}catch(r){await no(r)}}function Em(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&Qd(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rA(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new we(P.comparator);o=o.insert(s,Ne.newNoDocument(s,V.min()));const a=j().add(s),l=new Ll(V.min(),new Map,new ve(W),o,a);await yw(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Yd(r)}else await lh(r.localStore,e,!1).then(()=>uh(r,e,n)).catch(no)}async function iA(t,e){const n=U(t),r=e.batch.batchId;try{const i=await gC(n.localStore,e);ww(n,r,null),vw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,i)}catch(i){await no(i)}}async function sA(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Y(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);ww(r,e,n),vw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,i)}catch(i){await no(i)}}function vw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function ww(t,e,n){const r=U(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function uh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Ew(t,r)})}function Ew(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(uw(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Yd(t))}function Im(t,e,n){for(const r of n)r instanceof mw?(t.ac.addReference(r.key,e),oA(t,r)):r instanceof gw?(R("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Ew(t,r.key)):$()}function oA(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.oc.add(r),Yd(t))}function Yd(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new P(ne.fromString(e)),r=t.fc.next();t.cc.set(r,new XC(n)),t.uc=t.uc.insert(n,r),lw(t.remoteStore,new sr(rn(Ud(n.path)),r,2,Pd.at))}}async function uo(t,e,n){const r=U(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Bd.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(l,h=>_.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>_.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ro(c))throw c;R("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function aA(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await iw(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new x(E.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r.ji)}}function lA(t,e){const n=U(t),r=n.cc.get(e);if(r&&r.nc)return j().add(r.key);{let i=j();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function uA(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rA.bind(null,e),e.sc.zo=KC.bind(null,e.eventManager),e.sc.wc=WC.bind(null,e.eventManager),e}function cA(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sA.bind(null,e),e}class hA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Ml(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return mC(this.persistence,new fC,e.initialUser,this.It)}yc(e){return new hC(jd.Bs,this.It)}gc(e){return new _C}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Em(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aA.bind(null,this.syncEngine),await zC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BC}createDatastore(e){const n=Ml(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new CC(i));var i;return function(s,o,a,l){return new DC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Em(this.syncEngine,a,0),o=ym.C()?new ym:new SC,new OC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new JC(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);R("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await lo(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t,e,n){if(!n)throw new x(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fA(t,e,n,r){if(e===!0&&r===!0)throw new x(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _m(t){if(!P.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sm(t){if(P.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xd(t);throw new x(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function pA(t,e){if(e<=0)throw new x(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new Map;class km{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,fA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new km({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new km(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new FT;switch(n.type){case"gapi":const r=n.client;return new BT(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tm.get(e);n&&(R("ComponentProvider","Removing Datastore"),Tm.delete(e),n.terminate())}(this),Promise.resolve()}}function mA(t,e,n,r={}){var i;const s=(t=rs(t,bl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&eh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Me.MOCK_USER;else{o=I_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Me(l)}t._authCredentials=new VT(new C0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pt(this.firestore,e,this._key)}}class Mn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class Dn extends Mn{constructor(e,n,r){super(e,n,Ud(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new P(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function _w(t,e,...n){if(t=Te(t),Iw("collection","path",e),t instanceof bl){const r=ne.fromString(e,...n);return Sm(r),new Dn(t,null,r)}{if(!(t instanceof pt||t instanceof Dn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return Sm(r),new Dn(t.firestore,null,r)}}function gA(t,e,...n){if(t=Te(t),arguments.length===1&&(e=A0.R()),Iw("doc","path",e),t instanceof bl){const r=ne.fromString(e,...n);return _m(r),new pt(t,null,new P(r))}{if(!(t instanceof pt||t instanceof Dn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ne.fromString(e,...n));return _m(r),new pt(t.firestore,t instanceof Dn?t.converter:null,new P(r))}}function yA(t,e){return t=Te(t),e=Te(e),t instanceof Mn&&e instanceof Mn&&t.firestore===e.firestore&&so(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):nn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Me.UNAUTHENTICATED,this.clientId=A0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function EA(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function IA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _A(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>vm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>vm(e.remoteStore,s)),t.onlineComponents=e}async function _A(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await EA(t,new hA)),t.offlineComponents}async function Sw(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await IA(t,new dA)),t.onlineComponents}function SA(t){return Sw(t).then(e=>e.syncEngine)}async function Cm(t){const e=await Sw(t),n=e.eventManager;return n.onListen=ZC.bind(null,e.syncEngine),n.onUnlisten=tA.bind(null,e.syncEngine),n}class TA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new ow(this,"async_queue_retry"),this.Wc=()=>{const n=bu();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=bu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=bu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ir;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!ro(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw nn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Wd.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&$()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Am(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ka extends bl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new TA,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kw(this),this._firestoreClient.terminate()}}function kA(t,e){const n=typeof t=="object"?t:cd(),r=typeof t=="string"?t:e||"(default)",i=Ir(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=v_("firestore");s&&mA(i,...s)}return i}function Tw(t){return t._firestoreClient||kw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new ek(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new wA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(je.fromBase64String(e))}catch(n){throw new x(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fi(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=/^__.*__$/;class AA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}function Cw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class tf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Wa(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Cw(this.sa)&&CA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class NA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Ml(e)}da(e,n,r,i=!1){return new tf({sa:e,methodName:n,fa:r,path:Ue.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function DA(t){const e=t._freezeSettings(),n=Ml(t._databaseId);return new NA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function RA(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Rw("Data must be an object, but it was:",o,r);const a=Nw(r,o);let l,u;if(s.merge)l=new Lt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=OA(e,h,n);if(!o.contains(d))throw new x(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);PA(c,d)||c.push(d)}l=new Lt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new AA(new ct(a),l,u)}class nf extends Zd{_toFieldTransform(e){return new Ek(e.path,new Ms)}isEqual(e){return e instanceof nf}}function Aw(t,e){if(Dw(t=Te(t)))return Rw("Unsupported field value:",e,t),Nw(t,e);if(t instanceof Zd)return function(n,r){if(!Cw(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Aw(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yk(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:Ha(r.It,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ha(r.It,i)}}if(n instanceof ef)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fi)return{bytesValue:Z0(r.It,n._byteString)};if(n instanceof pt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fd(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Xd(n)}`)}(t,e)}function Nw(t,e){const n={};return N0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ii(t,(r,i)=>{const s=Aw(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Dw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof ef||t instanceof fi||t instanceof pt||t instanceof Zd)}function Rw(t,e,n){if(!Dw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xd(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function OA(t,e,n){if((e=Te(e))instanceof Jd)return e._internalPath;if(typeof e=="string")return Ow(t,e);throw Wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const xA=new RegExp("[~\\*/\\[\\]]");function Ow(t,e,n){if(e.search(xA)>=0)throw Wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jd(...e.split("."))._internalPath}catch{throw Wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(E.INVALID_ARGUMENT,a+t+l)}function PA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LA extends xw{data(){return super.data()}}function rf(t,e){return typeof e=="string"?Ow(t,e):e instanceof Jd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pw{}function $A(t,...e){for(const n of e)t=n._apply(t);return t}class UA extends Pw{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new x(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new x(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Yr(i,s);return function(a,l){if(P0(a)===null){const u=L0(a);u!==null&&zA(a,u,l.field)}}(r,o),o}(e._query,this.ma,this.pa);return new Mn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new io(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function bA(t,e="asc"){const n=e,r=rf("orderBy",t);return new UA(r,n)}class FA extends Pw{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new Mn(e.firestore,e.converter,ja(e._query,this.Ia,this.Ta))}}function VA(t){return pA("limit",t),new FA("limit",t,"F")}function zA(t,e,n){if(!n.isEqual(e))throw new x(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return Ii(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ef(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=R0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Os(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ne.fromString(e);Y(rw(r));const i=new xs(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lw extends xw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ta extends Lw{data(e={}){return super.data(e)}}class HA{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ji(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ta(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ta(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ji(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ta(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ji(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:qA(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class Mw extends jA{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,n)}}function KA(t,e){const n=rs(t.firestore,Ka),r=gA(t),i=BA(t.converter,e);return WA(n,[RA(DA(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then(()=>r)}function Nm(t,...e){var n,r,i;t=Te(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Am(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Am(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof pt)u=rs(t.firestore,Ka),c=Ud(t._key.path),l={next:h=>{e[o]&&e[o](GA(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=rs(t,Mn);u=rs(h.firestore,Ka),c=h._query;const d=new Mw(u);l={next:g=>{e[o]&&e[o](new HA(u,d,h,g))},error:e[o+1],complete:e[o+2]},MA(t._query)}return function(h,d,g,y){const v=new vA(y),N=new GC(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>HC(await Cm(h),N)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>qC(await Cm(h),N))}}(Tw(u),c,a,l)}function WA(t,e){return function(n,r){const i=new ir;return n.asyncQueue.enqueueAndForget(async()=>nA(await SA(n),r,i)),i.promise}(Tw(t),e)}function GA(t,e,n){const r=n.docs.get(e._key),i=new Mw(t);return new Lw(t,i,e._key,r,new ji(n.hasPendingWrites,n.fromCache),e.converter)}function QA(){return new nf("serverTimestamp")}(function(t,e=!0){(function(n){Ei=n})(Ks),Ut(new Ct("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ka(new zT(n.getProvider("auth-internal")),new qT(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ft(Yp,"3.7.1",t),ft(Yp,"3.7.1","esm2017")})();function sf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $w(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YA=$w,Uw=new Er("auth","Firebase",$w());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new ml("@firebase/auth");function na(t,...e){Dm.logLevel<=K.ERROR&&Dm.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw of(t,...e)}function Mt(t,...e){return of(t,...e)}function bw(t,e,n){const r=Object.assign(Object.assign({},YA()),{[e]:n});return new Er("auth","Firebase",r).create(e,{appName:t.name})}function XA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ft(t,"argument-error"),bw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Uw.create(t,...e)}function L(t,e,...n){if(!t)throw of(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw na(e),new Error(e)}function on(t,e){t||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=new Map;function Wt(t){on(t instanceof Function,"Expected a class definition");let e=Rm.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t,e){const n=Ir(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ss(s,e!=null?e:{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function ZA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eN(){return Om()==="http:"||Om()==="https:"}function Om(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eN()||fv()||"connection"in navigator)?navigator.onLine:!0}function nN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=c_()||h_()}get(){return tN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new co(3e4,6e4);function sN(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fl(t,e,n,r,i={}){return Vw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Fw.fetch()(zw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Vw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rN),e);try{const i=new aN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bw(t,c,u);Ft(t,c)}}catch(i){if(i instanceof At)throw i;Ft(t,"network-request-failed")}}async function oN(t,e,n,r,i={}){const s=await Fl(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function zw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?af(t.config,i):`${t.config.apiScheme}://${i}`}class aN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),iN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){return Fl(t,"POST","/v1/accounts:delete",e)}async function uN(t,e){return Fl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cN(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=lf(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:is(Fu(i.auth_time)),issuedAtTime:is(Fu(i.iat)),expirationTime:is(Fu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fu(t){return Number(t)*1e3}function lf(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const s=dv(r);return s?JSON.parse(s):(na("Failed to decode base64 JWT payload"),null)}catch(s){return na("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function hN(t){const e=lf(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&dN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bs(t,uN(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gN(s.providerUserInfo):[],a=mN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function pN(t){const e=Te(t);await Ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gN(t){return t.map(e=>{var{providerId:n}=e,r=sf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e){const n=await Vw(t,{},async()=>{const r=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=zw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fs;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class or{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bs(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:S,providerData:C,stsTokenManager:A}=n;L(m&&A,e,"internal-error");const O=Fs.fromJSON(this.name,A);L(typeof m=="string",e,"internal-error"),un(h,e.name),un(d,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof S=="boolean",e,"internal-error"),un(g,e.name),un(y,e.name),un(v,e.name),un(N,e.name),un(p,e.name),un(f,e.name);const X=new or({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(X.providerData=C.map(z=>Object.assign({},z))),N&&(X._redirectEventId=N),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fs;i.updateFromServerResponse(n);const s=new or({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ga(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bw.type="NONE";const xm=Bw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ra(this.userKey,i.apiKey,s),this.fullPersistenceKey=ra("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(Wt(xm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wt(xm);const o=ra(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=or._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Jr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Jr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gw(e))return"Blackberry";if(Qw(e))return"Webos";if(uf(e))return"Safari";if((e.includes("chrome/")||qw(e))&&!e.includes("edge/"))return"Chrome";if(Ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hw(t=ze()){return/firefox\//i.test(t)}function uf(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qw(t=ze()){return/crios\//i.test(t)}function Kw(t=ze()){return/iemobile/i.test(t)}function Ww(t=ze()){return/android/i.test(t)}function Gw(t=ze()){return/blackberry/i.test(t)}function Qw(t=ze()){return/webos/i.test(t)}function Vl(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vN(t=ze()){var e;return Vl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wN(){return d_()&&document.documentMode===10}function Yw(t=ze()){return Vl(t)||Ww(t)||Qw(t)||Gw(t)||/windows phone/i.test(t)||Kw(t)}function EN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e=[]){let n;switch(t){case"Browser":n=Pm(ze());break;case"Worker":n=`${Pm(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lm(this),this.idTokenSubscription=new Lm(this),this.beforeStateQueue=new IN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ga(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Te(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function zl(t){return Te(t)}class Lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=C_(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function SN(t,e,n){const r=zl(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Jw(e),{host:o,port:a}=TN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kN()}function Jw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TN(t){const e=Jw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mm(o)}}}function Mm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e){return oN(t,"POST","/v1/accounts:signInWithIdp",sN(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="http://localhost";class mr extends Zw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=sf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:CN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends cf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ho{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ho{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ho{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await or._fromIdTokenResponse(e,r,i),o=$m(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$m(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $m(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qa(e,n,r,i)}}function e1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qa._fromErrorAndOperation(t,s,e,r):s})}async function AN(t,e,n=!1){const r=await bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await bs(t,e1(i,s,e,t),n);L(o.idToken,i,"internal-error");const a=lf(o.idToken);L(a,i,"internal-error");const{sub:l}=a;return L(t.uid===l,i,"user-mismatch"),pi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ft(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e,n=!1){const r="signIn",i=await e1(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function RN(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function ON(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function xN(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function PN(t){return Te(t).signOut()}const Ya="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ya,"1"),this.storage.removeItem(Ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(){const t=ze();return uf(t)||Vl(t)}const MN=1e3,$N=10;class n1 extends t1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=LN()&&EN(),this.fallbackToPolling=Yw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$N):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n1.type="LOCAL";const UN=n1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1 extends t1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}r1.type="SESSION";const i1=r1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await bN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=hf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function VN(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function zN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BN(){return s1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1="firebaseLocalStorageDb",HN=1,Xa="firebaseLocalStorage",a1="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bl(t,e){return t.transaction([Xa],e?"readwrite":"readonly").objectStore(Xa)}function qN(){const t=indexedDB.deleteDatabase(o1);return new fo(t).toPromise()}function hh(){const t=indexedDB.open(o1,HN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xa,{keyPath:a1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xa)?e(r):(r.close(),await qN(),e(await hh()))})})}async function Um(t,e,n){const r=Bl(t,!0).put({[a1]:e,value:n});return new fo(r).toPromise()}async function KN(t,e){const n=Bl(t,!1).get(e),r=await new fo(n).toPromise();return r===void 0?null:r.value}function bm(t,e){const n=Bl(t,!0).delete(e);return new fo(n).toPromise()}const WN=800,GN=3;class l1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return s1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(BN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zN(),!this.activeServiceWorker)return;this.sender=new FN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hh();return await Um(e,Ya,"1"),await bm(e,Ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Um(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bl(i,!1).getAll();return new fo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l1.type="LOCAL";const QN=l1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function XN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YN().appendChild(r)})}function JN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new co(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t,e){return e?Wt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends Zw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZN(t){return DN(t.auth,new df(t),t.bypassAuthState)}function eD(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),NN(n,new df(t),t.bypassAuthState)}async function tD(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),AN(n,new df(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZN;case"linkViaPopup":case"linkViaRedirect":return tD;case"reauthViaPopup":case"reauthViaRedirect":return eD;default:Ft(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new co(2e3,1e4);async function rD(t,e,n){const r=zl(t);XA(t,e,cf);const i=u1(r,n);return new Zn(r,"signInViaPopup",e,i).executeNotNull()}class Zn extends c1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,nD.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="pendingRedirect",ia=new Map;class sD extends c1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await oD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oD(t,e){const n=uD(e),r=lD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aD(t,e){ia.set(t._key(),e)}function lD(t){return Wt(t._redirectPersistence)}function uD(t){return ra(iD,t.config.apiKey,t.name)}async function cD(t,e,n=!1){const r=zl(t),i=u1(r,e),o=await new sD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=10*60*1e3;class dD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!h1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fm(e))}saveEventToCache(e){this.cachedEventUids.add(Fm(e)),this.lastProcessedEventTime=Date.now()}}function Fm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function h1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t,e={}){return Fl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gD=/^https?/;async function yD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pD(t);for(const n of e)try{if(vD(n))return}catch{}Ft(t,"unauthorized-domain")}function vD(t){const e=ch(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gD.test(n))return!1;if(mD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=new co(3e4,6e4);function Vm(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ED(t){return new Promise((e,n)=>{var r,i,s;function o(){Vm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vm(),n(Mt(t,"network-request-failed"))},timeout:wD.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)o();else{const a=JN("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},XN(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sa=null,e})}let sa=null;function ID(t){return sa=sa||ED(t),sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=new co(5e3,15e3),SD="__/auth/iframe",TD="emulator/auth/iframe",kD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AD(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?af(e,TD):`https://${t.config.authDomain}/${SD}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},i=CD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qs(r).slice(1)}`}async function ND(t){const e=await ID(t),n=$t().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:AD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=$t().setTimeout(()=>{s(o)},_D.get());function l(){$t().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RD=500,OD=600,xD="_blank",PD="http://localhost";class zm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LD(t,e,n,r=RD,i=OD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},DD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ze().toLowerCase();n&&(a=qw(u)?xD:n),Hw(u)&&(e=e||PD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(vN(u)&&a!=="_self")return MD(e||"",a),new zm(null);const h=window.open(e||"",a,c);L(h,t,"popup-blocked");try{h.focus()}catch{}return new zm(h)}function MD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D="__/auth/handler",UD="emulator/auth/handler";function jm(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:i};if(e instanceof cf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",k_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof ho){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${bD(t)}?${qs(a).slice(1)}`}function bD({config:t}){return t.emulator?af(t,UD):`https://${t.authDomain}/${$D}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="webStorageSupport";class FD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i1,this._completeRedirectFn=cD,this._overrideRedirectResult=aD}async _openPopup(e,n,r,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=jm(e,n,r,ch(),i);return LD(e,o,hf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),VN(jm(e,n,r,ch(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ND(e),r=new dD(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vu,{type:Vu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vu];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yw()||uf()||Vl()}}const VD=FD;var Bm="@firebase/auth",Hm="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BD(t){Ut(new Ct("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xw(t)},c=new _N(a,l,u);return ZA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ut(new Ct("auth-internal",e=>{const n=zl(e.getProvider("auth").getImmediate());return(r=>new zD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Bm,Hm,jD(t)),ft(Bm,Hm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=5*60,qD=yv("authIdTokenMaxAge")||HD;let qm=null;const KD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qD)return;const i=n==null?void 0:n.token;qm!==i&&(qm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WD(t=cd()){const e=Ir(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JA(t,{popupRedirectResolver:VD,persistence:[QN,UN,i1]}),r=yv("authTokenSyncURL");if(r){const s=KD(r);ON(n,s,()=>s(n.currentUser)),RN(n,o=>s(o))}const i=gv("auth");return i&&SN(n,`http://${i}`),n}BD("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function d1(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function f1(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zr=function(){return zr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},zr.apply(this,arguments)},p1=function(t){return{loading:t==null,value:t}},GD=function(){return function(t,e){switch(e.type){case"error":return zr(zr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return p1(e.defaultValue);case"value":return zr(zr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},QD=function(t){var e=t?t():void 0,n=pe.exports.useReducer(GD(),p1(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return pe.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},m1=function(t,e){var n=QD(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;pe.exports.useEffect(function(){var u=xN(t,function(c){return d1(void 0,void 0,void 0,function(){var h;return f1(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return d.sent(),[3,4];case 3:return h=d.sent(),s(h),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]);var l=[a,i,r];return pe.exports.useMemo(function(){return l},l)},YD=function(t){var e=function(n,r){var i=new jt;return n&&n.forEach(function(s){return i.addScope(s)}),r&&i.setCustomParameters(r),i};return XD(t,e)},XD=function(t,e){var n=pe.exports.useState(),r=n[0],i=n[1],s=pe.exports.useState(),o=s[0],a=s[1],l=pe.exports.useState(!1),u=l[0],c=l[1],h=function(g,y){return d1(void 0,void 0,void 0,function(){var v,N,p;return f1(this,function(f){switch(f.label){case 0:c(!0),i(void 0),f.label=1;case 1:return f.trys.push([1,3,4,5]),v=e(g,y),[4,rD(t,v)];case 2:return N=f.sent(),a(N),[3,5];case 3:return p=f.sent(),i(p),[3,5];case 4:return c(!1),[7];case 5:return[2]}})})},d=[h,o,u,r];return pe.exports.useMemo(function(){return d},d)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var jr=function(){return jr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},jr.apply(this,arguments)},g1=function(t){return{loading:t==null,value:t}},JD=function(){return function(t,e){switch(e.type){case"error":return jr(jr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return g1(e.defaultValue);case"value":return jr(jr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},ZD=function(t){var e=t?t():void 0,n=pe.exports.useReducer(JD(),g1(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return pe.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},eR=function(t,e,n){var r=pe.exports.useRef(t);return pe.exports.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},tR=function(t,e){var n=!t&&!e,r=!!t&&!!e&&yA(t,e);return n||r},nR=function(t,e){return eR(t,tR,e)},rR=function(t,e){var n=ZD(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=nR(t,s);pe.exports.useEffect(function(){if(!u.current){a(void 0);return}var h=e!=null&&e.snapshotListenOptions?Nm(u.current,e.snapshotListenOptions,a,o):Nm(u.current,a,o);return function(){h()}},[u.current]);var c=[l,i,r];return pe.exports.useMemo(function(){return c},c)},iR="firebase",sR="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(iR,sR,"app");const y1="@firebase/installations",ff="0.5.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=1e4,w1=`w:${ff}`,E1="FIS_v2",oR="https://firebaseinstallations.googleapis.com/v1",aR=60*60*1e3,lR="installations",uR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},gr=new Er(lR,uR,cR);function I1(t){return t instanceof At&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1({projectId:t}){return`${oR}/projects/${t}/installations`}function S1(t){return{token:t.token,requestStatus:2,expiresIn:dR(t.expiresIn),creationTime:Date.now()}}async function T1(t,e){const r=(await e.json()).error;return gr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function k1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function hR(t,{refreshToken:e}){const n=k1(t);return n.append("Authorization",fR(e)),n}async function C1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function dR(t){return Number(t.replace("s","000"))}function fR(t){return`${E1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=_1(t),i=k1(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:E1,appId:t.appId,sdkVersion:w1},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await C1(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:S1(u.authToken)}}else throw await T1("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=/^[cdef][\w-]{21}$/,dh="";function yR(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=vR(t);return gR.test(n)?n:dh}catch{return dh}}function vR(t){return mR(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=new Map;function D1(t,e){const n=Hl(t);R1(n,e),wR(n,e)}function R1(t,e){const n=N1.get(t);if(!!n)for(const r of n)r(e)}function wR(t,e){const n=ER();n&&n.postMessage({key:t,fid:e}),IR()}let er=null;function ER(){return!er&&"BroadcastChannel"in self&&(er=new BroadcastChannel("[Firebase] FID Change"),er.onmessage=t=>{R1(t.data.key,t.data.fid)}),er}function IR(){N1.size===0&&er&&(er.close(),er=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="firebase-installations-database",SR=1,yr="firebase-installations-store";let zu=null;function pf(){return zu||(zu=Ev(_R,SR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yr)}}})),zu}async function Ja(t,e){const n=Hl(t),i=(await pf()).transaction(yr,"readwrite"),s=i.objectStore(yr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&D1(t,e.fid),e}async function O1(t){const e=Hl(t),r=(await pf()).transaction(yr,"readwrite");await r.objectStore(yr).delete(e),await r.done}async function ql(t,e){const n=Hl(t),i=(await pf()).transaction(yr,"readwrite"),s=i.objectStore(yr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&D1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(t){let e;const n=await ql(t.appConfig,r=>{const i=TR(r),s=kR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function TR(t){const e=t||{fid:yR(),registrationStatus:0};return x1(e)}function kR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(gr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:AR(t)}:{installationEntry:e}}async function CR(t,e){try{const n=await pR(t,e);return Ja(t.appConfig,n)}catch(n){throw I1(n)&&n.customData.serverCode===409?await O1(t.appConfig):await Ja(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function AR(t){let e=await Km(t.appConfig);for(;e.registrationStatus===1;)await A1(100),e=await Km(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mf(t);return r||n}return e}function Km(t){return ql(t,e=>{if(!e)throw gr.create("installation-not-found");return x1(e)})}function x1(t){return NR(t)?{fid:t.fid,registrationStatus:0}:t}function NR(t){return t.registrationStatus===1&&t.registrationTime+v1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR({appConfig:t,heartbeatServiceProvider:e},n){const r=RR(t,n),i=hR(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:w1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await C1(()=>fetch(r,a));if(l.ok){const u=await l.json();return S1(u)}else throw await T1("Generate Auth Token",l)}function RR(t,{fid:e}){return`${_1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(t,e=!1){let n;const r=await ql(t.appConfig,s=>{if(!P1(s))throw gr.create("not-registered");const o=s.authToken;if(!e&&PR(o))return s;if(o.requestStatus===1)return n=OR(t,e),s;{if(!navigator.onLine)throw gr.create("app-offline");const a=MR(s);return n=xR(t,a),a}});return n?await n:r.authToken}async function OR(t,e){let n=await Wm(t.appConfig);for(;n.authToken.requestStatus===1;)await A1(100),n=await Wm(t.appConfig);const r=n.authToken;return r.requestStatus===0?gf(t,e):r}function Wm(t){return ql(t,e=>{if(!P1(e))throw gr.create("not-registered");const n=e.authToken;return $R(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function xR(t,e){try{const n=await DR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ja(t.appConfig,r),n}catch(n){if(I1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await O1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ja(t.appConfig,r)}throw n}}function P1(t){return t!==void 0&&t.registrationStatus===2}function PR(t){return t.requestStatus===2&&!LR(t)}function LR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+aR}function MR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function $R(t){return t.requestStatus===1&&t.requestTime+v1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t){const e=t,{installationEntry:n,registrationPromise:r}=await mf(e);return r?r.catch(console.error):gf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(t,e=!1){const n=t;return await FR(n),(await gf(n,e)).token}async function FR(t){const{registrationPromise:e}=await mf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){if(!t||!t.options)throw ju("App Configuration");if(!t.name)throw ju("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ju(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ju(t){return gr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="installations",zR="installations-internal",jR=t=>{const e=t.getProvider("app").getImmediate(),n=VR(e),r=Ir(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},BR=t=>{const e=t.getProvider("app").getImmediate(),n=Ir(e,L1).getImmediate();return{getId:()=>UR(n),getToken:i=>bR(n,i)}};function HR(){Ut(new Ct(L1,jR,"PUBLIC")),Ut(new Ct(zR,BR,"PRIVATE"))}HR();ft(y1,ff);ft(y1,ff,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="analytics",qR="firebase_id",KR="origin",WR=60*1e3,GR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",M1="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new ml("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function QR(t,e){const n=document.createElement("script");n.src=`${M1}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function YR(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function XR(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await $1(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){rt.error(a)}t("config",i,s)}async function JR(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await $1(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){rt.error(s)}}function ZR(t,e,n,r){async function i(s,o,a){try{s==="event"?await JR(t,e,n,o,a):s==="config"?await XR(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(l){rt.error(l)}}return i}function eO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ZR(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function tO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(M1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},mt=new Er("analytics","Analytics",nO);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=30,iO=1e3;class sO{constructor(e={},n=iO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const U1=new sO;function oO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function aO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:oO(r)},s=GR.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw mt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function lO(t,e=U1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw mt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw mt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new hO;return setTimeout(async()=>{a.abort()},n!==void 0?n:WR),b1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function b1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=U1){var s,o;const{appId:a,measurementId:l}=t;try{await uO(r,e)}catch(u){if(l)return rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:a,measurementId:l};throw u}try{const u=await aO(t);return i.deleteThrottleMetadata(a),u}catch(u){const c=u;if(!cO(c)){if(i.deleteThrottleMetadata(a),l)return rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw u}const h=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?Dp(n,i.intervalMillis,rO):Dp(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(a,d),rt.debug(`Calling attemptFetch again in ${h} millis`),b1(t,d,r,i)}}function uO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cO(t){if(!(t instanceof At)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class hO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function dO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fO(){var t;if(pv())try{await mv()}catch(e){return rt.warn(mt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return rt.warn(mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pO(t,e,n,r,i,s,o){var a;const l=lO(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&rt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>rt.error(g)),e.push(l);const u=fO().then(g=>{if(g)return r.getId()}),[c,h]=await Promise.all([l,u]);tO(s)||QR(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[KR]="firebase",d.update=!0,h!=null&&(d[qR]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.app=e}_delete(){return delete ss[this.app.options.appId],Promise.resolve()}}let ss={},Gm=[];const Qm={};let Bu="dataLayer",gO="gtag",Ym,F1,Xm=!1;function yO(){const t=[];if(fv()&&t.push("This is a browser extension environment."),f_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=mt.create("invalid-analytics-context",{errorInfo:e});rt.warn(n.message)}}function vO(t,e,n){yO();const r=t.options.appId;if(!r)throw mt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mt.create("no-api-key");if(ss[r]!=null)throw mt.create("already-exists",{id:r});if(!Xm){YR(Bu);const{wrappedGtag:s,gtagCore:o}=eO(ss,Gm,Qm,Bu,gO);F1=s,Ym=o,Xm=!0}return ss[r]=pO(t,Gm,Qm,e,Ym,Bu,n),new mO(t)}function wO(t=cd()){t=Te(t);const e=Ir(t,Za);return e.isInitialized()?e.getImmediate():EO(t)}function EO(t,e={}){const n=Ir(t,Za);if(n.isInitialized()){const i=n.getImmediate();if(Ss(e,n.getOptions()))return i;throw mt.create("already-initialized")}return n.initialize({options:e})}function IO(t,e,n,r){t=Te(t),dO(F1,ss[t.app.options.appId],e,n,r).catch(i=>rt.error(i))}const Jm="@firebase/analytics",Zm="0.8.3";function _O(){Ut(new Ct(Za,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return vO(r,i,n)},"PUBLIC")),Ut(new Ct("analytics-internal",t,"PRIVATE")),ft(Jm,Zm),ft(Jm,Zm,"esm2017");function t(e){try{const n=e.getProvider(Za).getImmediate();return{logEvent:(r,i,s)=>IO(n,r,i,s)}}catch(n){throw mt.create("interop-component-reg-failed",{reason:n})}}}_O();const SO={apiKey:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FB_API_KEY,authDomain:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FB_AUTH_DOMAIN,projectId:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FB_PROJECT_ID,storageBucket:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FB_STORAGE_ID,messagingSenderId:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FB_MESSAGING_SENDER_ID,appId:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FB_APP_ID,measurementId:{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}.VITE_FB_MEASUREMENT_ID},yf=Iv(SO);wO(yf);const V1=kA(yf),Kl=WD(yf);var Wl={exports:{}},Gl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TO=pe.exports,kO=Symbol.for("react.element"),CO=Symbol.for("react.fragment"),AO=Object.prototype.hasOwnProperty,NO=TO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DO={key:!0,ref:!0,__self:!0,__source:!0};function z1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AO.call(e,r)&&!DO.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kO,type:t,key:s,ref:o,props:i,_owner:NO.current}}Gl.Fragment=CO;Gl.jsx=z1;Gl.jsxs=z1;(function(t){t.exports=Gl})(Wl);const Bi=Wl.exports.Fragment,oe=Wl.exports.jsx,Kn=Wl.exports.jsxs,RO=({message:t})=>{const{text:e,uid:n}=t;return oe("p",{children:e})},eg=()=>{const t=pe.exports.useRef(null),[e]=m1(Kl);return Kn("form",{onSubmit:async r=>{var s,o;r.preventDefault();const i={text:(s=t==null?void 0:t.current)==null?void 0:s.value,id:e==null?void 0:e.uid,createdAt:QA()};await KA(_w(V1,"messages"),i),(o=t==null?void 0:t.current)!=null&&o.value&&(t.current.value="")},children:[oe("input",{placeholder:"Message...",type:"text",ref:t}),oe("button",{type:"submit",children:"Send"})]})},OO=t=>YD(Kl);var fh=(t=>(t[t.Google=0]="Google",t))(fh||{});const xO=()=>{const[t,e]=pe.exports.useState(fh.Google),[n,r,i,s]=OO(),o=a=>{e(a),n()};return oe(Bi,{children:oe("button",{onClick:()=>o(fh.Google),children:"Sign in with Google"})})},Hu=()=>oe("button",{onClick:()=>PN(Kl),children:"Sign out"}),PO=()=>{const[t]=m1(Kl),e=_w(V1,"messages"),n=$A(e,bA("createdAt"),VA(15)),[r,i,s]=rR(n),o=a=>{const l={text:a.data().text,createdAt:a.data().createdAt,uid:a.data().id};return oe(RO,{message:l},a.id)};return t?r&&r.docs.length>0?Kn(Bi,{children:[Kn("div",{children:["Hello, ",t.displayName,"!"]}),oe("div",{children:oe("br",{})}),r&&r.docs.length>0&&Kn(Bi,{children:[oe("div",{children:"Messages:"}),r.docs.map(o),oe(eg,{})]}),oe(Hu,{})]}):r?Kn(Bi,{children:[oe("div",{children:"No messages."}),oe(eg,{}),oe(Hu,{})]}):Kn(Bi,{children:[oe("div",{children:"An error occured, please try again later."}),s&&Kn("div",{children:["Error: ",s.message]}),oe(Hu,{})]}):oe(xO,{})};function LO(){return oe("div",{className:"App",children:oe(PO,{})})}qu.createRoot(document.getElementById("root")).render(oe(sE.StrictMode,{children:oe(LO,{})}));
