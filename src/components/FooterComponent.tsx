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
						<Link
							className="h-cursor-pointer footer-component--footer--link"
							to={"/investors"}
						>
							Investors
						</Link>
						<Link
							className="h-cursor-pointer footer-component--footer--link"
							to={"/borrowers"}
						>
							Borrowers
						</Link>
						<span
							className="h-cursor-pointer footer-component--footer--link"
							onClick={() => openInNewTab("https://credix.gitbook.io/credix")}
						>
							Documentation
						</span>
						<span
							className="h-cursor-pointer footer-component--footer--link"
							onClick={() => openInNewTab("https://angel.co/company/credix")}
						>
							Careers
						</span>
						<span
							className="h-cursor-pointer footer-component--footer--link"
							onClick={() => openInNewTab("https://status.credix.finance")}
						>
							Status
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
						<div className="footer-component--mailchimp-sub--logo-row">
							<span className="footer-component--footer--text">
								<a href="http://eepurl.com/hOHPIX" target="_blank">
									✉️ Subscribe to investor updates ✉️
								</a>
							</span>
						</div>
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
