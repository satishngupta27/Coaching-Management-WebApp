import React from "react";
import MenuButton from "../../../components/MenuButton";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Student_Info() {
  return (
    <div className="student_info">
      <h1 style={{ textAlign: "center" }}>Student_Info</h1>
      <Container>
        <Row style={{ justifyContent: "flex-end", textAlign: "center" }}>
          <Link to="./Student_Info/addStudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Add Student"} />
            </span>
          </Link>
          <Link to="./Student_Info/deletetudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Delete Student"} />
            </span>
          </Link>
          <Link to="./Student_Info/updateStudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Update Student Info"} />
            </span>
          </Link>
          <Link to="./Student_Info/viewAllStudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"View Student Info"} />
            </span>
          </Link>

          
        </Row>
      </Container>
    </div>
  );
}

export default Student_Info;
