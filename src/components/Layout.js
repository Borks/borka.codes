import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../assets/sass/grayscale.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <title>Borka Martin Orlov - Software and Web application development</title>

          <html lang="en" />
          <meta charset='utf-8' />
          <meta name="author" content="https://borka.codes" />
          <meta name="description" content="End-to-end software solutions for small-to-mid " />

          <meta name="og:title" content="Borka Martin Orlov - Software and web application development"/>
          <meta name="og:description" content="Software and web application developer"/>
          <meta name="og:type"  content="website"/>

          <meta name="twitter:card"  content="summary"/>
          <meta name="twitter:creator"  content="Borka Martin Orlov"/>
          <meta name="twitter:title"  content="Software developer"/>
          <meta name="twitter:description"  content="Software and web application developer"/>
          {/* <meta name="twitter:image"  content="/logo.png"/> */}
        </Helmet>
        <div className={'page-top'}>{children}</div>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
