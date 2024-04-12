import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { CredixButton } from "./shared/buttons/CredixButton";

export const CTAHomeComponent = () => {
	return (
		<div className="h-flex-column cta-component">
			<div className="h-flex-row">
				<span className="cta-component--title">
					Become part of the future <br /> of credit
				</span>
			</div>
			<div className="h-flex-row h-margin-top-50">
				<CredixButton
					className="cta-component--button--investor"
					url={"https://app.credix.finance"}
				>
					Onboard as an investor
				</CredixButton>
				<CredixButton
					className="cta-component--button--borrower"
					url={"https://share-eu1.hsforms.com/13OiNrrgQT0Gv2AF1cV52Uwfuste"}
				>
					Register as a borrower
				</CredixButton>
			</div>
		</div>
	);
};
