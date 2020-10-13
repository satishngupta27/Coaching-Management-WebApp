import React from 'react';
import { Card } from 'react-bootstrap';



function Overview_Card(props) {
  return (
      <>
    <Card style={{ width: '10rem',height:'10rem' ,margin: '15px'}}>
    <Card.Body>
     <Card.Title>{props.title}</Card.Title>
      
      <Card.Text style={{textAlign: 'center', textsize:''}}>
        {props.value}
      </Card.Text>
      
    </Card.Body>
  </Card>
  </>
  );
}

export default Overview_Card;