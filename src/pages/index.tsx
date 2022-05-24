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
import Helmet from 'react-helmet'
import fav from '../../static/favicon-32x32.png'
import preview from '../../static/preview_large.png'
import { HowItWorksComponent } from '../components/HowItWorksComponent';
import { useMobileWidth } from '../hooks/useMobileWidth';


const IndexPage = () => {
  const { width, mobileWidth, tabletWidth } = useMobileWidth();

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
      <HeaderComponent isMobile={!!width && width < mobileWidth}/>
      <HomeComponent isMobile={!!width && width < mobileWidth}/>
      <CTAComponent/>
      <ThesisComponent isMobile={!!width && width < mobileWidth}/>
      <PlatformComponent/>
      <HowItWorksComponent isMobile={!!width && width < mobileWidth}/>
      <VisionComponent isMobile={!!width && width < mobileWidth} isTablet={!!width && width < tabletWidth}/>
      <CTATeamComponent/>
      <CoreTeamComponent/>
      <AdvisorsComponent/>
      <BackedByComponent/>
      {/*<FAQComponent/>*/}
      <FooterComponent/>
    </main>
  )
}

export default IndexPage
