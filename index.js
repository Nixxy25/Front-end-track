const myDate = new Date();
const utcMilliseconds = myDate.getTime();
document.getElementById("currentUTCTime").innerHTML=(`Current UTC Time :${utcMilliseconds}`)

const currentDate = new Date();
const daysOfWeek =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const days = daysOfWeek[currentDate.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = (`Current Day of the Week: ${days}`)
