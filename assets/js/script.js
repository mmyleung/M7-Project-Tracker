let today = moment();

//set interval function to display time every second

setInterval(function() {
//save today's date and time into variable today
let todayDisplay = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
//target span to display time
let timeDisplay = $("#timeDisplay");
//display time and date into timeDisplay
timeDisplay.text(todayDisplay);
}, 1000)

//date picker in due date form
$( function() {
    $( "#dueDateInput" ).datepicker({minDate: +1});
  } );

//target the form input fields and store as variables
var submitBtn = $("#submitBtn");
var projectForm = $("#projectForm");

var table = $("#formTable");
var tableHeaderChildren = $("th");


//target submit on project form
projectForm.on("submit", function(event) {
  //prevent default on form
  event.preventDefault();
  //prevent propagation
  event.stopPropagation();

  //variable to store data from form
  var projectName = $("#projectNameInput").val();
  var projectType = $("#projectTypeSelect").val();
  var hourlyRate = $("#hourlyRateInput").val();
  var dueDate = $("#dueDateInput").val();
  var formattedDate = moment(dueDate).format("YYYY, MM, DD");
  var daysUntilDate = moment(formattedDate).fromNow(true);
  console.log(daysUntilDate);
  //add new table row
  let tableRow = $("<tr>");
  tableRow.appendTo($("#tableData"))
  //for loop to generate the table cells
 for (let i = 0; i < tableHeaderChildren.length; i++) {
  let tableCell = $("<td>");
  tableCell.appendTo(tableRow);
 }

  //work out days until due date
console.log(projectName, projectType, hourlyRate, dueDate)
})

//store form data into array
var dataArray = [];

dataArray = [projectName, projectType, hourlyRate, dueDate, daysUntilDate]