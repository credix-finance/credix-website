import React, { useEffect, useState } from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { CredixButton } from './shared/buttons/CredixButton';
import { Drawer } from '@mui/material';

export const HeaderComponent = () => {

  const [width, setWidth] = useState<number>();
  const [isMenuOpen, setMenuOpen] = useState<boolean>();
  const mobileWidth = 900;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {return;});
    };
  }, []);

  const headerLinks = () => {
    return (
      <>
        <span className="header-component--link">Join The Team</span>
        <span className="header-component--link">Documentation</span>
        <CredixButton className="header--links--button">Launch App</CredixButton>
      </>
    )
  }


  return (
    <div className="h-flex-column header-component">
      <div className="h-flex-row h-flex-row--space-between header">
        <SvgIcon icon={SVG_ICONS.CREDIX_LOGO} color={SVG_COLORS.WHITE}/>
        <div className="h-flex-row h-flex-row--space-between h-flex-row--align-baseline header--links">
          {
            width && width > mobileWidth ?
              headerLinks()
              :
              <SvgIcon icon={SVG_ICONS.HAMBURGER_MENU} color={SVG_COLORS.WHITE} className="header-component--menu-button" onClick={() => setMenuOpen(!isMenuOpen)}/>
          }
        </div>
        <Drawer
          anchor={'right'}
          open={isMenuOpen}
          onClose={() => setMenuOpen(false)}
          className="header-component--drawer"
        >
          <div className="h-flex-column header-component--drawer--links-column">
            <SvgIcon icon={SVG_ICONS.CLOSE_MENU} color={SVG_COLORS.WHITE} className="header-component--menu-close-button" onClick={() => setMenuOpen(!isMenuOpen)}/>
            {headerLinks()}
          </div>
        </Drawer>
      </div>
    </div>
  )
}
