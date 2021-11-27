import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';

export const FooterComponent = () => {
  return (
    <div className="h-flex-column footer-component">
      <div className="h-flex-row footer-component--row">
        <div className="h-flex-column footer-component--column">
          <SvgIcon icon={SVG_ICONS.CREDIX_LOGO} color={SVG_COLORS.WHITE} className="footer-component--logo"/>
          <div className="h-flex-row h-flex-row--space-around footer-component--support">
            <span className="footer-component--footer--link">Support</span>
            <span className="footer-component--footer--link">Terms of service</span>
            <span className="footer-component--footer--link">License</span>
          </div>
        </div>
        <div className="h-flex-column footer-component--column">
          <div className="h-flex-column footer-component--padding">
            <span className="footer-component--footer--link">Twitter</span>
            <span className="footer-component--footer--link h-margin-top--double">Discord</span>
            <span className="footer-component--footer--link h-margin-top--double">Alpha Launch</span>
          </div>
        </div>
        <div className="h-flex-column footer-component--column">
          <span className="footer-component--footer--text">
            Join our mailing list to be updates about our roadmap.
          </span>
        </div>
      </div>
    </div>
  )
}
