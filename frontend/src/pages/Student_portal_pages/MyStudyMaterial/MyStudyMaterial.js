import React from 'react'
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubjectCard from "../../../components/SubjectCard";
import { MyStudyMaterialContentDemoData } from "./MyStudyMaterialContentDemoData";


function MyStudyMaterial() {
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
          {MyStudyMaterialContentDemoData.map((item, index) => {
            return (
              <Link to={item.path}>
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
