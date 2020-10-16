import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";


function CreateNewBatchForm() {
    const subjectDropDownOptions = [
        { key: "Select a batch", value: "" },
        { key: "Option 1", value: "option1" },
        { key: "Option 2", value: "option2" },
        { key: "Option 3", value: "option3" },
      ];
  const initialValues = {
      id:'',
    batchName: "",
    StartsAt:null,
    time:null,
    selectSubject:"",
    
    
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    batchName: Yup.string().required("Required"),
    StartsAt:Yup.string().required("Required"),
    subject:Yup.string().required("Required"),
    time:Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="AddStudent">
      <h1 style={{ textAlign: "center" }}>Create New Batch</h1>
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
                label="Batch Name"
                name="batchName"
              />
              <FormikControl
                control="input"
                type="text"
                label="subject"
                name="subject"
              />
              <FormikControl
                    control="select"
                    label="Select a Subject"
                    name="selectSubject"
                    options={subjectDropDownOptions}
                  />

              <Row style={{ justifyContent: "right" }}>
                <button type="submit" className="btn btn-primary">
                  Create New Batch
                </button>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default CreateNewBatchForm;
