
import refs from './js/refs';
import cards from './js/menu.json';
import cardsTpl from './templates/card.hbs';
import { onInputChange, setSavedTheme } from './js/main';

const cardsMarkup = cardsTpl(cards);

setSavedTheme()

refs.themeSwitchBtn.addEventListener('change', onInputChange);

refs.menu.innerHTML = menucardsMarkup;
