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

    // 2. Click Effects: Sparkles & Cute Arrows
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
            const distance = Math.random() * 55 + 12;
            const targetX = x + Math.cos(angle) * distance;
            const targetY = y + Math.sin(angle) * distance;

            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            
            container.appendChild(sparkle);

            sparkle.animate([
                { transform: 'translate(0, 0) scale(0.4)', opacity: 1 },
                { transform: `translate(${targetX - x}px, ${targetY - y}px) scale(1.6)`, opacity: 0 }
            ], {
                duration: 650,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
            }).onfinish = () => sparkle.remove();
        }
    }

    function createCuteArrows(x, y) {
        const container = document.getElementById('sparkle-container');
        const arrowSymbols = ['➔', '➤', '💘', '✨', '👉', '💖', '⭐', '🍀'];
        
        for (let i = 0; i < 3; i++) {
            const arrow = document.createElement('div');
            arrow.textContent = arrowSymbols[Math.floor(Math.random() * arrowSymbols.length)];
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 75 + 25;
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
                duration: 750,
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
            
            const rotateX = -((y - centerY) / 18);
            const rotateY = (x - centerX) / 18;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // 4. Gimmick: Sticker Spawner Button (กดแล้วเสกสติ๊กเกอร์พุ่งขึ้นจอ)
    const spawnBtn = document.getElementById('spawnStickerBtn');
    if (spawnBtn) {
        spawnBtn.addEventListener('click', (e) => {
            const rect = spawnBtn.getBoundingClientRect();
            const stickers = ['🦄', '🌈', '🍩', '🎨', '🚀', '💖', '🍕', '⚡', '🧸'];
            const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

            const spawned = document.createElement('div');
            spawned.classList.add('floating-spawned-sticker');
            spawned.textContent = randomSticker;
            spawned.style.left = (rect.left + rect.width / 2) + 'px';
            spawned.style.top = rect.top + 'px';

            document.body.appendChild(spawned);
            setTimeout(() => spawned.remove(), 1000);
        });
    }

    // 5. Stamp Badge Interactive Gimmick
    const stampBadge = document.querySelector('.stamp-badge');
    if (stampBadge) {
        const stamps = ['⭐ VIP EDT.', '🔥 HOT PICK', '💖 APPROVED', '✨ RARE ITEM'];
        stampBadge.addEventListener('click', () => {
            const currentText = stampBadge.textContent;
            let nextIndex = (stamps.indexOf(currentText) + 1) % stamps.length;
            stampBadge.textContent = stamps[nextIndex];
        });
    }

    // 6. Secret Journal Note Toggle
    const secretToggle = document.getElementById('secretToggle');
    if (secretToggle) {
        secretToggle.addEventListener('click', () => {
            const content = secretToggle.querySelector('.secret-content');
            content.classList.toggle('hidden');
        });
    }
});
