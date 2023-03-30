
const timeId = "time";
const dateId = "date";
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const consoleGreeting = "Hello World! - from popup_script.js";

function setTimeAndDate(timeElement, dateElement) {
 let date = new Date();

 const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
 const time = date.getHours() + ":" + minutes;

 date = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
 
 timeElement.innerHTML = time;
 dateElement.innerHTML = date;
}

console.log(consoleGreeting);

document.addEventListener("DOMContentLoaded",function() {
 const timeElement = document.getElementById(timeId);
 const dateElement = document.getElementById(dateId);
 setTimeAndDate(timeElement,dateElement);
}); 