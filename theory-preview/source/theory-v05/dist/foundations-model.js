/* SI. Pedagogical models: quasistatic SW (T=0); equilibrium Langevin;
   ZFC/FC critical-barrier approximation, noninteracting, fixed bodies. */
const BOLTZ=1.380649e-23,CORE_MS=480000,ATTEMPT=1e-9;
const volume=d=>Math.PI/6*(d*1e-9)**3;
function L(x){return Math.abs(x)<1e-4?x/3-x*x*x/45:1/Math.tanh(x)-1/x;}
function distribution(d,sigma){const a=Array.from({length:601},(_,i)=>{const z=-5+10*i/600,v=volume(d*Math.exp(sigma*z));return{d:d*Math.exp(sigma*z),v,w:Math.exp(-z*z/2)*v}});const total=a.reduce((s,p)=>s+p.w,0);return a.map(p=>({...p,w:p.w/total}));}
function magnetization(B,T,d,sigma){return distribution(d,sigma).reduce((s,p)=>s+p.w*L(CORE_MS*p.v*B/(BOLTZ*T)),0);}
function swLoop(deg,steps=600){if(deg===0){const down=[{x:3,y:1},{x:0,y:1},{x:-1,y:1},{x:-1,y:-1},{x:-3,y:-1}];return{down,up:down.map(p=>({x:-p.x,y:-p.y}))}}const theta=deg*Math.PI/180,path=Array.from({length:steps+1},(_,i)=>3-6*i/steps);let phi=0,m=1;const down=[];
for(const h of path){if(deg===0){if(h<=-1)m=-1;phi=m>0?0:Math.PI;}else if(deg===90){m=Math.max(-1,Math.min(1,h));phi=Math.acos(m);}else{const der=q=>Math.sin(2*(q-theta))+2*h*Math.sin(q),dd=q=>2*Math.cos(2*(q-theta))+2*h*Math.cos(q);let minima=[];for(let i=0;i<128;i++){let lo=2*Math.PI*i/128,hi=2*Math.PI*(i+1)/128;if(der(lo)<=0&&der(hi)>=0){for(let j=0;j<30;j++){const mid=(lo+hi)/2;if(der(mid)>0)hi=mid;else lo=mid;}const q=(lo+hi)/2;if(dd(q)>0)minima.push(q);}}if(!minima.length)throw Error('No SW minimum');const distance=q=>Math.acos(Math.max(-1,Math.min(1,Math.cos(q-phi))));phi=minima.reduce((a,b)=>distance(a)<distance(b)?a:b);m=Math.cos(phi);}down.push({x:h,y:m,phi});}
const up=down.map(p=>({x:-p.x,y:-p.y,phi:p.phi+Math.PI}));return{down,up};}
function randomLoop(){const n=32,curves=Array.from({length:n},(_,i)=>swLoop(Math.acos((i+.5)/n)*180/Math.PI));return {down:curves[0].down.map((p,i)=>({x:p.x,y:curves.reduce((s,c)=>s+c.down[i].y/n,0)})),up:curves[0].up.map((p,i)=>({x:p.x,y:curves.reduce((s,c)=>s+c.up[i].y/n,0)}))};}
function remanenceAndCoercivity(loop){const zero=loop.down.reduce((a,b)=>Math.abs(a.x)<Math.abs(b.x)?a:b);let hc=0;for(let i=1;i<loop.down.length;i++){const a=loop.down[i-1],b=loop.down[i];if(a.y>=0&&b.y<=0){hc=Math.abs(a.x+(b.x-a.x)*a.y/(a.y-b.y||1));break;}}return{mr:Math.abs(zero.y),hc};}
function blockingTemperature(d,K,tm){return K*volume(d)/(BOLTZ*Math.log(tm/ATTEMPT));}
function zfcCurves(d,K,tm){const ss=distribution(d,.15),B=.0001,ts=Array.from({length:241},(_,i)=>5+595*i/240);const blocked=CORE_MS*B/(3*K);function m(T,fc){return ss.reduce((sum,p)=>{const tb=K*p.v/(BOLTZ*Math.log(tm/ATTEMPT));return sum+p.w*(T>=tb?L(CORE_MS*p.v*B/(BOLTZ*T)):fc?L(CORE_MS*p.v*B/(BOLTZ*tb)):blocked)},0)}return {z:ts.map(T=>({x:T,y:m(T,false)})),f:ts.map(T=>({x:T,y:m(T,true)})).reverse(),B};}
