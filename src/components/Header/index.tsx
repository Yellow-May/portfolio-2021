import React from "react";
import Styled from "./styled";
import Container from "../../styles/components/Container";
import Button from "../../styles/components/Button";

import {} from "react-icons";

const Header = () => {
	return (
		<Styled>
			<Container>
				<Button>navbtn</Button>
				<Button>switch</Button>
			</Container>
		</Styled>
	);
};

export default Header;
