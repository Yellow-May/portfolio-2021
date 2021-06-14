import React from "react";
import Styled from "./styled";

interface ButtonProps {}

const Button: React.FC<ButtonProps> = props => {
	return <Styled>{props.children}</Styled>;
};

export default Button;
