(()=>{var Uc="170";var zf=0,wh=1,Hf=2;var Hu=1,Nc=2,qi=3,Ui=0,Ke=1,mi=2,Di=0,dn=1,Ni=2,Eh=3,Th=4,Vf=5,Nn=100,Gf=101,Wf=102,Xf=103,qf=104,Yf=200,$f=201,Zf=202,Jf=203,ol=204,ll=205,Kf=206,Qf=207,jf=208,td=209,ed=210,id=211,nd=212,sd=213,rd=214,cl=0,hl=1,ul=2,xs=3,fl=4,dl=5,pl=6,ml=7,Vu=0,ad=1,od=2,pn=0,Fc=1,Oc=2,kc=3,wr=4,ld=5,Bc=6,zc=7;var Gu=300,ys=301,_s=302,gl=303,xl=304,Ka=306,fr=1e3,On=1001,yl=1002,ii=1003,cd=1004;var Fr=1005;var gi=1006,To=1007;var $i=1008;var Qi=1009,Wu=1010,Xu=1011,dr=1012,Hc=1013,kn=1014,Li=1015,hi=1016,Vc=1017,Gc=1018,vs=1020,qu=35902,Yu=1021,$u=1022,Ei=1023,Zu=1024,Ju=1025,ps=1026,Ms=1027,Wc=1028,Xc=1029,Ku=1030,qc=1031;var Yc=1033,da=33776,pa=33777,ma=33778,ga=33779,_l=35840,vl=35841,Ml=35842,bl=35843,Sl=36196,wl=37492,El=37496,Tl=37808,Al=37809,Rl=37810,Cl=37811,Pl=37812,Il=37813,Ll=37814,Dl=37815,Ul=37816,Nl=37817,Fl=37818,Ol=37819,kl=37820,Bl=37821,xa=36492,zl=36494,Hl=36495,Qu=36283,Vl=36284,Gl=36285,Wl=36286;var ya=2300,Xl=2301,Ao=2302,Ah=2400,Rh=2401,Ch=2402;var hd=3200,ud=3201;var ju=0,fd=1,un="",ri="srgb",Ds="srgb-linear",Qa="linear",ee="srgb";var $n=7680;var Ph=519,dd=512,pd=513,md=514,tf=515,gd=516,xd=517,yd=518,_d=519,ql=35044,Us=35048;var Ih="300 es",Zi=2e3,_a=2001,mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,or=Math.PI/180,bs=180/Math.PI;function Ji(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function Ge(s,t,e){return Math.max(t,Math.min(e,s))}function $c(s,t){return(s%t+t)%t}function vd(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Md(s,t,e){return s!==t?(e-s)/(t-s):0}function lr(s,t,e){return(1-e)*s+e*t}function bd(s,t,e,i){return lr(s,t,1-Math.exp(-e*i))}function Sd(s,t=1){return t-Math.abs($c(s,t*2)-t)}function wd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ed(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Td(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ad(s,t){return s+Math.random()*(t-s)}function Rd(s){return s*(.5-Math.random())}function Cd(s){s!==void 0&&(Lh=s);let t=Lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pd(s){return s*or}function Id(s){return s*bs}function Ld(s){return(s&s-1)===0&&s!==0}function Dd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ud(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nd(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),m=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ef={DEG2RAD:or,RAD2DEG:bs,generateUUID:Ji,clamp:Ge,euclideanModulo:$c,mapLinear:vd,inverseLerp:Md,lerp:lr,damp:bd,pingpong:Sd,smoothstep:wd,smootherstep:Ed,randInt:Td,randFloat:Ad,randFloatSpread:Rd,seededRandom:Cd,degToRad:Pd,radToDeg:Id,isPowerOfTwo:Ld,ceilPowerOfTwo:Dd,floorPowerOfTwo:Ud,setQuaternionFromProperEuler:Nd,normalize:ae,denormalize:wi},j=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class s{constructor(t,e,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],x=n[0],g=n[3],p=n[6],_=n[1],v=n[4],y=n[7],I=n[2],A=n[5],P=n[8];return r[0]=a*x+o*_+l*I,r[3]=a*g+o*v+l*A,r[6]=a*p+o*y+l*P,r[1]=c*x+h*_+u*I,r[4]=c*g+h*v+u*A,r[7]=c*p+h*y+u*P,r[2]=f*x+d*_+m*I,r[5]=f*g+d*v+m*A,r[8]=f*p+d*y+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=e*u+i*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ro=new Ft;function nf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fd(){let s=va("canvas");return s.style.display="block",s}var Dh={};function rr(s){s in Dh||(Dh[s]=!0,console.warn(s))}function Od(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function kd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Wt={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===un?Qa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Uh=[.64,.33,.3,.6,.15,.06],Nh=[.2126,.7152,.0722],Fh=[.3127,.329],Oh=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Ds]:{primaries:Uh,whitePoint:Fh,transfer:Qa,toXYZ:Oh,fromXYZ:kh,luminanceCoefficients:Nh,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:Uh,whitePoint:Fh,transfer:ee,toXYZ:Oh,fromXYZ:kh,luminanceCoefficients:Nh,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}});var Zn,Yl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=va("canvas")),Zn.width=t.width,Zn.height=t.height;let i=Zn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=va("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ki(e[i]/255)*255):e[i]=Ki(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zd=0,Ma=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Co(n[a].image)):r.push(Co(n[a]))}else r=Co(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hd=0,ai=class s extends mn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=On,n=On,r=gi,a=$i,o=Ei,l=Qi,c=s.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ji(),this.name="",this.source=new Ma(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Gu;ai.DEFAULT_ANISOTROPY=1;var ce=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,I=(p+1)/2,A=(h+f)/4,P=(u+x)/4,R=(m+g)/4;return v>y&&v>I?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=A/i,r=P/i):y>I?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):I<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(I),i=P/r,n=R/r),this.set(i,n,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends mn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ai(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ma(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends $l{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ba=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qe=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-o,p=l*f+c*d+h*m+u*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let I=Math.sqrt(v),A=Math.atan2(I,p*_);g=Math.sin(g*A)/I,o=Math.sin(o*A)/I}let y=o*_;if(l=l*g+f*y,c=c*g+d*y,h=h*g+m*y,u=u*g+x*y,g===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),f=l(i/2),d=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Po=new E,Bh=new Qe,Ti=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),kr.subVectors(this.max,$s),Jn.subVectors(t.a,$s),Kn.subVectors(t.b,$s),Qn.subVectors(t.c,$s),rn.subVectors(Kn,Jn),an.subVectors(Qn,Kn),Rn.subVectors(Jn,Qn);let e=[0,-rn.z,rn.y,0,-an.z,an.y,0,-Rn.z,Rn.y,rn.z,0,-rn.x,an.z,0,-an.x,Rn.z,0,-Rn.x,-rn.y,rn.x,0,-an.y,an.x,0,-Rn.y,Rn.x,0];return!Io(e,Jn,Kn,Qn,kr)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,Jn,Kn,Qn,kr))?!1:(Br.crossVectors(rn,an),e=[Br.x,Br.y,Br.z],Io(e,Jn,Kn,Qn,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hi=[new E,new E,new E,new E,new E,new E,new E,new E],Mi=new E,Or=new Ti,Jn=new E,Kn=new E,Qn=new E,rn=new E,an=new E,Rn=new E,$s=new E,kr=new E,Br=new E,Cn=new E;function Io(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Cn.fromArray(s,r);let o=n.x*Math.abs(Cn.x)+n.y*Math.abs(Cn.y)+n.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=i.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vd=new Ti,Zs=new E,Lo=new E,ji=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Vd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Zs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Lo)),this.expandByPoint(Zs.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new E,Do=new E,zr=new E,on=new E,Uo=new E,Hr=new E,No=new E,Ss=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Do.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),on.copy(this.origin).sub(Do);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=on.dot(this.direction),l=-on.dot(zr),c=on.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Do).addScaledVector(zr,f),d}intersectSphere(t,e){Vi.subVectors(t.center,this.origin);let i=Vi.dot(this.direction),n=Vi.dot(Vi)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,i,n,r){Uo.subVectors(e,t),Hr.subVectors(i,t),No.crossVectors(Uo,Hr);let a=this.direction.dot(No),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,t);let l=o*this.direction.dot(Hr.crossVectors(on,Hr));if(l<0)return null;let c=o*this.direction.dot(Uo.cross(on));if(c<0||l+c>a)return null;let h=-o*on.dot(No);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class s{constructor(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g)}set(t,e,i,n,r,a,o,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/jn.setFromMatrixColumn(t,0).length(),r=1/jn.setFromMatrixColumn(t,1).length(),a=1/jn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,x=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,d=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Wd)}lookAt(t,e,i){let n=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),ln.crossVectors(i,li),ln.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ln.crossVectors(i,li)),ln.normalize(),Vr.crossVectors(li,ln),n[0]=ln.x,n[4]=Vr.x,n[8]=li.x,n[1]=ln.y,n[5]=Vr.y,n[9]=li.y,n[2]=ln.z,n[6]=Vr.z,n[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],_=i[3],v=i[7],y=i[11],I=i[15],A=n[0],P=n[4],R=n[8],w=n[12],b=n[1],L=n[5],H=n[9],z=n[13],W=n[2],J=n[6],X=n[10],it=n[14],G=n[3],at=n[7],ft=n[11],wt=n[15];return r[0]=a*A+o*b+l*W+c*G,r[4]=a*P+o*L+l*J+c*at,r[8]=a*R+o*H+l*X+c*ft,r[12]=a*w+o*z+l*it+c*wt,r[1]=h*A+u*b+f*W+d*G,r[5]=h*P+u*L+f*J+d*at,r[9]=h*R+u*H+f*X+d*ft,r[13]=h*w+u*z+f*it+d*wt,r[2]=m*A+x*b+g*W+p*G,r[6]=m*P+x*L+g*J+p*at,r[10]=m*R+x*H+g*X+p*ft,r[14]=m*w+x*z+g*it+p*wt,r[3]=_*A+v*b+y*W+I*G,r[7]=_*P+v*L+y*J+I*at,r[11]=_*R+v*H+y*X+I*ft,r[15]=_*w+v*z+y*it+I*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*l*u-n*c*u-r*o*f+i*c*f+n*o*d-i*l*d)+x*(+e*l*d-e*c*f+r*a*f-n*a*d+n*c*h-r*l*h)+g*(+e*c*u-e*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*f+n*a*u-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=u*g*c-x*f*c+x*l*d-o*g*d-u*l*p+o*f*p,v=m*f*c-h*g*c-m*l*d+a*g*d+h*l*p-a*f*p,y=h*x*c-m*u*c+m*o*d-a*x*d-h*o*p+a*u*p,I=m*u*l-h*x*l-m*o*f+a*x*f+h*o*g-a*u*g,A=e*_+i*v+n*y+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=_*P,t[1]=(x*f*r-u*g*r-x*n*d+i*g*d+u*n*p-i*f*p)*P,t[2]=(o*g*r-x*l*r+x*n*c-i*g*c-o*n*p+i*l*p)*P,t[3]=(u*l*r-o*f*r-u*n*c+i*f*c+o*n*d-i*l*d)*P,t[4]=v*P,t[5]=(h*g*r-m*f*r+m*n*d-e*g*d-h*n*p+e*f*p)*P,t[6]=(m*l*r-a*g*r-m*n*c+e*g*c+a*n*p-e*l*p)*P,t[7]=(a*f*r-h*l*r+h*n*c-e*f*c-a*n*d+e*l*d)*P,t[8]=y*P,t[9]=(m*u*r-h*x*r-m*i*d+e*x*d+h*i*p-e*u*p)*P,t[10]=(a*x*r-m*o*r+m*i*c-e*x*c-a*i*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*d-e*o*d)*P,t[12]=I*P,t[13]=(h*x*n-m*u*n+m*i*f-e*x*f-h*i*g+e*u*g)*P,t[14]=(m*o*n-a*x*n-m*i*l+e*x*l+a*i*g-e*o*g)*P,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*f+e*o*f)*P,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,x=a*h,g=a*u,p=o*u,_=l*c,v=l*h,y=l*u,I=i.x,A=i.y,P=i.z;return n[0]=(1-(x+p))*I,n[1]=(d+y)*I,n[2]=(m-v)*I,n[3]=0,n[4]=(d-y)*A,n[5]=(1-(f+p))*A,n[6]=(g+_)*A,n[7]=0,n[8]=(m+v)*P,n[9]=(g-_)*P,n[10]=(1-(f+x))*P,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=jn.set(n[0],n[1],n[2]).length(),a=jn.set(n[4],n[5],n[6]).length(),o=jn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],bi.copy(this);let c=1/r,h=1/a,u=1/o;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,e.setFromRotationMatrix(bi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Zi){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,m;if(o===Zi)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===_a)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Zi){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(a-r),f=(e+t)*c,d=(i+n)*h,m,x;if(o===Zi)m=(a+r)*u,x=-2*u;else if(o===_a)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},jn=new E,bi=new Gt,Gd=new E(0,0,0),Wd=new E(1,1,1),ln=new E,Vr=new E,li=new E,zh=new Gt,Hh=new Qe,xi=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xd=0,Vh=new E,ts=new Qe,Gi=new Gt,Gr=new E,Js=new E,qd=new E,Yd=new Qe,Gh=new E(1,0,0),Wh=new E(0,1,0),Xh=new E(0,0,1),qh={type:"added"},$d={type:"removed"},es={type:"childadded",child:null},Fo={type:"childremoved",child:null},Oe=class s extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new E,e=new xi,i=new Qe,n=new E(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gr.copy(t):Gr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Js,Gr,this.up):Gi.lookAt(Gr,Js,this.up),this.quaternion.setFromRotationMatrix(Gi),n&&(Gi.extractRotation(n.matrixWorld),ts.setFromRotationMatrix(Gi),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($d),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Oe.DEFAULT_UP=new E(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new E,Wi=new E,Oo=new E,Xi=new E,is=new E,ns=new E,Yh=new E,ko=new E,Bo=new E,zo=new E,Ho=new ce,Vo=new ce,Go=new ce,fn=class s{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Si.subVectors(t,e),n.cross(Si);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Si.subVectors(n,e),Wi.subVectors(i,e),Oo.subVectors(t,e);let a=Si.dot(Si),o=Si.dot(Wi),l=Si.dot(Oo),c=Wi.dot(Wi),h=Wi.dot(Oo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Ho.setScalar(0),Vo.setScalar(0),Go.setScalar(0),Ho.fromBufferAttribute(t,e),Vo.fromBufferAttribute(t,i),Go.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Ho,r.x),a.addScaledVector(Vo,r.y),a.addScaledVector(Go,r.z),a}static isFrontFacing(t,e,i,n){return Si.subVectors(i,e),Wi.subVectors(t,e),Si.cross(Wi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Si.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;is.subVectors(n,i),ns.subVectors(r,i),ko.subVectors(t,i);let l=is.dot(ko),c=ns.dot(ko);if(l<=0&&c<=0)return e.copy(i);Bo.subVectors(t,n);let h=is.dot(Bo),u=ns.dot(Bo);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(is,a);zo.subVectors(t,r);let d=is.dot(zo),m=ns.dot(zo);if(m>=0&&d<=m)return e.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(ns,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Yh.subVectors(r,n),o=(u-h)/(u-h+(d-m)),e.copy(n).addScaledVector(Yh,o);let p=1/(g+x+f);return a=x*p,o=f*p,e.copy(i).addScaledVector(is,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Wo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Wt.workingColorSpace){if(t=$c(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Wo(a,r,t+1/3),this.g=Wo(a,r,t),this.b=Wo(a,r,t-1/3)}return Wt.toWorkingColorSpace(this,n),this}setStyle(t,e=ri){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ri){let i=sf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Wt.fromWorkingColorSpace(Je.copy(this),t),Math.round(Ge(Je.r*255,0,255))*65536+Math.round(Ge(Je.g*255,0,255))*256+Math.round(Ge(Je.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Je.copy(this),e);let i=Je.r,n=Je.g,r=Je.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=ri){Wt.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,i=Je.g,n=Je.b;return t!==ri?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(Wr);let i=lr(cn.h,Wr.h,e),n=lr(cn.s,Wr.s,e),r=lr(cn.l,Wr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new xt;xt.NAMES=sf;var Zd=0,Fi=class extends mn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ji(),this.name="",this.blending=dn,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dn&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ol&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==Nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},We=class extends Fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new E,Xr=new j,Pe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),n=ae(n,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}};var Sa=class extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var wa=class extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Xt=class extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Jd=0,pi=new Gt,Xo=new Oe,ss=new E,ci=new Ti,Ks=new Ti,Ve=new E,Ee=class s extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nf(t)?wa:Sa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,i){return pi.makeTranslation(t,e,i),this.applyMatrix4(pi),this}scale(t,e,i){return pi.makeScale(t,e,i),this.applyMatrix4(pi),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){let i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(ci.min,Ks.min),ci.expandByPoint(Ve),Ve.addVectors(ci.max,Ks.max),ci.expandByPoint(Ve)):(ci.expandByPoint(Ks.min),ci.expandByPoint(Ks.max))}ci.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),Ve.add(ss)),n=Math.max(n,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new E,l[R]=new E;let c=new E,h=new E,u=new E,f=new j,d=new j,m=new j,x=new E,g=new E;function p(R,w,b){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[R].add(x),o[w].add(x),o[b].add(x),l[R].add(g),l[w].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,w=_.length;R<w;++R){let b=_[R],L=b.start,H=b.count;for(let z=L,W=L+H;z<W;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new E,y=new E,I=new E,A=new E;function P(R){I.fromBufferAttribute(n,R),A.copy(I);let w=o[R];v.copy(w),v.sub(I.multiplyScalar(I.dot(w))).normalize(),y.crossVectors(A,w);let L=y.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,w=_.length;R<w;++R){let b=_[R],L=b.start,H=b.count;for(let z=L,W=L+H;z<W;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$h=new Gt,Pn=new Ss,qr=new ji,Zh=new E,Yr=new E,$r=new E,Zr=new E,qo=new E,Jr=new E,Jh=new E,Kr=new E,Q=class extends Oe{constructor(t=new Ee,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(qo.fromBufferAttribute(u,t),a?Jr.addScaledVector(qo,h):Jr.addScaledVector(qo.sub(e),h))}e.add(Jr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(qr.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(qr,Zh)===null||Pn.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&($h.copy(r).invert(),Pn.copy(t.ray).applyMatrix4($h),!(i.boundingBox!==null&&Pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,I=v;y<I;y+=3){let A=o.getX(y),P=o.getX(y+1),R=o.getX(y+2);n=Qr(this,p,t,i,c,h,u,A,P,R),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);n=Qr(this,a,t,i,c,h,u,_,v,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],_=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=_,I=v;y<I;y+=3){let A=y,P=y+1,R=y+2;n=Qr(this,p,t,i,c,h,u,A,P,R),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,v=g+1,y=g+2;n=Qr(this,a,t,i,c,h,u,_,v,y),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Kd(s,t,e,i,n,r,a,o){let l;if(t.side===Ke?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Ui,o),l===null)return null;Kr.copy(o),Kr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:s}}function Qr(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Yr),s.getVertexPosition(l,$r),s.getVertexPosition(c,Zr);let h=Kd(s,t,e,i,Yr,$r,Zr,Jh);if(h){let u=new E;fn.getBarycoord(Jh,Yr,$r,Zr,u),n&&(h.uv=fn.getInterpolatedAttribute(n,o,l,c,u,new j)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,l,c,u,new j)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new E,materialIndex:0};fn.getNormal(Yr,$r,Zr,f.normal),h.face=f,h.barycoord=u}return h}var he=class s extends Ee{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,r,4),m("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function m(x,g,p,_,v,y,I,A,P,R,w){let b=y/P,L=I/R,H=y/2,z=I/2,W=A/2,J=P+1,X=R+1,it=0,G=0,at=new E;for(let ft=0;ft<X;ft++){let wt=ft*L-z;for(let Ht=0;Ht<J;Ht++){let ue=Ht*b-H;at[x]=ue*_,at[g]=wt*v,at[p]=W,c.push(at.x,at.y,at.z),at[x]=0,at[g]=0,at[p]=A>0?1:-1,h.push(at.x,at.y,at.z),u.push(Ht/P),u.push(1-ft/R),it+=1}}for(let ft=0;ft<R;ft++)for(let wt=0;wt<P;wt++){let Ht=f+wt+J*ft,ue=f+wt+J*(ft+1),Y=f+(wt+1)+J*(ft+1),nt=f+(wt+1)+J*ft;l.push(Ht,ue,nt),l.push(ue,Y,nt),G+=6}o.addGroup(d,G,w),d+=G,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ei(s){let t={};for(let e=0;e<s.length;e++){let i=ws(s[e]);for(let n in i)t[n]=i[n]}return t}function Qd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function rf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Oi={clone:ws,merge:ei},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends Fi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ea=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hn=new E,Kh=new j,Qh=new j,Xe=class extends Ea{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hn.x,hn.y).multiplyScalar(-t/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hn.x,hn.y).multiplyScalar(-t/hn.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,Qh),e.subVectors(Qh,Kh)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(or*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rs=-90,as=1,Jl=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Xe(rs,as,t,e);n.layers=this.layers,this.add(n);let r=new Xe(rs,as,t,e);r.layers=this.layers,this.add(r);let a=new Xe(rs,as,t,e);a.layers=this.layers,this.add(a);let o=new Xe(rs,as,t,e);o.layers=this.layers,this.add(o);let l=new Xe(rs,as,t,e);l.layers=this.layers,this.add(l);let c=new Xe(rs,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ta=class extends ai{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kl=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Ta(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new he(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:Di});r.uniforms.tEquirect.value=e;let a=new Q(n,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=gi),new Jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},Yo=new E,ep=new E,ip=new Ft,Yi=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Yo.subVectors(i,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Yo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ip.getNormalMatrix(t),n=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},In=new ji,jr=new E,mr=class{constructor(t=new Yi,e=new Yi,i=new Yi,n=new Yi,r=new Yi,a=new Yi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zi){let i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],m=n[9],x=n[10],g=n[11],p=n[12],_=n[13],v=n[14],y=n[15];if(i[0].setComponents(l-r,f-c,g-d,y-p).normalize(),i[1].setComponents(l+r,f+c,g+d,y+p).normalize(),i[2].setComponents(l+a,f+h,g+m,y+_).normalize(),i[3].setComponents(l-a,f-h,g-m,y-_).normalize(),i[4].setComponents(l-o,f-u,g-x,y-v).normalize(),e===Zi)i[5].setComponents(l+o,f+u,g+x,y+v).normalize();else if(e===_a)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(jr.x=n.normal.x>0?t.max.x:t.min.x,jr.y=n.normal.y>0?t.max.y:t.min.y,jr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function af(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function np(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var tn=class s extends Ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let _=p*f-a;for(let v=0;v<c;v++){let y=v*u-r;m.push(y,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let v=_+c*p,y=_+c*(p+1),I=_+1+c*(p+1),A=_+1+c*p;d.push(v,y,A),d.push(y,I,A)}this.setIndex(d),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ap=`#define PI 3.141592653589793
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
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
#endif`,i0=`struct PhysicalMaterial {
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
}`,n0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,um=`#define DISTANCE
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
}`,fm=`#define DISTANCE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
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
}`,gm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,ym=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Tm=`#define PHONG
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define TOON
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
}`,Pm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Nm=`uniform float rotation;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:fp,batching_vertex:dp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:bp,color_fragment:Sp,color_pars_fragment:wp,color_pars_vertex:Ep,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Ip,emissivemap_fragment:Lp,emissivemap_pars_fragment:Dp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:kp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Jp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:$p,lights_pars_begin:Zp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Qp,lights_phong_fragment:jp,lights_phong_pars_fragment:t0,lights_physical_fragment:e0,lights_physical_pars_fragment:i0,lights_fragment_begin:n0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:u0,map_particle_fragment:f0,map_particle_pars_fragment:d0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:x0,morphnormal_vertex:y0,morphtarget_pars_vertex:_0,morphtarget_vertex:v0,normal_fragment_begin:M0,normal_fragment_maps:b0,normal_pars_fragment:S0,normal_pars_vertex:w0,normal_vertex:E0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:P0,opaque_fragment:I0,packing:L0,premultiplied_alpha_fragment:D0,project_vertex:U0,dithering_fragment:N0,dithering_pars_fragment:F0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:z0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:$0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:K0,transmission_pars_fragment:Q0,uv_pars_fragment:j0,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:im,background_vert:nm,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:fm,equirect_vert:dm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:xm,meshbasic_frag:ym,meshlambert_vert:_m,meshlambert_frag:vm,meshmatcap_vert:Mm,meshmatcap_frag:bm,meshnormal_vert:Sm,meshnormal_frag:wm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:Am,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Pm,points_vert:Im,points_frag:Lm,shadow_vert:Dm,shadow_frag:Um,sprite_vert:Nm,sprite_frag:Fm},st={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ii={basic:{uniforms:ei([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ei([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new xt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ei([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ei([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ei([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new xt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ei([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ei([st.points,st.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ei([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ei([st.common,st.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ei([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ei([st.sprite,st.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:ei([st.common,st.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:ei([st.lights,st.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Ii.physical={uniforms:ei([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var ta={r:0,b:0,g:0},Ln=new xi,Om=new Gt;function km(s,t,e,i,n,r,a){let o=new xt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1,y=m(_);y===null?p(o,l):y&&y.isColor&&(p(y,1),v=!0);let I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,v){let y=m(v);y&&(y.isCubeTexture||y.mapping===Ka)?(h===void 0&&(h=new Q(new he(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:ws(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ln.copy(v.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Om.makeRotationFromEuler(Ln)),h.material.toneMapped=Wt.getTransfer(y.colorSpace)!==ee,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Q(new tn(2,2),new De({name:"BackgroundMaterial",uniforms:ws(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(ta,rf(s)),i.buffers.color.setClear(ta.r,ta.g,ta.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:x,addToRenderList:g}}function Bm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,a=!1;function o(b,L,H,z,W){let J=!1,X=u(z,H,L);r!==X&&(r=X,c(r.object)),J=d(b,z,H,W),J&&m(b,z,H,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(b,L,H,z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,H){let z=H.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let J=W[L.id];J===void 0&&(J={},W[L.id]=J);let X=J[z];return X===void 0&&(X=f(l()),J[z]=X),X}function f(b){let L=[],H=[],z=[];for(let W=0;W<e;W++)L[W]=0,H[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:b,attributes:{},index:null}}function d(b,L,H,z){let W=r.attributes,J=L.attributes,X=0,it=H.getAttributes();for(let G in it)if(it[G].location>=0){let ft=W[G],wt=J[G];if(wt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(wt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(wt=b.instanceColor)),ft===void 0||ft.attribute!==wt||wt&&ft.data!==wt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function m(b,L,H,z){let W={},J=L.attributes,X=0,it=H.getAttributes();for(let G in it)if(it[G].location>=0){let ft=J[G];ft===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor));let wt={};wt.attribute=ft,ft&&ft.data&&(wt.data=ft.data),W[G]=wt,X++}r.attributes=W,r.attributesNum=X,r.index=z}function x(){let b=r.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){let H=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;H[b]=1,z[b]===0&&(s.enableVertexAttribArray(b),z[b]=1),W[b]!==L&&(s.vertexAttribDivisor(b,L),W[b]=L)}function _(){let b=r.newAttributes,L=r.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==b[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function v(b,L,H,z,W,J,X){X===!0?s.vertexAttribIPointer(b,L,H,W,J):s.vertexAttribPointer(b,L,H,z,W,J)}function y(b,L,H,z){x();let W=z.attributes,J=H.getAttributes(),X=L.defaultAttributeValues;for(let it in J){let G=J[it];if(G.location>=0){let at=W[it];if(at===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),at!==void 0){let ft=at.normalized,wt=at.itemSize,Ht=t.get(at);if(Ht===void 0)continue;let ue=Ht.buffer,Y=Ht.type,nt=Ht.bytesPerElement,Mt=Y===s.INT||Y===s.UNSIGNED_INT||at.gpuType===Hc;if(at.isInterleavedBufferAttribute){let ot=at.data,Rt=ot.stride,Lt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Vt=0;Vt<G.locationSize;Vt++)p(G.location+Vt,ot.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Vt=0;Vt<G.locationSize;Vt++)g(G.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let Vt=0;Vt<G.locationSize;Vt++)v(G.location+Vt,wt/G.locationSize,Y,ft,Rt*nt,(Lt+wt/G.locationSize*Vt)*nt,Mt)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<G.locationSize;ot++)p(G.location+ot,at.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<G.locationSize;ot++)g(G.location+ot);s.bindBuffer(s.ARRAY_BUFFER,ue);for(let ot=0;ot<G.locationSize;ot++)v(G.location+ot,wt/G.locationSize,Y,ft,wt*nt,wt/G.locationSize*ot*nt,Mt)}}else if(X!==void 0){let ft=X[it];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(G.location,ft);break;case 3:s.vertexAttrib3fv(G.location,ft);break;case 4:s.vertexAttrib4fv(G.location,ft);break;default:s.vertexAttrib1fv(G.location,ft)}}}}_()}function I(){R();for(let b in i){let L=i[b];for(let H in L){let z=L[H];for(let W in z)h(z[W].object),delete z[W];delete L[H]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let H in L){let z=L[H];for(let W in z)h(z[W].object),delete z[W];delete L[H]}delete i[b.id]}function P(b){for(let L in i){let H=i[L];if(H[b.id]===void 0)continue;let z=H[b.id];for(let W in z)h(z[W].object),delete z[W];delete H[b.id]}}function R(){w(),a=!0,r!==n&&(r=n,c(r.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function zm(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hm(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(P){return!(P!==Ei&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let R=P===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Qi&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Li&&!R)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:I,maxSamples:A}}function Vm(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Yi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!n||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:i,v=_*4,y=p.clippingState||null;l.value=y,y=h(m,f,v,d);for(let I=0;I!==v;++I)y[I]=e[I];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==x;++v,y+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Gm(s){let t=new WeakMap;function e(a,o){return o===gl?a.mapping=ys:o===xl&&(a.mapping=_s),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===gl||o===xl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Es=class extends Ea{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ds=4,jh=[.125,.215,.35,.446,.526,.582],Fn=20,$o=new Es,tu=new xt,Zo=null,Jo=0,Ko=0,Qo=!1,Un=(1+Math.sqrt(5))/2,os=1/Un,eu=[new E(-Un,os,0),new E(Un,os,0),new E(-os,0,Un),new E(os,0,Un),new E(0,Un,-os),new E(0,Un,os),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Ts=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Jo,Ko),this._renderer.xr.enabled=Qo,t.scissorTest=!1,ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:hi,format:Ei,colorSpace:Ds,depthBuffer:!1},n=iu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return n}_compileMaterial(t){let e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,i,n){let o=new Xe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(tu),h.toneMapping=pn,h.autoClear=!1;let d=new We({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),m=new Q(new he,d),x=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(tu),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;ea(n,_*v,p>2?v:0,v,v),h.setRenderTarget(n),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ys||t.mapping===_s;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new Q(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ea(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$o)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eu[(n-r-1)%eu.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Q(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fn-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Fn;g>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fn}`);let p=[],_=0;for(let P=0;P<Fn;++P){let R=P/x,w=Math.exp(-R*R/2);p.push(w),P===0?_+=w:P<g&&(_+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/_;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-i;let y=this._sizeLods[n],I=3*y*(n>v-ds?n-v+ds:0),A=4*(this._cubeSize-y);ea(e,I,A,3*y,2*y),l.setRenderTarget(e),l.render(u,$o)}};function Wm(s){let t=[],e=[],i=[],n=s,r=s-ds+1+jh.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-ds?l=jh[a-s+ds-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*d),v=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let A=0;A<d;A++){let P=A%3*2/3-1,R=A>2?0:-1,w=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];_.set(w,x*m*A),v.set(f,g*m*A);let b=[A,A,A,A,A,A];y.set(b,p*m*A)}let I=new Ee;I.setAttribute("position",new Pe(_,x)),I.setAttribute("uv",new Pe(v,g)),I.setAttribute("faceIndex",new Pe(y,p)),t.push(I),n>ds&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function iu(s,t,e){let i=new qe(s,t,e);return i.texture.mapping=Ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Xm(s,t,e){let i=new Float32Array(Fn),n=new E(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function nu(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function su(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function qm(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===gl||l===xl,h=l===ys||l===_s;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ts(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new Ts(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Ym(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&rr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function $m(s,t,e,i){let n={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete n[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){let I=_[v+0],A=_[v+1],P=_[v+2];f.push(I,A,A,P,P,I)}}else if(m!==void 0){let _=m.array;x=m.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let I=v+0,A=v+1,P=v+2;f.push(I,A,A,P,P,I)}}else return;let g=new(nf(f)?wa:Sa)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Zm(s,t,e){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),e.update(d,i,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(i,d,r,f*a,m),e.update(d,i,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function u(f,d,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_]*x[_];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Km(s,t,e){let i=new WeakMap,n=new ce;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let w=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,I=1;y>t.maxTextureSize&&(I=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*I*4*u),P=new ba(A,y,I,u);P.type=Li,P.needsUpdate=!0;let R=v*4;for(let b=0;b<u;b++){let L=g[b],H=p[b],z=_[b],W=y*I*4*b;for(let J=0;J<L.count;J++){let X=J*R;d===!0&&(n.fromBufferAttribute(L,J),A[W+X+0]=n.x,A[W+X+1]=n.y,A[W+X+2]=n.z,A[W+X+3]=0),m===!0&&(n.fromBufferAttribute(H,J),A[W+X+4]=n.x,A[W+X+5]=n.y,A[W+X+6]=n.z,A[W+X+7]=0),x===!0&&(n.fromBufferAttribute(z,J),A[W+X+8]=n.x,A[W+X+9]=n.y,A[W+X+10]=n.z,A[W+X+11]=z.itemSize===4?n.w:1)}}f={count:u,texture:P,size:new j(y,I)},i.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Qm(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Aa=class extends ai{constructor(t,e,i,n,r,a,o,l,c,h=ps){if(h!==ps&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ps&&(i=kn),i===void 0&&h===Ms&&(i=vs),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ii,this.minFilter=l!==void 0?l:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},of=new ai,ru=new Aa(1,1),lf=new ba,cf=new Zl,hf=new Ta,au=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function Ns(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=au[n];if(r===void 0&&(r=new Float32Array(n),au[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Be(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ja(s,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function jm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),Be(e,t)}}function eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),Be(e,t)}}function ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),Be(e,t)}}function ng(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;hu.set(i),s.uniformMatrix2fv(this.addr,!1,hu),Be(e,i)}}function sg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;cu.set(i),s.uniformMatrix3fv(this.addr,!1,cu),Be(e,i)}}function rg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;lu.set(i),s.uniformMatrix4fv(this.addr,!1,lu),Be(e,i)}}function ag(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function og(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),Be(e,t)}}function lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),Be(e,t)}}function cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),Be(e,t)}}function hg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),Be(e,t)}}function fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),Be(e,t)}}function dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),Be(e,t)}}function pg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(ru.compareFunction=tf,r=ru):r=of,e.setTexture2D(t||r,n)}function mg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||cf,n)}function gg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||hf,n)}function xg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||lf,n)}function yg(s){switch(s){case 5126:return jm;case 35664:return tg;case 35665:return eg;case 35666:return ig;case 35674:return ng;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return fg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return xg}}function _g(s,t){s.uniform1fv(this.addr,t)}function vg(s,t){let e=Ns(t,this.size,2);s.uniform2fv(this.addr,e)}function Mg(s,t){let e=Ns(t,this.size,3);s.uniform3fv(this.addr,e)}function bg(s,t){let e=Ns(t,this.size,4);s.uniform4fv(this.addr,e)}function Sg(s,t){let e=Ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wg(s,t){let e=Ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Eg(s,t){let e=Ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tg(s,t){s.uniform1iv(this.addr,t)}function Ag(s,t){s.uniform2iv(this.addr,t)}function Rg(s,t){s.uniform3iv(this.addr,t)}function Cg(s,t){s.uniform4iv(this.addr,t)}function Pg(s,t){s.uniform1uiv(this.addr,t)}function Ig(s,t){s.uniform2uiv(this.addr,t)}function Lg(s,t){s.uniform3uiv(this.addr,t)}function Dg(s,t){s.uniform4uiv(this.addr,t)}function Ug(s,t,e){let i=this.cache,n=t.length,r=ja(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||of,r[a])}function Ng(s,t,e){let i=this.cache,n=t.length,r=ja(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||cf,r[a])}function Fg(s,t,e){let i=this.cache,n=t.length,r=ja(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||hf,r[a])}function Og(s,t,e){let i=this.cache,n=t.length,r=ja(e,n);ke(i,r)||(s.uniform1iv(this.addr,r),Be(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||lf,r[a])}function kg(s){switch(s){case 5126:return _g;case 35664:return vg;case 35665:return Mg;case 35666:return bg;case 35674:return Sg;case 35675:return wg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}var Ql=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}},jl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},jo=/(\w+)(\])?(\[|\.)?/g;function uu(s,t){s.seq.push(t),s.map[t.id]=t}function Bg(s,t,e){let i=s.name,n=i.length;for(jo.lastIndex=0;;){let r=jo.exec(i),a=jo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){uu(e,c===void 0?new Ql(o,s,t):new jl(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new tc(o),uu(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);Bg(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function fu(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var zg=37297,Hg=0;function Vg(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var du=new Ft;function Gg(s){Wt._getMatrix(du,Wt.workingColorSpace,s);let t=`mat3( ${du.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Qa:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Vg(s.getShaderSource(t),a)}else return n}function Wg(s,t){let e=Gg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(s,t){let e;switch(t){case Fc:e="Linear";break;case Oc:e="Reinhard";break;case kc:e="Cineon";break;case wr:e="ACESFilmic";break;case Bc:e="AgX";break;case zc:e="Neutral";break;case ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ia=new E;function qg(){Wt.getLuminanceCoefficients(ia);let s=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function $g(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zg(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ar(s){return s!==""}function mu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(s){return s.replace(Jg,Qg)}var Kg=new Map;function Qg(s,t){let e=kt[t];if(e===void 0){let i=Kg.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(s){return s.replace(jg,tx)}function tx(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function yu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function ex(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function ix(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case _s:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function sx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vu:t="ENVMAP_BLENDING_MULTIPLY";break;case ad:t="ENVMAP_BLENDING_MIX";break;case od:t="ENVMAP_BLENDING_ADD";break}return t}function rx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ax(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ex(e),c=ix(e),h=nx(e),u=sx(e),f=rx(e),d=Yg(e),m=$g(r),x=n.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(g=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?kt.tonemapping_pars_fragment:"",e.toneMapping!==pn?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),a=ec(a),a=mu(a,e),a=gu(a,e),o=ec(o),o=mu(o,e),o=gu(o,e),a=xu(a),o=xu(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+g+a,y=_+p+o,I=fu(n,n.VERTEX_SHADER,v),A=fu(n,n.FRAGMENT_SHADER,y);n.attachShader(x,I),n.attachShader(x,A),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function P(L){if(s.debug.checkShaderErrors){let H=n.getProgramInfoLog(x).trim(),z=n.getShaderInfoLog(I).trim(),W=n.getShaderInfoLog(A).trim(),J=!0,X=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,I,A);else{let it=pu(n,I,"vertex"),G=pu(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+it+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||W==="")&&(X=!1);X&&(L.diagnostics={runnable:J,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:W,prefix:p}})}n.deleteShader(I),n.deleteShader(A),R=new gs(n,x),w=Zg(n,x)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(x,zg)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var ox=0,ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new nc(t),e.set(t,i)),i}},nc=class{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}};function lx(s,t,e,i,n,r,a){let o=new pr,l=new ic,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,b,L,H,z){let W=H.fog,J=z.geometry,X=w.isMeshStandardMaterial?H.environment:null,it=(w.isMeshStandardMaterial?e:t).get(w.envMap||X),G=it&&it.mapping===Ka?it.image.height:null,at=m[w.type];w.precision!==null&&(d=n.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let ft=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,wt=ft!==void 0?ft.length:0,Ht=0;J.morphAttributes.position!==void 0&&(Ht=1),J.morphAttributes.normal!==void 0&&(Ht=2),J.morphAttributes.color!==void 0&&(Ht=3);let ue,Y,nt,Mt;if(at){let re=Ii[at];ue=re.vertexShader,Y=re.fragmentShader}else ue=w.vertexShader,Y=w.fragmentShader,l.update(w),nt=l.getVertexShaderID(w),Mt=l.getFragmentShaderID(w);let ot=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,Vt=z.isBatchedMesh===!0,we=!!w.map,Zt=!!w.matcap,Le=!!it,F=!!w.aoMap,fi=!!w.lightMap,qt=!!w.bumpMap,Yt=!!w.normalMap,Tt=!!w.displacementMap,xe=!!w.emissiveMap,Et=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,O=w.clearcoat>0,$=w.dispersion>0,K=w.iridescence>0,q=w.sheen>0,bt=w.transmission>0,lt=M&&!!w.anisotropyMap,dt=O&&!!w.clearcoatMap,Jt=O&&!!w.clearcoatNormalMap,tt=O&&!!w.clearcoatRoughnessMap,pt=K&&!!w.iridescenceMap,At=K&&!!w.iridescenceThicknessMap,Ct=q&&!!w.sheenColorMap,mt=q&&!!w.sheenRoughnessMap,$t=!!w.specularMap,Ot=!!w.specularColorMap,pe=!!w.specularIntensityMap,D=bt&&!!w.transmissionMap,rt=bt&&!!w.thicknessMap,V=!!w.gradientMap,Z=!!w.alphaMap,ut=w.alphaTest>0,ct=!!w.alphaHash,Ut=!!w.extensions,Ce=pn;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ce=s.toneMapping);let $e={shaderID:at,shaderType:w.type,shaderName:w.name,vertexShader:ue,fragmentShader:Y,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:Mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ds,alphaToCoverage:!!w.alphaToCoverage,map:we,matcap:Zt,envMap:Le,envMapMode:Le&&it.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:fi,bumpMap:qt,normalMap:Yt,displacementMap:f&&Tt,emissiveMap:xe,normalMapObjectSpace:Yt&&w.normalMapType===fd,normalMapTangentSpace:Yt&&w.normalMapType===ju,metalnessMap:Et,roughnessMap:C,anisotropy:M,anisotropyMap:lt,clearcoat:O,clearcoatMap:dt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:tt,dispersion:$,iridescence:K,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:q,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:$t,specularColorMap:Ot,specularIntensityMap:pe,transmission:bt,transmissionMap:D,thicknessMap:rt,gradientMap:V,opaque:w.transparent===!1&&w.blending===dn&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:ct,combine:w.combine,mapUv:we&&x(w.map.channel),aoMapUv:F&&x(w.aoMap.channel),lightMapUv:fi&&x(w.lightMap.channel),bumpMapUv:qt&&x(w.bumpMap.channel),normalMapUv:Yt&&x(w.normalMap.channel),displacementMapUv:Tt&&x(w.displacementMap.channel),emissiveMapUv:xe&&x(w.emissiveMap.channel),metalnessMapUv:Et&&x(w.metalnessMap.channel),roughnessMapUv:C&&x(w.roughnessMap.channel),anisotropyMapUv:lt&&x(w.anisotropyMap.channel),clearcoatMapUv:dt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(w.sheenRoughnessMap.channel),specularMapUv:$t&&x(w.specularMap.channel),specularColorMapUv:Ot&&x(w.specularColorMap.channel),specularIntensityMapUv:pe&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:rt&&x(w.thicknessMap.channel),alphaMapUv:Z&&x(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Yt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&(we||Z),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ht,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:we&&w.map.isVideoTexture===!0&&Wt.getTransfer(w.map.colorSpace)===ee,decodeVideoTextureEmissive:xe&&w.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(w.emissiveMap.colorSpace)===ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mi,flipSided:w.side===Ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ut&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&w.extensions.multiDraw===!0||Vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(_(b,w),v(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function v(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function y(w){let b=m[w.type],L;if(b){let H=Ii[b];L=Oi.clone(H.uniforms)}else L=w.uniforms;return L}function I(w,b){let L;for(let H=0,z=h.length;H<z;H++){let W=h[H];if(W.cacheKey===b){L=W,++L.usedTimes;break}}return L===void 0&&(L=new ax(s,b,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:R}}function cx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function hx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _u(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vu(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,f,d,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,f,d,m,x,g){let p=a(u,f,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,m,x,g){let p=a(u,f,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||hx),i.length>1&&i.sort(f||_u),n.length>1&&n.sort(f||_u)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function ux(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new vu,s.set(i,[a])):n>=r.length?(a=new vu,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function fx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new xt};break;case"SpotLight":e={position:new E,direction:new E,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function dx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var px=0;function mx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gx(s){let t=new fx,e=dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new E);let n=new E,r=new Gt,a=new Gt;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,v=0,y=0,I=0,A=0,P=0;c.sort(mx);for(let w=0,b=c.length;w<b;w++){let L=c[w],H=L.color,z=L.intensity,W=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*z,u+=H.g*z,f+=H.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);P++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,G=e.get(L);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=L.shadow.matrix,_++}i.directional[d]=X,d++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(H).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[x]=X;let it=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,it.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=it.matrix,L.castShadow){let G=e.get(L);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=J,y++}x++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(H).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=X,g++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let it=L.shadow,G=e.get(L);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,G.shadowCameraNear=it.camera.near,G.shadowCameraFar=it.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=L.shadow.matrix,v++}i.point[m]=X,m++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[p]=X,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let R=i.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==I||R.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,R.directionalLength=d,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=I,R.numLightProbes=P,i.version=px++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let v=c[p];if(v.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let y=i.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function Mu(s){let t=new gx(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function xx(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Mu(s),t.set(n,[o])):r>=a.length?(o=new Mu(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var sc=class extends Fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},rc=class extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_x=`uniform sampler2D shadow_pass;
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
}`;function vx(s,t,e){let i=new mr,n=new j,r=new j,a=new ce,o=new sc({depthPacking:ud}),l=new rc,c={},h=e.maxTextureSize,u={[Ui]:Ke,[Ke]:Ui,[mi]:mi},f=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:yx,fragmentShader:_x}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ee;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Q(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let p=this.type;this.render=function(A,P,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let w=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=p!==qi&&this.type===qi,W=p===qi&&this.type!==qi;for(let J=0,X=A.length;J<X;J++){let it=A[J],G=it.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);let at=G.getFrameExtents();if(n.multiply(at),r.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/at.x),n.x=r.x*at.x,G.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/at.y),n.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||z===!0||W===!0){let wt=this.type!==qi?{minFilter:ii,magFilter:ii}:{};G.map!==null&&G.map.dispose(),G.map=new qe(n.x,n.y,wt),G.map.texture.name=it.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let ft=G.getViewportCount();for(let wt=0;wt<ft;wt++){let Ht=G.getViewport(wt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),H.viewport(a),G.updateMatrices(it,wt),i=G.getFrustum(),y(P,R,G.camera,it,this.type)}G.isPointLightShadow!==!0&&this.type===qi&&_(G,R),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,b,L)};function _(A,P){let R=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qe(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,R,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,R,d,x,null)}function v(A,P,R,w){let b=null,L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let H=b.uuid,z=P.uuid,W=c[H];W===void 0&&(W={},c[H]=W);let J=W[z];J===void 0&&(J=b.clone(),W[z]=J,P.addEventListener("dispose",I)),b=J}if(b.visible=P.visible,b.wireframe=P.wireframe,w===qi?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:u[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=s.properties.get(b);H.light=R}return b}function y(A,P,R,w,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===qi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let z=t.update(A),W=A.material;if(Array.isArray(W)){let J=z.groups;for(let X=0,it=J.length;X<it;X++){let G=J[X],at=W[G.materialIndex];if(at&&at.visible){let ft=v(A,at,w,b);A.onBeforeShadow(s,A,P,R,z,ft,G),s.renderBufferDirect(R,null,z,ft,A,G),A.onAfterShadow(s,A,P,R,z,ft,G)}}}else if(W.visible){let J=v(A,W,w,b);A.onBeforeShadow(s,A,P,R,z,J,null),s.renderBufferDirect(R,null,z,J,A,null),A.onAfterShadow(s,A,P,R,z,J,null)}}let H=A.children;for(let z=0,W=H.length;z<W;z++)y(H[z],P,R,w,b)}function I(A){A.target.removeEventListener("dispose",I);for(let R in c){let w=c[R],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var Mx={[cl]:hl,[ul]:pl,[fl]:ml,[xs]:dl,[hl]:cl,[pl]:ul,[ml]:fl,[dl]:xs};function bx(s,t){function e(){let D=!1,rt=new ce,V=null,Z=new ce(0,0,0,0);return{setMask:function(ut){V!==ut&&!D&&(s.colorMask(ut,ut,ut,ut),V=ut)},setLocked:function(ut){D=ut},setClear:function(ut,ct,Ut,Ce,$e){$e===!0&&(ut*=Ce,ct*=Ce,Ut*=Ce),rt.set(ut,ct,Ut,Ce),Z.equals(rt)===!1&&(s.clearColor(ut,ct,Ut,Ce),Z.copy(rt))},reset:function(){D=!1,V=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,rt=!1,V=null,Z=null,ut=null;return{setReversed:function(ct){if(rt!==ct){let Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let Ce=ut;ut=null,this.setClear(Ce)}rt=ct},getReversed:function(){return rt},setTest:function(ct){ct?ot(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(ct){V!==ct&&!D&&(s.depthMask(ct),V=ct)},setFunc:function(ct){if(rt&&(ct=Mx[ct]),Z!==ct){switch(ct){case cl:s.depthFunc(s.NEVER);break;case hl:s.depthFunc(s.ALWAYS);break;case ul:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case fl:s.depthFunc(s.EQUAL);break;case dl:s.depthFunc(s.GEQUAL);break;case pl:s.depthFunc(s.GREATER);break;case ml:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ut!==ct&&(rt&&(ct=1-ct),s.clearDepth(ct),ut=ct)},reset:function(){D=!1,V=null,Z=null,ut=null,rt=!1}}}function n(){let D=!1,rt=null,V=null,Z=null,ut=null,ct=null,Ut=null,Ce=null,$e=null;return{setTest:function(re){D||(re?ot(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(re){rt!==re&&!D&&(s.stencilMask(re),rt=re)},setFunc:function(re,_i,Bi){(V!==re||Z!==_i||ut!==Bi)&&(s.stencilFunc(re,_i,Bi),V=re,Z=_i,ut=Bi)},setOp:function(re,_i,Bi){(ct!==re||Ut!==_i||Ce!==Bi)&&(s.stencilOp(re,_i,Bi),ct=re,Ut=_i,Ce=Bi)},setLocked:function(re){D=re},setClear:function(re){$e!==re&&(s.clearStencil(re),$e=re)},reset:function(){D=!1,rt=null,V=null,Z=null,ut=null,ct=null,Ut=null,Ce=null,$e=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,_=null,v=null,y=null,I=null,A=null,P=new xt(0,0,0),R=0,w=!1,b=null,L=null,H=null,z=null,W=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,it=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=it>=2);let at=null,ft={},wt=s.getParameter(s.SCISSOR_BOX),Ht=s.getParameter(s.VIEWPORT),ue=new ce().fromArray(wt),Y=new ce().fromArray(Ht);function nt(D,rt,V,Z){let ut=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<V;Ut++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(rt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ct}let Mt={};Mt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(s.DEPTH_TEST),a.setFunc(xs),qt(!1),Yt(wh),ot(s.CULL_FACE),F(Di);function ot(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Lt(D,rt){return u[D]!==rt?(s.bindFramebuffer(D,rt),u[D]=rt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=rt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function Vt(D,rt){let V=d,Z=!1;if(D){V=f.get(rt),V===void 0&&(V=[],f.set(rt,V));let ut=D.textures;if(V.length!==ut.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Ut=ut.length;ct<Ut;ct++)V[ct]=s.COLOR_ATTACHMENT0+ct;V.length=ut.length,Z=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,Z=!0);Z&&s.drawBuffers(V)}function we(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let Zt={[Nn]:s.FUNC_ADD,[Gf]:s.FUNC_SUBTRACT,[Wf]:s.FUNC_REVERSE_SUBTRACT};Zt[Xf]=s.MIN,Zt[qf]=s.MAX;let Le={[Yf]:s.ZERO,[$f]:s.ONE,[Zf]:s.SRC_COLOR,[ol]:s.SRC_ALPHA,[ed]:s.SRC_ALPHA_SATURATE,[jf]:s.DST_COLOR,[Kf]:s.DST_ALPHA,[Jf]:s.ONE_MINUS_SRC_COLOR,[ll]:s.ONE_MINUS_SRC_ALPHA,[td]:s.ONE_MINUS_DST_COLOR,[Qf]:s.ONE_MINUS_DST_ALPHA,[id]:s.CONSTANT_COLOR,[nd]:s.ONE_MINUS_CONSTANT_COLOR,[sd]:s.CONSTANT_ALPHA,[rd]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,rt,V,Z,ut,ct,Ut,Ce,$e,re){if(D===Di){x===!0&&(Rt(s.BLEND),x=!1);return}if(x===!1&&(ot(s.BLEND),x=!0),D!==Vf){if(D!==g||re!==w){if((p!==Nn||y!==Nn)&&(s.blendEquation(s.FUNC_ADD),p=Nn,y=Nn),re)switch(D){case dn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ni:s.blendFunc(s.ONE,s.ONE);break;case Eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Th:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case dn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ni:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Th:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,v=null,I=null,A=null,P.set(0,0,0),R=0,g=D,w=re}return}ut=ut||rt,ct=ct||V,Ut=Ut||Z,(rt!==p||ut!==y)&&(s.blendEquationSeparate(Zt[rt],Zt[ut]),p=rt,y=ut),(V!==_||Z!==v||ct!==I||Ut!==A)&&(s.blendFuncSeparate(Le[V],Le[Z],Le[ct],Le[Ut]),_=V,v=Z,I=ct,A=Ut),(Ce.equals(P)===!1||$e!==R)&&(s.blendColor(Ce.r,Ce.g,Ce.b,$e),P.copy(Ce),R=$e),g=D,w=!1}function fi(D,rt){D.side===mi?Rt(s.CULL_FACE):ot(s.CULL_FACE);let V=D.side===Ke;rt&&(V=!V),qt(V),D.blending===dn&&D.transparent===!1?F(Di):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),xe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function Yt(D){D!==zf?(ot(s.CULL_FACE),D!==L&&(D===wh?s.cullFace(s.BACK):D===Hf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),L=D}function Tt(D){D!==H&&(X&&s.lineWidth(D),H=D)}function xe(D,rt,V){D?(ot(s.POLYGON_OFFSET_FILL),(z!==rt||W!==V)&&(s.polygonOffset(rt,V),z=rt,W=V)):Rt(s.POLYGON_OFFSET_FILL)}function Et(D){D?ot(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+J-1),at!==D&&(s.activeTexture(D),at=D)}function M(D,rt,V){V===void 0&&(at===null?V=s.TEXTURE0+J-1:V=at);let Z=ft[V];Z===void 0&&(Z={type:void 0,texture:void 0},ft[V]=Z),(Z.type!==D||Z.texture!==rt)&&(at!==V&&(s.activeTexture(V),at=V),s.bindTexture(D,rt||Mt[D]),Z.type=D,Z.texture=rt)}function O(){let D=ft[at];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){ue.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function mt(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function $t(D,rt){let V=c.get(rt);V===void 0&&(V=new WeakMap,c.set(rt,V));let Z=V.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(rt,D.name),V.set(D,Z))}function Ot(D,rt){let Z=c.get(rt).get(D);l.get(rt)!==Z&&(s.uniformBlockBinding(rt,Z,D.__bindingPointIndex),l.set(rt,Z))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},at=null,ft={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,_=null,v=null,y=null,I=null,A=null,P=new xt(0,0,0),R=0,w=!1,b=null,L=null,H=null,z=null,W=null,ue.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Rt,bindFramebuffer:Lt,drawBuffers:Vt,useProgram:we,setBlending:F,setMaterial:fi,setFlipSided:qt,setCullFace:Yt,setLineWidth:Tt,setPolygonOffset:xe,setScissorTest:Et,activeTexture:C,bindTexture:M,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:pt,texImage3D:At,updateUBOMapping:$t,uniformBlockBinding:Ot,texStorage2D:Jt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:bt,compressedTexSubImage2D:lt,compressedTexSubImage3D:dt,scissor:Ct,viewport:mt,reset:pe}}function bu(s,t,e,i){let n=Sx(i);switch(e){case Yu:return s*t;case Zu:return s*t;case Ju:return s*t*2;case Wc:return s*t/n.components*n.byteLength;case Xc:return s*t/n.components*n.byteLength;case Ku:return s*t*2/n.components*n.byteLength;case qc:return s*t*2/n.components*n.byteLength;case $u:return s*t*3/n.components*n.byteLength;case Ei:return s*t*4/n.components*n.byteLength;case Yc:return s*t*4/n.components*n.byteLength;case da:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vl:case bl:return Math.max(s,16)*Math.max(t,8)/4;case _l:case Ml:return Math.max(s,8)*Math.max(t,8)/2;case Sl:case wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Il:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case xa:case zl:case Hl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Qu:case Vl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Gl:case Wl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sx(s){switch(s){case Qi:case Wu:return{byteLength:1,components:1};case dr:case Xu:case hi:return{byteLength:2,components:1};case Vc:case Gc:return{byteLength:2,components:4};case kn:case Hc:case Li:return{byteLength:4,components:1};case qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function wx(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return d?new OffscreenCanvas(C,M):va("canvas")}function x(C,M,O){let $=1,K=Et(C);if((K.width>O||K.height>O)&&($=O/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor($*K.width),bt=Math.floor($*K.height);u===void 0&&(u=m(q,bt));let lt=M?m(q,bt):u;return lt.width=q,lt.height=bt,lt.getContext("2d").drawImage(C,0,0,q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+bt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,M,O,$,K=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),M===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8)),M===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),M===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),M===s.RGBA){let bt=K?Qa:Wt.getTransfer($);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=bt===ee?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(C,M){let O;return C?M===null||M===kn||M===vs?O=s.DEPTH24_STENCIL8:M===Li?O=s.DEPTH32F_STENCIL8:M===dr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===kn||M===vs?O=s.DEPTH_COMPONENT24:M===Li?O=s.DEPTH_COMPONENT32F:M===dr&&(O=s.DEPTH_COMPONENT16),O}function I(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ii&&C.minFilter!==gi?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&h.delete(M)}function P(C){let M=C.target;M.removeEventListener("dispose",P),b(M)}function R(C){let M=i.get(C);if(M.__webglInit===void 0)return;let O=C.source,$=f.get(O);if($){let K=$[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(C),Object.keys($).length===0&&f.delete(O)}i.remove(C)}function w(C){let M=i.get(C);s.deleteTexture(M.__webglTexture);let O=C.source,$=f.get(O);delete $[M.__cacheKey],a.memory.textures--}function b(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let K=0;K<M.__webglFramebuffer[$].length;K++)s.deleteFramebuffer(M.__webglFramebuffer[$][K]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let O=C.textures;for(let $=0,K=O.length;$<K;$++){let q=i.get(O[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[$])}i.remove(C)}let L=0;function H(){L=0}function z(){let C=L;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),L+=1,C}function W(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function J(C,M){let O=i.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){let $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,C,M);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function X(C,M){let O=i.get(C);if(C.version>0&&O.__version!==C.version){Y(O,C,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function it(C,M){let O=i.get(C);if(C.version>0&&O.__version!==C.version){Y(O,C,M);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function G(C,M){let O=i.get(C);if(C.version>0&&O.__version!==C.version){nt(O,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}let at={[fr]:s.REPEAT,[On]:s.CLAMP_TO_EDGE,[yl]:s.MIRRORED_REPEAT},ft={[ii]:s.NEAREST,[cd]:s.NEAREST_MIPMAP_NEAREST,[Fr]:s.NEAREST_MIPMAP_LINEAR,[gi]:s.LINEAR,[To]:s.LINEAR_MIPMAP_NEAREST,[$i]:s.LINEAR_MIPMAP_LINEAR},wt={[dd]:s.NEVER,[_d]:s.ALWAYS,[pd]:s.LESS,[tf]:s.LEQUAL,[md]:s.EQUAL,[yd]:s.GEQUAL,[gd]:s.GREATER,[xd]:s.NOTEQUAL};function Ht(C,M){if(M.type===Li&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===gi||M.magFilter===To||M.magFilter===Fr||M.magFilter===$i||M.minFilter===gi||M.minFilter===To||M.minFilter===Fr||M.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,at[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,at[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,at[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ft[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ft[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,wt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ii||M.minFilter!==Fr&&M.minFilter!==$i||M.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ue(C,M){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let $=M.source,K=f.get($);K===void 0&&(K={},f.set($,K));let q=W(M);if(q!==C.__cacheKey){K[q]===void 0&&(K[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[q].usedTimes++;let bt=K[C.__cacheKey];bt!==void 0&&(K[C.__cacheKey].usedTimes--,bt.usedTimes===0&&w(M)),C.__cacheKey=q,C.__webglTexture=K[q].texture}return O}function Y(C,M,O){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);let K=ue(C,M),q=M.source;e.bindTexture($,C.__webglTexture,s.TEXTURE0+O);let bt=i.get(q);if(q.version!==bt.__version||K===!0){e.activeTexture(s.TEXTURE0+O);let lt=Wt.getPrimaries(Wt.workingColorSpace),dt=M.colorSpace===un?null:Wt.getPrimaries(M.colorSpace),Jt=M.colorSpace===un||lt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let tt=x(M.image,!1,n.maxTextureSize);tt=xe(M,tt);let pt=r.convert(M.format,M.colorSpace),At=r.convert(M.type),Ct=v(M.internalFormat,pt,At,M.colorSpace,M.isVideoTexture);Ht($,M);let mt,$t=M.mipmaps,Ot=M.isVideoTexture!==!0,pe=bt.__version===void 0||K===!0,D=q.dataReady,rt=I(M,tt);if(M.isDepthTexture)Ct=y(M.format===Ms,M.type),pe&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,At,null));else if(M.isDataTexture)if($t.length>0){Ot&&pe&&e.texStorage2D(s.TEXTURE_2D,rt,Ct,$t[0].width,$t[0].height);for(let V=0,Z=$t.length;V<Z;V++)mt=$t[V],Ot?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(s.TEXTURE_2D,V,Ct,mt.width,mt.height,0,pt,At,mt.data);M.generateMipmaps=!1}else Ot?(pe&&e.texStorage2D(s.TEXTURE_2D,rt,Ct,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,At,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,pt,At,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ot&&pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Ct,$t[0].width,$t[0].height,tt.depth);for(let V=0,Z=$t.length;V<Z;V++)if(mt=$t[V],M.format!==Ei)if(pt!==null)if(Ot){if(D)if(M.layerUpdates.size>0){let ut=bu(mt.width,mt.height,M.format,M.type);for(let ct of M.layerUpdates){let Ut=mt.data.subarray(ct*ut/mt.data.BYTES_PER_ELEMENT,(ct+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,ct,mt.width,mt.height,1,pt,Ut)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Ct,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,tt.depth,pt,At,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,Ct,mt.width,mt.height,tt.depth,0,pt,At,mt.data)}else{Ot&&pe&&e.texStorage2D(s.TEXTURE_2D,rt,Ct,$t[0].width,$t[0].height);for(let V=0,Z=$t.length;V<Z;V++)mt=$t[V],M.format!==Ei?pt!==null?Ot?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(s.TEXTURE_2D,V,Ct,mt.width,mt.height,0,pt,At,mt.data)}else if(M.isDataArrayTexture)if(Ot){if(pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Ct,tt.width,tt.height,tt.depth),D)if(M.layerUpdates.size>0){let V=bu(tt.width,tt.height,M.format,M.type);for(let Z of M.layerUpdates){let ut=tt.data.subarray(Z*V/tt.data.BYTES_PER_ELEMENT,(Z+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,pt,At,ut)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,At,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,pt,At,tt.data);else if(M.isData3DTexture)Ot?(pe&&e.texStorage3D(s.TEXTURE_3D,rt,Ct,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,At,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,pt,At,tt.data);else if(M.isFramebufferTexture){if(pe)if(Ot)e.texStorage2D(s.TEXTURE_2D,rt,Ct,tt.width,tt.height);else{let V=tt.width,Z=tt.height;for(let ut=0;ut<rt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Ct,V,Z,0,pt,At,null),V>>=1,Z>>=1}}else if($t.length>0){if(Ot&&pe){let V=Et($t[0]);e.texStorage2D(s.TEXTURE_2D,rt,Ct,V.width,V.height)}for(let V=0,Z=$t.length;V<Z;V++)mt=$t[V],Ot?D&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,pt,At,mt):e.texImage2D(s.TEXTURE_2D,V,Ct,pt,At,mt);M.generateMipmaps=!1}else if(Ot){if(pe){let V=Et(tt);e.texStorage2D(s.TEXTURE_2D,rt,Ct,V.width,V.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,At,tt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,pt,At,tt);g(M)&&p($),bt.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function nt(C,M,O){if(M.image.length!==6)return;let $=ue(C,M),K=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);let q=i.get(K);if(K.version!==q.__version||$===!0){e.activeTexture(s.TEXTURE0+O);let bt=Wt.getPrimaries(Wt.workingColorSpace),lt=M.colorSpace===un?null:Wt.getPrimaries(M.colorSpace),dt=M.colorSpace===un||bt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!Jt&&!tt?pt[Z]=x(M.image[Z],!0,n.maxCubemapSize):pt[Z]=tt?M.image[Z].image:M.image[Z],pt[Z]=xe(M,pt[Z]);let At=pt[0],Ct=r.convert(M.format,M.colorSpace),mt=r.convert(M.type),$t=v(M.internalFormat,Ct,mt,M.colorSpace),Ot=M.isVideoTexture!==!0,pe=q.__version===void 0||$===!0,D=K.dataReady,rt=I(M,At);Ht(s.TEXTURE_CUBE_MAP,M);let V;if(Jt){Ot&&pe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,$t,At.width,At.height);for(let Z=0;Z<6;Z++){V=pt[Z].mipmaps;for(let ut=0;ut<V.length;ut++){let ct=V[ut];M.format!==Ei?Ct!==null?Ot?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,$t,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,ct.width,ct.height,Ct,mt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,$t,ct.width,ct.height,0,Ct,mt,ct.data)}}}else{if(V=M.mipmaps,Ot&&pe){V.length>0&&rt++;let Z=Et(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,$t,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,Ct,mt,pt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,pt[Z].width,pt[Z].height,0,Ct,mt,pt[Z].data);for(let ut=0;ut<V.length;ut++){let Ut=V[ut].image[Z].image;Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ut.width,Ut.height,Ct,mt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,$t,Ut.width,Ut.height,0,Ct,mt,Ut.data)}}else{Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct,mt,pt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,Ct,mt,pt[Z]);for(let ut=0;ut<V.length;ut++){let ct=V[ut];Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ct,mt,ct.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,$t,Ct,mt,ct.image[Z])}}}g(M)&&p(s.TEXTURE_CUBE_MAP),q.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Mt(C,M,O,$,K,q){let bt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),dt=v(O.internalFormat,bt,lt,O.colorSpace),Jt=i.get(M),tt=i.get(O);if(tt.__renderTarget=M,!Jt.__hasExternalTextures){let pt=Math.max(1,M.width>>q),At=Math.max(1,M.height>>q);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,q,dt,pt,At,M.depth,0,bt,lt,null):e.texImage2D(K,q,dt,pt,At,0,bt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Yt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,tt.__webglTexture,0,qt(M)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,K,tt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(C,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){let $=M.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=y(M.stencilBuffer,K),bt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=qt(M);Yt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,q,M.width,M.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,C)}else{let $=M.textures;for(let K=0;K<$.length;K++){let q=$[K],bt=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),dt=v(q.internalFormat,bt,lt,q.colorSpace),Jt=qt(M);O&&Yt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,dt,M.width,M.height):Yt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,dt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,dt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);let K=$.__webglTexture,q=qt(M);if(M.depthTexture.format===ps)Yt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===Ms)Yt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Lt(C){let M=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(M.__webglFramebuffer,C)}else if(O){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),ot(M.__webglDepthbuffer[$],C,!1);else{let K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ot(M.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(C,M,O){let $=i.get(C);M!==void 0&&Mt($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Lt(C)}function we(C){let M=C.texture,O=i.get(C),$=i.get(M);C.addEventListener("dispose",P);let K=C.textures,q=C.isWebGLCubeRenderTarget===!0,bt=K.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let dt=0;dt<M.mipmaps.length;dt++)O.__webglFramebuffer[lt][dt]=s.createFramebuffer()}else O.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)O.__webglFramebuffer[lt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(bt)for(let lt=0,dt=K.length;lt<dt;lt++){let Jt=i.get(K[lt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Yt(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<K.length;lt++){let dt=K[lt];O.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);let Jt=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),pt=v(dt.internalFormat,Jt,tt,dt.colorSpace,C.isXRRenderTarget===!0),At=qt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,At,pt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Mt(O.__webglFramebuffer[lt][dt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else Mt(O.__webglFramebuffer[lt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,dt=K.length;lt<dt;lt++){let Jt=K[lt],tt=i.get(Jt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Ht(s.TEXTURE_2D,Jt),Mt(O.__webglFramebuffer,C,Jt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),g(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Ht(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)Mt(O.__webglFramebuffer[dt],C,M,s.COLOR_ATTACHMENT0,lt,dt);else Mt(O.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,lt,0);g(M)&&p(lt),e.unbindTexture()}C.depthBuffer&&Lt(C)}function Zt(C){let M=C.textures;for(let O=0,$=M.length;O<$;O++){let K=M[O];if(g(K)){let q=_(C),bt=i.get(K).__webglTexture;e.bindTexture(q,bt),p(q),e.unbindTexture()}}}let Le=[],F=[];function fi(C){if(C.samples>0){if(Yt(C)===!1){let M=C.textures,O=C.width,$=C.height,K=s.COLOR_BUFFER_BIT,q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=i.get(C),lt=M.length>1;if(lt)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[dt]);let Jt=i.get(M[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,K,s.NEAREST),l===!0&&(Le.length=0,F.length=0,Le.push(s.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Le.push(q),F.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[dt]);let Jt=i.get(M[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function qt(C){return Math.min(n.maxSamples,C.samples)}function Yt(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function xe(C,M){let O=C.colorSpace,$=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ds&&O!==un&&(Wt.getTransfer(O)===ee?($!==Ei||K!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=G,this.rebindTextures=Vt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=fi,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Yt}function Ex(s,t){function e(i,n=un){let r,a=Wt.getTransfer(n);if(i===Qi)return s.UNSIGNED_BYTE;if(i===Vc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===qu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Wu)return s.BYTE;if(i===Xu)return s.SHORT;if(i===dr)return s.UNSIGNED_SHORT;if(i===Hc)return s.INT;if(i===kn)return s.UNSIGNED_INT;if(i===Li)return s.FLOAT;if(i===hi)return s.HALF_FLOAT;if(i===Yu)return s.ALPHA;if(i===$u)return s.RGB;if(i===Ei)return s.RGBA;if(i===Zu)return s.LUMINANCE;if(i===Ju)return s.LUMINANCE_ALPHA;if(i===ps)return s.DEPTH_COMPONENT;if(i===Ms)return s.DEPTH_STENCIL;if(i===Wc)return s.RED;if(i===Xc)return s.RED_INTEGER;if(i===Ku)return s.RG;if(i===qc)return s.RG_INTEGER;if(i===Yc)return s.RGBA_INTEGER;if(i===da||i===pa||i===ma||i===ga)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===vl||i===Ml||i===bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===wl||i===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sl||i===wl)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===El)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===Ul||i===Nl||i===Fl||i===Ol||i===kl||i===Bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Tl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ol)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bl)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xa||i===zl||i===Hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xa)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qu||i===Vl||i===Gl||i===Wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var ac=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},zt=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tx={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`,oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ai,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new De({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends mn{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=new oc,g=e.getContextAttributes(),p=null,_=null,v=[],y=[],I=new j,A=null,P=new Xe;P.viewport=new ce;let R=new Xe;R.viewport=new ce;let w=[P,R],b=new ac,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=v[Y];return nt===void 0&&(nt=new cr,v[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=v[Y];return nt===void 0&&(nt=new cr,v[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=v[Y];return nt===void 0&&(nt=new cr,v[Y]=nt),nt.getHandSpace()};function z(Y){let nt=y.indexOf(Y.inputSource);if(nt===-1)return;let Mt=v[nt];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",J);for(let Y=0;Y<v.length;Y++){let nt=y[Y];nt!==null&&(y[Y]=null,v[Y].disconnect(nt))}L=null,H=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,n=null,_=null,ue.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",W),n.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),n.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,nt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new qe(d.framebufferWidth,d.framebufferHeight,{format:Ei,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,Mt=null,ot=null;g.depth&&(ot=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Ms:ps,Mt=g.stencil?vs:kn);let Rt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(Rt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new qe(f.textureWidth,f.textureHeight,{format:Ei,type:Qi,depthTexture:new Aa(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ue.setContext(n),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(Y){for(let nt=0;nt<Y.removed.length;nt++){let Mt=Y.removed[nt],ot=y.indexOf(Mt);ot>=0&&(y[ot]=null,v[ot].disconnect(Mt))}for(let nt=0;nt<Y.added.length;nt++){let Mt=Y.added[nt],ot=y.indexOf(Mt);if(ot===-1){for(let Lt=0;Lt<v.length;Lt++)if(Lt>=y.length){y.push(Mt),ot=Lt;break}else if(y[Lt]===null){y[Lt]=Mt,ot=Lt;break}if(ot===-1)break}let Rt=v[ot];Rt&&Rt.connect(Mt)}}let X=new E,it=new E;function G(Y,nt,Mt){X.setFromMatrixPosition(nt.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);let ot=X.distanceTo(it),Rt=nt.projectionMatrix.elements,Lt=Mt.projectionMatrix.elements,Vt=Rt[14]/(Rt[10]-1),we=Rt[14]/(Rt[10]+1),Zt=(Rt[9]+1)/Rt[5],Le=(Rt[9]-1)/Rt[5],F=(Rt[8]-1)/Rt[0],fi=(Lt[8]+1)/Lt[0],qt=Vt*F,Yt=Vt*fi,Tt=ot/(-F+fi),xe=Tt*-F;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Et=Vt+Tt,C=we+Tt,M=qt-xe,O=Yt+(ot-xe),$=Zt*we/C*Et,K=Le*we/C*Et;Y.projectionMatrix.makePerspective(M,O,$,K,Et,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function at(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let nt=Y.near,Mt=Y.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),b.near=R.near=P.near=nt,b.far=R.far=P.far=Mt,(L!==b.near||H!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,H=b.far),P.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,b.layers.mask=P.layers.mask|R.layers.mask;let ot=Y.parent,Rt=b.cameras;at(b,ot);for(let Lt=0;Lt<Rt.length;Lt++)at(Rt[Lt],ot);Rt.length===2?G(b,P,R):b.projectionMatrix.copy(P.projectionMatrix),ft(Y,b,ot)};function ft(Y,nt,Mt){Mt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let wt=null;function Ht(Y,nt){if(h=nt.getViewerPose(c||a),m=nt,h!==null){let Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ot=!1;Mt.length!==b.cameras.length&&(b.cameras.length=0,ot=!0);for(let Lt=0;Lt<Mt.length;Lt++){let Vt=Mt[Lt],we=null;if(d!==null)we=d.getViewport(Vt);else{let Le=u.getViewSubImage(f,Vt);we=Le.viewport,Lt===0&&(t.setRenderTargetTextures(_,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),t.setRenderTarget(_))}let Zt=w[Lt];Zt===void 0&&(Zt=new Xe,Zt.layers.enable(Lt),Zt.viewport=new ce,w[Lt]=Zt),Zt.matrix.fromArray(Vt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Vt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(we.x,we.y,we.width,we.height),Lt===0&&(b.matrix.copy(Zt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ot===!0&&b.cameras.push(Zt)}let Rt=n.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let Lt=u.getDepthInformation(Mt[0]);Lt&&Lt.isValid&&Lt.texture&&x.init(t,Lt,n.renderState)}}for(let Mt=0;Mt<v.length;Mt++){let ot=y[Mt],Rt=v[Mt];ot!==null&&Rt!==void 0&&Rt.update(ot,nt,c||a)}wt&&wt(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),m=null}let ue=new af;ue.setAnimationLoop(Ht),this.setAnimationLoop=function(Y){wt=Y},this.dispose=function(){}}},Dn=new xi,Cx=new Gt;function Px(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,rf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,Dn.copy(y),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),g.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(Dn)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Ix(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=n[_.id];y===void 0&&(m(_),y=h(_),n[_.id]=y,_.addEventListener("dispose",g));let I=v.program;i.updateUBOMapping(_,I);let A=t.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){let v=u();_.__bindingPointIndex=v;let y=s.createBuffer(),I=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=n[_.id],y=_.uniforms,I=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,P=y.length;A<P;A++){let R=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,b=R.length;w<b;w++){let L=R[w];if(d(L,A,w,I)===!0){let H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],W=0;for(let J=0;J<z.length;J++){let X=z[J],it=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,H+W,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,W),W+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,v,y,I){let A=_.value,P=v+"_"+y;if(I[P]===void 0)return typeof A=="number"||typeof A=="boolean"?I[P]=A:I[P]=A.clone(),!0;{let R=I[P];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[P]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function m(_){let v=_.uniforms,y=0,I=16;for(let P=0,R=v.length;P<R;P++){let w=Array.isArray(v[P])?v[P]:[v[P]];for(let b=0,L=w.length;b<L;b++){let H=w[b],z=Array.isArray(H.value)?H.value:[H.value];for(let W=0,J=z.length;W<J;W++){let X=z[W],it=x(X),G=y%I,at=G%it.boundary,ft=G+at;y+=at,ft!==0&&I-ft<it.storage&&(y+=I-ft),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=it.storage}}}let A=y%I;return A>0&&(y+=I-A),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(let _ in n)s.deleteBuffer(n[_]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}var Ra=class{constructor(t={}){let{canvas:e=Fd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=pn,this.toneMappingExposure=1;let y=this,I=!1,A=0,P=0,R=null,w=-1,b=null,L=new ce,H=new ce,z=null,W=new xt(0),J=0,X=e.width,it=e.height,G=1,at=null,ft=null,wt=new ce(0,0,X,it),Ht=new ce(0,0,X,it),ue=!1,Y=new mr,nt=!1,Mt=!1,ot=new Gt,Rt=new Gt,Lt=new E,Vt=new ce,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Le(){return R===null?G:1}let F=i;function fi(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){let U="webgl2";if(F=fi(U,S),F===null)throw fi(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let qt,Yt,Tt,xe,Et,C,M,O,$,K,q,bt,lt,dt,Jt,tt,pt,At,Ct,mt,$t,Ot,pe,D;function rt(){qt=new Ym(F),qt.init(),Ot=new Ex(F,qt),Yt=new Hm(F,qt,t,Ot),Tt=new bx(F,qt),Yt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),xe=new Jm(F),Et=new cx,C=new wx(F,qt,Tt,Et,Yt,Ot,xe),M=new Gm(y),O=new qm(y),$=new np(F),pe=new Bm(F,$),K=new $m(F,$,xe,pe),q=new Qm(F,K,$,xe),Ct=new Km(F,Yt,C),tt=new Vm(Et),bt=new lx(y,M,O,qt,Yt,pe,tt),lt=new Px(y,Et),dt=new ux,Jt=new xx(qt),At=new km(y,M,O,Tt,q,d,l),pt=new vx(y,q,Yt),D=new Ix(F,xe,Yt,Tt),mt=new zm(F,qt,xe),$t=new Zm(F,qt,xe),xe.programs=bt.programs,y.capabilities=Yt,y.extensions=qt,y.properties=Et,y.renderLists=dt,y.shadowMap=pt,y.state=Tt,y.info=xe}rt();let V=new lc(y,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=qt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=qt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(X,it,!1))},this.getSize=function(S){return S.set(X,it)},this.setSize=function(S,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,it=U,e.width=Math.floor(S*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(X*G,it*G).floor()},this.setDrawingBufferSize=function(S,U,k){X=S,it=U,G=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,U,k,B){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,U,k,B),Tt.viewport(L.copy(wt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Ht)},this.setScissor=function(S,U,k,B){S.isVector4?Ht.set(S.x,S.y,S.z,S.w):Ht.set(S,U,k,B),Tt.scissor(H.copy(Ht).multiplyScalar(G).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(S){Tt.setScissorTest(ue=S)},this.setOpaqueSort=function(S){at=S},this.setTransparentSort=function(S){ft=S},this.getClearColor=function(S){return S.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(S=!0,U=!0,k=!0){let B=0;if(S){let N=!1;if(R!==null){let et=R.texture.format;N=et===Yc||et===qc||et===Xc}if(N){let et=R.texture.type,ht=et===Qi||et===kn||et===dr||et===vs||et===Vc||et===Gc,yt=At.getClearColor(),_t=At.getClearAlpha(),Pt=yt.r,Nt=yt.g,vt=yt.b;ht?(m[0]=Pt,m[1]=Nt,m[2]=vt,m[3]=_t,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=Pt,x[1]=Nt,x[2]=vt,x[3]=_t,F.clearBufferiv(F.COLOR,0,x))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT),k&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Jt.dispose(),Et.dispose(),M.dispose(),O.dispose(),q.dispose(),pe.dispose(),D.dispose(),bt.dispose(),V.dispose(),V.removeEventListener("sessionstart",gh),V.removeEventListener("sessionend",xh),An.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let S=xe.autoReset,U=pt.enabled,k=pt.autoUpdate,B=pt.needsUpdate,N=pt.type;rt(),xe.autoReset=S,pt.enabled=U,pt.autoUpdate=k,pt.needsUpdate=B,pt.type=N}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ut(S){let U=S.target;U.removeEventListener("dispose",Ut),Ce(U)}function Ce(S){$e(S),Et.remove(S)}function $e(S){let U=Et.get(S).programs;U!==void 0&&(U.forEach(function(k){bt.releaseProgram(k)}),S.isShaderMaterial&&bt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,B,N,et){U===null&&(U=we);let ht=N.isMesh&&N.matrixWorld.determinant()<0,yt=Of(S,U,k,B,N);Tt.setMaterial(B,ht);let _t=k.index,Pt=1;if(B.wireframe===!0){if(_t=K.getWireframeAttribute(k),_t===void 0)return;Pt=2}let Nt=k.drawRange,vt=k.attributes.position,Kt=Nt.start*Pt,me=(Nt.start+Nt.count)*Pt;et!==null&&(Kt=Math.max(Kt,et.start*Pt),me=Math.min(me,(et.start+et.count)*Pt)),_t!==null?(Kt=Math.max(Kt,0),me=Math.min(me,_t.count)):vt!=null&&(Kt=Math.max(Kt,0),me=Math.min(me,vt.count));let ye=me-Kt;if(ye<0||ye===1/0)return;pe.setup(N,B,yt,k,_t);let si,jt=mt;if(_t!==null&&(si=$.get(_t),jt=$t,jt.setIndex(si)),N.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*Le()),jt.setMode(F.LINES)):jt.setMode(F.TRIANGLES);else if(N.isLine){let St=B.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*Le()),N.isLineSegments?jt.setMode(F.LINES):N.isLineLoop?jt.setMode(F.LINE_LOOP):jt.setMode(F.LINE_STRIP)}else N.isPoints?jt.setMode(F.POINTS):N.isSprite&&jt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let St=N._multiDrawStarts,zi=N._multiDrawCounts,te=N._multiDrawCount,vi=_t?$.get(_t).bytesPerElement:1,Yn=Et.get(B).currentProgram.getUniforms();for(let oi=0;oi<te;oi++)Yn.setValue(F,"_gl_DrawID",oi),jt.render(St[oi]/vi,zi[oi])}else if(N.isInstancedMesh)jt.renderInstances(Kt,ye,N.count);else if(k.isInstancedBufferGeometry){let St=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,zi=Math.min(k.instanceCount,St);jt.renderInstances(Kt,ye,zi)}else jt.render(Kt,ye)};function re(S,U,k){S.transparent===!0&&S.side===mi&&S.forceSinglePass===!1?(S.side=Ke,S.needsUpdate=!0,Nr(S,U,k),S.side=Ui,S.needsUpdate=!0,Nr(S,U,k),S.side=mi):Nr(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),p=Jt.get(k),p.init(U),v.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let B=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let et=N.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){let yt=et[ht];re(yt,k,N),B.add(yt)}else re(et,k,N),B.add(et)}),v.pop(),p=null,B},this.compileAsync=function(S,U,k=null){let B=this.compile(S,U,k);return new Promise(N=>{function et(){if(B.forEach(function(ht){Et.get(ht).currentProgram.isReady()&&B.delete(ht)}),B.size===0){N(S);return}setTimeout(et,10)}qt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let _i=null;function Bi(S){_i&&_i(S)}function gh(){An.stop()}function xh(){An.start()}let An=new af;An.setAnimationLoop(Bi),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(S){_i=S,V.setAnimationLoop(S),S===null?An.stop():An.start()},V.addEventListener("sessionstart",gh),V.addEventListener("sessionend",xh),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,R),p=Jt.get(S,v.length),p.init(U),v.push(p),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),Mt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,Mt),g=dt.get(S,_.length),g.init(),_.push(g),V.enabled===!0&&V.isPresenting===!0){let et=y.xr.getDepthSensingMesh();et!==null&&Eo(et,U,-1/0,y.sortObjects)}Eo(S,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(at,ft),Zt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Zt&&At.addToRenderList(g,S),this.info.render.frame++,nt===!0&&tt.beginShadows();let k=p.state.shadowsArray;pt.render(k,S,U),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let et=U.cameras;if(N.length>0)for(let ht=0,yt=et.length;ht<yt;ht++){let _t=et[ht];_h(B,N,S,_t)}Zt&&At.render(S);for(let ht=0,yt=et.length;ht<yt;ht++){let _t=et[ht];yh(g,S,_t,_t.viewport)}}else N.length>0&&_h(B,N,S,U),Zt&&At.render(S),yh(g,S,U);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(y,S,U),pe.resetDefaultState(),w=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],nt===!0&&tt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Eo(S,U,k,B){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){B&&Vt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Rt);let ht=q.update(S),yt=S.material;yt.visible&&g.push(S,ht,yt,k,Vt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){let ht=q.update(S),yt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Vt.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Vt.copy(ht.boundingSphere.center)),Vt.applyMatrix4(S.matrixWorld).applyMatrix4(Rt)),Array.isArray(yt)){let _t=ht.groups;for(let Pt=0,Nt=_t.length;Pt<Nt;Pt++){let vt=_t[Pt],Kt=yt[vt.materialIndex];Kt&&Kt.visible&&g.push(S,ht,Kt,k,Vt.z,vt)}}else yt.visible&&g.push(S,ht,yt,k,Vt.z,null)}}let et=S.children;for(let ht=0,yt=et.length;ht<yt;ht++)Eo(et[ht],U,k,B)}function yh(S,U,k,B){let N=S.opaque,et=S.transmissive,ht=S.transparent;p.setupLightsView(k),nt===!0&&tt.setGlobalState(y.clippingPlanes,k),B&&Tt.viewport(L.copy(B)),N.length>0&&Ur(N,U,k),et.length>0&&Ur(et,U,k),ht.length>0&&Ur(ht,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function _h(S,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new qe(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?hi:Qi,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let et=p.state.transmissionRenderTarget[B.id],ht=B.viewport||L;et.setSize(ht.z,ht.w);let yt=y.getRenderTarget();y.setRenderTarget(et),y.getClearColor(W),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Zt&&At.render(k);let _t=y.toneMapping;y.toneMapping=pn;let Pt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),nt===!0&&tt.setGlobalState(y.clippingPlanes,B),Ur(S,k,B),C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let vt=0,Kt=U.length;vt<Kt;vt++){let me=U[vt],ye=me.object,si=me.geometry,jt=me.material,St=me.group;if(jt.side===mi&&ye.layers.test(B.layers)){let zi=jt.side;jt.side=Ke,jt.needsUpdate=!0,vh(ye,k,B,si,jt,St),jt.side=zi,jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et))}y.setRenderTarget(yt),y.setClearColor(W,J),Pt!==void 0&&(B.viewport=Pt),y.toneMapping=_t}function Ur(S,U,k){let B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=S.length;N<et;N++){let ht=S[N],yt=ht.object,_t=ht.geometry,Pt=B===null?ht.material:B,Nt=ht.group;yt.layers.test(k.layers)&&vh(yt,U,k,_t,Pt,Nt)}}function vh(S,U,k,B,N,et){S.onBeforeRender(y,U,k,B,N,et),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,U,k,B,S,et),N.transparent===!0&&N.side===mi&&N.forceSinglePass===!1?(N.side=Ke,N.needsUpdate=!0,y.renderBufferDirect(k,U,B,N,S,et),N.side=Ui,N.needsUpdate=!0,y.renderBufferDirect(k,U,B,N,S,et),N.side=mi):y.renderBufferDirect(k,U,B,N,S,et),S.onAfterRender(y,U,k,B,N,et)}function Nr(S,U,k){U.isScene!==!0&&(U=we);let B=Et.get(S),N=p.state.lights,et=p.state.shadowsArray,ht=N.state.version,yt=bt.getParameters(S,N.state,et,U,k),_t=bt.getProgramCacheKey(yt),Pt=B.programs;B.environment=S.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(S.isMeshStandardMaterial?O:M).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",Ut),Pt=new Map,B.programs=Pt);let Nt=Pt.get(_t);if(Nt!==void 0){if(B.currentProgram===Nt&&B.lightsStateVersion===ht)return bh(S,yt),Nt}else yt.uniforms=bt.getUniforms(S),S.onBeforeCompile(yt,y),Nt=bt.acquireProgram(yt,_t),Pt.set(_t,Nt),B.uniforms=yt.uniforms;let vt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(vt.clippingPlanes=tt.uniform),bh(S,yt),B.needsLights=Bf(S),B.lightsStateVersion=ht,B.needsLights&&(vt.ambientLightColor.value=N.state.ambient,vt.lightProbe.value=N.state.probe,vt.directionalLights.value=N.state.directional,vt.directionalLightShadows.value=N.state.directionalShadow,vt.spotLights.value=N.state.spot,vt.spotLightShadows.value=N.state.spotShadow,vt.rectAreaLights.value=N.state.rectArea,vt.ltc_1.value=N.state.rectAreaLTC1,vt.ltc_2.value=N.state.rectAreaLTC2,vt.pointLights.value=N.state.point,vt.pointLightShadows.value=N.state.pointShadow,vt.hemisphereLights.value=N.state.hemi,vt.directionalShadowMap.value=N.state.directionalShadowMap,vt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,vt.spotShadowMap.value=N.state.spotShadowMap,vt.spotLightMatrix.value=N.state.spotLightMatrix,vt.spotLightMap.value=N.state.spotLightMap,vt.pointShadowMap.value=N.state.pointShadowMap,vt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Nt,B.uniformsList=null,Nt}function Mh(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=gs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function bh(S,U){let k=Et.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Of(S,U,k,B,N){U.isScene!==!0&&(U=we),C.resetTextureUnits();let et=U.fog,ht=B.isMeshStandardMaterial?U.environment:null,yt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ds,_t=(B.isMeshStandardMaterial?O:M).get(B.envMap||ht),Pt=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),vt=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,me=!!k.morphAttributes.color,ye=pn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ye=y.toneMapping);let si=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,jt=si!==void 0?si.length:0,St=Et.get(B),zi=p.state.lights;if(nt===!0&&(Mt===!0||S!==b)){let di=S===b&&B.id===w;tt.setState(B,S,di)}let te=!1;B.version===St.__version?(St.needsLights&&St.lightsStateVersion!==zi.state.version||St.outputColorSpace!==yt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==_t||B.fog===!0&&St.fog!==et||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Pt||St.vertexTangents!==Nt||St.morphTargets!==vt||St.morphNormals!==Kt||St.morphColors!==me||St.toneMapping!==ye||St.morphTargetsCount!==jt)&&(te=!0):(te=!0,St.__version=B.version);let vi=St.currentProgram;te===!0&&(vi=Nr(B,U,N));let Yn=!1,oi=!1,qs=!1,_e=vi.getUniforms(),Pi=St.uniforms;if(Tt.useProgram(vi.program)&&(Yn=!0,oi=!0,qs=!0),B.id!==w&&(w=B.id,oi=!0),Yn||b!==S){Tt.buffers.depth.getReversed()?(ot.copy(S.projectionMatrix),kd(ot),Bd(ot),_e.setValue(F,"projectionMatrix",ot)):_e.setValue(F,"projectionMatrix",S.projectionMatrix),_e.setValue(F,"viewMatrix",S.matrixWorldInverse);let nn=_e.map.cameraPosition;nn!==void 0&&nn.setValue(F,Lt.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_e.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,oi=!0,qs=!0)}if(N.isSkinnedMesh){_e.setOptional(F,N,"bindMatrix"),_e.setOptional(F,N,"bindMatrixInverse");let di=N.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),_e.setValue(F,"boneTexture",di.boneTexture,C))}N.isBatchedMesh&&(_e.setOptional(F,N,"batchingTexture"),_e.setValue(F,"batchingTexture",N._matricesTexture,C),_e.setOptional(F,N,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",N._indirectTexture,C),_e.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",N._colorsTexture,C));let Ys=k.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Ct.update(N,k,vi),(oi||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,_e.setValue(F,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Pi.envMap.value=_t,Pi.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Pi.envMapIntensity.value=U.environmentIntensity),oi&&(_e.setValue(F,"toneMappingExposure",y.toneMappingExposure),St.needsLights&&kf(Pi,qs),et&&B.fog===!0&&lt.refreshFogUniforms(Pi,et),lt.refreshMaterialUniforms(Pi,B,G,it,p.state.transmissionRenderTarget[S.id]),gs.upload(F,Mh(St),Pi,C)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gs.upload(F,Mh(St),Pi,C),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_e.setValue(F,"center",N.center),_e.setValue(F,"modelViewMatrix",N.modelViewMatrix),_e.setValue(F,"normalMatrix",N.normalMatrix),_e.setValue(F,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let di=B.uniformsGroups;for(let nn=0,sn=di.length;nn<sn;nn++){let Sh=di[nn];D.update(Sh,vi),D.bind(Sh,vi)}}return vi}function kf(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Bf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,k){Et.get(S.texture).__webglTexture=U,Et.get(S.depthTexture).__webglTexture=k;let B=Et.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let k=Et.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){R=S,A=U,P=k;let B=!0,N=null,et=!1,ht=!1;if(S){let _t=Et.get(S);if(_t.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),B=!1;else if(_t.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(_t.__hasExternalTextures)C.rebindTextures(S,Et.get(S.texture).__webglTexture,Et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let vt=S.depthTexture;if(_t.__boundDepthTexture!==vt){if(vt!==null&&Et.has(vt)&&(S.width!==vt.image.width||S.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}let Pt=S.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ht=!0);let Nt=Et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?N=Nt[U][k]:N=Nt[U],et=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?N=Et.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[k]:N=Nt,L.copy(S.viewport),H.copy(S.scissor),z=S.scissorTest}else L.copy(wt).multiplyScalar(G).floor(),H.copy(Ht).multiplyScalar(G).floor(),z=ue;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&B&&Tt.drawBuffers(S,N),Tt.viewport(L),Tt.scissor(H),Tt.setScissorTest(z),et){let _t=Et.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,k)}else if(ht){let _t=Et.get(S.texture),Pt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,k||0,Pt)}w=-1},this.readRenderTargetPixels=function(S,U,k,B,N,et,ht){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(yt=yt[ht]),yt){Tt.bindFramebuffer(F.FRAMEBUFFER,yt);try{let _t=S.texture,Pt=_t.format,Nt=_t.type;if(!Yt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-B&&k>=0&&k<=S.height-N&&F.readPixels(U,k,B,N,Ot.convert(Pt),Ot.convert(Nt),et)}finally{let _t=R!==null?Et.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,B,N,et,ht){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(yt=yt[ht]),yt){let _t=S.texture,Pt=_t.format,Nt=_t.type;if(!Yt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-B&&k>=0&&k<=S.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,yt);let vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,et.byteLength,F.STREAM_READ),F.readPixels(U,k,B,N,Ot.convert(Pt),Ot.convert(Nt),0);let Kt=R!==null?Et.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,Kt);let me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Od(F,me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,et),F.deleteBuffer(vt),F.deleteSync(me),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let B=Math.pow(2,-k),N=Math.floor(S.image.width*B),et=Math.floor(S.image.height*B),ht=U!==null?U.x:0,yt=U!==null?U.y:0;C.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,ht,yt,N,et),Tt.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,B=null,N=0){S.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let et,ht,yt,_t,Pt,Nt,vt,Kt,me,ye=S.isCompressedTexture?S.mipmaps[N]:S.image;k!==null?(et=k.max.x-k.min.x,ht=k.max.y-k.min.y,yt=k.isBox3?k.max.z-k.min.z:1,_t=k.min.x,Pt=k.min.y,Nt=k.isBox3?k.min.z:0):(et=ye.width,ht=ye.height,yt=ye.depth||1,_t=0,Pt=0,Nt=0),B!==null?(vt=B.x,Kt=B.y,me=B.z):(vt=0,Kt=0,me=0);let si=Ot.convert(U.format),jt=Ot.convert(U.type),St;U.isData3DTexture?(C.setTexture3D(U,0),St=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),St=F.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),St=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let zi=F.getParameter(F.UNPACK_ROW_LENGTH),te=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=F.getParameter(F.UNPACK_SKIP_PIXELS),Yn=F.getParameter(F.UNPACK_SKIP_ROWS),oi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nt);let qs=S.isDataArrayTexture||S.isData3DTexture,_e=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Pi=Et.get(S),Ys=Et.get(U),di=Et.get(Pi.__renderTarget),nn=Et.get(Ys.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,di.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let sn=0;sn<yt;sn++)qs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(S).__webglTexture,N,Nt+sn),S.isDepthTexture?(_e&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(U).__webglTexture,N,me+sn),F.blitFramebuffer(_t,Pt,et,ht,vt,Kt,et,ht,F.DEPTH_BUFFER_BIT,F.NEAREST)):_e?F.copyTexSubImage3D(St,N,vt,Kt,me+sn,_t,Pt,et,ht):F.copyTexSubImage2D(St,N,vt,Kt,me+sn,_t,Pt,et,ht);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _e?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(St,N,vt,Kt,me,et,ht,yt,si,jt,ye.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(St,N,vt,Kt,me,et,ht,yt,si,ye.data):F.texSubImage3D(St,N,vt,Kt,me,et,ht,yt,si,jt,ye):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,vt,Kt,et,ht,si,jt,ye.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,vt,Kt,ye.width,ye.height,si,ye.data):F.texSubImage2D(F.TEXTURE_2D,N,vt,Kt,et,ht,si,jt,ye);F.pixelStorei(F.UNPACK_ROW_LENGTH,zi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,te),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Yn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,oi),N===0&&U.generateMipmaps&&F.generateMipmap(St),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,B=null,N=0){return S.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,k,B,N)},this.initRenderTarget=function(S){Et.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){A=0,P=0,R=null,Tt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}},Ca=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var As=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ti=new E,gr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ti.fromBufferAttribute(this,e),ti.applyMatrix4(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ti.fromBufferAttribute(this,e),ti.applyNormalMatrix(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ti.fromBufferAttribute(this,e),ti.transformDirection(t),this.setXYZ(e,ti.x,ti.y,ti.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),n=ae(n,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bn=class extends Fi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ls,Qs=new E,cs=new E,hs=new E,us=new j,js=new j,uf=new Gt,na=new E,tr=new E,sa=new E,Su=new j,tl=new j,wu=new j,Rs=class extends Oe{constructor(t=new Bn){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Pa(e,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new gr(i,3,0,!1)),ls.setAttribute("uv",new gr(i,2,3,!1))}this.geometry=ls,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;ra(na.set(-.5,-.5,0),hs,a,cs,n,r),ra(tr.set(.5,-.5,0),hs,a,cs,n,r),ra(sa.set(.5,.5,0),hs,a,cs,n,r),Su.set(0,0),tl.set(1,0),wu.set(1,1);let o=t.ray.intersectTriangle(na,tr,sa,!1,Qs);if(o===null&&(ra(tr.set(-.5,.5,0),hs,a,cs,n,r),tl.set(0,1),o=t.ray.intersectTriangle(na,sa,tr,!1,Qs),o===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:fn.getInterpolation(Qs,na,tr,sa,Su,tl,wu,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ra(s,t,e,i,n,r){us.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(js.x=r*us.x-n*us.y,js.y=n*us.x+r*us.y):js.copy(us),s.copy(t),s.x+=js.x,s.y+=js.y,s.applyMatrix4(uf)}var cc=class extends ai{constructor(t=null,e=1,i=1,n,r,a,o,l,c=ii,h=ii,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends Pe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fs=new Gt,Eu=new Gt,aa=[],Tu=new Ti,Lx=new Gt,er=new Q,ir=new ji,Ia=class extends Q{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Lx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),Tu.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(Tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),ir.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(i),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,fs),Eu.multiplyMatrices(i,fs),er.matrixWorld=Eu,er.raycast(t,aa);for(let a=0,o=aa.length;a<o;a++){let l=aa[a];l.instanceId=r,l.object=this,e.push(l)}aa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new cc(new Float32Array(n*this.count),n,this.count,Wc,Li));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var yr=class extends Fi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},La=new E,Da=new E,Au=new Gt,nr=new Ss,oa=new ji,el=new E,Ru=new E,hc=class extends Oe{constructor(t=new Ee,e=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)La.fromBufferAttribute(e,n-1),Da.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=La.distanceTo(Da);t.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(n),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;Au.copy(n).invert(),nr.copy(t.ray).applyMatrix4(Au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),_=h.getX(x+1),v=la(this,t,nr,l,p,_);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=la(this,t,nr,l,x,g);p&&e.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=la(this,t,nr,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=la(this,t,nr,l,m-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function la(s,t,e,i,n,r){let a=s.geometry.attributes.position;if(La.fromBufferAttribute(a,n),Da.fromBufferAttribute(a,r),e.distanceSqToSegment(La,Da,el,Ru)>i)return;el.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(el);if(!(l<t.near||l>t.far))return{distance:l,point:Ru.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var Cu=new E,Pu=new E,Ua=class extends hc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Cu.fromBufferAttribute(e,n),Pu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Cu.distanceTo(Pu);t.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var uc=class extends Fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Iu=new Gt,fc=new Ss,ca=new ji,ha=new E,Na=class extends Oe{constructor(t=new Ee,e=new uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(n),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;Iu.copy(n).invert(),fc.copy(t.ray).applyMatrix4(Iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);ha.fromBufferAttribute(u,g),Lu(ha,g,l,n,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,x=d;m<x;m++)ha.fromBufferAttribute(u,m),Lu(ha,m,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lu(s,t,e,i,n,r,a){let o=fc.distanceSqToPoint(s);if(o<e){let l=new E;fc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Fa=class extends ai{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(a-h)/f;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new j:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new E,n=[],r=[],a=[],o=new E,l=new Gt;for(let d=0;d<=t;d++){let m=d/t;n[d]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ge(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(Ge(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],d*m)),a[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_r=class extends yi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new j){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends _r{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var ua=new E,il=new Jc,nl=new Jc,sl=new Jc,vr=class extends yi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new E){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(ua.subVectors(n[0],n[1]).add(n[0]),c=ua);let u=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(ua.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=ua),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),il.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),nl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),sl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),nl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(il.calc(l),nl.calc(l),sl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new E().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Du(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Dx(s,t){let e=1-s;return e*e*t}function Ux(s,t){return 2*(1-s)*s*t}function Nx(s,t){return s*s*t}function hr(s,t,e,i){return Dx(s,t)+Ux(s,e)+Nx(s,i)}function Fx(s,t){let e=1-s;return e*e*e*t}function Ox(s,t){let e=1-s;return 3*e*e*s*t}function kx(s,t){return 3*(1-s)*s*s*t}function Bx(s,t){return s*s*s*t}function ur(s,t,e,i,n){return Fx(s,t)+Ox(s,e)+kx(s,i)+Bx(s,n)}var Oa=class extends yi{constructor(t=new j,e=new j,i=new j,n=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new j){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,n.x,r.x,a.x,o.x),ur(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends yi{constructor(t=new E,e=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new E){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,n.x,r.x,a.x,o.x),ur(t,n.y,r.y,a.y,o.y),ur(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends yi{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends yi{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ba=class extends yi{constructor(t=new j,e=new j,i=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new j){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(hr(t,n.x,r.x,a.x),hr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends yi{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(hr(t,n.x,r.x,a.x),hr(t,n.y,r.y,a.y),hr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Du(o,l.x,c.x,h.x,u.x),Du(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new j().fromArray(n))}return this}},Uu=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:vr,CubicBezierCurve:Oa,CubicBezierCurve3:pc,EllipseCurve:_r,LineCurve:ka,LineCurve3:mc,QuadraticBezierCurve:Ba,QuadraticBezierCurve3:gc,SplineCurve:za}),xc=class extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Uu[n.type]().fromJSON(n))}return this}},yc=class extends xc{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ka(this.currentPoint.clone(),new j(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Ba(this.currentPoint.clone(),new j(t,e),new j(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new Oa(this.currentPoint.clone(),new j(t,e),new j(i,n),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new za(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new _r(t,e,i,n,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_c=class s extends Ee{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ge(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new E,f=new j,d=new E,m=new E,x=new E,g=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=e;_++){let v=i+_*h*n,y=Math.sin(v),I=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*I,a.push(u.x,u.y,u.z),f.x=_/e,f.y=A/(t.length-1),o.push(f.x,f.y);let P=l[3*A+0]*y,R=l[3*A+1],w=l[3*A+0]*I;c.push(P,R,w)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){let y=v+_*t.length,I=y,A=y+t.length,P=y+t.length+1,R=y+1;r.push(I,A,R),r.push(P,R,A)}this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("uv",new Xt(o,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},gn=class s extends _c{constructor(t=1,e=1,i=4,n=8){let r=new yc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Cs=class s extends Ee{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new E,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Me=class s extends Ee{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=i/2,p=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(d,2));function _(){let y=new E,I=new E,A=0,P=(e-t)/i;for(let R=0;R<=r;R++){let w=[],b=R/r,L=b*(e-t)+t;for(let H=0;H<=n;H++){let z=H/n,W=z*l+o,J=Math.sin(W),X=Math.cos(W);I.x=L*J,I.y=-b*i+g,I.z=L*X,u.push(I.x,I.y,I.z),y.set(J,P,X).normalize(),f.push(y.x,y.y,y.z),d.push(z,1-b),w.push(m++)}x.push(w)}for(let R=0;R<n;R++)for(let w=0;w<r;w++){let b=x[w][R],L=x[w+1][R],H=x[w+1][R+1],z=x[w][R+1];(t>0||w!==0)&&(h.push(b,L,z),A+=3),(e>0||w!==r-1)&&(h.push(L,H,z),A+=3)}c.addGroup(p,A,0),p+=A}function v(y){let I=m,A=new j,P=new E,R=0,w=y===!0?t:e,b=y===!0?1:-1;for(let H=1;H<=n;H++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;let L=m;for(let H=0;H<=n;H++){let W=H/n*l+o,J=Math.cos(W),X=Math.sin(W);P.x=w*X,P.y=g*b,P.z=w*J,u.push(P.x,P.y,P.z),f.push(0,b,0),A.x=J*.5+.5,A.y=X*.5*b+.5,d.push(A.x,A.y),m++}for(let H=0;H<n;H++){let z=I+H,W=L+H;y===!0?h.push(W,W+1,z):h.push(W+1,W,z),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mr=class s extends Me{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class s extends Ee{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new E,y=new E,I=new E;for(let A=0;A<e.length;A+=3)d(e[A+0],v),d(e[A+1],y),d(e[A+2],I),l(v,y,I,_)}function l(_,v,y,I){let A=I+1,P=[];for(let R=0;R<=A;R++){P[R]=[];let w=_.clone().lerp(y,R/A),b=v.clone().lerp(y,R/A),L=A-R;for(let H=0;H<=L;H++)H===0&&R===A?P[R][H]=w:P[R][H]=w.clone().lerp(b,H/L)}for(let R=0;R<A;R++)for(let w=0;w<2*(A-R)-1;w++){let b=Math.floor(w/2);w%2===0?(f(P[R][b+1]),f(P[R+1][b]),f(P[R][b])):(f(P[R][b+1]),f(P[R+1][b+1]),f(P[R+1][b]))}}function c(_){let v=new E;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new E;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=g(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;a.push(y,1-I)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let v=a[_+0],y=a[_+2],I=a[_+4],A=Math.max(v,y,I),P=Math.min(v,y,I);A>.9&&P<.1&&(v<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,v){let y=_*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){let _=new E,v=new E,y=new E,I=new E,A=new j,P=new j,R=new j;for(let w=0,b=0;w<r.length;w+=9,b+=6){_.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),A.set(a[b+0],a[b+1]),P.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),I.copy(_).add(v).add(y).divideScalar(3);let L=g(I);x(A,b+0,_,L),x(P,b+2,v,L),x(R,b+4,y,L)}}function x(_,v,y,I){I<0&&_.x===1&&(a[v]=_.x-1),y.x===0&&y.z===0&&(a[v]=I/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},Ha=class s extends br{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ps=class s extends br{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Va=class s extends br{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var ze=class s extends Ee{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,f=new E,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let _=[],v=p/i,y=0;p===0&&a===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(n+A*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(n+A*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+y,1-v),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){let v=h[p][_+1],y=h[p][_],I=h[p+1][_],A=h[p+1][_+1];(p!==0||a>0)&&d.push(v,y,A),(p!==i-1||l<Math.PI)&&d.push(y,I,A)}this.setIndex(d),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ga=class s extends Ee{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new E,u=new E,f=new E;for(let d=0;d<=i;d++)for(let m=0;m<=n;m++){let x=m/n*r,g=d/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=n;m++){let x=(n+1)*d+m-1,g=(n+1)*(d-1)+m-1,p=(n+1)*(d-1)+m,_=(n+1)*d+m;a.push(x,g,_),a.push(g,p,_)}this.setIndex(a),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Wa=class extends De{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},He=class extends Fi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function fa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function zx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Is=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends Is{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rh:r=t,o=2*e-i;break;case Ch:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rh:a=t,l=2*i-e;break;case Ch:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-e)/(n-e),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+_*a[c+I]+v*a[l+I]+y*a[u+I];return r}},Mc=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},bc=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ai=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fa(e,this.TimeBufferType),this.values=fa(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:fa(t.times,Array),values:fa(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ya:e=this.InterpolantFactoryMethodDiscrete;break;case Xl:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&zx(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ao,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let x=e[u+m];if(x!==e[f+m]||x!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Xl;var zn=class extends Ai{constructor(t,e,i){super(t,e,i)}};zn.prototype.ValueTypeName="bool";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=ya;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends Ai{};Sc.prototype.ValueTypeName="color";var wc=class extends Ai{};wc.prototype.ValueTypeName="number";var Ec=class extends Is{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xa=class extends Ai{InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};Xa.prototype.ValueTypeName="quaternion";Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends Ai{constructor(t,e,i){super(t,e,i)}};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=ya;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends Ai{};Tc.prototype.ValueTypeName="vector";var Ac=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},Hx=new Ac,Rc=class{constructor(t){this.manager=t!==void 0?t:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Rc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},qa=class extends Ls{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rl=new Gt,Nu=new E,Fu=new E,Sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nu),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Cc=class extends Sr{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=bs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ya=class extends Ls{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Cc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ou=new Gt,sr=new E,al=new E,Pc=class extends Sr{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),i.position.copy(sr),al.copy(i.position),al.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(al),i.updateMatrixWorld(),n.makeTranslation(-sr.x,-sr.y,-sr.z),Ou.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},Vn=class extends Ls{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Pc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ic=class extends Sr{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$a=class extends Ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Ic}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Za=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ku();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ku(){return performance.now()}var Kc="\\[\\]\\.:\\/",Vx=new RegExp("["+Kc+"]","g"),Qc="[^"+Kc+"]",Gx="[^"+Kc.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Xx=/(WCOD+)?/.source.replace("WCOD",Gx),qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),$x=new RegExp("^"+Wx+Xx+qx+Yx+"$"),Zx=["material","materials","bones","map"],Lc=class{constructor(t,e,i){let n=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(t){let e=$x.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Zx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Lc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yy=new Float32Array(1);var Bu=new Gt,Ja=class{constructor(t,e,i=0,n=1/0){this.ray=new Ss(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bu),this}intersectObject(t,e=!0,i=[]){return Dc(t,this,i,e),i.sort(zu),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)Dc(t[n],this,i,e);return i.sort(zu),i}};function zu(s,t){return s.distance-t.distance}function Dc(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Dc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);var to={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ui=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jx=new Es(-1,1,1,-1,0,1),jc=class extends Ee{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},Kx=new jc,xn=class{constructor(t){this._mesh=new Q(Kx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Jx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Fs=class extends ui{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Oi.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new xn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Er=class extends ui{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},eo=class extends ui{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var io=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new j);this._width=i.width,this._height=i.height,e=new qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fs(to),this.copyPass.material.blending=Di,this.clock=new Za}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Er!==void 0&&(a instanceof Er?i=!0:a instanceof eo&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var no=class extends ui{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var ff={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Os=class s extends ui{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qe(r,a,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new qe(r,a,{type:hi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new qe(r,a,{type:hi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=ff;this.highPassUniforms=Oi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new j(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=to;this.copyUniforms=Oi.clone(h.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ni,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xt,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new xn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Os.BlurDirectionX=new j(1,0);Os.BlurDirectionY=new j(0,1);var df={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var so=class extends ui{constructor(){super();let t=df;this.uniforms=Oi.clone(t.uniforms),this.material=new Wa({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new xn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Wt.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ro=class extends As{constructor(){super();let t=new he;t.deleteAttribute("uv");let e=new He({side:Ke}),i=new He,n=new Vn(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new Q(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Q(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Q(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Q(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Q(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Q(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Q(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Q(t,ks(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Q(t,ks(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let m=new Q(t,ks(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new Q(t,ks(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new Q(t,ks(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new Q(t,ks(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ks(s){let t=new We;return t.color.setScalar(s),t}var T=(s=0,t=1)=>s+Math.random()*(t-s),Te=(s,t)=>Math.floor(T(s,t+1)),ie=s=>s[Math.floor(Math.random()*s.length)],fe=s=>Math.random()<s,It=(s,t,e)=>s<t?t:s>e?e:s,de=(s,t,e)=>s+(t-s)*e;var yn=s=>s*s*(3-2*s);var ao=s=>s*s,Bt=(s,t,e,i)=>de(s,t,1-Math.exp(-e*i));function Gn(s,t,e){let i=t-s;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return s+i*e}function ki(s,t){return String(Math.floor(s)).padStart(t,"0")}var Bs=s=>440*Math.pow(2,(s-69)/12),oo=class{constructor(){this.ctx=null,this.muted=!1,this.track=null,this.groanBudget=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.85;let i=e.createDynamicsCompressor();i.threshold.value=-16,i.knee.value=10,i.ratio.value=5,i.attack.value=.003,i.release.value=.2,this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.mus=e.createGain(),this.mus.gain.value=.42,this.mus.connect(this.master),this.reverb=e.createConvolver();let n=Math.floor(e.sampleRate*2.4),r=e.createBuffer(2,n,e.sampleRate);for(let l=0;l<2;l++){let c=r.getChannelData(l);for(let h=0;h<n;h++)c[h]=(Math.random()*2-1)*Math.pow(1-h/n,3.2)}this.reverb.buffer=r,this.revGain=e.createGain(),this.revGain.gain.value=.32,this.reverb.connect(this.revGain).connect(this.master);let a=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,a,e.sampleRate);let o=this.noiseBuf.getChannelData(0);for(let l=0;l<a;l++)o[l]=Math.random()*2-1;this.distCurve=new Float32Array(1024);for(let l=0;l<1024;l++){let c=l/1023*2-1;this.distCurve[l]=Math.tanh(c*4)}}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.85,this.ctx.currentTime,.05)}get now(){return this.ctx?this.ctx.currentTime:0}_out(t=0,e=.2,i=null){let n=this.ctx,r=n.createGain(),a=r;if(n.createStereoPanner){let o=n.createStereoPanner();o.pan.value=It(t,-1,1),r.connect(o),a=o}if(a.connect(i||this.sfx),e>0){let o=n.createGain();o.gain.value=e,r.connect(o).connect(this.reverb)}return r}_noise(t,e,i={}){let n=this.ctx,r=n.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0,r.playbackRate.value=i.rate||1;let a=n.createBiquadFilter();a.type=i.type||"lowpass",a.frequency.setValueAtTime(i.freq||2e3,t),i.freqEnd&&a.frequency.exponentialRampToValueAtTime(i.freqEnd,t+e),a.Q.value=i.q||.7;let o=n.createGain(),l=i.gain??.5,c=i.attack||.002;o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(l,t+c),o.gain.exponentialRampToValueAtTime(1e-4,t+e),r.connect(a).connect(o).connect(i.out||this._out(i.pan,i.send??.15,i.dest)),r.start(t,Math.random()*1.5),r.stop(t+e+.05)}_tone(t,e,i={}){let n=this.ctx,r=n.createOscillator();r.type=i.type||"sine",r.frequency.setValueAtTime(i.freq||440,t),i.freqEnd&&r.frequency.exponentialRampToValueAtTime(i.freqEnd,t+(i.glide||e)),i.detune&&(r.detune.value=i.detune);let a=n.createGain(),o=i.gain??.3,l=i.attack||.004;a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(o,t+l),i.hold&&a.gain.setValueAtTime(o,t+l+i.hold),a.gain.exponentialRampToValueAtTime(1e-4,t+e);let c=r;if(i.filter){let h=n.createBiquadFilter();h.type=i.filter,h.frequency.value=i.ffreq||1e3,h.Q.value=i.fq||1,c.connect(h),c=h}if(i.dist){let h=n.createWaveShaper();h.curve=this.distCurve,c.connect(h),c=h}return c.connect(a).connect(i.out||this._out(i.pan,i.send??.15,i.dest)),r.start(t),r.stop(t+e+.05),r}play(t,e={}){if(!this.ctx||this.muted)return;let i=this.ctx.currentTime+.005,n=e.pan||0,r=e.vol??1;switch(t){case"pistol":this._noise(i,.16,{type:"bandpass",freq:1800,freqEnd:500,q:.6,gain:.9*r,send:.35}),this._noise(i,.04,{type:"highpass",freq:4e3,gain:.5*r,send:0}),this._tone(i,.14,{freq:160,freqEnd:45,gain:.9*r,send:.1});break;case"shotgun":this._noise(i,.45,{type:"lowpass",freq:3200,freqEnd:300,gain:1*r,send:.45}),this._noise(i,.06,{type:"highpass",freq:3e3,gain:.6*r,send:0}),this._tone(i,.3,{freq:110,freqEnd:30,gain:1*r,send:.1}),this._noise(i+.38,.05,{type:"bandpass",freq:1400,q:3,gain:.35,send:.05}),this._noise(i+.5,.06,{type:"bandpass",freq:1e3,q:3,gain:.4,send:.05});break;case"smg":this._noise(i,.09,{type:"bandpass",freq:2200,freqEnd:700,q:.7,gain:.6*r,send:.2}),this._tone(i,.07,{freq:190,freqEnd:60,gain:.55*r,send:0});break;case"magnum":this._noise(i,.5,{type:"lowpass",freq:2500,freqEnd:200,gain:1*r,send:.6}),this._noise(i,.05,{type:"highpass",freq:3500,gain:.7*r,send:0}),this._tone(i,.35,{freq:90,freqEnd:28,gain:1*r,send:.2});break;case"empty":this._tone(i,.03,{type:"square",freq:2400,gain:.12,send:0}),this._noise(i,.03,{type:"highpass",freq:3e3,gain:.2,send:0});break;case"reload":this._noise(i,.04,{type:"bandpass",freq:900,q:4,gain:.5,send:.05}),this._noise(i+.08,.12,{type:"bandpass",freq:1500,freqEnd:3e3,q:2,gain:.25,send:.05}),this._noise(i+.24,.04,{type:"bandpass",freq:1200,q:5,gain:.6,send:.05}),this._tone(i+.24,.05,{type:"square",freq:1800,gain:.05,send:0});break;case"shellIn":this._noise(i,.05,{type:"bandpass",freq:700,q:4,gain:.5,send:.05});break;case"hit":this._noise(i,.14,{type:"lowpass",freq:1100,freqEnd:200,gain:.7*r,pan:n,send:.1}),this._tone(i,.08,{freq:120,freqEnd:50,gain:.4*r,pan:n,send:0});break;case"headshot":this._noise(i,.3,{type:"lowpass",freq:1600,freqEnd:150,gain:.9,pan:n,send:.2}),this._noise(i,.12,{type:"bandpass",freq:400,q:2,gain:.8,pan:n,send:0}),this._tone(i+.02,.18,{type:"triangle",freq:1320,freqEnd:1760,gain:.08,send:.2});break;case"sever":this._noise(i,.2,{type:"bandpass",freq:600,freqEnd:250,q:1.5,gain:.8,pan:n,send:.1}),this._noise(i+.03,.06,{type:"highpass",freq:2500,gain:.4,pan:n,send:0});break;case"gib":this._noise(i,.5,{type:"lowpass",freq:900,freqEnd:100,gain:1,pan:n,send:.3}),this._noise(i+.05,.25,{type:"bandpass",freq:500,q:1,gain:.6,pan:n,send:.1});break;case"groan":this.groan(n,r,e.pitch||1);break;case"roar":this.roar(r,e.pitch||1);break;case"shriek":{this._tone(i,.7,{type:"sawtooth",freq:900*(e.pitch||1),freqEnd:1400,gain:.18,filter:"bandpass",ffreq:1800,fq:3,send:.4,pan:n}),this._tone(i,.7,{type:"square",freq:1310*(e.pitch||1),freqEnd:600,gain:.08,filter:"bandpass",ffreq:2400,fq:4,send:.4,pan:n}),this._noise(i,.7,{type:"bandpass",freq:2500,q:2,gain:.25,send:.3,pan:n});break}case"scream":{this._tone(i,.9,{type:"triangle",freq:750,freqEnd:1250,glide:.25,gain:.22,attack:.04,hold:.4,filter:"bandpass",ffreq:1400,fq:2,send:.4,pan:n}).frequency.exponentialRampToValueAtTime(650,i+.9),this._noise(i,.9,{type:"bandpass",freq:2200,q:3,gain:.08,send:.3,pan:n});break}case"thanks":this._tone(i,.12,{type:"triangle",freq:523,gain:.2,send:.2}),this._tone(i+.1,.12,{type:"triangle",freq:659,gain:.2,send:.2}),this._tone(i+.2,.3,{type:"triangle",freq:784,gain:.2,send:.3});break;case"hurt":this._tone(i,.25,{freq:90,freqEnd:40,gain:1,send:0}),this._noise(i,.3,{type:"lowpass",freq:1500,freqEnd:300,gain:.8,send:.1}),this._tone(i+.02,.35,{type:"sawtooth",freq:150,freqEnd:95,gain:.35,filter:"bandpass",ffreq:700,fq:3,send:.2});break;case"swipe":this._noise(i,.25,{type:"bandpass",freq:500,freqEnd:2500,q:2,gain:.5,pan:n,send:.1});break;case"block":this._noise(i,.12,{type:"bandpass",freq:300,q:1,gain:.7,pan:n,send:.1}),this._tone(i,.1,{freq:70,freqEnd:40,gain:.6,send:0});break;case"explode":this._noise(i,1.6,{type:"lowpass",freq:1400,freqEnd:60,gain:1,pan:n,send:.6}),this._tone(i,.9,{freq:70,freqEnd:22,gain:1,send:.2}),this._noise(i+.1,.9,{type:"bandpass",freq:400,q:.8,gain:.5,pan:n,send:.4});break;case"pickup":this._tone(i,.12,{type:"square",freq:880,gain:.12,send:.2,filter:"lowpass",ffreq:3e3}),this._tone(i+.08,.25,{type:"square",freq:1320,gain:.12,send:.3,filter:"lowpass",ffreq:3e3});break;case"heal":[523,659,784,1047].forEach((a,o)=>this._tone(i+o*.07,.3,{type:"triangle",freq:a,gain:.16,send:.4}));break;case"clang":[820,1270,1930,2640].forEach((a,o)=>this._tone(i,.5-o*.08,{freq:a*T(.97,1.03),gain:.16,send:.3,pan:n})),this._noise(i,.05,{type:"highpass",freq:3e3,gain:.4,send:0,pan:n});break;case"ricochet":this._tone(i,.25,{freq:T(2500,3800),freqEnd:T(900,1500),gain:.06,send:.3,pan:n}),this._noise(i,.04,{type:"highpass",freq:3500,gain:.25,send:0,pan:n});break;case"impact":this._noise(i,.06,{type:"bandpass",freq:T(900,1600),q:1.5,gain:.3*r,send:.05,pan:n});break;case"whoosh":this._noise(i,.6,{type:"bandpass",freq:300,freqEnd:1800,q:3,gain:.35,pan:n,send:.1,attack:.3});break;case"break":for(let a=0;a<4;a++)this._noise(i+a*.035,.12,{type:"bandpass",freq:T(500,1400),q:2,gain:.5,pan:n,send:.1});break;case"glass":for(let a=0;a<6;a++)this._tone(i+a*.02,.3,{freq:T(2500,6e3),gain:.05,send:.3,pan:n});this._noise(i,.3,{type:"highpass",freq:4e3,gain:.35,send:.2,pan:n});break;case"heartbeat":this._tone(i,.12,{freq:62,freqEnd:45,gain:.7,send:0}),this._tone(i+.18,.12,{freq:58,freqEnd:42,gain:.5,send:0});break;case"blip":this._tone(i,.06,{type:"square",freq:e.freq||660,gain:.08,send:.05,filter:"lowpass",ffreq:2500});break;case"tick":this._tone(i,.05,{type:"square",freq:1046,gain:.07,send:0,filter:"lowpass",ffreq:3e3});break;case"timeup":this._tone(i,.6,{type:"sawtooth",freq:300,freqEnd:120,gain:.2,filter:"lowpass",ffreq:1500,send:.2});break;case"stinger":[0,1,6,11].forEach(a=>this._tone(i,2.2,{type:"sawtooth",freq:Bs(45+a),gain:.07,filter:"lowpass",ffreq:1800,send:.6,attack:.01})),this._noise(i,1.2,{type:"lowpass",freq:600,freqEnd:80,gain:.8,send:.5}),this._tone(i,1,{freq:55,freqEnd:30,gain:.9,send:.3});break;case"door":this._noise(i,.35,{type:"lowpass",freq:500,freqEnd:120,gain:.9,pan:n,send:.3}),this._noise(i+.02,.15,{type:"bandpass",freq:1200,q:2,gain:.4,pan:n,send:.2});break;case"splash":this._noise(i,.4,{type:"bandpass",freq:900,freqEnd:300,q:1,gain:.5,pan:n,send:.2});break}}groan(t=0,e=1,i=1){if(!this.ctx||this.muted)return;let n=this.ctx,r=n.currentTime+.01,a=T(.9,1.7),o=T(70,115)*i,l=n.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(o*T(1,1.25),r),l.frequency.exponentialRampToValueAtTime(o*T(.65,.85),r+a);let c=n.createOscillator();c.frequency.value=T(4,9);let h=n.createGain();h.gain.value=o*.08,c.connect(h).connect(l.frequency);let u=n.createBiquadFilter();u.type="bandpass",u.frequency.value=T(450,700),u.Q.value=4;let f=n.createBiquadFilter();f.type="bandpass",f.frequency.value=T(1e3,1400),f.Q.value=6;let d=n.createGain(),m=.55*e;d.gain.setValueAtTime(1e-4,r),d.gain.linearRampToValueAtTime(m,r+.18),d.gain.setValueAtTime(m*.8,r+a*.6),d.gain.exponentialRampToValueAtTime(1e-4,r+a);let x=this._out(t,.3);l.connect(u).connect(d),l.connect(f).connect(d),d.connect(x),l.start(r),c.start(r),l.stop(r+a+.1),c.stop(r+a+.1),this._noise(r,a*.8,{type:"bandpass",freq:600,q:2,gain:.1*e,pan:t,send:.2,attack:.15})}roar(t=1,e=1){if(!this.ctx||this.muted)return;let i=this.ctx.currentTime+.01,n=1.6;this._tone(i,n,{type:"sawtooth",freq:70*e,freqEnd:42*e,gain:.5*t,dist:!0,filter:"lowpass",ffreq:900,send:.5,attack:.1,hold:.6}),this._tone(i,n,{type:"square",freq:105*e,freqEnd:60*e,gain:.18*t,filter:"bandpass",ffreq:600,fq:3,send:.5,attack:.1,hold:.6}),this._noise(i,n,{type:"bandpass",freq:700,freqEnd:250,q:1,gain:.5*t,send:.5,attack:.1})}music(t){if(!this.ctx){this.pendingTrack=t;return}this.track&&this.track.name===t||(this.track=t?Qx[t]:null,this.step=0,this.nextTime=this.ctx.currentTime+.1,this.track&&(this.track.name=t))}update(){if(!this.ctx)return;if(this.pendingTrack!==void 0){let i=this.pendingTrack;this.pendingTrack=void 0,this.music(i)}let t=this.track;if(!t)return;let e=60/t.bpm/4;for(this.nextTime<this.ctx.currentTime-.2&&(this.nextTime=this.ctx.currentTime+.05);this.nextTime<this.ctx.currentTime+.15;)if(this.muted||t.play(this,this.step,this.nextTime,e),this.nextTime+=e,this.step++,t.once&&this.step>=t.length){this.track=null;break}}kick(t,e=.9){this._tone(t,.3,{freq:140,freqEnd:38,glide:.12,gain:e,send:0,dest:this.mus})}snare(t,e=.5){this._noise(t,.18,{type:"highpass",freq:1200,gain:e,send:.3,dest:this.mus}),this._tone(t,.1,{freq:220,freqEnd:140,gain:e*.6,send:0,dest:this.mus})}hat(t,e=.12,i=!1){this._noise(t,i?.2:.04,{type:"highpass",freq:7e3,gain:e,send:0,dest:this.mus})}bass(t,e,i,n=.35,r=!1){this._tone(t,i,{type:"sawtooth",freq:Bs(e),gain:n,filter:"lowpass",ffreq:r?900:420,fq:4,dist:r,send:.05,dest:this.mus,attack:.005})}pad(t,e,i,n=.06){e.forEach(r=>{this._tone(t,i,{type:"sawtooth",freq:Bs(r),detune:T(-12,12),gain:n,filter:"lowpass",ffreq:700,attack:i*.3,hold:i*.3,send:.5,dest:this.mus})})}bell(t,e,i=.1){this._tone(t,1.6,{freq:Bs(e),gain:i,send:.7,dest:this.mus}),this._tone(t,.9,{freq:Bs(e)*2.76,gain:i*.3,send:.7,dest:this.mus})}stab(t,e,i=.08){e.forEach(n=>this._tone(t,.35,{type:"square",freq:Bs(n),gain:i,filter:"lowpass",ffreq:1600,send:.4,dest:this.mus}))}},Qx={title:{bpm:70,play(s,t,e,i){let n=Math.floor(t/16)%4,r=[50,46,43,45];t%16===0&&s.pad(e,[r[n]-12,r[n]-5,r[n]+3],i*16,.05);let a=[62,65,69,70,69,65,62,61];t%4===0&&Math.random()<.55&&s.bell(e,a[t/4%a.length]+12,.07),t%16===8&&n===3&&s.bell(e,73,.06)}},stage:{bpm:96,play(s,t,e,i){let n=Math.floor(t/16)%8,a=[38,38,34,34,31,31,33,37][n],o=t%16;[0,3,6,8,11,14].includes(o)&&s.bass(e,a,i*1.8,.28),(o===0||o===8)&&s.kick(e,.7),o===12&&n%2===1&&s.snare(e,.25),o%2===0&&s.hat(e,o%4===2?.08:.04),o===0&&n%2===0&&s.pad(e,[a+12,a+19,a+24],i*32,.035),Math.random()<.07&&s.bell(e,ie([62,65,69,70,74,77])+12,.05)}},boss:{bpm:144,play(s,t,e,i){let n=Math.floor(t/16)%4,a=[38,38,41,37][n],o=t%16;o%4===0&&s.kick(e,.85),(o===4||o===12)&&s.snare(e,.45),s.hat(e,o%2?.05:.09,o===14);let l=[0,0,12,0,0,13,0,12,0,0,12,0,15,13,12,7];s.bass(e,a+l[o],i*.9,.22,!0),o===0&&s.stab(e,[a+24,a+27,a+31],.05),o===10&&n===3&&s.stab(e,[a+25,a+28,a+32],.05)}},clear:{bpm:120,once:!0,length:24,play(s,t,e){let i={0:62,2:65,4:69,6:74,8:72,10:74,12:77};i[t]!==void 0&&s.stab(e,[i[t],i[t]-12],.07),t===12&&s.pad(e,[50,57,62,65],2.5,.05)}},gameover:{bpm:60,once:!0,length:16,play(s,t,e){let i={0:62,2:61,4:58,6:57,8:50};i[t]!==void 0&&s.bell(e,i[t],.12),t===0&&s.pad(e,[38,45,50],4,.05)}}};var jx=2;function ne(s,t=s,e=jx){let i=document.createElement("canvas");i.width=s*e,i.height=t*e;let n=i.getContext("2d");return n.scale(e,e),{c:i,g:n,w:s,h:t}}function se(s,{nearest:t=!1,color:e=!0,repeat:i=!0}={}){let n=new Fa(s);return i&&(n.wrapS=n.wrapT=fr),e&&(n.colorSpace=ri),n.magFilter=t?ii:gi,n.minFilter=$i,n.anisotropy=8,n}function ty(s,t,e,i,n){for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let o=t+r*s.w,l=e+a*s.h;o+i<0||l+i<0||o-i>s.w||l-i>s.h||n(o,l)}}function Ae(s,t,e,i=1,n=2,r=1){let{g:a}=s;a.globalAlpha=r;for(let o=0;o<t;o++){a.fillStyle=ie(e);let l=Te(i,n);a.fillRect(Te(0,s.w-1),Te(0,s.h-1),l,l)}a.globalAlpha=1}function Ye(s,t,e,i,n,r){let{g:a}=s;for(let o=0;o<t;o++){let l=T(0,s.w),c=T(0,s.h),h=T(i,n);ty(s,l,c,h,(u,f)=>{let d=a.createRadialGradient(u,f,0,u,f,h);d.addColorStop(0,e.replace("A",r)),d.addColorStop(1,e.replace("A",0)),a.fillStyle=d,a.fillRect(u-h,f-h,h*2,h*2)})}}function lo(s,t,e,i=40){let{g:n}=s;n.strokeStyle=e,n.lineWidth=1;for(let r=0;r<t;r++){let a=T(0,s.w),o=T(0,s.h),l=T(0,Math.PI*2);n.beginPath(),n.moveTo(a,o);for(let c=0;c<i/4;c++)l+=T(-.6,.6),a+=Math.cos(l)*4,o+=Math.sin(l)*4,n.lineTo(a,o);n.stroke()}}function pf(s,t,e=.6){let{g:i}=s;for(let n=0;n<t;n++){let r=T(0,s.w),a=T(0,s.h);i.fillStyle=`rgba(${Te(70,110)},0,0,${e})`;for(let o=0;o<14;o++){let l=T(1,5);i.beginPath(),i.arc(r+T(-12,12),a+T(-12,12),l,0,Math.PI*2),i.fill()}for(let o=0;o<4;o++)i.fillRect(r+T(-10,10),a,2,T(5,25))}}var th={};function oe(s,t){return th[s]||(th[s]=t()),th[s]}var gt={asphalt:()=>oe("asphalt",()=>{let s=ne(256);return s.g.fillStyle="#262628",s.g.fillRect(0,0,256,256),Ae(s,5e3,["#1c1c1e","#303033","#38383a","#222"],1,2),Ye(s,8,"rgba(0,0,0,A)",10,40,.35),lo(s,6,"rgba(10,10,10,0.8)",60),se(s.c)}),sidewalk:()=>oe("sidewalk",()=>{let s=ne(256);return s.g.fillStyle="#5c5a56",s.g.fillRect(0,0,256,256),Ae(s,4e3,["#4e4c48","#6a6862","#57554f"],1,2),Ye(s,10,"rgba(20,18,15,A)",15,45,.3),s.g.fillStyle="#2e2c29",s.g.fillRect(0,0,256,3),s.g.fillRect(0,0,3,256),s.g.fillRect(0,127,256,2),s.g.fillRect(127,0,2,256),lo(s,4,"rgba(30,28,25,0.8)",40),se(s.c)}),brick:()=>oe("brick",()=>{let s=ne(256),t=s.g;t.fillStyle="#2b2522",t.fillRect(0,0,256,256);let e=16,i=48;for(let n=0;n<256/e;n++){let r=n%2?i/2:0;for(let a=-i;a<256+i;a+=i){let o=Te(85,120);t.fillStyle=`rgb(${o},${Te(38,52)},${Te(28,38)})`,t.fillRect(a+r+1,n*e+1,i-3,e-3)}}return Ae(s,3e3,["rgba(0,0,0,0.3)","rgba(255,255,255,0.06)"],1,2),Ye(s,10,"rgba(10,8,6,A)",20,50,.4),se(s.c)}),plaster:()=>oe("plaster",()=>{let s=ne(256),t=s.g;t.fillStyle="#5b574e",t.fillRect(0,0,256,256),Ae(s,4e3,["#514d45","#66615a","#4a463f"],1,3);for(let e=0;e<18;e++)t.fillStyle="rgba(30,25,15,0.18)",t.fillRect(T(0,256),0,T(2,10),256);return Ye(s,12,"rgba(25,22,15,A)",20,60,.35),lo(s,5,"rgba(20,18,15,0.7)",50),se(s.c)}),wood:()=>oe("wood",()=>{let s=ne(128),t=s.g;for(let e=0;e<4;e++){t.fillStyle=`rgb(${Te(80,100)},${Te(56,66)},${Te(34,42)})`,t.fillRect(0,e*32,128,32),t.fillStyle="rgba(20,10,5,0.8)",t.fillRect(0,e*32,128,2);for(let i=0;i<10;i++)t.fillStyle="rgba(40,25,10,0.35)",t.fillRect(0,e*32+T(3,30),128,1)}return Ae(s,600,["rgba(0,0,0,0.25)"],1,2),se(s.c)}),crate:()=>oe("crate",()=>{let s=ne(128),t=s.g;t.fillStyle="#7a5a34",t.fillRect(0,0,128,128);for(let e=0;e<40;e++)t.fillStyle="rgba(50,30,10,0.3)",t.fillRect(0,T(0,128),128,1);return t.fillStyle="#5a3f20",t.fillRect(0,0,128,14),t.fillRect(0,114,128,14),t.fillRect(0,0,14,128),t.fillRect(114,0,14,128),t.save(),t.translate(64,64),t.rotate(Math.PI/4),t.fillRect(-90,-7,180,14),t.restore(),Ae(s,300,["rgba(0,0,0,0.4)"],1,2),se(s.c)}),metal:()=>oe("metal",()=>{let s=ne(128),t=s.g;t.fillStyle="#4a4f55",t.fillRect(0,0,128,128),Ae(s,1500,["#3f444a","#555a60","#474c52"],1,2),Ye(s,6,"rgba(90,45,15,A)",8,25,.5),t.strokeStyle="rgba(160,165,170,0.25)";for(let e=0;e<25;e++){t.beginPath();let i=T(0,128),n=T(0,128);t.moveTo(i,n),t.lineTo(i+T(-20,20),n+T(-4,4)),t.stroke()}return t.fillStyle="#26292d",t.fillRect(0,0,128,2),t.fillRect(0,0,2,128),t.fillStyle="#6a7076",[8,120].forEach(e=>[8,120].forEach(i=>t.fillRect(e-2,i-2,4,4))),se(s.c)}),rust:()=>oe("rust",()=>{let s=ne(128);return s.g.fillStyle="#5a3a24",s.g.fillRect(0,0,128,128),Ae(s,2e3,["#6b4528","#4a2c18","#7a5030","#3b2414"],1,3),Ye(s,10,"rgba(20,10,5,A)",10,30,.5),se(s.c)}),hospFloor:()=>oe("hospFloor",()=>{let s=ne(256),t=s.g,e=32;for(let i=0;i<8;i++)for(let n=0;n<8;n++){let r=(n+i)%2?Te(150,165):Te(110,122);t.fillStyle=`rgb(${r},${r+2},${r-6})`,t.fillRect(n*e,i*e,e,e)}t.fillStyle="rgba(40,40,35,0.6)";for(let i=0;i<=8;i++)t.fillRect(i*e,0,1,256),t.fillRect(0,i*e,256,1);return Ye(s,14,"rgba(50,45,30,A)",15,50,.4),Ae(s,2e3,["rgba(0,0,0,0.15)"],1,2),se(s.c)}),hospWall:()=>oe("hospWall",()=>{let s=ne(256),t=s.g;t.fillStyle="#869c8c",t.fillRect(0,0,256,256),t.fillStyle="#3d5648",t.fillRect(0,160,256,96),t.fillStyle="#b9c4b4",t.fillRect(0,152,256,8),Ae(s,3e3,["rgba(0,0,0,0.12)","rgba(255,255,255,0.06)"],1,2);for(let e=0;e<14;e++)t.fillStyle="rgba(60,50,20,0.15)",t.fillRect(T(0,256),0,T(3,12),T(60,200));return Ye(s,8,"rgba(40,35,20,A)",20,50,.3),lo(s,4,"rgba(30,30,25,0.6)",50),se(s.c)}),ceiling:()=>oe("ceiling",()=>{let s=ne(128),t=s.g;return t.fillStyle="#9a978c",t.fillRect(0,0,128,128),Ae(s,1500,["#8c897e","#a5a296","#7f7c72"],1,2),t.fillStyle="#55534c",t.fillRect(0,0,128,3),t.fillRect(0,0,3,128),Ye(s,3,"rgba(90,70,30,A)",10,30,.4),se(s.c)}),plate:()=>oe("plate",()=>{let s=ne(128),t=s.g;t.fillStyle="#3c4044",t.fillRect(0,0,128,128);for(let e=0;e<8;e++)for(let i=0;i<8;i++){let n=i*16+e%2*8,r=e*16;t.save(),t.translate(n+4,r+8),t.rotate(e%2?.7:-.7),t.fillStyle="#5b6066",t.fillRect(-5,-1.5,10,3),t.restore()}return Ae(s,1200,["rgba(0,0,0,0.25)","rgba(255,255,255,0.05)"],1,2),Ye(s,5,"rgba(10,10,10,A)",10,30,.4),se(s.c)}),labWall:()=>oe("labWall",()=>{let s=ne(256),t=s.g;t.fillStyle="#3d444c",t.fillRect(0,0,256,256),Ae(s,3e3,["#353b42","#464e57","#3a4048"],1,2),t.fillStyle="#1e2226";for(let e=0;e<=4;e++)t.fillRect(e*64,0,2,256);t.fillRect(0,0,256,2),t.fillRect(0,128,256,2),t.fillStyle="#5c646d";for(let e=0;e<4;e++)for(let i=0;i<2;i++)[6,58].forEach(n=>[6,122].forEach(r=>t.fillRect(e*64+n,i*128+r-(r>64?2:0),3,3)));return t.fillStyle="#c8a400",t.fillRect(0,230,256,6),Ye(s,6,"rgba(10,15,10,A)",20,40,.3),se(s.c)}),hazard:()=>oe("hazard",()=>{let s=ne(64),t=s.g;t.fillStyle="#d9a400",t.fillRect(0,0,64,64),t.fillStyle="#111";for(let e=-64;e<128;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e+16,0),t.lineTo(e+16+64,64),t.lineTo(e+64,64),t.closePath(),t.fill();return Ae(s,400,["rgba(0,0,0,0.3)"],1,2),se(s.c)}),facade:(s=0)=>oe("facade"+s,()=>{let t=ne(256),e=ne(256),i=t.g,n=[["#4f3a2e","#5a4334"],["#3b3f45","#454a50"],["#55503f","#5f5a48"],["#3d2f2f","#4a3838"]],r=n[s%n.length];i.fillStyle=r[0],i.fillRect(0,0,256,256),Ae(t,3e3,[r[1],"rgba(0,0,0,0.2)"],1,2),e.g.fillStyle="#000",e.g.fillRect(0,0,256,256);for(let a=0;a<2;a++){i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,a*128+118,256,4);for(let o=0;o<4;o++){let l=o*64+14,c=a*128+34,h=36,u=60;i.fillStyle="#16120e",i.fillRect(l-4,c-4,h+8,u+8);let f=Math.random()<.22,d=!f&&Math.random()<.25;if(i.fillStyle=f?ie(["#d8a85a","#c88a40","#a8b4bf","#d0b070"]):"#0a0d12",i.fillRect(l,c,h,u),f){let m=e.g.createLinearGradient(0,c,0,c+u);m.addColorStop(0,i.fillStyle),m.addColorStop(1,"#3a2a14"),e.g.fillStyle=m,e.g.fillRect(l,c,h,u);let x=T(6,16);i.fillStyle="rgba(40,20,10,0.75)",i.fillRect(l,c,x,u),e.g.fillStyle="#000",e.g.fillRect(l,c,x,u),Math.random()<.3&&(e.g.fillRect(l+h*.5,c+18,10,42),e.g.beginPath(),e.g.arc(l+h*.5+5,c+14,6,0,Math.PI*2),e.g.fill())}else i.fillStyle="rgba(90,110,130,0.18)",i.fillRect(l+3,c+3,10,u-6),d&&(i.strokeStyle="#4a4a4a",i.beginPath(),i.moveTo(l+8,c+8),i.lineTo(l+22,c+30),i.lineTo(l+14,c+52),i.stroke());i.fillStyle="#1e1913",i.fillRect(l+h/2-1.5,c,3,u),i.fillRect(l,c+u*.45,h,3),i.fillStyle="#6b655c",i.fillRect(l-6,c+u+3,h+12,5)}}return Ye(t,6,"rgba(0,0,0,A)",20,60,.35),{map:se(t.c),emissive:se(e.c)}}),sign:(s,t="#1a1a1a",e="#e8d9a8",i=512,n=128,r='bold 72px Impact, "Arial Black", sans-serif')=>oe("sign"+s+t+e,()=>{let a=ne(i,n),o=a.g;o.fillStyle=t,o.fillRect(0,0,i,n),o.strokeStyle=e,o.lineWidth=6,o.strokeRect(8,8,i-16,n-16),o.fillStyle=e,o.font=r;let l=72;for(;o.measureText(s).width>i-48&&l>20;)l-=4,o.font=r.replace("72px",l+"px");return o.textAlign="center",o.textBaseline="middle",o.shadowColor=e,o.shadowBlur=12,o.fillText(s,i/2,n/2+4),o.shadowBlur=0,Ae(a,1500,["rgba(0,0,0,0.35)"],1,3),se(a.c,{nearest:!1,repeat:!1})}),glow:()=>oe("glow",()=>{let s=ne(64),t=s.g.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.g.fillStyle=t,s.g.fillRect(0,0,64,64),se(s.c,{nearest:!1,repeat:!1})}),moon:()=>oe("moon",()=>{let s=ne(128),t=s.g,e=t.createRadialGradient(64,64,30,64,64,64);e.addColorStop(0,"rgba(220,210,190,0.5)"),e.addColorStop(1,"rgba(220,210,190,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.fillStyle="#e9e1cc",t.beginPath(),t.arc(64,64,36,0,Math.PI*2),t.fill(),t.fillStyle="rgba(150,140,120,0.5)";for(let i=0;i<9;i++)t.beginPath(),t.arc(64+T(-25,25),64+T(-25,25),T(3,9),0,Math.PI*2),t.fill();return se(s.c,{nearest:!1,repeat:!1})}),bloodDecal:()=>oe("bloodDecal",()=>{let s=ne(128),t=s.g;t.fillStyle="rgb(90,0,0)";for(let e=0;e<26;e++){let i=T(0,Math.PI*2),n=T(0,30);t.beginPath(),t.arc(64+Math.cos(i)*n,64+Math.sin(i)*n,T(6,18),0,Math.PI*2),t.fill()}for(let e=0;e<30;e++){let i=T(0,Math.PI*2),n=T(35,60);t.beginPath(),t.arc(64+Math.cos(i)*n,64+Math.sin(i)*n,T(1,4),0,Math.PI*2),t.fill()}return t.fillStyle="rgba(40,0,0,0.6)",t.beginPath(),t.arc(64,64,14,0,Math.PI*2),t.fill(),se(s.c,{nearest:!1,repeat:!1})}),bulletHole:()=>oe("bulletHole",()=>{let s=ne(32),t=s.g,e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.25,"rgba(10,10,10,0.95)"),e.addColorStop(.45,"rgba(40,40,40,0.5)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),se(s.c,{nearest:!1,repeat:!1})}),skin:(s=0)=>oe("skin"+s,()=>{let t=ne(64),e=t.g,i=["#7d8a6e","#8f8b7a","#6b7562","#9a8f80","#77806e"];e.fillStyle=i[s%i.length],e.fillRect(0,0,64,64),Ae(t,500,["rgba(40,50,30,0.4)","rgba(120,40,40,0.3)","rgba(255,255,255,0.08)"],1,2),Ye(t,5,"rgba(60,30,40,A)",4,10,.5),e.strokeStyle="rgba(50,40,70,0.5)";for(let n=0;n<4;n++){e.beginPath();let r=T(0,64),a=T(0,64);e.moveTo(r,a);for(let o=0;o<5;o++)e.lineTo(r+=T(-6,6),a+=T(2,8));e.stroke()}return pf(t,1,.5),se(t.c)}),humanSkin:(s=0)=>oe("hskin"+s,()=>{let t=ne(32),e=["#d2a07c","#8d5a3b","#e6bf9e","#b07a55"];return t.g.fillStyle=e[s%e.length],t.g.fillRect(0,0,32,32),Ae(t,60,["rgba(0,0,0,0.06)"],1,2),se(t.c)}),zombieHead:(s=0,t=null)=>oe("zhead"+s+t,()=>{let e=ne(128,64),i=e.g;i.drawImage(gt.skin(s).image,0,0,64,64),i.drawImage(gt.skin(s).image,64,0,64,64);let n=32;for(let a of[-1,1]){let o=i.createRadialGradient(n+a*8,27,0,n+a*8,27,8);o.addColorStop(0,"rgba(10,0,0,0.95)"),o.addColorStop(.6,"rgba(30,10,15,0.7)"),o.addColorStop(1,"rgba(40,20,30,0)"),i.fillStyle=o,i.fillRect(n+a*8-8,19,16,16)}i.fillStyle="rgba(25,5,5,0.85)",i.fillRect(n-3,33,2,4),i.fillRect(n+1,33,2,4);let r=s%2?16:12;i.fillStyle="#160404",i.beginPath(),i.ellipse(n,44,r/2,4.5,0,0,Math.PI*2),i.fill(),i.fillStyle="#cfc6a0";for(let a=n-r/2+1.5;a<n+r/2-1;a+=2.2)i.fillRect(a,40.5,1.6,T(1.5,2.6)),i.fillRect(a+.6,47.5-T(1,2.5),1.6,2);i.fillStyle="rgba(120,0,0,0.85)";for(let a=0;a<5;a++)i.fillRect(n-r/2+T(0,r),46,1.2,T(3,12));if(Ye(e,4,"rgba(70,20,40,A)",3,7,.6),t){i.fillStyle=t,i.fillRect(0,0,128,11);for(let a=0;a<128;a+=2){let o=a>52&&a<140;i.fillRect(a,10,2,o?T(16,30):T(0,5))}Ae(e,300,["rgba(0,0,0,0.3)"],1,1)}return se(e.c)}),humanHead:(s=0,t="#2a1d14")=>oe("hhead"+s+t,()=>{let e=ne(128,64),i=e.g;i.drawImage(gt.humanSkin(s).image,0,0,64,64),i.drawImage(gt.humanSkin(s).image,64,0,64,64);let n=32;for(let r of[-1,1])i.fillStyle="#f2efe6",i.beginPath(),i.ellipse(n+r*7,28,3.2,2,0,0,Math.PI*2),i.fill(),i.fillStyle="#2b1a10",i.beginPath(),i.arc(n+r*7,28,1.5,0,Math.PI*2),i.fill(),i.fillStyle=t,i.fillRect(n+r*7-4,23.5,8,1.6);i.fillStyle="rgba(0,0,0,0.18)",i.fillRect(n-1,30,2,6),i.fillStyle="#5a1c18",i.beginPath(),i.ellipse(n,42,4,2.6,0,0,Math.PI*2),i.fill(),i.fillStyle=t,i.fillRect(0,0,128,13);for(let r=0;r<128;r+=2){let a=r>52;i.fillRect(r,12,2,a?T(22,34):T(0,7))}return Ae(e,300,["rgba(0,0,0,0.25)","rgba(255,255,255,0.06)"],1,1),se(e.c)}),beam:()=>oe("beam",()=>{let s=ne(16,128,1),t=s.g.createLinearGradient(0,0,0,128);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.35,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.g.fillStyle=t,s.g.fillRect(0,0,16,128),se(s.c,{repeat:!1})}),hair:(s="#2a1d14")=>oe("hair"+s,()=>{let t=ne(32);return t.g.fillStyle=s,t.g.fillRect(0,0,32,32),Ae(t,200,["rgba(0,0,0,0.3)","rgba(255,255,255,0.08)"],1,2),se(t.c)}),cloth:(s,t="shirt",e=.6)=>oe("cloth"+s+t+e,()=>{let i=ne(64),n=i.g;if(n.fillStyle=s,n.fillRect(0,0,64,64),t==="plaid"){n.fillStyle="rgba(0,0,0,0.3)";for(let r=0;r<64;r+=12)n.fillRect(r,0,4,64),n.fillRect(0,r,64,4)}else if(t==="gown"){n.fillStyle="rgba(255,255,255,0.25)";for(let r=2;r<64;r+=8)for(let a=r/8%2?4:0;a<64;a+=8)n.fillRect(a,r,2,2)}else if(t==="denim"){n.fillStyle="rgba(255,255,255,0.08)";for(let r=0;r<64;r+=2)n.fillRect(0,r,64,1)}else t==="uniform"?(n.fillStyle="#c9a43a",n.fillRect(8,10,6,6),n.fillStyle="rgba(255,255,255,0.15)",n.fillRect(30,0,2,64)):t==="apron"?(n.fillStyle="rgba(0,0,0,0.15)",n.fillRect(0,0,64,3)):t==="hazmat"&&(n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,30,64,4),n.fillStyle="#222",n.fillRect(24,10,16,12));return Ae(i,400,["rgba(0,0,0,0.2)","rgba(255,255,255,0.05)"],1,2),Ye(i,5,"rgba(30,25,15,A)",5,14,.4),e>0&&pf(i,Math.round(e*3),.75),se(i.c)}),flesh:()=>oe("flesh",()=>{let s=ne(128),t=s.g;t.fillStyle="#6e2a2a",t.fillRect(0,0,128,128),Ye(s,30,"rgba(150,60,60,A)",4,14,.6),Ye(s,20,"rgba(30,5,10,A)",4,12,.6),t.strokeStyle="rgba(40,10,40,0.6)",t.lineWidth=2;for(let e=0;e<12;e++){t.beginPath();let i=T(0,128),n=T(0,128);t.moveTo(i,n);for(let r=0;r<8;r++)t.lineTo(i+=T(-10,10),n+=T(-10,10));t.stroke()}return Ae(s,600,["rgba(255,200,200,0.15)"],1,2),se(s.c)}),screen:()=>oe("screen",()=>{let s=ne(64),t=s.g;t.fillStyle="#031a08",t.fillRect(0,0,64,64),t.fillStyle="#2bd46a";for(let e=6;e<60;e+=6)t.fillRect(4,e,T(10,54),2);t.fillStyle="rgba(0,0,0,0.3)";for(let e=0;e<64;e+=2)t.fillRect(0,e,64,1);return se(s.c)})};var ey=`
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
}`,iy=`
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
}`,co=class{constructor(t,e,i,n=.25){this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.a0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.flags=new Uint8Array(e),this.next=0,this.active=0;let r=new Ee;r.setAttribute("position",new Pe(this.pos,3).setUsage(Us)),r.setAttribute("pcolor",new Pe(this.col,3).setUsage(Us)),r.setAttribute("size",new Pe(this.size,1).setUsage(Us)),r.setAttribute("alpha",new Pe(this.alpha,1).setUsage(Us)),this.geo=r,this.mat=new De({uniforms:Oi.merge([st.fog,{uScale:{value:500},uSoft:{value:n}}]),vertexShader:ey,fragmentShader:iy,transparent:!0,depthWrite:!1,fog:!0,blending:i?Ni:dn}),this.points=new Na(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=i?6:5,t.add(this.points)}spawn(t,e,i,n,r,a,o){let l=this.next;this.next=(this.next+1)%this.n;let c=l*3;this.pos[c]=t,this.pos[c+1]=e,this.pos[c+2]=i,this.vel[c]=n,this.vel[c+1]=r,this.vel[c+2]=a;let h=o.color;this.col[c]=h.r,this.col[c+1]=h.g,this.col[c+2]=h.b,this.life[l]=this.maxLife[l]=o.life,this.size0[l]=o.size,this.size1[l]=o.sizeEnd??o.size,this.a0[l]=o.alpha??1,this.grav[l]=o.grav??0,this.drag[l]=o.drag??0,this.flags[l]=o.blood?1:0}update(t,e){let{pos:i,vel:n,life:r}=this;for(let a=0;a<this.n;a++){if(r[a]<=0){this.alpha[a]!==0&&(this.alpha[a]=0,this.size[a]=0);continue}r[a]-=t;let o=a*3,l=Math.max(0,1-this.drag[a]*t);if(n[o]*=l,n[o+1]=n[o+1]*l-this.grav[a]*t,n[o+2]*=l,i[o]+=n[o]*t,i[o+1]+=n[o+1]*t,i[o+2]+=n[o+2]*t,this.flags[a]===1&&i[o+1]<.02){Math.random()<.18&&e.splat(i[o],i[o+2],T(.2,.55)),r[a]=0;continue}let c=1-r[a]/this.maxLife[a];this.size[a]=this.size0[a]+(this.size1[a]-this.size0[a])*c,this.alpha[a]=this.a0[a]*(c<.1?c/.1:1-Math.max(0,(c-.5)/.5))}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0}},ho=class{constructor(t,e,i,n=1){let r=new tn(n,n);r.rotateX(-Math.PI/2),this.mat=new He({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.3}),this.mesh=new Ia(r,this.mat,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1;let a=new Gt().makeScale(0,0,0);for(let o=0;o<i;o++)this.mesh.setMatrixAt(o,a);this.count=i,this.next=0,t.add(this.mesh),this._m=new Gt,this._q=new Qe,this._q2=new Qe,this._s=new E,this._up=new E(0,1,0)}add(t,e,i){this._q.setFromUnitVectors(this._up,e),this._q2.setFromAxisAngle(this._up,T(0,Math.PI*2)),this._q.multiply(this._q2),this._s.set(i,i,i),this._m.compose(t,this._q,this._s),this.mesh.setMatrixAt(this.next,this._m),this.next=(this.next+1)%this.count,this.mesh.instanceMatrix.needsUpdate=!0}clear(){let t=new Gt().makeScale(0,0,0);for(let e=0;e<this.count;e++)this.mesh.setMatrixAt(e,t);this.mesh.instanceMatrix.needsUpdate=!0}},Ue=s=>new xt(s),Tr=[Ue(6946816),Ue(9045253),Ue(4849664),Ue(10096656)],eh=[Ue(16765056),Ue(16755264),Ue(16773312)],mf=[Ue(16742938),Ue(16752688),Ue(16732176),Ue(16765024)],ih=[Ue(2105376),Ue(2763306),Ue(1579032)],ny=[Ue(5920336),Ue(4867648),Ue(6973024)],sy=[Ue(6356800),Ue(4243488),Ue(9502560)],Ar=new E,nh=new E,uo=class{constructor(t){this.game=t;let e=t.scene;this.scene=e,this.soft=new co(e,2600,!1,.15),this.glow=new co(e,1600,!0,0),this.splats=new ho(e,gt.bloodDecal(),140,1),this.holes=new ho(e,gt.bulletHole(),120,.12),this.debris=[],this.emitters=[],this.rain=null}setScale(t){this.soft.mat.uniforms.uScale.value=t,this.glow.mat.uniforms.uScale.value=t}clear(){this.splats.clear(),this.holes.clear();for(let t of this.debris)this.scene.remove(t.mesh);this.debris.length=0,this.emitters.length=0;for(let t of[this.soft,this.glow])t.life.fill(0);this.setRain(!1)}blood(t,e,i=14,n=3,r=.7,a=.09){for(let o=0;o<i;o++){let l=n*T(.3,1);this.soft.spawn(t.x,t.y,t.z,(e.x+T(-r,r))*l,(e.y+T(-r*.5,r*1.2))*l+T(0,1.5),(e.z+T(-r,r))*l,{color:ie(Tr),life:T(.5,1.1),size:a*T(.6,1.6),sizeEnd:a*.5,grav:9.8,drag:.5,blood:!0})}for(let o=0;o<3;o++)this.soft.spawn(t.x,t.y,t.z,e.x*.6+T(-.3,.3),T(-.1,.4),e.z*.6+T(-.3,.3),{color:Tr[1],life:T(.25,.45),size:.25,sizeEnd:.6,alpha:.5,drag:3})}acid(t,e=16){for(let i=0;i<e;i++)this.glow.spawn(t.x,t.y,t.z,T(-2,2),T(0,3),T(-2,2),{color:ie(sy),life:T(.3,.7),size:T(.06,.14),sizeEnd:.02,grav:8})}sparks(t,e,i=8){for(let n=0;n<i;n++){let r=T(2,6);this.glow.spawn(t.x,t.y,t.z,(e.x+T(-.7,.7))*r,(e.y+T(-.3,.9))*r,(e.z+T(-.7,.7))*r,{color:ie(eh),life:T(.12,.35),size:T(.03,.06),sizeEnd:.01,grav:9})}this.glow.spawn(t.x,t.y,t.z,0,0,0,{color:eh[0],life:.06,size:.35,sizeEnd:.1})}dust(t,e,i=5,n=ny){for(let r=0;r<i;r++)this.soft.spawn(t.x,t.y,t.z,e.x*T(.3,1.2)+T(-.3,.3),e.y*T(.3,1.2)+T(0,.5),e.z*T(.3,1.2)+T(-.3,.3),{color:ie(n),life:T(.4,.9),size:T(.08,.16),sizeEnd:.35,alpha:.6,drag:2})}splat(t,e,i){Ar.set(t,.012+Math.random()*.004,e),nh.set(0,1,0),this.splats.add(Ar,nh,i)}bulletHole(t,e){Ar.copy(t).addScaledVector(e,.01),this.holes.add(Ar,e,T(.8,1.3))}explosion(t,e=1){for(let i=0;i<60*e;i++){let n=T(2,8)*e,r=T(0,Math.PI*2),a=T(-.2,1);this.glow.spawn(t.x,t.y,t.z,Math.cos(r)*n*(1-a*.5),a*n,Math.sin(r)*n*(1-a*.5),{color:ie(mf),life:T(.3,.8),size:T(.3,.8)*e,sizeEnd:.05,grav:2,drag:2.5})}for(let i=0;i<25*e;i++)this.soft.spawn(t.x+T(-.5,.5),t.y+T(0,1),t.z+T(-.5,.5),T(-1.5,1.5),T(.5,2.5),T(-1.5,1.5),{color:ie(ih),life:T(1.2,2.4),size:T(.6,1)*e,sizeEnd:2.4*e,alpha:.7,drag:1.2});for(let i=0;i<30;i++)this.glow.spawn(t.x,t.y,t.z,T(-9,9),T(2,10),T(-9,9),{color:eh[1],life:T(.4,1),size:.05,sizeEnd:.01,grav:9});this.game.lights.flash(t,16747056,80*e,.35)}muzzle(t){this.game.lights.flash(t,16760944,18,.05)}addEmitter(t){let e={acc:0,life:1/0,...t,pos:t.pos?t.pos.clone():new E};return this.emitters.push(e),e}fire(t,e=1,i=1/0){return this.game.lights.addAnchor({pos:t.clone().add(new E(0,.8,0)),color:new xt(16742954),intensity:25*e,distance:10,flicker:.6,temp:i<1/0?i:void 0}),this.addEmitter({pos:t,kind:"fire",rate:40*e,size:e,life:i})}addDebris(t,e,i,n=4,r=!0,a=.1){if(this.scene.add(t),t.traverse(o=>o.isMesh&&o.layers.disable(1)),this.debris.push({mesh:t,vel:e,spin:i,life:n,maxLife:n,bleed:r,radius:a,bounced:0}),this.debris.length>70){let o=this.debris.shift();this.scene.remove(o.mesh)}}setRain(t){if(t&&!this.rain){let i=new Float32Array(8400);this.rainSpeed=new Float32Array(1400);for(let a=0;a<1400;a++){let o=T(-15,15),l=T(-2,14),c=T(-15,15);i.set([o,l,c,o+.02,l-.45,c+.04],a*6),this.rainSpeed[a]=T(14,20)}let n=new Ee;n.setAttribute("position",new Pe(i,3).setUsage(Us));let r=new yr({color:8425640,transparent:!0,opacity:.32,fog:!0,depthWrite:!1});this.rain=new Ua(n,r),this.rain.frustumCulled=!1,this.scene.add(this.rain)}else!t&&this.rain&&(this.scene.remove(this.rain),this.rain.geometry.dispose(),this.rain=null)}update(t){this.soft.update(t,this),this.glow.update(t,this);for(let e=this.emitters.length-1;e>=0;e--){let i=this.emitters[e];if(i.life-=t,i.life<=0){this.emitters.splice(e,1);continue}i.acc+=i.rate*t;let n=i.follow?i.follow.getWorldPosition(Ar):i.pos;for(;i.acc>=1;)if(i.acc-=1,i.kind==="fire"){let r=i.size;this.glow.spawn(n.x+T(-.4,.4)*r,n.y+T(0,.3),n.z+T(-.4,.4)*r,T(-.2,.2),T(1,2.2)*r,T(-.2,.2),{color:ie(mf),life:T(.4,.9),size:T(.35,.7)*r,sizeEnd:.05,drag:.5}),Math.random()<.35&&this.soft.spawn(n.x+T(-.3,.3),n.y+1.2*r,n.z+T(-.3,.3),T(-.2,.2),T(.8,1.4),T(-.2,.2),{color:ie(ih),life:T(1.5,2.5),size:.5*r,sizeEnd:1.8*r,alpha:.5,drag:.3})}else if(i.kind==="fountain"){let r=i.dir||nh.set(0,1,0);this.soft.spawn(n.x,n.y,n.z,r.x*2+T(-.5,.5),r.y*2+T(1,2.5),r.z*2+T(-.5,.5),{color:ie(Tr),life:T(.5,.9),size:T(.05,.1),sizeEnd:.03,grav:9.8,blood:!0})}else i.kind==="smoke"?this.soft.spawn(n.x+T(-.3,.3),n.y,n.z+T(-.3,.3),T(-.2,.2),T(.4,.9),T(-.2,.2),{color:ie(i.colors||ih),life:T(2,3.5),size:.6,sizeEnd:2.4,alpha:i.alpha??.35,drag:.2}):i.kind==="drip"&&this.soft.spawn(n.x+T(-.05,.05),n.y,n.z+T(-.05,.05),0,-.5,0,{color:ie(Tr),life:1.5,size:.05,grav:9.8,blood:!0})}for(let e=this.debris.length-1;e>=0;e--){let i=this.debris[e];i.life-=t;let n=i.mesh;i.vel.y-=9.8*t,n.position.addScaledVector(i.vel,t),n.rotation.x+=i.spin.x*t,n.rotation.y+=i.spin.y*t,n.rotation.z+=i.spin.z*t,n.position.y<i.radius&&(n.position.y=i.radius,i.vel.y<-1?(i.vel.y*=-.3,i.bleed&&i.bounced<2&&this.splat(n.position.x,n.position.z,T(.3,.6)),i.bounced++):i.vel.y=0,i.vel.x*=.6,i.vel.z*=.6,i.spin.multiplyScalar(.5)),i.bleed&&i.life>i.maxLife-1.2&&Math.random()<.3&&this.soft.spawn(n.position.x,n.position.y,n.position.z,T(-.3,.3),T(0,.5),T(-.3,.3),{color:ie(Tr),life:.8,size:.06,grav:9.8,blood:!0}),i.life<1&&(n.position.y-=t*.3),i.life<=0&&(this.scene.remove(n),this.debris.splice(e,1))}if(this.rain){let e=this.game.camera.position;this.rain.position.set(Math.round(e.x),0,Math.round(e.z));let i=this.rain.geometry.attributes.position.array;for(let n=0,r=this.rainSpeed.length;n<r;n++){let a=this.rainSpeed[n]*t,o=n*6;i[o+1]-=a,i[o+4]-=a,i[o+4]<0&&(i[o+1]+=16,i[o+4]+=16,Math.random()<.08&&this.soft.spawn(this.rain.position.x+i[o],.02,this.rain.position.z+i[o+2],0,.4,0,{color:Ue(8425640),life:.15,size:.06,alpha:.5}))}this.rain.geometry.attributes.position.needsUpdate=!0}}},fo=class{constructor(t,e=8){this.scene=t,this.lights=[];for(let i=0;i<e;i++){let n=new Vn(16777215,0,10,2);t.add(n),this.lights.push(n)}this.anchors=[],this.flashes=[];for(let i=0;i<3;i++){let n=new Vn(16777215,0,14,2);t.add(n),this.flashes.push({light:n,t:0,dur:1,peak:0})}this.nextFlash=0,this.time=0}clear(){this.anchors.length=0}addAnchor(t){return t.seed=Math.random()*100,this.anchors.push(t),t}flash(t,e,i,n){let r=this.flashes[this.nextFlash];this.nextFlash=(this.nextFlash+1)%this.flashes.length,r.light.position.copy(t),r.light.color.set(e),r.peak=i,r.t=n,r.dur=n}update(t,e,i){this.time+=t;let n=this.time;for(let l=this.anchors.length-1;l>=0;l--){let c=this.anchors[l];c.temp!==void 0&&(c.temp-=t,c.temp<=0&&this.anchors.splice(l,1))}let r=e.x+i.x*6,a=e.z+i.z*6,o=this.anchors.map(l=>({a:l,d:(l.pos.x-r)**2+(l.pos.z-a)**2+(l.pos.y-e.y)**2}));o.sort((l,c)=>l.d-c.d);for(let l=0;l<this.lights.length;l++){let c=this.lights[l],h=o[l];if(!h||h.d>45*45){c.intensity=0;continue}let u=h.a;c.position.copy(u.pos),c.color.copy(u.color),c.distance=u.distance;let f=1;if(u.flicker){let m=Math.sin(n*13+u.seed)*Math.sin(n*7.3+u.seed*2)*Math.sin(n*23+u.seed);f=1-u.flicker*(m>.15?1:.2*Math.random())}u.pulse&&(f*=.15+.85*Math.max(0,Math.sin(n*u.pulse+u.seed))),u.strobe!==void 0&&(f*=Math.sin(n*9+u.strobe)>0?1:.05),u.temp!==void 0&&(f*=It(u.temp,0,1));let d=It(1-(Math.sqrt(h.d)-30)/15,0,1);c.intensity=u.intensity*f*d}for(let l of this.flashes)l.t>0?(l.t-=t,l.light.intensity=l.peak*Math.max(0,l.t/l.dur)):l.light.intensity=0}};function xf(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=gf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let m=gf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function gf(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Pe(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let x=h.getComponent(f,m);o.setComponent(f+u,m,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var _n=null;function be(s,t=2,e={}){let i=new He({map:s,color:e.color??16777215,roughness:e.rough??.9,metalness:e.metal??0,emissive:e.emissive??0,emissiveIntensity:e.ei??1,emissiveMap:e.emissiveMap??null,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Ui});return i.userData.scale=t,e.depthWrite===!1&&(i.depthWrite=!1),e.bump&&s&&(i.bumpMap=s,i.bumpScale=e.bump),i}var Ne=(s,t={})=>be(null,1,{color:s,...t}),Rr=(s,t=2)=>be(null,1,{color:0,emissive:s,ei:t,rough:1});function ry(){if(_n)return _n;let s=t=>{let e=gt.facade(t);return be(e.map,6,{emissive:16777215,emissiveMap:e.emissive,ei:.55,bump:1.5})};return _n={asphalt:be(gt.asphalt(),5,{rough:.38,bump:2.5}),sidewalk:be(gt.sidewalk(),2,{rough:.55,bump:2}),brick:be(gt.brick(),3,{rough:.85,bump:4}),plaster:be(gt.plaster(),3,{bump:1.5}),wood:be(gt.wood(),1.5,{rough:.75,bump:2}),crate:be(gt.crate(),1,{rough:.8,bump:3}),metal:be(gt.metal(),1.5,{metal:.6,rough:.45,bump:1.5}),rust:be(gt.rust(),1.5,{metal:.4,rough:.7,bump:3}),hospFloor:be(gt.hospFloor(),4,{rough:.22,bump:1.5}),hospWall:be(gt.hospWall(),3.2,{rough:.6,bump:1}),ceiling:be(gt.ceiling(),1.2,{bump:1.5}),plate:be(gt.plate(),1.5,{metal:.7,rough:.35,bump:4}),labWall:be(gt.labWall(),4,{metal:.5,rough:.4,bump:2}),hazard:be(gt.hazard(),1,{rough:.6,bump:1}),facade:[s(0),s(1),s(2),s(3)],concrete:be(gt.sidewalk(),4,{color:10132122}),darkMetal:Ne(1974822,{metal:.6,rough:.5}),black:Ne(723724,{rough:.6}),glass:Ne(856856,{metal:.8,rough:.05}),white:Ne(13158078,{rough:.6}),offwhite:Ne(10328720),green:Ne(3099190),teal:Ne(4091756),red:Ne(9050644,{rough:.5}),yellow:Ne(13081108),blue:Ne(1846354),chrome:Ne(10134186,{metal:1,rough:.18}),rubber:Ne(1118481,{rough:1}),curtain:Ne(7311242,{side:mi}),mattress:Ne(12104866),blanket:Ne(5599370),lineWhite:Ne(12434866,{rough:.7}),lineYellow:Ne(11569690,{rough:.7}),trash:Ne(1381653,{rough:.4}),dirt:Ne(2761240),bark:Ne(2827294),lampWarm:Rr(16760944,3),lampCold:Rr(14217471,3),lampRed:Rr(16722458,3),lampBlue:Rr(2774527,3),lampGreen:Rr(5308304,2.5),screen:be(gt.screen(),1,{emissive:16777215,emissiveMap:gt.screen(),ei:1.2}),tankGlass:be(null,1,{color:8965290,transparent:!0,opacity:.18,rough:.1,metal:.2,depthWrite:!1}),tankFluid:be(null,1,{color:1060896,emissive:2817914,ei:.35,transparent:!0,opacity:.45,depthWrite:!1}),flesh:be(gt.flesh(),1,{rough:.35}),bloodPool:be(gt.bloodDecal(),1,{transparent:!0,depthWrite:!1,rough:.1}),puddle:be(null,1,{color:329482,metal:.9,rough:.02,transparent:!0,opacity:.75,depthWrite:!1})},_n.bloodPool.polygonOffset=!0,_n.bloodPool.polygonOffsetFactor=-2,_n.puddle.polygonOffset=!0,_n.puddle.polygonOffsetFactor=-1,_n}function yf(s,t,e,i=1){let n=new he(s,t,e),r=n.attributes.uv,a=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/i,r.getY(c)*a[o][1]/i)}return n}var po=new Gt,_f=new Qe,vf=new xi,Mf=new E,bf=new E(1,1,1),mo=class{constructor(t,e){this.game=t,this.root=e,this.batches=new Map,this.M=ry()}_add(t,e,i,n,r,a=0,o=0,l=0){return vf.set(a,o,l),_f.setFromEuler(vf),Mf.set(i,n,r),po.compose(Mf,_f,bf),t.applyMatrix4(po),this.batches.has(e)||this.batches.set(e,[]),this.batches.get(e).push(t),t}box(t,e,i,n,r,a,o,l=0,c=0,h=0){return this._add(yf(e,i,n,t.userData.scale||1),t,r,a+i/2,o,c,l,h)}cbox(t,e,i,n,r,a,o,l=0,c=0,h=0){return this._add(yf(e,i,n,t.userData.scale||1),t,r,a,o,c,l,h)}cyl(t,e,i,n,r,a,o,l=10,c=0,h=0,u=0){let f=new Me(e,i,n,l);return this._add(f,t,r,a,o,c,h,u)}ico(t,e,i,n,r,a=1,o=1,l=1){let c=new Ps(e,0);c.deleteAttribute("normal");let h=(c.index,c);h.scale(a,o,l);let u=ay(h);return this._add(u,t,i,n,r)}mesh(t,e,i,n,r,a=0,o=!1){let l=new Q(t,e);return l.position.set(i,n,r),l.rotation.y=a,o&&l.layers.enable(1),this.root.add(l),l}cone(t,e,i,n=1.8,r=4.5,a=16760944,o=.07){let l=a+":"+o;this._cones=this._cones||{},this._cones[l]||(this._cones[l]=new We({color:a,map:gt.beam(),transparent:!0,opacity:o,blending:Ni,depthWrite:!1,side:mi,fog:!0}));let c=new Me(.15,n,r,20,1,!0),h=this.mesh(c,this._cones[l],t,e-r/2,i);return h.renderOrder=7,h}puddle(t,e,i=T(1,2.5),n=T(.8,2)){let r=new Cs(.5,18);r.scale(i,n,1);let a=this.mesh(r,this.M.puddle,t,.008,e);a.rotation.x=-Math.PI/2,a.rotation.z=T(0,3),a.receiveShadow=!0}light(t,e,i,n=16760944,r=12,a=14,o={}){this.game.lights.addAnchor({pos:new E(t,e,i),color:new xt(n),intensity:r,distance:a,...o})}finish(){let e=new Ti,i=new E;for(let[n,r]of this.batches){let a=new Map;for(let o of r){o.computeBoundingBox(),e.copy(o.boundingBox).getCenter(i);let l=e.getSize(new E),c=Math.max(l.x,l.z)>16*2?"big":`${Math.floor(i.x/16)},${Math.floor(i.z/16)}`;a.has(c)||a.set(c,[]),a.get(c).push(o)}for(let[o,l]of a){if(o==="big"){l.forEach(h=>this._emit(h,n));continue}let c=xf(l,!1);l.forEach(h=>h.dispose()),c&&this._emit(c,n)}}this.batches.clear()}_emit(t,e){t.computeBoundingSphere();let i=new Q(t,e);i.layers.enable(1),i.receiveShadow=!0,i.castShadow=!e.transparent&&!e.userData.noShadow,i.matrixAutoUpdate=!1,i.updateMatrix(),this.root.add(i)}floor(t,e,i,n,r,a=0,o=.2){this.box(t,Math.abs(n-e),o,Math.abs(r-i),(e+n)/2,a-o,(i+r)/2)}ceiling(t,e,i,n,r,a=3.2,o=.2){this.box(t,Math.abs(n-e),o,Math.abs(r-i),(e+n)/2,a,(i+r)/2)}wall(t,e,i,n,r,a=3.2,o=.25,l=[],c=0){let h=n-e,u=r-i,f=Math.hypot(h,u),d=h/f,m=u/f,x=Math.atan2(h,u),g=[],p=0,_=[...l].sort((v,y)=>v.at-y.at);for(let v of _){g.push([p,v.at-v.w/2]);let y=v.h??2.3;if(y<a){let I=v.at;this.box(t,o,a-y,v.w,e+d*I,c+y,i+m*I,x)}p=v.at+v.w/2}g.push([p,f]);for(let[v,y]of g){let I=y-v;if(I<=.01)continue;let A=(v+y)/2;this.box(t,o,a,I,e+d*A,c,i+m*A,x)}}building(t,e,i,n,r,a=Te(0,3)){let o=this.M,l=Math.abs(i-t),c=Math.abs(n-e);this.box(o.facade[a%4],l,r,c,(t+i)/2,0,(e+n)/2),this.box(o.darkMetal,l+.3,.3,c+.3,(t+i)/2,r,(e+n)/2)}sign(t,e,i,n,r,a=3,o=.75,l="#1a1010",c="#ffcf6a",h=!0){let u=gt.sign(t,l,c,Math.round(Math.min(1024,Math.max(256,128*a/o))),128),f=new He({map:u,emissive:16777215,emissiveMap:u,emissiveIntensity:.9,roughness:.8}),d=this.mesh(new tn(a,o),f,e,i,n,r);if(h){let m=new xt(c);this.light(e+Math.sin(r)*.8,i,n+Math.cos(r)*.8,m.getHex(),5,7,{flicker:.15})}return d}car(t,e,i=0,n=ie([5905950,1978186,3815994,4868650,6974058,2506796]),r=!1){let a=this.M,o=this._colorMat(n),l=r?T(-.08,.08):0,c=Math.sin(i),h=Math.cos(i),u=(m,x)=>[t+m*h+x*c,e-m*c+x*h],[f,d]=u(0,0);this.box(o,1.85,.62,4.3,f,.3,d,i,0,l),[f,d]=u(0,-.2),this.box(o,1.65,.5,2.1,f,.92,d,i,0,l),this.box(a.glass,1.68,.4,2,f,.96,d,i,0,l);for(let[m,x]of[[-.85,1.35],[.85,1.35],[-.85,-1.35],[.85,-1.35]])[f,d]=u(m,x),this.cyl(a.rubber,.34,.34,.24,f,.34,d,10,0,i,Math.PI/2);if(!r)for(let m of[-.6,.6])[f,d]=u(m,2.16),this.box(a.lampWarm,.3,.12,.05,f,.6,d,i),[f,d]=u(m,-2.16),this.box(a.lampRed,.3,.12,.05,f,.65,d,i)}policeCar(t,e,i=0){let n=this.M,r=Math.sin(i),a=Math.cos(i),o=(h,u)=>[t+h*a+u*r,e-h*r+u*a],[l,c]=o(0,0);this.box(n.black,1.85,.62,4.4,l,.3,c,i),this.box(n.white,1.87,.3,1.6,l,.55,c,i),[l,c]=o(0,-.2),this.box(n.white,1.65,.5,2.1,l,.92,c,i),this.box(n.glass,1.68,.4,2,l,.96,c,i),this.box(n.lampRed,.6,.14,.3,o(-.35,-.2)[0],1.42,o(-.35,-.2)[1],i),this.box(n.lampBlue,.6,.14,.3,o(.35,-.2)[0],1.42,o(.35,-.2)[1],i);for(let[h,u]of[[-.85,1.35],[.85,1.35],[-.85,-1.35],[.85,-1.35]])[l,c]=o(h,u),this.cyl(n.rubber,.34,.34,.24,l,.34,c,10,0,i,Math.PI/2);[l,c]=o(0,-.2),this.light(l-.6,1.7,c,16719888,10,10,{strobe:0}),this.light(l+.6,1.7,c,2113791,10,10,{strobe:Math.PI})}bus(t,e,i=0){let n=this.M,r=this._colorMat(9072672),a=Math.cos(i),o=Math.sin(i);this.box(r,2.6,2.6,11,t,.5,e,i),this.box(n.glass,2.66,.95,10.2,t,1.75,e,i);for(let l=-4;l<=4;l++)this.box(r,2.7,.95,.12,t+o*l*1.15,1.75,e+a*l*1.15,i);this.box(n.glass,2.2,1,.06,t+o*5.5,1.7,e+a*5.5,i),this.box(n.black,2.64,.35,11.04,t,.45,e,i),this.box(n.offwhite,2.62,.08,11.02,t,2.7,e,i);for(let[l,c]of[[-1.2,3.6],[1.2,3.6],[-1.2,-3.4],[1.2,-3.4]])this.cyl(n.rubber,.5,.5,.3,t+l*a+c*o,.5,e-l*o+c*a,12,0,i,Math.PI/2);this.box(n.lampWarm,.4,.15,.05,t+o*5.52+a*.9,.9,e+a*5.52-o*.9,i),this.light(t+o*6.5,1,e+a*6.5,16767136,6,8)}lamp(t,e,i=0,n=16757594,r=0,a=!0){let o=this.M;this.cyl(o.darkMetal,.07,.1,5.2,t,2.6,e,6);let l=Math.sin(i),c=Math.cos(i);this.box(o.darkMetal,.1,.1,1.2,t+l*.6,5.1,e+c*.6,i),this.box(a?o.lampWarm:o.darkMetal,.5,.12,.3,t+l*1.15,4.98,e+c*1.15,i),a&&(this.light(t+l*1.15,4.6,e+c*1.15,n,30,16,{flicker:r}),this.cone(t+l*1.15,4.95,e+c*1.15,2,4.95,n,.06))}barrel(t,e,i=this.M.rust){this.cyl(i,.3,.3,.9,t,.45,e,10)}crate(t,e,i=1,n=0,r=0){this.box(this.M.crate,i,i,i,t,r,e,n)}dumpster(t,e,i=0){let n=this._colorMat(2046502);this.box(n,1.8,1.2,1.1,t,.1,e,i),this.box(this.M.darkMetal,1.85,.08,1.15,t,1.3,e,i,-.15),this.trash(t+T(-1,1),e+T(-1,1))}trash(t,e,i=Te(2,4)){for(let n=0;n<i;n++)this.ico(this.M.trash,T(.25,.4),t+T(-.6,.6),.2,e+T(-.6,.6),1,.7,1)}barricade(t,e,i=0,n=2.4){let r=this.M,a=Math.cos(i),o=-Math.sin(i);for(let l of[-1,1])this.box(r.wood,.08,1,.5,t+a*l*(n/2-.1),0,e+o*l*(n/2-.1),i);this.box(r.hazard,n,.22,.05,t,.72,e,i),this.box(r.hazard,n,.22,.05,t,.38,e,i)}hydrant(t,e){let i=this._colorMat(9050644);this.cyl(i,.13,.15,.7,t,.35,e,8),this.cyl(i,.15,.15,.1,t,.75,e,8)}bench(t,e,i=0){let n=this.M;this.box(n.wood,1.6,.06,.45,t,.45,e,i),this.box(n.wood,1.6,.4,.05,t-Math.sin(i)*.22,.55,e-Math.cos(i)*.22,i),this.box(n.darkMetal,1.5,.45,.4,t,0,e,i)}deadTree(t,e,i=T(3.5,5)){let n=this.M;this.cyl(n.bark,.1,.2,i,t,i/2,e,6);for(let r=0;r<5;r++){let a=T(0,Math.PI*2),o=T(i*.45,i*.95),l=T(.8,1.6);this.cyl(n.bark,.03,.07,l,t+Math.cos(a)*l*.35,o+l*.3,e+Math.sin(a)*l*.35,5,Math.sin(a)*.9,0,-Math.cos(a)*.9)}}fence(t,e,i,n,r=1.8){let a=Math.hypot(i-t,n-e),o=Math.ceil(a/.25),l=Math.atan2(i-t,n-e);for(let c=0;c<o;c++){let h=(c+.5)/o;fe(.06)||this.box(this.M.wood,.03,r*T(.85,1),.2,t+(i-t)*h,0,e+(n-e)*h,l,0,T(-.04,.04))}this.box(this.M.wood,.05,.1,a,(t+i)/2,r*.7,(e+n)/2,l)}roadLines(t,e,i,n=this.M.lineYellow){for(let r=Math.min(e,i);r<Math.max(e,i);r+=4)this.box(n,.15,.02,2,t,0,r+1)}bloodPool(t,e,i=T(.8,1.8)){let n=this.mesh(new tn(i,i),this.M.bloodPool,t,.015,e);n.rotation.x=-Math.PI/2,n.rotation.z=T(0,6),n.renderOrder=1}bed(t,e,i=0){let n=this.M;this.box(n.chrome,.95,.06,2,t,.55,e,i),this.box(n.mattress,.9,.16,1.9,t,.61,e,i),this.box(n.blanket,.92,.06,1.1,t-Math.sin(i)*.35,.74,e-Math.cos(i)*.35,i),this.box(n.chrome,.95,.7,.05,t+Math.sin(i)*1,.3,e+Math.cos(i)*1,i);for(let[r,a]of[[-.42,-.9],[.42,-.9],[-.42,.9],[.42,.9]]){let o=Math.cos(i),l=Math.sin(i);this.box(n.chrome,.04,.55,.04,t+r*o+a*l,0,e-r*l+a*o,i)}}gurney(t,e,i=0,n=!0){let r=this.M;this.box(r.chrome,.65,.05,1.9,t,.85,e,i),this.box(r.white,.6,.08,1.85,t,.9,e,i),this.box(r.chrome,.5,.75,.04,t,.1,e,i),n&&this.box(r.red,.4,.01,.6,t,.99,e,i)}desk(t,e,i=3,n=0,r=.8){let a=this.M;this.box(a.wood,i,1.05,r,t,0,e,n),this.box(a.offwhite,i+.1,.05,r+.1,t,1.05,e,n)}curtain(t,e,i=2,n=0){this.box(this.M.curtain,i,2.1,.03,t,.2,e,n),this.box(this.M.chrome,i,.04,.04,t,2.32,e,n)}cabinet(t,e,i=0){this.box(this.M.white,.9,1.9,.45,t,0,e,i),this.box(this.M.glass,.8,.8,.02,t+Math.sin(i)*.23,1,e+Math.cos(i)*.23,i)}wheelchair(t,e,i=0){let n=this.M;this.box(n.blue,.5,.06,.5,t,.5,e,i),this.box(n.blue,.5,.5,.05,t-Math.sin(i)*.25,.55,e-Math.cos(i)*.25,i,-.15);for(let r of[-1,1])this.cyl(n.chrome,.3,.3,.03,t+Math.cos(i)*.28*r,.3,e-Math.sin(i)*.28*r,14,0,i,Math.PI/2)}ceilingLight(t,e,i=3.18,n=!0,r=0,a=0){this.box(n?this.M.lampCold:this.M.offwhite,.5,.04,1.4,t,i-.04,e,a),n&&(this.light(t,i-.3,e,14216959,9,10,{flicker:r}),this.cone(t,i-.06,e,1.4,i-.06,12574975,.035))}door(t,e,i=0,n=this.M.wood,r=0){let a=Math.cos(i),o=-Math.sin(i);this.box(n,1,2.2,.06,t-a*.5+Math.cos(i+r)*.5,0,e-o*.5-Math.sin(i+r)*.5,i+r)}tank(t,e,i=.7,n=2.6,r=!0,a=!1){let o=this.M;this.cyl(o.darkMetal,i+.1,i+.15,.35,t,.175,e,14),this.cyl(o.darkMetal,i+.1,i+.1,.3,t,n+.2,e,14);let l={x:t,z:e,meshes:[]};if(a)for(let c=0;c<5;c++){let h=T(0,6.28);this.box(o.tankGlass,.3,T(.2,.8),.02,t+Math.cos(h)*i,.35,e+Math.sin(h)*i,h)}else{let c=this.mesh(new Me(i*.95,i*.95,n-.4,16),o.tankFluid,t,.35+(n-.4)/2,e);c.renderOrder=2;let h=this.mesh(new Me(i,i,n-.1,16,1,!0),o.tankGlass,t,.35+(n-.1)/2,e);h.renderOrder=3,l.meshes.push(c,h),this.light(t,n*.6,e,4259712,4,5,{flicker:.05})}if(r&&!a){let c=o.flesh;this.box(c,.35,.6,.25,t,1.1,e),this.box(c,.22,.25,.22,t,1.75,e,.4,.3),this.box(c,.1,.55,.1,t-.25,1,e,0,0,.3),this.box(c,.1,.55,.1,t+.25,1.05,e,0,0,-.4),this.box(c,.12,.6,.12,t-.1,.45,e),this.box(c,.12,.6,.12,t+.1,.5,e,0,.2)}return l}pipe(t,e,i,n,r,a,o=.12,l=this.M.rust){let c=new E(t,e,i),h=new E(n,r,a),u=c.distanceTo(h),f=new Me(o,o,u,8),d=h.clone().sub(c).normalize(),m=new Qe().setFromUnitVectors(new E(0,1,0),d),x=c.add(h).multiplyScalar(.5);po.compose(x,m,bf),f.applyMatrix4(po),this.batches.has(l)||this.batches.set(l,[]),this.batches.get(l).push(f)}console(t,e,i=0){let n=this.M;this.box(n.darkMetal,1.4,.95,.7,t,0,e,i),this.box(n.screen,1.2,.6,.05,t-Math.sin(i)*.1,1.05,e-Math.cos(i)*.1,i,-.3),this.light(t+Math.sin(i)*.6,1.3,e+Math.cos(i)*.6,3211136,2,3)}alarm(t,e,i){this.cbox(this.M.lampRed,.25,.25,.25,t,e,i),this.light(t,e-.3,i,16718346,14,12,{pulse:3})}_colorMat(t){return this._cm=this._cm||{},this._cm[t]||(this._cm[t]=Ne(t,{rough:.45,metal:.3})),this._cm[t]}};function ay(s){let e=s.attributes.position.count,i=[];for(let n=0;n<e;n++)i.push(n);return s.setIndex(i),s.attributes.uv||s.setAttribute("uv",new Xt(new Float32Array(e*2),2)),s.computeVertexNormals(),s}var sh=new Map;function ah(s,t){return sh.has(s)||sh.set(s,t()),sh.get(s)}var vn=(s,t,e=12)=>ah(`c${s}:${t}:${e}`,()=>new gn(s,t,5,e)),zs=(s,t=18,e=14)=>ah(`s${s}:${t}:${e}`,()=>new ze(s,t,e)),rh=(s,t,e)=>ah(`b${s}:${t}:${e}`,()=>new he(s,t,e,1,1,1)),en=new Map;function Re(s,t=.8,e={}){let i=s.uuid+t+(e.emissive||"");if(!en.has(i)){let n=new He({map:s,roughness:t,metalness:0,bumpMap:s,bumpScale:1.2});en.set(i,n)}return en.get(i)}function le(s,t=.6,e=0,i=0,n=1){let r="col"+s+t+e+i+n;return en.has(r)||en.set(r,new He({color:s,roughness:t,metalness:e,emissive:i,emissiveIntensity:n})),en.get(r)}var oy=s=>{let t="eye"+s;return en.has(t)||en.set(t,new We({color:new xt(s).multiplyScalar(3)})),en.get(t)},Wn=new We({color:16777215}),Hs=new He({color:4194304,emissive:16718336,emissiveIntensity:2.2,roughness:.5}),ly={normal:{hipY:.98,pr:.13,pw:.36,tr:.19,tl:.14,tsx:1.12,tsz:.66,hr:.13,ar:.055,ua:.29,fa:.28,lr:.075,th:.42,sh:.42},thin:{hipY:.98,pr:.11,pw:.3,tr:.16,tl:.18,tsx:1.08,tsz:.62,hr:.12,ar:.045,ua:.31,fa:.3,lr:.062,th:.42,sh:.42},fat:{hipY:.9,pr:.2,pw:.5,tr:.31,tl:.06,tsx:1.08,tsz:.82,hr:.14,ar:.085,ua:.31,fa:.29,lr:.1,th:.38,sh:.38}};function je(s,t,e,i,n,r,a,o=1,l=1,c=1){let h=new Q(s,t);return h.position.set(e,i,n),h.scale.set(o,l,c),h.castShadow=!0,h.receiveShadow=!0,h.userData.ent=a,h.userData.part=r,h.userData.base=t,h.layers.enable(1),h}function Vs(s,t,e="normal"){let i=ly[e],n=new zt,r=[],a=(y,I)=>(y.add(I),r.push(I),I),o=s.skin,l=s.shirt,c=s.pants,h=s.shoes||le(1380880,.7),u=new zt;u.position.y=i.hipY,n.add(u),a(u,je(vn(i.pr,Math.max(.01,i.pw-i.pr*2)),c,0,0,0,"torso",t,1,1,.8)).rotation.z=Math.PI/2;let f=new zt;f.position.y=.06,u.add(f);let d=i.tl+i.tr*2;a(f,je(vn(i.tr,i.tl),l,0,d/2,0,"torso",t,i.tsx,1,i.tsz)),s.belly&&a(f,je(zs(i.tr*.9),l,0,d*.32,i.tr*.35,"torso",t,1.1,.9,.9));let m=new zt;m.position.y=d-.04,f.add(m),a(m,je(vn(i.hr*.38,.06,8),o,0,.04,0,"head",t));let x=je(zs(i.hr),s.head,0,i.hr*1.05+.05,0,"head",t,.86,1.06,.96);x.rotation.y=0,a(m,x),a(x,je(rh(i.hr*1.2,i.hr*.2,i.hr*.3),o,0,i.hr*.33,i.hr*.8,"head",t)),a(x,je(rh(i.hr*.18,i.hr*.32,i.hr*.25),o,0,i.hr*.05,i.hr*.98,"head",t));let g=new zt;g.position.set(0,-i.hr*.45,i.hr*.25),x.add(g),a(g,je(zs(i.hr*.55,12,8),o,0,-i.hr*.12,i.hr*.2,"head",t,1.25,.6,1.1));let p=[];if(s.eyes)for(let y of[-1,1]){let I=new Q(zs(i.hr*.13,8,6),oy(s.eyes));I.position.set(y*i.hr*.4,i.hr*.2,i.hr*.86),I.userData.ent=t,I.userData.part="head",I.layers.enable(1),x.add(I),p.push(I),r.push(I)}let _={};for(let[y,I]of[["L",-1],["R",1]]){let A="arm"+y,P=new zt;P.position.set(I*(i.tr*i.tsx*.92+i.ar*.6),d-i.tr*.55,0),f.add(P),a(P,je(zs(i.ar*1.35,10,8),s.sleeves?l:o,0,0,0,A,t)),a(P,je(vn(i.ar,i.ua-i.ar*2),s.sleeves?l:o,0,-i.ua/2,0,A,t));let R=new zt;R.position.y=-i.ua,P.add(R),a(R,je(vn(i.ar*.86,i.fa-i.ar*1.7),s.longSleeves?l:o,0,-i.fa/2,0,A,t));let w=je(zs(i.ar*1.05,10,8),o,0,-i.fa-i.ar*.5,.01,A,t,.85,1.35,.6);a(R,w);for(let b=-1;b<=1;b++)a(R,je(vn(i.ar*.22,i.ar*.9,5),o,b*i.ar*.35,-i.fa-i.ar*1.5,.02,A,t));_[y]={shoulder:P,elbow:R,hand:w,name:A}}let v={};for(let[y,I]of[["L",-1],["R",1]]){let A="leg"+y,P=new zt;P.position.set(I*i.pw*.27,-.06,0),u.add(P),a(P,je(vn(i.lr,i.th-i.lr*2),c,0,-i.th/2,0,A,t,1,1,1.05));let R=new zt;R.position.y=-i.th,P.add(R),a(R,je(vn(i.lr*.84,i.sh-i.lr*1.7),s.longPants?c:o,0,-i.sh/2,0,A,t)),a(R,je(rh(i.lr*1.5,.08,i.lr*3),s.barefoot?o:h,0,-i.sh-.02,.05,A,t)),v[y]={hip:P,knee:R,name:A}}return{root:n,hips:u,torso:f,neck:m,head:x,jaw:g,eyes:p,arms:_,legs:v,meshes:r,B:i}}var Sf=["#1a1410","#3a2a1a","#5a4630","#6e6e6e","#2a1a10","#8a6a3a"];function wf(s,t){let e=Te(0,4),i=fe(.7)?ie(Sf):null,n={skin:Re(gt.skin(e),.5),head:Re(gt.zombieHead(e,i),.5),sleeves:!0,longSleeves:fe(.3),longPants:!0,eyes:s==="lab"?"#7aff9a":s==="hospital"?"#cfe8ff":"#ffd27a"};(t==="runner"||t==="leaper")&&(n.eyes="#ff3a1a"),t==="brute"&&(n.eyes="#ff8a1a",n.belly=!0);let r=(a,o,l=.7)=>Re(gt.cloth(a,o,l),.85);if(s==="hospital"){let a=Math.random();a<.6?(n.shirt=r(ie(["#8fb0c0","#a3b8a0","#b0b0c0"]),"gown",.9),n.pants=n.shirt,n.sleeves=!1,n.longPants=!1,n.barefoot=!0):a<.85?(n.shirt=r(ie(["#3e7a78","#4a6a8a"]),"shirt",.8),n.pants=n.shirt):(n.shirt=r("#c8c8c0","shirt",1),n.pants=r("#2a2a30","denim",.3),n.longSleeves=!0)}else if(s==="lab"){let a=Math.random();a<.45?(n.shirt=r("#c9c9c2","shirt",.9),n.pants=r("#3a3a40","denim",.4),n.longSleeves=!0):a<.75?(n.shirt=r("#b89a20","hazmat",.6),n.pants=n.shirt,n.longSleeves=!0):(n.shirt=r("#2a2e36","uniform",.6),n.pants=r("#22252b","denim",.3))}else n.shirt=r(ie(["#4a5a6a","#7a2a2a","#2a3a2a","#8a7a5a","#5a5a5a","#6a4a2a"]),ie(["shirt","plaid","shirt"]),.7),fe(.15)&&(n.shirt=r("#1e2a44","uniform",.6)),n.pants=r(ie(["#2a3550","#3a3226","#222222","#4a4030"]),"denim",.4);return n}function Ef(){let s=Te(0,3),t=ie(Sf);return{skin:Re(gt.humanSkin(s),.6),head:Re(gt.humanHead(s,t),.6),shirt:Re(gt.cloth(ie(["#b03a2a","#2a6a9a","#d0a040","#e0e0d8","#5a8a4a"]),"shirt",.15),.85),pants:Re(gt.cloth(ie(["#2a3550","#5a4a3a","#1a1a1a"]),"denim",0),.85),sleeves:!0,longSleeves:fe(.5),longPants:!0,eyes:null}}function Mn(s,t){for(let e of s.meshes){if(e.userData.part===void 0)continue;let i=t||e.userData.base;e.material!==i&&e.userData.base&&(e.material=i)}}var Se=new E,S_=new E,w_=new Qe,Cr=new E(0,1,0),Ci=class{constructor(t){this.game=t,this.dead=!1,this.remove=!1,this.root=new zt,this.kind="entity"}get pos(){return this.root.position}update(){}onShot(){return!1}blast(){}};function bn(s,t){s.traverse(e=>{e.isMesh&&(t?e.layers.enable(1):e.layers.disable(1))})}function oh(s,t,e){s.traverse(i=>{i.isMesh&&(i.userData.ent=t,i.userData.part=e,i.layers.enable(1),i.castShadow=!0)})}function Af(s){let t=s.isMesh?new Q(s.geometry,s.userData.base||s.material):new zt;t.position.copy(s.position),t.quaternion.copy(s.quaternion),t.scale.copy(s.scale),t.visible=s.visible,t.castShadow=!0;for(let e of s.children)t.add(Af(e));return t}function Tf(s){s.updateWorldMatrix(!0,!0);let t=Af(s);return s.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.visible=!0,t}var lh={shambler:{hp:3,speed:[.75,1.15],build:"normal",windup:1,range:1.45,score:100,pitch:1},runner:{hp:2,speed:[3,3.6],build:"thin",windup:.7,range:1.5,score:150,pitch:1.35,run:!0},brute:{hp:14,speed:[.8,.95],build:"fat",scale:1.28,windup:1.3,range:1.95,score:400,pitch:.6,heavy:!0},thrower:{hp:4,speed:[.9,1.1],build:"normal",windup:.9,range:1.45,score:200,throws:!0,keep:[7,11],pitch:.9},crawler:{hp:2,speed:[.55,.75],build:"normal",crawl:!0,windup:.9,range:1.35,score:80,pitch:1.1},leaper:{hp:2,speed:[2.4,2.9],build:"thin",windup:.55,range:1.5,score:200,leaps:!0,pitch:1.5}},cy={head:3,torso:1,armL:.5,armR:.5,legL:.5,legR:.5},Gs=class extends Ci{constructor(t,e){super(t),this.kind="zombie",this.type=e.type||"shambler";let i=this.def=lh[this.type],n=t.diff;this.maxHp=this.hp=i.hp*n.hp*(e.hpMul||1),this.speed=T(i.speed[0],i.speed[1])*n.speed*(e.speedMul||1),this.windupTime=i.windup*n.windup,this.range=i.range,this.keep=i.keep?T(i.keep[0],i.keep[1]):0,this.scale=(i.scale||1)*T(.94,1.06),this.rig=Vs(wf(t.theme,this.type),this,i.build),this.root.add(this.rig.root),this.root.scale.setScalar(this.scale),this.root.position.set(e.at[0],e.y||0,e.at[1]);let r=t.playerPos;if(this.root.rotation.y=e.face??Math.atan2(r.x-e.at[0],r.z-e.at[1]),this.path=(e.path||[]).map(o=>new E(o[0],0,o[1])),this.chase=e.chase||null,this.fight=e.fight||null,this.ambient=!this.fight,this.limbHp={armL:1.6,armR:1.6,legL:2.2,legR:2.2},this.severed={},this.crawling=!!i.crawl,this.phase=T(0,6.28),this.t=T(0,10),this.kb=new E,this.groanT=T(.5,4),this.cool=T(1,2.5),this.armHang=[fe(.2),fe(.2)],this.limp=fe(.4)?T(.3,.7):1,this.headTilt=T(-.35,.35),this.flinch=0,this.headFlinch=0,this.warn=0,this.atk=0,this.matMode=0,this.flashT=0,this.state="walk",this.crawling)for(let o of["L","R"])this.rig.legs[o].hip.visible=!1,bn(this.rig.legs[o].hip,!1),this.severed["leg"+o]=!0;let a=e.emerge||"walk";a==="rise"?(this.state="rise",this.emergeT=-(e.riseDelay||0),this.root.position.y=-2):a==="drop"?(this.state="drop",this.vy=0):a==="getup"?(this.state="getup",this.emergeT=-T(.2,.8),this.rig.hips.rotation.x=-1.45,this.rig.hips.position.y=.22):a==="idle"&&(this.state="idle",this.wake=e.wake||11),e.door&&t.audio.play("door",{pan:t.panFor(this.root.position)})}get alive(){return!this.dead}targetPos(){return this.chase&&(this.chase.dead||this.chase.safe)&&(this.chase=null),this.chase?this.chase.root.position:this.game.playerPos}update(t){if(this.t+=t,this.flashT>0&&(this.flashT-=t),this.state==="dying")return this.updateDying(t);let e=this.game,i=this.root.position,n=this.targetPos(),r=n.x-i.x,a=n.z-i.z,o=Math.hypot(r,a)||.001,l=null,c=0;switch(this.kb.lengthSq()>1e-4&&(i.addScaledVector(this.kb,t),this.kb.multiplyScalar(Math.exp(-7*t))),this.flinch=Math.max(0,this.flinch-t*4),this.headFlinch=Math.max(0,this.headFlinch-t*4),this.cool-=t,this.warn=0,this.state){case"idle":l=Math.atan2(r,a),o<this.wake&&(this.state="walk",this.groan(1.2));break;case"rise":this.emergeT+=t,this.emergeT>0&&(i.y=de(-2,0,yn(It(this.emergeT/1.5,0,1))),Math.random()<.5&&e.fx.dust(Se.set(i.x,.05,i.z),Cr,1,void 0),this.emergeT>=1.5&&(i.y=0,this.state="walk",this.groan())),l=Math.atan2(r,a);break;case"drop":this.vy-=14*t,i.y+=this.vy*t,i.y<=0&&(i.y=0,this.state="land",this.landT=.4,e.audio.play("block",{pan:e.panFor(i)}),e.fx.dust(Se.set(i.x,.1,i.z),Cr,8)),l=Math.atan2(r,a);break;case"land":this.landT-=t,this.landT<=0&&(this.state="walk"),l=Math.atan2(r,a);break;case"getup":this.emergeT+=t,this.emergeT>1.6&&(this.state="walk",this.groan()),l=Math.atan2(r,a);break;case"walk":{let u=n;this.path.length&&(u=this.path[0],Math.hypot(u.x-i.x,u.z-i.z)<.5&&(this.path.shift(),u=this.path.length?this.path[0]:n));let f=u.x-i.x,d=u.z-i.z,m=Math.hypot(f,d)||.001;if(!this.path.length&&o<=this.range)this.startAttack();else if(this.def.throws&&!this.path.length&&o<=this.keep)l=Math.atan2(r,a),this.cool<=0&&!this.chase&&(this.state="throw",this.atk=0);else if(this.def.leaps&&!this.path.length&&o<7.5&&o>2.6&&this.cool<=0&&!this.chase)this.state="crouch",this.atk=0,e.audio.play("shriek",{pan:e.panFor(i),pitch:T(.9,1.2)});else{let x=this.speed;this.crawling&&(x=this.def.crawl?this.speed:.5);let g=Math.min(x*t,m);i.x+=f/m*g,i.z+=d/m*g,l=Math.atan2(f,d),c=x,this.phase+=x*t*(this.def.run?4.2:this.crawling?7:5.5)}i.y>0&&this.state==="walk"&&(i.y=Bt(i.y,0,5,t));break}case"windup":this.atk+=t,this.warn=this.atk/this.windupTime,l=Math.atan2(r,a),this.atk>=this.windupTime&&this.strike(o);break;case"recover":this.rec-=t,l=Math.atan2(r,a),this.rec<=0&&(this.state="walk");break;case"stagger":this.rec-=t,this.rec<=0&&(this.state="walk");break;case"throw":this.atk+=t,this.warn=this.atk/.9,l=Math.atan2(r,a),this.atk>=.9&&this.throwProjectile();break;case"crouch":this.atk+=t,this.warn=this.atk/this.windupTime,l=Math.atan2(r,a),this.atk>=this.windupTime&&(this.state="leap",this.leapT=0,this.leapFrom=i.clone(),this.leapTo=Se.set(-r,0,-a).normalize().multiplyScalar(1).add(n).clone(),this.leapTo.y=0);break;case"leap":this.leapT+=t/.7,this.warn=1,i.lerpVectors(this.leapFrom,this.leapTo,Math.min(1,this.leapT)),i.y=Math.sin(Math.PI*Math.min(1,this.leapT))*1.3,l=Math.atan2(r,a),this.leapT>=1&&(i.y=0,this.cool=T(3,5),this.strike(Math.hypot(n.x-i.x,n.z-i.z)));break}if(this.state!=="leap"&&this.state!=="rise"){for(let u of e.zombies){if(u===this||u.dead)continue;let f=i.x-u.root.position.x,d=i.z-u.root.position.z,m=f*f+d*d,x=.5*(this.scale+u.scale);if(m<x*x&&m>1e-5){let g=Math.sqrt(m),p=(x-g)*.5;i.x+=f/g*p,i.z+=d/g*p}}if(!this.chase){let u=i.x-e.playerPos.x,f=i.z-e.playerPos.z,d=Math.hypot(u,f),m=this.range*.72;d<m&&d>.001&&(i.x=e.playerPos.x+u/d*m,i.z=e.playerPos.z+f/d*m)}}l!==null&&(this.root.rotation.y=Gn(this.root.rotation.y,l,1-Math.exp(-7*t))),this.groanT-=t,this.groanT<=0&&(this.groanT=T(3,8),o<18&&this.groan()),this.ambient&&e.isBehind(i,6)&&(this.remove=!0);let h=0;this.flashT>0?h=1:this.warn>.45&&Math.floor(this.t*12)%2===0&&(h=2),h!==this.matMode&&(this.matMode=h,Mn(this.rig,h===1?Wn:h===2?Hs:null)),this.animate(t,c)}groan(t=1){let e=this.game,i=e.playerPos.distanceTo(this.root.position);e.audio.play("groan",{pan:e.panFor(this.root.position),vol:It(1.4-i/14,.15,1)*t,pitch:this.def.pitch*T(.9,1.1)})}startAttack(){this.state="windup",this.atk=0,this.windupHits=0,Math.random()<.6&&this.groan(1.2)}strike(t){let e=this.game;e.audio.play("swipe",{pan:e.panFor(this.root.position)}),this.chase?t<this.range+1.2&&this.chase.grabbed(this):t<this.range+1.2&&e.hurtPlayer(this),this.state="recover",this.rec=.9,this.atk=0}throwProjectile(){let t=this.game;this.rig.arms.R.hand.getWorldPosition(Se);let i=t.camera.position.clone();i.y-=.15,i.x+=T(-.2,.2);let n=t.theme==="lab"?"acid":t.theme==="hospital"?"cleaver":"bottle";t.addEntity(new Sn(t,{from:Se.clone(),to:i,kind:n,time:T(1.3,1.6)})),this.state="recover",this.rec=.6,this.cool=T(2.6,4.2)}stagger(t=.4){this.state==="leap"&&(this.root.position.y=0),this.state="stagger",this.rec=t,this.atk=0}onShot(t,e,i){if(this.dead)return!1;let n=this.game,r=0,a=!1,o=t[0].point;for(let c of t){let h=cy[c.part]??1;c.part==="head"&&this.def.heavy&&(h=2),this.state==="leap"&&(h*=2),r+=c.dmg*h,c.part==="head"&&(a=!0,o=c.point),this.limbHp[c.part]!==void 0&&!this.severed[c.part]&&(this.limbHp[c.part]-=c.dmg,this.limbHp[c.part]<=0&&this.sever(c.part,i)),n.fx.blood(c.point,i,c.part==="head"?10:6,2.5)}this.hp-=r,this.flashT=.06,this.flinch=Math.min(1,this.flinch+.6),a&&(this.headFlinch=1),(this.state==="idle"||this.state==="getup")&&(this.state="walk");let l=(this.def.heavy?.6:2.2)*Math.min(2,r);if(this.kb.x+=i.x*l,this.kb.z+=i.z*l,this.state==="windup"||this.state==="throw"||this.state==="crouch"||this.state==="leap"?(this.windupHits=(this.windupHits||0)+1,(!this.def.heavy||a||this.windupHits>=3)&&this.stagger(this.def.heavy?.5:.35)):this.state==="walk"&&!this.def.heavy&&r>=.9&&this.stagger(.18),this.hp<=0){let c=r>=4.5||e&&e.gib&&r>=this.maxHp;this.die(a?"head":c?"gib":"normal",i,o)}else n.audio.play("hit",{pan:n.panFor(this.root.position)});return!0}blast(t,e){this.dead||(Se.subVectors(this.root.position,e).setY(.6).normalize(),this.hp-=t,this.hp<=0?this.die("gib",Se,this.root.position.clone().setY(1),!0):(this.kb.addScaledVector(Se,5),this.stagger(.6)))}sever(t,e){let i=this.game;this.severed[t]=!0;let n=t.slice(-1),r=t.startsWith("arm")?this.rig.arms[n].shoulder:this.rig.legs[n].hip;Mn(this.rig,null),this.matMode=0;let a=Tf(r);if(r.visible=!1,bn(r,!1),i.fx.addDebris(a,new E(e.x*3+T(-1,1),T(1.5,3.5),e.z*3+T(-1,1)),new E(T(-8,8),T(-8,8),T(-8,8)),5,!0,.08),r.getWorldPosition(Se),i.fx.blood(Se,e,18,3),i.fx.addEmitter({follow:r,kind:"fountain",rate:40,life:1}),i.audio.play("sever",{pan:i.panFor(Se)}),i.addScore(20,Se,"LIMB"),t.startsWith("leg")&&!this.crawling){this.crawling=!0;for(let o of["L","R"])this.rig.legs[o].hip.visible=o===n?!1:this.rig.legs[o].hip.visible;this.range=1.35,this.stagger(.8)}}die(t,e,i,n=!1){if(this.dead)return;let r=this.game;if(this.dead=!0,this.state="dying",this.dyingT=0,this.warn=0,Mn(this.rig,null),bn(this.root,!1),this.fallDir=this.crawling?0:fe(.75)?-1:1,this.fallStart=this.rig.hips.rotation.x,r.onKill(this,{head:t==="head",gib:t==="gib",point:i,explosive:n}),t==="gib"){this.gib(e),this.remove=!0;return}if(t==="head"){let a=this.rig.head;a.getWorldPosition(Se),a.visible=!1,r.fx.blood(Se,e,40,4.5,.9,.11);for(let o=0;o<5;o++){let l=new Q(a.geometry,o<2?this.rig.head.userData.base:Re(gt.flesh(),.4));l.scale.setScalar(T(.15,.3)*this.scale),l.position.copy(Se),r.fx.addDebris(l,new E(e.x*3+T(-2,2),T(2,5),e.z*3+T(-2,2)),new E(T(-9,9),T(-9,9),T(-9,9)),4,!0,.04)}r.fx.addEmitter({follow:this.rig.neck,kind:"fountain",rate:55,life:1.6}),r.audio.play("headshot",{pan:r.panFor(Se)})}else r.audio.play("hit",{pan:r.panFor(this.root.position)}),Math.random()<.5&&this.groan(.8)}gib(t){let e=this.game;this.root.updateWorldMatrix(!0,!0);let i=this.root.position.clone().setY(1*this.scale);for(let n of this.rig.meshes){if(!n.visible||n.userData.part===void 0)continue;let r=n,a=!0;for(;r;)r.visible||(a=!1),r=r.parent;if(!a||Math.random()<.35)continue;let o=Tf(n),l=o.position.clone().sub(i).normalize().multiplyScalar(T(2,6));l.x+=t.x*3,l.z+=t.z*3,l.y=Math.abs(l.y)+T(1,4),e.fx.addDebris(o,l,new E(T(-12,12),T(-12,12),T(-12,12)),T(3.5,5),Math.random()<.4,.06)}e.fx.blood(i,t,70,6,1.1,.13),e.fx.splat(i.x,i.z,T(1.5,2.2)),e.audio.play("gib",{pan:e.panFor(i)}),this.root.visible=!1}updateDying(t){this.dyingT+=t;let e=this.rig,i=ao(It(this.dyingT/.6,0,1));this.fallDir!==0?(e.hips.rotation.x=de(this.fallStart,this.fallDir*1.45,i),e.hips.position.y=de(e.B.hipY,.17,i)):e.hips.position.y=Bt(e.hips.position.y,.14,6,t);let n=8;e.torso.rotation.x=Bt(e.torso.rotation.x,0,n,t),e.neck.rotation.x=Bt(e.neck.rotation.x,this.fallDir*-.4,n,t);for(let[r,a]of[["L",-1],["R",1]]){let o=e.arms[r];o.shoulder.rotation.x=Bt(o.shoulder.rotation.x,this.fallDir<0?-2.6:-.4,n,t),o.shoulder.rotation.z=Bt(o.shoulder.rotation.z,a*.9,n,t),o.elbow.rotation.x=Bt(o.elbow.rotation.x,-.3,n,t);let l=e.legs[r];l.hip.rotation.x=Bt(l.hip.rotation.x,a*.1,n,t),l.hip.rotation.z=Bt(l.hip.rotation.z,a*.15,n,t),l.knee.rotation.x=Bt(l.knee.rotation.x,this.dyingT<.3?.9:.1,n,t)}this.dyingT>2.6&&(this.root.position.y-=t*.35),this.dyingT>4.2&&(this.remove=!0)}animate(t,e){let i=this.rig,n=this.phase,r=this.t,a=i.B,o=a.hipY-.02+Math.abs(Math.cos(n))*.035,l=0,c=.28,h=Math.sin(n)*.1,u=Math.sin(n)*.07,f=.1+Math.sin(r*1.3)*.08,d=this.headTilt+Math.sin(r*.8)*.12,m=[-1.3+Math.sin(n)*.15,-1.3-Math.sin(n)*.15],x=[-.12,.12],g=[-.15,-.15],p=this.def.run?.85:.42,_=[-Math.sin(n)*p,Math.sin(n)*p*this.limp],v=[(.5+.5*Math.sin(n+1.6))*p*1.5,(.5+.5*Math.sin(n+Math.PI+1.6))*p*1.5*this.limp],y=.15+Math.sin(r*4)*.12,I=12;this.def.run&&this.state==="walk"&&(c=.55,m=[-1+Math.sin(n)*.6,-1-Math.sin(n)*.6],g=[-.6,-.6],y=.5),!e&&(this.state==="walk"||this.state==="idle")&&(_=[0,0],v=[.05,.05],h=Math.sin(r*.7)*.15,u=Math.sin(r*.9)*.06);for(let R=0;R<2;R++)this.armHang[R]&&this.state==="walk"&&(m[R]=Math.sin(n+R*3)*.25,x[R]=(R?1:-1)*.08,g[R]=-.1);switch(this.state){case"idle":c=.6,f=.5+Math.sin(r*6)*.08,m=[-.9+Math.sin(r*5)*.2,-.8+Math.sin(r*5+1)*.2],g=[-1.2,-1],_=[-.5,-.5],v=[1,1],o=a.hipY-.25,y=.3+Math.sin(r*8)*.25;break;case"rise":m=[-2.8+Math.sin(r*6)*.2,-2.7+Math.sin(r*6+2)*.2],g=[-.3,-.3],c=.1,y=.6;break;case"getup":{let R=It(this.emergeT/1.4,0,1);I=5,l=R<=0?-1.45:de(-1.45,0,yn(R)),o=R<=0?.22:de(.22,a.hipY,yn(R)),m=[-1.6,-1.4],c=R>.3?.5:0,_=[R>0?-1*(1-R):0,R>0?-.6*(1-R):0],v=[R>0?1.4*(1-R):0,R>0?1*(1-R):0];break}case"drop":case"land":_=[-.9,-.9],v=[1.4,1.4],o=a.hipY-.3,m=[-2.2,-2.2],x=[-.6,.6],c=.6;break;case"windup":{let R=It(this.atk/this.windupTime,0,1);m=[de(-1.4,-2.7,R),de(-1.4,-2.75,R)],x=[de(-.1,-.35,R),de(.1,.35,R)],g=[-.5*R,-.5*R],c=de(.3,-.25,R),f=de(.1,-.35,R),y=.4+R*.5,_=[-.2,.25],v=[.3,.1],I=14;break}case"recover":{let R=this.rec>.6;m=R?[-.6,-.7]:[-1.2,-1.2],c=R?.75:.35,f=R?.3:.1,I=R?25:8,y=.7,_=[-.35,.3];break}case"stagger":c=-.35,f=-.5,m=[-.4+Math.sin(r*20)*.3,-.6],x=[-.6,.7],I=18;break;case"throw":{let R=It(this.atk/.9,0,1);m=[-1,R<.85?de(-1.2,-3,R/.85):-.6],g=[-.3,R<.85?-1.4:-.2],h=R<.85?-.5*R:.4,c=.1,I=R<.85?10:30;break}case"crouch":_=[-1,-1],v=[1.6,1.6],o=a.hipY-.35,c=.9,m=[-.4,-.4],x=[-.7,.7],f=-.6,y=.9;break;case"leap":_=[-1.2,-.8],v=[1.6,1.2],c=.4,m=[-2.4,-2.4],x=[-.4,.4],g=[-.6,-.6],f=-.4,y=1,I=20;break}if(this.crawling){if(o=.2,l=1.42,c=-.1,u=0,h=Math.sin(n)*.15,f=-.9,m=[-2.3+Math.sin(n)*.55,-2.3-Math.sin(n)*.55],x=[-.2,.2],g=[-.3+Math.max(0,Math.cos(n))*.6,-.3+Math.max(0,-Math.cos(n))*.6],_=[.15,.25],v=[.3,.1],this.state==="windup"){let R=It(this.atk/this.windupTime,0,1);m=[-3+R*.3,-3+R*.3],f=-1.2,l=1.42-R*.4,o=.2+R*.15}y=.6+Math.sin(r*7)*.2}c-=this.flinch*.5,f-=this.headFlinch*.7;let A=(R,w,b,L=I)=>R.rotation[w]=Bt(R.rotation[w],b,L,t);i.hips.position.y=Bt(i.hips.position.y,o,I,t),A(i.hips,"x",l,this.state==="getup"?6:I),A(i.torso,"x",c),A(i.torso,"y",h),A(i.torso,"z",u),A(i.neck,"x",f),A(i.neck,"z",d),A(i.jaw,"x",y);let P=["L","R"];for(let R=0;R<2;R++){let w=i.arms[P[R]];A(w.shoulder,"x",m[R]),A(w.shoulder,"z",x[R]),A(w.elbow,"x",g[R]);let b=i.legs[P[R]];A(b.hip,"x",_[R]),A(b.knee,"x",v[R])}}},go=class extends Ci{constructor(t,e){super(t),this.kind="survivor",this.rig=Vs(Ef(),this,"normal"),this.root.add(this.rig.root),this.root.position.set(e.at[0],0,e.at[1]),this.path=(e.path||[]).map(i=>new E(i[0],0,i[1])),this.exit=(e.exit||[]).map(i=>new E(i[0],0,i[1])),this.speed=e.speed||3.2,this.state="run",this.chasers=[],this.phase=0,this.t=0,this.safe=!1,this.flashT=0,this.screamT=.2}update(t){let e=this.game;this.t+=t;let i=this.rig,n=this.root.position;if(this.flashT>0&&(this.flashT-=t,this.flashT<=0&&Mn(i,null)),this.screamT-=t,this.screamT<=0&&(this.state==="run"||this.state==="cower")&&(e.audio.play("scream",{pan:e.panFor(n)}),this.screamT=T(2.5,4)),this.state==="dead"){this.deadT+=t,i.hips.rotation.x=Bt(i.hips.rotation.x,1.45,8,t),i.hips.position.y=Bt(i.hips.position.y,.17,8,t),this.deadT>3&&(n.y-=t*.3),this.deadT>4.5&&(this.remove=!0);return}(this.state==="run"||this.state==="cower")&&this.chasers.length&&this.chasers.every(h=>h.dead)&&(this.state="rescued",this.safe=!0,e.onRescue(this),bn(this.root,!1));let r=!1,a=this.state==="rescued"?this.exit:this.state==="run"?this.path:null;if(a)if(a.length){let h=a[0],u=h.x-n.x,f=h.z-n.z,d=Math.hypot(u,f);if(d<.4)a.shift();else{let m=Math.min(d,this.speed*t);n.x+=u/d*m,n.z+=f/d*m,this.root.rotation.y=Gn(this.root.rotation.y,Math.atan2(u,f),1-Math.exp(-10*t)),r=!0,this.phase+=t*13}}else this.state==="run"?this.state="cower":this.remove=!0;let o=this.phase,l=12,c=(h,u,f)=>h.rotation[u]=Bt(h.rotation[u],f,l,t);if(r){c(i.torso,"x",.3),i.hips.position.y=i.B.hipY+Math.abs(Math.sin(o))*.05;for(let[h,u]of[[0,"L"],[1,"R"]]){let f=h?1:-1;c(i.legs[u].hip,"x",f*Math.sin(o)*.9),c(i.legs[u].knee,"x",.6+f*Math.cos(o)*.6),c(i.arms[u].shoulder,"x",-f*Math.sin(o)*.9-(this.state==="run"?1.2:0)),c(i.arms[u].shoulder,"z",f*.3),c(i.arms[u].elbow,"x",-1.2)}c(i.neck,"x",this.state==="run"?-.3:0)}else if(this.state==="cower"){i.hips.position.y=Bt(i.hips.position.y,i.B.hipY-.35,l,t),c(i.torso,"x",.5),c(i.neck,"x",.4);let h=this.chasers.find(u=>!u.dead);h&&(this.root.rotation.y=Gn(this.root.rotation.y,Math.atan2(h.root.position.x-n.x,h.root.position.z-n.z),.1));for(let[u,f]of[[0,"L"],[1,"R"]])c(i.legs[f].hip,"x",-1),c(i.legs[f].knee,"x",1.7),c(i.arms[f].shoulder,"x",-2.2+Math.sin(this.t*20+u)*.08),c(i.arms[f].shoulder,"z",(u?1:-1)*-.3),c(i.arms[f].elbow,"x",-1.6)}}grabbed(){if(this.state==="dead"||this.safe)return;let t=this.game;this.die(),t.fx.blood(Se.copy(this.root.position).setY(1.3),Cr,30,3,1.2),t.message("SURVIVOR LOST","#ff5a3a",1.6)}die(){this.state="dead",this.deadT=0,this.dead=!0,bn(this.root,!1),this.game.audio.play("scream",{pan:this.game.panFor(this.root.position)})}onShot(t,e,i){return this.dead||this.safe||(this.game.fx.blood(t[0].point,i,12,2.5),Mn(this.rig,Wn),this.flashT=.08,this.die(),this.game.onCivilianShot(this)),!1}},Rf={hit:new ze(.38,8,6)},Cf=new We({visible:!1}),Sn=class extends Ci{constructor(t,e){super(t),this.kind="projectile",this.from=e.from.clone(),this.to=e.to.clone(),this.time=e.time||1.4,this.arc=e.arc??1.2,this.t=0,this.type=e.kind||"bottle",this.dmg=e.dmg||1,this.points=e.points??50;let i=new zt;if(this.type==="bottle"){let r=le(1919520,.1,.3);i.add(new Q(new Me(.06,.06,.22,10),r));let a=new Q(new Me(.025,.05,.12,8),r);a.position.y=.16,i.add(a);let o=new Q(new ze(.04,6,4),le(0,1,0,16747040,4));o.position.y=.24,i.add(o),this.flame=o}else if(this.type==="cleaver"||this.type==="axe"){let r=new Q(new he(.22,.14,.015),le(10133670,.25,1));r.position.x=.08,i.add(r);let a=new Q(new Me(.02,.02,.16,6),le(3810322,.7));a.rotation.z=Math.PI/2,a.position.x=-.1,i.add(a),i.scale.setScalar(this.type==="axe"?2.2:1.6)}else if(this.type==="acid"){let r=new Q(new Ps(.16,2),le(2117648,.2,0,3866426,1.6));i.add(r),this.blob=r}else if(this.type==="rock")i.add(new Q(new Ha(.35,0),le(4867648,.9)));else if(this.type==="gurney"){let r=new Q(new he(.7,.15,1.8),le(11579568,.3,.9));i.add(r),this.big=!0}i.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.userData.ent=this,r.userData.part="proj",r.layers.enable(1))}),this.model=i,this.root.add(i);let n=new Q(Rf.hit,Cf);n.userData.ent=this,n.userData.part="proj",n.layers.enable(1),this.big&&n.scale.setScalar(2.2),this.root.add(n),this.root.position.copy(this.from),this.spin=new E(T(6,12),T(-4,4),T(-3,3)),t.audio.play("whoosh",{pan:t.panFor(this.from)})}update(t){this.t+=t/this.time;let e=Math.min(1,this.t);this.root.position.lerpVectors(this.from,this.to,e),this.root.position.y+=Math.sin(Math.PI*e)*this.arc,this.model.rotation.x+=this.spin.x*t,this.model.rotation.y+=this.spin.y*t,this.model.rotation.z+=this.spin.z*t,this.flame&&Math.random()<.6&&(this.flame.getWorldPosition(Se),this.game.fx.glow.spawn(Se.x,Se.y,Se.z,T(-.2,.2),T(.3,.8),T(-.2,.2),{color:new xt(16747040),life:.3,size:.12,sizeEnd:.02})),this.blob&&this.blob.scale.set(1+Math.sin(this.t*40)*.15,1-Math.sin(this.t*40)*.15,1),this.warn=e,this.t>=1&&(this.remove=!0,this.dead=!0,this.game.hurtPlayer(this,this.dmg)||this.game.audio.play(this.type==="acid"?"splash":"block"),this.type==="acid"&&this.game.screenSplat("acid"))}onShot(t,e,i){if(this.dead)return!1;let n=this.game;this.dead=!0,this.remove=!0;let r=this.root.position;return this.type==="bottle"?(n.audio.play("glass",{pan:n.panFor(r)}),n.fx.explosion(r,.35)):this.type==="acid"?(n.audio.play("splash",{pan:n.panFor(r)}),n.fx.acid(r,24)):(n.audio.play("clang",{pan:n.panFor(r)}),n.fx.sparks(r,i.clone().negate(),14)),n.addScore(this.points,r.clone(),"SHOT DOWN"),n.stats.projectiles++,!0}},xo={herb:{label:"GREEN HERB",color:3866474},shells:{label:"SHOTGUN",color:16747066},smg:{label:"SMG",color:6994175},magnum:{label:"MAGNUM",color:16769130},gem:{label:"BONUS",color:16764992}},Ws=class extends Ci{constructor(t,e){super(t),this.kind="pickup",this.type=e.kind,this.life=e.life||14,this.t=T(0,5),this.baseY=e.y??1;let i=new zt,n=xo[this.type];if(this.type==="herb"){let o=new Q(new Me(.12,.09,.16,12),le(8014378,.8));i.add(o);let l=le(1739306,.5,0,674320,1);for(let c=0;c<6;c++){let h=new Q(new ze(.08,8,6),l);h.scale.set(.5,1.6,.25);let u=c/6*Math.PI*2;h.position.set(Math.cos(u)*.05,.17,Math.sin(u)*.05),h.rotation.set(Math.sin(u)*.5,0,-Math.cos(u)*.5),i.add(h)}}else if(this.type==="shells"){i.add(new Q(new he(.3,.14,.18),le(9050640,.6)));for(let o=0;o<4;o++){let l=new Q(new Me(.03,.03,.14,8),le(12593690,.4));l.position.set(-.1+o*.065,.12,0),i.add(l);let c=new Q(new Me(.031,.031,.03,8),le(13148224,.25,1));c.position.set(-.1+o*.065,.06,0),i.add(c)}}else if(this.type==="smg"){let o=le(1711136,.4,.8);i.add(new Q(new he(.42,.1,.06),o));let l=new Q(new he(.06,.16,.05),o);l.position.set(-.05,-.1,0),i.add(l);let c=new Q(new he(.05,.2,.04),o);c.position.set(.08,-.13,0),i.add(c)}else if(this.type==="magnum"){let o=le(11580600,.2,1),l=new Q(new Me(.025,.025,.3,10),o);l.rotation.z=Math.PI/2,l.position.x=.1,i.add(l);let c=new Q(new Me(.05,.05,.08,10),o);c.rotation.z=Math.PI/2,i.add(c);let h=new Q(new he(.06,.15,.05),le(4860436,.6));h.position.set(-.08,-.08,0),h.rotation.z=.3,i.add(h)}else i.add(new Q(new Va(.15,0),le(13934624,.15,1,6965760,1)));i.traverse(o=>o.isMesh&&(o.castShadow=!0)),oh(i,this,"pickup"),this.model=i,this.root.add(i);let r=new Q(Rf.hit,Cf);r.userData.ent=this,r.userData.part="pickup",r.layers.enable(1),this.root.add(r);let a=new Rs(new Bn({map:gt.glow(),color:n.color,blending:Ni,transparent:!0,depthWrite:!1,opacity:.6}));a.scale.setScalar(.9),this.halo=a,this.root.add(a),this.root.position.set(e.pos.x,this.baseY,e.pos.z)}update(t){this.t+=t,this.life-=t,this.root.position.y=this.baseY+Math.sin(this.t*2.5)*.08,this.model.rotation.y+=t*2,this.halo.material.opacity=.45+Math.sin(this.t*6)*.15,this.root.visible=this.life>3||Math.floor(this.t*8)%2===0,(this.life<=0||this.game.isBehind(this.root.position,3))&&(this.remove=!0,this.halo.material.dispose())}onShot(){return this.dead?!1:(this.dead=!0,this.remove=!0,this.halo.material.dispose(),this.game.collect(this.type,this.root.position.clone()),!0)}},Pr=class extends Ci{constructor(t,e){super(t),this.kind="barrel";let i=new Q(new Me(.32,.32,.95,16),le(10099216,.45,.5));i.position.y=.475;let n=new Q(new Me(.325,.325,.2,16),le(13672464,.5,.3));n.position.y=.55;let r=new Q(new Me(.3,.3,.02,16),le(3815994,.5,.8));r.position.y=.96,this.root.add(i,n,r),oh(this.root,this,"barrel"),this.root.position.set(e.at[0],0,e.at[1]),this.fuse=-1}update(t){this.fuse>0&&(this.fuse-=t,Math.random()<.5&&this.game.fx.sparks(Se.copy(this.root.position).setY(1),Cr,2),this.fuse<=0&&this.explode())}onShot(){return this.dead?!1:(this.light(.08),!0)}blast(){this.light(.15)}light(t){this.dead||this.fuse>0||(this.fuse=t,this.game.audio.play("clang",{pan:this.game.panFor(this.root.position)}))}explode(){this.dead=!0,this.remove=!0;let t=this.root.position.clone().setY(.8);this.game.explode(t,4.5,14),this.game.addScore(100,t,"BOOM")}},Ir=class extends Ci{constructor(t,e){super(t),this.kind="crate";let i=e.size||.8;this.size=i;let n=new Q(new he(i,i,i),Re(gt.crate(),.8));n.position.y=i/2,n.castShadow=n.receiveShadow=!0,this.root.add(n),oh(this.root,this,"crate"),this.root.position.set(e.at[0],e.y||0,e.at[1]),this.root.rotation.y=e.ry||T(-.3,.3),this.hp=2,this.drop=e.drop}onShot(t){return this.dead?!1:(this.hp-=t.reduce((e,i)=>e+i.dmg,0),this.game.fx.dust(t[0].point,Se.set(0,.5,0),4,void 0),this.game.audio.play("impact",{pan:this.game.panFor(this.root.position)}),this.hp<=0&&this.smash(),!0)}blast(){this.smash()}smash(){if(this.dead)return;let t=this.game;this.dead=!0,this.remove=!0;let e=this.root.position.clone().setY(this.root.position.y+this.size/2),i=Re(gt.wood(),.8);for(let n=0;n<7;n++){let r=new Q(new he(this.size*T(.5,1),.04,.12),i);r.position.copy(e).add(Se.set(T(-.3,.3),T(-.3,.3),T(-.3,.3))),r.castShadow=!0,t.fx.addDebris(r,new E(T(-3,3),T(2,5),T(-3,3)),new E(T(-10,10),T(-10,10),T(-10,10)),3,!1,.02)}t.fx.dust(e,Cr,12),t.audio.play("break",{pan:t.panFor(e)}),this.drop&&t.addEntity(new Ws(t,{kind:this.drop,pos:e,y:Math.max(.7,e.y)}))}};var Qt=new E,hy=new E,wn=new E(0,1,0);function Pf(s,t,e,i){let n=(r,a,o,l=e)=>r.rotation[a]=Bt(r.rotation[a],o,l,i);s.hips.position.y=Bt(s.hips.position.y,t.hipsY??s.B.hipY,e,i),n(s.hips,"x",t.hipsX||0),n(s.torso,"x",t.torsoX??.2),n(s.torso,"y",t.torsoY||0),n(s.torso,"z",t.torsoZ||0),n(s.neck,"x",t.neckX||0),n(s.neck,"z",t.neckZ||0),n(s.jaw,"x",t.jaw??.15),["L","R"].forEach((r,a)=>{n(s.arms[r].shoulder,"x",t.shX[a]),n(s.arms[r].shoulder,"z",t.shZ?t.shZ[a]:a?.15:-.15),n(s.arms[r].elbow,"x",t.elX?t.elX[a]:-.2),n(s.legs[r].hip,"x",t.hipX?t.hipX[a]:0),n(s.legs[r].knee,"x",t.knX?t.knX[a]:.05)})}function uy(s,t,e){return{hipX:[-Math.sin(s)*t,Math.sin(s)*t],knX:[(.5+.5*Math.sin(s+1.6))*t*1.4,(.5+.5*Math.sin(s+Math.PI+1.6))*t*1.4],shX:[-.3+Math.sin(s)*.3,-.3-Math.sin(s)*.3],torsoX:.25,torsoZ:Math.sin(s)*.06,neckX:.1+Math.sin(e)*.05}}var Lr=class extends Ci{constructor(t,e){super(t),this.kind="boss",this.at=e.clone(),this.t=0,this.stateT=0,this.state="intro",this.finished=!1,this.flashT=0,this.matMode=0,this.warn=0}setState(t){this.state=t,this.stateT=0}mult(){return .2}onShot(t,e,i){if(this.dead)return!1;let n=this.game;if(this.state==="intro")return n.fx.sparks(t[0].point,i.clone().negate(),4),!0;let r=0,a=0;for(let o of t){let l=this.mult(o.part);r+=o.dmg*l,l>=1&&(a+=o.dmg*l),l===0?(n.fx.sparks(o.point,i.clone().negate(),6),n.audio.play("clang",{pan:n.panFor(o.point)})):n.fx.blood(o.point,i,l>=1?14:4,l>=1?3.5:2)}return a>0&&n.addScore(Math.round(a*30),t[0].point,null),this.hp-=r*n.diff.bossDmg,this.flashT=a>0?.08:.04,this.onDamage(r,a,t,i),a>0&&n.audio.play("hit",{pan:n.panFor(t[0].point)}),this.hp<=0&&this.defeat(),!0}blast(t){this.dead||this.state==="intro"||(this.hp-=t*.4,this.onDamage(t*.4,t*.2,[],wn),this.hp<=0&&this.defeat())}onDamage(){}defeat(){this.dead||(this.dead=!0,this.hp=0,this.setState("death"),bn(this.root,!1),this.game.onBossDefeated(this))}updateMat(t){this.flashT>0&&(this.flashT-=.016);let e=0;this.flashT>0?e=1:this.warn>.4&&Math.floor(this.t*12)%2===0&&(e=2),e!==this.matMode&&(this.matMode=e,Mn(t,e===1?Wn:e===2?Hs:null))}playerDist(){let t=this.game.playerPos;return Math.hypot(t.x-this.root.position.x,t.z-this.root.position.z)}faceYaw(){let t=this.game.playerPos;return Math.atan2(t.x-this.root.position.x,t.z-this.root.position.z)}};function dh(s,t){return s.userData.ent=t,s.userData.part="weak",s.layers.enable(1),s.castShadow=!0,s}var ch=class extends Lr{constructor(t,e){super(t,e),this.title="SPECIMEN 01",this.name="THE BUTCHER",this.maxHp=this.hp=45*t.diff.bossHp;let i={skin:Re(gt.skin(3),.45),head:Re(gt.zombieHead(3,null),.45),shirt:Re(gt.cloth("#cfc6b4","apron",1),.6),pants:Re(gt.cloth("#2a2620","denim",.6),.85),sleeves:!1,longPants:!0,belly:!0,eyes:"#ff5a10"},n=this.rig=Vs(i,this,"fat");this.root.add(n.root),this.root.scale.setScalar(1.9);let r=new zt,a=new Q(new he(.06,.55,.32),le(9080724,.3,1));a.position.set(0,-.32,.1);let o=new Q(new he(.02,.55,.04),le(5900810,.4,.5));o.position.set(0,-.32,.27);let l=new Q(new Me(.035,.035,.22,8),le(2759178,.7));l.position.y=-.02,r.add(a,o,l),r.position.set(0,-n.B.fa-.06,.02),r.traverse(h=>{h.isMesh&&(h.userData.ent=this,h.userData.part="armR",h.userData.base=h.material,h.layers.enable(1),h.castShadow=!0,n.meshes.push(h))}),n.arms.R.elbow.add(r),this.weakMat=new He({map:gt.flesh(),color:16751200,emissive:16726538,emissiveIntensity:1.5,roughness:.3});let c=n.B.tl+n.B.tr*2;this.tumor=new zt,this.tumor.position.set(-.13,c*.62,n.B.tr*n.B.tsz*.9);for(let[h,u,f,d]of[[0,0,0,.13],[.09,.07,.02,.08],[-.07,-.08,.03,.07],[.05,-.1,0,.06]]){let m=dh(new Q(new ze(d,14,10),this.weakMat),this);m.position.set(h,u,f),this.tumor.add(m)}n.torso.add(this.tumor),this.root.position.set(e.x+7,0,e.z),this.root.rotation.y=-Math.PI/2,this.phase=0,this.enraged=!1,this.summoned=!1,this.throws=0,this.acc=0,this.kb=new E}mult(t){return t==="weak"?this.state==="stagger"?1.5:1:t==="head"?.35:.12}onDamage(t,e){this.acc+=e,(this.state==="windup"&&this.acc>=3||this.state==="charge"&&this.acc>=4.5)&&(this.setState("stagger"),this.game.audio.play("roar",{pitch:1.2,vol:.8}),this.game.message("STAGGERED!","#ffd060",.9),this.kb.copy(this.root.position).sub(this.game.playerPos).setY(0).normalize().multiplyScalar(4)),!this.summoned&&this.hp<this.maxHp*.5&&(this.summoned=!0,this.enraged=!0,this.setState("summon"))}aimPoint(){return this.tumor.getWorldPosition(new E)}update(t){let e=this.game;this.t+=t,this.stateT+=t;let i=this.rig,n=this.root.position,r=e.playerPos,a=this.playerDist(),o=this.enraged?1.9:1.35,l=null,c=0,h=10;this.warn=0,this.kb.lengthSq()>.001&&(n.addScaledVector(this.kb,t),this.kb.multiplyScalar(Math.exp(-4*t))),this.weakMat.emissiveIntensity=1.2+Math.sin(this.t*6)*.6;let u=1+Math.sin(this.t*6)*.06;switch(this.tumor.scale.set(u,u,u),this.state){case"intro":this.stateT<.1&&e.audio.play("door"),this.stateT>.5&&!this.roared&&(this.roared=!0,e.audio.play("roar"),e.shake(.4)),n.x=Bt(n.x,this.at.x,1.2,t),c=1,this.stateT>3.2&&this.setState("approach");break;case"approach":{let f=this.faceYaw(),d=Math.sin(this.t*1.3)*.8,m=Math.sin(f),x=Math.cos(f);n.x+=(m*o+-x*d)*t,n.z+=(x*o+m*d)*t,c=o,a<3&&(this.setState("windup"),this.acc=0,e.audio.play("roar",{pitch:1.1,vol:.6}));break}case"windup":{let f=this.enraged?.95:1.15;this.warn=this.stateT/f;let d=It(this.stateT/f,0,1);l={shX:[-.6,de(-.5,-3,d)],elX:[-.4,-.6],torsoX:de(.2,-.3,d),neckX:-.3,jaw:.6,hipX:[-.3,.3],knX:[.3,.2]},this.stateT>=f&&(e.audio.play("swipe"),a<4.2&&e.hurtPlayer(this),this.setState("recover"));break}case"recover":l={shX:[-.6,-.6],elX:[-.3,-.2],torsoX:.8,neckX:.3,jaw:.4,hipX:[-.4,.4],knX:[.4,.2]},h=this.stateT<.2?30:8,this.stateT>.8&&this.setState("retreat");break;case"stagger":l={shX:[-.3,-.5],shZ:[-.8,.8],torsoX:-.3,neckX:-.6,jaw:.9,hipX:[-1,-1],knX:[1.6,1.6],hipsY:i.B.hipY-.35},this.stateT>2.2&&this.setState("retreat");break;case"retreat":{Qt.copy(n).sub(r).setY(0).normalize();let f=r.x+Qt.x*9.5,d=r.z+Qt.z*9.5,m=f-n.x,x=d-n.z,g=Math.hypot(m,x),p=2.6;g>.3&&(n.x+=m/g*Math.min(g,p*t),n.z+=x/g*Math.min(g,p*t),c=-p),(g<.4||this.stateT>4)&&(this.throws=0,this.setState(fe(this.enraged?.45:.6)?"throw":"chargeup"));break}case"throw":{let d=It(this.stateT/.7,0,1);if(this.warn=d,l={shX:[-.4,d<.85?de(-.4,-3,d/.85):-.5],elX:[-.2,d<.85?-1.3:-.1],torsoY:d<.85?-.5*d:.4,torsoX:.1},h=d<.85?10:30,this.stateT>=.7){i.arms.R.hand.getWorldPosition(Qt);let m=e.camera.position.clone();m.y-=.1,m.x+=T(-.25,.25),e.addEntity(new Sn(e,{from:Qt.clone(),to:m,kind:"cleaver",time:this.enraged?1.25:1.5,points:80})),this.throws++,this.stateT=-.25,this.throws>=(this.enraged?4:3)&&this.setState("approach")}break}case"chargeup":this.warn=this.stateT/.8,l={shX:[-.2,-.2],shZ:[-.6,.6],torsoX:-.2,neckX:-.5,jaw:1,hipX:[-.5,.3],knX:[.6,.2]},this.stateT<t*1.5&&e.audio.play("roar",{pitch:.9}),this.stateT>.8&&(this.setState("charge"),this.acc=0);break;case"charge":{this.warn=1;let f=this.faceYaw(),d=this.enraged?7:6;n.x+=Math.sin(f)*d*t,n.z+=Math.cos(f)*d*t,c=d,this.phase+=d*t*2.5,Math.random()<.3&&e.shake(.1),a<2.8&&(e.audio.play("swipe"),e.hurtPlayer(this),this.setState("recover"));break}case"summon":if(l={shX:[-2.8,-2.8],shZ:[-.5,.5],elX:[-.3,-.3],torsoX:-.4,neckX:-.8,jaw:1.1},this.stateT<t*1.5&&(e.audio.play("roar",{pitch:.8}),e.shake(.5),e.message("IT CALLS FOR HELP!","#ff6a3a",1.5)),this.stateT>.6&&!this.spawnedHelp){this.spawnedHelp=!0;let f=this.at;for(let[d,m]of[[4,-9],[5,9],[9,0]])e.spawn({type:"shambler",at:[f.x+d,f.z+m]},e.director.fight)}this.stateT>1.4&&this.setState("approach");break;case"death":{let f=It(this.stateT/2.5,0,1);this.stateT<1?(l={shX:[-.2,-.2],shZ:[-.4,.4],torsoX:.2,neckX:-.6,jaw:1.2,hipX:[-1.4,-1.4],knX:[2.2,2.2],hipsY:i.B.hipY-.5},h=6):(l={shX:[-2.8,-2.8],torsoX:.4,neckX:.2,hipsX:ao(It((this.stateT-1)/.6,0,1))*1.4,hipsY:.3,hipX:[-1.4,-1.4],knX:[1,1]},h=7,!this.thud&&this.stateT>1.6&&(this.thud=!0,e.shake(.7),e.audio.play("block"),e.fx.dust(Qt.copy(n).setY(.2),wn,20),e.fx.splat(n.x,n.z,3))),Math.random()<.3&&e.fx.blood(this.tumor.getWorldPosition(Qt),wn,4,3),f>=1&&this.stateT>4&&(this.finished=!0),this.stateT>3&&(n.y-=t*.25);break}}this.state!=="death"&&(this.root.rotation.y=Gn(this.root.rotation.y,this.faceYaw(),1-Math.exp(-5*t)),n.x=It(n.x,this.at.x-13,this.at.x+9),n.z=It(n.z,this.at.z-13,this.at.z+13)),l||(c&&(this.phase+=Math.abs(c)*t*3.2*(c<0?-1:1)),l=c?uy(this.phase,this.state==="charge"?.8:.45,this.t):{shX:[-.3,-.4],torsoX:.25,neckX:.1+Math.sin(this.t)*.05,jaw:.3},this.state==="charge"&&(l.torsoX=.6,l.shX=[-1,-1.6]),this.state!=="charge"&&(l.shX[1]=-.6+Math.sin(this.phase)*.2)),Pf(i,l,h,t),this.updateMat(i)}},hh=class extends Lr{constructor(t,e){super(t,e),this.title="SPECIMEN 02",this.name="THE WARDEN",this.maxHp=this.hp=50*t.diff.bossHp;let i=Re(gt.cloth("#bdb5a2","shirt",1),.8),n={skin:Re(gt.skin(1),.4),head:Re(gt.zombieHead(1,"#3a3a3a"),.4),shirt:i,pants:i,sleeves:!0,longSleeves:!1,longPants:!1,barefoot:!0,eyes:"#ff2a1a"},r=this.rig=Vs(n,this,"thin");this.root.add(r.root),this.root.scale.setScalar(1.45);let a=le(14208176,.4);for(let c of["L","R"]){r.arms[c].shoulder.scale.set(1,1.55,1);for(let h=-1;h<=1;h++){let u=new Q(new Mr(.018,.3,6),a);u.position.set(h*.03,-r.B.fa-.2,.02),u.rotation.x=Math.PI,u.userData.ent=this,u.userData.part="arm"+c,u.userData.base=a,u.layers.enable(1),u.castShadow=!0,r.arms[c].elbow.add(u),r.meshes.push(u)}}let o=le(3811866,.6),l=r.B.tl+r.B.tr*2;for(let c of[.3,.55]){let h=new Q(new Ga(r.B.tr*1.05,.015,6,20),o);h.rotation.x=Math.PI/2,h.scale.set(r.B.tsx,r.B.tsz*1.2,1),h.position.y=l*c,r.torso.add(h)}this.weakMat=new He({color:8453984,emissive:4259616,emissiveIntensity:1.6,roughness:.3}),this.growths=new zt,r.head.add(this.growths);for(let[c,h,u,f]of[[.05,.1,-.05,.06],[-.06,.08,-.07,.05],[0,.12,.03,.045],[.08,.02,-.08,.04]]){let d=dh(new Q(new ze(f,12,8),this.weakMat),this);d.position.set(c,h,u),this.growths.add(d)}this.perches=[[0,0,0],[-1,0,-6.5],[-1,0,6.5],[5,4.2,-8.8],[5,4.2,8.8],[11,4.2,0],[3,0,0]].map(([c,h,u])=>new E(e.x+c,h,e.z+u)),this.root.position.set(e.x+2,9,e.z),this.vy=0,this.acc=0,this.summoned=!1,this.perchI=0}mult(t){let e=this.state==="down"?1.5:1;return t==="weak"?1.2*e:t==="head"?1*e:.25*e}onDamage(t,e){this.acc+=t+e,this.state==="lunge"&&this.acc>=3&&(this.setState("fall"),this.vy=2,this.game.audio.play("shriek",{pitch:.7}),this.game.message("KNOCKED DOWN!","#ffd060",.9)),!this.summoned&&this.hp<this.maxHp*.5&&(this.summoned=!0,this.pendingSummon=!0)}aimPoint(){return this.growths.getWorldPosition(new E)}hopTo(t){this.perchI=t,this.hopFrom=this.root.position.clone(),this.hopTo_=this.perches[t].clone(),this.setState("hop"),this.game.audio.play("swipe")}update(t){let e=this.game;this.t+=t,this.stateT+=t;let i=this.rig,n=this.root.position,r=e.playerPos,a=null,o=12;this.warn=0,this.weakMat.emissiveIntensity=1.3+Math.sin(this.t*7)*.6;let l={hipX:[-1.1,-1.1],knX:[1.8,1.8],hipsY:i.B.hipY-.45,torsoX:.9,neckX:-.7,shX:[-.6,-.6],shZ:[-.6,.6],elX:[-.4,-.4],jaw:.5};switch(this.state){case"intro":this.vy-=12*t,n.y=Math.max(0,n.y+this.vy*t),a=l,n.y===0&&!this.landed&&(this.landed=!0,e.shake(.5),e.audio.play("block"),e.fx.dust(Qt.copy(n).setY(.1),wn,16),e.audio.play("shriek")),this.stateT>3&&this.setState("perch");break;case"perch":if(a={...l,neckZ:Math.sin(this.t*3)*.4,jaw:.3+Math.sin(this.t*9)*.2,shX:[-1.2+Math.sin(this.t*4)*.2,-1.2-Math.sin(this.t*4)*.2]},this.pendingSummon){this.pendingSummon=!1,this.setState("summon");break}if(this.stateT>(this.hp<this.maxHp*.5?.9:1.5)){let c=Math.random();if(c<.5)this.setState("crouch"),e.audio.play("shriek",{pitch:1.1});else if(c<.75)this.setState("throw");else{let h;do h=Te(0,this.perches.length-1);while(h===this.perchI);this.hopTo(h)}}break;case"hop":{let h=It(this.stateT/.85,0,1);n.lerpVectors(this.hopFrom,this.hopTo_,yn(h)),n.y+=Math.sin(Math.PI*h)*2.5,a={hipX:[-1.4,-.6],knX:[1.6,.6],torsoX:.6,shX:[-2.6,-2.4],shZ:[-.5,.5],elX:[-.2,-.2],neckX:-.4,jaw:.6},h>=1&&(e.audio.play("block",{pan:e.panFor(n)}),this.setState("perch"));break}case"crouch":{let c=this.hp<this.maxHp*.5?.55:.75;this.warn=this.stateT/c,a=l,this.stateT>c&&(this.setState("lunge"),this.acc=0,this.lFrom=n.clone(),Qt.copy(n).sub(r).setY(0).normalize(),this.lTo=new E(r.x+Qt.x*1.4,0,r.z+Qt.z*1.4));break}case"lunge":{this.warn=1;let c=It(this.stateT/.8,0,1);n.lerpVectors(this.lFrom,this.lTo,c),n.y+=Math.sin(Math.PI*c)*1.2+(1-c)*0,a={hipX:[-1,-.4],knX:[1,.3],torsoX:.3,shX:[-2.4,-2.4],shZ:[-.6,.6],elX:[-.3,-.3],neckX:-.5,jaw:1.2},o=20,c>=1&&(e.audio.play("swipe"),e.hurtPlayer(this),this.hopTo(Te(1,this.perches.length-1)));break}case"fall":this.vy-=14*t,n.y=Math.max(0,n.y+this.vy*t),Qt.copy(n).sub(r).setY(0).normalize(),n.addScaledVector(Qt,3*t),a={hipsX:-1.2,hipsY:.3,shX:[-2.5,-2],shZ:[-1,1],torsoX:0,neckX:-.6,jaw:1},n.y===0&&(e.shake(.4),e.audio.play("block"),this.setState("down"));break;case"down":a={hipsX:-1.45,hipsY:.2,shX:[-2.8+Math.sin(this.t*10)*.3,-2.6],shZ:[-1.1,1.1],torsoX:0,neckX:-.3+Math.sin(this.t*14)*.15,jaw:1,hipX:[.3,-.2],knX:[.6,1]},o=8,this.stateT>2.4&&this.hopTo(Te(3,5));break;case"throw":{let h=It(this.stateT/.9,0,1);if(this.warn=h,a={...l,hipsY:i.B.hipY-.2,shX:[-.6,h<.85?de(-1,-3,h/.85):-.3],elX:[-.3,h<.85?-1:0],torsoY:h<.85?-.6*h:.5,torsoX:.4},o=h<.85?10:30,this.stateT>=.9){i.arms.R.hand.getWorldPosition(Qt);let u=e.camera.position.clone();u.y-=.2;let f=fe(.4);if(e.addEntity(new Sn(e,{from:Qt.clone(),to:u,kind:f?"gurney":"cleaver",time:f?1.7:1.3,arc:f?1.8:1,points:f?150:60})),!f&&fe(.5)){let d=u.clone();d.x+=T(-.4,.4),e.addEntity(new Sn(e,{from:Qt.clone().add(new E(0,.2,0)),to:d,kind:"cleaver",time:1.6,arc:1.4,points:60}))}this.setState("perch")}break}case"summon":if(a={...l,torsoX:-.3,neckX:-1,jaw:1.2,shX:[-2.8,-2.8],shZ:[-.8,.8]},this.stateT<t*1.5){e.audio.play("shriek",{pitch:.6}),e.message("THE INMATES ANSWER!","#ff6a3a",1.5);let c=this.at;for(let[h,u,f]of[[6,-7,"leaper"],[6,7,"leaper"],[2,-9,"crawler"],[2,9,"crawler"]])e.spawn({type:f,at:[c.x+h,c.z+u]},e.director.fight)}this.stateT>1.4&&this.setState("perch");break;case"death":this.vy=(this.vy||0)-12*t,n.y=Math.max(0,n.y+this.vy*t),a={hipsX:-1.45,hipsY:.2,shX:[-2.6,-2.8],shZ:[-1.2,1.2],torsoX:0,neckX:-.4,jaw:1.2,hipX:[.2,-.3],knX:[.4,.8]},o=6,Math.random()<.2&&e.fx.blood(this.growths.getWorldPosition(Qt),wn,6,2.5),this.stateT>4&&(this.finished=!0),this.stateT>3&&(n.y-=t*.3);break}this.state!=="death"&&this.state!=="fall"&&this.state!=="down"&&(this.root.rotation.y=Gn(this.root.rotation.y,this.faceYaw(),1-Math.exp(-8*t))),Pf(i,a||l,o,t),this.updateMat(i)}},uh=class extends Ci{constructor(t,e,i){super(t),this.kind="tentacle",this.boss=e,this.segs=[],this.mat=Re(gt.flesh(),.35),this.tipMat=new He({map:gt.flesh(),emissive:16722442,emissiveIntensity:0,roughness:.3});let n=this.root,r=9;for(let a=0;a<r;a++){let o=de(.28,.07,a/(r-1)),l=new zt;l.position.y=a===0?0:.42;let c=new Q(new ze(o,12,8),a===r-1?this.tipMat:this.mat);c.scale.set(1,1.7,1),c.position.y=.2,c.castShadow=!0,c.userData.ent=this,c.userData.part=a>=r-3?"tip":"body",c.layers.enable(1),l.add(c),n.add(l),this.segs.push(l),n=l}this.tip=this.segs[r-1],this.root.position.copy(i),this.root.position.y=-4,this.face=Math.atan2(t.playerPos.x-i.x,t.playerPos.z-i.z),this.root.rotation.y=this.face,this.state="rise",this.t=0,this.acc=0,this.warnT=e.phase2?1:1.3,t.audio.play("break",{pan:t.panFor(i)}),t.fx.dust(i.clone().setY(.1),wn,14),t.shake(.25)}onShot(t,e,i){if(this.dead)return!1;let n=this.game,r=0;for(let a of t)r+=a.dmg*(a.part==="tip"?1.5:1),n.fx.blood(a.point,i,6,2.5);return this.acc+=r,this.boss.hp-=r*.35*n.diff.bossDmg,this.boss.flashT=.04,n.audio.play("hit",{pan:n.panFor(this.root.position)}),this.boss.hp<=0&&this.boss.defeat(),this.acc>=3&&(this.state==="rise"||this.state==="rear")&&(this.state="retract",this.t=0,n.addScore(150,t[0].point,"REPELLED"),n.audio.play("roar",{pitch:1.6,vol:.5})),!0}get warn(){return this.state==="rear"?this.t/this.warnT:this.state==="slam"?1:0}update(t){let e=this.game;this.t+=t;let i=this.segs,n=i.length,r=0,a=Math.sin(this.t*3)*.12;this.state==="rise"?(this.root.position.y=de(-4,0,yn(It(this.t/.6,0,1))),this.t>.6&&(this.state="rear",this.t=0)):this.state==="rear"?(r=-.22*It(this.t/this.warnT,0,1),this.tipMat.emissiveIntensity=Math.floor(this.t*10)%2?2.5:.4,this.t>=this.warnT&&(this.state="slam",this.t=0,e.audio.play("swipe"))):this.state==="slam"?(r=de(-.22,.2,It(this.t/.22,0,1)),this.t>=.22&&!this.hit&&(this.hit=!0,e.hurtPlayer(this),e.shake(.5)),this.t>.5&&(this.state="retract",this.t=0)):this.state==="retract"&&(this.tipMat.emissiveIntensity=0,this.root.position.y-=t*7,r=.1,this.root.position.y<-4.5&&(this.remove=!0,this.dead=!0));for(let o=1;o<n;o++)i[o].rotation.x=r*1+Math.sin(this.t*4+o*.6)*.06,i[o].rotation.z=a*Math.sin(o*.5+this.t*2)*.6}},fh=class extends Lr{constructor(t,e){super(t,e),this.title="SPECIMEN 00",this.name="SUBJECT ZERO",this.maxHp=this.hp=80*t.diff.bossHp;let i=Re(gt.flesh(),.32),n=Re(gt.skin(2),.45),r=(p,_="body")=>(p.userData.ent=this,p.userData.part=_,p.userData.base=p.material,p.layers.enable(1),p.castShadow=!0,p.receiveShadow=!0,this.meshes.push(p),p);this.meshes=[];let a=new zt;this.body=a,this.root.add(a);let o=r(new Q(new ze(2.2,28,20),i));o.scale.set(1.4,.75,1.2),o.position.y=.3,a.add(o);for(let p=0;p<10;p++){let _=T(0,Math.PI*2),v=r(new Q(new ze(T(.4,.8),14,10),p%3?i:n));v.position.set(Math.cos(_)*2.4,T(.3,1.2),Math.sin(_)*2),a.add(v)}let l=new zt;l.position.y=1.5,a.add(l),this.torso=l;let c=r(new Q(new gn(1.15,1.3,8,20),n));c.scale.set(1.15,1,.8),c.position.y=1.3,l.add(c),this.heartMat=new He({map:gt.flesh(),color:16744560,emissive:16719888,emissiveIntensity:2,roughness:.25}),this.heart=dh(new Q(new ze(.48,20,14),this.heartMat),this),this.heart.position.set(0,1.45,.78),this.meshes.push(this.heart),this.heart.userData.base=this.heartMat,l.add(this.heart);let h=Re(gt.metal(),.4);this.plates=[];for(let p of[-1,1]){let _=new zt;_.position.set(p*.85,1.45,.82);let v=r(new Q(new he(.85,1.4,.16),h),"armor");v.position.x=-p*.42,_.add(v);for(let y of[-.5,0,.5]){let I=r(new Q(new Me(.05,.05,.05,8),le(6974058,.3,1)),"armor");I.rotation.x=Math.PI/2,I.position.set(-p*.72,y,.09),_.add(I)}l.add(_),this.plates.push({hinge:_,s:p,mesh:v})}let u=new zt;u.position.set(0,2.75,.3),l.add(u),this.neck=u;let f=r(new Q(new ze(.7,22,16),n),"head");f.scale.set(1,.9,1.05),f.position.y=.55,u.add(f),this.head=f;let d=new We({color:new xt(16764992).multiplyScalar(3)});for(let p=0;p<9;p++){let _=r(new Q(new ze(T(.05,.11),8,6),d),"head"),v=T(-.9,.9),y=T(-.2,.6);_.position.set(Math.sin(v)*.62,y*.6,Math.cos(v)*.62+.05),f.add(_)}let m=new zt;m.position.set(0,-.15,.25),f.add(m),this.jaw=m;let x=r(new Q(new ze(.5,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),i),"head");x.scale.set(1.1,.8,1.1),m.add(x);let g=new Q(new Cs(.42,16),new We({color:1703936}));g.rotation.x=-Math.PI/2,g.position.y=-.01,m.add(g),this.arms=[];for(let p of[-1,1]){let _=new zt;_.position.set(p*1.45,2.3,0),l.add(_);let v=r(new Q(new gn(.38,1.4,6,14),n),"arm");v.position.y=-.85,_.add(v);let y=new zt;y.position.y=-1.7,_.add(y);let I=r(new Q(new gn(.33,1.4,6,14),i),"arm");I.position.y=-.8,y.add(I);for(let A=-1;A<=1;A++){let P=r(new Q(new Mr(.08,.6,8),le(14208176,.4)),"arm");P.position.set(A*.15,-1.8,.1),P.rotation.x=Math.PI,y.add(P)}this.arms.push({sh:_,el:y,s:p})}this.tails=[];for(let p=0;p<5;p++){let _=p/5*Math.PI*2+.3,v=new zt;v.position.set(Math.cos(_)*2.2,.6,Math.sin(_)*1.8-.6),v.rotation.set(Math.sin(_)*.5,0,-Math.cos(_)*.9),a.add(v);let y=[v];for(let I=0;I<7;I++){let A=new zt;A.position.y=I===0?0:.5;let P=r(new Q(new ze(de(.3,.08,I/6),10,8),i));P.scale.y=1.6,P.position.y=.25,A.add(P),v.add(A),y.push(A),v=A}this.tails.push(y)}this.root.position.set(e.x,-7,e.z),this.platesOpen=0,this.phase2=!1,this.attackT=2.5,this.openT=0,this.spits=0,this.summons=0}get rigLike(){return{meshes:this.meshes}}mult(t){return t==="weak"?this.platesOpen>.6?1:0:t==="armor"?0:t==="head"?.25:.08}onDamage(){!this.phase2&&this.hp<this.maxHp*.45&&(this.phase2=!0,this.setState("phase2"))}aimPoint(){let t=this.game.entities.find(e=>e.kind==="tentacle"&&!e.dead&&(e.state==="rear"||e.state==="rise"));return t?t.tip.getWorldPosition(new E):this.platesOpen>.6?this.heart.getWorldPosition(new E):this.head.getWorldPosition(new E)}spawnTentacle(){let t=this.game,e=t.playerPos;Qt.copy(this.root.position).sub(e).setY(0).normalize();let i=new E(-Qt.z,0,Qt.x),n=e.clone().addScaledVector(Qt,T(2.6,3.4)).addScaledVector(i,T(-1.6,1.6));n.y=0,t.addEntity(new uh(t,this,n))}spit(){let t=this.game;this.head.getWorldPosition(Qt),Qt.y-=.3;let e=t.camera.position.clone();e.x+=T(-.3,.3),e.y-=.15,t.addEntity(new Sn(t,{from:Qt.clone(),to:e,kind:"acid",time:T(1.2,1.5),arc:1.5,points:60})),t.audio.play("splash",{pan:t.panFor(Qt)})}update(t){let e=this.game;this.t+=t,this.stateT+=t;let i=this.root.position;this.warn=0,this.heartMat.emissiveIntensity=1.5+Math.max(0,Math.sin(this.t*7))*2.5;let n=1+Math.max(0,Math.sin(this.t*7))*.12;this.heart.scale.setScalar(n);let r=this.phase2?1:0,a=.1+Math.sin(this.t*2)*.05,o=0;switch(this.state){case"intro":i.y=de(-7,0,yn(It(this.stateT/3,0,1))),Math.random()<.6&&e.fx.dust(Qt.set(i.x+T(-3,3),.1,i.z+T(-3,3)),wn,2),Math.random()<.2&&e.shake(.15),this.stateT>2.2&&!this.roared&&(this.roared=!0,e.audio.play("roar",{pitch:.6}),e.shake(.8)),a=this.stateT>2.2?.8:.1,o=this.stateT>2.2?1:0,this.stateT>4&&this.setState("idle");break;case"idle":if(this.attackT-=t,this.attackT<=0){let l=Math.random(),c=this.phase2?.65:1;!this.phase2&&l<.38?this.setState("open"):l<.72?(this.spawnTentacle(),this.phase2&&fe(.45)&&setTimeout(()=>!this.dead&&this.spawnTentacle(),450),this.attackT=T(2.6,3.4)*c):(this.setState("spit"),this.spits=this.phase2?3:2)}break;case"open":r=1,this.stateT<t*1.5&&e.audio.play("door"),this.stateT>1&&!this.openSpawned&&(this.openSpawned=!0,fe(.5)&&this.spawnTentacle()),this.stateT>4.5&&(this.openSpawned=!1,this.setState("idle"),this.attackT=T(1.2,2));break;case"spit":{a=.9,this.warn=this.stateT%.8/.8,this.stateT>=.8&&(this.spit(),this.spits--,this.stateT=0,this.spits<=0&&(this.setState("idle"),this.attackT=T(1.8,2.6)*(this.phase2?.7:1)));break}case"phase2":if(a=1,o=1,r=1,this.stateT<t*1.5){e.audio.play("roar",{pitch:.5}),e.audio.play("explode"),e.shake(1),e.message("ITS HEART IS EXPOSED!","#ff6a3a",2);for(let c of this.plates){let h=new Q(c.mesh.geometry,c.mesh.userData.base);c.hinge.updateWorldMatrix(!0,!0),c.mesh.matrixWorld.decompose(h.position,h.quaternion,h.scale),e.fx.addDebris(h,new E(c.s*T(3,5),T(4,6),T(2,4)),new E(T(-6,6),T(-6,6),T(-6,6)),6,!1,.1),c.hinge.visible=!1,bn(c.hinge,!1)}this.heart.getWorldPosition(Qt),e.fx.explosion(Qt,.6),e.fx.blood(Qt,wn,40,5);let l=this.at;for(let[c,h]of[[-4,-10],[-4,10]])e.spawn({type:"runner",at:[l.x+c,l.z+h]},e.director.fight)}this.stateT>2&&(this.setState("idle"),this.attackT=1);break;case"death":a=1.1,o=Math.sin(this.t*8)*.5+.5,r=1,Math.random()<.5&&e.fx.blood(this.heart.getWorldPosition(Qt),hy.set(T(-1,1),1,1),10,5),Math.random()<.1&&e.fx.explosion(Qt.copy(i).add(new E(T(-2,2),T(1,4),T(-1,2))),.5),this.stateT>2.5&&(i.y-=t*2.2),this.body.rotation.z=Math.sin(this.t*20)*.05,this.stateT>6&&(this.finished=!0);break}this.platesOpen=Bt(this.platesOpen,r,4,t);for(let l of this.plates)l.hinge.rotation.y=l.s*this.platesOpen*1.6;this.torso.rotation.x=.1+Math.sin(this.t*.9)*.06,this.torso.rotation.z=Math.sin(this.t*.7)*.05,this.neck.rotation.x=.15+Math.sin(this.t*1.3)*.08,this.neck.rotation.y=Math.sin(this.t*.5)*.25,this.jaw.rotation.x=Bt(this.jaw.rotation.x,a,8,t);for(let l of this.arms){let c=de(-.4+Math.sin(this.t*1.1+l.s)*.15,-2.6,o);l.sh.rotation.x=Bt(l.sh.rotation.x,c,4,t),l.sh.rotation.z=Bt(l.sh.rotation.z,l.s*de(.35,.8,o),4,t),l.el.rotation.x=Bt(l.el.rotation.x,de(-.9,-.4,o),4,t)}this.tails.forEach((l,c)=>{for(let h=1;h<l.length;h++)l[h].rotation.x=Math.sin(this.t*2+c+h*.7)*.25,l[h].rotation.z=Math.cos(this.t*1.6+c*2+h*.5)*.25}),this.updateMat(this.rigLike)}},If={butcher:ch,warden:hh,zero:fh};var yo={pistol:{id:"pistol",name:"PISTOL",dmg:1,mag:6,rate:.12,reload:.5,pellets:1,spread:0,sound:"pistol",kick:.1,infinite:!0},shotgun:{id:"shotgun",name:"SHOTGUN",dmg:.75,mag:6,rate:.6,reload:.95,pellets:8,spread:.045,sound:"shotgun",kick:.45,gib:!0,pickup:18,falloff:!0},smg:{id:"smg",name:"SMG",dmg:.6,mag:30,rate:.075,reload:.9,pellets:1,spread:.012,auto:!0,sound:"smg",kick:.06,pickup:90},magnum:{id:"magnum",name:"MAGNUM",dmg:5,mag:6,rate:.45,reload:1,pellets:1,spread:0,sound:"magnum",kick:.6,gib:!0,pierce:!0,pickup:12}},Xs=["pistol","shotgun","smg","magnum"],En=new Ja;En.layers.set(1);En.far=120;var Dr=new E,Lf=new E,_o=new j,vo=class{constructor(t){this.game=t,this.reset()}reset(){this.slots={pistol:{def:yo.pistol,ammo:6,reserve:1/0}},this.cur="pistol",this.cool=0,this.reloadT=0,this.trigger=!1}get slot(){return this.slots[this.cur]}get def(){return this.slot.def}get reloading(){return this.reloadT>0}get empty(){return this.slot.ammo<=0}give(t){let e=yo[t],i=this.slots[t];i?i.reserve+=e.pickup:this.slots[t]={def:e,ammo:e.mag,reserve:e.pickup-e.mag},this.select(t)}select(t){!this.slots[t]||t===this.cur||(this.cur=t,this.reloadT=0,this.cool=.15,this.game.audio.play("reload"))}cycle(t){let e=Xs.filter(n=>this.slots[n]),i=e.indexOf(this.cur);this.select(e[(i+t+e.length)%e.length])}reload(){let t=this.slot;this.reloadT>0||t.ammo>=t.def.mag||t.reserve<=0||(this.reloadT=t.def.reload,this.game.audio.play("reload"))}finishReload(t=this.slot){let e=t.def.mag-t.ammo,i=Math.min(e,t.reserve);t.ammo+=i,t.reserve!==1/0&&(t.reserve-=i)}coverReload(){let t=!1;for(let e in this.slots){let i=this.slots[e];i.ammo<i.def.mag&&i.reserve>0&&(this.finishReload(i),t=!0)}t&&this.game.audio.play("reload"),this.reloadT=0}pull(){this.trigger=!0,this.fire()}release(){this.trigger=!1}update(t){this.cool-=t,this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0&&this.finishReload()),this.trigger&&this.def.auto&&this.fire();let e=this.slot;e.ammo<=0&&e.reserve<=0&&this.cur!=="pistol"&&this.cool<=0&&(delete this.slots[this.cur],this.cur="pistol")}fire(){let t=this.game;if(!t.canShoot()||this.cool>0||this.reloadT>0)return;let e=this.slot;if(e.ammo<=0){t.audio.play("empty"),t.hud.flashReload(),this.cool=.2;return}e.ammo--,this.cool=e.def.rate,t.audio.play(e.def.sound),t.onFire(e.def);let i=this.shoot(e.def,t.input.aim);t.stats.shots++,i?(t.stats.hits++,t.combo++,t.hud.hitMarker()):t.combo=0,e.ammo===0&&t.autoReload&&this.reload()}shoot(t,e){let i=this.game,n=i.camera,r=new Map,a=null;for(let l=0;l<t.pellets;l++){if(_o.set(e.x,e.y),En.setFromCamera(_o,n),t.spread){let h=T(0,Math.PI*2),u=Math.sqrt(Math.random())*t.spread;Lf.set(Math.cos(h)*u,Math.sin(h)*u,0).applyQuaternion(n.quaternion),En.ray.direction.add(Lf).normalize()}a||(a=En.ray.direction.clone());let c=En.intersectObjects(i.hitRoots,!0);for(let h of c){let u=h.object.userData.ent;if(u){if(u.dead)continue;let d=t.dmg;if(t.falloff&&(d*=It(1.5-h.distance/9,.3,1.5)),r.has(u)||r.set(u,[]),r.get(u).push({part:h.object.userData.part,point:h.point.clone(),dmg:d,object:h.object,distance:h.distance}),t.pierce&&u.kind==="zombie")continue;break}Dr.copy(h.face.normal).transformDirection(h.object.matrixWorld);let f=h.object.material&&h.object.material.metalness>.3;i.fx.bulletHole(h.point,Dr),f?(i.fx.sparks(h.point,Dr,6),Math.random()<.3&&i.audio.play("ricochet",{pan:i.panFor(h.point)})):(i.fx.dust(h.point,Dr,3),i.fx.sparks(h.point,Dr,2)),l===0&&i.audio.play("impact",{pan:i.panFor(h.point),vol:.6});break}}let o=!1;for(let[l,c]of r)l.onShot(c,t,a)&&(o=!0);return o}};function Df(s,t){_o.set(t.x,t.y),En.setFromCamera(_o,s.camera);let e=En.intersectObjects(s.hitRoots,!0);for(let i of e){let n=i.object.userData.ent;if(!(n&&n.dead))return n||null}return null}var Tn=s=>new E(s[0],s[1],s[2]),Mo=class{constructor(t){this.game=t,this.pos=new E,this.look=new E,this.lookTarget=new E,this.moving=0,this.beat=null,this.fight=null}load(t,e=0){this.stage=t,this.beats=t.beats,this.pos.copy(Tn(t.start)),this.look.copy(Tn(t.lookStart)),this.lookTarget.copy(this.look),this.i=e-1,this.fight=null,this.beat=null,this.done=!1,this.skippedSpawns=[];for(let i=0;i<e;i++){let n=this.beats[i];n.move&&this.pos.copy(Tn(n.move[n.move.length-1])),n.look&&this.look.copy(Tn(n.look)),n.spawn&&this.skippedSpawns.push(...n.spawn.filter(r=>!r.type||!["shambler","runner","brute","thrower","crawler","leaper"].includes(r.type)))}this.lookTarget.copy(this.look)}next(){this.i++;let t=this.beats[this.i];if(this.beat=t,this.bt=0,this.fight=null,!t){this.done=!0,this.game.stageClear();return}let e=this.game;if(this.skippedSpawns&&this.skippedSpawns.length&&(this.skippedSpawns.forEach(i=>e.spawn(i,null)),this.skippedSpawns=null),t.move){let i=[this.pos.clone(),...t.move.map(Tn)];this.curve=new vr(i,!1,"centripetal",.5),this.len=this.curve.getLength(),this.u=0,this.events=(t.events||[]).map(n=>({...n,fired:!1}))}if(t.look&&this.lookTarget.copy(Tn(t.look)),t.fight){let i=t.fight;this.fight={waves:i.waves,wi:-1,queue:[],members:[],clearT:-1,def:i},e.fightTimer=(i.time||30)*e.diff.timeMul,e.fightTimerMax=e.fightTimer,i.music&&e.audio.music(i.music),this.nextWave(),i.msg&&e.message(i.msg,"#ffd060",1.6)}t.boss&&e.startBoss(t.boss,Tn(t.at)),t.call&&t.call(e),t.msg&&e.message(t.msg,t.color||"#ffd060",t.dur||2),t.spawn&&t.spawn.forEach(i=>e.spawn(i,null))}nextWave(){let t=this.fight;t.wi++;let e=t.waves[t.wi];if(!e)return!1;let i=Array.isArray(e)?e:e.spawns;t.wave=Array.isArray(e)?{spawns:e}:e,t.waveMembers=[];for(let n of i)t.queue.push({spec:n,t:n.delay||0});return!0}update(t){let e=this.game,i=this.beat;if(this.moving=Bt(this.moving,0,6,t),!!i){if(this.bt+=t,i.move){let n=i.speed||3,r=It(.35+this.u*this.len/1.5,0,1)*It(.35+(1-this.u)*this.len/1.2,0,1);if(this.u=Math.min(1,this.u+n*r*t/this.len),this.curve.getPointAt(this.u,this.pos),this.moving=n*r,!i.look){let a=Math.min(1,this.u+4/this.len);if(this.curve.getPointAt(a,this.lookTarget),this.u>.97){let o=this.curve.getTangentAt(1);this.lookTarget.copy(this.pos).addScaledVector(o,6)}this.lookTarget.y=this.pos.y-.15}for(let a of this.events)!a.fired&&this.u>=a.at&&(a.fired=!0,a.spawn&&a.spawn.forEach(o=>e.spawn(o,null)),a.call&&a.call(e),a.msg&&e.message(a.msg,a.color||"#ffd060",a.dur||2),a.look&&this.lookTarget.copy(Tn(a.look)));this.u>=1&&this.next()}else if(i.fight)this.updateFight(t);else if(i.boss){if(e.boss&&!e.boss.dead){let n=e.boss.aimPoint();this.lookTarget.set(i.look[0],i.look[1],i.look[2]).lerp(n,.35)}e.boss&&e.boss.finished&&(e.boss=null,this.next())}else this.bt>=(i.wait??.01)&&this.next();this.look.x=Bt(this.look.x,this.lookTarget.x,i.lookSpeed||3.2,t),this.look.y=Bt(this.look.y,this.lookTarget.y,i.lookSpeed||3.2,t),this.look.z=Bt(this.look.z,this.lookTarget.z,i.lookSpeed||3.2,t)}}updateFight(t){let e=this.game,i=this.fight;for(let o=i.queue.length-1;o>=0;o--){let l=i.queue[o];if(l.t-=t,l.t<=0){i.queue.splice(o,1);let c=e.spawn(l.spec,i);for(let h of c)h.kind==="zombie"&&(i.members.push(h),i.waveMembers.push(h))}}let n=i.members.filter(o=>!o.dead).length,r=i.waveMembers.filter(o=>!o.dead).length,a=i.wave.left??1;if(i.queue.length===0&&r<=a&&i.wi<i.waves.length-1){this.nextWave();return}if(i.queue.length===0&&n===0&&i.wi>=i.waves.length-1){i.clearT<0&&(i.clearT=.9,e.areaClear()),i.clearT-=t,i.clearT<=0&&this.next();return}e.fightTimer-=t,e.fightTimer<=0&&(e.timeUp(),e.fightTimer=12)}};var Ie='"Oswald", "Arial Narrow", Impact, sans-serif',Xn=new E,bo=class{constructor(t,e){this.g=t,this.c=e,this.ctx=e.getContext("2d"),this.splats=[],this.popups=[],this.msgs=[],this.reloadFlash=0,this.hitT=0,this.killT=0,this.ecg=new Array(120).fill(0),this.ecgT=0,this.ecgPhase=0,this.card=null,this.coverFlash=0,this.time=0,this.dmgFlash=0,this.healFlash=0,this.resize()}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.w=window.innerWidth,this.h=window.innerHeight,this.c.width=Math.floor(this.w*t),this.c.height=Math.floor(this.h*t),this.ctx.setTransform(t,0,0,t,0,0),this.ui=It(Math.min(this.w/1280,this.h/720),.6,1.5)}clear(){this.splats.length=0,this.popups.length=0,this.msgs.length=0,this.card=null}toScreen(t){return Xn.copy(t).project(this.g.camera),{x:(Xn.x*.5+.5)*this.w,y:(-Xn.y*.5+.5)*this.h,behind:Xn.z>1}}popup(t,e,i="#fff",n=1){let r=this.toScreen(e);r.behind||this.popups.push({text:t,x:r.x+T(-10,10),y:r.y,t:0,color:i,size:n})}message(t,e="#ffd060",i=2){this.msgs=this.msgs.filter(n=>n.text!==t),this.msgs.push({text:t,color:e,t:0,dur:i}),this.msgs.length>3&&this.msgs.shift()}flashReload(){this.reloadFlash=1.2}hitMarker(t=!1){this.hitT=.15,t&&(this.killT=.25)}damage(){this.dmgFlash=1}heal(){this.healFlash=1}bossIntro(t,e){this.card={title:t,name:e,t:0,dur:3.2}}splat(t="blood"){let e=T(160,300)*this.ui,i=document.createElement("canvas");i.width=i.height=Math.ceil(e*1.4);let n=i.getContext("2d"),r=i.width/2,a=t==="acid"?[80,220,40]:[110,0,0],o=18;for(let c=0;c<o;c++){let h=T(0,Math.PI*2),u=T(0,e*.28),f=T(e*.05,e*.2),d=r+Math.cos(h)*u,m=r+Math.sin(h)*u,x=n.createRadialGradient(d,m,0,d,m,f);x.addColorStop(0,`rgba(${a[0]},${a[1]},${a[2]},0.95)`),x.addColorStop(.7,`rgba(${a[0]*.7},${a[1]*.7},${a[2]*.7},0.85)`),x.addColorStop(1,`rgba(${a[0]*.5},0,0,0)`),n.fillStyle=x,n.beginPath(),n.arc(d,m,f,0,Math.PI*2),n.fill()}for(let c=0;c<30;c++){let h=T(0,Math.PI*2),u=T(e*.3,e*.6);n.fillStyle=`rgba(${a[0]},${a[1]},${a[2]},0.9)`,n.beginPath(),n.arc(r+Math.cos(h)*u,r+Math.sin(h)*u,T(2,7),0,Math.PI*2),n.fill()}n.fillStyle="rgba(255,255,255,0.12)",n.beginPath(),n.ellipse(r-e*.08,r-e*.1,e*.1,e*.04,-.5,0,Math.PI*2),n.fill();let l=[];for(let c=0;c<4;c++)l.push({x:T(-e*.25,e*.25),w:T(4,9),len:0,speed:T(20,60)});this.splats.push({cv:i,x:T(.15,.85)*this.w,y:T(.15,.7)*this.h,t:0,life:3.2,size:e,drips:l,col:a}),this.splats.length>6&&this.splats.shift()}draw(t){let e=this.g,i=this.ctx;if(this.time+=t,i.clearRect(0,0,this.w,this.h),!(e.state==="play"||e.state==="continue")){e.state==="intro"&&this.drawMsgs(t);return}this.drawSplats(t),this.drawVignettes(t),this.drawThreats(),this.drawPopups(t),this.drawCondition(t),this.drawScore(),this.drawTimerOrBoss(),this.drawAmmo(t),this.drawCover(t),this.drawMsgs(t),this.drawCard(t),e.state==="play"&&!e.paused&&this.drawCrosshair(t)}drawSplats(t){let e=this.ctx;for(let i=this.splats.length-1;i>=0;i--){let n=this.splats[i];if(n.t+=t,n.t>n.life){this.splats.splice(i,1);continue}let r=It(1-(n.t-n.life*.55)/(n.life*.45),0,1);e.globalAlpha=r;let a=n.t*12;e.drawImage(n.cv,n.x-n.cv.width/2,n.y-n.cv.height/2+a),e.fillStyle=`rgba(${n.col[0]},${n.col[1]},${n.col[2]},0.85)`;for(let o of n.drips)o.len+=o.speed*t,o.speed*=.995,e.fillRect(n.x+o.x-o.w/2,n.y+a,o.w,n.size*.2+o.len),e.beginPath(),e.arc(n.x+o.x,n.y+a+n.size*.2+o.len,o.w*.7,0,Math.PI*2),e.fill()}e.globalAlpha=1}drawVignettes(t){let e=this.g,i=this.ctx,n=this.w,r=this.h;this.dmgFlash=Math.max(0,this.dmgFlash-t*2.2),this.healFlash=Math.max(0,this.healFlash-t*1.5);let a=this.dmgFlash*.55;if(e.lives===1&&(a=Math.max(a,.18+.14*Math.max(0,Math.sin(this.time*6)))),a>.01){let o=i.createRadialGradient(n/2,r/2,r*.25,n/2,r/2,Math.max(n,r)*.75);o.addColorStop(0,"rgba(160,0,0,0)"),o.addColorStop(1,`rgba(160,0,0,${a})`),i.fillStyle=o,i.fillRect(0,0,n,r)}if(this.healFlash>.01){let o=i.createRadialGradient(n/2,r/2,r*.25,n/2,r/2,Math.max(n,r)*.75);o.addColorStop(0,"rgba(40,255,90,0)"),o.addColorStop(1,`rgba(40,255,90,${this.healFlash*.35})`),i.fillStyle=o,i.fillRect(0,0,n,r)}}drawThreats(){let t=this.g,e=this.ctx,i=.5+.5*Math.sin(this.time*18);for(let n of t.entities){if(n.dead)continue;let r=null,a=n.warn||0;if(n.kind==="zombie"&&a>.35&&!n.chase)n.rig.head.getWorldPosition(Xn),r=Xn,r.y+=.35*n.scale;else if(n.kind==="boss"&&a>.35)r=n.aimPoint(),r.y+=.6;else if(n.kind==="tentacle"&&a>0)r=n.tip.getWorldPosition(Xn);else if(n.kind==="projectile"){let c=this.toScreen(n.root.position);if(c.behind)continue;let h=(36-n.t*22)*this.ui;e.strokeStyle=`rgba(255,40,20,${.5+i*.5})`,e.lineWidth=2.5,e.beginPath(),e.arc(c.x,c.y,Math.max(10,h),0,Math.PI*2),e.stroke();for(let u=0;u<4;u++){let f=u*Math.PI/2+this.time*3;e.beginPath(),e.moveTo(c.x+Math.cos(f)*(h+4),c.y+Math.sin(f)*(h+4)),e.lineTo(c.x+Math.cos(f)*(h+12),c.y+Math.sin(f)*(h+12)),e.stroke()}continue}if(!r)continue;let o=this.toScreen(r);if(o.behind)continue;let l=16*this.ui*(1+a*.4);e.save(),e.translate(o.x,o.y),e.fillStyle=`rgba(255,${Math.floor(40+i*60)},20,${.65+i*.35})`,e.beginPath(),e.moveTo(0,-l),e.lineTo(l*.9,l*.6),e.lineTo(-l*.9,l*.6),e.closePath(),e.fill(),e.fillStyle="#100",e.font=`bold ${l}px ${Ie}`,e.textAlign="center",e.textBaseline="middle",e.fillText("!",0,l*.12),e.restore()}}drawPopups(t){let e=this.ctx;e.textAlign="center",e.textBaseline="middle";for(let i=this.popups.length-1;i>=0;i--){let n=this.popups[i];if(n.t+=t,n.t>1.1){this.popups.splice(i,1);continue}let r=It(1.4-n.t*1.3,0,1),a=(n.t<.1?.6+n.t*4:1)*n.size*this.ui;e.globalAlpha=r,e.font=`bold ${Math.round(22*a)}px ${Ie}`,e.lineWidth=4,e.strokeStyle="rgba(0,0,0,0.8)";let o=n.y-n.t*50;e.strokeText(n.text,n.x,o),e.fillStyle=n.color,e.fillText(n.text,n.x,o)}e.globalAlpha=1}panel(t,e,i,n){let r=this.ctx;r.fillStyle="rgba(5,8,10,0.55)",r.fillRect(t,e,i,n),r.strokeStyle="rgba(200,210,200,0.25)",r.lineWidth=1,r.strokeRect(t+.5,e+.5,i-1,n-1)}drawCondition(t){let e=this.g,i=this.ctx,n=this.ui,r=18*n,a=18*n,o=250*n,l=92*n;this.panel(r,a,o,l);let c=e.lives/e.maxLives,h="#3aff6a",u="FINE";c<.35||e.lives<=1?(h="#ff3a2a",u="DANGER"):c<.65&&(h="#ffc23a",u="CAUTION");let f=u==="FINE"?70:u==="CAUTION"?105:150;this.ecgT+=t;let d=1/60;for(;this.ecgT>d;){this.ecgT-=d,this.ecgPhase+=d*f/60;let _=this.ecgPhase%1,v=0;_<.04?v=_/.04*.15:_<.08?v=.15-(_-.04)/.04*.35:_<.11?v=-.2+(_-.08)/.03*1.2:_<.15?v=1-(_-.11)/.04*1.4:_<.18?v=-.4+(_-.15)/.03*.4:_>.3&&_<.42&&(v=Math.sin((_-.3)/.12*Math.PI)*.22),this.ecg.push(v+T(-.02,.02)),this.ecg.shift()}i.font=`${Math.round(11*n)}px ${Ie}`,i.fillStyle="rgba(220,230,220,0.6)",i.textAlign="left",i.textBaseline="top",i.fillText("CONDITION",r+10*n,a+7*n),i.font=`bold ${Math.round(20*n)}px ${Ie}`,i.fillStyle=h,i.textAlign="right",i.fillText(u,r+o-10*n,a+3*n);let m=r+10*n,x=a+48*n,g=o-20*n;i.strokeStyle="rgba(80,120,90,0.25)",i.lineWidth=1;for(let _=0;_<=10;_++)i.beginPath(),i.moveTo(m+g*_/10,x-16*n),i.lineTo(m+g*_/10,x+12*n),i.stroke();i.strokeStyle=h,i.shadowColor=h,i.shadowBlur=8,i.lineWidth=2*n,i.beginPath();for(let _=0;_<this.ecg.length;_++){let v=m+g*_/(this.ecg.length-1),y=x-this.ecg[_]*18*n;_?i.lineTo(v,y):i.moveTo(v,y)}i.stroke(),i.shadowBlur=0;let p=Math.min(26*n,(g-(e.maxLives-1)*5*n)/e.maxLives);for(let _=0;_<e.maxLives;_++){let v=m+_*(p+5*n),y=a+l-20*n;i.fillStyle=_<e.lives?h:"rgba(255,255,255,0.08)",i.fillRect(v,y,p,10*n)}}drawScore(){let t=this.g,e=this.ctx,i=this.ui,n=230*i,r=this.w-n-18*i,a=18*i;this.panel(r,a,n,62*i),e.textAlign="right",e.textBaseline="top",e.font=`${Math.round(11*i)}px ${Ie}`,e.fillStyle="rgba(220,230,220,0.6)",e.fillText(t.credits>0?`SCORE   CREDITS USED ${t.credits}`:"SCORE",r+n-10*i,a+6*i),e.font=`bold ${Math.round(30*i)}px ${Ie}`,e.fillStyle="#f0e6c8",e.fillText(ki(t.scoreShown,8),r+n-10*i,a+20*i);let o=t.comboMult;t.combo>=5&&(e.font=`bold ${Math.round(16*i)}px ${Ie}`,e.fillStyle=o>=3?"#ff6a3a":o>=2?"#ffc23a":"#9adfff",e.fillText(`${t.combo} HIT COMBO  x${o.toFixed(1)}`,r+n,a+68*i))}drawTimerOrBoss(){let t=this.g,e=this.ctx,i=this.ui,n=this.w/2;if(t.boss&&!t.boss.finished&&t.boss.state!=="intro"){let u=t.boss,f=Math.min(560*i,this.w*.5),d=n-f/2,m=22*i;e.textAlign="center",e.textBaseline="bottom",e.font=`bold ${Math.round(16*i)}px ${Ie}`,e.fillStyle="#ff8a5a",e.fillText(`${u.title}  \xB7  ${u.name}`,n,m+16*i),this.panel(d,m+20*i,f,14*i);let x=It(u.hp/u.maxHp,0,1),g=e.createLinearGradient(d,0,d+f,0);g.addColorStop(0,"#7a0a0a"),g.addColorStop(1,"#ff3a1a"),e.fillStyle=g,e.fillRect(d+2,m+22*i,(f-4)*x,10*i);return}let r=t.director.fight;if(!r||r.clearT>=0)return;let a=Math.max(0,t.fightTimer),o=a<5,l=16*i;e.textAlign="center",e.textBaseline="top",e.font=`${Math.round(12*i)}px ${Ie}`,e.fillStyle="rgba(220,230,220,0.7)",e.fillText("TIME",n,l);let c=Math.floor(a),h=Math.floor((a-c)*100);e.font=`bold ${Math.round(46*i)}px ${Ie}`,e.fillStyle=o?Math.floor(this.time*6)%2?"#ff3a2a":"#ffd0c0":"#ffe08a",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.fillText(`${ki(c,2)}:${ki(h,2)}`,n,l+12*i),e.shadowBlur=0}drawAmmo(t){let e=this.g,i=this.ctx,n=this.ui,r=e.arsenal,a=r.slot,o=a.def,l=250*n,c=78*n,h=this.w-l-18*n,u=this.h-c-18*n;this.panel(h,u,l,c),i.textAlign="left",i.textBaseline="top",i.font=`bold ${Math.round(17*n)}px ${Ie}`,i.fillStyle="#f0e6c8",i.fillText(o.name,h+10*n,u+6*n),i.textAlign="right",i.font=`${Math.round(14*n)}px ${Ie}`,i.fillStyle="rgba(220,230,220,0.7)",i.fillText(a.reserve===1/0?"\u221E":`${a.reserve}`,h+l-10*n,u+8*n);let f=o.mag,d=f<=8,m=d?12*n:(l-20*n)/f,x=d?30*n:22*n;for(let v=0;v<f;v++){let y=h+10*n+v*(d?18*n:m),I=u+c-x-10*n,A=v<a.ammo;d?(i.fillStyle=A?o.id==="shotgun"?"#c8321e":"#d9b44a":"rgba(255,255,255,0.1)",i.fillRect(y,I+6*n,m,x-6*n),i.beginPath(),i.arc(y+m/2,I+6*n,m/2,Math.PI,0),i.fill(),A&&(i.fillStyle="#8a6a20",i.fillRect(y,I+x-6*n,m,6*n))):(i.fillStyle=A?"#d9b44a":"rgba(255,255,255,0.1)",i.fillRect(y,I,Math.max(1,m-2),x))}i.textAlign="left",i.font=`${Math.round(11*n)}px ${Ie}`;let g=h;Xs.forEach((v,y)=>{if(!r.slots[v])return;let I=`${y+1} ${yo[v].name}`;i.fillStyle=v===r.cur?"#ffe08a":"rgba(220,230,220,0.45)",i.fillText(I,g,u-16*n),g+=i.measureText(I).width+12*n}),this.reloadFlash=Math.max(0,this.reloadFlash-t);let p=this.w/2,_=this.h*.78;if(r.reloading){let v=1-r.reloadT/o.reload;i.fillStyle="rgba(0,0,0,0.5)",i.fillRect(p-80*n,_,160*n,8*n),i.fillStyle="#ffe08a",i.fillRect(p-80*n,_,160*n*v,8*n),i.textAlign="center",i.textBaseline="bottom",i.font=`bold ${Math.round(14*n)}px ${Ie}`,i.fillText("RELOADING",p,_-4*n)}else a.ammo===0&&e.state==="play"&&(Math.floor(this.time*5)%2===0||this.reloadFlash>0)&&(i.textAlign="center",i.textBaseline="middle",i.font=`bold ${Math.round(46*n)}px ${Ie}`,i.lineWidth=6,i.strokeStyle="rgba(0,0,0,0.85)",i.strokeText("RELOAD!",p,_),i.fillStyle="#ff3a2a",i.fillText("RELOAD!",p,_),i.font=`${Math.round(13*n)}px ${Ie}`,i.fillStyle="rgba(255,230,220,0.8)",i.fillText(e.input.touch?"TAP RELOAD OR TAKE COVER":"RIGHT-CLICK / R   \xB7   OR HOLD SPACE FOR COVER",p,_+34*n))}drawCover(t){let e=this.g,i=this.ctx,n=this.ui,r=e.coverAmt;e.cover!==this.lastCover&&(this.lastCover=e.cover,this.coverFlash=.7,this.coverText=e.cover?"WAIT":"ACTION!"),this.coverFlash=Math.max(0,this.coverFlash-t),r>.05&&(i.fillStyle=`rgba(0,0,0,${r*.25})`,i.fillRect(0,0,this.w,this.h)),this.coverFlash>0&&e.director.fight&&(i.textAlign="center",i.textBaseline="middle",i.font=`bold italic ${Math.round(40*n)}px ${Ie}`,i.globalAlpha=Math.min(1,this.coverFlash*2),i.lineWidth=6,i.strokeStyle="rgba(0,0,0,0.8)",i.strokeText(this.coverText,this.w/2,this.h*.32),i.fillStyle=this.coverText==="WAIT"?"#7ac8ff":"#ffd23a",i.fillText(this.coverText,this.w/2,this.h*.32),i.globalAlpha=1);let a=18*n,o=this.h-48*n;this.panel(a,o,170*n,30*n),i.textAlign="left",i.textBaseline="middle",i.font=`bold ${Math.round(13*n)}px ${Ie}`,i.fillStyle=e.cover?"#7ac8ff":"rgba(220,230,220,0.6)",i.fillText(e.cover?"\u25A0 IN COVER":e.input.touch?"HOLD \u26E8 TO TAKE COVER":"HOLD SPACE: COVER",a+10*n,o+15*n)}drawMsgs(t){let e=this.ctx,i=this.ui;e.textAlign="center",e.textBaseline="middle";let n=this.h*.4;for(let r=this.msgs.length-1;r>=0;r--){let a=this.msgs[r];if(a.t+=t,a.t>a.dur){this.msgs.splice(r,1);continue}}for(let r of this.msgs){let a=It(Math.min(r.t*6,(r.dur-r.t)*3),0,1),o=r.t<.12?1.3-r.t*2.5:1;e.globalAlpha=a,e.font=`bold ${Math.round(34*i*o)}px ${Ie}`,e.lineWidth=6,e.strokeStyle="rgba(0,0,0,0.85)",e.strokeText(r.text,this.w/2,n),e.fillStyle=r.color,e.fillText(r.text,this.w/2,n),n+=44*i}e.globalAlpha=1}drawCard(t){if(!this.card)return;let e=this.ctx,i=this.card,n=this.ui;if(i.t+=t,i.t>i.dur){this.card=null;return}let r=It(Math.min(i.t*4,(i.dur-i.t)*3),0,1),a=150*n,o=this.h*.62-a/2;e.globalAlpha=r;let l=e.createLinearGradient(0,o,0,o+a);l.addColorStop(0,"rgba(60,0,0,0)"),l.addColorStop(.2,"rgba(40,0,0,0.85)"),l.addColorStop(.8,"rgba(40,0,0,0.85)"),l.addColorStop(1,"rgba(60,0,0,0)"),e.fillStyle=l,e.fillRect(0,o,this.w,a);let c=(1-It(i.t*3,0,1))*200;e.textAlign="center",e.textBaseline="middle",e.font=`${Math.round(18*n)}px ${Ie}`,e.fillStyle="#ff9a7a",e.fillText(i.title,this.w/2-c,o+40*n),e.font=`${Math.round(64*n)}px "Creepster", ${Ie}`,e.fillStyle="#f2e6d0",e.shadowColor="#ff2a0a",e.shadowBlur=20,e.fillText(i.name,this.w/2+c,o+92*n),e.shadowBlur=0,e.globalAlpha=1}drawCrosshair(t){let e=this.g,i=this.ctx,n=this.ui,r=e.input.px,a=e.input.py;this.hitT=Math.max(0,this.hitT-t),this.killT=Math.max(0,this.killT-t);let o=e.aimTarget,l=o&&(o.kind==="zombie"||o.kind==="boss"||o.kind==="projectile"||o.kind==="tentacle"),c=o&&o.kind==="survivor",h=o&&(o.kind==="pickup"||o.kind==="barrel"||o.kind==="crate"),u=l?"#ff3a2a":c?"#5aff7a":h?"#ffd23a":"#f2f2e6";e.cover&&(u="rgba(120,180,255,0.6)");let f=(14+e.recoil*30)*n;if(i.strokeStyle="rgba(0,0,0,0.7)",i.lineWidth=4,this.reticle(r,a,f),i.strokeStyle=u,i.lineWidth=2,this.reticle(r,a,f),i.fillStyle=u,i.fillRect(r-1.5,a-1.5,3,3),this.hitT>0){i.strokeStyle=this.killT>0?"#ff3a2a":"#ffffff",i.lineWidth=2.5;let d=8*n,m=5*n;i.beginPath();for(let[x,g]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.moveTo(r+x*m,a+g*m),i.lineTo(r+x*(m+d),a+g*(m+d));i.stroke()}c&&(i.font=`bold ${Math.round(12*n)}px ${Ie}`,i.textAlign="center",i.fillStyle="#5aff7a",i.fillText("DON'T SHOOT",r,a+f+16*n))}reticle(t,e,i){let n=this.ctx;n.beginPath(),n.arc(t,e,i,0,Math.PI*2),n.stroke(),n.beginPath();for(let[r,a]of[[1,0],[-1,0],[0,1],[0,-1]])n.moveTo(t+r*(i-5),e+a*(i-5)),n.lineTo(t+r*(i+7),e+a*(i+7));n.stroke()}};var So=class{constructor(t,e){this.g=t,this.el=e,this.aim={x:0,y:0},this.px=window.innerWidth/2,this.py=window.innerHeight/2,this.coverKeys=new Set,this.coverTouch=!1,this.touch=!1,this.botDriven=!1;let i=(r,a)=>{this.px=r,this.py=a,this.aim.x=r/window.innerWidth*2-1,this.aim.y=-(a/window.innerHeight)*2+1};this.setAim=i,e.addEventListener("pointermove",r=>{this.botDriven||i(r.clientX,r.clientY)}),e.addEventListener("pointerdown",r=>{t.audio.init(),!this.botDriven&&(r.pointerType==="touch"&&(this.touch=!0,document.body.classList.add("touch")),i(r.clientX,r.clientY),r.button===2?t.input_reload():r.button===0&&t.input_fire(!0))}),window.addEventListener("pointerup",r=>{r.button===0&&t.input_fire(!1)}),e.addEventListener("contextmenu",r=>r.preventDefault()),e.addEventListener("wheel",r=>{t.arsenal.cycle(r.deltaY>0?1:-1)},{passive:!0}),window.addEventListener("keydown",r=>{if(r.repeat)return;t.audio.init();let a=r.code;if(a==="Space"||a==="ShiftLeft"||a==="ShiftRight"||a==="KeyC"||a==="ControlLeft")this.coverKeys.add(a),r.preventDefault();else if(a==="KeyR")t.input_reload();else if(a.startsWith("Digit")){let o=parseInt(a.slice(5),10);t.input_weapon(o-1)}else a==="KeyQ"?t.arsenal.cycle(-1):a==="KeyE"?t.arsenal.cycle(1):a==="Escape"||a==="KeyP"?t.togglePause():a==="KeyM"?t.toggleMute():a==="Enter"&&t.input_confirm()}),window.addEventListener("keyup",r=>{this.coverKeys.delete(r.code)}),window.addEventListener("blur",()=>{this.coverKeys.clear(),t.input_fire(!1)});let n=(r,a,o)=>{let l=document.getElementById(r);l&&(l.addEventListener("pointerdown",c=>{c.stopPropagation(),c.preventDefault(),t.audio.init(),a()}),l.addEventListener("pointerup",c=>{c.stopPropagation(),o&&o()}),l.addEventListener("pointerleave",()=>o&&o()))};n("btn-cover",()=>this.coverTouch=!0,()=>this.coverTouch=!1),n("btn-reload",()=>t.input_reload()),n("btn-weapon",()=>t.arsenal.cycle(1)),n("btn-pause",()=>t.togglePause())}get cover(){return this.coverKeys.size>0||this.coverTouch}};var Dt=1.65;function ni(s,t){let[e,i]=t.x,[n,r]=t.z,a=t.h??3.2,o=t.doors||{},l=(h,u)=>(h||[]).map(f=>({at:f.c-u,w:f.w??1.4,h:f.h??2.4}));t.floor&&s.floor(t.floor,e,n,i,r),t.ceil&&s.ceiling(t.ceil,e,n,i,r,a);let c=t.wall;t.skip?.includes("zMin")||s.wall(c,e,n,i,n,a,.25,l(o.zMin,e)),t.skip?.includes("zMax")||s.wall(c,e,r,i,r,a,.25,l(o.zMax,e)),t.skip?.includes("xMin")||s.wall(c,e,n,e,r,a,.25,l(o.xMin,n)),t.skip?.includes("xMax")||s.wall(c,i,n,i,r,a,.25,l(o.xMax,n))}function fy(s){let t=new Rs(new Bn({map:gt.moon(),fog:!1,depthWrite:!1,color:14209216}));t.position.set(60,70,-170),t.scale.setScalar(26),s.root.add(t)}var dy={chapter:"CHAPTER 1",title:"NIGHTFALL",subtitle:"Ashgrove, 11:47 PM. The 911 lines went dead an hour ago.",theme:"street",fog:658966,fogDensity:.034,hemi:[5925520,1709070,.42],moon:.35,env:.35,rain:!0,tint:[1,1,1.04],start:[0,Dt,4],lookStart:[0,1.4,-20],attract:{pos:[1.2,2.4,3],look:[-1,1.7,-30]},build(s){let t=s.M;s.floor(t.asphalt,-5,14,5,-106),s.floor(t.sidewalk,-9,14,-5,-106),s.floor(t.sidewalk,5,14,9,-106);for(let e of[-5.08,5.08])s.box(t.concrete,.16,.13,120,e,0,-46);s.floor(t.asphalt,-42,-46,-9,-54),s.floor(t.asphalt,9,-46,42,-54),s.floor(t.asphalt,9,-86,44,-94),s.floor(t.sidewalk,42,-68,74,-112),s.roadLines(0,12,-104);for(let e of[-44.5,-55.5])for(let i=-4.5;i<5;i+=1.2)s.box(t.lineWhite,.6,.02,.4,i,0,e);s.building(-24,14,-9,-20,14,0),s.building(-24,-24,-9,-46,11,1),s.building(-24,-54,-9,-57,12,2),s.building(-24,-61,-9,-104,15,3),s.building(-44,-32,-24,-46,10,2),s.building(-44,-54,-24,-70,13,0),s.floor(t.asphalt,-24,-20,-9,-24),s.wall(t.brick,-24,-20,-24,-24,8),s.floor(t.asphalt,-24,-57,-9,-61),s.wall(t.brick,-24,-57,-24,-61,8),s.building(9,14,24,-46,12,1),s.building(9,-54,24,-86,14,0),s.building(9,-94,44,-112,13,2),s.building(24,-32,44,-46,10,3),s.building(24,-54,44,-86,11,1),s.building(-24,-106,9,-120,16,1),s.building(44,-56,80,-68,12,3),s.building(74,-68,88,-112,10,0),s.building(44,-112,88,-124,12,2);for(let e of[3.6,7])s.box(t.darkMetal,1.2,.08,4,8.4,e,-27),s.box(t.darkMetal,.05,.9,4,7.82,e,-27);s.box(t.darkMetal,.08,3.4,.08,7.82,.2,-25),s.sign("DINER",-8.85,3.6,-9,Math.PI/2,3.2,.9,"#2a0808","#ff5a4a"),s.sign("PHARMACY",8.85,3.6,-35,-Math.PI/2,4,.9,"#04140a","#5aff8a"),s.sign("ROXY BAR",-8.85,4.2,-66,Math.PI/2,3.6,.9,"#140418","#ff5ad8"),s.sign("HOTEL",8.85,6.5,-70,-Math.PI/2,3,.8,"#101010","#ffd27a"),s.sign("MILLER & SONS  BUTCHER",73.85,4.4,-90,-Math.PI/2,7,1.2,"#1a0606","#ff8a3a"),s.box(t.black,.1,2.8,2.4,73.9,0,-90),s.light(70,2.5,-90,16738858,10,10,{flicker:.4});for(let e of[2,-18,-36,-72,-90])s.lamp(-7.2,e,Math.PI/2,16757594,e===-36?.5:0);for(let e of[-9,-27,-63,-81])s.lamp(7.2,e,-Math.PI/2,16757594,e===-63?.6:0,e!==-81);s.lamp(56,-72,Math.PI,16752704,.3),s.lamp(56,-108,0,16752704),s.lamp(26,-87,Math.PI,16760944,.7),s.policeCar(3.2,6.5,.35),s.car(-3.1,-13,.35,5905950,!0),s.car(3.4,-31,-.15),s.car(-2.9,-41,2.7,3815994,!0),s.game.fx.fire(new E(-2.9,.9,-41),1),s.bus(3.7,-66,.22),s.car(-3.3,-77,-.25,2506796),s.car(-6.5,-50.5,1.57,1978186,!0),s.car(30,-50,1.4,4868650,!0),s.car(62,-76,.9,6974058,!0),s.game.fx.fire(new E(62,.8,-76),.8),s.barricade(-2.2,-84,.2),s.barricade(-6.8,-45.5,0),s.hydrant(6,-16),s.hydrant(-6,-60),s.bench(-7.8,-30,Math.PI/2),s.bench(7.8,-55,-Math.PI/2),s.dumpster(-14,-22.8),s.dumpster(-16,-59.5,.1),s.dumpster(15,-87.2),s.dumpster(33,-92.8),s.trash(-10,-21),s.trash(19,-92.5),s.trash(-7,-86),s.trash(7,-40),s.barrel(-12.5,-61),s.barrel(36.5,-92.9),s.crate(17,-93,.9,.3),s.crate(17.4,-92.6,.6,.8,.9);for(let[e,i]of[[-1.5,-6],[2,-21],[-2,-33],[1,-47],[-1.2,-58],[2.2,-73],[-.5,-92],[20,-90],[50,-96],[58,-84]])s.puddle(e,i);for(let[e,i]of[[-2,-16],[1.5,-38],[3,-52],[-4,-88],[24,-89],[52,-92]])s.bloodPool(e,i,T(1,2));s.deadTree(50,-74),s.deadTree(66,-106),s.deadTree(48,-106),s.bench(52,-70,Math.PI),s.cyl(t.concrete,2.2,2.4,.6,64,.3,-76,20),fy(s)},beats:[{wait:1,spawn:[{type:"barrel",at:[-3.6,-24]},{type:"barrel",at:[4.3,-51]},{type:"barrel",at:[-3.9,-64]},{type:"barrel",at:[40,-91.8]},{type:"barrel",at:[52,-84]},{type:"crate",at:[-4.6,-19.5],drop:"shells"},{type:"crate",at:[5.6,-38],drop:"herb"},{type:"crate",at:[-5.5,-90],drop:"herb"},{type:"crate",at:[35.5,-87.2],drop:"smg"},{type:"crate",at:[54,-99],drop:"herb"}],msg:"SECURE THE STREET"},{move:[[0,Dt,-2],[.4,Dt,-9]],speed:2.6,events:[{at:.1,spawn:[{type:"shambler",at:[3.5,-17],emerge:"idle",wake:9}]}]},{look:[0,1.3,-24],fight:{time:35,waves:[[{type:"survivor",at:[-11,-21.5],path:[[-6,-21],[-2.4,-17.5]],exit:[[-4,-12],[-6.6,-6],[-6.6,6]],chasers:[{type:"shambler",at:[-13.5,-22.5]},{type:"shambler",at:[-15,-21],speedMul:1.3}]},{type:"shambler",at:[3,-30],delay:1}],{left:1,spawns:[{type:"shambler",at:[-2,-36]},{type:"shambler",at:[1.5,-39],delay:.6},{type:"shambler",at:[4,-34],delay:1.2},{type:"runner",at:[0,-48],delay:2.5}]},[{type:"shambler",at:[2.2,-20],emerge:"rise"},{type:"shambler",at:[-2.5,-22],emerge:"rise",riseDelay:.5},{type:"crawler",at:[-4,-26],delay:1}]]}},{move:[[.6,Dt,-18],[0,Dt,-28]],speed:3,events:[{at:.25,spawn:[{type:"shambler",at:[8.4,-27],y:3.7,emerge:"drop"}]},{at:.5,spawn:[{type:"shambler",at:[-3.5,-38],emerge:"idle",wake:8}]}]},{look:[0,1.3,-48],fight:{time:40,waves:[[{type:"shambler",at:[-16,-49],path:[[-4,-50]]},{type:"shambler",at:[-18,-51],path:[[-3,-51]],delay:.8},{type:"shambler",at:[16,-50],path:[[3,-50]],delay:.4},{type:"thrower",at:[-2,-59],delay:1}],{left:1,spawns:[{type:"runner",at:[-20,-50],path:[[-3,-49]]},{type:"runner",at:[20,-51],path:[[3,-49]],delay:.7},{type:"brute",at:[-1.5,-64],delay:1.5}]},[{type:"shambler",at:[-3,-42]},{type:"shambler",at:[3,-44],delay:.5},{type:"crawler",at:[0,-40],delay:1},{type:"thrower",at:[-3,-58],delay:1.2}]]}},{move:[[0,Dt,-40],[-.5,Dt,-52]],speed:3,events:[{at:.4,spawn:[{type:"crawler",at:[-2.5,-47.5]}]}]},{look:[-12,1.4,-59],lookSpeed:6,fight:{time:22,msg:"AMBUSH!",waves:[[{type:"runner",at:[-13,-58]},{type:"runner",at:[-15,-60],delay:.6},{type:"shambler",at:[-12,-59.5],delay:1.2},{type:"shambler",at:[-17,-58.5],delay:2}]]}},{move:[[0,Dt,-60],[-1,Dt,-71],[0,Dt,-79]],speed:3,events:[{at:.5,spawn:[{type:"shambler",at:[-4,-82],emerge:"idle",wake:7}]}]},{look:[0,1.3,-92],fight:{time:40,waves:[[{type:"survivor",at:[8,-90],speed:3.4,path:[[3,-88],[1.4,-85.5]],exit:[[-3,-84],[-6.6,-80],[-6.6,-66]],chasers:[{type:"runner",at:[13,-90]},{type:"shambler",at:[10.5,-91.5]}]},{type:"shambler",at:[-3,-95],delay:1}],{left:1,spawns:[{type:"thrower",at:[-4,-100]},{type:"shambler",at:[2,-99],delay:.5},{type:"shambler",at:[-1,-101],delay:1},{type:"brute",at:[3,-102],delay:2}]},[{type:"shambler",at:[14,-89],path:[[4,-89]]},{type:"shambler",at:[16,-91],path:[[4,-90]],delay:.6},{type:"runner",at:[21,-90],path:[[4,-90]],delay:1.2},{type:"shambler",at:[12,-92],path:[[4,-91]],delay:1.8}]]}},{move:[[1.5,Dt,-86],[6,Dt,-90],[14,Dt,-90],[24,Dt,-90]],speed:3,events:[{at:.4,spawn:[{type:"shambler",at:[20,-88.2],emerge:"idle",wake:8},{type:"crawler",at:[22,-91.5]}]},{at:.62,spawn:[{type:"shambler",at:[29,-92.6],y:4,emerge:"drop"}]}]},{look:[40,1.3,-90],fight:{time:30,waves:[[{type:"shambler",at:[40,-89]},{type:"shambler",at:[42,-91.5],delay:.6},{type:"runner",at:[46,-90],delay:1.4}],[{type:"runner",at:[44,-88]},{type:"shambler",at:[38,-92],emerge:"rise"},{type:"shambler",at:[35,-88.5],emerge:"rise",riseDelay:.6},{type:"thrower",at:[46,-91],delay:1}]]}},{move:[[34,Dt,-90],[44,Dt,-90]],speed:2.5},{look:[60,1.8,-90],wait:.8},{boss:"butcher",at:[60,0,-90],look:[57,2,-90]},{wait:3,msg:"THE OUTBREAK STARTED AT MERCY GENERAL...",dur:3}]};function py(s,t,e,i,n=5,r=.3,a=2.98){for(let o=e;o>i;o-=n)s.ceilingLight(t,o,a,fe(.88),fe(r)?T(.4,.9):0)}var my={chapter:"CHAPTER 2",title:"MERCY GENERAL",subtitle:"The first patients were admitted three days ago. None were discharged.",theme:"hospital",fog:725006,fogDensity:.045,hemi:[6978160,1710614,.32],env:.3,tint:[.96,1.04,.98],start:[0,Dt,2],lookStart:[0,1.4,-10],attract:{pos:[0,2.2,2],look:[0,1.6,-20]},build(s,t){let e=s.M;ni(s,{x:[-10,10],z:[-20,5],h:4.5,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,doors:{zMin:[{c:0,w:3.6,h:3}],xMin:[{c:-14,w:1.6}],xMax:[{c:-6,w:1.6}]}});for(let[r,a]of[[-5,-4],[5,-4],[-5,-14],[5,-14],[0,-9]])s.ceilingLight(r,a,4.48,!0,r===5&&a===-14?.8:0);s.desk(-6.5,-10,5,Math.PI/2,1),s.sign("RECEPTION",-9.85,2.6,-10,Math.PI/2,2.4,.5,"#0a1a1a","#9affee",!1),s.sign("MERCY GENERAL HOSPITAL",0,3.7,-19.85,0,6,.7,"#081410","#c8ffe0");for(let r=0;r<3;r++)s.bench(6.5,-9-r*2.2,-Math.PI/2);s.cabinet(9.5,-16,-Math.PI/2),s.wheelchair(3.5,-15,.8),s.gurney(-3,-17,.4),s.trash(7,-1),s.box(e.glass,6,3,.1,0,0,4.8),ni(s,{x:[-15,-10],z:[-17,-11],h:3.2,wall:e.plaster,floor:e.hospFloor,ceil:e.ceiling,skip:["xMax"]}),ni(s,{x:[10,15],z:[-9,-3],h:3.2,wall:e.plaster,floor:e.hospFloor,ceil:e.ceiling,skip:["xMin"]});let i=[-26,-42],n=[-34,-50];ni(s,{x:[-1.8,1.8],z:[-60,-20],h:3,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,skip:["zMin","zMax"],doors:{xMin:i.map(r=>({c:r,w:1.3})),xMax:n.map(r=>({c:r,w:1.3}))}}),py(s,0,-22,-60,5,.45);for(let r of i)ni(s,{x:[-6,-1.8],z:[r-2.5,r+2.5],h:3,wall:e.plaster,floor:e.hospFloor,ceil:e.ceiling,skip:["xMax"]}),s.bed(-4.5,r+1.2,Math.PI/2),s.door(-1.85,r,Math.PI/2,e.wood,1.2);for(let r of n)ni(s,{x:[1.8,6],z:[r-2.5,r+2.5],h:3,wall:e.plaster,floor:e.hospFloor,ceil:e.ceiling,skip:["xMin"]}),s.bed(4.5,r-1.2,-Math.PI/2),s.door(1.85,r,-Math.PI/2,e.wood,-1.2);s.gurney(-1.3,-31,.05),s.wheelchair(1.3,-45,-.4),s.gurney(1.25,-55,-.08,!1),s.sign("WARD C  \u2192",0,2.55,-59.6,0,1.6,.35,"#0a1a14","#9affc8",!1),ni(s,{x:[-8,8],z:[-82,-60],h:3.4,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,doors:{zMax:[{c:0,w:3.6,h:3}],xMax:[{c:-76,w:4,h:3}]}});for(let r of[-64,-68,-72,-76,-80])s.bed(-6.2,r,Math.PI/2),r>-78&&s.curtain(-6,r-2,3.4,0);for(let r of[-64,-68])s.bed(6.2,r,-Math.PI/2);s.curtain(6,-70,3.4,0);for(let[r,a]of[[-3,-64],[3,-64],[-3,-72],[3,-72],[0,-79]])s.ceilingLight(r,a,3.38,fe(.85),fe(.4)?.7:0);s.cabinet(7.5,-80.5,-Math.PI/2);for(let[r,a]of[[-3,-66],[2,-74],[-1,-62]])s.bloodPool(r,a,T(1,1.8));ni(s,{x:[8,30],z:[-78,-74],h:3,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,skip:["xMin","xMax"]});for(let r=11;r<30;r+=5)s.ceilingLight(r,-76,2.98,fe(.8),fe(.5)?.8:0,Math.PI/2);s.gurney(22,-74.6,Math.PI/2+.1),ni(s,{x:[30,58],z:[-92,-60],h:10,wall:e.hospWall,floor:e.hospFloor,ceil:e.ceiling,doors:{xMin:[{c:-76,w:4,h:3}]}}),s.box(e.concrete,22,.3,6,47,4,-65),s.box(e.concrete,22,.3,6,47,4,-87),s.box(e.concrete,4,.3,16,56,4,-76);for(let r of[-68,-84])s.box(e.chrome,22,.06,.06,47,5,r);s.box(e.chrome,.06,.06,16,54,5,-76);for(let[r,a]of[[37,-68],[45,-68],[53,-68],[37,-84],[45,-84],[53,-84]])s.cyl(e.white,.3,.3,4,r,2,a,12);s.box(e.lampCold,10,.1,6,44,9.9,-76),s.light(44,8,-76,12572927,30,25),s.cone(44,9.85,-76,6,9.85,10139903,.03),s.ceilingLight(36,-80,3.95,!0,.6),s.ceilingLight(50,-72,3.95,!0),s.light(56,6,-76,16730682,8,10,{pulse:2}),s.sign("ICU",57.85,6.5,-76,-Math.PI/2,1.6,.6,"#1a0606","#ff4a3a",!1),s.gurney(40,-64,.6),s.gurney(50,-88,-.4),s.wheelchair(36,-89,2);for(let[r,a]of[[42,-79],[47,-72],[38,-73]])s.bloodPool(r,a,T(1.5,2.5))},beats:[{wait:1,spawn:[{type:"crate",at:[8,-18],drop:"herb"},{type:"crate",at:[-1.2,-47],drop:"shells",size:.6},{type:"barrel",at:[-7,-79]},{type:"crate",at:[20,-77.2],drop:"smg",size:.7},{type:"barrel",at:[41,-83]},{type:"barrel",at:[41,-69]},{type:"crate",at:[40,-71.5],drop:"herb"}],msg:"FIND THE SOURCE OF THE OUTBREAK"},{move:[[0,Dt,-3]],speed:2},{look:[0,1.2,-14],fight:{time:38,waves:[[{type:"shambler",at:[-3,-12],emerge:"getup"},{type:"shambler",at:[3.5,-14],emerge:"getup"},{type:"shambler",at:[0,-19.5],delay:1}],{left:1,spawns:[{type:"survivor",at:[12,-6],path:[[7,-6.5],[3.5,-8.5]],exit:[[5,-3],[8,2]],chasers:[{type:"shambler",at:[13.5,-5],door:!0},{type:"runner",at:[14,-7.5],delay:1.5,path:[[9,-6]]}]},{type:"shambler",at:[-12.5,-14],path:[[-8,-14]],door:!0,delay:1}]},[{type:"runner",at:[0,-27]},{type:"shambler",at:[-1,-24],delay:.5},{type:"crawler",at:[1,-22],delay:1}]]}},{move:[[0,Dt,-12],[0,Dt,-23]],speed:3,events:[{at:.7,spawn:[{type:"shambler",at:[-3.5,-26],path:[[-.8,-26]],door:!0}]}]},{look:[0,1.3,-45],fight:{time:38,waves:[[{type:"shambler",at:[3.5,-34],path:[[.8,-34]],door:!0},{type:"shambler",at:[0,-48]},{type:"shambler",at:[.6,-53],delay:1}],{left:1,spawns:[{type:"runner",at:[-3.5,-42],path:[[-.8,-42]],door:!0},{type:"runner",at:[0,-58],delay:.8},{type:"leaper",at:[0,-55],delay:1.6}]},[{type:"brute",at:[0,-57]},{type:"shambler",at:[3.5,-50],path:[[.8,-50]],door:!0,delay:.5},{type:"crawler",at:[-.5,-38],emerge:"drop",y:2.8,delay:1.4}]]}},{move:[[0,Dt,-40],[0,Dt,-56]],speed:3,events:[{at:.35,spawn:[{type:"leaper",at:[.3,-50],y:2.8,emerge:"drop"}]}]},{look:[0,1.2,-70],fight:{time:42,waves:[[{type:"shambler",at:[-6,-64],y:.75,emerge:"getup"},{type:"shambler",at:[6,-68],y:.75,emerge:"getup"},{type:"shambler",at:[-6,-72],y:.75,emerge:"getup"},{type:"crawler",at:[2,-66],delay:1}],{left:1,spawns:[{type:"leaper",at:[-3,-78]},{type:"leaper",at:[3,-79],delay:1},{type:"shambler",at:[6,-64],y:.75,emerge:"getup"}]},[{type:"runner",at:[12,-76],path:[[5,-76]]},{type:"shambler",at:[-6,-80],y:.75,emerge:"getup"},{type:"thrower",at:[0,-80]},{type:"shambler",at:[14,-75],path:[[5,-76]],delay:1.5}]]}},{move:[[0,Dt,-66],[2,Dt,-73.5],[8,Dt,-76],[16,Dt,-76]],speed:3},{look:[30,1.3,-76],fight:{time:38,waves:[[{type:"shambler",at:[30,-75]},{type:"shambler",at:[32,-77],delay:.5},{type:"thrower",at:[34,-76],delay:1}],{left:1,spawns:[{type:"brute",at:[36,-76]},{type:"runner",at:[33,-74.6],delay:1},{type:"runner",at:[33,-77.4],delay:1.5}]},[{type:"leaper",at:[28,-76],y:2.8,emerge:"drop"},{type:"shambler",at:[31,-77],delay:.6},{type:"crawler",at:[27,-75],delay:1}]]}},{move:[[24,Dt,-76],[32,Dt,-76]],speed:2.6},{look:[44,2,-76],wait:.6},{boss:"warden",at:[44,0,-76],look:[44,2.4,-76]},{wait:3,msg:"THE TRAIL LEADS UNDERGROUND...",dur:3}]},gy={chapter:"CHAPTER 3",title:"SUBLEVEL 4",subtitle:"Ashgrove Biomedical. Project ZERO. Containment status: FAILED.",theme:"lab",fog:526862,fogDensity:.04,hemi:[5267578,1051660,.3],env:.45,tint:[.98,1,1.06],start:[0,Dt,1],lookStart:[0,1.4,-12],attract:{pos:[0,2,0],look:[0,1.6,-30]},build(s,t){let e=s.M;t.tanks=[],ni(s,{x:[-3,3],z:[-6,4],h:3.5,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,doors:{zMin:[{c:0,w:4.4,h:3.2}]}}),s.box(e.darkMetal,5,3.2,.2,0,0,3.7);for(let n=-2.2;n<=2.2;n+=.4)s.box(e.chrome,.04,3.2,.04,n,0,3.4);ni(s,{x:[-2.2,2.2],z:[-38,-6],h:3.2,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,skip:["zMin","zMax"]}),s.box(e.hazard,.35,.012,32,-1.95,0,-22),s.box(e.hazard,.35,.012,32,1.95,0,-22),s.pipe(-1.6,2.85,-6,-1.6,2.85,-38,.12),s.pipe(-1.2,2.95,-6,-1.2,2.95,-38,.07,e.chrome),s.pipe(1.7,2.75,-6,1.7,2.75,-38,.15);for(let n of[-10,-18,-26,-34])s.alarm(n%16===0?2.05:-2.05,2.6,n);for(let n of[-13,-22,-31])s.ceilingLight(0,n,3.18,fe(.7),.6,Math.PI/2);s.sign("SUBLEVEL 4  \xB7  BIOHAZARD",0,2.6,-5.85,Math.PI,3.6,.5,"#1a1400","#ffd23a",!1),ni(s,{x:[-11,11],z:[-72,-38],h:6,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,doors:{zMax:[{c:0,w:4.4,h:3.2}],zMin:[{c:0,w:4,h:3.2}]}});let i=[[-6.5,-44],[6.5,-50],[-6.5,-56],[6.5,-62]];for(let n of[-44,-50,-56,-62])for(let r of[-6.5,6.5]){let a=i.some(([l,c])=>l===r&&c===n),o=s.tank(r,n,.75,2.8,!a,!1);a&&t.tanks.push(o)}s.tank(-9.3,-68,.7,2.8,!1,!0),s.tank(9.3,-41,.7,2.8,!1,!0),s.console(-9.5,-48,Math.PI/2),s.console(9.5,-58,-Math.PI/2),s.console(-9.5,-60,Math.PI/2);for(let n of[-42,-54,-66])s.light(0,5.2,n,12572927,14,14,{flicker:n===-54?.5:0}),s.box(e.lampCold,1.6,.06,.4,0,5.94,n),s.cone(0,5.9,n,2.6,5.9,12572927,.03);s.alarm(-10.85,4.5,-55),s.alarm(10.85,4.5,-45),s.pipe(-10.6,5.5,-38,-10.6,5.5,-72,.2),s.pipe(10.6,5.2,-38,10.6,5.2,-72,.2),s.box(e.hazard,4.4,.012,.4,0,0,-38.3),ni(s,{x:[-2,2],z:[-84,-72],h:3.2,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,skip:["zMax"],doors:{xMin:[{c:-82,w:3.6,h:3}]}}),s.alarm(1.85,2.6,-77),s.ceilingLight(0,-78,3.18,!0,.8),ni(s,{x:[-34,-2],z:[-84,-80],h:3.2,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,skip:["xMin","xMax"]});for(let n of[-8,-16,-24])s.alarm(n,2.6,-80.15);for(let n of[-12,-20,-28])s.ceilingLight(n,-82,3.18,fe(.7),.7,Math.PI/2);s.pipe(-2,2.85,-83.5,-34,2.85,-83.5,.12),ni(s,{x:[-64,-34],z:[-98,-66],h:12,wall:e.labWall,floor:e.plate,ceil:e.darkMetal,doors:{xMax:[{c:-82,w:4,h:3.2}]}}),s.cyl(e.black,5.5,5.5,.05,-48,.01,-82,32),s.cyl(e.hazard,6.2,6.2,.2,-48,-.02,-82,32),s.cyl(e.black,5.5,5.5,.4,-48,.06,-82,32);for(let n=0;n<Math.PI*2;n+=Math.PI/4)s.cyl(e.darkMetal,.25,.3,12,-48+Math.cos(n)*9,6,-82+Math.sin(n)*9,10);s.box(e.glass,.1,2.2,10,-63.8,5,-82),s.light(-60,6,-82,4259712,10,16);for(let[n,r]of[[-40,-68],[-56,-68],[-40,-96],[-56,-96]])s.alarm(n,8,r===-68?-66.2:-97.8);s.light(-48,10,-82,16724e3,30,30,{pulse:1.6}),s.light(-36,3,-82,12572927,10,12),s.cone(-48,11.9,-82,7,11.9,16730666,.025);for(let[n,r]of[[-38,-72],[-38,-92],[-60,-90]])s.console(n,r,n>-50?-Math.PI/2:Math.PI/2);s.sign("CONTAINMENT  \xB7  SUBJECT 00",-48,9,-66.2,Math.PI,6,.8,"#1a0404","#ff4a3a",!1)},beats:[{wait:1.2,spawn:[{type:"crate",at:[1.4,-19],drop:"shells",size:.6},{type:"barrel",at:[-1.5,-30]},{type:"crate",at:[9,-45],drop:"magnum"},{type:"barrel",at:[-8.5,-64]},{type:"crate",at:[1.4,-76],drop:"herb",size:.6},{type:"crate",at:[-28,-80.7],drop:"smg",size:.6},{type:"barrel",at:[-44,-74]},{type:"barrel",at:[-40,-88]},{type:"crate",at:[-42,-78.5],drop:"herb"}],msg:"FIND SUBJECT ZERO"},{move:[[0,Dt,-8]],speed:2.4},{look:[0,1.3,-28],fight:{time:38,waves:[[{type:"shambler",at:[0,-26]},{type:"shambler",at:[1,-30],delay:.7},{type:"runner",at:[-.5,-36],delay:1.5}],{left:1,spawns:[{type:"thrower",at:[0,-32]},{type:"shambler",at:[-1,-24],emerge:"drop",y:2.9},{type:"shambler",at:[1,-20],emerge:"drop",y:2.9,delay:1.2}]},[{type:"runner",at:[0,-36]},{type:"runner",at:[1,-37],delay:.4},{type:"brute",at:[0,-38],delay:1.5}]]}},{move:[[0,Dt,-20],[0,Dt,-34]],speed:3,events:[{at:.5,spawn:[{type:"leaper",at:[.5,-31],y:2.9,emerge:"drop"}]}]},{look:[0,1.5,-55],fight:{time:48,waves:[[{type:"shambler",at:[-3,-50]},{type:"shambler",at:[3,-52],delay:.5},{type:"thrower",at:[0,-66],delay:1}],{left:1,spawns:[{type:"runner",at:[-6.5,-44],burst:!0},{type:"runner",at:[6.5,-50],burst:!0,delay:.8},{type:"leaper",at:[-6.5,-56],burst:!0,delay:1.6}]},{left:1,spawns:[{type:"brute",at:[0,-68]},{type:"shambler",at:[-4,-60],delay:.5},{type:"shambler",at:[4,-62],delay:1},{type:"runner",at:[6.5,-62],burst:!0,delay:2}]},[{type:"leaper",at:[-3,-58]},{type:"leaper",at:[3,-60],delay:.8},{type:"thrower",at:[0,-68],delay:1.2}]]}},{move:[[0,Dt,-50],[0,Dt,-66]],speed:3,events:[{at:.5,spawn:[{type:"crawler",at:[-2,-61]},{type:"crawler",at:[2.5,-63]}]}]},{look:[0,1.3,-80],fight:{time:32,waves:[[{type:"shambler",at:[0,-80]},{type:"shambler",at:[-1,-82],path:[[0,-80]],delay:.6},{type:"runner",at:[-6,-82],path:[[0,-81]],delay:1.2}],[{type:"brute",at:[-8,-82],path:[[0,-81]]},{type:"leaper",at:[.5,-76],y:2.9,emerge:"drop",delay:1},{type:"thrower",at:[0,-82.5],delay:1.5}]]}},{move:[[0,Dt,-76],[-.8,Dt,-81],[-8,Dt,-82],[-20,Dt,-82]],speed:3},{look:[-34,1.3,-82],fight:{time:35,waves:[[{type:"runner",at:[-36,-81]},{type:"runner",at:[-38,-83],delay:.5},{type:"shambler",at:[-34,-82],delay:1}],{left:1,spawns:[{type:"brute",at:[-38,-82]},{type:"thrower",at:[-36,-80.8],delay:.8},{type:"leaper",at:[-28,-82],y:2.9,emerge:"drop",delay:1.5}]}]}},{move:[[-26,Dt,-82],[-32,Dt,-82]],speed:2.5,msg:"CONTAINMENT BREACH",color:"#ff4a3a"},{look:[-46,3,-82],wait:1},{boss:"zero",at:[-48,0,-82],look:[-47,3.2,-82]},{wait:2,msg:"SUBJECT ZERO ELIMINATED",dur:2.5},{move:[[-26,Dt,-82],[-14,Dt,-82]],speed:4,msg:"GET TO THE SURFACE!",color:"#ffd060"}]},ph=[dy,my,gy];var Uf={easy:{name:"EASY",lives:7,hp:.8,speed:.85,windup:1.35,timeMul:1.4,bossHp:.75,bossDmg:1},normal:{name:"NORMAL",lives:5,hp:1,speed:1,windup:1,timeMul:1,bossHp:1,bossDmg:1},hard:{name:"HARD",lives:4,hp:1.25,speed:1.15,windup:.8,timeMul:.85,bossHp:1.3,bossDmg:1}},xy={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uCover:{value:0},uGrain:{value:.045},uSat:{value:.82},uAberr:{value:.006},uTint:{value:new E(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      float vig = smoothstep(0.75, 0.12, r2 * (1.0 + uCover * 1.2));
      col *= mix(0.18, 1.0, vig);
      float n = rnd(vUv * vec2(1733.0, 977.0) + fract(uTime * 7.31)) - 0.5;
      col += n * uGrain * (0.35 + (1.0 - smoothstep(0.0, 0.4, l)) * 0.65);
      col = max(col, 0.0);
      gl_FragColor = vec4(col, 1.0);
    }`},ge=new E,qn=new E;function Nf(s,t){try{let e=localStorage.getItem(s);return e===null?t:JSON.parse(e)}catch{return t}}function mh(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}var wo=class{constructor(){let t=new URLSearchParams(location.search);this.debug={bot:t.has("bot"),god:t.has("god"),stage:t.has("stage")?parseInt(t.get("stage"),10):null,beat:t.has("beat")?parseInt(t.get("beat"),10):0,autostart:t.has("autostart")||t.has("bot"),dtmax:t.has("dtmax")?parseFloat(t.get("dtmax")):.05};let e=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);this.settings=Nf("graveshift.settings",{difficulty:"normal",quality:e?"low":"high",muted:!1}),t.has("quality")&&(this.settings.quality=t.get("quality")),this.highScore=Nf("graveshift.hiscore",0),this.autoReload=!1,this.container=document.getElementById("game"),this.initRenderer(),this.audio=new oo,this.audio.muted=this.settings.muted,this.lights=new fo(this.scene,8),this.fx=new uo(this),this.arsenal=new vo(this),this.director=new Mo(this),this.hud=new bo(this,document.getElementById("hud")),this.input=new So(this,this.container),this.entities=[],this.zombies=[],this.playerPos=new E,this.camFwd=new E(0,0,-1),this.state="boot",this.paused=!1,this.lives=5,this.maxLives=5,this.score=0,this.scoreShown=0,this.combo=0,this.credits=0,this.cover=!1,this.coverAmt=0,this.invuln=0,this.shakeAmt=0,this.recoil=0,this.bobT=0,this.timeScale=1,this.fightTimer=0,this.boss=null,this.stageIndex=0,this.time=0,this.heartT=0,this.totals=this.newStats(),this.stats=this.newStats(),this.diff=Uf[this.settings.difficulty],this.setupUI(),window.addEventListener("resize",()=>this.resize()),this.resize(),window.GAME=this,window.SNAPSHOT=()=>{this.composer.render(.016),this.hud.draw(.016);let i=document.createElement("canvas");i.width=this.renderer.domElement.width,i.height=this.renderer.domElement.height;let n=i.getContext("2d");return n.drawImage(this.renderer.domElement,0,0),n.drawImage(this.hud.c,0,0,i.width,i.height),i.toDataURL("image/png")},this.last=performance.now(),this.toTitle(),requestAnimationFrame(i=>this.loop(i))}newStats(){return{shots:0,hits:0,kills:0,headshots:0,rescues:0,lost:0,civilians:0,damage:0,projectiles:0,time:0,score:0}}initRenderer(){let t=this.settings.quality==="high",e=this.renderer=new Ra({antialias:!1,powerPreference:"high-performance",stencil:!1});e.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1)),e.toneMapping=wr,e.toneMappingExposure=1.15,e.shadowMap.enabled=t,e.shadowMap.type=Nc,this.container.prepend(e.domElement),e.domElement.id="view";let i=this.scene=new As;this.camera=new Xe(68,window.innerWidth/window.innerHeight,.05,220),i.add(this.camera),this.levelRoot=new zt,this.entityRoot=new zt,i.add(this.levelRoot,this.entityRoot),this.hitRoots=[this.levelRoot,this.entityRoot];let n=new Ts(e);i.environment=n.fromScene(new ro,.04).texture,i.environmentIntensity=.12,this.hemi=new qa(3820138,1446414,.5),i.add(this.hemi),this.moon=new $a(9085136,0),this.moon.position.set(-30,60,20),i.add(this.moon);let r=this.flashlight=new Ya(16773336,22,45,.44,.55,1.5);r.castShadow=t,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=.3,r.shadow.camera.far=42,r.shadow.bias=-4e-4,r.shadow.normalBias=.03,i.add(r,r.target),this.flashAim=new E;let a=window.innerWidth,o=window.innerHeight,l=new qe(a,o,{type:hi,samples:t?4:0});this.composer=new io(e,l),this.composer.addPass(new no(i,this.camera)),this.bloom=new Os(new j(a,o),.55,.55,.82),this.bloom.enabled=t,this.composer.addPass(this.bloom),this.grade=new Fs(xy),this.composer.addPass(this.grade),this.composer.addPass(new so)}resize(){let t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.fov=t/e<1?80:68,this.camera.updateProjectionMatrix();let i=this.settings.quality==="high",n=i?32e5:13e5,r=Math.min(window.devicePixelRatio||1,i?1.5:1,Math.sqrt(n/(t*e)))*(this.resScale||1);this.renderer.setPixelRatio(Math.max(.4,r)),this.renderer.setSize(t,e),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e),this.hud.resize();let a=e*this.renderer.getPixelRatio();this.fx.setScale(a/(2*Math.tan(ef.degToRad(this.camera.fov)/2)))}$(t){return document.getElementById(t)}show(t,e=!0){let i=this.$(t);i&&i.classList.toggle("show",e)}setupUI(){let t=(e,i,n)=>{let r=this.$(e);r.innerHTML="",n.forEach(([a,o])=>{let l=document.createElement("button");l.textContent=o,l.className=this.settings[i]===a?"on":"",l.onclick=c=>{if(c.stopPropagation(),this.audio.init(),this.settings[i]=a,mh("graveshift.settings",this.settings),this.audio.play("blip"),i==="quality"){location.reload();return}t(e,i,n)},r.appendChild(l)})};t("opt-diff","difficulty",[["easy","EASY"],["normal","NORMAL"],["hard","HARD"]]),t("opt-quality","quality",[["high","HIGH"],["low","LOW"]]),this.$("btn-start").onclick=e=>{e.stopPropagation(),this.audio.init(),this.startGame(0)},this.$("btn-resume").onclick=e=>{e.stopPropagation(),this.togglePause()},this.$("btn-quit").onclick=e=>{e.stopPropagation(),this.paused=!1,this.show("pause",!1),this.toTitle()},this.$("continue").onclick=e=>{e.stopPropagation(),this.continueGame()},this.$("results").onclick=e=>{e.stopPropagation(),this.resultsT>1.2&&this.afterResults()},this.$("gameover").onclick=e=>{e.stopPropagation(),this.overT>1.5&&this.toTitle()},this.$("victory").onclick=e=>{e.stopPropagation(),this.overT>2.5&&this.toTitle()},this.$("btn-mute").onclick=e=>{e.stopPropagation(),this.toggleMute()},this.updateMuteBtn()}updateMuteBtn(){let t=this.$("btn-mute");t&&(t.textContent=this.audio.muted?"SOUND: OFF":"SOUND: ON")}toggleMute(){this.audio.init(),this.audio.setMuted(!this.audio.muted),this.settings.muted=this.audio.muted,mh("graveshift.settings",this.settings),this.updateMuteBtn()}togglePause(){this.state==="play"&&(this.paused=!this.paused,this.show("pause",this.paused),this.arsenal.release(),document.body.classList.toggle("menu",this.paused))}input_fire(t){if(this.state==="continue"&&t){this.continueGame();return}this.state!=="play"||this.paused||(t?this.arsenal.pull():this.arsenal.release())}input_reload(){this.state==="play"&&!this.paused&&this.arsenal.reload()}input_weapon(t){Xs[t]&&this.arsenal.select(Xs[t])}input_confirm(){this.state==="title"?this.startGame(0):this.state==="results"&&this.resultsT>1.2?this.afterResults():this.state==="continue"?this.continueGame():(this.state==="gameover"&&this.overT>1.5||this.state==="victory"&&this.overT>2.5)&&this.toTitle()}toTitle(){this.state="title",this.paused=!1,["pause","continue","results","gameover","victory","card"].forEach(t=>this.show(t,!1)),this.show("title",!0),document.body.classList.add("menu"),this.$("hiscore").textContent=`HIGH SCORE  ${ki(this.highScore,8)}`,this.loadStage(0,!0),this.audio.music("title"),this.debug.autostart&&setTimeout(()=>this.state==="title"&&this.startGame(this.debug.stage||0),300)}startGame(t=0){this.diff=Uf[this.settings.difficulty],this.maxLives=this.diff.lives,this.lives=this.maxLives,this.score=0,this.scoreShown=0,this.combo=0,this.credits=0,this.totals=this.newStats(),this.arsenal.reset(),this.show("title",!1),this.loadStage(this.debug.stage??t,!1)}clearLevel(){this.tanks=[];for(let t of this.entities)this.entityRoot.remove(t.root);this.entities.length=0,this.zombies.length=0,this.levelRoot.traverse(t=>{t.isMesh&&t.geometry&&t.geometry.dispose()}),this.levelRoot.clear(),this.lights.clear(),this.fx.clear(),this.hud.clear(),this.boss=null}loadStage(t,e){this.clearLevel(),this.stageIndex=t;let i=ph[t];this.stage=i,this.theme=i.theme,this.scene.fog=new Ca(i.fog,i.fogDensity),this.scene.background=new xt(i.fog),this.hemi.color.set(i.hemi[0]),this.hemi.groundColor.set(i.hemi[1]),this.hemi.intensity=i.hemi[2],this.moon.intensity=i.moon||0,this.scene.environmentIntensity=i.env??.12,this.grade.uniforms.uTint.value.set(...i.tint||[1,1,1]);let n=new mo(this,this.levelRoot);i.build(n,this),n.finish(),this.fx.setRain(!!i.rain),this.director.load(i,e?0:this.debug.beat||0),this.updateCamera(.016),this.warmup(),!e&&(this.stats=this.newStats(),this.stats.score=this.score,this.state="intro",this.introT=0,this.cover=!1,this.coverAmt=0,this.combo=0,this.$("card-chapter").textContent=i.chapter,this.$("card-title").textContent=i.title,this.$("card-sub").textContent=i.subtitle,this.show("card",!0),document.body.classList.remove("menu"),this.audio.music(null),this.audio.play("stinger"))}warmup(){let t=[],e=this.director.pos,i=n=>{n.root.position.set(e.x,-50,e.z),this.entityRoot.add(n.root),t.push(n)};try{for(let a of["shambler","runner","brute"])i(new Gs(this,{type:a,at:[e.x,e.z]}));for(let a of Object.keys(xo))i(new Ws(this,{kind:a,pos:new E(e.x,-50,e.z)}));i(new Pr(this,{at:[e.x,e.z]})),i(new Ir(this,{at:[e.x,e.z]}));let n=new Q(new he,Wn),r=new Q(new he,Hs);n.position.y=r.position.y=-50,this.scene.add(n,r),this.renderer.compile(this.scene,this.camera),this.scene.remove(n,r)}catch(n){console.warn(n)}for(let n of t)this.entityRoot.remove(n.root)}beginPlay(){this.state="play",this.show("card",!1),this.audio.music(this.stage.music||"stage"),this.director.next(),this.invuln=1}stageClear(){if(this.state!=="play")return;this.state="results",this.resultsT=0,this.arsenal.release(),this.cover=!1,this.audio.music("clear");let t=this.stats,e=t.shots?t.hits/t.shots:0,i=Math.max(0,Math.round(600-t.time)*10),n=Math.round(e*1e4),r=t.damage===0?1e4:0;this.score+=i+n+r;for(let l in t)l!=="score"&&(this.totals[l]+=t[l]);let a=this.rank(e,t.damage),o=[["KILLS",t.kills],["HEADSHOTS",t.headshots],["ACCURACY",`${Math.round(e*100)}%`],["SURVIVORS RESCUED",`${t.rescues}`],["PROJECTILES SHOT DOWN",t.projectiles],["DAMAGE TAKEN",t.damage],["TIME",`${Math.floor(t.time/60)}:${ki(t.time%60,2)}`],["TIME BONUS",`+${i}`],["ACCURACY BONUS",`+${n}`]];r&&o.push(["NO DAMAGE BONUS",`+${r}`]),this.$("res-title").textContent=`${this.stage.chapter} CLEAR`,this.$("res-rows").innerHTML=o.map(([l,c])=>`<div><span>${l}</span><b>${c}</b></div>`).join(""),this.$("res-score").textContent=ki(this.score,8),this.$("res-rank").textContent=a,this.$("res-rank").className="rank r"+a,this.show("results",!0),document.body.classList.add("menu")}rank(t,e){return t>=.75&&e===0?"S":t>=.65&&e<=1?"A":t>=.5&&e<=3?"B":t>=.35?"C":"D"}afterResults(){this.show("results",!1),this.stageIndex+1<ph.length?(this.debug.beat=0,this.loadStage(this.stageIndex+1,!1)):this.victory()}victory(){this.state="victory",this.overT=0,this.audio.music("title");let t=this.totals,e=t.shots?t.hits/t.shots:0;this.$("vic-score").textContent=ki(this.score,8),this.$("vic-rank").textContent=this.rank(e,t.damage),this.$("vic-stats").textContent=`${t.kills} KILLS \xB7 ${t.headshots} HEADSHOTS \xB7 ${Math.round(e*100)}% ACCURACY \xB7 ${t.rescues} RESCUED \xB7 ${this.credits} CONTINUES`,this.saveHigh(),this.show("victory",!0),document.body.classList.add("menu")}saveHigh(){this.score>this.highScore&&(this.highScore=this.score,mh("graveshift.hiscore",this.highScore))}toContinue(){this.state="continue",this.contT=10,this.arsenal.release(),this.cover=!1,this.show("continue",!0),document.body.classList.add("menu"),this.audio.music(null),this.audio.play("timeup")}continueGame(){this.state==="continue"&&(this.credits++,this.lives=this.maxLives,this.invuln=2.5,this.state="play",this.show("continue",!1),document.body.classList.remove("menu"),this.audio.music(this.boss?"boss":this.stage.music||"stage"),this.hud.message("GET BACK IN THERE!","#ffd060",1.6))}gameOver(){this.state="gameover",this.overT=0,this.show("continue",!1),this.$("go-score").textContent=ki(this.score,8),this.saveHigh(),this.show("gameover",!0),this.audio.music("gameover")}addEntity(t){return this.entities.push(t),this.entityRoot.add(t.root),t.kind==="zombie"&&this.zombies.push(t),t}spawn(t,e){let i=[],n=t.type;if(lh[n])t.burst&&this.burstTank(t.at),i.push(this.addEntity(new Gs(this,{...t,fight:e})));else if(n==="survivor"){let r=this.addEntity(new go(this,t));for(let a of t.chasers||[]){let o=this.addEntity(new Gs(this,{...a,chase:r,fight:e}));r.chasers.push(o),i.push(o)}i.push(r)}else n==="barrel"?i.push(this.addEntity(new Pr(this,t))):n==="crate"?i.push(this.addEntity(new Ir(this,t))):n==="pickup"&&i.push(this.addEntity(new Ws(this,{kind:t.kind,pos:new E(t.at[0],0,t.at[1]),y:t.y})));return i}burstTank(t){let e=this.tanks||[],i=null,n=4;for(let a of e){let o=Math.hypot(a.x-t[0],a.z-t[1]);o<n&&!a.broken&&(n=o,i=a)}if(!i)return;i.broken=!0,i.meshes.forEach(a=>a.visible=!1);let r=new E(i.x,1.4,i.z);this.audio.play("glass",{pan:this.panFor(r)}),this.audio.play("splash",{pan:this.panFor(r)}),this.fx.acid(r,40),this.fx.sparks(r,ge.set(0,.5,0),20);for(let a=0;a<3;a++)this.fx.splat(i.x+T(-1,1),i.z+T(-1,1),T(.8,1.5));this.shake(.3)}startBoss(t,e){let i=If[t],n=this.addEntity(new i(this,e));this.boss=n,this.hud.bossIntro(n.title,n.name),this.audio.play("stinger"),this.audio.music("boss")}get comboMult(){return 1+Math.min(3,Math.floor(this.combo/10)*.5)}canShoot(){return this.state==="play"&&!this.paused&&!this.cover&&this.coverAmt<.35}addScore(t,e,i,n){let r=Math.round(t);this.score+=r,e&&this.hud.popup(i?`${i} +${r}`:`+${r}`,e,n||(i?"#ffd23a":"#f2f2e6"),i?1.1:.8)}onFire(t){this.recoil=Math.min(1,this.recoil+t.kick),this.shake(t.kick*.25),ge.set(.35,-.25,-.6),this.camera.localToWorld(ge),this.fx.muzzle(ge)}onKill(t,e){this.stats.kills++;let i=t.def.score*this.comboMult,n=null;e.head?(i+=150,this.stats.headshots++,n="HEADSHOT",this.timeScale=.35):e.gib&&(n=e.explosive?"BOOM":"SPLATTER");let r=e.point?e.point.clone():t.root.position.clone().setY(1.5);this.addScore(i,r,n,e.head?"#ff6a3a":void 0),this.hud.hitMarker(!0)}onRescue(t){this.stats.rescues++,this.audio.play("thanks"),this.addScore(500,t.root.position.clone().setY(2),"RESCUED","#5aff7a"),this.lives<this.maxLives?(this.lives++,this.hud.heal(),this.hud.message("SURVIVOR RESCUED  \xB7  +1 LIFE","#5aff7a",2)):(this.addScore(1e3,null),this.hud.message("SURVIVOR RESCUED  \xB7  +1000","#5aff7a",2))}onCivilianShot(t){this.stats.civilians++,this.hud.message("DON'T SHOOT SURVIVORS!","#ff3a2a",2),this.hurtPlayer(null,1,!0)}collect(t,e){let i=xo[t];if(this.audio.play(t==="herb"?"heal":"pickup"),this.fx.sparks(e,ge.set(0,1,0),16),t==="herb")this.lives<this.maxLives?(this.lives++,this.hud.heal(),this.hud.message("GREEN HERB  \xB7  +1 LIFE","#5aff7a",1.6)):this.addScore(1e3,e,"HERB");else if(t==="gem")this.addScore(2e3,e,"BONUS");else{let n=t==="shells"?"shotgun":t;this.arsenal.give(n),this.hud.message(`${i.label} ACQUIRED`,"#9adfff",1.6)}}hurtPlayer(t,e=1,i=!1){return this.state!=="play"?!1:!i&&this.coverAmt>.45?(this.audio.play("block"),!1):this.invuln>0&&!i?!1:(this.invuln=1.1,this.combo=0,this.stats.damage++,this.hud.damage(),this.hud.splat(t&&t.type==="acid"?"acid":"blood"),Math.random()<.5&&this.hud.splat("blood"),this.audio.play("hurt"),this.shake(.9),this.debug.god||(this.lives-=e),this.lives<=0&&(this.lives=0,this.toContinue()),!0)}screenSplat(t){this.hud.splat(t)}timeUp(){this.hud.message("TIME UP!","#ff3a2a",1.6),this.audio.play("timeup"),this.hurtPlayer(null,1,!0)}areaClear(){let t=Math.round(Math.max(0,this.fightTimer))*20;this.score+=t,this.hud.message("AREA CLEAR","#ffd060",1.4),t&&this.hud.message(`TIME BONUS +${t}`,"#9adfff",1.4),this.audio.play("blip",{freq:880})}onBossDefeated(t){this.addScore(5e3*(this.diff.bossHp||1),t.aimPoint(),"SPECIMEN TERMINATED","#ff6a3a"),this.hud.message(`${t.name} DESTROYED`,"#ff8a5a",3),this.audio.play("roar",{pitch:.7}),this.audio.play("explode"),this.shake(1.2),this.timeScale=.2,this.audio.music(null),this.fx.blood(t.aimPoint(),ge.set(0,1,0),60,6,1.2,.14);for(let e of this.entities)e===t||e.dead||(e.kind==="zombie"?e.die("normal",ge.set(0,0,1),e.root.position.clone().setY(1)):(e.kind==="projectile"||e.kind==="tentacle")&&(e.dead=!0,e.remove=!0))}explode(t,e,i){this.fx.explosion(t,1),this.fx.fire(t.clone().setY(.1),.6,4),this.audio.play("explode",{pan:this.panFor(t)}),this.shake(.9);for(let n of[...this.entities]){if(n.dead)continue;let r=n.root.position.distanceTo(t);r<e&&n.blast(i*(1-r/e*.5),t)}}shake(t){this.shakeAmt=Math.min(1.5,this.shakeAmt+t)}message(t,e,i){this.hud.message(t,e,i)}panFor(t){return qn.copy(t).project(this.camera),It(qn.x,-1,1)*.8}isBehind(t,e=0){let i=this.camera.position;return(t.x-i.x)*this.camFwd.x+(t.z-i.z)*this.camFwd.z<-e}updateCamera(t){let e=this.director,i=this.camera;this.bobT+=t*e.moving*2.4;let n=It(e.moving/2.5,0,1),r=Math.sin(this.bobT*2)*.035*n,a=Math.sin(this.bobT)*.025*n;this.coverAmt=Bt(this.coverAmt,this.cover?1:0,14,t),this.shakeAmt=Math.max(0,this.shakeAmt-t*2.8),this.recoil=Bt(this.recoil,0,10,t);let o=this.shakeAmt*this.shakeAmt*.12;i.position.copy(e.pos),ge.subVectors(e.look,e.pos).setY(0).normalize(),this.camFwd.copy(ge),i.position.x+=-ge.z*a+T(-o,o),i.position.z+=ge.x*a+T(-o,o),i.position.y+=r-this.coverAmt*.78+T(-o,o),qn.copy(e.look),qn.y+=this.recoil*.35-this.coverAmt*.6,qn.x+=T(-o,o)*3,qn.y+=T(-o,o)*3,i.lookAt(qn),i.rotateZ(a*.4+this.coverAmt*.05),this.playerPos.set(e.pos.x,0,e.pos.z),ge.set(.28,-.22,.05),i.localToWorld(ge),this.flashlight.position.copy(ge),ge.set(this.input.aim.x,this.input.aim.y,.5).unproject(i).sub(i.position).normalize(),ge.multiplyScalar(14).add(i.position),t===.016&&this.flashAim.lengthSq()===0&&this.flashAim.copy(ge),this.flashAim.x=Bt(this.flashAim.x,ge.x,14,t),this.flashAim.y=Bt(this.flashAim.y,ge.y,14,t),this.flashAim.z=Bt(this.flashAim.z,ge.z,14,t),this.flashlight.target.position.copy(this.flashAim)}attract(t){let e=this.stage,i=performance.now()/1e3,n=e.attract||{pos:e.start,look:e.lookStart};this.director.pos.set(n.pos[0]+Math.sin(i*.1)*1.5,n.pos[1]+Math.sin(i*.13)*.2,n.pos[2]+Math.cos(i*.08)*1),this.director.look.set(n.look[0]+Math.sin(i*.15)*2,n.look[1],n.look[2]),this.input.aim.x=Math.sin(i*.4)*.3,this.input.aim.y=Math.sin(i*.33)*.15-.1,this.updateCamera(t)}loop(t){if(requestAnimationFrame(a=>this.loop(a)),this.frozen)return;let e=(t-this.last)/1e3,i=Math.min(this.debug.dtmax,e);if(this.last=t,this.fps=this.fps?this.fps*.95+1/Math.max(.001,e)*.05:60,this.resT=(this.resT||0)+e,this.resT>2&&(this.state==="play"||this.state==="title")){this.resT=0;let a=this.resScale||1;this.fps<40&&a>.55?(this.resScale=a*.85,this.resize()):this.fps>57&&a<1&&(this.resScale=Math.min(1,a*1.1),this.resize())}i<=0&&(i=.001),this.time+=i,this.audio.update(),this.timeScale=Bt(this.timeScale,1,3.5,i);let n=i*this.timeScale;switch(this.state){case"title":this.attract(i);break;case"intro":this.introT+=i,this.updateCamera(i),this.introT>3.4&&this.beginPlay();break;case"play":this.paused||this.updatePlay(n);break;case"continue":{this.contT-=i;let a=Math.max(0,Math.ceil(this.contT-1));this.$("cont-n").textContent!==String(a)&&(this.$("cont-n").textContent=a,this.audio.play("tick")),this.debug.bot&&this.contT<9&&this.continueGame(),this.contT<=0&&this.gameOver(),this.updateCamera(i);break}case"results":this.resultsT+=i,this.debug.bot&&this.resultsT>2&&this.afterResults(),this.updateEntities(i);break;case"gameover":case"victory":this.overT+=i;break}this.paused||(this.lights.update(i,this.camera.position,this.camFwd),this.fx.update(this.state==="play"?n:i)),this.scoreShown=this.scoreShown<this.score?Math.min(this.score,this.scoreShown+Math.max(10,(this.score-this.scoreShown)*8*i)):this.score;let r=this.grade.uniforms;r.uTime.value=this.time,r.uDamage.value=Bt(r.uDamage.value,this.hud.dmgFlash*.8,10,i),r.uCover.value=this.coverAmt,this.composer.render(i),this.hud.draw(i)}updatePlay(t){this.stats.time+=t,this.invuln-=t;let e=this.input.cover&&!this.debug.bot;e&&!this.cover?(this.cover=!0,this.arsenal.release(),this.arsenal.coverReload()):!e&&this.cover&&(this.cover=!1),this.director.update(t),this.updateCamera(t),this.arsenal.update(t),this.updateEntities(t),this.aimTarget=Df(this,this.input.aim),this.debug.bot&&this.botUpdate(t),this.lives===1&&(this.heartT-=t,this.heartT<=0&&(this.heartT=.85,this.audio.play("heartbeat")))}updateEntities(t){for(let i=0;i<this.entities.length;i++)this.entities[i].update(t);let e=!1;for(let i=this.entities.length-1;i>=0;i--){let n=this.entities[i];n.remove&&(this.entityRoot.remove(n.root),this.entities.splice(i,1),e=!0)}e&&(this.zombies=this.zombies.filter(i=>!i.remove))}botUpdate(t){this.input.botDriven=!0;let e=null,i=-1/0,n=null,r=this.camera.position;for(let o of this.entities){if(o.dead)continue;let l=null,c=0;o.kind==="projectile"?(l=o.root.position.clone(),c=1e3+o.t*100):o.kind==="tentacle"&&(o.state==="rise"||o.state==="rear")?(l=o.tip.getWorldPosition(new E),c=900):o.kind==="boss"&&o.state!=="intro"?(l=o.aimPoint(),c=400):o.kind==="zombie"&&o.root.position.y>-1?(l=o.rig.head.getWorldPosition(new E),o.rig.head.visible||(l=o.root.position.clone().setY(1)),c=300-l.distanceTo(r)*5+(o.warn||0)*400+(o.chase?200:0)):o.kind==="pickup"&&(l=o.root.position.clone(),c=150),l&&(ge.copy(l).project(this.camera),!(ge.z>1||Math.abs(ge.x)>.95||Math.abs(ge.y)>.95)&&c>i&&(i=c,e=o,n={x:ge.x,y:ge.y}))}let a=this.input.aim;if(n){let o=1-Math.exp(-18*t);a.x+=(n.x-a.x)*o,a.y+=(n.y-a.y)*o,this.input.px=(a.x*.5+.5)*window.innerWidth,this.input.py=(-a.y*.5+.5)*window.innerHeight,Math.hypot((n.x-a.x)*window.innerWidth,(n.y-a.y)*window.innerHeight)<30&&this.arsenal.cool<=0&&(this.arsenal.slot.ammo<=0?this.arsenal.reload():(this.arsenal.pull(),this.arsenal.release()))}else this.arsenal.slot.ammo<this.arsenal.def.mag&&this.arsenal.reload()}};function Ff(){try{new wo}catch(s){console.error(s);let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#f0e6d0;font:18px sans-serif;text-align:center;padding:20px;background:#000;z-index:99",t.textContent="Could not start the game. A browser with WebGL 2 support is required. ("+s.message+")",document.body.appendChild(t)}}document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(s=>setTimeout(s,1500))]).then(Ff):Ff();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
