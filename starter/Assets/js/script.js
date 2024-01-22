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
            // Create a time block element
            var timeBlock = $('<div>').addClass('row time-block').attr('data-hour', hour);

            // Add hour column
            var hourColumn = $('<div>').addClass('col-md-1 hour').text(formatHour(hour));
            timeBlock.append(hourColumn);

            // Add textarea for user input
            var eventInput = $('<textarea>').addClass('col-md-10 description');
            timeBlock.append(eventInput);

            // Add click event handler to save button
            var saveButton = $('<button>').addClass('col-md-1 saveBtn').html('<i class="fas fa-save"></i>');
            timeBlock.append(saveButton);

            saveButton.on('click', function () {
                // Retrieve the entered event from the corresponding textarea
                var enteredEvent = $(this).siblings('.description').val();

                // Save the entered event to local storage
                var blockHour = $(this).parent().attr('data-hour');
                localStorage.setItem('event_' + blockHour, enteredEvent);
            });

            // Append the time block to the container
            $('#timeBlockContainer').append(timeBlock);

            // Apply past, present, or future styling
            applyTimeBlockStyle(timeBlock, hour, dayjs().hour());

            // Retrieve and populate saved events from local storage
            var savedEvent = localStorage.getItem('event_' + hour);
            if (savedEvent) {
                eventInput.val(savedEvent);
            }
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

    // Format the hour (e.g., 9 AM, 1 PM)
    function formatHour(hour) {
        return hour > 12 ? hour - 12 + ' PM' : hour === 12 ? '12 PM' : hour + ' AM';
    }

    // Generate time blocks on page load
    generateTimeBlocks();
});
