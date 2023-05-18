let today = moment();


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
  var formattedDate = moment(dueDate);
  var daysUntil = formattedDate.diff(today, 'days');
  var totalReward = hourlyRate * 8 * daysUntil;
  var deleteBtn = "X"

  //empty array to store data
  var dataArray = [];
  dataArray = [projectName, projectType, hourlyRate, dueDate, daysUntil, totalReward, deleteBtn];


  //add new table row
  let tableRow = $("<tr>");
  tableRow.appendTo($("#tableData"))
  //for loop to generate the table cells
 for (let i = 0; i < tableHeaderChildren.length; i++) {
  let tableCell = $("<td>");
  tableCell.appendTo(tableRow);
  tableCell.text(dataArray[i]);

 }
 $('#addProjectModal').modal('toggle'); 
});

table.on("click", "td", function() {
  console.log("click");
  console.log(this);
  if (this.innerHTML === "X") {
    this.parentElement.remove();
  }
})


//set interval function to display time every second

setInterval(function() {
  //save today's date and time into variable today
  let todayDisplay = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
  //target span to display time
  let timeDisplay = $("#timeDisplay");
  //display time and date into timeDisplay
  timeDisplay.text(todayDisplay);
  }, 1000)