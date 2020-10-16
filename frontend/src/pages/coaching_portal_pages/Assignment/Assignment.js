import React from "react";
import MenuButton from "../../../components/MenuButton";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AssignmentCard from "../../../components/AssignmentCard";
import {AssignmentDemoData} from './AssignmentDemoData';

function Assignment() {
  

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
        {AssignmentDemoData.map((item, index) => {
          return <AssignmentCard title={item.title} dueDate={item.dueDate}/>;
        })}
      </Container>
    </div>
  );
}

export default Assignment;
