import * as React from "react";
import { IComponentProps } from "../../hooks/useComponentProps";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GradientVideo from "../../assets/video/Credix_GradientD_500x400_01.mp4";
import { VideoComponent } from "../shared/video/VideoComponent";
import { PopupButton } from "@typeform/embed-react";
import { CredixButton } from "../shared/buttons/CredixButton";
import { StaticImage } from "gatsby-plugin-image";

export const BorrowersHomeComponent = ({
	isMobile,
	isTablet,
}: IComponentProps) => {
	const homeText = () => (
		<div className="h-flex-column home-component-borrowers--text">
			<h1 className="cta-block-borrowers--title">
				Borrow <br /> at attractive rates
			</h1>
			<span className="cta-block-borrowers--text">
				Get access to better credit with lower cost of capital and shorter lead
				times
			</span>
			<br></br>
			<CredixButton
				className="cta-component--button--investor"
				url={"https://share-eu1.hsforms.com/13OiNrrgQT0Gv2AF1cV52Uwfuste"}
			>
				Register as a borrower
			</CredixButton>
		</div>
	);

	return (
		<div className="h-flex-column home-component-borrowers">
			<div className="h-flex-row cta-block h-flex-row--space-between home-component-borrowers--wrapper">
				{isMobile ? (
					<>
						<div className="gradient-red" />
						{homeText()}
					</>
				) : (
					<>
						{homeText()}
						<div className="gradient-red" />
					</>
				)}
			</div>
		</div>
	);
};
