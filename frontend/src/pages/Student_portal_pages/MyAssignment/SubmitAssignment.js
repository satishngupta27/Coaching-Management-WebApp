import React,{useState,useEffect} from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import FormikControl from "../../../components/FormComponents/FormikControl";
import axios from "axios";
import { AssignmentDemoData } from "../../coaching_portal_pages/Assignment/AssignmentDemoData";

function SubmitAssignment(props) {
  const [file, setFile] = useState(null);
  const [buttonText,SetButtonText]=useState("Submit")
  const history = useHistory();

  const id= props.match.params.id;

    const [assignment,setAssignment]=useState({
        _id:"",
        title:"",
    instruction:"",
    batch:"",
    subject:"",
    dueDate:"",
    points:"",
    answer: ""
      })
    
      useEffect(()=>{
         fetch(`/assignment/${id}`).then(res=>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonRes=>setAssignment(jsonRes))
      },[])

  const initialValues = {
    answer: "",
  };
  const validationSchema = Yup.object({
    answer: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    SetButtonText("Submitting ...")
    let formData = new FormData();
   
    formData.append("file",file[0]);
   
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    formData.append("answer",values.answer)

    axios.put(`http://localhost:8000/assignment/submit/${id}`,formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }}
      ).then(res=>{
        console.log(res.data)
      }).then(()=>SetButtonText("Submitted")).then(()=>history.push("/myAssignment")).catch(err=>{
        console.log(err)
      })
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Submit Assignment</h1>
      <Container>
          <Row>
              <Col>
        <Container>
          <h1>Title : {assignment.title}</h1>
          <h3>Instructions :{assignment.instruction}</h3>
        </Container>
        </Col>
        <Col>
        <Container>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormikControl
                  control="textarea"
                  label="Instruction"
                  name="answer"
                />
                <input className="form-group" type='file'  onChange={
                (event)=>setFile(event.target.files)
              }/>
                <button type="submit" className="btn btn-primary">
                  {buttonText}
                </button>
              </Form>
            )}
          </Formik>
        </Container>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SubmitAssignment;
