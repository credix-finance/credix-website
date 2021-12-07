import React, { useState } from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { CredixButton } from './shared/buttons/CredixButton';
import { Drawer, Switch } from '@mui/material';
import { IComponentProps, openInNewTab } from '../pages';

const label = { inputProps: { 'aria-label': 'Light Theme' } };

export const HeaderComponent = ({ isMobile, isLightTheme, setIsLightTheme }: IComponentProps) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>();

  const headerLinks = () => {
    return (
      <>
        <div className="h-flex-row h-flex-row--align-center header-component--link header-component--switch">
          <span>🌚</span>
          <Switch {...label} color={'default'} checked={isLightTheme} onChange={(e, bool) => setIsLightTheme && setIsLightTheme(bool)}/>
          <span>🌞</span>
        </div>
        <span className={`header-component--link ${!isLightTheme ? 'h-color-white' : 'h-color-black'}`} onClick={() => openInNewTab('https://angel.co/company/credix')}>Join The Team</span>
        <span className={`header-component--link ${!isLightTheme ? 'h-color-white' : 'h-color-black'}`} onClick={() => openInNewTab('https://credix.gitbook.io/credix')}>Documentation</span>
        <CredixButton className={`header--links--button ${!isLightTheme ? 'h-color-black h-background-color-white' : 'h-color-white h-background-color-black'}`} url={'https://app.credix.finance/'}>Launch App</CredixButton>
      </>
    )
  }

  return (
    <div className="h-flex-column header-component">
      <div className="h-flex-row h-flex-row--space-between header">
        <SvgIcon icon={SVG_ICONS.CREDIX_LOGO} className="h-cursor-pointer" color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE} onClick={() => window.location = '..' as unknown as Location}/>
        <div className="h-flex-row h-flex-row--space-between h-flex-row--align-baseline header--links">
          {
            isMobile ?
              <SvgIcon icon={SVG_ICONS.HAMBURGER_MENU} color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE} className="header-component--menu-button" onClick={() => setMenuOpen(!isMenuOpen)}/>
              :
              headerLinks()
          }
        </div>
        <Drawer
          anchor={'right'}
          open={isMenuOpen}
          onClose={() => setMenuOpen(false)}
          className={`header-component--drawer ${isLightTheme ? 'h-background-color-white' : 'h-background-color-black'}`}
        >
          <div className="h-flex-column header-component--drawer--links-column">
            <SvgIcon icon={SVG_ICONS.CLOSE_MENU} color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE} className="header-component--menu-close-button" onClick={() => setMenuOpen(!isMenuOpen)}/>
            {headerLinks()}
          </div>
        </Drawer>
      </div>
    </div>
  )
}
