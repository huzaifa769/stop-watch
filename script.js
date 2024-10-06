var pausebtn = document.getElementById('pausebutton')
var startbtn = document.getElementById('startbutton')
var resetbtn = document.getElementById('resetbutton')
var hour = document.getElementById('hour')
var minute = document.getElementById('minute')
var second = document.getElementById('second')
var milisecond = document.getElementById('milliSecond')
startbtn.addEventListener("click",start)
pausebtn.addEventListener("click",pause)
resetbtn.addEventListener("click",reset)
var interval;
var check = false
function runtime() {
if (+milisecond.innerHTML === 100) {
    second.innerHTML = +second.innerHTML + 1
    milisecond.innerHTML = 0
} else{
    milisecond.innerHTML = +milisecond.innerHTML + 1
}
if (+second.innerHTML === 60) {
    minute.innerText = +minute.innerHTML + 1
    second.innerHTML = 0
}
if (+minute.innerHTML === 2) {
    hour.innerHTML = +hour.innerHTML + 1
    minute.innerHTML = 0
}
}
function start(){
if (check === false) {
check = true
interval = setInterval(() => {
    runtime();
    console.log('run')
}, 10);
}
}

function pause(){
check = false
clearInterval(interval)
}

function reset(){
    check = false
    clearInterval(interval)
    milisecond.innerHTML = '00'
    second.innerHTML = '00'
    minute.innerHTML = '00'
    hour.innerHTML = '00'
}