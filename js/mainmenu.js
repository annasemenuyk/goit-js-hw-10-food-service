import refs from './refs'
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

function onInputChange(e) {
    if (e.currentTarget.checked) {
        setDarkTheme();
        saveThemeInformation();
        return
    };
    setLightTheme();
    saveThemeInformation();
}

function saveThemeInformation() {
    localStorage.setItem('darkTheme', refs.body.classList.contains(Theme.DARK))
}

function setSavedTheme() {
    const darkThemeIsOn = JSON.parse(localStorage.getItem('darkTheme'))
    if (darkThemeIsOn) {
        refs.themeSwitchBtn.checked = true;
        setDarkTheme()
    }
}

function setLightTheme() {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
}

function setDarkTheme() {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
}

export { onInputChange, saveThemeInformation, setSavedTheme };