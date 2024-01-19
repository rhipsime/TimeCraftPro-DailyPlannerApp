/// script.js

$(document).ready(function () {
    // Function to generate time blocks
    function generateTimeBlocks() {
      // ... (your existing code for generating time blocks)
  
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
        // ... (your existing code for generating time blocks)
  
        // Apply past, present, or future styling
        applyTimeBlockStyle(timeBlock, hour, currentHour);
      }
    }  
    // Format the hour (e.g., 9 AM, 1 PM)
    function formatHour(hour) {
      return hour > 12 ? hour - 12 + ' PM' : hour === 12 ? '12 PM' : hour + ' AM';
    }
  
    // Apply past, present, or future styling to time blocks
    function applyTimeBlockStyle(timeBlock, blockHour, currentHour) {
      if (blockHour < currentHour) {
        timeBlock.addClass('past');
      } else if (blockHour === currentHour) {
        timeBlock.addClass('present');
      } else {
        timeBlock.addClass('future');
      }
    }
 // Generate time blocks on page load
 generateTimeBlocks();
});
