import React from 'react';
import styled from 'styled-components';

import arrow from '../assets/images/arrow.png';
import db_logo from '../assets/images/db-logo.png';
import django_logo from '../assets/images/django-logo.png';
import docker_logo from '../assets/images/docker-logo.png';
import gatsbyjs_logo from '../assets/images/gatsbyjs-logo.png';
import laravel_logo from '../assets/images/laravel-logo.png';
import nodejs_logo from '../assets/images/nodejs-logo.png';
import python_logo from '../assets/images/python-logo.png';
import react_logo from '../assets/images/react-logo.png';
import scala_logo from '../assets/images/scala-logo.png';
import vuejs_logo from '../assets/images/vuejs-logo.png';
import angular_logo from '../assets/images/angular-logo.png';
import sphinx_logo from '../assets/images/sphinx-logo.png';

const SkillSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: rgba(255, 255, 255, 0.5);
	text-align: left

	div {
		width: 300px;
		margin-bottom: 50px;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;



		img {
			margin: 15px;
		}

		ul > li{
			list-style-type: none;
			font-style: italic;
		}
	}
	.list {
		display:flex;
		flex-direction: row;
		justify-content: flex-start;
		height: 100px;
	}
`;
class Skills extends React.Component {
	render() {
		return (
			<section id="about" className="about-section text-center">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<h2 className="text-white mb-4">End-to-end software solutions</h2>
							<p className="text-white-50">
								Skills aquired working in the FMCG industry
							</p>
						</div>
					</div>
				</div>

				<SkillSection>
					<div >
						<img src={db_logo} className="img-fluid about-skills-image" alt="" />
					</div>

					<div className='list'>
						<ul>
							<li>Data Modeling</li>
							<li>Data storage configuration</li>
							<li>Automated backups and disaster recovery processes</li>
						</ul>
					</div>
				</SkillSection>

				<SkillSection>
					<div>
						<img src={arrow} className="img-fluid about-skills-image" alt="" />
					</div>

					<div className='list'>
						<ul>
							<li>High load software design</li>
						</ul>
					</div>
				</SkillSection>

				<SkillSection>
					<div>
						<img src={python_logo} className="img-fluid about-skills-image" alt="" />
						<img src={django_logo} className="img-fluid about-skills-image" alt="" />
						<img src={laravel_logo} className="img-fluid about-skills-image" alt="" />
						<img src={nodejs_logo} className="img-fluid about-skills-image" alt="" />
						<img src={scala_logo} className="img-fluid about-skills-image" alt="" />
						<img src={sphinx_logo} className="img-fluid about-skills-image" alt="" />
					</div>

					<div className='list'>
						<ul>
							<li>Scalable serverside services</li>
							<li>Reusable code patterns</li>
							<li>Writing self-documenting code</li>
						</ul>
					</div>
				</SkillSection>


				<SkillSection>
					<div>
						<img src={arrow} className="img-fluid about-skills-image" alt="" />
					</div>

					<div className='list'>
						<ul>
							<li>API design following best practices</li>
						</ul>
					</div>
				</SkillSection>

				<SkillSection>
					<div>
						<img src={vuejs_logo} className="img-fluid about-skills-image" alt="" />
						<img src={angular_logo} className="img-fluid about-skills-image" alt="" />
						<img src={react_logo} className="img-fluid about-skills-image" alt="" />
						<img src={gatsbyjs_logo} className="img-fluid about-skills-image" alt="" />
					</div>

					<div className='list'>
						<ul>
							<li>I'm terrible at web design, but I'm ok at following it.</li>
						</ul>
					</div>
				</SkillSection>

		  	</section>
		)
	}
}

export default Skills;