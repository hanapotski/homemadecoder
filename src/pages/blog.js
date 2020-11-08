import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';

export default class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`HomemadeCoder | ${config.siteTitle}`} />
        Blog Page
      </Layout>
    );
  }
}
