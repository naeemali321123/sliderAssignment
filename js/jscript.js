var i = 0;
var images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg"];

function forwardImage() {
    if (i < images.length) {
        document.getElementById("slideImg").src = images[i];
        i++;
    } else {
        i = 0;
    }
}

function reverseImage() {
    if (i > -1) {
        document.getElementById("slideImg").src = images[i];
        i--;
    } else {
        i = 5;
    }
}

function radio1() { document.getElementById("slideImg").src = images[0]; }

function radio2() { document.getElementById("slideImg").src = images[1]; }

function radio3() { document.getElementById("slideImg").src = images[2]; }

function radio4() { document.getElementById("slideImg").src = images[3]; }

function radio5() { document.getElementById("slideImg").src = images[4]; }

function radio6() { document.getElementById("slideImg").src = images[5]; }

setInterval(forwardImage, 5000);