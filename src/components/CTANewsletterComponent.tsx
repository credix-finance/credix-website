import React from "react";
import { CredixButton } from "./shared/buttons/CredixButton";

export const CTATeamComponent = () => {
	return (
		<div className="h-flex-column cta-team-component">
			<div className="h-flex-row h-flex-row--space-between cta-team-component--row">
				<span className="h-flex-column">
					<span className="cta-team-component--title">Join the team</span>
					<span className="cta-team-component--text">
						Become part of the team and help us build the future of credit
					</span>
				</span>
				<span className="h-flex-column cta-team-component--button-column">
					<CredixButton
						className="cta-team-component--button"
						url={
							"https://credix.notion.site/credix/EXT-Work-with-us-at-Credix-606913498d5a4f02949a641e738f9257"
						}
					>
						See openings
					</CredixButton>
				</span>
			</div>
		</div>
	);
};
