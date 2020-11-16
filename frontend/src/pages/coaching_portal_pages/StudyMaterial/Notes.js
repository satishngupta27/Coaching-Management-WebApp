import React,{useState,useEffect} from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubjectCard from "../../../components/SubjectCard";
import logo from "../../../logo.svg";
import { Subjectwisecontentdemodata } from "./subjectwisecontentdemodata";
import MenuButton from "../../../components/MenuButton";
import NotesCard from "../../../components/NotesCard";
import { NotesDemoData } from "./NotesDemoData";

function Notes() {
  const [notes,setNotes]=useState([{
    _id:"",
    ChapterName: "",
    TopicName: "",
    WrittenBy: "",
    contentType:"",
    content:{
        url:"",
        key:""
    }
   
  }])

  useEffect(()=>{
     fetch("/mystudyMaterial").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setNotes(jsonRes));
  },[])
  console.log(notes)
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        All notes
      </h1>
      <Container>
      
        <Row>
          {notes.map((item, index) => {
            return (
              <NotesCard ChapterName={item.ChapterName} TopicName={item.TopicName} writtenBy={item.WrittenBy} link={item.content.url} type={item.contentType}/>
            );
          })}
          
        </Row>
      </Container>
    </div>
  );
}

export default Notes;
