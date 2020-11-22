import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

function AssignmentCard(props) {
  return (
    <>
      <Card style={{margin:'10px'}}>
        <Card.Header as="h5">
          <Container>
            <Row className="justify-content-md-between">
              <span>{props.subject}</span>
              <span>{props.dueDate}</span>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
  <Card.Title>{props.title}</Card.Title>
          
        </Card.Body>
      </Card>
    </>
  );
}

export default AssignmentCard;
