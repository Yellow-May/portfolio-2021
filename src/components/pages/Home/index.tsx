import React from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../../app/store";
import { Actions } from "../../../app/reducer";

import StyledContainer, { Section, Content } from "./styled";
import Button from "../../../styles/components/Button";

import { CgArrowRight } from "react-icons/cg";
import projects from "../../../data/projects.json";
import profile from "../../../assets/images/profile.jpg";
import { imgs } from "../Projects/data";

const Home = () => {
	const { dispatch } = React.useContext(AppContext);
	const { push } = useHistory();

	return (
		<StyledContainer as='main'>
			<Section.Wrapper>
				<Section.Header>
					<h1>Profile</h1>
					<Button
						variant='link'
						title='Goto Profile Page'
						onClick={() => {
							push("/profile");
							dispatch({ type: Actions.CHANGE_CURRENT_PAGE, payload: "Profile" });
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
						onClick={() => {
							push("/projects");
							dispatch({ type: Actions.CHANGE_CURRENT_PAGE, payload: "Projects" });
						}}>
						Go <CgArrowRight />
					</Button>
				</Section.Header>

				<Content.Projects>
					{projects.map(
						(project, index) =>
							index < 10 && (
								<div key={index}>
									<img src={imgs[index]} alt={project.name} /> <p>{project.name}</p>
								</div>
							)
					)}
				</Content.Projects>
			</Section.Wrapper>
		</StyledContainer>
	);
};

export default Home;
