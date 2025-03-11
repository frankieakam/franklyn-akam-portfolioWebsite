// function initLoader() {
//     let percent = 0;
//     const loadingText = document.querySelector(".loading-text");
//     const loader = document.querySelector(".loader");
//     const experience = document.querySelector(".experience");
//     const loadingSound = document.getElementById("loading-sound");
//     const bgMusic = document.getElementById("bg-music");
//     const bgVideo = document.getElementById("bg-video"); // get video element
//     const startBtn = document.getElementById("start-btn"); // get start btn

//     // pause bg music and video initially
//     bgMusic.pause();
//     bgMusic.currentTime = 0;
//     if (bgVideo) {
//         bgVideo.pause();
//         bgVideo.currentTime = 0; // reset video to start position
//     }

//     loadingSound.volume = 1;
//     loadingSound.play().then(() => {
//         console.log("Loading sound started successfully.");
//     }).catch(() => {
//         console.warn("Loading sound autoplay was blocked.");
//     });

//     const interval = setInterval(() => {
//         if (percent < 100) {
//             percent += (100 / (0.34 * 60)); // progress in 0.34s
//             loadingText(); // loading text
//         } else {
//             clearInterval(interval);
//             loadingSound.onended = () => {
//                 loader.style.transition = "opacity 0.5s ease-in-out";
//                 loader.style.opacity = "0";
//                 setTimeout(() => {
//                     loader.style.display = "none";
//                     experience.classList.remove("hidden");
//                     experience.style.transition = "opacity 0.5s ease-in-out";
//                     experience.style.opacity = "1";
//                 }, 500);
//             };
//         }
//     }, 17);

//     // ensure bg video plays when start btn is clicked
//     if (startBtn) {
//         startBtn.addEventListener("click", () => {
//             if (bgVideo) {
//                 console.log("Start button clicked, playing video...");
//                 bgVideo.play().then(() => {
//                     console.log("Background video started playing.");
//                     bgVideo.loop = true; // ensures continuous looping 
//                 }).catch((error) => {
//                     console.error("Video playback failed:", error);
//                 });
//             }
//         });
//     }
// }



function initLoader() {
    let percent = 0;
    const loadingText = document.querySelector(".loading-text");
    const loader = document.querySelector(".loader");
    const experience = document.querySelector(".experience");
    const loadingSound = document.getElementById("loading-sound");
    const bgMusic = document.getElementById("bg-music");
    const bgVideo = document.getElementById("bg-video"); // get video element
    const startBtn = document.getElementById("start-btn"); // get start btn

    // pause bg music and video initially
    bgMusic.pause();
    bgMusic.currentTime = 0;
    if (bgVideo) {
        bgVideo.pause();
        bgVideo.currentTime = 0; // reset video to start position
    }

    loadingSound.volume = 1;

    // Autoplay handling
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            loadingSound.play().then(() => {
                console.log("Loading sound started successfully.");
            }).catch(() => {
                console.warn("Loading sound autoplay was blocked.");
            });
        });
    }

    const interval = setInterval(() => {
        if (percent < 100) {
            percent += (100 / (0.34 * 60)); // progress in 0.34s
            loadingText.textContent = `be nice to the stars`; 
        } else {
            clearInterval(interval);
            loadingSound.onended = () => {
                loader.style.transition = "opacity 0.5s ease-in-out";
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.style.display = "none";
                    experience.classList.remove("hidden");
                    experience.style.transition = "opacity 0.5s ease-in-out";
                    experience.style.opacity = "1";
                }, 500);
            };
        }
    }, 17);

    // ensure bg video plays when start btn is clicked
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            if (bgVideo) {
                console.log("Start button clicked, playing video...");
                bgVideo.play().then(() => {
                    console.log("Background video started playing.");
                    bgVideo.loop = true; // ensures continuous looping
                }).catch((error) => {
                    console.error("Video playback failed:", error);
                });
            }
        });
    }
}