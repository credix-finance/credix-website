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

export interface IWidthProps {
  isMobile: boolean
}

const IndexPage = () => {
  const [width, setWidth] = useState<number>();
  const mobileWidth = 900;

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
      <title>Home Page</title>
      <HeaderComponent isMobile={!!width && width < mobileWidth}/>
      <HomeComponent/>
      <CTAComponent/>
      <ThesisComponent isMobile={!!width && width < mobileWidth}/>
      <PlatformComponent/>
      <VisionComponent/>
      <CTATeamComponent/>
      <CoreTeamComponent/>
      <AdvisorsComponent/>
      <BackedByComponent/>
      <FooterComponent/>
    </main>
  )
}

export default IndexPage
