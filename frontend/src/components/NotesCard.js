import React from "react";
import { Card } from "react-bootstrap";
import logo from '../logo.svg';

function NotesCard(props) {
  return (
    <>



      <Card style={{ width: "30rem", margin:'20px'}}>

        
        <Card.Body>
          <Card.Title>Chapter Name : {props.ChapterName}</Card.Title>
          <Card.Text>
            Topic Name : {props.TopicName}
          </Card.Text>
          <Card.Text>
           Written by : {props.writtenBy}
          </Card.Text>
          <Card.Text>
           Type : {props.type}
          </Card.Text>
          <Card.Text>
           Link :<a href={props.link} target='_blank'>click to open</a> 
          </Card.Text>
          
        </Card.Body>
      </Card>
    </>
  );
}

export default NotesCard;
