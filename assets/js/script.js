// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentTime = parseInt(moment().format('LL'));
var classes = [".8AM", ".9AM", ".10AM", ".11AM", ".12PM", ".1PM", ".2PM", ".3PM", ".4PM", "5PM", ".6PM"]
var time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var classIndex = time.indexOf(currentTime);
$("#currentDay").text(moment().format('dddd, MMMM D, YYYY'));
var checkToday = moment().format('dddd, MMMM D, YYYY')
var allNotes = ["", "", "", "", "", "", "", "", "", "", ""]

if (currentTime < 9) {
    allFuture();
}
else if (currentTime >17) {
    allPast();
}
else {
    formatTimes()
}

grabData();
checkToday()

function allFuture() {
    for (i = 1; i < classes.length; i++) {
        $(classes[i]).addClass("future");
    }
    $(classes[i]).addClass("present");
}

function allPast() {
    for (i = 0; i < classes.length - 1; i++) {
        $(classes[i]).addClass("past");
    }
    $(classes[time.length - 1]).addClass("present");
}

