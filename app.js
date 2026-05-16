const today=new Date().toISOString().slice(0,10);
document.getElementById('dateDisplay').innerText=new Date().toLocaleDateString('nl-NL',{day:'numeric',month:'long',year:'numeric'});

function renderHabits(){const ul=document.getElementById('habitList');ul.innerHTML='';loadHabits().forEach(h=>{const li=document.createElement('li');li.innerText=h.name;li.onclick=()=>{toggleHabit(h.id,today);renderHabits()};ul.appendChild(li)})}

document.getElementById('addHabitBtn').onclick=()=>{const i=document.getElementById('newHabitInput');if(i.value){addHabit(i.value);i.value='';renderHabits()}}
renderHabits();

const wi=document.getElementById('weightInput');if(loadWeights()[today])wi.value=loadWeights()[today];wi.onchange=()=>{saveWeight(today,parseFloat(wi.value));renderWeightChart()}

let wc;function renderWeightChart(){const d=getSortedWeights();if(!d.length)return;const ctx=document.getElementById('weightChart');if(wc)wc.destroy();wc=new Chart(ctx,{type:'line',data:{labels:d.map(x=>x.date),datasets:[{label:'Gewicht',data:d.map(x=>x.value)}]}})}
renderWeightChart();

document.getElementById('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(localStorage)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='backup.json';a.click()}
