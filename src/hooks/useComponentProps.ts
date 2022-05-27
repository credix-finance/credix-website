import { useEffect, useState } from 'react';

interface LocationProps {
  location?: {
    pathname: string;
  }
}

export enum ELocalStorage {
  LIGHT_THEME = 'light_theme'
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
  const tabletWidth = 1500;

  const getLightTheme = () => {
    if (typeof window !== 'undefined') {
      const lightTheme = localStorage.getItem(ELocalStorage.LIGHT_THEME)
      if (lightTheme && lightTheme !== 'undefined') {
        return JSON.parse(lightTheme)
      } else return false;
    }
    return false
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
    getLightTheme
  }
}
