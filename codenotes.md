Grid notes for page -- https://grid.layoutit.com/

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "Quote"
    "clock"
    "footer";
}

.Quote {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "random-quote refresh";
  grid-area: Quote;
}

.refresh { grid-area: refresh; }

.random-quote { grid-area: random-quote; }

.clock {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.4fr 0.6fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "container-"
    "more-button";
  grid-area: clock;
}

.container- {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1.3fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "greeting"
    "current-time";
  grid-area: container-;
}

.greeting { grid-area: greeting; }

.current-time { grid-area: current-time; }

.more-button { grid-area: more-button; }

.footer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.4fr 1fr 1fr 0.9fr 0.7fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "region"
    "year-day"
    "week-day"
    "week-number"
    "attribution";
  grid-area: footer;
}

.region { grid-area: region; }

.year-day { grid-area: year-day; }

.week-day { grid-area: week-day; }

.week-number { grid-area: week-number; }

.attribution { grid-area: attribution; }

