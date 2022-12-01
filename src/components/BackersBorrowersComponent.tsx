import React from "react";

export const BackersBorrowersComponent = () => {
	return (
		<div className="backers-borrowers-component h-flex-column">
			<div className="backers-borrowers-component--row h-flex-row h-flex-row--space-between">
				<div className="h-flex-column backers-borrowers-component--column">
					<span className="backers-borrowers-component--title">Backed by</span>
				</div>
				<div className="h-flex-column backers-borrowers-component--column">
					<span className="backers-borrowers-component--item">
						<b>Motive Partners</b>
					</span>
					<span className="backers-borrowers-component--item">
						DRW Cumberland
					</span>
					<span className="backers-borrowers-component--item">Bayhawk</span>
					<span className="backers-borrowers-component--item">
						Transfero Swiss
					</span>
				</div>
				<div className="h-flex-column backers-borrowers-component--column">
					<span className="backers-borrowers-component--item">
						<b>ParaFi Capital</b>
					</span>
					<span className="backers-borrowers-component--item">
						Circle Ventures
					</span>
					<span className="backers-borrowers-component--item">
						Solana Ventures
					</span>
					<span className="backers-borrowers-component--item">
						Fuse Capital
					</span>
				</div>
				<div className="h-flex-column backers-borrowers-component--column">
					<span className="backers-borrowers-component--item">
						<b>Valor Capital</b>
					</span>
					<span className="backers-borrowers-component--item">
						Claure Group
					</span>
					<span className="backers-borrowers-component--item">
						Victory Park Capital
					</span>
					<span className="backers-borrowers-component--item">Abra</span>
				</div>
			</div>
		</div>
	);
};
