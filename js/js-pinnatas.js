
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

let images = [
    { id: 1, name: "Sol", price: 24.99, image: "../img/Sol.jpg"},
    { id: 2, name: "Polar", price: 19.99, image: "../img/Polar.jpg"},
    { id: 3, name: "PapaNoel", price: 29.99, image: "../img/PapaNoel.jpg"},
];
let currentIndex = 0;

function showImage(index) {
    const bannerImage = document.getElementById("bannerImage");
    bannerImage.src = images[index];
}

function prevImage(){
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage(){
    currentIndex = (currentIndex < images.length -1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

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

