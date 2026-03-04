

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showImage(index) {
    images.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}


setInterval(changeImage, 5000); 
showImage(currentIndex);
