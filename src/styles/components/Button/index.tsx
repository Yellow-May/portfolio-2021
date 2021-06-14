import React from "react";
import Styled from "./styled";

interface ButtonProps {
	onClick?: any;
}

const Button: React.FC<ButtonProps> = props => {
	return <Styled onClick={props.onClick}>{props.children}</Styled>;
};

export default Button;
