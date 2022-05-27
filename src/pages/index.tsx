import * as React from 'react'
import '../theme/index.scss';
import { HomeComponent } from '../components/HomeComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { CTATeamComponent } from '../components/CTATeamComponent';
import { CoreTeamComponent } from '../components/CoreTeamComponent';
import { FooterComponent } from '../components/FooterComponent';
import Helmet from 'react-helmet'
import fav from '../../static/favicon-32x32.png'
import preview from '../../static/preview_large.png'
import { useComponentProps } from '../hooks/useComponentProps';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxComponent } from '../components/ParallaxComponent';
import { BackersBorrowersComponent } from '../components/BackersBorrowersComponent';
import { MarqueeComponent } from '../components/shared/marquee/MarqueeComponent';
import { CTAHomeComponent } from '../components/CTAHomeComponent';
import { useState } from 'react';
import LightThemeProvider from '../services/LightThemeProvider';



const IndexPage = () => {
  const { width, mobileWidth } = useComponentProps();
  const [isLightTheme, setIsLightTheme] = useState<boolean>(LightThemeProvider.isLightTheme);

  const setLightTheme = (bool: boolean) => {
    setIsLightTheme(bool)
    LightThemeProvider.setLightTheme(bool)
  }

  return (
    <main className={`${isLightTheme ? 'light' : 'dark'}`}>
      <Helmet
        titleTemplate="%s - Credit investing democratized"
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${fav}` }
        ]}
        meta={[
          {
            name: 'description',
            content: 'CREDIX is a decentralized credit marketplace connecting investors with FinTechs in emerging markets. Learn more about the future of debt financing now.'
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
            content: 'CREDIX is a decentralized credit marketplace connecting investors with FinTechs in emerging markets. Learn more about the future of debt financing now.'
          },
          {
            property: 'og:url',
            content: 'https://credix.finance'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'twitter:image',
            content: preview
          },
          {
            property: 'twitter:description',
            content: 'CREDIX is a decentralized credit marketplace connecting investors with FinTechs in emerging markets. Learn more about the future of debt financing now.'
          },
          {
            property: 'twitter:title',
            content: 'Credix - Credit investing democratized'
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image'
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
      <MarqueeComponent/>
      <ParallaxProvider>
        <HeaderComponent isMobile={!!width && width < mobileWidth} isLightTheme={isLightTheme} setLightTheme={setLightTheme}/>
        <HomeComponent isMobile={!!width && width < mobileWidth}/>
        <ParallaxComponent isMobile={!!width && width < mobileWidth}/>
        <BackersBorrowersComponent/>
        <CoreTeamComponent isLightTheme={isLightTheme}/>
        <CTATeamComponent/>
        <CTAHomeComponent/>
        <FooterComponent isLightTheme={isLightTheme}/>
      </ParallaxProvider>
    </main>
  )
}

export default IndexPage
