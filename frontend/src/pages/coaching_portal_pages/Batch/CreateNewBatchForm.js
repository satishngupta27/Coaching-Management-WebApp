import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";
import axios from "axios";

function CreateNewBatchForm() {
  const history = useHistory();

  const [subjects, setSubjects] = useState([
    {
      title: "",

    },
  ]);

  // useEffect(() => {
  //   fetch("/subjects")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setSubjects(jsonRes));
  // }, []);

  const subjectDropDownOptions = [
    { key: "Select a batch", value: "" },
    subjects.map((item,index)=>{ 
      return { key: item.title, value: item.title }
    }),
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const initialValues = {
    title: "",
    subject: ""
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    // batchName: Yup.string().required("Required"),
    //  StartsAt:Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
   // time: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));

    const newBatch = {
      title: values.title,
      subject: values.subject,
    };

   // axios.post("http://localhost:8000/createBatch", newBatch);
    history.push("/batches");
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
                name="title"
              />

              <FormikControl
                control="select"
                label="Select a Subject"
                name="subject"
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
