import React from "react";
import Styled from "./styled";
import Container from "../../styles/components/Container";
import Button from "../../styles/components/Button";
import Switch from "../../styles/components/Switch";

import { CgMenuLeft } from "react-icons/cg";
import { FaMoon, FaCloudSun } from "react-icons/fa";

const Header = () => {
	const [switchstate, setstate] = React.useState(false);

	return (
		<Styled>
			<Container>
				<Button>
					<CgMenuLeft />
				</Button>
				<Switch
					checked={switchstate}
					onClick={() => setstate(prev => !prev)}
					leftIcon={FaMoon}
					rightIcon={FaCloudSun}
				/>
			</Container>
		</Styled>
	);
};

export default Header;
