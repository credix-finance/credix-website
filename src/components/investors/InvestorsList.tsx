import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CredixButton } from '../shared/buttons/CredixButton';
import { CTADividerSmall } from './dividers/CTADividerSmall';
import { CTADivider } from './dividers/CTADivider';
import { IWidthProps } from '../../hooks/useMobileWidth';

export const InvestorsList = ({ isMobile }: IWidthProps) => (
  <>
    <div className="h-flex-column investors-list-component">
      <div className="h-flex-row h-flex-row--space-between investors-list-component--title-row">
        <span className="investors-list-component--sub-title">Investors</span>
      </div>
      {
        <div className="h-flex-row h-flex-row--space-between investors-list-component--logo-row">
          <a target="_blank">
            <StaticImage src={'../assets/logos/parafi.png'} alt={'parafi'} className="backed-by-component--logo"/>
          </a>
          <a target="_blank">
            <StaticImage src={'../../assets/logos/alameda-logo.png'} alt={'alameda'} className="backed-by-component--logo"/>
          </a>
          <a target="_blank">
            <StaticImage src={'../assets/logos/cumberland-logo.png'} alt={'cumberland'} className="backed-by-component--logo"/>
          </a>
        </div>
      }
    </div>
    <div className="h-flex-row h-flex-row--space-between h-flex-row--align-center investors-list-component--cta-banner">
      <div className="investors-list-component--cta-banner--title">
        {isMobile ? <CTADividerSmall/> : <CTADivider/>}
        <span>Invest in the future of credit markets</span>
      </div>
      <CredixButton className="investors-list-component--button" url={''}>Register as an investor</CredixButton>
    </div>
  </>
)