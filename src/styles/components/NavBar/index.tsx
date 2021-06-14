import React from "react";
import Styled from "./styled";

interface NavBarProps {
	mobInView?: boolean;
}

const NavBar: React.FC<NavBarProps> = props => {
	return <Styled mobInView={props.mobInView}>{props.children}</Styled>;
};

export default NavBar;
