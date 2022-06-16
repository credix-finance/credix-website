import React from 'react';
import { BorrowersCTADivider } from './dividers/BorrowersCTADivider';
import { CredixButton } from '../shared/buttons/CredixButton';
import { openInNewTab } from '../../utils/openInNewTab';

export const BorrowersCTAComponent = () => (
  <div className="h-flex-column cta-component-borrowers">
    <div className="h-flex-row h-flex-row--space-between cta-component-borrowers--row">
      <div className="h-flex-column cta-component-borrowers--column">
        <div className="h-flex-column cta-component-borrowers--column--row-mobile">
          <span className="cta-component-borrowers--sub-title">DEFI 2.0</span>
          <BorrowersCTADivider/>
          <span className="cta-component-borrowers--text">Our digital native platform lets you access capital within weeks.</span>
        </div>
      </div>
      <div className="h-flex-column cta-component-borrowers--column">
        <div className="h-flex-column cta-component-borrowers--column--row-mobile">
          <span className="cta-component-borrowers--sub-title">Save on costs</span>
          <BorrowersCTADivider/>
          <span className="cta-component-borrowers--text">Save up to 300bps depending on the deal size.</span>
        </div>
      </div>
      <div className="h-flex-column cta-component-borrowers--column">
        <div className="h-flex-column cta-component-borrowers--column--row-mobile">
          <span className="cta-component-borrowers--sub-title">Access untapped liquidity</span>
          <BorrowersCTADivider/>
          <span className="cta-component-borrowers--text">Get access to institutional capital via our ecosystem of global investors.</span>
        </div>
      </div>
    </div>
    <div className="h-flex-column cta-component--borrowers">
      <div className="h-flex-row h-flex-row--space-between cta-component-borrowers--row">
        <div className="h-flex-column cta-component-borrowers--column">
          <div className="h-flex-column cta-component-borrowers--column--row-mobile">
            <CredixButton className="cta-component-borrowers--button" url={'https://app.credix.finance/'}>Launch App</CredixButton>
            <span className="cta-component-borrowers--text--cta-link" onClick={() => openInNewTab('https://docs.credix.finance/')}>Read our documentation -{'>'}</span>
          </div>
        </div>
        <div className="h-flex-column cta-component-borrowers--column"/>
        <div className="h-flex-column cta-component-borrowers--column"/>
      </div>
    </div>
  </div>
);
