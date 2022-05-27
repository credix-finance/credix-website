import * as React from 'react'
import { IComponentProps } from '../../hooks/useComponentProps';
import { VideoComponent } from '../shared/video/VideoComponent';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GradientVideo from '../../assets/video/Credix_WebsiteGradientB_02.mp4';
import { PopupButton } from '@typeform/embed-react';

export const BorrowersHomeComponent = ({ isMobile }: IComponentProps) => {

  const homeText = () => (
    <div className="h-flex-row cta-block home-component-borrowers--text">
      <div className="h-flex-column">
        <h1 className="cta-block-borrowers--title">Borrow <br/> at attractive rates</h1>
        <span className="cta-block-borrowers--text">Get cheaper credit, less bureaucracy and shorter lead times.</span>
        <PopupButton className="cta-component-investors--button" id="yFTAJy3h">Become a borrower</PopupButton>
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
    </div>
  )
}
