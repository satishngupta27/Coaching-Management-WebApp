import React,{useState,useEffect} from 'react'
import { Container, Row } from "react-bootstrap";
import MenuButton from '../../../components/MenuButton';
import { Link } from "react-router-dom";

import AssignmentCard from "../../../components/AssignmentCard";
import {AssignmentDemoData} from '../../coaching_portal_pages/Assignment/AssignmentDemoData';

function MyAssignment() {
  const [assignments,setAssignment]=useState([{
    _id:"",
    title: "",
    subject: "",
    point: "",
    dueDate: null,
    
   
  }])

  useEffect(()=>{
     fetch("/assignment").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setAssignment(jsonRes));
  },[])
    return (
      <div>
      <h1 style={{ textAlign: "center" }}>Assignment</h1>
      <Container>
        
        <Row>
          <h1>All assignment</h1>
        </Row>
        {assignments.map((item, index) => {
          return (
            <Link to={`./myAssignment/${item._id}`} style={{textDecoration:'none'}}>
          <AssignmentCard title={item.title} dueDate={item.dueDate && item.dueDate.slice(0,15)} subject={item.subject}/>
          </Link>
          );
        })}
      </Container>
    </div>
    )
}

export default MyAssignment
