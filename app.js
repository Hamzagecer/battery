// bu bölüm tanımlama bölümü

let batteryLevel = 0;
const batteryLeft = document.querySelector("#batteryLeft");
const batteryMiddle = document.querySelector("#batteryMiddle");
const batteryRight = document.querySelector("#batteryRight");
const batteryTop = document.querySelector("#batteryTop");
const batteryShow = document.querySelector("#batteryShow");


document.getElementById("increase").addEventListener("click", full);
document.getElementById("low").addEventListener("click", empty);