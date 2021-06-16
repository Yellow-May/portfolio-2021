import React from "react";
import StyledContainer, { Section } from "./styled";
import Button from "../../../styles/components/Button";
import { CgArrowRight } from "react-icons/cg";

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
				<Section.Content></Section.Content>
			</Section.Wrapper>
			<Section.Wrapper>
				<Section.Header>
					<h1>Skills</h1>
					<Button variant='link'>
						Go <CgArrowRight />
					</Button>
				</Section.Header>
			</Section.Wrapper>
			<Section.Wrapper>
				<Section.Header>
					<h1>Projects</h1>
					<Button variant='link'>
						Go <CgArrowRight />
					</Button>
				</Section.Header>
			</Section.Wrapper>
		</StyledContainer>
	);
};

export default Home;
