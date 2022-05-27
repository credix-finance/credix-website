import * as React from 'react'
import { HeaderComponent } from '../components/HeaderComponent';
import { NotFoundComponent } from '../components/404Component';
import { FooterComponent } from '../components/FooterComponent';
import { useMobileWidth } from '../hooks/useMobileWidth';

const NotFoundPage = () => {
  const { width, mobileWidth } = useMobileWidth();

  return (
    <>
      <HeaderComponent/>
      <NotFoundComponent/>
      <FooterComponent isMobile={!!width && width < mobileWidth}/>
    </>
  )
}

export default NotFoundPage
