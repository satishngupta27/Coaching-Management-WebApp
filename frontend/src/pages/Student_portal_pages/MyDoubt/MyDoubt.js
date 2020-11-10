import  React,{useState,useEffect} from 'react';

import { Link } from "react-router-dom";
import DoubtCard from "../../../components/DoubtCard";


function MyDoubt() {
  const [doubts,setDoubts]=useState([{
    _id:"",
    question:'',
    answer:"",
    postedBy:""
   
  }])

  useEffect(()=>{
     fetch("/doubts").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setDoubts(jsonRes));
  },[])
    return (
      <>
    
      
      

      <h1 style ={{color:"red",textAlign:"center"}}> My Doubts</h1>
      {doubts.map((item, index) => {

            return ( 
              <div className="container">
            <DoubtCard names = {item.postedBy} question = {item.question} answer={item.answer} /> 
            <Link to={`./studentDoubt/${item._id}`}>
            
              </Link> 
            </div>

            
          )
          } 
      )
      } 
  </>
    )
}

export default MyDoubt
