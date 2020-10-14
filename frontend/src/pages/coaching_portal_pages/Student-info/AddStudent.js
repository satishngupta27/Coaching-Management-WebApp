import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "./AddStudent.css";

function AddStudent() {
  const branchDropDownOptions = [
    { key: "Select a branch", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const batchDropDownOptions = [
    { key: "Select a batch", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const GenderradioOptions = [
    { key: "male", value: "male" },
    { key: "female", value: "female" },
  ];
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    selectBrachOption: "",
    selectBatchOption: "",
    GenderRadioOption: "",
    guardianName: "",
    guadianMobileNumber: "",
    address: "",
    state: "",
    city: "",

    birthDate: null,
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    mobileNumber: Yup.string().required("Required"),
    selectBatchOption: Yup.string().required("Required"),
    selectBranchOption: Yup.string().required("Required"),
    GenderRadioOption: Yup.string().required("Required"),
    guardianName: Yup.string().required("Required"),
    guardianMobileNumber: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),

    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="AddStudent">
      <h1 style={{ textAlign: "center" }}>New Student Registration</h1>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <Row>
                <Col>
                  <FormikControl
                    control="input"
                    type="text"
                    label="First Name"
                    name="firstName"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Last Name"
                    name="lastName"
                  />
                  <FormikControl
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Mobile Number"
                    name="mobileNumber"
                  />
                  <FormikControl
                    control="select"
                    label="Select a Branch"
                    name="selectBranchOption"
                    options={branchDropDownOptions}
                  />
                  <FormikControl
                    control="select"
                    label="Select a Batch"
                    name="selectBatchOption"
                    options={batchDropDownOptions}
                  />
                  <FormikControl
                    control="radio"
                    label="Gender"
                    name="GenderRadioOption"
                    options={GenderradioOptions}
                  />

                  <FormikControl
                    control="date"
                    label="Pick a date"
                    name="birthDate"
                  />
                </Col>
              
                <Col>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Guardian Name"
                    name="guardianName"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Guardian Mobile Number"
                    name="guardianMobileNumber"
                  />
                
                  <FormikControl
                    control="textarea"
                    label="Address"
                    name="address"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="State"
                    name="state"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="City"
                    name="city"
                  />
                </Col>
              </Row>
              <Row style={{justifyContent:'right'}}>
              <button type="submit" className="btn btn-primary">
                REGISTER
              </button>
              </Row>

              
              
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default AddStudent;
