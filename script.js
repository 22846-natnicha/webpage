document.addEventListener("DOMContentLoaded", () => {
  // --- 1. HAMBURGER MENU TOGGLE ---
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // ปิดเมนูอัตโนมัติเมื่อคลิกเลือกลิงก์
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // --- 2. CUSTOM APPLE CURSOR & PARTICLES ---
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    cursor.innerHTML = "🍎";
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      // สร้าง Particle จำนวนจำกัดเมื่อขยับเมาส์
      if (Math.random() < 0.2) {
        createParticle(mouseX, mouseY);
      }
    });

    function createParticle(x, y) {
      const particle = document.createElement("div");
      particle.classList.add("cursor-particle");
      
      const symbols = ["✨", "💖", "⭐", "🍃", "🌸"];
      particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
      
      const dx = (Math.random() - 0.5) * 50;
      const dy = (Math.random() - 0.5) * 50;
      particle.style.setProperty('--dx', `${dx}px`);
      particle.style.setProperty('--dy', `${dy}px`);

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 800);
    }
  }

  // --- 3. SCROLL REVEAL (INTERSECTION OBSERVER) ---
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
});
