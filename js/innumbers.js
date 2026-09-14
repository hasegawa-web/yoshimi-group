(() => {
  const section = document.querySelector(".top-inNumbers");
  if (!section) return;

  const reveal = () => section.classList.add("is-inview");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveal();
    return;
  }

  const observer = new IntersectionObserver(
    ([entry], obs) => {
      if (!entry.isIntersecting) return;
      reveal();
      obs.disconnect();
    },
    {
      threshold: 0.28,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  observer.observe(section);
})();
