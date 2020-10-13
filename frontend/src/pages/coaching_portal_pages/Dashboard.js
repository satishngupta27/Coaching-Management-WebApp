import React from 'react';
import {Container , Row } from 'react-bootstrap';
import Overview_Card from '../../components/Overiew_Card';
import DateAndTime from '../../components/Date-And-Time';
import GreetingUser from '../../components/GreetingUser';


function Dashboard() {
  return (
    <>
    <Container >
      <Row style={{justifyContent:'Space-between',textAlign:'right'}}>
        <GreetingUser/>
        <DateAndTime/>
      </Row>
      <Row style={{margin:'auto'}}>
        <Overview_Card title={'Total Student'} value={'560'}/>
        <Overview_Card title={'Braches'} value={'2'}/>
        <Overview_Card title={'Batches'} value={'6'}/>
        <Overview_Card title={'Teachers'} value={'10'}/>
        <Overview_Card title={'Subjects'} value={'5'}/>
        
      </Row>
    </Container>
    </>
  );
}

export default Dashboard;