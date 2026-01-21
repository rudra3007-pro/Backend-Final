let months = ["January","February" , "March" , "April","May","June","July" , "August" , "September" , "October","November","December"];
let days = ["Sun","Mon" , "Tue" , "Wed" , "Thu" , "Fri","Sat"];
let hours = document.getElementById("hrs");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("sec");
let date = document.getElementById("dat");
let month = document.getElementById("mon");
let day = document.getElementById("day");
let year = document.getElementById("year");
let ampm = document.getElementById("am-pm");

setInterval(() => {
    let time = new Date();
    hours.innerHTML = (time.getHours()%12 || 12<10?"0":"") + (time.getHours()%12 || 12);
    minutes.innerHTML = (time.getMinutes()<10?"0":"") + time.getMinutes();
    seconds.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds();
    year.innerHTML = time.getFullYear();
    month.innerHTML = months[time.getMonth()];
    date.innerHTML = (time.getDate()<10?"0":"") + time.getDate();
    day.innerHTML = days[time.getDay()];
    ampm.innerHTML = time.getHours()>=12?"PM":"AM";
}, 1000);