import React from "react";
import Styled from "./styled";
import Container from "../../styles/components/Container";
import Button from "../../styles/components/Button";

import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
	return (
		<Styled>
			<Container>
				<Button>
					<CgMenuLeft />
				</Button>
				<Button>switch</Button>
			</Container>
		</Styled>
	);
};

export default Header;
