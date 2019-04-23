const months = [
          {"name": "Januar", "days": 31}, 
          {"name": "Februar", "days": 28}, 
          {"name": "Marts", "days": 31}, 
          {"name": "April", "days": 30}, 
          {"name": "Maj", "days": 31}, 
          {"name": "Juni", "days": 30}, 
          {"name": "Juli", "days": 31}, 
          {"name": "August", "days": 31}, 
          {"name": "September", "days": 30}, 
          {"name": "Oktober", "days": 31}, 
          {"name": "November", "days": 30}, 
          {"name": "December", "days": 31}
        ];
        const d = new Date();
        
        var curMonth = d.getMonth();
        
        function fetchCalendar(key) {
            if(key == "prev") {
                if(curMonth == 0) {
                    curMonth = 11;
                } else {
                    curMonth = (curMonth-1);
                }
            } else if(key == "next") {
                if(curMonth == 11) {
                    curMonth = 0;
                } else {
                    curMonth = (curMonth+1);
                }
            } else {
                curMonth = d.getMonth();
            }
            updateCalendar(months[curMonth]["name"], months[curMonth]["days"]);
        }
        
        function updateCalendar(month, days) {
            document.getElementById("monthName").innerHTML = month;
            document.getElementById("monthDays").innerHTML = "";
            for(var i=0; i < days; i++){
                document.getElementById("monthDays").innerHTML += '<div class="dage"> <a>' + (i+1) + '</a> </div>';
            }
        }
        
window.load = fetchCalendar();