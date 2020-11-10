import React from 'react';
import {Container , Row } from 'react-bootstrap';
import OverviewCard from '../../../components/OveriewCard';
import DateAndTime from '../../../components/Date-And-Time';
import GreetingUser from '../../../components/GreetingUser';


function MyDashboard() {
  return (
    <>
    <Container >
      <Row style={{justifyContent:'space-between',textAlign:'right'}}>
        <GreetingUser/>
        <DateAndTime/>
      </Row>
      <Row style={{margin:'auto'}}>
        
        <OverviewCard title={'Subjects'} value={'2'}/>
        <OverviewCard title={'Batches'} value={'2nd'}/>
        <OverviewCard title={'Teachers'} value={'google'}/>
       
        
      </Row>
    </Container>
    </>
  );
}

export default MyDashboard;