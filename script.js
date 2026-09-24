// ================================
// ✨ Sparkle Mouse Effect
// ================================

const sparkles = ["✦", "✧", "⋆", "✶", "✷", "✨", "★"];

let lastSparkleTime = 0;

// -------------------------------
// 🖱️ คลิกเมาส์ = ดาวกระจาย
// -------------------------------
document.addEventListener("click", (event) => {

  for (let i = 0; i < 8; i++) {

    const sparkle = document.createElement("span");

    sparkle.className = "click-sparkle";
    sparkle.textContent =
      sparkles[Math.floor(Math.random() * sparkles.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 45;

    sparkle.style.left =
      `${event.clientX + Math.cos(angle) * distance}px`;

    sparkle.style.top =
      `${event.clientY + Math.sin(angle) * distance}px`;

    sparkle.style.fontSize =
      `${10 + Math.random() * 14}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 800);
  }
});


// -------------------------------
// ✨ เลื่อนเมาส์ = ประกายดาวตามทาง
// -------------------------------
document.addEventListener("mousemove", (event) => {

  const now = Date.now();

  // ลดจำนวนดาวไม่ให้เยอะเกินไป
  if (now - lastSparkleTime < 80) return;

  lastSparkleTime = now;

  const sparkle = document.createElement("span");

  sparkle.className = "mouse-sparkle";

  sparkle.textContent =
    sparkles[Math.floor(Math.random() * sparkles.length)];

  sparkle.style.left =
    `${event.clientX + (Math.random() * 12 - 6)}px`;

  sparkle.style.top =
    `${event.clientY + (Math.random() * 12 - 6)}px`;

  sparkle.style.fontSize =
    `${8 + Math.random() * 12}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 650);
});
