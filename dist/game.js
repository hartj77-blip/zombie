(()=>{var bh="170";var ep=0,mu=1,ip=2;var Vf=1,Sh=2,sn=3,Vi=0,Je=1,bi=2,Hi=0,Cn=1,oi=2,gu=3,xu=4,np=5,Jn=100,sp=101,rp=102,ap=103,op=104,lp=200,cp=201,hp=202,up=203,$l=204,Zl=205,fp=206,dp=207,pp=208,mp=209,gp=210,xp=211,yp=212,_p=213,vp=214,Jl=0,Kl=1,Ql=2,Fs=3,jl=4,tc=5,ec=6,ic=7,Gf=0,Mp=1,bp=2,Pn=0,wh=1,Eh=2,Th=3,Jr=4,Sp=5,Ah=6,Rh=7,yu="attached",wp="detached",Wf=300,ks=301,Os=302,nc=303,sc=304,Io=306,Dr=1e3,Qn=1001,rc=1002,ai=1003,Ep=1004;var ha=1005;var Si=1006,ul=1007;var an=1008;var cn=1009,Xf=1010,qf=1011,Lr=1012,Ch=1013,jn=1014,Li=1015,xi=1016,Ph=1017,Ih=1018,Bs=1020,Yf=35902,$f=1021,Zf=1022,wi=1023,Jf=1024,Kf=1025,Ls=1026,zs=1027,Dh=1028,Lh=1029,Qf=1030,Uh=1031;var Nh=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,ac=35840,oc=35841,lc=35842,cc=35843,hc=36196,uc=37492,fc=37496,dc=37808,pc=37809,mc=37810,gc=37811,xc=37812,yc=37813,_c=37814,vc=37815,Mc=37816,bc=37817,Sc=37818,wc=37819,Ec=37820,Tc=37821,$a=36492,Ac=36494,Rc=36495,jf=36283,Cc=36284,Pc=36285,Ic=36286;var Za=2300,Dc=2301,fl=2302,_u=2400,vu=2401,Mu=2402;var Tp=3200,Ap=3201;var td=0,Rp=1,An="",ui="srgb",Zs="srgb-linear",Do="linear",me="srgb";var fs=7680;var bu=519,Cp=512,Pp=513,Ip=514,ed=515,Dp=516,Lp=517,Up=518,Np=519,Lc=35044,Js=35048;var Su="300 es",on=2e3,Ja=2001,In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=1234567,Tr=Math.PI/180,Hs=180/Math.PI;function Ui(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[s&255]+ei[s>>8&255]+ei[s>>16&255]+ei[s>>24&255]+"-"+ei[t&255]+ei[t>>8&255]+"-"+ei[t>>16&15|64]+ei[t>>24&255]+"-"+ei[e&63|128]+ei[e>>8&255]+"-"+ei[e>>16&255]+ei[e>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function Ze(s,t,e){return Math.max(t,Math.min(e,s))}function Fh(s,t){return(s%t+t)%t}function Fp(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function kp(s,t,e){return s!==t?(e-s)/(t-s):0}function Ar(s,t,e){return(1-e)*s+e*t}function Op(s,t,e,i){return Ar(s,t,1-Math.exp(-e*i))}function Bp(s,t=1){return t-Math.abs(Fh(s,t*2)-t)}function zp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Hp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Vp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Gp(s,t){return s+Math.random()*(t-s)}function Wp(s){return s*(.5-Math.random())}function Xp(s){s!==void 0&&(wu=s);let t=wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qp(s){return s*Tr}function Yp(s){return s*Hs}function $p(s){return(s&s-1)===0&&s!==0}function Zp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kp(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),m=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Di(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _e(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Kr={DEG2RAD:Tr,RAD2DEG:Hs,generateUUID:Ui,clamp:Ze,euclideanModulo:Fh,mapLinear:Fp,inverseLerp:kp,lerp:Ar,damp:Op,pingpong:Bp,smoothstep:zp,smootherstep:Hp,randInt:Vp,randFloat:Gp,randFloatSpread:Wp,seededRandom:Xp,degToRad:qp,radToDeg:Yp,isPowerOfTwo:$p,ceilPowerOfTwo:Zp,floorPowerOfTwo:Jp,setQuaternionFromProperEuler:Kp,normalize:_e,denormalize:Di},et=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class s{constructor(t,e,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],x=n[0],g=n[3],p=n[6],_=n[1],v=n[4],y=n[7],P=n[2],A=n[5],I=n[8];return r[0]=a*x+o*_+l*P,r[3]=a*g+o*v+l*A,r[6]=a*p+o*y+l*I,r[1]=c*x+h*_+u*P,r[4]=c*g+h*v+u*A,r[7]=c*p+h*y+u*I,r[2]=f*x+d*_+m*P,r[5]=f*g+d*v+m*A,r[8]=f*p+d*y+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=e*u+i*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(dl.makeScale(t,e)),this}rotate(t){return this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},dl=new Yt;function id(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ka(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qp(){let s=Ka("canvas");return s.style.display="block",s}var Eu={};function wr(s){s in Eu||(Eu[s]=!0,console.warn(s))}function jp(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function t0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function e0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?Do:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Tu=[.64,.33,.3,.6,.15,.06],Au=[.2126,.7152,.0722],Ru=[.3127,.329],Cu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Zs]:{primaries:Tu,whitePoint:Ru,transfer:Do,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:Au,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:Tu,whitePoint:Ru,transfer:me,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:Au,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}});var ds,Uc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Ka("canvas")),ds.width=t.width,ds.height=t.height;let i=ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ka("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},i0=0,Qa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(pl(n[a].image)):r.push(pl(n[a]))}else r=pl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function pl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var n0=0,fi=class s extends In{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Qn,n=Qn,r=Si,a=an,o=wi,l=cn,c=s.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ui(),this.name="",this.source=new Qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=Wf;fi.DEFAULT_ANISOTROPY=1;var ce=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,P=(p+1)/2,A=(h+f)/4,I=(u+x)/4,R=(m+g)/4;return v>y&&v>P?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=A/i,r=I/i):y>P?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):P<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(P),i=I/r,n=R/r),this.set(i,n,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nc=class extends In{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new fi(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends Nc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ja=class extends fi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ai,this.minFilter=ai,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fc=class extends fi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ai,this.minFilter=ai,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-o,p=l*f+c*d+h*m+u*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),A=Math.atan2(P,p*_);g=Math.sin(g*A)/P,o=Math.sin(o*A)/P}let y=o*_;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+x*y,g===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),f=l(i/2),d=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new E,Iu=new Ge,Ei=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),fa.subVectors(this.max,dr),ps.subVectors(t.a,dr),ms.subVectors(t.b,dr),gs.subVectors(t.c,dr),Mn.subVectors(ms,ps),bn.subVectors(gs,ms),Gn.subVectors(ps,gs);let e=[0,-Mn.z,Mn.y,0,-bn.z,bn.y,0,-Gn.z,Gn.y,Mn.z,0,-Mn.x,bn.z,0,-bn.x,Gn.z,0,-Gn.x,-Mn.y,Mn.x,0,-bn.y,bn.x,0,-Gn.y,Gn.x,0];return!gl(e,ps,ms,gs,fa)||(e=[1,0,0,0,1,0,0,0,1],!gl(e,ps,ms,gs,fa))?!1:(da.crossVectors(Mn,bn),e=[da.x,da.y,da.z],gl(e,ps,ms,gs,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qi=[new E,new E,new E,new E,new E,new E,new E,new E],Ci=new E,ua=new Ei,ps=new E,ms=new E,gs=new E,Mn=new E,bn=new E,Gn=new E,dr=new E,fa=new E,da=new E,Wn=new E;function gl(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Wn.fromArray(s,r);let o=n.x*Math.abs(Wn.x)+n.y*Math.abs(Wn.y)+n.z*Math.abs(Wn.z),l=t.dot(Wn),c=e.dot(Wn),h=i.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var s0=new Ei,pr=new E,xl=new E,Ni=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):s0.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(pr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(xl)),this.expandByPoint(pr.copy(t.center).sub(xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new E,yl=new E,pa=new E,Sn=new E,_l=new E,ma=new E,vl=new E,ts=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){yl.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(yl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(pa),o=Sn.dot(this.direction),l=-Sn.dot(pa),c=Sn.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(yl).addScaledVector(pa,f),d}intersectSphere(t,e){ji.subVectors(t.center,this.origin);let i=ji.dot(this.direction),n=ji.dot(ji)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,i,n,r){_l.subVectors(e,t),ma.subVectors(i,t),vl.crossVectors(_l,ma);let a=this.direction.dot(vl),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);let l=o*this.direction.dot(ma.crossVectors(Sn,ma));if(l<0)return null;let c=o*this.direction.dot(_l.cross(Sn));if(c<0||l+c>a)return null;let h=-o*Sn.dot(vl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class s{constructor(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g)}set(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(r0,t,a0)}lookAt(t,e,i){let n=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),wn.crossVectors(i,mi),wn.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),wn.crossVectors(i,mi)),wn.normalize(),ga.crossVectors(mi,wn),n[0]=wn.x,n[4]=ga.x,n[8]=mi.x,n[1]=wn.y,n[5]=ga.y,n[9]=mi.y,n[2]=wn.z,n[6]=ga.z,n[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],_=i[3],v=i[7],y=i[11],P=i[15],A=n[0],I=n[4],R=n[8],w=n[12],b=n[1],L=n[5],H=n[9],B=n[13],O=n[2],K=n[6],W=n[10],X=n[14],k=n[3],Q=n[7],at=n[11],ot=n[15];return r[0]=a*A+o*b+l*O+c*k,r[4]=a*I+o*L+l*K+c*Q,r[8]=a*R+o*H+l*W+c*at,r[12]=a*w+o*B+l*X+c*ot,r[1]=h*A+u*b+f*O+d*k,r[5]=h*I+u*L+f*K+d*Q,r[9]=h*R+u*H+f*W+d*at,r[13]=h*w+u*B+f*X+d*ot,r[2]=m*A+x*b+g*O+p*k,r[6]=m*I+x*L+g*K+p*Q,r[10]=m*R+x*H+g*W+p*at,r[14]=m*w+x*B+g*X+p*ot,r[3]=_*A+v*b+y*O+P*k,r[7]=_*I+v*L+y*K+P*Q,r[11]=_*R+v*H+y*W+P*at,r[15]=_*w+v*B+y*X+P*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-n*c*u-r*o*f+i*c*f+n*o*d-i*l*d)+x*(+e*l*d-e*c*f+r*a*f-n*a*d+n*c*h-r*l*h)+g*(+e*c*u-e*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*f+n*a*u-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=u*g*c-x*f*c+x*l*d-o*g*d-u*l*p+o*f*p,v=m*f*c-h*g*c-m*l*d+a*g*d+h*l*p-a*f*p,y=h*x*c-m*u*c+m*o*d-a*x*d-h*o*p+a*u*p,P=m*u*l-h*x*l-m*o*f+a*x*f+h*o*g-a*u*g,A=e*_+i*v+n*y+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=_*I,t[1]=(x*f*r-u*g*r-x*n*d+i*g*d+u*n*p-i*f*p)*I,t[2]=(o*g*r-x*l*r+x*n*c-i*g*c-o*n*p+i*l*p)*I,t[3]=(u*l*r-o*f*r-u*n*c+i*f*c+o*n*d-i*l*d)*I,t[4]=v*I,t[5]=(h*g*r-m*f*r+m*n*d-e*g*d-h*n*p+e*f*p)*I,t[6]=(m*l*r-a*g*r-m*n*c+e*g*c+a*n*p-e*l*p)*I,t[7]=(a*f*r-h*l*r+h*n*c-e*f*c-a*n*d+e*l*d)*I,t[8]=y*I,t[9]=(m*u*r-h*x*r-m*i*d+e*x*d+h*i*p-e*u*p)*I,t[10]=(a*x*r-m*o*r+m*i*c-e*x*c-a*i*p+e*o*p)*I,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*d-e*o*d)*I,t[12]=P*I,t[13]=(h*x*n-m*u*n+m*i*f-e*x*f-h*i*g+e*u*g)*I,t[14]=(m*o*n-a*x*n-m*i*l+e*x*l+a*i*g-e*o*g)*I,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*f+e*o*f)*I,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,x=a*h,g=a*u,p=o*u,_=l*c,v=l*h,y=l*u,P=i.x,A=i.y,I=i.z;return n[0]=(1-(x+p))*P,n[1]=(d+y)*P,n[2]=(m-v)*P,n[3]=0,n[4]=(d-y)*A,n[5]=(1-(f+p))*A,n[6]=(g+_)*A,n[7]=0,n[8]=(m+v)*I,n[9]=(g-_)*I,n[10]=(1-(f+x))*I,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=xs.set(n[0],n[1],n[2]).length(),a=xs.set(n[4],n[5],n[6]).length(),o=xs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Pi.copy(this);let c=1/r,h=1/a,u=1/o;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=h,Pi.elements[5]*=h,Pi.elements[6]*=h,Pi.elements[8]*=u,Pi.elements[9]*=u,Pi.elements[10]*=u,e.setFromRotationMatrix(Pi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=on){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,m;if(o===on)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ja)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=on){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),f=(e+t)*c,d=(i+n)*h,m,x;if(o===on)m=(a+r)*u,x=-2*u;else if(o===Ja)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},xs=new E,Pi=new Ot,r0=new E(0,0,0),a0=new E(1,1,1),wn=new E,ga=new E,mi=new E,Du=new Ot,Lu=new Ge,di=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},o0=0,Uu=new E,ys=new Ge,tn=new Ot,xa=new E,mr=new E,l0=new E,c0=new Ge,Nu=new E(1,0,0),Fu=new E(0,1,0),ku=new E(0,0,1),Ou={type:"added"},h0={type:"removed"},_s={type:"childadded",child:null},Ml={type:"childremoved",child:null},Te=class s extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new E,e=new di,i=new Ge,n=new E(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Yt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Nu,t)}rotateY(t){return this.rotateOnAxis(Fu,t)}rotateZ(t){return this.rotateOnAxis(ku,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nu,t)}translateY(t){return this.translateOnAxis(Fu,t)}translateZ(t){return this.translateOnAxis(ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xa.copy(t):xa.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(mr,xa,this.up):tn.lookAt(xa,mr,this.up),this.quaternion.setFromRotationMatrix(tn),n&&(tn.extractRotation(n.matrixWorld),ys.setFromRotationMatrix(tn),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(h0),Ml.child=t,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,l0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,c0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Te.DEFAULT_UP=new E(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ii=new E,en=new E,bl=new E,nn=new E,vs=new E,Ms=new E,Bu=new E,Sl=new E,wl=new E,El=new E,Tl=new ce,Al=new ce,Rl=new ce,Rn=class s{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ii.subVectors(t,e),n.cross(Ii);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ii.subVectors(n,e),en.subVectors(i,e),bl.subVectors(t,e);let a=Ii.dot(Ii),o=Ii.dot(en),l=Ii.dot(bl),c=en.dot(en),h=en.dot(bl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nn.x),l.addScaledVector(a,nn.y),l.addScaledVector(o,nn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Tl.setScalar(0),Al.setScalar(0),Rl.setScalar(0),Tl.fromBufferAttribute(t,e),Al.fromBufferAttribute(t,i),Rl.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Tl,r.x),a.addScaledVector(Al,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(t,e,i,n){return Ii.subVectors(i,e),en.subVectors(t,e),Ii.cross(en).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ii.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;vs.subVectors(n,i),Ms.subVectors(r,i),Sl.subVectors(t,i);let l=vs.dot(Sl),c=Ms.dot(Sl);if(l<=0&&c<=0)return e.copy(i);wl.subVectors(t,n);let h=vs.dot(wl),u=Ms.dot(wl);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(vs,a);El.subVectors(t,r);let d=vs.dot(El),m=Ms.dot(El);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(Ms,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Bu.subVectors(r,n),o=(u-h)/(u-h+(d-m)),e.copy(n).addScaledVector(Bu,o);let p=1/(g+x+f);return a=x*p,o=f*p,e.copy(i).addScaledVector(vs,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Cl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var bt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Fh(t,1),e=Ze(e,0,1),i=Ze(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Cl(a,r,t+1/3),this.g=Cl(a,r,t),this.b=Cl(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ui){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ui){let i=nd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Qt.fromWorkingColorSpace(ii.copy(this),t),Math.round(Ze(ii.r*255,0,255))*65536+Math.round(Ze(ii.g*255,0,255))*256+Math.round(Ze(ii.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ii.copy(this),e);let i=ii.r,n=ii.g,r=ii.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ii.copy(this),e),t.r=ii.r,t.g=ii.g,t.b=ii.b,t}getStyle(t=ui){Qt.fromWorkingColorSpace(ii.copy(this),t);let e=ii.r,i=ii.g,n=ii.b;return t!==ui?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(ya);let i=Ar(En.h,ya.h,e),n=Ar(En.s,ya.s,e),r=Ar(En.l,ya.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new bt;bt.NAMES=nd;var u0=0,Gi=class extends In{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ui(),this.name="",this.blending=Cn,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Zl,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cn&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==Jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends Gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new E,_a=new et,Fe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Lc,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Di(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}};var es=class extends Fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var to=class extends Fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Vt=class extends Fe{constructor(t,e,i){super(new Float32Array(t),e,i)}},f0=0,Mi=new Ot,Pl=new Te,bs=new E,gi=new Ei,gr=new Ei,$e=new E,Ae=class s extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(id(t)?to:es)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];gi.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){let i=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(gi.min,gr.min),gi.expandByPoint($e),$e.addVectors(gi.max,gr.max),gi.expandByPoint($e)):(gi.expandByPoint(gr.min),gi.expandByPoint(gr.max))}gi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(t,c),$e.add(bs)),n=Math.max(n,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new E,l[R]=new E;let c=new E,h=new E,u=new E,f=new et,d=new et,m=new et,x=new E,g=new E;function p(R,w,b){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[R].add(x),o[w].add(x),o[b].add(x),l[R].add(g),l[w].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,w=_.length;R<w;++R){let b=_[R],L=b.start,H=b.count;for(let B=L,O=L+H;B<O;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let v=new E,y=new E,P=new E,A=new E;function I(R){P.fromBufferAttribute(n,R),A.copy(P);let w=o[R];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(A,w);let L=y.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,w=_.length;R<w;++R){let b=_[R],L=b.start,H=b.count;for(let B=L,O=L+H;B<O;B+=3)I(t.getX(B+0)),I(t.getX(B+1)),I(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Fe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zu=new Ot,Xn=new ts,va=new Ni,Hu=new E,Ma=new E,ba=new E,Sa=new E,Il=new E,wa=new E,Vu=new E,Ea=new E,$=class extends Te{constructor(t=new Ae,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Il.fromBufferAttribute(u,t),a?wa.addScaledVector(Il,h):wa.addScaledVector(Il.sub(e),h))}e.add(wa)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(va.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(va,Hu)===null||Xn.origin.distanceToSquared(Hu)>(t.far-t.near)**2))&&(zu.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(zu),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,P=v;y<P;y+=3){let A=o.getX(y),I=o.getX(y+1),R=o.getX(y+2);n=Ta(this,p,t,i,c,h,u,A,I,R),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);n=Ta(this,a,t,i,c,h,u,_,v,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,P=v;y<P;y+=3){let A=y,I=y+1,R=y+2;n=Ta(this,p,t,i,c,h,u,A,I,R),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,v=g+1,y=g+2;n=Ta(this,a,t,i,c,h,u,_,v,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function d0(s,t,e,i,n,r,a,o){let l;if(t.side===Je?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Vi,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:s}}function Ta(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Ma),s.getVertexPosition(l,ba),s.getVertexPosition(c,Sa);let h=d0(s,t,e,i,Ma,ba,Sa,Vu);if(h){let u=new E;Rn.getBarycoord(Vu,Ma,ba,Sa,u),n&&(h.uv=Rn.getInterpolatedAttribute(n,o,l,c,u,new et)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,l,c,u,new et)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new E,materialIndex:0};Rn.getNormal(Ma,ba,Sa,f.normal),h.face=f,h.barycoord=u}return h}var ge=class s extends Ae{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,r,4),m("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function m(x,g,p,_,v,y,P,A,I,R,w){let b=y/I,L=P/R,H=y/2,B=P/2,O=A/2,K=I+1,W=R+1,X=0,k=0,Q=new E;for(let at=0;at<W;at++){let ot=at*L-B;for(let Dt=0;Dt<K;Dt++){let te=Dt*b-H;Q[x]=te*_,Q[g]=ot*v,Q[p]=O,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[g]=0,Q[p]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Dt/I),u.push(1-at/R),X+=1}}for(let at=0;at<R;at++)for(let ot=0;ot<I;ot++){let Dt=f+ot+K*at,te=f+ot+K*(at+1),Y=f+(ot+1)+K*(at+1),rt=f+(ot+1)+K*at;l.push(Dt,te,rt),l.push(te,Y,rt),k+=6}o.addGroup(d,k,w),d+=k,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ri(s){let t={};for(let e=0;e<s.length;e++){let i=Vs(s[e]);for(let n in i)t[n]=i[n]}return t}function p0(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function sd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var qi={clone:Vs,merge:ri},m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends Gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=p0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},eo=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tn=new E,Gu=new et,Wu=new et,Qe=class extends eo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Gu,Wu),e.subVectors(Wu,Gu)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,ws=1,kc=class extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Qe(Ss,ws,t,e);n.layers=this.layers,this.add(n);let r=new Qe(Ss,ws,t,e);r.layers=this.layers,this.add(r);let a=new Qe(Ss,ws,t,e);a.layers=this.layers,this.add(a);let o=new Qe(Ss,ws,t,e);o.layers=this.layers,this.add(o);let l=new Qe(Ss,ws,t,e);l.layers=this.layers,this.add(l);let c=new Qe(Ss,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===on)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},io=class extends fi{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oc=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new io(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ge(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Hi});r.uniforms.tEquirect.value=e;let a=new $(n,r),o=e.minFilter;return e.minFilter===an&&(e.minFilter=Si),new kc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},Dl=new E,x0=new E,y0=new Yt,rn=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Dl.subVectors(i,e).cross(x0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Dl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||y0.getNormalMatrix(t),n=this.coplanarPoint(Dl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new Ni,Aa=new E,Nr=class{constructor(t=new rn,e=new rn,i=new rn,n=new rn,r=new rn,a=new rn){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=on){let i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],m=n[9],x=n[10],g=n[11],p=n[12],_=n[13],v=n[14],y=n[15];if(i[0].setComponents(l-r,f-c,g-d,y-p).normalize(),i[1].setComponents(l+r,f+c,g+d,y+p).normalize(),i[2].setComponents(l+a,f+h,g+m,y+_).normalize(),i[3].setComponents(l-a,f-h,g-m,y-_).normalize(),i[4].setComponents(l-o,f-u,g-x,y-v).normalize(),e===on)i[5].setComponents(l+o,f+u,g+x,y+v).normalize();else if(e===Ja)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Aa.x=n.normal.x>0?t.max.x:t.min.x,Aa.y=n.normal.y>0?t.max.y:t.min.y,Aa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rd(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function _0(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var hn=class s extends Ae{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let _=p*f-a;for(let v=0;v<c;v++){let y=v*u-r;m.push(y,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let v=_+c*p,y=_+c*(p+1),P=_+1+c*(p+1),A=_+1+c*p;d.push(v,y,A),d.push(y,P,A)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
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
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
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
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,U0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,ym=`struct PhysicalMaterial {
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
}`,_m=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sg=`float getShadowMask() {
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
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,kg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,zg=`#define NORMAL
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
}`,Hg=`#define PHONG
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,qg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 color;
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
}`,Kg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:v0,alphahash_pars_fragment:M0,alphamap_fragment:b0,alphamap_pars_fragment:S0,alphatest_fragment:w0,alphatest_pars_fragment:E0,aomap_fragment:T0,aomap_pars_fragment:A0,batching_pars_vertex:R0,batching_vertex:C0,begin_vertex:P0,beginnormal_vertex:I0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:U0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:O0,color_fragment:B0,color_pars_fragment:z0,color_pars_vertex:H0,color_vertex:V0,common:G0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:$0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:K0,envmap_fragment:Q0,envmap_common_pars_fragment:j0,envmap_pars_fragment:tm,envmap_pars_vertex:em,envmap_physical_pars_fragment:fm,envmap_vertex:im,fog_vertex:nm,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:am,gradientmap_pars_fragment:om,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:dm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:xm,lights_physical_pars_fragment:ym,lights_fragment_begin:_m,lights_fragment_maps:vm,lights_fragment_end:Mm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Em,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Dm,morphcolor_vertex:Lm,morphnormal_vertex:Um,morphtarget_pars_vertex:Nm,morphtarget_vertex:Fm,normal_fragment_begin:km,normal_fragment_maps:Om,normal_pars_fragment:Bm,normal_pars_vertex:zm,normal_vertex:Hm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:$m,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Km,dithering_pars_fragment:Qm,roughnessmap_fragment:jm,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:eg,shadowmap_pars_vertex:ig,shadowmap_vertex:ng,shadowmask_pars_fragment:sg,skinbase_vertex:rg,skinning_pars_vertex:ag,skinning_vertex:og,skinnormal_vertex:lg,specularmap_fragment:cg,specularmap_pars_fragment:hg,tonemapping_fragment:ug,tonemapping_pars_fragment:fg,transmission_fragment:dg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:xg,worldpos_vertex:yg,background_vert:_g,background_frag:vg,backgroundCube_vert:Mg,backgroundCube_frag:bg,cube_vert:Sg,cube_frag:wg,depth_vert:Eg,depth_frag:Tg,distanceRGBA_vert:Ag,distanceRGBA_frag:Rg,equirect_vert:Cg,equirect_frag:Pg,linedashed_vert:Ig,linedashed_frag:Dg,meshbasic_vert:Lg,meshbasic_frag:Ug,meshlambert_vert:Ng,meshlambert_frag:Fg,meshmatcap_vert:kg,meshmatcap_frag:Og,meshnormal_vert:Bg,meshnormal_frag:zg,meshphong_vert:Hg,meshphong_frag:Vg,meshphysical_vert:Gg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Yg,points_frag:$g,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:Kg,sprite_frag:Qg},ft={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},zi={basic:{uniforms:ri([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ri([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new bt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ri([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ri([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ri([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new bt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ri([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ri([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ri([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ri([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ri([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ri([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:ri([ft.common,ft.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:ri([ft.lights,ft.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};zi.physical={uniforms:ri([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Ra={r:0,b:0,g:0},Yn=new di,jg=new Ot;function tx(s,t,e,i,n,r,a){let o=new bt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1,y=m(_);y===null?p(o,l):y&&y.isColor&&(p(y,1),v=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,v){let y=m(v);y&&(y.isCubeTexture||y.mapping===Io)?(h===void 0&&(h=new $(new ge(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Vs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Yn.copy(v.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Yn)),h.material.toneMapped=Qt.getTransfer(y.colorSpace)!==me,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $(new hn(2,2),new Be({name:"BackgroundMaterial",uniforms:Vs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Ra,sd(s)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:x,addToRenderList:g}}function ex(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,a=!1;function o(b,L,H,B,O){let K=!1,W=u(B,H,L);r!==W&&(r=W,c(r.object)),K=d(b,B,H,O),K&&m(b,B,H,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(b,L,H,B),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,H){let B=H.wireframe===!0,O=i[b.id];O===void 0&&(O={},i[b.id]=O);let K=O[L.id];K===void 0&&(K={},O[L.id]=K);let W=K[B];return W===void 0&&(W=f(l()),K[B]=W),W}function f(b){let L=[],H=[],B=[];for(let O=0;O<e;O++)L[O]=0,H[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:B,object:b,attributes:{},index:null}}function d(b,L,H,B){let O=r.attributes,K=L.attributes,W=0,X=H.getAttributes();for(let k in X)if(X[k].location>=0){let at=O[k],ot=K[k];if(ot===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor)),at===void 0||at.attribute!==ot||ot&&at.data!==ot.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function m(b,L,H,B){let O={},K=L.attributes,W=0,X=H.getAttributes();for(let k in X)if(X[k].location>=0){let at=K[k];at===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(at=b.instanceColor));let ot={};ot.attribute=at,at&&at.data&&(ot.data=at.data),O[k]=ot,W++}r.attributes=O,r.attributesNum=W,r.index=B}function x(){let b=r.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){let H=r.newAttributes,B=r.enabledAttributes,O=r.attributeDivisors;H[b]=1,B[b]===0&&(s.enableVertexAttribArray(b),B[b]=1),O[b]!==L&&(s.vertexAttribDivisor(b,L),O[b]=L)}function _(){let b=r.newAttributes,L=r.enabledAttributes;for(let H=0,B=L.length;H<B;H++)L[H]!==b[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function v(b,L,H,B,O,K,W){W===!0?s.vertexAttribIPointer(b,L,H,O,K):s.vertexAttribPointer(b,L,H,B,O,K)}function y(b,L,H,B){x();let O=B.attributes,K=H.getAttributes(),W=L.defaultAttributeValues;for(let X in K){let k=K[X];if(k.location>=0){let Q=O[X];if(Q===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){let at=Q.normalized,ot=Q.itemSize,Dt=t.get(Q);if(Dt===void 0)continue;let te=Dt.buffer,Y=Dt.type,rt=Dt.bytesPerElement,yt=Y===s.INT||Y===s.UNSIGNED_INT||Q.gpuType===Ch;if(Q.isInterleavedBufferAttribute){let ht=Q.data,Lt=ht.stride,zt=Q.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<k.locationSize;kt++)p(k.location+kt,ht.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<k.locationSize;kt++)g(k.location+kt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let kt=0;kt<k.locationSize;kt++)v(k.location+kt,ot/k.locationSize,Y,at,Lt*rt,(zt+ot/k.locationSize*kt)*rt,yt)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<k.locationSize;ht++)p(k.location+ht,Q.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<k.locationSize;ht++)g(k.location+ht);s.bindBuffer(s.ARRAY_BUFFER,te);for(let ht=0;ht<k.locationSize;ht++)v(k.location+ht,ot/k.locationSize,Y,at,ot*rt,ot/k.locationSize*ht*rt,yt)}}else if(W!==void 0){let at=W[X];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(k.location,at);break;case 3:s.vertexAttrib3fv(k.location,at);break;case 4:s.vertexAttrib4fv(k.location,at);break;default:s.vertexAttrib1fv(k.location,at)}}}}_()}function P(){R();for(let b in i){let L=i[b];for(let H in L){let B=L[H];for(let O in B)h(B[O].object),delete B[O];delete L[H]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let H in L){let B=L[H];for(let O in B)h(B[O].object),delete B[O];delete L[H]}delete i[b.id]}function I(b){for(let L in i){let H=i[L];if(H[b.id]===void 0)continue;let B=H[b.id];for(let O in B)h(B[O].object),delete B[O];delete H[b.id]}}function R(){w(),a=!0,r!==n&&(r=n,c(r.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function ix(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nx(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(I){return!(I!==wi&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let R=I===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==cn&&i.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Li&&!R)}function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function sx(s){let t=this,e=null,i=0,n=!1,r=!1,a=new rn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!n||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,v=_*4,y=p.clippingState||null;l.value=y,y=h(m,f,v,d);for(let P=0;P!==v;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==x;++v,y+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function rx(s){let t=new WeakMap;function e(a,o){return o===nc?a.mapping=ks:o===sc&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===nc||o===sc)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Oc(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Gs=class extends eo{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Is=4,Xu=[.125,.215,.35,.446,.526,.582],Kn=20,Ll=new Gs,qu=new bt,Ul=null,Nl=0,Fl=0,kl=!1,Zn=(1+Math.sqrt(5))/2,Es=1/Zn,Yu=[new E(-Zn,Es,0),new E(Zn,Es,0),new E(-Es,0,Zn),new E(Es,0,Zn),new E(0,Zn,-Es),new E(0,Zn,Es),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ul,Nl,Fl),this._renderer.xr.enabled=kl,t.scissorTest=!1,Ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:xi,format:wi,colorSpace:Zs,depthBuffer:!1},n=$u(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ax(r)),this._blurMaterial=ox(r,t,e)}return n}_compileMaterial(t){let e=new $(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,i,n){let o=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(qu),h.toneMapping=Pn,h.autoClear=!1;let d=new Le({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new $(new ge,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(qu),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;Ca(n,_*v,p>2?v:0,v,v),h.setRenderTarget(n),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ks||t.mapping===Os;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new $(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ca(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ll)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yu[(n-r-1)%Yu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Kn-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Kn;g>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kn}`);let p=[],_=0;for(let I=0;I<Kn;++I){let R=I/x,w=Math.exp(-R*R/2);p.push(w),I===0?_+=w:I<g&&(_+=2*w)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-i;let y=this._sizeLods[n],P=3*y*(n>v-Is?n-v+Is:0),A=4*(this._cubeSize-y);Ca(e,P,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Ll)}};function ax(s){let t=[],e=[],i=[],n=s,r=s-Is+1+Xu.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Is?l=Xu[a-s+Is-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*d),v=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let A=0;A<d;A++){let I=A%3*2/3-1,R=A>2?0:-1,w=[I,R,0,I+2/3,R,0,I+2/3,R+1,0,I,R,0,I+2/3,R+1,0,I,R+1,0];_.set(w,x*m*A),v.set(f,g*m*A);let b=[A,A,A,A,A,A];y.set(b,p*m*A)}let P=new Ae;P.setAttribute("position",new Fe(_,x)),P.setAttribute("uv",new Fe(v,g)),P.setAttribute("faceIndex",new Fe(y,p)),t.push(P),n>Is&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $u(s,t,e){let i=new je(s,t,e);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function ox(s,t,e){let i=new Float32Array(Kn),n=new E(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Zu(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ju(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function lx(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===nc||l===sc,h=l===ks||l===Os;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ws(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new Ws(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function cx(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&wr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function hx(s,t,e,i){let n={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete n[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){let P=_[v+0],A=_[v+1],I=_[v+2];f.push(P,A,A,I,I,P)}}else if(m!==void 0){let _=m.array;x=m.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let P=v+0,A=v+1,I=v+2;f.push(P,A,A,I,I,P)}}else return;let g=new(id(f)?to:es)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ux(s,t,e){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),e.update(d,i,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(i,d,r,f*a,m),e.update(d,i,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function u(f,d,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_]*x[_];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function dx(s,t,e){let i=new WeakMap,n=new ce;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let w=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,P=1;y>t.maxTextureSize&&(P=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*P*4*u),I=new ja(A,y,P,u);I.type=Li,I.needsUpdate=!0;let R=v*4;for(let b=0;b<u;b++){let L=g[b],H=p[b],B=_[b],O=y*P*4*b;for(let K=0;K<L.count;K++){let W=K*R;d===!0&&(n.fromBufferAttribute(L,K),A[O+W+0]=n.x,A[O+W+1]=n.y,A[O+W+2]=n.z,A[O+W+3]=0),m===!0&&(n.fromBufferAttribute(H,K),A[O+W+4]=n.x,A[O+W+5]=n.y,A[O+W+6]=n.z,A[O+W+7]=0),x===!0&&(n.fromBufferAttribute(B,K),A[O+W+8]=n.x,A[O+W+9]=n.y,A[O+W+10]=n.z,A[O+W+11]=B.itemSize===4?n.w:1)}}f={count:u,texture:I,size:new et(y,P)},i.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function px(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var no=class extends fi{constructor(t,e,i,n,r,a,o,l,c,h=Ls){if(h!==Ls&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ls&&(i=jn),i===void 0&&h===zs&&(i=Bs),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ad=new fi,Ku=new no(1,1),od=new ja,ld=new Fc,cd=new io,Qu=[],ju=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function Ks(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Qu[n];if(r===void 0&&(r=new Float32Array(n),Qu[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Lo(s,t){let e=ju[t];e===void 0&&(e=new Int32Array(t),ju[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function mx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function _x(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;nf.set(i),s.uniformMatrix2fv(this.addr,!1,nf),Ye(e,i)}}function vx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;ef.set(i),s.uniformMatrix3fv(this.addr,!1,ef),Ye(e,i)}}function Mx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;tf.set(i),s.uniformMatrix4fv(this.addr,!1,tf),Ye(e,i)}}function bx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function Ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function Tx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function Rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function Cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function Px(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ku.compareFunction=ed,r=Ku):r=ad,e.setTexture2D(t||r,n)}function Ix(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ld,n)}function Dx(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||cd,n)}function Lx(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||od,n)}function Ux(s){switch(s){case 5126:return mx;case 35664:return gx;case 35665:return xx;case 35666:return yx;case 35674:return _x;case 35675:return vx;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return Sx;case 35668:case 35672:return wx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Lx}}function Nx(s,t){s.uniform1fv(this.addr,t)}function Fx(s,t){let e=Ks(t,this.size,2);s.uniform2fv(this.addr,e)}function kx(s,t){let e=Ks(t,this.size,3);s.uniform3fv(this.addr,e)}function Ox(s,t){let e=Ks(t,this.size,4);s.uniform4fv(this.addr,e)}function Bx(s,t){let e=Ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function zx(s,t){let e=Ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Hx(s,t){let e=Ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Vx(s,t){s.uniform1iv(this.addr,t)}function Gx(s,t){s.uniform2iv(this.addr,t)}function Wx(s,t){s.uniform3iv(this.addr,t)}function Xx(s,t){s.uniform4iv(this.addr,t)}function qx(s,t){s.uniform1uiv(this.addr,t)}function Yx(s,t){s.uniform2uiv(this.addr,t)}function $x(s,t){s.uniform3uiv(this.addr,t)}function Zx(s,t){s.uniform4uiv(this.addr,t)}function Jx(s,t,e){let i=this.cache,n=t.length,r=Lo(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ad,r[a])}function Kx(s,t,e){let i=this.cache,n=t.length,r=Lo(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||ld,r[a])}function Qx(s,t,e){let i=this.cache,n=t.length,r=Lo(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||cd,r[a])}function jx(s,t,e){let i=this.cache,n=t.length,r=Lo(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||od,r[a])}function t1(s){switch(s){case 5126:return Nx;case 35664:return Fx;case 35665:return kx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return $x;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return jx}}var Bc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ux(e.type)}},zc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t1(e.type)}},Hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function sf(s,t){s.seq.push(t),s.map[t.id]=t}function e1(s,t,e){let i=s.name,n=i.length;for(Ol.lastIndex=0;;){let r=Ol.exec(i),a=Ol.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){sf(e,c===void 0?new Bc(o,s,t):new zc(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Hc(o),sf(e,u)),e=u}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);e1(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function rf(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var i1=37297,n1=0;function s1(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var af=new Yt;function r1(s){Qt._getMatrix(af,Qt.workingColorSpace,s);let t=`mat3( ${af.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Do:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function of(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+s1(s.getShaderSource(t),a)}else return n}function a1(s,t){let e=r1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function o1(s,t){let e;switch(t){case wh:e="Linear";break;case Eh:e="Reinhard";break;case Th:e="Cineon";break;case Jr:e="ACESFilmic";break;case Ah:e="AgX";break;case Rh:e="Neutral";break;case Sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pa=new E;function l1(){Qt.getLuminanceCoefficients(Pa);let s=Pa.x.toFixed(4),t=Pa.y.toFixed(4),e=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function h1(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function u1(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Er(s){return s!==""}function lf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(s){return s.replace(f1,p1)}var d1=new Map;function p1(s,t){let e=Zt[t];if(e===void 0){let i=d1.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}var m1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(s){return s.replace(m1,g1)}function g1(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function uf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function x1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function y1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case Os:t="ENVMAP_TYPE_CUBE";break;case Io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function v1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gf:t="ENVMAP_BLENDING_MULTIPLY";break;case Mp:t="ENVMAP_BLENDING_MIX";break;case bp:t="ENVMAP_BLENDING_ADD";break}return t}function M1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function b1(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=x1(e),c=y1(e),h=_1(e),u=v1(e),f=M1(e),d=c1(e),m=h1(r),x=n.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Er).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(g=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?o1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,a1("linearToOutputTexel",e.outputColorSpace),l1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),a=Vc(a),a=lf(a,e),a=cf(a,e),o=Vc(o),o=lf(o,e),o=cf(o,e),a=hf(a),o=hf(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+g+a,y=_+p+o,P=rf(n,n.VERTEX_SHADER,v),A=rf(n,n.FRAGMENT_SHADER,y);n.attachShader(x,P),n.attachShader(x,A),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function I(L){if(s.debug.checkShaderErrors){let H=n.getProgramInfoLog(x).trim(),B=n.getShaderInfoLog(P).trim(),O=n.getShaderInfoLog(A).trim(),K=!0,W=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,P,A);else{let X=of(n,P,"vertex"),k=of(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+X+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||O==="")&&(W=!1);W&&(L.diagnostics={runnable:K,programLog:H,vertexShader:{log:B,prefix:g},fragmentShader:{log:O,prefix:p}})}n.deleteShader(P),n.deleteShader(A),R=new Ns(n,x),w=u1(n,x)}let R;this.getUniforms=function(){return R===void 0&&I(this),R};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(x,i1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=n1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}var S1=0,Gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Wc(t),e.set(t,i)),i}},Wc=class{constructor(t){this.id=S1++,this.code=t,this.usedTimes=0}};function w1(s,t,e,i,n,r,a){let o=new Ur,l=new Gc,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,L,H,B){let O=H.fog,K=B.geometry,W=w.isMeshStandardMaterial?H.environment:null,X=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),k=X&&X.mapping===Io?X.image.height:null,Q=m[w.type];w.precision!==null&&(d=n.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let at=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=at!==void 0?at.length:0,Dt=0;K.morphAttributes.position!==void 0&&(Dt=1),K.morphAttributes.normal!==void 0&&(Dt=2),K.morphAttributes.color!==void 0&&(Dt=3);let te,Y,rt,yt;if(Q){let ye=zi[Q];te=ye.vertexShader,Y=ye.fragmentShader}else te=w.vertexShader,Y=w.fragmentShader,l.update(w),rt=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);let ht=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),zt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,ne=!!w.map,tt=!!w.matcap,lt=!!X,D=!!w.aoMap,Pt=!!w.lightMap,nt=!!w.bumpMap,St=!!w.normalMap,ut=!!w.displacementMap,Nt=!!w.emissiveMap,vt=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,z=w.clearcoat>0,Z=w.dispersion>0,it=w.iridescence>0,J=w.sheen>0,Tt=w.transmission>0,dt=S&&!!w.anisotropyMap,Mt=z&&!!w.clearcoatMap,Kt=z&&!!w.clearcoatNormalMap,st=z&&!!w.clearcoatRoughnessMap,wt=it&&!!w.iridescenceMap,Ft=it&&!!w.iridescenceThicknessMap,Bt=J&&!!w.sheenColorMap,Et=J&&!!w.sheenRoughnessMap,ee=!!w.specularMap,$t=!!w.specularColorMap,we=!!w.specularIntensityMap,U=Tt&&!!w.transmissionMap,mt=Tt&&!!w.thicknessMap,q=!!w.gradientMap,j=!!w.alphaMap,_t=w.alphaTest>0,gt=!!w.alphaHash,Xt=!!w.extensions,Oe=Pn;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Oe=s.toneMapping);let ti={shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:Y,defines:w.defines,customVertexShaderID:rt,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Zs,alphaToCoverage:!!w.alphaToCoverage,map:ne,matcap:tt,envMap:lt,envMapMode:lt&&X.mapping,envMapCubeUVHeight:k,aoMap:D,lightMap:Pt,bumpMap:nt,normalMap:St,displacementMap:f&&ut,emissiveMap:Nt,normalMapObjectSpace:St&&w.normalMapType===Rp,normalMapTangentSpace:St&&w.normalMapType===td,metalnessMap:vt,roughnessMap:C,anisotropy:S,anisotropyMap:dt,clearcoat:z,clearcoatMap:Mt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:st,dispersion:Z,iridescence:it,iridescenceMap:wt,iridescenceThicknessMap:Ft,sheen:J,sheenColorMap:Bt,sheenRoughnessMap:Et,specularMap:ee,specularColorMap:$t,specularIntensityMap:we,transmission:Tt,transmissionMap:U,thicknessMap:mt,gradientMap:q,opaque:w.transparent===!1&&w.blending===Cn&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:gt,combine:w.combine,mapUv:ne&&x(w.map.channel),aoMapUv:D&&x(w.aoMap.channel),lightMapUv:Pt&&x(w.lightMap.channel),bumpMapUv:nt&&x(w.bumpMap.channel),normalMapUv:St&&x(w.normalMap.channel),displacementMapUv:ut&&x(w.displacementMap.channel),emissiveMapUv:Nt&&x(w.emissiveMap.channel),metalnessMapUv:vt&&x(w.metalnessMap.channel),roughnessMapUv:C&&x(w.roughnessMap.channel),anisotropyMapUv:dt&&x(w.anisotropyMap.channel),clearcoatMapUv:Mt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(w.sheenRoughnessMap.channel),specularMapUv:ee&&x(w.specularMap.channel),specularColorMapUv:$t&&x(w.specularColorMap.channel),specularIntensityMapUv:we&&x(w.specularIntensityMap.channel),transmissionMapUv:U&&x(w.transmissionMap.channel),thicknessMapUv:mt&&x(w.thicknessMap.channel),alphaMapUv:j&&x(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(St||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(ne||j),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Dt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ne&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===me,decodeVideoTextureEmissive:Nt&&w.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(w.emissiveMap.colorSpace)===me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bi,flipSided:w.side===Je,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&w.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ti.vertexUv1s=c.has(1),ti.vertexUv2s=c.has(2),ti.vertexUv3s=c.has(3),c.clear(),ti}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(_(b,w),v(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function v(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){let b=m[w.type],L;if(b){let H=zi[b];L=qi.clone(H.uniforms)}else L=w.uniforms;return L}function P(w,b){let L;for(let H=0,B=h.length;H<B;H++){let O=h[H];if(O.cacheKey===b){L=O,++L.usedTimes;break}}return L===void 0&&(L=new b1(s,b,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function I(w){l.remove(w)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:R}}function E1(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function T1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ff(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function df(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,f,d,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,f,d,m,x,g){let p=a(u,f,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,m,x,g){let p=a(u,f,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||T1),i.length>1&&i.sort(f||ff),n.length>1&&n.sort(f||ff)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function A1(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new df,s.set(i,[a])):n>=r.length?(a=new df,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function R1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new bt};break;case"SpotLight":e={position:new E,direction:new E,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function C1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var P1=0;function I1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function D1(s){let t=new R1,e=C1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new E);let n=new E,r=new Ot,a=new Ot;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,v=0,y=0,P=0,A=0,I=0;c.sort(I1);for(let w=0,b=c.length;w<b;w++){let L=c[w],H=L.color,B=L.intensity,O=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*B,u+=H.g*B,f+=H.b*B;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],B);I++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=L.shadow.matrix,_++}i.directional[d]=W,d++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(H).multiplyScalar(B),W.distance=O,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[x]=W;let X=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,X.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=X.matrix,L.castShadow){let k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=K,y++}x++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(H).multiplyScalar(B),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=W,g++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let X=L.shadow,k=e.get(L);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,i.pointShadow[m]=k,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=L.shadow.matrix,v++}i.point[m]=W,m++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(B),W.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[p]=W,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==P||R.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,R.directionalLength=d,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=P,R.numLightProbes=I,i.version=P1++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let v=c[p];if(v.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let y=i.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function pf(s){let t=new D1(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function L1(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new pf(s),t.set(n,[o])):r>=a.length?(o=new pf(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Xc=class extends Gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qc=class extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
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
}`;function F1(s,t,e){let i=new Nr,n=new et,r=new et,a=new ce,o=new Xc({depthPacking:Ap}),l=new qc,c={},h=e.maxTextureSize,u={[Vi]:Je,[Je]:Vi,[bi]:bi},f=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:U1,fragmentShader:N1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ae;m.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vf;let p=this.type;this.render=function(A,I,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let w=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Hi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=p!==sn&&this.type===sn,O=p===sn&&this.type!==sn;for(let K=0,W=A.length;K<W;K++){let X=A[K],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);let Q=k.getFrameExtents();if(n.multiply(Q),r.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Q.x),n.x=r.x*Q.x,k.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Q.y),n.y=r.y*Q.y,k.mapSize.y=r.y)),k.map===null||B===!0||O===!0){let ot=this.type!==sn?{minFilter:ai,magFilter:ai}:{};k.map!==null&&k.map.dispose(),k.map=new je(n.x,n.y,ot),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let at=k.getViewportCount();for(let ot=0;ot<at;ot++){let Dt=k.getViewport(ot);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),H.viewport(a),k.updateMatrices(X,ot),i=k.getFrustum(),y(I,R,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===sn&&_(k,R),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,b,L)};function _(A,I){let R=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new je(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(I,null,R,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(I,null,R,d,x,null)}function v(A,I,R,w){let b=null,L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:o,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let H=b.uuid,B=I.uuid,O=c[H];O===void 0&&(O={},c[H]=O);let K=O[B];K===void 0&&(K=b.clone(),O[B]=K,I.addEventListener("dispose",P)),b=K}if(b.visible=I.visible,b.wireframe=I.wireframe,w===sn?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=s.properties.get(b);H.light=R}return b}function y(A,I,R,w,b){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===sn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let B=t.update(A),O=A.material;if(Array.isArray(O)){let K=B.groups;for(let W=0,X=K.length;W<X;W++){let k=K[W],Q=O[k.materialIndex];if(Q&&Q.visible){let at=v(A,Q,w,b);A.onBeforeShadow(s,A,I,R,B,at,k),s.renderBufferDirect(R,null,B,at,A,k),A.onAfterShadow(s,A,I,R,B,at,k)}}}else if(O.visible){let K=v(A,O,w,b);A.onBeforeShadow(s,A,I,R,B,K,null),s.renderBufferDirect(R,null,B,K,A,null),A.onAfterShadow(s,A,I,R,B,K,null)}}let H=A.children;for(let B=0,O=H.length;B<O;B++)y(H[B],I,R,w,b)}function P(A){A.target.removeEventListener("dispose",P);for(let R in c){let w=c[R],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var k1={[Jl]:Kl,[Ql]:ec,[jl]:ic,[Fs]:tc,[Kl]:Jl,[ec]:Ql,[ic]:jl,[tc]:Fs};function O1(s,t){function e(){let U=!1,mt=new ce,q=null,j=new ce(0,0,0,0);return{setMask:function(_t){q!==_t&&!U&&(s.colorMask(_t,_t,_t,_t),q=_t)},setLocked:function(_t){U=_t},setClear:function(_t,gt,Xt,Oe,ti){ti===!0&&(_t*=Oe,gt*=Oe,Xt*=Oe),mt.set(_t,gt,Xt,Oe),j.equals(mt)===!1&&(s.clearColor(_t,gt,Xt,Oe),j.copy(mt))},reset:function(){U=!1,q=null,j.set(-1,0,0,0)}}}function i(){let U=!1,mt=!1,q=null,j=null,_t=null;return{setReversed:function(gt){if(mt!==gt){let Xt=t.get("EXT_clip_control");mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let Oe=_t;_t=null,this.setClear(Oe)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?ht(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(gt){q!==gt&&!U&&(s.depthMask(gt),q=gt)},setFunc:function(gt){if(mt&&(gt=k1[gt]),j!==gt){switch(gt){case Jl:s.depthFunc(s.NEVER);break;case Kl:s.depthFunc(s.ALWAYS);break;case Ql:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case jl:s.depthFunc(s.EQUAL);break;case tc:s.depthFunc(s.GEQUAL);break;case ec:s.depthFunc(s.GREATER);break;case ic:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=gt}},setLocked:function(gt){U=gt},setClear:function(gt){_t!==gt&&(mt&&(gt=1-gt),s.clearDepth(gt),_t=gt)},reset:function(){U=!1,q=null,j=null,_t=null,mt=!1}}}function n(){let U=!1,mt=null,q=null,j=null,_t=null,gt=null,Xt=null,Oe=null,ti=null;return{setTest:function(ye){U||(ye?ht(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(ye){mt!==ye&&!U&&(s.stencilMask(ye),mt=ye)},setFunc:function(ye,Ai,Ji){(q!==ye||j!==Ai||_t!==Ji)&&(s.stencilFunc(ye,Ai,Ji),q=ye,j=Ai,_t=Ji)},setOp:function(ye,Ai,Ji){(gt!==ye||Xt!==Ai||Oe!==Ji)&&(s.stencilOp(ye,Ai,Ji),gt=ye,Xt=Ai,Oe=Ji)},setLocked:function(ye){U=ye},setClear:function(ye){ti!==ye&&(s.clearStencil(ye),ti=ye)},reset:function(){U=!1,mt=null,q=null,j=null,_t=null,gt=null,Xt=null,Oe=null,ti=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,_=null,v=null,y=null,P=null,A=null,I=new bt(0,0,0),R=0,w=!1,b=null,L=null,H=null,B=null,O=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=X>=2);let Q=null,at={},ot=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),te=new ce().fromArray(ot),Y=new ce().fromArray(Dt);function rt(U,mt,q,j){let _t=new Uint8Array(4),gt=s.createTexture();s.bindTexture(U,gt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<q;Xt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(mt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return gt}let yt={};yt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(s.DEPTH_TEST),a.setFunc(Fs),nt(!1),St(mu),ht(s.CULL_FACE),D(Hi);function ht(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Lt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function zt(U,mt){return u[U]!==mt?(s.bindFramebuffer(U,mt),u[U]=mt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function kt(U,mt){let q=d,j=!1;if(U){q=f.get(mt),q===void 0&&(q=[],f.set(mt,q));let _t=U.textures;if(q.length!==_t.length||q[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Xt=_t.length;gt<Xt;gt++)q[gt]=s.COLOR_ATTACHMENT0+gt;q.length=_t.length,j=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,j=!0);j&&s.drawBuffers(q)}function ne(U){return m!==U?(s.useProgram(U),m=U,!0):!1}let tt={[Jn]:s.FUNC_ADD,[sp]:s.FUNC_SUBTRACT,[rp]:s.FUNC_REVERSE_SUBTRACT};tt[ap]=s.MIN,tt[op]=s.MAX;let lt={[lp]:s.ZERO,[cp]:s.ONE,[hp]:s.SRC_COLOR,[$l]:s.SRC_ALPHA,[gp]:s.SRC_ALPHA_SATURATE,[pp]:s.DST_COLOR,[fp]:s.DST_ALPHA,[up]:s.ONE_MINUS_SRC_COLOR,[Zl]:s.ONE_MINUS_SRC_ALPHA,[mp]:s.ONE_MINUS_DST_COLOR,[dp]:s.ONE_MINUS_DST_ALPHA,[xp]:s.CONSTANT_COLOR,[yp]:s.ONE_MINUS_CONSTANT_COLOR,[_p]:s.CONSTANT_ALPHA,[vp]:s.ONE_MINUS_CONSTANT_ALPHA};function D(U,mt,q,j,_t,gt,Xt,Oe,ti,ye){if(U===Hi){x===!0&&(Lt(s.BLEND),x=!1);return}if(x===!1&&(ht(s.BLEND),x=!0),U!==np){if(U!==g||ye!==w){if((p!==Jn||y!==Jn)&&(s.blendEquation(s.FUNC_ADD),p=Jn,y=Jn),ye)switch(U){case Cn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oi:s.blendFunc(s.ONE,s.ONE);break;case gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,v=null,P=null,A=null,I.set(0,0,0),R=0,g=U,w=ye}return}_t=_t||mt,gt=gt||q,Xt=Xt||j,(mt!==p||_t!==y)&&(s.blendEquationSeparate(tt[mt],tt[_t]),p=mt,y=_t),(q!==_||j!==v||gt!==P||Xt!==A)&&(s.blendFuncSeparate(lt[q],lt[j],lt[gt],lt[Xt]),_=q,v=j,P=gt,A=Xt),(Oe.equals(I)===!1||ti!==R)&&(s.blendColor(Oe.r,Oe.g,Oe.b,ti),I.copy(Oe),R=ti),g=U,w=!1}function Pt(U,mt){U.side===bi?Lt(s.CULL_FACE):ht(s.CULL_FACE);let q=U.side===Je;mt&&(q=!q),nt(q),U.blending===Cn&&U.transparent===!1?D(Hi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){b!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),b=U)}function St(U){U!==ep?(ht(s.CULL_FACE),U!==L&&(U===mu?s.cullFace(s.BACK):U===ip?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),L=U}function ut(U){U!==H&&(W&&s.lineWidth(U),H=U)}function Nt(U,mt,q){U?(ht(s.POLYGON_OFFSET_FILL),(B!==mt||O!==q)&&(s.polygonOffset(mt,q),B=mt,O=q)):Lt(s.POLYGON_OFFSET_FILL)}function vt(U){U?ht(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function C(U){U===void 0&&(U=s.TEXTURE0+K-1),Q!==U&&(s.activeTexture(U),Q=U)}function S(U,mt,q){q===void 0&&(Q===null?q=s.TEXTURE0+K-1:q=Q);let j=at[q];j===void 0&&(j={type:void 0,texture:void 0},at[q]=j),(j.type!==U||j.texture!==mt)&&(Q!==q&&(s.activeTexture(q),Q=q),s.bindTexture(U,mt||yt[U]),j.type=U,j.texture=mt)}function z(){let U=at[Q];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(U){te.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function Et(U){Y.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function ee(U,mt){let q=c.get(mt);q===void 0&&(q=new WeakMap,c.set(mt,q));let j=q.get(U);j===void 0&&(j=s.getUniformBlockIndex(mt,U.name),q.set(U,j))}function $t(U,mt){let j=c.get(mt).get(U);l.get(mt)!==j&&(s.uniformBlockBinding(mt,j,U.__bindingPointIndex),l.set(mt,j))}function we(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,at={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,_=null,v=null,y=null,P=null,A=null,I=new bt(0,0,0),R=0,w=!1,b=null,L=null,H=null,B=null,O=null,te.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Lt,bindFramebuffer:zt,drawBuffers:kt,useProgram:ne,setBlending:D,setMaterial:Pt,setFlipSided:nt,setCullFace:St,setLineWidth:ut,setPolygonOffset:Nt,setScissorTest:vt,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:it,texImage2D:wt,texImage3D:Ft,updateUBOMapping:ee,uniformBlockBinding:$t,texStorage2D:Kt,texStorage3D:st,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Mt,scissor:Bt,viewport:Et,reset:we}}function mf(s,t,e,i){let n=B1(i);switch(e){case $f:return s*t;case Jf:return s*t;case Kf:return s*t*2;case Dh:return s*t/n.components*n.byteLength;case Lh:return s*t/n.components*n.byteLength;case Qf:return s*t*2/n.components*n.byteLength;case Uh:return s*t*2/n.components*n.byteLength;case Zf:return s*t*3/n.components*n.byteLength;case wi:return s*t*4/n.components*n.byteLength;case Nh:return s*t*4/n.components*n.byteLength;case Wa:case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oc:case cc:return Math.max(s,16)*Math.max(t,8)/4;case ac:case lc:return Math.max(s,8)*Math.max(t,8)/2;case hc:case uc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $a:case Ac:case Rc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case jf:case Cc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Pc:case Ic:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B1(s){switch(s){case cn:case Xf:return{byteLength:1,components:1};case Lr:case qf:case xi:return{byteLength:2,components:1};case Ph:case Ih:return{byteLength:2,components:4};case jn:case Ch:case Li:return{byteLength:4,components:1};case Yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function z1(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return d?new OffscreenCanvas(C,S):Ka("canvas")}function x(C,S,z){let Z=1,it=vt(C);if((it.width>z||it.height>z)&&(Z=z/Math.max(it.width,it.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let J=Math.floor(Z*it.width),Tt=Math.floor(Z*it.height);u===void 0&&(u=m(J,Tt));let dt=S?m(J,Tt):u;return dt.width=J,dt.height=Tt,dt.getContext("2d").drawImage(C,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+Tt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,S,z,Z,it=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===s.RED&&(z===s.FLOAT&&(J=s.R32F),z===s.HALF_FLOAT&&(J=s.R16F),z===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.R8UI),z===s.UNSIGNED_SHORT&&(J=s.R16UI),z===s.UNSIGNED_INT&&(J=s.R32UI),z===s.BYTE&&(J=s.R8I),z===s.SHORT&&(J=s.R16I),z===s.INT&&(J=s.R32I)),S===s.RG&&(z===s.FLOAT&&(J=s.RG32F),z===s.HALF_FLOAT&&(J=s.RG16F),z===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RG8UI),z===s.UNSIGNED_SHORT&&(J=s.RG16UI),z===s.UNSIGNED_INT&&(J=s.RG32UI),z===s.BYTE&&(J=s.RG8I),z===s.SHORT&&(J=s.RG16I),z===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGB8UI),z===s.UNSIGNED_SHORT&&(J=s.RGB16UI),z===s.UNSIGNED_INT&&(J=s.RGB32UI),z===s.BYTE&&(J=s.RGB8I),z===s.SHORT&&(J=s.RGB16I),z===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),z===s.UNSIGNED_INT&&(J=s.RGBA32UI),z===s.BYTE&&(J=s.RGBA8I),z===s.SHORT&&(J=s.RGBA16I),z===s.INT&&(J=s.RGBA32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),S===s.RGBA){let Tt=it?Do:Qt.getTransfer(Z);z===s.FLOAT&&(J=s.RGBA32F),z===s.HALF_FLOAT&&(J=s.RGBA16F),z===s.UNSIGNED_BYTE&&(J=Tt===me?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function y(C,S){let z;return C?S===null||S===jn||S===Bs?z=s.DEPTH24_STENCIL8:S===Li?z=s.DEPTH32F_STENCIL8:S===Lr&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===jn||S===Bs?z=s.DEPTH_COMPONENT24:S===Li?z=s.DEPTH_COMPONENT32F:S===Lr&&(z=s.DEPTH_COMPONENT16),z}function P(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ai&&C.minFilter!==Si?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function I(C){let S=C.target;S.removeEventListener("dispose",I),b(S)}function R(C){let S=i.get(C);if(S.__webglInit===void 0)return;let z=C.source,Z=f.get(z);if(Z){let it=Z[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(C),Object.keys(Z).length===0&&f.delete(z)}i.remove(C)}function w(C){let S=i.get(C);s.deleteTexture(S.__webglTexture);let z=C.source,Z=f.get(z);delete Z[S.__cacheKey],a.memory.textures--}function b(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let it=0;it<S.__webglFramebuffer[Z].length;it++)s.deleteFramebuffer(S.__webglFramebuffer[Z][it]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=C.textures;for(let Z=0,it=z.length;Z<it;Z++){let J=i.get(z[Z]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(z[Z])}i.remove(C)}let L=0;function H(){L=0}function B(){let C=L;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),L+=1,C}function O(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function K(C,S){let z=i.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,C,S);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function W(C,S){let z=i.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function X(C,S){let z=i.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function k(C,S){let z=i.get(C);if(C.version>0&&z.__version!==C.version){rt(z,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}let Q={[Dr]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[rc]:s.MIRRORED_REPEAT},at={[ai]:s.NEAREST,[Ep]:s.NEAREST_MIPMAP_NEAREST,[ha]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[ul]:s.LINEAR_MIPMAP_NEAREST,[an]:s.LINEAR_MIPMAP_LINEAR},ot={[Cp]:s.NEVER,[Np]:s.ALWAYS,[Pp]:s.LESS,[ed]:s.LEQUAL,[Ip]:s.EQUAL,[Up]:s.GEQUAL,[Dp]:s.GREATER,[Lp]:s.NOTEQUAL};function Dt(C,S){if(S.type===Li&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Si||S.magFilter===ul||S.magFilter===ha||S.magFilter===an||S.minFilter===Si||S.minFilter===ul||S.minFilter===ha||S.minFilter===an)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Q[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Q[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Q[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,at[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ai||S.minFilter!==ha&&S.minFilter!==an||S.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function te(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let Z=S.source,it=f.get(Z);it===void 0&&(it={},f.set(Z,it));let J=O(S);if(J!==C.__cacheKey){it[J]===void 0&&(it[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),it[J].usedTimes++;let Tt=it[C.__cacheKey];Tt!==void 0&&(it[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&w(S)),C.__cacheKey=J,C.__webglTexture=it[J].texture}return z}function Y(C,S,z){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);let it=te(C,S),J=S.source;e.bindTexture(Z,C.__webglTexture,s.TEXTURE0+z);let Tt=i.get(J);if(J.version!==Tt.__version||it===!0){e.activeTexture(s.TEXTURE0+z);let dt=Qt.getPrimaries(Qt.workingColorSpace),Mt=S.colorSpace===An?null:Qt.getPrimaries(S.colorSpace),Kt=S.colorSpace===An||dt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let st=x(S.image,!1,n.maxTextureSize);st=Nt(S,st);let wt=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),Bt=v(S.internalFormat,wt,Ft,S.colorSpace,S.isVideoTexture);Dt(Z,S);let Et,ee=S.mipmaps,$t=S.isVideoTexture!==!0,we=Tt.__version===void 0||it===!0,U=J.dataReady,mt=P(S,st);if(S.isDepthTexture)Bt=y(S.format===zs,S.type),we&&($t?e.texStorage2D(s.TEXTURE_2D,1,Bt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Bt,st.width,st.height,0,wt,Ft,null));else if(S.isDataTexture)if(ee.length>0){$t&&we&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,ee[0].width,ee[0].height);for(let q=0,j=ee.length;q<j;q++)Et=ee[q],$t?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,wt,Ft,Et.data):e.texImage2D(s.TEXTURE_2D,q,Bt,Et.width,Et.height,0,wt,Ft,Et.data);S.generateMipmaps=!1}else $t?(we&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,st.width,st.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,wt,Ft,st.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,st.width,st.height,0,wt,Ft,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$t&&we&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Bt,ee[0].width,ee[0].height,st.depth);for(let q=0,j=ee.length;q<j;q++)if(Et=ee[q],S.format!==wi)if(wt!==null)if($t){if(U)if(S.layerUpdates.size>0){let _t=mf(Et.width,Et.height,S.format,S.type);for(let gt of S.layerUpdates){let Xt=Et.data.subarray(gt*_t/Et.data.BYTES_PER_ELEMENT,(gt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,gt,Et.width,Et.height,1,wt,Xt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,st.depth,wt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Bt,Et.width,Et.height,st.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Et.width,Et.height,st.depth,wt,Ft,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Bt,Et.width,Et.height,st.depth,0,wt,Ft,Et.data)}else{$t&&we&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,ee[0].width,ee[0].height);for(let q=0,j=ee.length;q<j;q++)Et=ee[q],S.format!==wi?wt!==null?$t?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Et.width,Et.height,wt,Ft,Et.data):e.texImage2D(s.TEXTURE_2D,q,Bt,Et.width,Et.height,0,wt,Ft,Et.data)}else if(S.isDataArrayTexture)if($t){if(we&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Bt,st.width,st.height,st.depth),U)if(S.layerUpdates.size>0){let q=mf(st.width,st.height,S.format,S.type);for(let j of S.layerUpdates){let _t=st.data.subarray(j*q/st.data.BYTES_PER_ELEMENT,(j+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,wt,Ft,_t)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,wt,Ft,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,st.width,st.height,st.depth,0,wt,Ft,st.data);else if(S.isData3DTexture)$t?(we&&e.texStorage3D(s.TEXTURE_3D,mt,Bt,st.width,st.height,st.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,wt,Ft,st.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,st.width,st.height,st.depth,0,wt,Ft,st.data);else if(S.isFramebufferTexture){if(we)if($t)e.texStorage2D(s.TEXTURE_2D,mt,Bt,st.width,st.height);else{let q=st.width,j=st.height;for(let _t=0;_t<mt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Bt,q,j,0,wt,Ft,null),q>>=1,j>>=1}}else if(ee.length>0){if($t&&we){let q=vt(ee[0]);e.texStorage2D(s.TEXTURE_2D,mt,Bt,q.width,q.height)}for(let q=0,j=ee.length;q<j;q++)Et=ee[q],$t?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,wt,Ft,Et):e.texImage2D(s.TEXTURE_2D,q,Bt,wt,Ft,Et);S.generateMipmaps=!1}else if($t){if(we){let q=vt(st);e.texStorage2D(s.TEXTURE_2D,mt,Bt,q.width,q.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Ft,st)}else e.texImage2D(s.TEXTURE_2D,0,Bt,wt,Ft,st);g(S)&&p(Z),Tt.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function rt(C,S,z){if(S.image.length!==6)return;let Z=te(C,S),it=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);let J=i.get(it);if(it.version!==J.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);let Tt=Qt.getPrimaries(Qt.workingColorSpace),dt=S.colorSpace===An?null:Qt.getPrimaries(S.colorSpace),Mt=S.colorSpace===An||Tt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,wt=[];for(let j=0;j<6;j++)!Kt&&!st?wt[j]=x(S.image[j],!0,n.maxCubemapSize):wt[j]=st?S.image[j].image:S.image[j],wt[j]=Nt(S,wt[j]);let Ft=wt[0],Bt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),ee=v(S.internalFormat,Bt,Et,S.colorSpace),$t=S.isVideoTexture!==!0,we=J.__version===void 0||Z===!0,U=it.dataReady,mt=P(S,Ft);Dt(s.TEXTURE_CUBE_MAP,S);let q;if(Kt){$t&&we&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,ee,Ft.width,Ft.height);for(let j=0;j<6;j++){q=wt[j].mipmaps;for(let _t=0;_t<q.length;_t++){let gt=q[_t];S.format!==wi?Bt!==null?$t?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,gt.width,gt.height,Bt,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,ee,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,gt.width,gt.height,Bt,Et,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,ee,gt.width,gt.height,0,Bt,Et,gt.data)}}}else{if(q=S.mipmaps,$t&&we){q.length>0&&mt++;let j=vt(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,ee,j.width,j.height)}for(let j=0;j<6;j++)if(st){$t?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt[j].width,wt[j].height,Bt,Et,wt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,wt[j].width,wt[j].height,0,Bt,Et,wt[j].data);for(let _t=0;_t<q.length;_t++){let Xt=q[_t].image[j].image;$t?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Xt.width,Xt.height,Bt,Et,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,ee,Xt.width,Xt.height,0,Bt,Et,Xt.data)}}else{$t?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Bt,Et,wt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,Bt,Et,wt[j]);for(let _t=0;_t<q.length;_t++){let gt=q[_t];$t?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Bt,Et,gt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,ee,Bt,Et,gt.image[j])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),J.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function yt(C,S,z,Z,it,J){let Tt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),Mt=v(z.internalFormat,Tt,dt,z.colorSpace),Kt=i.get(S),st=i.get(z);if(st.__renderTarget=S,!Kt.__hasExternalTextures){let wt=Math.max(1,S.width>>J),Ft=Math.max(1,S.height>>J);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,J,Mt,wt,Ft,S.depth,0,Tt,dt,null):e.texImage2D(it,J,Mt,wt,Ft,0,Tt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),St(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,it,st.__webglTexture,0,nt(S)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,it,st.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(C,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let Z=S.depthTexture,it=Z&&Z.isDepthTexture?Z.type:null,J=y(S.stencilBuffer,it),Tt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=nt(S);St(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,J,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,J,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,C)}else{let Z=S.textures;for(let it=0;it<Z.length;it++){let J=Z[it],Tt=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),Mt=v(J.internalFormat,Tt,dt,J.colorSpace),Kt=nt(S);z&&St(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Mt,S.width,S.height):St(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,Mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);let it=Z.__webglTexture,J=nt(S);if(S.depthTexture.format===Ls)St(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(S.depthTexture.format===zs)St(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function zt(C){let S=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",it)};Z.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Lt(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),ht(S.__webglDepthbuffer[Z],C,!1);else{let it=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ht(S.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(C,S,z){let Z=i.get(C);S!==void 0&&yt(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&zt(C)}function ne(C){let S=C.texture,z=i.get(C),Z=i.get(S);C.addEventListener("dispose",I);let it=C.textures,J=C.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)z.__webglFramebuffer[dt][Mt]=s.createFramebuffer()}else z.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)z.__webglFramebuffer[dt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let dt=0,Mt=it.length;dt<Mt;dt++){let Kt=i.get(it[dt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&St(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){let Mt=it[dt];z.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let Kt=r.convert(Mt.format,Mt.colorSpace),st=r.convert(Mt.type),wt=v(Mt.internalFormat,Kt,st,Mt.colorSpace,C.isXRRenderTarget===!0),Ft=nt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,wt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)yt(z.__webglFramebuffer[dt][Mt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Mt);else yt(z.__webglFramebuffer[dt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,Mt=it.length;dt<Mt;dt++){let Kt=it[dt],st=i.get(Kt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Dt(s.TEXTURE_2D,Kt),yt(z.__webglFramebuffer,C,Kt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(Kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),Dt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)yt(z.__webglFramebuffer[Mt],C,S,s.COLOR_ATTACHMENT0,dt,Mt);else yt(z.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,dt,0);g(S)&&p(dt),e.unbindTexture()}C.depthBuffer&&zt(C)}function tt(C){let S=C.textures;for(let z=0,Z=S.length;z<Z;z++){let it=S[z];if(g(it)){let J=_(C),Tt=i.get(it).__webglTexture;e.bindTexture(J,Tt),p(J),e.unbindTexture()}}}let lt=[],D=[];function Pt(C){if(C.samples>0){if(St(C)===!1){let S=C.textures,z=C.width,Z=C.height,it=s.COLOR_BUFFER_BIT,J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=i.get(C),dt=S.length>1;if(dt)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let Kt=i.get(S[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,it,s.NEAREST),l===!0&&(lt.length=0,D.length=0,lt.push(s.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(lt.push(J),D.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let Kt=i.get(S[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function nt(C){return Math.min(n.maxSamples,C.samples)}function St(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Nt(C,S){let z=C.colorSpace,Z=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Zs&&z!==An&&(Qt.getTransfer(z)===me?(Z!==wi||it!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=kt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=St}function H1(s,t){function e(i,n=An){let r,a=Qt.getTransfer(n);if(i===cn)return s.UNSIGNED_BYTE;if(i===Ph)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ih)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Yf)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return s.BYTE;if(i===qf)return s.SHORT;if(i===Lr)return s.UNSIGNED_SHORT;if(i===Ch)return s.INT;if(i===jn)return s.UNSIGNED_INT;if(i===Li)return s.FLOAT;if(i===xi)return s.HALF_FLOAT;if(i===$f)return s.ALPHA;if(i===Zf)return s.RGB;if(i===wi)return s.RGBA;if(i===Jf)return s.LUMINANCE;if(i===Kf)return s.LUMINANCE_ALPHA;if(i===Ls)return s.DEPTH_COMPONENT;if(i===zs)return s.DEPTH_STENCIL;if(i===Dh)return s.RED;if(i===Lh)return s.RED_INTEGER;if(i===Qf)return s.RG;if(i===Uh)return s.RG_INTEGER;if(i===Nh)return s.RGBA_INTEGER;if(i===Wa||i===Xa||i===qa||i===Ya)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ac||i===oc||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===uc||i===fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hc||i===uc)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dc||i===pc||i===mc||i===gc||i===xc||i===yc||i===_c||i===vc||i===Mc||i===bc||i===Sc||i===wc||i===Ec||i===Tc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===Ac||i===Rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===$a)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jf||i===Cc||i===Pc||i===Ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Yc=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},jt=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},V1={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V1)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
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

}`,$c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new fi,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Be({vertexShader:G1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zc=class extends In{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=new $c,g=e.getContextAttributes(),p=null,_=null,v=[],y=[],P=new et,A=null,I=new Qe;I.viewport=new ce;let R=new Qe;R.viewport=new ce;let w=[I,R],b=new Yc,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=v[Y];return rt===void 0&&(rt=new Rr,v[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=v[Y];return rt===void 0&&(rt=new Rr,v[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=v[Y];return rt===void 0&&(rt=new Rr,v[Y]=rt),rt.getHandSpace()};function B(Y){let rt=y.indexOf(Y.inputSource);if(rt===-1)return;let yt=v[rt];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||a),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",K);for(let Y=0;Y<v.length;Y++){let rt=y[Y];rt!==null&&(y[Y]=null,v[Y].disconnect(rt))}L=null,H=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,n=null,_=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",O),n.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),n.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,rt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new je(d.framebufferWidth,d.framebufferHeight,{format:wi,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,yt=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?zs:Ls,yt=g.stencil?Bs:jn);let Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(Lt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new je(f.textureWidth,f.textureHeight,{format:wi,type:cn,depthTexture:new no(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(Y){for(let rt=0;rt<Y.removed.length;rt++){let yt=Y.removed[rt],ht=y.indexOf(yt);ht>=0&&(y[ht]=null,v[ht].disconnect(yt))}for(let rt=0;rt<Y.added.length;rt++){let yt=Y.added[rt],ht=y.indexOf(yt);if(ht===-1){for(let zt=0;zt<v.length;zt++)if(zt>=y.length){y.push(yt),ht=zt;break}else if(y[zt]===null){y[zt]=yt,ht=zt;break}if(ht===-1)break}let Lt=v[ht];Lt&&Lt.connect(yt)}}let W=new E,X=new E;function k(Y,rt,yt){W.setFromMatrixPosition(rt.matrixWorld),X.setFromMatrixPosition(yt.matrixWorld);let ht=W.distanceTo(X),Lt=rt.projectionMatrix.elements,zt=yt.projectionMatrix.elements,kt=Lt[14]/(Lt[10]-1),ne=Lt[14]/(Lt[10]+1),tt=(Lt[9]+1)/Lt[5],lt=(Lt[9]-1)/Lt[5],D=(Lt[8]-1)/Lt[0],Pt=(zt[8]+1)/zt[0],nt=kt*D,St=kt*Pt,ut=ht/(-D+Pt),Nt=ut*-D;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Nt),Y.translateZ(ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Lt[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let vt=kt+ut,C=ne+ut,S=nt-Nt,z=St+(ht-Nt),Z=tt*ne/C*vt,it=lt*ne/C*vt;Y.projectionMatrix.makePerspective(S,z,Z,it,vt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Q(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let rt=Y.near,yt=Y.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),b.near=R.near=I.near=rt,b.far=R.far=I.far=yt,(L!==b.near||H!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,H=b.far),I.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,b.layers.mask=I.layers.mask|R.layers.mask;let ht=Y.parent,Lt=b.cameras;Q(b,ht);for(let zt=0;zt<Lt.length;zt++)Q(Lt[zt],ht);Lt.length===2?k(b,I,R):b.projectionMatrix.copy(I.projectionMatrix),at(Y,b,ht)};function at(Y,rt,yt){yt===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Hs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ot=null;function Dt(Y,rt){if(h=rt.getViewerPose(c||a),m=rt,h!==null){let yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ht=!1;yt.length!==b.cameras.length&&(b.cameras.length=0,ht=!0);for(let zt=0;zt<yt.length;zt++){let kt=yt[zt],ne=null;if(d!==null)ne=d.getViewport(kt);else{let lt=u.getViewSubImage(f,kt);ne=lt.viewport,zt===0&&(t.setRenderTargetTextures(_,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(_))}let tt=w[zt];tt===void 0&&(tt=new Qe,tt.layers.enable(zt),tt.viewport=new ce,w[zt]=tt),tt.matrix.fromArray(kt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(kt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ne.x,ne.y,ne.width,ne.height),zt===0&&(b.matrix.copy(tt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ht===!0&&b.cameras.push(tt)}let Lt=n.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let zt=u.getDepthInformation(yt[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,n.renderState)}}for(let yt=0;yt<v.length;yt++){let ht=y[yt],Lt=v[yt];ht!==null&&Lt!==void 0&&Lt.update(ht,rt,c||a)}ot&&ot(Y,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),m=null}let te=new rd;te.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){ot=Y},this.dispose=function(){}}},$n=new di,X1=new Ot;function q1(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,sd(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,$n.copy(y),$n.x*=-1,$n.y*=-1,$n.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),g.envMapRotation.value.setFromMatrix4(X1.makeRotationFromEuler($n)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Y1(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=n[_.id];y===void 0&&(m(_),y=h(_),n[_.id]=y,_.addEventListener("dispose",g));let P=v.program;i.updateUBOMapping(_,P);let A=t.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){let v=u();_.__bindingPointIndex=v;let y=s.createBuffer(),P=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=n[_.id],y=_.uniforms,P=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,I=y.length;A<I;A++){let R=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,b=R.length;w<b;w++){let L=R[w];if(d(L,A,w,P)===!0){let H=L.__offset,B=Array.isArray(L.value)?L.value:[L.value],O=0;for(let K=0;K<B.length;K++){let W=B[K],X=x(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,H+O,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,v,y,P){let A=_.value,I=v+"_"+y;if(P[I]===void 0)return typeof A=="number"||typeof A=="boolean"?P[I]=A:P[I]=A.clone(),!0;{let R=P[I];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[I]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function m(_){let v=_.uniforms,y=0,P=16;for(let I=0,R=v.length;I<R;I++){let w=Array.isArray(v[I])?v[I]:[v[I]];for(let b=0,L=w.length;b<L;b++){let H=w[b],B=Array.isArray(H.value)?H.value:[H.value];for(let O=0,K=B.length;O<K;O++){let W=B[O],X=x(W),k=y%P,Q=k%X.boundary,at=k+Q;y+=Q,at!==0&&P-at<X.storage&&(y+=P-at),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=X.storage}}}let A=y%P;return A>0&&(y+=P-A),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(let _ in n)s.deleteBuffer(n[_]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}var so=class{constructor(t={}){let{canvas:e=Qp(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Pn,this.toneMappingExposure=1;let y=this,P=!1,A=0,I=0,R=null,w=-1,b=null,L=new ce,H=new ce,B=null,O=new bt(0),K=0,W=e.width,X=e.height,k=1,Q=null,at=null,ot=new ce(0,0,W,X),Dt=new ce(0,0,W,X),te=!1,Y=new Nr,rt=!1,yt=!1,ht=new Ot,Lt=new Ot,zt=new E,kt=new ce,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function lt(){return R===null?k:1}let D=i;function Pt(T,N){return e.getContext(T,N)}try{let T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bh}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){let N="webgl2";if(D=Pt(N,T),D===null)throw Pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let nt,St,ut,Nt,vt,C,S,z,Z,it,J,Tt,dt,Mt,Kt,st,wt,Ft,Bt,Et,ee,$t,we,U;function mt(){nt=new cx(D),nt.init(),$t=new H1(D,nt),St=new nx(D,nt,t,$t),ut=new O1(D,nt),St.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),Nt=new fx(D),vt=new E1,C=new z1(D,nt,ut,vt,St,$t,Nt),S=new rx(y),z=new lx(y),Z=new _0(D),we=new ex(D,Z),it=new hx(D,Z,Nt,we),J=new px(D,it,Z,Nt),Bt=new dx(D,St,C),st=new sx(vt),Tt=new w1(y,S,z,nt,St,we,st),dt=new q1(y,vt),Mt=new A1,Kt=new L1(nt),Ft=new tx(y,S,z,ut,J,d,l),wt=new F1(y,J,St),U=new Y1(D,Nt,St,ut),Et=new ix(D,nt,Nt),ee=new ux(D,nt,Nt),Nt.programs=Tt.programs,y.capabilities=St,y.extensions=nt,y.properties=vt,y.renderLists=Mt,y.shadowMap=wt,y.state=ut,y.info=Nt}mt();let q=new Zc(y,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(W,X,!1))},this.getSize=function(T){return T.set(W,X)},this.setSize=function(T,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,X=N,e.width=Math.floor(T*k),e.height=Math.floor(N*k),V===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(W*k,X*k).floor()},this.setDrawingBufferSize=function(T,N,V){W=T,X=N,k=V,e.width=Math.floor(T*V),e.height=Math.floor(N*V),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ot)},this.setViewport=function(T,N,V,G){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,N,V,G),ut.viewport(L.copy(ot).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(Dt)},this.setScissor=function(T,N,V,G){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,N,V,G),ut.scissor(H.copy(Dt).multiplyScalar(k).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){ut.setScissorTest(te=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(T=!0,N=!0,V=!0){let G=0;if(T){let F=!1;if(R!==null){let ct=R.texture.format;F=ct===Nh||ct===Uh||ct===Lh}if(F){let ct=R.texture.type,xt=ct===cn||ct===jn||ct===Lr||ct===Bs||ct===Ph||ct===Ih,At=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Ht=At.r,qt=At.g,Ct=At.b;xt?(m[0]=Ht,m[1]=qt,m[2]=Ct,m[3]=Rt,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Ht,x[1]=qt,x[2]=Ct,x[3]=Rt,D.clearBufferiv(D.COLOR,0,x))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Mt.dispose(),Kt.dispose(),vt.dispose(),S.dispose(),z.dispose(),J.dispose(),we.dispose(),U.dispose(),Tt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ou),q.removeEventListener("sessionend",lu),Vn.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let T=Nt.autoReset,N=wt.enabled,V=wt.autoUpdate,G=wt.needsUpdate,F=wt.type;mt(),Nt.autoReset=T,wt.enabled=N,wt.autoUpdate=V,wt.needsUpdate=G,wt.type=F}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xt(T){let N=T.target;N.removeEventListener("dispose",Xt),Oe(N)}function Oe(T){ti(T),vt.remove(T)}function ti(T){let N=vt.get(T).programs;N!==void 0&&(N.forEach(function(V){Tt.releaseProgram(V)}),T.isShaderMaterial&&Tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,V,G,F,ct){N===null&&(N=ne);let xt=F.isMesh&&F.matrixWorld.determinant()<0,At=Qd(T,N,V,G,F);ut.setMaterial(G,xt);let Rt=V.index,Ht=1;if(G.wireframe===!0){if(Rt=it.getWireframeAttribute(V),Rt===void 0)return;Ht=2}let qt=V.drawRange,Ct=V.attributes.position,oe=qt.start*Ht,Ee=(qt.start+qt.count)*Ht;ct!==null&&(oe=Math.max(oe,ct.start*Ht),Ee=Math.min(Ee,(ct.start+ct.count)*Ht)),Rt!==null?(oe=Math.max(oe,0),Ee=Math.min(Ee,Rt.count)):Ct!=null&&(oe=Math.max(oe,0),Ee=Math.min(Ee,Ct.count));let Ce=Ee-oe;if(Ce<0||Ce===1/0)return;we.setup(F,G,At,V,Rt);let hi,de=Et;if(Rt!==null&&(hi=Z.get(Rt),de=ee,de.setIndex(hi)),F.isMesh)G.wireframe===!0?(ut.setLineWidth(G.wireframeLinewidth*lt()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(F.isLine){let It=G.linewidth;It===void 0&&(It=1),ut.setLineWidth(It*lt()),F.isLineSegments?de.setMode(D.LINES):F.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else F.isPoints?de.setMode(D.POINTS):F.isSprite&&de.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)de.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))de.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let It=F._multiDrawStarts,Ki=F._multiDrawCounts,pe=F._multiDrawCount,Ri=Rt?Z.get(Rt).bytesPerElement:1,us=vt.get(G).currentProgram.getUniforms();for(let pi=0;pi<pe;pi++)us.setValue(D,"_gl_DrawID",pi),de.render(It[pi]/Ri,Ki[pi])}else if(F.isInstancedMesh)de.renderInstances(oe,Ce,F.count);else if(V.isInstancedBufferGeometry){let It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ki=Math.min(V.instanceCount,It);de.renderInstances(oe,Ce,Ki)}else de.render(oe,Ce)};function ye(T,N,V){T.transparent===!0&&T.side===bi&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,ca(T,N,V),T.side=Vi,T.needsUpdate=!0,ca(T,N,V),T.side=bi):ca(T,N,V)}this.compile=function(T,N,V=null){V===null&&(V=T),p=Kt.get(V),p.init(N),v.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==V&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let G=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ct=F.material;if(ct)if(Array.isArray(ct))for(let xt=0;xt<ct.length;xt++){let At=ct[xt];ye(At,V,F),G.add(At)}else ye(ct,V,F),G.add(ct)}),v.pop(),p=null,G},this.compileAsync=function(T,N,V=null){let G=this.compile(T,N,V);return new Promise(F=>{function ct(){if(G.forEach(function(xt){vt.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){F(T);return}setTimeout(ct,10)}nt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ai=null;function Ji(T){Ai&&Ai(T)}function ou(){Vn.stop()}function lu(){Vn.start()}let Vn=new rd;Vn.setAnimationLoop(Ji),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(T){Ai=T,q.setAnimationLoop(T),T===null?Vn.stop():Vn.start()},q.addEventListener("sessionstart",ou),q.addEventListener("sessionend",lu),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,N,R),p=Kt.get(T,v.length),p.init(N),v.push(p),Lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Lt),yt=this.localClippingEnabled,rt=st.init(this.clippingPlanes,yt),g=Mt.get(T,_.length),g.init(),_.push(g),q.enabled===!0&&q.isPresenting===!0){let ct=y.xr.getDepthSensingMesh();ct!==null&&hl(ct,N,-1/0,y.sortObjects)}hl(T,N,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Q,at),tt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,tt&&Ft.addToRenderList(g,T),this.info.render.frame++,rt===!0&&st.beginShadows();let V=p.state.shadowsArray;wt.render(V,T,N),rt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,F=g.transmissive;if(p.setupLights(),N.isArrayCamera){let ct=N.cameras;if(F.length>0)for(let xt=0,At=ct.length;xt<At;xt++){let Rt=ct[xt];hu(G,F,T,Rt)}tt&&Ft.render(T);for(let xt=0,At=ct.length;xt<At;xt++){let Rt=ct[xt];cu(g,T,Rt,Rt.viewport)}}else F.length>0&&hu(G,F,T,N),tt&&Ft.render(T),cu(g,T,N);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,N),we.resetDefaultState(),w=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],rt===!0&&st.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function hl(T,N,V,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){G&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Lt);let xt=J.update(T),At=T.material;At.visible&&g.push(T,xt,At,V,kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){let xt=J.update(T),At=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),kt.copy(xt.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(Lt)),Array.isArray(At)){let Rt=xt.groups;for(let Ht=0,qt=Rt.length;Ht<qt;Ht++){let Ct=Rt[Ht],oe=At[Ct.materialIndex];oe&&oe.visible&&g.push(T,xt,oe,V,kt.z,Ct)}}else At.visible&&g.push(T,xt,At,V,kt.z,null)}}let ct=T.children;for(let xt=0,At=ct.length;xt<At;xt++)hl(ct[xt],N,V,G)}function cu(T,N,V,G){let F=T.opaque,ct=T.transmissive,xt=T.transparent;p.setupLightsView(V),rt===!0&&st.setGlobalState(y.clippingPlanes,V),G&&ut.viewport(L.copy(G)),F.length>0&&la(F,N,V),ct.length>0&&la(ct,N,V),xt.length>0&&la(xt,N,V),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function hu(T,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new je(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?xi:cn,minFilter:an,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let ct=p.state.transmissionRenderTarget[G.id],xt=G.viewport||L;ct.setSize(xt.z,xt.w);let At=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(O),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),tt&&Ft.render(V);let Rt=y.toneMapping;y.toneMapping=Pn;let Ht=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),rt===!0&&st.setGlobalState(y.clippingPlanes,G),la(T,V,G),C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct),nt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ct=0,oe=N.length;Ct<oe;Ct++){let Ee=N[Ct],Ce=Ee.object,hi=Ee.geometry,de=Ee.material,It=Ee.group;if(de.side===bi&&Ce.layers.test(G.layers)){let Ki=de.side;de.side=Je,de.needsUpdate=!0,uu(Ce,V,G,hi,de,It),de.side=Ki,de.needsUpdate=!0,qt=!0}}qt===!0&&(C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct))}y.setRenderTarget(At),y.setClearColor(O,K),Ht!==void 0&&(G.viewport=Ht),y.toneMapping=Rt}function la(T,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ct=T.length;F<ct;F++){let xt=T[F],At=xt.object,Rt=xt.geometry,Ht=G===null?xt.material:G,qt=xt.group;At.layers.test(V.layers)&&uu(At,N,V,Rt,Ht,qt)}}function uu(T,N,V,G,F,ct){T.onBeforeRender(y,N,V,G,F,ct),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,N,V,G,T,ct),F.transparent===!0&&F.side===bi&&F.forceSinglePass===!1?(F.side=Je,F.needsUpdate=!0,y.renderBufferDirect(V,N,G,F,T,ct),F.side=Vi,F.needsUpdate=!0,y.renderBufferDirect(V,N,G,F,T,ct),F.side=bi):y.renderBufferDirect(V,N,G,F,T,ct),T.onAfterRender(y,N,V,G,F,ct)}function ca(T,N,V){N.isScene!==!0&&(N=ne);let G=vt.get(T),F=p.state.lights,ct=p.state.shadowsArray,xt=F.state.version,At=Tt.getParameters(T,F.state,ct,N,V),Rt=Tt.getProgramCacheKey(At),Ht=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?z:S).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",Xt),Ht=new Map,G.programs=Ht);let qt=Ht.get(Rt);if(qt!==void 0){if(G.currentProgram===qt&&G.lightsStateVersion===xt)return du(T,At),qt}else At.uniforms=Tt.getUniforms(T),T.onBeforeCompile(At,y),qt=Tt.acquireProgram(At,Rt),Ht.set(Rt,qt),G.uniforms=At.uniforms;let Ct=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=st.uniform),du(T,At),G.needsLights=tp(T),G.lightsStateVersion=xt,G.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=qt,G.uniformsList=null,qt}function fu(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Ns.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function du(T,N){let V=vt.get(T);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Qd(T,N,V,G,F){N.isScene!==!0&&(N=ne),C.resetTextureUnits();let ct=N.fog,xt=G.isMeshStandardMaterial?N.environment:null,At=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Zs,Rt=(G.isMeshStandardMaterial?z:S).get(G.envMap||xt),Ht=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!V.morphAttributes.position,oe=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color,Ce=Pn;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ce=y.toneMapping);let hi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=hi!==void 0?hi.length:0,It=vt.get(G),Ki=p.state.lights;if(rt===!0&&(yt===!0||T!==b)){let vi=T===b&&G.id===w;st.setState(G,T,vi)}let pe=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ki.state.version||It.outputColorSpace!==At||F.isBatchedMesh&&It.batching===!1||!F.isBatchedMesh&&It.batching===!0||F.isBatchedMesh&&It.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&It.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&It.instancing===!1||!F.isInstancedMesh&&It.instancing===!0||F.isSkinnedMesh&&It.skinning===!1||!F.isSkinnedMesh&&It.skinning===!0||F.isInstancedMesh&&It.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&It.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&It.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&It.instancingMorph===!1&&F.morphTexture!==null||It.envMap!==Rt||G.fog===!0&&It.fog!==ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==st.numPlanes||It.numIntersection!==st.numIntersection)||It.vertexAlphas!==Ht||It.vertexTangents!==qt||It.morphTargets!==Ct||It.morphNormals!==oe||It.morphColors!==Ee||It.toneMapping!==Ce||It.morphTargetsCount!==de)&&(pe=!0):(pe=!0,It.__version=G.version);let Ri=It.currentProgram;pe===!0&&(Ri=ca(G,N,F));let us=!1,pi=!1,ur=!1,Pe=Ri.getUniforms(),Bi=It.uniforms;if(ut.useProgram(Ri.program)&&(us=!0,pi=!0,ur=!0),G.id!==w&&(w=G.id,pi=!0),us||b!==T){ut.buffers.depth.getReversed()?(ht.copy(T.projectionMatrix),t0(ht),e0(ht),Pe.setValue(D,"projectionMatrix",ht)):Pe.setValue(D,"projectionMatrix",T.projectionMatrix),Pe.setValue(D,"viewMatrix",T.matrixWorldInverse);let _n=Pe.map.cameraPosition;_n!==void 0&&_n.setValue(D,zt.setFromMatrixPosition(T.matrixWorld)),St.logarithmicDepthBuffer&&Pe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,pi=!0,ur=!0)}if(F.isSkinnedMesh){Pe.setOptional(D,F,"bindMatrix"),Pe.setOptional(D,F,"bindMatrixInverse");let vi=F.skeleton;vi&&(vi.boneTexture===null&&vi.computeBoneTexture(),Pe.setValue(D,"boneTexture",vi.boneTexture,C))}F.isBatchedMesh&&(Pe.setOptional(D,F,"batchingTexture"),Pe.setValue(D,"batchingTexture",F._matricesTexture,C),Pe.setOptional(D,F,"batchingIdTexture"),Pe.setValue(D,"batchingIdTexture",F._indirectTexture,C),Pe.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Pe.setValue(D,"batchingColorTexture",F._colorsTexture,C));let fr=V.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&Bt.update(F,V,Ri),(pi||It.receiveShadow!==F.receiveShadow)&&(It.receiveShadow=F.receiveShadow,Pe.setValue(D,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Bi.envMap.value=Rt,Bi.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Bi.envMapIntensity.value=N.environmentIntensity),pi&&(Pe.setValue(D,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&jd(Bi,ur),ct&&G.fog===!0&&dt.refreshFogUniforms(Bi,ct),dt.refreshMaterialUniforms(Bi,G,k,X,p.state.transmissionRenderTarget[T.id]),Ns.upload(D,fu(It),Bi,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ns.upload(D,fu(It),Bi,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pe.setValue(D,"center",F.center),Pe.setValue(D,"modelViewMatrix",F.modelViewMatrix),Pe.setValue(D,"normalMatrix",F.normalMatrix),Pe.setValue(D,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let vi=G.uniformsGroups;for(let _n=0,vn=vi.length;_n<vn;_n++){let pu=vi[_n];U.update(pu,Ri),U.bind(pu,Ri)}}return Ri}function jd(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function tp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,N,V){vt.get(T.texture).__webglTexture=N,vt.get(T.depthTexture).__webglTexture=V;let G=vt.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){let V=vt.get(T);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,V=0){R=T,A=N,I=V;let G=!0,F=null,ct=!1,xt=!1;if(T){let Rt=vt.get(T);if(Rt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Rt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Rt.__hasExternalTextures)C.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ct=T.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(T.width!==Ct.image.width||T.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}let Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);let qt=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qt[N])?F=qt[N][V]:F=qt[N],ct=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?F=vt.get(T).__webglMultisampledFramebuffer:Array.isArray(qt)?F=qt[V]:F=qt,L.copy(T.viewport),H.copy(T.scissor),B=T.scissorTest}else L.copy(ot).multiplyScalar(k).floor(),H.copy(Dt).multiplyScalar(k).floor(),B=te;if(ut.bindFramebuffer(D.FRAMEBUFFER,F)&&G&&ut.drawBuffers(T,F),ut.viewport(L),ut.scissor(H),ut.setScissorTest(B),ct){let Rt=vt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt.__webglTexture,V)}else if(xt){let Rt=vt.get(T.texture),Ht=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,V||0,Ht)}w=-1},this.readRenderTargetPixels=function(T,N,V,G,F,ct,xt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){ut.bindFramebuffer(D.FRAMEBUFFER,At);try{let Rt=T.texture,Ht=Rt.format,qt=Rt.type;if(!St.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&V>=0&&V<=T.height-F&&D.readPixels(N,V,G,F,$t.convert(Ht),$t.convert(qt),ct)}finally{let Rt=R!==null?vt.get(R).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(T,N,V,G,F,ct,xt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(At=At[xt]),At){let Rt=T.texture,Ht=Rt.format,qt=Rt.type;if(!St.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-G&&V>=0&&V<=T.height-F){ut.bindFramebuffer(D.FRAMEBUFFER,At);let Ct=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ct),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),D.readPixels(N,V,G,F,$t.convert(Ht),$t.convert(qt),0);let oe=R!==null?vt.get(R).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,oe);let Ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jp(D,Ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ct),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Ct),D.deleteSync(Ee),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,V=0){T.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(T.image.width*G),ct=Math.floor(T.image.height*G),xt=N!==null?N.x:0,At=N!==null?N.y:0;C.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,xt,At,F,ct),ut.unbindTexture()},this.copyTextureToTexture=function(T,N,V=null,G=null,F=0){T.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let ct,xt,At,Rt,Ht,qt,Ct,oe,Ee,Ce=T.isCompressedTexture?T.mipmaps[F]:T.image;V!==null?(ct=V.max.x-V.min.x,xt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,Rt=V.min.x,Ht=V.min.y,qt=V.isBox3?V.min.z:0):(ct=Ce.width,xt=Ce.height,At=Ce.depth||1,Rt=0,Ht=0,qt=0),G!==null?(Ct=G.x,oe=G.y,Ee=G.z):(Ct=0,oe=0,Ee=0);let hi=$t.convert(N.format),de=$t.convert(N.type),It;N.isData3DTexture?(C.setTexture3D(N,0),It=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),It=D.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let Ki=D.getParameter(D.UNPACK_ROW_LENGTH),pe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ri=D.getParameter(D.UNPACK_SKIP_PIXELS),us=D.getParameter(D.UNPACK_SKIP_ROWS),pi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qt);let ur=T.isDataArrayTexture||T.isData3DTexture,Pe=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Bi=vt.get(T),fr=vt.get(N),vi=vt.get(Bi.__renderTarget),_n=vt.get(fr.__renderTarget);ut.bindFramebuffer(D.READ_FRAMEBUFFER,vi.__webglFramebuffer),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let vn=0;vn<At;vn++)ur&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(T).__webglTexture,F,qt+vn),T.isDepthTexture?(Pe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(N).__webglTexture,F,Ee+vn),D.blitFramebuffer(Rt,Ht,ct,xt,Ct,oe,ct,xt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Pe?D.copyTexSubImage3D(It,F,Ct,oe,Ee+vn,Rt,Ht,ct,xt):D.copyTexSubImage2D(It,F,Ct,oe,Ee+vn,Rt,Ht,ct,xt);ut.bindFramebuffer(D.READ_FRAMEBUFFER,null),ut.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pe?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(It,F,Ct,oe,Ee,ct,xt,At,hi,de,Ce.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(It,F,Ct,oe,Ee,ct,xt,At,hi,Ce.data):D.texSubImage3D(It,F,Ct,oe,Ee,ct,xt,At,hi,de,Ce):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Ct,oe,ct,xt,hi,de,Ce.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Ct,oe,Ce.width,Ce.height,hi,Ce.data):D.texSubImage2D(D.TEXTURE_2D,F,Ct,oe,ct,xt,hi,de,Ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ki),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,us),D.pixelStorei(D.UNPACK_SKIP_IMAGES,pi),F===0&&N.generateMipmaps&&D.generateMipmap(It),ut.unbindTexture()},this.copyTextureToTexture3D=function(T,N,V=null,G=null,F=0){return T.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],N=arguments[3],F=arguments[4]||0),wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,V,G,F)},this.initRenderTarget=function(T){vt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){A=0,I=0,R=null,ut.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}},ro=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xs=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},si=new E,Fr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Di(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Di(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Di(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Di(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Di(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wi=class extends Gi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ts,xr=new E,As=new E,Rs=new E,Cs=new et,yr=new et,hd=new Ot,Ia=new E,_r=new E,Da=new E,gf=new et,Bl=new et,xf=new et,un=class extends Te{constructor(t=new Wi){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ao(e,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Fr(i,3,0,!1)),Ts.setAttribute("uv",new Fr(i,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),hd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;La(Ia.set(-.5,-.5,0),Rs,a,As,n,r),La(_r.set(.5,-.5,0),Rs,a,As,n,r),La(Da.set(.5,.5,0),Rs,a,As,n,r),gf.set(0,0),Bl.set(1,0),xf.set(1,1);let o=t.ray.intersectTriangle(Ia,_r,Da,!1,xr);if(o===null&&(La(_r.set(-.5,.5,0),Rs,a,As,n,r),Bl.set(0,1),o=t.ray.intersectTriangle(Ia,Da,_r,!1,xr),o===null))return;let l=t.ray.origin.distanceTo(xr);l<t.near||l>t.far||e.push({distance:l,point:xr.clone(),uv:Rn.getInterpolation(xr,Ia,_r,Da,gf,Bl,xf,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function La(s,t,e,i,n,r){Cs.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(yr.x=r*Cs.x-n*Cs.y,yr.y=n*Cs.x+r*Cs.y):yr.copy(Cs),s.copy(t),s.x+=yr.x,s.y+=yr.y,s.applyMatrix4(hd)}var yf=new E,_f=new ce,vf=new ce,$1=new E,Mf=new Ot,Ua=new E,zl=new Ni,bf=new Ot,Hl=new ts,kr=class extends ${constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yu,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ni),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Ua),this.boundingSphere.expandByPoint(Ua)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(n),t.ray.intersectsSphere(zl)!==!1&&(bf.copy(n).invert(),Hl.copy(t.ray).applyMatrix4(bf),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Hl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ce,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;_f.fromBufferAttribute(n.attributes.skinIndex,t),vf.fromBufferAttribute(n.attributes.skinWeight,t),yf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let a=vf.getComponent(r);if(a!==0){let o=_f.getComponent(r);Mf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector($1.copy(yf).applyMatrix4(Mf),a)}}return e.applyMatrix4(this.bindMatrixInverse)}},Or=class extends Te{constructor(){super(),this.isBone=!0,this.type="Bone"}},oo=class extends fi{constructor(t=null,e=1,i=1,n,r,a,o,l,c=ai,h=ai,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sf=new Ot,Z1=new Ot,lo=class s{constructor(t=[],e=[]){this.uuid=Ui(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Ot;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:Z1;Sf.multiplyMatrices(o,e[r]),Sf.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new oo(e,t,t,wi,Li);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let r=t.bones[i],a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Or),this.bones.push(a),this.boneInverses.push(new Ot().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,r=e.length;n<r;n++){let a=e[n];t.bones.push(a.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}},Br=class extends Fe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ps=new Ot,wf=new Ot,Na=[],Ef=new Ei,J1=new Ot,vr=new $,Mr=new Ni,co=class extends ${constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,J1)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),Ef.copy(t.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Ef)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ps),Mr.copy(t.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),t.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ps),wf.multiplyMatrices(i,Ps),vr.matrixWorld=wf,vr.raycast(t,Na);for(let a=0,o=Na.length;a<o;a++){let l=Na[a];l.instanceId=r,l.object=this,e.push(l)}Na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new oo(new Float32Array(n*this.count),n,this.count,Dh,Li));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zr=class extends Gi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ho=new E,uo=new E,Tf=new Ot,br=new ts,Fa=new Ni,Vl=new E,Af=new E,Jc=class extends Te{constructor(t=new Ae,e=new zr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)ho.fromBufferAttribute(e,n-1),uo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ho.distanceTo(uo);t.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(n),Fa.radius+=r,t.ray.intersectsSphere(Fa)===!1)return;Tf.copy(n).invert(),br.copy(t.ray).applyMatrix4(Tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),_=h.getX(x+1),v=ka(this,t,br,l,p,_);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=ka(this,t,br,l,x,g);p&&e.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=ka(this,t,br,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ka(this,t,br,l,m-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ka(s,t,e,i,n,r){let a=s.geometry.attributes.position;if(ho.fromBufferAttribute(a,n),uo.fromBufferAttribute(a,r),e.distanceSqToSegment(ho,uo,Vl,Af)>i)return;Vl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Vl);if(!(l<t.near||l>t.far))return{distance:l,point:Af.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var Rf=new E,Cf=new E,fo=class extends Jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Rf.fromBufferAttribute(e,n),Cf.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Rf.distanceTo(Cf);t.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Kc=class extends Gi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pf=new Ot,Qc=new ts,Oa=new Ni,Ba=new E,po=class extends Te{constructor(t=new Ae,e=new Kc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(n),Oa.radius+=r,t.ray.intersectsSphere(Oa)===!1)return;Pf.copy(n).invert(),Qc.copy(t.ray).applyMatrix4(Pf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Ba.fromBufferAttribute(u,g),If(Ba,g,l,n,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,x=d;m<x;m++)Ba.fromBufferAttribute(u,m),If(Ba,m,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function If(s,t,e,i,n,r,a){let o=Qc.distanceSqToPoint(s);if(o<e){let l=new E;Qc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var mo=class extends fi{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(a-h)/f;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new et:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new E,n=[],r=[],a=[],o=new E,l=new Ot;for(let d=0;d<=t;d++){let m=d/t;n[d]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ze(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(Ze(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],d*m)),a[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hr=class extends Ti{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jc=class extends Hr{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oh(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var za=new E,Gl=new Oh,Wl=new Oh,Xl=new Oh,Vr=class extends Ti{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new E){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(za.subVectors(n[0],n[1]).add(n[0]),c=za);let u=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(za.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=za),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Gl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Wl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Xl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Wl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Xl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Gl.calc(l),Wl.calc(l),Xl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new E().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Df(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function K1(s,t){let e=1-s;return e*e*t}function Q1(s,t){return 2*(1-s)*s*t}function j1(s,t){return s*s*t}function Cr(s,t,e,i){return K1(s,t)+Q1(s,e)+j1(s,i)}function ty(s,t){let e=1-s;return e*e*e*t}function ey(s,t){let e=1-s;return 3*e*e*s*t}function iy(s,t){return 3*(1-s)*s*s*t}function ny(s,t){return s*s*s*t}function Pr(s,t,e,i,n){return ty(s,t)+ey(s,e)+iy(s,i)+ny(s,n)}var go=class extends Ti{constructor(t=new et,e=new et,i=new et,n=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new et){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pr(t,n.x,r.x,a.x,o.x),Pr(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},th=class extends Ti{constructor(t=new E,e=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new E){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Pr(t,n.x,r.x,a.x,o.x),Pr(t,n.y,r.y,a.y,o.y),Pr(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends Ti{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eh=class extends Ti{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Ti{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Cr(t,n.x,r.x,a.x),Cr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ih=class extends Ti{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Cr(t,n.x,r.x,a.x),Cr(t,n.y,r.y,a.y),Cr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Df(o,l.x,c.x,h.x,u.x),Df(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new et().fromArray(n))}return this}},nh=Object.freeze({__proto__:null,ArcCurve:jc,CatmullRomCurve3:Vr,CubicBezierCurve:go,CubicBezierCurve3:th,EllipseCurve:Hr,LineCurve:xo,LineCurve3:eh,QuadraticBezierCurve:yo,QuadraticBezierCurve3:ih,SplineCurve:_o}),sh=class extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new nh[n.type]().fromJSON(n))}return this}},Gr=class extends sh{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new xo(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new yo(this.currentPoint.clone(),new et(t,e),new et(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new go(this.currentPoint.clone(),new et(t,e),new et(i,n),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new _o(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new Hr(t,e,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rh=class s extends Ae{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ze(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new E,f=new et,d=new E,m=new E,x=new E,g=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=e;_++){let v=i+_*h*n,y=Math.sin(v),P=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*P,a.push(u.x,u.y,u.z),f.x=_/e,f.y=A/(t.length-1),o.push(f.x,f.y);let I=l[3*A+0]*y,R=l[3*A+1],w=l[3*A+0]*P;c.push(I,R,w)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let y=v+_*t.length,P=y,A=y+t.length,I=y+t.length+1,R=y+1;r.push(P,A,R),r.push(I,R,A)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("uv",new Vt(o,2)),this.setAttribute("normal",new Vt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},ni=class s extends rh{constructor(t=1,e=1,i=4,n=8){let r=new Gr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Xi=class s extends Ae{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new E,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ie=class s extends Ae{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=i/2,p=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function _(){let y=new E,P=new E,A=0,I=(e-t)/i;for(let R=0;R<=r;R++){let w=[],b=R/r,L=b*(e-t)+t;for(let H=0;H<=n;H++){let B=H/n,O=B*l+o,K=Math.sin(O),W=Math.cos(O);P.x=L*K,P.y=-b*i+g,P.z=L*W,u.push(P.x,P.y,P.z),y.set(K,I,W).normalize(),f.push(y.x,y.y,y.z),d.push(B,1-b),w.push(m++)}x.push(w)}for(let R=0;R<n;R++)for(let w=0;w<r;w++){let b=x[w][R],L=x[w+1][R],H=x[w+1][R+1],B=x[w][R+1];(t>0||w!==0)&&(h.push(b,L,B),A+=3),(e>0||w!==r-1)&&(h.push(L,H,B),A+=3)}c.addGroup(p,A,0),p+=A}function v(y){let P=m,A=new et,I=new E,R=0,w=y===!0?t:e,b=y===!0?1:-1;for(let H=1;H<=n;H++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;let L=m;for(let H=0;H<=n;H++){let O=H/n*l+o,K=Math.cos(O),W=Math.sin(O);I.x=w*W,I.y=g*b,I.z=w*K,u.push(I.x,I.y,I.z),f.push(0,b,0),A.x=K*.5+.5,A.y=W*.5*b+.5,d.push(A.x,A.y),m++}for(let H=0;H<n;H++){let B=P+H,O=L+H;y===!0?h.push(O,O+1,B):h.push(O+1,O,B),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wr=class s extends ie{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xr=class s extends Ae{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new E,y=new E,P=new E;for(let A=0;A<e.length;A+=3)d(e[A+0],v),d(e[A+1],y),d(e[A+2],P),l(v,y,P,_)}function l(_,v,y,P){let A=P+1,I=[];for(let R=0;R<=A;R++){I[R]=[];let w=_.clone().lerp(y,R/A),b=v.clone().lerp(y,R/A),L=A-R;for(let H=0;H<=L;H++)H===0&&R===A?I[R][H]=w:I[R][H]=w.clone().lerp(b,H/L)}for(let R=0;R<A;R++)for(let w=0;w<2*(A-R)-1;w++){let b=Math.floor(w/2);w%2===0?(f(I[R][b+1]),f(I[R+1][b]),f(I[R][b])):(f(I[R][b+1]),f(I[R+1][b+1]),f(I[R+1][b]))}}function c(_){let v=new E;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new E;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;a.push(y,1-P)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],y=a[_+2],P=a[_+4],A=Math.max(v,y,P),I=Math.min(v,y,P);A>.9&&I<.1&&(v<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,v){let y=_*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){let _=new E,v=new E,y=new E,P=new E,A=new et,I=new et,R=new et;for(let w=0,b=0;w<r.length;w+=9,b+=6){_.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),A.set(a[b+0],a[b+1]),I.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),P.copy(_).add(v).add(y).divideScalar(3);let L=g(P);x(A,b+0,_,L),x(I,b+2,v,L),x(R,b+4,y,L)}}function x(_,v,y,P){P<0&&_.x===1&&(a[v]=_.x-1),y.x===0&&y.z===0&&(a[v]=P/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},vo=class s extends Xr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var qs=class extends Gr{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Gr().fromJSON(n))}return this}},sy={triangulate:function(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=ud(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=cy(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let m=e;m<n;m+=e)u=s[m],f=s[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return qr(r,a,e,o,l,d,0),a}};function ud(s,t,e,i,n){let r,a;if(n===vy(s,t,e,i)>0)for(r=t;r<e;r+=i)a=Lf(r,s[r],s[r+1],a);else for(r=e-i;r>=t;r-=i)a=Lf(r,s[r],s[r+1],a);return a&&Uo(a,a.next)&&($r(a),a=a.next),a}function is(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Uo(e,e.next)||Ne(e.prev,e,e.next)===0)){if($r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function qr(s,t,e,i,n,r,a){if(!s)return;!a&&r&&py(s,i,n,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?ay(s,i,n,r):ry(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),$r(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=oy(is(s),t,e),qr(s,t,e,i,n,r,2)):a===2&&ly(s,t,e,i,n,r):qr(is(s),t,e,i,n,r,1);break}}}function ry(s){let t=s.prev,e=s,i=s.next;if(Ne(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=n>r?n>a?n:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Ds(n,o,r,l,a,c,m.x,m.y)&&Ne(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ay(s,t,e,i){let n=s.prev,r=s,a=s.next;if(Ne(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=ah(d,m,t,e,i),_=ah(x,g,t,e,i),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==n&&v!==a&&Ds(o,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==n&&y!==a&&Ds(o,h,l,u,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==n&&v!==a&&Ds(o,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==n&&y!==a&&Ds(o,h,l,u,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function oy(s,t,e){let i=s;do{let n=i.prev,r=i.next.next;!Uo(n,r)&&fd(n,i,i.next,r)&&Yr(n,r)&&Yr(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),$r(i),$r(i.next),i=s=r),i=i.next}while(i!==s);return is(i)}function ly(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xy(a,o)){let l=dd(a,o);a=is(a,a.next),l=is(l,l.next),qr(a,t,e,i,n,r,0),qr(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function cy(s,t,e,i){let n=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=ud(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(gy(c));for(n.sort(hy),r=0;r<n.length;r++)e=uy(n[r],e);return e}function hy(s,t){return s.x-t.x}function uy(s,t){let e=fy(s,t);if(!e)return t;let i=dd(e,s);return is(i,i.next),is(e,e.next)}function fy(s,t){let e=t,i=-1/0,n,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,n=e.x<e.next.x?e:e.next,f===r))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,l=n.x,c=n.y,h=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&Ds(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Yr(e,s)&&(u<h||u===h&&(e.x>n.x||e.x===n.x&&dy(n,e)))&&(n=e,h=u)),e=e.next;while(e!==o);return n}function dy(s,t){return Ne(s.prev,s,t.prev)<0&&Ne(t.next,s,s.next)<0}function py(s,t,e,i){let n=s;do n.z===0&&(n.z=ah(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,my(n)}function my(s){let t,e,i,n,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,c*=2}while(a>1);return s}function ah(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function gy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ds(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function xy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!yy(s,t)&&(Yr(s,t)&&Yr(t,s)&&_y(s,t)&&(Ne(s.prev,s,t.prev)||Ne(s,t.prev,t))||Uo(s,t)&&Ne(s.prev,s,s.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Uo(s,t){return s.x===t.x&&s.y===t.y}function fd(s,t,e,i){let n=Va(Ne(s,t,e)),r=Va(Ne(s,t,i)),a=Va(Ne(e,i,s)),o=Va(Ne(e,i,t));return!!(n!==r&&a!==o||n===0&&Ha(s,e,t)||r===0&&Ha(s,i,t)||a===0&&Ha(e,s,i)||o===0&&Ha(e,t,i))}function Ha(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Va(s){return s>0?1:s<0?-1:0}function yy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&fd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Yr(s,t){return Ne(s.prev,s,s.next)<0?Ne(s,t,s.next)>=0&&Ne(s,s.prev,t)>=0:Ne(s,t,s.prev)<0||Ne(s,s.next,t)<0}function _y(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function dd(s,t){let e=new oh(s.i,s.x,s.y),i=new oh(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Lf(s,t,e,i){let n=new oh(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function $r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function oh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vy(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Ir=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];Uf(t),Nf(i,t);let a=t.length;e.forEach(Uf);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Nf(i,e[l]);let o=sy.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Uf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Nf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Mo=class s extends Ae{constructor(t=new qs([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Vt(n,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:My,v,y=!1,P,A,I,R;p&&(v=p.getSpacedPoints(h),y=!0,f=!1,P=p.computeFrenetFrames(h,!1),A=new E,I=new E,R=new E),f||(g=0,d=0,m=0,x=0);let w=o.extractPoints(c),b=w.shape,L=w.holes;if(!Ir.isClockWise(b)){b=b.reverse();for(let tt=0,lt=L.length;tt<lt;tt++){let D=L[tt];Ir.isClockWise(D)&&(L[tt]=D.reverse())}}let B=Ir.triangulateShape(b,L),O=b;for(let tt=0,lt=L.length;tt<lt;tt++){let D=L[tt];b=b.concat(D)}function K(tt,lt,D){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(lt,D)}let W=b.length,X=B.length;function k(tt,lt,D){let Pt,nt,St,ut=tt.x-lt.x,Nt=tt.y-lt.y,vt=D.x-tt.x,C=D.y-tt.y,S=ut*ut+Nt*Nt,z=ut*C-Nt*vt;if(Math.abs(z)>Number.EPSILON){let Z=Math.sqrt(S),it=Math.sqrt(vt*vt+C*C),J=lt.x-Nt/Z,Tt=lt.y+ut/Z,dt=D.x-C/it,Mt=D.y+vt/it,Kt=((dt-J)*C-(Mt-Tt)*vt)/(ut*C-Nt*vt);Pt=J+ut*Kt-tt.x,nt=Tt+Nt*Kt-tt.y;let st=Pt*Pt+nt*nt;if(st<=2)return new et(Pt,nt);St=Math.sqrt(st/2)}else{let Z=!1;ut>Number.EPSILON?vt>Number.EPSILON&&(Z=!0):ut<-Number.EPSILON?vt<-Number.EPSILON&&(Z=!0):Math.sign(Nt)===Math.sign(C)&&(Z=!0),Z?(Pt=-Nt,nt=ut,St=Math.sqrt(S)):(Pt=ut,nt=Nt,St=Math.sqrt(S/2))}return new et(Pt/St,nt/St)}let Q=[];for(let tt=0,lt=O.length,D=lt-1,Pt=tt+1;tt<lt;tt++,D++,Pt++)D===lt&&(D=0),Pt===lt&&(Pt=0),Q[tt]=k(O[tt],O[D],O[Pt]);let at=[],ot,Dt=Q.concat();for(let tt=0,lt=L.length;tt<lt;tt++){let D=L[tt];ot=[];for(let Pt=0,nt=D.length,St=nt-1,ut=Pt+1;Pt<nt;Pt++,St++,ut++)St===nt&&(St=0),ut===nt&&(ut=0),ot[Pt]=k(D[Pt],D[St],D[ut]);at.push(ot),Dt=Dt.concat(ot)}for(let tt=0;tt<g;tt++){let lt=tt/g,D=d*Math.cos(lt*Math.PI/2),Pt=m*Math.sin(lt*Math.PI/2)+x;for(let nt=0,St=O.length;nt<St;nt++){let ut=K(O[nt],Q[nt],Pt);ht(ut.x,ut.y,-D)}for(let nt=0,St=L.length;nt<St;nt++){let ut=L[nt];ot=at[nt];for(let Nt=0,vt=ut.length;Nt<vt;Nt++){let C=K(ut[Nt],ot[Nt],Pt);ht(C.x,C.y,-D)}}}let te=m+x;for(let tt=0;tt<W;tt++){let lt=f?K(b[tt],Dt[tt],te):b[tt];y?(I.copy(P.normals[0]).multiplyScalar(lt.x),A.copy(P.binormals[0]).multiplyScalar(lt.y),R.copy(v[0]).add(I).add(A),ht(R.x,R.y,R.z)):ht(lt.x,lt.y,0)}for(let tt=1;tt<=h;tt++)for(let lt=0;lt<W;lt++){let D=f?K(b[lt],Dt[lt],te):b[lt];y?(I.copy(P.normals[tt]).multiplyScalar(D.x),A.copy(P.binormals[tt]).multiplyScalar(D.y),R.copy(v[tt]).add(I).add(A),ht(R.x,R.y,R.z)):ht(D.x,D.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){let lt=tt/g,D=d*Math.cos(lt*Math.PI/2),Pt=m*Math.sin(lt*Math.PI/2)+x;for(let nt=0,St=O.length;nt<St;nt++){let ut=K(O[nt],Q[nt],Pt);ht(ut.x,ut.y,u+D)}for(let nt=0,St=L.length;nt<St;nt++){let ut=L[nt];ot=at[nt];for(let Nt=0,vt=ut.length;Nt<vt;Nt++){let C=K(ut[Nt],ot[Nt],Pt);y?ht(C.x,C.y+v[h-1].y,v[h-1].x+D):ht(C.x,C.y,u+D)}}}Y(),rt();function Y(){let tt=n.length/3;if(f){let lt=0,D=W*lt;for(let Pt=0;Pt<X;Pt++){let nt=B[Pt];Lt(nt[2]+D,nt[1]+D,nt[0]+D)}lt=h+g*2,D=W*lt;for(let Pt=0;Pt<X;Pt++){let nt=B[Pt];Lt(nt[0]+D,nt[1]+D,nt[2]+D)}}else{for(let lt=0;lt<X;lt++){let D=B[lt];Lt(D[2],D[1],D[0])}for(let lt=0;lt<X;lt++){let D=B[lt];Lt(D[0]+W*h,D[1]+W*h,D[2]+W*h)}}i.addGroup(tt,n.length/3-tt,0)}function rt(){let tt=n.length/3,lt=0;yt(O,lt),lt+=O.length;for(let D=0,Pt=L.length;D<Pt;D++){let nt=L[D];yt(nt,lt),lt+=nt.length}i.addGroup(tt,n.length/3-tt,1)}function yt(tt,lt){let D=tt.length;for(;--D>=0;){let Pt=D,nt=D-1;nt<0&&(nt=tt.length-1);for(let St=0,ut=h+g*2;St<ut;St++){let Nt=W*St,vt=W*(St+1),C=lt+Pt+Nt,S=lt+nt+Nt,z=lt+nt+vt,Z=lt+Pt+vt;zt(C,S,z,Z)}}}function ht(tt,lt,D){l.push(tt),l.push(lt),l.push(D)}function Lt(tt,lt,D){kt(tt),kt(lt),kt(D);let Pt=n.length/3,nt=_.generateTopUV(i,n,Pt-3,Pt-2,Pt-1);ne(nt[0]),ne(nt[1]),ne(nt[2])}function zt(tt,lt,D,Pt){kt(tt),kt(lt),kt(Pt),kt(lt),kt(D),kt(Pt);let nt=n.length/3,St=_.generateSideWallUV(i,n,nt-6,nt-3,nt-2,nt-1);ne(St[0]),ne(St[1]),ne(St[3]),ne(St[1]),ne(St[2]),ne(St[3])}function kt(tt){n.push(l[tt*3+0]),n.push(l[tt*3+1]),n.push(l[tt*3+2])}function ne(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return by(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new nh[n.type]().fromJSON(n)),new s(i,t.options)}},My={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new et(r,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[n*3],d=t[n*3+1],m=t[n*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-u),new et(f,1-m),new et(x,1-p)]:[new et(o,1-l),new et(h,1-u),new et(d,1-m),new et(g,1-p)]}};function by(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ns=class s extends Xr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},bo=class s extends Xr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ve=class s extends Ae{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,f=new E,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let _=[],v=p/i,y=0;p===0&&a===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){let A=P/e;u.x=-t*Math.cos(n+A*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(n+A*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+y,1-v),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){let v=h[p][_+1],y=h[p][_],P=h[p+1][_],A=h[p+1][_+1];(p!==0||a>0)&&d.push(v,y,A),(p!==i-1||l<Math.PI)&&d.push(y,P,A)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var So=class s extends Ae{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new E,u=new E,f=new E;for(let d=0;d<=i;d++)for(let m=0;m<=n;m++){let x=m/n*r,g=d/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=n;m++){let x=(n+1)*d+m-1,g=(n+1)*(d-1)+m-1,p=(n+1)*(d-1)+m,_=(n+1)*d+m;a.push(x,g,_),a.push(g,p,_)}this.setIndex(a),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var wo=class extends Be{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},be=class extends Gi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ga(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Sy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ys=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lh=class extends Ys{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case vu:r=t,o=2*e-i;break;case Mu:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vu:a=t,l=2*i-e;break;case Mu:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-e)/(n-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+_*a[c+P]+v*a[l+P]+y*a[u+P];return r}},ch=class extends Ys{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},hh=class extends Ys{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Fi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ga(e,this.TimeBufferType),this.values=Ga(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ga(t.times,Array),values:Ga(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Za:e=this.InterpolantFactoryMethodDiscrete;break;case Dc:e=this.InterpolantFactoryMethodLinear;break;case fl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Za;case this.InterpolantFactoryMethodLinear:return Dc;case this.InterpolantFactoryMethodSmooth:return fl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Sy(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===fl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=Dc;var ss=class extends Fi{constructor(t,e,i){super(t,e,i)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Za;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends Fi{};uh.prototype.ValueTypeName="color";var fh=class extends Fi{};fh.prototype.ValueTypeName="number";var dh=class extends Ys{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ge.slerpFlat(r,0,a,c-o,a,c,l);return r}},Eo=class extends Fi{InterpolantFactoryMethodLinear(t){return new dh(this.times,this.values,this.getValueSize(),t)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Fi{constructor(t,e,i){super(t,e,i)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Za;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends Fi{};ph.prototype.ValueTypeName="vector";var mh=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},wy=new mh,gh=class{constructor(t){this.manager=t!==void 0?t:wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};gh.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},To=class extends $s{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ql=new Ot,Ff=new E,kf=new E,Zr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ff.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ff),kf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kf),e.updateMatrixWorld(),ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xh=class extends Zr{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Hs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ao=class extends $s{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new xh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Of=new Ot,Sr=new E,Yl=new E,yh=class extends Zr{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Sr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Sr),Yl.copy(i.position),Yl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Yl),i.updateMatrixWorld(),n.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Of.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}},fn=class extends $s{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new yh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},_h=class extends Zr{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new _h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Co=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Bf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Bf(){return performance.now()}var Bh="\\[\\]\\.:\\/",Ey=new RegExp("["+Bh+"]","g"),zh="[^"+Bh+"]",Ty="[^"+Bh.replace("\\.","")+"]",Ay=/((?:WC+[\/:])*)/.source.replace("WC",zh),Ry=/(WCOD+)?/.source.replace("WCOD",Ty),Cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zh),Py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zh),Iy=new RegExp("^"+Ay+Ry+Cy+Py+"$"),Dy=["material","materials","bones","map"],vh=class{constructor(t,e,i){let n=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ey,"")}static parseTrackName(t){let e=Iy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Dy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=vh;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);var zf=new Ot,Po=class{constructor(t,e,i=0,n=1/0){this.ray=new ts(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zf),this}intersectObject(t,e=!0,i=[]){return Mh(t,this,i,e),i.sort(Hf),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)Mh(t[n],this,i,e);return i.sort(Hf),i}};function Hf(s,t){return s.distance-t.distance}function Mh(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Mh(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);var No={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var _i=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ly=new Gs(-1,1,1,-1,0,1),Hh=class extends Ae{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}},Uy=new Hh,Dn=class{constructor(t){this._mesh=new $(Uy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ly)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Qs=class extends _i{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qi.clone(t.uniforms),this.material=new Be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Dn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qr=class extends _i{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Fo=class extends _i{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ko=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new et);this._width=i.width,this._height=i.height,e=new je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qs(No),this.copyPass.material.blending=Hi,this.clock=new Co}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qr!==void 0&&(a instanceof Qr?i=!0:a instanceof Fo&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Oo=class extends _i{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var pd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var js=class s extends _i{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new je(r,a,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new je(r,a,{type:xi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new je(r,a,{type:xi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=pd;this.highPassUniforms=qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=No;this.copyUniforms=qi.clone(h.uniforms),this.blendMaterial=new Be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:oi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new Dn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};js.BlurDirectionX=new et(1,0);js.BlurDirectionY=new et(0,1);var md={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Bo=class extends _i{constructor(){super();let t=md;this.uniforms=qi.clone(t.uniforms),this.material=new wo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Dn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zo=class extends Xs{constructor(){super();let t=new ge;t.deleteAttribute("uv");let e=new be({side:Je}),i=new be,n=new fn(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new $(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new $(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new $(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new $(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new $(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new $(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new $(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new $(t,tr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new $(t,tr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let m=new $(t,tr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new $(t,tr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new $(t,tr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new $(t,tr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function tr(s){let t=new Le;return t.color.setScalar(s),t}var M=(s=0,t=1)=>s+Math.random()*(t-s),Me=(s,t)=>Math.floor(M(s,t+1)),le=s=>s[Math.floor(Math.random()*s.length)],Jt=s=>Math.random()<s,Ut=(s,t,e)=>s<t?t:s>e?e:s,se=(s,t,e)=>s+(t-s)*e;var Ln=s=>s*s*(3-2*s);var Ho=s=>s*s,Gt=(s,t,e,i)=>se(s,t,1-Math.exp(-e*i));function as(s,t,e){let i=t-s;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return s+i*e}function Yi(s,t){return String(Math.floor(s)).padStart(t,"0")}var er=s=>440*Math.pow(2,(s-69)/12),Vo=class{constructor(){this.ctx=null,this.muted=!1,this.track=null,this.groanBudget=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.85;let i=e.createDynamicsCompressor();i.threshold.value=-16,i.knee.value=10,i.ratio.value=5,i.attack.value=.003,i.release.value=.2,this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.mus=e.createGain(),this.mus.gain.value=.42,this.mus.connect(this.master),this.reverb=e.createConvolver();let n=Math.floor(e.sampleRate*2.4),r=e.createBuffer(2,n,e.sampleRate);for(let l=0;l<2;l++){let c=r.getChannelData(l);for(let h=0;h<n;h++)c[h]=(Math.random()*2-1)*Math.pow(1-h/n,3.2)}this.reverb.buffer=r,this.revGain=e.createGain(),this.revGain.gain.value=.32,this.reverb.connect(this.revGain).connect(this.master);let a=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,a,e.sampleRate);let o=this.noiseBuf.getChannelData(0);for(let l=0;l<a;l++)o[l]=Math.random()*2-1;this.distCurve=new Float32Array(1024);for(let l=0;l<1024;l++){let c=l/1023*2-1;this.distCurve[l]=Math.tanh(c*4)}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.85,this.ctx.currentTime,.05)}get now(){return this.ctx?this.ctx.currentTime:0}_out(t=0,e=.2,i=null){let n=this.ctx,r=n.createGain(),a=r;if(n.createStereoPanner){let o=n.createStereoPanner();o.pan.value=Ut(t,-1,1),r.connect(o),a=o}if(a.connect(i||this.sfx),e>0){let o=n.createGain();o.gain.value=e,r.connect(o).connect(this.reverb)}return r}_noise(t,e,i={}){let n=this.ctx,r=n.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0,r.playbackRate.value=i.rate||1;let a=n.createBiquadFilter();a.type=i.type||"lowpass",a.frequency.setValueAtTime(i.freq||2e3,t),i.freqEnd&&a.frequency.exponentialRampToValueAtTime(i.freqEnd,t+e),a.Q.value=i.q||.7;let o=n.createGain(),l=i.gain??.5,c=i.attack||.002;o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(l,t+c),o.gain.exponentialRampToValueAtTime(1e-4,t+e),r.connect(a).connect(o).connect(i.out||this._out(i.pan,i.send??.15,i.dest)),r.start(t,Math.random()*1.5),r.stop(t+e+.05)}_tone(t,e,i={}){let n=this.ctx,r=n.createOscillator();r.type=i.type||"sine",r.frequency.setValueAtTime(i.freq||440,t),i.freqEnd&&r.frequency.exponentialRampToValueAtTime(i.freqEnd,t+(i.glide||e)),i.detune&&(r.detune.value=i.detune);let a=n.createGain(),o=i.gain??.3,l=i.attack||.004;a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(o,t+l),i.hold&&a.gain.setValueAtTime(o,t+l+i.hold),a.gain.exponentialRampToValueAtTime(1e-4,t+e);let c=r;if(i.filter){let h=n.createBiquadFilter();h.type=i.filter,h.frequency.value=i.ffreq||1e3,h.Q.value=i.fq||1,c.connect(h),c=h}if(i.dist){let h=n.createWaveShaper();h.curve=this.distCurve,c.connect(h),c=h}return c.connect(a).connect(i.out||this._out(i.pan,i.send??.15,i.dest)),r.start(t),r.stop(t+e+.05),r}play(t,e={}){if(!this.ctx||this.muted)return;let i=this.ctx.currentTime+.005,n=e.pan||0,r=e.vol??1;switch(t){case"pistol":this._noise(i,.16,{type:"bandpass",freq:1800,freqEnd:500,q:.6,gain:.9*r,send:.35}),this._noise(i,.04,{type:"highpass",freq:4e3,gain:.5*r,send:0}),this._tone(i,.14,{freq:160,freqEnd:45,gain:.9*r,send:.1});break;case"shotgun":this._noise(i,.45,{type:"lowpass",freq:3200,freqEnd:300,gain:1*r,send:.45}),this._noise(i,.06,{type:"highpass",freq:3e3,gain:.6*r,send:0}),this._tone(i,.3,{freq:110,freqEnd:30,gain:1*r,send:.1}),this._noise(i+.38,.05,{type:"bandpass",freq:1400,q:3,gain:.35,send:.05}),this._noise(i+.5,.06,{type:"bandpass",freq:1e3,q:3,gain:.4,send:.05});break;case"smg":this._noise(i,.09,{type:"bandpass",freq:2200,freqEnd:700,q:.7,gain:.6*r,send:.2}),this._tone(i,.07,{freq:190,freqEnd:60,gain:.55*r,send:0});break;case"magnum":this._noise(i,.5,{type:"lowpass",freq:2500,freqEnd:200,gain:1*r,send:.6}),this._noise(i,.05,{type:"highpass",freq:3500,gain:.7*r,send:0}),this._tone(i,.35,{freq:90,freqEnd:28,gain:1*r,send:.2});break;case"empty":this._tone(i,.03,{type:"square",freq:2400,gain:.12,send:0}),this._noise(i,.03,{type:"highpass",freq:3e3,gain:.2,send:0});break;case"reload":this._noise(i,.04,{type:"bandpass",freq:900,q:4,gain:.5,send:.05}),this._noise(i+.08,.12,{type:"bandpass",freq:1500,freqEnd:3e3,q:2,gain:.25,send:.05}),this._noise(i+.24,.04,{type:"bandpass",freq:1200,q:5,gain:.6,send:.05}),this._tone(i+.24,.05,{type:"square",freq:1800,gain:.05,send:0});break;case"shellIn":this._noise(i,.05,{type:"bandpass",freq:700,q:4,gain:.5,send:.05});break;case"hit":this._noise(i,.14,{type:"lowpass",freq:1100,freqEnd:200,gain:.7*r,pan:n,send:.1}),this._tone(i,.08,{freq:120,freqEnd:50,gain:.4*r,pan:n,send:0});break;case"headshot":this._noise(i,.3,{type:"lowpass",freq:1600,freqEnd:150,gain:.9,pan:n,send:.2}),this._noise(i,.12,{type:"bandpass",freq:400,q:2,gain:.8,pan:n,send:0}),this._tone(i+.02,.18,{type:"triangle",freq:1320,freqEnd:1760,gain:.08,send:.2});break;case"sever":this._noise(i,.2,{type:"bandpass",freq:600,freqEnd:250,q:1.5,gain:.8,pan:n,send:.1}),this._noise(i+.03,.06,{type:"highpass",freq:2500,gain:.4,pan:n,send:0});break;case"gib":this._noise(i,.5,{type:"lowpass",freq:900,freqEnd:100,gain:1,pan:n,send:.3}),this._noise(i+.05,.25,{type:"bandpass",freq:500,q:1,gain:.6,pan:n,send:.1});break;case"groan":this.groan(n,r,e.pitch||1);break;case"roar":this.roar(r,e.pitch||1);break;case"shriek":{this._tone(i,.7,{type:"sawtooth",freq:900*(e.pitch||1),freqEnd:1400,gain:.18,filter:"bandpass",ffreq:1800,fq:3,send:.4,pan:n}),this._tone(i,.7,{type:"square",freq:1310*(e.pitch||1),freqEnd:600,gain:.08,filter:"bandpass",ffreq:2400,fq:4,send:.4,pan:n}),this._noise(i,.7,{type:"bandpass",freq:2500,q:2,gain:.25,send:.3,pan:n});break}case"scream":{this._tone(i,.9,{type:"triangle",freq:750,freqEnd:1250,glide:.25,gain:.22,attack:.04,hold:.4,filter:"bandpass",ffreq:1400,fq:2,send:.4,pan:n}).frequency.exponentialRampToValueAtTime(650,i+.9),this._noise(i,.9,{type:"bandpass",freq:2200,q:3,gain:.08,send:.3,pan:n});break}case"thanks":this._tone(i,.12,{type:"triangle",freq:523,gain:.2,send:.2}),this._tone(i+.1,.12,{type:"triangle",freq:659,gain:.2,send:.2}),this._tone(i+.2,.3,{type:"triangle",freq:784,gain:.2,send:.3});break;case"hurt":this._tone(i,.25,{freq:90,freqEnd:40,gain:1,send:0}),this._noise(i,.3,{type:"lowpass",freq:1500,freqEnd:300,gain:.8,send:.1}),this._tone(i+.02,.35,{type:"sawtooth",freq:150,freqEnd:95,gain:.35,filter:"bandpass",ffreq:700,fq:3,send:.2});break;case"swipe":this._noise(i,.25,{type:"bandpass",freq:500,freqEnd:2500,q:2,gain:.5,pan:n,send:.1});break;case"block":this._noise(i,.12,{type:"bandpass",freq:300,q:1,gain:.7,pan:n,send:.1}),this._tone(i,.1,{freq:70,freqEnd:40,gain:.6,send:0});break;case"explode":this._noise(i,1.6,{type:"lowpass",freq:1400,freqEnd:60,gain:1,pan:n,send:.6}),this._tone(i,.9,{freq:70,freqEnd:22,gain:1,send:.2}),this._noise(i+.1,.9,{type:"bandpass",freq:400,q:.8,gain:.5,pan:n,send:.4});break;case"thunder":this._noise(i,3.2,{type:"lowpass",freq:700,freqEnd:50,gain:.9,send:.8,attack:.02}),this._noise(i+.25,2.6,{type:"lowpass",freq:220,freqEnd:40,gain:.8,send:.6,attack:.2}),this._tone(i,1.8,{freq:48,freqEnd:24,gain:.7,send:.3});break;case"pickup":this._tone(i,.12,{type:"square",freq:880,gain:.12,send:.2,filter:"lowpass",ffreq:3e3}),this._tone(i+.08,.25,{type:"square",freq:1320,gain:.12,send:.3,filter:"lowpass",ffreq:3e3});break;case"heal":[523,659,784,1047].forEach((a,o)=>this._tone(i+o*.07,.3,{type:"triangle",freq:a,gain:.16,send:.4}));break;case"clang":[820,1270,1930,2640].forEach((a,o)=>this._tone(i,.5-o*.08,{freq:a*M(.97,1.03),gain:.16,send:.3,pan:n})),this._noise(i,.05,{type:"highpass",freq:3e3,gain:.4,send:0,pan:n});break;case"ricochet":this._tone(i,.25,{freq:M(2500,3800),freqEnd:M(900,1500),gain:.06,send:.3,pan:n}),this._noise(i,.04,{type:"highpass",freq:3500,gain:.25,send:0,pan:n});break;case"impact":this._noise(i,.06,{type:"bandpass",freq:M(900,1600),q:1.5,gain:.3*r,send:.05,pan:n});break;case"whoosh":this._noise(i,.6,{type:"bandpass",freq:300,freqEnd:1800,q:3,gain:.35,pan:n,send:.1,attack:.3});break;case"break":for(let a=0;a<4;a++)this._noise(i+a*.035,.12,{type:"bandpass",freq:M(500,1400),q:2,gain:.5,pan:n,send:.1});break;case"glass":for(let a=0;a<6;a++)this._tone(i+a*.02,.3,{freq:M(2500,6e3),gain:.05,send:.3,pan:n});this._noise(i,.3,{type:"highpass",freq:4e3,gain:.35,send:.2,pan:n});break;case"heartbeat":this._tone(i,.12,{freq:62,freqEnd:45,gain:.7,send:0}),this._tone(i+.18,.12,{freq:58,freqEnd:42,gain:.5,send:0});break;case"blip":this._tone(i,.06,{type:"square",freq:e.freq||660,gain:.08,send:.05,filter:"lowpass",ffreq:2500});break;case"tick":this._tone(i,.05,{type:"square",freq:1046,gain:.07,send:0,filter:"lowpass",ffreq:3e3});break;case"timeup":this._tone(i,.6,{type:"sawtooth",freq:300,freqEnd:120,gain:.2,filter:"lowpass",ffreq:1500,send:.2});break;case"stinger":[0,1,6,11].forEach(a=>this._tone(i,2.2,{type:"sawtooth",freq:er(45+a),gain:.07,filter:"lowpass",ffreq:1800,send:.6,attack:.01})),this._noise(i,1.2,{type:"lowpass",freq:600,freqEnd:80,gain:.8,send:.5}),this._tone(i,1,{freq:55,freqEnd:30,gain:.9,send:.3});break;case"door":this._noise(i,.35,{type:"lowpass",freq:500,freqEnd:120,gain:.9,pan:n,send:.3}),this._noise(i+.02,.15,{type:"bandpass",freq:1200,q:2,gain:.4,pan:n,send:.2});break;case"splash":this._noise(i,.4,{type:"bandpass",freq:900,freqEnd:300,q:1,gain:.5,pan:n,send:.2});break}}groan(t=0,e=1,i=1){if(!this.ctx||this.muted)return;let n=this.ctx,r=n.currentTime+.01,a=M(.9,1.7),o=M(70,115)*i,l=n.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(o*M(1,1.25),r),l.frequency.exponentialRampToValueAtTime(o*M(.65,.85),r+a);let c=n.createOscillator();c.frequency.value=M(4,9);let h=n.createGain();h.gain.value=o*.08,c.connect(h).connect(l.frequency);let u=n.createBiquadFilter();u.type="bandpass",u.frequency.value=M(450,700),u.Q.value=4;let f=n.createBiquadFilter();f.type="bandpass",f.frequency.value=M(1e3,1400),f.Q.value=6;let d=n.createGain(),m=.55*e;d.gain.setValueAtTime(1e-4,r),d.gain.linearRampToValueAtTime(m,r+.18),d.gain.setValueAtTime(m*.8,r+a*.6),d.gain.exponentialRampToValueAtTime(1e-4,r+a);let x=this._out(t,.3);l.connect(u).connect(d),l.connect(f).connect(d),d.connect(x),l.start(r),c.start(r),l.stop(r+a+.1),c.stop(r+a+.1),this._noise(r,a*.8,{type:"bandpass",freq:600,q:2,gain:.1*e,pan:t,send:.2,attack:.15})}roar(t=1,e=1){if(!this.ctx||this.muted)return;let i=this.ctx.currentTime+.01,n=1.6;this._tone(i,n,{type:"sawtooth",freq:70*e,freqEnd:42*e,gain:.5*t,dist:!0,filter:"lowpass",ffreq:900,send:.5,attack:.1,hold:.6}),this._tone(i,n,{type:"square",freq:105*e,freqEnd:60*e,gain:.18*t,filter:"bandpass",ffreq:600,fq:3,send:.5,attack:.1,hold:.6}),this._noise(i,n,{type:"bandpass",freq:700,freqEnd:250,q:1,gain:.5*t,send:.5,attack:.1})}music(t){if(!this.ctx){this.pendingTrack=t;return}this.track&&this.track.name===t||(this.track=t?Ny[t]:null,this.step=0,this.nextTime=this.ctx.currentTime+.1,this.track&&(this.track.name=t))}update(){if(!this.ctx)return;if(this.pendingTrack!==void 0){let i=this.pendingTrack;this.pendingTrack=void 0,this.music(i)}let t=this.track;if(!t)return;let e=60/t.bpm/4;for(this.nextTime<this.ctx.currentTime-.2&&(this.nextTime=this.ctx.currentTime+.05);this.nextTime<this.ctx.currentTime+.15;)if(this.muted||t.play(this,this.step,this.nextTime,e),this.nextTime+=e,this.step++,t.once&&this.step>=t.length){this.track=null;break}}kick(t,e=.9){this._tone(t,.3,{freq:140,freqEnd:38,glide:.12,gain:e,send:0,dest:this.mus})}snare(t,e=.5){this._noise(t,.18,{type:"highpass",freq:1200,gain:e,send:.3,dest:this.mus}),this._tone(t,.1,{freq:220,freqEnd:140,gain:e*.6,send:0,dest:this.mus})}hat(t,e=.12,i=!1){this._noise(t,i?.2:.04,{type:"highpass",freq:7e3,gain:e,send:0,dest:this.mus})}bass(t,e,i,n=.35,r=!1){this._tone(t,i,{type:"sawtooth",freq:er(e),gain:n,filter:"lowpass",ffreq:r?900:420,fq:4,dist:r,send:.05,dest:this.mus,attack:.005})}pad(t,e,i,n=.06){e.forEach(r=>{this._tone(t,i,{type:"sawtooth",freq:er(r),detune:M(-12,12),gain:n,filter:"lowpass",ffreq:700,attack:i*.3,hold:i*.3,send:.5,dest:this.mus})})}bell(t,e,i=.1){this._tone(t,1.6,{freq:er(e),gain:i,send:.7,dest:this.mus}),this._tone(t,.9,{freq:er(e)*2.76,gain:i*.3,send:.7,dest:this.mus})}stab(t,e,i=.08){e.forEach(n=>this._tone(t,.35,{type:"square",freq:er(n),gain:i,filter:"lowpass",ffreq:1600,send:.4,dest:this.mus}))}},Ny={title:{bpm:70,play(s,t,e,i){let n=Math.floor(t/16)%4,r=[50,46,43,45];t%16===0&&s.pad(e,[r[n]-12,r[n]-5,r[n]+3],i*16,.05);let a=[62,65,69,70,69,65,62,61];t%4===0&&Math.random()<.55&&s.bell(e,a[t/4%a.length]+12,.07),t%16===8&&n===3&&s.bell(e,73,.06)}},stage:{bpm:96,play(s,t,e,i){let n=Math.floor(t/16)%8,a=[38,38,34,34,31,31,33,37][n],o=t%16;[0,3,6,8,11,14].includes(o)&&s.bass(e,a,i*1.8,.28),(o===0||o===8)&&s.kick(e,.7),o===12&&n%2===1&&s.snare(e,.25),o%2===0&&s.hat(e,o%4===2?.08:.04),o===0&&n%2===0&&s.pad(e,[a+12,a+19,a+24],i*32,.035),Math.random()<.07&&s.bell(e,le([62,65,69,70,74,77])+12,.05)}},boss:{bpm:144,play(s,t,e,i){let n=Math.floor(t/16)%4,a=[38,38,41,37][n],o=t%16;o%4===0&&s.kick(e,.85),(o===4||o===12)&&s.snare(e,.45),s.hat(e,o%2?.05:.09,o===14);let l=[0,0,12,0,0,13,0,12,0,0,12,0,15,13,12,7];s.bass(e,a+l[o],i*.9,.22,!0),o===0&&s.stab(e,[a+24,a+27,a+31],.05),o===10&&n===3&&s.stab(e,[a+25,a+28,a+32],.05)}},clear:{bpm:120,once:!0,length:24,play(s,t,e){let i={0:62,2:65,4:69,6:74,8:72,10:74,12:77};i[t]!==void 0&&s.stab(e,[i[t],i[t]-12],.07),t===12&&s.pad(e,[50,57,62,65],2.5,.05)}},gameover:{bpm:60,once:!0,length:16,play(s,t,e){let i={0:62,2:61,4:58,6:57,8:50};i[t]!==void 0&&s.bell(e,i[t],.12),t===0&&s.pad(e,[38,45,50],4,.05)}}};var Fy=2;function re(s,t=s,e=Fy){let i=document.createElement("canvas");i.width=s*e,i.height=t*e;let n=i.getContext("2d");return n.scale(e,e),{c:i,g:n,w:s,h:t}}function ae(s,{nearest:t=!1,color:e=!0,repeat:i=!0}={}){let n=new mo(s);return i&&(n.wrapS=n.wrapT=Dr),e&&(n.colorSpace=ui),n.magFilter=t?ai:Si,n.minFilter=an,n.anisotropy=8,n}function vd(s,t,e,i,n){for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=t+r*s.w,l=e+a*s.h;o+i<0||l+i<0||o-i>s.w||l-i>s.h||n(o,l)}}function Ue(s,t,e,i=1,n=2,r=1){let{g:a}=s;a.globalAlpha=r;for(let o=0;o<t;o++){a.fillStyle=le(e);let l=Me(i,n);a.fillRect(Me(0,s.w-1),Me(0,s.h-1),l,l)}a.globalAlpha=1}function We(s,t,e,i,n,r){let{g:a}=s;for(let o=0;o<t;o++){let l=M(0,s.w),c=M(0,s.h),h=M(i,n);vd(s,l,c,h,(u,f)=>{let d=a.createRadialGradient(u,f,0,u,f,h);d.addColorStop(0,e.replace("A",r)),d.addColorStop(1,e.replace("A",0)),a.fillStyle=d,a.fillRect(u-h,f-h,h*2,h*2)})}}function Go(s,t,e,i=40){let{g:n}=s;n.strokeStyle=e,n.lineWidth=1;for(let r=0;r<t;r++){let a=M(0,s.w),o=M(0,s.h),l=M(0,Math.PI*2);n.beginPath(),n.moveTo(a,o);for(let c=0;c<i/4;c++)l+=M(-.6,.6),a+=Math.cos(l)*4,o+=Math.sin(l)*4,n.lineTo(a,o);n.stroke()}}function gd(s,t,e=.6){let{g:i}=s;for(let n=0;n<t;n++){let r=M(0,s.w),a=M(0,s.h);i.fillStyle=`rgba(${Me(70,110)},0,0,${e})`;for(let o=0;o<14;o++){let l=M(1,5);i.beginPath(),i.arc(r+M(-12,12),a+M(-12,12),l,0,Math.PI*2),i.fill()}for(let o=0;o<4;o++)i.fillRect(r+M(-10,10),a,2,M(5,25))}}function ky(s,t){let{g:e}=s;for(let i=0;i<t;i++){let n=M(6,s.w-6),r=M(6,s.h-6),a=M(3,7);e.beginPath();for(let o=0;o<=12;o++){let l=o/12*Math.PI*2,c=a*M(.5,1.2),h=n+Math.cos(l)*c*1.3,u=r+Math.sin(l)*c*.8;o?e.lineTo(h,u):e.moveTo(h,u)}e.closePath(),e.fillStyle="#5c1d1a",e.fill(),e.lineWidth=1.2,e.strokeStyle="rgba(20,10,5,0.9)",e.stroke(),e.fillStyle="rgba(150,60,50,0.6)",e.fillRect(n-a*.4,r-1,a*.8,1.2);for(let o=0;o<4;o++)e.fillRect(n+M(-a,a),r+a*.6,1,M(3,9))}}function xd(s,t){return(e,i,n)=>{let r=Math.hypot(e,i,n);return[(.5+Math.atan2(e/r,n/r)/(Math.PI*2))*s,Math.acos(i/r)/Math.PI*t]}}function yd(s,t,e,i,n,r){s.fillStyle=n;for(let a=0;a<=e;a+=1){let o=a/e-.5,l=Math.cos(o*Math.PI*2),c=l>0?_d(i*.36,i*.47,1-l):_d(i*.47,i*.62,-l);if(r&&Math.random()<.25)continue;let h=r?Math.random()*6:Math.random()*2;s.fillRect(a,0,1.2,c+h)}s.fillStyle="rgba(0,0,0,0.25)";for(let a=0;a<300;a++)s.fillRect(Math.random()*e,Math.random()*i*.5,.6,2.5);s.fillStyle="rgba(255,255,255,0.06)";for(let a=0;a<150;a++)s.fillRect(Math.random()*e,Math.random()*i*.45,.5,2);if(r)for(let a=0;a<3;a++){let[o,l]=t(Math.random()*2-1,.75,Math.random()*2-1),c=s.createRadialGradient(o,l,0,o,l,7);c.addColorStop(0,"rgba(130,125,105,0.9)"),c.addColorStop(1,"rgba(130,125,105,0)"),s.fillStyle=c,s.fillRect(o-7,l-7,14,14)}}var _d=(s,t,e)=>s+(t-s)*e,Vh={};function he(s,t){return Vh[s]||(Vh[s]=t()),Vh[s]}var pt={asphalt:()=>pt.wetAsphalt().map,wetAsphalt:()=>he("wetAsphalt",()=>{let s=re(256),t=re(256);s.g.fillStyle="#242426",s.g.fillRect(0,0,256,256),Ue(s,7e3,["#1a1a1c","#2e2e31","#39393b","#202022","#444446"],1,2),We(s,8,"rgba(0,0,0,A)",10,40,.3),s.g.fillStyle="rgba(10,10,12,0.35)",s.g.fillRect(40,0,26,256),s.g.fillRect(170,0,26,256),s.g.fillStyle="rgba(60,60,64,0.25)",s.g.fillRect(90,60,50,34),Go(s,9,"rgba(8,8,8,0.85)",70),t.g.fillStyle="rgb(0,118,0)",t.g.fillRect(0,0,256,256),Ue(t,3e3,["rgb(0,150,0)","rgb(0,95,0)"],1,3);for(let e=0;e<9;e++){let i=M(0,256),n=M(0,256),r=M(14,38),a=M(.6,1.6);for(let[o,l,c]of[[t,"0,10,0",1],[s,"4,5,8",.55]])vd(o,i,n,r*2,(h,u)=>{o.g.save(),o.g.translate(h,u),o.g.scale(a,1);let f=o.g.createRadialGradient(0,0,r*.45,0,0,r);f.addColorStop(0,`rgba(${l},${c})`),f.addColorStop(1,`rgba(${l},0)`),o.g.fillStyle=f,o.g.fillRect(-r,-r,r*2,r*2),o.g.restore()})}return{map:ae(s.c),rough:ae(t.c,{color:!1})}}),sky:()=>he("sky",()=>{let s=re(1024,512,1),t=s.g,e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#02030a"),e.addColorStop(.3,"#070b18"),e.addColorStop(.47,"#141a2c"),e.addColorStop(.5,"#1c2030"),e.addColorStop(1,"#0a0e16"),t.fillStyle=e,t.fillRect(0,0,1024,512),t.fillStyle="#cfd6e6";for(let a=0;a<260;a++)t.globalAlpha=M(.2,.9),t.fillRect(M(0,1024),M(0,220),M(.6,1.6),M(.6,1.6));t.globalAlpha=1;let i=640,n=150,r=t.createRadialGradient(i,n,0,i,n,150);r.addColorStop(0,"rgba(190,205,235,0.55)"),r.addColorStop(.2,"rgba(120,140,190,0.22)"),r.addColorStop(1,"rgba(60,80,130,0)"),t.fillStyle=r,t.fillRect(i-150,n-150,300,300),t.fillStyle="#e8e6da",t.beginPath(),t.arc(i,n,17,0,Math.PI*2),t.fill(),t.fillStyle="rgba(150,150,140,0.45)";for(let a=0;a<7;a++)t.beginPath(),t.arc(i+M(-10,10),n+M(-10,10),M(1.5,4.5),0,Math.PI*2),t.fill();for(let a=0;a<150;a++){let o=M(0,1024),l=M(30,270),c=M(30,110),h=Math.max(0,1-Math.hypot(o-i,l-n)/320),u=Math.round(18+h*95),f=M(.08,.3);for(let d of[-1024,0,1024])t.save(),t.translate(o+d,l),t.scale(2.4,.55),r=t.createRadialGradient(0,0,0,0,0,c),r.addColorStop(0,`rgba(${u},${u+6},${u+20},${f})`),r.addColorStop(1,`rgba(${u},${u+6},${u+20},0)`),t.fillStyle=r,t.fillRect(-c,-c,c*2,c*2),t.restore()}return ae(s.c,{repeat:!1})}),muzzle:()=>he("muzzle",()=>{let s=re(128,128,1),t=s.g;t.translate(64,64);let e=t.createRadialGradient(0,0,0,0,0,40);e.addColorStop(0,"rgba(255,255,240,1)"),e.addColorStop(.3,"rgba(255,210,120,0.8)"),e.addColorStop(1,"rgba(255,120,20,0)"),t.fillStyle=e,t.fillRect(-64,-64,128,128);for(let i=0;i<7;i++){t.rotate(Math.PI*2/7+M(-.2,.2));let n=M(34,62),r=t.createLinearGradient(0,0,n,0);r.addColorStop(0,"rgba(255,240,200,0.95)"),r.addColorStop(1,"rgba(255,140,30,0)"),t.fillStyle=r,t.beginPath(),t.moveTo(0,-7),t.lineTo(n,0),t.lineTo(0,7),t.fill()}return ae(s.c,{repeat:!1})}),sidewalk:()=>he("sidewalk",()=>{let s=re(256);return s.g.fillStyle="#5c5a56",s.g.fillRect(0,0,256,256),Ue(s,4e3,["#4e4c48","#6a6862","#57554f"],1,2),We(s,10,"rgba(20,18,15,A)",15,45,.3),s.g.fillStyle="#2e2c29",s.g.fillRect(0,0,256,3),s.g.fillRect(0,0,3,256),s.g.fillRect(0,127,256,2),s.g.fillRect(127,0,2,256),Go(s,4,"rgba(30,28,25,0.8)",40),ae(s.c)}),brick:()=>he("brick",()=>{let s=re(256),t=s.g;t.fillStyle="#2b2522",t.fillRect(0,0,256,256);let e=16,i=48;for(let n=0;n<256/e;n++){let r=n%2?i/2:0;for(let a=-i;a<256+i;a+=i){let o=Me(85,120);t.fillStyle=`rgb(${o},${Me(38,52)},${Me(28,38)})`,t.fillRect(a+r+1,n*e+1,i-3,e-3)}}return Ue(s,3e3,["rgba(0,0,0,0.3)","rgba(255,255,255,0.06)"],1,2),We(s,10,"rgba(10,8,6,A)",20,50,.4),ae(s.c)}),plaster:()=>he("plaster",()=>{let s=re(256),t=s.g;t.fillStyle="#5b574e",t.fillRect(0,0,256,256),Ue(s,4e3,["#514d45","#66615a","#4a463f"],1,3);for(let e=0;e<18;e++)t.fillStyle="rgba(30,25,15,0.18)",t.fillRect(M(0,256),0,M(2,10),256);return We(s,12,"rgba(25,22,15,A)",20,60,.35),Go(s,5,"rgba(20,18,15,0.7)",50),ae(s.c)}),wood:()=>he("wood",()=>{let s=re(128),t=s.g;for(let e=0;e<4;e++){t.fillStyle=`rgb(${Me(80,100)},${Me(56,66)},${Me(34,42)})`,t.fillRect(0,e*32,128,32),t.fillStyle="rgba(20,10,5,0.8)",t.fillRect(0,e*32,128,2);for(let i=0;i<10;i++)t.fillStyle="rgba(40,25,10,0.35)",t.fillRect(0,e*32+M(3,30),128,1)}return Ue(s,600,["rgba(0,0,0,0.25)"],1,2),ae(s.c)}),crate:()=>he("crate",()=>{let s=re(128),t=s.g;t.fillStyle="#7a5a34",t.fillRect(0,0,128,128);for(let e=0;e<40;e++)t.fillStyle="rgba(50,30,10,0.3)",t.fillRect(0,M(0,128),128,1);return t.fillStyle="#5a3f20",t.fillRect(0,0,128,14),t.fillRect(0,114,128,14),t.fillRect(0,0,14,128),t.fillRect(114,0,14,128),t.save(),t.translate(64,64),t.rotate(Math.PI/4),t.fillRect(-90,-7,180,14),t.restore(),Ue(s,300,["rgba(0,0,0,0.4)"],1,2),ae(s.c)}),metal:()=>he("metal",()=>{let s=re(128),t=s.g;t.fillStyle="#4a4f55",t.fillRect(0,0,128,128),Ue(s,1500,["#3f444a","#555a60","#474c52"],1,2),We(s,6,"rgba(90,45,15,A)",8,25,.5),t.strokeStyle="rgba(160,165,170,0.25)";for(let e=0;e<25;e++){t.beginPath();let i=M(0,128),n=M(0,128);t.moveTo(i,n),t.lineTo(i+M(-20,20),n+M(-4,4)),t.stroke()}return t.fillStyle="#26292d",t.fillRect(0,0,128,2),t.fillRect(0,0,2,128),t.fillStyle="#6a7076",[8,120].forEach(e=>[8,120].forEach(i=>t.fillRect(e-2,i-2,4,4))),ae(s.c)}),rust:()=>he("rust",()=>{let s=re(128);return s.g.fillStyle="#5a3a24",s.g.fillRect(0,0,128,128),Ue(s,2e3,["#6b4528","#4a2c18","#7a5030","#3b2414"],1,3),We(s,10,"rgba(20,10,5,A)",10,30,.5),ae(s.c)}),hospFloor:()=>he("hospFloor",()=>{let s=re(256),t=s.g,e=32;for(let i=0;i<8;i++)for(let n=0;n<8;n++){let r=(n+i)%2?Me(150,165):Me(110,122);t.fillStyle=`rgb(${r},${r+2},${r-6})`,t.fillRect(n*e,i*e,e,e)}t.fillStyle="rgba(40,40,35,0.6)";for(let i=0;i<=8;i++)t.fillRect(i*e,0,1,256),t.fillRect(0,i*e,256,1);return We(s,14,"rgba(50,45,30,A)",15,50,.4),Ue(s,2e3,["rgba(0,0,0,0.15)"],1,2),ae(s.c)}),hospWall:()=>he("hospWall",()=>{let s=re(256),t=s.g;t.fillStyle="#869c8c",t.fillRect(0,0,256,256),t.fillStyle="#3d5648",t.fillRect(0,160,256,96),t.fillStyle="#b9c4b4",t.fillRect(0,152,256,8),Ue(s,3e3,["rgba(0,0,0,0.12)","rgba(255,255,255,0.06)"],1,2);for(let e=0;e<14;e++)t.fillStyle="rgba(60,50,20,0.15)",t.fillRect(M(0,256),0,M(3,12),M(60,200));return We(s,8,"rgba(40,35,20,A)",20,50,.3),Go(s,4,"rgba(30,30,25,0.6)",50),ae(s.c)}),ceiling:()=>he("ceiling",()=>{let s=re(128),t=s.g;return t.fillStyle="#9a978c",t.fillRect(0,0,128,128),Ue(s,1500,["#8c897e","#a5a296","#7f7c72"],1,2),t.fillStyle="#55534c",t.fillRect(0,0,128,3),t.fillRect(0,0,3,128),We(s,3,"rgba(90,70,30,A)",10,30,.4),ae(s.c)}),plate:()=>he("plate",()=>{let s=re(128),t=s.g;t.fillStyle="#3c4044",t.fillRect(0,0,128,128);for(let e=0;e<8;e++)for(let i=0;i<8;i++){let n=i*16+e%2*8,r=e*16;t.save(),t.translate(n+4,r+8),t.rotate(e%2?.7:-.7),t.fillStyle="#5b6066",t.fillRect(-5,-1.5,10,3),t.restore()}return Ue(s,1200,["rgba(0,0,0,0.25)","rgba(255,255,255,0.05)"],1,2),We(s,5,"rgba(10,10,10,A)",10,30,.4),ae(s.c)}),labWall:()=>he("labWall",()=>{let s=re(256),t=s.g;t.fillStyle="#3d444c",t.fillRect(0,0,256,256),Ue(s,3e3,["#353b42","#464e57","#3a4048"],1,2),t.fillStyle="#1e2226";for(let e=0;e<=4;e++)t.fillRect(e*64,0,2,256);t.fillRect(0,0,256,2),t.fillRect(0,128,256,2),t.fillStyle="#5c646d";for(let e=0;e<4;e++)for(let i=0;i<2;i++)[6,58].forEach(n=>[6,122].forEach(r=>t.fillRect(e*64+n,i*128+r-(r>64?2:0),3,3)));return t.fillStyle="#c8a400",t.fillRect(0,230,256,6),We(s,6,"rgba(10,15,10,A)",20,40,.3),ae(s.c)}),hazard:()=>he("hazard",()=>{let s=re(64),t=s.g;t.fillStyle="#d9a400",t.fillRect(0,0,64,64),t.fillStyle="#111";for(let e=-64;e<128;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e+16,0),t.lineTo(e+16+64,64),t.lineTo(e+64,64),t.closePath(),t.fill();return Ue(s,400,["rgba(0,0,0,0.3)"],1,2),ae(s.c)}),facade:(s=0)=>he("facade"+s,()=>{let t=re(256),e=re(256),i=t.g,n=[["#4f3a2e","#5a4334"],["#3b3f45","#454a50"],["#55503f","#5f5a48"],["#3d2f2f","#4a3838"]],r=n[s%n.length];i.fillStyle=r[0],i.fillRect(0,0,256,256),Ue(t,3e3,[r[1],"rgba(0,0,0,0.2)"],1,2),e.g.fillStyle="#000",e.g.fillRect(0,0,256,256);for(let a=0;a<2;a++){i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,a*128+118,256,4);for(let o=0;o<4;o++){let l=o*64+14,c=a*128+34,h=36,u=60;i.fillStyle="#16120e",i.fillRect(l-4,c-4,h+8,u+8);let f=Math.random()<.22,d=!f&&Math.random()<.25;if(i.fillStyle=f?le(["#d8a85a","#c88a40","#a8b4bf","#d0b070"]):"#0a0d12",i.fillRect(l,c,h,u),f){let m=e.g.createLinearGradient(0,c,0,c+u);m.addColorStop(0,i.fillStyle),m.addColorStop(1,"#3a2a14"),e.g.fillStyle=m,e.g.fillRect(l,c,h,u);let x=M(6,16);i.fillStyle="rgba(40,20,10,0.75)",i.fillRect(l,c,x,u),e.g.fillStyle="#000",e.g.fillRect(l,c,x,u),Math.random()<.3&&(e.g.fillRect(l+h*.5,c+18,10,42),e.g.beginPath(),e.g.arc(l+h*.5+5,c+14,6,0,Math.PI*2),e.g.fill())}else i.fillStyle="rgba(90,110,130,0.18)",i.fillRect(l+3,c+3,10,u-6),d&&(i.strokeStyle="#4a4a4a",i.beginPath(),i.moveTo(l+8,c+8),i.lineTo(l+22,c+30),i.lineTo(l+14,c+52),i.stroke());i.fillStyle="#1e1913",i.fillRect(l+h/2-1.5,c,3,u),i.fillRect(l,c+u*.45,h,3),i.fillStyle="#6b655c",i.fillRect(l-6,c+u+3,h+12,5)}}return We(t,6,"rgba(0,0,0,A)",20,60,.35),{map:ae(t.c),emissive:ae(e.c)}}),sign:(s,t="#1a1a1a",e="#e8d9a8",i=512,n=128,r='bold 72px Impact, "Arial Black", sans-serif')=>he("sign"+s+t+e,()=>{let a=re(i,n),o=a.g;o.fillStyle=t,o.fillRect(0,0,i,n),o.strokeStyle=e,o.lineWidth=6,o.strokeRect(8,8,i-16,n-16),o.fillStyle=e,o.font=r;let l=72;for(;o.measureText(s).width>i-48&&l>20;)l-=4,o.font=r.replace("72px",l+"px");return o.textAlign="center",o.textBaseline="middle",o.shadowColor=e,o.shadowBlur=12,o.fillText(s,i/2,n/2+4),o.shadowBlur=0,Ue(a,1500,["rgba(0,0,0,0.35)"],1,3),ae(a.c,{nearest:!1,repeat:!1})}),glow:()=>he("glow",()=>{let s=re(64),t=s.g.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.g.fillStyle=t,s.g.fillRect(0,0,64,64),ae(s.c,{nearest:!1,repeat:!1})}),moon:()=>he("moon",()=>{let s=re(128),t=s.g,e=t.createRadialGradient(64,64,30,64,64,64);e.addColorStop(0,"rgba(220,210,190,0.5)"),e.addColorStop(1,"rgba(220,210,190,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.fillStyle="#e9e1cc",t.beginPath(),t.arc(64,64,36,0,Math.PI*2),t.fill(),t.fillStyle="rgba(150,140,120,0.5)";for(let i=0;i<9;i++)t.beginPath(),t.arc(64+M(-25,25),64+M(-25,25),M(3,9),0,Math.PI*2),t.fill();return ae(s.c,{nearest:!1,repeat:!1})}),bloodDecal:()=>he("bloodDecal",()=>{let s=re(128),t=s.g;t.fillStyle="rgb(90,0,0)";for(let e=0;e<26;e++){let i=M(0,Math.PI*2),n=M(0,30);t.beginPath(),t.arc(64+Math.cos(i)*n,64+Math.sin(i)*n,M(6,18),0,Math.PI*2),t.fill()}for(let e=0;e<30;e++){let i=M(0,Math.PI*2),n=M(35,60);t.beginPath(),t.arc(64+Math.cos(i)*n,64+Math.sin(i)*n,M(1,4),0,Math.PI*2),t.fill()}return t.fillStyle="rgba(40,0,0,0.6)",t.beginPath(),t.arc(64,64,14,0,Math.PI*2),t.fill(),ae(s.c,{nearest:!1,repeat:!1})}),bulletHole:()=>he("bulletHole",()=>{let s=re(32),t=s.g,e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.25,"rgba(10,10,10,0.95)"),e.addColorStop(.45,"rgba(40,40,40,0.5)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),ae(s.c,{nearest:!1,repeat:!1})}),skin:(s=0)=>he("skin"+s,()=>{let t=re(64),e=t.g,i=["#7b876f","#8d897b","#6a7564","#978c7f","#74806c"];e.fillStyle=i[s%i.length],e.fillRect(0,0,64,64),We(t,16,"rgba(95,120,80,A)",5,14,.3),We(t,12,"rgba(120,70,95,A)",4,11,.32),We(t,10,"rgba(150,140,110,A)",4,10,.25),We(t,8,"rgba(50,40,30,A)",3,8,.35),e.lineWidth=.6;for(let n=0;n<7;n++){e.strokeStyle=`rgba(${Me(50,80)},${Me(40,60)},${Me(80,110)},0.55)`;let r=M(0,64),a=M(0,64),o=M(0,Math.PI*2);e.beginPath(),e.moveTo(r,a);for(let l=0;l<9;l++)o+=M(-.7,.7),r+=Math.cos(o)*2.5,a+=Math.sin(o)*2.5,e.lineTo(r,a),Math.random()<.2&&e.moveTo(r,a);e.stroke()}for(let n=0;n<3;n++){let r=M(4,60),a=M(4,60),o=M(1.2,2.8),l=e.createRadialGradient(r,a,0,r,a,o*1.8);l.addColorStop(0,"rgba(60,5,5,0.95)"),l.addColorStop(.5,"rgba(120,30,30,0.8)"),l.addColorStop(1,"rgba(140,90,70,0)"),e.fillStyle=l,e.fillRect(r-o*2,a-o*2,o*4,o*4)}return Ue(t,700,["rgba(40,50,30,0.35)","rgba(120,40,40,0.25)","rgba(255,255,255,0.07)"],1,1),gd(t,1,.5),ae(t.c)}),humanSkin:(s=0)=>he("hskin"+s,()=>{let t=re(32),e=["#d2a07c","#8d5a3b","#e6bf9e","#b07a55"];return t.g.fillStyle=e[s%e.length],t.g.fillRect(0,0,32,32),Ue(t,60,["rgba(0,0,0,0.06)"],1,2),ae(t.c)}),zombieHead:(s=0,t=null)=>he("zhead2"+s+t,()=>{let n=re(160,128),r=n.g,a=xd(160,128);for(let d=0;d<160;d+=64)for(let m=0;m<128;m+=64)r.drawImage(pt.skin(s).image,d,m,64,64);let o=(d,m,x,g,p,_=1)=>{r.save(),r.translate(d,m),r.scale(1,_);let v=r.createRadialGradient(0,0,0,0,0,x);v.addColorStop(0,`rgba(${g},${p})`),v.addColorStop(1,`rgba(${g},0)`),r.fillStyle=v,r.fillRect(-x,-x,x*2,x*2),r.restore()};for(let d of[-1,1]){let[m,x]=a(d*.72,.25,.6);o(m,x,9,"40,30,40",.35);let[g,p]=a(d*.45,-.3,.84);o(g,p,8,"40,20,30",.4)}for(let d of[-1,1]){let[m,x]=a(d*.34,.14,.93);o(m,x+.6,8.5,"45,10,25",.9,.8),o(m,x,4.2,"10,0,0",.95,.75),r.fillStyle="rgba(200,190,150,0.55)",r.beginPath(),r.ellipse(m,x,2.1,1.3,0,0,Math.PI*2),r.fill()}let[l,c]=a(0,-.2,.98);r.fillStyle="rgba(25,5,5,0.9)";for(let d of[-1,1])r.beginPath(),r.ellipse(l+d*2.2,c,1.3,.9,0,0,Math.PI*2),r.fill();let[h,u]=a(0,-.43,.9),f=s%2?8.5:7;r.fillStyle="rgba(85,35,40,0.9)",r.beginPath(),r.ellipse(h,u+.8,f+1.2,3.6,0,0,Math.PI*2),r.fill(),r.fillStyle="#140303",r.beginPath(),r.ellipse(h,u+.9,f,2.1,0,0,Math.PI*2),r.fill(),r.fillStyle="#d2c79e";for(let d=h-f+1;d<h+f-1;d+=1.6)Math.random()<.15||(r.fillRect(d,u-.9,1.2,M(1.1,1.9)),r.fillRect(d+.4,u+2.4-M(.8,1.6),1.2,1.5));r.fillStyle="rgba(110,0,0,0.85)";for(let d=0;d<6;d++)r.fillRect(h-f+M(0,f*2),u+2.5,M(.8,1.6),M(4,18));for(let d=0;d<2;d++){let[m,x]=a(M(-.8,.8),M(-.3,.5),M(.2,1));o(m,x,M(3,5),"90,5,5",.9),o(m,x,1.6,"30,0,0",.9)}for(let d of[.25,.75])o(160*d,a(0,0,1)[1],7,"50,30,35",.4);return t&&yd(r,a,160,128,t,!0),Ue(n,250,["rgba(0,0,0,0.25)"],1,1),ae(n.c)}),humanHead:(s=0,t="#2a1d14")=>he("hhead2"+s+t,()=>{let n=re(160,128),r=n.g,a=xd(160,128);for(let u=0;u<160;u+=32)for(let f=0;f<128;f+=32)r.drawImage(pt.humanSkin(s).image,u,f,32,32);for(let u of[-1,1]){let[f,d]=a(u*.34,.14,.93);r.fillStyle="rgba(0,0,0,0.18)",r.beginPath(),r.ellipse(f,d-.8,4,2.6,0,0,Math.PI*2),r.fill(),r.fillStyle="#f2eee4",r.beginPath(),r.ellipse(f,d,2.6,1.4,0,0,Math.PI*2),r.fill(),r.fillStyle="#3a2614",r.beginPath(),r.arc(f+u*.2,d,1.1,0,Math.PI*2),r.fill();let[m,x]=a(u*.34,.3,.9);r.fillStyle=t,r.fillRect(m-3.5,x-.6,7,1.3)}let[o,l]=a(0,-.2,.98);r.fillStyle="rgba(60,20,10,0.5)";for(let u of[-1,1])r.beginPath(),r.ellipse(o+u*2,l,1.1,.7,0,0,Math.PI*2),r.fill();let[c,h]=a(0,-.43,.9);return r.fillStyle="#9a4a42",r.beginPath(),r.ellipse(c,h+.8,5.5,2.2,0,0,Math.PI*2),r.fill(),r.fillStyle="#3a1210",r.beginPath(),r.ellipse(c,h+.8,4.2,1.1,0,0,Math.PI*2),r.fill(),yd(r,a,160,128,t,!1),Ue(n,200,["rgba(0,0,0,0.06)"],1,1),ae(n.c)}),beam:()=>he("beam",()=>{let s=re(16,128,1),t=s.g.createLinearGradient(0,0,0,128);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.35,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.g.fillStyle=t,s.g.fillRect(0,0,16,128),ae(s.c,{repeat:!1})}),hair:(s="#2a1d14")=>he("hair"+s,()=>{let t=re(32);return t.g.fillStyle=s,t.g.fillRect(0,0,32,32),Ue(t,200,["rgba(0,0,0,0.3)","rgba(255,255,255,0.08)"],1,2),ae(t.c)}),cloth:(s,t="shirt",e=.6)=>he("cloth"+s+t+e,()=>{let i=re(64),n=i.g;if(n.fillStyle=s,n.fillRect(0,0,64,64),t==="plaid"){n.fillStyle="rgba(0,0,0,0.3)";for(let r=0;r<64;r+=12)n.fillRect(r,0,4,64),n.fillRect(0,r,64,4)}else if(t==="gown"){n.fillStyle="rgba(255,255,255,0.25)";for(let r=2;r<64;r+=8)for(let a=r/8%2?4:0;a<64;a+=8)n.fillRect(a,r,2,2)}else if(t==="denim"){n.fillStyle="rgba(255,255,255,0.08)";for(let r=0;r<64;r+=2)n.fillRect(0,r,64,1)}else t==="uniform"?(n.fillStyle="#c9a43a",n.fillRect(8,10,6,6),n.fillStyle="rgba(255,255,255,0.15)",n.fillRect(30,0,2,64)):t==="apron"?(n.fillStyle="rgba(0,0,0,0.15)",n.fillRect(0,0,64,3)):t==="hazmat"&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,30,64,4),n.fillStyle="#222",n.fillRect(24,10,16,12));return Ue(i,400,["rgba(0,0,0,0.2)","rgba(255,255,255,0.05)"],1,2),We(i,5,"rgba(30,25,15,A)",5,14,.4),e>0&&(ky(i,Math.round(e*3)),gd(i,Math.round(e*3),.75),We(i,Math.round(e*4),"rgba(70,0,0,A)",6,14,.45)),ae(i.c)}),flesh:()=>he("flesh",()=>{let s=re(128),t=s.g;t.fillStyle="#6e2a2a",t.fillRect(0,0,128,128),We(s,30,"rgba(150,60,60,A)",4,14,.6),We(s,20,"rgba(30,5,10,A)",4,12,.6),t.strokeStyle="rgba(40,10,40,0.6)",t.lineWidth=2;for(let e=0;e<12;e++){t.beginPath();let i=M(0,128),n=M(0,128);t.moveTo(i,n);for(let r=0;r<8;r++)t.lineTo(i+=M(-10,10),n+=M(-10,10));t.stroke()}return Ue(s,600,["rgba(255,200,200,0.15)"],1,2),ae(s.c)}),screen:()=>he("screen",()=>{let s=re(64),t=s.g;t.fillStyle="#031a08",t.fillRect(0,0,64,64),t.fillStyle="#2bd46a";for(let e=6;e<60;e+=6)t.fillRect(4,e,M(10,54),2);t.fillStyle="rgba(0,0,0,0.3)";for(let e=0;e<64;e+=2)t.fillRect(0,e,64,1);return ae(s.c)})};var Oy=`
attribute float size;
attribute float alpha;
attribute vec3 pcolor;
uniform float uScale;
varying float vAlpha;
varying vec3 vColor;
#include <fog_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.05, -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  vAlpha = alpha;
  vColor = pcolor;
  #include <fog_vertex>
}`,By=`
varying float vAlpha;
varying vec3 vColor;
uniform float uSoft;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float a = vAlpha * smoothstep(0.5, uSoft, d);
  gl_FragColor = vec4(vColor, a);
  #include <fog_fragment>
}`,Wo=class{constructor(t,e,i,n=.25){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.a0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.flags=new Uint8Array(e),this.next=0,this.active=0;let r=new Ae;r.setAttribute("position",new Fe(this.pos,3).setUsage(Js)),r.setAttribute("pcolor",new Fe(this.col,3).setUsage(Js)),r.setAttribute("size",new Fe(this.size,1).setUsage(Js)),r.setAttribute("alpha",new Fe(this.alpha,1).setUsage(Js)),this.geo=r,this.mat=new Be({uniforms:qi.merge([ft.fog,{uScale:{value:500},uSoft:{value:n}}]),vertexShader:Oy,fragmentShader:By,transparent:!0,depthWrite:!1,fog:!0,blending:i?oi:Cn}),this.points=new po(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=i?6:5,t.add(this.points)}spawn(t,e,i,n,r,a,o){let l=this.next;this.next=(this.next+1)%this.n;let c=l*3;this.pos[c]=t,this.pos[c+1]=e,this.pos[c+2]=i,this.vel[c]=n,this.vel[c+1]=r,this.vel[c+2]=a;let h=o.color;this.col[c]=h.r,this.col[c+1]=h.g,this.col[c+2]=h.b,this.life[l]=this.maxLife[l]=o.life,this.size0[l]=o.size,this.size1[l]=o.sizeEnd??o.size,this.a0[l]=o.alpha??1,this.grav[l]=o.grav??0,this.drag[l]=o.drag??0,this.flags[l]=o.blood?1:0}update(t,e){let{pos:i,vel:n,life:r}=this;for(let a=0;a<this.n;a++){if(r[a]<=0){this.alpha[a]!==0&&(this.alpha[a]=0,this.size[a]=0);continue}r[a]-=t;let o=a*3,l=Math.max(0,1-this.drag[a]*t);if(n[o]*=l,n[o+1]=n[o+1]*l-this.grav[a]*t,n[o+2]*=l,i[o]+=n[o]*t,i[o+1]+=n[o+1]*t,i[o+2]+=n[o+2]*t,this.flags[a]===1&&i[o+1]<.02){Math.random()<.18&&e.splat(i[o],i[o+2],M(.2,.55)),r[a]=0;continue}let c=1-r[a]/this.maxLife[a];this.size[a]=this.size0[a]+(this.size1[a]-this.size0[a])*c,this.alpha[a]=this.a0[a]*(c<.1?c/.1:1-Math.max(0,(c-.5)/.5))}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0}},Xo=class{constructor(t,e,i,n=1){let r=new hn(n,n);r.rotateX(-Math.PI/2),this.mat=new be({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.3}),this.mesh=new co(r,this.mat,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1;let a=new Ot().makeScale(0,0,0);for(let o=0;o<i;o++)this.mesh.setMatrixAt(o,a);this.count=i,this.next=0,t.add(this.mesh),this._m=new Ot,this._q=new Ge,this._q2=new Ge,this._s=new E,this._up=new E(0,1,0)}add(t,e,i){this._q.setFromUnitVectors(this._up,e),this._q2.setFromAxisAngle(this._up,M(0,Math.PI*2)),this._q.multiply(this._q2),this._s.set(i,i,i),this._m.compose(t,this._q,this._s),this.mesh.setMatrixAt(this.next,this._m),this.next=(this.next+1)%this.count,this.mesh.instanceMatrix.needsUpdate=!0}clear(){let t=new Ot().makeScale(0,0,0);for(let e=0;e<this.count;e++)this.mesh.setMatrixAt(e,t);this.mesh.instanceMatrix.needsUpdate=!0}},ze=s=>new bt(s),jr=[ze(6946816),ze(9045253),ze(4849664),ze(10096656)],Gh=[ze(16765056),ze(16755264),ze(16773312)],Md=[ze(16742938),ze(16752688),ze(16732176),ze(16765024)],Wh=[ze(2105376),ze(2763306),ze(1579032)],zy=[ze(5920336),ze(4867648),ze(6973024)],Hy=[ze(6356800),ze(4243488),ze(9502560)],ta=new E,Xh=new E,qo=class{constructor(t){this.game=t;let e=t.scene;this.scene=e,this.soft=new Wo(e,2600,!1,.15),this.glow=new Wo(e,1600,!0,0),this.splats=new Xo(e,pt.bloodDecal(),140,1),this.holes=new Xo(e,pt.bulletHole(),120,.12),this.debris=[],this.emitters=[],this.rain=null}setScale(t){this.soft.mat.uniforms.uScale.value=t,this.glow.mat.uniforms.uScale.value=t}clear(){this.splats.clear(),this.holes.clear();for(let t of this.debris)this.scene.remove(t.mesh);this.debris.length=0,this.emitters.length=0;for(let t of[this.soft,this.glow])t.life.fill(0);this.setRain(!1)}blood(t,e,i=14,n=3,r=.7,a=.09){for(let o=0;o<i;o++){let l=n*M(.3,1);this.soft.spawn(t.x,t.y,t.z,(e.x+M(-r,r))*l,(e.y+M(-r*.5,r*1.2))*l+M(0,1.5),(e.z+M(-r,r))*l,{color:le(jr),life:M(.5,1.1),size:a*M(.6,1.6),sizeEnd:a*.5,grav:9.8,drag:.5,blood:!0})}for(let o=0;o<3;o++)this.soft.spawn(t.x,t.y,t.z,e.x*.6+M(-.3,.3),M(-.1,.4),e.z*.6+M(-.3,.3),{color:jr[1],life:M(.25,.45),size:.25,sizeEnd:.6,alpha:.5,drag:3})}acid(t,e=16){for(let i=0;i<e;i++)this.glow.spawn(t.x,t.y,t.z,M(-2,2),M(0,3),M(-2,2),{color:le(Hy),life:M(.3,.7),size:M(.06,.14),sizeEnd:.02,grav:8})}sparks(t,e,i=8){for(let n=0;n<i;n++){let r=M(2,6);this.glow.spawn(t.x,t.y,t.z,(e.x+M(-.7,.7))*r,(e.y+M(-.3,.9))*r,(e.z+M(-.7,.7))*r,{color:le(Gh),life:M(.12,.35),size:M(.03,.06),sizeEnd:.01,grav:9})}this.glow.spawn(t.x,t.y,t.z,0,0,0,{color:Gh[0],life:.06,size:.35,sizeEnd:.1})}dust(t,e,i=5,n=zy){for(let r=0;r<i;r++)this.soft.spawn(t.x,t.y,t.z,e.x*M(.3,1.2)+M(-.3,.3),e.y*M(.3,1.2)+M(0,.5),e.z*M(.3,1.2)+M(-.3,.3),{color:le(n),life:M(.4,.9),size:M(.08,.16),sizeEnd:.35,alpha:.6,drag:2})}splat(t,e,i){ta.set(t,.012+Math.random()*.004,e),Xh.set(0,1,0),this.splats.add(ta,Xh,i)}bulletHole(t,e){ta.copy(t).addScaledVector(e,.01),this.holes.add(ta,e,M(.8,1.3))}explosion(t,e=1){for(let i=0;i<60*e;i++){let n=M(2,8)*e,r=M(0,Math.PI*2),a=M(-.2,1);this.glow.spawn(t.x,t.y,t.z,Math.cos(r)*n*(1-a*.5),a*n,Math.sin(r)*n*(1-a*.5),{color:le(Md),life:M(.3,.8),size:M(.3,.8)*e,sizeEnd:.05,grav:2,drag:2.5})}for(let i=0;i<25*e;i++)this.soft.spawn(t.x+M(-.5,.5),t.y+M(0,1),t.z+M(-.5,.5),M(-1.5,1.5),M(.5,2.5),M(-1.5,1.5),{color:le(Wh),life:M(1.2,2.4),size:M(.6,1)*e,sizeEnd:2.4*e,alpha:.7,drag:1.2});for(let i=0;i<30;i++)this.glow.spawn(t.x,t.y,t.z,M(-9,9),M(2,10),M(-9,9),{color:Gh[1],life:M(.4,1),size:.05,sizeEnd:.01,grav:9});this.game.lights.flash(t,16747056,80*e,.35)}muzzle(t){this.game.lights.flash(t,16760944,18,.05)}addEmitter(t){let e={acc:0,life:1/0,...t,pos:t.pos?t.pos.clone():new E};return this.emitters.push(e),e}fire(t,e=1,i=1/0){return this.game.lights.addAnchor({pos:t.clone().add(new E(0,.8,0)),color:new bt(16742954),intensity:25*e,distance:10,flicker:.6,temp:i<1/0?i:void 0}),this.addEmitter({pos:t,kind:"fire",rate:40*e,size:e,life:i})}addDebris(t,e,i,n=4,r=!0,a=.1){if(this.scene.add(t),t.traverse(o=>o.isMesh&&o.layers.disable(1)),this.debris.push({mesh:t,vel:e,spin:i,life:n,maxLife:n,bleed:r,radius:a,bounced:0}),this.debris.length>70){let o=this.debris.shift();this.scene.remove(o.mesh)}}setRain(t){if(t&&!this.rain){let i=new Float32Array(8400);this.rainSpeed=new Float32Array(1400);for(let a=0;a<1400;a++){let o=M(-15,15),l=M(-2,14),c=M(-15,15);i.set([o,l,c,o+.02,l-.45,c+.04],a*6),this.rainSpeed[a]=M(14,20)}let n=new Ae;n.setAttribute("position",new Fe(i,3).setUsage(Js));let r=new zr({color:8425640,transparent:!0,opacity:.32,fog:!0,depthWrite:!1});this.rain=new fo(n,r),this.rain.frustumCulled=!1,this.scene.add(this.rain)}else!t&&this.rain&&(this.scene.remove(this.rain),this.rain.geometry.dispose(),this.rain=null)}update(t){this.soft.update(t,this),this.glow.update(t,this);for(let e=this.emitters.length-1;e>=0;e--){let i=this.emitters[e];if(i.life-=t,i.life<=0){this.emitters.splice(e,1);continue}i.acc+=i.rate*t;let n=i.follow?i.follow.getWorldPosition(ta):i.pos;for(;i.acc>=1;)if(i.acc-=1,i.kind==="fire"){let r=i.size;this.glow.spawn(n.x+M(-.4,.4)*r,n.y+M(0,.3),n.z+M(-.4,.4)*r,M(-.2,.2),M(1,2.2)*r,M(-.2,.2),{color:le(Md),life:M(.4,.9),size:M(.35,.7)*r,sizeEnd:.05,drag:.5}),Math.random()<.35&&this.soft.spawn(n.x+M(-.3,.3),n.y+1.2*r,n.z+M(-.3,.3),M(-.2,.2),M(.8,1.4),M(-.2,.2),{color:le(Wh),life:M(1.5,2.5),size:.5*r,sizeEnd:1.8*r,alpha:.5,drag:.3})}else if(i.kind==="fountain"){let r=i.dir||Xh.set(0,1,0);this.soft.spawn(n.x,n.y,n.z,r.x*2+M(-.5,.5),r.y*2+M(1,2.5),r.z*2+M(-.5,.5),{color:le(jr),life:M(.5,.9),size:M(.05,.1),sizeEnd:.03,grav:9.8,blood:!0})}else i.kind==="smoke"?this.soft.spawn(n.x+M(-.3,.3),n.y,n.z+M(-.3,.3),M(-.2,.2),M(.4,.9),M(-.2,.2),{color:le(i.colors||Wh),life:M(2,3.5),size:.6,sizeEnd:2.4,alpha:i.alpha??.35,drag:.2}):i.kind==="drip"&&this.soft.spawn(n.x+M(-.05,.05),n.y,n.z+M(-.05,.05),0,-.5,0,{color:le(jr),life:1.5,size:.05,grav:9.8,blood:!0})}for(let e=this.debris.length-1;e>=0;e--){let i=this.debris[e];i.life-=t;let n=i.mesh;i.vel.y-=9.8*t,n.position.addScaledVector(i.vel,t),n.rotation.x+=i.spin.x*t,n.rotation.y+=i.spin.y*t,n.rotation.z+=i.spin.z*t,n.position.y<i.radius&&(n.position.y=i.radius,i.vel.y<-1?(i.vel.y*=-.3,i.bleed&&i.bounced<2&&this.splat(n.position.x,n.position.z,M(.3,.6)),i.bounced++):i.vel.y=0,i.vel.x*=.6,i.vel.z*=.6,i.spin.multiplyScalar(.5)),i.bleed&&i.life>i.maxLife-1.2&&Math.random()<.3&&this.soft.spawn(n.position.x,n.position.y,n.position.z,M(-.3,.3),M(0,.5),M(-.3,.3),{color:le(jr),life:.8,size:.06,grav:9.8,blood:!0}),i.life<1&&(n.position.y-=t*.3),i.life<=0&&(this.scene.remove(n),this.debris.splice(e,1))}if(this.rain){let e=this.game.camera.position;this.rain.position.set(Math.round(e.x),0,Math.round(e.z));let i=this.rain.geometry.attributes.position.array;for(let n=0,r=this.rainSpeed.length;n<r;n++){let a=this.rainSpeed[n]*t,o=n*6;i[o+1]-=a,i[o+4]-=a,i[o+4]<0&&(i[o+1]+=16,i[o+4]+=16,Math.random()<.08&&this.soft.spawn(this.rain.position.x+i[o],.02,this.rain.position.z+i[o+2],0,.4,0,{color:ze(8425640),life:.15,size:.06,alpha:.5}))}this.rain.geometry.attributes.position.needsUpdate=!0}}},Yo=class{constructor(t,e=8){this.scene=t,this.lights=[];for(let i=0;i<e;i++){let n=new fn(16777215,0,10,2);t.add(n),this.lights.push(n)}this.anchors=[],this.flashes=[];for(let i=0;i<3;i++){let n=new fn(16777215,0,14,2);t.add(n),this.flashes.push({light:n,t:0,dur:1,peak:0})}this.nextFlash=0,this.time=0}clear(){this.anchors.length=0}addAnchor(t){return t.seed=Math.random()*100,this.anchors.push(t),t}flash(t,e,i,n){let r=this.flashes[this.nextFlash];this.nextFlash=(this.nextFlash+1)%this.flashes.length,r.light.position.copy(t),r.light.color.set(e),r.peak=i,r.t=n,r.dur=n}update(t,e,i){this.time+=t;let n=this.time;for(let l=this.anchors.length-1;l>=0;l--){let c=this.anchors[l];c.temp!==void 0&&(c.temp-=t,c.temp<=0&&this.anchors.splice(l,1))}let r=e.x+i.x*6,a=e.z+i.z*6,o=this.anchors.map(l=>({a:l,d:(l.pos.x-r)**2+(l.pos.z-a)**2+(l.pos.y-e.y)**2}));o.sort((l,c)=>l.d-c.d);for(let l=0;l<this.lights.length;l++){let c=this.lights[l],h=o[l];if(!h||h.d>45*45){c.intensity=0;continue}let u=h.a;c.position.copy(u.pos),c.color.copy(u.color),c.distance=u.distance;let f=1;if(u.flicker){let m=Math.sin(n*13+u.seed)*Math.sin(n*7.3+u.seed*2)*Math.sin(n*23+u.seed);f=1-u.flicker*(m>.15?1:.2*Math.random())}u.pulse&&(f*=.15+.85*Math.max(0,Math.sin(n*u.pulse+u.seed))),u.strobe!==void 0&&(f*=Math.sin(n*9+u.strobe)>0?1:.05),u.temp!==void 0&&(f*=Ut(u.temp,0,1));let d=Ut(1-(Math.sqrt(h.d)-30)/15,0,1);c.intensity=u.intensity*f*d}for(let l of this.flashes)l.t>0?(l.t-=t,l.light.intensity=l.peak*Math.max(0,l.t/l.dur)):l.light.intensity=0}};function ir(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ae,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=bd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let m=bd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function bd(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Fe(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);o.setComponent(f+u,m,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}function Sd(s,t=Math.PI/3){let e=Math.cos(t),i=(1+1e-10)*100,n=[new E,new E,new E],r=new E,a=new E,o=new E,l=new E;function c(x){let g=~~(x.x*i),p=~~(x.y*i),_=~~(x.z*i);return`${g},${p},${_}`}let h=s.index?s.toNonIndexed():s,u=h.attributes.position,f={};for(let x=0,g=u.count/3;x<g;x++){let p=3*x,_=n[0].fromBufferAttribute(u,p+0),v=n[1].fromBufferAttribute(u,p+1),y=n[2].fromBufferAttribute(u,p+2);r.subVectors(y,v),a.subVectors(_,v);let P=new E().crossVectors(r,a).normalize();for(let A=0;A<3;A++){let I=n[A],R=c(I);R in f||(f[R]=[]),f[R].push(P)}}let d=new Float32Array(u.count*3),m=new Fe(d,3,!1);for(let x=0,g=u.count/3;x<g;x++){let p=3*x,_=n[0].fromBufferAttribute(u,p+0),v=n[1].fromBufferAttribute(u,p+1),y=n[2].fromBufferAttribute(u,p+2);r.subVectors(y,v),a.subVectors(_,v),o.crossVectors(r,a).normalize();for(let P=0;P<3;P++){let A=n[P],I=c(A),R=f[I];l.set(0,0,0);for(let w=0,b=R.length;w<b;w++){let L=R[w];o.dot(L)>e&&l.add(L)}l.normalize(),m.setXYZ(p+P,l.x,l.y,l.z)}}return h.setAttribute("normal",m),h}var $i=null;function xe(s,t=2,e={}){let i=new be({map:s,color:e.color??16777215,roughness:e.rough??.9,metalness:e.metal??0,emissive:e.emissive??0,emissiveIntensity:e.ei??1,emissiveMap:e.emissiveMap??null,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Vi});return i.userData.scale=t,e.depthWrite===!1&&(i.depthWrite=!1),e.bump&&s&&(i.bumpMap=s,i.bumpScale=e.bump),i}var Se=(s,t={})=>xe(null,1,{color:s,...t}),dn=(s,t=2)=>xe(null,1,{color:0,emissive:s,ei:t,rough:1});function Vy(){if($i)return $i;let s=t=>{let e=pt.facade(t);return xe(e.map,6,{emissive:16777215,emissiveMap:e.emissive,ei:.55,bump:1.5})};return $i={asphalt:xe(pt.wetAsphalt().map,9,{rough:1,bump:2}),walls:[xe(pt.brick(),3,{rough:.85,bump:4}),xe(pt.brick(),3,{rough:.85,bump:4,color:9080730}),xe(pt.plaster(),3,{bump:1.5,color:13220250}),xe(pt.brick(),3.4,{rough:.9,bump:4,color:11569776}),xe(pt.plaster(),3,{bump:1.5,color:9213080})],trim:xe(pt.sidewalk(),3,{color:9407104,rough:.8,bump:1}),frame:Se(1380879,{rough:.6}),winLit:[dn(16758886,1.5),dn(15255696,1.2),dn(10139864,1.1),dn(16751178,1)],awning:[Se(6953494,{rough:.9}),Se(1849898,{rough:.9}),Se(2042954,{rough:.9}),Se(5917210,{rough:.9})],shopGlass:Se(659478,{metal:.9,rough:.04}),rim:Se(9080726,{metal:1,rough:.3}),sidewalk:xe(pt.sidewalk(),2,{rough:.55,bump:2}),brick:xe(pt.brick(),3,{rough:.85,bump:4}),plaster:xe(pt.plaster(),3,{bump:1.5}),wood:xe(pt.wood(),1.5,{rough:.75,bump:2}),crate:xe(pt.crate(),1,{rough:.8,bump:3}),metal:xe(pt.metal(),1.5,{metal:.6,rough:.45,bump:1.5}),rust:xe(pt.rust(),1.5,{metal:.4,rough:.7,bump:3}),hospFloor:xe(pt.hospFloor(),4,{rough:.22,bump:1.5}),hospWall:xe(pt.hospWall(),3.2,{rough:.6,bump:1}),ceiling:xe(pt.ceiling(),1.2,{bump:1.5}),plate:xe(pt.plate(),1.5,{metal:.7,rough:.35,bump:4}),labWall:xe(pt.labWall(),4,{metal:.5,rough:.4,bump:2}),hazard:xe(pt.hazard(),1,{rough:.6,bump:1}),facade:[s(0),s(1),s(2),s(3)],concrete:xe(pt.sidewalk(),4,{color:10132122}),darkMetal:Se(1974822,{metal:.6,rough:.5}),black:Se(723724,{rough:.6}),glass:Se(856856,{metal:.8,rough:.05}),white:Se(13158078,{rough:.6}),offwhite:Se(10328720),green:Se(3099190),teal:Se(4091756),red:Se(9050644,{rough:.5}),yellow:Se(13081108),blue:Se(1846354),chrome:Se(10134186,{metal:1,rough:.18}),rubber:Se(1118481,{rough:1}),curtain:Se(7311242,{side:bi}),mattress:Se(12104866),blanket:Se(5599370),lineWhite:Se(12434866,{rough:.7}),lineYellow:Se(11569690,{rough:.7}),trash:Se(1381653,{rough:.4}),dirt:Se(2761240),bark:Se(2827294),lampWarm:dn(16760944,3),lampCold:dn(14217471,3),lampRed:dn(16722458,3),lampBlue:dn(2774527,3),lampGreen:dn(5308304,2.5),screen:xe(pt.screen(),1,{emissive:16777215,emissiveMap:pt.screen(),ei:1.2}),tankGlass:xe(null,1,{color:8965290,transparent:!0,opacity:.18,rough:.1,metal:.2,depthWrite:!1}),tankFluid:xe(null,1,{color:1060896,emissive:2817914,ei:.35,transparent:!0,opacity:.45,depthWrite:!1}),flesh:xe(pt.flesh(),1,{rough:.35}),bloodPool:xe(pt.bloodDecal(),1,{transparent:!0,depthWrite:!1,rough:.1}),puddle:xe(null,1,{color:329482,metal:.9,rough:.02,transparent:!0,opacity:.75,depthWrite:!1})},$i.asphalt.roughnessMap=pt.wetAsphalt().rough,$i.asphalt.envMapIntensity=2.5,$i.bloodPool.polygonOffset=!0,$i.bloodPool.polygonOffsetFactor=-2,$i.puddle.polygonOffset=!0,$i.puddle.polygonOffsetFactor=-1,$i}function wd(s,t,e,i=1){let n=new ge(s,t,e),r=n.attributes.uv,a=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/i,r.getY(c)*a[o][1]/i)}return n}var $o=new Ot,Ed=new Ge,Td=new di,Ad=new E,Rd=new E(1,1,1),Zo=class{constructor(t,e){this.game=t,this.root=e,this.batches=new Map,this.M=Vy()}_add(t,e,i,n,r,a=0,o=0,l=0){return Td.set(a,o,l),Ed.setFromEuler(Td),Ad.set(i,n,r),$o.compose(Ad,Ed,Rd),t.applyMatrix4($o),this.batches.has(e)||this.batches.set(e,[]),this.batches.get(e).push(t),t}box(t,e,i,n,r,a,o,l=0,c=0,h=0){return this._add(wd(e,i,n,t.userData.scale||1),t,r,a+i/2,o,c,l,h)}cbox(t,e,i,n,r,a,o,l=0,c=0,h=0){return this._add(wd(e,i,n,t.userData.scale||1),t,r,a,o,c,l,h)}cyl(t,e,i,n,r,a,o,l=10,c=0,h=0,u=0){let f=new ie(e,i,n,l);return this._add(f,t,r,a,o,c,h,u)}ico(t,e,i,n,r,a=1,o=1,l=1){let c=new ns(e,0);c.deleteAttribute("normal");let h=(c.index,c);h.scale(a,o,l);let u=Gy(h);return this._add(u,t,i,n,r)}mesh(t,e,i,n,r,a=0,o=!1){let l=new $(t,e);return l.position.set(i,n,r),l.rotation.y=a,o&&l.layers.enable(1),this.root.add(l),l}cone(t,e,i,n=1.8,r=4.5,a=16760944,o=.07){let l=a+":"+o;this._cones=this._cones||{},this._cones[l]||(this._cones[l]=new Le({color:a,map:pt.beam(),transparent:!0,opacity:o,blending:oi,depthWrite:!1,side:bi,fog:!0}));let c=new ie(.15,n,r,20,1,!0),h=this.mesh(c,this._cones[l],t,e-r/2,i);return h.renderOrder=7,h}puddle(t,e,i=M(1,2.5),n=M(.8,2)){let r=new Xi(.5,18);r.scale(i,n,1);let a=this.mesh(r,this.M.puddle,t,.008,e);a.rotation.x=-Math.PI/2,a.rotation.z=M(0,3),a.receiveShadow=!0}light(t,e,i,n=16760944,r=12,a=14,o={}){this.game.lights.addAnchor({pos:new E(t,e,i),color:new bt(n),intensity:r,distance:a,...o})}finish(){let e=new Ei,i=new E;for(let[n,r]of this.batches){let a=new Map;for(let o of r){o.computeBoundingBox(),e.copy(o.boundingBox).getCenter(i);let l=e.getSize(new E),c=Math.max(l.x,l.z)>16*2?"big":`${Math.floor(i.x/16)},${Math.floor(i.z/16)}`;a.has(c)||a.set(c,[]),a.get(c).push(o)}for(let[o,l]of a){if(o==="big"){l.forEach(h=>this._emit(h,n));continue}let c=ir(l,!1);l.forEach(h=>h.dispose()),c&&this._emit(c,n)}}this.batches.clear()}_emit(t,e){t.computeBoundingSphere();let i=new $(t,e);i.layers.enable(1),i.receiveShadow=!0,i.castShadow=!e.transparent&&!e.userData.noShadow,i.matrixAutoUpdate=!1,i.updateMatrix(),this.root.add(i)}floor(t,e,i,n,r,a=0,o=.2){this.box(t,Math.abs(n-e),o,Math.abs(r-i),(e+n)/2,a-o,(i+r)/2)}ceiling(t,e,i,n,r,a=3.2,o=.2){this.box(t,Math.abs(n-e),o,Math.abs(r-i),(e+n)/2,a,(i+r)/2)}wall(t,e,i,n,r,a=3.2,o=.25,l=[],c=0){let h=n-e,u=r-i,f=Math.hypot(h,u),d=h/f,m=u/f,x=Math.atan2(h,u),g=[],p=0,_=[...l].sort((v,y)=>v.at-y.at);for(let v of _){g.push([p,v.at-v.w/2]);let y=v.h??2.3;if(y<a){let P=v.at;this.box(t,o,a-y,v.w,e+d*P,c+y,i+m*P,x)}p=v.at+v.w/2}g.push([p,f]);for(let[v,y]of g){let P=y-v;if(P<=.01)continue;let A=(v+y)/2;this.box(t,o,a,P,e+d*A,c,i+m*A,x)}}building(t,e,i,n,r,a=Me(0,4)){let o=this.M,l=Math.min(t,i),c=Math.max(t,i),h=Math.min(e,n),u=Math.max(e,n),f=c-l,d=u-h,m=(l+c)/2,x=(h+u)/2,g=o.walls[a%o.walls.length];this.box(g,f,r,d,m,0,x),this.box(o.trim,f+.5,.4,d+.5,m,r-.1,x),this.box(g,f+.1,.7,d+.1,m,r+.3,x);let p=[[m,u,0,1,f],[m,h,0,-1,f],[c,x,1,0,d],[l,x,-1,0,d]],_=3.7,v=3.1,y=Math.max(0,Math.floor((r-_-.8)/v)),P=o.awning[Me(0,o.awning.length-1)];for(let[A,I,R,w,b]of p){if(b<3.2)continue;let L=Math.atan2(R,w),H=w,B=-R,O=(k,Q,at,ot,Dt,te,Y)=>this.box(k,Q,at,ot,A+H*Dt+R*Y,te,I+B*Dt+w*Y,L),K=2.7,W=Math.max(1,Math.floor((b-.8)/K)),X=-((W-1)*K)/2;O(o.trim,b,.55,.12,0,0,.06),O(o.frame,b,.5,.1,0,_-.55,.05),O(o.trim,b,.14,.16,0,_,.08);for(let k=1;k<=y;k++)O(o.trim,b,.1,.1,0,_+k*v-.05,.05);for(let k=0;k<W;k++){let Q=X+k*K;Jt(.22)?(O(o.frame,1.3,2.5,.1,Q,0,.03),O(Jt(.5)?o.wood:o.darkMetal,1.05,2.3,.06,Q,0,.07),O(o.chrome,.05,.16,.05,Q+.38,1.05,.12)):(O(o.frame,2.2,2.25,.1,Q,.6,.03),O(Jt(.12)?o.winLit[Me(0,3)]:o.shopGlass,2.02,2.07,.05,Q,.69,.07),O(o.frame,.05,2.07,.06,Q,.69,.09),Jt(.45)&&(O(P,2.5,.07,1.1,Q,_-.75,.55),O(P,2.5,.28,.04,Q,_-.98,1.08)));for(let at=0;at<y;at++){let ot=_+at*v+.95,Dt=Jt(.16);O(o.frame,1.32,1.82,.08,Q,ot-.06,.03),O(Dt?o.winLit[Me(0,3)]:o.glass,1.16,1.66,.04,Q,ot+.02,.065),O(o.frame,1.16,.05,.05,Q,ot+.84,.08),O(o.frame,.045,1.66,.05,Q,ot+.02,.08),O(o.trim,1.52,.09,.24,Q,ot-.15,.12),O(o.trim,1.5,.2,.14,Q,ot+1.74,.07),Dt&&Jt(.5)&&O(o.frame,.45,1.66,.03,Q-.35,ot+.02,.09),Jt(.07)&&O(o.metal,.75,.42,.5,Q,ot-.5,.3)}}this.cyl(o.darkMetal,.06,.06,r,A+H*(b/2-.35)+R*.1,r/2,I+B*(b/2-.35)+w*.1,6)}if(Jt(.6)){let A=m+M(-f*.25,f*.25),I=x+M(-d*.25,d*.25);this.cyl(o.wood,1.1,1.1,2.2,A,r+3.1,I,12),this.cyl(o.darkMetal,.2,1.2,.7,A,r+4.55,I,12);for(let[R,w]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])this.box(o.darkMetal,.1,1.4,.1,A+R,r+.6,I+w)}Jt(.7)&&this.box(g,2.6,2.2,3,m+M(-f*.3,f*.3),r+.3,x+M(-d*.3,d*.3)),Jt(.6)&&this.cyl(o.darkMetal,.03,.03,4,m+M(-f*.4,f*.4),r+2.6,x+M(-d*.4,d*.4),4)}geo(t,e,i,n,r,a=0){if(!t.index){let o=[];for(let l=0;l<t.attributes.position.count;l++)o.push(l);t.setIndex(o)}t.attributes.uv||t.setAttribute("uv",new Vt(new Float32Array(t.attributes.position.count*2),2));for(let o of Object.keys(t.attributes))["position","normal","uv"].includes(o)||t.deleteAttribute(o);return this._add(t,e,i,n,r,0,a,0)}sign(t,e,i,n,r,a=3,o=.75,l="#1a1010",c="#ffcf6a",h=!0){let u=pt.sign(t,l,c,Math.round(Math.min(1024,Math.max(256,128*a/o))),128),f=new be({map:u,emissive:16777215,emissiveMap:u,emissiveIntensity:.9,roughness:.8}),d=this.mesh(new hn(a,o),f,e,i,n,r);if(h){let m=new bt(c);this.light(e+Math.sin(r)*.8,i,n+Math.cos(r)*.8,m.getHex(),5,7,{flicker:.15})}return d}carBody(t,e,i,n,r={}){let a=this.M,o=new qs;o.moveTo(-2.14,.3),o.lineTo(-2.2,.56),o.lineTo(-2.12,.86),o.lineTo(-1.5,.93),o.lineTo(-.98,1.36),o.lineTo(.22,1.39),o.lineTo(.96,.96),o.lineTo(1.92,.84),o.lineTo(2.2,.6),o.lineTo(2.14,.3),o.lineTo(1.76,.3),o.absarc(1.36,.32,.4,0,Math.PI,!1),o.lineTo(-.94,.3),o.absarc(-1.34,.32,.4,0,Math.PI,!1),o.closePath();let l=(x,g,p)=>{let _=new Mo(x,{depth:g,bevelEnabled:p>0,bevelSize:p,bevelThickness:p,bevelSegments:2,curveSegments:10});return _.translate(0,0,-g/2),_.rotateY(-Math.PI/2),_=Sd(_,.7),_};this.geo(l(o,1.62,.09),n,t,0,e,i);let c=x=>{let g=new qs;return x.forEach(([p,_],v)=>v?g.lineTo(p,_):g.moveTo(p,_)),g.closePath(),g};this.geo(l(c([[-1.36,.97],[-.95,1.31],[.2,1.34],[.82,.99]]),1.83,0),a.shopGlass,t,0,e,i),this.geo(l(c([[-1.47,.98],[-.99,1.375],[.24,1.4],[.98,.985]]),1.5,0),a.shopGlass,t,0,e,i);let h=Math.cos(i),u=Math.sin(i),f=(x,g)=>[t+x*h+g*u,e-x*u+g*h];for(let x of[-1,1]){let[g,p]=f(x*.915,-.32);this.box(n,.02,.42,.09,g,.95,p,i)}for(let[x,g]of[[-.84,1.36],[.84,1.36],[-.84,-1.34],[.84,-1.34]]){let[p,_]=f(x,g);this.cyl(a.rubber,.35,.35,.24,p,.35,_,16,0,i,Math.PI/2);let[v,y]=f(x*1.075,g);this.cyl(a.rim,.21,.21,.14,v,.35,y,12,0,i,Math.PI/2)}for(let x of[-.62,.62]){let[g,p]=f(x,2.2);this.box(r.lights?a.lampWarm:a.offwhite,.36,.13,.06,g,.63,p,i),[g,p]=f(x,-2.2),this.box(r.lights?a.lampRed:a.red,.34,.12,.06,g,.68,p,i)}let[d,m]=f(0,2.23);return this.box(a.frame,1,.16,.05,d,.42,m,i),this.box(a.chrome,1.84,.1,.06,d,.3,m,i),[d,m]=f(0,-2.23),this.box(a.chrome,1.84,.1,.06,d,.3,m,i),r.lights&&([d,m]=f(0,3.2),this.light(d,.7,m,16769200,9,9)),f}car(t,e,i=0,n=le([5905950,1978186,3815994,4868650,6974058,2506796]),r=!1){this.carBody(t,e,i,this._colorMat(r?new bt(n).multiplyScalar(.55).getHex():n),{lights:!r&&Jt(.5)})}policeCar(t,e,i=0){let n=this.M,r=this.carBody(t,e,i,this._colorMat(789776),{lights:!0});for(let l of[-1,1]){let[c,h]=r(l*.905,-.3);this.box(n.white,.03,.5,1.7,c,.4,h,i)}this.box(n.white,1.5,.03,1.15,r(0,-.38)[0],1.385,r(0,-.38)[1],i),this.box(n.lampRed,.55,.13,.26,r(-.32,-.3)[0],1.42,r(-.32,-.3)[1],i),this.box(n.lampBlue,.55,.13,.26,r(.32,-.3)[0],1.42,r(.32,-.3)[1],i);let[a,o]=r(0,-.3);this.light(a-.6,1.8,o,16719888,12,11,{strobe:0}),this.light(a+.6,1.8,o,2113791,12,11,{strobe:Math.PI})}bus(t,e,i=0){let n=this.M,r=this._colorMat(9072672),a=Math.cos(i),o=Math.sin(i);this.box(r,2.6,2.6,11,t,.5,e,i),this.box(n.glass,2.66,.95,10.2,t,1.75,e,i);for(let l=-4;l<=4;l++)this.box(r,2.7,.95,.12,t+o*l*1.15,1.75,e+a*l*1.15,i);this.box(n.glass,2.2,1,.06,t+o*5.5,1.7,e+a*5.5,i),this.box(n.black,2.64,.35,11.04,t,.45,e,i),this.box(n.offwhite,2.62,.08,11.02,t,2.7,e,i);for(let[l,c]of[[-1.2,3.6],[1.2,3.6],[-1.2,-3.4],[1.2,-3.4]])this.cyl(n.rubber,.5,.5,.3,t+l*a+c*o,.5,e-l*o+c*a,12,0,i,Math.PI/2);this.box(n.lampWarm,.4,.15,.05,t+o*5.52+a*.9,.9,e+a*5.52-o*.9,i),this.light(t+o*6.5,1,e+a*6.5,16767136,6,8)}lamp(t,e,i=0,n=16757594,r=0,a=!0){let o=this.M;this.cyl(o.darkMetal,.07,.1,5.2,t,2.6,e,6);let l=Math.sin(i),c=Math.cos(i);this.box(o.darkMetal,.1,.1,1.2,t+l*.6,5.1,e+c*.6,i),this.box(a?o.lampWarm:o.darkMetal,.5,.12,.3,t+l*1.15,4.98,e+c*1.15,i),a&&(this.light(t+l*1.15,4.6,e+c*1.15,n,30,16,{flicker:r}),this.cone(t+l*1.15,4.95,e+c*1.15,2,4.95,n,.06))}barrel(t,e,i=this.M.rust){this.cyl(i,.3,.3,.9,t,.45,e,10)}crate(t,e,i=1,n=0,r=0){this.box(this.M.crate,i,i,i,t,r,e,n)}dumpster(t,e,i=0){let n=this._colorMat(2046502);this.box(n,1.8,1.2,1.1,t,.1,e,i),this.box(this.M.darkMetal,1.85,.08,1.15,t,1.3,e,i,-.15),this.trash(t+M(-1,1),e+M(-1,1))}trash(t,e,i=Me(2,4)){for(let n=0;n<i;n++)this.ico(this.M.trash,M(.25,.4),t+M(-.6,.6),.2,e+M(-.6,.6),1,.7,1)}barricade(t,e,i=0,n=2.4){let r=this.M,a=Math.cos(i),o=-Math.sin(i);for(let l of[-1,1])this.box(r.wood,.08,1,.5,t+a*l*(n/2-.1),0,e+o*l*(n/2-.1),i);this.box(r.hazard,n,.22,.05,t,.72,e,i),this.box(r.hazard,n,.22,.05,t,.38,e,i)}hydrant(t,e){let i=this._colorMat(9050644);this.cyl(i,.13,.15,.7,t,.35,e,8),this.cyl(i,.15,.15,.1,t,.75,e,8)}bench(t,e,i=0){let n=this.M;this.box(n.wood,1.6,.06,.45,t,.45,e,i),this.box(n.wood,1.6,.4,.05,t-Math.sin(i)*.22,.55,e-Math.cos(i)*.22,i),this.box(n.darkMetal,1.5,.45,.4,t,0,e,i)}deadTree(t,e,i=M(3.5,5)){let n=this.M;this.cyl(n.bark,.1,.2,i,t,i/2,e,6);for(let r=0;r<5;r++){let a=M(0,Math.PI*2),o=M(i*.45,i*.95),l=M(.8,1.6);this.cyl(n.bark,.03,.07,l,t+Math.cos(a)*l*.35,o+l*.3,e+Math.sin(a)*l*.35,5,Math.sin(a)*.9,0,-Math.cos(a)*.9)}}fence(t,e,i,n,r=1.8){let a=Math.hypot(i-t,n-e),o=Math.ceil(a/.25),l=Math.atan2(i-t,n-e);for(let c=0;c<o;c++){let h=(c+.5)/o;Jt(.06)||this.box(this.M.wood,.03,r*M(.85,1),.2,t+(i-t)*h,0,e+(n-e)*h,l,0,M(-.04,.04))}this.box(this.M.wood,.05,.1,a,(t+i)/2,r*.7,(e+n)/2,l)}roadLines(t,e,i,n=this.M.lineYellow){for(let r=Math.min(e,i);r<Math.max(e,i);r+=4)this.box(n,.15,.02,2,t,0,r+1)}bloodPool(t,e,i=M(.8,1.8)){let n=this.mesh(new hn(i,i),this.M.bloodPool,t,.015,e);n.rotation.x=-Math.PI/2,n.rotation.z=M(0,6),n.renderOrder=1}bed(t,e,i=0){let n=this.M;this.box(n.chrome,.95,.06,2,t,.55,e,i),this.box(n.mattress,.9,.16,1.9,t,.61,e,i),this.box(n.blanket,.92,.06,1.1,t-Math.sin(i)*.35,.74,e-Math.cos(i)*.35,i),this.box(n.chrome,.95,.7,.05,t+Math.sin(i)*1,.3,e+Math.cos(i)*1,i);for(let[r,a]of[[-.42,-.9],[.42,-.9],[-.42,.9],[.42,.9]]){let o=Math.cos(i),l=Math.sin(i);this.box(n.chrome,.04,.55,.04,t+r*o+a*l,0,e-r*l+a*o,i)}}gurney(t,e,i=0,n=!0){let r=this.M;this.box(r.chrome,.65,.05,1.9,t,.85,e,i),this.box(r.white,.6,.08,1.85,t,.9,e,i),this.box(r.chrome,.5,.75,.04,t,.1,e,i),n&&this.box(r.red,.4,.01,.6,t,.99,e,i)}desk(t,e,i=3,n=0,r=.8){let a=this.M;this.box(a.wood,i,1.05,r,t,0,e,n),this.box(a.offwhite,i+.1,.05,r+.1,t,1.05,e,n)}curtain(t,e,i=2,n=0){this.box(this.M.curtain,i,2.1,.03,t,.2,e,n),this.box(this.M.chrome,i,.04,.04,t,2.32,e,n)}cabinet(t,e,i=0){this.box(this.M.white,.9,1.9,.45,t,0,e,i),this.box(this.M.glass,.8,.8,.02,t+Math.sin(i)*.23,1,e+Math.cos(i)*.23,i)}wheelchair(t,e,i=0){let n=this.M;this.box(n.blue,.5,.06,.5,t,.5,e,i),this.box(n.blue,.5,.5,.05,t-Math.sin(i)*.25,.55,e-Math.cos(i)*.25,i,-.15);for(let r of[-1,1])this.cyl(n.chrome,.3,.3,.03,t+Math.cos(i)*.28*r,.3,e-Math.sin(i)*.28*r,14,0,i,Math.PI/2)}ceilingLight(t,e,i=3.18,n=!0,r=0,a=0){this.box(n?this.M.lampCold:this.M.offwhite,.5,.04,1.4,t,i-.04,e,a),n&&(this.light(t,i-.3,e,14216959,9,10,{flicker:r}),this.cone(t,i-.06,e,1.4,i-.06,12574975,.035))}door(t,e,i=0,n=this.M.wood,r=0){let a=Math.cos(i),o=-Math.sin(i);this.box(n,1,2.2,.06,t-a*.5+Math.cos(i+r)*.5,0,e-o*.5-Math.sin(i+r)*.5,i+r)}tank(t,e,i=.7,n=2.6,r=!0,a=!1){let o=this.M;this.cyl(o.darkMetal,i+.1,i+.15,.35,t,.175,e,14),this.cyl(o.darkMetal,i+.1,i+.1,.3,t,n+.2,e,14);let l={x:t,z:e,meshes:[]};if(a)for(let c=0;c<5;c++){let h=M(0,6.28);this.box(o.tankGlass,.3,M(.2,.8),.02,t+Math.cos(h)*i,.35,e+Math.sin(h)*i,h)}else{let c=this.mesh(new ie(i*.95,i*.95,n-.4,16),o.tankFluid,t,.35+(n-.4)/2,e);c.renderOrder=2;let h=this.mesh(new ie(i,i,n-.1,16,1,!0),o.tankGlass,t,.35+(n-.1)/2,e);h.renderOrder=3,l.meshes.push(c,h),this.light(t,n*.6,e,4259712,4,5,{flicker:.05})}if(r&&!a){let c=o.flesh;this.box(c,.35,.6,.25,t,1.1,e),this.box(c,.22,.25,.22,t,1.75,e,.4,.3),this.box(c,.1,.55,.1,t-.25,1,e,0,0,.3),this.box(c,.1,.55,.1,t+.25,1.05,e,0,0,-.4),this.box(c,.12,.6,.12,t-.1,.45,e),this.box(c,.12,.6,.12,t+.1,.5,e,0,.2)}return l}pipe(t,e,i,n,r,a,o=.12,l=this.M.rust){let c=new E(t,e,i),h=new E(n,r,a),u=c.distanceTo(h),f=new ie(o,o,u,8),d=h.clone().sub(c).normalize(),m=new Ge().setFromUnitVectors(new E(0,1,0),d),x=c.add(h).multiplyScalar(.5);$o.compose(x,m,Rd),f.applyMatrix4($o),this.batches.has(l)||this.batches.set(l,[]),this.batches.get(l).push(f)}console(t,e,i=0){let n=this.M;this.box(n.darkMetal,1.4,.95,.7,t,0,e,i),this.box(n.screen,1.2,.6,.05,t-Math.sin(i)*.1,1.05,e-Math.cos(i)*.1,i,-.3),this.light(t+Math.sin(i)*.6,1.3,e+Math.cos(i)*.6,3211136,2,3)}alarm(t,e,i){this.cbox(this.M.lampRed,.25,.25,.25,t,e,i),this.light(t,e-.3,i,16718346,14,12,{pulse:3})}_colorMat(t){return this._cm=this._cm||{},this._cm[t]||(this._cm[t]=Se(t,{rough:.28,metal:.55})),this._cm[t]}};function Gy(s){let e=s.attributes.position.count,i=[];for(let n=0;n<e;n++)i.push(n);return s.setIndex(i),s.attributes.uv||s.setAttribute("uv",new Vt(new Float32Array(e*2),2)),s.computeVertexNormals(),s}var Ke=(s,t,e)=>{let i=Ut((e-s)/(t-s),0,1);return i*i*(3-2*i)},Nn=(s,t)=>Math.exp(-(s*s)/(t*t)),pn=(s,t,e,i)=>Math.exp(-(s*s)/(e*e)-t*t/(i*i)),Cd=0,Pd=1,Wy=2,Xy=3,qy=4,$h={L:5,R:7},Yy={L:6,R:8},$y={L:9,R:11},Zy={L:10,R:12},ea=[["L",-1],["R",1]],Jy={normal:{h:1,tw:1,td:1,limb:1,belly:0,leg:1,arm:1,head:1},thin:{h:1.03,tw:.86,td:.84,limb:.8,belly:0,leg:1.02,arm:1.06,head:.97},fat:{h:.96,tw:1.42,td:1.5,limb:1.32,belly:1,leg:.92,arm:.98,head:1.08}};function Ky(s){let t=Jy[s],e=.98*t.leg,i=e+.06,n=.47*t.h,r=i+n,a=r+.085,o=.172*t.tw,l=.108*t.td,c={w:.074*t.head,h:.112*t.head,d:.098*t.head};return{name:s,P:t,hipY:e,spineY:i,tH:n,neckY:r,headY:a,chestW:o,chestD:l,S:c,headC:new E(0,a+.1*t.head,.012),shX:o+.03*t.limb,shY:r-.065,ua:.29*t.arm,fa:.27*t.arm,legX:.093*Math.sqrt(t.tw),kneeDrop:.43*t.leg,ankleDrop:.405*t.leg,hipJ:e-.06,limb:t.limb,crotchY:e-.12,neckTopY:r+.12}}function os(s,t,e){if(t<=s[0][0])return s[0][e];let i=s.length;if(t>=s[i-1][0])return s[i-1][e];let n=0;for(;t>s[n+1][0];)n++;let r=s[Math.max(0,n-1)][e],a=s[n][e],o=s[n+1][e],l=s[Math.min(i-1,n+2)][e],c=(t-s[n][0])/(s[n+1][0]-s[n][0]),h=c*c,u=h*c;return .5*(2*a+(-r+o)*c+(2*r-5*a+4*o-l)*h+(-r+3*a-3*o+l)*u)}var qh=[[0,.095,.075,0],[.07,.16,.108,-.006],[.15,.172,.114,-.014],[.24,.16,.104,-.004],[.33,.146,.097,.008],[.43,.15,.1,.014],[.53,.163,.106,.018],[.63,.175,.11,.018],[.72,.18,.106,.01],[.79,.16,.096,0],[.84,.105,.08,-.006],[.885,.066,.062,0],[.94,.054,.054,.006],[1,.05,.05,.01]];function Qy(s,t){let e=s.P,i=Ke(.82,.9,t),n=se(e.tw,Math.sqrt(e.tw),i),r=se(e.td,Math.sqrt(e.td),i),a=os(qh,t,1)*n,o=os(qh,t,2)*r,l=os(qh,t,3)*r;if(e.belly){let u=Nn(t-.4,.15)*e.belly;o+=.05*u,l+=.055*u,a+=.02*u}let c=se(s.crotchY,s.neckTopY,t),h=Nn(t-.64,.07);return{x:0,y:c,z:l,rx:a,rz:o,n:2.25,bulge:(u,f)=>f>0?.012*h*f*f*e.td:-.006*Nn(t-.66,.08)*f*f}}function Id(s,t,e){let{ua:i,fa:n}=s,r,a=0;return e<0?(r=se(.026,.06,Ke(-.065,0,e)),a=-t*.025*Ke(0,-.065,e)):e<=i?r=os([[0,.06],[.2,.057],[.5,.049],[.83,.042],[1,.038]],e/i,1):r=os([[0,.038],[.17,.043],[.48,.037],[1,.027]],(e-i)/n,1),r*=s.limb,{x:t*s.shX+a,y:s.shY-e,z:0,rx:r,rz:r*.92,n:2}}function Dd(s,t,e){let{kneeDrop:i,ankleDrop:n}=s,r,a=0,o=0;if(e<0)r=se(.06,.093,Ke(-.085,0,e)),a=-t*.02*Ke(0,-.085,e);else if(e<=i)r=os([[0,.093],[.25,.088],[.6,.072],[.88,.058],[1,.055]],e/i,1);else{let l=(e-i)/n;r=os([[0,.055],[.2,.062],[.45,.054],[.75,.04],[1,.033]],l,1),o=-.012*Nn(l-.22,.2)}return r*=Math.pow(s.limb,.9),{x:t*s.legX+a,y:s.hipJ-e,z:o,rx:r,rz:r*1.04,n:2}}var Jo=class{constructor(){this.pos=[],this.uv=[],this.si=[],this.sw=[],this.idx=[[],[],[]],this.seams=[]}get count(){return this.pos.length/3}vert(t,e,i,n,r,a){this.pos.push(t,e,i),this.uv.push(n,r);let o=Object.entries(a||{0:1}).map(([c,h])=>[+c,h]).filter(c=>c[1]>.001).sort((c,h)=>h[1]-c[1]).slice(0,4),l=o.reduce((c,h)=>c+h[1],0)||1;for(let c=0;c<4;c++)this.si.push(o[c]?o[c][0]:0),this.sw.push(o[c]?o[c][1]/l:0)}tube({samples:t,seg:e,ring:i,weights:n,mat:r,cloth:a=.4,theta0:o=-Math.PI/2,flare:l}){let c=this.count,h=t.map(m=>i(m)),u=0;for(let m of h)u=Math.max(u,Math.PI*(m.rx+m.rz));let f=Math.max(1,Math.round(u/a)),d=0;for(let m=0;m<h.length;m++){let x=h[m];m>0&&(d+=Math.abs(h[m-1].y-x.y));let g=l?l(t[m]):1,p=2/(x.n||2);for(let _=0;_<=e;_++){let v=o+_/e*Math.PI*2,y=Math.cos(v),P=Math.sin(v),A=Math.sign(y)*Math.pow(Math.abs(y),p),I=Math.sign(P)*Math.pow(Math.abs(P),p),R=x.x+A*x.rx*g,w=x.z+I*x.rz*g+(x.bulge?x.bulge(y,P):0);this.vert(R,x.y,w,_/e*f,d/a,n?n(t[m],R,x.y,w):null)}this.seams.push([c+m*(e+1),c+m*(e+1)+e])}for(let m=0;m<h.length-1;m++){let x=r((t[m]+t[m+1])/2);for(let g=0;g<e;g++){let p=c+m*(e+1)+g,_=p+1,v=p+e+1,y=v+1;this.idx[x].push(p,_,v,_,y,v)}}}build(t=!0){let e=new Ae;e.setAttribute("position",new Vt(this.pos,3)),e.setAttribute("uv",new Vt(this.uv,2)),t&&(e.setAttribute("skinIndex",new es(this.si,4)),e.setAttribute("skinWeight",new Vt(this.sw,4)));let i=[];this.idx.forEach((r,a)=>{r.length&&(e.addGroup(i.length,r.length,a),i.push(...r))}),e.setIndex(i),e.computeVertexNormals();let n=e.attributes.normal;for(let[r,a]of this.seams){let o=n.getX(r)+n.getX(a),l=n.getY(r)+n.getY(a),c=n.getZ(r)+n.getZ(a),h=Math.hypot(o,l,c)||1;n.setXYZ(r,o/h,l/h,c/h),n.setXYZ(a,o/h,l/h,c/h)}return e.computeBoundingSphere(),e}};function Zh(s,t,e,i=[]){let n=[];for(let r=s;r<t;r+=e)n.push(r);n.push(t);for(let r of i)r>s+.006&&r<t-.006&&n.push(r-.012,r-.002,r+.002);return[...new Set(n.map(r=>Math.round(r*1e4)/1e4))].sort((r,a)=>r-a)}function jy(s,t){let e=t.sleeves?t.longSleeves?s.ua+s.fa-.035:s.ua*.5:-1,i=t.longPants?s.kneeDrop+s.ankleDrop+1:s.kneeDrop*.7;return{sleeve:e,trouser:i,belt:s.spineY+.02,key:`${e.toFixed(3)}|${i.toFixed(3)}`}}function Ld(s,t,e,i,n,r,a,o){let l=Zh(r,a,.02,[n.sleeve]);s.tube({samples:l,seg:16,theta0:i>0?Math.PI:0,ring:c=>Id(t,i,c),flare:c=>n.sleeve>0&&c<=n.sleeve&&c>n.sleeve-.014?1.13:1,weights:o?c=>{let h=Ke(-.06,.03,c),u=Ke(t.ua-.035,t.ua+.035,c);return{[Pd]:1-h,[$h[e]]:h*(1-u),[Yy[e]]:h*u}}:null,mat:c=>c<=n.sleeve?0:2,cloth:.3})}function Ud(s,t,e,i,n,r,a,o){let l=Zh(r,a,.025,[n.trouser]);s.tube({samples:l,seg:18,theta0:i>0?Math.PI:0,ring:c=>Dd(t,i,c),flare:c=>c<=n.trouser&&c>n.trouser-.014?1.12:1,weights:o?c=>{let h=Ke(-.08,.03,c),u=Ke(t.kneeDrop-.035,t.kneeDrop+.035,c);return{[Cd]:1-h,[$y[e]]:h*(1-u),[Zy[e]]:h*u}}:null,mat:c=>c<=n.trouser?1:2,cloth:.35})}function t_(s,t){let e=new Jo,i=s.neckTopY-s.crotchY,n=(t.belt-s.crotchY)/i,r=(s.neckY-.02-s.crotchY)/i,a=Zh(0,1,1/34,[n]).reverse();e.tube({samples:a,seg:28,ring:o=>Qy(s,o),flare:o=>o>n-.03&&o<n+.012?1.035:1,weights:(o,l,c)=>{let h=Ke(s.spineY-.05,s.spineY+.07,c),u=Ke(s.neckY-.035,s.neckY+.03,c),f={[Cd]:1-h,[Pd]:h*(1-u),[Wy]:h*u},d=.4*Ke(s.chestW*.55,s.chestW,Math.abs(l))*Nn(c-s.shY,.07);if(d>.01){for(let m in f)f[m]*=1-d;f[l<0?$h.L:$h.R]=d}return f},mat:o=>o>r?2:o>n?0:1,cloth:.38});for(let[o,l]of ea)Ld(e,s,o,l,t,-.065,s.ua+s.fa,!0),Ud(e,s,o,l,t,-.085,s.kneeDrop+s.ankleDrop,!0);return e.build(!0)}function Nd(s,t,e,i,n){let r=s*i.w,a=t*i.h,o=e*i.d,l=Ke(.15,-.95,t);r*=1-.36*l,e<0&&(o*=1-.25*l),e<0&&t>-.1&&(o*=1.07);let c=Ke(.3,.85,e);if(c>0){let h=0;h-=(n?.016:.011)*(pn(s+.34,t-.14,.16,.11)+pn(s-.34,t-.14,.16,.11)),h+=.01*Nn(t-.29,.07)*Nn(s,.55),h+=.024*Nn(s,.1)*Ke(.24,.02,t)*Ke(-.26,-.1,t),h+=.008*(pn(s+.5,t+.06,.16,.12)+pn(s-.5,t+.06,.16,.12)),h-=(n?.009:.003)*(pn(s+.45,t+.3,.14,.14)+pn(s-.45,t+.3,.14,.14)),h-=.005*pn(s,t+.42,.3,.04),h+=.004*pn(s,t+.48,.22,.05),h+=.009*pn(s,t+.78,.26,.12),o+=h*c}return[r,a,o]}function e_(s,t){let e=new ve(1,64,48,-Math.PI/2),i=e.attributes.position,n=i.count,r=new Uint16Array(n*4),a=new Float32Array(n*4),o=s.headC;for(let l=0;l<n;l++){let c=i.getX(l),h=i.getY(l),u=i.getZ(l),[f,d,m]=Nd(c,h,u,s.S,t);i.setXYZ(l,o.x+f,o.y+d,o.z+m);let x=Ke(-.36,-.52,h)*Ke(-.55,.1,u);r[l*4]=Xy,r[l*4+1]=qy,a[l*4]=1-x,a[l*4+1]=x}return e.setAttribute("skinIndex",new es(r,4)),e.setAttribute("skinWeight",new Vt(a,4)),e.computeVertexNormals(),e.computeBoundingSphere(),e}function Jh(s,t){let e=s.attributes.uv;for(let i=0;i<e.count;i++)e.setXY(i,e.getX(i)*t,e.getY(i)*t);return s}function Un(s,t,e,i,n=0,r=0,a=0,o=1,l=1,c=1){let h=new Ot().compose(new E(t,e,i),new Ge().setFromEuler(new di(n,r,a)),new E(o,l,c));return s.applyMatrix4(h)}function Fd(s,t){let e=s.limb,i=-s.fa,n=[Un(new ve(1,12,10),0,i-.045*e,.004,0,0,0,.04*e,.05*e,.021*e)];for(let r=0;r<4;r++){let a=(-.026+r*.0175)*e,o=[.026,.03,.029,.023][r]*e,l=.4+r*.05,c=.9,h=a,u=i-.088*e,f=.004;for(let[d,m]of[[l,o],[l+c,o*.85]]){let x=-Math.cos(d)*m,g=-Math.sin(d)*m;n.push(Un(new ni(.0082*e,m,3,6),h,u+x/2,f+g/2,d)),u+=x,f+=g}}return n.push(Un(new ni(.009*e,.03*e,3,6),-t*.032*e,i-.05*e,-.012,.5,0,t*.5)),Jh(ir(n.map(r=>r.toNonIndexed())),.25)}function kd(s,t){let e=Math.pow(s.limb,.7),i=-s.ankleDrop;return t?Jh(ir([Un(new ni(.034*e,.15,4,10),0,i-.05,.05,Math.PI/2,0,0,1,.75,1).toNonIndexed(),Un(new ve(.036*e,10,8),0,i-.035,-.01).toNonIndexed()]),.35):ir([Un(new ni(.042*e,.16,4,10),0,i-.048,.05,Math.PI/2,0,0,1.05,.72,1).toNonIndexed(),Un(new ge(.088*e,.018,.26),0,i-.072,.05).toNonIndexed(),Un(new ie(.04*e,.045*e,.07,12),0,i-.03,-.005).toNonIndexed()])}function i_(s,t,e,i){let n=t==="L"?-1:1,r=new Jo,a=e==="arm"||e==="upperArm"||e==="foreArm",o,l;e==="arm"?[o,l]=[0,s.ua+s.fa]:e==="upperArm"?[o,l]=[0,s.ua+.01]:e==="foreArm"?[o,l]=[s.ua-.01,s.ua+s.fa]:e==="leg"?[o,l]=[0,s.kneeDrop+s.ankleDrop]:e==="thigh"?[o,l]=[0,s.kneeDrop+.01]:[o,l]=[s.kneeDrop-.01,s.kneeDrop+s.ankleDrop],a?Ld(r,s,t,n,i,o,l,!1):Ud(r,s,t,n,i,o,l,!1);let c=r.build(!1),h=a?Id(s,n,o):Dd(s,n,o);return c.translate(-h.x,-h.y,-h.z),{geo:c,r:h.rx,len:l-o}}var mn=new Map;function Re(s,t=.8,e={}){let i=s.uuid+t+(e.emissive||"");if(!mn.has(i)){let n=new be({map:s,roughness:t,metalness:0,bumpMap:s,bumpScale:1.4});mn.set(i,n)}return mn.get(i)}function ue(s,t=.6,e=0,i=0,n=1){let r="col"+s+t+e+i+n;return mn.has(r)||mn.set(r,new be({color:s,roughness:t,metalness:e,emissive:i,emissiveIntensity:n})),mn.get(r)}var n_=s=>{let t="eye"+s;return mn.has(t)||mn.set(t,new Le({color:new bt(s).multiplyScalar(1.7)})),mn.get(t)},ls=new Le({color:16777215}),nr=new be({color:4194304,emissive:16718336,emissiveIntensity:2.2,roughness:.5}),s_=new Le({visible:!1}),Yh=new Map;function li(s,t){return Yh.has(s)||Yh.set(s,t()),Yh.get(s)}function sr(s,t,e="normal"){let i=Ky(e),n=jy(i,s),r=!s.human,a=`${e}|${n.key}`,o=li("body|"+a,()=>t_(i,n)),l=li(`head|${e}|${r}`,()=>e_(i,r)),c=(X,k,Q,at)=>{let ot=new Or;return ot.position.set(k,Q,at),X&&X.add(ot),ot},h=c(null,0,i.hipY,0),u=c(h,0,.06,0),f=c(u,0,i.tH,0),d=c(f,0,.085,0),m=i.headC.clone().add(new E(0,-.32*i.S.h,-.25*i.S.d)),x=c(d,0,m.y-i.headY,m.z),g=[h,u,f,d,x],p={},_={};for(let[X,k]of ea){let Q=c(u,k*i.shX,i.shY-i.spineY,0),at=c(Q,0,-i.ua,0);p[X]={shoulder:Q,elbow:at,name:"arm"+X}}for(let[X,k]of ea){let Q=c(h,k*i.legX,-.06,0),at=c(Q,0,-i.kneeDrop,0);_[X]={hip:Q,knee:at,name:"leg"+X}}g.push(p.L.shoulder,p.L.elbow,p.R.shoulder,p.R.elbow,_.L.hip,_.L.knee,_.R.hip,_.R.knee);let v=new jt;v.add(h);let y=[],P={shirt:s.shirt,pants:s.pants,skin:s.skin,shoes:s.shoes||ue(1446414,.55),head:s.head},A=(X,k)=>(X.castShadow=!0,X.receiveShadow=!0,X.userData.ent=t,X.userData.part="visual",X.userData.base=k,y.push(X),X),I=A(new kr(o,[P.shirt,P.pants,P.skin]),[P.shirt,P.pants,P.skin]),R=A(new kr(l,P.head),P.head);I.frustumCulled=!1,R.frustumCulled=!1,v.add(I,R);let w=new E(0,i.headC.y-i.headY,i.headC.z);for(let[X,k]of ea){let Q=A(new $(li(`hand|${e}|${X}`,()=>Fd(i,k)),P.skin),P.skin);p[X].elbow.add(Q),p[X].hand=Q;let at=A(new $(li(`foot|${e}|${!!s.barefoot}`,()=>kd(i,s.barefoot)),s.barefoot?P.skin:P.shoes),s.barefoot?P.skin:P.shoes);_[X].knee.add(at);let ot=A(new $(li("ear",()=>Jh(new ve(.028,10,8),.2)),P.skin),P.skin);ot.scale.set(.32*i.P.head,1*i.P.head,.62*i.P.head),ot.position.set(k*(i.S.w*.93),w.y+.004,w.z-.012),ot.rotation.y=k*.35,d.add(ot)}let b=[];if(s.eyes)for(let X of[-1,1]){let k=new E(X*.34,.14,.93).normalize(),[Q,at,ot]=Nd(k.x,k.y,k.z,i.S,r),Dt=new $(li("eye",()=>new ve(.0115,10,8)),n_(s.eyes));Dt.position.set(w.x+Q*.97,w.y+at,w.z+ot-.009),d.add(Dt),b.push(Dt)}let L=new Te;L.position.copy(w),d.add(L);let H=[],B=(X,k,Q,at,ot,Dt,te=1,Y=1,rt=1)=>{let yt=new $(k,s_);return yt.position.set(at,ot,Dt),yt.scale.set(te,Y,rt),yt.userData.ent=t,yt.userData.part=Q,yt.layers.enable(1),X.add(yt),H.push(yt),yt},O=(X,k)=>li(`cap${X.toFixed(3)}:${k.toFixed(3)}`,()=>new ni(X,Math.max(.01,k),2,8));B(d,li("hbHead",()=>new ve(1,10,8)),"head",w.x,w.y,w.z,i.S.w*1.25,i.S.h*1.08,i.S.d*1.15),B(u,O(i.chestW*.95,i.tH-.12),"torso",0,i.tH*.45,.01,1,1,i.chestD/i.chestW*1.3),B(h,O(.12*i.P.tw,.04),"torso",0,-.04,0,1.3,1,.9);for(let[X]of ea)B(p[X].shoulder,O(.062*i.limb,i.ua-.08),"arm"+X,0,-i.ua/2,0),B(p[X].elbow,O(.056*i.limb,i.fa+.02),"forearm"+X,0,-(i.fa+.1)/2,0),B(_[X].hip,O(.092*i.limb,i.kneeDrop-.12),"leg"+X,0,-i.kneeDrop/2,0),B(_[X].knee,O(.068*i.limb,i.ankleDrop-.06),"shin"+X,0,-i.ankleDrop/2-.02,.01);v.updateMatrixWorld(!0);let K=new lo(g);return I.bind(K),R.bind(K),{root:v,hips:h,torso:u,neck:f,head:d,headTarget:L,jaw:x,jawScale:.38,eyes:b,arms:p,legs:_,meshes:y,hitboxes:H,body:I,headMesh:R,mats:P,B:i,makeDebris:(X,k)=>r_(i,n,a,e,P,s,X,k),makeHead:()=>{let X=new jt,k=new $(l,P.head);return k.position.copy(i.headC).negate(),k.castShadow=!0,X.add(k),X}}}function ia(s){s.scale.setScalar(1e-4),s.traverse(t=>{t.isMesh&&t.layers.disable(1)})}function na(s,t){let e=new jt,i=new $(li("stump",()=>new ve(1,12,8,0,Math.PI*2,0,Math.PI/1.6)),Re(pt.flesh(),.3));i.scale.set(t,t*.7,t),i.rotation.x=Math.PI;let n=new $(li("boneStub",()=>new ie(.011,.014,.05,8)),ue(14471348,.5));return n.position.y=-.02,e.add(i,n),e.traverse(r=>r.isMesh&&(r.castShadow=!0)),e.position.copy(s.position),s.parent.add(e),e}function r_(s,t,e,i,n,r,a,o){let{geo:l,r:c,len:h}=li(`limb|${e}|${a}|${o}`,()=>i_(s,o,a,t)),u=new jt,f=new $(l,[n.shirt,n.pants,n.skin]);u.add(f);let d=new $(li("cutCap",()=>new Xi(1,14)),Re(pt.flesh(),.3));d.rotation.x=-Math.PI/2,d.scale.setScalar(c*.98),d.position.y=-.001,u.add(d);let m=new $(li("boneStub",()=>new ie(.011,.014,.05,8)),ue(14471348,.5));m.position.y=.015,u.add(m);let x=o==="L"?-1:1;if(a==="arm"||a==="foreArm"){let g=new $(li(`hand|${i}|${o}`,()=>Fd(s,x)),n.skin);g.position.y=-h+s.fa,u.add(g)}if(a==="leg"||a==="shin"){let g=new $(li(`foot|${i}|${!!r.barefoot}`,()=>kd(s,r.barefoot)),r.barefoot?n.skin:n.shoes);g.position.y=-h+s.ankleDrop,u.add(g)}return u.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.userData.base=g.material)}),u}var Od=["#1a1410","#3a2a1a","#5a4630","#6e6e6e","#2a1a10","#8a6a3a"];function Bd(s,t){let e=Me(0,4),i=Jt(.75)?le(Od):null,n={skin:Re(pt.skin(e),.48),head:Re(pt.zombieHead(e,i),.5),sleeves:Jt(.85),longSleeves:Jt(.35),longPants:!0,eyes:s==="lab"?"#7aff9a":s==="hospital"?"#cfe8ff":"#ffd27a"};(t==="runner"||t==="leaper")&&(n.eyes="#ff3a1a"),t==="brute"&&(n.eyes="#ff8a1a");let r=(a,o,l=.7)=>Re(pt.cloth(a,o,l),.85);if(s==="hospital"){let a=Math.random();a<.6?(n.shirt=r(le(["#8fb0c0","#a3b8a0","#b0b0c0"]),"gown",.9),n.pants=n.shirt,n.sleeves=!0,n.longSleeves=!1,n.longPants=!1,n.barefoot=!0):a<.85?(n.shirt=r(le(["#3e7a78","#4a6a8a"]),"shirt",.8),n.pants=n.shirt):(n.shirt=r("#c8c8c0","shirt",1),n.pants=r("#2a2a30","denim",.3),n.longSleeves=!0)}else if(s==="lab"){let a=Math.random();a<.45?(n.shirt=r("#c9c9c2","shirt",.9),n.pants=r("#3a3a40","denim",.4),n.sleeves=!0,n.longSleeves=!0):a<.75?(n.shirt=r("#b89a20","hazmat",.6),n.pants=n.shirt,n.sleeves=!0,n.longSleeves=!0):(n.shirt=r("#2a2e36","uniform",.6),n.pants=r("#22252b","denim",.3))}else n.shirt=r(le(["#4a5a6a","#7a2a2a","#2a3a2a","#8a7a5a","#5a5a5a","#6a4a2a"]),le(["shirt","plaid","shirt"]),.7),Jt(.15)&&(n.shirt=r("#1e2a44","uniform",.6)),n.pants=r(le(["#2a3550","#3a3226","#222222","#4a4030"]),"denim",.4);return n}function zd(){let s=Me(0,3),t=le(Od);return{human:!0,skin:Re(pt.humanSkin(s),.6),head:Re(pt.humanHead(s,t),.6),shirt:Re(pt.cloth(le(["#b03a2a","#2a6a9a","#d0a040","#e0e0d8","#5a8a4a"]),"shirt",.15),.85),pants:Re(pt.cloth(le(["#2a3550","#5a4a3a","#1a1a1a"]),"denim",0),.85),sleeves:!0,longSleeves:Jt(.5),longPants:!0,eyes:null}}function Fn(s,t){for(let e of s.meshes){let i=e.userData.base;if(!i)continue;let n=t||i;e.material!==n&&(e.material=n)}}var Ie=new E,a_=new E,Iv=new Ge,sa=new E(0,1,0),ki=class{constructor(t){this.game=t,this.dead=!1,this.remove=!1,this.root=new jt,this.kind="entity"}get pos(){return this.root.position}update(){}onShot(){return!1}blast(){}};function rr(s,t){s.traverse(e=>{e.isMesh&&(t?e.layers.enable(1):e.layers.disable(1))})}function Kh(s,t,e){s.traverse(i=>{i.isMesh&&(i.userData.ent=t,i.userData.part=e,i.layers.enable(1),i.castShadow=!0)})}var Qh={shambler:{hp:3,speed:[.75,1.15],build:"normal",windup:1,range:1.45,score:100,pitch:1},runner:{hp:2,speed:[3,3.6],build:"thin",windup:.7,range:1.5,score:150,pitch:1.35,run:!0},brute:{hp:14,speed:[.8,.95],build:"fat",scale:1.28,windup:1.3,range:1.95,score:400,pitch:.6,heavy:!0},thrower:{hp:4,speed:[.9,1.1],build:"normal",windup:.9,range:1.45,score:200,throws:!0,keep:[7,11],pitch:.9},crawler:{hp:2,speed:[.55,.75],build:"normal",crawl:!0,windup:.9,range:1.35,score:80,pitch:1.1},leaper:{hp:2,speed:[2.4,2.9],build:"thin",windup:.55,range:1.5,score:200,leaps:!0,pitch:1.5}},Hd=new ns(1,1),o_={head:3,torso:1,armL:.5,armR:.5,forearmL:.4,forearmR:.4,legL:.5,legR:.5,shinL:.4,shinR:.4},l_={armL:1.5,armR:1.5,forearmL:1,forearmR:1,legL:2,legR:2,shinL:1.4,shinR:1.4},ar=class extends ki{constructor(t,e){super(t),this.kind="zombie",this.type=e.type||"shambler";let i=this.def=Qh[this.type],n=t.diff;this.maxHp=this.hp=i.hp*n.hp*(e.hpMul||1),this.speed=M(i.speed[0],i.speed[1])*n.speed*(e.speedMul||1),this.windupTime=i.windup*n.windup,this.range=i.range,this.keep=i.keep?M(i.keep[0],i.keep[1]):0,this.scale=(i.scale||1)*M(.94,1.06),this.rig=sr(Bd(t.theme,this.type),this,i.build),this.root.add(this.rig.root),this.root.scale.setScalar(this.scale),this.root.position.set(e.at[0],e.y||0,e.at[1]);let r=t.playerPos;if(this.root.rotation.y=e.face??Math.atan2(r.x-e.at[0],r.z-e.at[1]),this.path=(e.path||[]).map(o=>new E(o[0],0,o[1])),this.chase=e.chase||null,this.fight=e.fight||null,this.ambient=!this.fight,this.limbHp={...l_},this.severed={},this.crawling=!!i.crawl,this.phase=M(0,6.28),this.t=M(0,10),this.kb=new E,this.groanT=M(.5,4),this.cool=M(1,2.5),this.armHang=[Jt(.2),Jt(.2)],this.limp=Jt(.4)?M(.3,.7):1,this.headTilt=M(-.35,.35),this.flinch=0,this.headFlinch=0,this.warn=0,this.atk=0,this.matMode=0,this.flashT=0,this.state="walk",this.crawling){let o=Jt(.5)?["L","R"]:["R","L"];ia(this.rig.legs[o[0]].hip),na(this.rig.legs[o[0]].hip,.085),ia(this.rig.legs[o[1]].knee),na(this.rig.legs[o[1]].knee,.055);for(let l of["leg","shin"])for(let c of["L","R"])this.severed[l+c]=!0}let a=e.emerge||"walk";a==="rise"?(this.state="rise",this.emergeT=-(e.riseDelay||0),this.root.position.y=-2):a==="drop"?(this.state="drop",this.vy=0):a==="getup"?(this.state="getup",this.emergeT=-(e.lie??M(.2,.8)),this.rig.hips.rotation.x=-1.45,this.rig.hips.position.y=.22):a==="idle"&&(this.state="idle",this.wake=e.wake||11),e.door&&t.audio.play("door",{pan:t.panFor(this.root.position)})}get alive(){return!this.dead}targetPos(){return this.chase&&(this.chase.dead||this.chase.safe)&&(this.chase=null),this.chase?this.chase.root.position:this.game.playerPos}update(t){if(this.t+=t,this.flashT>0&&(this.flashT-=t),this.state==="dying")return this.updateDying(t);let e=this.game,i=this.root.position,n=this.targetPos(),r=n.x-i.x,a=n.z-i.z,o=Math.hypot(r,a)||.001,l=null,c=0;switch(this.kb.lengthSq()>1e-4&&(i.addScaledVector(this.kb,t),this.kb.multiplyScalar(Math.exp(-7*t))),this.flinch=Math.max(0,this.flinch-t*4),this.headFlinch=Math.max(0,this.headFlinch-t*4),this.cool-=t,this.warn=0,this.state){case"idle":l=Math.atan2(r,a),o<this.wake&&(this.state="walk",this.groan(1.2));break;case"rise":this.emergeT+=t,this.emergeT>0&&(i.y=se(-2,0,Ln(Ut(this.emergeT/1.5,0,1))),Math.random()<.5&&e.fx.dust(Ie.set(i.x,.05,i.z),sa,1,void 0),this.emergeT>=1.5&&(i.y=0,this.state="walk",this.groan())),l=Math.atan2(r,a);break;case"drop":this.vy-=14*t,i.y+=this.vy*t,i.y<=0&&(i.y=0,this.state="land",this.landT=.4,e.audio.play("block",{pan:e.panFor(i)}),e.fx.dust(Ie.set(i.x,.1,i.z),sa,8)),l=Math.atan2(r,a);break;case"land":this.landT-=t,this.landT<=0&&(this.state="walk"),l=Math.atan2(r,a);break;case"getup":this.emergeT+=t,this.emergeT>1.6&&(this.state="walk",this.groan()),l=Math.atan2(r,a);break;case"walk":{let u=this.chase?!0:e.inView(i),f=n;this.path.length?(f=this.path[0],Math.hypot(f.x-i.x,f.z-i.z)<.5&&(this.path.shift(),f=this.path.length?this.path[0]:n)):u||(f=this.approachPoint(this.def.throws?this.keep:this.range*.92));let d=f.x-i.x,m=f.z-i.z,x=Math.hypot(d,m)||.001;if(!this.path.length&&u&&o<=this.range)this.startAttack();else if(this.def.throws&&!this.path.length&&u&&o<=this.keep)l=Math.atan2(r,a),this.cool<=0&&!this.chase&&(this.state="throw",this.atk=0);else if(this.def.leaps&&!this.path.length&&u&&o<7.5&&o>2.6&&this.cool<=0&&!this.chase)this.state="crouch",this.atk=0,e.audio.play("shriek",{pan:e.panFor(i),pitch:M(.9,1.2)});else{let g=this.speed;this.crawling&&(g=this.def.crawl?this.speed:.5);let p=Math.min(g*t,x);i.x+=d/x*p,i.z+=m/x*p,l=x>.05?Math.atan2(d,m):Math.atan2(r,a),c=x>.05?g:0,this.phase+=c*t*(this.def.run?4.2:this.crawling?7:5.5)}i.y>0&&this.state==="walk"&&(i.y=Gt(i.y,0,5,t));break}case"windup":this.atk+=t,this.warn=this.atk/this.windupTime,l=Math.atan2(r,a),this.atk>=this.windupTime&&this.strike(o);break;case"recover":this.rec-=t,l=Math.atan2(r,a),this.rec<=0&&(this.state="walk");break;case"stagger":this.rec-=t,this.rec<=0&&(this.state="walk");break;case"throw":this.atk+=t,this.warn=this.atk/.9,l=Math.atan2(r,a),this.atk>=.9&&this.throwProjectile();break;case"crouch":this.atk+=t,this.warn=this.atk/this.windupTime,l=Math.atan2(r,a),this.atk>=this.windupTime&&(this.state="leap",this.leapT=0,this.leapFrom=i.clone(),this.leapTo=Ie.set(-r,0,-a).normalize().multiplyScalar(1).add(n).clone(),this.leapTo.y=0);break;case"leap":this.leapT+=t/.7,this.warn=1,i.lerpVectors(this.leapFrom,this.leapTo,Math.min(1,this.leapT)),i.y=Math.sin(Math.PI*Math.min(1,this.leapT))*1.3,l=Math.atan2(r,a),this.leapT>=1&&(i.y=0,this.cool=M(3,5),this.strike(Math.hypot(n.x-i.x,n.z-i.z)));break}if(this.state!=="leap"&&this.state!=="rise"){for(let u of e.zombies){if(u===this||u.dead)continue;let f=i.x-u.root.position.x,d=i.z-u.root.position.z,m=f*f+d*d,x=.5*(this.scale+u.scale);if(m<x*x&&m>1e-5){let g=Math.sqrt(m),p=(x-g)*.5;i.x+=f/g*p,i.z+=d/g*p}}if(!this.chase){let u=i.x-e.playerPos.x,f=i.z-e.playerPos.z,d=Math.hypot(u,f),m=this.range*.72;d<m&&d>.001&&(i.x=e.playerPos.x+u/d*m,i.z=e.playerPos.z+f/d*m)}}l!==null&&(this.root.rotation.y=as(this.root.rotation.y,l,1-Math.exp(-7*t))),this.groanT-=t,this.groanT<=0&&(this.groanT=M(3,8),o<18&&this.groan()),this.ambient&&e.isBehind(i,6)&&(this.remove=!0);let h=0;this.flashT>0?h=1:this.warn>.45&&Math.floor(this.t*12)%2===0&&(h=2),h!==this.matMode&&(this.matMode=h,Fn(this.rig,h===1?ls:h===2?nr:null)),this.animate(t,c)}approachPoint(t){let e=this.game,i=e.camFwd,n=e.playerPos,r=this.root.position.x-n.x,a=this.root.position.z-n.z,o=(r*-i.z+a*i.x)/Math.max(1,Math.hypot(r,a)),l=Ut(o*1.5,-1,1)*t*e.viewTan*.6;return a_.set(n.x+i.x*t-i.z*l,0,n.z+i.z*t+i.x*l)}groan(t=1){let e=this.game,i=e.playerPos.distanceTo(this.root.position);e.audio.play("groan",{pan:e.panFor(this.root.position),vol:Ut(1.4-i/14,.15,1)*t,pitch:this.def.pitch*M(.9,1.1)})}startAttack(){this.state="windup",this.atk=0,this.windupHits=0,Math.random()<.6&&this.groan(1.2)}strike(t){let e=this.game;e.audio.play("swipe",{pan:e.panFor(this.root.position)}),this.chase?t<this.range+1.2&&this.chase.grabbed(this):t<this.range+1.2&&e.hurtPlayer(this),this.state="recover",this.rec=.9,this.atk=0}throwProjectile(){let t=this.game;this.rig.arms.R.hand.getWorldPosition(Ie);let i=t.camera.position.clone();i.y-=.15,i.x+=M(-.2,.2);let n=t.theme==="lab"?"acid":t.theme==="hospital"?"cleaver":"bottle";t.addEntity(new kn(t,{from:Ie.clone(),to:i,kind:n,time:M(1.3,1.6)})),this.state="recover",this.rec=.6,this.cool=M(2.6,4.2)}stagger(t=.4){this.state==="leap"&&(this.root.position.y=0),this.state="stagger",this.rec=t,this.atk=0}onShot(t,e,i){if(this.dead)return!1;let n=this.game,r=0,a=!1,o=t[0].point;for(let c of t){let h=o_[c.part]??1;c.part==="head"&&this.def.heavy&&(h=2),this.state==="leap"&&(h*=2),r+=c.dmg*h,c.part==="head"&&(a=!0,o=c.point),this.limbHp[c.part]!==void 0&&!this.severed[c.part]&&(this.limbHp[c.part]-=c.dmg,this.limbHp[c.part]<=0&&this.sever(c.part,i)),n.fx.blood(c.point,i,c.part==="head"?10:6,2.5)}Math.random()<.6&&n.fx.splat(this.root.position.x+i.x*M(.4,1.6)+M(-.4,.4),this.root.position.z+i.z*M(.4,1.6)+M(-.4,.4),M(.35,.9)),this.hp-=r,this.flashT=.06,this.flinch=Math.min(1,this.flinch+.6),a&&(this.headFlinch=1),(this.state==="idle"||this.state==="getup")&&(this.state="walk");let l=(this.def.heavy?.6:2.2)*Math.min(2,r);if(this.kb.x+=i.x*l,this.kb.z+=i.z*l,this.state==="windup"||this.state==="throw"||this.state==="crouch"||this.state==="leap"?(this.windupHits=(this.windupHits||0)+1,(!this.def.heavy||a||this.windupHits>=3)&&this.stagger(this.def.heavy?.5:.35)):this.state==="walk"&&!this.def.heavy&&r>=.9&&this.stagger(.18),this.hp<=0){let c=r>=4.5||e&&e.gib&&r>=this.maxHp;this.die(a?"head":c?"gib":"normal",i,o)}else n.audio.play("hit",{pan:n.panFor(this.root.position)});return!0}blast(t,e){this.dead||(Ie.subVectors(this.root.position,e).setY(.6).normalize(),this.hp-=t,this.hp<=0?this.die("gib",Ie,this.root.position.clone().setY(1),!0):(this.kb.addScaledVector(Ie,5),this.stagger(.6)))}sever(t,e){let i=this.game,n=t.slice(-1),r=t.startsWith("arm")||t.startsWith("forearm"),a=t.startsWith("forearm")||t.startsWith("shin"),o=(r?"arm":"leg")+n,l=(r?"forearm":"shin")+n;if(this.severed[o]||a&&this.severed[l])return;let c=r?this.rig.arms[n]:this.rig.legs[n],h=a?r?c.elbow:c.knee:r?c.shoulder:c.hip,u;a?u=r?"foreArm":"shin":this.severed[l]?u=r?"upperArm":"thigh":u=r?"arm":"leg",this.severed[a?l:o]=!0,a||(this.severed[l]=!0),Fn(this.rig,null),this.matMode=0,h.updateWorldMatrix(!0,!1);let f=this.rig.makeDebris(u,n);h.matrixWorld.decompose(f.position,f.quaternion,f.scale),ia(h);let d=(r?a?.04:.058:a?.056:.088)*this.rig.B.limb;na(h,d),i.fx.addDebris(f,new E(e.x*3+M(-1,1),M(1.5,3.5),e.z*3+M(-1,1)),new E(M(-8,8),M(-8,8),M(-8,8)),6,!0,.06),f.getWorldPosition(Ie),i.fx.blood(Ie,e,22,3),i.fx.addEmitter({follow:h,kind:"fountain",rate:45,life:1.2}),i.audio.play("sever",{pan:i.panFor(Ie)}),i.addScore(a?20:40,Ie,r?"ARM OFF":"LEG OFF"),!r&&!this.crawling&&(this.crawling=!0,this.range=1.35,this.stagger(.8))}die(t,e,i,n=!1){if(this.dead)return;let r=this.game;if(this.dead=!0,this.state="dying",this.dyingT=0,this.warn=0,Fn(this.rig,null),rr(this.root,!1),this.fallDir=this.crawling?0:Jt(.75)?-1:1,this.fallStart=this.rig.hips.rotation.x,r.onKill(this,{head:t==="head",gib:t==="gib",point:i,explosive:n}),t==="gib"){this.gib(e),this.remove=!0;return}t==="head"?this.blowHead(e):(r.audio.play("hit",{pan:r.panFor(this.root.position)}),Math.random()<.5&&this.groan(.8))}blowHead(t){let e=this.game,i=this.rig;i.headTarget.getWorldPosition(Ie),this.headless=!0,ia(i.head);let n=na(i.head,.055);n.rotation.x=Math.PI,e.fx.blood(Ie,t,45,4.5,.9,.11);let r=Re(pt.flesh(),.4);for(let a=0;a<7;a++){let o=new $(Hd,a<3?i.mats.skin:r);o.scale.set(M(.02,.045),M(.015,.035),M(.02,.04)).multiplyScalar(this.scale),o.position.copy(Ie),e.fx.addDebris(o,new E(t.x*3+M(-2,2),M(2,5),t.z*3+M(-2,2)),new E(M(-9,9),M(-9,9),M(-9,9)),4,!0,.03)}e.fx.addEmitter({follow:i.neck,kind:"fountain",rate:55,life:1.6}),e.audio.play("headshot",{pan:e.panFor(Ie)})}gib(t){let e=this.game,i=this.rig;i.root.updateWorldMatrix(!0,!0);let n=this.root.position.clone().setY(1*this.scale),r=o=>{let l=o.position.clone().sub(n).setY(0).normalize().multiplyScalar(M(2,5));l.x+=t.x*3,l.z+=t.z*3,l.y=M(2,5),e.fx.addDebris(o,l,new E(M(-12,12),M(-12,12),M(-12,12)),M(4,6),!0,.06)};for(let o of["L","R"])for(let[l,c,h,u,f]of[[!0,"arm"+o,"forearm"+o,i.arms[o].shoulder,i.arms[o].elbow],[!1,"leg"+o,"shin"+o,i.legs[o].hip,i.legs[o].knee]]){if(this.severed[c])continue;let d=this.severed[h]?l?"upperArm":"thigh":l?"arm":"leg",m=i.makeDebris(d,o);u.matrixWorld.decompose(m.position,m.quaternion,m.scale),r(m)}if(!this.headless){let o=i.makeHead();i.headTarget.getWorldPosition(o.position),i.head.getWorldQuaternion(o.quaternion),o.scale.setScalar(this.scale),r(o)}let a=Re(pt.flesh(),.35);for(let o=0;o<9;o++){let l=new $(Hd,o%3===0?i.mats.shirt:a);l.scale.set(M(.04,.09),M(.03,.07),M(.04,.08)).multiplyScalar(this.scale),l.position.copy(n).add(Ie.set(M(-.2,.2),M(-.3,.4),M(-.2,.2))),l.castShadow=!0,r(l)}e.fx.blood(n,t,80,6,1.1,.13),e.fx.splat(n.x,n.z,M(1.5,2.2)),e.audio.play("gib",{pan:e.panFor(n)}),this.root.visible=!1}updateDying(t){this.dyingT+=t;let e=this.rig,i=Ho(Ut(this.dyingT/.6,0,1));this.fallDir!==0?(e.hips.rotation.x=se(this.fallStart,this.fallDir*1.45,i),e.hips.position.y=se(e.B.hipY,.17,i)):e.hips.position.y=Gt(e.hips.position.y,.14,6,t);let n=8;e.torso.rotation.x=Gt(e.torso.rotation.x,0,n,t),e.neck.rotation.x=Gt(e.neck.rotation.x,this.fallDir*-.4,n,t);for(let[r,a]of[["L",-1],["R",1]]){let o=e.arms[r];o.shoulder.rotation.x=Gt(o.shoulder.rotation.x,this.fallDir<0?-2.6:-.4,n,t),o.shoulder.rotation.z=Gt(o.shoulder.rotation.z,a*.9,n,t),o.elbow.rotation.x=Gt(o.elbow.rotation.x,-.3,n,t);let l=e.legs[r];l.hip.rotation.x=Gt(l.hip.rotation.x,a*.1,n,t),l.hip.rotation.z=Gt(l.hip.rotation.z,a*.15,n,t),l.knee.rotation.x=Gt(l.knee.rotation.x,this.dyingT<.3?.9:.1,n,t)}this.dyingT>2.6&&(this.root.position.y-=t*.35),this.dyingT>4.2&&(this.remove=!0)}animate(t,e){let i=this.rig,n=this.phase,r=this.t,a=i.B,o=a.hipY-.02+Math.abs(Math.cos(n))*.035,l=0,c=.28,h=Math.sin(n)*.1,u=Math.sin(n)*.07,f=.1+Math.sin(r*1.3)*.08,d=this.headTilt+Math.sin(r*.8)*.12,m=[-1.3+Math.sin(n)*.15,-1.3-Math.sin(n)*.15],x=[-.12,.12],g=[-.15,-.15],p=this.def.run?.85:.42,_=[-Math.sin(n)*p,Math.sin(n)*p*this.limp],v=[(.5+.5*Math.sin(n+1.6))*p*1.5,(.5+.5*Math.sin(n+Math.PI+1.6))*p*1.5*this.limp],y=.15+Math.sin(r*4)*.12,P=12;this.def.run&&this.state==="walk"&&(c=.55,m=[-1+Math.sin(n)*.6,-1-Math.sin(n)*.6],g=[-.6,-.6],y=.5),!e&&(this.state==="walk"||this.state==="idle")&&(_=[0,0],v=[.05,.05],h=Math.sin(r*.7)*.15,u=Math.sin(r*.9)*.06);for(let R=0;R<2;R++)this.armHang[R]&&this.state==="walk"&&(m[R]=Math.sin(n+R*3)*.25,x[R]=(R?1:-1)*.08,g[R]=-.1);switch(this.state){case"idle":c=.6,f=.5+Math.sin(r*6)*.08,m=[-.9+Math.sin(r*5)*.2,-.8+Math.sin(r*5+1)*.2],g=[-1.2,-1],_=[-.5,-.5],v=[1,1],o=a.hipY-.25,y=.3+Math.sin(r*8)*.25;break;case"rise":m=[-2.8+Math.sin(r*6)*.2,-2.7+Math.sin(r*6+2)*.2],g=[-.3,-.3],c=.1,y=.6;break;case"getup":{let R=Ut(this.emergeT/1.4,0,1);P=5,l=R<=0?-1.45:se(-1.45,0,Ln(R)),o=R<=0?.22:se(.22,a.hipY,Ln(R)),m=[-1.6,-1.4],c=R>.3?.5:0,_=[R>0?-1*(1-R):0,R>0?-.6*(1-R):0],v=[R>0?1.4*(1-R):0,R>0?1*(1-R):0];break}case"drop":case"land":_=[-.9,-.9],v=[1.4,1.4],o=a.hipY-.3,m=[-2.2,-2.2],x=[-.6,.6],c=.6;break;case"windup":{let R=Ut(this.atk/this.windupTime,0,1);m=[se(-1.4,-2.7,R),se(-1.4,-2.75,R)],x=[se(-.1,-.35,R),se(.1,.35,R)],g=[-.5*R,-.5*R],c=se(.3,-.25,R),f=se(.1,-.35,R),y=.4+R*.5,_=[-.2,.25],v=[.3,.1],P=14;break}case"recover":{let R=this.rec>.6;m=R?[-.6,-.7]:[-1.2,-1.2],c=R?.75:.35,f=R?.3:.1,P=R?25:8,y=.7,_=[-.35,.3];break}case"stagger":c=-.35,f=-.5,m=[-.4+Math.sin(r*20)*.3,-.6],x=[-.6,.7],P=18;break;case"throw":{let R=Ut(this.atk/.9,0,1);m=[-1,R<.85?se(-1.2,-3,R/.85):-.6],g=[-.3,R<.85?-1.4:-.2],h=R<.85?-.5*R:.4,c=.1,P=R<.85?10:30;break}case"crouch":_=[-1,-1],v=[1.6,1.6],o=a.hipY-.35,c=.9,m=[-.4,-.4],x=[-.7,.7],f=-.6,y=.9;break;case"leap":_=[-1.2,-.8],v=[1.6,1.2],c=.4,m=[-2.4,-2.4],x=[-.4,.4],g=[-.6,-.6],f=-.4,y=1,P=20;break}if(this.crawling){if(o=.2,l=1.42,c=-.1,u=0,h=Math.sin(n)*.15,f=-.9,m=[-2.3+Math.sin(n)*.55,-2.3-Math.sin(n)*.55],x=[-.2,.2],g=[-.3+Math.max(0,Math.cos(n))*.6,-.3+Math.max(0,-Math.cos(n))*.6],_=[.15,.25],v=[.3,.1],this.state==="windup"){let R=Ut(this.atk/this.windupTime,0,1);m=[-3+R*.3,-3+R*.3],f=-1.2,l=1.42-R*.4,o=.2+R*.15}y=.6+Math.sin(r*7)*.2}c-=this.flinch*.5,f-=this.headFlinch*.7;let A=(R,w,b,L=P)=>R.rotation[w]=Gt(R.rotation[w],b,L,t);i.hips.position.y=Gt(i.hips.position.y,o,P,t),A(i.hips,"x",l,this.state==="getup"?6:P),A(i.torso,"x",c),A(i.torso,"y",h),A(i.torso,"z",u),A(i.neck,"x",f),A(i.neck,"z",d),A(i.jaw,"x",y*i.jawScale);let I=["L","R"];for(let R=0;R<2;R++){let w=i.arms[I[R]];A(w.shoulder,"x",m[R]),A(w.shoulder,"z",x[R]),A(w.elbow,"x",g[R]);let b=i.legs[I[R]];A(b.hip,"x",_[R]),A(b.knee,"x",v[R])}}},Ko=class extends ki{constructor(t,e){super(t),this.kind="survivor",this.rig=sr(zd(),this,"normal"),this.root.add(this.rig.root),this.root.position.set(e.at[0],0,e.at[1]),this.path=(e.path||[]).map(i=>new E(i[0],0,i[1])),this.exit=(e.exit||[]).map(i=>new E(i[0],0,i[1])),this.speed=e.speed||3.2,this.state="run",this.chasers=[],this.phase=0,this.t=0,this.safe=!1,this.flashT=0,this.screamT=.2}update(t){let e=this.game;this.t+=t;let i=this.rig,n=this.root.position;if(this.flashT>0&&(this.flashT-=t,this.flashT<=0&&Fn(i,null)),this.screamT-=t,this.screamT<=0&&(this.state==="run"||this.state==="cower")&&(e.audio.play("scream",{pan:e.panFor(n)}),this.screamT=M(2.5,4)),this.state==="dead"){this.deadT+=t,i.hips.rotation.x=Gt(i.hips.rotation.x,1.45,8,t),i.hips.position.y=Gt(i.hips.position.y,.17,8,t),this.deadT>3&&(n.y-=t*.3),this.deadT>4.5&&(this.remove=!0);return}(this.state==="run"||this.state==="cower")&&this.chasers.length&&this.chasers.every(h=>h.dead)&&(this.state="rescued",this.safe=!0,e.onRescue(this),rr(this.root,!1));let r=!1,a=this.state==="rescued"?this.exit:this.state==="run"?this.path:null;if(a)if(a.length){let h=a[0],u=h.x-n.x,f=h.z-n.z,d=Math.hypot(u,f);if(d<.4)a.shift();else{let m=Math.min(d,this.speed*t);n.x+=u/d*m,n.z+=f/d*m,this.root.rotation.y=as(this.root.rotation.y,Math.atan2(u,f),1-Math.exp(-10*t)),r=!0,this.phase+=t*13}}else this.state==="run"?this.state="cower":this.remove=!0;let o=this.phase,l=12,c=(h,u,f)=>h.rotation[u]=Gt(h.rotation[u],f,l,t);if(r){c(i.torso,"x",.3),i.hips.position.y=i.B.hipY+Math.abs(Math.sin(o))*.05;for(let[h,u]of[[0,"L"],[1,"R"]]){let f=h?1:-1;c(i.legs[u].hip,"x",f*Math.sin(o)*.9),c(i.legs[u].knee,"x",.6+f*Math.cos(o)*.6),c(i.arms[u].shoulder,"x",-f*Math.sin(o)*.9-(this.state==="run"?1.2:0)),c(i.arms[u].shoulder,"z",f*.3),c(i.arms[u].elbow,"x",-1.2)}c(i.neck,"x",this.state==="run"?-.3:0)}else if(this.state==="cower"){i.hips.position.y=Gt(i.hips.position.y,i.B.hipY-.35,l,t),c(i.torso,"x",.5),c(i.neck,"x",.4);let h=this.chasers.find(u=>!u.dead);h&&(this.root.rotation.y=as(this.root.rotation.y,Math.atan2(h.root.position.x-n.x,h.root.position.z-n.z),.1));for(let[u,f]of[[0,"L"],[1,"R"]])c(i.legs[f].hip,"x",-1),c(i.legs[f].knee,"x",1.7),c(i.arms[f].shoulder,"x",-2.2+Math.sin(this.t*20+u)*.08),c(i.arms[f].shoulder,"z",(u?1:-1)*-.3),c(i.arms[f].elbow,"x",-1.6)}}grabbed(){if(this.state==="dead"||this.safe)return;let t=this.game;this.die(),t.fx.blood(Ie.copy(this.root.position).setY(1.3),sa,30,3,1.2),t.message("SURVIVOR LOST","#ff5a3a",1.6)}die(){this.state="dead",this.deadT=0,this.dead=!0,rr(this.root,!1),this.game.audio.play("scream",{pan:this.game.panFor(this.root.position)})}onShot(t,e,i){return this.dead||this.safe||(this.game.fx.blood(t[0].point,i,12,2.5),Fn(this.rig,ls),this.flashT=.08,this.die(),this.game.onCivilianShot(this)),!1}},Vd={hit:new ve(.38,8,6)},Gd=new Le({visible:!1}),kn=class extends ki{constructor(t,e){super(t),this.kind="projectile",this.from=e.from.clone(),this.to=e.to.clone(),this.time=e.time||1.4,this.arc=e.arc??1.2,this.t=0,this.type=e.kind||"bottle",this.dmg=e.dmg||1,this.points=e.points??50;let i=new jt;if(this.type==="bottle"){let r=ue(1919520,.1,.3);i.add(new $(new ie(.06,.06,.22,10),r));let a=new $(new ie(.025,.05,.12,8),r);a.position.y=.16,i.add(a);let o=new $(new ve(.04,6,4),ue(0,1,0,16747040,4));o.position.y=.24,i.add(o),this.flame=o}else if(this.type==="cleaver"||this.type==="axe"){let r=new $(new ge(.22,.14,.015),ue(10133670,.25,1));r.position.x=.08,i.add(r);let a=new $(new ie(.02,.02,.16,6),ue(3810322,.7));a.rotation.z=Math.PI/2,a.position.x=-.1,i.add(a),i.scale.setScalar(this.type==="axe"?2.2:1.6)}else if(this.type==="acid"){let r=new $(new ns(.16,2),ue(2117648,.2,0,3866426,1.6));i.add(r),this.blob=r}else if(this.type==="rock")i.add(new $(new vo(.35,0),ue(4867648,.9)));else if(this.type==="gurney"){let r=new $(new ge(.7,.15,1.8),ue(11579568,.3,.9));i.add(r),this.big=!0}i.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.userData.ent=this,r.userData.part="proj",r.layers.enable(1))}),this.model=i,this.root.add(i);let n=new $(Vd.hit,Gd);n.userData.ent=this,n.userData.part="proj",n.layers.enable(1),this.big&&n.scale.setScalar(2.2),this.root.add(n),this.root.position.copy(this.from),this.spin=new E(M(6,12),M(-4,4),M(-3,3)),t.audio.play("whoosh",{pan:t.panFor(this.from)})}update(t){this.t+=t/this.time;let e=Math.min(1,this.t);this.root.position.lerpVectors(this.from,this.to,e),this.root.position.y+=Math.sin(Math.PI*e)*this.arc,this.model.rotation.x+=this.spin.x*t,this.model.rotation.y+=this.spin.y*t,this.model.rotation.z+=this.spin.z*t,this.flame&&Math.random()<.6&&(this.flame.getWorldPosition(Ie),this.game.fx.glow.spawn(Ie.x,Ie.y,Ie.z,M(-.2,.2),M(.3,.8),M(-.2,.2),{color:new bt(16747040),life:.3,size:.12,sizeEnd:.02})),this.blob&&this.blob.scale.set(1+Math.sin(this.t*40)*.15,1-Math.sin(this.t*40)*.15,1),this.warn=e,this.t>=1&&(this.remove=!0,this.dead=!0,this.game.hurtPlayer(this,this.dmg)||this.game.audio.play(this.type==="acid"?"splash":"block"),this.type==="acid"&&this.game.screenSplat("acid"))}onShot(t,e,i){if(this.dead)return!1;let n=this.game;this.dead=!0,this.remove=!0;let r=this.root.position;return this.type==="bottle"?(n.audio.play("glass",{pan:n.panFor(r)}),n.fx.explosion(r,.35)):this.type==="acid"?(n.audio.play("splash",{pan:n.panFor(r)}),n.fx.acid(r,24)):(n.audio.play("clang",{pan:n.panFor(r)}),n.fx.sparks(r,i.clone().negate(),14)),n.addScore(this.points,r.clone(),"SHOT DOWN"),n.stats.projectiles++,!0}},Qo={herb:{label:"GREEN HERB",color:3866474},shells:{label:"SHOTGUN",color:16747066},smg:{label:"SMG",color:6994175},magnum:{label:"MAGNUM",color:16769130},gem:{label:"BONUS",color:16764992}},or=class extends ki{constructor(t,e){super(t),this.kind="pickup",this.type=e.kind,this.life=e.life||14,this.t=M(0,5),this.baseY=e.y??1;let i=new jt,n=Qo[this.type];if(this.type==="herb"){let o=new $(new ie(.12,.09,.16,12),ue(8014378,.8));i.add(o);let l=ue(1739306,.5,0,674320,1);for(let c=0;c<6;c++){let h=new $(new ve(.08,8,6),l);h.scale.set(.5,1.6,.25);let u=c/6*Math.PI*2;h.position.set(Math.cos(u)*.05,.17,Math.sin(u)*.05),h.rotation.set(Math.sin(u)*.5,0,-Math.cos(u)*.5),i.add(h)}}else if(this.type==="shells"){i.add(new $(new ge(.3,.14,.18),ue(9050640,.6)));for(let o=0;o<4;o++){let l=new $(new ie(.03,.03,.14,8),ue(12593690,.4));l.position.set(-.1+o*.065,.12,0),i.add(l);let c=new $(new ie(.031,.031,.03,8),ue(13148224,.25,1));c.position.set(-.1+o*.065,.06,0),i.add(c)}}else if(this.type==="smg"){let o=ue(1711136,.4,.8);i.add(new $(new ge(.42,.1,.06),o));let l=new $(new ge(.06,.16,.05),o);l.position.set(-.05,-.1,0),i.add(l);let c=new $(new ge(.05,.2,.04),o);c.position.set(.08,-.13,0),i.add(c)}else if(this.type==="magnum"){let o=ue(11580600,.2,1),l=new $(new ie(.025,.025,.3,10),o);l.rotation.z=Math.PI/2,l.position.x=.1,i.add(l);let c=new $(new ie(.05,.05,.08,10),o);c.rotation.z=Math.PI/2,i.add(c);let h=new $(new ge(.06,.15,.05),ue(4860436,.6));h.position.set(-.08,-.08,0),h.rotation.z=.3,i.add(h)}else i.add(new $(new bo(.15,0),ue(13934624,.15,1,6965760,1)));i.traverse(o=>o.isMesh&&(o.castShadow=!0)),Kh(i,this,"pickup"),this.model=i,this.root.add(i);let r=new $(Vd.hit,Gd);r.userData.ent=this,r.userData.part="pickup",r.layers.enable(1),this.root.add(r);let a=new un(new Wi({map:pt.glow(),color:n.color,blending:oi,transparent:!0,depthWrite:!1,opacity:.6}));a.scale.setScalar(.9),this.halo=a,this.root.add(a),this.root.position.set(e.pos.x,this.baseY,e.pos.z)}update(t){this.t+=t,this.life-=t,this.root.position.y=this.baseY+Math.sin(this.t*2.5)*.08,this.model.rotation.y+=t*2,this.halo.material.opacity=.45+Math.sin(this.t*6)*.15,this.root.visible=this.life>3||Math.floor(this.t*8)%2===0,(this.life<=0||this.game.isBehind(this.root.position,3))&&(this.remove=!0,this.halo.material.dispose())}onShot(){return this.dead?!1:(this.dead=!0,this.remove=!0,this.halo.material.dispose(),this.game.collect(this.type,this.root.position.clone()),!0)}},ra=class extends ki{constructor(t,e){super(t),this.kind="barrel";let i=new $(new ie(.32,.32,.95,16),ue(10099216,.45,.5));i.position.y=.475;let n=new $(new ie(.325,.325,.2,16),ue(13672464,.5,.3));n.position.y=.55;let r=new $(new ie(.3,.3,.02,16),ue(3815994,.5,.8));r.position.y=.96,this.root.add(i,n,r),Kh(this.root,this,"barrel"),this.root.position.set(e.at[0],0,e.at[1]),this.fuse=-1}update(t){this.fuse>0&&(this.fuse-=t,Math.random()<.5&&this.game.fx.sparks(Ie.copy(this.root.position).setY(1),sa,2),this.fuse<=0&&this.explode())}onShot(){return this.dead?!1:(this.light(.08),!0)}blast(){this.light(.15)}light(t){this.dead||this.fuse>0||(this.fuse=t,this.game.audio.play("clang",{pan:this.game.panFor(this.root.position)}))}explode(){this.dead=!0,this.remove=!0;let t=this.root.position.clone().setY(.8);this.game.explode(t,4.5,14),this.game.addScore(100,t,"BOOM")}},aa=class extends ki{constructor(t,e){super(t),this.kind="crate";let i=e.size||.8;this.size=i;let n=new $(new ge(i,i,i),Re(pt.crate(),.8));n.position.y=i/2,n.castShadow=n.receiveShadow=!0,this.root.add(n),Kh(this.root,this,"crate"),this.root.position.set(e.at[0],e.y||0,e.at[1]),this.root.rotation.y=e.ry||M(-.3,.3),this.hp=2,this.drop=e.drop}onShot(t){return this.dead?!1:(this.hp-=t.reduce((e,i)=>e+i.dmg,0),this.game.fx.dust(t[0].point,Ie.set(0,.5,0),4,void 0),this.game.audio.play("impact",{pan:this.game.panFor(this.root.position)}),this.hp<=0&&this.smash(),!0)}blast(){this.smash()}smash(){if(this.dead)return;let t=this.game;this.dead=!0,this.remove=!0;let e=this.root.position.clone().setY(this.root.position.y+this.size/2),i=Re(pt.wood(),.8);for(let n=0;n<7;n++){let r=new $(new ge(this.size*M(.5,1),.04,.12),i);r.position.copy(e).add(Ie.set(M(-.3,.3),M(-.3,.3),M(-.3,.3))),r.castShadow=!0,t.fx.addDebris(r,new E(M(-3,3),M(2,5),M(-3,3)),new E(M(-10,10),M(-10,10),M(-10,10)),3,!1,.02)}t.fx.dust(e,sa,12),t.audio.play("break",{pan:t.panFor(e)}),this.drop&&t.addEntity(new or(t,{kind:this.drop,pos:e,y:Math.max(.7,e.y)}))}};var fe=new E,c_=new E,On=new E(0,1,0);function Wd(s,t,e,i){let n=(r,a,o,l=e)=>r.rotation[a]=Gt(r.rotation[a],o,l,i);s.hips.position.y=Gt(s.hips.position.y,t.hipsY??s.B.hipY,e,i),n(s.hips,"x",t.hipsX||0),n(s.torso,"x",t.torsoX??.2),n(s.torso,"y",t.torsoY||0),n(s.torso,"z",t.torsoZ||0),n(s.neck,"x",t.neckX||0),n(s.neck,"z",t.neckZ||0),n(s.jaw,"x",(t.jaw??.15)*s.jawScale),["L","R"].forEach((r,a)=>{n(s.arms[r].shoulder,"x",t.shX[a]),n(s.arms[r].shoulder,"z",t.shZ?t.shZ[a]:a?.15:-.15),n(s.arms[r].elbow,"x",t.elX?t.elX[a]:-.2),n(s.legs[r].hip,"x",t.hipX?t.hipX[a]:0),n(s.legs[r].knee,"x",t.knX?t.knX[a]:.05)})}function h_(s,t,e){return{hipX:[-Math.sin(s)*t,Math.sin(s)*t],knX:[(.5+.5*Math.sin(s+1.6))*t*1.4,(.5+.5*Math.sin(s+Math.PI+1.6))*t*1.4],shX:[-.3+Math.sin(s)*.3,-.3-Math.sin(s)*.3],torsoX:.25,torsoZ:Math.sin(s)*.06,neckX:.1+Math.sin(e)*.05}}var oa=class extends ki{constructor(t,e){super(t),this.kind="boss",this.at=e.clone(),this.t=0,this.stateT=0,this.state="intro",this.finished=!1,this.flashT=0,this.matMode=0,this.warn=0}setState(t){this.state=t,this.stateT=0}mult(){return .2}onShot(t,e,i){if(this.dead)return!1;let n=this.game;if(this.state==="intro")return n.fx.sparks(t[0].point,i.clone().negate(),4),!0;let r=0,a=0;for(let o of t){let l=this.mult(o.part);r+=o.dmg*l,l>=1&&(a+=o.dmg*l),l===0?(n.fx.sparks(o.point,i.clone().negate(),6),n.audio.play("clang",{pan:n.panFor(o.point)})):n.fx.blood(o.point,i,l>=1?14:4,l>=1?3.5:2)}return a>0&&n.addScore(Math.round(a*30),t[0].point,null),this.hp-=r*n.diff.bossDmg,this.flashT=a>0?.08:.04,this.onDamage(r,a,t,i),a>0&&n.audio.play("hit",{pan:n.panFor(t[0].point)}),this.hp<=0&&this.defeat(),!0}blast(t){this.dead||this.state==="intro"||(this.hp-=t*.4,this.onDamage(t*.4,t*.2,[],On),this.hp<=0&&this.defeat())}onDamage(){}defeat(){this.dead||(this.dead=!0,this.hp=0,this.setState("death"),rr(this.root,!1),this.game.onBossDefeated(this))}updateMat(t){this.flashT>0&&(this.flashT-=.016);let e=0;this.flashT>0?e=1:this.warn>.4&&Math.floor(this.t*12)%2===0&&(e=2),e!==this.matMode&&(this.matMode=e,Fn(t,e===1?ls:e===2?nr:null))}playerDist(){let t=this.game.playerPos;return Math.hypot(t.x-this.root.position.x,t.z-this.root.position.z)}faceYaw(){let t=this.game.playerPos;return Math.atan2(t.x-this.root.position.x,t.z-this.root.position.z)}};function nu(s,t){return s.userData.ent=t,s.userData.part="weak",s.layers.enable(1),s.castShadow=!0,s}var jh=class extends oa{constructor(t,e){super(t,e),this.title="SPECIMEN 01",this.name="THE BUTCHER",this.maxHp=this.hp=45*t.diff.bossHp;let i={skin:Re(pt.skin(3),.45),head:Re(pt.zombieHead(3,null),.45),shirt:Re(pt.cloth("#cfc6b4","apron",1),.6),pants:Re(pt.cloth("#2a2620","denim",.6),.85),sleeves:!1,longPants:!0,belly:!0,eyes:"#ff5a10"},n=this.rig=sr(i,this,"fat");this.root.add(n.root),this.root.scale.setScalar(1.9);let r=new jt,a=new $(new ge(.06,.55,.32),ue(9080724,.3,1));a.position.set(0,-.32,.1);let o=new $(new ge(.02,.55,.04),ue(5900810,.4,.5));o.position.set(0,-.32,.27);let l=new $(new ie(.035,.035,.22,8),ue(2759178,.7));l.position.y=-.02,r.add(a,o,l),r.position.set(0,-n.B.fa-.06,.02),r.traverse(c=>{c.isMesh&&(c.userData.ent=this,c.userData.part="armR",c.userData.base=c.material,c.layers.enable(1),c.castShadow=!0,n.meshes.push(c))}),n.arms.R.elbow.add(r),this.weakMat=new be({map:pt.flesh(),color:16751200,emissive:16726538,emissiveIntensity:1.5,roughness:.3}),this.tumor=new jt,this.tumor.position.set(-.12,n.B.tH*.62,n.B.chestD*1.15+.03);for(let[c,h,u,f]of[[0,0,0,.13],[.09,.07,.02,.08],[-.07,-.08,.03,.07],[.05,-.1,0,.06]]){let d=nu(new $(new ve(f,14,10),this.weakMat),this);d.position.set(c,h,u),this.tumor.add(d)}n.torso.add(this.tumor),this.root.position.set(e.x+7,0,e.z),this.root.rotation.y=-Math.PI/2,this.phase=0,this.enraged=!1,this.summoned=!1,this.throws=0,this.acc=0,this.kb=new E}mult(t){return t==="weak"?this.state==="stagger"?1.5:1:t==="head"?.35:.12}onDamage(t,e){this.acc+=e,(this.state==="windup"&&this.acc>=3||this.state==="charge"&&this.acc>=4.5)&&(this.setState("stagger"),this.game.audio.play("roar",{pitch:1.2,vol:.8}),this.game.message("STAGGERED!","#ffd060",.9),this.kb.copy(this.root.position).sub(this.game.playerPos).setY(0).normalize().multiplyScalar(4)),!this.summoned&&this.hp<this.maxHp*.5&&(this.summoned=!0,this.enraged=!0,this.setState("summon"))}aimPoint(){return this.tumor.getWorldPosition(new E)}update(t){let e=this.game;this.t+=t,this.stateT+=t;let i=this.rig,n=this.root.position,r=e.playerPos,a=this.playerDist(),o=this.enraged?1.9:1.35,l=null,c=0,h=10;this.warn=0,this.kb.lengthSq()>.001&&(n.addScaledVector(this.kb,t),this.kb.multiplyScalar(Math.exp(-4*t))),this.weakMat.emissiveIntensity=1.2+Math.sin(this.t*6)*.6;let u=1+Math.sin(this.t*6)*.06;switch(this.tumor.scale.set(u,u,u),this.state){case"intro":this.stateT<.1&&e.audio.play("door"),this.stateT>.5&&!this.roared&&(this.roared=!0,e.audio.play("roar"),e.shake(.4)),n.x=Gt(n.x,this.at.x,1.2,t),c=1,this.stateT>3.2&&this.setState("approach");break;case"approach":{let f=this.faceYaw(),d=Math.sin(this.t*1.3)*.8,m=Math.sin(f),x=Math.cos(f);n.x+=(m*o+-x*d)*t,n.z+=(x*o+m*d)*t,c=o,a<3&&(this.setState("windup"),this.acc=0,e.audio.play("roar",{pitch:1.1,vol:.6}));break}case"windup":{let f=this.enraged?.95:1.15;this.warn=this.stateT/f;let d=Ut(this.stateT/f,0,1);l={shX:[-.6,se(-.5,-3,d)],elX:[-.4,-.6],torsoX:se(.2,-.3,d),neckX:-.3,jaw:.6,hipX:[-.3,.3],knX:[.3,.2]},this.stateT>=f&&(e.audio.play("swipe"),a<4.2&&e.hurtPlayer(this),this.setState("recover"));break}case"recover":l={shX:[-.6,-.6],elX:[-.3,-.2],torsoX:.8,neckX:.3,jaw:.4,hipX:[-.4,.4],knX:[.4,.2]},h=this.stateT<.2?30:8,this.stateT>.8&&this.setState("retreat");break;case"stagger":l={shX:[-.3,-.5],shZ:[-.8,.8],torsoX:-.3,neckX:-.6,jaw:.9,hipX:[-1,-1],knX:[1.6,1.6],hipsY:i.B.hipY-.35},this.stateT>2.2&&this.setState("retreat");break;case"retreat":{fe.copy(n).sub(r).setY(0).normalize();let f=r.x+fe.x*9.5,d=r.z+fe.z*9.5,m=f-n.x,x=d-n.z,g=Math.hypot(m,x),p=2.6;g>.3&&(n.x+=m/g*Math.min(g,p*t),n.z+=x/g*Math.min(g,p*t),c=-p),(g<.4||this.stateT>4)&&(this.throws=0,this.setState(Jt(this.enraged?.45:.6)?"throw":"chargeup"));break}case"throw":{let d=Ut(this.stateT/.7,0,1);if(this.warn=d,l={shX:[-.4,d<.85?se(-.4,-3,d/.85):-.5],elX:[-.2,d<.85?-1.3:-.1],torsoY:d<.85?-.5*d:.4,torsoX:.1},h=d<.85?10:30,this.stateT>=.7){i.arms.R.hand.getWorldPosition(fe);let m=e.camera.position.clone();m.y-=.1,m.x+=M(-.25,.25),e.addEntity(new kn(e,{from:fe.clone(),to:m,kind:"cleaver",time:this.enraged?1.25:1.5,points:80})),this.throws++,this.stateT=-.25,this.throws>=(this.enraged?4:3)&&this.setState("approach")}break}case"chargeup":this.warn=this.stateT/.8,l={shX:[-.2,-.2],shZ:[-.6,.6],torsoX:-.2,neckX:-.5,jaw:1,hipX:[-.5,.3],knX:[.6,.2]},this.stateT<t*1.5&&e.audio.play("roar",{pitch:.9}),this.stateT>.8&&(this.setState("charge"),this.acc=0);break;case"charge":{this.warn=1;let f=this.faceYaw(),d=this.enraged?7:6;n.x+=Math.sin(f)*d*t,n.z+=Math.cos(f)*d*t,c=d,this.phase+=d*t*2.5,Math.random()<.3&&e.shake(.1),a<2.8&&(e.audio.play("swipe"),e.hurtPlayer(this),this.setState("recover"));break}case"summon":if(l={shX:[-2.8,-2.8],shZ:[-.5,.5],elX:[-.3,-.3],torsoX:-.4,neckX:-.8,jaw:1.1},this.stateT<t*1.5&&(e.audio.play("roar",{pitch:.8}),e.shake(.5),e.message("IT CALLS FOR HELP!","#ff6a3a",1.5)),this.stateT>.6&&!this.spawnedHelp){this.spawnedHelp=!0;let f=this.at;for(let[d,m]of[[4,-9],[5,9],[9,0]])e.spawn({type:"shambler",at:[f.x+d,f.z+m]},e.director.fight)}this.stateT>1.4&&this.setState("approach");break;case"death":{let f=Ut(this.stateT/2.5,0,1);this.stateT<1?(l={shX:[-.2,-.2],shZ:[-.4,.4],torsoX:.2,neckX:-.6,jaw:1.2,hipX:[-1.4,-1.4],knX:[2.2,2.2],hipsY:i.B.hipY-.5},h=6):(l={shX:[-2.8,-2.8],torsoX:.4,neckX:.2,hipsX:Ho(Ut((this.stateT-1)/.6,0,1))*1.4,hipsY:.3,hipX:[-1.4,-1.4],knX:[1,1]},h=7,!this.thud&&this.stateT>1.6&&(this.thud=!0,e.shake(.7),e.audio.play("block"),e.fx.dust(fe.copy(n).setY(.2),On,20),e.fx.splat(n.x,n.z,3))),Math.random()<.3&&e.fx.blood(this.tumor.getWorldPosition(fe),On,4,3),f>=1&&this.stateT>4&&(this.finished=!0),this.stateT>3&&(n.y-=t*.25);break}}this.state!=="death"&&(this.root.rotation.y=as(this.root.rotation.y,this.faceYaw(),1-Math.exp(-5*t)),n.x=Ut(n.x,this.at.x-13,this.at.x+9),n.z=Ut(n.z,this.at.z-13,this.at.z+13)),l||(c&&(this.phase+=Math.abs(c)*t*3.2*(c<0?-1:1)),l=c?h_(this.phase,this.state==="charge"?.8:.45,this.t):{shX:[-.3,-.4],torsoX:.25,neckX:.1+Math.sin(this.t)*.05,jaw:.3},this.state==="charge"&&(l.torsoX=.6,l.shX=[-1,-1.6]),this.state!=="charge"&&(l.shX[1]=-.6+Math.sin(this.phase)*.2)),Wd(i,l,h,t),this.updateMat(i)}},tu=class extends oa{constructor(t,e){super(t,e),this.title="SPECIMEN 02",this.name="THE WARDEN",this.maxHp=this.hp=50*t.diff.bossHp;let i=Re(pt.cloth("#bdb5a2","shirt",1),.8),n={skin:Re(pt.skin(1),.4),head:Re(pt.zombieHead(1,"#3a3a3a"),.4),shirt:i,pants:i,sleeves:!0,longSleeves:!1,longPants:!1,barefoot:!0,eyes:"#ff2a1a"},r=this.rig=sr(n,this,"thin");this.root.add(r.root),this.root.scale.setScalar(1.45);let a=ue(14208176,.4);for(let l of["L","R"]){r.arms[l].shoulder.scale.set(1,1.55,1);for(let c=-1;c<=1;c++){let h=new $(new Wr(.018,.3,6),a);h.position.set(c*.03,-r.B.fa-.2,.02),h.rotation.x=Math.PI,h.userData.ent=this,h.userData.part="arm"+l,h.userData.base=a,h.layers.enable(1),h.castShadow=!0,r.arms[l].elbow.add(h),r.meshes.push(h)}}let o=ue(3811866,.6);for(let l of[.3,.55]){let c=new $(new So(r.B.chestW*1.02,.015,6,24),o);c.rotation.x=Math.PI/2,c.scale.set(1,r.B.chestD/r.B.chestW*1.25,1),c.position.set(0,r.B.tH*l,.012),r.torso.add(c)}this.weakMat=new be({color:8453984,emissive:4259616,emissiveIntensity:1.6,roughness:.3}),this.growths=new jt,r.headTarget.add(this.growths);for(let[l,c,h,u]of[[.05,.1,-.05,.06],[-.06,.08,-.07,.05],[0,.12,.03,.045],[.08,.02,-.08,.04]]){let f=nu(new $(new ve(u,12,8),this.weakMat),this);f.position.set(l,c,h),this.growths.add(f)}this.perches=[[0,0,0],[-1,0,-6.5],[-1,0,6.5],[5,4.2,-8.8],[5,4.2,8.8],[11,4.2,0],[3,0,0]].map(([l,c,h])=>new E(e.x+l,c,e.z+h)),this.root.position.set(e.x+2,9,e.z),this.vy=0,this.acc=0,this.summoned=!1,this.perchI=0}mult(t){let e=this.state==="down"?1.5:1;return t==="weak"?1.2*e:t==="head"?1*e:.25*e}onDamage(t,e){this.acc+=t+e,this.state==="lunge"&&this.acc>=3&&(this.setState("fall"),this.vy=2,this.game.audio.play("shriek",{pitch:.7}),this.game.message("KNOCKED DOWN!","#ffd060",.9)),!this.summoned&&this.hp<this.maxHp*.5&&(this.summoned=!0,this.pendingSummon=!0)}aimPoint(){return this.growths.getWorldPosition(new E)}hopTo(t){this.perchI=t,this.hopFrom=this.root.position.clone(),this.hopTo_=this.perches[t].clone(),this.setState("hop"),this.game.audio.play("swipe")}update(t){let e=this.game;this.t+=t,this.stateT+=t;let i=this.rig,n=this.root.position,r=e.playerPos,a=null,o=12;this.warn=0,this.weakMat.emissiveIntensity=1.3+Math.sin(this.t*7)*.6;let l={hipX:[-1.1,-1.1],knX:[1.8,1.8],hipsY:i.B.hipY-.45,torsoX:.9,neckX:-.7,shX:[-.6,-.6],shZ:[-.6,.6],elX:[-.4,-.4],jaw:.5};switch(this.state){case"intro":this.vy-=12*t,n.y=Math.max(0,n.y+this.vy*t),a=l,n.y===0&&!this.landed&&(this.landed=!0,e.shake(.5),e.audio.play("block"),e.fx.dust(fe.copy(n).setY(.1),On,16),e.audio.play("shriek")),this.stateT>3&&this.setState("perch");break;case"perch":if(a={...l,neckZ:Math.sin(this.t*3)*.4,jaw:.3+Math.sin(this.t*9)*.2,shX:[-1.2+Math.sin(this.t*4)*.2,-1.2-Math.sin(this.t*4)*.2]},this.pendingSummon){this.pendingSummon=!1,this.setState("summon");break}if(this.stateT>(this.hp<this.maxHp*.5?.9:1.5)){let c=Math.random();if(c<.5)this.setState("crouch"),e.audio.play("shriek",{pitch:1.1});else if(c<.75)this.setState("throw");else{let h;do h=Me(0,this.perches.length-1);while(h===this.perchI);this.hopTo(h)}}break;case"hop":{let h=Ut(this.stateT/.85,0,1);n.lerpVectors(this.hopFrom,this.hopTo_,Ln(h)),n.y+=Math.sin(Math.PI*h)*2.5,a={hipX:[-1.4,-.6],knX:[1.6,.6],torsoX:.6,shX:[-2.6,-2.4],shZ:[-.5,.5],elX:[-.2,-.2],neckX:-.4,jaw:.6},h>=1&&(e.audio.play("block",{pan:e.panFor(n)}),this.setState("perch"));break}case"crouch":{let c=this.hp<this.maxHp*.5?.55:.75;this.warn=this.stateT/c,a=l,this.stateT>c&&(this.setState("lunge"),this.acc=0,this.lFrom=n.clone(),fe.copy(n).sub(r).setY(0).normalize(),this.lTo=new E(r.x+fe.x*1.4,0,r.z+fe.z*1.4));break}case"lunge":{this.warn=1;let c=Ut(this.stateT/.8,0,1);n.lerpVectors(this.lFrom,this.lTo,c),n.y+=Math.sin(Math.PI*c)*1.2+(1-c)*0,a={hipX:[-1,-.4],knX:[1,.3],torsoX:.3,shX:[-2.4,-2.4],shZ:[-.6,.6],elX:[-.3,-.3],neckX:-.5,jaw:1.2},o=20,c>=1&&(e.audio.play("swipe"),e.hurtPlayer(this),this.hopTo(Me(1,this.perches.length-1)));break}case"fall":this.vy-=14*t,n.y=Math.max(0,n.y+this.vy*t),fe.copy(n).sub(r).setY(0).normalize(),n.addScaledVector(fe,3*t),a={hipsX:-1.2,hipsY:.3,shX:[-2.5,-2],shZ:[-1,1],torsoX:0,neckX:-.6,jaw:1},n.y===0&&(e.shake(.4),e.audio.play("block"),this.setState("down"));break;case"down":a={hipsX:-1.45,hipsY:.2,shX:[-2.8+Math.sin(this.t*10)*.3,-2.6],shZ:[-1.1,1.1],torsoX:0,neckX:-.3+Math.sin(this.t*14)*.15,jaw:1,hipX:[.3,-.2],knX:[.6,1]},o=8,this.stateT>2.4&&this.hopTo(Me(3,5));break;case"throw":{let h=Ut(this.stateT/.9,0,1);if(this.warn=h,a={...l,hipsY:i.B.hipY-.2,shX:[-.6,h<.85?se(-1,-3,h/.85):-.3],elX:[-.3,h<.85?-1:0],torsoY:h<.85?-.6*h:.5,torsoX:.4},o=h<.85?10:30,this.stateT>=.9){i.arms.R.hand.getWorldPosition(fe);let u=e.camera.position.clone();u.y-=.2;let f=Jt(.4);if(e.addEntity(new kn(e,{from:fe.clone(),to:u,kind:f?"gurney":"cleaver",time:f?1.7:1.3,arc:f?1.8:1,points:f?150:60})),!f&&Jt(.5)){let d=u.clone();d.x+=M(-.4,.4),e.addEntity(new kn(e,{from:fe.clone().add(new E(0,.2,0)),to:d,kind:"cleaver",time:1.6,arc:1.4,points:60}))}this.setState("perch")}break}case"summon":if(a={...l,torsoX:-.3,neckX:-1,jaw:1.2,shX:[-2.8,-2.8],shZ:[-.8,.8]},this.stateT<t*1.5){e.audio.play("shriek",{pitch:.6}),e.message("THE INMATES ANSWER!","#ff6a3a",1.5);let c=this.at;for(let[h,u,f]of[[6,-7,"leaper"],[6,7,"leaper"],[2,-9,"crawler"],[2,9,"crawler"]])e.spawn({type:f,at:[c.x+h,c.z+u]},e.director.fight)}this.stateT>1.4&&this.setState("perch");break;case"death":this.vy=(this.vy||0)-12*t,n.y=Math.max(0,n.y+this.vy*t),a={hipsX:-1.45,hipsY:.2,shX:[-2.6,-2.8],shZ:[-1.2,1.2],torsoX:0,neckX:-.4,jaw:1.2,hipX:[.2,-.3],knX:[.4,.8]},o=6,Math.random()<.2&&e.fx.blood(this.growths.getWorldPosition(fe),On,6,2.5),this.stateT>4&&(this.finished=!0),this.stateT>3&&(n.y-=t*.3);break}this.state!=="death"&&this.state!=="fall"&&this.state!=="down"&&(this.root.rotation.y=as(this.root.rotation.y,this.faceYaw(),1-Math.exp(-8*t))),Wd(i,a||l,o,t),this.updateMat(i)}},eu=class extends ki{constructor(t,e,i){super(t),this.kind="tentacle",this.boss=e,this.segs=[],this.mat=Re(pt.flesh(),.35),this.tipMat=new be({map:pt.flesh(),emissive:16722442,emissiveIntensity:0,roughness:.3});let n=this.root,r=9;for(let a=0;a<r;a++){let o=se(.28,.07,a/(r-1)),l=new jt;l.position.y=a===0?0:.42;let c=new $(new ve(o,12,8),a===r-1?this.tipMat:this.mat);c.scale.set(1,1.7,1),c.position.y=.2,c.castShadow=!0,c.userData.ent=this,c.userData.part=a>=r-3?"tip":"body",c.layers.enable(1),l.add(c),n.add(l),this.segs.push(l),n=l}this.tip=this.segs[r-1],this.root.position.copy(i),this.root.position.y=-4,this.face=Math.atan2(t.playerPos.x-i.x,t.playerPos.z-i.z),this.root.rotation.y=this.face,this.state="rise",this.t=0,this.acc=0,this.warnT=e.phase2?1:1.3,t.audio.play("break",{pan:t.panFor(i)}),t.fx.dust(i.clone().setY(.1),On,14),t.shake(.25)}onShot(t,e,i){if(this.dead)return!1;let n=this.game,r=0;for(let a of t)r+=a.dmg*(a.part==="tip"?1.5:1),n.fx.blood(a.point,i,6,2.5);return this.acc+=r,this.boss.hp-=r*.35*n.diff.bossDmg,this.boss.flashT=.04,n.audio.play("hit",{pan:n.panFor(this.root.position)}),this.boss.hp<=0&&this.boss.defeat(),this.acc>=3&&(this.state==="rise"||this.state==="rear")&&(this.state="retract",this.t=0,n.addScore(150,t[0].point,"REPELLED"),n.audio.play("roar",{pitch:1.6,vol:.5})),!0}get warn(){return this.state==="rear"?this.t/this.warnT:this.state==="slam"?1:0}update(t){let e=this.game;this.t+=t;let i=this.segs,n=i.length,r=0,a=Math.sin(this.t*3)*.12;this.state==="rise"?(this.root.position.y=se(-4,0,Ln(Ut(this.t/.6,0,1))),this.t>.6&&(this.state="rear",this.t=0)):this.state==="rear"?(r=-.22*Ut(this.t/this.warnT,0,1),this.tipMat.emissiveIntensity=Math.floor(this.t*10)%2?2.5:.4,this.t>=this.warnT&&(this.state="slam",this.t=0,e.audio.play("swipe"))):this.state==="slam"?(r=se(-.22,.2,Ut(this.t/.22,0,1)),this.t>=.22&&!this.hit&&(this.hit=!0,e.hurtPlayer(this),e.shake(.5)),this.t>.5&&(this.state="retract",this.t=0)):this.state==="retract"&&(this.tipMat.emissiveIntensity=0,this.root.position.y-=t*7,r=.1,this.root.position.y<-4.5&&(this.remove=!0,this.dead=!0));for(let o=1;o<n;o++)i[o].rotation.x=r*1+Math.sin(this.t*4+o*.6)*.06,i[o].rotation.z=a*Math.sin(o*.5+this.t*2)*.6}},iu=class extends oa{constructor(t,e){super(t,e),this.title="SPECIMEN 00",this.name="SUBJECT ZERO",this.maxHp=this.hp=80*t.diff.bossHp;let i=Re(pt.flesh(),.32),n=Re(pt.skin(2),.45),r=(p,_="body")=>(p.userData.ent=this,p.userData.part=_,p.userData.base=p.material,p.layers.enable(1),p.castShadow=!0,p.receiveShadow=!0,this.meshes.push(p),p);this.meshes=[];let a=new jt;this.body=a,this.root.add(a);let o=r(new $(new ve(2.2,28,20),i));o.scale.set(1.4,.75,1.2),o.position.y=.3,a.add(o);for(let p=0;p<10;p++){let _=M(0,Math.PI*2),v=r(new $(new ve(M(.4,.8),14,10),p%3?i:n));v.position.set(Math.cos(_)*2.4,M(.3,1.2),Math.sin(_)*2),a.add(v)}let l=new jt;l.position.y=1.5,a.add(l),this.torso=l;let c=r(new $(new ni(1.15,1.3,8,20),n));c.scale.set(1.15,1,.8),c.position.y=1.3,l.add(c),this.heartMat=new be({map:pt.flesh(),color:16744560,emissive:16719888,emissiveIntensity:2,roughness:.25}),this.heart=nu(new $(new ve(.48,20,14),this.heartMat),this),this.heart.position.set(0,1.45,.78),this.meshes.push(this.heart),this.heart.userData.base=this.heartMat,l.add(this.heart);let h=Re(pt.metal(),.4);this.plates=[];for(let p of[-1,1]){let _=new jt;_.position.set(p*.85,1.45,.82);let v=r(new $(new ge(.85,1.4,.16),h),"armor");v.position.x=-p*.42,_.add(v);for(let y of[-.5,0,.5]){let P=r(new $(new ie(.05,.05,.05,8),ue(6974058,.3,1)),"armor");P.rotation.x=Math.PI/2,P.position.set(-p*.72,y,.09),_.add(P)}l.add(_),this.plates.push({hinge:_,s:p,mesh:v})}let u=new jt;u.position.set(0,2.75,.3),l.add(u),this.neck=u;let f=r(new $(new ve(.7,22,16),n),"head");f.scale.set(1,.9,1.05),f.position.y=.55,u.add(f),this.head=f;let d=new Le({color:new bt(16764992).multiplyScalar(3)});for(let p=0;p<9;p++){let _=r(new $(new ve(M(.05,.11),8,6),d),"head"),v=M(-.9,.9),y=M(-.2,.6);_.position.set(Math.sin(v)*.62,y*.6,Math.cos(v)*.62+.05),f.add(_)}let m=new jt;m.position.set(0,-.15,.25),f.add(m),this.jaw=m;let x=r(new $(new ve(.5,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),i),"head");x.scale.set(1.1,.8,1.1),m.add(x);let g=new $(new Xi(.42,16),new Le({color:1703936}));g.rotation.x=-Math.PI/2,g.position.y=-.01,m.add(g),this.arms=[];for(let p of[-1,1]){let _=new jt;_.position.set(p*1.45,2.3,0),l.add(_);let v=r(new $(new ni(.38,1.4,6,14),n),"arm");v.position.y=-.85,_.add(v);let y=new jt;y.position.y=-1.7,_.add(y);let P=r(new $(new ni(.33,1.4,6,14),i),"arm");P.position.y=-.8,y.add(P);for(let A=-1;A<=1;A++){let I=r(new $(new Wr(.08,.6,8),ue(14208176,.4)),"arm");I.position.set(A*.15,-1.8,.1),I.rotation.x=Math.PI,y.add(I)}this.arms.push({sh:_,el:y,s:p})}this.tails=[];for(let p=0;p<5;p++){let _=p/5*Math.PI*2+.3,v=new jt;v.position.set(Math.cos(_)*2.2,.6,Math.sin(_)*1.8-.6),v.rotation.set(Math.sin(_)*.5,0,-Math.cos(_)*.9),a.add(v);let y=[v];for(let P=0;P<7;P++){let A=new jt;A.position.y=P===0?0:.5;let I=r(new $(new ve(se(.3,.08,P/6),10,8),i));I.scale.y=1.6,I.position.y=.25,A.add(I),v.add(A),y.push(A),v=A}this.tails.push(y)}this.root.position.set(e.x,-7,e.z),this.platesOpen=0,this.phase2=!1,this.attackT=2.5,this.openT=0,this.spits=0,this.summons=0}get rigLike(){return{meshes:this.meshes}}mult(t){return t==="weak"?this.platesOpen>.6?1:0:t==="armor"?0:t==="head"?.25:.08}onDamage(){!this.phase2&&this.hp<this.maxHp*.45&&(this.phase2=!0,this.setState("phase2"))}aimPoint(){let t=this.game.entities.find(e=>e.kind==="tentacle"&&!e.dead&&(e.state==="rear"||e.state==="rise"));return t?t.tip.getWorldPosition(new E):this.platesOpen>.6?this.heart.getWorldPosition(new E):this.head.getWorldPosition(new E)}spawnTentacle(){let t=this.game,e=t.playerPos;fe.copy(this.root.position).sub(e).setY(0).normalize();let i=new E(-fe.z,0,fe.x),n=e.clone().addScaledVector(fe,M(2.6,3.4)).addScaledVector(i,M(-1.6,1.6));n.y=0,t.addEntity(new eu(t,this,n))}spit(){let t=this.game;this.head.getWorldPosition(fe),fe.y-=.3;let e=t.camera.position.clone();e.x+=M(-.3,.3),e.y-=.15,t.addEntity(new kn(t,{from:fe.clone(),to:e,kind:"acid",time:M(1.2,1.5),arc:1.5,points:60})),t.audio.play("splash",{pan:t.panFor(fe)})}update(t){let e=this.game;this.t+=t,this.stateT+=t;let i=this.root.position;this.warn=0,this.heartMat.emissiveIntensity=1.5+Math.max(0,Math.sin(this.t*7))*2.5;let n=1+Math.max(0,Math.sin(this.t*7))*.12;this.heart.scale.setScalar(n);let r=this.phase2?1:0,a=.1+Math.sin(this.t*2)*.05,o=0;switch(this.state){case"intro":i.y=se(-7,0,Ln(Ut(this.stateT/3,0,1))),Math.random()<.6&&e.fx.dust(fe.set(i.x+M(-3,3),.1,i.z+M(-3,3)),On,2),Math.random()<.2&&e.shake(.15),this.stateT>2.2&&!this.roared&&(this.roared=!0,e.audio.play("roar",{pitch:.6}),e.shake(.8)),a=this.stateT>2.2?.8:.1,o=this.stateT>2.2?1:0,this.stateT>4&&this.setState("idle");break;case"idle":if(this.attackT-=t,this.attackT<=0){let l=Math.random(),c=this.phase2?.65:1;!this.phase2&&l<.38?this.setState("open"):l<.72?(this.spawnTentacle(),this.phase2&&Jt(.45)&&setTimeout(()=>!this.dead&&this.spawnTentacle(),450),this.attackT=M(2.6,3.4)*c):(this.setState("spit"),this.spits=this.phase2?3:2)}break;case"open":r=1,this.stateT<t*1.5&&e.audio.play("door"),this.stateT>1&&!this.openSpawned&&(this.openSpawned=!0,Jt(.5)&&this.spawnTentacle()),this.stateT>4.5&&(this.openSpawned=!1,this.setState("idle"),this.attackT=M(1.2,2));break;case"spit":{a=.9,this.warn=this.stateT%.8/.8,this.stateT>=.8&&(this.spit(),this.spits--,this.stateT=0,this.spits<=0&&(this.setState("idle"),this.attackT=M(1.8,2.6)*(this.phase2?.7:1)));break}case"phase2":if(a=1,o=1,r=1,this.stateT<t*1.5){e.audio.play("roar",{pitch:.5}),e.audio.play("explode"),e.shake(1),e.message("ITS HEART IS EXPOSED!","#ff6a3a",2);for(let c of this.plates){let h=new $(c.mesh.geometry,c.mesh.userData.base);c.hinge.updateWorldMatrix(!0,!0),c.mesh.matrixWorld.decompose(h.position,h.quaternion,h.scale),e.fx.addDebris(h,new E(c.s*M(3,5),M(4,6),M(2,4)),new E(M(-6,6),M(-6,6),M(-6,6)),6,!1,.1),c.hinge.visible=!1,rr(c.hinge,!1)}this.heart.getWorldPosition(fe),e.fx.explosion(fe,.6),e.fx.blood(fe,On,40,5);let l=this.at;for(let[c,h]of[[-4,-10],[-4,10]])e.spawn({type:"runner",at:[l.x+c,l.z+h]},e.director.fight)}this.stateT>2&&(this.setState("idle"),this.attackT=1);break;case"death":a=1.1,o=Math.sin(this.t*8)*.5+.5,r=1,Math.random()<.5&&e.fx.blood(this.heart.getWorldPosition(fe),c_.set(M(-1,1),1,1),10,5),Math.random()<.1&&e.fx.explosion(fe.copy(i).add(new E(M(-2,2),M(1,4),M(-1,2))),.5),this.stateT>2.5&&(i.y-=t*2.2),this.body.rotation.z=Math.sin(this.t*20)*.05,this.stateT>6&&(this.finished=!0);break}this.platesOpen=Gt(this.platesOpen,r,4,t);for(let l of this.plates)l.hinge.rotation.y=l.s*this.platesOpen*1.6;this.torso.rotation.x=.1+Math.sin(this.t*.9)*.06,this.torso.rotation.z=Math.sin(this.t*.7)*.05,this.neck.rotation.x=.15+Math.sin(this.t*1.3)*.08,this.neck.rotation.y=Math.sin(this.t*.5)*.25,this.jaw.rotation.x=Gt(this.jaw.rotation.x,a,8,t);for(let l of this.arms){let c=se(-.4+Math.sin(this.t*1.1+l.s)*.15,-2.6,o);l.sh.rotation.x=Gt(l.sh.rotation.x,c,4,t),l.sh.rotation.z=Gt(l.sh.rotation.z,l.s*se(.35,.8,o),4,t),l.el.rotation.x=Gt(l.el.rotation.x,se(-.9,-.4,o),4,t)}this.tails.forEach((l,c)=>{for(let h=1;h<l.length;h++)l[h].rotation.x=Math.sin(this.t*2+c+h*.7)*.25,l[h].rotation.z=Math.cos(this.t*1.6+c*2+h*.5)*.25}),this.updateMat(this.rigLike)}},Xd={butcher:jh,warden:tu,zero:iu};var jo={pistol:{id:"pistol",name:"PISTOL",dmg:1,mag:6,rate:.12,reload:.5,pellets:1,spread:0,sound:"pistol",kick:.1,infinite:!0},shotgun:{id:"shotgun",name:"SHOTGUN",dmg:.75,mag:6,rate:.6,reload:.95,pellets:8,spread:.045,sound:"shotgun",kick:.45,gib:!0,pickup:18,falloff:!0},smg:{id:"smg",name:"SMG",dmg:.6,mag:30,rate:.075,reload:.9,pellets:1,spread:.012,auto:!0,sound:"smg",kick:.06,pickup:90},magnum:{id:"magnum",name:"MAGNUM",dmg:5,mag:6,rate:.45,reload:1,pellets:1,spread:0,sound:"magnum",kick:.6,gib:!0,pierce:!0,pickup:12}},cr=["pistol","shotgun","smg","magnum"],gn=new Po;gn.layers.set(1);gn.far=120;var lr=new E,qd=new E,tl=new et,el=class{constructor(t){this.game=t,this.reset()}reset(){this.slots={pistol:{def:jo.pistol,ammo:6,reserve:1/0}},this.cur="pistol",this.cool=0,this.reloadT=0,this.trigger=!1}get slot(){return this.slots[this.cur]}get def(){return this.slot.def}get reloading(){return this.reloadT>0}get empty(){return this.slot.ammo<=0}give(t){let e=jo[t],i=this.slots[t];i?i.reserve+=e.pickup:this.slots[t]={def:e,ammo:e.mag,reserve:e.pickup-e.mag},this.select(t)}select(t){!this.slots[t]||t===this.cur||(this.cur=t,this.reloadT=0,this.cool=.15,this.game.audio.play("reload"))}cycle(t){let e=cr.filter(n=>this.slots[n]),i=e.indexOf(this.cur);this.select(e[(i+t+e.length)%e.length])}reload(){let t=this.slot;this.reloadT>0||t.ammo>=t.def.mag||t.reserve<=0||(this.reloadT=t.def.reload,this.game.audio.play("reload"))}finishReload(t=this.slot){let e=t.def.mag-t.ammo,i=Math.min(e,t.reserve);t.ammo+=i,t.reserve!==1/0&&(t.reserve-=i)}coverReload(){let t=!1;for(let e in this.slots){let i=this.slots[e];i.ammo<i.def.mag&&i.reserve>0&&(this.finishReload(i),t=!0)}t&&this.game.audio.play("reload"),this.reloadT=0}pull(){this.trigger=!0,this.fire()}release(){this.trigger=!1}update(t){this.cool-=t,this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0&&this.finishReload()),this.trigger&&this.def.auto&&this.fire();let e=this.slot;e.ammo<=0&&e.reserve<=0&&this.cur!=="pistol"&&this.cool<=0&&(delete this.slots[this.cur],this.cur="pistol")}fire(){let t=this.game;if(!t.canShoot()||this.cool>0||this.reloadT>0)return;let e=this.slot;if(e.ammo<=0){t.audio.play("empty"),t.hud.flashReload(),this.cool=.2;return}e.ammo--,this.cool=e.def.rate,t.audio.play(e.def.sound),t.onFire(e.def);let i=this.shoot(e.def,t.input.aim);t.stats.shots++,i?(t.stats.hits++,t.combo++,t.hud.hitMarker()):t.combo=0,e.ammo===0&&t.autoReload&&this.reload()}shoot(t,e){let i=this.game,n=i.camera,r=new Map,a=null;for(let l=0;l<t.pellets;l++){if(tl.set(e.x,e.y),gn.setFromCamera(tl,n),t.spread){let h=M(0,Math.PI*2),u=Math.sqrt(Math.random())*t.spread;qd.set(Math.cos(h)*u,Math.sin(h)*u,0).applyQuaternion(n.quaternion),gn.ray.direction.add(qd).normalize()}a||(a=gn.ray.direction.clone());let c=gn.intersectObjects(i.hitRoots,!0);if(l<4){let h=c.find(u=>!(u.object.userData.ent&&u.object.userData.ent.dead));i.view.tracer(h?h.point:gn.ray.at(60,lr))}for(let h of c){let u=h.object.userData.ent;if(u){if(u.dead)continue;let d=t.dmg;if(t.falloff&&(d*=Ut(1.5-h.distance/9,.3,1.5)),r.has(u)||r.set(u,[]),r.get(u).push({part:h.object.userData.part,point:h.point.clone(),dmg:d,object:h.object,distance:h.distance}),t.pierce&&u.kind==="zombie")continue;break}lr.copy(h.face.normal).transformDirection(h.object.matrixWorld);let f=h.object.material&&h.object.material.metalness>.3;i.fx.bulletHole(h.point,lr),f?(i.fx.sparks(h.point,lr,6),Math.random()<.3&&i.audio.play("ricochet",{pan:i.panFor(h.point)})):(i.fx.dust(h.point,lr,3),i.fx.sparks(h.point,lr,2)),l===0&&i.audio.play("impact",{pan:i.panFor(h.point),vol:.6});break}}let o=!1;for(let[l,c]of r)l.onShot(c,t,a)&&(o=!0);return o}};function Yd(s,t){tl.set(t.x,t.y),gn.setFromCamera(tl,s.camera);let e=gn.intersectObjects(s.hitRoots,!0);for(let i of e){let n=i.object.userData.ent;if(!(n&&n.dead))return n||null}return null}var Bn=s=>new E(s[0],s[1],s[2]),il=class{constructor(t){this.game=t,this.pos=new E,this.look=new E,this.lookTarget=new E,this.moving=0,this.beat=null,this.fight=null}load(t,e=0){this.stage=t,this.beats=t.beats,this.pos.copy(Bn(t.start)),this.look.copy(Bn(t.lookStart)),this.lookTarget.copy(this.look),this.i=e-1,this.fight=null,this.beat=null,this.done=!1,this.skippedSpawns=[];for(let i=0;i<e;i++){let n=this.beats[i];n.move&&this.pos.copy(Bn(n.move[n.move.length-1])),n.look&&this.look.copy(Bn(n.look)),n.spawn&&this.skippedSpawns.push(...n.spawn.filter(r=>!r.type||!["shambler","runner","brute","thrower","crawler","leaper"].includes(r.type)))}this.lookTarget.copy(this.look)}next(){this.i++;let t=this.beats[this.i];if(this.beat=t,this.bt=0,this.fight=null,!t){this.done=!0,this.game.stageClear();return}let e=this.game;if(this.skippedSpawns&&this.skippedSpawns.length&&(this.skippedSpawns.forEach(i=>e.spawn(i,null)),this.skippedSpawns=null),t.move){let i=[this.pos.clone(),...t.move.map(Bn)];this.curve=new Vr(i,!1,"centripetal",.5),this.len=this.curve.getLength(),this.u=0,this.events=(t.events||[]).map(n=>({...n,fired:!1}))}if(t.look&&this.lookTarget.copy(Bn(t.look)),t.fight){let i=t.fight;this.fight={waves:i.waves,wi:-1,queue:[],members:[],clearT:-1,def:i},e.fightTimer=(i.time||30)*e.diff.timeMul,e.fightTimerMax=e.fightTimer,i.music&&e.audio.music(i.music),this.nextWave(),i.msg&&e.message(i.msg,"#ffd060",1.6)}t.boss&&e.startBoss(t.boss,Bn(t.at)),t.call&&t.call(e),t.msg&&e.message(t.msg,t.color||"#ffd060",t.dur||2),t.spawn&&t.spawn.forEach(i=>e.spawn(i,null))}nextWave(){let t=this.fight;t.wi++;let e=t.waves[t.wi];if(!e)return!1;let i=Array.isArray(e)?e:e.spawns;t.wave=Array.isArray(e)?{spawns:e}:e,t.waveMembers=[];for(let n of i)t.queue.push({spec:n,t:n.delay||0});return!0}update(t){let e=this.game,i=this.beat;if(this.moving=Gt(this.moving,0,6,t),!!i){if(this.bt+=t,i.move){let n=i.speed||3,r=Ut(.35+this.u*this.len/1.5,0,1)*Ut(.35+(1-this.u)*this.len/1.2,0,1);if(this.u=Math.min(1,this.u+n*r*t/this.len),this.curve.getPointAt(this.u,this.pos),this.moving=n*r,!i.look){let a=Math.min(1,this.u+4/this.len);if(this.curve.getPointAt(a,this.lookTarget),this.u>.97){let o=this.curve.getTangentAt(1);this.lookTarget.copy(this.pos).addScaledVector(o,6)}this.lookTarget.y=this.pos.y-.15}for(let a of this.events)!a.fired&&this.u>=a.at&&(a.fired=!0,a.spawn&&a.spawn.forEach(o=>e.spawn(o,null)),a.call&&a.call(e),a.msg&&e.message(a.msg,a.color||"#ffd060",a.dur||2),a.look&&this.lookTarget.copy(Bn(a.look)));this.u>=1&&this.next()}else if(i.fight)this.updateFight(t);else if(i.boss){if(e.boss&&!e.boss.dead){let n=e.boss.aimPoint();this.lookTarget.set(i.look[0],i.look[1],i.look[2]).lerp(n,.35)}e.boss&&e.boss.finished&&(e.boss=null,this.next())}else this.bt>=(i.wait??.01)&&this.next();this.look.x=Gt(this.look.x,this.lookTarget.x,i.lookSpeed||3.2,t),this.look.y=Gt(this.look.y,this.lookTarget.y,i.lookSpeed||3.2,t),this.look.z=Gt(this.look.z,this.lookTarget.z,i.lookSpeed||3.2,t)}}updateFight(t){let e=this.game,i=this.fight;for(let o=i.queue.length-1;o>=0;o--){let l=i.queue[o];if(l.t-=t,l.t<=0){i.queue.splice(o,1);let c=e.spawn(l.spec,i);for(let h of c)h.kind==="zombie"&&(i.members.push(h),i.waveMembers.push(h))}}let n=i.members.filter(o=>!o.dead).length,r=i.waveMembers.filter(o=>!o.dead).length,a=i.wave.left??1;if(i.queue.length===0&&r<=a&&i.wi<i.waves.length-1){this.nextWave();return}if(i.queue.length===0&&n===0&&i.wi>=i.waves.length-1){i.clearT<0&&(i.clearT=.9,e.areaClear()),i.clearT-=t,i.clearT<=0&&this.next();return}e.fightTimer-=t,e.fightTimer<=0&&(e.timeUp(),e.fightTimer=12)}};var ke='"Oswald", "Arial Narrow", Impact, sans-serif',zn=new E,nl=class{constructor(t,e){this.g=t,this.c=e,this.ctx=e.getContext("2d"),this.splats=[],this.popups=[],this.msgs=[],this.reloadFlash=0,this.hitT=0,this.killT=0,this.ecg=new Array(120).fill(0),this.ecgT=0,this.ecgPhase=0,this.card=null,this.coverFlash=0,this.lastCover=!1,this.time=0,this.dmgFlash=0,this.healFlash=0,this.resize()}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.w=window.innerWidth,this.h=window.innerHeight,this.c.width=Math.floor(this.w*t),this.c.height=Math.floor(this.h*t),this.ctx.setTransform(t,0,0,t,0,0),this.ui=Ut(Math.min(this.w/1280,this.h/720),.6,1.5)}clear(){this.splats.length=0,this.popups.length=0,this.msgs.length=0,this.card=null}toScreen(t){return zn.copy(t).project(this.g.camera),{x:(zn.x*.5+.5)*this.w,y:(-zn.y*.5+.5)*this.h,behind:zn.z>1}}popup(t,e,i="#fff",n=1){let r=this.toScreen(e);r.behind||this.popups.push({text:t,x:r.x+M(-10,10),y:r.y,t:0,color:i,size:n})}message(t,e="#ffd060",i=2){this.msgs=this.msgs.filter(n=>n.text!==t),this.msgs.push({text:t,color:e,t:0,dur:i}),this.msgs.length>3&&this.msgs.shift()}flashReload(){this.reloadFlash=1.2}hitMarker(t=!1){this.hitT=.15,t&&(this.killT=.25)}damage(){this.dmgFlash=1}heal(){this.healFlash=1}bossIntro(t,e){this.card={title:t,name:e,t:0,dur:3.2}}splat(t="blood"){let e=M(160,300)*this.ui,i=document.createElement("canvas");i.width=i.height=Math.ceil(e*1.4);let n=i.getContext("2d"),r=i.width/2,a=t==="acid"?[80,220,40]:[110,0,0],o=18;for(let c=0;c<o;c++){let h=M(0,Math.PI*2),u=M(0,e*.28),f=M(e*.05,e*.2),d=r+Math.cos(h)*u,m=r+Math.sin(h)*u,x=n.createRadialGradient(d,m,0,d,m,f);x.addColorStop(0,`rgba(${a[0]},${a[1]},${a[2]},0.95)`),x.addColorStop(.7,`rgba(${a[0]*.7},${a[1]*.7},${a[2]*.7},0.85)`),x.addColorStop(1,`rgba(${a[0]*.5},0,0,0)`),n.fillStyle=x,n.beginPath(),n.arc(d,m,f,0,Math.PI*2),n.fill()}for(let c=0;c<30;c++){let h=M(0,Math.PI*2),u=M(e*.3,e*.6);n.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},0.9)`,n.beginPath(),n.arc(r+Math.cos(h)*u,r+Math.sin(h)*u,M(2,7),0,Math.PI*2),n.fill()}n.fillStyle="rgba(255,255,255,0.12)",n.beginPath(),n.ellipse(r-e*.08,r-e*.1,e*.1,e*.04,-.5,0,Math.PI*2),n.fill();let l=[];for(let c=0;c<4;c++)l.push({x:M(-e*.25,e*.25),w:M(4,9),len:0,speed:M(20,60)});this.splats.push({cv:i,x:M(.15,.85)*this.w,y:M(.15,.7)*this.h,t:0,life:3.2,size:e,drips:l,col:a}),this.splats.length>6&&this.splats.shift()}draw(t){let e=this.g,i=this.ctx;if(this.time+=t,i.clearRect(0,0,this.w,this.h),!(e.state==="play"||e.state==="continue")){e.state==="intro"&&this.drawMsgs(t);return}this.drawSplats(t),this.drawVignettes(t),this.drawThreats(),this.drawOffscreen(),this.drawPopups(t),this.drawCondition(t),this.drawScore(),this.drawTimerOrBoss(),this.drawAmmo(t),this.drawCover(t),this.drawMsgs(t),this.drawCard(t),e.state==="play"&&!e.paused&&this.drawCrosshair(t)}drawSplats(t){let e=this.ctx;for(let i=this.splats.length-1;i>=0;i--){let n=this.splats[i];if(n.t+=t,n.t>n.life){this.splats.splice(i,1);continue}let r=Ut(1-(n.t-n.life*.55)/(n.life*.45),0,1);e.globalAlpha=r;let a=n.t*12;e.drawImage(n.cv,n.x-n.cv.width/2,n.y-n.cv.height/2+a),e.fillStyle=`rgba(${n.col[0]},${n.col[1]},${n.col[2]},0.85)`;for(let o of n.drips)o.len+=o.speed*t,o.speed*=.995,e.fillRect(n.x+o.x-o.w/2,n.y+a,o.w,n.size*.2+o.len),e.beginPath(),e.arc(n.x+o.x,n.y+a+n.size*.2+o.len,o.w*.7,0,Math.PI*2),e.fill()}e.globalAlpha=1}drawVignettes(t){let e=this.g,i=this.ctx,n=this.w,r=this.h;this.dmgFlash=Math.max(0,this.dmgFlash-t*2.2),this.healFlash=Math.max(0,this.healFlash-t*1.5);let a=this.dmgFlash*.55;if(e.lives===1&&(a=Math.max(a,.18+.14*Math.max(0,Math.sin(this.time*6)))),a>.01){let o=i.createRadialGradient(n/2,r/2,r*.25,n/2,r/2,Math.max(n,r)*.75);o.addColorStop(0,"rgba(160,0,0,0)"),o.addColorStop(1,`rgba(160,0,0,${a})`),i.fillStyle=o,i.fillRect(0,0,n,r)}if(this.healFlash>.01){let o=i.createRadialGradient(n/2,r/2,r*.25,n/2,r/2,Math.max(n,r)*.75);o.addColorStop(0,"rgba(40,255,90,0)"),o.addColorStop(1,`rgba(40,255,90,${this.healFlash*.35})`),i.fillStyle=o,i.fillRect(0,0,n,r)}}drawThreats(){let t=this.g,e=this.ctx,i=.5+.5*Math.sin(this.time*18);for(let n of t.entities){if(n.dead)continue;let r=null,a=n.warn||0;if(n.kind==="zombie"&&a>.35&&!n.chase)n.rig.headTarget.getWorldPosition(zn),r=zn,r.y+=.35*n.scale;else if(n.kind==="boss"&&a>.35)r=n.aimPoint(),r.y+=.6;else if(n.kind==="tentacle"&&a>0)r=n.tip.getWorldPosition(zn);else if(n.kind==="projectile"){let c=this.toScreen(n.root.position);if(c.behind)continue;let h=(36-n.t*22)*this.ui;e.strokeStyle=`rgba(255,40,20,${.5+i*.5})`,e.lineWidth=2.5,e.beginPath(),e.arc(c.x,c.y,Math.max(10,h),0,Math.PI*2),e.stroke();for(let u=0;u<4;u++){let f=u*Math.PI/2+this.time*3;e.beginPath(),e.moveTo(c.x+Math.cos(f)*(h+4),c.y+Math.sin(f)*(h+4)),e.lineTo(c.x+Math.cos(f)*(h+12),c.y+Math.sin(f)*(h+12)),e.stroke()}continue}if(!r)continue;let o=this.toScreen(r);if(o.behind)continue;let l=16*this.ui*(1+a*.4);e.save(),e.translate(o.x,o.y),e.fillStyle=`rgba(255,${Math.floor(40+i*60)},20,${.65+i*.35})`,e.beginPath(),e.moveTo(0,-l),e.lineTo(l*.9,l*.6),e.lineTo(-l*.9,l*.6),e.closePath(),e.fill(),e.fillStyle="#100",e.font=`bold ${l}px ${ke}`,e.textAlign="center",e.textBaseline="middle",e.fillText("!",0,l*.12),e.restore()}}drawOffscreen(){let t=this.g,e=this.ctx,i=this.ui,n=t.playerPos,r=t.camFwd,a=0,o=0;for(let h of t.entities){if(h.kind!=="zombie"||h.dead||h.chase)continue;let u=h.root.position,f=u.x-n.x,d=u.z-n.z;if(Math.hypot(f,d)>9)continue;let m=this.toScreen(zn.copy(u).setY(u.y+1.2*h.scale));!m.behind&&m.x>0&&m.x<this.w||(f*-r.z+d*r.x>=0?o++:a++)}let l=.55+.45*Math.sin(this.time*10),c=(h,u,f)=>{let d=this.h*.5,m=26*i;e.save(),e.translate(h,d),e.scale(u,1),e.globalAlpha=l,e.fillStyle="#ff2a1a",e.shadowColor="#ff2a1a",e.shadowBlur=14;for(let x=0;x<2;x++)e.beginPath(),e.moveTo(m*(.2+x*.6),-m),e.lineTo(m*(.9+x*.6),0),e.lineTo(m*(.2+x*.6),m),e.lineTo(m*(.45+x*.6),0),e.closePath(),e.fill();e.restore(),f>1&&(e.globalAlpha=1,e.font=`bold ${Math.round(14*i)}px ${ke}`,e.textAlign="center",e.fillStyle="#ffd0c0",e.fillText(`\xD7${f}`,h-u*4*i,d+m+16*i)),e.globalAlpha=1};a&&c(48*i,-1,a),o&&c(this.w-48*i,1,o)}drawPopups(t){let e=this.ctx;e.textAlign="center",e.textBaseline="middle";for(let i=this.popups.length-1;i>=0;i--){let n=this.popups[i];if(n.t+=t,n.t>1.1){this.popups.splice(i,1);continue}let r=Ut(1.4-n.t*1.3,0,1),a=(n.t<.1?.6+n.t*4:1)*n.size*this.ui;e.globalAlpha=r,e.font=`bold ${Math.round(22*a)}px ${ke}`,e.lineWidth=4,e.strokeStyle="rgba(0,0,0,0.8)";let o=n.y-n.t*50;e.strokeText(n.text,n.x,o),e.fillStyle=n.color,e.fillText(n.text,n.x,o)}e.globalAlpha=1}panel(t,e,i,n){let r=this.ctx;r.fillStyle="rgba(5,8,10,0.55)",r.fillRect(t,e,i,n),r.strokeStyle="rgba(200,210,200,0.25)",r.lineWidth=1,r.strokeRect(t+.5,e+.5,i-1,n-1)}drawCondition(t){let e=this.g,i=this.ctx,n=this.ui,r=18*n,a=18*n,o=250*n,l=92*n;this.panel(r,a,o,l);let c=e.lives/e.maxLives,h="#3aff6a",u="FINE";c<.35||e.lives<=1?(h="#ff3a2a",u="DANGER"):c<.65&&(h="#ffc23a",u="CAUTION");let f=u==="FINE"?70:u==="CAUTION"?105:150;this.ecgT+=t;let d=1/60;for(;this.ecgT>d;){this.ecgT-=d,this.ecgPhase+=d*f/60;let _=this.ecgPhase%1,v=0;_<.04?v=_/.04*.15:_<.08?v=.15-(_-.04)/.04*.35:_<.11?v=-.2+(_-.08)/.03*1.2:_<.15?v=1-(_-.11)/.04*1.4:_<.18?v=-.4+(_-.15)/.03*.4:_>.3&&_<.42&&(v=Math.sin((_-.3)/.12*Math.PI)*.22),this.ecg.push(v+M(-.02,.02)),this.ecg.shift()}i.font=`${Math.round(11*n)}px ${ke}`,i.fillStyle="rgba(220,230,220,0.6)",i.textAlign="left",i.textBaseline="top",i.fillText("CONDITION",r+10*n,a+7*n),i.font=`bold ${Math.round(20*n)}px ${ke}`,i.fillStyle=h,i.textAlign="right",i.fillText(u,r+o-10*n,a+3*n);let m=r+10*n,x=a+48*n,g=o-20*n;i.strokeStyle="rgba(80,120,90,0.25)",i.lineWidth=1;for(let _=0;_<=10;_++)i.beginPath(),i.moveTo(m+g*_/10,x-16*n),i.lineTo(m+g*_/10,x+12*n),i.stroke();i.strokeStyle=h,i.shadowColor=h,i.shadowBlur=8,i.lineWidth=2*n,i.beginPath();for(let _=0;_<this.ecg.length;_++){let v=m+g*_/(this.ecg.length-1),y=x-this.ecg[_]*18*n;_?i.lineTo(v,y):i.moveTo(v,y)}i.stroke(),i.shadowBlur=0;let p=Math.min(26*n,(g-(e.maxLives-1)*5*n)/e.maxLives);for(let _=0;_<e.maxLives;_++){let v=m+_*(p+5*n),y=a+l-20*n;i.fillStyle=_<e.lives?h:"rgba(255,255,255,0.08)",i.fillRect(v,y,p,10*n)}}drawScore(){let t=this.g,e=this.ctx,i=this.ui,n=230*i,r=this.w-n-18*i,a=18*i;this.panel(r,a,n,62*i),e.textAlign="right",e.textBaseline="top",e.font=`${Math.round(11*i)}px ${ke}`,e.fillStyle="rgba(220,230,220,0.6)",e.fillText(t.credits>0?`SCORE   CREDITS USED ${t.credits}`:"SCORE",r+n-10*i,a+6*i),e.font=`bold ${Math.round(30*i)}px ${ke}`,e.fillStyle="#f0e6c8",e.fillText(Yi(t.scoreShown,8),r+n-10*i,a+20*i);let o=t.comboMult;t.combo>=5&&(e.font=`bold ${Math.round(16*i)}px ${ke}`,e.fillStyle=o>=3?"#ff6a3a":o>=2?"#ffc23a":"#9adfff",e.fillText(`${t.combo} HIT COMBO  x${o.toFixed(1)}`,r+n,a+68*i))}drawTimerOrBoss(){let t=this.g,e=this.ctx,i=this.ui,n=this.w/2;if(t.boss&&!t.boss.finished&&t.boss.state!=="intro"){let u=t.boss,f=Math.min(560*i,this.w*.5),d=n-f/2,m=22*i;e.textAlign="center",e.textBaseline="bottom",e.font=`bold ${Math.round(16*i)}px ${ke}`,e.fillStyle="#ff8a5a",e.fillText(`${u.title}  \xB7  ${u.name}`,n,m+16*i),this.panel(d,m+20*i,f,14*i);let x=Ut(u.hp/u.maxHp,0,1),g=e.createLinearGradient(d,0,d+f,0);g.addColorStop(0,"#7a0a0a"),g.addColorStop(1,"#ff3a1a"),e.fillStyle=g,e.fillRect(d+2,m+22*i,(f-4)*x,10*i);return}let r=t.director.fight;if(!r||r.clearT>=0)return;let a=Math.max(0,t.fightTimer),o=a<5,l=16*i;e.textAlign="center",e.textBaseline="top",e.font=`${Math.round(12*i)}px ${ke}`,e.fillStyle="rgba(220,230,220,0.7)",e.fillText("TIME",n,l);let c=Math.floor(a),h=Math.floor((a-c)*100);e.font=`bold ${Math.round(46*i)}px ${ke}`,e.fillStyle=o?Math.floor(this.time*6)%2?"#ff3a2a":"#ffd0c0":"#ffe08a",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.fillText(`${Yi(c,2)}:${Yi(h,2)}`,n,l+12*i),e.shadowBlur=0}drawAmmo(t){let e=this.g,i=this.ctx,n=this.ui,r=e.arsenal,a=r.slot,o=a.def,l=250*n,c=78*n,h=this.w-l-18*n,u=this.h-c-18*n;this.panel(h,u,l,c),i.textAlign="left",i.textBaseline="top",i.font=`bold ${Math.round(17*n)}px ${ke}`,i.fillStyle="#f0e6c8",i.fillText(o.name,h+10*n,u+6*n),i.textAlign="right",i.font=`${Math.round(14*n)}px ${ke}`,i.fillStyle="rgba(220,230,220,0.7)",i.fillText(a.reserve===1/0?"\u221E":`${a.reserve}`,h+l-10*n,u+8*n);let f=o.mag,d=f<=8,m=d?12*n:(l-20*n)/f,x=d?30*n:22*n;for(let v=0;v<f;v++){let y=h+10*n+v*(d?18*n:m),P=u+c-x-10*n,A=v<a.ammo;d?(i.fillStyle=A?o.id==="shotgun"?"#c8321e":"#d9b44a":"rgba(255,255,255,0.1)",i.fillRect(y,P+6*n,m,x-6*n),i.beginPath(),i.arc(y+m/2,P+6*n,m/2,Math.PI,0),i.fill(),A&&(i.fillStyle="#8a6a20",i.fillRect(y,P+x-6*n,m,6*n))):(i.fillStyle=A?"#d9b44a":"rgba(255,255,255,0.1)",i.fillRect(y,P,Math.max(1,m-2),x))}i.textAlign="left",i.font=`${Math.round(11*n)}px ${ke}`;let g=h;cr.forEach((v,y)=>{if(!r.slots[v])return;let P=`${y+1} ${jo[v].name}`;i.fillStyle=v===r.cur?"#ffe08a":"rgba(220,230,220,0.45)",i.fillText(P,g,u-16*n),g+=i.measureText(P).width+12*n}),this.reloadFlash=Math.max(0,this.reloadFlash-t);let p=this.w/2,_=this.h*.78;if(r.reloading){let v=1-r.reloadT/o.reload;i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(p-80*n,_,160*n,8*n),i.fillStyle="#ffe08a",i.fillRect(p-80*n,_,160*n*v,8*n),i.textAlign="center",i.textBaseline="bottom",i.font=`bold ${Math.round(14*n)}px ${ke}`,i.fillText("RELOADING",p,_-4*n)}else a.ammo===0&&e.state==="play"&&(Math.floor(this.time*5)%2===0||this.reloadFlash>0)&&(i.textAlign="center",i.textBaseline="middle",i.font=`bold ${Math.round(46*n)}px ${ke}`,i.lineWidth=6,i.strokeStyle="rgba(0,0,0,0.85)",i.strokeText("RELOAD!",p,_),i.fillStyle="#ff3a2a",i.fillText("RELOAD!",p,_),i.font=`${Math.round(13*n)}px ${ke}`,i.fillStyle="rgba(255,230,220,0.8)",i.fillText(e.input.touch?"TAP RELOAD OR TAKE COVER":"RIGHT-CLICK / R   \xB7   OR HOLD SPACE FOR COVER",p,_+34*n))}drawCover(t){let e=this.g,i=this.ctx,n=this.ui,r=e.coverAmt;e.cover!==this.lastCover&&(this.lastCover=e.cover,this.coverFlash=.7,this.coverText=e.cover?"WAIT":"ACTION!"),this.coverFlash=Math.max(0,this.coverFlash-t),r>.05&&(i.fillStyle=`rgba(0,0,0,${r*.25})`,i.fillRect(0,0,this.w,this.h)),this.coverFlash>0&&e.director.fight&&(i.textAlign="center",i.textBaseline="middle",i.font=`bold italic ${Math.round(40*n)}px ${ke}`,i.globalAlpha=Math.min(1,this.coverFlash*2),i.lineWidth=6,i.strokeStyle="rgba(0,0,0,0.8)",i.strokeText(this.coverText,this.w/2,this.h*.32),i.fillStyle=this.coverText==="WAIT"?"#7ac8ff":"#ffd23a",i.fillText(this.coverText,this.w/2,this.h*.32),i.globalAlpha=1);let a=18*n,o=this.h-48*n;this.panel(a,o,170*n,30*n),i.textAlign="left",i.textBaseline="middle",i.font=`bold ${Math.round(13*n)}px ${ke}`,i.fillStyle=e.cover?"#7ac8ff":"rgba(220,230,220,0.6)",i.fillText(e.cover?"\u25A0 IN COVER":e.input.touch?"HOLD \u26E8 TO TAKE COVER":"HOLD SPACE: COVER",a+10*n,o+15*n)}drawMsgs(t){let e=this.ctx,i=this.ui;e.textAlign="center",e.textBaseline="middle";let n=this.h*.4;for(let r=this.msgs.length-1;r>=0;r--){let a=this.msgs[r];if(a.t+=t,a.t>a.dur){this.msgs.splice(r,1);continue}}for(let r of this.msgs){let a=Ut(Math.min(r.t*6,(r.dur-r.t)*3),0,1),o=r.t<.12?1.3-r.t*2.5:1;e.globalAlpha=a,e.font=`bold ${Math.round(34*i*o)}px ${ke}`,e.lineWidth=6,e.strokeStyle="rgba(0,0,0,0.85)",e.strokeText(r.text,this.w/2,n),e.fillStyle=r.color,e.fillText(r.text,this.w/2,n),n+=44*i}e.globalAlpha=1}drawCard(t){if(!this.card)return;let e=this.ctx,i=this.card,n=this.ui;if(i.t+=t,i.t>i.dur){this.card=null;return}let r=Ut(Math.min(i.t*4,(i.dur-i.t)*3),0,1),a=150*n,o=this.h*.62-a/2;e.globalAlpha=r;let l=e.createLinearGradient(0,o,0,o+a);l.addColorStop(0,"rgba(60,0,0,0)"),l.addColorStop(.2,"rgba(40,0,0,0.85)"),l.addColorStop(.8,"rgba(40,0,0,0.85)"),l.addColorStop(1,"rgba(60,0,0,0)"),e.fillStyle=l,e.fillRect(0,o,this.w,a);let c=(1-Ut(i.t*3,0,1))*200;e.textAlign="center",e.textBaseline="middle",e.font=`${Math.round(18*n)}px ${ke}`,e.fillStyle="#ff9a7a",e.fillText(i.title,this.w/2-c,o+40*n),e.font=`${Math.round(64*n)}px "Creepster", ${ke}`,e.fillStyle="#f2e6d0",e.shadowColor="#ff2a0a",e.shadowBlur=20,e.fillText(i.name,this.w/2+c,o+92*n),e.shadowBlur=0,e.globalAlpha=1}drawCrosshair(t){let e=this.g,i=this.ctx,n=this.ui,r=e.input.px,a=e.input.py;this.hitT=Math.max(0,this.hitT-t),this.killT=Math.max(0,this.killT-t);let o=e.aimTarget,l=o&&(o.kind==="zombie"||o.kind==="boss"||o.kind==="projectile"||o.kind==="tentacle"),c=o&&o.kind==="survivor",h=o&&(o.kind==="pickup"||o.kind==="barrel"||o.kind==="crate"),u=l?"#ff3a2a":c?"#5aff7a":h?"#ffd23a":"#f2f2e6";e.cover&&(u="rgba(120,180,255,0.6)");let f=(14+e.recoil*30)*n;if(i.strokeStyle="rgba(0,0,0,0.7)",i.lineWidth=4,this.reticle(r,a,f),i.strokeStyle=u,i.lineWidth=2,this.reticle(r,a,f),i.fillStyle=u,i.fillRect(r-1.5,a-1.5,3,3),this.hitT>0){i.strokeStyle=this.killT>0?"#ff3a2a":"#ffffff",i.lineWidth=2.5;let d=8*n,m=5*n;i.beginPath();for(let[x,g]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.moveTo(r+x*m,a+g*m),i.lineTo(r+x*(m+d),a+g*(m+d));i.stroke()}c&&(i.font=`bold ${Math.round(12*n)}px ${ke}`,i.textAlign="center",i.fillStyle="#5aff7a",i.fillText("DON'T SHOOT",r,a+f+16*n))}reticle(t,e,i){let n=this.ctx;n.beginPath(),n.arc(t,e,i,0,Math.PI*2),n.stroke(),n.beginPath();for(let[r,a]of[[1,0],[-1,0],[0,1],[0,-1]])n.moveTo(t+r*(i-5),e+a*(i-5)),n.lineTo(t+r*(i+7),e+a*(i+7));n.stroke()}};var sl=class{constructor(t,e){this.g=t,this.el=e,this.aim={x:0,y:0},this.px=window.innerWidth/2,this.py=window.innerHeight/2,this.coverKeys=new Set,this.coverTouch=!1,this.touch=!1,this.botDriven=!1;let i=(r,a)=>{this.px=r,this.py=a,this.aim.x=r/window.innerWidth*2-1,this.aim.y=-(a/window.innerHeight)*2+1};this.setAim=i,e.addEventListener("pointermove",r=>{this.botDriven||i(r.clientX,r.clientY)}),e.addEventListener("pointerdown",r=>{t.audio.init(),!this.botDriven&&(r.pointerType==="touch"&&(this.touch=!0,document.body.classList.add("touch")),i(r.clientX,r.clientY),r.button===2?t.input_reload():r.button===0&&t.input_fire(!0))}),window.addEventListener("pointerup",r=>{r.button===0&&t.input_fire(!1)}),e.addEventListener("contextmenu",r=>r.preventDefault()),e.addEventListener("wheel",r=>{t.arsenal.cycle(r.deltaY>0?1:-1)},{passive:!0}),window.addEventListener("keydown",r=>{if(r.repeat)return;t.audio.init();let a=r.code;if(a==="Space"||a==="ShiftLeft"||a==="ShiftRight"||a==="KeyC"||a==="ControlLeft")this.coverKeys.add(a),r.preventDefault();else if(a==="KeyR")t.input_reload();else if(a.startsWith("Digit")){let o=parseInt(a.slice(5),10);t.input_weapon(o-1)}else a==="KeyQ"?t.arsenal.cycle(-1):a==="KeyE"?t.arsenal.cycle(1):a==="Escape"||a==="KeyP"?t.togglePause():a==="KeyM"?t.toggleMute():a==="Enter"&&t.input_confirm()}),window.addEventListener("keyup",r=>{this.coverKeys.delete(r.code)}),window.addEventListener("blur",()=>{this.coverKeys.clear(),t.input_fire(!1)});let n=(r,a,o)=>{let l=document.getElementById(r);l&&(l.addEventListener("pointerdown",c=>{c.stopPropagation(),c.preventDefault(),t.audio.init(),a()}),l.addEventListener("pointerup",c=>{c.stopPropagation(),o&&o()}),l.addEventListener("pointerleave",()=>o&&o()))};n("btn-cover",()=>this.coverTouch=!0,()=>this.coverTouch=!1),n("btn-reload",()=>t.input_reload()),n("btn-weapon",()=>t.arsenal.cycle(1)),n("btn-pause",()=>t.togglePause())}get cover(){return this.coverKeys.size>0||this.coverTouch}};var Wt=1.65;function ci(s,t){let[e,i]=t.x,[n,r]=t.z,a=t.h??3.2,o=t.doors||{},l=(f,d)=>(f||[]).map(m=>({at:m.c-d,w:m.w??1.4,h:m.h??2.4}));t.floor&&s.floor(t.floor,e,n,i,r),t.ceil&&s.ceiling(t.ceil,e,n,i,r,a);let c=t.wall;t.skip?.includes("zMin")||s.wall(c,e,n,i,n,a,.25,l(o.zMin,e)),t.skip?.includes("zMax")||s.wall(c,e,r,i,r,a,.25,l(o.zMax,e)),t.skip?.includes("xMin")||s.wall(c,e,n,e,r,a,.25,l(o.xMin,n)),t.skip?.includes("xMax")||s.wall(c,i,n,i,r,a,.25,l(o.xMax,n));let h=s.M,u=[["zMin",e,n,i,n,e],["zMax",e,r,i,r,e],["xMin",e,n,e,r,n],["xMax",i,n,i,r,n]];for(let[f,d,m,x,g,p]of u){if(t.skip?.includes(f))continue;let _=l(o[f],p),v=t.base??h.frame;s.wall(v,d,m,x,g,.13,.33,_),s.wall(t.cove??h.trim,d,m,x,g,.09,.35,[],a-.09),t.rail&&s.wall(h.chrome,d,m,x,g,.05,.39,_,.92),t.band&&s.wall(t.band,d,m,x,g,.22,.29,_,1.15);let y=f[0]==="z";for(let P of o[f]||[]){let A=P.w??1.4,I=P.h??2.4;for(let R of[-1,1]){let w=P.c+R*(A/2+.04);s.box(v,y?.1:.37,I+.1,y?.37:.1,y?w:d,0,y?m:w)}s.box(v,y?A+.18:.37,.1,y?.37:A+.18,y?P.c:d,I,y?m:P.c)}}}var u_={chapter:"CHAPTER 1",title:"NIGHTFALL",subtitle:"Ashgrove, 11:47 PM. The 911 lines went dead an hour ago.",theme:"street",fog:658966,fogDensity:.034,hemi:[5925520,1709070,.42],moon:.85,env:.4,rain:!0,sky:!0,lightning:!0,mist:.055,tint:[1,1,1.04],start:[0,Wt,4],lookStart:[0,1.4,-20],attract:{pos:[1.2,2.4,3],look:[-1,1.7,-30]},build(s){let t=s.M;s.floor(t.asphalt,-5,14,5,-106),s.floor(t.sidewalk,-9,14,-5,-106),s.floor(t.sidewalk,5,14,9,-106);for(let e of[-5.08,5.08])s.box(t.concrete,.16,.13,120,e,0,-46);s.floor(t.asphalt,-42,-46,-9,-54),s.floor(t.asphalt,9,-46,42,-54),s.floor(t.asphalt,9,-86,44,-94),s.floor(t.sidewalk,42,-68,74,-112),s.roadLines(0,12,-104);for(let e of[-44.5,-55.5])for(let i=-4.5;i<5;i+=1.2)s.box(t.lineWhite,.6,.02,.4,i,0,e);s.building(-24,14,-9,-20,14,0),s.building(-24,-24,-9,-46,11,1),s.building(-24,-54,-9,-57,12,2),s.building(-24,-61,-9,-104,15,3),s.building(-44,-32,-24,-46,10,2),s.building(-44,-54,-24,-70,13,0),s.floor(t.asphalt,-24,-20,-9,-24),s.wall(t.brick,-24,-20,-24,-24,8),s.floor(t.asphalt,-24,-57,-9,-61),s.wall(t.brick,-24,-57,-24,-61,8),s.building(9,14,24,-46,12,1),s.building(9,-54,24,-86,14,0),s.building(9,-94,44,-112,13,2),s.building(24,-32,44,-46,10,3),s.building(24,-54,44,-86,11,1),s.building(-24,-106,9,-120,16,1),s.building(44,-56,80,-68,12,3),s.building(74,-68,88,-112,10,0),s.building(44,-112,88,-124,12,2);for(let e of[3.6,7])s.box(t.darkMetal,1.2,.08,4,8.4,e,-27),s.box(t.darkMetal,.05,.9,4,7.82,e,-27);s.box(t.darkMetal,.08,3.4,.08,7.82,.2,-25),s.sign("DINER",-8.68,3.9,-9,Math.PI/2,3.2,.9,"#2a0808","#ff5a4a"),s.sign("PHARMACY",8.68,3.9,-35,-Math.PI/2,4,.9,"#04140a","#5aff8a"),s.sign("ROXY BAR",-8.68,3.9,-66,Math.PI/2,3.6,.9,"#140418","#ff5ad8"),s.sign("HOTEL",8.68,6.9,-70,-Math.PI/2,3,.8,"#101010","#ffd27a"),s.sign("MILLER & SONS  BUTCHER",73.68,4.4,-90,-Math.PI/2,7,1.2,"#1a0606","#ff8a3a"),s.box(t.black,.1,2.8,2.4,73.9,0,-90),s.light(70,2.5,-90,16738858,10,10,{flicker:.4});for(let e of[2,-18,-36,-72,-90])s.lamp(-7.2,e,Math.PI/2,16757594,e===-36?.5:0);for(let e of[-9,-27,-63,-81])s.lamp(7.2,e,-Math.PI/2,16757594,e===-63?.6:0,e!==-81);s.lamp(56,-72,Math.PI,16752704,.3),s.lamp(56,-108,0,16752704),s.lamp(26,-87,Math.PI,16760944,.7),s.policeCar(3.2,6.5,.35),s.car(-3.1,-13,.35,5905950,!0),s.car(3.4,-31,-.15),s.car(-2.9,-41,2.7,3815994,!0),s.game.fx.fire(new E(-2.9,.9,-41),1),s.bus(3.7,-66,.22),s.car(-3.3,-77,-.25,2506796),s.car(-6.5,-50.5,1.57,1978186,!0),s.car(30,-50,1.4,4868650,!0),s.car(62,-76,.9,6974058,!0),s.game.fx.fire(new E(62,.8,-76),.8),s.barricade(-2.2,-84,.2),s.barricade(-6.8,-45.5,0),s.hydrant(6,-16),s.hydrant(-6,-60),s.bench(-7.8,-30,Math.PI/2),s.bench(7.8,-55,-Math.PI/2),s.dumpster(-14,-22.8),s.dumpster(-16,-59.5,.1),s.dumpster(15,-87.2),s.dumpster(33,-92.8),s.trash(-10,-21),s.trash(19,-92.5),s.trash(-7,-86),s.trash(7,-40),s.barrel(-12.5,-61),s.barrel(36.5,-92.9),s.crate(17,-93,.9,.3),s.crate(17.4,-92.6,.6,.8,.9);for(let[e,i]of[[-1.5,-6],[2,-21],[-2,-33],[1,-47],[-1.2,-58],[2.2,-73],[-.5,-92],[20,-90],[50,-96],[58,-84]])s.puddle(e,i);for(let[e,i]of[[-2,-16],[1.5,-38],[3,-52],[-4,-88],[24,-89],[52,-92]])s.bloodPool(e,i,M(1,2));s.deadTree(50,-74),s.deadTree(66,-106),s.deadTree(48,-106),s.bench(52,-70,Math.PI),s.cyl(t.concrete,2.2,2.4,.6,64,.3,-76,20)},beats:[{wait:1,spawn:[{type:"barrel",at:[-3.6,-24]},{type:"barrel",at:[4.3,-51]},{type:"barrel",at:[-3.9,-64]},{type:"barrel",at:[40,-91.8]},{type:"barrel",at:[52,-84]},{type:"crate",at:[-4.6,-19.5],drop:"shells"},{type:"crate",at:[5.6,-38],drop:"herb"},{type:"crate",at:[-5.5,-90],drop:"herb"},{type:"crate",at:[35.5,-87.2],drop:"smg"},{type:"crate",at:[54,-99],drop:"herb"}],msg:"SECURE THE STREET"},{move:[[0,Wt,-2],[.4,Wt,-9]],speed:2.6,events:[{at:.1,spawn:[{type:"shambler",at:[3.5,-17],emerge:"idle",wake:9}]}]},{look:[0,1.3,-24],fight:{time:35,waves:[[{type:"survivor",at:[-11,-21.5],path:[[-6,-21],[-2.4,-17.5]],exit:[[-4,-12],[-6.6,-6],[-6.6,6]],chasers:[{type:"shambler",at:[-13.5,-22.5]},{type:"shambler",at:[-15,-21],speedMul:1.3}]},{type:"shambler",at:[3,-30],delay:1},{type:"shambler",at:[2.2,-20],emerge:"getup",lie:10},{type:"shambler",at:[-2.5,-22],emerge:"getup",lie:13}],{left:1,spawns:[{type:"shambler",at:[-2,-36]},{type:"shambler",at:[1.5,-39],delay:.6},{type:"shambler",at:[4,-34],delay:1.2},{type:"runner",at:[0,-48],delay:2.5}]},[{type:"shambler",at:[3,-40]},{type:"runner",at:[-2,-45],delay:.8},{type:"crawler",at:[-4,-26],delay:1}]]}},{move:[[.6,Wt,-18],[0,Wt,-28]],speed:3,events:[{at:.25,spawn:[{type:"shambler",at:[8.4,-27],y:3.7,emerge:"drop"}]},{at:.5,spawn:[{type:"shambler",at:[-3.5,-38],emerge:"idle",wake:8}]}]},{look:[0,1.3,-48],fight:{time:40,waves:[[{type:"shambler",at:[-16,-49],path:[[-4,-50]]},{type:"shambler",at:[-18,-51],path:[[-3,-51]],delay:.8},{type:"shambler",at:[16,-50],path:[[3,-50]],delay:.4},{type:"thrower",at:[-2,-59],delay:1}],{left:1,spawns:[{type:"runner",at:[-20,-50],path:[[-3,-49]]},{type:"runner",at:[20,-51],path:[[3,-49]],delay:.7},{type:"brute",at:[-1.5,-64],delay:1.5}]},[{type:"shambler",at:[-3,-42]},{type:"shambler",at:[3,-44],delay:.5},{type:"crawler",at:[0,-40],delay:1},{type:"thrower",at:[-3,-58],delay:1.2}]]}},{move:[[0,Wt,-40],[-.5,Wt,-52]],speed:3,events:[{at:.4,spawn:[{type:"crawler",at:[-2.5,-47.5]}]}]},{look:[-12,1.4,-59],lookSpeed:6,fight:{time:22,msg:"AMBUSH!",waves:[[{type:"runner",at:[-13,-58]},{type:"runner",at:[-15,-60],delay:.6},{type:"shambler",at:[-12,-59.5],delay:1.2},{type:"shambler",at:[-17,-58.5],delay:2}]]}},{move:[[0,Wt,-60],[-1,Wt,-71],[0,Wt,-79]],speed:3,events:[{at:.5,spawn:[{type:"shambler",at:[-4,-82],emerge:"idle",wake:7}]}]},{look:[0,1.3,-92],fight:{time:40,waves:[[{type:"survivor",at:[8,-90],speed:3.4,path:[[3,-88],[1.4,-85.5]],exit:[[-3,-84],[-6.6,-80],[-6.6,-66]],chasers:[{type:"runner",at:[13,-90]},{type:"shambler",at:[10.5,-91.5]}]},{type:"shambler",at:[-3,-95],delay:1}],{left:1,spawns:[{type:"thrower",at:[-4,-100]},{type:"shambler",at:[2,-99],delay:.5},{type:"shambler",at:[-1,-101],delay:1},{type:"brute",at:[3,-102],delay:2}]},[{type:"shambler",at:[14,-89],path:[[4,-89]]},{type:"shambler",at:[16,-91],path:[[4,-90]],delay:.6},{type:"runner",at:[21,-90],path:[[4,-90]],delay:1.2},{type:"shambler",at:[12,-92],path:[[4,-91]],delay:1.8}]]}},{move:[[1.5,Wt,-86],[6,Wt,-90],[14,Wt,-90],[24,Wt,-90]],speed:3,events:[{at:.4,spawn:[{type:"shambler",at:[20,-88.2],emerge:"idle",wake:8},{type:"crawler",at:[22,-91.5]}]},{at:.62,spawn:[{type:"shambler",at:[29,-92.6],y:4,emerge:"drop"}]}]},{look:[40,1.3,-90],fight:{time:30,waves:[[{type:"shambler",at:[40,-89]},{type:"shambler",at:[42,-91.5],delay:.6},{type:"runner",at:[46,-90],delay:1.4},{type:"shambler",at:[35,-88.5],emerge:"getup",lie:7},{type:"shambler",at:[38,-92],emerge:"getup",lie:9}],[{type:"runner",at:[44,-88]},{type:"shambler",at:[43,-90.5],delay:.6},{type:"thrower",at:[46,-91],delay:1}]]}},{move:[[34,Wt,-90],[44,Wt,-90]],speed:2.5},{look:[60,1.8,-90],wait:.8},{boss:"butcher",at:[60,0,-90],look:[57,2,-90]},{wait:3,msg:"THE OUTBREAK STARTED AT MERCY GENERAL...",dur:3}]};function f_(s,t,e,i,n=5,r=.3,a=2.98){for(let o=e;o>i;o-=n)s.ceilingLight(t,o,a,Jt(.88),Jt(r)?M(.4,.9):0)}var d_={chapter:"CHAPTER 2",title:"MERCY GENERAL",subtitle:"The first patients were admitted three days ago. None were discharged.",theme:"hospital",fog:725006,fogDensity:.045,mist:.03,mistColor:10137764,hemi:[6978160,1710614,.32],env:.3,tint:[.96,1.04,.98],start:[0,Wt,2],lookStart:[0,1.4,-10],attract:{pos:[0,2.2,2],look:[0,1.6,-20]},build(s,t){let e=s.M;ci(s,{x:[-10,10],z:[-20,5],h:4.5,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,doors:{zMin:[{c:0,w:3.6,h:3}],xMin:[{c:-14,w:1.6}],xMax:[{c:-6,w:1.6}]}});for(let[r,a]of[[-5,-4],[5,-4],[-5,-14],[5,-14],[0,-9]])s.ceilingLight(r,a,4.48,!0,r===5&&a===-14?.8:0);s.desk(-6.5,-10,5,Math.PI/2,1),s.sign("RECEPTION",-9.85,2.6,-10,Math.PI/2,2.4,.5,"#0a1a1a","#9affee",!1),s.sign("MERCY GENERAL HOSPITAL",0,3.7,-19.85,0,6,.7,"#081410","#c8ffe0");for(let r=0;r<3;r++)s.bench(6.5,-9-r*2.2,-Math.PI/2);s.cabinet(9.5,-16,-Math.PI/2),s.wheelchair(3.5,-15,.8),s.gurney(-3,-17,.4),s.trash(7,-1),s.box(e.glass,6,3,.1,0,0,4.8),ci(s,{x:[-15,-10],z:[-17,-11],h:3.2,wall:e.plaster,floor:e.hospFloor,ceil:e.ceiling,skip:["xMax"]}),ci(s,{x:[10,15],z:[-9,-3],h:3.2,wall:e.plaster,floor:e.hospFloor,ceil:e.ceiling,skip:["xMin"]});let i=[-26,-42],n=[-34,-50];ci(s,{x:[-1.8,1.8],z:[-60,-20],h:3,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,rail:!0,skip:["zMin","zMax"],doors:{xMin:i.map(r=>({c:r,w:1.3})),xMax:n.map(r=>({c:r,w:1.3}))}}),f_(s,0,-22,-60,5,.45);for(let r of i)ci(s,{x:[-6,-1.8],z:[r-2.5,r+2.5],h:3,wall:e.plaster,floor:e.hospFloor,ceil:e.ceiling,skip:["xMax"]}),s.bed(-4.5,r+1.2,Math.PI/2),s.door(-1.85,r,Math.PI/2,e.wood,1.2);for(let r of n)ci(s,{x:[1.8,6],z:[r-2.5,r+2.5],h:3,wall:e.plaster,floor:e.hospFloor,ceil:e.ceiling,skip:["xMin"]}),s.bed(4.5,r-1.2,-Math.PI/2),s.door(1.85,r,-Math.PI/2,e.wood,-1.2);s.gurney(-1.3,-31,.05),s.wheelchair(1.3,-45,-.4),s.gurney(1.25,-55,-.08,!1),s.sign("WARD C  \u2192",0,2.55,-59.6,0,1.6,.35,"#0a1a14","#9affc8",!1),ci(s,{x:[-8,8],z:[-82,-60],h:3.4,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,doors:{zMax:[{c:0,w:3.6,h:3}],xMax:[{c:-76,w:4,h:3}]}});for(let r of[-64,-68,-72,-76,-80])s.bed(-6.2,r,Math.PI/2),r>-78&&s.curtain(-6,r-2,3.4,0);for(let r of[-64,-68])s.bed(6.2,r,-Math.PI/2);s.curtain(6,-70,3.4,0);for(let[r,a]of[[-3,-64],[3,-64],[-3,-72],[3,-72],[0,-79]])s.ceilingLight(r,a,3.38,Jt(.85),Jt(.4)?.7:0);s.cabinet(7.5,-80.5,-Math.PI/2);for(let[r,a]of[[-3,-66],[2,-74],[-1,-62]])s.bloodPool(r,a,M(1,1.8));ci(s,{x:[8,30],z:[-78,-74],h:3,rail:!0,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,skip:["xMin","xMax"]});for(let r=11;r<30;r+=5)s.ceilingLight(r,-76,2.98,Jt(.8),Jt(.5)?.8:0,Math.PI/2);s.gurney(22,-74.6,Math.PI/2+.1),ci(s,{x:[30,58],z:[-92,-60],h:10,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,doors:{xMin:[{c:-76,w:4,h:3}]}}),s.box(e.concrete,22,.3,6,47,4,-65),s.box(e.concrete,22,.3,6,47,4,-87),s.box(e.concrete,4,.3,16,56,4,-76);for(let r of[-68,-84])s.box(e.chrome,22,.06,.06,47,5,r);s.box(e.chrome,.06,.06,16,54,5,-76);for(let[r,a]of[[37,-68],[45,-68],[53,-68],[37,-84],[45,-84],[53,-84]])s.cyl(e.white,.3,.3,4,r,2,a,12);s.box(e.lampCold,10,.1,6,44,9.9,-76),s.light(44,8,-76,12572927,70,30),s.light(44,3.5,-70,14215423,14,12,{flicker:.3}),s.cone(44,9.85,-76,6,9.85,10139903,.03),s.ceilingLight(36,-80,3.95,!0,.6),s.ceilingLight(50,-72,3.95,!0),s.light(56,6,-76,16730682,8,10,{pulse:2}),s.sign("ICU",57.85,6.5,-76,-Math.PI/2,1.6,.6,"#1a0606","#ff4a3a",!1),s.gurney(40,-64,.6),s.gurney(50,-88,-.4),s.wheelchair(36,-89,2);for(let[r,a]of[[42,-79],[47,-72],[38,-73]])s.bloodPool(r,a,M(1.5,2.5))},beats:[{wait:1,spawn:[{type:"crate",at:[8,-18],drop:"herb"},{type:"crate",at:[-1.2,-47],drop:"shells",size:.6},{type:"barrel",at:[-7,-79]},{type:"crate",at:[20,-77.2],drop:"smg",size:.7},{type:"barrel",at:[41,-83]},{type:"barrel",at:[41,-69]},{type:"crate",at:[40,-71.5],drop:"herb"}],msg:"FIND THE SOURCE OF THE OUTBREAK"},{move:[[0,Wt,-3]],speed:2},{look:[0,1.2,-14],fight:{time:38,waves:[[{type:"shambler",at:[-3,-12],emerge:"getup"},{type:"shambler",at:[3.5,-14],emerge:"getup"},{type:"shambler",at:[0,-19.5],delay:1}],{left:1,spawns:[{type:"survivor",at:[12,-6],path:[[7,-6.5],[3.5,-8.5]],exit:[[5,-3],[8,2]],chasers:[{type:"shambler",at:[13.5,-5],door:!0},{type:"runner",at:[14,-7.5],delay:1.5,path:[[9,-6]]}]},{type:"shambler",at:[-12.5,-14],path:[[-8,-14]],door:!0,delay:1}]},[{type:"runner",at:[0,-27]},{type:"shambler",at:[-1,-24],delay:.5},{type:"crawler",at:[1,-22],delay:1}]]}},{move:[[0,Wt,-12],[0,Wt,-23]],speed:3,events:[{at:.7,spawn:[{type:"shambler",at:[-3.5,-26],path:[[-.8,-26]],door:!0}]}]},{look:[0,1.3,-45],fight:{time:38,waves:[[{type:"shambler",at:[3.5,-34],path:[[.8,-34]],door:!0},{type:"shambler",at:[0,-48]},{type:"shambler",at:[.6,-53],delay:1}],{left:1,spawns:[{type:"runner",at:[-3.5,-42],path:[[-.8,-42]],door:!0},{type:"runner",at:[0,-58],delay:.8},{type:"leaper",at:[0,-55],delay:1.6}]},[{type:"brute",at:[0,-57]},{type:"shambler",at:[3.5,-50],path:[[.8,-50]],door:!0,delay:.5},{type:"crawler",at:[-.5,-38],emerge:"drop",y:2.8,delay:1.4}]]}},{move:[[0,Wt,-40],[0,Wt,-56]],speed:3,events:[{at:.35,spawn:[{type:"leaper",at:[.3,-50],y:2.8,emerge:"drop"}]}]},{look:[0,1.2,-70],fight:{time:42,waves:[[{type:"shambler",at:[-6,-64],y:.75,emerge:"getup"},{type:"shambler",at:[6,-68],y:.75,emerge:"getup"},{type:"shambler",at:[-6,-72],y:.75,emerge:"getup"},{type:"crawler",at:[2,-66],delay:1}],{left:1,spawns:[{type:"leaper",at:[-3,-78]},{type:"leaper",at:[3,-79],delay:1},{type:"shambler",at:[6,-64],y:.75,emerge:"getup"}]},[{type:"runner",at:[12,-76],path:[[5,-76]]},{type:"shambler",at:[-6,-80],y:.75,emerge:"getup"},{type:"thrower",at:[0,-80]},{type:"shambler",at:[14,-75],path:[[5,-76]],delay:1.5}]]}},{move:[[0,Wt,-66],[2,Wt,-73.5],[8,Wt,-76],[16,Wt,-76]],speed:3},{look:[30,1.3,-76],fight:{time:38,waves:[[{type:"shambler",at:[30,-75]},{type:"shambler",at:[32,-77],delay:.5},{type:"thrower",at:[34,-76],delay:1}],{left:1,spawns:[{type:"brute",at:[36,-76]},{type:"runner",at:[33,-74.6],delay:1},{type:"runner",at:[33,-77.4],delay:1.5}]},[{type:"leaper",at:[28,-76],y:2.8,emerge:"drop"},{type:"shambler",at:[31,-77],delay:.6},{type:"crawler",at:[27,-75],delay:1}]]}},{move:[[24,Wt,-76],[32,Wt,-76]],speed:2.6},{look:[44,2,-76],wait:.6},{boss:"warden",at:[44,0,-76],look:[44,2.4,-76]},{wait:3,msg:"THE TRAIL LEADS UNDERGROUND...",dur:3}]},p_={chapter:"CHAPTER 3",title:"SUBLEVEL 4",subtitle:"Ashgrove Biomedical. Project ZERO. Containment status: FAILED.",theme:"lab",fog:526862,fogDensity:.04,mist:.045,mistColor:9083568,hemi:[5267578,1051660,.3],env:.45,tint:[.98,1,1.06],start:[0,Wt,1],lookStart:[0,1.4,-12],attract:{pos:[0,2,0],look:[0,1.6,-30]},build(s,t){let e=s.M;t.tanks=[],ci(s,{x:[-3,3],z:[-6,4],h:3.5,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,base:e.darkMetal,cove:e.darkMetal,doors:{zMin:[{c:0,w:4.4,h:3.2}]}}),s.box(e.darkMetal,5,3.2,.2,0,0,3.7);for(let n=-2.2;n<=2.2;n+=.4)s.box(e.chrome,.04,3.2,.04,n,0,3.4);ci(s,{x:[-2.2,2.2],z:[-38,-6],h:3.2,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,base:e.darkMetal,cove:e.darkMetal,skip:["zMin","zMax"]}),s.box(e.hazard,.35,.012,32,-1.95,0,-22),s.box(e.hazard,.35,.012,32,1.95,0,-22),s.pipe(-1.6,2.85,-6,-1.6,2.85,-38,.12),s.pipe(-1.2,2.95,-6,-1.2,2.95,-38,.07,e.chrome),s.pipe(1.7,2.75,-6,1.7,2.75,-38,.15);for(let n of[-10,-18,-26,-34])s.alarm(n%16===0?2.05:-2.05,2.6,n);for(let n of[-13,-22,-31])s.ceilingLight(0,n,3.18,Jt(.7),.6,Math.PI/2);s.sign("SUBLEVEL 4  \xB7  BIOHAZARD",0,2.6,-5.85,Math.PI,3.6,.5,"#1a1400","#ffd23a",!1),ci(s,{x:[-11,11],z:[-72,-38],h:6,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,base:e.darkMetal,cove:e.darkMetal,doors:{zMax:[{c:0,w:4.4,h:3.2}],zMin:[{c:0,w:4,h:3.2}]}});let i=[[-6.5,-44],[6.5,-50],[-6.5,-56],[6.5,-62]];for(let n of[-44,-50,-56,-62])for(let r of[-6.5,6.5]){let a=i.some(([l,c])=>l===r&&c===n),o=s.tank(r,n,.75,2.8,!a,!1);a&&t.tanks.push(o)}s.tank(-9.3,-68,.7,2.8,!1,!0),s.tank(9.3,-41,.7,2.8,!1,!0),s.console(-9.5,-48,Math.PI/2),s.console(9.5,-58,-Math.PI/2),s.console(-9.5,-60,Math.PI/2);for(let n of[-42,-54,-66])s.light(0,5.2,n,12572927,14,14,{flicker:n===-54?.5:0}),s.box(e.lampCold,1.6,.06,.4,0,5.94,n),s.cone(0,5.9,n,2.6,5.9,12572927,.03);s.alarm(-10.85,4.5,-55),s.alarm(10.85,4.5,-45),s.pipe(-10.6,5.5,-38,-10.6,5.5,-72,.2),s.pipe(10.6,5.2,-38,10.6,5.2,-72,.2),s.box(e.hazard,4.4,.012,.4,0,0,-38.3),ci(s,{x:[-2,2],z:[-84,-72],h:3.2,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,base:e.darkMetal,cove:e.darkMetal,skip:["zMax"],doors:{xMin:[{c:-82,w:3.6,h:3}]}}),s.alarm(1.85,2.6,-77),s.ceilingLight(0,-78,3.18,!0,.8),ci(s,{x:[-34,-2],z:[-84,-80],h:3.2,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,base:e.darkMetal,cove:e.darkMetal,skip:["xMin","xMax"]});for(let n of[-8,-16,-24])s.alarm(n,2.6,-80.15);for(let n of[-12,-20,-28])s.ceilingLight(n,-82,3.18,Jt(.7),.7,Math.PI/2);s.pipe(-2,2.85,-83.5,-34,2.85,-83.5,.12),ci(s,{x:[-64,-34],z:[-98,-66],h:12,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,base:e.darkMetal,cove:e.darkMetal,doors:{xMax:[{c:-82,w:4,h:3.2}]}}),s.cyl(e.black,5.5,5.5,.05,-48,.01,-82,32),s.cyl(e.hazard,6.2,6.2,.2,-48,-.02,-82,32),s.cyl(e.black,5.5,5.5,.4,-48,.06,-82,32);for(let n=Math.PI/2;n<=Math.PI*1.5+.01;n+=Math.PI/4)s.cyl(e.darkMetal,.25,.3,12,-48+Math.cos(n)*9,6,-82+Math.sin(n)*9,10);s.box(e.glass,.1,2.2,10,-63.8,5,-82),s.light(-60,6,-82,4259712,10,16);for(let[n,r]of[[-40,-68],[-56,-68],[-40,-96],[-56,-96]])s.alarm(n,8,r===-68?-66.2:-97.8);s.light(-48,10,-82,16724e3,30,30,{pulse:1.6}),s.light(-36,3,-82,12572927,10,12),s.cone(-48,11.9,-82,7,11.9,16730666,.025);for(let[n,r]of[[-38,-72],[-38,-92],[-60,-90]])s.console(n,r,n>-50?-Math.PI/2:Math.PI/2);s.sign("CONTAINMENT  \xB7  SUBJECT 00",-48,9,-66.2,Math.PI,6,.8,"#1a0404","#ff4a3a",!1)},beats:[{wait:1.2,spawn:[{type:"crate",at:[1.4,-19],drop:"shells",size:.6},{type:"barrel",at:[-1.5,-30]},{type:"crate",at:[9,-45],drop:"magnum"},{type:"barrel",at:[-8.5,-64]},{type:"crate",at:[1.4,-76],drop:"herb",size:.6},{type:"crate",at:[-28,-80.7],drop:"smg",size:.6},{type:"barrel",at:[-44,-74]},{type:"barrel",at:[-40,-88]},{type:"crate",at:[-42,-78.5],drop:"herb"}],msg:"FIND SUBJECT ZERO"},{move:[[0,Wt,-8]],speed:2.4},{look:[0,1.3,-28],fight:{time:38,waves:[[{type:"shambler",at:[0,-26]},{type:"shambler",at:[1,-30],delay:.7},{type:"runner",at:[-.5,-36],delay:1.5}],{left:1,spawns:[{type:"thrower",at:[0,-32]},{type:"shambler",at:[-1,-24],emerge:"drop",y:2.9},{type:"shambler",at:[1,-20],emerge:"drop",y:2.9,delay:1.2}]},[{type:"runner",at:[0,-36]},{type:"runner",at:[1,-37],delay:.4},{type:"brute",at:[0,-38],delay:1.5}]]}},{move:[[0,Wt,-20],[0,Wt,-34]],speed:3,events:[{at:.5,spawn:[{type:"leaper",at:[.5,-31],y:2.9,emerge:"drop"}]}]},{look:[0,1.5,-55],fight:{time:48,waves:[[{type:"shambler",at:[-3,-50]},{type:"shambler",at:[3,-52],delay:.5},{type:"thrower",at:[0,-66],delay:1}],{left:1,spawns:[{type:"runner",at:[-6.5,-44],burst:!0},{type:"runner",at:[6.5,-50],burst:!0,delay:.8},{type:"leaper",at:[-6.5,-56],burst:!0,delay:1.6}]},{left:1,spawns:[{type:"brute",at:[0,-68]},{type:"shambler",at:[-4,-60],delay:.5},{type:"shambler",at:[4,-62],delay:1},{type:"runner",at:[6.5,-62],burst:!0,delay:2}]},[{type:"leaper",at:[-3,-58]},{type:"leaper",at:[3,-60],delay:.8},{type:"thrower",at:[0,-68],delay:1.2}]]}},{move:[[0,Wt,-50],[0,Wt,-66]],speed:3,events:[{at:.5,spawn:[{type:"crawler",at:[-2,-61]},{type:"crawler",at:[2.5,-63]}]}]},{look:[0,1.3,-80],fight:{time:32,waves:[[{type:"shambler",at:[0,-80]},{type:"shambler",at:[-1,-82],path:[[0,-80]],delay:.6},{type:"runner",at:[-6,-82],path:[[0,-81]],delay:1.2}],[{type:"brute",at:[-8,-82],path:[[0,-81]]},{type:"leaper",at:[.5,-76],y:2.9,emerge:"drop",delay:1},{type:"thrower",at:[0,-82.5],delay:1.5}]]}},{move:[[0,Wt,-76],[-.8,Wt,-81],[-8,Wt,-82],[-20,Wt,-82]],speed:3},{look:[-34,1.3,-82],fight:{time:35,waves:[[{type:"runner",at:[-36,-81]},{type:"runner",at:[-38,-83],delay:.5},{type:"shambler",at:[-34,-82],delay:1}],{left:1,spawns:[{type:"brute",at:[-38,-82]},{type:"thrower",at:[-36,-80.8],delay:.8},{type:"leaper",at:[-28,-82],y:2.9,emerge:"drop",delay:1.5}]}]}},{move:[[-26,Wt,-82],[-35,Wt,-82]],speed:2.5,msg:"CONTAINMENT BREACH",color:"#ff4a3a"},{look:[-46,3,-82],wait:1},{boss:"zero",at:[-48,0,-82],look:[-47,3.2,-82]},{wait:2,msg:"SUBJECT ZERO ELIMINATED",dur:2.5},{move:[[-26,Wt,-82],[-14,Wt,-82]],speed:4,msg:"GET TO THE SURFACE!",color:"#ffd060"}]},su=[u_,d_,p_];var cs=new E,m_=new E(-28,60,26),rl=class{constructor(t){this.g=t;let e=t.scene;this.sky=new $(new ve(190,32,16),new Le({map:pt.sky(),side:Je,fog:!1,depthWrite:!1})),this.sky.renderOrder=-10,this.sky.rotation.y=2.2,this.sky.visible=!1,e.add(this.sky),this.mistMat=new Wi({map:pt.glow(),color:9082536,transparent:!0,opacity:.05,depthWrite:!1,fog:!0}),this.mist=[];for(let i=0;i<34;i++){let n=new un(this.mistMat);n.userData={x:M(-16,16),y:M(.2,1.5),z:M(-16,16),vx:M(-.25,.25),vz:M(-.15,.15),s:M(5,10)},n.scale.set(n.userData.s,n.userData.s*.45,1),n.renderOrder=4,e.add(n),this.mist.push(n)}this.halo=new un(new Wi({map:pt.glow(),color:16773328,transparent:!0,opacity:.06,depthWrite:!1,depthTest:!1,blending:oi,fog:!1})),this.halo.renderOrder=8,e.add(this.halo),this.moteColor=new bt(16773848),this.flash=0,this.nextStrike=6,this.strikeT=-1,this.fogBase=new bt,this.fogFlash=new bt(5660794)}setup(t){let e=this.g;this.st=t,this.sky.visible=!!t.sky,e.scene.background=t.sky?null:new bt(t.fog),this.fogBase.set(t.fog),this.mistMat.opacity=t.mist??.04,this.mistMat.color.set(t.mistColor??9082536),this.moonBase=t.moon||0,this.hemiBase=t.hemi[2],e.moon.castShadow=e.settings.quality==="high"&&!!t.sky,this.flash=0,this.strikeT=-1,this.nextStrike=M(5,9)}update(t){let e=this.g,i=e.camera.position;this.sky.position.copy(i),this.st&&this.st.lightning&&e.state!=="title"&&(this.nextStrike-=t,this.nextStrike<=0&&(this.nextStrike=M(9,22),this.strikeT=0,setTimeout(()=>e.audio.play("thunder"),M(300,1100))));let n=0;if(this.strikeT>=0){this.strikeT+=t;let o=this.strikeT;n=Math.max(Math.exp(-o*14),o>.16?Math.exp(-(o-.16)*7)*.8:0,o>.5&&o<.56?.5:0),o>1.4&&(this.strikeT=-1)}this.flash=n,e.moon.intensity=this.moonBase+n*7,e.hemi.intensity=(this.hemiBase||.3)+n*1.6,this.sky.material.color.setScalar(1+n*5),e.scene.fog&&e.scene.fog.color.copy(this.fogBase).lerp(this.fogFlash,n*.55),cs.set(Math.round(i.x/4)*4,0,Math.round(i.z/4)*4).addScaledVector(e.camFwd,12),e.moon.target.position.copy(cs),e.moon.position.copy(cs).add(m_);for(let o of this.mist){let l=o.userData;l.x+=l.vx*t,l.z+=l.vz*t;let c=l.x-i.x,h=l.z-i.z;c>18?l.x-=36:c<-18&&(l.x+=36),h>18?l.z-=36:h<-18&&(l.z+=36),o.position.set(l.x,l.y,l.z)}let r=e.flashAim;this.halo.position.copy(e.flashlight.position).lerp(r,.4);let a=1-e.coverAmt;if(this.halo.material.opacity=.055*a*(this.st&&this.st.sky?1:1.25),this.halo.scale.setScalar(6.5),Math.random()<t*8*a){let o=M(.08,.5);cs.copy(e.flashlight.position).lerp(r,o);let l=o*4;e.fx.glow.spawn(cs.x+M(-l,l),cs.y+M(-l,l)*.6,cs.z+M(-l,l),M(-.05,.05),M(-.06,.02),M(-.05,.05),{color:this.moteColor,life:M(1.2,2.4),size:M(.005,.01),alpha:.28})}}};var Oi=new be({color:1513756,metalness:.85,roughness:.34}),Zi=new be({color:789517,metalness:.1,roughness:.7}),hr=new be({color:11843774,metalness:1,roughness:.2}),ru=new be({color:4860950,metalness:0,roughness:.55}),al=new be({color:2760728,metalness:0,roughness:.6}),g_=new be({color:1712176,metalness:0,roughness:.9}),x_=new Le({color:new bt(16773328).multiplyScalar(2.5)}),y_=new be({color:13213760,metalness:1,roughness:.3}),__=new be({color:11545114,metalness:0,roughness:.5}),He=(s,t,e,i,n,r,a,o=0)=>{let l=new $(new ge(t,e,i),s);return l.position.set(n,r,a),l.rotation.x=o,l},yn=(s,t,e,i,n,r,a=12)=>{let o=new $(new ie(t,t,e,a),s);return o.rotation.x=Math.PI/2,o.position.set(i,n,r),o};function v_(s){let t=new $(new ve(1,12,10),al);t.scale.set(.026,.044,.036),t.position.set(0,-.062,.022),s.add(t);for(let a=0;a<4;a++){let o=new $(new ni(.0095,.03,3,6),al);o.rotation.z=Math.PI/2,o.position.set(0,-.036-a*.02,-.024+a*.003),s.add(o)}let e=new $(new ni(.0105,.04,3,6),al);e.rotation.x=Math.PI/2-.3,e.position.set(-.024,-.02,-.005),s.add(e);let i=new $(new ni(.036,.5,4,10),g_),n=new E(.2,-.42,.88).normalize();i.quaternion.setFromUnitVectors(new E(0,1,0),n),i.position.set(0,-.085,.045).addScaledVector(n,.3),s.add(i);let r=new $(new ie(.039,.039,.03,10),al);r.quaternion.copy(i.quaternion),r.position.set(0,-.085,.045).addScaledVector(n,.045),s.add(r)}function ol(s,t,e){s.add(yn(Zi,.014,.07,0,t,e)),s.add(yn(Oi,.017,.016,0,t,e-.035));let i=new $(new Xi(.013,12),x_);i.position.set(0,t,e-.0435),i.rotation.y=Math.PI,s.add(i);let n=new Te;return n.position.set(0,t,e-.06),s.add(n),n}function M_(s){let t=new jt,e,i,n=[.02,.03,-.04];s==="pistol"?(t.add(He(Oi,.03,.036,.2,0,.02,-.085)),t.add(He(Zi,.028,.022,.15,0,-.01,-.065)),t.add(He(Zi,.03,.105,.046,0,-.065,.012,.22)),t.add(He(Zi,.008,.006,.05,0,-.042,-.045)),t.add(He(Oi,.006,.008,.008,0,.042,-.175)),t.add(He(Oi,.016,.008,.008,0,.042,.008)),t.add(He(Zi,.031,.02,.05,0,.022,-.04)),t.add(yn(Zi,.0085,.01,0,.022,-.186)),i=ol(t,-.036,-.105),e=[0,.022,-.2]):s==="magnum"?(t.add(yn(hr,.016,.24,0,.022,-.17)),t.add(He(hr,.012,.016,.24,0,.002,-.17)),t.add(He(hr,.008,.012,.24,0,.042,-.17)),t.add(yn(hr,.027,.055,0,.012,-.022,6)),t.add(He(hr,.026,.06,.07,0,.004,.02)),t.add(He(ru,.032,.11,.045,0,-.07,.03,.3)),t.add(He(hr,.008,.02,.012,0,.045,.045,-.5)),i=ol(t,-.03,-.16),e=[0,.022,-.3],n=null):s==="shotgun"?(t.add(yn(Oi,.014,.6,0,.03,-.33)),t.add(yn(Oi,.013,.42,0,0,-.26)),t.add(He(ru,.042,.04,.17,0,-.002,-.3)),t.add(He(Oi,.034,.06,.2,0,.012,0)),t.add(He(ru,.032,.055,.26,0,-.03,.2,-.16)),t.add(He(Zi,.03,.09,.04,0,-.06,.04,.35)),i=ol(t,-.035,-.47),e=[0,.03,-.64],n=[.03,.02,-.02]):(t.add(He(Oi,.036,.06,.28,0,.012,-.1)),t.add(yn(Oi,.011,.1,0,.012,-.285)),t.add(yn(Zi,.017,.07,0,.012,-.34)),t.add(He(Zi,.026,.19,.036,0,-.11,-.1,-.08)),t.add(He(Zi,.03,.1,.044,0,-.065,.02,.22)),t.add(He(Oi,.012,.012,.22,0,-.005,.14)),t.add(He(Oi,.008,.014,.012,0,.05,-.2)),i=ol(t,-.036,-.2),e=[0,.012,-.38]),v_(t);let r=new Te;return r.position.fromArray(e),t.add(r),t.userData={muzzle:r,light:i,eject:n},t.traverse(a=>{a.isMesh&&(a.frustumCulled=!1)}),t}var Hn=new E,xn=new E,$d=new Ge,b_=new E(0,0,-1),S_=new E(0,1,0),ll=class{constructor(t){this.g=t,this.root=new jt,t.camera.add(this.root),this.models={};for(let i of["pistol","shotgun","smg","magnum"]){let n=M_(i);n.visible=!1,this.root.add(n),this.models[i]=n}this.cur=this.models.pistol,this.fill=new fn(11187400,.35,1,1.5),this.fill.position.set(-.1,.15,-.1),t.camera.add(this.fill),this.flash=new un(new Wi({map:pt.muzzle(),blending:oi,transparent:!0,depthWrite:!1,fog:!1})),this.flash.visible=!1,this.flash.renderOrder=9,t.scene.add(this.flash),this.flashT=0,this.kick=0,this.swap=0,this.t=0,this.tracers=[];let e=new ie(1,1,1,5,1,!0);for(let i=0;i<10;i++){let n=new $(e,new Le({color:16767392,transparent:!0,opacity:0,blending:oi,depthWrite:!1,fog:!1}));n.visible=!1,n.frustumCulled=!1,t.scene.add(n),this.tracers.push({m:n,t:0})}this.nextTracer=0,this.shellGeo=new ie(.0045,.0045,.02,6),this.shotShellGeo=new ie(.009,.009,.055,8)}muzzleWorld(t){return this.cur.userData.muzzle.getWorldPosition(t)}lightWorld(t){return this.cur.userData.light.getWorldPosition(t)}fire(t){let e=this.g;this.kick=Math.min(1.4,this.kick+.55+t.kick),this.muzzleWorld(xn),this.flash.position.copy(xn),this.flash.material.rotation=M(0,6.28);let i=t.id==="shotgun"||t.id==="magnum"?.5:t.id==="smg"?.26:.32;this.flash.scale.setScalar(i*M(.8,1.2)),this.flash.visible=!0,this.flashT=.045,e.fx.muzzle(xn);for(let r=0;r<4;r++)e.fx.soft.spawn(xn.x,xn.y,xn.z,M(-.3,.3),M(.1,.6),M(-.3,.3),{color:new bt(10132122),life:M(.3,.7),size:.05,sizeEnd:.28,alpha:.22,drag:2});let n=this.cur.userData.eject;if(n){let r=t.id==="shotgun",a=new $(r?this.shotShellGeo:this.shellGeo,r?__:y_);this.cur.localToWorld(a.position.fromArray(n)),Hn.set(M(1.2,2.2),M(1.5,2.6),M(-.3,.6)).applyQuaternion(e.camera.quaternion),e.fx.addDebris(a,Hn.clone(),new E(M(-30,30),M(-30,30),M(-30,30)),2.2,!1,.008)}}tracer(t){let e=this.tracers[this.nextTracer];this.nextTracer=(this.nextTracer+1)%this.tracers.length,this.muzzleWorld(xn),Hn.subVectors(t,xn);let i=Hn.length();i<.5||(e.m.position.copy(xn).addScaledVector(Hn,.5),e.m.quaternion.setFromUnitVectors(S_,Hn.normalize()),e.m.scale.set(.006,i,.006),e.m.visible=!0,e.t=.07)}update(t){let e=this.g,i=e.camera;this.t+=t;let n=this.models[e.arsenal.cur]||this.models.pistol;n!==this.cur&&(this.cur.visible=!1,this.cur=n,this.swap=1);let r=e.state==="play"||e.state==="continue"||e.state==="results";this.cur.visible=r,this.kick=Gt(this.kick,0,13,t),this.swap=Gt(this.swap,0,7,t);let a=e.arsenal.reloading?Math.sin(Ut(1-e.arsenal.reloadT/e.arsenal.def.reload,0,1)*Math.PI):0;this.lower=Gt(this.lower||0,Math.max(e.coverAmt,this.swap,a*.55),16,t);let o=Math.tan(Kr.degToRad(i.fov/2)),l=e.input.aim,c=this.cur===this.models.shotgun||this.cur===this.models.smg,h=Math.sin(e.bobT*2)*.006*Ut(e.director.moving/2.5,0,1);this.root.position.set(.17+l.x*.07+Math.sin(this.t*.9)*.002,-.17+l.y*.045+h-this.lower*.3+Math.sin(this.t*1.3)*.002,(c?-.36:-.43)+this.kick*.035),Hn.set(l.x*o*i.aspect*12,l.y*o*12,-12).sub(this.root.position).normalize(),$d.setFromUnitVectors(b_,Hn),this.root.quaternion.slerp($d,1-Math.exp(-22*t)),this.cur.rotation.set(this.kick*.2-this.lower*.9+a*.3,0,-a*.5),this.flashT>0&&(this.flashT-=t,this.flashT<=0&&(this.flash.visible=!1));for(let u of this.tracers)u.t>0&&(u.t-=t,u.m.material.opacity=Math.max(0,u.t/.07)*.7,u.t<=0&&(u.m.visible=!1))}};var Zd={easy:{name:"EASY",lives:7,hp:.8,speed:.85,windup:1.35,timeMul:1.4,bossHp:.75,bossDmg:1},normal:{name:"NORMAL",lives:5,hp:1,speed:1,windup:1,timeMul:1,bossHp:1,bossDmg:1},hard:{name:"HARD",lives:4,hp:1.25,speed:1.15,windup:.8,timeMul:.85,bossHp:1.3,bossDmg:1}},w_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uCover:{value:0},uGrain:{value:.016},uSat:{value:.9},uAberr:{value:.0035},uTint:{value:new E(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uDamage, uCover, uGrain, uSat, uAberr; uniform vec3 uTint;
    varying vec2 vUv;
    float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      vec2 off = c * (uAberr + uDamage * 0.02) * (0.5 + r2 * 4.0);
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - off).b;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      vec3 shadowTint = vec3(0.86, 0.97, 1.12);
      vec3 highTint = vec3(1.1, 1.0, 0.86);
      col *= mix(shadowTint, highTint, smoothstep(0.0, 0.5, l)) * uTint;
      col = mix(col, vec3(l * 1.4, l * 0.2, l * 0.15), uDamage * 0.6);
      // gentle filmic contrast curve, then vignette
      col = mix(col, col * col * (3.0 - 2.0 * min(col, vec3(1.0))), 0.22);
      float vig = smoothstep(0.8, 0.1, r2 * (1.0 + uCover * 1.2));
      col *= mix(0.28, 1.0, vig);
      float n = rnd(vUv * vec2(1733.0, 977.0) + fract(uTime * 7.31)) - 0.5;
      col += n * uGrain * (0.35 + (1.0 - smoothstep(0.0, 0.4, l)) * 0.65);
      col = max(col, 0.0);
      gl_FragColor = vec4(col, 1.0);
    }`},Xe=new E,hs=new E;function Jd(s,t){try{let e=localStorage.getItem(s);return e===null?t:JSON.parse(e)}catch{return t}}function au(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}var cl=class{constructor(){let t=new URLSearchParams(location.search);this.debug={bot:t.has("bot"),god:t.has("god"),stage:t.has("stage")?parseInt(t.get("stage"),10):null,beat:t.has("beat")?parseInt(t.get("beat"),10):0,autostart:t.has("autostart")||t.has("bot"),dtmax:t.has("dtmax")?parseFloat(t.get("dtmax")):.05,speed:t.has("speed")?Math.max(1,parseInt(t.get("speed"),10)):1,norender:t.has("norender")};let e=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);this.settings=Jd("graveshift.settings",{difficulty:"normal",quality:e?"low":"high",muted:!1}),t.has("quality")&&(this.settings.quality=t.get("quality")),this.highScore=Jd("graveshift.hiscore",0),this.autoReload=!1,this.container=document.getElementById("game"),this.initRenderer(),this.audio=new Vo,this.audio.muted=this.settings.muted,this.lights=new Yo(this.scene,8),this.fx=new qo(this),this.arsenal=new el(this),this.atmo=new rl(this),this.view=new ll(this),this.director=new il(this),this.hud=new nl(this,document.getElementById("hud")),this.input=new sl(this,this.container),this.entities=[],this.zombies=[],this.playerPos=new E,this.camFwd=new E(0,0,-1),this.state="boot",this.paused=!1,this.lives=5,this.maxLives=5,this.score=0,this.scoreShown=0,this.combo=0,this.credits=0,this.cover=!1,this.coverAmt=0,this.invuln=0,this.shakeAmt=0,this.recoil=0,this.bobT=0,this.timeScale=1,this.fightTimer=0,this.boss=null,this.stageIndex=0,this.time=0,this.heartT=0,this.totals=this.newStats(),this.stats=this.newStats(),this.diff=Zd[this.settings.difficulty],this.setupUI(),window.addEventListener("resize",()=>this.resize()),this.resize(),window.GAME=this,window.SNAPSHOT=()=>{this.composer.render(.016),this.hud.draw(.016);let i=document.createElement("canvas");i.width=this.renderer.domElement.width,i.height=this.renderer.domElement.height;let n=i.getContext("2d");return n.drawImage(this.renderer.domElement,0,0),n.drawImage(this.hud.c,0,0,i.width,i.height),i.toDataURL("image/png")},this.last=performance.now(),this.toTitle(),requestAnimationFrame(i=>this.loop(i))}newStats(){return{shots:0,hits:0,kills:0,headshots:0,rescues:0,lost:0,civilians:0,damage:0,projectiles:0,time:0,score:0}}initRenderer(){let t=this.settings.quality==="high",e=this.renderer=new so({antialias:!1,powerPreference:"high-performance",stencil:!1});e.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1)),e.toneMapping=Jr,e.toneMappingExposure=1.3,e.shadowMap.enabled=t,e.shadowMap.type=Sh,this.container.prepend(e.domElement),e.domElement.id="view";let i=this.scene=new Xs;this.camera=new Qe(68,window.innerWidth/window.innerHeight,.05,220),i.add(this.camera),this.levelRoot=new jt,this.entityRoot=new jt,i.add(this.levelRoot,this.entityRoot),this.hitRoots=[this.levelRoot,this.entityRoot];let n=new Ws(e);i.environment=n.fromScene(new zo,.04).texture,i.environmentIntensity=.12,this.hemi=new To(3820138,1446414,.5),i.add(this.hemi),this.moon=new Ro(8361936,0),this.moon.position.set(-30,60,20),this.moon.shadow.mapSize.set(2048,2048),Object.assign(this.moon.shadow.camera,{left:-34,right:34,top:34,bottom:-34,near:5,far:160}),this.moon.shadow.bias=-6e-4,this.moon.shadow.normalBias=.06,i.add(this.moon,this.moon.target);let r=this.flashlight=new Ao(16773336,22,45,.44,.55,1.5);r.castShadow=t,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=.3,r.shadow.camera.far=42,r.shadow.bias=-4e-4,r.shadow.normalBias=.03,i.add(r,r.target),this.flashAim=new E;let a=window.innerWidth,o=window.innerHeight,l=new je(a,o,{type:xi,samples:t?4:0});this.composer=new ko(e,l),this.composer.addPass(new Oo(i,this.camera)),this.bloom=new js(new et(a,o),.8,.7,.8),this.bloom.enabled=t,this.composer.addPass(this.bloom),this.grade=new Qs(w_),this.composer.addPass(this.grade),this.composer.addPass(new Bo)}resize(){let t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.fov=t/e<1?80:68,this.camera.updateProjectionMatrix();let i=this.settings.quality==="high",n=i?32e5:13e5,r=Math.min(window.devicePixelRatio||1,i?1.5:1,Math.sqrt(n/(t*e)))*(this.resScale||1);this.renderer.setPixelRatio(Math.max(.4,r)),this.renderer.setSize(t,e),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e),this.hud.resize();let a=e*this.renderer.getPixelRatio();this.fx.setScale(a/(2*Math.tan(Kr.degToRad(this.camera.fov)/2)))}$(t){return document.getElementById(t)}show(t,e=!0){let i=this.$(t);i&&i.classList.toggle("show",e)}setupUI(){let t=(e,i,n)=>{let r=this.$(e);r.innerHTML="",n.forEach(([a,o])=>{let l=document.createElement("button");l.textContent=o,l.className=this.settings[i]===a?"on":"",l.onclick=c=>{if(c.stopPropagation(),this.audio.init(),this.settings[i]=a,au("graveshift.settings",this.settings),this.audio.play("blip"),i==="quality"){location.reload();return}t(e,i,n)},r.appendChild(l)})};t("opt-diff","difficulty",[["easy","EASY"],["normal","NORMAL"],["hard","HARD"]]),t("opt-quality","quality",[["high","HIGH"],["low","LOW"]]),this.$("btn-start").onclick=e=>{e.stopPropagation(),this.audio.init(),this.startGame(0)},this.$("btn-resume").onclick=e=>{e.stopPropagation(),this.togglePause()},this.$("btn-quit").onclick=e=>{e.stopPropagation(),this.paused=!1,this.show("pause",!1),this.toTitle()},this.$("continue").onclick=e=>{e.stopPropagation(),this.continueGame()},this.$("results").onclick=e=>{e.stopPropagation(),this.resultsT>1.2&&this.afterResults()},this.$("gameover").onclick=e=>{e.stopPropagation(),this.overT>1.5&&this.toTitle()},this.$("victory").onclick=e=>{e.stopPropagation(),this.overT>2.5&&this.toTitle()},this.$("btn-mute").onclick=e=>{e.stopPropagation(),this.toggleMute()},this.updateMuteBtn()}updateMuteBtn(){let t=this.$("btn-mute");t&&(t.textContent=this.audio.muted?"SOUND: OFF":"SOUND: ON")}toggleMute(){this.audio.init(),this.audio.setMuted(!this.audio.muted),this.settings.muted=this.audio.muted,au("graveshift.settings",this.settings),this.updateMuteBtn()}togglePause(){this.state==="play"&&(this.paused=!this.paused,this.show("pause",this.paused),this.arsenal.release(),document.body.classList.toggle("menu",this.paused))}input_fire(t){if(this.state==="continue"&&t){this.continueGame();return}this.state!=="play"||this.paused||(t?this.arsenal.pull():this.arsenal.release())}input_reload(){this.state==="play"&&!this.paused&&this.arsenal.reload()}input_weapon(t){cr[t]&&this.arsenal.select(cr[t])}input_confirm(){this.state==="title"?this.startGame(0):this.state==="results"&&this.resultsT>1.2?this.afterResults():this.state==="continue"?this.continueGame():(this.state==="gameover"&&this.overT>1.5||this.state==="victory"&&this.overT>2.5)&&this.toTitle()}toTitle(){this.state="title",this.paused=!1,["pause","continue","results","gameover","victory","card"].forEach(t=>this.show(t,!1)),this.show("title",!0),document.body.classList.add("menu"),this.$("hiscore").textContent=`HIGH SCORE  ${Yi(this.highScore,8)}`,this.loadStage(0,!0),this.audio.music("title"),this.debug.autostart&&setTimeout(()=>this.state==="title"&&this.startGame(this.debug.stage||0),300)}startGame(t=0){this.diff=Zd[this.settings.difficulty],this.maxLives=this.diff.lives,this.lives=this.maxLives,this.score=0,this.scoreShown=0,this.combo=0,this.credits=0,this.totals=this.newStats(),this.arsenal.reset(),this.show("title",!1),this.loadStage(this.debug.stage??t,!1)}clearLevel(){this.tanks=[];for(let t of this.entities)this.entityRoot.remove(t.root);this.entities.length=0,this.zombies.length=0,this.levelRoot.traverse(t=>{t.isMesh&&t.geometry&&t.geometry.dispose()}),this.levelRoot.clear(),this.lights.clear(),this.fx.clear(),this.hud.clear(),this.boss=null}loadStage(t,e){this.clearLevel(),this.stageIndex=t;let i=su[t];this.stage=i,this.theme=i.theme,this.scene.fog=new ro(i.fog,i.fogDensity),this.atmo.setup(i),this.hemi.color.set(i.hemi[0]),this.hemi.groundColor.set(i.hemi[1]),this.hemi.intensity=i.hemi[2],this.moon.intensity=i.moon||0,this.scene.environmentIntensity=i.env??.12,this.grade.uniforms.uTint.value.set(...i.tint||[1,1,1]);let n=new Zo(this,this.levelRoot);i.build(n,this),n.finish(),this.fx.setRain(!!i.rain),this.director.load(i,e?0:this.debug.beat||0),this.updateCamera(.016),this.warmup(),!e&&(this.stats=this.newStats(),this.stats.score=this.score,this.state="intro",this.introT=0,this.cover=!1,this.coverAmt=0,this.combo=0,this.$("card-chapter").textContent=i.chapter,this.$("card-title").textContent=i.title,this.$("card-sub").textContent=i.subtitle,this.show("card",!0),document.body.classList.remove("menu"),this.audio.music(null),this.audio.play("stinger"))}warmup(){let t=[],e=this.director.pos,i=n=>{n.root.position.set(e.x,-50,e.z),this.entityRoot.add(n.root),t.push(n)};try{for(let a of["shambler","runner","brute"])i(new ar(this,{type:a,at:[e.x,e.z]}));for(let a of Object.keys(Qo))i(new or(this,{kind:a,pos:new E(e.x,-50,e.z)}));i(new ra(this,{at:[e.x,e.z]})),i(new aa(this,{at:[e.x,e.z]}));let n=new $(new ge,ls),r=new $(new ge,nr);n.position.y=r.position.y=-50,this.scene.add(n,r),this.renderer.compile(this.scene,this.camera),this.scene.remove(n,r)}catch(n){console.warn(n)}for(let n of t)this.entityRoot.remove(n.root)}beginPlay(){this.state="play",this.show("card",!1),this.audio.music(this.stage.music||"stage"),this.director.next(),this.invuln=1}stageClear(){if(this.state!=="play")return;this.state="results",this.resultsT=0,this.arsenal.release(),this.cover=!1,this.audio.music("clear");let t=this.stats,e=t.shots?t.hits/t.shots:0,i=Math.max(0,Math.round(600-t.time)*10),n=Math.round(e*1e4),r=t.damage===0?1e4:0;this.score+=i+n+r;for(let l in t)l!=="score"&&(this.totals[l]+=t[l]);let a=this.rank(e,t.damage),o=[["KILLS",t.kills],["HEADSHOTS",t.headshots],["ACCURACY",`${Math.round(e*100)}%`],["SURVIVORS RESCUED",`${t.rescues}`],["PROJECTILES SHOT DOWN",t.projectiles],["DAMAGE TAKEN",t.damage],["TIME",`${Math.floor(t.time/60)}:${Yi(t.time%60,2)}`],["TIME BONUS",`+${i}`],["ACCURACY BONUS",`+${n}`]];r&&o.push(["NO DAMAGE BONUS",`+${r}`]),this.$("res-title").textContent=`${this.stage.chapter} CLEAR`,this.$("res-rows").innerHTML=o.map(([l,c])=>`<div><span>${l}</span><b>${c}</b></div>`).join(""),this.$("res-score").textContent=Yi(this.score,8),this.$("res-rank").textContent=a,this.$("res-rank").className="rank r"+a,this.show("results",!0),document.body.classList.add("menu")}rank(t,e){return t>=.75&&e===0?"S":t>=.65&&e<=1?"A":t>=.5&&e<=3?"B":t>=.35?"C":"D"}afterResults(){this.show("results",!1),this.stageIndex+1<su.length?(this.debug.beat=0,this.loadStage(this.stageIndex+1,!1)):this.victory()}victory(){this.state="victory",this.overT=0,this.audio.music("title");let t=this.totals,e=t.shots?t.hits/t.shots:0;this.$("vic-score").textContent=Yi(this.score,8),this.$("vic-rank").textContent=this.rank(e,t.damage),this.$("vic-stats").textContent=`${t.kills} KILLS \xB7 ${t.headshots} HEADSHOTS \xB7 ${Math.round(e*100)}% ACCURACY \xB7 ${t.rescues} RESCUED \xB7 ${this.credits} CONTINUES`,this.saveHigh(),this.show("victory",!0),document.body.classList.add("menu")}saveHigh(){this.score>this.highScore&&(this.highScore=this.score,au("graveshift.hiscore",this.highScore))}toContinue(){this.state="continue",this.contT=10,this.arsenal.release(),this.cover=!1,this.show("continue",!0),document.body.classList.add("menu"),this.audio.music(null),this.audio.play("timeup")}continueGame(){this.state==="continue"&&(this.credits++,this.lives=this.maxLives,this.invuln=2.5,this.state="play",this.show("continue",!1),document.body.classList.remove("menu"),this.audio.music(this.boss?"boss":this.stage.music||"stage"),this.hud.message("GET BACK IN THERE!","#ffd060",1.6))}gameOver(){this.state="gameover",this.overT=0,this.show("continue",!1),this.$("go-score").textContent=Yi(this.score,8),this.saveHigh(),this.show("gameover",!0),this.audio.music("gameover")}addEntity(t){return this.entities.push(t),this.entityRoot.add(t.root),t.kind==="zombie"&&this.zombies.push(t),t}spawn(t,e){let i=[],n=t.type;if(Qh[n])t.burst&&this.burstTank(t.at),i.push(this.addEntity(new ar(this,{...t,fight:e})));else if(n==="survivor"){let r=this.addEntity(new Ko(this,t));for(let a of t.chasers||[]){let o=this.addEntity(new ar(this,{...a,chase:r,fight:e}));r.chasers.push(o),i.push(o)}i.push(r)}else n==="barrel"?i.push(this.addEntity(new ra(this,t))):n==="crate"?i.push(this.addEntity(new aa(this,t))):n==="pickup"&&i.push(this.addEntity(new or(this,{kind:t.kind,pos:new E(t.at[0],0,t.at[1]),y:t.y})));return i}burstTank(t){let e=this.tanks||[],i=null,n=4;for(let a of e){let o=Math.hypot(a.x-t[0],a.z-t[1]);o<n&&!a.broken&&(n=o,i=a)}if(!i)return;i.broken=!0,i.meshes.forEach(a=>a.visible=!1);let r=new E(i.x,1.4,i.z);this.audio.play("glass",{pan:this.panFor(r)}),this.audio.play("splash",{pan:this.panFor(r)}),this.fx.acid(r,40),this.fx.sparks(r,Xe.set(0,.5,0),20);for(let a=0;a<3;a++)this.fx.splat(i.x+M(-1,1),i.z+M(-1,1),M(.8,1.5));this.shake(.3)}startBoss(t,e){let i=Xd[t],n=this.addEntity(new i(this,e));this.boss=n,this.hud.bossIntro(n.title,n.name),this.audio.play("stinger"),this.audio.music("boss")}get comboMult(){return 1+Math.min(3,Math.floor(this.combo/10)*.5)}canShoot(){return this.state==="play"&&!this.paused&&!this.cover&&this.coverAmt<.35}addScore(t,e,i,n){let r=Math.round(t);this.score+=r,e&&this.hud.popup(i?`${i} +${r}`:`+${r}`,e,n||(i?"#ffd23a":"#f2f2e6"),i?1.1:.8)}onFire(t){this.recoil=Math.min(1,this.recoil+t.kick),this.shake(t.kick*.25),this.view.fire(t)}onKill(t,e){this.stats.kills++;let i=t.def.score*this.comboMult,n=null;e.head?(i+=150,this.stats.headshots++,n="HEADSHOT",this.timeScale=.35):e.gib&&(n=e.explosive?"BOOM":"SPLATTER");let r=e.point?e.point.clone():t.root.position.clone().setY(1.5);this.addScore(i,r,n,e.head?"#ff6a3a":void 0),this.hud.hitMarker(!0)}onRescue(t){this.stats.rescues++,this.audio.play("thanks"),this.addScore(500,t.root.position.clone().setY(2),"RESCUED","#5aff7a"),this.lives<this.maxLives?(this.lives++,this.hud.heal(),this.hud.message("SURVIVOR RESCUED  \xB7  +1 LIFE","#5aff7a",2)):(this.addScore(1e3,null),this.hud.message("SURVIVOR RESCUED  \xB7  +1000","#5aff7a",2))}onCivilianShot(t){this.stats.civilians++,this.hud.message("DON'T SHOOT SURVIVORS!","#ff3a2a",2),this.hurtPlayer(null,1,!0)}collect(t,e){let i=Qo[t];if(this.audio.play(t==="herb"?"heal":"pickup"),this.fx.sparks(e,Xe.set(0,1,0),16),t==="herb")this.lives<this.maxLives?(this.lives++,this.hud.heal(),this.hud.message("GREEN HERB  \xB7  +1 LIFE","#5aff7a",1.6)):this.addScore(1e3,e,"HERB");else if(t==="gem")this.addScore(2e3,e,"BONUS");else{let n=t==="shells"?"shotgun":t;this.arsenal.give(n),this.hud.message(`${i.label} ACQUIRED`,"#9adfff",1.6)}}hurtPlayer(t,e=1,i=!1){return this.state!=="play"?!1:!i&&this.coverAmt>.45?(this.audio.play("block"),!1):this.invuln>0&&!i?!1:(this.invuln=1.1,this.combo=0,this.stats.damage++,this.hud.damage(),this.hud.splat(t&&t.type==="acid"?"acid":"blood"),Math.random()<.5&&this.hud.splat("blood"),this.audio.play("hurt"),this.shake(.9),this.debug.god||(this.lives-=e),this.lives<=0&&(this.lives=0,this.toContinue()),!0)}screenSplat(t){this.hud.splat(t)}timeUp(){this.hud.message("TIME UP!","#ff3a2a",1.6),this.audio.play("timeup"),this.hurtPlayer(null,1,!0)}areaClear(){let t=Math.round(Math.max(0,this.fightTimer))*20;this.score+=t,this.hud.message("AREA CLEAR","#ffd060",1.4),t&&this.hud.message(`TIME BONUS +${t}`,"#9adfff",1.4),this.audio.play("blip",{freq:880})}onBossDefeated(t){this.addScore(5e3*(this.diff.bossHp||1),t.aimPoint(),"SPECIMEN TERMINATED","#ff6a3a"),this.hud.message(`${t.name} DESTROYED`,"#ff8a5a",3),this.audio.play("roar",{pitch:.7}),this.audio.play("explode"),this.shake(1.2),this.timeScale=.2,this.audio.music(null),this.fx.blood(t.aimPoint(),Xe.set(0,1,0),60,6,1.2,.14);for(let e of this.entities)e===t||e.dead||(e.kind==="zombie"?e.die("normal",Xe.set(0,0,1),e.root.position.clone().setY(1)):(e.kind==="projectile"||e.kind==="tentacle")&&(e.dead=!0,e.remove=!0))}explode(t,e,i){this.fx.explosion(t,1),this.fx.fire(t.clone().setY(.1),.6,4),this.audio.play("explode",{pan:this.panFor(t)}),this.shake(.9);for(let n of[...this.entities]){if(n.dead)continue;let r=n.root.position.distanceTo(t);r<e&&n.blast(i*(1-r/e*.5),t)}}shake(t){this.shakeAmt=Math.min(1.5,this.shakeAmt+t)}message(t,e,i){this.hud.message(t,e,i)}panFor(t){return hs.copy(t).project(this.camera),Ut(hs.x,-1,1)*.8}inView(t){let e=t.x-this.playerPos.x,i=t.z-this.playerPos.z,n=Math.hypot(e,i)||.001;return(e*this.camFwd.x+i*this.camFwd.z)/n>(this.viewCos??.75)}isBehind(t,e=0){let i=this.camera.position;return(t.x-i.x)*this.camFwd.x+(t.z-i.z)*this.camFwd.z<-e}updateCamera(t){let e=this.director,i=this.camera;this.bobT+=t*e.moving*2.4;let n=Ut(e.moving/2.5,0,1),r=Math.sin(this.bobT*2)*.035*n,a=Math.sin(this.bobT)*.025*n;this.coverAmt=Gt(this.coverAmt,this.cover?1:0,14,t),this.shakeAmt=Math.max(0,this.shakeAmt-t*2.8),this.recoil=Gt(this.recoil,0,10,t);let o=this.shakeAmt*this.shakeAmt*.12;i.position.copy(e.pos),Xe.subVectors(e.look,e.pos).setY(0).normalize(),this.camFwd.copy(Xe),i.position.x+=-Xe.z*a+M(-o,o),i.position.z+=Xe.x*a+M(-o,o),i.position.y+=r-this.coverAmt*.78+M(-o,o),hs.copy(e.look),hs.y+=this.recoil*.35-this.coverAmt*.6,hs.x+=M(-o,o)*3,hs.y+=M(-o,o)*3,i.lookAt(hs),i.rotateZ(a*.4+this.coverAmt*.05),this.playerPos.set(e.pos.x,0,e.pos.z);let l=Math.atan(Math.tan(Kr.degToRad(i.fov/2))*i.aspect);this.viewCos=Math.cos(l*.82),this.viewTan=Math.tan(l*.7),i.updateMatrixWorld(),this.view.update(t),this.view.lightWorld(this.flashlight.position),Xe.set(this.input.aim.x,this.input.aim.y,.5).unproject(i).sub(i.position).normalize(),Xe.multiplyScalar(14).add(i.position),t===.016&&this.flashAim.lengthSq()===0&&this.flashAim.copy(Xe),this.flashAim.x=Gt(this.flashAim.x,Xe.x,14,t),this.flashAim.y=Gt(this.flashAim.y,Xe.y,14,t),this.flashAim.z=Gt(this.flashAim.z,Xe.z,14,t),this.flashlight.target.position.copy(this.flashAim)}attract(t){let e=this.stage,i=performance.now()/1e3,n=e.attract||{pos:e.start,look:e.lookStart};this.director.pos.set(n.pos[0]+Math.sin(i*.1)*1.5,n.pos[1]+Math.sin(i*.13)*.2,n.pos[2]+Math.cos(i*.08)*1),this.director.look.set(n.look[0]+Math.sin(i*.15)*2,n.look[1],n.look[2]),this.input.aim.x=Math.sin(i*.4)*.3,this.input.aim.y=Math.sin(i*.33)*.15-.1,this.updateCamera(t)}loop(t){if(requestAnimationFrame(a=>this.loop(a)),this.frozen)return;let e=(t-this.last)/1e3,i=Math.min(this.debug.dtmax,e);if(this.last=t,this.fps=this.fps?this.fps*.95+1/Math.max(.001,e)*.05:60,this.resT=(this.resT||0)+e,this.resT>2&&!this.debug.norender&&(this.state==="play"||this.state==="title")){this.resT=0;let a=this.resScale||1;this.fps<40&&a>.55?(this.resScale=a*.85,this.resize()):this.fps>57&&a<1&&(this.resScale=Math.min(1,a*1.1),this.resize())}i<=0&&(i=.001),this.audio.update();let n=this.debug.speed;for(let a=0;a<n;a++)this.step(i);if(this.debug.norender){this.scene.updateMatrixWorld();return}let r=this.grade.uniforms;r.uTime.value=this.time,r.uDamage.value=Gt(r.uDamage.value,this.hud.dmgFlash*.8,10,i),r.uCover.value=this.coverAmt,this.composer.render(i),this.hud.draw(i)}step(t){this.time+=t,this.timeScale=Gt(this.timeScale,1,3.5,t);let e=t*this.timeScale;switch(this.debug.norender&&this.scene.updateMatrixWorld(),this.state){case"title":this.attract(t);break;case"intro":this.introT+=t,this.updateCamera(t),this.introT>3.4&&this.beginPlay();break;case"play":this.paused||this.updatePlay(e);break;case"continue":{this.contT-=t;let i=Math.max(0,Math.ceil(this.contT-1));this.$("cont-n").textContent!==String(i)&&(this.$("cont-n").textContent=i,this.audio.play("tick")),this.debug.bot&&this.contT<9&&this.continueGame(),this.contT<=0&&this.gameOver(),this.updateCamera(t);break}case"results":this.resultsT+=t,this.debug.bot&&this.resultsT>2&&this.afterResults(),this.updateEntities(t);break;case"gameover":case"victory":this.overT+=t;break}this.paused||(this.atmo.update(t),this.lights.update(t,this.camera.position,this.camFwd),this.fx.update(this.state==="play"?e:t)),this.scoreShown=this.scoreShown<this.score?Math.min(this.score,this.scoreShown+Math.max(10,(this.score-this.scoreShown)*8*t)):this.score}updatePlay(t){this.stats.time+=t,this.invuln-=t;let e=this.input.cover&&!this.debug.bot;e&&!this.cover?(this.cover=!0,this.arsenal.release(),this.arsenal.coverReload()):!e&&this.cover&&(this.cover=!1),this.director.update(t),this.updateCamera(t),this.arsenal.update(t),this.updateEntities(t),this.aimTarget=Yd(this,this.input.aim),this.debug.bot&&this.botUpdate(t),this.lives===1&&(this.heartT-=t,this.heartT<=0&&(this.heartT=.85,this.audio.play("heartbeat")))}updateEntities(t){for(let i=0;i<this.entities.length;i++)this.entities[i].update(t);let e=!1;for(let i=this.entities.length-1;i>=0;i--){let n=this.entities[i];n.remove&&(this.entityRoot.remove(n.root),this.entities.splice(i,1),e=!0)}e&&(this.zombies=this.zombies.filter(i=>!i.remove))}botUpdate(t){this.input.botDriven=!0;let e=null,i=-1/0,n=null,r=this.camera.position;for(let o of this.entities){if(o.dead)continue;let l=null,c=0;o.kind==="projectile"?(l=o.root.position.clone(),c=1e3+o.t*100):o.kind==="tentacle"&&(o.state==="rise"||o.state==="rear")?(l=o.tip.getWorldPosition(new E),c=900):o.kind==="boss"&&o.state!=="intro"?(l=o.aimPoint(),c=400):o.kind==="zombie"&&o.root.position.y>-1?(o.botPart||(o.botPart=Math.random()<.6?o.rig.headTarget:le(o.rig.hitboxes)),(o.headless||!o.botPart.layers.isEnabled(1)&&o.botPart!==o.rig.headTarget)&&(o.botPart=o.rig.hitboxes[1]),l=o.botPart.getWorldPosition(new E),c=300-l.distanceTo(r)*5+(o.warn||0)*400+(o.chase?200:0)):o.kind==="pickup"&&(l=o.root.position.clone(),c=150),l&&(Xe.copy(l).project(this.camera),!(Xe.z>1||Math.abs(Xe.x)>.95||Math.abs(Xe.y)>.95)&&c>i&&(i=c,e=o,n={x:Xe.x,y:Xe.y}))}let a=this.input.aim;if(n){let o=1-Math.exp(-18*t);a.x+=(n.x-a.x)*o,a.y+=(n.y-a.y)*o,this.input.px=(a.x*.5+.5)*window.innerWidth,this.input.py=(-a.y*.5+.5)*window.innerHeight,Math.hypot((n.x-a.x)*window.innerWidth,(n.y-a.y)*window.innerHeight)<30&&this.arsenal.cool<=0&&(this.arsenal.slot.ammo<=0?this.arsenal.reload():(this.arsenal.pull(),this.arsenal.release()))}else this.arsenal.slot.ammo<this.arsenal.def.mag&&this.arsenal.reload()}};function Kd(){try{new cl}catch(s){console.error(s);let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#f0e6d0;font:18px sans-serif;text-align:center;padding:20px;background:#000;z-index:99",t.textContent="Could not start the game. A browser with WebGL 2 support is required. ("+s.message+")",document.body.appendChild(t)}}document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(s=>setTimeout(s,1500))]).then(Kd):Kd();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
