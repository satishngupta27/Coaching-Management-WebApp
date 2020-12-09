import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import DoubtCard from "../../../components/DoubtCard";
import MenuButton from '../../../components/MenuButton';
function Student_Doubt() {
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


return(
    <>
    
      
      

        <h1 style ={{color:"red",textAlign:"center"}}> Questions</h1>
        {doubts.map((item, index) => {

              return ( 
                <div className="container">
              <DoubtCard names = {item.postedBy} question = {item.question} answer={item.answer} /> 
              <Link to={`./studentDoubt/${item._id}`}>
              <div style={{marginLeft: "1021px"}}><MenuButton title={"Answer"} /></div>
                </Link> 
              </div>

              
            )
            } 
        )
        } 
    </>
);
}
export default Student_Doubt;