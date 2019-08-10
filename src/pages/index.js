import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import Skills from '../components/Skills';

import ffone from '../assets/images/ffone.jpg';
import aavikuemand from '../assets/images/aavikuemand.png';
import starlawfilms from '../assets/images/starlawfilms.png';
import portfolio from '../assets/images/portfolio.png';

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

    <Skills />

    <section id="projects" className="projects-section bg-light">
      <div className="container">
      <h2>Back-end stuff</h2>
      <hr></hr>
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={ffone} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Fieldforce One: Backoffice</h4>
              <p className="text-black-50 mb-0">
                Large scale administrative backend for Fast Moving
                Consumer Goods (FMCG) sales software.
              </p>

              <div className='project-tech'>
                <span class="badge badge-secondary">Python</span>
                <span class="badge badge-secondary">React</span>
                <span class="badge badge-secondary">Sphinx docs</span>
                <span class="badge badge-secondary">MSSQL/PostgreSQL</span>
                <span class="badge badge-secondary">Docker</span>
              </div>

            </div>
          </div>
        </div>

        <h2>Front-end stuff</h2>
        <hr></hr>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={aavikuemand} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Aavikuemand Webshop</h4>
                  <p className="mb-0 text-white-50">
                    A fully functional eCommerce platform built from the ground up as a learning project.
                  </p>
                  <p className="mb-0 text-white-50">
                    Design by: <a href='https://www.taniatoday.com/'>Tatjana Domnina</a> <br />
                    <a href='https://aavikuemand.ee'>Go to website</a>
                  </p>

                  <hr className="d-none d-lg-block mb-0 ml-0" />

                  <div className='project-tech'>
                    <span class="badge badge-secondary">Laravel</span>
                    <span class="badge badge-secondary">VueJS</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={starlawfilms} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Starlaw Films</h4>
                  <p className="mb-0 text-white-50">
                    Website for a local movie company
                  </p>
                  <p className="mb-0 text-white-50">
                    Design by: Michaela Engström <br/>
                    <a href='https://starlawfilms.com'>Go to website</a>
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                  <div className='project-tech'>
                    <span class="badge badge-secondary">GatsbyJS</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={portfolio} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Personal website</h4>
                  <p className="mb-0 text-white-50">
                    Might aswell
                  </p>
                  <p className="mb-0 text-white-50">
                    GatsbyJS template by: <a href='https://github.com/anubhavsrivastava'>Anubhav Srivastava</a>
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                  <span class="badge badge-secondary">GatsbyJS</span>
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
