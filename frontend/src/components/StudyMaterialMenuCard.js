import React from 'react'
import { Card } from 'react-bootstrap';
function StudyMaterialMenuCard(props) {
    return (
        <>
        <Card bg="Light" style={{ width: "20rem" ,margin:'20px', textAlign:'center'}} className="mb-2">
            <Card.Body>
            {props.icon}
              <Card.Title> <b>{props.title} </b></Card.Title>
              <Card.Text>{props.subtitle}</Card.Text>
            </Card.Body>
          </Card>
            
        </>
    )
}

export default StudyMaterialMenuCard
