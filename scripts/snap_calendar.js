/* Days of the Week */
const daysOfWeek = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
}

/* Months */
const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

/* Finding First & Last Date of Month */
var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

/* Sending month and year */
document.querySelector("#month-year").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

/* Define Special Event Days with Event Types */
const specialEventDays = [
    { day: 24, type: "Sprint 2" },
    { day: 15, type: "Activity" }
];

/* Creating Date Array */
var datesArray = "";
for (let i = 1; i <= lastDay.getDate(); i++) {
    const specialEvent = specialEventDays.find(event => event.day === i);
    if (specialEvent) {
        datesArray += `<div class="day special" id="day${String(i)}" data-date="${i}"><span class="event-type">${specialEvent.type}</span></div>`;
    } else {
        datesArray += `<div class="day" id="day${String(i)}" data-date="${i}"></div>`;
    }
}

/* Sending Dates to Grid */
document.querySelector("#date-grid").innerHTML = datesArray;

/* Setting First day of the Month */
document.querySelector("#date-grid div").style.gridColumnStart = (firstDay.getDay() + 1);