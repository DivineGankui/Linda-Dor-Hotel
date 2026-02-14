function showPage(pageId, clickedBtn) {
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll(".nav-link");

  // Hide all pages
  pages.forEach(page => {
    page.classList.remove("active");
    page.classList.add("hidden");
  });

  // Remove active state from all nav links
  navLinks.forEach(link => link.classList.remove("active"));

  // Show selected page
  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.remove("hidden");
    setTimeout(() => activePage.classList.add("active"), 50);
  }

  // Highlight clicked nav item
  if (clickedBtn) {
    clickedBtn.classList.add("active");
  }
}

// Default state
document.addEventListener("DOMContentLoaded", () => {
  const firstLink = document.querySelector(".nav-link");
  showPage("home", firstLink);
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
