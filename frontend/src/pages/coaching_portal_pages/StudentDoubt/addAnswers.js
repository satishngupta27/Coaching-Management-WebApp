import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";


function addAnswers(){
    const initialValues = {

        answer: ""
    };
    const validationSchema = Yup.object({
      answer: Yup.string().required("Required")
    });

const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center"}}>Answer Doubt</h1>
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
            </Form>
          )
          }
          </Formik>
          </Container>
          </div>
  );
}
export default addAnswers