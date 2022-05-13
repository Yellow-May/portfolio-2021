import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'app/store';

import Styled from './styled';
import Container from 'styles/components/Container';
import Button from 'styles/components/Button';
import Switch from './Switch';

import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from 'assets/images/mayv2.png';
import { links, socials } from './data';

const Header = () => {
	const { state, actions } = React.useContext(AppContext);
	const { currentPage, themeLight } = state;
	const [navbarOpen, setnavbar] = React.useState(false);

	const navigate = useNavigate();

	const closeNavBar = useSwipeable({ onSwipedLeft: () => setnavbar(false) });

	return (
		<Styled.Wrapper>
			<Container>
				<Styled.NavBar mobInView={navbarOpen} {...closeNavBar}>
					<img src={logo} alt='yellow may' />

					<Styled.NavLinks>
						{links.map((link, index) => (
							<Button
								key={index}
								variant='link'
								title={link}
								active={currentPage === link}
								handleClick={() => {
									link === 'Home' ? navigate('/') : navigate(`/${link.toLowerCase()}`);
									actions.changeCurrPage(link);
									setnavbar(false);
								}}>
								{link}
							</Button>
						))}
						<Button
							variant='link'
							title='Contact Me'
							handleClick={() => {
								actions.openContact();
								setnavbar(false);
							}}>
							Contact Me
						</Button>
					</Styled.NavLinks>

					<Styled.Socials>
						{socials.map((Social, index) => (
							<Button key={index} as='a' href={Social.link} variant='icon'>
								<Social.Fc />
							</Button>
						))}
					</Styled.Socials>
				</Styled.NavBar>

				<Button handleClick={() => setnavbar(true)} title='nav button' variant='icon'>
					{navbarOpen ? <CgMenuRight /> : <CgMenuLeft />}
				</Button>

				<Switch checked={themeLight} onClick={actions.toggleTheme} leftIcon={FaMoon} rightIcon={FaSun} />
			</Container>
		</Styled.Wrapper>
	);
};

export default Header;
