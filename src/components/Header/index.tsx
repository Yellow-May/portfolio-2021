import React from "react";
import { useSwipeable } from "react-swipeable";
import { useHistory } from "react-router-dom";

import Styled from "./styled";
import Container from "../../styles/components/Container";
import NavBar, { NavLinks, Socials } from "../../styles/components/NavBar";
import Button from "../../styles/components/Button";
import Switch from "../../styles/components/Switch";

import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter, TiMail } from "react-icons/ti";
import logo from "../../assets/images/mayv2.png";

const links = ["Home", "Profile", "Projects", "Contact Me"];
const socials = [<TiSocialLinkedin />, <TiSocialGithub />, <TiSocialTwitter />, <TiMail />];

const Header = () => {
	const [switchstate, setswitchstate] = React.useState(false);
	const [navbarstate, setnavbarstate] = React.useState(false);
	const [active, setactivestate] = React.useState("home");

	const { push } = useHistory();

	const closeNavBar = useSwipeable({
		onSwipedLeft: () => setnavbarstate(false),
	});

	return (
		<Styled>
			<Container>
				<NavBar mobInView={navbarstate} {...closeNavBar}>
					<img src={logo} alt='yellow may' />

					<NavLinks>
						{links.map((link, index) => (
							<Button
								key={index}
								variant='link'
								title={link}
								active={active === link}
								onClick={() => {
									setactivestate(link);
									link !== "Contact Me" &&
										(link === "Home" ? push("/") : push(`/${link.toLowerCase()}`));
								}}>
								{link}
							</Button>
						))}
					</NavLinks>

					<Socials>
						{socials.map((social, index) => (
							<Button key={index} variant='icon'>
								{social}
							</Button>
						))}
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
