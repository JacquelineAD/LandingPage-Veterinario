const slider = document.querySelector('.container-carrossel');
const botaoVoltar = document.getElementById('botao-voltar');
const botaoAvancar = document.getElementById('botao-avancar');
const slides = slider.querySelectorAll('.carrosel-slider');

let currentSlide = 0;

function hideSlides() {
    slides.forEach(slide => {
        slide.style.opacity = 0; // Alteração aqui para modificar a opacidade
    });
}

function showSlide() {
    slides[currentSlide].style.opacity = 1; // Alteração aqui para modificar a opacidade
}

function nextSlide() {
    hideSlides();
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlide();
}

function prevSlide() {
    hideSlides();
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    showSlide();
}

botaoAvancar.addEventListener('click', nextSlide);
botaoVoltar.addEventListener('click', prevSlide);

// Inicialmente, exibimos o primeiro slide
showSlide();
