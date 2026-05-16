const HABITS_KEY='habits';
function loadHabits(){return JSON.parse(localStorage.getItem(HABITS_KEY))||[]}
function saveHabits(h){localStorage.setItem(HABITS_KEY,JSON.stringify(h))}
function addHabit(name){const h=loadHabits();h.push({id:Date.now(),name,history:{}});saveHabits(h)}
function toggleHabit(id,date){const h=loadHabits();const habit=h.find(x=>x.id===id);habit.history[date]=!habit.history[date];saveHabits(h)}