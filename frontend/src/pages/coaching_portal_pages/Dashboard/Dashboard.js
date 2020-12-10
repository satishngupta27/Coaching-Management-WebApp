import React,{useState,useEffect} from 'react';
import {Container , Row } from 'react-bootstrap';
import OverviewCard from '../../../components/OveriewCard';
import DateAndTime from '../../../components/Date-And-Time';
import GreetingUser from '../../../components/GreetingUser';


function Dashboard(props) {
  const [id,setId]=useState(localStorage.getItem("userId"))

  const [user,setUser]=useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    
  })  
  const [studentCount,setStudentCount]=useState(0)
  const [subjectCount,setSubjectCount]=useState(0)
  const [teacherCount,setTeacherCount]=useState(0)
  useEffect(()=>{
    

     fetch("/countStudents").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setStudentCount(jsonRes));

    fetch("/countSubjects").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setSubjectCount(jsonRes));

    fetch("/countTeachers").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setTeacherCount(jsonRes));

  },[])

 
  useEffect(()=>{
     
    fetch(`/teachers/${id}`).then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setUser(jsonRes));
  },[])


  

  return (
    <>
    <Container >
      <Row style={{justifyContent:'Space-between',textAlign:'right'}}>
        <GreetingUser name={user && user.firstName}/>
        <DateAndTime/>
      </Row>
      <Row style={{margin:'auto'}}>
        <OverviewCard title={'Total Student'} value={studentCount}/>
        <OverviewCard title={'Braches'} value={subjectCount}/>
        
        <OverviewCard title={'Teachers'} value={teacherCount}/>
        <OverviewCard title={'Subjects'} value={subjectCount}/>
       
        
       
        
      </Row>
    </Container>
    </>
  );
}

export default Dashboard;