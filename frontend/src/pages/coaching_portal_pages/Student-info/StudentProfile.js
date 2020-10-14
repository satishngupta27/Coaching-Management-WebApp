import React from "react";
import { Container, Row, Col,Card,ListGroup,ListGroupItem } from "react-bootstrap";

function StudentProfile(props) {
 
  return (
    <Container>
      <h1>{props.match.params.id}</h1>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="dfsf.svg" />
            <Card.Body>
              <Card.Title>{}</Card.Title>
            
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>email: sg@sjkfjs.com</ListGroupItem>
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
        <Card>
        <h3>personal details</h3>
        <h6>Name: Harry potter</h6>
        <h6>mobile no: Harry potter</h6>
        <h6>email: Harry potter</h6>
        <h6>dob: Harry potter</h6>
        <h6>gender: Harry potter</h6>
        <h6>Roll no: Harry potter</h6>
        </Card>
        <Card>
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

export default StudentProfile;
