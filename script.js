function updateTime(){
    var dateTime=new Date();
    var day=dateTime.getDay();
    var hours=dateTime.getHours();
    var minutes=dateTime.getMinutes();
    var seconds=dateTime.getSeconds();
    var am_pm=document.getElementById("am_pm");
    var dayNames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (hours>=12) {
        am_pm.innerHTML="PM";
    }
    else{
        am_pm.innerHTML="AM";
    }

    if (hours>12) {
        hours=hours-12;
    }
    document.getElementById("day").innerHTML=dayNames[day];
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}
setInterval(updateTime,1000);
var dateTime=new Date();
var month=dateTime.getMonth();
var monthNames=["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]
document.getElementById("month").innerHTML=monthNames[month];
var date=dateTime.getDate();
document.getElementById("date").innerHTML=date;
var year=dateTime.getFullYear();
document.getElementById("year").innerHTML=year;
