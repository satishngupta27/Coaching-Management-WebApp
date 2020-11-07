import React,{useEffect,useState} from 'react'
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubjectCard from "../../../components/SubjectCard";
import { MyStudyMaterialContentDemoData } from "./MyStudyMaterialContentDemoData";


function MyStudyMaterial() {
  const [subjects,setSubjects]=useState([{
    title:'',
    subtitle:'',
    imgUrl:''
  }])

  useEffect(()=>{
     fetch("/subjects").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setSubjects(jsonRes));
  },[])

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
       view study material
      </h1>
      <Container>
      <Row
          style={{
            justifyContent: "flex-end",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          
        </Row>
        <Row>
          {subjects.map((item, index) => {
            return (
              <Link to="./myStudyMaterialType">
                <SubjectCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  subtitle={item.subtitle}
                />
              </Link>
            );
          })}
          <Link to="./Notes"></Link>
        </Row>
      </Container>
        </div>
    )
}

export default MyStudyMaterial
