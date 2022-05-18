import React from 'react';
import { CTADivider } from './dividers/CTADivider';
import { openInNewTab } from '../../pages';
import { CredixButton } from '../shared/buttons/CredixButton';

export const CTAComponent = () => {
  const handleReadDocumentationClick = () => {
    openInNewTab('https://docs.credix.finance/')
  }

  return (
    <div className="h-flex-column cta-component-borrowers">
      <div className="h-flex-row h-flex-row--space-between cta-component-borrowers--row">
        <div className="h-flex-column cta-component-borrowers--column">
          <div className="h-flex-column cta-component-borrowers--column--row-mobile">
            <span className="cta-component-borrowers--sub-title">Lightning capital</span>
            <CTADivider/>
            <span className="cta-component-borrowers--text">Our digital native platform and investment experience makes the transaction lifecycle, - execution and - management much quicker and simpler. You can access capital within weeks.</span>
          </div>
        </div>
        <div className="h-flex-column cta-component-borrowers--column">
          <div className="h-flex-column cta-component-borrowers--column--row-mobile">
            <span className="cta-component-borrowers--sub-title">Save on costs</span>
            <CTADivider/>
            <span className="cta-component-borrowers--text">Cost savings on deal structuring, transaction execution, and legal contracting could be up to 300bps depending on the deal size.</span>
          </div>
        </div>
        <div className="h-flex-column cta-component-borrowers--column">
          <div className="h-flex-column cta-component-borrowers--column--row-mobile">
            <span className="cta-component-borrowers--sub-title">Access untapped liquidity</span>
            <CTADivider/>
            <span className="cta-component-borrowers--text">Via the Credix platform, you get access to a massive amount of global retail and institutional capital locked into the crypto & defi world.</span>
          </div>
        </div>
      </div>
      <div className="h-flex-column cta-component--borrowers">
        <div className="h-flex-row h-flex-row--space-between cta-component-borrowers--row">
          <div className="h-flex-column cta-component-borrowers--column">
            <div className="h-flex-column cta-component-borrowers--column--row-mobile">
              <CredixButton className="cta-component-borrowers--button" url={'https://app.credix.finance/'}>Launch App</CredixButton>
              <span
                className="cta-component-borrowers--text--cta-link" onClick={handleReadDocumentationClick}>Read our documentation -{'>'}</span>
            </div>
          </div>
          <div className="h-flex-column cta-component-borrowers--column"/>
          <div className="h-flex-column cta-component-borrowers--column"/>
        </div>
      </div>
    </div>
  );
}







