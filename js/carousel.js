function initCarousel() {
    const carouselTrack = document.querySelector('.carousel-track');
    const projectCards = document.querySelectorAll('.project-card');
    let currentIndex = 0;
    let slideInterval;
    let isHovered = false;

    function getVisibleCards() {
        const trackWidth = document.querySelector('.carousel').offsetWidth;
        const cardWidth = projectCards[0].offsetWidth + 40; // add gap
        return Math.floor(trackWidth / cardWidth);
    }

    function startSlide() {
        if (!isHovered) {
            slideInterval = setInterval(() => {
                let visibleCards = getVisibleCards();
                let maxIndex = projectCards.length - visibleCards;

                if (currentIndex >= maxIndex) {
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }

                carouselTrack.style.transform = `translateX(-${currentIndex * (projectCards[0].offsetWidth + 40)}px)`;
            }, 5000);
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

    window.addEventListener("resize", () => {
        stopSlide();
        currentIndex = 0; // reset position on resize
        startSlide();
    });

    startSlide();
}
