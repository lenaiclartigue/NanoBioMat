/* Rosensweig relaxation model. SI inputs; SLP output W/g of magnetic oxide. */
(function(root){
const mu0=4*Math.PI*1e-7,kB=1.380649e-23;
function langevin(x){return Math.abs(x)<1e-4?x/3-x*x*x/45:1/Math.tanh(x)-1/x}
function calculate(p){const V=Math.PI*(p.d*1e-9)**3/6,Vh=Math.PI*((p.d+p.shell)*1e-9)**3/6;
const tn=p.t0*Math.exp(Math.min(700,p.K*V/(kB*p.T))),tb=p.eta===Infinity?Infinity:3*p.eta*Vh/(kB*p.T),tau=1/(1/tn+1/tb),x=2*Math.PI*p.f*tau;
const xi=mu0*p.M*p.H*V/(kB*p.T),chi=p.H===0?mu0*p.M*p.M*V/(3*kB*p.T):p.M*langevin(xi)/p.H;
return {tn,tb,tau,slp:mu0*Math.PI*p.f*p.H*p.H*chi*x/(1+x*x)/p.rho/1000}}
const presets={fortin:{d:10,K:16000,M:280000,rho:4900,T:310.15,eta:.0007,shell:4,t0:1e-9,f:700000,H:24800},cheon:{d:12,K:13000,M:530000,rho:5300,T:4.14e-21/kB,eta:.00055,shell:2,t0:1e-9,f:500000,H:37300}};
function average(p,sigma=0,massWeighted=true){if(sigma===0)return calculate(p).slp;let a=0,b=0;for(let j=0;j<=160;j++){const z=-8+j*.1,d=p.d*Math.exp(sigma*z),w=Math.exp(-z*z/2)*(massWeighted?d**3:1)*(j===0||j===160?1:j%2?4:2);a+=w*calculate({...p,d}).slp;b+=w}return a/b}
const api={calculate,average,langevin,presets};if(typeof module!=='undefined')module.exports=api;root.HeatModel=api;
})(typeof window==='undefined'?globalThis:window);
