document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.container-carrossel');
    const slides = Array.from(slider.querySelectorAll('.carrosel-slider'));

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('on');
            } else {
                slide.classList.remove('on');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSliderPosition();
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSliderPosition();
        showSlide(currentSlide);
    }

    function updateSliderPosition() {
        const slideWidth = slides[currentSlide].offsetWidth;
        const translateXValue = `-${currentSlide * slideWidth}px`;
        slider.style.transform = `translateX(${translateXValue})`;
    }

    document.getElementById('botao-avancar').addEventListener('click', nextSlide);
    document.getElementById('botao-voltar').addEventListener('click', prevSlide);

    // Inicialmente, exibe o primeiro slide
    showSlide(currentSlide);
});
