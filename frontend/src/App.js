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
}

export default App;
