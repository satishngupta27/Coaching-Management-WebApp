import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import poster from "./components/img/poster.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./components/FormComponents/FormikControl";


function Login(props) {
  
  const [isStudent, setIsStudent] = useState(props.isStudent);
  const handleLoginState=()=>{
    setIsStudent(!isStudent);
    props.handleIsStudent()
  }

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    if(values.email==='satish@gmail.com' && values.password==='12345678'){props.handleIsLogin()}
    
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={8} style={{ height: "100vh", backgroundColor: "#060b26" }}>
          <img
            src={poster}
            alt="poster"
            style={{
              height: "40vh",
              width: "45vh",
              marginTop: "20vh",
              marginLeft: "100px",
            }}
          />
          <h1 style={{ color: "white", marginLeft: "100px" }}>
            Coaching Management
          </h1>
          <h1 style={{ color: "white", marginLeft: "100px" }}>Application</h1>
        </Col>
        <Col sm={4} style={{ height: "100vh" }}>
          <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>Login</h1>
          <h4 style={{ marginLeft: "20px" }}>
            For {isStudent ? "Student" : "Teacher"}
          </h4>
          <Container style={{ marginTop: "15vh" }}>
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
                    label="Username"
                    name="email"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                  />

                  <Row>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>

                    <h4 onClick={handleLoginState} style={{cursor:'pointer'}}>
                      click here to login as {isStudent ?  "Teacher":"Student"}
                    </h4>
                  </Row>
                </Form>
              )}
            </Formik>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
