// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
// import preload from '../data.json';
import Footer from './Footer';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
