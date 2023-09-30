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
			const marketStatsFintechResult = await axios.get(
				"https://credix-market-stats.credix.workers.dev/?cached=True"
			);
			const marketStatsFintechData = marketStatsFintechResult.data;
			const marketStatsReceivablesResult = await axios.get(
				"https://credix-market-stats.credix.workers.dev/?market=receivables-factoring&cached=True"
			);
			const marketStatsReceivablesData = marketStatsReceivablesResult.data;

			const marketStatsVariantResult = await axios.get(
				"https://credix-market-stats.credix.workers.dev/?market=variant&cached=True"
			);
			const marketStatsVariantData = marketStatsVariantResult.data;

			const TVL =
				marketStatsFintechData.TVL +
				marketStatsReceivablesData.TVL +
				marketStatsVariantData.TVL;
			const totalOutstandingCredit =
				marketStatsFintechData.total_outstanding_credit +
				marketStatsReceivablesData.total_outstanding_credit +
				marketStatsVariantData.total_outstanding_credit;
			const interestRepaid =
				marketStatsFintechData.interest_repaid +
				marketStatsReceivablesData.interest_repaid +
				marketStatsVariantData.interest_repaid;

			const formattedTvl = Intl.NumberFormat("en", {
				notation: "compact",
				minimumFractionDigits: 0,
				maximumFractionDigits: 1,
			}).format(TVL);
			const formattedCreditOutstanding = Intl.NumberFormat("en", {
				notation: "compact",
				minimumFractionDigits: 0,
				maximumFractionDigits: 1,
			}).format(totalOutstandingCredit);
			const formattedTrailingApy90d =
				Math.round(marketStatsFintechData["apy_90_d_trailing"] * 1000) / 1000;
			const formattedTotalInterestRepaid = Intl.NumberFormat("en", {
				notation: "compact",
				minimumFractionDigits: 0,
				maximumFractionDigits: 1,
			}).format(interestRepaid);

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
