import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
        <Header/>
      {/* Home */}
      <Home/>
      {/*  */}
      <Footer />
    </div>
  );
}

export default App;
