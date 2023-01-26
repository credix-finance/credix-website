import * as React from "react";
import SvgIcon, { SVG_ICONS } from "../shared/svg-icon/SvgIcon";
import { StaticImage } from "gatsby-plugin-image";
import { IComponentProps } from "../../hooks/useComponentProps";
import { PopupButton } from "@typeform/embed-react";
import { CredixButton } from "../shared/buttons/CredixButton";

export const InvestorsHomeComponent = ({ isMobile }: IComponentProps) => {
	return (
		<div className="h-flex-column home-component-investors">
			{isMobile ? (
				<StaticImage
					className="home-component-investors--background-shape--mobile"
					src="../../assets/shapes/home-background-shape-investors_mobile.png"
					alt="background"
				/>
			) : (
				<SvgIcon
					className="home-component-investors--background-shape"
					icon={SVG_ICONS.HOME_BACKGROUND_SHAPE_INVESTORS}
				/>
			)}
			<div className="h-flex-row cta-block">
				<div className="h-flex-column">
					<h1 className="cta-block-investors--title">
						Invest <br /> With Credix
					</h1>
					<span className="cta-block-investors--text">
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
			</div>
		</div>
	);
};
