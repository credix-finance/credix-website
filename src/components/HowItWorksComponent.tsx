import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const HowItWorksComponent = () => {
  return (
    <div className="h-flex-column h-flex-column--align-center how-it-works-component">
      <StaticImage className="how-it-works-component--shape" src="../assets/shapes/how-it-works.png" alt="how it works"/>
      <div className="h-flex-row how-it-works-component--row-title">
        <span className="sub-title">How it works</span>
      </div>
      <div className="h-flex-row how-it-works-component--row">
        <div className="h-flex-column">
          <StaticImage className="how-it-works-component--sub-shape" src="../assets/shapes/how-it-works-1.png" alt="borrower creates deal"/>
        </div>
        <div className="h-flex-column">
          <span className="how-it-works-component--sub-title">
            Borrower creates deal
          </span>
          <span className="how-it-works-component--text">
            Borrower creates a deal on the Credix platform. Each deal has its own parameters such as principal amount, financing fee, time to maturity, etc.
          </span>
        </div>
      </div>
      <div className="h-flex-row how-it-works-component--row">
        <div className="h-flex-column">
          <StaticImage className="how-it-works-component--sub-shape" src="../assets/shapes/how-it-works-2.png" alt="borrower creates deal"/>
        </div>
        <div className="h-flex-column">
          <span className="how-it-works-component--sub-title">
            Deal is accepted
          </span>
          <span className="how-it-works-component--text">
            After performing due dilligence on the specific deal, the underwriters stake USDC, and underwrite the deal.
          </span>
        </div>
      </div>
      <div className="h-flex-row how-it-works-component--row">
        <div className="h-flex-column">
          <StaticImage className="how-it-works-component--sub-shape" src="../assets/shapes/how-it-works-3.png" alt="borrower creates deal"/>
        </div>
        <div className="h-flex-column">
          <span className="how-it-works-component--sub-title">
            Deal goes live
          </span>
          <span className="how-it-works-component--text">
            The remainder of the deal is automatically funded by the liquidity pool. The deal goes live and the borrower receives the principal amount in USDC.
          </span>
        </div>
      </div>
      <div className="h-flex-row how-it-works-component--row">
        <div className="h-flex-column">
          <StaticImage className="how-it-works-component--sub-shape" src="../assets/shapes/how-it-works-4.png" alt="borrower creates deal"/>
        </div>
        <div className="h-flex-column">
          <span className="how-it-works-component--sub-title">
            Deal repayment
          </span>
          <span className="how-it-works-component--text">
            The borrower performs repayments, leading to attractive yields for the underwriters and liquidity providers.
          </span>
        </div>
      </div>
    </div>
  )
}
