import React from "react";
import { PersonComponent } from "./shared/person/PersonComponent";
import { StaticImage } from "gatsby-plugin-image";
import { IComponentProps } from "../hooks/useComponentProps";

export const CoreTeamComponent = ({ isLightTheme }: IComponentProps) => {
	return (
		<div className="h-flex-row core-team-component">
			<div className="h-flex-column core-team-component--core">
				<div className="h-flex-row core-team-component--title-row">
					<div className="h-flex-column core-team-component--title-column">
						<span className="sub-title">The core team</span>
					</div>
				</div>
				<div className="h-flex-column">
					<div className="h-flex-column core-team-component--persons-column">
						<div className="h-flex-row h-flex-row--space-around core-team-component--persons">
							<div className="h-flex-column">
								<PersonComponent
									name={"Thomas Bohner"}
									image={
										<StaticImage
											src={"../assets/people/Thomas.png"}
											alt={"Thomas Bohner"}
										/>
									}
									linkedInUrl={
										"https://www.linkedin.com/in/thomas-bohner-a0165597/"
									}
									twitterUrl={"https://twitter.com/t_bohner"}
									title={"FOUNDER, CEO"}
									isLightTheme={isLightTheme}
								/>
							</div>
							<div className="h-flex-column">
								<PersonComponent
									name={"Maxim Piessen"}
									image={
										<StaticImage
											src={"../assets/people/Maxim.png"}
											alt={"Maxim Piessen"}
										/>
									}
									linkedInUrl={"https://www.linkedin.com/in/maximpiessen/"}
									twitterUrl={"https://twitter.com/PiessenMaxim"}
									title={"CO-FOUNDER, CTO"}
									isLightTheme={isLightTheme}
								/>
							</div>
							<div className="h-flex-column">
								<PersonComponent
									name={"Chaim Finizola"}
									image={
										<StaticImage
											src={"../assets/people/Chaim.png"}
											alt={"Chaim Finizola"}
										/>
									}
									linkedInUrl={"https://www.linkedin.com/in/chaimfinizola/"}
									twitterUrl={"https://twitter.com/chaim_fes"}
									title={"CO-FOUNDER, CGO"}
									isLightTheme={isLightTheme}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
