import React from 'react';
import Marquee from 'react-fast-marquee';

export const MarqueeComponent = () => (
  <Marquee loop={0} speed={50} gradient={false}>
    <span>TVL:<b> 85 Million USDC</b>&nbsp;&nbsp;&nbsp;</span>
    <span>Credit Outstanding:<b> 37 Million</b>&nbsp;&nbsp;&nbsp;</span>
    <span>Average Financing Fee:<b> 14,8%</b>&nbsp;&nbsp;&nbsp;</span>
  </Marquee>

)
