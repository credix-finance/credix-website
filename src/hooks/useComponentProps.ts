import { useEffect, useState } from 'react';

interface LocationProps {
  location?: {
    pathname: string;
  }
}

export enum ELocalStorage {
  LIGHT_THEME = 'light_theme',
  COOKIE_RESPONDED = 'cookie_responded'
}

export interface IComponentProps extends LocationProps {
  isMobile?: boolean;
  isTablet?: boolean;
  isLightTheme?: boolean;
  setLightTheme?: (b: boolean) => void;
}

export const useComponentProps = () => {
  const [width, setWidth] = useState<number>();
  const mobileWidth = 900;
  const tabletWidth = 1445;

  const getLightTheme = () => {
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (typeof window !== 'undefined') {
      const lightTheme = localStorage.getItem(ELocalStorage.LIGHT_THEME)
      if (lightTheme && lightTheme !== 'undefined') {
        return JSON.parse(lightTheme)
      } else if (userPrefersLight) {
        return true
      } else return false;
    }
    if (userPrefersLight) {
      return true
    } else return false;
  }

  const getCookieState = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(ELocalStorage.COOKIE_RESPONDED)
    }
  }

  const setCookieState = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(ELocalStorage.COOKIE_RESPONDED, 'true')
    }
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {return;});
    };
  }, []);

  return {
    width,
    mobileWidth,
    tabletWidth,
    getLightTheme,
    getCookieState,
    setCookieState
  }
}
