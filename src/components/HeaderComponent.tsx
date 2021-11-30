import React, { useEffect, useState } from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { CredixButton } from './shared/buttons/CredixButton';
import { Drawer } from '@mui/material';
import { IWidthProps, openInNewTab } from '../pages';

export const HeaderComponent = ({ isMobile }: IWidthProps) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>();

  const headerLinks = () => {
    return (
      <>
        <span className="header-component--link" onClick={() => openInNewTab('https://angel.co/company/credix')}>Join The Team</span>
        <span className="header-component--link" onClick={() => openInNewTab('https://credix.gitbook.io/credix')}>Documentation</span>
        <CredixButton className="header--links--button" url={'https://app.credix.finance/'}>Launch App</CredixButton>
      </>
    )
  }

  return (
    <div className="h-flex-column header-component">
      <div className="h-flex-row h-flex-row--space-between header">
        <SvgIcon icon={SVG_ICONS.CREDIX_LOGO} color={SVG_COLORS.WHITE}/>
        <div className="h-flex-row h-flex-row--space-between h-flex-row--align-baseline header--links">
          {
            isMobile ?
              <SvgIcon icon={SVG_ICONS.HAMBURGER_MENU} color={SVG_COLORS.WHITE} className="header-component--menu-button" onClick={() => setMenuOpen(!isMenuOpen)}/>
              :
              headerLinks()
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
