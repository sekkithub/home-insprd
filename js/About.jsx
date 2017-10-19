// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 24px;
  width: 100%;

  @media (min-width: 780px) {
    padding: 0 48px;
  }
`;

const P = styled.p`
  max-width: 980px;
`

const A = styled.a`
  border-bottom: 2px solid white;
  color: inherit;
  text-decoration: none;
  transition: all .2s;

  &:hover {
    border-bottom-color: transparent;
  }
`

const About = () => (
  <section className="about">
    <Wrapper>
      <P>
        We are Home Insprd.<br />
        <br />
        This is a photo collection of layout, material, decoration, style, anything about home.
        This is for everyone who loves modern design.<br />
        <br />
        To get an inspiration.<br />
        <br />
        To touch our imagination.<br />
        <br />
        To love what our ancestors have made.<br />
        <br />
        <br />
        <br />
        <br />
        This website is developed by <A href="http://sekkithub.com" target="_blank" rel="noopener noreferrer">Masato</A> with React
      </P>
    </Wrapper>
  </section>
);

export default About;
