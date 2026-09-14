document.addEventListener("DOMContentLoaded", () => {
    // 1. Background Music Toggle
    const bgMusic = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playBtn");
    const musicText = playBtn ? playBtn.querySelector(".music-text") : null;
    let isPlaying = false;

    if (playBtn && bgMusic) {
        playBtn.addEventListener("click", () => {
            if (isPlaying) {
                bgMusic.pause();
                if (musicText) musicText.textContent = "Play BGM";
                playBtn.style.color = "var(--text-dark)";
            } else {
                bgMusic.play().then(() => {
                    if (musicText) musicText.textContent = "Playing...";
                    playBtn.style.color = "var(--sage-green)";
                }).catch(() => {
                    if (musicText) musicText.textContent = "Audio blocked";
                });
            }
            isPlaying = !isPlaying;
        });
    }

    // 2. Interactive Dynamic Tilt Effect on Hover
    const polaroids = document.querySelectorAll(".polaroid-frame");
    polaroids.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `rotate3d(${y / 25}, ${-x / 25}, 0, 6deg) scale(1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
});
