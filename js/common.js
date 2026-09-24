const gnav = document.querySelector(".gnav");
const gnavBtn = document.querySelector(".gnav__btn");

gnavBtn.addEventListener("click", () => {
  gnav.classList.toggle("is-active");
  gnavBtn.classList.toggle("is-active");
});
