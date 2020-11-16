import React,{useState,useEffect} from "react";
import MenuButton from "../../../components/MenuButton";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AssignmentCard from "../../../components/AssignmentCard";
import {AssignmentDemoData} from './AssignmentDemoData';

function Assignment() {
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
        <Row style={{ justifyContent: "flex-end", textAlign: "center" }}>
          <Link to="./createAssignmentForm">
            <MenuButton title={"Create Assignment"} />
          </Link>
        </Row>
        <Row>
          <h1>All assignment</h1>
        </Row>
        {assignments.map((item, index) => {
          return (
            <Link to={`./assignment/${item._id}`} style={{textDecoration:'none'}}>
          <AssignmentCard title={item.title} dueDate={item.dueDate} subject={item.subject}/>
          </Link>
          );
        })}
      </Container>
    </div>
  );
}

export default Assignment;
