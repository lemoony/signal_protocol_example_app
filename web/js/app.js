!function(r,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.appjs=o():r.appjs=o()}(self,(function(){return(()=>{"use strict";var r={63:(r,o)=>{new Uint8Array(16);let t=new Uint8Array(32);function e(r){var o,t=new Float64Array(16);if(r)for(o=0;o<r.length;o++)t[o]=r[o];return t}t[0]=9;e(),e([1]);const n=e([56129,1]);e([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),e([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),e([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),e([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),e([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function f(r){var o,t,e=1;for(o=0;o<16;o++)t=r[o]+e+65535,e=Math.floor(t/65536),r[o]=t-65536*e;r[0]+=e-1+37*(e-1)}function a(r,o,t){for(var e,n=~(t-1),f=0;f<16;f++)e=n&(r[f]^o[f]),r[f]^=e,o[f]^=e}function l(r,o){var t,n,l,i=e(),h=e();for(t=0;t<16;t++)h[t]=o[t];for(f(h),f(h),f(h),n=0;n<2;n++){for(i[0]=h[0]-65517,t=1;t<15;t++)i[t]=h[t]-65535-(i[t-1]>>16&1),i[t-1]&=65535;i[15]=h[15]-32767-(i[14]>>16&1),l=i[15]>>16&1,i[14]&=65535,a(h,i,1-l)}for(t=0;t<16;t++)r[2*t]=255&h[t],r[2*t+1]=h[t]>>8}function i(r,o){var t;for(t=0;t<16;t++)r[t]=o[2*t]+(o[2*t+1]<<8);r[15]&=32767}function h(r,o,t){for(var e=0;e<16;e++)r[e]=o[e]+t[e]}function u(r,o,t){for(var e=0;e<16;e++)r[e]=o[e]-t[e]}function c(r,o,t){var e,n,f=0,a=0,l=0,i=0,h=0,u=0,c=0,M=0,y=0,p=0,v=0,s=0,w=0,g=0,d=0,b=0,A=0,j=0,x=0,U=0,m=0,O=0,S=0,P=0,E=0,F=0,T=0,k=0,K=0,_=0,q=0,z=t[0],B=t[1],C=t[2],D=t[3],G=t[4],H=t[5],I=t[6],J=t[7],L=t[8],N=t[9],Q=t[10],R=t[11],V=t[12],W=t[13],X=t[14],Y=t[15];f+=(e=o[0])*z,a+=e*B,l+=e*C,i+=e*D,h+=e*G,u+=e*H,c+=e*I,M+=e*J,y+=e*L,p+=e*N,v+=e*Q,s+=e*R,w+=e*V,g+=e*W,d+=e*X,b+=e*Y,a+=(e=o[1])*z,l+=e*B,i+=e*C,h+=e*D,u+=e*G,c+=e*H,M+=e*I,y+=e*J,p+=e*L,v+=e*N,s+=e*Q,w+=e*R,g+=e*V,d+=e*W,b+=e*X,A+=e*Y,l+=(e=o[2])*z,i+=e*B,h+=e*C,u+=e*D,c+=e*G,M+=e*H,y+=e*I,p+=e*J,v+=e*L,s+=e*N,w+=e*Q,g+=e*R,d+=e*V,b+=e*W,A+=e*X,j+=e*Y,i+=(e=o[3])*z,h+=e*B,u+=e*C,c+=e*D,M+=e*G,y+=e*H,p+=e*I,v+=e*J,s+=e*L,w+=e*N,g+=e*Q,d+=e*R,b+=e*V,A+=e*W,j+=e*X,x+=e*Y,h+=(e=o[4])*z,u+=e*B,c+=e*C,M+=e*D,y+=e*G,p+=e*H,v+=e*I,s+=e*J,w+=e*L,g+=e*N,d+=e*Q,b+=e*R,A+=e*V,j+=e*W,x+=e*X,U+=e*Y,u+=(e=o[5])*z,c+=e*B,M+=e*C,y+=e*D,p+=e*G,v+=e*H,s+=e*I,w+=e*J,g+=e*L,d+=e*N,b+=e*Q,A+=e*R,j+=e*V,x+=e*W,U+=e*X,m+=e*Y,c+=(e=o[6])*z,M+=e*B,y+=e*C,p+=e*D,v+=e*G,s+=e*H,w+=e*I,g+=e*J,d+=e*L,b+=e*N,A+=e*Q,j+=e*R,x+=e*V,U+=e*W,m+=e*X,O+=e*Y,M+=(e=o[7])*z,y+=e*B,p+=e*C,v+=e*D,s+=e*G,w+=e*H,g+=e*I,d+=e*J,b+=e*L,A+=e*N,j+=e*Q,x+=e*R,U+=e*V,m+=e*W,O+=e*X,S+=e*Y,y+=(e=o[8])*z,p+=e*B,v+=e*C,s+=e*D,w+=e*G,g+=e*H,d+=e*I,b+=e*J,A+=e*L,j+=e*N,x+=e*Q,U+=e*R,m+=e*V,O+=e*W,S+=e*X,P+=e*Y,p+=(e=o[9])*z,v+=e*B,s+=e*C,w+=e*D,g+=e*G,d+=e*H,b+=e*I,A+=e*J,j+=e*L,x+=e*N,U+=e*Q,m+=e*R,O+=e*V,S+=e*W,P+=e*X,E+=e*Y,v+=(e=o[10])*z,s+=e*B,w+=e*C,g+=e*D,d+=e*G,b+=e*H,A+=e*I,j+=e*J,x+=e*L,U+=e*N,m+=e*Q,O+=e*R,S+=e*V,P+=e*W,E+=e*X,F+=e*Y,s+=(e=o[11])*z,w+=e*B,g+=e*C,d+=e*D,b+=e*G,A+=e*H,j+=e*I,x+=e*J,U+=e*L,m+=e*N,O+=e*Q,S+=e*R,P+=e*V,E+=e*W,F+=e*X,T+=e*Y,w+=(e=o[12])*z,g+=e*B,d+=e*C,b+=e*D,A+=e*G,j+=e*H,x+=e*I,U+=e*J,m+=e*L,O+=e*N,S+=e*Q,P+=e*R,E+=e*V,F+=e*W,T+=e*X,k+=e*Y,g+=(e=o[13])*z,d+=e*B,b+=e*C,A+=e*D,j+=e*G,x+=e*H,U+=e*I,m+=e*J,O+=e*L,S+=e*N,P+=e*Q,E+=e*R,F+=e*V,T+=e*W,k+=e*X,K+=e*Y,d+=(e=o[14])*z,b+=e*B,A+=e*C,j+=e*D,x+=e*G,U+=e*H,m+=e*I,O+=e*J,S+=e*L,P+=e*N,E+=e*Q,F+=e*R,T+=e*V,k+=e*W,K+=e*X,_+=e*Y,b+=(e=o[15])*z,a+=38*(j+=e*C),l+=38*(x+=e*D),i+=38*(U+=e*G),h+=38*(m+=e*H),u+=38*(O+=e*I),c+=38*(S+=e*J),M+=38*(P+=e*L),y+=38*(E+=e*N),p+=38*(F+=e*Q),v+=38*(T+=e*R),s+=38*(k+=e*V),w+=38*(K+=e*W),g+=38*(_+=e*X),d+=38*(q+=e*Y),f=(e=(f+=38*(A+=e*B))+(n=1)+65535)-65536*(n=Math.floor(e/65536)),a=(e=a+n+65535)-65536*(n=Math.floor(e/65536)),l=(e=l+n+65535)-65536*(n=Math.floor(e/65536)),i=(e=i+n+65535)-65536*(n=Math.floor(e/65536)),h=(e=h+n+65535)-65536*(n=Math.floor(e/65536)),u=(e=u+n+65535)-65536*(n=Math.floor(e/65536)),c=(e=c+n+65535)-65536*(n=Math.floor(e/65536)),M=(e=M+n+65535)-65536*(n=Math.floor(e/65536)),y=(e=y+n+65535)-65536*(n=Math.floor(e/65536)),p=(e=p+n+65535)-65536*(n=Math.floor(e/65536)),v=(e=v+n+65535)-65536*(n=Math.floor(e/65536)),s=(e=s+n+65535)-65536*(n=Math.floor(e/65536)),w=(e=w+n+65535)-65536*(n=Math.floor(e/65536)),g=(e=g+n+65535)-65536*(n=Math.floor(e/65536)),d=(e=d+n+65535)-65536*(n=Math.floor(e/65536)),b=(e=b+n+65535)-65536*(n=Math.floor(e/65536)),f=(e=(f+=n-1+37*(n-1))+(n=1)+65535)-65536*(n=Math.floor(e/65536)),a=(e=a+n+65535)-65536*(n=Math.floor(e/65536)),l=(e=l+n+65535)-65536*(n=Math.floor(e/65536)),i=(e=i+n+65535)-65536*(n=Math.floor(e/65536)),h=(e=h+n+65535)-65536*(n=Math.floor(e/65536)),u=(e=u+n+65535)-65536*(n=Math.floor(e/65536)),c=(e=c+n+65535)-65536*(n=Math.floor(e/65536)),M=(e=M+n+65535)-65536*(n=Math.floor(e/65536)),y=(e=y+n+65535)-65536*(n=Math.floor(e/65536)),p=(e=p+n+65535)-65536*(n=Math.floor(e/65536)),v=(e=v+n+65535)-65536*(n=Math.floor(e/65536)),s=(e=s+n+65535)-65536*(n=Math.floor(e/65536)),w=(e=w+n+65535)-65536*(n=Math.floor(e/65536)),g=(e=g+n+65535)-65536*(n=Math.floor(e/65536)),d=(e=d+n+65535)-65536*(n=Math.floor(e/65536)),b=(e=b+n+65535)-65536*(n=Math.floor(e/65536)),f+=n-1+37*(n-1),r[0]=f,r[1]=a,r[2]=l,r[3]=i,r[4]=h,r[5]=u,r[6]=c,r[7]=M,r[8]=y,r[9]=p,r[10]=v,r[11]=s,r[12]=w,r[13]=g,r[14]=d,r[15]=b}function M(r,o){c(r,o,o)}function y(r,o){var t,n=e();for(t=0;t<16;t++)n[t]=o[t];for(t=253;t>=0;t--)M(n,n),2!==t&&4!==t&&c(n,n,o);for(t=0;t<16;t++)r[t]=n[t]}function p(r,o,t){var f,p,v=new Uint8Array(32),s=new Float64Array(80),w=e(),g=e(),d=e(),b=e(),A=e(),j=e();for(p=0;p<31;p++)v[p]=o[p];for(v[31]=127&o[31]|64,v[0]&=248,i(s,t),p=0;p<16;p++)g[p]=s[p],b[p]=w[p]=d[p]=0;for(w[0]=b[0]=1,p=254;p>=0;--p)a(w,g,f=v[p>>>3]>>>(7&p)&1),a(d,b,f),h(A,w,d),u(w,w,d),h(d,g,b),u(g,g,b),M(b,A),M(j,w),c(w,d,w),c(d,g,A),h(A,w,d),u(w,w,d),M(g,w),u(d,b,j),c(w,d,n),h(w,w,b),c(d,d,w),c(w,b,j),c(b,g,s),M(g,A),a(w,g,f),a(d,b,f);for(p=0;p<16;p++)s[p+16]=w[p],s[p+32]=d[p],s[p+48]=g[p],s[p+64]=b[p];var x=s.subarray(32),U=s.subarray(16);return y(x,x),c(U,U,x),l(r,U),0}new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function v(...r){var o,t;for(t=0;t<arguments.length;t++)if("[object Uint8Array]"!==(o=Object.prototype.toString.call(arguments[t])))throw new TypeError("unexpected type "+o+", use Uint8Array")}o.gi=function(r,o){if(v(o,r),32!==o.length)throw new Error("wrong public key length");if(32!==r.length)throw new Error("wrong secret key length");var t=new Uint8Array(32);return p(t,r,o),t},o.Au=function(r){if(v(r),32!==r.length)throw new Error("wrong seed length");for(var o=new Uint8Array(32),e=new Uint8Array(32),n=0;n<32;n++)o[n]=r[n];return p(e,o,t),o[0]&=248,o[31]&=127,o[31]|=64,e[31]&=127,{public:e,private:o}}}},o={};function t(e){var n=o[e];if(void 0!==n)return n.exports;var f=o[e]={exports:{}};return r[e](f,f.exports,t),f.exports}t.d=(r,o)=>{for(var e in o)t.o(o,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:o[e]})},t.o=(r,o)=>Object.prototype.hasOwnProperty.call(r,o),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var e={};return(()=>{t.r(e),t.d(e,{generateKeyPair:()=>o,sharedKey:()=>n});var r=t(63);function o(o){return r.Au(o)}function n(o,t){return r.gi(o,t)}})(),e})()}));