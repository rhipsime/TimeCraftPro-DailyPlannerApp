// script.js

$(document).ready(function () {
    // Get the current day using Day.js
    var currentDay = dayjs().format('dddd, MMMM D, YYYY');
  
    // Update the content of the #currentDay element
    $('#currentDay').text(currentDay);
  });
  