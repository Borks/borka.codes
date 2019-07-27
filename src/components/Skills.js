import React from 'react';

import arrow from '../assets/images/arrow.png';
import bracket from '../assets/images/bracket.png';
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

class Skills extends React.Component {
	render() {
		return (
			<section id="about" className="about-section text-center">
				<div className="container">
					<div className="row">
					<div className="col-lg-8 mx-auto">
						<h2 className="text-white mb-4">End-to-end software solutions</h2>
						<p className="text-white-50">
							Text here
						</p>
					</div>
				</div>

				<div className='skills-container'>
					<img src={db_logo} className="img-fluid about-skills-image" alt="" />
					<img src={arrow} className="img-fluid about-skills-image arrow" alt="" />
				<div class='upright-container'>
					<img src={django_logo} className="img-fluid about-skills-image" alt="" />
					<img src={python_logo} className="img-fluid about-skills-image" alt="" />
				</div>
				<div class='upright-container'>
					<img src={laravel_logo} className="img-fluid about-skills-image" alt="" />
					<img src={nodejs_logo} className="img-fluid about-skills-image" alt="" />
				</div>
					<img src={scala_logo} className="img-fluid about-skills-image" alt="" />
					<img src={arrow} className="img-fluid about-skills-image arrow" alt="" />
					<img src={vuejs_logo} className="img-fluid about-skills-image" alt="" />
					<img src={react_logo} className="img-fluid about-skills-image" alt="" />
					<img src={angular_logo} className="img-fluid about-skills-image" alt="" />
					<img src={gatsbyjs_logo} className="img-fluid about-skills-image" alt="" />
				</div>
				<div>
				<img src={bracket} className="img-fluid about-skills-image bracket-image" alt="" />
				</div>
					<img src={docker_logo} className="img-fluid about-skills-image" alt="" />
				</div>
		  </section>
		)
	}
}

export default Skills;