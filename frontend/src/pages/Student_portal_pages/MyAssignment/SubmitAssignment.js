import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import { AssignmentDemoData } from "../../coaching_portal_pages/Assignment/AssignmentDemoData";

function SubmitAssignment(props) {
  const id = props.match.params.id;
  let obj = AssignmentDemoData.find((obj) => obj.id === id);

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
      <h1 style={{ textAlign: "center" }}>Submit Assignment</h1>
      <Container>
          <Row>
              <Col>
        <Container>
          <h1>{obj.question}</h1>
          <h3>{obj.instruction}</h3>
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
                <input type="file" />
                <button type="submit" className="btn btn-primary">
                  Submit Answer
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
