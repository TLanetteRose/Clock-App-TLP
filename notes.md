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




/*
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




//JS

/*function showDesc (){
   document.querySelector('.app__widgets').classList.toggle('transform');
   details.classList.toggle('transform');

   if (expand.firstChild.nodeValue === 'More') {
       expand.firstChild.nodeValue = 'Less'
   } else {
       expand.firstChild.nodeValue = 'More'
   }

   const arrow = document.querySelector('.arrow');
   arrow.classList.toggle('rotate');
}
expand.addEventListener('click', showDesc); */