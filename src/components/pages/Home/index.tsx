import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from 'app/store';

import StyledContainer, { Section, Content } from './styled';
import Button from 'styles/components/Button';

import { CgArrowRight } from 'react-icons/cg';
import projects from 'data/projects.json';
import profile from 'assets/images/profile.jpg';
import { imgs } from '../Projects/data';

const Home = () => {
	const { actions } = React.useContext(AppContext);
	const navigate = useNavigate();

	return (
		<StyledContainer as='main'>
			<Section.Wrapper>
				<Section.Header>
					<h1>Profile</h1>
					<Button
						variant='link'
						title='Goto Profile Page'
						handleClick={() => {
							navigate('/profile');
							actions.changeCurrPage('Profile');
						}}>
						Go <CgArrowRight />
					</Button>
				</Section.Header>

				<Content.Profile>
					<img src={profile} alt='profile' />
					<h3>Onyekwere Chidiebube Precious</h3>
					<p>Frontend Web Developer</p>
				</Content.Profile>
			</Section.Wrapper>

			<Section.Wrapper>
				<Section.Header>
					<h1>Projects</h1>
					<Button
						variant='link'
						title='Goto Projects Page'
						handleClick={() => {
							navigate('/projects');
							actions.changeCurrPage('Projects');
						}}>
						Go <CgArrowRight />
					</Button>
				</Section.Header>

				<Content.Projects>
					{projects.map(
						project =>
							project.id < 7 && (
								<a href={project.sitePath} target='_blank' rel='noreferrer' key={project.id}>
									<img src={imgs[project.id]} alt={project.name} />
								</a>
							)
					)}
				</Content.Projects>
			</Section.Wrapper>
		</StyledContainer>
	);
};

export default Home;
