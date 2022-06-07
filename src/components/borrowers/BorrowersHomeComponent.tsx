import * as React from 'react'
import { IComponentProps } from '../../hooks/useComponentProps';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GradientVideo from '../../assets/video/Credix_WebsiteGradientC_02.mp4'
import { VideoComponent } from '../shared/video/VideoComponent';
import { PopupButton } from '@typeform/embed-react';

export const BorrowersHomeComponent = ({ isMobile, isTablet }: IComponentProps) => {

  const homeText = () => (
    <div className="h-flex-column home-component-borrowers--text">
      <h1 className="cta-block-borrowers--title">Borrow <br/> at attractive rates</h1>
      <span className="cta-block-borrowers--text">Get access to better credit with lower cost of capital and shorter lead times</span>
      <PopupButton className="cta-component-investors--button h-margin-top--triple credix-button--typeform" id="Mtgs2OJ9">Become a borrower</PopupButton>
    </div>
  )

  return (
    <div className="h-flex-column home-component-borrowers">
      <div className="h-flex-row cta-block h-flex-row--space-between home-component-borrowers--wrapper">
        {isMobile ?
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
    </div>
  )
}
