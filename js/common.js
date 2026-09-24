const gnav = document.querySelector(".gnav");
const gnavBtn = document.querySelector(".gnav__btn");

if (gnav && gnavBtn) {
  const overlay = document.createElement("div");
  overlay.className = "gnav-overlay";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);

  const setOpen = (open) => {
    gnav.classList.toggle("is-active", open);
    gnavBtn.classList.toggle("is-active", open);
    overlay.classList.toggle("is-active", open);
    document.body.classList.toggle("is-gnav-open", open);
    gnavBtn.setAttribute("aria-expanded", String(open));
    gnavBtn.setAttribute(
      "aria-label",
      open ? "ナビゲーションを閉じる" : "ナビゲーションを開く",
    );
  };

  gnavBtn.setAttribute("aria-expanded", "false");

  gnavBtn.addEventListener("click", () => {
    setOpen(!gnav.classList.contains("is-active"));
  });

  overlay.addEventListener("click", () => setOpen(false));
}
