import { Button } from "@mui/material";
import * as React from "react";
import { openInNewTab } from "../../../utils/openInNewTab";

interface IProps {
	children: string;
	className?: string;
	url?: string;
}

export const CredixButton = ({ children, className, url = "" }: IProps) => (
	<Button
		variant="contained"
		className={`credix-button ${className}`}
		onClick={() => openInNewTab(url)}
	>
		{children}
	</Button>
);
