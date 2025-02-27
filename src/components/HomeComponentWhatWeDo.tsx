import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { CredixButton } from "./shared/buttons/CredixButton";

export const HomeComponentWhatWeDo = () => {
	return (
		<div className="h-flex-column h-flex-column--justify-center cta-component">
			<div className="h-flex-row">
				<span className="cta-component--title">
					Credix is a cutting-edge B2B credit and financing platform that
					empowers suppliers to offer extended payment terms and credit options
					to their customers. Our platform provides instant credit approvals,
					flexible net terms, and seamless integration into your existing
					order-to-cash process. We handle the risk, collections, and payments,
					allowing you to focus on growing your business.
				</span>
			</div>
		</div>
	);
};
