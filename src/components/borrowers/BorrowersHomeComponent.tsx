import * as React from 'react'
import { CredixButton } from '../shared/buttons/CredixButton';
import { IWidthProps } from '../../hooks/useMobileWidth';
import { VideoComponent } from '../shared/video/VideoComponent';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GradientVideo from '../../assets/video/Credix_WebsiteGradientB_02.mp4';

// todo: fix url for becoming borrower button
// todo: replace image with correct one
export const BorrowersHomeComponent = ({ isMobile }: IWidthProps) => {

  const homeText = () => (
    <div className="h-flex-row cta-block">
      <div className="h-flex-column">
        <h1 className="cta-block-borrowers--title">Borrow at attractive rates</h1>
        <span className="cta-block--text">Get cheaper credit, less bureaucracy and shorter lead times.</span>
        <CredixButton className="cta-block-borrowers--button" url={''}>Become a borrower</CredixButton>
      </div>
    </div>
  )

  return (
    <div className="h-flex-column home-component-borrowers">
      <div className="h-flex-row cta-block">
        { isMobile ?
          <>
            <VideoComponent video={GradientVideo}/>
            {homeText()}
          </>
          :
          <>
            {homeText()}
            <VideoComponent video={GradientVideo}/>
          </>
        }


      </div>
      {/*<div className="h-flex-row home-component--arrow-row" id="journey">*/}
      {/*  <a href="#journey" className="home-component--arrow"/>*/}
      {/*</div>*/}
    </div>
  )
}
