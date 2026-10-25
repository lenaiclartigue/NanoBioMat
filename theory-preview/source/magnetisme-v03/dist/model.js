/* NanoBioMat: pedagogical SW / Néel two-state approximation. SI throughout. */
const KB=1.380649e-23, MS=480000, TAU0=1e-9;
function sizes(d,sigma){let a=[],sum=0;for(let j=0;j<25;j++){let z=-3.5+7*j/24,n=Math.exp(-z*z/2),v=Math.PI/6*Math.pow(d*1e-9*Math.exp(sigma*z),3);a.push({v,n,w:n*v});sum+=n*v;}a.forEach(x=>x.w/=sum);return a;}
const highFieldCache=new Map();
function landscape(h,i){if(Math.abs(h)<=1.2)return LAND.table[Math.max(0,Math.min(240,Math.round((h+1.2)*100)))][i];
const key=h+':'+i;if(highFieldCache.has(key))return highFieldCache.get(key);
const theta=LAND.theta[i],b=Math.abs(h);let lo=-Math.PI/2,hi=Math.PI/2;
const E=q=>Math.sin(q-theta)**2-2*b*Math.cos(q);
for(let j=0;j<60;j++){const x=lo+(hi-lo)/3,y=hi-(hi-lo)/3;if(E(x)<E(y))hi=y;else lo=x;}
const phi=(lo+hi)/2+(h<0?Math.PI:0),r=[1,h<0?0:1,Math.cos(phi),phi,0,0,0];highFieldCache.set(key,r);return r;}
function langevin(x){if(Math.abs(x)<1e-4)return x/3-x**3/45+2*x**5/945;return 1/Math.tanh(x)-1/x;}
function langevinEnsemble(B,d,sigma,T){return sizes(d,sigma).reduce((s,q)=>s+q.w*langevin(MS*q.v*B/(KB*T)),0);}
function advance(r,p,K,v,T,dt){if(r[0]===1)return r[1];if(T===0)return p;let a=.5/TAU0*Math.exp(-K*v*r[5]/(KB*T)),b=.5/TAU0*Math.exp(-K*v*r[6]/(KB*T)),rate=a+b;if(rate<1e-100)return p;return b/rate+(p-b/rate)*Math.exp(-rate*dt);}
function equilibrium(r,K,v,T){if(r[0]===1)return r[1];return 1/(1+Math.exp(Math.max(-700,Math.min(700,K*v*(r[6]-r[5])/(KB*T)))));}
function moment(r,p){return r[0]===1?r[2]:p*r[1]+(1-p)*r[2];}
function runSW(path,{K,d,sigma,T,dt},initial=.5){let ss=sizes(d,sigma),pop=ss.map(()=>LAND.theta.map(()=>initial));let result=[];for(let h of path){let m=0,ps=LAND.theta.map(()=>0);ss.forEach((s,j)=>{LAND.theta.forEach((_,i)=>{let r=landscape(h,i);pop[j][i]=advance(r,pop[j][i],K,s.v,T,dt);m+=s.w*moment(r,pop[j][i])/32;ps[i]+=s.w*pop[j][i];});});result.push({x:h,y:m,p:ps});}return result;}
function seq(a,b,n){return Array.from({length:n},(_,i)=>a+(b-a)*i/(n-1));}
function zfcfc(K,d,sigma,secPerK){const ss=sizes(d,sigma),h=.02,Ts=seq(5,400,159);function run(temps,init){let p=ss.map(s=>LAND.theta.map((_,i)=>init==='eq'?equilibrium(landscape(h,i),K,s.v,400):.5));return temps.map(T=>{let m=0,ps=LAND.theta.map(()=>0);ss.forEach((s,j)=>LAND.theta.forEach((_,i)=>{const r=landscape(h,i);p[j][i]=advance(r,p[j][i],K,s.v,T,secPerK*2.5);m+=s.w*moment(r,p[j][i])/32;ps[i]+=s.w*p[j][i];}));return {x:T,y:m,p:ps};});}return {z:run(Ts,'zero'),f:run([...Ts].reverse(),'eq'),h};}
function remanence(spread){const points=seq(0,1.2,121);let sigma=spread/100;const w=x=>Math.exp(-.5*Math.pow((x-.45)/sigma,2));let weights=points.map((h,i)=>i?w(h):0),sum=weights.reduce((a,b)=>a+b,0),acc=0;return points.map((h,i)=>{acc+=weights[i]/sum;return {x:h,irm:acc,dcd:1-2*acc,delta:0};});}
function relaxation(d,sigma,K,T,logt){return sizes(d,sigma).reduce((m,s)=>{let exponent=Math.log(10)*logt-Math.log(TAU0)-K*s.v/(KB*T);return m+s.w*Math.exp(-Math.exp(Math.min(700,exponent)));},0);}
function forcEnsemble(spread,bias){let a=[],sum=0;for(let c=.01;c<=1.01;c+=.025)for(let u=-.5;u<=.5001;u+=.025){let w=Math.exp(-.5*Math.pow((c-.45)/spread,2)-.5*Math.pow(u/bias,2));a.push({c,u,w});sum+=w;}a.forEach(x=>x.w/=sum);return a;}
function forcM(a,hr,h){return a.reduce((s,v)=>s+v.w*((hr<=v.u-v.c&&h<v.u+v.c)?-1:1),0);}
function remTime(K,d,sigma,T,hp){const ss=sizes(d,sigma);function prepare(kind){let p=ss.map(()=>LAND.theta.map(()=>kind==='IRM'?.5:1));let path=kind==='IRM'?[...seq(0,hp,61),...seq(hp,0,61)]:[...seq(1.2,-hp,121),...seq(-hp,0,61)];path.forEach(h=>ss.forEach((s,j)=>LAND.theta.forEach((_,i)=>p[j][i]=advance(landscape(h,i),p[j][i],K,s.v,T,.1))));return seq(-6,5,112).map(logt=>{let m=0;ss.forEach((s,j)=>LAND.theta.forEach((_,i)=>m+=s.w*moment(landscape(0,i),advance(landscape(0,i),p[j][i],K,s.v,T,10**logt))/32));return {x:logt,y:m};});}return {irm:prepare('IRM'),dcd:prepare('DCD')};}
