import React from "react";
import Styled from "./styled";

interface ButtonProps {
	onClick?: any;
	title?: string;
	variant?: "link" | "text" | "icon";
}

const Button: React.FC<ButtonProps> = props => {
	return (
		<Styled onClick={props.onClick} title={props.title || undefined} variant={props.variant}>
			{props.children}
		</Styled>
	);
};

export default Button;
