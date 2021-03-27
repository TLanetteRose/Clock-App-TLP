
const background = document.querySelector('.background');
const author = document.querySelector('.author');
const icon = document.querySelector('.icon');
const details = document.querySelector('.description'); 
const period = document.querySelector('.period'); 
const expand = document.querySelector('.expand');



// Get current day and time
function getTime() {
let currentTime = new Date();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();

// Setting greeting and time of day
let greeting = '';
if (hour >= 5 && hour <= 11){
    greeting = 'morning';
} else if (hour >= 12 && hour <= 17) {
    greeting = 'afternoon';
} else {
    greeting = 'evening';
}
    document.querySelector('.current__greeting').textContent = `good ${greeting}`

    // Background and icon
    if (hour >= 5 && hour <= 17) {
        background.classList.add('day');
        icon.src = '../assets/desktop/icon-sun.svg';
        icon.setAttribute("alt", "sun icon");
    } else {
        background.classList.add('night');
        icon.src = '../assets/desktop/icon-moon.svg';
        icon.setAttribute("alt", "moon night");
        details.style.color = '#fff';
        details.style.background = 'rgba(0,0,0, 0.75)';
    }

    // Time 
    if (minute < 10) {
        minute = '0' + minute
    }

    if (hour === 0) {
        hour = 12
        period.textContent = 'am';
    } else if (hour === 12) {
        period.textContent = 'pm';
    } else if (hour > 12) {
        hour -= 12;
        period.textContent = 'pm';
    } else {
        period.textContent = 'am';
    }
    document.querySelector('.time').textContent = `${hour}:${minute}`;

    //Update time
    let interval = (60 - (new Date()).getSeconds()) * 1000 + 5;
    setTimeout(getTime,interval)

}

function getTimeZone(){
    
}

getTime();





