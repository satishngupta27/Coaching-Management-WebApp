import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";

function UploadNotesForm() {
  const notesTypedropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ]
  const initialValues = {
    ChapterName: "",
    TopicName: "",
    WrittenBy:"",
    notesTypedropdownOptions:"",
    videoLink:""
  };
  const validationSchema = Yup.object({
    ChapterName: Yup.string().required("Required"),
    TopicName: Yup.string().required("Required"),
    WrittenBy:Yup.string().required("Required"),
    notesTypedropdownOptions:Yup.string().required("Required"),
    videoLink:Yup.string()
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
              <FormikControl
            control='select'
            label='Select contentType'
            name='notesTypedropdownOptions'
            options={notesTypedropdownOptions}
          />
          <FormikControl
                control="input"
                type="text"
                label="Link of content"
                name="videoLink"
              />
              <input type='file'/>

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
