// ================================
// 🌸 Cute Mouse Sticker Effect
// ================================

const stickers = ["🌸", "💗", "✨", "🎀", "🧸", "🌷", "⭐", "🍓"];

// -------------------------------
// 🖱️ คลิกเมาส์ = สติกเกอร์เด้ง
// -------------------------------
document.addEventListener("click", (event) => {
  const sticker = document.createElement("span");

  sticker.className = "click-sticker";
  sticker.textContent =
    stickers[Math.floor(Math.random() * stickers.length)];

  sticker.style.left = `${event.clientX}px`;
  sticker.style.top = `${event.clientY}px`;

  document.body.appendChild(sticker);

  setTimeout(() => {
    sticker.remove();
  }, 900);
});


// -------------------------------
// 🐰 เลื่อนเมาส์ = สติกเกอร์ตามเมาส์
// -------------------------------
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

let lastStickerTime = 0;

document.addEventListener("mousemove", (event) => {
  const now = Date.now();

  // ไม่ให้สร้างเยอะเกินไป
  if (now - lastStickerTime < 180) return;

  lastStickerTime = now;

  const sticker = document.createElement("span");

  sticker.className = "mouse-sticker";
  sticker.textContent =
    stickers[Math.floor(Math.random() * stickers.length)];

  sticker.style.left = `${event.clientX + 10}px`;
  sticker.style.top = `${event.clientY + 10}px`;

  document.body.appendChild(sticker);

  setTimeout(() => {
    sticker.remove();
  }, 700);
});
