// Using Fetch

const background = document.querySelector('.background');
const author = document.querySelector('.author');
const icon = document.querySelector('.icon');
const details = document.querySelector('.description'); 
const period = document.querySelector('.period'); 
const expand = document.querySelector('.expand');

const URL_QUOTE = 'https://api.quotable.io/random';
const URL_TIMEZONE = 'https://worldtimeapi.org/api/ip';
const URL_LOCATION = 'https://freegeoip.app/json/';


function generateQuote(){
    fetch(URL_QUOTE)
    .then(function(quoteRes) {
        return quoteRes.json();
    })
    .then(function(quoteRes) {
        document.getElementById('quote').innerHTML = quoteRes.content; 
        document.querySelector('.author').innerHTML = quoteRes.author;
    })
    .catch(function(err) {
        console.log(err);
    });
    
}

setInterval(generateQuote(), 1000);









