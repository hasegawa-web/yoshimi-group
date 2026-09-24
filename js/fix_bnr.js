(() => {
  const bnr = document.querySelector(".fixBnr");
  const bnrSp = document.querySelector(".fixBnr-sp");
  const topAbout = document.querySelector(".top-about");
  if (!bnr || !bnrSp || !topAbout) return;

  const OFFSET = 200;
  let ticking = false;

  const update = () => {
    const triggerY = topAbout.getBoundingClientRect().top + OFFSET;
    const hide = bnr.getBoundingClientRect().bottom >= triggerY;
    const hideSp = bnrSp.getBoundingClientRect().bottom >= triggerY;
    bnr.classList.toggle("is-hidden", hide);
    bnr.setAttribute("aria-hidden", hide ? "true" : "false");
    bnrSp.classList.toggle("is-hidden", hideSp);
    bnrSp.setAttribute("aria-hidden", hideSp ? "true" : "false");
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
