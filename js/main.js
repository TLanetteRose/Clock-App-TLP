
const background = document.getElementsByClassName('.background');
const author = document.getElementsByClassName('.author');
const icon = document.getElementsByClassName('.icon');
const details = document.getElementsByClassName('.description'); 
const period = document.getElementsByClassName('.period'); 
const expand = document.getElementsByClassName('.expand');



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
    document.querySelector('current__greeting').textContent = `good ${greeting}`

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



}