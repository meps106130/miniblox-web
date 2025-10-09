const form = document.getElementById("feedback-form");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const discord = document.getElementById("discord").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!discord || !subject || !message) {
    status.textContent = "請填寫所有欄位 / Please fill in all fields.";
    status.style.color = "orange";
    return;
  }

  // 顯示送出訊息
  status.textContent = "✅。";
  status.style.color = "lightgreen";

  form.reset();

  // 延遲 2 秒再跳轉到 Discord
  setTimeout(() => {
    window.location.href = "https://discord.gg/yMWD2g2WY9";
  }, 2000);
});
