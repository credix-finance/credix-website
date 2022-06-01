import React, { useState } from 'react';
import { useLocation } from '@reach/router'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { CookieButton } from '../buttons/CookieButton';
import { openInNewTab } from '../../../utils/openInNewTab';
import { useComponentProps } from '../../../hooks/useComponentProps';

export const CookieBanner = () => {
  const { getCookieState, setCookieState } = useComponentProps();
  const location = useLocation()
  const [showCookie, setShowCookie] = useState<boolean>(!getCookieState());

  const setCookie = () => {
    setShowCookie(false)
    setCookieState()
    document.cookie = 'gatsby-gdpr-facebook-pixel=true; expires=Sun, 1 Jan 2090 00:00:00 UTC; path=/';
    document.cookie = 'gatsby-gdpr-google-analytics=true; expires=Sun, 1 Jan 2090 00:00:00 UTC; path=/';
    document.cookie = 'gatsby-gdpr-google-analytics-2=true; expires=Sun, 1 Jan 2090 00:00:00 UTC; path=/';
    document.cookie = 'gatsby-gdpr-google-tagmanager=true; expires=Sun, 1 Jan 2090 00:00:00 UTC; path=/';
    document.cookie = 'gatsby-gdpr-linked-in=true; expires=Sun, 1 Jan 2090 00:00:00 UTC; path=/';
    initializeAndTrack(location);
  }

  const declineCookie = () => {
    setShowCookie(false)
    setCookieState()
  }

  if (!showCookie) return null;

  return (
    <div className="h-flex-row h-flex-row--align-center cookie-banner-component">
      <div className="cookie-banner-component--text">We use third party cookies in order to optimize your
                          experience.&nbsp;
      <span className="cookie-banner-component--text cookie-banner-component--text--link h-cursor-pointer" onClick={() => openInNewTab('https://docs.credix.finance/other-links-and-resources/cookie-policy')}>View Cookie Policy</span>
      </div>
      <div className="cookie-banner-component--button-container">
        <CookieButton className="cookie-banner-component--button"
          onClick={setCookie}> Accept all</CookieButton>
        <CookieButton className="cookie-banner-component--button--decline" onClick={declineCookie}>Decline</CookieButton>
      </div>
    </div>
  )
}
