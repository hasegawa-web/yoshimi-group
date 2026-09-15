(() => {
  const bnr = document.querySelector(".fixBnr");
  const footer = document.querySelector("footer");
  if (!bnr || !footer) return;

  const OFFSET = 20;
  let ticking = false;

  const update = () => {
    const triggerY = footer.getBoundingClientRect().top - OFFSET;
    const hide = bnr.getBoundingClientRect().bottom >= triggerY;
    bnr.classList.toggle("is-hidden", hide);
    bnr.setAttribute("aria-hidden", hide ? "true" : "false");
    ticking = false;
  };

  const onScrollOrResize = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
  update();
})();
