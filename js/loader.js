function initLoader() {
    let percent = 0;
    const loadingText = document.querySelector(".loading-text");
    const loader = document.querySelector(".loader");
    const experience = document.querySelector(".experience");
    const bgMusic = document.getElementById("bg-music");
    const bgVideo = document.getElementById("bg-video");
    const startBtn = document.getElementById("start-btn");

    // Ensure elements exist
    if (!loadingText || !loader || !experience || !bgMusic) {
        console.error("Essential DOM elements are missing.");
        return;
    }

    // Pause bg music and video initially
    bgMusic.pause();
    bgMusic.currentTime = 0;
    if (bgVideo) {
        bgVideo.pause();
        bgVideo.currentTime = 0; // Reset video to start position
    }

    const updateLoadingProgress = () => {
        if (percent < 100) {
            percent += (100 / (5 * 60)); // Progress in 0.34s
            requestAnimationFrame(updateLoadingProgress);
        } else {
            loader.style.transition = "opacity 0.5s ease-in-out";
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                experience.classList.remove("hidden");
                experience.style.transition = "opacity 0.5s ease-in-out";
                experience.style.opacity = "1";
            }, 500);
        }
    };

    requestAnimationFrame(updateLoadingProgress);

    // Ensure bg video plays when start btn is clicked
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            if (bgVideo) {
                console.log("Start button clicked, playing video...");
                bgVideo.play().then(() => {
                    console.log("Background video started playing.");
                    bgVideo.loop = true; // Ensures continuous looping
                }).catch((error) => {
                    console.error("Video playback failed:", error);
                });
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", initLoader);