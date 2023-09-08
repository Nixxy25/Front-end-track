function UtcTime(){
        const myDate = new Date();
        const utcMilliseconds = myDate.getTime();
        const timeNow = utcMilliseconds.toString();
        document.getElementById("currentUTCTime").innerHTML= timeNow;
        
        const daysOfWeek =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const day = daysOfWeek[myDate.getDay()];
        document.getElementById("currentDayOfTheWeek").innerHTML = day;
      
}

UtcTime();