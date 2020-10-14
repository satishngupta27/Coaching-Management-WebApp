import React from 'react';
import './Academics.css';
import MenuButton from "../../../components/MenuButton";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Academics() {
  return (
    <div className="Academics">
      <h1 style={{ textAlign: "center" }}>Academics</h1>
      <Container>
        <Row style={{ justifyContent:'flex-end', textAlign: "center" }}>
          <Link to="./academics/addNotes">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Add Notes"} />
            </span>
          </Link>
          <Link to="./Student_Info/deletetudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Delete Notes"} />
            </span>
          </Link>
          <Link to="./Student_Info/updateStudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"create folder"} />
            </span>
          </Link>
          <Link to="./Student_Info/viewAllStudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Assignment"} />
            </span>
          </Link>

          
        </Row>
        <Row>
          <h1>notes here</h1>
        </Row>
      </Container>
    </div>
  );
}

export default Academics;