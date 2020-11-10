import  React,{useState,useEffect} from 'react';
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuButton from "../../../components/MenuButton";
import AssignmentCard from "../../../components/AssignmentCard";
import DoubtCard from "../../../components/DoubtCard";


function MyDoubt() {
  const [doubts,setDoubts]=useState([{
    _id:"",
    question:'',
    answer:"",
    postedBy:""
   
  }])

  useEffect(()=>{
     fetch("/doubts").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setDoubts(jsonRes));
  },[])
    return (
        <div>
        <h1 style={{ textAlign: "center" }}>Doubt</h1>
        <Container>
          <Row style={{ justifyContent: "flex-end", textAlign: "center" }}>
            <Link to="./myDoubt/askDoubt">
              <MenuButton title={"Ask Doubt"} />
            </Link>
          </Row>
          <Row>
            <h1>All doubt </h1>
          </Row>
          {doubts.map((item, index) => {

return ( 
  <div className="container">
<DoubtCard names = {item.postedBy} question = {item.question} answer={item.answer} /> 
<Link to={`./studentDoubt/${item._id}`}>
<div style={{marginLeft: "1021px"}}></div>
  </Link> 
</div>


)
} 
)
} 
        </Container>
        </div>
    )
}

export default MyDoubt
