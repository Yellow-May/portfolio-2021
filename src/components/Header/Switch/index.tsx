import React from "react";
import Styled from "./styled";

interface SwitchProps {
	checked: boolean;
	onClick: any;
	leftIcon?: React.FC;
	rightIcon?: React.FC;
}

const Switch: React.FC<SwitchProps> = props => {
	return (
		<Styled checked={props.checked} onClick={props.onClick}>
			<span>
				{props.leftIcon &&
					props.rightIcon &&
					(props.checked ? <props.leftIcon /> : <props.rightIcon />)}
			</span>
		</Styled>
	);
};

export default Switch;
