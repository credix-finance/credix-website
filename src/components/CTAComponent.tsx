import React from 'react';
import { PopupButton } from '@typeform/embed-react'

export const CTAComponent = () => {
  return (
    <div className="h-flex-column cta-component">
      <div className="h-flex-row h-flex-row--space-between h-flex-row--align-center cta-component--row">
        <span className="cta-component--title">Be part of the Credix Journey</span>
        <span className="cta-component--text">Join our closed Alpha and help us build the future of democratized credit investing.</span>
        <PopupButton id="k1mIGrFE" className="credix-button--typeform cta-component--button">
          Join Alpha
        </PopupButton>
      </div>
    </div>
  )
}
