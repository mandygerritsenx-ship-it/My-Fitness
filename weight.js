const WEIGHT_KEY='dailyWeights';
function loadWeights(){return JSON.parse(localStorage.getItem(WEIGHT_KEY))||{}}
function saveWeight(d,v){const w=loadWeights();w[d]=v;localStorage.setItem(WEIGHT_KEY,JSON.stringify(w))}
function getSortedWeights(){const w=loadWeights();return Object.keys(w).sort().map(d=>({date:d,value:w[d]}))}