import { CTADividerSmall } from './dividers/CTADividerSmall';
import { CTADivider } from './dividers/CTADivider';
import { CredixButton } from '../shared/buttons/CredixButton';
import React from 'react';
import { IWidthProps } from '../../pages';

export const CTARegisterComponent = ({ isMobile }: IWidthProps) => (
  <div className="h-flex-row h-flex-row--space-between h-flex-row--align-center cta-register-borrower-component--cta-banner">
    <div className="cta-register-borrower-component--cta-banner--title">
      {isMobile ? <CTADividerSmall/> : <CTADivider/>}
      <span>Be part of the journey</span>
    </div>
    <CredixButton className="cta-register-borrower-component--button" url={''}>Register as a borrower</CredixButton>
  </div>
)