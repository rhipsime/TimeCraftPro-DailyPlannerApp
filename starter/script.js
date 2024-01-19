// script.js

$(document).ready(function () {
    // Function to generate time blocks
    function generateTimeBlocks() {
      // Get the current day using Day.js
      var currentDay = dayjs().format('dddd, MMMM D, YYYY');
  
      // Update the content of the #currentDay element
      $('#currentDay').text(currentDay);
  
      // Clear existing content in the time block container
      $('#timeBlockContainer').empty();
  
      // Standard business hours (adjust as needed)
      var businessHours = 9; // 9 AM
      var closingHour = 17; // 5 PM
  
      // Loop to generate time blocks
      for (var hour = businessHours; hour <= closingHour; hour++) {
        // ... (code for creating timeBlock element)
  
        // Apply past, present, or future styling
        applyTimeBlockStyle(timeBlock, hour, dayjs().hour());
      }
  
      // Apply past, present, or future styling to time blocks
      function applyTimeBlockStyle(timeBlock, blockHour, currentHour) {
        // Convert blockHour to a 24-hour format for comparison
        blockHour = blockHour < 12 ? blockHour + 12 : blockHour;
  
        if (blockHour < currentHour) {
          timeBlock.addClass('past');
        } else if (blockHour === currentHour) {
          timeBlock.addClass('present');
        } else {
          timeBlock.addClass('future');
        }
      }
    }
  
    // Generate time blocks on page load
    generateTimeBlocks();
  });
  