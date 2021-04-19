03/21/2021-- learned that I need to have the main.scss separate from the other files. I needed to put the other files in folders. 
03/23/2021-- After reading, I realized that I needed more semantic element tags in my html. I also realized from reading that I could enter a lot of my information using JS. I decided to focus on the JS side of the app first before the CSS. 
03/26/2021-- Learning about how to use JS to add information and style to html. 
03/27/2021-- Started over. Goal is to use JS to bring in background and other information. Analyzed other code. Person used unordered list for details, had a separate section for top widgets. I reorganized my html to use the unordered list and to rename my ids and classes. 
Used https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php for current time function
I learned how to add a background picture in a js function and add the alt information. 
Needed to use querySelector instead of getClassName
Referring to using Axios with JS: https://www.digitalocean.com/community/tutorials/js-axios-vanilla-js -- Axios allows me to make requests like get, post, and delete; can use to make js applications; used a get/catch err for world clock api based on ip address. 
Used Free IP Geolocation and axios; 
https://github.com/lukePeavey/quotable for random quotes
Used display: grid for the quote container
03/28/2021-- Trying a new CSS Reset and styling page according to my details. Used a px to rem converter 
https://nekocalc.com/px-to-rem-converter
03/29/2021: WoooHooo! I successfully use fetch today! https://dev.to/asaoluelijah/understanding-fetch-2-building-a-random-quote-generator-app-25nj

03/30/2021-- I got my 'fetch' right today!!! 
04/01/2021-- Learning about using 'content' in my css; Content is a CSS property that replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements (MDN).
https://developer.mozilla.org/en-US/docs/Web/CSS/content
04/02/2021-- starting app style again; reviewing 'revealing and hiding sticky footer'; Found information about hiding/revealing sticky footer with transitions. 
https://stackoverflow.com/questions/4528085/toggle-show-hide-div-with-button
Learned that 'innerText' can be use to change the writing on a button. I had an error with the jS. After stepping away, I figured out that I had one extra = sign. 
04032021: Got the JS organized. Now working on page design. What is max-content in grid layout? 
04102021: Learned that it matters how you nest the classes/ids in SASS. 
04/18/2021: Why does arrow disappear after I click the button?


********************************
.app__widgets {
    position: relative;
    height: 100%;
    transition: tranform 0.5s ease;
    padding: 3.17rem 2.6rem 4rem;
    
    @include flex (column, space-between);
    max-width: 111rem; //based on desktop

    @include md-breakpoint {
        padding: 15.3rem 16.8rem 6.4rem 6.4rem;
    }

    @include lg-breakpoint {
        margin: 0 auto;
    }

    @include xl-breakpoint {
        padding: 5.6rem 0 9.8rem;
    }

    &__contents {
        @include flex (column, space-between);
    }
}

.quote__container {
    text-transform: initial;
    color: $white;
    font-size: 1.5rem;
    line-height: 2.2rem;
    max-width: 57.3rem; //based on desktop

    display: grid;
    grid-template-columns: 1fr 1.67rem;
    column-gap: 1.6rem;

    @include md-breakpoint {
        font-size: 1.8rem;
        line-height: 2.8rem;
    }

    .author {
        font-weight: $weight-bold;
        color: $white;
        padding-top: 0.8rem;

       @include md-breakpoint {
            font-size: 1.8rem;
            line-height: 2.8rem;
        }

        @include lg-breakpoint {
            padding: 1.3rem 0 9.8rem;
        }
    }
}

#refresh {
    height: 1.8rem;
    border: none;
    cursor: pointer;
    background: none;

    @include md-breakpoint {
        margin-top: 0.3rem;
    }

    @include lg-breakpoint {
        margin-top: 1rem;
    }

    svg {
        fill: $white;
        outline: none;
        transition: transform 0.15s linear;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
}

.current {
    text-transform: uppercase;
    color: $white;

    @include lg-breakpoint {
        display: grid;
        grid-template-columns: 1fr max-content;
    }
    
    header {
        display: flex;
    }

    .icon {
        padding-right: 1.6rem;
        animation: rotation 6s infinite linear;

        @include md-breakpoint {
            height: 2.4rem;
        }
    }
}
*/


/* Condensed Universal Reset */
* {
    box-sizing: inherit;
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-size: 100%;
    border: 0 none;
    padding: 0;
    margin: 0;
    outline: 1px solid black;
}

*::before,
*::after {
    box-sizing: inherit;
}

/* Additional Reset */

html {
    position: relative;
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
}

html,
body {
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    outline: 1px solid black;
    overflow: hidden;
}

h1,
h2,
h3,
p {
    margin: 0;
}

a {
    cursor: pointer;
    text-decoration: none;
}

picture,
img {
    display: inline-block;
}

li {
    list-style-type: none;
}

.sr-only {
    border: 0 !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;

}



***********************************
//JS

/* function showDesc (){
   //app.classList.toggle('transform');
   details.classList.toggle('appear');

   if (btnExpand.innerText === 'More') {
       btnExpand.innerText = 'Less'
   } else {
       btnExpand.innerText = 'More'
   }

   arrow.classList.toggle('rotate');
}
btnExpand.addEventListener('click', showDesc); */


