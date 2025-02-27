import React from "react";
import { BorrowersCTADivider } from "./dividers/BorrowersCTADivider";

export const BorrowersCTAComponent = () => (
	<div className="h-flex-column cta-component-borrowers">
		<div className="h-flex-row h-flex-row--space-around cta-component-borrowers--row">
			<div className="h-flex-column cta-component-borrowers--column">
				<div className="h-flex-column cta-component-borrowers--column--row-mobile">
					<span className="cta-component-borrowers--sub-title">
						Why Credix?
					</span>
					<BorrowersCTADivider />
					<span className="cta-component-borrowers--text">
						- <b>Real-time approvals</b>: Credit decisions in just seconds.
					</span>
					<span className="cta-component-borrowers--text">
						- <b>100% integrated solution:</b> Seamless connection with your
						existing systems.
					</span>
					<span className="cta-component-borrowers--text">
						- <b>Guaranteed payments:</b> Focus on sales while we mitigate risk.
					</span>
					<span className="cta-component-borrowers--text">
						- <b>Increased customer loyalty:</b> Flexible terms keep your buyers
						coming back.
					</span>
					<span className="cta-component-borrowers--text">
						- <b>Data-driven insights:</b> Leverage analytics to optimize credit
						offerings.
					</span>
				</div>
			</div>
			<div className="h-flex-column cta-component-borrowers--column">
				<div className="h-flex-column cta-component-borrowers--column--row-mobile">
					<span className="cta-component-borrowers--sub-title">
						Advantages for Your Business
					</span>
					<BorrowersCTADivider />
					<span className="cta-component-borrowers--text">
						- <b>Better cash flow management</b> with upfront payments.
					</span>
					<span className="cta-component-borrowers--text">
						- <b>Enhanced buyer relationships</b> through flexible credit
						options.
					</span>
					<span className="cta-component-borrowers--text">
						- <b>Increased sales and order values</b> without additional risk.
					</span>
					<span className="cta-component-borrowers--text">
						- <b>Faster, more reliable collections</b> managed entirely by
						Credix.
					</span>
				</div>
			</div>
		</div>
	</div>
);
