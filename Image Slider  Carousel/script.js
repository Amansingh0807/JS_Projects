document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;

    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    });

    window.addEventListener('resize', () => {
        const newSlideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(-${currentIndex * newSlideWidth}px)`;
    });
});