*************************** 
04022021
.app__widgets {
    position: relative;
    height: 100%;
    //width: 100%;
    margin: 0;
    text-align: left;
    padding: 3.17rem 2.6rem 4rem;
    //padding: 3.8rem 1.9rem;
    color: $white; 
    position: relative;
    transition: transform 0.5s ease;

    @include flex (column, space-between);
    max-width: 111rem;

    @include md-breakpoint {
        padding: 8rem 11.7rem 6.4rem 6.4rem;
    }

    @include lg-breakpoint {
        margin: 0 auto;
    }

    @include xl-breakpoint {
        padding: 5.6rem 0 9.8rem;
    }
    
}

.quote__container {
     position: relative;
     text-transform: initial;
     width: 100%;
     //@include flex (row, space-evenly);
     display: grid;
     grid-template-columns: 1fr 1.67rem;
     column-gap: 1.6rem;

     #quote {
         @include md-breakpoint {
             font-size: 1.25rem;
         }
     }

     .author {
         font-weight: $weight-bold !important;
         padding-top: .18rem;

         @include md-breakpoint {
             font-size: 1.25rem;
         }

         @include lg-breakpoint {
             padding: 1.8rem 0 9.8rem;
         }
    }  
}

#refresh {
    height: 1.8rem;
    border: none;
    cursor: pointer;
    background: none;

    @include md-breakpoint {
        margin-top: 0.3rem;
    }

    @include lg-breakpoint {
        margin-top: 1rem;
    }

    svg {
        fill: $white;
        outline: none;
        transition: transform 0.15s linear;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }
}

.current {
    top: 10rem;
    position: relative;

    &__container {
        position: relative;

        header {
            @include flex (row, start);
        }
    }

    &__greeting {
        font-weight: $weight-regular !important;
        text-transform: uppercase;
    }

    .currently {
        visibility: hidden;

        @include md-breakpoint {
            visibility: visible;
            font-weight: $weight-regular !important;
            text-transform: uppercase;
        }
    }

    &__time {
        position: relative;
        top: -10px;

        .time__container {
            @include flex (row, start);

            .time {
                padding-left: 10px;
            }

            .standard-time {
                @include flex(row, start);
            }
        }
    }

    &__location {
        position: absolute;
        bottom: 5px;
    }

}

.expand {
    .arrow {
        width: 2.2rem;
        height: 2.2rem;
        transform: rotate(180deg);
        transition: transform 0.5s, filter 0.2s;
    }
    .rotate {
        transform: rotate(0deg);
    }
}

.description {
    position: relative;
    width: 100%;
    transition: all 0.5s ease;
    overflow: hidden;
    @include xl-breakpoint {
        
    }
}


***********************************

let toggle = document.getElementById('toggle');
    let content = document.getElementById('content');

    content.classList.toggle('appear');

    if (toggle.innerText == 'More') {
        toggle.innerText = 'Less';
    } else {
        toggle.innerText = 'More';
    }
}

toggle.addEventListener('click', showDesc);



**************************************
From Roman7501

const URL_QUOTES = "https://api.quotable.io/random";
const URL_CLOCK = "http://worldclockapi.com/api/json/cet/now";

const refreshBtn = document.getElementById("refresh");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const clockEl = document.getElementById("clock");

const btnMore = document.getElementById("btn-more");
const desc = document.getElementById("desc");
const app = document.getElementById("app");

const body = document.querySelector("body");

getQuote();
getClock();
const interval = setInterval(getClock, 1000);
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
  quoteEl.innerText = "";
  authorEl.innerText = "";

  // Add quotte
  quoteEl.innerText = quoteData;
  authorEl.innerText = authorData;
}

async function getClock() {
  const res = await fetch(URL_CLOCK);
  const data = await res.json();
  const date = new Date(data.currentDateTime);
  const hours = date.getHours();
  const min = date.getMinutes();

  displayClock(hours, min);
}

function displayClock(h, m) {
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }

  clockEl.innerText = h + ":" + m;
  if (h >= 18) {
    body.classList.add("night");
  }
}

function showDesc() {
  if (app.classList.contains("show-desc")) {
    app.classList.remove("show-desc");
    app.style.transform = "translateY(0)";
  } else {
    app.classList.add("show-desc");
    app.style.transform = `translateY(-${desc.offsetHeight}px)`;
  }
  console.log(app);
}

refreshBtn.addEventListener("click", getQuote);

btnMore.addEventListener("click", showDesc);

**********************
https://medium.com/swlh/now-you-see-it-now-you-dont-two-ways-to-toggle-using-vanilla-javascript-9f45c6db7698

btnExpand.addEventListener('click', () => {
    
    showDesc = !showDesc 

    if (showDesc === true) {
        details.style.visibility = 'visible';

    } else {
        details.style.visibility = 'hidden';
    }
    
    btnExpand.innerText = buttonStates[btnExpand.innerText]
});

let showDesc = false

let buttonStates = {
    'More' : 'Less',
    'Less' : 'More'
}