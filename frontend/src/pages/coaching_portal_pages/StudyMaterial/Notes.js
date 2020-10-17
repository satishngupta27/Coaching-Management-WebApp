import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubjectCard from "../../../components/SubjectCard";
import logo from "../../../logo.svg";
import { Subjectwisecontentdemodata } from "./subjectwisecontentdemodata";
import MenuButton from "../../../components/MenuButton";
import NotesCard from "../../../components/NotesCard";
import { NotesDemoData } from "./NotesDemoData";

function Notes() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        All notes
      </h1>
      <Container>
      
        <Row>
          {NotesDemoData.map((item, index) => {
            return (
              <NotesCard ChapterName={item.ChapterName} TopicName={item.TopicName} writtenBy={item.writtenBy}/>
            );
          })}
          <Link to="#"></Link>
        </Row>
      </Container>
    </div>
  );
}

export default Notes;
