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

const About = () => (
  <section className="about">
    <Wrapper>
      <p>
        We are Home Insprd.<br />
        <br />
        An independent, home products collection.<br />
        <br />
        We design products, environments and communications that transform brands, drive business and improve people’s lives.t<br />
        <br />
        We do it by putting imagination at the center of everything we do.<br />
        <br />
        To craft bold, unforgettable worlds.<br />
        <br />
        To weave the pragmatic with the poetic.<br />
        <br />
        To break with the mundane and pursue the extraordinary.
      </p>
    </Wrapper>
  </section>
);

export default About;
