import React from 'react';
import { Link } from 'gatsby';

export default class Navigation extends React.Component {
  render() {
    const { menuLinks } = this.props;

    return (
      <nav>
        {menuLinks.map(({ name, link }) => (
          <Link key={name} to={link} activeClassname="active">
            {name}
          </Link>
        ))}
      </nav>
    );
  }
}
