import * as React from 'react'
import { HeaderComponent } from '../components/HeaderComponent';
import { NotFoundComponent } from '../components/404Component';
import { FooterComponent } from '../components/FooterComponent';
import { useComponentProps } from '../hooks/useComponentProps';
import { CookieBanner } from '../components/shared/cookies/CookieBanner';

const NotFoundPage = () => {
  const { width, mobileWidth } = useComponentProps();

  return (
    <>
      <CookieBanner/>
      <HeaderComponent/>
      <NotFoundComponent/>
      <FooterComponent isMobile={!!width && width < mobileWidth}/>
    </>
  )
}

export default NotFoundPage
