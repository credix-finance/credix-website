import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';
import { StaticImage } from 'gatsby-plugin-image';
import { openInNewTab } from '../pages';
import { PopupButton } from '@typeform/embed-react';

export const FooterComponent = () => {

  const mail = (e: any) => {
    window.location = 'mailto:info@credix.finance' as unknown as Location;
    e.preventDefault()
  }

  return (
    <div className="h-flex-column footer-component">
      <div className="h-flex-row footer-component--row">
        <div className="h-flex-column footer-component--column">
          <SvgIcon icon={SVG_ICONS.CREDIX_LOGO} color={SVG_COLORS.WHITE} className="footer-component--logo"/>
          <div className="h-flex-row h-flex-row--space-around footer-component--footer">
            {/*<span className="footer-component--footer--link" onClick={mail}>Support</span>*/}
            {/*<span className="footer-component--footer--link">Terms of service</span>*/}
            {/*<span className="footer-component--footer--link">License</span>*/}
          </div>
        </div>
        <div className="h-flex-column footer-component--column">
          <div className="h-flex-column footer-component--padding">
            <span className="footer-component--footer--link" onClick={() => openInNewTab('https://twitter.com/Credix_finance')}>Twitter</span>
            <span className="footer-component--footer--link" onClick={() => openInNewTab('https://discord.gg/5Ab8b8ueGs')}>Discord</span>
            <PopupButton id="k1mIGrFE" className="footer-component--footer--link footer-component--footer--typeform">
              Join Alpha
            </PopupButton>
            <span className="footer-component--footer--link" onClick={() => openInNewTab('https://angel.co/company/credix')}>Join The Team</span>
            <span className="footer-component--footer--link" onClick={() => openInNewTab('https://credix.gitbook.io/credix')}>Documentation</span>
            <span className="footer-component--footer--link h-margin-bottom--double" onClick={mail}>Support</span>
          </div>
        </div>
        <div className="h-flex-column footer-component--column">
          <span className="footer-component--footer--text">
            Join our mailing list to be updates about our roadmap.
          </span>
          <div id="mc_embed_signup" className="footer-component--mailchimp-row">
            <form action="https://finance.us20.list-manage.com/subscribe/post?u=6501024066e1753c2aa2d692e&amp;id=e5165ece3c"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
              target="_blank" noValidate>
              <div className="footer-component--mailchimp-sub--logo-row">
                <StaticImage className="footer-component--mailchimp-sub--logo" src={'../assets/shapes/Send.png'} alt={'Send'}/>
              </div>
              <div id="mc_embed_signup_scroll" className="footer-component--mailchimp-sub">
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder=" Your email" required/>
                <div style={{ position: 'absolute', left: '-5000px;', visibility: 'hidden' }} aria-hidden="true">
                  <input type="text" name="b_6501024066e1753c2aa2d692e_e5165ece3c" tabIndex={-1} value=""/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
