import React from 'react';
import { CTADivider } from './dividers/CTADivider';
import { openInNewTab } from '../../utils/openInNewTab';

export const InvestorsCTAComponent = () => (
  <div className="h-flex-column cta-component-investors">
    <div className="h-flex-row h-flex-row--space-between cta-component-investors--row">
      <div className="h-flex-column cta-component-investors--column">
        <div className="h-flex-column cta-component-investors--column--row-mobile">
          <span className="cta-component-investors--sub-title">Enhance Yield</span>
          <CTADivider/>
          <span className="cta-component-investors--text">Access sustainable returns generated by cash flows of real-world assets.</span>
        </div>
      </div>
      <div className="h-flex-column cta-component-investors--column">
        <div className="h-flex-column cta-component-investors--column--row-mobile">
          <span className="cta-component-investors--sub-title">Diversify Risk</span>
          <CTADivider/>
          <span className="cta-component-investors--text">We provide low sensitivity to equity and crypto markets.</span>
        </div>
      </div>
      <div className="h-flex-column cta-component-investors--column">
        <div className="h-flex-column cta-component-investors--column--row-mobile">
          <span className="cta-component-investors--sub-title">Scalable Ecosystem</span>
          <CTADivider/>
          <span className="cta-component-investors--text">Via the Credix platform, you can access investments via a digital-first platform.</span>
        </div>
      </div>
    </div>
    <div className="h-flex-column cta-component--investors">
      <div className="h-flex-row h-flex-row--space-between cta-component-investors--row">
        <div className="h-flex-column cta-component-investors--column">
          <div className="h-flex-column cta-component-investors--column--row-mobile">
            <span
              className="cta-component-investors--text--cta-link" onClick={() => openInNewTab('https://docs.credix.finance/')}>Read our documentation -{'>'}</span>
          </div>
        </div>
        <div className="h-flex-column cta-component-investors--column"/>
        <div className="h-flex-column cta-component-investors--column"/>
      </div>
    </div>
  </div>
);
