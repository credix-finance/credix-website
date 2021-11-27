import React from 'react';
import { CredixButton } from './shared/buttons/CredixButton';

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
          <CredixButton className="platform-component--item-button">Borrow</CredixButton>
        </div>
        <div className="h-flex-column platform-component--item-column">
          <span className="platform-component--item-title">Liquidity Providers</span>
          <span className="platform-component--item-text">Stable return, flexibility to withdraw at any moment and invest in senior tranche = liquidity pool.</span>
          <CredixButton className="platform-component--item-button">Invest</CredixButton>
        </div>
        <div className="h-flex-column platform-component--item-column">
          <span className="platform-component--item-title">Underwriters</span>
          <span className="platform-component--item-text">HNI, PE and funds who get to choose the deal/credit to invest in, get higher returns in junior tranche and  better risk analysis.</span>
          <CredixButton className="platform-component--item-button">Invest</CredixButton>
        </div>
      </div>
    </div>
  )
}
