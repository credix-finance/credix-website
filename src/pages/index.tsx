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

export interface IWidthProps {
  isMobile: boolean;
  isTablet?: boolean;
}

const IndexPage = () => {
  const [width, setWidth] = useState<number>();
  const mobileWidth = 900;
  const tabletWidth = 1500;

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
        title={'Credix'}
      />
      <title>Home Page</title>
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
