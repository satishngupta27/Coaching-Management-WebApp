import React,{useState} from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import PageRoutes from './PageRoutes';












function App() {
  return <PageRoutes/>
  
}

export default App;
