import React, { useState, useEffect } from "react";
import "./App.css";
import PageRoutes from "./PageRoutes";
import Login from "./login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [userId, setUserId] = useState("");
  useEffect(() => {
   
   // console.log("this is user id in app ",userId)
  }, [userId]);


  const handleIsLogin = (e) => {
    setIsLoggedIn(!isLoggedIn);
  };
  const handleIsStudent = (e) => {
    setIsStudent(!isStudent);
  };
  const handleUser =  (id) => {
      setUserId(id);
    console.log("id is",userId);
  };

  if (!isLoggedIn) {
    return (
      <Login
        handleUser={handleUser}
        handleIsLogin={handleIsLogin}
        handleIsStudent={handleIsStudent}
        
        isStudentState={isStudent}
      />
    );
  } else {
    return <PageRoutes isStudent={isStudent} userId={userId} />;
  }
>>>>>>> 9100b1604e5ddb91a6007cc0ed8f1d076c4ad41b
}

export default App;
