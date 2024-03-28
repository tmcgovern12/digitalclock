function currentTime() {
    let theTime = new Date();
    
    let theDayNum = theTime.getDay();
    let theHour = theTime.getHours(); // Use getHours() to get the hour
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();

    let theDay = ['SUN', 'MON', 'TUE','WED', 'THU', 'FRI', 'SAT', 'SUN'];
    
    let amPm = "AM"; 

    if (theHour >=12) {
        amPm = "PM";
    }

    if(theHour > 12) {
        theHour = theHour % 12;
    }

    if(theHour < 10) {
        theHour = "0" + theHour;
    } 

    if(theSeconds < 10) {
        theSeconds = "0" + theSeconds; // Correct variable name
    } 

    if(theMinutes < 10) {
        theMinutes = "0" + theMinutes; // Correct variable name
    } 

    document.getElementById('day').innerHTML = theDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour;
    document.getElementById('minute').innerHTML = theMinutes;
    document.getElementById('second').innerHTML = theSeconds;

    let evenSeconds = theSeconds % 2; 

    if(evenSeconds ===0) {
        document.getElementById('colon1').style.color ="red";
        document.getElementById('colon2').style.color ="purple";
    } else {
        document.getElementById('colon1').style.color ="blue"; // Set black if seconds are odd
        document.getElementById('colon2').style.color ="pink"; // Set black if seconds are odd
    }
}

setInterval(() => {
    currentTime();
}, 1000);