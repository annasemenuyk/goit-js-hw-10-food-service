import './sass/main.scss';
import refs from './js/refs'
import menucards from './js/getmenu.js';
import cardsTpl from './templates/card.hbs'
import { onInputChange, setSavedTheme } from './js/main'

const cardsMarkup = cardsTpl(menucards);

setSavedTheme()

refs.themeSwitchBtn.addEventListener('change', onInputChange);

refs.menu.innerHTML = menucardsMarkup;
