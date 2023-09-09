function UtcTime(){
        const myDate = new Date();
        const daysOfWeek =[
                "Sunday", 
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
        ];


        const day = daysOfWeek[myDate.getDay()];
        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = day;

        const utcTime = myDate.toUTCString().split(" ")[4];
        document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
      
}

UtcTime();

setInterval(UtcTime, 1000)