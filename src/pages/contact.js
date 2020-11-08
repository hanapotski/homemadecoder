import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';

export default class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`HomemadeCoder | ${config.siteTitle}`} />
        Contact Page
      </Layout>
    );
  }
}
