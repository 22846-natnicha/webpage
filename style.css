document.addEventListener("DOMContentLoaded", () => {
    // 1. Music Player Control
    const bgMusic = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playBtn");
    let isPlaying = false;

    playBtn.addEventListener("click", () => {
        if (isPlaying) {
            bgMusic.pause();
            playBtn.innerHTML = "🎵 Play BGM";
            // ลบ effect น่ารักๆ เวลากดหยุด
            playBtn.style.color = "var(--text-main)";
        } else {
            bgMusic.play();
            playBtn.innerHTML = "🎶 Playing...";
            // เปลี่ยนสีปุ่มตอนเพลงเล่น
            playBtn.style.color = "var(--sage-green)";
        }
        isPlaying = !isPlaying;
    });

    // 2. Random Rotation สำหรับ Polaroids ทุกครั้งที่โหลดหน้าเว็บ
    // ให้ความรู้สึกเหมือนวางรูปไม่ตั้งใจ (Handmade)
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(p => {
        const randomRotate = Math.floor(Math.random() * 6) - 3; // -3 ถึง 3 องศา
        p.style.transform = `rotate(${randomRotate}deg)`;
        
        // เมื่อเอาเมาส์ออก ให้กลับไปองศาแบบ Random (ทับ CSS เดิม)
        p.addEventListener('mouseleave', () => {
            p.style.transform = `rotate(${randomRotate}deg)`;
        });
    });
});
