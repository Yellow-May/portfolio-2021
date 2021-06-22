import React from "react";
import { useSwipeable } from "react-swipeable";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../app/store";

import Styled from "./styled";
import Container from "../../styles/components/Container";
import NavBar, { NavLinks, Socials } from "../../styles/components/NavBar";
import Button from "../../styles/components/Button";
import Switch from "../../styles/components/Switch";

import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../../assets/images/mayv2.png";
import { links, socials } from "./data";

const Header = () => {
	const { state, actions } = React.useContext(AppContext);
	const { currentPage, themeLight } = state;
	const [navbarOpen, setnavbar] = React.useState(false);

	const { push } = useHistory();

	const closeNavBar = useSwipeable({ onSwipedLeft: () => setnavbar(false) });

	return (
		<Styled>
			<Container>
				<NavBar mobInView={navbarOpen} {...closeNavBar}>
					<img src={logo} alt='yellow may' />

					<NavLinks>
						{links.map((link, index) => (
							<Button
								key={index}
								variant='link'
								title={link}
								active={currentPage === link}
								onClick={() => {
									link === "Home" ? push("/") : push(`/${link.toLowerCase()}`);
									actions.changeCurrPage(link);
									setnavbar(false);
								}}>
								{link}
							</Button>
						))}
						<Button
							variant='link'
							title='Contact Me'
							onClick={() => {
								actions.openContact();
								setnavbar(false);
							}}>
							Contact Me
						</Button>
					</NavLinks>

					<Socials>
						{socials.map((Social, index) => (
							<Button key={index} as='a' href={Social.link} variant='icon'>
								<Social.Fc />
							</Button>
						))}
					</Socials>
				</NavBar>

				<Button onClick={() => setnavbar(true)} title='nav button' variant='icon'>
					{navbarOpen ? <CgMenuRight /> : <CgMenuLeft />}
				</Button>

				<Switch
					checked={themeLight}
					onClick={actions.toggleTheme}
					leftIcon={FaMoon}
					rightIcon={FaSun}
				/>
			</Container>
		</Styled>
	);
};

export default Header;
