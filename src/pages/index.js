import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`HomemadeCoder | ${config.siteTitle}`} />
        <div className="flex flex-center me-emoji">🙋‍♀️</div>
        <div className="flex flex-center">
          <div>Hi! I'm Hannah and I'm a homemade coder.</div>
        </div>
      </Layout>
    );
  }
}
