import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";

function CreateNewSubjectForm() {
  const initialValues = {
    title: "",
    subtitle: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    subtitle: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="AddStudent">
      <h1 style={{ textAlign: "center" }}>Create New Subject</h1>
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
                label="title"
                name="title"
              />
              <FormikControl
                control="input"
                type="text"
                label="subtitle"
                name="subtitle"
              />

              <Row style={{ justifyContent: "right" }}>
                <button type="submit" className="btn btn-primary">
                  Create Subject
                </button>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default CreateNewSubjectForm;
