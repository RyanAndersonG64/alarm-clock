setInterval(UpdateTime, 1000)
function UpdateTime(){
    let Time = new Date();
    let AM_OR_PM = "AM";
    let Hour = Time.getHours();
    if (Hour > 12) {
        AM_OR_PM = "PM";
        Hour -= 12;
    } else if (Hour == 12) {
        AM_OR_PM = "PM";
    } else if (Hour == 0) {
        Hour = 12;
        AM_OR_PM = "AM"; //May not be necessary
    }
    let Minute = Time.getMinutes();
    if (Minute < 10) {
        Minute = "0" + Minute;
    }
    let Second = Time.getSeconds();
    if (Second < 10) {
        Second = "0" + Second;
    }
    let DisplayedTime = Hour + ":" + Minute + ":" + Second + " " + AM_OR_PM;
    document.getElementById("clock").innerHTML = DisplayedTime;
}
UpdateTime();
function Alarm(){
    alert('ALARM')
}
const AlarmButton = document.querySelector('button');
AlarmButton.addEventListener("click", () => {
    setTimeout(Alarm, 10000)
    });
setInterval(DayOfYear, 1000)
function DayOfYear(){
    let Time = new Date();
    let Year = Time.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    let Month = Time.getMonth();
    Month = months[Month];
    let DateOfMonth = Time.getDate();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let Day = Time.getDay();
    Day = days[Day];
    let DisplayedDate = Day + ", " + Month + " " + DateOfMonth + ", " + Year;
    document.getElementById("date").innerHTML = DisplayedDate;
}
DayOfYear();