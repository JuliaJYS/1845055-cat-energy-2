/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav__list');
const navToogle = document.querySelector('.main-nav__toggle');


// navMain.classList.remove('main-nav__list--nojs');

navToogle.addEventListener('click', () => {
  if (navToogle.classList.contains('main-nav__toggle--close')) {
    console.log('Close');
    navMain.classList.remove('main-nav__list--opened');
    navMain.classList.add('main-nav__list--nojs');
    navToogle.classList.remove('main-nav__toggle--close');
  } else {
    console.log('Open');
    navMain.classList.add('main-nav__list--opened');
    navToogle.classList.add('main-nav__toggle--close');
    navMain.classList.remove('main-nav__list--nojs');
  }
});
