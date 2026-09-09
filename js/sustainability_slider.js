const wrap = document.querySelector(".top-sastainabilityList__wrap");
const lists = wrap
  ? [...wrap.querySelectorAll(".top-sastainabilityList")]
  : [];

function setupSustainabilitySlider() {
  if (!wrap || !lists.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  wrap.style.height = `${wrap.offsetHeight}px`;

  lists.forEach((list) => {
    const styles = getComputedStyle(list);
    const gap = parseFloat(styles.rowGap || styles.gap) || 0;
    const distance = list.offsetHeight + gap;

    [...list.children].forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      list.appendChild(clone);
    });

    list.style.setProperty("--marquee-distance", `${distance}px`);
    list.classList.add("is-ready");
  });
}

setupSustainabilitySlider();
