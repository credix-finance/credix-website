import * as React from 'react'
import { CredixButton } from './shared/buttons/CredixButton';
import { IComponentProps } from '../hooks/useComponentProps';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { initScrollFade, scrollFade } from '../utils/scrollfade';

export const HomeComponent = ({ isMobile }: IComponentProps) => {

  const homeText = () => (
    <div className="h-flex-column home-component--text">
      <h1 className="cta-block--title">Credit investing<br/> made global</h1>
      <span className="cta-block--text">Building the future of global private credit markets</span>
      <CredixButton className="cta-block--button" url={'https://app.credix.finance'}>Explore our application</CredixButton>
    </div>
  )

  initScrollFade();
  scrollFade();

  return (
    <div className="h-flex-column home-component">
      <div className="h-flex-row cta-block scrollFade h-flex-row--space-between">
        { isMobile ?
          <>
            <div className="home-gradient"/>
            {homeText()}
          </>
          :
          <>
            {homeText()}
            <div className="home-gradient"/>
          </>
        }


      </div>
      {/*<div className="h-flex-row home-component--arrow-row" id="journey">*/}
      {/*  <a href="#journey" className="home-component--arrow"/>*/}
      {/*</div>*/}
    </div>
  )
}
