    // Function to generate a calendar table for a given month and year
    function generateCalendar(year, month) {
        var table = document.createElement('table');
        table.className = 'calendar-table';
        var caption = table.createCaption();
        caption.textContent = months[month] + ' ' + year;
  
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var firstDay = new Date(year, month, 1).getDay(); // Get the day of the week for the first day of the month
        var currentDate = 1;
  
        // Create table rows for the days of the week
        var weekdaysRow = table.insertRow();
        for (var day = 0; day < 7; day++) {
          var weekdayCell = weekdaysRow.insertCell();
          weekdayCell.textContent = daysOfWeek[day];
        }
  
        // Create table rows for each week
        for (var week = 0; week < 6; week++) {
          var row = table.insertRow();
  
          // Create table cells for each day
          for (var day = 0; day < 7; day++) {
            if (week === 0 && day < firstDay) {
              var cell = row.insertCell();
              cell.textContent = '';
            } else if (currentDate > daysInMonth) {
              break;
            } else {
              var cell = row.insertCell();
              cell.textContent = currentDate;
              currentDate++;
            }
            if (month == 7 && week == 2 && daysOfWeek[day] == "Tue" ) {
                cell.style.backgroundColor = "green";
              }
            if (month == 5 && week == 1 && daysOfWeek[day] == "Fri" ) {
                cell.style.backgroundColor = "green";
              }
          }
        }
  
        return table;
      }
  
      // Array of day names
      var daysOfWeek = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
      ];
  
      // Array of month names
      var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
  
      // Function to generate the calendar for January
      // Function to generate the calendar for January
  function generateJanuaryCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 0; // January
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for February
  function generateFebruaryCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 1; // February
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for March
  function generateMarchCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 2; // March
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Continue the pattern and add the remaining months' calendar generation functions
  
  // Function to generate the calendar for April
  function generateAprilCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 3; // April
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for May
  function generateMayCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 4; // May
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for June
  function generateJuneCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 5; // June
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for July
  function generateJulyCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 6; // July
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for August
  function generateAugustCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 7; // August
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for September
  function generateSeptemberCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 8; // September
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for October
  function generateOctoberCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 9; // October
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for November
  function generateNovemberCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 10; // November
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  
  // Function to generate the calendar for December
  function generateDecemberCalendar() {
    var container = document.getElementById('calendar-container');
    var year = new Date().getFullYear();
    var month = 11; // December
  
    var calendarTable = generateCalendar(year, month);
    container.appendChild(calendarTable);
  }
  function goToPage2() {
        window.location.href = 'page2.html';
      }
  
  // Generate the calendars for each month
  generateJanuaryCalendar();
  generateFebruaryCalendar();
  generateMarchCalendar();
  generateAprilCalendar();
  generateMayCalendar();
  generateJuneCalendar();
  generateJulyCalendar();
  generateAugustCalendar();
  generateSeptemberCalendar();
  generateOctoberCalendar();
  generateNovemberCalendar();
  generateDecemberCalendar();
  