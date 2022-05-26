import { useEffect, useState } from 'react';

interface LocationProps {
  location?: {
    pathname: string;
  }
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
    tabletWidth
  }
}
