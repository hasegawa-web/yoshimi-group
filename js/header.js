(() => {
  const header = document.querySelector("header");
  if (!header) return;

  const threshold = 8;
  let lastY = window.scrollY;
  let ticking = false;

  const setHidden = (hidden) => {
    header.classList.toggle("is-hidden", hidden);
  };

  const update = () => {
    const y = Math.max(0, window.scrollY);
    const diff = y - lastY;

    if (document.body.classList.contains("is-gnav-open")) {
      setHidden(false);
    } else if (y <= threshold) {
      setHidden(false);
    } else if (diff > threshold) {
      setHidden(true);
    } else if (diff < -threshold) {
      setHidden(false);
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );

  header.addEventListener("focusin", () => setHidden(false));
})();
