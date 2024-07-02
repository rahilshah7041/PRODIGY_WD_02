let [seconds, minutes, hours] = [0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let lapsRef = document.querySelector(".laps");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1000); // Set interval for 1000ms (1 second)
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [seconds, minutes, hours] = [0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00";
    lapsRef.innerHTML = ""; // Clear laps
});

document.getElementById("lap-timer").addEventListener("click", () => {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let lapTime = `${h} : ${m} : ${s}`;
    let lapElement = document.createElement("div");
    lapElement.textContent = lapTime;
    lapsRef.appendChild(lapElement);
});

function displayTimer() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    timeRef.innerHTML = `${h} : ${m} : ${s}`;
}