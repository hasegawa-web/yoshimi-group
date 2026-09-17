const gnav = document.querySelector('.gnav');
const gnavBtn = document.querySelector('.gnav__btn');

gnavBtn.addEventListener('click', () => {
  gnav.classList.toggle('is-active');
  if (gnav.classList.contains('is-active')) {
    gnavBtn.textContent = 'CLOSE';
  } else {
    gnavBtn.textContent = 'MENU';
  }
});
