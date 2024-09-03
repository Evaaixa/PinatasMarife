
const modal = document.getElementById('imageModal');
const modalImg = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.close');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = thumbnail.getAttribute('data-full');
        modalImg.alt = thumbnail.alt;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target.classList.contains('modal-content')) {
        modal.style.display = "none";
    }
}

let currentImageIndex = 0;
const images = document.querySelectorAll('.banner img');
const intervalTime = 3000;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    })
}
function prevImage(){
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}
function nextImage(){
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentImageIndex);
    setInterval(nextImage, intervalTime);
});
document.getElementById('pinnataCar').addEventListener('click',
    function() {
        var procedimiento =
    document.getElementById('procedimiento');
        if(procedimiento.style.display === 'none') {
            procedimiento.style.display = 'block';
        } else {
            procedimiento.style.display = 'none';
        }
    });

