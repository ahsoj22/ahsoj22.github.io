let currentSlide = 0;
const slides = document.querySelector('.slides-container');
const totalSlides = document.querySelectorAll('.slide').length;
const arrow = document.getElementById('arrow');

arrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
});

