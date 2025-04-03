const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

const numberElement = [];
const barElement = [];

// create number house

for (let i = 1; i <= 12; i++) {
    numberElement.push(` <span style="--index:${i}"><p>${i}</p></span>`);
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// create number sec

for (let i = 1; i <= 60; i++) {
    barElement.push(` <span style="--index:${i}"><p></p></span>`);
}
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurrentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    const secondsDegrees = seconds * 6;
    const minsDegrees = minutes * 6 + seconds * 0.1;
    const hourDegrees = hours * 30 + minutes * 0.5;

    handSeconds.style.transform = `rotate(${secondsDegrees}deg)`;
    handMinutes.style.transform = `rotate(${minsDegrees}deg)`;
    handHours.style.transform = `rotate(${hourDegrees}deg)`;
}

getCurrentTime();
setInterval(getCurrentTime, 1000);