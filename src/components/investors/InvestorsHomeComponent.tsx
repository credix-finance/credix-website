import * as React from "react";
import SvgIcon, { SVG_ICONS } from "../shared/svg-icon/SvgIcon";
import { StaticImage } from "gatsby-plugin-image";
import { IComponentProps } from "../../hooks/useComponentProps";
import { PopupButton } from "@typeform/embed-react";
import { CredixButton } from "../shared/buttons/CredixButton";

export const InvestorsHomeComponent = ({
	isMobile,
	isTablet,
}: IComponentProps) => {
	const homeText = () => (
		<div className="h-flex-column home-component-borrowers--text">
			<h1 className="cta-block-borrowers--title">
				Invest <br /> With Credix
			</h1>
			<span className="cta-block-borrowers--text">
				Private debt investments with sustainable, non-crypto correlated
				returns, backed by real-world assets
			</span>
			<br></br>
			<CredixButton
				className="cta-component--button--investor"
				url={"https://app.credix.finance"}
			>
				Onboard as an investor
			</CredixButton>
		</div>
	);

	return (
		<div className="h-flex-column home-component-borrowers">
			<div className="h-flex-row cta-block h-flex-row--space-between home-component-borrowers--wrapper">
				{isMobile ? (
					<>
						<div className="gradient-blue" />
						{homeText()}
					</>
				) : (
					<>
						{homeText()}
						<div className="gradient-blue" />
					</>
				)}
			</div>
		</div>
	);
};
