import React from "react";
import SvgIcon, { SVG_COLORS, SVG_ICONS } from "./shared/svg-icon/SvgIcon";
import { StaticImage } from "gatsby-plugin-image";
import { openInNewTab } from "../utils/openInNewTab";
import { Link } from "gatsby";
import { SocialButton } from "./shared/buttons/SocialButton";
import { IComponentProps } from "../hooks/useComponentProps";

export const FooterComponent = ({
	isMobile,
	isLightTheme,
}: IComponentProps) => {
	const mail = (e: any) => {
		window.location = "mailto:info@credix.finance" as unknown as Location;
		e.preventDefault();
	};

	return (
		<div className="h-flex-column footer-component">
			<div className="h-flex-row footer-component--row">
				{!isMobile && (
					<div className="h-flex-column footer-component--column">
						<SvgIcon
							icon={SVG_ICONS.CREDIX_LOGO}
							color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE}
							className="footer-component--logo"
						/>
						<div className="h-flex-row footer-component--footer">
							<span
								className="h-cursor-pointer footer-component--footer--link--small"
								onClick={mail}
							>
								Support
							</span>
							<span
								className="h-cursor-pointer footer-component--footer--link--small"
								onClick={() =>
									openInNewTab(
										"https://docs.credix.finance/other-links-and-resources/privacy-policy"
									)
								}
							>
								Privacy Policy
							</span>
						</div>
					</div>
				)}
				<div className="h-flex-column footer-component--column">
					{isMobile && (
						<SvgIcon
							icon={SVG_ICONS.CREDIX_LOGO_MOBILE}
							color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE}
							className="footer-component--logo"
						/>
					)}
					<div className="h-flex-column footer-component--padding">
						<span
							className="h-cursor-pointer footer-component--footer--link"
							onClick={() => openInNewTab("https://credipay.credix.finance")}
						>
							CrediPay
						</span>
						<span
							className="h-cursor-pointer footer-component--footer--link"
							onClick={() =>
								openInNewTab(
									"https://credix.notion.site/credix/EXT-Work-with-us-at-Credix-606913498d5a4f02949a641e738f9257"
								)
							}
						>
							Careers
						</span>
					</div>
				</div>
				<div className="h-flex-column footer-component--column">
					<span className="footer-component--footer--text">Find us on:</span>
					<div className="h-flex-row h-flex-row--align-start footer-component--social-buttons">
						<SocialButton
							icon={SVG_ICONS.LINKEDIN_FOOTER}
							className="h-cursor-pointer footer-component--social-buttons--logo"
							onClick={() =>
								openInNewTab("https://www.linkedin.com/company/credix-finance")
							}
							isLightTheme={isLightTheme}
						/>
						<SocialButton
							icon={SVG_ICONS.MEDIUM_FOOTER}
							className="h-cursor-pointer footer-component--social-buttons--logo"
							onClick={() =>
								openInNewTab("https://link.medium.com/n7tpQNpZyqb")
							}
							isLightTheme={isLightTheme}
						/>
						<SocialButton
							icon={SVG_ICONS.TWITTER_FOOTER}
							className="h-cursor-pointer"
							onClick={() =>
								openInNewTab(
									"https://twitter.com/Credix_finance?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
								)
							}
							isLightTheme={isLightTheme}
						/>
					</div>
					<div className="footer-component--mailchimp-row">
						<div>
							{isMobile && (
								<div className="h-flex-row footer-component--footer">
									<span
										className="h-cursor-pointer footer-component--footer--link--small"
										onClick={mail}
									>
										Support
									</span>
									<span
										className="h-cursor-pointer footer-component--footer--link--small"
										onClick={() =>
											openInNewTab(
												"https://docs.credix.finance/other-links-and-resources/privacy-policy"
											)
										}
									>
										Privacy Policy
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
