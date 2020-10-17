import React from 'react';
import {Container , Row } from 'react-bootstrap';
import DateAndTime from '../../components/Date-And-Time';
function Student_Doubt() {

return(
    <>
    <Container >
      <Row style={{justifyContent:'Space-between',textAlign:'right'}}>
        <h1>Student Doubts</h1>
        <DateAndTime/>
      </Row>
      </Container>
      
    </>
    
);
}
export default Student_Doubt;
