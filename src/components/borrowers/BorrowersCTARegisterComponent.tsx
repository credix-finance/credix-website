import { BorrowersCTADividerSmall } from "./dividers/BorrowersCTADividerSmall";
import { BorrowersCTADivider } from "./dividers/BorrowersCTADivider";
import React from "react";
import { IComponentProps } from "../../hooks/useComponentProps";
import { PopupButton } from "@typeform/embed-react";
import { CredixButton } from "../shared/buttons/CredixButton";

export const BorrowersCTARegisterComponent = ({
	isMobile,
}: IComponentProps) => (
	<div className="h-flex-row h-flex-row--space-between h-flex-row--align-center cta-register-borrower-component--cta-banner">
		<div className="cta-register-borrower-component--cta-banner--title">
			{isMobile ? <BorrowersCTADividerSmall /> : <BorrowersCTADivider />}
			<span>Be part of the journey</span>
		</div>
		<CredixButton
			className="cta-component--button--borrower"
			url={"https://share-eu1.hsforms.com/13OiNrrgQT0Gv2AF1cV52Uwfuste"}
		>
			Register as a borrower
		</CredixButton>
	</div>
);
