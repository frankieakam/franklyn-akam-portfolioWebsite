function initTypingEffect() {
    const startBtn = document.querySelector(".start-btn");
    const experience = document.querySelector(".experience");
    const mainContent = document.querySelector(".main-content");
    const bgMusic = document.getElementById("bg-music");

    startBtn.addEventListener("click", () => {
        bgMusic.currentTime = 0;
        bgMusic.play();
        experience.style.transition = "opacity 0.5s ease-in-out";
        experience.style.opacity = "0";
        setTimeout(() => {
            experience.style.display = "none";
            mainContent.classList.remove("hidden");
            mainContent.style.transition = "opacity 0.5s ease-in-out";
            mainContent.style.opacity = "1";
        }, 500);

        document.querySelectorAll(".typing-effect, .typing-effect-p").forEach(element => {
            const text = element.innerHTML;
            element.innerHTML = "";
            let index = 0;
            const typingInterval = setInterval(() => {
                if (index < text.length) {
                    element.innerHTML = text.substring(0, index + 1);
                    index++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 100);
        });
    });
}