import React,{useState,useEffect} from "react";
import { Container, Row, Col,Card,ListGroup,ListGroupItem } from "react-bootstrap";
import { StudentlistDataDemo } from "./Studentlistdatademo";

function StudentProfile(props) {
  const id= props.match.params.id;
  const [student,setStudent]=useState({
    _id:"",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",    
    batch: "",
    gender: "",
    guardianName: "",
    guadianMobileNumber: "",
    address: "",
    state: "",
    city: "",
    birthDate: null,
  })

  useEffect(()=>{
     fetch("/students").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setStudent(jsonRes.find(obj=>obj._id===id)));
  },[])
  
//   console.log(props.match.params.id)
//  const obj = students.find(obj => obj._id === id);
 console.log(student.firstName)
 
  return (
    <Container >
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="dfsf.svg" />
            <Card.Body>
              <Card.Title>{}</Card.Title>
            
            </Card.Body>
            <ListGroup className="list-group-flush">
  <ListGroupItem>email: {student.email}</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col >
        <Card style={{padding:'30px' , margin:'20px'}}>
        <h3>Personal details</h3>
  <h6>Name: {student.firstName}</h6>
  <h6>mobile no: {student.mobileNumber}</h6>
  <h6>email: {student.email}</h6>
  <h6>dob: {student.birthDate}</h6>
  <h6>gender: {student.gender}</h6>
        
        </Card>
        <Card style={{padding:'30px',margin:"20px"}}>
        <h3>Parent details</h3>
  <h6>Guardian Name: {student.guardianName}</h6>
  <h6>mobile no: {student.guadianMobileNumber}</h6>
        <h6>email: Harry potter</h6>
        <h6>dob: Harry potter</h6>
        <h6>Address: Harry potter</h6>
        <h6>Roll no: Harry potter</h6>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentProfile;
