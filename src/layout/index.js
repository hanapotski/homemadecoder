import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Navigation from '../components/Navigation';
import Header from './header'
import '../styles/main.scss';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header />
        <Navigation menuLinks={config.menuLinks} />
        {children}
      </>
    );
  }
}
