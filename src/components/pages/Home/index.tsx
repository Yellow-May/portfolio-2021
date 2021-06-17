import React from "react";
import StyledContainer, { Section, Content } from "./styled";
import Button from "../../../styles/components/Button";

import { CgArrowRight } from "react-icons/cg";

import projects from "../../../data/projects.json";
import skills from "../../../data/skills.json";
import profile from "../../../assets/images/profile.jpg";

const Home = () => {
	return (
		<StyledContainer as='main'>
			<Section.Wrapper>
				<Section.Header>
					<h1>About</h1>
					<Button variant='link'>
						Go <CgArrowRight />
					</Button>
				</Section.Header>

				<Content.About>
					<img src={profile} alt='profile' />
					<div>
						<h3>Onyekwere Chidiebube Precious</h3>
						<p>Frontend Web Developer</p>
					</div>
				</Content.About>
			</Section.Wrapper>

			<Section.Wrapper>
				<Section.Header>
					<h1>Skills</h1>
					<Button variant='link'>
						Go <CgArrowRight />
					</Button>
				</Section.Header>

				<Content.Skills>
					{skills.technologies.map((tech, index) => <li key={index}>{tech}</li>)}
				</Content.Skills>
			</Section.Wrapper>

			<Section.Wrapper>
				<Section.Header>
					<h1>Projects</h1>
					<Button variant='link'>
						Go <CgArrowRight />
					</Button>
				</Section.Header>

				<Content.Projects>
					{projects.map(
						(project, index) =>
							index < 5 && (
								<div key={index}>
									<img src={""} alt={project.name} /> <p>{project.name}</p>
								</div>
							)
					)}
				</Content.Projects>
			</Section.Wrapper>
		</StyledContainer>
	);
};

export default Home;
