// Lightbox 功能
const thumbs = document.querySelectorAll(".thumb");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

thumbs.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});
closeBtn.addEventListener("click", () => lightbox.classList.add("hidden"));

// Rank 標籤檢測
document.querySelectorAll('.card').forEach(card => {
  const back = card.querySelector('.card-back');
  if (!back) return;
  const text = back.innerText.toLowerCase();
  if (text.includes('lvl: 100')) card.classList.add('level-100');
  else if (text.includes('rank: pro')) card.classList.add('rank-pro');
  else if (text.includes('rank: legend')) card.classList.add('rank-legend');
  else if (text.includes('rank: immortal')) card.classList.add('rank-immortal');
  else if (text.includes('rank: bulider') || text.includes('rank: og')) card.classList.add('rank-bulider');
});

// Scroll淡入動畫
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
});
document.querySelectorAll('.thumb').forEach(img => observer.observe(img));
