import React,{useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function MyProfile(props) {
  const [userId,setUserId]=useState(props.userId)

  console.log("profile page",userId)
  
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
  <Card.Title>Name:{userId}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>email: harry@gmail.com</ListGroupItem>
              <ListGroupItem>Mobile Number:9149037618</ListGroupItem>
              <ListGroupItem>Batch:Maths</ListGroupItem>
            </ListGroup>
          </Card>
          </Container>
        </Col>
        <Col>
          <Card style={{ padding: "30px", margin: "20px" }}>
            <h3>Personal details</h3>
            <h6>Name: harry</h6>
            <h6>mobile no:harry</h6>
            <h6>email: Harry potter</h6>
            <h6>dob: Harry potter</h6>
            <h6>gender: Harry potter</h6>
            <h6>Roll no: Harry potter</h6>
          </Card>
          <Card style={{ padding: "30px", margin: "20px" }}>
            <h3>Parent details</h3>
            <h6>Name: Harry potter</h6>
            <h6>mobile no: Harry potter</h6>
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

export default MyProfile;
