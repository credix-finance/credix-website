import * as React from 'react'
import { CredixButton } from './shared/buttons/CredixButton';
import { IWidthProps } from '../pages';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DogVideo from '../assets/video/Credix_WebsiteGradientA_02.mp4'

export const HomeComponent = ({ isMobile }: IWidthProps) => {

  const homeText = () => (
    <div className="h-flex-column">
      <h1 className="cta-block--title">Credit investing<br/> democratized</h1>
      <span className="cta-block--text">Be part of the new decentralized credit marketplace connecting investors with FinTechs in emerging markets.</span>
      <CredixButton className="cta-block--button" url={'https://discord.gg/5Ab8b8ueGs'}>Join Discord</CredixButton>
    </div>
  )

  const gradientVideo = () => (
    <div className="h-flex-column home-component--video">
      <video controls={false} autoPlay muted loop>
        <source src={DogVideo} type="video/mp4"/>
      </video>
    </div>
  )

  return (
    <div className="h-flex-column home-component">
      <div className="h-flex-row cta-block">
        { isMobile ?
          <>
            {gradientVideo()}
            {homeText()}
          </>
          :
          <>
            {homeText()}
            {gradientVideo()}
          </>
        }


      </div>
      {/*<div className="h-flex-row home-component--arrow-row" id="journey">*/}
      {/*  <a href="#journey" className="home-component--arrow"/>*/}
      {/*</div>*/}
    </div>
  )
}
