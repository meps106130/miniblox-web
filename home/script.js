// 當點擊語言按鈕時，跳轉到另一語言頁面
document.getElementById("langBtn").addEventListener("click", function() {
  const currentURL = window.location.href;
  if (currentURL.includes("-zh.html")) {
    window.location.href = currentURL.replace("-zh.html", "-en.html");
  } else if (currentURL.includes("-en.html")) {
    window.location.href = currentURL.replace("-en.html", "-zh.html");
  }
});
