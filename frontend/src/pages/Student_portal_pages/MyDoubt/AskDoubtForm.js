import React,{useState,useEffect} from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function AskDoubtForm() {
  const [id,setId]=useState(localStorage.getItem("userId"))
  const [user,setUser]=useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    
  })
  useEffect(()=>{  

    fetch(`/students/${id}`).then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setUser(jsonRes));

  },[])
  const history = useHistory();
    const initialValues = {
        question: "",
      };
      const validationSchema = Yup.object({
        question: Yup.string().required("Required"),
      });
    
      const onSubmit = (values) => {
        console.log("Form data", values);
        console.log("Saved data", JSON.parse(JSON.stringify(values)));
        const newDoubt={
          question:values.question,
          answer:"",
          postedBy:user.firstName + " " +user.lastName
    
        }
        axios.post('http://localhost:8000/askDoubt',newDoubt);
        history.push("/myDoubt")
    
        
      
    
      };
    return (
        <Container>
            <h1>ask doubt</h1>
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
                  label="Question"
                  name="question"
                />
                {/* <input type="file" /> */}
                <button type="submit" className="btn btn-primary">
                  Submit Question
                </button>
              </Form>
            )}
          </Formik>
        </Container>
           
         

        </Container>
    )
}

export default AskDoubtForm
