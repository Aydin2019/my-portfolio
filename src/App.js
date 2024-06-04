/* Apps.js
 * File name: Apps.js
 * Student's Name: Ajmal Afzalzada
 * StudentID: 301413451
 * Date: June/4th/2024
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
