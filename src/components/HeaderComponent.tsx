import React, { useEffect, useState } from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { CredixButton } from './shared/buttons/CredixButton';
import { IComponentProps } from '../hooks/useComponentProps';
import { openInNewTab } from '../utils/openInNewTab';
import { Link } from 'gatsby';
import { Drawer, styled, Switch } from '@mui/material';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#000',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#a9a9a9' : '#5d5d5d'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#FFF' : '#000',
    width: 32,
    height: 32,
    '&:before': {
      content: '\'\'',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        theme.palette.mode === 'dark' ? '#000' : '#FFF'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#a9a9a9' : '#5d5d5d',
    borderRadius: 20 / 2
  }
}));

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

export const HeaderComponent = ({ isMobile, isLightTheme, setLightTheme, ...locationProps }: IComponentProps) => {

  const { location } = locationProps;

  const [currentPage, setCurrentPage] = useState<string | undefined>(getActiveLink(location?.pathname));

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();

  useEffect(() => {
    setCurrentPage(getActiveLink(location?.pathname));
  }, [location]);

  const mail = (e: any) => {
    window.location = 'mailto:info@credix.finance' as unknown as Location;
    e.preventDefault()
  }

  const headerLinks = () => {
    return (
      <>
        <div className="header-component--link">
          <Link className="header-component--link--gatsby" to={'/investors'}>Investors</Link>
          { !isMobile && currentPage === Page.INVESTORS && <div className="header-component--link--active"/>}
        </div>
        <div className="header-component--link">
          <Link className="header-component--link--gatsby" to={'/borrowers'}>Borrowers</Link>
          { !isMobile && currentPage === Page.BORROWERS && <div className="header-component--link--active"/>}
        </div>
        <span className="header-component--link" onClick={() => openInNewTab('https://angel.co/company/credix')}>Team</span>
        <span className="header-component--link" onClick={mail}>Contact</span>
        <CredixButton className={`header--links--button ${isLightTheme ? 'h-color-white' : 'h-color-black'}`} url={'https://app.credix.finance/'}>Launch App</CredixButton>
        {
          !isMobile && <MaterialUISwitch sx={{ m: 1 }} theme={{ palette: { mode: isLightTheme? 'light': 'dark' } } as any} checked={isLightTheme} onChange={(e, bool) => setLightTheme && setLightTheme(bool)}/>
        }
        {/*<div className="h-flex-row h-flex-row--align-center header-component--link header-component--switch">*/}
        {/*  <span>🌚</span>*/}
        {/*  <Switch {...label} color={'default'} checked={isLightTheme} onChange={(e, bool) => setLightTheme && setLightTheme(bool)}/>*/}
        {/*  <span>🌞</span>*/}
        {/*</div>*/}
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
          <div className="h-flex-row h-flex-column--align-end h-flex-row--space-between header-component--icons">
            <SvgIcon icon={SVG_ICONS.CREDIX_LOGO_MOBILE} color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE} className="header-component--logo"/>
            <div className="h-flex-row h-flex-row--align-baseline">
              {
                isMobile && <MaterialUISwitch sx={{ m: 1 }} theme={{ palette: { mode: isLightTheme? 'light': 'dark' } } as any} checked={isLightTheme} onChange={(e, bool) => setLightTheme && setLightTheme(bool)}/>

              }
              <SvgIcon icon={SVG_ICONS.CLOSE_MENU} color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE} className="header-component--menu-close-button" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>
          </div>
          <div className="h-flex-column header-component--drawer--links-column" style={{ color: isLightTheme ? 'black' : 'white' }}>
            {headerLinks()}
          </div>
        </Drawer>
      </div>
    </div>
  )
}
