import React,{useState,useEffect} from "react";
import "./App.css";
import PageRoutes from './PageRoutes';
import Login from './login';

function App() {
  const [isLoggedIn,setIsLoggedIn]= useState(false);
  const [isStudent,setIsStudent]= useState(false);

  
  
  const handleIsLogin= (e)=>{
    setIsLoggedIn(!isLoggedIn)
    
  }
  const handleIsStudent=(e)=>{
    setIsStudent(!isStudent)
    
  }
  
  if(!isLoggedIn){
    return <Login handleIsLogin={handleIsLogin} handleIsStudent={handleIsStudent} isStudentState={isStudent}/>  
  }
  else {return <PageRoutes isStudent={isStudent}/>}  
}

export default App;
