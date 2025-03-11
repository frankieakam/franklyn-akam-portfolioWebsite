function initCarousel() {
    const carouselTrack = document.querySelector('.carousel-track');
    const projectCards = document.querySelectorAll('.project-card');
    let currentIndex = 0;
    let slideInterval;
    let isHovered = false;

    function startSlide() {
        if (!isHovered) {
            slideInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % projectCards.length;
                carouselTrack.style.transform = `translateX(-${currentIndex * (projectCards[0].offsetWidth + 20)}px)`;
            }, 10000);
        }
    }

    function stopSlide() {
        clearInterval(slideInterval);
    }

    carouselTrack.addEventListener("mouseenter", () => {
        isHovered = true;
        stopSlide();
    });
    carouselTrack.addEventListener("mouseleave", () => {
        isHovered = false;
        startSlide();
    });

    startSlide();
}