import React from "react";
import { CredixButton } from "./shared/buttons/CredixButton";

export const CTACredipayComponent = () => {
	return (
		<div className="h-flex-column cta-team-component credipay-wrapper">
			<div className="h-flex-row h-flex-row--space-between cta-team-component--row">
				<span className="h-flex-column">
					<span className="cta-team-component--title">
						Discover CrediPay, our B2B BNPL solution
					</span>
					<span className="cta-team-component--text">
						CrediPay is created to help business grow their sales and improve
						their cashflow efficiency through seamless and risk-free credit
						offering. Sellers offer their buyers flexible payment terms at an
						attractive price point and receive upfront payments. We manage and
						protect our clients from any credit & fraud risk, letting them focus
						only on what matters: increased sales and profitability.
					</span>
				</span>
				<span className="cta-team-component--button-column">
					<CredixButton
						className="cta-team-component--button margin-top-30"
						url={"https://credipay.credix.finance/"}
					>
						Learn more
					</CredixButton>
				</span>
			</div>
		</div>
	);
};
