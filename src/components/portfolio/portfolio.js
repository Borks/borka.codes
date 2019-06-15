import React from 'react';
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components';

const PortfolioContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
const ProjectWrapper = styled.div`
	display:flex;
	flex-direction:column;
	width: 200px;
	margin-top: 10px;
	padding: 10px;
	overflow: hidden;
	transition: background-color 0.5s ease;
	border-radius: 5px;

	&:hover {
		background-color:#D3D3D3;
	}
`;

const ProjectImage = styled.img`
	height:120px;
	width:auto;
`;
const DesignerLink = styled.span`
	font-size: 0.6rem;
	a {
		font-style: italic;
	}
`;
const ProjectName = styled.h4`
	height: 30px;
`;
const Description = styled.span`
	font-size: 0.9rem;
`;
const ProjectTags = styled.div`
	font-size: 0.6rem;

	span {
		color: white;
		background-color: #007bff;
		font-weight:bold;
		padding: 5px;
		margin-right: 5px;
		border-radius: 5px;
	}
`;

const projects = siteConfig.portfolio;
class Portfolio extends React.Component {
	render() {
		return (
			<div>
				<h1>Projects</h1>
				<PortfolioContainer>
					{projects.map(project => (
						<ProjectWrapper>
							<a href={project.url}>
								<ProjectImage src={project.image} alt={project.name}/>
							</a>
							{project.designer ?
								<DesignerLink>Designed by: <a href={project.designer.website || "#"}>{project.designer.name}</a></DesignerLink> :
								<DesignerLink>&nbsp;</DesignerLink>
							}
							<ProjectName>{project.name}</ProjectName>
							<Description>
								{project.description} {project.date ? project.date : null}
							</Description>

							<ProjectTags>
								{project.stack ? project.stack.map(tag => (
									<span>{tag}</span>
								)) : null}
							</ProjectTags>
						</ProjectWrapper>
					))}
				</PortfolioContainer>
			</div>
		)
	}
}

export default Portfolio;