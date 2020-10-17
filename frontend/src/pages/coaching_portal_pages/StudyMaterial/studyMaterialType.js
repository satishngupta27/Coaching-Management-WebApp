import React from "react";

import MenuButton from "../../../components/MenuButton";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudyMaterialMenuCard from "../../../components/StudyMaterialMenuCard";
import { FaBook, FaVideo, FaBookOpen } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";

function Academics() {
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
          <Link to="./uploadNotesForm">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Upload Content "} />
            </span>
          </Link>
        </Row>
        <Row>
          <Link to="./Notes">
            <StudyMaterialMenuCard
              title="Notes"
              subtitle="notes according to syllabus"
              icon={<FaBook size={25} style={{ color: "skyblue" }} />}
            />
          </Link>
          <Link to="./Notes.js">
            <StudyMaterialMenuCard
              title="video"
              subtitle="notes according to syllabus"
              icon={<FaVideo size={25} style={{ color: "red" }} />}
            />
          </Link>
          <Link to="./Notes.js"><StudyMaterialMenuCard
            title="Solved Exam Papers"
            subtitle="from Your syllabus"
            icon={<FaBookOpen size={25} style={{ color: "lightgreen" }} />}
          /></Link>
          <Link to="./Notes.js"><StudyMaterialMenuCard
            title="Question Bank"
            subtitle="1000s of question"
            icon={<FaBookOpen size={25} style={{ color: "grey" }} />}
          /></Link>
          <Link to="./Notes.js"><StudyMaterialMenuCard
            title="MCQ"
            subtitle="Practice your concept"
            icon={<BsCardChecklist size={25} style={{ color: "purple" }} />}
          /></Link>
          <Link to="./Notes.js"><StudyMaterialMenuCard
            title="Other"
            icon={<FcAbout size={25} style={{ color: "orange" }} />}
          /></Link>
          
          
          
          
          
        </Row>
      </Container>
    </div>
  );
}

export default Academics;
