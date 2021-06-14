import React from "react";
import Styled from "./styled";
import Container from "../../styles/components/Container";
import Button from "../../styles/components/Button";
import Switch from "../../styles/components/Switch";

import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaMoon, FaCloudSun } from "react-icons/fa";
import NavBar from "../../styles/components/NavBar";

const Header = () => {
	const [switchstate, setswitchstate] = React.useState(false);
	const [navbarstate, setnavbarstate] = React.useState(false);

	return (
		<Styled>
			<Container>
				<NavBar mobInView={navbarstate}>
					<Button variant='link'>Home</Button>
					<Button variant='link'>About</Button>
					<Button variant='link'>Tech Familiarity</Button>
					<Button variant='link'>Projects</Button>
				</NavBar>

				<Button onClick={() => setnavbarstate(prev => !prev)} title='nav button' variant='icon'>
					{navbarstate ? <CgMenuRight /> : <CgMenuLeft />}
				</Button>

				<Switch
					checked={switchstate}
					onClick={() => setswitchstate(prev => !prev)}
					leftIcon={FaMoon}
					rightIcon={FaCloudSun}
				/>
			</Container>
		</Styled>
	);
};

export default Header;
