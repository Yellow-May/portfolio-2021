import React from "react";
import Styled from "./styled";
import Button from "../../../styles/components/Button";

import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { CgChevronDoubleRight } from "react-icons/cg";
import projects from "../../../data/projects.json";
import { filters, imgs } from "./data";

const Projects = () => {
	const [currentfilter, setcurrentfilter] = React.useState("all");
	const [state, setstate] = React.useState(projects);

	const filterFunc = (filter: string) => {
		if (filter === "all") setstate(projects);
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
				{state.map((data, index) => (
					<Styled.DataCard key={index}>
						<Styled.DataCardImg>
							<img src={imgs[index]} alt={data.name} />
						</Styled.DataCardImg>
						<Styled.DataCardContent>
							<h3>{data.name}</h3>
							{data.categories.jsframework && (
								<p>
									<span>JS FRAMEWORK:</span> {data.categories.jsframework}
								</p>
							)}
							{data.categories.cssframework && (
								<p>
									<span>CSS FRAMEWORK:</span> {data.categories.cssframework}
								</p>
							)}
							{data.categories.technologies && (
								<dl>
									<dt>TECHS: </dt>
									{data.categories.technologies.map((e, index) => (
										<dd key={index}>
											<CgChevronDoubleRight /> {e}
										</dd>
									))}
								</dl>
							)}

							<Button as='a' href={data.sitePath}>
								Live Site <FaAngleRight />
							</Button>
							<Button as='a' href={data.repoPath}>
								Github Repo <FaAngleRight />
							</Button>
						</Styled.DataCardContent>
					</Styled.DataCard>
				))}
			</Styled.DataArea>

			<Button
				variant='icon'
				floater='bottom-right'
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
				<FaAngleUp />
			</Button>
		</Styled.Wrapper>
	);
};

export default Projects;
