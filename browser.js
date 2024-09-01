// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function r(e){return"number"==typeof e}function t(e){var n,r="";for(n=0;n<e;n++)r+="0";return r}function u(e,n,r){var u=!1,i=n-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(u=!0,e=e.substr(1)),e=r?e+t(i):t(i)+e,u&&(e="-"+e)),e}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function a(e){var n,t,a;switch(e.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=e.arg,a=parseInt(t,10),!isFinite(a)){if(!r(t))throw new Error("invalid integer. Value: "+t);a=0}return a<0&&("u"===e.specifier||10!==n)&&(a=4294967295+a+1),a<0?(t=(-a).toString(n),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=a.toString(n),a||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===n&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):i.call(t)),8===n&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,l=String.prototype.toLowerCase,c=String.prototype.toUpperCase,v=String.prototype.replace,s=/e\+(\d)$/,d=/e-(\d)$/,p=/^(\d+)$/,g=/^(\d+)e/,m=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function h(e){var n,t,u=parseFloat(e.arg);if(!isFinite(u)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+t);u=e.arg}switch(e.specifier){case"e":case"E":t=u.toExponential(e.precision);break;case"f":case"F":t=u.toFixed(e.precision);break;case"g":case"G":f(u)<1e-4?((n=e.precision)>0&&(n-=1),t=u.toExponential(n)):t=u.toPrecision(e.precision),e.alternate||(t=v.call(t,w,"$1e"),t=v.call(t,y,"e"),t=v.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,s,"e+0$1"),t=v.call(t,d,"e-0$1"),e.alternate&&(t=v.call(t,p,"$1."),t=v.call(t,g,"$1.e")),u>=0&&e.sign&&(t=e.sign+t),t=e.specifier===c.call(e.specifier)?c.call(t):l.call(t)}function b(e){var n,r="";for(n=0;n<e;n++)r+=" ";return r}var N=String.fromCharCode,x=Array.isArray;function E(e){return e!=e}function T(e){var n={};return n.specifier=e.specifier,n.precision=void 0===e.precision?1:e.precision,n.width=e.width,n.flags=e.flags||"",n.mapping=e.mapping,n}function V(e){var n,r,t,i,o,f,l,c,v,s,d,p,g;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",l=1,c=0;c<e.length;c++)if("string"==typeof(t=e[c]))f+=t;else{if(n=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),r=t.flags,v=0;v<r.length;v++)switch(i=r.charAt(v)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=r.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,E(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=a(t);break;case"s":t.maxWidth=n?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=h(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=u(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,d=t.width,p=t.padRight,g=void 0,(g=d-s.length)<0?s:s=p?s+b(g):b(g)+s)),f+=t.arg||"",l+=1}return f}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var n={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(n.precision="1"),n}function S(e){var n,r,t,u;for(r=[],u=0,t=M.exec(e);t;)(n=e.slice(u,M.lastIndex-t[0].length)).length&&r.push(n),r.push(A(t)),u=M.lastIndex,t=M.exec(e);return(n=e.slice(u)).length&&r.push(n),r}function j(e){var n,r;if("string"!=typeof e)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",e));for(n=[S(e)],r=1;r<arguments.length;r++)n.push(arguments[r]);return V.apply(null,n)}var F,_=Object.prototype,k=_.toString,U=_.__defineGetter__,I=_.__defineSetter__,O=_.__lookupGetter__,P=_.__lookupSetter__;F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?n:function(e,n,r){var t,u,i,o;if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((u="value"in r)&&(O.call(e,n)||P.call(e,n)?(t=e.__proto__,e.__proto__=_,delete e[n],e[n]=r.value,e.__proto__=t):e[n]=r.value),i="get"in r,o="set"in r,u&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&U&&U.call(e,n,r.get),o&&I&&I.call(e,n,r.set),e};var G=F;function L(e,n,r){G(e,n,{configurable:!1,enumerable:!0,writable:!1,value:r})}function $(e,n,r){G(e,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var C=/./;function H(e){return"boolean"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,Z=Object.prototype.hasOwnProperty;function X(e,n){return null!=e&&Z.call(e,n)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",z=B()?function(e){var n,r,t;if(null==e)return R.call(e);r=e[q],n=X(e,q);try{e[q]=void 0}catch(n){return R.call(e)}return t=R.call(e),n?e[q]=r:delete e[q],t}:function(e){return R.call(e)},D=Boolean,J=Boolean.prototype.toString,K=B();function Q(e){return"object"==typeof e&&(e instanceof D||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function ee(e){return H(e)||Q(e)}$(ee,"isPrimitive",H),$(ee,"isObject",Q);var ne="object"==typeof self?self:null,re="object"==typeof window?window:null,te="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!H(e))throw new TypeError(j("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(te)return te;if(ne)return ne;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ue.document&&ue.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;$(ae,"REGEXP",fe);var le=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)};function ce(e){return null!==e&&"object"==typeof e}function ve(e){var n,r,t,u;if(("Object"===(r=z(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(n=fe.exec(t.toString()))return n[1]}return ce(u=e)&&(u._isBuffer||u.constructor&&"function"==typeof u.constructor.isBuffer&&u.constructor.isBuffer(u))?"Buffer":r}$(ce,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(j("invalid argument. Must provide a function. Value: `%s`.",e));return function(n){var r,t;if(!le(n))return!1;if(0===(r=n.length))return!1;for(t=0;t<r;t++)if(!1===e(n[t]))return!1;return!0}}(ce));var se="function"==typeof C||"object"==typeof oe||"function"==typeof ie?function(e){return ve(e).toLowerCase()}:function(e){var n;return null===e?"null":"object"==(n=typeof e)?ve(e).toLowerCase():n};function de(e){return"function"===se(e)}function pe(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)&&de(e.next)}var ge,me="function"==typeof Y&&"symbol"==typeof Y("foo")&&X(Y,"iterator")&&"symbol"==typeof Y.iterator?Symbol.iterator:null,ye="function"==typeof Uint32Array,we="function"==typeof Uint32Array?Uint32Array:null,he="function"==typeof Uint32Array?Uint32Array:void 0;ge=function(){var e,n,r;if("function"!=typeof we)return!1;try{n=new we(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,e=(ye&&r instanceof Uint32Array||"[object Uint32Array]"===z(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){e=!1}return e}()?he:function(){throw new Error("not implemented")};var be,Ne=ge,xe="function"==typeof Float64Array,Ee="function"==typeof Float64Array?Float64Array:null,Te="function"==typeof Float64Array?Float64Array:void 0;be=function(){var e,n,r;if("function"!=typeof Ee)return!1;try{n=new Ee([1,3.14,-3.14,NaN]),r=n,e=(xe&&r instanceof Float64Array||"[object Float64Array]"===z(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){e=!1}return e}()?Te:function(){throw new Error("not implemented")};var Ve,Me=be,Ae="function"==typeof Uint8Array,Se="function"==typeof Uint8Array?Uint8Array:null,je="function"==typeof Uint8Array?Uint8Array:void 0;Ve=function(){var e,n,r;if("function"!=typeof Se)return!1;try{n=new Se(n=[1,3.14,-3.14,256,257]),r=n,e=(Ae&&r instanceof Uint8Array||"[object Uint8Array]"===z(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){e=!1}return e}()?je:function(){throw new Error("not implemented")};var Fe,_e=Ve,ke="function"==typeof Uint16Array,Ue="function"==typeof Uint16Array?Uint16Array:null,Ie="function"==typeof Uint16Array?Uint16Array:void 0;Fe=function(){var e,n,r;if("function"!=typeof Ue)return!1;try{n=new Ue(n=[1,3.14,-3.14,65536,65537]),r=n,e=(ke&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){e=!1}return e}()?Ie:function(){throw new Error("not implemented")};var Oe,Pe={uint16:Fe,uint8:_e};(Oe=new Pe.uint16(1))[0]=4660;var Ge=52===new Pe.uint8(Oe.buffer)[0],Le=!0===Ge?1:0,$e=new Me(1),Ce=new Ne($e.buffer);function He(e){return $e[0]=e,Ce[Le]}var We=!0===Ge?1:0,Be=new Me(1),Re=new Ne(Be.buffer);function Ze(e){return e!=e}var Xe=1023,Ye=Number,qe=Ye.NEGATIVE_INFINITY,ze=.6931471803691238,De=1.9082149292705877e-10,Je=0x40000000000000,Ke=.3333333333333333,Qe=1048575,en=2146435072,nn=1048576,rn=1072693248;function tn(e){var n,r,t,u,i,o,a,f,l,c,v,s;return 0===e?qe:Ze(e)||e<0?NaN:(i=0,(r=He(e))<nn&&(i-=54,r=He(e*=Je)),r>=en?e+e:(i+=(r>>20)-Xe|0,i+=(f=614244+(r&=Qe)&1048576|0)>>20|0,a=(e=function(e,n){return Be[0]=e,Re[We]=n>>>0,Be[0]}(e,r|f^rn))-1,(Qe&2+r)<3?0===a?0===i?0:i*ze+i*De:(o=a*a*(.5-Ke*a),0===i?a-o:i*ze-(o-i*De-a)):(f=r-398458|0,l=440401-r|0,u=(v=(s=(c=a/(2+a))*c)*s)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(v),t=s*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(v),o=t+u,(f|=l)>0?(n=.5*a*a,0===i?a-(n-c*(n+o)):i*ze-(n-(c*(n+o)+i*De)-a)):0===i?a-c*(a-o):i*ze-(c*(a-o)-i*De-a))))}var un=Math.floor,on=Math.ceil;function an(e){return e<0?on(e):un(e)}var fn=Number.POSITIVE_INFINITY,ln=1023,cn=-1023,vn=-1074;function sn(e){return e===fn||e===qe}var dn,pn,gn=2147483648,mn=2147483647;!0===Ge?(dn=1,pn=0):(dn=0,pn=1);var yn,wn,hn={HIGH:dn,LOW:pn},bn=new Me(1),Nn=new Ne(bn.buffer),xn=hn.HIGH,En=hn.LOW;function Tn(e,n,r,t){return bn[0]=e,n[t]=Nn[xn],n[t+r]=Nn[En],n}function Vn(e){return Tn(e,[0,0],1,0)}$(Vn,"assign",Tn),!0===Ge?(yn=1,wn=0):(yn=0,wn=1);var Mn={HIGH:yn,LOW:wn},An=new Me(1),Sn=new Ne(An.buffer),jn=Mn.HIGH,Fn=Mn.LOW;function _n(e,n){return Sn[jn]=e,Sn[Fn]=n,An[0]}var kn=[0,0],Un=22250738585072014e-324;function In(e){return Math.abs(e)}var On=4503599627370496;function Pn(e,n,r,t){return Ze(e)||sn(e)?(n[t]=e,n[t+r]=0,n):0!==e&&In(e)<Un?(n[t]=e*On,n[t+r]=-52,n):(n[t]=e,n[t+r]=0,n)}$((function(e){return Pn(e,[0,0],1,0)}),"assign",Pn);var Gn=2146435072;function Ln(e){var n=He(e);return(n=(n&Gn)>>>20)-Xe|0}var $n=2220446049250313e-31,Cn=2148532223,Hn=[0,0],Wn=[0,0];function Bn(e,n){var r,t,u,i,o,a;return 0===n||0===e||Ze(e)||sn(e)?e:(Pn(e,Hn,1,0),e=Hn[0],n+=Hn[1],(n+=Ln(e))<vn?(u=0,i=e,Vn.assign(u,kn,1,0),o=kn[0],o&=mn,a=He(i),_n(o|=a&=gn,kn[1])):n>ln?e<0?qe:fn:(n<=cn?(n+=52,t=$n):t=1,Vn.assign(e,Wn,1,0),r=Wn[0],r&=Cn,t*_n(r|=n+Xe<<20,Wn[1])))}var Rn=.6931471803691238,Zn=1.9082149292705877e-10,Xn=1.4426950408889634,Yn=709.782712893384,qn=-745.1332191019411,zn=1/(1<<28),Dn=-zn;function Jn(e){var n;return Ze(e)||e===fn?e:e===qe?0:e>Yn?fn:e<qn?0:e>Dn&&e<zn?1+e:function(e,n,r){var t,u,i,o;return Bn(1-(n-(t=e-n)*(i=t-(u=t*t)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-e),r)}(e-(n=an(e<0?Xn*e-.5:Xn*e+.5))*Rn,n*Zn,n)}function Kn(){var e,n;return e=0,n=0,function(r){return 0===arguments.length?0===n?null:e:e+=(r-e)/(n+=1)}}function Qn(e){return 0===e&&1/e===fn}function er(){var e;return function(n){return 0===arguments.length?void 0===e?null:e:((void 0===e||n>e||Ze(n)||n===e&&Qn(n))&&(e=n),e)}}function nr(){var e=er();return function(n){return 0===arguments.length?e():e(In(n))}}function rr(){var e=Kn();return function(n){return 0===arguments.length?e():e(In(n))}}function tr(){var e=Kn();return function(n){return 0===arguments.length?e():e(n*n)}}function ur(){var e,n=qe,r=fn;return function(t){return 0===arguments.length?void 0===e?null:e/2:(Ze(t)&&(r=t,n=t),t>n&&(n=t),t<r&&(r=t),(e=n+r)/2)}}function ir(e){return 0===e&&1/e===qe}function or(){var e;return function(n){return 0===arguments.length?void 0===e?null:e:((void 0===e||n<e||Ze(n)||n===e&&ir(n))&&(e=n),e)}}function ar(){var e=or();return function(n){return 0===arguments.length?e():e(In(n))}}var fr=2148532223,lr=1071644672,cr=[0,0],vr=[0,0];function sr(e,n,r,t){var u,i;return 0===e||Ze(e)||sn(e)?(n[t]=e,n[t+r]=0,n):(Pn(e,cr,1,0),i=Ln(cr[0])+cr[1]+1,Vn.assign(cr[0],vr,1,0),u=vr[0],u&=fr,e=_n(u|=lr,vr[1]),n[t]=e,n[t+r]=i,n)}$((function(e){return sr(e,[0,0],1,0)}),"assign",sr);var dr=[0,0];function pr(){var e,n,r;return e=.5,r=1,function(t){return 0===arguments.length?void 0===n?null:n:(sr(t,dr,1,0),e*=dr[0],r+=dr[1],e>-.5&&e<.5&&(sr(e,dr,1,0),e=dr[0],r+=dr[1]),n=Bn(e,r))}}function gr(){var e,n=qe,r=fn;return function(t){return 0===arguments.length?void 0===e?null:e:(Ze(t)&&(r=t,n=t),t>n&&(n=t),t<r&&(r=t),e=n-r)}}function mr(){var e,n,r,t,u,i,o;return e=0,n=0,t=0,function(a){return 0===arguments.length?r?e+t+n:null:(r=!0,i=e+a,o=In(e)>=In(a)?e-i+a:a-i+e,e=i,i=t+o,u=In(t)>=In(o)?t-i+o:o-i+t,e+(t=i)+(n+=u))}}function yr(){var e,n=0;return function(r){return 0===arguments.length?e?n:null:(e=!0,n+=In(r))}}function wr(){var e,n=0;return function(r){return 0===arguments.length?e?n:null:(e=!0,n+=r*r)}}function hr(e){return"number"==typeof e}var br=Ye.prototype.toString,Nr=B();function xr(e){return"object"==typeof e&&(e instanceof Ye||(Nr?function(e){try{return br.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function Er(e){return hr(e)||xr(e)}function Tr(e){return e<fn&&e>qe&&un(n=e)===n;var n}function Vr(e){return hr(e)&&Tr(e)}function Mr(e){return xr(e)&&Tr(e.valueOf())}function Ar(e){return Vr(e)||Mr(e)}function Sr(e){return Vr(e)&&e>0}function jr(e){return Mr(e)&&e.valueOf()>0}function Fr(e){return Sr(e)||jr(e)}function _r(e){var n,r,t,u;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=new Me(e),r=qe,u=-1,t=0,function(i){var o,a;if(0===arguments.length)return 0===t?null:r;if(u=(u+1)%e,t<e)t+=1,(Ze(i)||i>r||i===r&&Qn(i))&&(r=i);else if(Ze(i)||i>r)r=i;else if(n[u]===r&&i<r||Ze(n[u])){for(r=i,a=0;a<e;a++)if(a!==u){if(Ze(o=n[a])){r=o;break}(o>r||o===r&&Qn(o))&&(r=o)}}else if(n[u]===r&&i===r&&0===i)if(Qn(i))r=i;else if(Qn(n[u]))for(r=i,a=0;a<e;a++)if(a!==u&&Qn(n[a])){r=n[a];break}return n[u]=i,r}}function kr(e){var n,r,t,u,i;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new Me(e),t=0,i=-1,u=0,function(o){var a;if(0===arguments.length)return 0===u?null:t;if(i=(i+1)%e,Ze(o))u=e,t=NaN;else if(u<e)t+=(n=o-t)/(u+=1);else if(Ze(r[i])){for(u=1,t=o,a=0;a<e;a++)if(a!==i){if(Ze(r[a])){u=e,t=NaN;break}u+=1,n=r[a]-t,t+=n/u}}else!1===Ze(t)&&(n=o-r[i],t+=n/e);return r[i]=o,t}}function Ur(e){var n,r,t,u;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=new Me(e),r=fn,u=-1,t=0,function(i){var o,a;if(0===arguments.length)return 0===t?null:r;if(u=(u+1)%e,t<e)t+=1,(Ze(i)||i<r||i===r&&ir(i))&&(r=i);else if(Ze(i)||i<r)r=i;else if(n[u]===r&&i>r||Ze(n[u])){for(r=i,a=0;a<e;a++)if(a!==u){if(Ze(o=n[a])){r=o;break}(o<r||o===r&&ir(o))&&(r=o)}}else if(n[u]===r&&i===r&&0===i)if(ir(i))r=i;else if(ir(n[u]))for(r=i,a=0;a<e;a++)if(a!==u&&ir(n[a])){r=n[a];break}return n[u]=i,r}}function Ir(e,n,r){return sr(r,e,1,0),n.frac*=e[0],n.exp+=e[1],n.frac>-.5&&n.frac<.5&&(sr(n.frac,e,1,0),n.frac=e[0],n.exp+=e[1]),Bn(n.frac,n.exp)}function Or(e){var n,r,t,u;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=new Me(e),r=0,u=-1,t=0,function(i){var o;if(0===arguments.length)return 0===t?null:r;if(u=(u+1)%e,Ze(i))t=e,r=NaN;else if(t<e)t+=1,r+=i;else if(Ze(n[u])){for(t=1,r=i,o=0;o<e;o++)if(o!==u){if(Ze(n[o])){t=e,r=NaN;break}t+=1,r+=n[o]}}else!1===Ze(r)&&(r+=i-n[u]);return n[u]=i,r}}$(Er,"isPrimitive",hr),$(Er,"isObject",xr),$(Ar,"isPrimitive",Vr),$(Ar,"isObject",Mr),$(Fr,"isPrimitive",Sr),$(Fr,"isObject",jr);var Pr=Math.sqrt;function Gr(e){var n,r,t,u;if(t=0,u=0,arguments.length){if(!hr(e))throw new TypeError(j("invalid argument. Must provide a number. Value: `%s`.",e));return r=e,function(e){return 0===arguments.length?0===u?null:Pr(t/u):Pr((t+=(n=e-r)*n)/(u+=1))}}return r=0,function(e){return 0===arguments.length?0===u?null:1===u?Ze(t)?NaN:0:Pr(t/(u-1)):(t+=(n=e-r)*(e-(r+=n/(u+=1))),u<2?Ze(t)?NaN:0:Pr(t/(u-1)))}}function Lr(e){var n,r,t,u;if(t=0,u=0,arguments.length){if(!hr(e))throw new TypeError(j("invalid argument. Must provide a number. Value: `%s`.",e));return r=e,function(e){return 0===arguments.length?0===u?null:t/u:(t+=(n=e-r)*n)/(u+=1)}}return r=0,function(e){return 0===arguments.length?0===u?null:1===u?Ze(t)?NaN:0:t/(u-1):(t+=(n=e-r)*(e-(r+=n/(u+=1))),u<2?Ze(t)?NaN:0:t/(u-1))}}var $r={};return L($r,"itercugmean",(function e(n){var r,t,u,i,o,a;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return i=0,o=0,a=1,u=function(e){return 0===arguments.length?0===o?null:a:(o+=1,i+=tn(e),a=Jn(i/o))},$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercuhmean",(function e(n){var r,t,u,i,o;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return o=Kn(),u=function(e){return 0===arguments.length?void 0===i?null:i:i=1/o(1/e)},$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercumax",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=er(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercumaxabs",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=nr(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercumean",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=Kn(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercumeanabs",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=rr(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercumeanabs2",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=tr(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercumidrange",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=ur(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercumin",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=or(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercuminabs",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=ar(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercuprod",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=pr(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercurange",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=gr(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercusum",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=mr(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercusumabs",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=yr(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itercusumabs2",(function e(n){var r,t,u;if(!pe(n))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",n));return u=wr(),$(r={},"next",(function(){var e;return t?{done:!0}:(e=n.next()).done?(t=!0,e):{value:e="number"==typeof e.value?u(e.value):u(NaN),done:!1}})),$(r,"return",(function(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(r,me,(function(){return e(n[me]())})),r})),L($r,"itermax",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=er();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itermaxabs",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=nr();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itermean",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=Kn();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itermeanabs",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=rr();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itermeanabs2",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=tr();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itermidrange",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=ur();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itermin",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=or();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"iterminabs",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=ar();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itermmax",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=_r(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermmaxabs",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=_r(e),function(e){return 0===arguments.length?n():n(In(e))}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermmean",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=kr(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermmeanabs",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=kr(e),function(e){return 0===arguments.length?n():n(In(e))}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermmeanabs2",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=kr(e),function(e){return 0===arguments.length?n():n(e*e)}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermmidrange",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n,r,t,u,i;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=new Me(e),r=fn,t=qe,i=-1,u=0,function(o){var a,f;if(0===arguments.length)return 0===u?null:(t+r)/2;if(i=(i+1)%e,0===o&&(o=0),Ze(o))u=e,r=o,t=o;else if(u<e)u+=1,o<r&&(r=o),o>t&&(t=o);else if(n[i]===r&&o>r||n[i]===t&&o<t||Ze(n[i])){for(r=o,t=o,f=0;f<e;f++)if(f!==i){if(Ze(a=n[f])){r=a,t=a;break}a<r&&(r=a),a>t&&(t=a)}}else o<r?r=o:o>t&&(t=o);return n[i]=o,(t+r)/2}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermmin",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=Ur(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermminabs",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=Ur(e),function(e){return 0===arguments.length?n():n(In(e))}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermprod",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n,r,t,u,i,o;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return t=new Me(e),o=-1,i=0,n=[0,0],r=1,(u={}).frac=.5,u.exp=1,function(a){var f,l;if(0===arguments.length)return 0===i?null:r;if(o=(o+1)%e,Ze(a))i=e,r=NaN;else if(i<e)i+=1,r=Ir(n,u,a);else if(0===t[o]||Ze(t[o])||sn(t[o])){for(i=1,u.frac=.5,u.exp=1,Ir(n,u,a),f=0;f<e;f++)if(f!==o){if(Ze(l=t[f])){i=e,r=NaN;break}i+=1,r=Ir(n,u,l)}}else!1===Ze(r)&&(l=a/t[o],r=Ir(n,u,l));return t[o]=a,r}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermrange",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n,r,t,u,i;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=new Me(e),r=fn,t=qe,i=-1,u=0,function(o){var a,f;if(0===arguments.length)return 0===u?null:t-r;if(i=(i+1)%e,0===o&&(o=0),Ze(o))u=e,r=o,t=o;else if(u<e)u+=1,o<r&&(r=o),o>t&&(t=o);else if(n[i]===r&&o>r||n[i]===t&&o<t||Ze(n[i])){for(r=o,t=o,f=0;f<e;f++)if(f!==i){if(Ze(a=n[f])){r=a,t=a;break}a<r&&(r=a),a>t&&(t=a)}}else o<r?r=o:o>t&&(t=o);return n[i]=o,t-r}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermsum",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=Or(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermsumabs",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=Or(e),function(e){return 0===arguments.length?n():n(In(e))}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"itermsumabs2",(function e(n,r){var t,u,i;if(!pe(n))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(!Sr(r))throw new TypeError(j("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));return i=function(e){var n;if(!Sr(e))throw new TypeError(j("invalid argument. Must provide a positive integer. Value: `%s`.",e));return n=Or(e),function(e){return 0===arguments.length?n():n(e*e)}}(r),$(t={},"next",(function(){var e;return u?{done:!0}:(e=n.next()).done?(u=!0,{done:!0}):{value:e="number"==typeof e.value?i(e.value):i(NaN),done:!1}})),$(t,"return",(function(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}})),me&&de(n[me])&&$(t,me,(function(){return e(n[me](),r)})),t})),L($r,"iterprod",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=pr();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"iterrange",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=gr();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"iterstdev",(function(e,n){var r,t;if(!pe(e))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",e));if(arguments.length>1){if(!hr(n))throw new TypeError(j("invalid argument. Second argument must be a number. Value: `%s`.",n));r=Gr(n)}else r=Gr();for(;!(t=e.next()).done;)"number"==typeof t.value?r(t.value):r(NaN);return r()})),L($r,"itersum",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=mr();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itersumabs",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=yr();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itersumabs2",(function(e){var n,r;if(!pe(e))throw new TypeError(j("invalid argument. Must provide an iterator. Value: `%s`.",e));for(n=wr();!(r=e.next()).done;)"number"==typeof r.value?n(r.value):n(NaN);return n()})),L($r,"itervariance",(function(e,n){var r,t;if(!pe(e))throw new TypeError(j("invalid argument. First argument must be an iterator. Value: `%s`.",e));if(arguments.length>1){if(!hr(n))throw new TypeError(j("invalid argument. Second argument must be a number. Value: `%s`.",n));r=Lr(n)}else r=Lr();for(;!(t=e.next()).done;)"number"==typeof t.value?r(t.value):r(NaN);return r()})),$r},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=n();
//# sourceMappingURL=browser.js.map
