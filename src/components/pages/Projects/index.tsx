import React from 'react';
import Styled from './styled';
import Button from 'styles/components/Button';

import { FaAngleRight, FaAngleUp } from 'react-icons/fa';
import { CgChevronDoubleRight } from 'react-icons/cg';
import projects from 'data/projects.json';
import { filters, imgs } from './data';

const Projects = () => {
	const [currentfilter, setcurrentfilter] = React.useState('all');
	const [state, setstate] = React.useState(projects);

	const filterFunc = (filter: string) => {
		if (filter === 'all') setstate(projects);
		else
			setstate(
				projects.filter(
					_ =>
						_.categories.jsframework === filter.toUpperCase() ||
						_.categories.cssframework === filter.toUpperCase() ||
						_.categories.technologies.filter(e => e === filter.toUpperCase()).length > 0
				)
			);
	};

	return (
		<Styled.Wrapper as='main'>
			<Styled.Header>My Projects</Styled.Header>
			<Styled.Filters>
				{filters.map((filter, index) => (
					<Styled.FilterButton key={index}>
						<input
							type='radio'
							name='filters'
							value={filter}
							aria-label={filter}
							checked={filter === currentfilter}
							onChange={() => {
								setcurrentfilter(filter);
								filterFunc(filter);
							}}
						/>
						<span>{filter}</span>
					</Styled.FilterButton>
				))}
			</Styled.Filters>

			<Styled.DataArea>
				{state.map(project => (
					<Styled.DataCard key={project.id}>
						<Styled.DataCardImg>
							<img src={imgs[project.id]} alt={project.name} />
						</Styled.DataCardImg>
						<Styled.DataCardContent>
							<h3>{project.name}</h3>
							{project.categories.jsframework && (
								<p>
									<span>JS FRAMEWORK:</span> {project.categories.jsframework}
								</p>
							)}
							{project.categories.cssframework && (
								<p>
									<span>CSS FRAMEWORK:</span> {project.categories.cssframework}
								</p>
							)}
							{project.categories.technologies && (
								<dl>
									<dt>TECHS: </dt>
									{project.categories.technologies.map((e, index) => (
										<dd key={index}>
											<CgChevronDoubleRight /> {e}
										</dd>
									))}
								</dl>
							)}

							<Button as='a' href={project.sitePath}>
								Live Site <FaAngleRight />
							</Button>
							<Button as='a' href={project.repoPath}>
								Github Repo <FaAngleRight />
							</Button>
						</Styled.DataCardContent>
					</Styled.DataCard>
				))}
			</Styled.DataArea>

			<Button
				variant='icon'
				floater='bottom-right'
				title='Back to Top'
				handleClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				<FaAngleUp />
			</Button>
		</Styled.Wrapper>
	);
};

export default Projects;
