(() => {
  const sections = document.querySelectorAll(
    "main .hero, main .top-about, main .top-inNumbers, main .top-sastainability, main .top-company",
  );
  if (!sections.length) return;

  const restartGroupImg = (section) => {
    section.querySelectorAll("img.top-about__img").forEach((img) => {
      const src = img.getAttribute("src");
      if (!src || src.includes("play=1")) return;
      const next = `${src.split("?")[0]}?play=1`;
      img.classList.add("is-restarting");
      const show = () => img.classList.remove("is-restarting");
      img.addEventListener("load", show, { once: true });
      img.src = next;
    });
  };

  const reveal = (el) => {
    if (el.classList.contains("top-about")) restartGroupImg(el);
    el.classList.add("is-inview");
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sections.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -12% 0px",
    },
  );

  const inViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh * 0.88 && rect.bottom > 80;
  };

  sections.forEach((section) => {
    if (inViewport(section)) {
      reveal(section);
      return;
    }
    observer.observe(section);
  });
})();
