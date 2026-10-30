/* Rosensweig-type chord-susceptibility/Debye illustration.
 * SI inputs except d and shell (nm); shell is added to DIAMETER, not radius.
 * SLP output: W/g of magnetic oxide. Finite-field validity is not implied.
 */
(function(root){
const mu0=4*Math.PI*1e-7,kB=1.380649e-23;
function langevin(x){return Math.abs(x)<1e-4?x/3-x*x*x/45:1/Math.tanh(x)-1/x}
function lossFromLogX(logX){const q=Math.exp(-Math.abs(logX));return q/(1+q*q)}
function calculate(p){
 if(!['d','K','M','rho','T','t0'].every(k=>Number.isFinite(p[k])&&p[k]>0)||!Number.isFinite(p.shell)||p.shell<0||!(p.eta===Infinity||Number.isFinite(p.eta)&&p.eta>0)||!Number.isFinite(p.H)||!Number.isFinite(p.f)||p.f<0)throw new RangeError('Invalid physical parameters');
 const V=Math.PI*(p.d*1e-9)**3/6,Vh=Math.PI*((p.d+p.shell)*1e-9)**3/6;
 const sigma=p.K*V/(kB*p.T),logN=Math.log(p.t0)+sigma,logB=p.eta===Infinity?Infinity:Math.log(3*p.eta*Vh/(kB*p.T));
 const lo=Math.min(logN,logB),hi=Math.max(logN,logB),logTau=lo-Math.log1p(Math.exp(lo-hi));
 const tn=Math.exp(logN),tb=Math.exp(logB),tau=Math.exp(logTau);
 const xi=mu0*p.M*p.H*V/(kB*p.T),chi=p.H===0?mu0*p.M*p.M*V/(3*kB*p.T):p.M*langevin(xi)/p.H;
 const loss=p.f===0?0:lossFromLogX(Math.log(2*Math.PI*p.f)+logTau);
 const slp=p.f===0||p.H===0?0:(mu0*Math.PI*p.f*p.H*p.H*chi)*loss/p.rho/1000;
 return {tn,tb,tau,logN,logB,logTau,slp,sigma,xi,hRatio:Math.abs(mu0*p.M*p.H/(2*p.K))};
}
const presets={fortin:{d:10,K:16000,M:280000,rho:4900,T:310.15,eta:.0007,shell:4,t0:1e-9,f:700000,H:24800},cheon:{d:12,K:13000,M:530000,rho:5300,T:4.14e-21/kB,eta:.00055,shell:2,t0:1e-9,f:500000,H:37300}};
function average(p,sigma=0,massWeighted=true){if(!Number.isFinite(sigma)||sigma<0||sigma>1)throw new RangeError('Logarithmic dispersion must lie in [0,1]');if(sigma===0)return calculate(p).slp;let a=0,b=0;for(let j=0;j<=160;j++){const z=-8+j*.1,d=p.d*Math.exp(sigma*z),w=Math.exp(-z*z/2)*(massWeighted?d**3:1)*(j===0||j===160?1:j%2?4:2);a+=w*calculate({...p,d}).slp;b+=w}return a/b}
const api={calculate,average,langevin,lossFromLogX,presets};if(typeof module!=='undefined')module.exports=api;root.HeatModel=api;
})(typeof window==='undefined'?globalThis:window);
