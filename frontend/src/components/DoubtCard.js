import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

function DoubtCard(props) {
  return (
    <>
      <Card style={{margin:'10px'}}>
        <Card.Header as="h6">
          <Container>
            <Row className="justify-content-md-between">
              <span>Student Name: {props.names}</span>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <h4><strong>{props.question}</strong></h4>
          </Card.Text>
          <Card.Text>
            <h4><strong>{props.answer}</strong></h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default DoubtCard;
