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
	const [active, setactivestate] = React.useState("home");

	return (
		<Styled>
			<Container>
				<NavBar mobInView={navbarstate}>
					<img src={logo} alt='yellow may' />

					<NavLinks>
						<Button
							variant='link'
							title='home'
							active={active === "home"}
							onClick={() => setactivestate("home")}>
							Home
						</Button>
						<Button
							variant='link'
							title='about'
							active={active === "about"}
							onClick={() => setactivestate("about")}>
							About
						</Button>
						<Button
							variant='link'
							title='skills'
							active={active === "skills"}
							onClick={() => setactivestate("skills")}>
							Skills
						</Button>
						<Button
							variant='link'
							title='projects'
							active={active === "projects"}
							onClick={() => setactivestate("projects")}>
							Projects
						</Button>
					</NavLinks>

					<Socials>
						<Button variant='icon'>
							<TiSocialLinkedin />
						</Button>
						<Button variant='icon'>
							<TiSocialGithub />
						</Button>
						<Button variant='icon'>
							<TiSocialTwitter />
						</Button>
						<Button variant='icon'>
							<TiMail />
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
