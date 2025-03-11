function initNavigation() {
    document.querySelectorAll(".navigate-btn-access, .navigate-btn-projects, .navigate-btn-tech, .navigate-btn-contact").forEach(btn => {
        btn.addEventListener("click", (event) => {
            const sectionId = event.target.getAttribute("onclick").match(/'([^']+)'/)[1];
            navigateTo(sectionId);
        });
    });

    document.querySelector(".exit-btn").addEventListener("click", exitExperience);
}

function navigateTo(sectionId) {
    const currentSection = document.querySelector(".main-content > section:not(.hidden)");
    const nextSection = document.getElementById(sectionId + "-section");
    const audio = new Audio("sounds/rocket-startup-navigation-sound.mp3");
    const bgMusic = document.getElementById("bg-music");

    if (currentSection && nextSection) {
        bgMusic.pause();
        audio.play();

        audio.onended = function () {
            currentSection.classList.add("hidden");
            nextSection.classList.remove("hidden");
            setTimeout(() => { bgMusic.play(); }, 300);
        };
    }
}

function exitExperience() {
    const mainContent = document.querySelector(".main-content");
    const loader = document.querySelector(".loader");
    const bgMusic = document.getElementById("bg-music");
    const audio = new Audio("sounds/rocket-landing-exit-sound.mp3");

    audio.play();

    mainContent.style.transition = "opacity 0.5s ease-in-out";
    mainContent.style.opacity = "0";
    bgMusic.volume = 0.9;

    const fadeOutInterval = setInterval(() => {
        if (bgMusic.volume > 0.1) {
            bgMusic.volume -= 0.1;
        } else {
            clearInterval(fadeOutInterval);
            bgMusic.pause();
        }
    }, 100);

    setTimeout(() => {
        mainContent.style.display = "none";
        loader.style.display = "flex";
        loader.style.transition = "opacity 0.5s ease-in-out";
        loader.style.opacity = "1";
        location.reload();
    }, 1000);
}

function openProject(url) {
    window.open(url, '_blank');
}