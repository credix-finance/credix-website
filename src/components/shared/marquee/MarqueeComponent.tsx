import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

export const MarqueeComponent = () => {
  const [tvl, setTvl] = useState("");
  const [creditOutstanding, setCreditOutstanding] = useState("");
  const [trailingApy, setTrailingApy] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const marketStatsResult = await axios.get(
        "https://credix-market-stats.credix.workers.dev/?cached=True"
      );
      const marketStatsData = marketStatsResult.data;
      const trailingApyResult = await axios.get(
        "https://credix-30d-apy.credix.workers.dev"
      );
      const trailingApyData = trailingApyResult.data;

      const formattedTvl = Intl.NumberFormat("en", {
        notation: "compact",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      }).format(marketStatsData.TVL.uiAmount);
      const formattedCreditOutstanding = Intl.NumberFormat("en", {
        notation: "compact",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      }).format(marketStatsData.total_outstanding_credit.uiAmount);
      const formattedTrailingApy = (
        Math.round(
          trailingApyData["credix-marketplace"]["apy_30_d_trailing"] * 1000
        ) / 1000
      ).toString();

      setTvl(formattedTvl);
      setCreditOutstanding(formattedCreditOutstanding);
      setTrailingApy(formattedTrailingApy);
    };
    fetchData();
  }, []);

  return (
    <Marquee loop={0} speed={50} gradient={false}>
      <span style={{ marginLeft: "64px" }}>
        TVL:<b> {tvl ? `${tvl} USDC` : "..."}</b>
      </span>
      <span style={{ marginLeft: "64px" }}>
        Credit Outstanding:
        <b> {creditOutstanding ? `${creditOutstanding} USDC` : "..."}</b>
      </span>
      <span style={{ marginLeft: "64px" }}>
        30d Trailing APY:
        <b> {trailingApy ? `${trailingApy * 100} %` : "..."}</b>
      </span>
      <span style={{ marginLeft: "64px" }}>
        TVL:<b> {tvl ? `${tvl} USDC` : "..."}</b>
      </span>
      <span style={{ marginLeft: "64px" }}>
        Credit Outstanding:
        <b> {creditOutstanding ? `${creditOutstanding} USDC` : "..."}</b>
      </span>
      <span style={{ marginLeft: "64px" }}>
        30d Trailing APY:
        <b> {trailingApy ? `${trailingApy * 100} %` : "..."}</b>
      </span>
    </Marquee>
  );
};
