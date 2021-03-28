function full() {
    if (batteryLevel < 3) {
        batteryLevel++;
    }
    batteryColor();
    batteryText();
}

function empty() {
    if (batteryLevel > 0) {
        batteryLevel--;
    }
    batteryColor();
    batteryText();
}

// bu bölüm mouse üzerine gelince hareket etmesini sağlıyor 

VanillaTilt.init(document.querySelector("#container"), {
    max: 25,
    speed: 400,

});
VanillaTilt.init(document.querySelector("h1"), {
    max: 45,
    speed: 00,


});




// bu bölümde kutuların içlerindeki renk değişimlerini gösteren bölüm

function batteryColor() {
    if (batteryLevel === 0) {
        document.querySelector("#batteryLeft").style.background = "white";
        batteryMiddle.setAttribute('style', 'background-color: white');
        batteryRight.setAttribute('style', 'background-color: white');
    } else if (batteryLevel === 1) {
        batteryLeft.setAttribute('style', 'background-color: red');
        batteryMiddle.setAttribute('style', 'background-color: white');
        batteryRight.setAttribute('style', 'background-color: white');
        batteryTop.setAttribute('style', 'background-color: black');
    } else if (batteryLevel === 2) {
        batteryLeft.setAttribute('style', 'background-color: orange');
        batteryMiddle.setAttribute('style', 'background-color: orange');
        batteryRight.setAttribute('style', 'background-color: white');
        batteryTop.setAttribute('style', 'background-color: black');
    } else if (batteryLevel === 3) {
        batteryLeft.setAttribute('style', 'background-color: green');
        batteryMiddle.setAttribute('style', 'background-color: green');
        batteryRight.setAttribute('style', 'background-color: green');
        batteryTop.setAttribute('style', 'background-color: green');

    }

}

// bu bölümün fonksiyonlarında bataryanın dolum oranlarını belirtir

function batteryText() {
    if (batteryLevel === 0) {
        batteryShow.innerHTML = "Battery: %0";
    } else if (batteryLevel === 1) {
        batteryShow.innerHTML = "Battery: %33";
    } else if (batteryLevel === 2) {
        batteryShow.innerHTML = "Battery: %66";
    } else if (batteryLevel === 3) {
        batteryShow.innerHTML = "Battery: %100";


    }
}