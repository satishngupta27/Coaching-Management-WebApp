import React,{useState,useEffect} from 'react';
import {Container , Row } from 'react-bootstrap';
import OverviewCard from '../../../components/OveriewCard';
import DateAndTime from '../../../components/Date-And-Time';
import GreetingUser from '../../../components/GreetingUser';


function MyDashboard(props) {
 const [id,setId]=useState(localStorage.getItem("userId"))
  const [user,setUser]=useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    
  }) 

  useEffect(()=>{  

    fetch(`/students/${id}`).then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setUser(jsonRes));

  },[])
  return (
    <>
    <Container >
      <Row style={{justifyContent:'space-between',textAlign:'right'}}>
      <GreetingUser name={user.firstName}/>
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