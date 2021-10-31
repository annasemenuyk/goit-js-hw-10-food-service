import menu from '../menu.json';
import template from '../templates/menuList.hbs';
import  Theme from './theme';
import refs from './refs';
const { menuList, themeSwitchBtn } = refs;
const { LIGHT, DARK } = Theme;
// Додавання списку меню
const result = template(menu);
menuList.insertAdjacentHTML('beforeend', result);

// Додавання слушателя собитій та зміна теми
themeSwitchBtn.addEventListener('change', onChangeTheme);
function onChangeTheme(event) {
  document.querySelector('body').classList.toggle(DARK);
  document.querySelector('body').classList.toggle(LIGHT);

  let theme = event.target.checked ? DARK : LIGHT;
  localStorage.setItem('theme', theme);
}

let theme = localStorage.getItem('theme');

if (!theme) {
  theme = LIGHT;
  localStorage.setItem('theme', theme);
}

document.querySelector('body').classList.add(theme);

if (theme === LIGHT) {
  themeSwitchBtn.checked = false;
} else {
  themeSwitchBtn.checked = true;
}