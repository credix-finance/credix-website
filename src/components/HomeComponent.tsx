import * as React from "react";
import { CredixButton } from "./shared/buttons/CredixButton";
import { IComponentProps } from "../hooks/useComponentProps";
// @ts-ignore
import GradientVideo from "../assets/video/Credix_WebsiteGradientA_02.mp4";
import { VideoComponent } from "./shared/video/VideoComponent";
import { initScrollFade, scrollFade } from "../utils/scrollfade";

export const HomeComponent = ({ isMobile }: IComponentProps) => {
	const homeText = () => (
		<div className="h-flex-column home-component--text">
			<h1 className="cta-block--title">
				Credit investing
				<br /> made global
			</h1>
			<span className="cta-block--text">
				Building the future of global credit markets
			</span>
			<CredixButton
				className="cta-block--button"
				url={"https://app.credix.finance/"}
			>
				Investment opportunities
			</CredixButton>
		</div>
	);

	initScrollFade();
	scrollFade();

	return (
		<div className="h-flex-column home-component">
			<div className="h-flex-row cta-block scrollFade h-flex-row--space-between home-component--wrapper">
				{isMobile ? (
					<>
						<VideoComponent video={GradientVideo} />
						{homeText()}
					</>
				) : (
					<>
						{homeText()}
						<VideoComponent video={GradientVideo} />
					</>
				)}
			</div>
			{/*<div className="h-flex-row home-component--arrow-row" id="journey">*/}
			{/*  <a href="#journey" className="home-component--arrow"/>*/}
			{/*</div>*/}
		</div>
	);
};
