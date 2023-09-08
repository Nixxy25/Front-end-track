function UtcTime(){
        const myDate = new Date();
        const utcMilliseconds = myDate.getTime();
        document.getElementById("currentUTCTime").innerHTML= utcMilliseconds;
        
        const daysOfWeek =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const day = daysOfWeek[myDate.getDay()];
        document.getElementById("currentDayOfTheWeek").innerHTML = day;
      
}

UtcTime();