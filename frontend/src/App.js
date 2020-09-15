import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Academics from './pages/coaching_portal_pages/Academics';
import Dashboard from './pages/coaching_portal_pages/Dashboard';
import Student_Info from './pages/coaching_portal_pages/Student_Info';



function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/academics' component={Academics} />
          <Route path='/student_Info' component={Student_Info} />
        </Switch>
      </Router>
  );
}

export default App;