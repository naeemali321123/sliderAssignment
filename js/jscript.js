var i = 0;
var images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg",
              "./images/7.jpg", "./images/8.jpg", "./images/9.jpg", "./images/10.jpg", "./images/11.jpg", "./images/12.jpg"];

function forwardImage() {
    if (i < (images.length -1)) {
        i++;
        document.getElementById("slideImg").style.width = "0px";
        
        setTimeout(() => {
            document.getElementById("slideImg").src = images[i];
            document.getElementById("slideImg").style.width = "100%";
        }, 500)
        
    } 
    else {
        i = 0;
        document.getElementById("slideImg").style.width = "1px";
        
        setTimeout(() => {
            document.getElementById("slideImg").src = images[i];
            document.getElementById("slideImg").style.width = "100%";
        }, 500)
    }
}

function reverseImage() {
    if (i <= (images.length-1) && i >= 1) {
        i--;
        document.getElementById("slideImg").style.width = "1px";
        setTimeout(() => {
            document.getElementById("slideImg").src = images[i];
            document.getElementById("slideImg").style.width = "100%";
        }, 500)
    } 
    else {
        i = 11;
        document.getElementById("slideImg").style.width = "1px";
        
        setTimeout(() => {
            document.getElementById("slideImg").src = images[i];
            document.getElementById("slideImg").style.width = "100%";
        }, 500)
    }
}

setInterval(forwardImage, 7000);