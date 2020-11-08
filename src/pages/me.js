import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`HomemadeCoder | ${config.siteTitle}`} />

      </Layout>
    );
  }
}

export default AboutPage;
