import React, { useEffect, useState } from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { CredixButton } from './shared/buttons/CredixButton';
import { IWidthProps } from '../hooks/useMobileWidth';
import { openInNewTab } from '../utils/openInNewTab';
import { Link } from 'gatsby';
import { Drawer, Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Light Theme' } };

enum Page {
    BORROWERS = 'borrowers',
    INVESTORS = 'investors',
}

const getActiveLink = (pathname?: string) => {
  if (pathname && pathname.includes(Page.BORROWERS)) {
    return Page.BORROWERS;
  }
  if (pathname && pathname.includes(Page.INVESTORS)) {
    return Page.INVESTORS;
  }
}

export const HeaderComponent = ({ isMobile, ...locationProps }: IWidthProps) => {
  const { location } = locationProps;

  const [currentPage, setCurrentPage] = useState<string | undefined>(getActiveLink(location?.pathname));

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();

  useEffect(() => {
    setCurrentPage(getActiveLink(location?.pathname));
  }, [location]);

  const headerLinks = () => {
    return (
      <>
        <div className="header-component--link">
          <Link className="header-component--link--gatsby" to={'/investors'}>Investors</Link>
          { currentPage === Page.INVESTORS && <div className="header-component--link--active"/>}
        </div>
        <div className="header-component--link">
          <Link className="header-component--link--gatsby" to={'/borrowers'}>Borrowers</Link>
          { currentPage === Page.BORROWERS && <div className="header-component--link--active"/>}
        </div>
        <span className="header-component--link" onClick={() => openInNewTab('https://angel.co/company/credix')}>Team</span>
        <span className="header-component--link" onClick={() => openInNewTab('https://credix.gitbook.io/credix')}>Contact</span>
        <CredixButton className="header--links--button" url={'https://app.credix.finance/'}>Launch App</CredixButton>
        <div className="h-flex-row h-flex-row--align-center header-component--link header-component--switch">
          <span>🌚</span>
          <Switch {...label} color={'default'} checked={isLightTheme} onChange={(e, bool) => setIsLightTheme && setIsLightTheme(bool)}/>
          <span>🌞</span>
        </div>
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
              <SvgIcon icon={SVG_ICONS.HAMBURGER_MENU} color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE} className="header-component--menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
              :
              headerLinks()
          }
        </div>
        <Drawer
          anchor={'right'}
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          className={`header-component--drawer ${isLightTheme ? 'h-background-color-white' : 'h-background-color-black'}`}
        >
          <div className="h-flex-column header-component--drawer--links-column">
            <SvgIcon icon={SVG_ICONS.CLOSE_MENU} color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE} className="header-component--menu-close-button" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            {headerLinks()}
          </div>
        </Drawer>
      </div>
    </div>
  )
}
