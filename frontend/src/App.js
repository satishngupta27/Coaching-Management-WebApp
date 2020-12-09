<<<<<<< HEAD
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Academics from './pages/coaching_portal_pages/Academics/Academics';
import Dashboard from './pages/coaching_portal_pages/Dashboard';
import Student_Info from './pages/coaching_portal_pages/Student-info/Student_Info';
// import AddStudent from './pages/coaching_portal_pages/Student-info/AddStudent';
import ViewAllStudent from './pages/coaching_portal_pages/Student-info/ViewAllStudent';
// import deleteStudent from './pages/coaching_portal_pages/Student-info/deleteStudent';
import UpdateStudent from './pages/coaching_portal_pages/Student-info/UpdateStudent';






function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          {/* <Route path='/academics' component={Academics} /> */}
          <Route path='/student_Info' exact component={Student_Info} />
          {/* <Route path='/student_Info/addStudent' exact component={AddStudent} /> */}
          <Route path='/student_Info/viewAllStudent' exact component={ViewAllStudent} />
          {/* <Route path='/student_Info/deleteStudent' exact component={deleteStudent} /> */}
          <Route path='/student_Info/updateStudent' exact component={UpdateStudent} />
        </Switch>
      </Router>
  );
=======
import React, { useState, useEffect } from "react";
import "./App.css";
import PageRoutes from "./PageRoutes";
import Login from "./login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleIsLogin = (e) => {
    setIsLoggedIn(!isLoggedIn);
  };
  const handleIsStudent = (e) => {
    setIsStudent(!isStudent);
  };
  const handleUser = (id) => {
    setUserId(id);
    console.log(id);
  };

  if (!isLoggedIn) {
    return (
      <Login
        handleIsLogin={handleIsLogin}
        handleIsStudent={handleIsStudent}
        handleUser={handleUser}
        isStudentState={isStudent}
      />
    );
  } else {
    return <PageRoutes isStudent={isStudent} userId={userId} />;
  }
>>>>>>> 9100b1604e5ddb91a6007cc0ed8f1d076c4ad41b
}

export default App;
