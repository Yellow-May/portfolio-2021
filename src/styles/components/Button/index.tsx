import React from "react";
import Styled from "./styled";

interface ButtonProps {
	as?: any;
	href?: string;
	title?: string;
	variant?: "link" | "text" | "icon";
	active?: boolean;
	floater?: "bottom-right";
	handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
	return (
		<Styled
			as={props.as}
			href={props.href}
			target={props.href && "_blank"}
			onClick={props.handleClick}
			title={props.title || undefined}
			variant={props.variant}
			floater={props.floater}
			active={props.active}>
			{props.children}
		</Styled>
	);
};

export default Button;
