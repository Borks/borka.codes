import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

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

import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">End-to-end software solutions</h2>
            <p className="text-white-50">

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

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Shoreline</h4>
              <p className="text-black-50 mb-0">
                Grayscale is open source and MIT licensed. This means you can
                use it for any project - even commercial projects! Download it,
                customize it, and publish your website!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Misty</h4>
                  <p className="mb-0 text-white-50">
                    An example of where you can put an image of a project, or
                    anything else, along with a description.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Mountains</h4>
                  <p className="mb-0 text-white-50">
                    Another example of a project with its respective
                    description. These sections work well responsively as well,
                    try this theme on a small screen!
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
