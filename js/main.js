document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initTypingEffect();
    initCarousel();
    initPointer();
    initIntersectionObserver();
    initNavigation(); 

    // video play on button click
    const video = document.getElementById("bg-video");
    const startBtn = document.querySelector(".start-btn");
    
    if (video && startBtn) {
        startBtn.addEventListener("click", () => {
            if (video.paused) {
                video.play().catch(error => console.error("Video playback error:", error));
                startBtn.classList.add("playing");
            } else {
                video.pause();
                startBtn.classList.remove("playing");
            }
        });
        
        // loop the video when it ends
        video.addEventListener("ended", () => {
            video.currentTime = 0; // restart from beginning
            video.play(); // play again
        });
    }
})