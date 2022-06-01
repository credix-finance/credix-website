import React, { useState } from 'react';
import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { CookieButton } from '../buttons/CookieButton';
import { openInNewTab } from '../../../utils/openInNewTab';

export const CookieBanner = () => {
  const [show, setShow] = useState(true);

  const location = useLocation()

  return (
    <>
      {
        show && (
          <div className="h-flex-row h-flex-row--align-center cookie-banner-component">
            <div className="cookie-banner-component--text">We use third party cookies in order to optimize your
                          experience.&nbsp;
            <span className="cookie-banner-component--text cookie-banner-component--text--link h-cursor-pointer" onClick={() => openInNewTab('https://docs.credix.finance/other-links-and-resources/cookie-policy')}>View Cookie Policy</span>
            </div>
            <div className="cookie-banner-component--button-container">
              <CookieButton className="cookie-banner-component--button"
                onClick={() => initializeAndTrack(location)}> Accept all</CookieButton>
              <CookieButton className="cookie-banner-component--button--decline" onClick={() => setShow(false)}>Decline</CookieButton>
            </div>
          </div>
        )
      }
    </>
  );
}