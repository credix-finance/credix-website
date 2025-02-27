import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { CTADividerSmall } from "./dividers/CTADividerSmall";
import { CTADivider } from "./dividers/CTADivider";
import { IComponentProps } from "../../hooks/useComponentProps";
import { PopupButton } from "@typeform/embed-react";
import { CredixButton } from "../shared/buttons/CredixButton";

export const InvestorsList = ({ isMobile, isLightTheme }: IComponentProps) => (
	<>
		<div className="h-flex-column investors-list-component">
			<div className="h-flex-row h-flex-row--space-between investors-list-component--title-row">
				<span className="sub-title">Backed by</span>
			</div>
			{
				<div>
					<div className="h-flex-row investors-list-component--logo-row">
						<a target="_blank">
							{!isLightTheme ? (
								<StaticImage
									src={"../../assets/logos/motive-partners-light.png"}
									alt={"motive-partners"}
									className="backed-by-component--logo-big"
								/>
							) : (
								<StaticImage
									src={"../../assets/logos/motive-partners-dark.png"}
									alt={"motive-partners"}
									className="backed-by-component--logo-big"
								/>
							)}
						</a>
						<a target="_blank">
							{!isLightTheme ? (
								<StaticImage
									src={"../../assets/logos/valor-capital.png"}
									alt={"valor-capital"}
									className="backed-by-component--logo"
								/>
							) : (
								<StaticImage
									src={"../../assets/logos/valor-capital-white.png"}
									alt={"valor-capital"}
									className="backed-by-component--logo"
								/>
							)}
						</a>
						<a target="_blank">
							{!isLightTheme ? (
								<StaticImage
									src={"../../assets/logos/parafi_light.png"}
									alt={"parafi"}
									className="backed-by-component--logo"
								/>
							) : (
								<StaticImage
									src={"../../assets/logos/parafi.png"}
									alt={"parafi"}
									className="backed-by-component--logo"
								/>
							)}
						</a>
					</div>
					{/* <div className="h-flex-row  investors-list-component--logo-row">
						<a target="_blank">
							{!isLightTheme ? (
								<StaticImage
									src={"../../assets/logos/cumberland_light.png"}
									alt={"cumberland"}
									className="backed-by-component--logo"
								/>
							) : (
								<StaticImage
									src={"../../assets/logos/cumberland-logo.png"}
									alt={"cumberland"}
									className="backed-by-component--logo"
								/>
							)}
						</a>
						<a target="_blank">
							{!isLightTheme ? (
								<StaticImage
									src={"../../assets/logos/solana_ventures-black.png"}
									alt={"solana-ventures"}
									className="backed-by-component--logo"
								/>
							) : (
								<StaticImage
									src={"../../assets/logos/solana_ventures.png"}
									alt={"solana-ventures"}
									className="backed-by-component--logo"
								/>
							)}
						</a>
						<a target="_blank">
							{!isLightTheme ? (
								<StaticImage
									src={"../../assets/logos/fuse_light.png"}
									alt={"fuse"}
									className="backed-by-component--logo"
								/>
							) : (
								<StaticImage
									src={"../../assets/logos/fuse.png"}
									alt={"fuse"}
									className="backed-by-component--logo"
								/>
							)}
						</a>
					</div> */}
				</div>
			}
		</div>
		{/* <div className="h-flex-row h-flex-row--space-between h-flex-row--align-center investors-list-component--cta-banner">
			<div className="investors-list-component--cta-banner--title">
				{isMobile ? <CTADividerSmall /> : <CTADivider />}
				<span>Invest in the future of credit markets</span>
			</div>
			<CredixButton
				className="cta-component-investors--button"
				url={"https://app.credix.finance"}
			>
				Onboard as an investor
			</CredixButton>
		</div> */}
	</>
);
