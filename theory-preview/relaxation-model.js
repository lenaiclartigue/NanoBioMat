/* Dilute noninteracting spherical particles, zero-field Arrhenius approximation. */
(function(root){
 const kB=1.380649e-23,tau0=1e-9;
 function calculate({d=18,delta=2,dh=d+2*delta,eta=.7,K=16,T=310.15}={}){
  if(![d,dh,eta,K,T].every(x=>Number.isFinite(x)&&x>0)||dh<d)throw new RangeError('Positive parameters and dh >= d required');
  const V=Math.PI/6*(d*1e-9)**3,Vh=Math.PI/6*(dh*1e-9)**3,sigma=K*1e3*V/(kB*T);
  const logN=Math.log(tau0)+sigma,logB=Math.log(3*eta*1e-3*Vh/(kB*T));
  const lo=Math.min(logN,logB),hi=Math.max(logN,logB),logEff=lo-Math.log1p(Math.exp(lo-hi));
  return {sigma,logN:logN/Math.LN10,logB:logB/Math.LN10,logEff:logEff/Math.LN10};
 }
 const model={calculate,kB,tau0};if(typeof module==='object')module.exports=model;else root.NBRelaxation=model;
})(typeof window==='object'?window:globalThis);
