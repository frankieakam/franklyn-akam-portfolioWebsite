function initPointer() {
    const holographicPointer = document.getElementById("holographic-pointer");

    document.addEventListener("mousemove", (event) => {
        holographicPointer.style.left = `${event.clientX}px`;
        holographicPointer.style.top = `${event.clientY}px`;
    });

    window.addEventListener("mouseout", (event) => {
        if (!event.relatedTarget) {
            holographicPointer.classList.add("default-cursor");
        }
    });

    window.addEventListener("mouseover", (event) => {
        if (!event.relatedTarget) {
            holographicPointer.classList.remove("default-cursor");
        }
    });
}