import React from 'react'
import { Container, Row } from "react-bootstrap";
import MenuButton from '../../../components/MenuButton';
import { Link } from "react-router-dom";

import AssignmentCard from "../../../components/AssignmentCard";
import {AssignmentDemoData} from '../../coaching_portal_pages/Assignment/AssignmentDemoData';

function MyAssignment() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Assignment</h1>
      <Container>
       
        {AssignmentDemoData.map((item, index) => {
          return ( 
            <div className="container">
           
          <Link to={`./myAssignment/${item.id}`} style={{textDecoration:'none'}}>
          <AssignmentCard title={item.title} dueDate={item.dueDate}/>
          
            </Link> 
          </div>

          
        )
          
         
        })}
      </Container>
            
        </div>
    )
}

export default MyAssignment
