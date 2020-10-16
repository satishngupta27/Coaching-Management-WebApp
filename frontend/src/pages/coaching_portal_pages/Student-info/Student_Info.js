import React from "react";
import MenuButton from "../../../components/MenuButton";
import {
  Container,
  Row,
  Table,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDelete, MdCreate, MdPerson } from "react-icons/md";
import { StudentlistDataDemo } from "./Studentlistdatademo";

function Student_Info() {
  return (
    <div className="student_info">
      <h1 style={{ textAlign: "center" }}>Student_Info</h1>
      <Container>
        <Row
          style={{
            justifyContent: "flex-end",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Link to="./Student_Info/addStudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Add Student"} />
            </span>
          </Link>
        </Row>
        <h1>List of Student</h1>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Mobile No.</th>
              <th>Guardian Name</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {StudentlistDataDemo.map((item, index) => {
              return (
                <tr>
                  <td>{item.rollno}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.guardianName}</td>
                  <td style={{ textAlign: "center" }}>
                    <MdDelete />
                    <MdCreate />
                    <OverlayTrigger
                      overlay={<Tooltip>Click to view Profile</Tooltip>}
                    >
                      <Link
                        to={`./Student_Info/studentprofile/${item.firstName}`}
                      >
                        <span>
                          <MdPerson />
                        </span>
                      </Link>
                    </OverlayTrigger>
                    {/* <Link to={`/student_Info/studentprofile/+this.props.rollno}`}>More info</Link> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Student_Info;
