import { BorrowersCTADividerSmall } from './dividers/BorrowersCTADividerSmall';
import { BorrowersCTADivider } from './dividers/BorrowersCTADivider';
import { CredixButton } from '../shared/buttons/CredixButton';
import React from 'react';
import { IComponentProps } from '../../hooks/useComponentProps';

export const BorrowersCTARegisterComponent = ({ isMobile }: IComponentProps) => (
  <div className="h-flex-row h-flex-row--space-between h-flex-row--align-center cta-register-borrower-component--cta-banner">
    <div className="cta-register-borrower-component--cta-banner--title">
      {isMobile ? <BorrowersCTADividerSmall/> : <BorrowersCTADivider/>}
      <span>Be part of the journey</span>
    </div>
    <CredixButton className="cta-register-borrower-component--button" url={''}>Register as a borrower</CredixButton>
  </div>
)
