// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 0 24px;
  width: 100%;

  @media (min-width: 780px) {
    padding: 0 48px;
  }
`;

const Footer = () => (
  <footer>
    <Wrapper>
      <div className="footer__border-top">
        <div className="flex  flex--space-between  flex--middle">
          <h3>&copy; Home Insprd {(new Date().getFullYear())}</h3>
          <h2>
            <Link to="http://homeinsprd.tumblr.com/" target="_blank">Tumblr</Link>
          </h2>
        </div>
      </div>
    </Wrapper>
  </footer>
);

export default Footer;
