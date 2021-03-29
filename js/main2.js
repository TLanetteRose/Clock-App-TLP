
const URL_QUOTES = 'https://api.quotable.io/random';
const URL_TIME = 'http://worldclockapi.com/api/json/cet/now';
//const URL_TIMEZONE = 'https://freegeoip.app/json/';
//const URL_LOCATION = 'https://freegeoip.app/json/';

const refresh = document.getElementById('refresh');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const time = document.getElementById('time');
const expand = document.getElementById('expand');
const details = document.getElementById('description');
const app = document.getElementById('app');
const background = document.getElementById('background');
const icon = document.getElementById('icon');
const period = document.getElementById('period');
//const region = document.getElementById('region');
//const location = document.getElementById('location');

getQuote();
getTime();
//getTimeZone();
//getLocation();

const interval = setInterval(getTime, 1000);
clearInterval(interval);

async function getQuote() {
    const res = await fetch(URL_QUOTES);
    const data = await res.json();
    const quote = data.content;
    const author = data.author;
    displayQuote(quote, author);
}

function displayQuote(quoteData, authorData) {
    // Reset
    quote.innerText = '';
    author.innerText = '';

    // Add quote
    quote.innerText = quoteData;
    author.innerText = authorData;
}


async function getTime() {
    const res = await fetch(URL_TIME);
    const data = await res.json();
    const date = new Date(data.currentDateTime);
    const hours = date.getHours();
    const min = date.getMinutes();
    displayTime(hours, min);

    // Setting greeting
    let greeting = '';
    if (hours >= 5 && hours <= 11) {
        greeting = 'morning';
    } else if (hours >= 12 && hours <= 17) {
        greeting = 'afternoon';
    } else {
        greeting = 'evening';
    }
    document.querySelector('.current__greeting').textContent = `good ${greeting}`

    // Background and icon
    if (hours >= 5 && hours <= 17) {
        background.classList.add('day');
        icon.src = '../assets/desktop/icon-sun.svg';
        icon.setAttribute('alt', 'sun icon');
    } else {
        background.classList.add('night');
        icon.src = '../assets/desktop/icon-moon.svg';
        icon.setAttribute('alt', 'moon night');
        details.style.color = '#fff';
        details.style.background = 'rgba(0, 0, 0, 0.75)';
    }
}

function displayTime(h, m) {
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    time.innerText = h + ':' + m;
    //if (h >= 18) {
        //background.classList.add('night');
    //}

    if (h === 0) {
        h = 12
        period.textContent = 'am';
    } else if (h === 12) {
        period.textContent = 'pm';
    } else if (h > 12) {
        h -= 12;
        period.textContent = 'pm';
    } else {
        period.textContent = 'am';
    }
}









