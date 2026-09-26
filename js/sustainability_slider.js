const wrap = document.querySelector(".top-sastainabilityList__wrap");
const lists = wrap
  ? [...wrap.querySelectorAll(".top-sastainabilityList")]
  : [];

function cycleHeight(list) {
  const items = list.children;
  const half = items.length / 2;
  if (half < 1) return 0;
  return items[half].offsetTop - items[0].offsetTop;
}

function syncWrapHeight() {
  if (!wrap || !lists.length) return;
  const height = Math.max(...lists.map(cycleHeight));
  if (!Number.isFinite(height) || height <= 0) return;
  const next = `${height}px`;
  if (wrap.style.height !== next) wrap.style.height = next;
}

function setupSustainabilitySlider() {
  if (!wrap || !lists.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  lists.forEach((list) => {
    [...list.children].forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      list.appendChild(clone);
    });
  });

  syncWrapHeight();
  lists.forEach((list) => list.classList.add("is-ready"));

  let frame = 0;
  const requestSync = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      syncWrapHeight();
    });
  };

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(requestSync);
    lists.forEach((list) => observer.observe(list));
  }

  window.addEventListener("resize", requestSync);

  wrap.querySelectorAll("img").forEach((img) => {
    if (img.complete) return;
    img.addEventListener("load", requestSync, { once: true });
    img.addEventListener("error", requestSync, { once: true });
  });
}

setupSustainabilitySlider();
