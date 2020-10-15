import React from "react";
import { Card } from "react-bootstrap";
import logo from '../logo.svg';

function NotesCard(props) {
  return (
    <>
      <Card style={{ width: "20rem", margin:'20px'}}>
        
        <Card.Body>
          <Card.Title>Chapter Name : {props.ChapterName}</Card.Title>
          <Card.Text>
            Topic Name : {props.TopicName}
          </Card.Text>
          <Card.Text>
           Written by : {props.writtenBy}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default NotesCard;
