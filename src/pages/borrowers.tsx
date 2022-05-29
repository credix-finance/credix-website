import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { HeaderComponent } from '../components/HeaderComponent';
import fav from '../../static/favicon-32x32.png'
import preview from '../../static/preview_large.png'
import { BorrowersHomeComponent } from '../components/borrowers/BorrowersHomeComponent';
import { FooterComponent } from '../components/FooterComponent';
import { BorrowersCTAComponent } from '../components/borrowers/BorrowersCTAComponent';
import { BorrowersCTARegisterComponent } from '../components/borrowers/BorrowersCTARegisterComponent';
import { Quotes } from '../components/borrowers/quotes/Quotes';
import { ELocalStorage, useComponentProps } from '../hooks/useComponentProps';
import { Location } from '@reach/router';
import { MarqueeComponent } from '../components/shared/marquee/MarqueeComponent';

const BorrowersPage = () => {
  const { width, mobileWidth, getLightTheme } = useComponentProps();

  const [isLightTheme, setIsLightTheme] = useState<boolean>(getLightTheme());

  const setLightTheme = (bool: boolean) => {
    setIsLightTheme(bool)
    localStorage.setItem(ELocalStorage.LIGHT_THEME, JSON.stringify(bool))
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
      <Location>
        {locationProps => <HeaderComponent {...locationProps} isMobile={!!width && width < mobileWidth} isLightTheme={isLightTheme} setLightTheme={setLightTheme}/>}
      </Location>
      <BorrowersHomeComponent isMobile={!!width && width < mobileWidth}/>
      <BorrowersCTAComponent/>
      <Quotes isMobile={!!width && width < mobileWidth}/>
      <BorrowersCTARegisterComponent isMobile={!!width && width < mobileWidth}/>
      <FooterComponent isMobile={!!width && width < mobileWidth} isLightTheme={isLightTheme}/>
    </main>
  )
}

export default BorrowersPage;
