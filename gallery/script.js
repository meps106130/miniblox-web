const thumbs = document.querySelectorAll(".thumb");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

thumbs.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src.replace("thumb", "full");
    lightbox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});


document.querySelectorAll('.card').forEach(card => {
  const back = card.querySelector('.card-back');
  if (!back) return;
  const text = back.innerText.toLowerCase();
  if (text.includes('lvl: 100')) {
    card.classList.add('level-100'); // 紅色動畫
  } else if (text.includes('rank: pro')) {
    card.classList.add('rank-pro');
  } else if (text.includes('rank: legend')) {
    card.classList.add('rank-legend');
  } else if (text.includes('rank: immortal')) {
    card.classList.add('rank-immortal');
  } else if (text.includes('rank: bulider')) {
    card.classList.add('rank-bulider');
  } else if (text.includes('rank: og')) {
    card.classList.add('rank-bulider');
  }
});
