const time = new Date();
const hours = time.getUTCHours();
const minutes = time.getUTCMinutes();
const milliseconds =time.getUTCMilliseconds();
document.getElementById("currentUTCTime").innerHTML = (`Current UTC Time: ${hours}:${minutes}:${milliseconds}`)


const currentDate = new Date();
const daysOfWeek =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const days = daysOfWeek[currentDate.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = (`Current Day of the Week: ${days}`)
