import * as React from 'react'
import '../theme/index.scss';
import { HomeComponent } from '../components/HomeComponent';
import { CTAComponent } from '../components/CTAComponent';
import { ThesisComponent } from '../components/ThesisComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { PlatformComponent } from '../components/PlatformComponent';
import { VisionComponent } from '../components/VisionComponent';
import { CTATeamComponent } from '../components/CTATeamComponent';
import { CoreTeamComponent } from '../components/CoreTeamComponent';
import { AdvisorsComponent } from '../components/AdvisorsComponent';
import { BackedByComponent } from '../components/BackedByComponent';
import { FooterComponent } from '../components/FooterComponent';
import { useEffect, useState } from 'react';
import Helmet from 'react-helmet'
import fav from '../../static/favicon-32x32.png'
import preview from '../../static/preview_large.png'
import twitter_preview from '../../static/twitter.png'
import ReactGA from 'react-ga';

export interface IWidthProps {
  isMobile?: boolean;
  isTablet?: boolean;
}

/**
 * Helper Function
 */
export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const IndexPage = () => {
  const [width, setWidth] = useState<number>();
  const mobileWidth = 900;
  const tabletWidth = 1500;

  useEffect(() => {
    ReactGA.initialize('G-2WM77E6YNH');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])


  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {return;});
    };
  }, []);

  return (
    <main>
      <Helmet
        titleTemplate="%s - Credit investing democratized"
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${fav}` }
        ]}
        meta={[
          {
            name: 'description',
            content: 'CREDIX is a decentralized credit platform that gives borrowers in emerging countries access to previously untapped capital.'
          },
          {
            name: 'keywords',
            content: 'fintech, finance, capital, blockchain, investors, borrowers, assets, emerging countries, capital markets'
          },
          {
            name: 'robots',
            content: 'index, nofollow'
          },
          {
            name: 'title',
            content: 'Credix'
          },
          {
            property: 'og:image',
            content: preview
          },
          {
            property: 'og:image:alt',
            content: 'Credix - Credit investing democratized'
          },
          {
            property: 'og:title',
            content: 'Credix - Credit investing democratized'
          },
          {
            property: 'og:description',
            content: 'CREDIX is a decentralized credit platform that gives borrowers in emerging countries access to previously untapped capital.'
          },
          {
            property: 'og:url',
            content: 'https://credix.finance'
          },
          {
            name: 'twitter:image',
            content: twitter_preview
          },
          {
            name: 'twitter:description',
            content: 'CREDIX is a decentralized credit platform that gives borrowers in emerging countries access to previously untapped capital.'
          },
          {
            name: 'twitter:title',
            content: 'Credix - Credit investing democratized'
          },
          {
            name: 'theme-color',
            content: '#1F1F1F'
          }
        ]}
      >
        <title lang="en">Credix</title>
        <html lang="en"/>
      </Helmet>
      <HeaderComponent isMobile={!!width && width < mobileWidth}/>
      <HomeComponent/>
      <CTAComponent/>
      <ThesisComponent isMobile={!!width && width < mobileWidth}/>
      <PlatformComponent/>
      <VisionComponent isMobile={!!width && width < mobileWidth} isTablet={!!width && width < tabletWidth}/>
      <CTATeamComponent/>
      <CoreTeamComponent/>
      <AdvisorsComponent/>
      <BackedByComponent isMobile={!!width && width < mobileWidth}/>
      <FooterComponent/>
    </main>
  )
}

export default IndexPage
