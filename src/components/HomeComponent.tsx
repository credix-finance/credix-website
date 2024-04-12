import * as React from "react";
import { CredixButton } from "./shared/buttons/CredixButton";
import { IComponentProps } from "../hooks/useComponentProps";
// @ts-ignore
import GradientVideo from "../assets/video/Credix_WebsiteGradientA_02.mp4";
import { VideoComponent } from "./shared/video/VideoComponent";
import { StaticImage } from "gatsby-plugin-image";
import { initScrollFade, scrollFade } from "../utils/scrollfade";

export const HomeComponent = ({ isMobile }: IComponentProps) => {
	const homeText = () => (
		<div className="h-flex-column home-component--text">
			<h1 className="cta-block--title">
				We are the <br />
				next generation <br />
				credit network
			</h1>
			<span className="cta-block--text">
				Growing businesses in Latin America
			</span>
			{/* <CredixButton
				className="cta-block--button"
				url={"https://app.credix.finance/"}
			>
				Investment opportunities
			</CredixButton> */}
		</div>
	);

	initScrollFade();
	scrollFade();

	return (
		<div className="h-flex-column home-component">
			<div className="h-flex-row cta-block h-flex-row--align-center h-flex-row--space-between home-component--wrapper">
				{/* <div className="h-flex-row cta-block scrollFade h-flex-row--space-between home-component--wrapper"></div> */}
				{isMobile ? (
					<>
						<StaticImage
							src={"../assets/shapes/Credix_Portal.png"}
							alt={"Credix Portal"}
							className="gradient"
						/>
						{/* <VideoComponent video={GradientVideo} /> */}
						{homeText()}
					</>
				) : (
					<>
						{homeText()}
						{/* <VideoComponent video={GradientVideo} /> */}
						<StaticImage
							src={"../assets/shapes/Credix_Portal.png"}
							alt={"Credix Portal"}
							className="gradient"
						/>
					</>
				)}
			</div>
			{/*<div className="h-flex-row home-component--arrow-row" id="journey">*/}
			{/*  <a href="#journey" className="home-component--arrow"/>*/}
			{/*</div>*/}
		</div>
	);
};
