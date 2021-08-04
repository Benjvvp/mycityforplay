let daysItem = document.getElementById('days')
let hoursItem = document.getElementById('hours')
let minItem = document.getElementById('minuts')
let secItem = document.getElementById('seconds')

let countDown = () => {
    let futureDate = new Date('30 Sep 2021');
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)