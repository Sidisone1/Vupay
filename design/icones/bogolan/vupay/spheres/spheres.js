(()=>{var qy=Object.create;var fm=Object.defineProperty;var $y=Object.getOwnPropertyDescriptor;var Zy=Object.getOwnPropertyNames;var Jy=Object.getPrototypeOf,Ky=Object.prototype.hasOwnProperty;var di=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var jy=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Zy(e))!Ky.call(t,r)&&r!==n&&fm(t,r,{get:()=>e[r],enumerable:!(i=$y(e,r))||i.enumerable});return t};var vr=(t,e,n)=>(n=t!=null?qy(Jy(t)):{},jy(e||!t||!t.__esModule?fm(n,"default",{value:t,enumerable:!0}):n,t));var wm=di($e=>{"use strict";var po=Symbol.for("react.element"),Qy=Symbol.for("react.portal"),ex=Symbol.for("react.fragment"),tx=Symbol.for("react.strict_mode"),nx=Symbol.for("react.profiler"),ix=Symbol.for("react.provider"),rx=Symbol.for("react.context"),sx=Symbol.for("react.forward_ref"),ox=Symbol.for("react.suspense"),ax=Symbol.for("react.memo"),lx=Symbol.for("react.lazy"),dm=Symbol.iterator;function cx(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,_m={};function ts(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||gm}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ym(){}ym.prototype=ts.prototype;function mu(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||gm}var gu=mu.prototype=new ym;gu.constructor=mu;vm(gu,ts.prototype);gu.isPureReactComponent=!0;var pm=Array.isArray,xm=Object.prototype.hasOwnProperty,vu={current:null},Sm={key:!0,ref:!0,__self:!0,__source:!0};function Mm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xm.call(e,i)&&!Sm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:po,type:t,key:s,ref:o,props:r,_owner:vu.current}}function ux(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _u(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mm=/\/+/g;function pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hx(""+t.key):e.toString(36)}function Na(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case po:case Qy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+pu(o,0):i,pm(r)?(n="",t!=null&&(n=t.replace(mm,"$&/")+"/"),Na(r,e,n,"",function(c){return c})):r!=null&&(_u(r)&&(r=ux(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(mm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",pm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+pu(s,a);o+=Na(s,e,n,l,r)}else if(l=cx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+pu(s,a++),o+=Na(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Da(t,e,n){if(t==null)return t;var i=[],r=0;return Na(t,i,"","",function(s){return e.call(n,s,r++)}),i}function fx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Ua={transition:null},dx={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:vu};function Em(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!_u(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=ts;$e.Fragment=ex;$e.Profiler=nx;$e.PureComponent=mu;$e.StrictMode=tx;$e.Suspense=ox;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx;$e.act=Em;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xm.call(e,l)&&!Sm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:po,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:rx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ix,_context:t},t.Consumer=t};$e.createElement=Mm;$e.createFactory=function(t){var e=Mm.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:sx,render:t}};$e.isValidElement=_u;$e.lazy=function(t){return{$$typeof:lx,_payload:{_status:-1,_result:t},_init:fx}};$e.memo=function(t,e){return{$$typeof:ax,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};$e.unstable_act=Em;$e.useCallback=function(t,e){return $t.current.useCallback(t,e)};$e.useContext=function(t){return $t.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};$e.useEffect=function(t,e){return $t.current.useEffect(t,e)};$e.useId=function(){return $t.current.useId()};$e.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return $t.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};$e.useRef=function(t){return $t.current.useRef(t)};$e.useState=function(t){return $t.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return $t.current.useTransition()};$e.version="18.3.1"});var mo=di((xC,Tm)=>{"use strict";Tm.exports=wm()});var Um=di(at=>{"use strict";function Mu(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Fa(r,e))t[i]=e,t[n]=r,n=i;else break e}}function On(t){return t.length===0?null:t[0]}function ka(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>Fa(a,n))l<r&&0>Fa(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>Fa(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Fa(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Am=performance,at.unstable_now=function(){return Am.now()}):(yu=Date,bm=yu.now(),at.unstable_now=function(){return yu.now()-bm});var Am,yu,bm,ti=[],Oi=[],px=1,Tn=null,Vt=3,Ba=!1,_r=!1,vo=!1,Pm=typeof setTimeout=="function"?setTimeout:null,Im=typeof clearTimeout=="function"?clearTimeout:null,Cm=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Eu(t){for(var e=On(Oi);e!==null;){if(e.callback===null)ka(Oi);else if(e.startTime<=t)ka(Oi),e.sortIndex=e.expirationTime,Mu(ti,e);else break;e=On(Oi)}}function wu(t){if(vo=!1,Eu(t),!_r)if(On(ti)!==null)_r=!0,Au(Tu);else{var e=On(Oi);e!==null&&bu(wu,e.startTime-t)}}function Tu(t,e){_r=!1,vo&&(vo=!1,Im(_o),_o=-1),Ba=!0;var n=Vt;try{for(Eu(e),Tn=On(ti);Tn!==null&&(!(Tn.expirationTime>e)||t&&!Nm());){var i=Tn.callback;if(typeof i=="function"){Tn.callback=null,Vt=Tn.priorityLevel;var r=i(Tn.expirationTime<=e);e=at.unstable_now(),typeof r=="function"?Tn.callback=r:Tn===On(ti)&&ka(ti),Eu(e)}else ka(ti);Tn=On(ti)}if(Tn!==null)var s=!0;else{var o=On(Oi);o!==null&&bu(wu,o.startTime-e),s=!1}return s}finally{Tn=null,Vt=n,Ba=!1}}var za=!1,Oa=null,_o=-1,Lm=5,Dm=-1;function Nm(){return!(at.unstable_now()-Dm<Lm)}function xu(){if(Oa!==null){var t=at.unstable_now();Dm=t;var e=!0;try{e=Oa(!0,t)}finally{e?go():(za=!1,Oa=null)}}else za=!1}var go;typeof Cm=="function"?go=function(){Cm(xu)}:typeof MessageChannel<"u"?(Su=new MessageChannel,Rm=Su.port2,Su.port1.onmessage=xu,go=function(){Rm.postMessage(null)}):go=function(){Pm(xu,0)};var Su,Rm;function Au(t){Oa=t,za||(za=!0,go())}function bu(t,e){_o=Pm(function(){t(at.unstable_now())},e)}at.unstable_IdlePriority=5;at.unstable_ImmediatePriority=1;at.unstable_LowPriority=4;at.unstable_NormalPriority=3;at.unstable_Profiling=null;at.unstable_UserBlockingPriority=2;at.unstable_cancelCallback=function(t){t.callback=null};at.unstable_continueExecution=function(){_r||Ba||(_r=!0,Au(Tu))};at.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lm=0<t?Math.floor(1e3/t):5};at.unstable_getCurrentPriorityLevel=function(){return Vt};at.unstable_getFirstCallbackNode=function(){return On(ti)};at.unstable_next=function(t){switch(Vt){case 1:case 2:case 3:var e=3;break;default:e=Vt}var n=Vt;Vt=e;try{return t()}finally{Vt=n}};at.unstable_pauseExecution=function(){};at.unstable_requestPaint=function(){};at.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Vt;Vt=t;try{return e()}finally{Vt=n}};at.unstable_scheduleCallback=function(t,e,n){var i=at.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:px++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Mu(Oi,t),On(ti)===null&&t===On(Oi)&&(vo?(Im(_o),_o=-1):vo=!0,bu(wu,n-i))):(t.sortIndex=r,Mu(ti,t),_r||Ba||(_r=!0,Au(Tu))),t};at.unstable_shouldYield=Nm;at.unstable_wrapCallback=function(t){var e=Vt;return function(){var n=Vt;Vt=e;try{return t.apply(this,arguments)}finally{Vt=n}}}});var Om=di((MC,Fm)=>{"use strict";Fm.exports=Um()});var Vv=di(yn=>{"use strict";var mx=mo(),vn=Om();function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wg=new Set,zo={};function Ir(t,e){Ms(t,e),Ms(t+"Capture",e)}function Ms(t,e){for(zo[t]=e,t=0;t<e.length;t++)Wg.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,gx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Bm={};function vx(t){return Ju.call(Bm,t)?!0:Ju.call(km,t)?!1:gx.test(t)?Bm[t]=!0:(km[t]=!0,!1)}function _x(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yx(t,e,n,i){if(e===null||typeof e>"u"||_x(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hh,Gh);kt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hh,Gh);kt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hh,Gh);kt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yx(e,n,r,i)&&(n=null),i||r===null?vx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Xg=Symbol.for("react.provider"),Yg=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var qg=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var zm=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Cu;function bo(t){if(Cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cu=e&&e[1]||""}return`
`+Cu+t}var Ru=!1;function Pu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function xx(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Pu(t.type,!1),t;case 11:return t=Pu(t.type.render,!1),t;case 1:return t=Pu(t.type,!0),t;default:return""}}function eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case Ku:return"Profiler";case Xh:return"StrictMode";case ju:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yg:return(t.displayName||"Context")+".Consumer";case Xg:return(t._context.displayName||"Context")+".Provider";case Yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qh:return e=t.displayName||null,e!==null?e:eh(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return eh(t(e))}catch{}}return null}function Sx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eh(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mx(t){var e=$g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=Mx(t))}function Zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$g(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function th(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function nh(t,e){Jg(t,e);var n=Qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&ih(t,e.type,Qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ih(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Co(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qi(n)}}function Kg(t,e){var n=Qi(e.value),i=Qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ex=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){Ex.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function e0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function t0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=e0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var wx=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oh(t,e){if(e){if(wx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function ah(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lh=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ch=null,vs=null,_s=null;function Xm(t){if(t=sa(t)){if(typeof ch!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Wl(e),ch(t.stateNode,t.type,e))}}function n0(t){vs?_s?_s.push(t):_s=[t]:vs=t}function i0(){if(vs){var t=vs,e=_s;if(_s=vs=null,Xm(t),e)for(t=0;t<e.length;t++)Xm(e[t])}}function r0(t,e){return t(e)}function s0(){}var Iu=!1;function o0(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return r0(t,e,n)}finally{Iu=!1,(vs!==null||_s!==null)&&(s0(),i0())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var i=Wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var uh=!1;if(yi)try{ns={},Object.defineProperty(ns,"passive",{get:function(){uh=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{uh=!1}var ns;function Tx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Lo=!1,vl=null,_l=!1,hh=null,Ax={onError:function(t){Lo=!0,vl=t}};function bx(t,e,n,i,r,s,o,a,l){Lo=!1,vl=null,Tx.apply(Ax,arguments)}function Cx(t,e,n,i,r,s,o,a,l){if(bx.apply(this,arguments),Lo){if(Lo){var c=vl;Lo=!1,vl=null}else throw Error(le(198));_l||(_l=!0,hh=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ym(t){if(Lr(t)!==t)throw Error(le(188))}function Rx(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ym(r),t;if(s===i)return Ym(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function l0(t){return t=Rx(t),t!==null?c0(t):null}function c0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c0(t);if(e!==null)return e;t=t.sibling}return null}var u0=vn.unstable_scheduleCallback,qm=vn.unstable_cancelCallback,Px=vn.unstable_shouldYield,Ix=vn.unstable_requestPaint,At=vn.unstable_now,Lx=vn.unstable_getCurrentPriorityLevel,Zh=vn.unstable_ImmediatePriority,h0=vn.unstable_UserBlockingPriority,yl=vn.unstable_NormalPriority,Dx=vn.unstable_LowPriority,f0=vn.unstable_IdlePriority,zl=null,si=null;function Nx(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:Ox,Ux=Math.log,Fx=Math.LN2;function Ox(t){return t>>>=0,t===0?32:31-(Ux(t)/Fx|0)|0}var Wa=64,Xa=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ro(a):(s&=o,s!==0&&(i=Ro(s)))}else o=n&~r,o!==0?i=Ro(o):s!==0&&(i=Ro(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function kx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=kx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d0(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function Lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function zx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function p0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m0,Kh,g0,v0,_0,dh=!1,Ya=[],Xi=null,Yi=null,qi=null,Go=new Map,Wo=new Map,Vi=[],Vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sa(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Hx(t,e,n,i,r){switch(e){case"focusin":return Xi=xo(Xi,t,e,n,i,r),!0;case"dragenter":return Yi=xo(Yi,t,e,n,i,r),!0;case"mouseover":return qi=xo(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,xo(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,xo(Wo.get(s)||null,t,e,n,i,r)),!0}return!1}function y0(t){var e=Sr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=a0(n),e!==null){t.blockedOn=e,_0(t.priority,function(){g0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lh=i,n.target.dispatchEvent(i),lh=null}else return e=sa(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Zm(t,e,n){ol(t)&&n.delete(e)}function Gx(){dh=!1,Xi!==null&&ol(Xi)&&(Xi=null),Yi!==null&&ol(Yi)&&(Yi=null),qi!==null&&ol(qi)&&(qi=null),Go.forEach(Zm),Wo.forEach(Zm)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,dh||(dh=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Gx)))}function Xo(t){function e(r){return So(r,t)}if(0<Ya.length){So(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&So(Xi,t),Yi!==null&&So(Yi,t),qi!==null&&So(qi,t),Go.forEach(e),Wo.forEach(e),n=0;n<Vi.length;n++)i=Vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Vi.length&&(n=Vi[0],n.blockedOn===null);)y0(n),n.blockedOn===null&&Vi.shift()}var ys=Ei.ReactCurrentBatchConfig,Sl=!0;function Wx(t,e,n,i){var r=it,s=ys.transition;ys.transition=null;try{it=1,jh(t,e,n,i)}finally{it=r,ys.transition=s}}function Xx(t,e,n,i){var r=it,s=ys.transition;ys.transition=null;try{it=4,jh(t,e,n,i)}finally{it=r,ys.transition=s}}function jh(t,e,n,i){if(Sl){var r=ph(t,e,n,i);if(r===null)Bu(t,e,i,Ml,n),$m(t,i);else if(Hx(r,t,e,n,i))i.stopPropagation();else if($m(t,i),e&4&&-1<Vx.indexOf(t)){for(;r!==null;){var s=sa(r);if(s!==null&&m0(s),s=ph(t,e,n,i),s===null&&Bu(t,e,i,Ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Bu(t,e,i,null,n)}}var Ml=null;function ph(t,e,n,i){if(Ml=null,t=$h(i),t=Sr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function x0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lx()){case Zh:return 1;case h0:return 4;case yl:case Dx:return 16;case f0:return 536870912;default:return 16}default:return 16}}var Gi=null,Qh=null,al=null;function S0(){if(al)return al;var t,e=Qh,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return al=r.slice(t,1<i?1-i:void 0)}function ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Jm(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Jm,this.isPropagationStopped=Jm,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=_n(Rs),ra=yt({},Rs,{view:0,detail:0}),Yx=_n(ra),Du,Nu,Mo,Vl=yt({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Du=t.screenX-Mo.screenX,Nu=t.screenY-Mo.screenY):Nu=Du=0,Mo=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),Km=_n(Vl),qx=yt({},Vl,{dataTransfer:0}),$x=_n(qx),Zx=yt({},ra,{relatedTarget:0}),Uu=_n(Zx),Jx=yt({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Kx=_n(Jx),jx=yt({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=_n(jx),eS=yt({},Rs,{data:0}),jm=_n(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iS[t])?!!e[t]:!1}function tf(){return rS}var sS=yt({},ra,{key:function(t){if(t.key){var e=tS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oS=_n(sS),aS=yt({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=_n(aS),lS=yt({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),cS=_n(lS),uS=yt({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=_n(uS),fS=yt({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dS=_n(fS),pS=[9,13,27,32],nf=yi&&"CompositionEvent"in window,Do=null;yi&&"documentMode"in document&&(Do=document.documentMode);var mS=yi&&"TextEvent"in window&&!Do,M0=yi&&(!nf||Do&&8<Do&&11>=Do),eg=" ",tg=!1;function E0(t,e){switch(t){case"keyup":return pS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function gS(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function vS(t,e){if(os)return t==="compositionend"||!nf&&E0(t,e)?(t=S0(),al=Qh=Gi=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M0&&e.locale!=="ko"?null:e.data;default:return null}}var _S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_S[t.type]:e==="textarea"}function T0(t,e,n,i){n0(i),e=El(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var No=null,Yo=null;function yS(t){F0(t,0)}function Hl(t){var e=cs(t);if(Zg(e))return t}function xS(t,e){if(t==="change")return e}var A0=!1;yi&&(yi?(Za="oninput"in document,Za||(Fu=document.createElement("div"),Fu.setAttribute("oninput","return;"),Za=typeof Fu.oninput=="function"),$a=Za):$a=!1,A0=$a&&(!document.documentMode||9<document.documentMode));var $a,Za,Fu;function ig(){No&&(No.detachEvent("onpropertychange",b0),Yo=No=null)}function b0(t){if(t.propertyName==="value"&&Hl(Yo)){var e=[];T0(e,Yo,t,$h(t)),o0(yS,e)}}function SS(t,e,n){t==="focusin"?(ig(),No=e,Yo=n,No.attachEvent("onpropertychange",b0)):t==="focusout"&&ig()}function MS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Yo)}function ES(t,e){if(t==="click")return Hl(e)}function wS(t,e){if(t==="input"||t==="change")return Hl(e)}function TS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:TS;function qo(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ju.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,e){var n=rg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rg(n)}}function C0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AS(t){var e=R0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C0(n.ownerDocument.documentElement,n)){if(i!==null&&rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sg(n,s);var o=sg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bS=yi&&"documentMode"in document&&11>=document.documentMode,as=null,mh=null,Uo=null,gh=!1;function og(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gh||as==null||as!==gl(i)||(i=as,"selectionStart"in i&&rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Uo&&qo(Uo,i)||(Uo=i,i=El(mh,"onSelect"),0<i.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function Ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},Ou={},P0={};yi&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Gl(t){if(Ou[t])return Ou[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P0)return Ou[t]=e[n];return t}var I0=Gl("animationend"),L0=Gl("animationiteration"),D0=Gl("animationstart"),N0=Gl("transitionend"),U0=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){U0.set(t,e),Ir(e,[t])}for(Ka=0;Ka<ag.length;Ka++)ja=ag[Ka],lg=ja.toLowerCase(),cg=ja[0].toUpperCase()+ja.slice(1),tr(lg,"on"+cg);var ja,lg,cg,Ka;tr(I0,"onAnimationEnd");tr(L0,"onAnimationIteration");tr(D0,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(N0,"onTransitionEnd");Ms("onMouseEnter",["mouseout","mouseover"]);Ms("onMouseLeave",["mouseout","mouseover"]);Ms("onPointerEnter",["pointerout","pointerover"]);Ms("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function ug(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cx(i,e,void 0,t),t.currentTarget=null}function F0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ug(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ug(r,a,c),s=l}}}if(_l)throw t=hh,_l=!1,hh=null,t}function ft(t,e){var n=e[Sh];n===void 0&&(n=e[Sh]=new Set);var i=t+"__bubble";n.has(i)||(O0(e,t,2,!1),n.add(i))}function ku(t,e,n){var i=0;e&&(i|=4),O0(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[Qa]){t[Qa]=!0,Wg.forEach(function(n){n!=="selectionchange"&&(CS.has(n)||ku(n,!1,t),ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,ku("selectionchange",!1,e))}}function O0(t,e,n,i){switch(x0(e)){case 1:var r=Wx;break;case 4:r=Xx;break;default:r=jh}n=r.bind(null,e,n,t),r=void 0,!uh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}o0(function(){var c=s,h=$h(n),f=[];e:{var d=U0.get(t);if(d!==void 0){var p=ef,g=t;switch(t){case"keypress":if(ll(n)===0)break e;case"keydown":case"keyup":p=oS;break;case"focusin":g="focus",p=Uu;break;case"focusout":g="blur",p=Uu;break;case"beforeblur":case"afterblur":p=Uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=cS;break;case I0:case L0:case D0:p=Kx;break;case N0:p=hS;break;case"scroll":p=Yx;break;case"wheel":p=dS;break;case"copy":case"cut":case"paste":p=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qm}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,u!==null&&(y=Ho(v,u),y!=null&&x.push(Zo(v,y,_)))),m)break;v=v.return}0<x.length&&(d=new p(d,g,null,n,h),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==lh&&(g=n.relatedTarget||n.fromElement)&&(Sr(g)||g[xi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Sr(g):null,g!==null&&(m=Lr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=Km,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Qm,y="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?d:cs(p),_=g==null?d:cs(g),d=new x(y,v+"leave",p,n,h),d.target=m,d.relatedTarget=_,y=null,Sr(h)===c&&(x=new x(u,v+"enter",g,n,h),x.target=_,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,u=g,v=0,_=x;_;_=is(_))v++;for(_=0,y=u;y;y=is(y))_++;for(;0<v-_;)x=is(x),v--;for(;0<_-v;)u=is(u),_--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=is(x),u=is(u)}x=null}else x=null;p!==null&&hg(f,d,p,x,!1),g!==null&&m!==null&&hg(f,m,g,x,!0)}}e:{if(d=c?cs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=xS;else if(ng(d))if(A0)P=wS;else{P=MS;var T=SS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=ES);if(P&&(P=P(t,c))){T0(f,P,n,h);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&ih(d,"number",d.value)}switch(T=c?cs(c):window,t){case"focusin":(ng(T)||T.contentEditable==="true")&&(as=T,mh=c,Uo=null);break;case"focusout":Uo=mh=as=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,og(f,n,h);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":og(f,n,h)}var b;if(nf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else os?E0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(M0&&n.locale!=="ko"&&(os||R!=="onCompositionStart"?R==="onCompositionEnd"&&os&&(b=S0()):(Gi=h,Qh="value"in Gi?Gi.value:Gi.textContent,os=!0)),T=El(c,R),0<T.length&&(R=new jm(R,t,null,n,h),f.push({event:R,listeners:T}),b?R.data=b:(b=w0(n),b!==null&&(R.data=b)))),(b=mS?gS(t,n):vS(t,n))&&(c=El(c,"onBeforeInput"),0<c.length&&(h=new jm("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=b))}F0(f,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ho(t,n),s!=null&&i.unshift(Zo(t,s,r)),s=Ho(t,e),s!=null&&i.push(Zo(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ho(n,s),l!=null&&o.unshift(Zo(n,l,a))):r||(l=Ho(n,s),l!=null&&o.push(Zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var RS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(RS,`
`).replace(PS,"")}function el(t,e,n){if(e=fg(e),fg(t)!==e&&n)throw Error(le(425))}function wl(){}var vh=null,_h=null;function yh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(DS)}:xh;function DS(t){setTimeout(function(){throw t})}function zu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xo(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),ri="__reactFiber$"+Ps,Jo="__reactProps$"+Ps,xi="__reactContainer$"+Ps,Sh="__reactEvents$"+Ps,NS="__reactListeners$"+Ps,US="__reactHandles$"+Ps;function Sr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pg(t);t!==null;){if(n=t[ri])return n;t=pg(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[ri]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Wl(t){return t[Jo]||null}var Mh=[],us=-1;function nr(t){return{current:t}}function dt(t){0>us||(t.current=Mh[us],Mh[us]=null,us--)}function lt(t,e){us++,Mh[us]=t.current,t.current=e}var er={},Xt=nr(er),on=nr(!1),Ar=er;function Es(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Tl(){dt(on),dt(Xt)}function mg(t,e,n){if(Xt.current!==er)throw Error(le(168));lt(Xt,e),lt(on,n)}function k0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,Sx(t)||"Unknown",r));return yt({},n,i)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Ar=Xt.current,lt(Xt,t),lt(on,on.current),!0}function gg(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=k0(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,dt(on),dt(Xt),lt(Xt,t)):dt(on),lt(on,n)}var mi=null,Xl=!1,Vu=!1;function B0(t){mi===null?mi=[t]:mi.push(t)}function FS(t){Xl=!0,B0(t)}function ir(){if(!Vu&&mi!==null){Vu=!0;var t=0,e=it;try{var n=mi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,Xl=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),u0(Zh,ir),r}finally{it=e,Vu=!1}}return null}var hs=[],fs=0,bl=null,Cl=0,An=[],bn=0,br=null,gi=1,vi="";function yr(t,e){hs[fs++]=Cl,hs[fs++]=bl,bl=t,Cl=e}function z0(t,e,n){An[bn++]=gi,An[bn++]=vi,An[bn++]=br,br=t;var i=gi;t=vi;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gi=1<<32-Hn(e)+r|n<<r|i,vi=s+t}else gi=1<<s|n<<r|i,vi=t}function sf(t){t.return!==null&&(yr(t,1),z0(t,1,0))}function of(t){for(;t===bl;)bl=hs[--fs],hs[fs]=null,Cl=hs[--fs],hs[fs]=null;for(;t===br;)br=An[--bn],An[bn]=null,vi=An[--bn],An[bn]=null,gi=An[--bn],An[bn]=null}var gn=null,mn=null,pt=!1,Vn=null;function V0(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:gi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wh(t){if(pt){var e=mn;if(e){var n=e;if(!vg(t,e)){if(Eh(t))throw Error(le(418));e=$i(n.nextSibling);var i=gn;e&&vg(t,e)?V0(i,n):(t.flags=t.flags&-4097|2,pt=!1,gn=t)}}else{if(Eh(t))throw Error(le(418));t.flags=t.flags&-4097|2,pt=!1,gn=t}}}function _g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function tl(t){if(t!==gn)return!1;if(!pt)return _g(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yh(t.type,t.memoizedProps)),e&&(e=mn)){if(Eh(t))throw H0(),Error(le(418));for(;e;)V0(t,e),e=$i(e.nextSibling)}if(_g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?$i(t.stateNode.nextSibling):null;return!0}function H0(){for(var t=mn;t;)t=$i(t.nextSibling)}function ws(){mn=gn=null,pt=!1}function af(t){Vn===null?Vn=[t]:Vn.push(t)}var OS=Ei.ReactCurrentBatchConfig;function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function nl(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yg(t){var e=t._init;return e(t._payload)}function G0(t){function e(u,v){if(t){var _=u.deletions;_===null?(u.deletions=[v],u.flags|=16):_.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=ji(u,v),u.index=0,u.sibling=null,u}function s(u,v,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<v?(u.flags|=2,v):_):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,_,y){return v===null||v.tag!==6?(v=$u(_,u.mode,y),v.return=u,v):(v=r(v,_),v.return=u,v)}function l(u,v,_,y){var P=_.type;return P===ss?h(u,v,_.props.children,y,_.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bi&&yg(P)===v.type)?(y=r(v,_.props),y.ref=Eo(u,v,_),y.return=u,y):(y=ml(_.type,_.key,_.props,null,u.mode,y),y.ref=Eo(u,v,_),y.return=u,y)}function c(u,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Zu(_,u.mode,y),v.return=u,v):(v=r(v,_.children||[]),v.return=u,v)}function h(u,v,_,y,P){return v===null||v.tag!==7?(v=Tr(_,u.mode,y,P),v.return=u,v):(v=r(v,_),v.return=u,v)}function f(u,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$u(""+v,u.mode,_),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return _=ml(v.type,v.key,v.props,null,u.mode,_),_.ref=Eo(u,null,v),_.return=u,_;case rs:return v=Zu(v,u.mode,_),v.return=u,v;case Bi:var y=v._init;return f(u,y(v._payload),_)}if(Co(v)||yo(v))return v=Tr(v,u.mode,_,null),v.return=u,v;nl(u,v)}return null}function d(u,v,_,y){var P=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(u,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return _.key===P?l(u,v,_,y):null;case rs:return _.key===P?c(u,v,_,y):null;case Bi:return P=_._init,d(u,v,P(_._payload),y)}if(Co(_)||yo(_))return P!==null?null:h(u,v,_,y,null);nl(u,_)}return null}function p(u,v,_,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(_)||null,a(v,u,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:return u=u.get(y.key===null?_:y.key)||null,l(v,u,y,P);case rs:return u=u.get(y.key===null?_:y.key)||null,c(v,u,y,P);case Bi:var T=y._init;return p(u,v,_,T(y._payload),P)}if(Co(y)||yo(y))return u=u.get(_)||null,h(v,u,y,P,null);nl(v,y)}return null}function g(u,v,_,y){for(var P=null,T=null,b=v,R=v=0,w=null;b!==null&&R<_.length;R++){b.index>R?(w=b,b=null):w=b.sibling;var S=d(u,b,_[R],y);if(S===null){b===null&&(b=w);break}t&&b&&S.alternate===null&&e(u,b),v=s(S,v,R),T===null?P=S:T.sibling=S,T=S,b=w}if(R===_.length)return n(u,b),pt&&yr(u,R),P;if(b===null){for(;R<_.length;R++)b=f(u,_[R],y),b!==null&&(v=s(b,v,R),T===null?P=b:T.sibling=b,T=b);return pt&&yr(u,R),P}for(b=i(u,b);R<_.length;R++)w=p(b,u,R,_[R],y),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?R:w.key),v=s(w,v,R),T===null?P=w:T.sibling=w,T=w);return t&&b.forEach(function(I){return e(u,I)}),pt&&yr(u,R),P}function x(u,v,_,y){var P=yo(_);if(typeof P!="function")throw Error(le(150));if(_=P.call(_),_==null)throw Error(le(151));for(var T=P=null,b=v,R=v=0,w=null,S=_.next();b!==null&&!S.done;R++,S=_.next()){b.index>R?(w=b,b=null):w=b.sibling;var I=d(u,b,S.value,y);if(I===null){b===null&&(b=w);break}t&&b&&I.alternate===null&&e(u,b),v=s(I,v,R),T===null?P=I:T.sibling=I,T=I,b=w}if(S.done)return n(u,b),pt&&yr(u,R),P;if(b===null){for(;!S.done;R++,S=_.next())S=f(u,S.value,y),S!==null&&(v=s(S,v,R),T===null?P=S:T.sibling=S,T=S);return pt&&yr(u,R),P}for(b=i(u,b);!S.done;R++,S=_.next())S=p(b,u,R,S.value,y),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?R:S.key),v=s(S,v,R),T===null?P=S:T.sibling=S,T=S);return t&&b.forEach(function(q){return e(u,q)}),pt&&yr(u,R),P}function m(u,v,_,y){if(typeof _=="object"&&_!==null&&_.type===ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:e:{for(var P=_.key,T=v;T!==null;){if(T.key===P){if(P=_.type,P===ss){if(T.tag===7){n(u,T.sibling),v=r(T,_.props.children),v.return=u,u=v;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bi&&yg(P)===T.type){n(u,T.sibling),v=r(T,_.props),v.ref=Eo(u,T,_),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}_.type===ss?(v=Tr(_.props.children,u.mode,y,_.key),v.return=u,u=v):(y=ml(_.type,_.key,_.props,null,u.mode,y),y.ref=Eo(u,v,_),y.return=u,u=y)}return o(u);case rs:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(u,v.sibling),v=r(v,_.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Zu(_,u.mode,y),v.return=u,u=v}return o(u);case Bi:return T=_._init,m(u,v,T(_._payload),y)}if(Co(_))return g(u,v,_,y);if(yo(_))return x(u,v,_,y);nl(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,_),v.return=u,u=v):(n(u,v),v=$u(_,u.mode,y),v.return=u,u=v),o(u)):n(u,v)}return m}var Ts=G0(!0),W0=G0(!1),Rl=nr(null),Pl=null,ds=null,lf=null;function cf(){lf=ds=Pl=null}function uf(t){var e=Rl.current;dt(Rl),t._currentValue=e}function Th(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){Pl=t,lf=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(lf!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Pl===null)throw Error(le(308));ds=t,Pl.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var Mr=null;function hf(t){Mr===null?Mr=[t]:Mr.push(t)}function X0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jh(t,n)}}function xg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(d=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=yt({},f,d);break e;case 2:zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=o,t.lanes=o,t.memoizedState=f}}function Sg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var oa={},oi=nr(oa),Ko=nr(oa),jo=nr(oa);function Er(t){if(t===oa)throw Error(le(174));return t}function df(t,e){switch(lt(jo,e),lt(Ko,t),lt(oi,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sh(e,t)}dt(oi),lt(oi,e)}function As(){dt(oi),dt(Ko),dt(jo)}function q0(t){Er(jo.current);var e=Er(oi.current),n=sh(e,t.type);e!==n&&(lt(Ko,t),lt(oi,n))}function pf(t){Ko.current===t&&(dt(oi),dt(Ko))}var vt=nr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hu=[];function mf(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var ul=Ei.ReactCurrentDispatcher,Gu=Ei.ReactCurrentBatchConfig,Cr=0,_t=null,Rt=null,Dt=null,Dl=!1,Fo=!1,Qo=0,kS=0;function Ht(){throw Error(le(321))}function gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function vf(t,e,n,i,r,s){if(Cr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?HS:GS,t=n(i,r),Fo){s=0;do{if(Fo=!1,Qo=0,25<=s)throw Error(le(301));s+=1,Dt=Rt=null,e.updateQueue=null,ul.current=WS,t=n(i,r)}while(Fo)}if(ul.current=Nl,e=Rt!==null&&Rt.next!==null,Cr=0,Dt=Rt=_t=null,Dl=!1,e)throw Error(le(300));return t}function _f(){var t=Qo!==0;return Qo=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?_t.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function In(){if(Rt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Dt===null?_t.memoizedState:Dt.next;if(e!==null)Dt=e,Rt=t;else{if(t===null)throw Error(le(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Dt===null?_t.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ea(t,e){return typeof e=="function"?e(t):e}function Wu(t){var e=In(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Cr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,_t.lanes|=h,Rr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xu(t){var e=In(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $0(){}function Z0(t,e){var n=_t,i=In(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,yf(j0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,ta(9,K0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(le(349));Cr&30||J0(n,e,r)}return r}function J0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K0(t,e,n,i){e.value=n,e.getSnapshot=i,Q0(e)&&ev(t)}function j0(t,e,n){return n(function(){Q0(e)&&ev(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function ev(t){var e=Si(t,1);e!==null&&Gn(e,t,1,-1)}function Mg(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=VS.bind(null,_t,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function tv(){return In().memoizedState}function hl(t,e,n,i){var r=ii();_t.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function Yl(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&gf(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function Eg(t,e){return hl(8390656,8,t,e)}function yf(t,e){return Yl(2048,8,t,e)}function nv(t,e){return Yl(4,2,t,e)}function iv(t,e){return Yl(4,4,t,e)}function rv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sv(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,rv.bind(null,e,t),n)}function xf(){}function ov(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function av(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function lv(t,e,n){return Cr&21?(Wn(n,e)||(n=d0(),_t.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function BS(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Gu.transition;Gu.transition={};try{t(!1),e()}finally{it=n,Gu.transition=i}}function cv(){return In().memoizedState}function zS(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},uv(t))hv(e,n);else if(n=X0(t,e,n,i),n!==null){var r=Jt();Gn(n,t,i,r),fv(n,e,i)}}function VS(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(uv(t))hv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=X0(t,e,r,i),n!==null&&(r=Jt(),Gn(n,t,i,r),fv(n,e,i))}}function uv(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function hv(t,e){Fo=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jh(t,n)}}var Nl={readContext:Pn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},HS={readContext:Pn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,rv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zS.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:Mg,useDebugValue:xf,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=Mg(!1),e=t[0];return t=BS.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=ii();if(pt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Nt===null)throw Error(le(349));Cr&30||J0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Eg(j0.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,K0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Nt.identifierPrefix;if(pt){var n=vi,i=gi;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GS={readContext:Pn,useCallback:ov,useContext:Pn,useEffect:yf,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:av,useReducer:Wu,useRef:tv,useState:function(){return Wu(ea)},useDebugValue:xf,useDeferredValue:function(t){var e=In();return lv(e,Rt.memoizedState,t)},useTransition:function(){var t=Wu(ea)[0],e=In().memoizedState;return[t,e]},useMutableSource:$0,useSyncExternalStore:Z0,useId:cv,unstable_isNewReconciler:!1},WS={readContext:Pn,useCallback:ov,useContext:Pn,useEffect:yf,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:av,useReducer:Xu,useRef:tv,useState:function(){return Xu(ea)},useDebugValue:xf,useDeferredValue:function(t){var e=In();return Rt===null?e.memoizedState=t:lv(e,Rt.memoizedState,t)},useTransition:function(){var t=Xu(ea)[0],e=In().memoizedState;return[t,e]},useMutableSource:$0,useSyncExternalStore:Z0,useId:cv,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ah(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=Ki(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Gn(e,t,r,i),cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=Ki(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&(Gn(e,t,r,i),cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=Ki(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Gn(e,t,i,n),cl(e,t,i))}};function wg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,i)||!qo(r,s):!0}function dv(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=an(e)?Ar:Xt.current,i=e.contextTypes,s=(i=i!=null)?Es(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ff(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=an(e)?Ar:Xt.current,r.context=Es(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ah(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ql.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=xx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function pv(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Fl||(Fl=!0,kh=i),Ch(t,e)},n}function mv(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ch(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ag(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new XS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sM.bind(null,t,e,n),e.then(t,t))}function bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var YS=Ei.ReactCurrentOwner,sn=!1;function Zt(t,e,n,i){e.child=t===null?W0(e,null,n,i):Ts(e,t.child,n,i)}function Rg(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=vf(t,e,n,i,s,r),n=_f(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(pt&&n&&sf(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Pg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gv(t,e,s,i,r)):(t=ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function gv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qo(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Rh(t,e,n,i,r)}function vv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(ms,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(ms,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(ms,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(ms,pn),pn|=i;return Zt(t,e,r,n),e.child}function _v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rh(t,e,n,i,r){var s=an(n)?Ar:Xt.current;return s=Es(e,s),xs(e,r),n=vf(t,e,n,i,s,r),i=_f(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(pt&&i&&sf(e),e.flags|=1,Zt(t,e,n,r),e.child)}function Ig(t,e,n,i,r){if(an(n)){var s=!0;Al(e)}else s=!1;if(xs(e,r),e.stateNode===null)fl(t,e),dv(e,n,i),bh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=an(n)?Ar:Xt.current,c=Es(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Tg(e,o,i,c),zi=!1;var d=e.memoizedState;o.state=d,Il(e,i,o,r),l=e.memoizedState,a!==i||d!==l||on.current||zi?(typeof h=="function"&&(Ah(e,n,h,i),l=e.memoizedState),(a=zi||wg(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Y0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=an(n)?Ar:Xt.current,l=Es(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Tg(e,o,i,l),zi=!1,d=e.memoizedState,o.state=d,Il(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||on.current||zi?(typeof p=="function"&&(Ah(e,n,p,i),g=e.memoizedState),(c=zi||wg(e,n,c,i,d,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ph(t,e,n,i,s,r)}function Ph(t,e,n,i,r,s){_v(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gg(e,n,!1),Mi(t,e,s);i=e.stateNode,YS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&gg(e,n,!0),e.child}function yv(t){var e=t.stateNode;e.pendingContext?mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mg(t,e.context,!1),df(t,e.containerInfo)}function Lg(t,e,n,i,r){return ws(),af(r),e.flags|=256,Zt(t,e,n,i),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Lh(t){return{baseLanes:t,cachePool:null,transitions:null}}function xv(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(vt,r&1),t===null)return wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lh(n),e.memoizedState=Ih,t):Sf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ji(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Lh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sf(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,i){return i!==null&&af(i),Ts(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Yu(Error(le(422))),il(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jl({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,o),e.child.memoizedState=Lh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return il(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=Yu(s,i,void 0),il(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Gn(i,t,r,-1))}return bf(),i=Yu(Error(le(421))),il(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=$i(r.nextSibling),gn=e,pt=!0,Vn=null,t!==null&&(An[bn++]=gi,An[bn++]=vi,An[bn++]=br,gi=t.id,vi=t.overflow,br=e),e=Sf(e,i.children),e.flags|=4096,e)}function Dg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Th(t.return,e,n)}function qu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,n,e);else if(t.tag===19)Dg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qu(e,!0,n,null,s);break;case"together":qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $S(t,e,n){switch(e.tag){case 3:yv(e),ws();break;case 5:q0(e);break;case 1:an(e.type)&&Al(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?xv(t,e,n):(lt(vt,vt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);lt(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,vv(t,e,n)}return Mi(t,e,n)}var Mv,Dh,Ev,wv;Mv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dh=function(){};Ev=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(oi.current);var s=null;switch(n){case"input":r=th(t,r),i=th(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=rh(t,r),i=rh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}oh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wv=function(t,e,n,i){n!==i&&(e.flags|=4)};function wo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ZS(t,e,n){var i=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return an(e.type)&&Tl(),Gt(e),null;case 3:return i=e.stateNode,As(),dt(on),dt(Xt),mf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Vh(Vn),Vn=null))),Dh(t,e),Gt(e),null;case 5:pf(e);var r=Er(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ev(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Gt(e),null}if(t=Er(oi.current),tl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)ft(Po[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Vm(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Gm(i,s),ft("invalid",i)}oh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&el(i.textContent,a,t),r=["children",""+a]):zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":Ha(i),Hm(i,s,!0);break;case"textarea":Ha(i),Wm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ri]=e,t[Jo]=i,Mv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ah(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Po.length;r++)ft(Po[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Vm(t,i),r=th(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Gm(t,i),r=rh(t,i),ft("invalid",t);break;default:r=i}oh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?t0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Wh(t,s,l,o))}switch(n){case"input":Ha(t),Hm(t,i,!1);break;case"textarea":Ha(t),Wm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)wv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Er(jo.current),Er(oi.current),tl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:el(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Gt(e),null;case 13:if(dt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&mn!==null&&e.mode&1&&!(e.flags&128))H0(),ws(),e.flags|=98560,s=!1;else if(s=tl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[ri]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Vn!==null&&(Vh(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Pt===0&&(Pt=3):bf())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return As(),Dh(t,e),t===null&&$o(e.stateNode.containerInfo),Gt(e),null;case 10:return uf(e.type._context),Gt(e),null;case 17:return an(e.type)&&Tl(),Gt(e),null;case 19:if(dt(vt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)wo(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Cs&&(e.flags|=128,i=!0,wo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ll(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Gt(e),null}else 2*At()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=vt.current,lt(vt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Af(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function JS(t,e){switch(of(e),e.tag){case 1:return an(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),dt(on),dt(Xt),mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pf(e),null;case 13:if(dt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(vt),null;case 4:return As(),null;case 10:return uf(e.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var rl=!1,Wt=!1,KS=typeof WeakSet=="function"?WeakSet:Set,be=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function Nh(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Ng=!1;function jS(t,e){if(vh=Sl,t=R0(),rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_h={focusedElem:t,selectionRange:n},Sl=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Bn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return g=Ng,Ng=!1,g}function Oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nh(e,n,s)}r=r.next}while(r!==i)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tv(t){var e=t.alternate;e!==null&&(t.alternate=null,Tv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Jo],delete e[Sh],delete e[NS],delete e[US])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function Ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}function Oh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var Ft=null,zn=!1;function ki(t,e,n){for(n=n.child;n!==null;)bv(t,e,n),n=n.sibling}function bv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:Wt||ps(n,e);case 6:var i=Ft,r=zn;Ft=null,ki(t,e,n),Ft=i,zn=r,Ft!==null&&(zn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(zn?(t=Ft,n=n.stateNode,t.nodeType===8?zu(t.parentNode,n):t.nodeType===1&&zu(t,n),Xo(t)):zu(Ft,n.stateNode));break;case 4:i=Ft,r=zn,Ft=n.stateNode.containerInfo,zn=!0,ki(t,e,n),Ft=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nh(n,e,o),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!Wt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,ki(t,e,n),Wt=i):ki(t,e,n);break;default:ki(t,e,n)}}function Fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KS),e.forEach(function(i){var r=aM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,zn=!1;break e;case 3:Ft=a.stateNode.containerInfo,zn=!0;break e;case 4:Ft=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Ft===null)throw Error(le(160));bv(s,o,r),Ft=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cv(e,t),e=e.sibling}function Cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),ni(t),i&4){try{Oo(3,t,t.return),$l(3,t)}catch(x){Et(t,t.return,x)}try{Oo(5,t,t.return)}catch(x){Et(t,t.return,x)}}break;case 1:kn(e,t),ni(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(kn(e,t),ni(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(x){Et(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jg(r,s),ah(a,o);var c=ah(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?t0(r,f):h==="dangerouslySetInnerHTML"?Qg(r,f):h==="children"?Vo(r,f):Wh(r,h,f,c)}switch(a){case"input":nh(r,s);break;case"textarea":Kg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?gs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Jo]=s}catch(x){Et(t,t.return,x)}}break;case 6:if(kn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Et(t,t.return,x)}}break;case 3:if(kn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(x){Et(t,t.return,x)}break;case 4:kn(e,t),ni(t);break;case 13:kn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wf=At())),i&4&&Fg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||h,kn(e,t),Wt=c):kn(e,t),ni(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(be=t,h=t.child;h!==null;){for(f=be=h;be!==null;){switch(d=be,p=d.child,d.tag){case 0:case 11:case 14:case 15:Oo(4,d,d.return);break;case 1:ps(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Et(i,n,x)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){kg(f);continue}}p!==null?(p.return=d,be=p):kg(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e0("display",o))}catch(x){Et(t,t.return,x)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Et(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kn(e,t),ni(t),i&4&&Fg(t);break;case 21:break;default:kn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=Ug(t);Oh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ug(t);Fh(t,a,o);break;default:throw Error(le(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QS(t,e,n){be=t,Rv(t,e,n)}function Rv(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||rl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=rl;var c=Wt;if(rl=o,(Wt=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?Bg(r):l!==null?(l.return=o,be=l):Bg(r);for(;s!==null;)be=s,Rv(s,e,n),s=s.sibling;be=r,rl=a,Wt=c}Og(t,e,n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Og(t,e,n)}}function Og(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Wt||e.flags&512&&Uh(e)}catch(d){Et(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function kg(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Bg(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Uh(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Uh(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var eM=Math.ceil,Ul=Ei.ReactCurrentDispatcher,Mf=Ei.ReactCurrentOwner,Rn=Ei.ReactCurrentBatchConfig,Je=0,Nt=null,bt=null,Ot=0,pn=0,ms=nr(0),Pt=0,na=null,Rr=0,Zl=0,Ef=0,ko=null,rn=null,wf=0,Cs=1/0,pi=null,Fl=!1,kh=null,Ji=null,sl=!1,Wi=null,Ol=0,Bo=0,Bh=null,dl=-1,pl=0;function Jt(){return Je&6?At():dl!==-1?dl:dl=At()}function Ki(t){return t.mode&1?Je&2&&Ot!==0?Ot&-Ot:OS.transition!==null?(pl===0&&(pl=d0()),pl):(t=it,t!==0||(t=window.event,t=t===void 0?16:x0(t.type)),t):1}function Gn(t,e,n,i){if(50<Bo)throw Bo=0,Bh=null,Error(le(185));ia(t,n,i),(!(Je&2)||t!==Nt)&&(t===Nt&&(!(Je&2)&&(Zl|=n),Pt===4&&Hi(t,Ot)),ln(t,i),n===1&&Je===0&&!(e.mode&1)&&(Cs=At()+500,Xl&&ir()))}function ln(t,e){var n=t.callbackNode;Bx(t,e);var i=xl(t,t===Nt?Ot:0);if(i===0)n!==null&&qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qm(n),e===1)t.tag===0?FS(zg.bind(null,t)):B0(zg.bind(null,t)),LS(function(){!(Je&6)&&ir()}),n=null;else{switch(p0(i)){case 1:n=Zh;break;case 4:n=h0;break;case 16:n=yl;break;case 536870912:n=f0;break;default:n=yl}n=Ov(n,Pv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pv(t,e){if(dl=-1,pl=0,Je&6)throw Error(le(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=xl(t,t===Nt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kl(t,i);else{e=i;var r=Je;Je|=2;var s=Lv();(Nt!==t||Ot!==e)&&(pi=null,Cs=At()+500,wr(t,e));do try{iM();break}catch(a){Iv(t,a)}while(!0);cf(),Ul.current=s,Je=r,bt!==null?e=0:(Nt=null,Ot=0,e=Pt)}if(e!==0){if(e===2&&(r=fh(t),r!==0&&(i=r,e=zh(t,r))),e===1)throw n=na,wr(t,0),Hi(t,i),ln(t,At()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!tM(r)&&(e=kl(t,i),e===2&&(s=fh(t),s!==0&&(i=s,e=zh(t,s))),e===1))throw n=na,wr(t,0),Hi(t,i),ln(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:xr(t,rn,pi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=wf+500-At(),10<e)){if(xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xh(xr.bind(null,t,rn,pi),e);break}xr(t,rn,pi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Hn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eM(i/1960))-i,10<i){t.timeoutHandle=xh(xr.bind(null,t,rn,pi),i);break}xr(t,rn,pi);break;case 5:xr(t,rn,pi);break;default:throw Error(le(329))}}}return ln(t,At()),t.callbackNode===n?Pv.bind(null,t):null}function zh(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=kl(t,e),t!==2&&(e=rn,rn=n,e!==null&&Vh(e)),t}function Vh(t){rn===null?rn=t:rn.push.apply(rn,t)}function tM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~Ef,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function zg(t){if(Je&6)throw Error(le(327));Ss();var e=xl(t,0);if(!(e&1))return ln(t,At()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var i=fh(t);i!==0&&(e=i,n=zh(t,i))}if(n===1)throw n=na,wr(t,0),Hi(t,e),ln(t,At()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,rn,pi),ln(t,At()),null}function Tf(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Cs=At()+500,Xl&&ir())}}function Pr(t){Wi!==null&&Wi.tag===0&&!(Je&6)&&Ss();var e=Je;Je|=1;var n=Rn.transition,i=it;try{if(Rn.transition=null,it=1,t)return t()}finally{it=i,Rn.transition=n,Je=e,!(Je&6)&&ir()}}function Af(){pn=ms.current,dt(ms)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IS(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:As(),dt(on),dt(Xt),mf();break;case 5:pf(i);break;case 4:As();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:uf(i.type._context);break;case 22:case 23:Af()}n=n.return}if(Nt=t,bt=t=ji(t.current,null),Ot=pn=e,Pt=0,na=null,Ef=Zl=Rr=0,rn=ko=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function Iv(t,e){do{var n=bt;try{if(cf(),ul.current=Nl,Dl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Cr=0,Dt=Rt=_t=null,Fo=!1,Qo=0,Mf.current=null,n===null||n.return===null){Pt=1,na=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=bg(o);if(p!==null){p.flags&=-257,Cg(p,o,a,s,e),p.mode&1&&Ag(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Ag(s,c,e),bf();break e}l=Error(le(426))}}else if(pt&&a.mode&1){var m=bg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Cg(m,o,a,s,e),af(bs(l,a));break e}}s=l=bs(l,a),Pt!==4&&(Pt=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=pv(s,l,e);xg(s,u);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ji===null||!Ji.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=mv(s,a,e);xg(s,y);break e}}s=s.return}while(s!==null)}Nv(n)}catch(P){e=P,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function Lv(){var t=Ul.current;return Ul.current=Nl,t===null?Nl:t}function bf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Nt===null||!(Rr&268435455)&&!(Zl&268435455)||Hi(Nt,Ot)}function kl(t,e){var n=Je;Je|=2;var i=Lv();(Nt!==t||Ot!==e)&&(pi=null,wr(t,e));do try{nM();break}catch(r){Iv(t,r)}while(!0);if(cf(),Je=n,Ul.current=i,bt!==null)throw Error(le(261));return Nt=null,Ot=0,Pt}function nM(){for(;bt!==null;)Dv(bt)}function iM(){for(;bt!==null&&!Px();)Dv(bt)}function Dv(t){var e=Fv(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?Nv(t):bt=e,Mf.current=null}function Nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=JS(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,bt=null;return}}else if(n=ZS(n,e,pn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Pt===0&&(Pt=5)}function xr(t,e,n){var i=it,r=Rn.transition;try{Rn.transition=null,it=1,rM(t,e,n,i)}finally{Rn.transition=r,it=i}return null}function rM(t,e,n,i){do Ss();while(Wi!==null);if(Je&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zx(t,s),t===Nt&&(bt=Nt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Ov(yl,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=it;it=1;var a=Je;Je|=4,Mf.current=null,jS(t,n),Cv(n,t),AS(_h),Sl=!!vh,_h=vh=null,t.current=n,QS(n,t,r),Ix(),Je=a,it=o,Rn.transition=s}else t.current=n;if(sl&&(sl=!1,Wi=t,Ol=r),s=t.pendingLanes,s===0&&(Ji=null),Nx(n.stateNode,i),ln(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Fl)throw Fl=!1,t=kh,kh=null,t;return Ol&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===Bh?Bo++:(Bo=0,Bh=t):Bo=0,ir(),null}function Ss(){if(Wi!==null){var t=p0(Ol),e=Rn.transition,n=it;try{if(Rn.transition=null,it=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,Ol=0,Je&6)throw Error(le(331));var r=Je;for(Je|=4,be=t.current;be!==null;){var s=be,o=s.child;if(be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:Oo(8,h,s)}var f=h.child;if(f!==null)f.return=h,be=f;else for(;be!==null;){h=be;var d=h.sibling,p=h.return;if(Tv(h),h===c){be=null;break}if(d!==null){d.return=p,be=d;break}be=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var v=t.current;for(be=v;be!==null;){o=be;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,be=_;else e:for(o=v;be!==null;){if(a=be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$l(9,a)}}catch(P){Et(a,a.return,P)}if(a===o){be=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,be=y;break e}be=a.return}}if(Je=r,ir(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(zl,t)}catch{}i=!0}return i}finally{it=n,Rn.transition=e}}return!1}function Vg(t,e,n){e=bs(n,e),e=pv(t,e,1),t=Zi(t,e,1),e=Jt(),t!==null&&(ia(t,1,e),ln(t,e))}function Et(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=bs(n,t),t=mv(e,t,1),e=Zi(e,t,1),t=Jt(),e!==null&&(ia(e,1,t),ln(e,t));break}}e=e.return}}function sM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ot&n)===n&&(Pt===4||Pt===3&&(Ot&130023424)===Ot&&500>At()-wf?wr(t,0):Ef|=n),ln(t,e)}function Uv(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=Jt();t=Si(t,e),t!==null&&(ia(t,e,n),ln(t,n))}function oM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uv(t,n)}function aM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),Uv(t,n)}var Fv;Fv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,$S(t,e,n);sn=!!(t.flags&131072)}else sn=!1,pt&&e.flags&1048576&&z0(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fl(t,e),t=e.pendingProps;var r=Es(e,Xt.current);xs(e,n),r=vf(null,e,i,t,r,n);var s=_f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ff(e),r.updater=ql,e.stateNode=r,r._reactInternals=e,bh(e,i,t,n),e=Ph(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&sf(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cM(i),t=Bn(i,t),r){case 0:e=Rh(null,e,i,t,n);break e;case 1:e=Ig(null,e,i,t,n);break e;case 11:e=Rg(null,e,i,t,n);break e;case 14:e=Pg(null,e,i,Bn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Rh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Ig(t,e,i,r,n);case 3:e:{if(yv(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Y0(t,e),Il(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(le(423)),e),e=Lg(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(le(424)),e),e=Lg(t,e,i,n,r);break e}else for(mn=$i(e.stateNode.containerInfo.firstChild),gn=e,pt=!0,Vn=null,n=W0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=Mi(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return q0(e),t===null&&wh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,yh(i,r)?o=null:s!==null&&yh(i,s)&&(e.flags|=32),_v(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&wh(e),null;case 13:return xv(t,e,n);case 4:return df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Rg(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(Rl,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!on.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Th(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Th(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=Pn(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Pg(t,e,i,r,n);case 15:return gv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),fl(t,e),e.tag=1,an(i)?(t=!0,Al(e)):t=!1,xs(e,n),dv(e,i,r),bh(e,i,r,n),Ph(null,e,i,!0,t,n);case 19:return Sv(t,e,n);case 22:return vv(t,e,n)}throw Error(le(156,e.tag))};function Ov(t,e){return u0(t,e)}function lM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new lM(t,e,n,i)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cM(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yh)return 11;if(t===qh)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ml(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return Tr(n.children,r,s,e);case Xh:o=8,r|=8;break;case Ku:return t=Cn(12,n,e,r|2),t.elementType=Ku,t.lanes=s,t;case ju:return t=Cn(13,n,e,r),t.elementType=ju,t.lanes=s,t;case Qu:return t=Cn(19,n,e,r),t.elementType=Qu,t.lanes=s,t;case qg:return Jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xg:o=10;break e;case Yg:o=9;break e;case Yh:o=11;break e;case qh:o=14;break e;case Bi:o=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Cn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function Jl(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=qg,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function Zu(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,i,r,s,o,a,l){return t=new uM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function hM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function kv(t){if(!t)return er;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(an(n))return k0(t,n,e)}return e}function Bv(t,e,n,i,r,s,o,a,l){return t=Rf(n,i,!0,t,r,s,o,a,l),t.context=kv(null),n=t.current,i=Jt(),r=Ki(n),s=_i(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,ia(t,r,i),ln(t,i),t}function Kl(t,e,n,i){var r=e.current,s=Jt(),o=Ki(r);return n=kv(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,o),t!==null&&(Gn(t,r,o,s),cl(t,r,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){Hg(t,e),(t=t.alternate)&&Hg(t,e)}function fM(){return null}var zv=typeof reportError=="function"?reportError:function(t){console.error(t)};function If(t){this._internalRoot=t}jl.prototype.render=If.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Kl(t,e,null,null)};jl.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){Kl(null,t,null,null)}),e[xi]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=v0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vi.length&&e!==0&&e<Vi[n].priority;n++);Vi.splice(n,0,t),n===0&&y0(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function dM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Bl(o);s.call(c)}}var o=Bv(e,i,t,0,null,!1,!1,"",Gg);return t._reactRootContainer=o,t[xi]=o.current,$o(t.nodeType===8?t.parentNode:t),Pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Bl(l);a.call(c)}}var l=Rf(t,0,!1,null,null,!1,!1,"",Gg);return t._reactRootContainer=l,t[xi]=l.current,$o(t.nodeType===8?t.parentNode:t),Pr(function(){Kl(e,l,n,i)}),l}function ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bl(o);a.call(l)}}Kl(e,o,t,r)}else o=dM(n,e,t,r,i);return Bl(o)}m0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(Jh(e,n|1),ln(e,At()),!(Je&6)&&(Cs=At()+500,ir()))}break;case 13:Pr(function(){var i=Si(t,1);if(i!==null){var r=Jt();Gn(i,t,1,r)}}),Pf(t,1)}};Kh=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Jt();Gn(e,t,134217728,n)}Pf(t,134217728)}};g0=function(t){if(t.tag===13){var e=Ki(t),n=Si(t,e);if(n!==null){var i=Jt();Gn(n,t,e,i)}Pf(t,e)}};v0=function(){return it};_0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};ch=function(t,e,n){switch(e){case"input":if(nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wl(i);if(!r)throw Error(le(90));Zg(i),nh(i,r)}}}break;case"textarea":Kg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};r0=Tf;s0=Pr;var pM={usingClientEntryPoint:!1,Events:[sa,cs,Wl,n0,i0,Tf]},To={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mM={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l0(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||fM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ao.isDisabled&&Ao.supportsFiber))try{zl=Ao.inject(mM),si=Ao}catch{}var Ao;yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pM;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(le(200));return hM(t,e,null,n)};yn.createRoot=function(t,e){if(!Lf(t))throw Error(le(299));var n=!1,i="",r=zv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,$o(t.nodeType===8?t.parentNode:t),new If(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=l0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Pr(t)};yn.hydrate=function(t,e,n){if(!Ql(e))throw Error(le(200));return ec(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=zv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bv(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,$o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new jl(e)};yn.render=function(t,e,n){if(!Ql(e))throw Error(le(200));return ec(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(le(40));return t._reactRootContainer?(Pr(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};yn.unstable_batchedUpdates=Tf;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return ec(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426"});var Wv=di((wC,Gv)=>{"use strict";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),Gv.exports=Vv()});var Yv=di(Df=>{"use strict";var Xv=Wv();Df.createRoot=Xv.createRoot,Df.hydrateRoot=Xv.hydrateRoot;var TC});var Py=di(uu=>{"use strict";var Ob=mo(),kb=Symbol.for("react.element"),Bb=Symbol.for("react.fragment"),zb=Object.prototype.hasOwnProperty,Vb=Ob.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hb={key:!0,ref:!0,__self:!0,__source:!0};function Ry(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zb.call(e,i)&&!Hb.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kb,type:t,key:s,ref:o,props:r,_owner:Vb.current}}uu.Fragment=Bb;uu.jsx=Ry;uu.jsxs=Ry});var Ra=di((PC,Iy)=>{"use strict";Iy.exports=Py()});var Hy=vr(Yv());var sm=vr(mo()),Tt=vr(mo());var zp="170";var gM=0,qv=1,vM=2;var ny=1,Vp=2,Ri=3,mr=0,hn=1,Zn=2,fr=0,qs=1,$v=2,Zv=3,Jv=4,_M=5,zr=100,yM=101,xM=102,SM=103,MM=104,EM=200,wM=201,TM=202,AM=203,pd=204,md=205,bM=206,CM=207,RM=208,PM=209,IM=210,LM=211,DM=212,NM=213,UM=214,gd=0,vd=1,_d=2,Ks=3,yd=4,xd=5,Sd=6,Md=7,iy=0,FM=1,OM=2,dr=0,kM=1,BM=2,zM=3,Hp=4,VM=5,HM=6,GM=7;var ry=300,js=301,Qs=302,Ed=303,wd=304,ou=306,Td=1e3,li=1001,Ad=1002,Kn=1003,WM=1004;var tc=1005;var ci=1006,Nf=1007;var Gr=1008;var Di=1009,sy=1010,oy=1011,va=1012,Gp=1013,Wr=1014,Pi=1015,Ca=1016,Wp=1017,Xp=1018,eo=1020,ay=35902,ly=1021,cy=1022,Jn=1023,uy=1024,hy=1025,$s=1026,to=1027,fy=1028,Yp=1029,dy=1030,qp=1031;var $p=1033,Ac=33776,bc=33777,Cc=33778,Rc=33779,bd=35840,Cd=35841,Rd=35842,Pd=35843,Id=36196,Ld=37492,Dd=37496,Nd=37808,Ud=37809,Fd=37810,Od=37811,kd=37812,Bd=37813,zd=37814,Vd=37815,Hd=37816,Gd=37817,Wd=37818,Xd=37819,Yd=37820,qd=37821,Pc=36492,$d=36494,Zd=36495,py=36283,Jd=36284,Kd=36285,jd=36286;var Ic=2300,Qd=2301,Uf=2302,Kv=2400,jv=2401,Qv=2402;var XM=3200,YM=3201;var my=0,qM=1,ur="",Qt="srgb",oo="srgb-linear",au="linear",st="srgb";var Is=7680;var e_=519,$M=512,ZM=513,JM=514,gy=515,KM=516,jM=517,QM=518,e1=519,t_=35044;var n_="300 es",Ii=2e3,Lc=2001,gr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ff=Math.PI/180,ep=180/Math.PI;function ao(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function t1(t,e){return(t%e+e)%e}function Of(t,e,n){return(1-n)*t+n*e}function aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var pe=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],g=i[8],x=r[0],m=r[3],u=r[6],v=r[1],_=r[4],y=r[7],P=r[2],T=r[5],b=r[8];return s[0]=o*x+a*v+l*P,s[3]=o*m+a*_+l*T,s[6]=o*u+a*y+l*b,s[1]=c*x+h*v+f*P,s[4]=c*m+h*_+f*T,s[7]=c*u+h*y+f*b,s[2]=d*x+p*v+g*P,s[5]=d*m+p*_+g*T,s[8]=d*u+p*y+g*b,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(r*c-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(kf.makeScale(e,n)),this}rotate(e){return this.premultiply(kf.makeRotation(-e)),this}translate(e,n){return this.premultiply(kf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kf=new Xe;function vy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _a(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function n1(){let t=_a("canvas");return t.style.display="block",t}var i_={};function fa(t){t in i_||(i_[t]=!0,console.warn(t))}function i1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function r1(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function s1(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ke={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===st&&(t.r=Li(t.r),t.g=Li(t.g),t.b=Li(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===st&&(t.r=Zs(t.r),t.g=Zs(t.g),t.b=Zs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===ur?au:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var r_=[.64,.33,.3,.6,.15,.06],s_=[.2126,.7152,.0722],o_=[.3127,.329],a_=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[oo]:{primaries:r_,whitePoint:o_,transfer:au,toXYZ:a_,fromXYZ:l_,luminanceCoefficients:s_,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:r_,whitePoint:o_,transfer:st,toXYZ:a_,fromXYZ:l_,luminanceCoefficients:s_,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});var Ls,tp=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=_a("canvas")),Ls.width=e.width,Ls.height=e.height;let i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=_a("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},o1=0,Dc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bf(r[o].image)):s.push(Bf(r[o]))}else s=Bf(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function Bf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var a1=0,Mn=class t extends gr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=li,r=li,s=ci,o=Gr,a=Jn,l=Di,c=t.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=ao(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ry)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=ry;Mn.DEFAULT_ANISOTROPY=1;var wt=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,y=(p+1)/2,P=(u+1)/2,T=(h+d)/4,b=(f+x)/4,R=(g+m)/4;return _>y&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=b/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=b/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},np=class extends gr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new Dc(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends np{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Nc=class extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ip=class extends Mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==d||c!==p||h!==g){let m=1-a,u=l*d+c*p+h*g+f*x,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let P=Math.sqrt(_),T=Math.atan2(P,u*v);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let y=a*v;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,f=f*m+x*y,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+h*f+l*p-c*d,e[n+1]=l*g+h*d+c*f-a*p,e[n+2]=c*g+h*p+a*d-l*f,e[n+3]=h*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(c_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(c_.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zf=new D,c_=new jn,Xr=class{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),ic.subVectors(this.max,la),Ds.subVectors(e.a,la),Ns.subVectors(e.b,la),Us.subVectors(e.c,la),rr.subVectors(Ns,Ds),sr.subVectors(Us,Ns),Dr.subVectors(Ds,Us);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Dr.z,Dr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Dr.z,0,-Dr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Dr.y,Dr.x,0];return!Vf(n,Ds,Ns,Us,ic)||(n=[1,0,0,0,1,0,0,0,1],!Vf(n,Ds,Ns,Us,ic))?!1:(rc.crossVectors(rr,sr),n=[rc.x,rc.y,rc.z],Vf(n,Ds,Ns,Us,ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new D,new D,new D,new D,new D,new D,new D,new D],Xn=new D,nc=new Xr,Ds=new D,Ns=new D,Us=new D,rr=new D,sr=new D,Dr=new D,la=new D,ic=new D,rc=new D,Nr=new D;function Vf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);let a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),h=i.dot(Nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var l1=new Xr,ca=new D,Hf=new D,ya=class{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):l1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let n=ca.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Hf)),this.expandByPoint(ca.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new D,Gf=new D,sc=new D,or=new D,Wf=new D,oc=new D,Xf=new D,Uc=class{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gf.copy(e).add(n).multiplyScalar(.5),sc.copy(n).sub(e).normalize(),or.copy(this.origin).sub(Gf);let s=e.distanceTo(n)*.5,o=-this.direction.dot(sc),a=or.dot(this.direction),l=-or.dot(sc),c=or.lengthSq(),h=Math.abs(1-o*o),f,d,p,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Gf).addScaledVector(sc,d),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){Wf.subVectors(n,e),oc.subVectors(i,e),Xf.crossVectors(Wf,oc);let o=this.direction.dot(Xf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);let l=a*this.direction.dot(oc.crossVectors(or,oc));if(l<0)return null;let c=a*this.direction.dot(Wf.cross(or));if(c<0||l+c>o)return null;let h=-a*or.dot(Xf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class t{constructor(e,n,i,r,s,o,a,l,c,h,f,d,p,g,x,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,h,f,d,p,g,x,m){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Fs.setFromMatrixColumn(e,0).length(),s=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*h,p=o*f,g=a*h,x=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*f,g=c*h,x=c*f;n[0]=d+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=p*a-g,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*f,g=c*h,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*h,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*f,g=a*h,x=a*f;n[0]=l*h,n[4]=g*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*h,n[4]=x-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*f+g,n[10]=d-x*f}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+x,n[5]=o*h,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*h,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c1,e,u1)}lookAt(e,n,i){let r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ar.crossVectors(i,xn),ar.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ar.crossVectors(i,xn)),ar.normalize(),ac.crossVectors(xn,ar),r[0]=ar.x,r[4]=ac.x,r[8]=xn.x,r[1]=ar.y,r[5]=ac.y,r[9]=xn.y,r[2]=ar.z,r[6]=ac.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],v=i[3],_=i[7],y=i[11],P=i[15],T=r[0],b=r[4],R=r[8],w=r[12],S=r[1],I=r[5],q=r[9],k=r[13],W=r[2],ee=r[6],X=r[10],se=r[14],H=r[3],ce=r[7],de=r[11],ye=r[15];return s[0]=o*T+a*S+l*W+c*H,s[4]=o*b+a*I+l*ee+c*ce,s[8]=o*R+a*q+l*X+c*de,s[12]=o*w+a*k+l*se+c*ye,s[1]=h*T+f*S+d*W+p*H,s[5]=h*b+f*I+d*ee+p*ce,s[9]=h*R+f*q+d*X+p*de,s[13]=h*w+f*k+d*se+p*ye,s[2]=g*T+x*S+m*W+u*H,s[6]=g*b+x*I+m*ee+u*ce,s[10]=g*R+x*q+m*X+u*de,s[14]=g*w+x*k+m*se+u*ye,s[3]=v*T+_*S+y*W+P*H,s[7]=v*b+_*I+y*ee+P*ce,s[11]=v*R+_*q+y*X+P*de,s[15]=v*w+_*k+y*se+P*ye,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],v=f*m*c-x*d*c+x*l*p-a*m*p-f*l*u+a*d*u,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*u-o*d*u,y=h*x*c-g*f*c+g*a*p-o*x*p-h*a*u+o*f*u,P=g*f*l-h*x*l-g*a*d+o*x*d+h*a*m-o*f*m,T=n*v+i*_+r*y+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return e[0]=v*b,e[1]=(x*d*s-f*m*s-x*r*p+i*m*p+f*r*u-i*d*u)*b,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*b,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*b,e[4]=_*b,e[5]=(h*m*s-g*d*s+g*r*p-n*m*p-h*r*u+n*d*u)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*b,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*b,e[8]=y*b,e[9]=(g*f*s-h*x*s-g*i*p+n*x*p+h*i*u-n*f*u)*b,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*u+n*a*u)*b,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*p-n*a*p)*b,e[12]=P*b,e[13]=(h*x*r-g*f*r+g*i*d-n*x*d-h*i*m+n*f*m)*b,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*b,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*b,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,p=s*h,g=s*f,x=o*h,m=o*f,u=a*f,v=l*c,_=l*h,y=l*f,P=i.x,T=i.y,b=i.z;return r[0]=(1-(x+u))*P,r[1]=(p+y)*P,r[2]=(g-_)*P,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+u))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+_)*b,r[9]=(m-v)*b,r[10]=(1-(d+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Fs.set(r[0],r[1],r[2]).length(),o=Fs.set(r[4],r[5],r[6]).length(),a=Fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);let c=1/s,h=1/o,f=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,n.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ii){let l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),p,g;if(a===Ii)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ii){let l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*h,g,x;if(a===Ii)g=(o+s)*f,x=-2*f;else if(a===Lc)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Fs=new D,Yn=new St,c1=new D(0,0,0),u1=new D(1,1,1),ar=new D,ac=new D,xn=new D,u_=new St,h_=new jn,Nn=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return u_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return h_.setFromEuler(this),this.setFromQuaternion(h_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},h1=0,f_=new D,Os=new jn,Ai=new St,lc=new D,ua=new D,f1=new D,d1=new jn,d_=new D(1,0,0),p_=new D(0,1,0),m_=new D(0,0,1),g_={type:"added"},p1={type:"removed"},ks={type:"childadded",child:null},Yf={type:"childremoved",child:null},tn=class t extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new D,n=new Nn,i=new jn,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Xe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(d_,e)}rotateY(e){return this.rotateOnAxis(p_,e)}rotateZ(e){return this.rotateOnAxis(m_,e)}translateOnAxis(e,n){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(d_,e)}translateY(e){return this.translateOnAxis(p_,e)}translateZ(e){return this.translateOnAxis(m_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?lc.copy(e):lc.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ua,lc,this.up):Ai.lookAt(lc,ua,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(Ai),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g_),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(p1),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g_),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,f1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,d1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};tn.DEFAULT_UP=new D(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new D,bi=new D,qf=new D,Ci=new D,Bs=new D,zs=new D,v_=new D,$f=new D,Zf=new D,Jf=new D,Kf=new wt,jf=new wt,Qf=new wt,Vr=class t{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),bi.subVectors(i,n),qf.subVectors(e,n);let o=qn.dot(qn),a=qn.dot(bi),l=qn.dot(qf),c=bi.dot(bi),h=bi.dot(qf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Kf.setScalar(0),jf.setScalar(0),Qf.setScalar(0),Kf.fromBufferAttribute(e,n),jf.fromBufferAttribute(e,i),Qf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Kf,s.x),o.addScaledVector(jf,s.y),o.addScaledVector(Qf,s.z),o}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),bi.subVectors(e,n),qn.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),qn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;Bs.subVectors(r,i),zs.subVectors(s,i),$f.subVectors(e,i);let l=Bs.dot($f),c=zs.dot($f);if(l<=0&&c<=0)return n.copy(i);Zf.subVectors(e,r);let h=Bs.dot(Zf),f=zs.dot(Zf);if(h>=0&&f<=h)return n.copy(r);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Bs,o);Jf.subVectors(e,s);let p=Bs.dot(Jf),g=zs.dot(Jf);if(g>=0&&p<=g)return n.copy(s);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(zs,a);let m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return v_.subVectors(s,r),a=(f-h)/(f-h+(p-g)),n.copy(r).addScaledVector(v_,a);let u=1/(m+x+d);return o=x*u,a=d*u,n.copy(i).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},cc={h:0,s:0,l:0};function ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ve=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=t1(e,1),n=Bt(n,0,1),i=Bt(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ed(o,s,e+1/3),this.g=ed(o,s,e),this.b=ed(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qt){let i=_y[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ke.fromWorkingColorSpace(qt.copy(this),e),Math.round(Bt(qt.r*255,0,255))*65536+Math.round(Bt(qt.g*255,0,255))*256+Math.round(Bt(qt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(qt.copy(this),n);let i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Qt){Ke.fromWorkingColorSpace(qt.copy(this),e);let n=qt.r,i=qt.g,r=qt.b;return e!==Qt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(cc);let i=Of(lr.h,cc.h,n),r=Of(lr.s,cc.s,n),s=Of(lr.l,cc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Ve;Ve.NAMES=_y;var m1=0,Yr=class extends gr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=ao(),this.name="",this.blending=qs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fc=class extends Yr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=iy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new D,uc=new pe,Dn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=t_,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)uc.fromBufferAttribute(this,n),uc.applyMatrix3(e),this.setXY(n,uc.x,uc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t_&&(e.usage=this.usage),e}};var Oc=class extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var kc=class extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var zt=class extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}},g1=0,Ln=new St,td=new tn,Vs=new D,Sn=new Xr,ha=new Xr,Ut=new D,ui=class t extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vy(e)?kc:Oc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(i,3))}else{for(let i=0,r=n.count;i<r;i++){let s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Sn.min,ha.min),Sn.expandByPoint(Ut),Ut.addVectors(Sn.max,ha.max),Sn.expandByPoint(Ut)):(Sn.expandByPoint(ha.min),Sn.expandByPoint(ha.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ut.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),Ut.add(Vs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new D,l[R]=new D;let c=new D,h=new D,f=new D,d=new pe,p=new pe,g=new pe,x=new D,m=new D;function u(R,w,S){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),h.sub(c),f.sub(c),p.sub(d),g.sub(d);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(x),a[w].add(x),a[S].add(x),l[R].add(m),l[w].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,w=v.length;R<w;++R){let S=v[R],I=S.start,q=S.count;for(let k=I,W=I+q;k<W;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let _=new D,y=new D,P=new D,T=new D;function b(R){P.fromBufferAttribute(r,R),T.copy(P);let w=a[R];_.copy(w),_.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(T,w);let I=y.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,I)}for(let R=0,w=v.length;R<w;++R){let S=v[R],I=S.start,q=S.count;for(let k=I,W=I+q;k<W;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let u=0;u<h;u++)d[g++]=c[p++]}return new Dn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(n))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},__=new St,Ur=new Uc,hc=new ya,y_=new D,fc=new D,dc=new D,pc=new D,nd=new D,mc=new D,x_=new D,gc=new D,un=class extends tn{constructor(e=new ui,n=new Fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){mc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(nd.fromBufferAttribute(f,e),o?mc.addScaledVector(nd,h):mc.addScaledVector(nd.sub(n),h))}n.add(mc)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(hc.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(hc,y_)===null||Ur.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(__.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(__),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,P=_;y<P;y+=3){let T=a.getX(y),b=a.getX(y+1),R=a.getX(y+2);r=vc(this,u,e,i,c,h,f,T,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=vc(this,o,e,i,c,h,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,P=_;y<P;y+=3){let T=y,b=y+1,R=y+2;r=vc(this,u,e,i,c,h,f,T,b,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let v=m,_=m+1,y=m+2;r=vc(this,o,e,i,c,h,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function v1(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;gc.copy(a),gc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(gc);return c<n.near||c>n.far?null:{distance:c,point:gc.clone(),object:t}}function vc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fc),t.getVertexPosition(l,dc),t.getVertexPosition(c,pc);let h=v1(t,e,n,i,fc,dc,pc,x_);if(h){let f=new D;Vr.getBarycoord(x_,fc,dc,pc,f),r&&(h.uv=Vr.getInterpolatedAttribute(r,a,l,c,f,new pe)),s&&(h.uv1=Vr.getInterpolatedAttribute(s,a,l,c,f,new pe)),o&&(h.normal=Vr.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};Vr.getNormal(fc,dc,pc,d.normal),h.face=d,h.barycoord=f}return h}var Sa=class t extends ui{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(f,2));function g(x,m,u,v,_,y,P,T,b,R,w){let S=y/b,I=P/R,q=y/2,k=P/2,W=T/2,ee=b+1,X=R+1,se=0,H=0,ce=new D;for(let de=0;de<X;de++){let ye=de*I-k;for(let Ue=0;Ue<ee;Ue++){let Ze=Ue*S-q;ce[x]=Ze*v,ce[m]=ye*_,ce[u]=W,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[u]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),f.push(Ue/b),f.push(1-de/R),se+=1}}for(let de=0;de<R;de++)for(let ye=0;ye<b;ye++){let Ue=d+ye+ee*de,Ze=d+ye+ee*(de+1),$=d+(ye+1)+ee*(de+1),O=d+(ye+1)+ee*de;l.push(Ue,Ze,O),l.push(Ze,$,O),H+=6}a.addGroup(p,H,w),p+=H,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function no(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){let e={};for(let n=0;n<t.length;n++){let i=no(t[n]);for(let r in i)e[r]=i[r]}return e}function _1(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yy(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var y1={clone:no,merge:jt},x1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hi=class extends Yr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x1,this.fragmentShader=S1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=_1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Bc=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cr=new D,S_=new pe,M_=new pe,en=class extends Bc{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ep*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ep*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,S_,M_),n.subVectors(M_,S_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Ff*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Hs=-90,Gs=1,rp=class extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new en(Hs,Gs,e,n);r.layers=this.layers,this.add(r);let s=new en(Hs,Gs,e,n);s.layers=this.layers,this.add(s);let o=new en(Hs,Gs,e,n);o.layers=this.layers,this.add(o);let a=new en(Hs,Gs,e,n);a.layers=this.layers,this.add(a);let l=new en(Hs,Gs,e,n);l.layers=this.layers,this.add(l);let c=new en(Hs,Gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},zc=class extends Mn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sp=class extends Ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zc(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ci}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Sa(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:fr});s.uniforms.tEquirect.value=n;let o=new un(r,s),a=n.minFilter;return n.minFilter===Gr&&(n.minFilter=ci),new rp(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},id=new D,M1=new D,E1=new Xe,$n=class{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=id.subVectors(i,n).cross(M1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(id),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||E1.getNormalMatrix(e),r=this.coplanarPoint(id).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fr=new ya,_c=new D,Ma=class{constructor(e=new $n,n=new $n,i=new $n,r=new $n,s=new $n,o=new $n){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],x=r[10],m=r[11],u=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-u).normalize(),i[1].setComponents(l+s,d+c,m+p,y+u).normalize(),i[2].setComponents(l+o,d+h,m+g,y+v).normalize(),i[3].setComponents(l-o,d-h,m-g,y-v).normalize(),i[4].setComponents(l-a,d-f,m-x,y-_).normalize(),n===Ii)i[5].setComponents(l+a,d+f,m+x,y+_).normalize();else if(n===Lc)i[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(_c.x=r.normal.x>0?e.max.x:e.min.x,_c.y=r.normal.y>0?e.max.y:e.min.y,_c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function w1(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let x=f[p];t.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Vc=class t extends ui{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let v=u*d-o;for(let _=0;_<c;_++){let y=_*f-s;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){let _=v+c*u,y=v+c*(u+1),P=v+1+c*(u+1),T=v+1+c*u;p.push(_,y,T),p.push(y,P,T)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},T1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,N1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,J1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_w=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:T1,alphahash_pars_fragment:A1,alphamap_fragment:b1,alphamap_pars_fragment:C1,alphatest_fragment:R1,alphatest_pars_fragment:P1,aomap_fragment:I1,aomap_pars_fragment:L1,batching_pars_vertex:D1,batching_vertex:N1,begin_vertex:U1,beginnormal_vertex:F1,bsdfs:O1,iridescence_fragment:k1,bumpmap_pars_fragment:B1,clipping_planes_fragment:z1,clipping_planes_pars_fragment:V1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:G1,color_fragment:W1,color_pars_fragment:X1,color_pars_vertex:Y1,color_vertex:q1,common:$1,cube_uv_reflection_fragment:Z1,defaultnormal_vertex:J1,displacementmap_pars_vertex:K1,displacementmap_vertex:j1,emissivemap_fragment:Q1,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:hE,gradientmap_pars_fragment:fE,lightmap_pars_fragment:dE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:_E,lights_toon_pars_fragment:yE,lights_phong_fragment:xE,lights_phong_pars_fragment:SE,lights_physical_fragment:ME,lights_physical_pars_fragment:EE,lights_fragment_begin:wE,lights_fragment_maps:TE,lights_fragment_end:AE,logdepthbuf_fragment:bE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:RE,logdepthbuf_vertex:PE,map_fragment:IE,map_pars_fragment:LE,map_particle_fragment:DE,map_particle_pars_fragment:NE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:FE,morphinstance_vertex:OE,morphcolor_vertex:kE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:VE,normal_fragment_begin:HE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:YE,normalmap_pars_fragment:qE,clearcoat_normal_fragment_begin:$E,clearcoat_normal_fragment_maps:ZE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:KE,opaque_fragment:jE,packing:QE,premultiplied_alpha_fragment:ew,project_vertex:tw,dithering_fragment:nw,dithering_pars_fragment:iw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:sw,shadowmap_pars_fragment:ow,shadowmap_pars_vertex:aw,shadowmap_vertex:lw,shadowmask_pars_fragment:cw,skinbase_vertex:uw,skinning_pars_vertex:hw,skinning_vertex:fw,skinnormal_vertex:dw,specularmap_fragment:pw,specularmap_pars_fragment:mw,tonemapping_fragment:gw,tonemapping_pars_fragment:vw,transmission_fragment:_w,transmission_pars_fragment:yw,uv_pars_fragment:xw,uv_pars_vertex:Sw,uv_vertex:Mw,worldpos_vertex:Ew,background_vert:ww,background_frag:Tw,backgroundCube_vert:Aw,backgroundCube_frag:bw,cube_vert:Cw,cube_frag:Rw,depth_vert:Pw,depth_frag:Iw,distanceRGBA_vert:Lw,distanceRGBA_frag:Dw,equirect_vert:Nw,equirect_frag:Uw,linedashed_vert:Fw,linedashed_frag:Ow,meshbasic_vert:kw,meshbasic_frag:Bw,meshlambert_vert:zw,meshlambert_frag:Vw,meshmatcap_vert:Hw,meshmatcap_frag:Gw,meshnormal_vert:Ww,meshnormal_frag:Xw,meshphong_vert:Yw,meshphong_frag:qw,meshphysical_vert:$w,meshphysical_frag:Zw,meshtoon_vert:Jw,meshtoon_frag:Kw,points_vert:jw,points_frag:Qw,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},ge={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ai={basic:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:jt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:jt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:jt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:jt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:jt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:jt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:jt([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:jt([ge.lights,ge.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ai.physical={uniforms:jt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var yc={r:0,b:0,g:0},Or=new Nn,rT=new St;function sT(t,e,n,i,r,s,o){let a=new Ve(0),l=s===!0?0:1,c,h,f=null,d=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function x(v){let _=!1,y=g(v);y===null?u(a,l):y&&y.isColor&&(u(y,1),_=!0);let P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===ou)?(h===void 0&&(h=new un(new Sa(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:no(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Or.copy(_.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Or)),h.material.toneMapped=Ke.getTransfer(y.colorSpace)!==st,(f!==y||d!==y.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,p=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new un(new Vc(2,2),new hi({name:"BackgroundMaterial",uniforms:no(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,_){v.getRGB(yc,yy(t)),i.buffers.color.setClear(yc.r,yc.g,yc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:x,addToRenderList:m}}function oT(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(S,I,q,k,W){let ee=!1,X=f(k,q,I);s!==X&&(s=X,c(s.object)),ee=p(S,k,q,W),ee&&g(S,k,q,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(S,I,q,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function f(S,I,q){let k=q.wireframe===!0,W=i[S.id];W===void 0&&(W={},i[S.id]=W);let ee=W[I.id];ee===void 0&&(ee={},W[I.id]=ee);let X=ee[k];return X===void 0&&(X=d(l()),ee[k]=X),X}function d(S){let I=[],q=[],k=[];for(let W=0;W<n;W++)I[W]=0,q[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:q,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,I,q,k){let W=s.attributes,ee=I.attributes,X=0,se=q.getAttributes();for(let H in se)if(se[H].location>=0){let de=W[H],ye=ee[H];if(ye===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),de===void 0||de.attribute!==ye||ye&&de.data!==ye.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function g(S,I,q,k){let W={},ee=I.attributes,X=0,se=q.getAttributes();for(let H in se)if(se[H].location>=0){let de=ee[H];de===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));let ye={};ye.attribute=de,de&&de.data&&(ye.data=de.data),W[H]=ye,X++}s.attributes=W,s.attributesNum=X,s.index=k}function x(){let S=s.newAttributes;for(let I=0,q=S.length;I<q;I++)S[I]=0}function m(S){u(S,0)}function u(S,I){let q=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;q[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),W[S]!==I&&(t.vertexAttribDivisor(S,I),W[S]=I)}function v(){let S=s.newAttributes,I=s.enabledAttributes;for(let q=0,k=I.length;q<k;q++)I[q]!==S[q]&&(t.disableVertexAttribArray(q),I[q]=0)}function _(S,I,q,k,W,ee,X){X===!0?t.vertexAttribIPointer(S,I,q,W,ee):t.vertexAttribPointer(S,I,q,k,W,ee)}function y(S,I,q,k){x();let W=k.attributes,ee=q.getAttributes(),X=I.defaultAttributeValues;for(let se in ee){let H=ee[se];if(H.location>=0){let ce=W[se];if(ce===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){let de=ce.normalized,ye=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;let Ze=Ue.buffer,$=Ue.type,O=Ue.bytesPerElement,ie=$===t.INT||$===t.UNSIGNED_INT||ce.gpuType===Gp;if(ce.isInterleavedBufferAttribute){let Y=ce.data,Q=Y.stride,he=ce.offset;if(Y.isInstancedInterleavedBuffer){for(let oe=0;oe<H.locationSize;oe++)u(H.location+oe,Y.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let oe=0;oe<H.locationSize;oe++)_(H.location+oe,ye/H.locationSize,$,de,Q*O,(he+ye/H.locationSize*oe)*O,ie)}else{if(ce.isInstancedBufferAttribute){for(let Y=0;Y<H.locationSize;Y++)u(H.location+Y,ce.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Y=0;Y<H.locationSize;Y++)m(H.location+Y);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Y=0;Y<H.locationSize;Y++)_(H.location+Y,ye/H.locationSize,$,de,ye*O,ye/H.locationSize*Y*O,ie)}}else if(X!==void 0){let de=X[se];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(H.location,de);break;case 3:t.vertexAttrib3fv(H.location,de);break;case 4:t.vertexAttrib4fv(H.location,de);break;default:t.vertexAttrib1fv(H.location,de)}}}}v()}function P(){R();for(let S in i){let I=i[S];for(let q in I){let k=I[q];for(let W in k)h(k[W].object),delete k[W];delete I[q]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;let I=i[S.id];for(let q in I){let k=I[q];for(let W in k)h(k[W].object),delete k[W];delete I[q]}delete i[S.id]}function b(S){for(let I in i){let q=i[I];if(q[S.id]===void 0)continue;let k=q[S.id];for(let W in k)h(k[W].object),delete k[W];delete q[S.id]}}function R(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function aT(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];n.update(p,i,1)}function l(c,h,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Jn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let R=b===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Di&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Pi&&!R)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:P,maxSamples:T}}function cT(t){let e=this,n=null,i=0,r=!1,s=!1,o=new $n,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let v=s?0:i,_=v*4,y=u.clippingState||null;l.value=y,y=h(g,d,_,p);for(let P=0;P!==_;++P)y[P]=n[P];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function uT(t){let e=new WeakMap;function n(o,a){return a===Ed?o.mapping=js:a===wd&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ed||a===wd)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new sp(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Hc=class extends Bc{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Xs=4,E_=[.125,.215,.35,.446,.526,.582],Hr=20,rd=new Hc,w_=new Ve,sd=null,od=0,ad=0,ld=!1,Br=(1+Math.sqrt(5))/2,Ws=1/Br,T_=[new D(-Br,Ws,0),new D(Br,Ws,0),new D(-Ws,0,Br),new D(Ws,0,Br),new D(0,Br,-Ws),new D(0,Br,Ws),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Gc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ad),this._renderer.xr.enabled=ld,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Ca,format:Jn,colorSpace:oo,depthBuffer:!1},r=A_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(s)),this._blurMaterial=fT(s,e,n)}return r}_compileMaterial(e){let n=new un(this._lodPlanes[0],e);this._renderer.compile(n,rd)}_sceneToCubeUV(e,n,i,r){let a=new en(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(w_),h.toneMapping=dr,h.autoClear=!1;let p=new Fc({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new un(new Sa,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(w_),x=!0);for(let u=0;u<6;u++){let v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let _=this._cubeSize;xc(r,v*_,u>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===js||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=C_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b_());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;xc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,rd)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=T_[(r-s-1)%T_.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new un(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hr-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):Hr;m>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);let u=[],v=0;for(let b=0;b<Hr;++b){let R=b/x,w=Math.exp(-R*R/2);u.push(w),b===0?v+=w:b<m&&(v+=2*w)}for(let b=0;b<u.length;b++)u[b]=u[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let y=this._sizeLods[r],P=3*y*(r>_-Xs?r-_+Xs:0),T=4*(this._cubeSize-y);xc(n,P,T,3*y,2*y),l.setRenderTarget(n),l.render(f,rd)}};function hT(t){let e=[],n=[],i=[],r=t,s=t-Xs+1+E_.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xs?l=E_[o-t+Xs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,u=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let T=0;T<p;T++){let b=T%3*2/3-1,R=T>2?0:-1,w=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];v.set(w,x*g*T),_.set(d,m*g*T);let S=[T,T,T,T,T,T];y.set(S,u*g*T)}let P=new ui;P.setAttribute("position",new Dn(v,x)),P.setAttribute("uv",new Dn(_,m)),P.setAttribute("faceIndex",new Dn(y,u)),e.push(P),r>Xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function A_(t,e,n){let i=new Ni(t,e,n);return i.texture.mapping=ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fT(t,e,n){let i=new Float32Array(Hr),r=new D(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function b_(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function C_(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Zp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ed||l===wd,h=l===js||l===Qs;if(c||h){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Gc(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new Gc(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pT(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)e.update(d[g],t.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let x=p[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,g=f.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){let P=v[_+0],T=v[_+1],b=v[_+2];d.push(P,T,T,b,b,P)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let P=_+0,T=_+1,b=_+2;d.push(P,T,T,b,b,P)}}else return;let m=new(vy(d)?kc:Oc)(d,1);m.version=x;let u=s.get(f);u&&e.remove(u),s.set(f,m)}function h(f){let d=s.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function gT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function f(d,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v]*x[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function vT(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _T(t,e,n){let i=new WeakMap,r=new wt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let w=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*P*4*f),b=new Nc(T,y,P,f);b.type=Pi,b.needsUpdate=!0;let R=_*4;for(let S=0;S<f;S++){let I=m[S],q=u[S],k=v[S],W=y*P*4*S;for(let ee=0;ee<I.count;ee++){let X=ee*R;p===!0&&(r.fromBufferAttribute(I,ee),T[W+X+0]=r.x,T[W+X+1]=r.y,T[W+X+2]=r.z,T[W+X+3]=0),g===!0&&(r.fromBufferAttribute(q,ee),T[W+X+4]=r.x,T[W+X+5]=r.y,T[W+X+6]=r.z,T[W+X+7]=0),x===!0&&(r.fromBufferAttribute(k,ee),T[W+X+8]=r.x,T[W+X+9]=r.y,T[W+X+10]=r.z,T[W+X+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:b,size:new pe(y,P)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function yT(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var Wc=class extends Mn{constructor(e,n,i,r,s,o,a,l,c,h=$s){if(h!==$s&&h!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$s&&(i=Wr),i===void 0&&h===to&&(i=eo),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Kn,this.minFilter=l!==void 0?l:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Sy=new Mn,R_=new Wc(1,1),My=new Nc,Ey=new ip,wy=new zc,P_=[],I_=[],L_=new Float32Array(16),D_=new Float32Array(9),N_=new Float32Array(4);function lo(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=P_[r];if(s===void 0&&(s=new Float32Array(r),P_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lu(t,e){let n=I_[e];n===void 0&&(n=new Int32Array(e),I_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function MT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function ET(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function wT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;N_.set(i),t.uniformMatrix2fv(this.addr,!1,N_),Lt(n,i)}}function TT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;D_.set(i),t.uniformMatrix3fv(this.addr,!1,D_),Lt(n,i)}}function AT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(It(n,i))return;L_.set(i),t.uniformMatrix4fv(this.addr,!1,L_),Lt(n,i)}}function bT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function CT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function RT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function PT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function IT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function DT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function NT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function UT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(R_.compareFunction=gy,s=R_):s=Sy,n.setTexture2D(e||s,r)}function FT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ey,r)}function OT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wy,r)}function kT(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||My,r)}function BT(t){switch(t){case 5126:return xT;case 35664:return ST;case 35665:return MT;case 35666:return ET;case 35674:return wT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return bT;case 35667:case 35671:return CT;case 35668:case 35672:return RT;case 35669:case 35673:return PT;case 5125:return IT;case 36294:return LT;case 36295:return DT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return kT}}function zT(t,e){t.uniform1fv(this.addr,e)}function VT(t,e){let n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function HT(t,e){let n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){let n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){let n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){let n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YT(t,e){let n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qT(t,e){t.uniform1iv(this.addr,e)}function $T(t,e){t.uniform2iv(this.addr,e)}function ZT(t,e){t.uniform3iv(this.addr,e)}function JT(t,e){t.uniform4iv(this.addr,e)}function KT(t,e){t.uniform1uiv(this.addr,e)}function jT(t,e){t.uniform2uiv(this.addr,e)}function QT(t,e){t.uniform3uiv(this.addr,e)}function eA(t,e){t.uniform4uiv(this.addr,e)}function tA(t,e,n){let i=this.cache,r=e.length,s=lu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Sy,s[o])}function nA(t,e,n){let i=this.cache,r=e.length,s=lu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ey,s[o])}function iA(t,e,n){let i=this.cache,r=e.length,s=lu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||wy,s[o])}function rA(t,e,n){let i=this.cache,r=e.length,s=lu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||My,s[o])}function sA(t){switch(t){case 5126:return zT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return YT;case 5124:case 35670:return qT;case 35667:case 35671:return $T;case 35668:case 35672:return ZT;case 35669:case 35673:return JT;case 5125:return KT;case 36294:return jT;case 36295:return QT;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}var op=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BT(n.type)}},ap=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sA(n.type)}},lp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},cd=/(\w+)(\])?(\[|\.)?/g;function U_(t,e){t.seq.push(e),t.map[e.id]=e}function oA(t,e,n){let i=t.name,r=i.length;for(cd.lastIndex=0;;){let s=cd.exec(i),o=cd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){U_(n,c===void 0?new op(a,t,e):new ap(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new lp(a),U_(n,f)),n=f}}}var Js=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);oA(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function F_(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var aA=37297,lA=0;function cA(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var O_=new Xe;function uA(t){Ke._getMatrix(O_,Ke.workingColorSpace,t);let e=`mat3( ${O_.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case au:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function k_(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+cA(t.getShaderSource(e),o)}else return r}function hA(t,e){let n=uA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function fA(t,e){let n;switch(e){case kM:n="Linear";break;case BM:n="Reinhard";break;case zM:n="Cineon";break;case Hp:n="ACESFilmic";break;case HM:n="AgX";break;case GM:n="Neutral";break;case VM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Sc=new D;function dA(){Ke.getLuminanceCoefficients(Sc);let t=Sc.x.toFixed(4),e=Sc.y.toFixed(4),n=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function mA(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gA(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function da(t){return t!==""}function B_(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(t){return t.replace(vA,yA)}var _A=new Map;function yA(t,e){let n=Ye[e];if(n===void 0){let i=_A.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cp(n)}var xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(t){return t.replace(xA,SA)}function SA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function H_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ny?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function EA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case js:case Qs:e="ENVMAP_TYPE_CUBE";break;case ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function TA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case iy:e="ENVMAP_BLENDING_MULTIPLY";break;case FM:e="ENVMAP_BLENDING_MIX";break;case OM:e="ENVMAP_BLENDING_ADD";break}return e}function AA(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bA(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=MA(n),c=EA(n),h=wA(n),f=TA(n),d=AA(n),p=pA(n),g=mA(s),x=r.createProgram(),m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(da).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(da).join(`
`),u.length>0&&(u+=`
`)):(m=[H_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),u=[H_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?Ye.tonemapping_pars_fragment:"",n.toneMapping!==dr?fA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,hA("linearToOutputTexel",n.outputColorSpace),dA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),o=cp(o),o=B_(o,n),o=z_(o,n),a=cp(a),a=B_(a,n),a=z_(a,n),o=V_(o),a=V_(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=v+m+o,y=v+u+a,P=F_(r,r.VERTEX_SHADER,_),T=F_(r,r.FRAGMENT_SHADER,y);r.attachShader(x,P),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(I){if(t.debug.checkShaderErrors){let q=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(T).trim(),ee=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,T);else{let se=k_(r,P,"vertex"),H=k_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+se+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||W==="")&&(X=!1);X&&(I.diagnostics={runnable:ee,programLog:q,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:u}})}r.deleteShader(P),r.deleteShader(T),R=new Js(r,x),w=gA(r,x)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,aA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}var CA=0,up=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new hp(e),n.set(e,i)),i}},hp=class{constructor(e){this.id=CA++,this.code=e,this.usedTimes=0}};function RA(t,e,n,i,r,s,o){let a=new xa,l=new up,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,I,q,k){let W=q.fog,ee=k.geometry,X=w.isMeshStandardMaterial?q.environment:null,se=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),H=se&&se.mapping===ou?se.image.height:null,ce=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let de=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ye=de!==void 0?de.length:0,Ue=0;ee.morphAttributes.position!==void 0&&(Ue=1),ee.morphAttributes.normal!==void 0&&(Ue=2),ee.morphAttributes.color!==void 0&&(Ue=3);let Ze,$,O,ie;if(ce){let Ge=ai[ce];Ze=Ge.vertexShader,$=Ge.fragmentShader}else Ze=w.vertexShader,$=w.fragmentShader,l.update(w),O=l.getVertexShaderID(w),ie=l.getFragmentShaderID(w);let Y=t.getRenderTarget(),Q=t.state.buffers.depth.getReversed(),he=k.isInstancedMesh===!0,oe=k.isBatchedMesh===!0,Ne=!!w.map,V=!!w.matcap,j=!!se,C=!!w.aoMap,Ee=!!w.lightMap,ne=!!w.bumpMap,ve=!!w.normalMap,ae=!!w.displacementMap,Re=!!w.emissiveMap,we=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,Z=w.dispersion>0,te=w.iridescence>0,J=w.sheen>0,Ce=w.transmission>0,me=M&&!!w.anisotropyMap,xe=F&&!!w.clearcoatMap,ke=F&&!!w.clearcoatNormalMap,ue=F&&!!w.clearcoatRoughnessMap,Ae=te&&!!w.iridescenceMap,Fe=te&&!!w.iridescenceThicknessMap,Oe=J&&!!w.sheenColorMap,Te=J&&!!w.sheenRoughnessMap,qe=!!w.specularMap,Be=!!w.specularColorMap,nt=!!w.specularIntensityMap,L=Ce&&!!w.transmissionMap,re=Ce&&!!w.thicknessMap,G=!!w.gradientMap,K=!!w.alphaMap,Se=w.alphaTest>0,_e=!!w.alphaHash,He=!!w.extensions,ct=dr;w.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ct=t.toneMapping);let gt={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:$,defines:w.defines,customVertexShaderID:O,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:oe,batchingColor:oe&&k._colorsTexture!==null,instancing:he,instancingColor:he&&k.instanceColor!==null,instancingMorph:he&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:oo,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:V,envMap:j,envMapMode:j&&se.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Ee,bumpMap:ne,normalMap:ve,displacementMap:d&&ae,emissiveMap:Re,normalMapObjectSpace:ve&&w.normalMapType===qM,normalMapTangentSpace:ve&&w.normalMapType===my,metalnessMap:we,roughnessMap:A,anisotropy:M,anisotropyMap:me,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:ke,clearcoatRoughnessMap:ue,dispersion:Z,iridescence:te,iridescenceMap:Ae,iridescenceThicknessMap:Fe,sheen:J,sheenColorMap:Oe,sheenRoughnessMap:Te,specularMap:qe,specularColorMap:Be,specularIntensityMap:nt,transmission:Ce,transmissionMap:L,thicknessMap:re,gradientMap:G,opaque:w.transparent===!1&&w.blending===qs&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:Se,alphaHash:_e,combine:w.combine,mapUv:Ne&&x(w.map.channel),aoMapUv:C&&x(w.aoMap.channel),lightMapUv:Ee&&x(w.lightMap.channel),bumpMapUv:ne&&x(w.bumpMap.channel),normalMapUv:ve&&x(w.normalMap.channel),displacementMapUv:ae&&x(w.displacementMap.channel),emissiveMapUv:Re&&x(w.emissiveMap.channel),metalnessMapUv:we&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:me&&x(w.anisotropyMap.channel),clearcoatMapUv:xe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(w.sheenRoughnessMap.channel),specularMapUv:qe&&x(w.specularMap.channel),specularColorMapUv:Be&&x(w.specularColorMap.channel),specularIntensityMapUv:nt&&x(w.specularIntensityMap.channel),transmissionMapUv:L&&x(w.transmissionMap.channel),thicknessMapUv:re&&x(w.thicknessMap.channel),alphaMapUv:K&&x(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ve||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(Ne||K),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Q,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ct,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&Ke.getTransfer(w.map.colorSpace)===st,decodeVideoTextureEmissive:Re&&w.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(w.emissiveMap.colorSpace)===st,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zn,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function u(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)S.push(I),S.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(v(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){let S=g[w.type],I;if(S){let q=ai[S];I=y1.clone(q.uniforms)}else I=w.uniforms;return I}function P(w,S){let I;for(let q=0,k=h.length;q<k;q++){let W=h[q];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new bA(t,S,w,s),h.push(I)),I}function T(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function b(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:R}}function PA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function IA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function G_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function W_(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,x,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function a(f,d,p,g,x,m){let u=o(f,d,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,d,p,g,x,m){let u=o(f,d,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||IA),i.length>1&&i.sort(d||G_),r.length>1&&r.sort(d||G_)}function h(){for(let f=e,d=t.length;f<d;f++){let p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function LA(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new W_,t.set(i,[o])):r>=s.length?(o=new W_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function DA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ve};break;case"SpotLight":n={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function NA(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var UA=0;function FA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OA(t){let e=new DA,n=NA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let r=new D,s=new St,o=new St;function a(c){let h=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,v=0,_=0,y=0,P=0,T=0,b=0;c.sort(FA);for(let w=0,S=c.length;w<S;w++){let I=c[w],q=I.color,k=I.intensity,W=I.distance,ee=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=q.r*k,f+=q.g*k,d+=q.b*k;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],k);b++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let se=I.shadow,H=n.get(I);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=I.shadow.matrix,v++}i.directional[p]=X,p++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(q).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[x]=X;let se=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,se.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[x]=se.matrix,I.castShadow){let H=n.get(I);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=ee,y++}x++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(q).multiplyScalar(k),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=X,m++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let se=I.shadow,H=n.get(I);H.shadowIntensity=se.intensity,H.shadowBias=se.bias,H.shadowNormalBias=se.normalBias,H.shadowRadius=se.radius,H.shadowMapSize=se.mapSize,H.shadowCameraNear=se.camera.near,H.shadowCameraFar=se.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=I.shadow.matrix,_++}i.point[g]=X,g++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(k),X.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==y||R.numSpotMaps!==P||R.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=y,R.numSpotMaps=P,R.numLightProbes=b,i.version=UA++)}function l(c,h){let f=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){let _=c[u];if(_.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function X_(t){let e=new OA(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kA(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new X_(t),e.set(r,[a])):s>=o.length?(a=new X_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var fp=class extends Yr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dp=class extends Yr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VA(t,e,n){let i=new Ma,r=new pe,s=new pe,o=new wt,a=new fp({depthPacking:YM}),l=new dp,c={},h=n.maxTextureSize,f={[mr]:hn,[hn]:mr,[Zn]:Zn},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:BA,fragmentShader:zA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ui;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new un(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ny;let u=this.type;this.render=function(T,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let w=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),q=t.state;q.setBlending(fr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let k=u!==Ri&&this.type===Ri,W=u===Ri&&this.type!==Ri;for(let ee=0,X=T.length;ee<X;ee++){let se=T[ee],H=se.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let ce=H.getFrameExtents();if(r.multiply(ce),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ce.x),r.x=s.x*ce.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ce.y),r.y=s.y*ce.y,H.mapSize.y=s.y)),H.map===null||k===!0||W===!0){let ye=this.type!==Ri?{minFilter:Kn,magFilter:Kn}:{};H.map!==null&&H.map.dispose(),H.map=new Ni(r.x,r.y,ye),H.map.texture.name=se.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();let de=H.getViewportCount();for(let ye=0;ye<de;ye++){let Ue=H.getViewport(ye);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),q.viewport(o),H.updateMatrices(se,ye),i=H.getFrustum(),y(b,R,H.camera,se,this.type)}H.isPointLightShadow!==!0&&this.type===Ri&&v(H,R),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,I)};function v(T,b){let R=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ni(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(b,null,R,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(b,null,R,p,x,null)}function _(T,b,R,w){let S=null,I=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let q=S.uuid,k=b.uuid,W=c[q];W===void 0&&(W={},c[q]=W);let ee=W[k];ee===void 0&&(ee=S.clone(),W[k]=ee,b.addEventListener("dispose",P)),S=ee}if(S.visible=b.visible,S.wireframe=b.wireframe,w===Ri?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let q=t.properties.get(S);q.light=R}return S}function y(T,b,R,w,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Ri)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let k=e.update(T),W=T.material;if(Array.isArray(W)){let ee=k.groups;for(let X=0,se=ee.length;X<se;X++){let H=ee[X],ce=W[H.materialIndex];if(ce&&ce.visible){let de=_(T,ce,w,S);T.onBeforeShadow(t,T,b,R,k,de,H),t.renderBufferDirect(R,null,k,de,T,H),T.onAfterShadow(t,T,b,R,k,de,H)}}}else if(W.visible){let ee=_(T,W,w,S);T.onBeforeShadow(t,T,b,R,k,ee,null),t.renderBufferDirect(R,null,k,ee,T,null),T.onAfterShadow(t,T,b,R,k,ee,null)}}let q=T.children;for(let k=0,W=q.length;k<W;k++)y(q[k],b,R,w,S)}function P(T){T.target.removeEventListener("dispose",P);for(let R in c){let w=c[R],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var HA={[gd]:vd,[_d]:Sd,[yd]:Md,[Ks]:xd,[vd]:gd,[Sd]:_d,[Md]:yd,[xd]:Ks};function GA(t,e){function n(){let L=!1,re=new wt,G=null,K=new wt(0,0,0,0);return{setMask:function(Se){G!==Se&&!L&&(t.colorMask(Se,Se,Se,Se),G=Se)},setLocked:function(Se){L=Se},setClear:function(Se,_e,He,ct,gt){gt===!0&&(Se*=ct,_e*=ct,He*=ct),re.set(Se,_e,He,ct),K.equals(re)===!1&&(t.clearColor(Se,_e,He,ct),K.copy(re))},reset:function(){L=!1,G=null,K.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,G=null,K=null,Se=null;return{setReversed:function(_e){if(re!==_e){let He=e.get("EXT_clip_control");re?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);let ct=Se;Se=null,this.setClear(ct)}re=_e},getReversed:function(){return re},setTest:function(_e){_e?Y(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(_e){G!==_e&&!L&&(t.depthMask(_e),G=_e)},setFunc:function(_e){if(re&&(_e=HA[_e]),K!==_e){switch(_e){case gd:t.depthFunc(t.NEVER);break;case vd:t.depthFunc(t.ALWAYS);break;case _d:t.depthFunc(t.LESS);break;case Ks:t.depthFunc(t.LEQUAL);break;case yd:t.depthFunc(t.EQUAL);break;case xd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case Md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=_e}},setLocked:function(_e){L=_e},setClear:function(_e){Se!==_e&&(re&&(_e=1-_e),t.clearDepth(_e),Se=_e)},reset:function(){L=!1,G=null,K=null,Se=null,re=!1}}}function r(){let L=!1,re=null,G=null,K=null,Se=null,_e=null,He=null,ct=null,gt=null;return{setTest:function(Ge){L||(Ge?Y(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(Ge){re!==Ge&&!L&&(t.stencilMask(Ge),re=Ge)},setFunc:function(Ge,je,Mt){(G!==Ge||K!==je||Se!==Mt)&&(t.stencilFunc(Ge,je,Mt),G=Ge,K=je,Se=Mt)},setOp:function(Ge,je,Mt){(_e!==Ge||He!==je||ct!==Mt)&&(t.stencilOp(Ge,je,Mt),_e=Ge,He=je,ct=Mt)},setLocked:function(Ge){L=Ge},setClear:function(Ge){gt!==Ge&&(t.clearStencil(Ge),gt=Ge)},reset:function(){L=!1,re=null,G=null,K=null,Se=null,_e=null,He=null,ct=null,gt=null}}}let s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,v=null,_=null,y=null,P=null,T=null,b=new Ve(0,0,0),R=0,w=!1,S=null,I=null,q=null,k=null,W=null,ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,se=0,H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=se>=1):H.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=se>=2);let ce=null,de={},ye=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),Ze=new wt().fromArray(ye),$=new wt().fromArray(Ue);function O(L,re,G,K){let Se=new Uint8Array(4),_e=t.createTexture();t.bindTexture(L,_e),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<G;He++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(re+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return _e}let ie={};ie[t.TEXTURE_2D]=O(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=O(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=O(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=O(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(t.DEPTH_TEST),o.setFunc(Ks),ne(!1),ve(qv),Y(t.CULL_FACE),C(fr);function Y(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Q(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function he(L,re){return f[L]!==re?(t.bindFramebuffer(L,re),f[L]=re,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=re),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=re),!0):!1}function oe(L,re){let G=p,K=!1;if(L){G=d.get(re),G===void 0&&(G=[],d.set(re,G));let Se=L.textures;if(G.length!==Se.length||G[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,He=Se.length;_e<He;_e++)G[_e]=t.COLOR_ATTACHMENT0+_e;G.length=Se.length,K=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,K=!0);K&&t.drawBuffers(G)}function Ne(L){return g!==L?(t.useProgram(L),g=L,!0):!1}let V={[zr]:t.FUNC_ADD,[yM]:t.FUNC_SUBTRACT,[xM]:t.FUNC_REVERSE_SUBTRACT};V[SM]=t.MIN,V[MM]=t.MAX;let j={[EM]:t.ZERO,[wM]:t.ONE,[TM]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[IM]:t.SRC_ALPHA_SATURATE,[RM]:t.DST_COLOR,[bM]:t.DST_ALPHA,[AM]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[PM]:t.ONE_MINUS_DST_COLOR,[CM]:t.ONE_MINUS_DST_ALPHA,[LM]:t.CONSTANT_COLOR,[DM]:t.ONE_MINUS_CONSTANT_COLOR,[NM]:t.CONSTANT_ALPHA,[UM]:t.ONE_MINUS_CONSTANT_ALPHA};function C(L,re,G,K,Se,_e,He,ct,gt,Ge){if(L===fr){x===!0&&(Q(t.BLEND),x=!1);return}if(x===!1&&(Y(t.BLEND),x=!0),L!==_M){if(L!==m||Ge!==w){if((u!==zr||y!==zr)&&(t.blendEquation(t.FUNC_ADD),u=zr,y=zr),Ge)switch(L){case qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $v:t.blendFunc(t.ONE,t.ONE);break;case Zv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $v:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Zv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,P=null,T=null,b.set(0,0,0),R=0,m=L,w=Ge}return}Se=Se||re,_e=_e||G,He=He||K,(re!==u||Se!==y)&&(t.blendEquationSeparate(V[re],V[Se]),u=re,y=Se),(G!==v||K!==_||_e!==P||He!==T)&&(t.blendFuncSeparate(j[G],j[K],j[_e],j[He]),v=G,_=K,P=_e,T=He),(ct.equals(b)===!1||gt!==R)&&(t.blendColor(ct.r,ct.g,ct.b,gt),b.copy(ct),R=gt),m=L,w=!1}function Ee(L,re){L.side===Zn?Q(t.CULL_FACE):Y(t.CULL_FACE);let G=L.side===hn;re&&(G=!G),ne(G),L.blending===qs&&L.transparent===!1?C(fr):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function ne(L){S!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),S=L)}function ve(L){L!==gM?(Y(t.CULL_FACE),L!==I&&(L===qv?t.cullFace(t.BACK):L===vM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),I=L}function ae(L){L!==q&&(X&&t.lineWidth(L),q=L)}function Re(L,re,G){L?(Y(t.POLYGON_OFFSET_FILL),(k!==re||W!==G)&&(t.polygonOffset(re,G),k=re,W=G)):Q(t.POLYGON_OFFSET_FILL)}function we(L){L?Y(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function A(L){L===void 0&&(L=t.TEXTURE0+ee-1),ce!==L&&(t.activeTexture(L),ce=L)}function M(L,re,G){G===void 0&&(ce===null?G=t.TEXTURE0+ee-1:G=ce);let K=de[G];K===void 0&&(K={type:void 0,texture:void 0},de[G]=K),(K.type!==L||K.texture!==re)&&(ce!==G&&(t.activeTexture(G),ce=G),t.bindTexture(L,re||ie[L]),K.type=L,K.texture=re)}function F(){let L=de[ce];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(L){Ze.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function Te(L){$.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function qe(L,re){let G=c.get(re);G===void 0&&(G=new WeakMap,c.set(re,G));let K=G.get(L);K===void 0&&(K=t.getUniformBlockIndex(re,L.name),G.set(L,K))}function Be(L,re){let K=c.get(re).get(L);l.get(re)!==K&&(t.uniformBlockBinding(re,K,L.__bindingPointIndex),l.set(re,K))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ce=null,de={},f={},d=new WeakMap,p=[],g=null,x=!1,m=null,u=null,v=null,_=null,y=null,P=null,T=null,b=new Ve(0,0,0),R=0,w=!1,S=null,I=null,q=null,k=null,W=null,Ze.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:Q,bindFramebuffer:he,drawBuffers:oe,useProgram:Ne,setBlending:C,setMaterial:Ee,setFlipSided:ne,setCullFace:ve,setLineWidth:ae,setPolygonOffset:Re,setScissorTest:we,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:Ae,texImage3D:Fe,updateUBOMapping:qe,uniformBlockBinding:Be,texStorage2D:ke,texStorage3D:ue,texSubImage2D:J,texSubImage3D:Ce,compressedTexSubImage2D:me,compressedTexSubImage3D:xe,scissor:Oe,viewport:Te,reset:nt}}function Y_(t,e,n,i){let r=WA(i);switch(n){case ly:return t*e;case uy:return t*e;case hy:return t*e*2;case fy:return t*e/r.components*r.byteLength;case Yp:return t*e/r.components*r.byteLength;case dy:return t*e*2/r.components*r.byteLength;case qp:return t*e*2/r.components*r.byteLength;case cy:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case $p:return t*e*4/r.components*r.byteLength;case Ac:case bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Pd:return Math.max(t,16)*Math.max(e,8)/4;case bd:case Rd:return Math.max(t,8)*Math.max(e,8)/2;case Id:case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pc:case $d:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case py:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kd:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WA(t){switch(t){case Di:case sy:return{byteLength:1,components:1};case va:case oy:case Ca:return{byteLength:2,components:1};case Wp:case Xp:return{byteLength:2,components:4};case Wr:case Gp:case Pi:return{byteLength:4,components:1};case ay:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function XA(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):_a("canvas")}function x(A,M,F){let Z=1,te=we(A);if((te.width>F||te.height>F)&&(Z=F/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(Z*te.width),Ce=Math.floor(Z*te.height);f===void 0&&(f=g(J,Ce));let me=M?g(J,Ce):f;return me.width=J,me.height=Ce,me.getContext("2d").drawImage(A,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ce+")."),me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(A,M,F,Z,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=M;if(M===t.RED&&(F===t.FLOAT&&(J=t.R32F),F===t.HALF_FLOAT&&(J=t.R16F),F===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.R8UI),F===t.UNSIGNED_SHORT&&(J=t.R16UI),F===t.UNSIGNED_INT&&(J=t.R32UI),F===t.BYTE&&(J=t.R8I),F===t.SHORT&&(J=t.R16I),F===t.INT&&(J=t.R32I)),M===t.RG&&(F===t.FLOAT&&(J=t.RG32F),F===t.HALF_FLOAT&&(J=t.RG16F),F===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RG8UI),F===t.UNSIGNED_SHORT&&(J=t.RG16UI),F===t.UNSIGNED_INT&&(J=t.RG32UI),F===t.BYTE&&(J=t.RG8I),F===t.SHORT&&(J=t.RG16I),F===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RGB8UI),F===t.UNSIGNED_SHORT&&(J=t.RGB16UI),F===t.UNSIGNED_INT&&(J=t.RGB32UI),F===t.BYTE&&(J=t.RGB8I),F===t.SHORT&&(J=t.RGB16I),F===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),F===t.UNSIGNED_INT&&(J=t.RGBA32UI),F===t.BYTE&&(J=t.RGBA8I),F===t.SHORT&&(J=t.RGBA16I),F===t.INT&&(J=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){let Ce=te?au:Ke.getTransfer(Z);F===t.FLOAT&&(J=t.RGBA32F),F===t.HALF_FLOAT&&(J=t.RGBA16F),F===t.UNSIGNED_BYTE&&(J=Ce===st?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(A,M){let F;return A?M===null||M===Wr||M===eo?F=t.DEPTH24_STENCIL8:M===Pi?F=t.DEPTH32F_STENCIL8:M===va&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wr||M===eo?F=t.DEPTH_COMPONENT24:M===Pi?F=t.DEPTH_COMPONENT32F:M===va&&(F=t.DEPTH_COMPONENT16),F}function P(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kn&&A.minFilter!==ci?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){let M=A.target;M.removeEventListener("dispose",T),R(M),M.isVideoTexture&&h.delete(M)}function b(A){let M=A.target;M.removeEventListener("dispose",b),S(M)}function R(A){let M=i.get(A);if(M.__webglInit===void 0)return;let F=A.source,Z=d.get(F);if(Z){let te=Z[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(A),Object.keys(Z).length===0&&d.delete(F)}i.remove(A)}function w(A){let M=i.get(A);t.deleteTexture(M.__webglTexture);let F=A.source,Z=d.get(F);delete Z[M.__cacheKey],o.memory.textures--}function S(A){let M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let te=0;te<M.__webglFramebuffer[Z].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[Z][te]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=A.textures;for(let Z=0,te=F.length;Z<te;Z++){let J=i.get(F[Z]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(F[Z])}i.remove(A)}let I=0;function q(){I=0}function k(){let A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function W(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ee(A,M){let F=i.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,A,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function X(A,M){let F=i.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function se(A,M){let F=i.get(A);if(A.version>0&&F.__version!==A.version){$(F,A,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function H(A,M){let F=i.get(A);if(A.version>0&&F.__version!==A.version){O(F,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}let ce={[Td]:t.REPEAT,[li]:t.CLAMP_TO_EDGE,[Ad]:t.MIRRORED_REPEAT},de={[Kn]:t.NEAREST,[WM]:t.NEAREST_MIPMAP_NEAREST,[tc]:t.NEAREST_MIPMAP_LINEAR,[ci]:t.LINEAR,[Nf]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},ye={[$M]:t.NEVER,[e1]:t.ALWAYS,[ZM]:t.LESS,[gy]:t.LEQUAL,[JM]:t.EQUAL,[QM]:t.GEQUAL,[KM]:t.GREATER,[jM]:t.NOTEQUAL};function Ue(A,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ci||M.magFilter===Nf||M.magFilter===tc||M.magFilter===Gr||M.minFilter===ci||M.minFilter===Nf||M.minFilter===tc||M.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,ce[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,ce[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,ce[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,de[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kn||M.minFilter!==tc&&M.minFilter!==Gr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));let Z=M.source,te=d.get(Z);te===void 0&&(te={},d.set(Z,te));let J=W(M);if(J!==A.__cacheKey){te[J]===void 0&&(te[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[J].usedTimes++;let Ce=te[A.__cacheKey];Ce!==void 0&&(te[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(M)),A.__cacheKey=J,A.__webglTexture=te[J].texture}return F}function $(A,M,F){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);let te=Ze(A,M),J=M.source;n.bindTexture(Z,A.__webglTexture,t.TEXTURE0+F);let Ce=i.get(J);if(J.version!==Ce.__version||te===!0){n.activeTexture(t.TEXTURE0+F);let me=Ke.getPrimaries(Ke.workingColorSpace),xe=M.colorSpace===ur?null:Ke.getPrimaries(M.colorSpace),ke=M.colorSpace===ur||me===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ue=x(M.image,!1,r.maxTextureSize);ue=Re(M,ue);let Ae=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type),Oe=_(M.internalFormat,Ae,Fe,M.colorSpace,M.isVideoTexture);Ue(Z,M);let Te,qe=M.mipmaps,Be=M.isVideoTexture!==!0,nt=Ce.__version===void 0||te===!0,L=J.dataReady,re=P(M,ue);if(M.isDepthTexture)Oe=y(M.format===to,M.type),nt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Oe,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Oe,ue.width,ue.height,0,Ae,Fe,null));else if(M.isDataTexture)if(qe.length>0){Be&&nt&&n.texStorage2D(t.TEXTURE_2D,re,Oe,qe[0].width,qe[0].height);for(let G=0,K=qe.length;G<K;G++)Te=qe[G],Be?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Te.width,Te.height,Ae,Fe,Te.data):n.texImage2D(t.TEXTURE_2D,G,Oe,Te.width,Te.height,0,Ae,Fe,Te.data);M.generateMipmaps=!1}else Be?(nt&&n.texStorage2D(t.TEXTURE_2D,re,Oe,ue.width,ue.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Ae,Fe,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,ue.width,ue.height,0,Ae,Fe,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Oe,qe[0].width,qe[0].height,ue.depth);for(let G=0,K=qe.length;G<K;G++)if(Te=qe[G],M.format!==Jn)if(Ae!==null)if(Be){if(L)if(M.layerUpdates.size>0){let Se=Y_(Te.width,Te.height,M.format,M.type);for(let _e of M.layerUpdates){let He=Te.data.subarray(_e*Se/Te.data.BYTES_PER_ELEMENT,(_e+1)*Se/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,_e,Te.width,Te.height,1,Ae,He)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,Te.width,Te.height,ue.depth,Ae,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Oe,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,Te.width,Te.height,ue.depth,Ae,Fe,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Oe,Te.width,Te.height,ue.depth,0,Ae,Fe,Te.data)}else{Be&&nt&&n.texStorage2D(t.TEXTURE_2D,re,Oe,qe[0].width,qe[0].height);for(let G=0,K=qe.length;G<K;G++)Te=qe[G],M.format!==Jn?Ae!==null?Be?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,Te.width,Te.height,Ae,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Te.width,Te.height,Ae,Fe,Te.data):n.texImage2D(t.TEXTURE_2D,G,Oe,Te.width,Te.height,0,Ae,Fe,Te.data)}else if(M.isDataArrayTexture)if(Be){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Oe,ue.width,ue.height,ue.depth),L)if(M.layerUpdates.size>0){let G=Y_(ue.width,ue.height,M.format,M.type);for(let K of M.layerUpdates){let Se=ue.data.subarray(K*G/ue.data.BYTES_PER_ELEMENT,(K+1)*G/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ue.width,ue.height,1,Ae,Fe,Se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Fe,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,ue.width,ue.height,ue.depth,0,Ae,Fe,ue.data);else if(M.isData3DTexture)Be?(nt&&n.texStorage3D(t.TEXTURE_3D,re,Oe,ue.width,ue.height,ue.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Fe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,ue.width,ue.height,ue.depth,0,Ae,Fe,ue.data);else if(M.isFramebufferTexture){if(nt)if(Be)n.texStorage2D(t.TEXTURE_2D,re,Oe,ue.width,ue.height);else{let G=ue.width,K=ue.height;for(let Se=0;Se<re;Se++)n.texImage2D(t.TEXTURE_2D,Se,Oe,G,K,0,Ae,Fe,null),G>>=1,K>>=1}}else if(qe.length>0){if(Be&&nt){let G=we(qe[0]);n.texStorage2D(t.TEXTURE_2D,re,Oe,G.width,G.height)}for(let G=0,K=qe.length;G<K;G++)Te=qe[G],Be?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Ae,Fe,Te):n.texImage2D(t.TEXTURE_2D,G,Oe,Ae,Fe,Te);M.generateMipmaps=!1}else if(Be){if(nt){let G=we(ue);n.texStorage2D(t.TEXTURE_2D,re,Oe,G.width,G.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Fe,ue)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Ae,Fe,ue);m(M)&&u(Z),Ce.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function O(A,M,F){if(M.image.length!==6)return;let Z=Ze(A,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);let J=i.get(te);if(te.version!==J.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);let Ce=Ke.getPrimaries(Ke.workingColorSpace),me=M.colorSpace===ur?null:Ke.getPrimaries(M.colorSpace),xe=M.colorSpace===ur||Ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ke=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let K=0;K<6;K++)!ke&&!ue?Ae[K]=x(M.image[K],!0,r.maxCubemapSize):Ae[K]=ue?M.image[K].image:M.image[K],Ae[K]=Re(M,Ae[K]);let Fe=Ae[0],Oe=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),qe=_(M.internalFormat,Oe,Te,M.colorSpace),Be=M.isVideoTexture!==!0,nt=J.__version===void 0||Z===!0,L=te.dataReady,re=P(M,Fe);Ue(t.TEXTURE_CUBE_MAP,M);let G;if(ke){Be&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,qe,Fe.width,Fe.height);for(let K=0;K<6;K++){G=Ae[K].mipmaps;for(let Se=0;Se<G.length;Se++){let _e=G[Se];M.format!==Jn?Oe!==null?Be?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,0,0,_e.width,_e.height,Oe,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,0,0,_e.width,_e.height,Oe,Te,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se,qe,_e.width,_e.height,0,Oe,Te,_e.data)}}}else{if(G=M.mipmaps,Be&&nt){G.length>0&&re++;let K=we(Ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,qe,K.width,K.height)}for(let K=0;K<6;K++)if(ue){Be?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae[K].width,Ae[K].height,Oe,Te,Ae[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qe,Ae[K].width,Ae[K].height,0,Oe,Te,Ae[K].data);for(let Se=0;Se<G.length;Se++){let He=G[Se].image[K].image;Be?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,0,0,He.width,He.height,Oe,Te,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,qe,He.width,He.height,0,Oe,Te,He.data)}}else{Be?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Oe,Te,Ae[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qe,Oe,Te,Ae[K]);for(let Se=0;Se<G.length;Se++){let _e=G[Se];Be?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,0,0,Oe,Te,_e.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Se+1,qe,Oe,Te,_e.image[K])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ie(A,M,F,Z,te,J){let Ce=s.convert(F.format,F.colorSpace),me=s.convert(F.type),xe=_(F.internalFormat,Ce,me,F.colorSpace),ke=i.get(M),ue=i.get(F);if(ue.__renderTarget=M,!ke.__hasExternalTextures){let Ae=Math.max(1,M.width>>J),Fe=Math.max(1,M.height>>J);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,J,xe,Ae,Fe,M.depth,0,Ce,me,null):n.texImage2D(te,J,xe,Ae,Fe,0,Ce,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,te,ue.__webglTexture,0,ne(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,te,ue.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Y(A,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){let Z=M.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,J=y(M.stencilBuffer,te),Ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=ne(M);ve(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,J,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,A)}else{let Z=M.textures;for(let te=0;te<Z.length;te++){let J=Z[te],Ce=s.convert(J.format,J.colorSpace),me=s.convert(J.type),xe=_(J.internalFormat,Ce,me,J.colorSpace),ke=ne(M);F&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,xe,M.width,M.height):ve(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,xe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,xe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Q(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let te=Z.__webglTexture,J=ne(M);if(M.depthTexture.format===$s)ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===to)ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function he(A){let M=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Q(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),Y(M.__webglDepthbuffer[Z],A,!1);else{let te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Y(M.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(A,M,F){let Z=i.get(A);M!==void 0&&ie(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&he(A)}function Ne(A){let M=A.texture,F=i.get(A),Z=i.get(M);A.addEventListener("dispose",b);let te=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),J){F.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[me]=[];for(let xe=0;xe<M.mipmaps.length;xe++)F.__webglFramebuffer[me][xe]=t.createFramebuffer()}else F.__webglFramebuffer[me]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)F.__webglFramebuffer[me]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let me=0,xe=te.length;me<xe;me++){let ke=i.get(te[me]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&ve(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){let xe=te[me];F.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[me]);let ke=s.convert(xe.format,xe.colorSpace),ue=s.convert(xe.type),Ae=_(xe.internalFormat,ke,ue,xe.colorSpace,A.isXRRenderTarget===!0),Fe=ne(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Ae,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,F.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Y(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ie(F.__webglFramebuffer[me][xe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else ie(F.__webglFramebuffer[me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let me=0,xe=te.length;me<xe;me++){let ke=te[me],ue=i.get(ke);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Ue(t.TEXTURE_2D,ke),ie(F.__webglFramebuffer,A,ke,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),m(ke)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Z.__webglTexture),Ue(me,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ie(F.__webglFramebuffer[xe],A,M,t.COLOR_ATTACHMENT0,me,xe);else ie(F.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,me,0);m(M)&&u(me),n.unbindTexture()}A.depthBuffer&&he(A)}function V(A){let M=A.textures;for(let F=0,Z=M.length;F<Z;F++){let te=M[F];if(m(te)){let J=v(A),Ce=i.get(te).__webglTexture;n.bindTexture(J,Ce),u(J),n.unbindTexture()}}}let j=[],C=[];function Ee(A){if(A.samples>0){if(ve(A)===!1){let M=A.textures,F=A.width,Z=A.height,te=t.COLOR_BUFFER_BIT,J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(A),me=M.length>1;if(me)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);let ke=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,F,Z,0,0,F,Z,te,t.NEAREST),l===!0&&(j.length=0,C.length=0,j.push(t.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(j.push(J),C.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,C)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);let ke=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ne(A){return Math.min(r.maxSamples,A.samples)}function ve(A){let M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Re(A,M){let F=A.colorSpace,Z=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==oo&&F!==ur&&(Ke.getTransfer(F)===st?(Z!==Jn||te!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function we(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=ee,this.setTexture2DArray=X,this.setTexture3D=se,this.setTextureCube=H,this.rebindTextures=oe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ve}function YA(t,e){function n(i,r=ur){let s,o=Ke.getTransfer(r);if(i===Di)return t.UNSIGNED_BYTE;if(i===Wp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ay)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sy)return t.BYTE;if(i===oy)return t.SHORT;if(i===va)return t.UNSIGNED_SHORT;if(i===Gp)return t.INT;if(i===Wr)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===Ca)return t.HALF_FLOAT;if(i===ly)return t.ALPHA;if(i===cy)return t.RGB;if(i===Jn)return t.RGBA;if(i===uy)return t.LUMINANCE;if(i===hy)return t.LUMINANCE_ALPHA;if(i===$s)return t.DEPTH_COMPONENT;if(i===to)return t.DEPTH_STENCIL;if(i===fy)return t.RED;if(i===Yp)return t.RED_INTEGER;if(i===dy)return t.RG;if(i===qp)return t.RG_INTEGER;if(i===$p)return t.RGBA_INTEGER;if(i===Ac||i===bc||i===Cc||i===Rc)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bd||i===Cd||i===Rd||i===Pd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Id||i===Ld||i===Dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Id||i===Ld)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nd||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===Wd||i===Xd||i===Yd||i===qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Od)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===$d||i===Zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pc)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===py||i===Jd||i===Kd||i===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var pp=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hr=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qA={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},$A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new Mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new hi({vertexShader:$A,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new un(new Vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gp=class extends gr{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null,x=new mp,m=n.getContextAttributes(),u=null,v=null,_=[],y=[],P=new pe,T=null,b=new en;b.viewport=new wt;let R=new en;R.viewport=new wt;let w=[b,R],S=new pp,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let O=_[$];return O===void 0&&(O=new pa,_[$]=O),O.getTargetRaySpace()},this.getControllerGrip=function($){let O=_[$];return O===void 0&&(O=new pa,_[$]=O),O.getGripSpace()},this.getHand=function($){let O=_[$];return O===void 0&&(O=new pa,_[$]=O),O.getHandSpace()};function k($){let O=y.indexOf($.inputSource);if(O===-1)return;let ie=_[O];ie!==void 0&&(ie.update($.inputSource,$.frame,c||o),ie.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ee);for(let $=0;$<_.length;$++){let O=y[$];O!==null&&(y[$]=null,_[$].disconnect(O))}I=null,q=null,x.reset(),e.setRenderTarget(u),p=null,d=null,f=null,r=null,v=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let O={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ni(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let O=null,ie=null,Y=null;m.depth&&(Y=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=m.stencil?to:$s,ie=m.stencil?eo:Wr);let Q={colorFormat:n.RGBA8,depthFormat:Y,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Q),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ni(d.textureWidth,d.textureHeight,{format:Jn,type:Di,depthTexture:new Wc(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee($){for(let O=0;O<$.removed.length;O++){let ie=$.removed[O],Y=y.indexOf(ie);Y>=0&&(y[Y]=null,_[Y].disconnect(ie))}for(let O=0;O<$.added.length;O++){let ie=$.added[O],Y=y.indexOf(ie);if(Y===-1){for(let he=0;he<_.length;he++)if(he>=y.length){y.push(ie),Y=he;break}else if(y[he]===null){y[he]=ie,Y=he;break}if(Y===-1)break}let Q=_[Y];Q&&Q.connect(ie)}}let X=new D,se=new D;function H($,O,ie){X.setFromMatrixPosition(O.matrixWorld),se.setFromMatrixPosition(ie.matrixWorld);let Y=X.distanceTo(se),Q=O.projectionMatrix.elements,he=ie.projectionMatrix.elements,oe=Q[14]/(Q[10]-1),Ne=Q[14]/(Q[10]+1),V=(Q[9]+1)/Q[5],j=(Q[9]-1)/Q[5],C=(Q[8]-1)/Q[0],Ee=(he[8]+1)/he[0],ne=oe*C,ve=oe*Ee,ae=Y/(-C+Ee),Re=ae*-C;if(O.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Re),$.translateZ(ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Q[10]===-1)$.projectionMatrix.copy(O.projectionMatrix),$.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let we=oe+ae,A=Ne+ae,M=ne-Re,F=ve+(Y-Re),Z=V*Ne/A*we,te=j*Ne/A*we;$.projectionMatrix.makePerspective(M,F,Z,te,we,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,O){O===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(O.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let O=$.near,ie=$.far;x.texture!==null&&(x.depthNear>0&&(O=x.depthNear),x.depthFar>0&&(ie=x.depthFar)),S.near=R.near=b.near=O,S.far=R.far=b.far=ie,(I!==S.near||q!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,q=S.far),b.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,S.layers.mask=b.layers.mask|R.layers.mask;let Y=$.parent,Q=S.cameras;ce(S,Y);for(let he=0;he<Q.length;he++)ce(Q[he],Y);Q.length===2?H(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),de($,S,Y)};function de($,O,ie){ie===null?$.matrix.copy(O.matrixWorld):($.matrix.copy(ie.matrixWorld),$.matrix.invert(),$.matrix.multiply(O.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(O.projectionMatrix),$.projectionMatrixInverse.copy(O.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ep*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ye=null;function Ue($,O){if(h=O.getViewerPose(c||o),g=O,h!==null){let ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Y=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,Y=!0);for(let he=0;he<ie.length;he++){let oe=ie[he],Ne=null;if(p!==null)Ne=p.getViewport(oe);else{let j=f.getViewSubImage(d,oe);Ne=j.viewport,he===0&&(e.setRenderTargetTextures(v,j.colorTexture,d.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(v))}let V=w[he];V===void 0&&(V=new en,V.layers.enable(he),V.viewport=new wt,w[he]=V),V.matrix.fromArray(oe.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(oe.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),he===0&&(S.matrix.copy(V.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Y===!0&&S.cameras.push(V)}let Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){let he=f.getDepthInformation(ie[0]);he&&he.isValid&&he.texture&&x.init(e,he,r.renderState)}}for(let ie=0;ie<_.length;ie++){let Y=y[ie],Q=_[ie];Y!==null&&Q!==void 0&&Q.update(Y,O,c||o)}ye&&ye($,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}let Ze=new xy;Ze.setAnimationLoop(Ue),this.setAnimationLoop=function($){ye=$},this.dispose=function(){}}},kr=new Nn,JA=new St;function KA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,yy(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=e.get(u),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,kr.copy(y),kr.x*=-1,kr.y*=-1,kr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),m.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(kr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jA(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(g(v),y=h(v),r[v.id]=y,v.addEventListener("dispose",m));let P=_.program;i.updateUBOMapping(v,P);let T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function h(v){let _=f();v.__bindingPointIndex=_;let y=t.createBuffer(),P=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=r[v.id],y=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,b=y.length;T<b;T++){let R=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,S=R.length;w<S;w++){let I=R[w];if(p(I,T,w,P)===!0){let q=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],W=0;for(let ee=0;ee<k.length;ee++){let X=k[ee],se=x(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,q+W,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,W),W+=se.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,y,P){let T=v.value,b=_+"_"+y;if(P[b]===void 0)return typeof T=="number"||typeof T=="boolean"?P[b]=T:P[b]=T.clone(),!0;{let R=P[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(v){let _=v.uniforms,y=0,P=16;for(let b=0,R=_.length;b<R;b++){let w=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,I=w.length;S<I;S++){let q=w[S],k=Array.isArray(q.value)?q.value:[q.value];for(let W=0,ee=k.length;W<ee;W++){let X=k[W],se=x(X),H=y%P,ce=H%se.boundary,de=H+ce;y+=ce,de!==0&&P-de<se.storage&&(y+=P-de),q.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=se.storage}}}let T=y%P;return T>0&&(y+=P-T),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(let v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}var Xc=class{constructor(e={}){let{canvas:n=n1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=dr,this.toneMappingExposure=1;let y=this,P=!1,T=0,b=0,R=null,w=-1,S=null,I=new wt,q=new wt,k=null,W=new Ve(0),ee=0,X=n.width,se=n.height,H=1,ce=null,de=null,ye=new wt(0,0,X,se),Ue=new wt(0,0,X,se),Ze=!1,$=new Ma,O=!1,ie=!1,Y=new St,Q=new St,he=new D,oe=new wt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},V=!1;function j(){return R===null?H:1}let C=i;function Ee(E,N){return n.getContext(E,N)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zp}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",_e,!1),C===null){let N="webgl2";if(C=Ee(N,E),C===null)throw Ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,ve,ae,Re,we,A,M,F,Z,te,J,Ce,me,xe,ke,ue,Ae,Fe,Oe,Te,qe,Be,nt,L;function re(){ne=new pT(C),ne.init(),Be=new YA(C,ne),ve=new lT(C,ne,e,Be),ae=new GA(C,ne),ve.reverseDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),Re=new vT(C),we=new PA,A=new XA(C,ne,ae,we,ve,Be,Re),M=new uT(y),F=new dT(y),Z=new w1(C),nt=new oT(C,Z),te=new mT(C,Z,Re,nt),J=new yT(C,te,Z,Re),Oe=new _T(C,ve,A),ue=new cT(we),Ce=new RA(y,M,F,ne,ve,nt,ue),me=new KA(y,we),xe=new LA,ke=new kA(ne),Fe=new sT(y,M,F,ae,J,p,l),Ae=new VA(y,J,ve),L=new jA(C,Re,ve,ae),Te=new aT(C,ne,Re),qe=new gT(C,ne,Re),Re.programs=Ce.programs,y.capabilities=ve,y.extensions=ne,y.properties=we,y.renderLists=xe,y.shadowMap=Ae,y.state=ae,y.info=Re}re();let G=new gp(y,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(X,se,!1))},this.getSize=function(E){return E.set(X,se)},this.setSize=function(E,N,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,se=N,n.width=Math.floor(E*H),n.height=Math.floor(N*H),B===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*H,se*H).floor()},this.setDrawingBufferSize=function(E,N,B){X=E,se=N,H=B,n.width=Math.floor(E*B),n.height=Math.floor(N*B),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,N,B,z){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,N,B,z),ae.viewport(I.copy(ye).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,N,B,z){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,N,B,z),ae.scissor(q.copy(Ue).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){ae.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(E=!0,N=!0,B=!0){let z=0;if(E){let U=!1;if(R!==null){let fe=R.texture.format;U=fe===$p||fe===qp||fe===Yp}if(U){let fe=R.texture.type,Me=fe===Di||fe===Wr||fe===va||fe===eo||fe===Wp||fe===Xp,Pe=Fe.getClearColor(),Ie=Fe.getClearAlpha(),ze=Pe.r,We=Pe.g,Le=Pe.b;Me?(g[0]=ze,g[1]=We,g[2]=Le,g[3]=Ie,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=ze,x[1]=We,x[2]=Le,x[3]=Ie,C.clearBufferiv(C.COLOR,0,x))}else z|=C.COLOR_BUFFER_BIT}N&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),xe.dispose(),ke.dispose(),we.dispose(),M.dispose(),F.dispose(),J.dispose(),nt.dispose(),L.dispose(),Ce.dispose(),G.dispose(),G.removeEventListener("sessionstart",Kr),G.removeEventListener("sessionend",En),fn.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=Re.autoReset,N=Ae.enabled,B=Ae.autoUpdate,z=Ae.needsUpdate,U=Ae.type;re(),Re.autoReset=E,Ae.enabled=N,Ae.autoUpdate=B,Ae.needsUpdate=z,Ae.type=U}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){let N=E.target;N.removeEventListener("dispose",He),ct(N)}function ct(E){gt(E),we.remove(E)}function gt(E){let N=we.get(E).programs;N!==void 0&&(N.forEach(function(B){Ce.releaseProgram(B)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,B,z,U,fe){N===null&&(N=Ne);let Me=U.isMesh&&U.matrixWorld.determinant()<0,Pe=Wy(E,N,B,z,U);ae.setMaterial(z,Me);let Ie=B.index,ze=1;if(z.wireframe===!0){if(Ie=te.getWireframeAttribute(B),Ie===void 0)return;ze=2}let We=B.drawRange,Le=B.attributes.position,Qe=We.start*ze,ot=(We.start+We.count)*ze;fe!==null&&(Qe=Math.max(Qe,fe.start*ze),ot=Math.min(ot,(fe.start+fe.count)*ze)),Ie!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,Ie.count)):Le!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,Le.count));let ut=ot-Qe;if(ut<0||ut===1/0)return;nt.setup(U,z,Pe,B,Ie);let nn,et=Te;if(Ie!==null&&(nn=Z.get(Ie),et=qe,et.setIndex(nn)),U.isMesh)z.wireframe===!0?(ae.setLineWidth(z.wireframeLinewidth*j()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(U.isLine){let De=z.linewidth;De===void 0&&(De=1),ae.setLineWidth(De*j()),U.isLineSegments?et.setMode(C.LINES):U.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else U.isPoints?et.setMode(C.POINTS):U.isSprite&&et.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let De=U._multiDrawStarts,fi=U._multiDrawCounts,tt=U._multiDrawCount,Fn=Ie?Z.get(Ie).bytesPerElement:1,es=we.get(z).currentProgram.getUniforms();for(let dn=0;dn<tt;dn++)es.setValue(C,"_gl_DrawID",dn),et.render(De[dn]/Fn,fi[dn])}else if(U.isInstancedMesh)et.renderInstances(Qe,ut,U.count);else if(B.isInstancedBufferGeometry){let De=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,fi=Math.min(B.instanceCount,De);et.renderInstances(Qe,ut,fi)}else et.render(Qe,ut)};function Ge(E,N,B){E.transparent===!0&&E.side===Zn&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,La(E,N,B),E.side=mr,E.needsUpdate=!0,La(E,N,B),E.side=Zn):La(E,N,B)}this.compile=function(E,N,B=null){B===null&&(B=E),u=ke.get(B),u.init(N),_.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),E!==B&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();let z=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let fe=U.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){let Pe=fe[Me];Ge(Pe,B,U),z.add(Pe)}else Ge(fe,B,U),z.add(fe)}),_.pop(),u=null,z},this.compileAsync=function(E,N,B=null){let z=this.compile(E,N,B);return new Promise(U=>{function fe(){if(z.forEach(function(Me){we.get(Me).currentProgram.isReady()&&z.delete(Me)}),z.size===0){U(E);return}setTimeout(fe,10)}ne.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let je=null;function Mt(E){je&&je(E)}function Kr(){fn.stop()}function En(){fn.start()}let fn=new xy;fn.setAnimationLoop(Mt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(E){je=E,G.setAnimationLoop(E),E===null?fn.stop():fn.start()},G.addEventListener("sessionstart",Kr),G.addEventListener("sessionend",En),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,N,R),u=ke.get(E,_.length),u.init(N),_.push(u),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Q),ie=this.localClippingEnabled,O=ue.init(this.clippingPlanes,ie),m=xe.get(E,v.length),m.init(),v.push(m),G.enabled===!0&&G.isPresenting===!0){let fe=y.xr.getDepthSensingMesh();fe!==null&&jr(fe,N,-1/0,y.sortObjects)}jr(E,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ce,de),V=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,V&&Fe.addToRenderList(m,E),this.info.render.frame++,O===!0&&ue.beginShadows();let B=u.state.shadowsArray;Ae.render(B,E,N),O===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(u.setupLights(),N.isArrayCamera){let fe=N.cameras;if(U.length>0)for(let Me=0,Pe=fe.length;Me<Pe;Me++){let Ie=fe[Me];Qr(z,U,E,Ie)}V&&Fe.render(E);for(let Me=0,Pe=fe.length;Me<Pe;Me++){let Ie=fe[Me];uo(m,E,Ie,Ie.viewport)}}else U.length>0&&Qr(z,U,E,N),V&&Fe.render(E),uo(m,E,N);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(y,E,N),nt.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(u=_[_.length-1],O===!0&&ue.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function jr(E,N,B,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){z&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);let Me=J.update(E),Pe=E.material;Pe.visible&&m.push(E,Me,Pe,B,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){let Me=J.update(E),Pe=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),oe.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),oe.copy(Me.boundingSphere.center)),oe.applyMatrix4(E.matrixWorld).applyMatrix4(Q)),Array.isArray(Pe)){let Ie=Me.groups;for(let ze=0,We=Ie.length;ze<We;ze++){let Le=Ie[ze],Qe=Pe[Le.materialIndex];Qe&&Qe.visible&&m.push(E,Me,Qe,B,oe.z,Le)}}else Pe.visible&&m.push(E,Me,Pe,B,oe.z,null)}}let fe=E.children;for(let Me=0,Pe=fe.length;Me<Pe;Me++)jr(fe[Me],N,B,z)}function uo(E,N,B,z){let U=E.opaque,fe=E.transmissive,Me=E.transparent;u.setupLightsView(B),O===!0&&ue.setGlobalState(y.clippingPlanes,B),z&&ae.viewport(I.copy(z)),U.length>0&&Ia(U,N,B),fe.length>0&&Ia(fe,N,B),Me.length>0&&Ia(Me,N,B),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Qr(E,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Ni(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Ca:Di,minFilter:Gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let fe=u.state.transmissionRenderTarget[z.id],Me=z.viewport||I;fe.setSize(Me.z,Me.w);let Pe=y.getRenderTarget();y.setRenderTarget(fe),y.getClearColor(W),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),V&&Fe.render(B);let Ie=y.toneMapping;y.toneMapping=dr;let ze=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),O===!0&&ue.setGlobalState(y.clippingPlanes,z),Ia(E,B,z),A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Le=0,Qe=N.length;Le<Qe;Le++){let ot=N[Le],ut=ot.object,nn=ot.geometry,et=ot.material,De=ot.group;if(et.side===Zn&&ut.layers.test(z.layers)){let fi=et.side;et.side=hn,et.needsUpdate=!0,lm(ut,B,z,nn,et,De),et.side=fi,et.needsUpdate=!0,We=!0}}We===!0&&(A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe))}y.setRenderTarget(Pe),y.setClearColor(W,ee),ze!==void 0&&(z.viewport=ze),y.toneMapping=Ie}function Ia(E,N,B){let z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,fe=E.length;U<fe;U++){let Me=E[U],Pe=Me.object,Ie=Me.geometry,ze=z===null?Me.material:z,We=Me.group;Pe.layers.test(B.layers)&&lm(Pe,N,B,Ie,ze,We)}}function lm(E,N,B,z,U,fe){E.onBeforeRender(y,N,B,z,U,fe),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(y,N,B,z,E,fe),U.transparent===!0&&U.side===Zn&&U.forceSinglePass===!1?(U.side=hn,U.needsUpdate=!0,y.renderBufferDirect(B,N,z,U,E,fe),U.side=mr,U.needsUpdate=!0,y.renderBufferDirect(B,N,z,U,E,fe),U.side=Zn):y.renderBufferDirect(B,N,z,U,E,fe),E.onAfterRender(y,N,B,z,U,fe)}function La(E,N,B){N.isScene!==!0&&(N=Ne);let z=we.get(E),U=u.state.lights,fe=u.state.shadowsArray,Me=U.state.version,Pe=Ce.getParameters(E,U.state,fe,N,B),Ie=Ce.getProgramCacheKey(Pe),ze=z.programs;z.environment=E.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",He),ze=new Map,z.programs=ze);let We=ze.get(Ie);if(We!==void 0){if(z.currentProgram===We&&z.lightsStateVersion===Me)return um(E,Pe),We}else Pe.uniforms=Ce.getUniforms(E),E.onBeforeCompile(Pe,y),We=Ce.acquireProgram(Pe,Ie),ze.set(Ie,We),z.uniforms=Pe.uniforms;let Le=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=ue.uniform),um(E,Pe),z.needsLights=Yy(E),z.lightsStateVersion=Me,z.needsLights&&(Le.ambientLightColor.value=U.state.ambient,Le.lightProbe.value=U.state.probe,Le.directionalLights.value=U.state.directional,Le.directionalLightShadows.value=U.state.directionalShadow,Le.spotLights.value=U.state.spot,Le.spotLightShadows.value=U.state.spotShadow,Le.rectAreaLights.value=U.state.rectArea,Le.ltc_1.value=U.state.rectAreaLTC1,Le.ltc_2.value=U.state.rectAreaLTC2,Le.pointLights.value=U.state.point,Le.pointLightShadows.value=U.state.pointShadow,Le.hemisphereLights.value=U.state.hemi,Le.directionalShadowMap.value=U.state.directionalShadowMap,Le.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Le.spotShadowMap.value=U.state.spotShadowMap,Le.spotLightMatrix.value=U.state.spotLightMatrix,Le.spotLightMap.value=U.state.spotLightMap,Le.pointShadowMap.value=U.state.pointShadowMap,Le.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=We,z.uniformsList=null,We}function cm(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Js.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function um(E,N){let B=we.get(E);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Wy(E,N,B,z,U){N.isScene!==!0&&(N=Ne),A.resetTextureUnits();let fe=N.fog,Me=z.isMeshStandardMaterial?N.environment:null,Pe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:oo,Ie=(z.isMeshStandardMaterial?F:M).get(z.envMap||Me),ze=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,We=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color,ut=dr;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=y.toneMapping);let nn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=nn!==void 0?nn.length:0,De=we.get(z),fi=u.state.lights;if(O===!0&&(ie===!0||E!==S)){let wn=E===S&&z.id===w;ue.setState(z,E,wn)}let tt=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==fi.state.version||De.outputColorSpace!==Pe||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isBatchedMesh&&De.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&De.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==Ie||z.fog===!0&&De.fog!==fe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ue.numPlanes||De.numIntersection!==ue.numIntersection)||De.vertexAlphas!==ze||De.vertexTangents!==We||De.morphTargets!==Le||De.morphNormals!==Qe||De.morphColors!==ot||De.toneMapping!==ut||De.morphTargetsCount!==et)&&(tt=!0):(tt=!0,De.__version=z.version);let Fn=De.currentProgram;tt===!0&&(Fn=La(z,N,U));let es=!1,dn=!1,ho=!1,ht=Fn.getUniforms(),ei=De.uniforms;if(ae.useProgram(Fn.program)&&(es=!0,dn=!0,ho=!0),z.id!==w&&(w=z.id,dn=!0),es||S!==E){ae.buffers.depth.getReversed()?(Y.copy(E.projectionMatrix),r1(Y),s1(Y),ht.setValue(C,"projectionMatrix",Y)):ht.setValue(C,"projectionMatrix",E.projectionMatrix),ht.setValue(C,"viewMatrix",E.matrixWorldInverse);let Ui=ht.map.cameraPosition;Ui!==void 0&&Ui.setValue(C,he.setFromMatrixPosition(E.matrixWorld)),ve.logarithmicDepthBuffer&&ht.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,dn=!0,ho=!0)}if(U.isSkinnedMesh){ht.setOptional(C,U,"bindMatrix"),ht.setOptional(C,U,"bindMatrixInverse");let wn=U.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),ht.setValue(C,"boneTexture",wn.boneTexture,A))}U.isBatchedMesh&&(ht.setOptional(C,U,"batchingTexture"),ht.setValue(C,"batchingTexture",U._matricesTexture,A),ht.setOptional(C,U,"batchingIdTexture"),ht.setValue(C,"batchingIdTexture",U._indirectTexture,A),ht.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(C,"batchingColorTexture",U._colorsTexture,A));let fo=B.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0)&&Oe.update(U,B,Fn),(dn||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,ht.setValue(C,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ei.envMap.value=Ie,ei.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(ei.envMapIntensity.value=N.environmentIntensity),dn&&(ht.setValue(C,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Xy(ei,ho),fe&&z.fog===!0&&me.refreshFogUniforms(ei,fe),me.refreshMaterialUniforms(ei,z,H,se,u.state.transmissionRenderTarget[E.id]),Js.upload(C,cm(De),ei,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Js.upload(C,cm(De),ei,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(C,"center",U.center),ht.setValue(C,"modelViewMatrix",U.modelViewMatrix),ht.setValue(C,"normalMatrix",U.normalMatrix),ht.setValue(C,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let wn=z.uniformsGroups;for(let Ui=0,Fi=wn.length;Ui<Fi;Ui++){let hm=wn[Ui];L.update(hm,Fn),L.bind(hm,Fn)}}return Fn}function Xy(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Yy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,N,B){we.get(E.texture).__webglTexture=N,we.get(E.depthTexture).__webglTexture=B;let z=we.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let B=we.get(E);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,B=0){R=E,T=N,b=B;let z=!0,U=null,fe=!1,Me=!1;if(E){let Ie=we.get(E);if(Ie.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ie.__hasExternalTextures)A.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Le=E.depthTexture;if(Ie.__boundDepthTexture!==Le){if(Le!==null&&we.has(Le)&&(E.width!==Le.image.width||E.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);let We=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[N])?U=We[N][B]:U=We[N],fe=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?U=we.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?U=We[B]:U=We,I.copy(E.viewport),q.copy(E.scissor),k=E.scissorTest}else I.copy(ye).multiplyScalar(H).floor(),q.copy(Ue).multiplyScalar(H).floor(),k=Ze;if(ae.bindFramebuffer(C.FRAMEBUFFER,U)&&z&&ae.drawBuffers(E,U),ae.viewport(I),ae.scissor(q),ae.setScissorTest(k),fe){let Ie=we.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,B)}else if(Me){let Ie=we.get(E.texture),ze=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ie.__webglTexture,B||0,ze)}w=-1},this.readRenderTargetPixels=function(E,N,B,z,U,fe,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){ae.bindFramebuffer(C.FRAMEBUFFER,Pe);try{let Ie=E.texture,ze=Ie.format,We=Ie.type;if(!ve.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&B>=0&&B<=E.height-U&&C.readPixels(N,B,z,U,Be.convert(ze),Be.convert(We),fe)}finally{let Ie=R!==null?we.get(R).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,N,B,z,U,fe,Me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){let Ie=E.texture,ze=Ie.format,We=Ie.type;if(!ve.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-z&&B>=0&&B<=E.height-U){ae.bindFramebuffer(C.FRAMEBUFFER,Pe);let Le=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Le),C.bufferData(C.PIXEL_PACK_BUFFER,fe.byteLength,C.STREAM_READ),C.readPixels(N,B,z,U,Be.convert(ze),Be.convert(We),0);let Qe=R!==null?we.get(R).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,Qe);let ot=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await i1(C,ot,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Le),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,fe),C.deleteBuffer(Le),C.deleteSync(ot),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,B=0){E.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let z=Math.pow(2,-B),U=Math.floor(E.image.width*z),fe=Math.floor(E.image.height*z),Me=N!==null?N.x:0,Pe=N!==null?N.y:0;A.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,Me,Pe,U,fe),ae.unbindTexture()},this.copyTextureToTexture=function(E,N,B=null,z=null,U=0){E.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let fe,Me,Pe,Ie,ze,We,Le,Qe,ot,ut=E.isCompressedTexture?E.mipmaps[U]:E.image;B!==null?(fe=B.max.x-B.min.x,Me=B.max.y-B.min.y,Pe=B.isBox3?B.max.z-B.min.z:1,Ie=B.min.x,ze=B.min.y,We=B.isBox3?B.min.z:0):(fe=ut.width,Me=ut.height,Pe=ut.depth||1,Ie=0,ze=0,We=0),z!==null?(Le=z.x,Qe=z.y,ot=z.z):(Le=0,Qe=0,ot=0);let nn=Be.convert(N.format),et=Be.convert(N.type),De;N.isData3DTexture?(A.setTexture3D(N,0),De=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),De=C.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),De=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let fi=C.getParameter(C.UNPACK_ROW_LENGTH),tt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Fn=C.getParameter(C.UNPACK_SKIP_PIXELS),es=C.getParameter(C.UNPACK_SKIP_ROWS),dn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ut.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ie),C.pixelStorei(C.UNPACK_SKIP_ROWS,ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We);let ho=E.isDataArrayTexture||E.isData3DTexture,ht=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let ei=we.get(E),fo=we.get(N),wn=we.get(ei.__renderTarget),Ui=we.get(fo.__renderTarget);ae.bindFramebuffer(C.READ_FRAMEBUFFER,wn.__webglFramebuffer),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Fi=0;Fi<Pe;Fi++)ho&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,we.get(E).__webglTexture,U,We+Fi),E.isDepthTexture?(ht&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,we.get(N).__webglTexture,U,ot+Fi),C.blitFramebuffer(Ie,ze,fe,Me,Le,Qe,fe,Me,C.DEPTH_BUFFER_BIT,C.NEAREST)):ht?C.copyTexSubImage3D(De,U,Le,Qe,ot+Fi,Ie,ze,fe,Me):C.copyTexSubImage2D(De,U,Le,Qe,ot+Fi,Ie,ze,fe,Me);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(De,U,Le,Qe,ot,fe,Me,Pe,nn,et,ut.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(De,U,Le,Qe,ot,fe,Me,Pe,nn,ut.data):C.texSubImage3D(De,U,Le,Qe,ot,fe,Me,Pe,nn,et,ut):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,Le,Qe,fe,Me,nn,et,ut.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,Le,Qe,ut.width,ut.height,nn,ut.data):C.texSubImage2D(C.TEXTURE_2D,U,Le,Qe,fe,Me,nn,et,ut);C.pixelStorei(C.UNPACK_ROW_LENGTH,fi),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,tt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fn),C.pixelStorei(C.UNPACK_SKIP_ROWS,es),C.pixelStorei(C.UNPACK_SKIP_IMAGES,dn),U===0&&N.generateMipmaps&&C.generateMipmap(De),ae.unbindTexture()},this.copyTextureToTexture3D=function(E,N,B=null,z=null,U=0){return E.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0),fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,B,z,U)},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){T=0,b=0,R=null,ae.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}};var Yc=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){let i=this.getLengths(),r=0,s=i.length,o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new pe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){let i=new D,r=[],s=[],o=[],a=new D,l=new St;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Bt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Bt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ea=class extends Un{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new pe){let i=n,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*f+this.aX,c=d*f+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vp=class extends Ea{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,p*=h,r(o,a,d,p)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var Mc=new D,ud=new Jp,hd=new Jp,fd=new Jp,_p=class extends Un{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){let i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Mc.subVectors(r[0],r[1]).add(r[0]),c=Mc);let f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Mc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Mc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ud.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,x,m),hd.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,x,m),fd.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ud.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),hd.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),fd.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(ud.calc(l),hd.calc(l),fd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function q_(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function QA(t,e){let n=1-t;return n*n*e}function eb(t,e){return 2*(1-t)*t*e}function tb(t,e){return t*t*e}function ma(t,e,n,i){return QA(t,e)+eb(t,n)+tb(t,i)}function nb(t,e){let n=1-t;return n*n*n*e}function ib(t,e){let n=1-t;return 3*n*n*t*e}function rb(t,e){return 3*(1-t)*t*t*e}function sb(t,e){return t*t*t*e}function ga(t,e,n,i,r){return nb(t,e)+ib(t,n)+rb(t,i)+sb(t,r)}var qc=class extends Un{constructor(e=new pe,n=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new pe){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ga(e,r.x,s.x,o.x,a.x),ga(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yp=class extends Un{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ga(e,r.x,s.x,o.x,a.x),ga(e,r.y,s.y,o.y,a.y),ga(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$c=class extends Un{constructor(e=new pe,n=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new pe){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new pe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xp=class extends Un{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends Un{constructor(e=new pe,n=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new pe){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ma(e,r.x,s.x,o.x),ma(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sp=class extends Un{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ma(e,r.x,s.x,o.x),ma(e,r.y,s.y,o.y),ma(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jc=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new pe){let i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(q_(a,l.x,c.x,h.x,f.x),q_(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new pe().fromArray(r))}return this}},Mp=Object.freeze({__proto__:null,ArcCurve:vp,CatmullRomCurve3:_p,CubicBezierCurve:qc,CubicBezierCurve3:yp,EllipseCurve:Ea,LineCurve:$c,LineCurve3:xp,QuadraticBezierCurve:Zc,QuadraticBezierCurve3:Sp,SplineCurve:Jc}),Ep=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mp[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(new Mp[r.type]().fromJSON(r))}return this}},io=class extends Ep{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new $c(this.currentPoint.clone(),new pe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){let s=new Zc(this.currentPoint.clone(),new pe(e,n),new pe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){let a=new qc(this.currentPoint.clone(),new pe(e,n),new pe(i,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new Jc(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){let c=new Ea(e,n,i,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var qr=class extends io{constructor(e){super(e),this.uuid=ao(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(new io().fromJSON(r))}return this}},ob={triangulate:function(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=Ty(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,d,p;if(i&&(s=hb(t,e,s,n)),t.length>80*n){a=c=t[0],l=h=t[1];for(let g=n;g<r;g+=n)f=t[g],d=t[g+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return wa(s,o,n,a,l,p,0),o}};function Ty(t,e,n,i,r){let s,o;if(r===Mb(t,e,n,i)>0)for(s=e;s<n;s+=i)o=$_(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=$_(s,t[s],t[s+1],o);return o&&cu(o,o.next)&&(Aa(o),o=o.next),o}function $r(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(cu(n,n.next)||xt(n.prev,n,n.next)===0)){if(Aa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function wa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&gb(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?lb(t,i,r,s):ab(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Aa(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=cb($r(t),e,n),wa(t,e,n,i,r,s,2)):o===2&&ub(t,e,n,i,r,s):wa($r(t),e,n,i,r,s,1);break}}}function ab(t){let e=t.prev,n=t,i=t.next;if(xt(e,n,i)>=0)return!1;let r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,h=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=p&&Ys(r,a,s,l,o,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lb(t,e,n,i){let r=t.prev,s=t,o=t.next;if(xt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,f=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,x=a>l?a>c?a:c:l>c?l:c,m=h>f?h>d?h:d:f>d?f:d,u=wp(p,g,e,n,i),v=wp(x,m,e,n,i),_=t.prevZ,y=t.nextZ;for(;_&&_.z>=u&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Ys(a,h,l,f,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ys(a,h,l,f,c,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=u;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Ys(a,h,l,f,c,d,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ys(a,h,l,f,c,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cb(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!cu(r,s)&&Ay(r,i,i.next,s)&&Ta(r,s)&&Ta(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Aa(i),Aa(i.next),i=t=s),i=i.next}while(i!==t);return $r(i)}function ub(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yb(o,a)){let l=by(o,a);o=$r(o,o.next),l=$r(l,l.next),wa(o,e,n,i,r,s,0),wa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function hb(t,e,n,i){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Ty(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(_b(c));for(r.sort(fb),s=0;s<r.length;s++)n=db(r[s],n);return n}function fb(t,e){return t.x-e.x}function db(t,e){let n=pb(t,e);if(!n)return e;let i=by(n,t);return $r(i,i.next),$r(n,n.next)}function pb(t,e){let n=e,i=-1/0,r,s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;let a=r,l=r.x,c=r.y,h=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ys(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),Ta(n,t)&&(f<h||f===h&&(n.x>r.x||n.x===r.x&&mb(r,n)))&&(r=n,h=f)),n=n.next;while(n!==a);return r}function mb(t,e){return xt(t.prev,t,e.prev)<0&&xt(e.next,t,t.next)<0}function gb(t,e,n,i){let r=t;do r.z===0&&(r.z=wp(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,vb(r)}function vb(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function wp(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function _b(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ys(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function yb(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!xb(t,e)&&(Ta(t,e)&&Ta(e,t)&&Sb(t,e)&&(xt(t.prev,t,e.prev)||xt(t,e.prev,e))||cu(t,e)&&xt(t.prev,t,t.next)>0&&xt(e.prev,e,e.next)>0)}function xt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function cu(t,e){return t.x===e.x&&t.y===e.y}function Ay(t,e,n,i){let r=wc(xt(t,e,n)),s=wc(xt(t,e,i)),o=wc(xt(n,i,t)),a=wc(xt(n,i,e));return!!(r!==s&&o!==a||r===0&&Ec(t,n,e)||s===0&&Ec(t,i,e)||o===0&&Ec(n,t,i)||a===0&&Ec(n,e,i))}function Ec(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function wc(t){return t>0?1:t<0?-1:0}function xb(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Ay(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ta(t,e){return xt(t.prev,t,t.next)<0?xt(t,e,t.next)>=0&&xt(t,t.prev,e)>=0:xt(t,e,t.prev)<0||xt(t,t.next,e)<0}function Sb(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function by(t,e){let n=new Tp(t.i,t.x,t.y),i=new Tp(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function $_(t,e,n,i){let r=new Tp(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Aa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Tp(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mb(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var pr=class t{static area(e){let n=e.length,i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],r=[],s=[];Z_(e),J_(i,e);let o=e.length;n.forEach(Z_);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,J_(i,n[l]);let a=ob.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Z_(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function J_(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Kc=class t extends ui{constructor(e=new qr([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new zt(r,3)),this.setAttribute("uv",new zt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,u=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:Eb,_,y=!1,P,T,b,R;u&&(_=u.getSpacedPoints(h),y=!0,d=!1,P=u.computeFrenetFrames(h,!1),T=new D,b=new D,R=new D),d||(m=0,p=0,g=0,x=0);let w=a.extractPoints(c),S=w.shape,I=w.holes;if(!pr.isClockWise(S)){S=S.reverse();for(let V=0,j=I.length;V<j;V++){let C=I[V];pr.isClockWise(C)&&(I[V]=C.reverse())}}let k=pr.triangulateShape(S,I),W=S;for(let V=0,j=I.length;V<j;V++){let C=I[V];S=S.concat(C)}function ee(V,j,C){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(j,C)}let X=S.length,se=k.length;function H(V,j,C){let Ee,ne,ve,ae=V.x-j.x,Re=V.y-j.y,we=C.x-V.x,A=C.y-V.y,M=ae*ae+Re*Re,F=ae*A-Re*we;if(Math.abs(F)>Number.EPSILON){let Z=Math.sqrt(M),te=Math.sqrt(we*we+A*A),J=j.x-Re/Z,Ce=j.y+ae/Z,me=C.x-A/te,xe=C.y+we/te,ke=((me-J)*A-(xe-Ce)*we)/(ae*A-Re*we);Ee=J+ae*ke-V.x,ne=Ce+Re*ke-V.y;let ue=Ee*Ee+ne*ne;if(ue<=2)return new pe(Ee,ne);ve=Math.sqrt(ue/2)}else{let Z=!1;ae>Number.EPSILON?we>Number.EPSILON&&(Z=!0):ae<-Number.EPSILON?we<-Number.EPSILON&&(Z=!0):Math.sign(Re)===Math.sign(A)&&(Z=!0),Z?(Ee=-Re,ne=ae,ve=Math.sqrt(M)):(Ee=ae,ne=Re,ve=Math.sqrt(M/2))}return new pe(Ee/ve,ne/ve)}let ce=[];for(let V=0,j=W.length,C=j-1,Ee=V+1;V<j;V++,C++,Ee++)C===j&&(C=0),Ee===j&&(Ee=0),ce[V]=H(W[V],W[C],W[Ee]);let de=[],ye,Ue=ce.concat();for(let V=0,j=I.length;V<j;V++){let C=I[V];ye=[];for(let Ee=0,ne=C.length,ve=ne-1,ae=Ee+1;Ee<ne;Ee++,ve++,ae++)ve===ne&&(ve=0),ae===ne&&(ae=0),ye[Ee]=H(C[Ee],C[ve],C[ae]);de.push(ye),Ue=Ue.concat(ye)}for(let V=0;V<m;V++){let j=V/m,C=p*Math.cos(j*Math.PI/2),Ee=g*Math.sin(j*Math.PI/2)+x;for(let ne=0,ve=W.length;ne<ve;ne++){let ae=ee(W[ne],ce[ne],Ee);Y(ae.x,ae.y,-C)}for(let ne=0,ve=I.length;ne<ve;ne++){let ae=I[ne];ye=de[ne];for(let Re=0,we=ae.length;Re<we;Re++){let A=ee(ae[Re],ye[Re],Ee);Y(A.x,A.y,-C)}}}let Ze=g+x;for(let V=0;V<X;V++){let j=d?ee(S[V],Ue[V],Ze):S[V];y?(b.copy(P.normals[0]).multiplyScalar(j.x),T.copy(P.binormals[0]).multiplyScalar(j.y),R.copy(_[0]).add(b).add(T),Y(R.x,R.y,R.z)):Y(j.x,j.y,0)}for(let V=1;V<=h;V++)for(let j=0;j<X;j++){let C=d?ee(S[j],Ue[j],Ze):S[j];y?(b.copy(P.normals[V]).multiplyScalar(C.x),T.copy(P.binormals[V]).multiplyScalar(C.y),R.copy(_[V]).add(b).add(T),Y(R.x,R.y,R.z)):Y(C.x,C.y,f/h*V)}for(let V=m-1;V>=0;V--){let j=V/m,C=p*Math.cos(j*Math.PI/2),Ee=g*Math.sin(j*Math.PI/2)+x;for(let ne=0,ve=W.length;ne<ve;ne++){let ae=ee(W[ne],ce[ne],Ee);Y(ae.x,ae.y,f+C)}for(let ne=0,ve=I.length;ne<ve;ne++){let ae=I[ne];ye=de[ne];for(let Re=0,we=ae.length;Re<we;Re++){let A=ee(ae[Re],ye[Re],Ee);y?Y(A.x,A.y+_[h-1].y,_[h-1].x+C):Y(A.x,A.y,f+C)}}}$(),O();function $(){let V=r.length/3;if(d){let j=0,C=X*j;for(let Ee=0;Ee<se;Ee++){let ne=k[Ee];Q(ne[2]+C,ne[1]+C,ne[0]+C)}j=h+m*2,C=X*j;for(let Ee=0;Ee<se;Ee++){let ne=k[Ee];Q(ne[0]+C,ne[1]+C,ne[2]+C)}}else{for(let j=0;j<se;j++){let C=k[j];Q(C[2],C[1],C[0])}for(let j=0;j<se;j++){let C=k[j];Q(C[0]+X*h,C[1]+X*h,C[2]+X*h)}}i.addGroup(V,r.length/3-V,0)}function O(){let V=r.length/3,j=0;ie(W,j),j+=W.length;for(let C=0,Ee=I.length;C<Ee;C++){let ne=I[C];ie(ne,j),j+=ne.length}i.addGroup(V,r.length/3-V,1)}function ie(V,j){let C=V.length;for(;--C>=0;){let Ee=C,ne=C-1;ne<0&&(ne=V.length-1);for(let ve=0,ae=h+m*2;ve<ae;ve++){let Re=X*ve,we=X*(ve+1),A=j+Ee+Re,M=j+ne+Re,F=j+ne+we,Z=j+Ee+we;he(A,M,F,Z)}}}function Y(V,j,C){l.push(V),l.push(j),l.push(C)}function Q(V,j,C){oe(V),oe(j),oe(C);let Ee=r.length/3,ne=v.generateTopUV(i,r,Ee-3,Ee-2,Ee-1);Ne(ne[0]),Ne(ne[1]),Ne(ne[2])}function he(V,j,C,Ee){oe(V),oe(j),oe(Ee),oe(j),oe(C),oe(Ee);let ne=r.length/3,ve=v.generateSideWallUV(i,r,ne-6,ne-3,ne-2,ne-1);Ne(ve[0]),Ne(ve[1]),Ne(ve[3]),Ne(ve[1]),Ne(ve[2]),Ne(ve[3])}function oe(V){r.push(l[V*3+0]),r.push(l[V*3+1]),r.push(l[V*3+2])}function Ne(V){s.push(V.x),s.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return wb(n,i,e)}static fromJSON(e,n){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=n[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Mp[r.type]().fromJSON(r)),new t(i,e.options)}},Eb={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new pe(s,o),new pe(a,l),new pe(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-f),new pe(d,1-g),new pe(x,1-u)]:[new pe(a,1-l),new pe(h,1-f),new pe(p,1-g),new pe(m,1-u)]}};function wb(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var jc=class t extends ui{constructor(e=new qr([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(s,3)),this.setAttribute("uv",new zt(o,2));function c(h){let f=r.length/3,d=h.extractPoints(n),p=d.shape,g=d.holes;pr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=g.length;m<u;m++){let v=g[m];pr.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=pr.triangulateShape(p,g);for(let m=0,u=g.length;m<u;m++){let v=g[m];p=p.concat(v)}for(let m=0,u=p.length;m<u;m++){let v=p[m];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let m=0,u=x.length;m<u;m++){let v=x[m],_=v[0]+f,y=v[1]+f,P=v[2]+f;i.push(_,y,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes;return Tb(n,e)}static fromJSON(e,n){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=n[e.shapes[r]];i.push(o)}return new t(i,e.curveSegments)}};function Tb(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var Qc=class t extends ui{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new D,d=new D,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){let v=[],_=u/i,y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let P=0;P<=n;P++){let T=P/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-_),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){let _=h[u][v+1],y=h[u][v],P=h[u+1][v],T=h[u+1][v+1];(u!==0||o>0)&&p.push(_,y,T),(u!==i-1||l<Math.PI)&&p.push(y,P,T)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ap=class extends Yr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=my,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},eu=class extends Ap{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Tc(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Ab(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var ro=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bp=class extends ro{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kv,endingEnd:Kv}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case jv:s=e,a=2*n-i;break;case Qv:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jv:o=e,l=2*i-n;break;case Qv:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-n)/(r-n),x=g*g,m=x*g,u=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let P=0;P!==a;++P)s[P]=u*o[h+P]+v*o[c+P]+_*o[l+P]+y*o[f+P];return s}},Cp=class extends ro{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(r-n),f=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*h;return s}},Rp=class extends ro{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tc(n,this.TimeBufferType),this.values=Tc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Tc(e.times,Array),values:Tc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Ic:n=this.InterpolantFactoryMethodDiscrete;break;case Qd:n=this.InterpolantFactoryMethodLinear;break;case Uf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ic;case this.InterpolantFactoryMethodLinear:return Qd;case this.InterpolantFactoryMethodSmooth:return Uf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Ab(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Uf,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){let x=n[f+g];if(x!==n[d+g]||x!==n[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Qd;var Zr=class extends Qn{constructor(e,n,i){super(e,n,i)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Ic;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pp=class extends Qn{};Pp.prototype.ValueTypeName="color";var Ip=class extends Qn{};Ip.prototype.ValueTypeName="number";var Lp=class extends ro{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let h=c+a;c!==h;c+=4)jn.slerpFlat(s,0,o,c-a,o,c,l);return s}},tu=class extends Qn{InterpolantFactoryMethodLinear(e){return new Lp(this.times,this.values,this.getValueSize(),e)}};tu.prototype.ValueTypeName="quaternion";tu.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends Qn{constructor(e,n,i){super(e,n,i)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Ic;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dp=class extends Qn{};Dp.prototype.ValueTypeName="vector";var K_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},Np=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},bb=new Np,ba=class{constructor(e){this.manager=e!==void 0?e:bb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var Up=class extends ba{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=K_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;let a=_a("img");function l(){h(),K_.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){h(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var nu=class extends ba{constructor(e){super(e)}load(e,n,i,r){let s=new Mn,o=new Up(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}},iu=class extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},ru=class extends iu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}},dd=new St,j_=new D,Q_=new D,Fp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;j_.setFromMatrixPosition(e.matrixWorld),n.position.copy(j_),Q_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Q_),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Op=class extends Fp{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},so=class extends iu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Op}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Kp="\\[\\]\\.:\\/",Cb=new RegExp("["+Kp+"]","g"),jp="[^"+Kp+"]",Rb="[^"+Kp.replace("\\.","")+"]",Pb=/((?:WC+[\/:])*)/.source.replace("WC",jp),Ib=/(WCOD+)?/.source.replace("WCOD",Rb),Lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jp),Db=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jp),Nb=new RegExp("^"+Pb+Ib+Lb+Db+"$"),Ub=["material","materials","bones","map"],kp=class{constructor(e,n,i){let r=i||mt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},mt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cb,"")}static parseTrackName(e){let n=Nb.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Ub.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=kp;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bC=new Float32Array(1);var ey=new St,su=class{constructor(e,n,i=0,r=1/0){this.ray=new Uc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ey.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ey),this}intersectObject(e,n=!0,i=[]){return Bp(e,this,i,n),i.sort(ty),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Bp(e[r],this,i,n);return i.sort(ty),i}};function ty(t,e){return t.distance-e.distance}function Bp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)Bp(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);var Cy=()=>{},rt=new Proxy({},{get:(t,e)=>String(e)});var am=vr(Ra()),Gb=30,Wb=45,Xb=1.15,Yb=.15,qb=.25,$b=.92,Zb=.005,Ly=8,Jb=.005,Dy=4,Kb=3,jb=150,Qp=1/60,Qb=6,Ny=48,Uy=2048,Pa=-9999,eC={spreadX:150,spreadY:100},tC={roughness:100,gloss:100,transparency:0},nC={gravityAnchor:"Center",bounciness:100,mouseForce:100,parallax:200},iC={svgLogos:[],useOriginalSvgColors:!1},Vy=[{fit:"Cover",image:{src:"https://cdn.brandfetch.io/idAnDTFapY/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/idW5s392j1/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/id6O2oGzv-/w/200/h/200/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/idf5VaJxyT/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/apple.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/google.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/microsoft.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/amazon.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/meta.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/nvidia.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/samsung.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/netflix.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/spotify.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0},{fit:"Cover",image:{src:"https://cdn.brandfetch.io/tesla.com/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"},offsetX:0,offsetY:0}];function rC(t,e){if(e==="Contain"){let n=Math.sqrt(1+t*t)||1;return[t/n,1/n]}return t>=1?[t,1]:[1,1/t]}function em(t){return t?typeof t=="string"?t:t.src??"":""}var sC="varying vec3 vDecalPos;",oC=`uniform sampler2D uDecalMap;
uniform vec2 uDecalHalf;
uniform vec2 uDecalOffset;
varying vec3 vDecalPos;`,aC=`#include <map_fragment>
{
    vec3 dn = normalize(vDecalPos);
    // The projection smears as the surface turns tangent to the camera, so the
    // decal fades out before the silhouette instead of ending in a hard ring.
    float face = smoothstep(0.0, 0.35, dn.z);
    vec2 dUv = (vDecalPos.xy - uDecalOffset) / uDecalHalf;
    float inside = step(abs(dUv.x), 1.0) * step(abs(dUv.y), 1.0);
    vec4 slide = texture2D(uDecalMap, dUv * 0.5 + 0.5);
    diffuseColor.rgb = mix(diffuseColor.rgb, slide.rgb, face * inside * slide.a);
}`;function lC(t,e){t.userData.decal=e,t.onBeforeCompile=n=>{let i=t.userData.decal;n.uniforms.uDecalMap=i.uDecalMap,n.uniforms.uDecalHalf=i.uDecalHalf,n.uniforms.uDecalOffset=i.uDecalOffset,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
`+sC).replace("#include <begin_vertex>",`#include <begin_vertex>
vDecalPos = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+oC).replace("#include <map_fragment>",aC)},t.customProgramCacheKey=()=>"rubber-decal",t.needsUpdate=!0}function cC(t){t.userData.decal&&(t.userData.decal=null,t.onBeforeCompile=()=>{},t.customProgramCacheKey=()=>"rubber-plain",t.needsUpdate=!0)}function tm(t){for(let e of t)for(let n of e.geometries)n.dispose()}function nm(t,e){for(let n of e){t.remove(n.root);for(let i of n.meshes){let r=i.material;Array.isArray(r)?r.forEach(s=>s.dispose()):r.dispose()}}}var hu=[1,0,0,1,0,0];function fu(t,e){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],t[0]*e[4]+t[2]*e[5]+t[4],t[1]*e[4]+t[3]*e[5]+t[5]]}function uC(t){if(!t)return hu;let e=hu,n=/(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g,i;for(;i=n.exec(t);){let r=(i[2].match(/[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g)??[]).map(Number),s=a=>a*Math.PI/180,o=hu;switch(i[1]){case"matrix":r.length>=6&&(o=[r[0],r[1],r[2],r[3],r[4],r[5]]);break;case"translate":o=[1,0,0,1,r[0]??0,r[1]??0];break;case"scale":o=[r[0]??1,0,0,r[1]??r[0]??1,0,0];break;case"rotate":{let a=Math.cos(s(r[0]??0)),l=Math.sin(s(r[0]??0)),c=[a,l,-l,a,0,0];o=r.length>=3?fu(fu([1,0,0,1,r[1],r[2]],c),[1,0,0,1,-r[1],-r[2]]):c;break}case"skewX":o=[1,0,Math.tan(s(r[0]??0)),1,0,0];break;case"skewY":o=[1,Math.tan(s(r[0]??0)),0,1,0,0];break}e=fu(e,o)}return e}var co=class{constructor(e){this.m=e}contours=[];cur=[];add(e,n){let i=this.m[0]*e+this.m[2]*n+this.m[4],r=this.m[1]*e+this.m[3]*n+this.m[5],s=this.cur.length;s>=2&&Math.abs(this.cur[s-2]-i)<1e-9&&Math.abs(this.cur[s-1]-r)<1e-9||this.cur.push(i,r)}break(){this.cur.length>=6&&this.contours.push(this.cur),this.cur=[]}};function Fy(t,e,n,i,r,s,o,a,l){for(let h=1;h<=24;h++){let f=h/24,d=1-f;t.add(d*d*d*e+3*d*d*f*i+3*d*f*f*s+f*f*f*a,d*d*d*n+3*d*d*f*r+3*d*f*f*o+f*f*f*l)}}function Oy(t,e,n,i,r,s,o){for(let l=1;l<=16;l++){let c=l/16,h=1-c;t.add(h*h*e+2*h*c*i+c*c*s,h*h*n+2*h*c*r+c*c*o)}}function hC(t,e,n,i,r,s,o,a,l,c){let h=Math.abs(i),f=Math.abs(r);if(h<1e-12||f<1e-12){t.add(l,c);return}let d=s*Math.PI/180,p=Math.cos(d),g=Math.sin(d),x=(e-l)/2,m=(n-c)/2,u=p*x+g*m,v=-g*x+p*m,_=u*u/(h*h)+v*v/(f*f);if(_>1){let ce=Math.sqrt(_);h*=ce,f*=ce}let y=h*h*f*f-h*h*v*v-f*f*u*u,P=h*h*v*v+f*f*u*u,T=(o!==a?1:-1)*Math.sqrt(Math.max(0,y/(P||1e-12))),b=T*h*v/f,R=-T*f*u/h,w=p*b-g*R+(e+l)/2,S=g*b+p*R+(n+c)/2,I=(ce,de,ye,Ue)=>{let Ze=Math.hypot(ce,de)*Math.hypot(ye,Ue)||1e-12,$=Math.acos(Math.min(1,Math.max(-1,(ce*ye+de*Ue)/Ze)));return ce*Ue-de*ye<0&&($=-$),$},q=(u-b)/h,k=(v-R)/f,W=(-u-b)/h,ee=(-v-R)/f,X=I(1,0,q,k),se=I(q,k,W,ee);!a&&se>0&&(se-=2*Math.PI),a&&se<0&&(se+=2*Math.PI);let H=Math.max(4,Math.ceil(Math.abs(se)/(Math.PI/24)));for(let ce=1;ce<=H;ce++){let de=X+se*ce/H,ye=Math.cos(de),Ue=Math.sin(de);t.add(w+h*ye*p-f*Ue*g,S+h*ye*g+f*Ue*p)}}var om=class{constructor(e){this.d=e}i=0;skip(){for(;this.i<this.d.length&&(this.d[this.i]===" "||this.d[this.i]===","||this.d[this.i]===`
`||this.d[this.i]==="\r"||this.d[this.i]==="	");)this.i++}done(){return this.skip(),this.i>=this.d.length}command(){this.skip();let e=this.d[this.i];return e&&/[a-zA-Z]/.test(e)?(this.i++,e):null}num(){this.skip();let e=/^[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/.exec(this.d.slice(this.i));return e?(this.i+=e[0].length,parseFloat(e[0])):(this.i=this.d.length,NaN)}flag(){this.skip();let e=this.d[this.i];return e==="0"||e==="1"?(this.i++,e==="1"?1:0):this.num()?1:0}};function fC(t,e){let n=new co(e),i=new om(t),r=0,s=0,o=0,a=0,l=0,c=0,h=0,f=0,d="";for(;!i.done();){let p=i.command();if(p)d=p;else if(d)d==="M"?d="L":d==="m"&&(d="l");else break;let g=d===d.toLowerCase(),x=g?r:0,m=g?s:0;switch(d.toUpperCase()){case"M":{let u=i.num()+x,v=i.num()+m;if(isNaN(u)||isNaN(v))return n.break(),n.contours;n.break(),n.add(u,v),r=o=u,s=a=v;break}case"L":{let u=i.num()+x,v=i.num()+m;if(isNaN(u)||isNaN(v))return n.break(),n.contours;n.add(u,v),r=u,s=v;break}case"H":{let u=i.num()+x;if(isNaN(u))return n.break(),n.contours;n.add(u,s),r=u;break}case"V":{let u=i.num()+m;if(isNaN(u))return n.break(),n.contours;n.add(r,u),s=u;break}case"C":{let u=i.num()+x,v=i.num()+m,_=i.num()+x,y=i.num()+m,P=i.num()+x,T=i.num()+m;if(isNaN(P)||isNaN(T))return n.break(),n.contours;Fy(n,r,s,u,v,_,y,P,T),l=_,c=y,r=P,s=T;break}case"S":{let u=i.num()+x,v=i.num()+m,_=i.num()+x,y=i.num()+m;if(isNaN(_)||isNaN(y))return n.break(),n.contours;let P=2*r-l,T=2*s-c;Fy(n,r,s,P,T,u,v,_,y),l=u,c=v,r=_,s=y;break}case"Q":{let u=i.num()+x,v=i.num()+m,_=i.num()+x,y=i.num()+m;if(isNaN(_)||isNaN(y))return n.break(),n.contours;Oy(n,r,s,u,v,_,y),h=u,f=v,r=_,s=y;break}case"T":{let u=i.num()+x,v=i.num()+m;if(isNaN(u)||isNaN(v))return n.break(),n.contours;let _=2*r-h,y=2*s-f;Oy(n,r,s,_,y,u,v),h=_,f=y,r=u,s=v;break}case"A":{let u=i.num(),v=i.num(),_=i.num(),y=i.flag(),P=i.flag(),T=i.num()+x,b=i.num()+m;if(isNaN(T)||isNaN(b))return n.break(),n.contours;hC(n,r,s,u,v,_,y,P,T,b),r=T,s=b;break}case"Z":n.break(),r=o,s=a;break;default:return n.break(),n.contours}d.toUpperCase()!=="C"&&d.toUpperCase()!=="S"&&(l=r,c=s),d.toUpperCase()!=="Q"&&d.toUpperCase()!=="T"&&(h=r,f=s)}return n.break(),n.contours}function ky(t,e,n,i,r){if(i<=0||r<=0)return[];let s=new co(t),o=96;for(let a=0;a<o;a++){let l=a/o*Math.PI*2;s.add(e+i*Math.cos(l),n+r*Math.sin(l))}return s.break(),s.contours}function im(t,e){let n=t.getAttribute("style");if(n){let i=new RegExp("(?:^|;)\\s*"+e+"\\s*:\\s*([^;]+)").exec(n);if(i)return i[1].trim()}return t.getAttribute(e)}function dC(t){let e=new DOMParser().parseFromString(t,"image/svg+xml");if(e.getElementsByTagName("parsererror").length>0)throw new Error("invalid SVG");let n=[],i=(o,a,l=0)=>{let c=parseFloat(o.getAttribute(a)??"");return isNaN(c)?l:c},r=(o,a,l,c)=>{if(im(o,"display")==="none")return;let h=fu(a,uC(o.getAttribute("transform"))),f=im(o,"fill")??l,d=im(o,"fill-rule")??c,p=o.tagName.toLowerCase().replace(/^.*:/,""),g=[];switch(p){case"path":g=fC(o.getAttribute("d")??"",h);break;case"rect":{let x=i(o,"x"),m=i(o,"y"),u=i(o,"width"),v=i(o,"height");if(u>0&&v>0){let _=new co(h);_.add(x,m),_.add(x+u,m),_.add(x+u,m+v),_.add(x,m+v),_.break(),g=_.contours}break}case"circle":g=ky(h,i(o,"cx"),i(o,"cy"),i(o,"r"),i(o,"r"));break;case"ellipse":g=ky(h,i(o,"cx"),i(o,"cy"),i(o,"rx"),i(o,"ry"));break;case"polygon":case"polyline":{let x=(o.getAttribute("points")??"").match(/[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g);if(x&&x.length>=6){let m=new co(h);for(let u=0;u+1<x.length;u+=2)m.add(parseFloat(x[u]),parseFloat(x[u+1]));m.break(),g=m.contours}break}default:for(let x=0;x<o.children.length;x++)r(o.children[x],h,f,d);return}g.length>0&&n.push({contours:g,fill:f&&f!=="none"&&f!=="currentColor"?f:null,evenOdd:d==="evenodd"})},s=e.documentElement;return s&&r(s,hu,null,null),n}function By(t){let e=0;for(let n=0,i=t.length;n<i;n+=2){let r=(n+2)%i;e+=t[n]*t[r+1]-t[r]*t[n+1]}return e/2}function zy(t,e,n){let i=!1;for(let r=0,s=t.length,o=s-2;r<s;o=r,r+=2){let a=t[r],l=t[r+1],c=t[o],h=t[o+1];l>n!=h>n&&e<(c-a)*(n-l)/(h-l)+a&&(i=!i)}return i}function rm(t){let e=[];for(let n=0;n<t.length;n+=2)e.push(new pe(t[n],t[n+1]));return e}function pC(t){let e=t.contours.filter(o=>Math.abs(By(o))>1e-9);if(e.length===0)return[];let n=e.map(By),i=e.map((o,a)=>e.reduce((l,c,h)=>h!==a&&zy(c,o[0],o[1])?l+1:l,0)),r=[],s=new Map;for(let o=0;o<e.length;o++)i[o]%2===0&&(s.set(o,r.length),r.push(new qr(rm(e[o]))));for(let o=0;o<e.length;o++){if(i[o]%2===0)continue;let a=-1;for(let c=0;c<e.length;c++)c===o||!zy(e[c],e[o][0],e[o][1])||(a===-1||i[c]>i[a])&&(a=c);if(a===-1)continue;if(!t.evenOdd&&Math.sign(n[o])===Math.sign(n[a])){r.push(new qr(rm(e[o])));continue}let l=s.get(a);l!==void 0&&r[l].holes.push(new io(rm(e[o])))}return r}async function mC(t){let e=await fetch(t);if(!e.ok)throw new Error(`SVG ${e.status} for ${t}`);let n=dC(await e.text()).map(T=>({fill:T.fill,shapes:pC(T)})).filter(T=>T.shapes.length>0);if(n.length===0)return null;let i=n.flatMap(T=>T.shapes),r=new jc(i);r.computeBoundingBox();let s=new D;r.boundingBox.getSize(s);let o=Math.max(s.x,s.y)||1;r.dispose();let a={depth:o*Yb,bevelEnabled:!1,steps:1},l=new hr,c=[],h=[];for(let T=0;T<n.length;T++){let b=new Kc(n[T].shapes,a);b.translate(0,0,T*o*.001);let R=new un(b);n[T].fill&&(R.userData.srcColor=n[T].fill),c.push(b),h.push(R),l.add(R)}if(h.length===0)return null;let f=1/0,d=1/0,p=1/0,g=-1/0,x=-1/0,m=-1/0;for(let T of h){T.geometry.computeBoundingBox();let b=T.geometry.boundingBox;f=Math.min(f,b.min.x),d=Math.min(d,b.min.y),p=Math.min(p,b.min.z),g=Math.max(g,b.max.x),x=Math.max(x,b.max.y),m=Math.max(m,b.max.z)}let u=(f+g)/2,v=(d+x)/2,_=(p+m)/2;for(let T of h)T.geometry.translate(-u,-v,-_);let y=0;for(let T of h){let b=T.geometry.attributes.position;for(let R=0;R<b.count;R++){let w=b.getX(R),S=b.getY(R),I=b.getZ(R),q=w*w+S*S+I*I;q>y&&(y=q)}}let P=Math.sqrt(y)||1;for(let T of h)T.geometry.scale(1/P,-1/P,1/P);return{root:l,geometries:c}}function gC(t){let{style:e,background:n="#000000",baseColor:i="#FFFFFF",accentColor:r="#FFD1DC",colorMode:s="Single",balloonColor:o="#FFFFFF",balloonColors:a=["#FFFFFF","#FFD1DC","#BDE0FE","#CDEB8B"],density:l=85,dotSize:c=120,lighting:h="Soft Studio",field:f,material:d,motion:p,sourceMode:g="Images",logo:x,images:m}=t,u=g==="Images"?m&&m.length>0?m:Vy:[],v={...eC,...f??{}},_={...tC,...d??{}},y={...nC,...p??{}},P={...iC,...x??{},svgLogos:[]},T=(0,Tt.useRef)(null),b=(0,Tt.useRef)(null),R=(0,Tt.useRef)([]),w=(0,Tt.useRef)(null),S=(0,Tt.useRef)([]),[I,q]=(0,Tt.useState)(0),k=(0,Tt.useRef)(!0),W=(0,Tt.useRef)(new Map),ee=(0,Tt.useRef)([]),[X,se]=(0,Tt.useState)(0),H=(0,Tt.useRef)({});H.current={baseColor:i,accentColor:r,colorMode:s,balloonColor:o,balloonColors:a,dotSize:c,spreadX:v.spreadX,spreadY:v.spreadY,roughness:_.roughness,gloss:_.gloss,transparency:_.transparency,gravityAnchor:y.gravityAnchor,bounciness:y.bounciness,mouseForce:y.mouseForce,parallax:y.parallax,lighting:h,useOriginalSvgColors:P.useOriginalSvgColors};let ce=sm.useCallback(()=>{let O=H.current,ie=new Ve(O.baseColor),Y=O.colorMode==="Multi"&&O.balloonColors.length>0?O.balloonColors.map(V=>new Ve(V)):[new Ve(O.balloonColor)],Q=O.roughness/100,he=O.gloss/100,oe=O.transparency/100,Ne=O.dotSize/100;for(let V of R.current)for(let j=0;j<V.meshes.length;j++){let C=V.meshes[j].material,Ee=O.colorMode==="Multi"?Y[Math.min(Y.length-1,Math.floor(V.colorRoll*Y.length))]:Y[0];C.color.copy(Ee),C.roughness=Q,C.metalness=.02+he*.08,C.clearcoat=he,C.clearcoatRoughness=Math.max(.15,.4-he*.25),C.sheen=.5+he*.5,C.sheenColor.copy(Ee),C.sheenRoughness=Math.max(.2,.5-he*.3),C.reflectivity=.1+he*.4,C.ior=1.45+he*.05,C.transparent=oe>0,C.opacity=1-oe*.6,C.transmission=oe*.95,C.thickness=Ne*1.5,C.needsUpdate=!0}},[]),de=sm.useCallback(()=>{let O=ee.current,ie=R.current,Y=k.current&&O.length>0;for(let Q=0;Q<ie.length;Q++){let he=ie[Q],oe=Y?O[Q%O.length]:null;for(let Ne of he.meshes){let V=Ne.material;if(!oe){cC(V);continue}let[j,C]=rC(oe.aspect,oe.fit),Ee=oe.fit==="Cover",ne=Ee?oe.offsetX/100*j:0,ve=Ee?oe.offsetY/100*C:0,ae=V.userData.decal;ae?(ae.uDecalMap.value=oe.texture,ae.uDecalHalf.value.set(j,C),ae.uDecalOffset.value.set(ne,ve)):lC(V,{uDecalMap:{value:oe.texture},uDecalHalf:{value:new pe(j,C)},uDecalOffset:{value:new pe(ne,ve)}})}oe?he.spin!==0&&(he.spin=0,he.quat.identity()):he.spin===0&&(he.spin=he.baseSpin)}},[]);(0,Tt.useEffect)(()=>{let O=T.current;if(!O)return;let ie=new Yc,Y=new en(Wb,1,.1,1e3);Y.position.set(0,0,Gb);let Q=new Xc({antialias:!0,alpha:!0});Q.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Q.setClearColor(0,0),Q.toneMapping=Hp,Q.toneMappingExposure=Xb,Q.outputColorSpace=Qt,Q.shadowMap.enabled=!0,Q.shadowMap.type=Vp,Q.domElement.style.display="block",O.appendChild(Q.domElement);let he=new ru(16777215,16777215,1.2);ie.add(he);let oe=new so(16777215,1.4);oe.castShadow=!0,oe.shadow.mapSize.width=Uy,oe.shadow.mapSize.height=Uy,oe.shadow.camera.near=.5,oe.shadow.camera.far=150,oe.shadow.bias=-5e-4,oe.shadow.normalBias=.05,oe.shadow.radius=4,ie.add(oe);let Ne=new so(16777215,.4);ie.add(Ne);let V=new so(16777215,.6);ie.add(V);let j={scene:ie,camera:Y,renderer:Q,hemi:he,key:oe,fill:Ne,rim:V};b.current=j;let C=!0,Ee=new IntersectionObserver(L=>{for(let re of L)C=re.isIntersecting},{threshold:0});Ee.observe(O);let ne=()=>{let L=O.clientWidth||O.offsetWidth,re=O.clientHeight||O.offsetHeight;!L||!re||(Y.aspect=L/re,Y.updateProjectionMatrix(),Q.setSize(L,re))},ve=new ResizeObserver(ne);ve.observe(O),ne();let ae=new pe,Re=new D(0,0,Pa),we=new $n(new D(0,0,1),0),A=new su,M=L=>{let re=O.getBoundingClientRect();if(!(!re.width||!re.height)){if(L.clientX<re.left||L.clientX>re.right||L.clientY<re.top||L.clientY>re.bottom){Re.set(0,0,Pa);return}ae.x=(L.clientX-re.left)/re.width*2-1,ae.y=-((L.clientY-re.top)/re.height)*2+1,A.setFromCamera(ae,Y),A.ray.intersectPlane(we,Re)||Re.set(0,0,Pa)}},F=()=>Re.set(0,0,Pa),Z=()=>F();O.addEventListener("pointermove",M,{passive:!0}),O.addEventListener("pointerleave",Z),window.addEventListener("blur",F);let te=0,J=()=>{te=-((O.getBoundingClientRect().top+O.offsetHeight/2-window.innerHeight/2)*.015*(H.current.parallax/100))};window.addEventListener("scroll",J,{passive:!0}),J();let Ce=new D,me=new D,xe=new D,ke=new D,ue=new D,Ae=new jn,Fe=0,Oe=()=>{let L=H.current,re=R.current,G=re.length,K=L.dotSize/100,Se=Math.max(.01,L.spreadX/100),_e=Math.max(.01,L.spreadY/100),He=L.mouseForce/100*10*Jb,ct=.3+L.bounciness/100*.7;Ce.set(0,L.gravityAnchor==="Bottom"?-15:L.gravityAnchor==="Top"?15:0,0);let gt=Math.round(20+15*Math.max(Se,_e));if(gt!==Fe){Fe=gt;let Ge=oe.shadow.camera;Ge.left=-gt,Ge.right=gt,Ge.top=gt,Ge.bottom=-gt,Ge.updateProjectionMatrix()}for(let Ge=0;Ge<G;Ge++){let je=re[Ge];if(je.radius=K*je.jitter,me.copy(Ce).sub(je.pos),me.x/=Se,me.y/=_e,je.vel.addScaledVector(me,Zb),Re.z!==Pa){let Mt=je.pos.distanceTo(Re);Mt<Ly&&(xe.copy(je.pos).sub(Re),xe.lengthSq()<1e-8&&xe.set(0,1,0),xe.normalize(),je.vel.addScaledVector(xe,(Ly-Mt)*He))}je.vel.length()>Dy&&je.vel.setLength(Dy),je.vel.multiplyScalar($b),je.pos.add(je.vel),Ae.setFromAxisAngle(je.axis,je.spin),je.quat.multiply(Ae)}for(let Ge=0;Ge<Kb;Ge++)for(let je=0;je<G;je++){let Mt=re[je];for(let Kr=je+1;Kr<G;Kr++){let En=re[Kr],fn=Mt.radius+En.radius;if(Math.abs(Mt.pos.x-En.pos.x)>fn||Math.abs(Mt.pos.y-En.pos.y)>fn||Math.abs(Mt.pos.z-En.pos.z)>fn)continue;let jr=Mt.pos.distanceTo(En.pos);if(jr>=fn)continue;ke.copy(Mt.pos).sub(En.pos),ke.lengthSq()<1e-8&&ke.set(1,0,0),ke.normalize();let uo=(fn-jr)*.5;Mt.pos.addScaledVector(ke,uo),En.pos.addScaledVector(ke,-uo),ue.copy(Mt.vel).sub(En.vel);let Qr=ue.dot(ke);Qr<0&&(Mt.vel.addScaledVector(ke,-Qr*ct),En.vel.addScaledVector(ke,Qr*ct))}}Y.position.y+=(te-Y.position.y)*.05};w.current=Oe;let Te=0,qe=typeof performance<"u"?performance.now():Date.now(),Be=0,nt=()=>{Te=requestAnimationFrame(nt);let L=typeof performance<"u"?performance.now():Date.now(),re=(L-qe)/1e3;if(qe=L,!C)return;re>.25&&(re=.25),Be+=re;let G=0;for(;Be>=Qp&&G<Qb;)Oe(),Be-=Qp,G++;Be>=Qp&&(Be=0);for(let K of R.current)K.root.position.copy(K.pos),K.root.quaternion.copy(K.quat),K.root.scale.setScalar(K.radius);Q.render(ie,Y)};return Te=requestAnimationFrame(nt),()=>{cancelAnimationFrame(Te),Ee.disconnect(),ve.disconnect(),O.removeEventListener("pointermove",M),O.removeEventListener("pointerleave",Z),window.removeEventListener("blur",F),window.removeEventListener("scroll",J),w.current=null,nm(ie,R.current),R.current=[],tm(S.current),S.current=[],ie.clear(),Q.dispose(),Q.domElement.parentNode===O&&O.removeChild(Q.domElement),b.current=null}},[]);let ye=JSON.stringify(P.svgLogos??[]);(0,Tt.useEffect)(()=>{let O=!1,ie=JSON.parse(ye);return(async()=>{let Q=[];ie.length>0&&(Q=(await Promise.all(ie.map(Ne=>mC(Ne).catch(()=>null)))).filter(Ne=>Ne!==null));let he=Q.length===0;if(he){let oe=new Qc(1,Ny,Ny);Q=[{root:new un(oe),geometries:[oe]}]}if(O){tm(Q);return}tm(S.current),S.current=Q,k.current=he,q(oe=>oe+1)})(),()=>{O=!0}},[ye,g]);let Ue=g==="Images"?u.map(O=>em(O.image)).filter(Boolean):[],Ze=JSON.stringify(Ue);(0,Tt.useEffect)(()=>{let O=JSON.parse(Ze),ie=W.current,Y=new Set(O);for(let[V,j]of Array.from(ie.entries()))Y.has(V)||(j.dispose(),ie.delete(V));let Q=O.filter(V=>!ie.has(V));if(Q.length===0){se(V=>V+1);return}let he=!1,oe=new nu;oe.setCrossOrigin("anonymous");let Ne=b.current?.renderer.capabilities.getMaxAnisotropy?.()??1;return Promise.all(Q.map(V=>new Promise(j=>{oe.load(V,C=>j([V,C]),void 0,()=>j([V,null]))}))).then(V=>{if(he){for(let[,j]of V)j?.dispose();return}for(let[j,C]of V)C&&(C.colorSpace=Qt,C.wrapS=li,C.wrapT=li,C.anisotropy=Math.min(8,Ne),C.needsUpdate=!0,ie.set(j,C));se(j=>j+1)}),()=>{he=!0}},[Ze,g]);let $=JSON.stringify((g==="Images"?u:[]).filter(O=>em(O.image)).map(O=>[em(O.image),O.fit==="Contain"?"Contain":"Cover",Math.round(O.offsetX??0),Math.round(O.offsetY??0)]));return(0,Tt.useEffect)(()=>{let O=JSON.parse($),ie=W.current,Y=[];for(let[Q,he,oe,Ne]of O){let V=ie.get(Q);if(!V)continue;let j=V.image;Y.push({texture:V,aspect:(j?.width||1)/(j?.height||1),fit:he,offsetX:oe,offsetY:Ne})}ee.current=Y,de()},[$,X,I,de,g]),(0,Tt.useEffect)(()=>{let O=W.current;return()=>{for(let ie of O.values())ie.dispose();O.clear(),ee.current=[]}},[]),(0,Tt.useEffect)(()=>{let O=b.current,ie=S.current;if(!O||ie.length===0)return;let Y=Math.max(1,Math.round(l)),Q=[];for(let oe=0;oe<Y;oe++){let V=ie[Math.floor(Math.random()*ie.length)].root.clone(!0),j=[],C=[];V.traverse(ve=>{let ae=ve;if(!ae.isMesh)return;ae.castShadow=!0,ae.receiveShadow=!0,ae.material=new eu({side:Zn}),j.push(ae);let Re=ae.userData?.srcColor;C.push(typeof Re=="string"?new Ve(Re):null)});let Ee=1+(Math.random()-.5)*qb,ne=(Math.random()-.5)*.01;Q.push({root:V,meshes:j,srcColors:C,pos:new D((Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*10),vel:new D,quat:new jn().setFromEuler(new Nn(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)),axis:new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),spin:ne,baseSpin:ne,jitter:Ee,radius:H.current.dotSize/100*Ee,colorRoll:Math.random()}),O.scene.add(V)}nm(O.scene,R.current),R.current=Q,ce(),de();let he=w.current;if(he)for(let oe=0;oe<jb;oe++)he();return()=>{let oe=b.current;oe&&nm(oe.scene,Q),R.current===Q&&(R.current=[])}},[l,I,ce,de]),(0,Tt.useEffect)(()=>{let O=b.current;if(!O)return;let{hemi:ie,key:Y,fill:Q,rim:he}=O,oe={h:0,s:0,l:0};new Ve(i).getHSL(oe);let Ne=new Ve().setHSL(oe.h,1,Math.max(.5,oe.l*.8));switch(ie.color.copy(Ne),ie.groundColor.copy(Ne).multiplyScalar(.7),Y.color.setHex(16777215),Q.color.setHex(16777215),he.color.setHex(16777215),h){case"Bright Professional":ie.intensity=1.2,Y.intensity=1.5,Y.position.set(10,30,20),Q.intensity=.5,Q.position.set(-15,0,15),he.intensity=.4,he.position.set(0,-10,-20);break;case"Neutral Flat":ie.intensity=1.5,Y.intensity=.8,Y.position.set(0,0,10),Q.intensity=.3,Q.position.set(0,0,-10),he.intensity=0,he.position.set(0,20,-20);break;case"Cinematic Drama":ie.intensity=.8,Y.intensity=2,Y.position.set(-20,20,10),Q.intensity=.3,Q.position.set(20,-10,10),he.intensity=1.2,he.color.setHex(11184895),he.position.set(0,10,-30);break;case"Neon Cyberpunk":ie.intensity=.8,ie.color.setHex(8959),Y.intensity=1.8,Y.color.setHex(16711765),Y.position.set(15,10,10),Q.intensity=.6,Q.color.setHex(56814),Q.position.set(-15,-10,15),he.intensity=1.5,he.color.setHex(11141375),he.position.set(0,20,-20);break;case"Sunset Warmth":ie.intensity=1,ie.color.setHex(16755285),Y.intensity=1.8,Y.color.setHex(16768426),Y.position.set(20,5,20),Q.intensity=.4,Q.color.setHex(5579349),Q.position.set(-20,10,-10),he.intensity=.8,he.color.setHex(16733474),he.position.set(0,15,-20);break;case"Soft Studio":default:ie.intensity=1.2,Y.intensity=1.3,Y.color.setHex(16775669),Y.position.set(15,20,20),Q.intensity=.4,Q.color.setHex(15792127),Q.position.set(-15,-10,15),he.intensity=.6,he.position.set(0,20,-20);break}},[h,i]),(0,Tt.useEffect)(()=>{ce()},[ce,i,r,s,o,a,c,_.roughness,_.gloss,_.transparency,P.useOriginalSvgColors]),(0,am.jsx)("div",{ref:T,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",backgroundColor:n,...e}})}Cy(du,{sourceMode:{type:rt.Enum,title:"Content",options:["Images","Colors"],optionTitles:["Images","Colors"],defaultValue:"Images"},images:{type:rt.Array,title:"Images",hidden:t=>t.sourceMode!=="Images",control:{type:rt.Object,controls:{image:{type:rt.Image,title:"Image"},fit:{type:rt.Enum,title:"Fit",options:["Cover","Contain"],optionTitles:["Cover","Contain"],defaultValue:"Cover"},offsetX:{type:rt.Number,title:"X Offset",min:-100,max:100,step:1,unit:"%",defaultValue:0},offsetY:{type:rt.Number,title:"Y Offset",min:-100,max:100,step:1,unit:"%",defaultValue:0}}},defaultValue:Vy,maxCount:20},colorMode:{type:rt.Enum,title:"Color Mode",options:["Single","Multi"],optionTitles:["Single","Multi"],defaultValue:"Single",hidden:t=>t.sourceMode!=="Colors"},balloonColor:{type:rt.Color,title:"Balloon Color",defaultValue:"#FFFFFF",hidden:t=>t.sourceMode!=="Colors"||t.colorMode!=="Single"},balloonColors:{type:rt.Array,title:"Balloon Colors",hidden:t=>t.sourceMode!=="Colors"||t.colorMode!=="Multi",control:{type:rt.Color},defaultValue:["#FFFFFF","#FFD1DC","#BDE0FE","#CDEB8B"],maxCount:12},background:{type:rt.Color,title:"Background",defaultValue:"#000000"},baseColor:{type:rt.Color,title:"Base Color",defaultValue:"#FFFFFF",hidden:t=>t.sourceMode!=="Colors"},density:{type:rt.Number,title:"Density",min:1,max:150,step:1,defaultValue:85},dotSize:{type:rt.Number,title:"Dot Size",min:10,max:300,step:1,unit:"%",defaultValue:120},lighting:{type:rt.Enum,title:"Lighting",options:["Soft Studio","Bright Professional","Neutral Flat","Cinematic Drama","Neon Cyberpunk","Sunset Warmth"],optionTitles:["Soft Studio","Bright Professional","Neutral Flat","Cinematic Drama","Neon Cyberpunk","Sunset Warmth"],defaultValue:"Soft Studio"},field:{type:rt.Object,title:"Field",controls:{spreadX:{type:rt.Number,title:"Spread X",min:10,max:300,step:1,defaultValue:150},spreadY:{type:rt.Number,title:"Spread Y",min:10,max:300,step:1,defaultValue:100}}},material:{type:rt.Object,title:"Material",controls:{roughness:{type:rt.Number,title:"Roughness",min:0,max:100,step:1,unit:"%",defaultValue:100},gloss:{type:rt.Number,title:"Gloss",min:0,max:100,step:1,unit:"%",defaultValue:100},transparency:{type:rt.Number,title:"Transparency",min:0,max:100,step:1,unit:"%",defaultValue:0}}},motion:{type:rt.Object,title:"Motion",controls:{gravityAnchor:{type:rt.Enum,title:"Gravity Anchor",options:["Center","Bottom","Top"],optionTitles:["Center","Bottom","Top"],defaultValue:"Center"},bounciness:{type:rt.Number,title:"Bounciness",min:0,max:100,step:1,unit:"%",defaultValue:100},mouseForce:{type:rt.Number,title:"Mouse Force",min:0,max:100,step:1,unit:"%",defaultValue:100},parallax:{type:rt.Number,title:"Parallax",min:0,max:200,step:1,unit:"%",defaultValue:200}}}});var vC={field:{spreadX:150,spreadY:100},images:[],motion:{parallax:200,bounciness:100,mouseForce:100,gravityAnchor:"Center"},density:85,dotSize:120,lighting:"Soft Studio",material:{gloss:100,roughness:100,transparency:0},baseColor:"#FFFFFF",colorMode:"Multi",background:"#000000",sourceMode:"Images",balloonColor:"#FFFFFF",balloonColors:["#FFFFFF","#FFD1DC","#BDE0FE","#CDEB8B"]};function du(t){return(0,am.jsx)(gC,{...vC,...t})}var Gy=vr(Ra());document.querySelectorAll("[data-spheres]").forEach(t=>{let e=JSON.parse(t.dataset.images||"[]").map(n=>({image:{src:n},fit:"Cover",offsetX:0,offsetY:0}));(0,Hy.createRoot)(t).render((0,Gy.jsx)(du,{style:{width:"100%",height:"100%"},background:t.dataset.fond||"#000000",sourceMode:"Images",images:e,density:Number(t.dataset.densite||85),dotSize:Number(t.dataset.taille||120),colorMode:"Multi",balloonColors:JSON.parse(t.dataset.couleurs||'["#FFFFFF"]'),lighting:"Soft Studio"}))});})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
