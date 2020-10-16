import React from "react";
import MenuButton from "../../../components/MenuButton";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "./Attendence.css";
import {
  Container,
  Row,
  Table,
 
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Attendence() {
  
  const batchDropDownOptions = [
    { key: "Select a batch", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const initialValues = {
    firstName: "",
    selectBatchOption: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    selectBatchOption: Yup.string().required("Required"),
    
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="student_info">
      <h1 style={{ textAlign: "center" }}>Attendence</h1>
      <Container>
        <Row
          style={{
            justifyContent: "flex-end",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Link to="./Student_Info/addStudent">
            <MenuButton title={"Take Attendence"} />
          </Link>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <Row>
                  <FormikControl
                    control="input"
                    type="text"
                    label="First Name"
                    name="firstName"
                  />

                  
                  <FormikControl
                    control="select"
                    label="Select a Batch"
                    name="selectBatchOption"
                    options={batchDropDownOptions}
                  />

                  <FormikControl
                    control="date"
                    label="Pick a date"
                    name="birthDate"
                  />
                </Row>
                <Row style={{ justifyContent: "right" }}>
                  <button type="submit" className="btn btn-primary">
                    REGISTER
                  </button>
                </Row>
              </Form>
            )}
          </Formik>
        </Row>

        <h1>Attendence</h1>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Roll no</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Attendence;
