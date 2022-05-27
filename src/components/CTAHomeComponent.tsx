import React from 'react';
import { PopupButton } from '@typeform/embed-react'

export const CTAHomeComponent = () => {

  return (
    <div className="h-flex-column cta-component">
      <div className="h-flex-row">
        <span className="cta-component--title">Become part of the future <br/> of private credit markets</span>
      </div>
      <div className="h-flex-row h-margin-top--auto">
        <PopupButton id="E98Qjiw9" className="credix-button--typeform cta-component--button cta-component--button--investor">
          Become an investor
        </PopupButton>
        <PopupButton id="yFTAJy3h" className="credix-button--typeform cta-component--button cta-component--button--borrower">
          Register as a borrower
        </PopupButton>
      </div>
    </div>
  )
}
