import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/Home';
import FormPlayer from './Pages/FormPlayer'
import Question from './Pages/Question';
import Classification from './Pages/Classification'
import goShow from './Pages/goShow';
import Credits from './Pages/Credits';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/formPlayer" exact component={FormPlayer} />
      <Route path="/goShow" exact component={goShow} />
      <Route path="/question" exact component={Question} />
      <Route path="/classification" exact component={Classification} />
      <Route path="/credits" exact component={Credits} />
    </Router> 
  );
}

export default App;
