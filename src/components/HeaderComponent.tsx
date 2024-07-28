import React, { useEffect, useState } from "react";
import SvgIcon, { SVG_COLORS, SVG_ICONS } from "./shared/svg-icon/SvgIcon";
import { CredixButton } from "./shared/buttons/CredixButton";
import { IComponentProps } from "../hooks/useComponentProps";
import { Link } from "gatsby";
import { Drawer } from "@mui/material";
import { LightThemeButton } from "./shared/buttons/LightThemeButton";

enum EPage {
	HOME = "home",
	BORROWERS = "borrowers",
	INVESTORS = "investors",
}

const getActiveLink = (pathname?: string) => {
	if (pathname && pathname.includes(EPage.BORROWERS)) {
		return EPage.BORROWERS;
	}
	if (pathname && pathname.includes(EPage.INVESTORS)) {
		return EPage.INVESTORS;
	} else {
		return EPage.HOME;
	}
};

export const HeaderComponent = ({
	isMobile,
	isLightTheme,
	setLightTheme,
	...locationProps
}: IComponentProps) => {
	const { location } = locationProps;

	const [currentPage, setCurrentPage] = useState<string | undefined>(
		getActiveLink(location?.pathname)
	);

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>();

	useEffect(() => {
		setCurrentPage(getActiveLink(location?.pathname));
	}, [location]);

	const mail = (e: any) => {
		window.location = "mailto:info@credix.finance" as unknown as Location;
		e.preventDefault();
	};

	const headerLinks = () => {
		return (
			<>
				<Link
					className="header-component--link"
					to={"https://credipay.credix.finance/"}
					target="_blank"
				>
					CrediPay
				</Link>
				{/* <div
					className="header-component--link"
					style={{
						marginTop:
							!isMobile && currentPage === EPage.INVESTORS ? "12px" : 0,
					}}
				>
					<Link className="header-component--link--gatsby" to={"/investors"}>
						Investors
					</Link>
					{!isMobile && currentPage === EPage.INVESTORS && (
						<div className="header-component--link--active" />
					)}
				</div>
				<div
					className="header-component--link"
					style={{
						marginTop:
							!isMobile && currentPage === EPage.BORROWERS ? "12px" : 0,
					}}
				>
					<Link className="header-component--link--gatsby" to={"/borrowers"}>
						Borrowers
					</Link>
					{!isMobile && currentPage === EPage.BORROWERS && (
						<div className="header-component--link--active" />
					)}
				</div> */}
				<Link
					className="header-component--link"
					to={"https://medium.com/credix"}
					target="_blank"
				>
					Blog
				</Link>
				{/* <Link
					className="header-component--link"
					to={"https://share-eu1.hsforms.com/1jAAAMPCdTpOl9Sx_K_7HrAfuste"}
					target="_blank"
				>
					Newsletter
				</Link> */}
				<Link
					className="header-component--link"
					to={
						"https://credix.notion.site/Work-with-us-at-Credix-606913498d5a4f02949a641e738f9257"
					}
					target="_blank"
				>
					Careers
				</Link>
				{/* <Link
					className="header-component--link"
					to={"https://docs.credix.finance"}
					target="_blank"
				>
					Docs
				</Link> */}
				{/* <CredixButton
					className={`header--links--button ${
						isLightTheme ? "h-color-white" : "h-color-black"
					}`}
					url={"https://app.credix.finance/"}
				>
					Invest
				</CredixButton>
				{!isMobile && (
					<LightThemeButton
						isLightTheme={isLightTheme}
						onChange={(bool) => setLightTheme && setLightTheme(bool)}
					/>
				)} */}
			</>
		);
	};

	return (
		<div className="h-flex-column header-component">
			<div className="h-flex-row h-flex-row--space-between header">
				<SvgIcon
					icon={SVG_ICONS.CREDIX_LOGO}
					className="h-cursor-pointer"
					color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE}
					onClick={() => (window.location = ".." as unknown as Location)}
				/>
				<div className="h-flex-row h-flex-row--flex-end h-flex-row--align-center header--links">
					{isMobile ? (
						<SvgIcon
							icon={SVG_ICONS.HAMBURGER_MENU}
							color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE}
							className="header-component--menu-button"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						/>
					) : (
						headerLinks()
					)}
				</div>
				<Drawer
					anchor={"right"}
					open={isMenuOpen}
					onClose={() => setIsMenuOpen(false)}
					className={`header-component--drawer ${
						isLightTheme
							? "h-background-color-white"
							: "h-background-color-black"
					}`}
				>
					<div className="h-flex-row h-flex-column--align-end h-flex-row--space-between header-component--icons">
						<SvgIcon
							icon={SVG_ICONS.CREDIX_LOGO_MOBILE}
							color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE}
							className="header-component--logo"
							onClick={() => (window.location = ".." as unknown as Location)}
						/>
						<div className="h-flex-row h-flex-row--align-baseline">
							{isMobile && (
								<LightThemeButton
									isLightTheme={isLightTheme}
									onChange={(bool) => setLightTheme && setLightTheme(bool)}
								/>
							)}
							<SvgIcon
								icon={SVG_ICONS.CLOSE_MENU}
								color={isLightTheme ? SVG_COLORS.BLACK : SVG_COLORS.WHITE}
								className="header-component--menu-close-button"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							/>
						</div>
					</div>
					<div
						className="h-flex-column header-component--drawer--links-column"
						style={{ color: isLightTheme ? "black" : "white" }}
					>
						{headerLinks()}
					</div>
				</Drawer>
			</div>
		</div>
	);
};
