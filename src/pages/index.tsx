import * as React from 'react'
import '../theme/index.scss';
import { HomeComponent } from '../components/HomeComponent';
import { CTAComponent } from '../components/CTAComponent';
import { ThesisComponent } from '../components/ThesisComponent';
import { HeaderComponent } from '../components/HeaderComponent';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <HeaderComponent/>
      <HomeComponent/>
      <CTAComponent/>
      <ThesisComponent/>
    </main>
  )
}

export default IndexPage
