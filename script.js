const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", opened ? "true" : "false");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", (event) => {
  if (!mainNav || !menuBtn) return;
  if (!mainNav.contains(event.target) && !menuBtn.contains(event.target)) {
    mainNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// تأثير ظهور بسيط للأقسام عند النزول
const revealItems = document.querySelectorAll(".service-card, .product-card, .contact-card, .cta-box");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}

// إضافة سنة حقوق النشر تلقائيًا
const copyright = document.querySelector(".copyright");
if (copyright) {
  copyright.innerHTML = `© ${new Date().getFullYear()} أنتيكا ومقتنيات — جميع الحقوق محفوظة`;
}
