// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="wrapper">
      <div className="footer__border-top">
        <div className="flex  flex--space-between  flex--middle">
          <h3>&copy; Home Insprd 2017</h3>
          <h2>
            <Link to="http://homeinsprd.tumblr.com/" target="_blank">Tumblr</Link>
          </h2>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
