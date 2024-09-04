
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
var nuevasImagenes = [
    { id: 1, name: "Comunión Niña-1", image: "../img/comunion1.jpg" },
    { id: 2, name: "Comunión Niña-2", image: "../img/comunion2.jpg"},
];
function agregarImagenes() {
    var seccion = document.getElementById('imageModal');
    nuevasImagenes.forEach(function(url) {
        var nuevaImagen = new Image();
        nuevaImagen.src = url;
        nuevaImagen.alt = 'Nueva Imagen';
        seccion.appendChild(nuevaImagen);
    })
}
document.getElementById('loadMoreButton').addEventListener('click, agregarImagenes');

// javascript     $(document).ready(function() {         var nuevasImagenes = ['imagen3.jpg', 'imagen4.jpg', 'imagen5.jpg'];         $('#loadMoreButton').click(function() {             nuevasImagenes.forEach(function(url) {                 var nuevaImagen = $('<img>', {                     src: url,                     alt: 'Nueva Imagen'                 });                 $('#imageSection').append(nuevaImagen);             });         });     });     


