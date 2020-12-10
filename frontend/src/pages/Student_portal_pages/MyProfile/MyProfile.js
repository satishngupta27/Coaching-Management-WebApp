import React,{useState,useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function MyProfile() {
  const [id,setId]=useState(localStorage.getItem("userId"))
  const [user,setUser]=useState({
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

    fetch(`/students/${id}`).then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setUser(jsonRes));

  },[])
  
  return (
    <Container>
      <Row>
        <Col>
        <Container >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
            />
            <Card.Body>
  <Card.Title>Name:{user.firstName+ " "+ user.lastName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
  <ListGroupItem>email: {user.email}</ListGroupItem>
  <ListGroupItem>Mobile Number:{user.mobileNumber}</ListGroupItem>
  <ListGroupItem>Batch:{user.batch}</ListGroupItem>
            </ListGroup>
          </Card>
          </Container>
        </Col>
        <Col>
          <Card style={{ padding: "30px", margin: "20px" }}>
            <h3>Personal details</h3>
  <h6>Name: {user.firstName+ " "+user.lastName}</h6>
  <h6>mobile no:{user.mobileNumber}</h6>
  <h6>email: {user.email}</h6>
  <h6>dob: {user.birthDate}</h6>
  <h6>gender: {user.gender}</h6>
           
          </Card>
          <Card style={{ padding: "30px", margin: "20px" }}>
            <h3>Parent details</h3>
  <h6>Name: {user.guardianName}</h6>
  <h6>mobile no: {user.guadianMobileNumber}r</h6>
            
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
