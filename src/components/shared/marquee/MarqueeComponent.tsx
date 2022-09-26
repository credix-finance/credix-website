import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";

export const MarqueeComponent = () => {
	const [tvl, setTvl] = useState("");
	const [creditOutstanding, setCreditOutstanding] = useState();
	const [trailingApy90d, setTrailingApy90d] = useState();
	const [totalInterestRepaid, setTotalInterestRepaid] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const marketStatsResult = await axios.get(
				"https://credix-market-stats.credix.workers.dev/?cached=True"
			);
			const marketStatsData = marketStatsResult.data;
			const trailingApyResult = await axios.get(
				"https://credix-trailing-apy.credix.workers.dev"
			);
			const trailingApyData = trailingApyResult.data;

			const formattedTvl = Intl.NumberFormat("en", {
				notation: "compact",
				minimumFractionDigits: 0,
				maximumFractionDigits: 1,
			}).format(marketStatsData.TVL);
			const formattedCreditOutstanding = Intl.NumberFormat("en", {
				notation: "compact",
				minimumFractionDigits: 0,
				maximumFractionDigits: 1,
			}).format(marketStatsData.total_outstanding_credit);
			const formattedTrailingApy90d =
				Math.round(
					trailingApyData["credix-marketplace"]["apy_90_d_trailing"] * 1000
				) / 1000;
			const formattedTotalInterestRepaid = Intl.NumberFormat("en", {
				notation: "compact",
				minimumFractionDigits: 0,
				maximumFractionDigits: 1,
			}).format(marketStatsData.interest_repaid);

			setTvl(formattedTvl);
			setCreditOutstanding(formattedCreditOutstanding);
			setTrailingApy90d(formattedTrailingApy90d);
			setTotalInterestRepaid(formattedTotalInterestRepaid);
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
				Interest Repaid:
				<b> {totalInterestRepaid ? `${totalInterestRepaid} USDC` : "..."}</b>
			</span>
			<span style={{ marginLeft: "64px" }}>
				90d Trailing APY:
				<b>
					{" "}
					{trailingApy90d
						? `${Math.round(trailingApy90d * 1000) / 10} %`
						: "..."}
				</b>
			</span>
			<span style={{ marginLeft: "64px" }}>
				TVL:<b> {tvl ? `${tvl} USDC` : "..."}</b>
			</span>
			<span style={{ marginLeft: "64px" }}>
				Credit Outstanding:
				<b> {creditOutstanding ? `${creditOutstanding} USDC` : "..."}</b>
			</span>
			<span style={{ marginLeft: "64px" }}>
				Interest Repaid:
				<b> {totalInterestRepaid ? `${totalInterestRepaid} USDC` : "..."}</b>
			</span>
			<span style={{ marginLeft: "64px" }}>
				90d Trailing APY:
				<b>
					{" "}
					{trailingApy90d
						? `${Math.round(trailingApy90d * 1000) / 10} %`
						: "..."}
				</b>
			</span>
		</Marquee>
	);
};
