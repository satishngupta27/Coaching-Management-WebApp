import React, { useState, useEffect } from "react";
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
import axios from 'axios'

function Student_Info() {
  const [students, setStudents] = useState([
    {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      guardianName: "",
    },
  ]);

  useEffect(() => {
    fetch("/students")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setStudents(jsonRes));
  }, []);

  return (
    <div className="student_info">
      <Container className={"mt-3"}>
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
        <h1>List of Students</h1>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>

              <th>Username</th>
              <th>Mobile No.</th>
              <th>Guardian Name</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.firstName + " " + item.lastName}</td>

                  <td>{item.email}</td>
                  <td>{item.mobileNumber}</td>
                  <td>{item.guardianName}</td>
                  <td style={{ textAlign: "center" }}>
                    <OverlayTrigger
                      overlay={<Tooltip>Click to edit student details</Tooltip>}
                    >
                      <Link to={`./student_Info/editStudent/${item._id}`}>
                        <span>
                          <MdCreate />
                        </span>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      overlay={
                        <Tooltip>Click to delete student from database</Tooltip>
                      }
                    >
                      <span>
                        <MdDelete onClick={()=>{
                          const isDelete= window.confirm(`are you sure to remove ${item.firstName+' '+item.lastName}`)
                          if(isDelete){
                            try{ axios.delete(`http://localhost:8000/students/${item._id}`);
                          }catch(err){
                            console.log(err)
                          }
                           
                          }
                          }}/>
                      </span>
                    </OverlayTrigger>
                    <OverlayTrigger
                      overlay={<Tooltip>Click to view Profile</Tooltip>}
                    >
                      <Link to={`./Student_Info/studentprofile/${item._id}`}>
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
