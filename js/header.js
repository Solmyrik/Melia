const headerBody = document.querySelector('.header__body');
const headerExit = document.querySelector('.header__exit');
const headerBurger = document.querySelector('.header__burger');

if (headerBody) {
  headerBurger.addEventListener('click', (e) => {
    headerBody.classList.add('active');
  });
  headerExit.addEventListener('click', (e) => {
    headerBody.classList.remove('active');
  });
}
