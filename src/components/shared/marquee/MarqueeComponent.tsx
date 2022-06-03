import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import axios from 'axios';

export const MarqueeComponent = () => {
  const [tvl, setTvl] = useState('');
  const [creditOutstanding, setCreditOutstanding] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const result = await axios.get('https://api.credix.finance/stats/markets/credix-marketplace');
      const { data } = result;

      const formattedTvl = Intl.NumberFormat('en', {
        notation: 'compact',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
      }).format(data.liquidity_pool_amount.uiAmount + data.total_outstanding_credit.uiAmount);
      const formattedCreditOutstanding = Intl.NumberFormat('en', {
        notation: 'compact',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
      }).format(data.total_outstanding_credit.uiAmount);

      setTvl(formattedTvl);
      setCreditOutstanding(formattedCreditOutstanding);
    }
    fetchData();
  }, [])

  return (
    <Marquee loop={0} speed={50} gradient={false}>
      <span style={{ marginLeft: '64px' }}>TVL:<b> {tvl ? `${tvl} USDC` : '...'}</b></span>
      <span style={{ marginLeft: '64px' }}>Credit Outstanding:<b> {creditOutstanding ? `${creditOutstanding} USDC` : '...'}</b></span>
      <span style={{ marginLeft: '64px' }}>Liquidity Pool APY:<b> 13,5%</b></span>
      <span style={{ marginLeft: '64px' }}>TVL:<b> {tvl ? `${tvl} USDC` : '...'}</b></span>
      <span style={{ marginLeft: '64px' }}>Credit Outstanding:<b> {creditOutstanding ? `${creditOutstanding} USDC` : '...'}</b></span>
      <span style={{ marginLeft: '64px' }}>Liquidity Pool APY:<b> 13,5%</b></span>
    </Marquee>

  );
}
