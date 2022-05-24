import { useEffect, useState } from 'react';

export interface IWidthProps {
  isMobile?: boolean;
  isTablet?: boolean;
}

export const useMobileWidth = () => {
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