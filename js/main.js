// Elements change displays/click btn
let appContainer = document.getElementsByClassName("app__container");
let footerContainer = document. getElementsByClassName("footer__container");
let displayBtn = document.getElementById("btn-click");
let btnLabel = document.getElementsByClassName("btn-label");
let quote = document.getElementsByClassName("quote");
let quoteCaption = document.getElementsByClassName("quote__caption");
let refreshIcon = document.getElementsByClassName("refresh-icon");
let quoteContainer = document.getElementsByClassName("quote__container");

// Change greeting
let clockGreeting = document.getElementsByClassName("clock__greeting-container");
let greeting = document.getElementsByClassName("clock-greeting");

// Image for background changes in app
let backgroundImg = document.getElementById("app");

// Change clock icon
let dayIcon = document.getElementsByClassName("day-icon");
let nightIcon = document.getElementsByClassName("night-icon");

// Display time
let clock = document.getElementById("clock");
let timeZoneAbrv = document.getElementsByClassName("time-zone");

// Display location
let location = document.getElementsByClassName("time-location");

let descContent = document.getElementsByClassName("desc-content");
let descInfo = document.getElementsByClassName(desc-info);
let timeZone = descInfo[0];
let yearDay= descInfo[1];
let weekDay= descInfo[2];
let weekNumber= descInfo[3];
let dayNames= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Default time in case API not retrieved
// Remove decimals from day and week and rounded up using ceiling
let date = new Date();
let currentHour = ('0' + date.getHours()).slice(-2);
let currentMinute = ('0' + date.getMinutes()).slice(-2);
let yearTimeStart = new Date("January 01, 2021 0:00:00").getTime();
let yearTimeEnd = new Date("January 01, 2022 0:00:00");
let year = yearTimeEnd - yearTimeStart;
let dayOfYear = Math.ceil((date.getTime()- yearTimeStart) / (1000* 60 * 60 * 24));
let currentWeek = Math.ceil((date.getTime() - yearTimeStart) / (1000 * 60 * 60 * 168)); //168 for hours in a week
let currentDay = date.getDay() + 1;

