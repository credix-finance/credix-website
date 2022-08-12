import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

export const MarqueeComponent = () => {
  const [tvl, setTvl] = useState("");
  const [creditOutstanding, setCreditOutstanding] = useState("");
  const [financingFee, setFinancingFee] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://credix-market-stats.credix.workers.dev/?cached=True"
      );
      const { data } = result;
      const formattedTvl = Intl.NumberFormat("en", {
        notation: "compact",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      }).format(data.TVL.uiAmount);
      const formattedCreditOutstanding = Intl.NumberFormat("en", {
        notation: "compact",
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      }).format(data.total_outstanding_credit.uiAmount);
      const formattedFinancingFee = (
        Math.round(data.weighted_average_financing_fee * 1000) / 1000
      ).toString();

      setTvl(formattedTvl);
      setCreditOutstanding(formattedCreditOutstanding);
      setFinancingFee(formattedFinancingFee);
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
        Average financing fee:
        <b> {financingFee ? `${financingFee * 100} %` : "..."}</b>
      </span>
      <span style={{ marginLeft: "64px" }}>
        TVL:<b> {tvl ? `${tvl} USDC` : "..."}</b>
      </span>
      <span style={{ marginLeft: "64px" }}>
        Credit Outstanding:
        <b> {creditOutstanding ? `${creditOutstanding} USDC` : "..."}</b>
      </span>
      <span style={{ marginLeft: "64px" }}>
        Average financing fee:
        <b> {financingFee ? `${financingFee * 100} %` : "..."}</b>
      </span>
    </Marquee>
  );
};
