// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="wrapper  flex  flex--space-between  flex--middle">
      <h1>
        <Link to="/">Home Insprd</Link>
      </h1>
      <h2>
        <Link to="/about">About</Link>
      </h2>
    </div>
  </header>
);

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ''
};

export default Header;
