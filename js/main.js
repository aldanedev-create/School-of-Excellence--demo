// School of Excellence Demo — main.js

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const expanded = navLinks.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", expanded);
  });
}

// Active nav link
const currentPath = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPath) link.classList.add("active");
});

// Programme filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const programmeCards = document.querySelectorAll("[data-category]");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    programmeCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.style.display = show ? "" : "none";
    });
  });
});

// Demo form handling
const demoForms = document.querySelectorAll("[data-demo-form]");
demoForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const notice = form.querySelector(".form-notice");
    if (notice) {
      notice.textContent =
        "DEMO ONLY — Your information has not been sent. This form does not submit real enquiries.";
      notice.classList.add("show");
      notice.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    form.reset();
  });
});

// Set current year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});