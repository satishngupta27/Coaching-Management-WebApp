import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

function AssignmentCard(props) {
  return (
    <>
      <Card style={{margin:'10px'}}>
        <Card.Header as="h5">
          <Container>
            <Row className="justify-content-md-between">
              <span>{props.title}</span>
              <span>{props.dueDate}</span>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default AssignmentCard;
