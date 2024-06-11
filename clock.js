// This function sets a clock at clock div (date and time)
function clock() {
    document.getElementById('current-date').innerHTML = currentDate();
    document.getElementById('current-time').innerHTML = currentTime();
    setTimeout(clock, 1000);
  }
  
  // This function adds zero in front of numbers < 10
  function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
  }
  
  function currentDate() {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[today.getDay()];
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return day + " " + date + "/" + month + "/" + year;
  }
  
  function currentTime() {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    return hour + ":" + minute + ":" + second;
  }

  clock()
