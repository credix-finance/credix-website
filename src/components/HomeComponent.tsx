import * as React from 'react'
import SvgIcon, { SVG_COLORS, SVG_ICONS } from '../svg-icon/SvgIcon';
import { Button } from '@mui/material';

export const HomeComponent = () => {
  return (
    <div className="h-flex-row home-component">
      <div className="h-flex-row h-flex-row--space-between header">
        <SvgIcon icon={SVG_ICONS.CREDIX_LOGO} color={SVG_COLORS.WHITE}/>
        <div className="h-flex-row h-flex-row--space-between h-flex-row--align-baseline header-links">
          <span className="font-second">Join The Team</span>
          <span className="font-second">Documentation</span>
          <Button variant="contained">Launch App</Button>
        </div>
      </div>
    </div>
  )
}
