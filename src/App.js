import React from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';

import {BrowserRouter as Router, Route , Link , Switch} from 'react-router-dom';
import Details from './components/details';
import NotFound from './components/notFound';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/details" component={Details} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
