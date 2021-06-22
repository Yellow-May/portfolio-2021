import React from "react";
import { useSwipeable } from "react-swipeable";
import { useHistory } from "react-router-dom";
import { AppContext, CurrentPageTypes } from "../../app/store";
import { Actions } from "../../app/reducer";

import Styled from "./styled";
import Container from "../../styles/components/Container";
import NavBar, { NavLinks, Socials } from "../../styles/components/NavBar";
import Button from "../../styles/components/Button";
import Switch from "../../styles/components/Switch";

import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter, TiMail } from "react-icons/ti";
import logo from "../../assets/images/mayv2.png";

const links: CurrentPageTypes[] = ["Home", "Profile", "Projects"];
const socials = [<TiSocialLinkedin />, <TiSocialGithub />, <TiSocialTwitter />, <TiMail />];

const Header = () => {
	const { state, dispatch } = React.useContext(AppContext);
	const { currentPage, navbarOpen, themeLight } = state;

	const { push } = useHistory();

	const closeNavBar = useSwipeable({
		onSwipedLeft: () => dispatch({ type: Actions.NAVBAR_CLOSE }),
	});

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
									dispatch({ type: Actions.CHANGE_CURRENT_PAGE, payload: link });
									link === "Home" ? push("/") : push(`/${link.toLowerCase()}`);
								}}>
								{link}
							</Button>
						))}
						<Button variant='link' title='Contact Me'>
							Contact Me
						</Button>
					</NavLinks>

					<Socials>
						{socials.map((social, index) => (
							<Button
								key={index}
								variant='icon'
								title='Open Contact'
								onClick={() => dispatch({ type: Actions.CONTACT_OPEN })}>
								{social}
							</Button>
						))}
					</Socials>
				</NavBar>

				<Button
					onClick={() => dispatch({ type: Actions.NAVBAR_OPEN })}
					title='nav button'
					variant='icon'>
					{navbarOpen ? <CgMenuRight /> : <CgMenuLeft />}
				</Button>

				<Switch
					checked={themeLight}
					onClick={() => dispatch({ type: Actions.TOGGLE_THEME })}
					leftIcon={FaMoon}
					rightIcon={FaSun}
				/>
			</Container>
		</Styled>
	);
};

export default Header;
