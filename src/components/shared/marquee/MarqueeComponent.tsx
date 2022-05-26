import React from 'react';
import Marquee from 'react-fast-marquee';

export const MarqueeComponent = () => (
  <Marquee loop={0} speed={50} gradient={false}>
    <span style={{ marginLeft: '64px' }}>TVL:<b> 85 Million USDC</b></span>
    <span style={{ marginLeft: '64px' }}>Credit Outstanding:<b> 37 Million</b></span>
    <span style={{ marginLeft: '64px' }}>Average Financing Fee:<b> 14,8%</b></span>
    <span style={{ marginLeft: '64px' }}>TVL:<b> 85 Million USDC</b></span>
    <span style={{ marginLeft: '64px' }}>Credit Outstanding:<b> 37 Million</b></span>
    <span style={{ marginLeft: '64px' }}>Average Financing Fee:<b> 14,8%</b></span>
  </Marquee>

)
