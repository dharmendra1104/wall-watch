const secondNeedle = document.getElementById('second');
const minuteNeedle = document.getElementById('minute');
const hourNeedle = document.getElementById('hour');
const button = document.getElementById('btn');

let second = 0;
let minute = 0;
let hour = 0;
let IntervalId;
let isRunning = false;


function Display() {
    // second++

    // console.log(second)
    // if (second >= 60) {
    //     minute++
    //     second = 0
    // }
    // if (minute >=60) {
    //     hour++
    //     minute = 0
    // }
    if (second < 10) {
        seconds.innerText = `0${second}`
    } else {
        seconds.innerText = second
    }
    if (minute < 10) {
        minutes.innerText = `0${minute}`
    } else {
        minutes.innerText = minute
    }
    if (hour < 10) {
        hours.innerText = `0${hour}`
    } else {
        hours.innerText = hour
    }

    secondNeedle.style.transform = `rotate(${second * 6}deg)`;
    minuteNeedle.style.transform = `rotate(${minute * 6}deg)`;
    hourNeedle.style.transform = `rotate(${(hour * 30) + (minute * 0.5)}deg)`;
}
Display();


function start() {
    isRunning = true;
    intervalId = setInterval(() => {
        second++;

        if (second >= 60) {
            minute++;
            second = 0;
        }
        if (minute >= 60) {
            hour++;
            minute = 0;
        }

        Display();
    }, 1000);
}

function stop() {
    isRunning = false;
    clearInterval(intervalId);
}


button.addEventListener('click', () => {
    if (isRunning) {
        stop();
    } else {
        start();
    }
});



// IntervalId=setInterval(start,1000)