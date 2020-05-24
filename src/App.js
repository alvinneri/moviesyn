import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';

import {BrowserRouter as Router, Route , Link , Switch} from 'react-router-dom';

import Details from './components/details';
import Search from './components/search';
import NotFound from './components/notFound';
import Footer from './components/footer';
import SearchDetails from './components/searchdetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/details/searched" component={SearchDetails} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
