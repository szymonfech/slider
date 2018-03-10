var images = [];
var i = 1;
var img = document.querySelector("img")
images[1] = "img/image1.jpg";
images[2] = "img/image2.jpg";
images[3] = "img/image3.jpg";
images[4] = "img/image4.jpg";
images[5] = "img/image5.jpg";
images[6] = "img/image6.jpg";
images[7] = "img/image7.jpg";

function slideShow() {
    img.src = images[i];
    if (i < images.length - 1) {
        i++
    } else {
        i = 1
    }

}
setInterval(slideShow, 1000)
