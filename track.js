function utcMilliseconds(){
    const myDate = new Date();

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const day = daysOfWeek[myDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = day;

    const utcTime = myDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent= utcTime.toString();
}

utcMilliseconds();

setInterval(utcMilliseconds, 1)