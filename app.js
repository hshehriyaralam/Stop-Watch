var hrHeading = document.getElementById("hrHeading");
var minHeading = document.getElementById("minHeading");
var secHeading = document.getElementById("secHeading");
var msecHeading = document.getElementById("msecHeading");
var interval;

var msec = 0;
var sec = 0;
var min = 0;
var hr = 0;

function start(){
    msec++;
    msecHeading.innerHTML = msec;
    if( msec === 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0
    }else if( sec > 59){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }else if( min > 59){
        hr++;
        hrHeading.innerHTML = hr;
        min = 0

    }

};

function startWatch(){
    interval = setInterval(start, 10); 
};

function stopWatch(){
    clearInterval(interval);
};

function resetWatch(){
    clearInterval(interval);
    hrHeading.innerHTML = "00";
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    msecHeading.innerHTML = "00";
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;

};  