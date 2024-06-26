import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { StaticImage } from "gatsby-plugin-image";
import { PopupButton } from "@typeform/embed-react";
import { IComponentProps } from "../hooks/useComponentProps";
import { openInNewTab } from "../utils/openInNewTab";
import { CredixButton } from "./shared/buttons/CredixButton";

export const ParallaxComponent = ({
	isMobile,
	isLightTheme,
}: IComponentProps) => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const minOpacity = 15;
	const baseMargin = 50;
	const marginMoveSpeed = 15 * Math.log(scrollY);

	const firstImageStyle = () => {
		const highLightTargetScroll = 480;
		const opacity =
			100 -
			Math.abs(
				(scrollY - highLightTargetScroll) / (0.3 * highLightTargetScroll)
			) *
				100;
		const margin = baseMargin - marginMoveSpeed;

		return {
			marginTop: margin + "px",
			opacity: (opacity > minOpacity ? opacity : minOpacity) + "%",
		};
	};

	const secondImageStyle = () => {
		const highLightTargetScroll = 720;
		const opacity =
			100 -
			Math.abs(
				(scrollY - highLightTargetScroll) / (0.3 * highLightTargetScroll)
			) *
				100;
		const margin = baseMargin + 80 - 1.2 * marginMoveSpeed;

		return {
			marginTop: margin + "px",
			opacity: (opacity > minOpacity ? opacity : minOpacity) + "%",
		};
	};

	const thirdImageStyle = () => {
		const highLightTargetScroll = 1000;
		const opacity =
			100 -
			Math.abs(
				(scrollY - highLightTargetScroll) / (0.3 * highLightTargetScroll)
			) *
				100;
		const margin = baseMargin + 150 - 1.3 * marginMoveSpeed;

		return {
			marginTop: margin + "px",
			opacity: (opacity > minOpacity ? opacity : minOpacity) + "%",
		};
	};

	const visionComponent = () => (
		<>
			<div className="parallax-component-item">
				<span className="parallax-component--child-scroll--title">
					Credit & Capital Markets Infrastructure
				</span>
				<hr className="solid" />
				<span className="parallax-component--child-scroll--text">
					Our next-generation platform, featuring AI and Blockchain, offers
					flexible embedded financing options. We allow SMEs to pay on their own
					terms while merchants are paid out right away
				</span>
			</div>
		</>
	);

	const investorsComponent = () => (
		<>
			<div className="parallax-component-item">
				<span className="parallax-component--child-scroll--title">
					Consumer Grade Experience
				</span>
				<hr className="solid" />
				<span className="parallax-component--child-scroll--text">
					We offer a top-notch user experience and next-level customer
					engagement. Our underwriting is instant, integration is seamless, and
					capital settles in real-time.
				</span>
			</div>
			{/* <span
				className="parallax-component--child-scroll--cta-link"
				onClick={() => openInNewTab("https://docs.credix.finance/")}
			>
				Read our documentation -{">"}
			</span>
			<br />
			<CredixButton
				className="cta-component--button cta-component--button--investor"
				url={"https://app.credix.finance"}
			>
				Onboard as an investor
			</CredixButton> */}
		</>
	);

	const borrowerComponent = () => (
		<>
			<span className="parallax-component--child-scroll--title">
				For Borrowers
			</span>
			<hr className="solid" />
			<span className="parallax-component--child-scroll--text">
				Credit fintechs and non-bank loan originators in emerging markets can
				raise debt funding internationally with less friction and at attractive
				rates.
			</span>
			<span
				className="parallax-component--child-scroll--cta-link"
				onClick={() => openInNewTab("https://docs.credix.finance/")}
			>
				Read our documentation -{">"}
			</span>
			<br />
			<CredixButton
				className="cta-component--button cta-component--button--investor"
				url={"https://share-eu1.hsforms.com/13OiNrrgQT0Gv2AF1cV52Uwfuste"}
			>
				Register as a borrower
			</CredixButton>
		</>
	);

	return (
		<div className="parallax-component">
			{isMobile ? (
				<div className="h-flex-column parallax-component--mobile">
					{visionComponent()}
					{investorsComponent()}
					{/* {borrowerComponent()} */}
				</div>
			) : (
				<div
					className="parallax-component--wrapper"
					style={{
						transform: `translateY(${
							scrollY > 400 ? ((scrollY - 400) * 100) / (1500 - 400) : 0
						}px)`,
					}}
				>
					<Parallax
						translateY={[30, -200]}
						className="parallax-component--child-scroll h-flex-column"
					>
						{visionComponent()}
						<span className="parallax-component--spacing" />
						{investorsComponent()}
						<span className="parallax-component--spacing" />
						{/* {borrowerComponent()} */}
					</Parallax>
					{/* <div className="parallax-component--image-scroll h-flex-column">
						<div
							className="parallax-component--image-overlap"
							style={firstImageStyle()}
						>
							{isLightTheme ? (
								<StaticImage
									src={"../assets/shapes/Credix_platform_1_black.svg"}
									alt={"Credix platform 1"}
								/>
							) : (
								<StaticImage
									src={"../assets/shapes/Credix_platform_1.svg"}
									alt={"Credix platform 1"}
								/>
							)}
						</div>
						<div
							className="parallax-component--image-overlap"
							style={secondImageStyle()}
						>
							{isLightTheme ? (
								<StaticImage
									src={"../assets/shapes/Credix_platform_2_black.svg"}
									alt={"Credix platform 2"}
								/>
							) : (
								<StaticImage
									src={"../assets/shapes/Credix_platform_2.svg"}
									alt={"Credix platform 2"}
								/>
							)}
						</div>
						<div
							className="parallax-component--image-overlap"
							style={thirdImageStyle()}
						>
							{isLightTheme ? (
								<StaticImage
									src={"../assets/shapes/Credix_platform_3_black.svg"}
									alt={"Credix platform 3"}
								/>
							) : (
								<StaticImage
									src={"../assets/shapes/Credix_platform_3.svg"}
									alt={"Credix platform 3"}
								/>
							)}
						</div>
					</div> */}
				</div>
			)}
		</div>
	);
};
