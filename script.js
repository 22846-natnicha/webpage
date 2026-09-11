document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor & Smooth Follower
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

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
        if (!container) return;
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 10;
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            container.appendChild(sparkle);

            sparkle.animate([
                { transform: 'translate(0, 0) scale(0.4)', opacity: 1 },
                { transform: `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px) scale(1.5)`, opacity: 0 }
            ], { duration: 600, easing: 'cubic-bezier(0.25, 1, 0.5, 1)' }).onfinish = () => sparkle.remove();
        }
    }

    function createCuteArrows(x, y) {
        const container = document.getElementById('sparkle-container');
        if (!container) return;
        const arrowSymbols = ['➔', '➤', '💘', '✨', '👉', '💖', '⭐'];
        for (let i = 0; i < 3; i++) {
            const arrow = document.createElement('div');
            arrow.textContent = arrowSymbols[Math.floor(Math.random() * arrowSymbols.length)];
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 70 + 20;
            arrow.style.cssText = `left: ${x}px; top: ${y}px; position: absolute; font-size: 1.2rem; pointer-events: none; z-index: 9999;`;
            container.appendChild(arrow);

            arrow.animate([
                { transform: `translate(0, 0) scale(0.5) rotate(0deg)`, opacity: 1 },
                { transform: `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px) scale(1.2) rotate(${Math.random()*360}deg)`, opacity: 0 }
            ], { duration: 700, easing: 'cubic-bezier(0.1, 1, 0.3, 1)' }).onfinish = () => arrow.remove();
        }
    }

    // 3. 3D Tilt Effect
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            card.style.transform = `perspective(1000px) rotateX(${-(y - rect.height/2) / 18}deg) rotateY(${(x - rect.width/2) / 18}deg) scale(1.01)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // 4. Sticker Spawner Gimmick
    const spawnBtn = document.getElementById('spawnStickerBtn');
    if (spawnBtn) {
        spawnBtn.addEventListener('click', () => {
            const rect = spawnBtn.getBoundingClientRect();
            const stickers = ['🦄', '🌈', '🍩', '🎨', '🚀', '💖', '🍕', '⚡', '🧸'];
            const spawned = document.createElement('div');
            spawned.classList.add('floating-spawned-sticker');
            spawned.textContent = stickers[Math.floor(Math.random() * stickers.length)];
            spawned.style.left = (rect.left + rect.width / 2) + 'px';
            spawned.style.top = rect.top + 'px';
            document.body.appendChild(spawned);
            setTimeout(() => spawned.remove(), 1000);
        });
    }

    // 5. Interactive Stamp Badge
    const stampBadge = document.querySelector('.stamp-badge');
    if (stampBadge) {
        const stamps = ['⭐ VIP EDT.', '🔥 HOT PICK', '💖 APPROVED', '✨ RARE ITEM'];
        stampBadge.addEventListener('click', () => {
            stampBadge.textContent = stamps[(stamps.indexOf(stampBadge.textContent) + 1) % stamps.length];
        });
    }
});
