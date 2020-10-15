import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";

function UploadNotesForm() {
  const initialValues = {
    ChapterName: "",
    TopicName: "",
    WrittenBy:""
  };
  const validationSchema = Yup.object({
    ChapterName: Yup.string().required("Required"),
    TopicName: Yup.string().required("Required"),
    WrittenBy:Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="AddStudent">
      <h1 style={{ textAlign: "center" }}>Upload notes</h1>
      <Container>
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
                label="Chapter Name"
                name="ChapterName"
              />
              <FormikControl
                control="input"
                type="text"
                label="Topic Name"
                name="TopicName"
              />
              <FormikControl
                control="input"
                type="text"
                label="Written by"
                name="WrittenBy"
              />

              <Row style={{ justifyContent: "right" }}>
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default UploadNotesForm;
