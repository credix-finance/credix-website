import React from 'react';
import { PopupButton } from '@typeform/embed-react';

export const PlatformComponent = () => {
  return (
    <div className="h-flex-column platform-component">
      <div className="h-flex-row platform-component--about-row">
        <div className="h-flex-column">
          <span className="platform-component--about-text">About Credix</span>
          <span className="sub-title">The platform</span>
          <span className="platform-component--text">CREDIX is a decentralized credit platform that gives borrowers in emerging countries access to previously untapped capital. Our blockchain protocol provides credit lines to high-quality borrowers with an attractive yield for investors globally.</span>
        </div>
      </div>
      <div className="h-flex-row h-flex-row--space-between platform-component--items-row">
        <div className="h-flex-column platform-component--item-column">
          <span className="platform-component--item-title">Borrowers</span>
          <span className="platform-component--item-text">Credit fintechs in emerging markets with lending history get cheaper credit, less bureaucracy and shorter lead times.</span>
          <PopupButton id="XH8TF60V" className="credix-button--typeform platform-component--item-button">
            Borrow
          </PopupButton>
        </div>
        <div className="h-flex-column platform-component--item-column">
          <span className="platform-component--item-title">Liquidity Providers</span>
          <span className="platform-component--item-text">(Retail) investors invest in the liquidity pool, which diversifies across deals. Stable return and flexibility to withdraw at any moment.</span>
          <PopupButton id="E98Qjiw9" className="credix-button--typeform platform-component--item-button">
            Invest
          </PopupButton>
        </div>
        <div className="h-flex-column platform-component--item-column">
          <span className="platform-component--item-title">Underwriters</span>
          <span className="platform-component--item-text">Accredited investors (HNI, PE, funds...) who get to choose the deal/credit to invest in, get higher returns and better risk analysis.</span>
          <PopupButton id="E98Qjiw9" className="credix-button--typeform platform-component--item-button">
            Invest
          </PopupButton>
        </div>
      </div>
    </div>
  )
}
