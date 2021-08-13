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

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(`${data.content} —${data.author}`)
  })
 **************************** 
03/30/2021-- I got my 'fetch' right today!!! 
04/01/2021-- Learning about using 'content' in my css; Content is a CSS property that replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements (MDN).
https://developer.mozilla.org/en-US/docs/Web/CSS/content
04/02/2021-- starting app style again; reviewing 'revealing and hiding sticky footer'; Found information about hiding/revealing sticky footer with transitions. 
https://stackoverflow.com/questions/4528085/toggle-show-hide-div-with-button
Learned that 'innerText' can be use to change the writing on a button. I had an error with the jS. After stepping away, I figured out that I had one extra = sign. 
04032021: Got the JS organized. Now working on page design. What is max-content in grid layout? 
04102021: Learned that it matters how you nest the classes/ids in SASS. 
04/18/2021: Why does arrow disappear after I click the button?
05/01/2021: I have been feeling like an imposter lately. I decided to redo my CSS on my own. when I copy other code and try to understand, I do understand it. However, it didn't fit me. So I went back to basics. I started with the sizing and position of the items on the page. I used flex this time ( I love flex!).
05/02/2021: I was able to get my show/hide footer event listener to work. However, the words aren't changin correctly. 
05/08/2021: Read about media queries and making the site responsive by sizig layout elements using percentages. I learned first-hand that using percentages makes it easier for your page to adjust to larger sizes. (Yay!) 
05/13/2021: The project assets included an img for an up arrow. I was having a hard time getting the up arrow to start as a down arrow on the button. After reviewing other's project code, I realized that I could use another image (Duh!). I have now replaced the given image with a fontawesome icon. Realized that I needed to use a grid layout for the md and lg breakpoints
05/15/2021: Finally understood that I forgot the grid-area designations to make the grid work. 
08/13/2021: Starting my styling again. 

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

**************************************************
Start over 04/28/2021
body {
    font-family: $font-family;
    //overflow: hidden;
}

.background {
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;

    &::before {
        content: '';
        position: absolute; 
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        background: rgba(0,0,0,0.4);
    }
}

.main__container {
    @include flex(column, space-between);
    position: relative;
    height: 100vh;
    max-width: 115rem;
    padding: 2.2rem 2.6rem 4rem;
    text-align: left;
    color: $white;
    
}

/* Quote Container */

.quote__container {
    max-width: 57rem;
    display: grid;
    grid-template-columns: 1fr 1.67rem;
    column-gap: 1.6rem;

    &__container-random {
        margin: 0 auto;
    }

    .quote-text {
        @include md-breakpoint {
            font-size: 1.2rem !important;
            line-height: 2.8rem !important;
        }

       @include lg-breakpoint {
           padding: 1.3rem 0 9.8rem;
        }
    }

    .author {
        padding-top: 0.8rem;
        font-weight: $weight-bold !important;

        @include md-breakpoint {
            font-size: 1.2rem !important;
            line-height: 2.8rem !important;
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

        &:hover {
            opacity: 1;
        }
    }
}

/* Current Section */
.current {
    @include flex (column, space-evenly);
   

    .current__container {
        text-transform: uppercase;
        text-align: left;
        width: 80vw;
        margin: 0 auto;

        @include lg-breakpoint {
            display: grid;
            grid-template-columns: 1fr max-content;
        }

        header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        

            .icon {
                padding-right: 1.6rem;

                    @include md-breakpoint {
                    height: 2.4rem;
                }
            
            }

            .current__greeting {
                letter-spacing: 0.3rem;
                font-weight: $weight-regular !important;
            }
            span {
                display: none;

                    @include md-breakpoint {
                        display: block;
                    }
            }

            span {
                letter-spacing: 0.25rem;
                font-weight: $weight-regular !important;

                @include md-breakpoint {
                    font-size: 1.5rem !important;
                    line-height: 2.8rem !important;
                    letter-spacing: 0.35rem;
                }

                @include lg-breakpoint {
                    font-size: 1.75rem !important;
                    line-height: 2.8rem;
                    letter-spacing: 0.4rem;
                }
            }
        }

        .current__time {
            padding-bottom: 3rem;

            @include lg-breakpoint {
                padding-bottom: 0;
            }

            .time__container {
                @include flex (row, space-evenly);
                //column-gap: 0;

                @include md-breakpoint {
                    column-gap: 2rem;
                }
            }

            .time {
                font-size: 8.5rem;
                font-weight: $weight-regular;
                letter-spacing: -3px;
                margin: 0;
                padding: 1rem 1.6rem 1rem 0;

                @include md-breakpoint {
                    font-size: 10rem;
                    line-height: 10rem;
                    letter-spacing: -2.5px;
                    //font-weight: $weight-regular;
                }

                @include lg-breakpoint {
                    font-size: 12.5rem;
                }
            }

            .standard-time {
                align-self: center;
                font-size: 1.5rem;
                padding-top: 2.3rem;
                
                @include md-breakpoint {
                    font-size: 3rem;
                    line-height: 2.8rem;
                    padding-top: 6rem;
                }

                .period,
                .time-zone {
                    font-weight: $weight-regular !important;
                }

            }

            .current__location {
                letter-spacing: 0.188rem;
                font-weight: $weight-regular !important;
            }

        }

    }
}

.btn-more {

    .arrow {
        width: 3.2rem;
        height: 3.2rem;
        transform: rotate(180deg);
        transition: transform .5s, filter .2s;
    }

    
    .rotate {
        transform: rotate(0deg);
    } 
}

/* Footer */
.description {
    visibility: hidden;
    resize: vertical;
    //overflow-y: hidden;
    //overflow-x: hidden;
    width: 100%;
    height: 260px;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all .5s ease-in-out;
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
}

.description .appear {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
} 

.description {
    background: rgba(255, 255, 255, 0.75);
    //backdrop-filter: blur(40.77px);
    //padding: 4rem 0;
    color: $dark-gray;
}

.bottom {
    bottom: -110px;
}
