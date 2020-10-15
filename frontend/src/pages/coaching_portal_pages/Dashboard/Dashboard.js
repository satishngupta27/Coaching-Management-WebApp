import React from 'react';
import {Container , Row } from 'react-bootstrap';
import OverviewCard from '../../../components/OveriewCard';
import DateAndTime from '../../../components/Date-And-Time';
import GreetingUser from '../../../components/GreetingUser';


function Dashboard() {
  return (
    <>
    <Container >
      <Row style={{justifyContent:'Space-between',textAlign:'right'}}>
        <GreetingUser/>
        <DateAndTime/>
      </Row>
      <Row style={{margin:'auto'}}>
        <OverviewCard title={'Total Student'} value={'560'}/>
        <OverviewCard title={'Braches'} value={'2'}/>
        <OverviewCard title={'Batches'} value={'6'}/>
        <OverviewCard title={'Teachers'} value={'10'}/>
        <OverviewCard title={'Subjects'} value={'5'}/>
        
      </Row>
    </Container>
    </>
  );
}

export default Dashboard;