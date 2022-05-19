import React from 'react';
import { IWidthProps } from '../../../pages';

export const Marquee = ({ isMobile }: IWidthProps) => (
  <div className="marquee-container">
    <div className="marquee h-flex-row--space-around">
      <span>TVL:<b> 85 Million USDC</b></span>
      <span>Credit Outstanding:<b> 37 Million</b></span>
      <span>Average Financing Fee:<b> 14,8%</b></span>
    </div>
    {
      !isMobile && (
        <div className="marquee marquee-delayed h-flex-row--space-around">
          <span>TVL:<b>85 Million USDC</b></span>
          <span>Credit Outstanding:<b>37 Million</b></span>
          <span>Average Financing Fee:<b>14,8%</b></span>
        </div>
      )
    }
  </div>
)