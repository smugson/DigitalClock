hour = document.getElementById("hours")
minute = document.getElementById("minutes")
second = document.getElementById("seconds")
times = document.getElementById("time")

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let t = 'AM'

    if (h > 12){
        h = h - 12
        times = "AM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    times.innerHTML = t;
    setTimeout(() =>{
        updateClock()
    }, 1000)
}

updateClock()