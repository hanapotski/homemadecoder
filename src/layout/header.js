import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';

export default class Header extends Component {
  render() {
    return (
      <div className="flex flex-center">
        <div className="header">HomemadeCoder</div>
      </div>
    );
  }
}
