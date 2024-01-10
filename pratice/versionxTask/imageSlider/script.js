// const images = [ 'img/chithha.jpg', 'img/Irugapatru.jpg', 'img/jailer.jpeg', 'img/leo.jpg', 'img/king.jpg'];

const images = [
    "img/nature-1.jpg","img/nature-2.jpg","img/nature-3.jpg","img/nature-4.png","img/nature-5.jpg"
]
console.log(`images.length-1`, images.length-1);
// var currentIndex = 0;
let imageContainer = document.getElementById('imageContainer');
console.log("imageContainer", imageContainer);
imageContainer.textContent = 'ganesh'
var currentIndex = 0;
var demo = document.getElementById('demo2');

function displayImage() {
    imageContainer.innerHTML = '';
    var img = document.createElement('img');
    img.src = images[currentIndex];
    imageContainer.appendChild(img)
    console.log(  'current : ' + images[currentIndex]);
}

function next() {
    if(currentIndex < images.length-1) {
        currentIndex++;
    }
    else {
        currentIndex=0;
        console.log(currentIndex);
    }
  
        displayImage()
    
}
