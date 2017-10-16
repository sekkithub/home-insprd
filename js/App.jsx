// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';

const Container = styled.div`
  -webkit-font-smoothing: none;
  -webkit-font-smoothing: antialiased;
`;

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Container className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
