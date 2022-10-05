import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { CredixButton } from "./shared/buttons/CredixButton";

export const CTAHomeComponent = () => {
	return (
		<div className="h-flex-column cta-component">
			<div className="h-flex-row">
				<span className="cta-component--title">
					Become part of the future <br /> of private credit markets
				</span>
			</div>
			<div className="h-flex-row h-margin-top--auto">
				<CredixButton
					className="cta-component--button cta-component--button--investor"
					url={"https://app.credix.finance"}
				>
					Onboard as an investor
				</CredixButton>
				<PopupButton
					id="Mtgs2OJ9"
					className="credix-button--typeform cta-component--button cta-component--button--borrower"
				>
					Register as a borrower
				</PopupButton>
			</div>
		</div>
	);
};
