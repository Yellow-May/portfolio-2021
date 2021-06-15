import React from "react";
import Styled from "./styled";
import Container from "../../styles/components/Container";
import NavBar, { NavLinks, Socials } from "../../styles/components/NavBar";
import Button from "../../styles/components/Button";
import Switch from "../../styles/components/Switch";

import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter, TiMail } from "react-icons/ti";
import logo from "../../assets/images/mayv2.png";

const Header = () => {
	const [switchstate, setswitchstate] = React.useState(false);
	const [navbarstate, setnavbarstate] = React.useState(false);

	return (
		<Styled>
			<Container>
				<NavBar mobInView={navbarstate}>
					<img src={logo} alt='yellow may' />

					<NavLinks>
						<Button variant='link'>Home</Button>
						<Button variant='link'>About</Button>
						<Button variant='link'>Techs. Familiarity</Button>
						<Button variant='link'>Projects</Button>
					</NavLinks>

					<Socials>
						<Button variant='icon'>
							<TiSocialLinkedin size={20} />
						</Button>
						<Button variant='icon'>
							<TiSocialGithub size={20} />
						</Button>
						<Button variant='icon'>
							<TiSocialTwitter size={20} />
						</Button>
						<Button variant='icon'>
							<TiMail size={20} />
						</Button>
					</Socials>
				</NavBar>

				<Button onClick={() => setnavbarstate(prev => !prev)} title='nav button' variant='icon'>
					{navbarstate ? <CgMenuRight /> : <CgMenuLeft />}
				</Button>

				<Switch
					checked={switchstate}
					onClick={() => setswitchstate(prev => !prev)}
					leftIcon={FaMoon}
					rightIcon={FaSun}
				/>
			</Container>
		</Styled>
	);
};

export default Header;
