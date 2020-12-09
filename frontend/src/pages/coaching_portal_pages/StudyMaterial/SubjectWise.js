import React,{useEffect,useState} from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubjectCard from "../../../components/SubjectCard";
import MenuButton from "../../../components/MenuButton";


function SubjectWise() {
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
        Study material : Create or post for students
      </h1>
      <Container>
      <Row
          style={{
            justifyContent: "flex-end",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Link to="./createNewSubjectForm">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Create new Subject "} />
            </span>
          </Link>
          <Link to="./uploadNotesForm">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Upload Content "} />
            </span>
          </Link>

        </Row>
        <Row>
          {subjects?subjects.map((item, index) => {
            return (
              <Link to= "./studyMaterialType">
                <SubjectCard
                  title={item.title}
                  imgUrl={item.imgUrl}
                  subtitle={item.subtitle}
                />
              </Link>
            );
          }):<h3>loading</h3>}
          <Link to="./Notes"></Link>
        </Row>
      </Container>
    </div>
  );
}

export default SubjectWise;
