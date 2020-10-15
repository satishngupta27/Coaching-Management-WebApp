import React from "react";
import { Card } from "react-bootstrap";
import logo from '../logo.svg';

function SubjectCard(props) {
  return (
    <>
      <Card style={{ width: "20rem", margin:'20px'}}>
        <Card.Img variant="top" src={logo} height={150} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.subtitle}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SubjectCard;
