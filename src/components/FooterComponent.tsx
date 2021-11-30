import React from 'react';
import SvgIcon, { SVG_COLORS, SVG_ICONS } from './shared/svg-icon/SvgIcon';

export const FooterComponent = () => {
  return (
    <div className="h-flex-column footer-component">
      <div className="h-flex-row footer-component--row">
        <div className="h-flex-column footer-component--column">
          <SvgIcon icon={SVG_ICONS.CREDIX_LOGO} color={SVG_COLORS.WHITE} className="footer-component--logo"/>
          <div className="h-flex-row h-flex-row--space-around footer-component--footer">
            <span className="footer-component--footer--link">Support</span>
            {/*<span className="footer-component--footer--link">Terms of service</span>*/}
            {/*<span className="footer-component--footer--link">License</span>*/}
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
          <div id="mc_embed_signup">
            <form action="https://finance.us20.list-manage.com/subscribe/post?u=6501024066e1753c2aa2d692e&amp;id=e5165ece3c"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
              target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Subscribe</label>
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
                <div style={{ position: 'absolute', left: '-5000px;', visibility: 'hidden' }} aria-hidden="true">
                  <input type="text" name="b_6501024066e1753c2aa2d692e_e5165ece3c" tabIndex={-1} value=""/>
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                    <p className="brandingLogo" style={{ visibility: 'hidden' }}>
                      <a href="http://eepurl.com/hOMcB9" title="Mailchimp - email marketing made easy and fun">
                        <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"/>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
