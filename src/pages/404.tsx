import * as React from 'react'
import { HeaderComponent } from '../components/HeaderComponent';
import { NotFoundComponent } from '../components/404Component';
import { FooterComponent } from '../components/FooterComponent';

const NotFoundPage = () => {
  return (
    <>
      <HeaderComponent/>
      <NotFoundComponent/>
      <FooterComponent/>
    </>
  )
}

export default NotFoundPage
