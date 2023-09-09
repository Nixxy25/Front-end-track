function UtcTime(){
        const myDate = new Date();
        // const utcMilliseconds = myDate.getTime();
        const utcTime = myDate.toUTCString().split(" ")[4];
        document.getElementById("currentUTCTime").innerHTML= utcTime;
        
        const daysOfWeek =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const day = daysOfWeek[myDate.getDay()];
        document.getElementById("currentDayOfTheWeek").innerHTML = day;
      
}

UtcTime();

setInterval(UtcTime, 1000)