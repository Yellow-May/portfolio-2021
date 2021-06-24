import React from "react";
import Styled from "./styled";

interface ButtonProps {
	as?: any;
	href?: string;
	type?: "button" | "submit";
	title?: string;
	variant?: "link" | "text" | "icon";
	active?: boolean;
	floater?: "bottom-right";
	disabled?: boolean;
	handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
	return (
		<Styled
			as={props.as}
			href={props.href}
			target={props.href && "_blank"}
			rel={props.href && "noreferrer"}
			type={props.type || "button"}
			onClick={props.handleClick}
			title={props.title || undefined}
			variant={props.variant}
			floater={props.floater}
			disabled={props.disabled}
			active={props.active}>
			{props.children}
		</Styled>
	);
};

export default Button;
