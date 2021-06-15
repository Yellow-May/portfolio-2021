import React from "react";
import Styled from "./styled";

interface ButtonProps {
	onClick?: any;
	title?: string;
	variant?: "link" | "text" | "icon";
	active?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
	return (
		<Styled
			onClick={props.onClick}
			title={props.title || undefined}
			variant={props.variant}
			active={props.active}>
			{props.children}
		</Styled>
	);
};

export default Button;
