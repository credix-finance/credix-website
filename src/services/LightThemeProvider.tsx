import { ELocalStorage } from '../hooks/useComponentProps';

export default class LightThemeProvider {
  static get isLightTheme(): boolean {
    const lightTheme = localStorage.getItem(ELocalStorage.LIGHT_THEME)
    if (lightTheme && lightTheme !== 'undefined') {
      return JSON.parse(lightTheme)
    } else return false;
  }

  static setLightTheme = (bool: boolean | undefined) => {
    localStorage.setItem(ELocalStorage.LIGHT_THEME, JSON.stringify(bool))
  }

}
