import * as React from 'react'
import '../theme/index.scss';
import { HomeComponent } from '../components/HomeComponent';
import { CTAComponent } from '../components/CTAComponent';
import { ThesisComponent } from '../components/ThesisComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { PlatformComponent } from '../components/PlatformComponent';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <HeaderComponent/>
      <HomeComponent/>
      <CTAComponent/>
      <ThesisComponent/>
      <PlatformComponent/>
    </main>
  )
}

export default IndexPage
