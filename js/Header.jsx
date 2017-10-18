// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// $FlowFixMe
const StyledLink = styled(Link)`
  color: #606060;
  text-decoration: none;
  transition: all .2s;

  &:hover {
    color: #ffffff;
  }
`;

const Wrapper = styled.div`
  padding: 0 24px;
  width: 100%;

  @media (min-width: 780px) {
    padding: 0 48px;
  }
`;

const Header = () => (
  <header>
    <Wrapper className="flex  flex--space-between  flex--middle">
      <h1>
        <Link to="/">Home Insprd</Link>
      </h1>
      <h2>
        <StyledLink to="/about">About</StyledLink>
      </h2>
    </Wrapper>
  </header>
);

export default Header;
