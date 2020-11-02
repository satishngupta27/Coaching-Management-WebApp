import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../../../components/FormComponents/FormikControl";
import { studentDoubtDemoData } from "./studentDoubtDemoData";

function addAnswers(props) {
  const id = props.match.params.id;
  let obj = studentDoubtDemoData.find((obj) => obj.id == id);

  const initialValues = {
    answer: "",
  };
  const validationSchema = Yup.object({
    answer: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Answer Doubt{obj.question}</h1>
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
export default addAnswers;
