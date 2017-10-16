// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: #606060;
  text-decoration: none;
  transition: all .2s;

  &:hover {
    color: #ffffff;
  }
`;

const Header = () => (
  <header>
    <div className="wrapper  flex  flex--space-between  flex--middle">
      <h1>
        <Link to="/">Home Insprd</Link>
      </h1>
      <h2>
        <StyledLink to="/about">About</StyledLink>
      </h2>
    </div>
  </header>
);

export default Header;
