document.addEventListener('DOMContentLoaded', () => {
    // 1. Dual Custom Cursor & Smooth Follower
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function renderCursor() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // 2. Multi-Particle Sparkle & Cute Arrows Effect on Click
    document.addEventListener('click', (e) => {
        createSparkles(e.clientX, e.clientY);
        createCuteArrows(e.clientX, e.clientY);
    });

    function createSparkles(x, y) {
        const container = document.getElementById('sparkle-container');
        for (let i = 0; i < 7; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 60 + 15;
            const targetX = x + Math.cos(angle) * distance;
            const targetY = y + Math.sin(angle) * distance;

            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            
            container.appendChild(sparkle);

            sparkle.animate([
                { transform: 'translate(0, 0) scale(0.4)', opacity: 1 },
                { transform: `translate(${targetX - x}px, ${targetY - y}px) scale(1.6)`, opacity: 0 }
            ], {
                duration: 700,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
            }).onfinish = () => sparkle.remove();
        }
    }

    // ฟังก์ชันสร้างลูกศรน่ารักๆ พุ่งกระจายตอนคลิก
    function createCuteArrows(x, y) {
        const container = document.getElementById('sparkle-container');
        const arrowSymbols = ['➔', '➤', '💘', '✨', '👉', '💖']; // สัญลักษณ์ลูกศรและหัวใจน่ารักๆ
        
        for (let i = 0; i < 4; i++) {
            const arrow = document.createElement('div');
            arrow.classList.add('click-arrow');
            arrow.textContent = arrowSymbols[Math.floor(Math.random() * arrowSymbols.length)];
            
            // สุ่มทิศทางการพุ่งออกรอบทิศทาง
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 80 + 30;
            const targetX = x + Math.cos(angle) * distance;
            const targetY = y + Math.sin(angle) * distance;
            const randomRotate = Math.random() * 360;

            arrow.style.left = x + 'px';
            arrow.style.top = y + 'px';
            arrow.style.position = 'absolute';
            arrow.style.fontSize = '1.2rem';
            arrow.style.pointerEvents = 'none';
            arrow.style.zIndex = '9999';
            
            container.appendChild(arrow);

            arrow.animate([
                { transform: `translate(0, 0) scale(0.5) rotate(0deg)`, opacity: 1 },
                { transform: `translate(${targetX - x}px, ${targetY - y}px) scale(1.2) rotate(${randomRotate}deg)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.1, 1, 0.3, 1)'
            }).onfinish = () => arrow.remove();
        }
    }

    // 3. 3D Tilt Effect on Cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = -((y - centerY) / 12);
            const rotateY = (x - centerX) / 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // 4. Secret Journal Note Toggle
    const secretToggle = document.getElementById('secretToggle');
    if (secretToggle) {
        secretToggle.addEventListener('click', () => {
            const content = secretToggle.querySelector('.secret-content');
            content.classList.toggle('hidden');
        });
    }

    // 5. Mood / Vibe Tracker Interactive
    const vibeBtns = document.querySelectorAll('.vibe-btn');
    const currentVibe = document.getElementById('currentVibe');
    if (vibeBtns.length > 0) {
        vibeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const vibeText = btn.getAttribute('data-vibe');
                currentVibe.querySelector('span').textContent = vibeText;
            });
        });
    }

    // 6. Interactive Drag Sticker
    const dragSticker = document.getElementById('dragSticker');
    if (dragSticker) {
        let isDragging = false;
        let startX, startY;

        dragSticker.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX - dragSticker.offsetLeft;
            startY = e.clientY - dragSticker.offsetTop;
            dragSticker.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            dragSticker.style.position = 'absolute';
            dragSticker.style.left = (e.clientX - startX) + 'px';
            dragSticker.style.top = (e.clientY - startY) + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            if (dragSticker) dragSticker.style.cursor = 'grab';
        });
    }

    // 7. Contact Modal Toggle
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const contactModal = document.getElementById('contactModal');

    if (openModalBtn && closeModalBtn && contactModal) {
        openModalBtn.addEventListener('click', () => {
            contactModal.classList.add('active');
        });
        closeModalBtn.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });
        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
            }
        });
    }
});
