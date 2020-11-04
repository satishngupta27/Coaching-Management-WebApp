import React,{useState} from "react";
import "./App.css";
import PageRoutes from './PageRoutes';
import Login from './login';

function App() {
  const [isLoggedIn,setIsLoggedIn]= useState(true);
  const [isStudent,setIsStudent]= useState(true);
  
  if(!isLoggedIn){
    return <Login isStudent={isStudent}/>  
  }
  else {return <PageRoutes isStudent={isStudent}/>}  
}

export default App;
