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
					Operational
				</span>
				<br></br>
				<span className="parallax-component--child-scroll--title">
					Efficiency
				</span>
				<hr className="solid" />
				<span className="parallax-component--child-scroll--text">
					<b>Simple, fast API integration</b> that fits effortlessly into your
					order flow.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>Automated credit approvals</b> and real-time decisioning to
					streamline operations.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>End-to-end management:</b> We handle collections, risk assessment,
					and payments. Transparent and efficient processes reduce manual work
					and administrative overhead.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>Transparent and efficient processes</b> reduce manual work and
					administrative overhead.
				</span>
			</div>
		</>
	);

	const investorsComponent = () => (
		<>
			<div className="parallax-component-item">
				<span className="parallax-component--child-scroll--title">
					Increase
				</span>
				<br></br>
				<span className="parallax-component--child-scroll--title">Sales</span>
				<hr className="solid" />
				<span className="parallax-component--child-scroll--text">
					<b>Offer net terms or installment options</b> to your customers,
					driving higher order values.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>Increase acceptance rates</b> with our market-leading credit and
					fraud detection engines.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>Boost purchasing power:</b> Enable your customers to buy more
					without compromising your cash flow.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>Accelerate growth</b> by removing payment barriers and enhancing
					buyer flexibility.
				</span>
			</div>
		</>
	);

	const borrowerComponent = () => (
		<>
			<div className="parallax-component-item">
				<span className="parallax-component--child-scroll--title">
					Minimize
				</span>
				<br></br>
				<span className="parallax-component--child-scroll--title">Risk</span>
				<hr className="solid" />
				<span className="parallax-component--child-scroll--text">
					<b>We assume the credit risk:</b> Receive payments upfront while we
					manage collections.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>Reduce Days Sales Outstanding (DSO)</b> and improve working capital
					metrics.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>Advanced credit models</b> ensure responsible lending and
					high-quality risk management.
				</span>
				<br></br>
				<br></br>
				<span className="parallax-component--child-scroll--text">
					<b>Fraud prevention, built-in</b> to protect your business from
					potential losses.
				</span>
			</div>
		</>
	);

	return (
		<div className="parallax-component">
			{isMobile ? (
				<div className="h-flex-column parallax-component--mobile">
					{visionComponent()}
					{investorsComponent()}
					{borrowerComponent()}
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
						{borrowerComponent()}
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
