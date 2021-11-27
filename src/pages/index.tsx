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

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <HeaderComponent/>
      <HomeComponent/>
      <CTAComponent/>
      <ThesisComponent/>
      <PlatformComponent/>
      <VisionComponent/>
      <CTATeamComponent/>
      <CoreTeamComponent/>
      <AdvisorsComponent/>
      <BackedByComponent/>
    </main>
  )
}

export default IndexPage
