const CHECKINS_KEY='checkins';
function loadCheckins(){return JSON.parse(localStorage.getItem(CHECKINS_KEY))||[]}
function saveCheckin(c){const a=loadCheckins();a.push(c);localStorage.setItem(CHECKINS_KEY,JSON.stringify(a))}