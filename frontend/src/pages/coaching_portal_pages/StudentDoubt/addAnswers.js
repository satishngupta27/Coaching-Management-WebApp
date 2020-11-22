import React,{useState,useEffect} from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios"
import { useHistory } from "react-router-dom";
import FormikControl from "../../../components/FormComponents/FormikControl";


function AddAnswers(props) {
  const history = useHistory();
  const id= props.match.params.id;
  const [doubt,setDoubt]=useState({
    _id:"",
    question:"",
    answer:"",
    postedBy:""

  })

  useEffect(()=>{
     fetch("/doubts").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setDoubt(jsonRes.find(obj=>obj._id===id )));
  },[])


  const initialValues = {
    answer: "",
  };
  const validationSchema = Yup.object({
    answer: Yup.string().required("Required"),
  });

  

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    
    
   axios.put(`http://localhost:8000/doubts/${doubt._id}`,{answer:values.answer});
   history.push("/studentDoubt")
    
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Answer Doubt</h1>
      <Container>
  <h2>{doubt.question}</h2>
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
              <button type="submit" className="btn btn-primary">
                Submit Answer
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
export default AddAnswers;
