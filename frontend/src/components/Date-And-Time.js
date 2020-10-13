import React , {useState} from 'react';
import { Card, Container, Col } from 'react-bootstrap';


const currentDate = new Date().toLocaleDateString();
let currentTime = new Date().toLocaleTimeString();


function DateAndTime() {

    const [Ctime, setCtime] = useState(currentTime);

    const updateTime = ()=>{
        currentTime= new Date().toLocaleTimeString();
        setCtime(currentTime);
    };

 setInterval(updateTime, 1000);

  return (
      <>
      
          <Col>
          <h3>{currentDate}</h3>
          <h3>{Ctime}</h3>
        </Col>
    
    
  </>
  );
}

export default DateAndTime;