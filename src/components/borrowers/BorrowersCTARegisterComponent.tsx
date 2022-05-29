import { BorrowersCTADividerSmall } from './dividers/BorrowersCTADividerSmall';
import { BorrowersCTADivider } from './dividers/BorrowersCTADivider';
import React from 'react';
import { IComponentProps } from '../../hooks/useComponentProps';
import { PopupButton } from '@typeform/embed-react';

export const BorrowersCTARegisterComponent = ({ isMobile }: IComponentProps) => (
  <div className="h-flex-row h-flex-row--space-between h-flex-row--align-center cta-register-borrower-component--cta-banner">
    <div className="cta-register-borrower-component--cta-banner--title">
      {isMobile ? <BorrowersCTADividerSmall/> : <BorrowersCTADivider/>}
      <span>Be part of the journey</span>
    </div>
    <PopupButton className="cta-component-investors--button" id="yFTAJy3h ">Register as a borrower</PopupButton>
  </div>
)
