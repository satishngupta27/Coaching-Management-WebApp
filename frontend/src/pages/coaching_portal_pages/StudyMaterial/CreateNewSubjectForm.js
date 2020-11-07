import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";
import { Subjectwisecontentdemodata } from "./subjectwisecontentdemodata";
import axios from 'axios'

function CreateNewSubjectForm() {
  const initialValues = {
    title: "",
    subtitle: "",
    imgUrl:""
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    subtitle: Yup.string().required("Required"),
    imgUrl:Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    const newSubject = {
      title:values.title,
      subtitle:values.subtitle,
      imgUrl:values.imgUrl
    }
     axios.post('http://localhost:8000/createSubject',newSubject);        
    this.props.history.push('./subjectwise');

  };

  return (
    <div className="AddStudent">
      <h1 style={{ textAlign: "center" }}>Create New Subject</h1>
      <Container >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="title"
                name="title"
              />
              <FormikControl
                control="input"
                type="text"
                label="subtitle"
                name="subtitle"
              />
              <FormikControl
                control="input"
                type="text"
                label="imgUrl"
                name="imgUrl"
              />
              {/* <FormikControl
                control="input"
                type="file"
                label="imgUrl"
                name="imgUrl"
              /> */}

             
                <button type="submit" className="btn btn-primary">
                  Create Subject
                </button>
              
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default CreateNewSubjectForm;
