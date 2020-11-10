import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

function CreateAssignmentForm() {
  const history = useHistory();
 
  const batchDropDownOptions = [
    { key: "Select a batch", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const subjectDropDownOptions = [
    { key: "Select a batch", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  //   const GenderradioOptions = [
  //     { key: "male", value: "male" },
  //     { key: "female", value: "female" },
  //   ];
  const initialValues = {
    title: "",
    instruction: "",
    selectSubjectOption: "",    
    selectBatchOption: "",
    point: "",
    attachement: "",
    dueDate: null,
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    instruction: Yup.string().optional(),
    subject: Yup.string().required("Required"),
    selectBatchOption: Yup.string().required("Required"),    
    selectSubjectOption: Yup.string().required("Required"),
    point: Yup.string().required('required'),
    attachement: Yup.string().optional(),
    dueDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    history.push("/assignment");
  };

  return (
    <div className="AddStudent">
      <h1 style={{ textAlign: "center" }}>Create CreateAssignmentForm</h1>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              {/* <Row>
                <Col> */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title"
                    name="title"
                  />
                  <FormikControl
                    control="textarea"
                    label="Instruction"
                    name="instruction"
                  />
                  {/* <FormikControl
                  control='reactquill'
                  label="Instruction"
                  name="Instruction"
                  
                  /> */}
                  {/* <ReactQuill

                  /> */}

                  
                  <FormikControl
                    control="select"
                    label="Select a Batch"
                    name="selectBatchOption"
                    options={batchDropDownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Select a Subject"
                    name="selectSubjectOption"
                    options={subjectDropDownOptions}
                  />
                  <FormikControl
                    control="date"
                    label="Pick a due date"
                    name="dueDate"
                  />
                {/* </Col>

                <Col> */}
                  <FormikControl
                    control="input"
                    type="text"
                    label="Point"
                    name="point"
                  />
                  {/* <input type="file"/> */}
                {/* </Col>
              </Row> */}
              <Row style={{ justifyContent: "right" }}>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default CreateAssignmentForm;
