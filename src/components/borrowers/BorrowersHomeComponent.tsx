import * as React from 'react'
import { IComponentProps } from '../../hooks/useComponentProps';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { PopupButton } from '@typeform/embed-react';

export const BorrowersHomeComponent = ({ isMobile, isTablet }: IComponentProps) => {

  const homeText = () => (
    <div className="h-flex-row cta-block home-component-borrowers--text">
      <div className="h-flex-column">
        <h1 className="cta-block-borrowers--title">Borrow <br/> at attractive rates</h1>
        <span className="cta-block-borrowers--text">Get cheaper credit, less bureaucracy and shorter lead times.</span>
        <PopupButton className="cta-component-investors--button h-margin-top--triple" id="yFTAJy3h">Become a borrower</PopupButton>
      </div>
    </div>
  )

  return (
    <div className="h-flex-column home-component-borrowers">
      <div className="h-flex-row h-flex-row--space-between">
        { isMobile || isTablet ?
          <>
            <div className="borrowers-gradient"/>
            {homeText()}
          </>
          :
          <>
            {homeText()}
            <div className="borrowers-gradient"/>
          </>
        }

      </div>
    </div>
  )
}
