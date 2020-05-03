$(document).ready(function () {
//wrapper object for jquery put in place


    $("#currentDay").text(moment().format("dddd[,] MMMM Do"));
    //this line sends todays date to the iD for the current day - using moment to 
    //parse the information

});