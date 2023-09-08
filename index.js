const myDate = new Date();
const utcMilliseconds = myDate.getUTCMilliseconds();
document.getElementById("currentUTCTime").innerHTML=(`Current UTC Time :${utcMilliseconds}`)

const daysOfWeek =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const days = daysOfWeek[myDate.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = (`Current Day of the Week: ${days}`)
