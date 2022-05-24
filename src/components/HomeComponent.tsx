import * as React from 'react'
import { CredixButton } from './shared/buttons/CredixButton';
import { IWidthProps } from '../pages';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DogVideo from '../assets/video/Credix_WebsiteGradientA_02.mp4'

export const HomeComponent = ({ isMobile }: IWidthProps) => {

  const homeText = () => (
    <div className="h-flex-column home-component--text">
      <h1 className="cta-block--title">Credit investing<br/> made global</h1>
      <span className="cta-block--text">Building the future of global private credit markets</span>
      {/*//TODO: link*/}
      <CredixButton className="cta-block--button" url={'https://discord.gg/5Ab8b8ueGs'}>Explore our application</CredixButton>
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
