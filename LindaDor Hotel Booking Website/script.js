function showPage(pageId, btn) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach(b => b.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");
  if (btn) btn.classList.add("active");

  document.getElementById("mobileMenu").classList.remove("show");
}

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("show");
});
