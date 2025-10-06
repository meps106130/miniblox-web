document.getElementById("langBtn").addEventListener("click", () => {
  const current = document.documentElement.lang;
  if (current === "zh") {
    window.location.href = "index-en.html";
  } else {
    window.location.href = "index-zh.html";
  }
});
