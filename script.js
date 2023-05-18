//set interval function to display time every second

setInterval(function() {
//save today's date and time into variable today
let today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//target span to display time
let timeDisplay = $("#timeDisplay");
//display time and date into timeDisplay
timeDisplay.text(today);
}, 1000)