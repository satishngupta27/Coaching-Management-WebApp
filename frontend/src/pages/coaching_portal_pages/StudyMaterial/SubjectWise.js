import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubjectCard from "../../../components/SubjectCard";
import logo from "../../../logo.svg";
import { Subjectwisecontentdemodata } from "./subjectwisecontentdemodata";
import MenuButton from "../../../components/MenuButton";

function SubjectWise() {
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
        </Row>
        <Row>
          {Subjectwisecontentdemodata.map((item, index) => {
            return (
              <Link to={item.path}>
                <SubjectCard
                  title={item.title}
                  imgUrl={logo}
                  subtitle={item.subtitle}
                />
              </Link>
            );
          })}
          <Link to="./Notes"></Link>
        </Row>
      </Container>
    </div>
  );
}

export default SubjectWise;
