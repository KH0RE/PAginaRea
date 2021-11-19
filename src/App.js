
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Slide from './components/Slider';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Navbar></Navbar>
        <Slide/>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      
     
    </>
  );
}

export default App;