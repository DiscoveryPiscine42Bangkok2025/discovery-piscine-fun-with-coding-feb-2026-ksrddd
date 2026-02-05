// Page fade-in
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-ready");
});

// Page fade-out on internal navigation
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  // ignore: new tab, external links, anchors on same page, downloads
  if (link.target === "_blank") return;
  if (href.startsWith("http")) return;
  if (href.startsWith("#")) return;

  e.preventDefault();
  document.body.classList.remove("page-ready");
  document.body.classList.add("page-exit");

  setTimeout(() => {
    window.location.href = href;
  }, 220);
});

// Section reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll("header, main, section");
  els.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.5 });

  els.forEach(el => io.observe(el));
});
