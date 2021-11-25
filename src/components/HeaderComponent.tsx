import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { CredixButton } from './shared/credix-button/CredixButton';

export const HeaderComponent = () => {
  return (
    <div className="h-flex-column header-component">
      <div className="h-flex-row h-flex-row--space-between header">
        <SvgIcon icon={SVG_ICONS.CREDIX_LOGO} color={SVG_COLORS.WHITE}/>
        <div className="h-flex-row h-flex-row--space-between h-flex-row--align-baseline header--links">
          <span className="font-second">Join The Team</span>
          <span className="font-second">Documentation</span>
          <CredixButton className="header--links--button">Launch App</CredixButton>
        </div>
      </div>
    </div>
  )
}
