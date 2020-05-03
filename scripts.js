$(document).ready(function () {
//wrapper object for jquery put in place


   
let now = moment().format('dddd, MMMM Do');
//this line creates a moment object that parses present time
$("#currentDay").text(now);
//current day iD recieves text from variable via jQuery


    
 //This creates event listener correspanding to time - and text entriess
 $(".saveBtn").on("click", function () {
    //this sets a jQuery event listener on every element with a saveBtn class

    const entry = $(this).siblings(".lsentry").val();
    //the text area block is the sibling of the time block
    const time = $(this).parent().attr("id");
    //the time id 'h--' is the parent id of each time block

    //This sets time and entry in local storage using the setEntry() method
    localStorage.setItem(time, entry);
})
//This loads up prior data from each particular 'hour' slot via the getItem method in local storage

$("#h9  .lsentry").val(localStorage.getItem("h9"));
//saved local storage for 9:00

$("#h10 .lsentry").val(localStorage.getItem("h10"));
//saved local storage for 10:00

$("#h11 .lsentry").val(localStorage.getItem("h11"));
//saved local storage for 11:00

$("#h12 .lsentry").val(localStorage.getItem("h12"));
//saved local storage for 12:00

$("#h13 .lsentry").val(localStorage.getItem("h13"));
//saved local storage for 13:00

$("#h14 .lsentry").val(localStorage.getItem("h14"));
//saved local storage for 14:00

$("#h15 .lsentry").val(localStorage.getItem("h15"));
//saved local storage for 15:00

$("#h16 .lsentry").val(localStorage.getItem("h16"));
//saved local storage for 16:00

$("#h17 .lsentry").val(localStorage.getItem("h17"));
//saved local storage for 17:00




});