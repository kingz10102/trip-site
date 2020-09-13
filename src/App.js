import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
      {/* Header */}
        <Header/>
  
      <Switch>
        <Route path="/search">
         {/* Search Page */}
        <SearchPage/>
      </Route>
      
      <Route path="/">
      {/* Home Page */}
        <Home/>
     </Route>
      </Switch>
      {/* Footer */}
      <Footer />
      </Router>
    </div>
  );
}

export default App;
