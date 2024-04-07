/* buttons slide */
let i = 0;
const images = [
    'https://www.w3schools.com/w3images/sound.jpg',
    'https://www.w3schools.com/w3images/workbench.jpg',
    'https://www.w3schools.com/w3images/coffee.jpg'
];
const leftBtn = document.querySelector(".fa-angle-left");
const rightBtn = document.querySelector(".fa-angle-right");

leftBtn.addEventListener("click", function () {
    if (i === 0) {
        i = images.length - 1;
    } else {
        i--;
    }
    showImage();
});

rightBtn.addEventListener("click", function () {
    if (i === images.length - 1) {
        i = 0;
    } else {
        i++;
    }
    showImage();
});

function showImage() {
    let imgPosition = document.querySelector("#image-container img");
    imgPosition.src = images[i];
}
/* buttons slide */

/* slideshow */
const autoImages = [
    'https://www.w3schools.com/w3css/img_chicago.jpg',
    'https://www.w3schools.com/w3css/img_la.jpg',
    'https://www.w3schools.com/w3css/img_ny.jpg'
];
let imgElement = document.querySelector(".autoslide img");
let a = 0;

function slideImage() {
    imgElement.src = autoImages[a];
    a++;
    if (a >= autoImages.length) {
        a = 0;
    }
}

slideImage();
setInterval(slideImage, 2000);
/* slideshow */

/* numbered slide */
const numberImages = [
    'https://www.w3schools.com/w3css/img_mountains_wide.jpg',
    'https://www.w3schools.com/w3css/img_nature_wide.jpg',
    'https://www.w3schools.com/w3css/img_snow_wide.jpg'
];

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
let n = 0;
prev.addEventListener("click", function () {
    if (n === 0) {
        n = numberImages.length - 1;
    } else {
        n--;
    }
    selectImage();
});

next.addEventListener("click", function () {
    if (n === numberImages.length - 1) {
        n = 0;
    } else {
        n++;
    }
    selectImage();
});
one.addEventListener("click", function () {
    n=0;
    selectImage();
});

two.addEventListener("click", function () {
    n=1;
    selectImage();
});
three.addEventListener("click", function () {
    n=2;
    selectImage();
});

function selectImage() {
    let nimage = document.querySelector(".numberedslides img");
    nimage.src = numberImages[n];
}
/* numbered slide */

/* image indicators */
const indImages = document.querySelectorAll(".indicators img");
const mainImage = document.querySelector(".image-spot img");
indImages.forEach(element => {
    element.addEventListener("click", function() {
        mainImage.src = element.src;
    });
});
/* image indicators */
