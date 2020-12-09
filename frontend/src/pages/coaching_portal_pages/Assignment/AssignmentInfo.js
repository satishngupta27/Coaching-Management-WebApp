import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AssignmentInfo(props) {
  const id = props.match.params.id;
  const [submissionCount, setSubmissionCount] = useState(0);
  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    instruction: "",
    batch: "",
    subject: "",
    dueDate: "",
    points: "",
    answer: "",
  });

  useEffect(() => {
    fetch(`/assignment/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setAssignment(jsonRes));
    fetch(`/submissionCount/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setSubmissionCount(jsonRes));
  }, []);
  //console.log(assignment)

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h6>Subject: {assignment.subject}</h6>
          <h6>Batch: {assignment.batch}</h6>
          <Row style={{ justifyContent: "space-between" }}>
            <h6>points: {assignment.points}</h6>
            <h6>Due Date: {assignment.dueDate.slice(0, 15)}</h6>
          </Row>

          <hr />

          <h3>Title</h3>
          {assignment.title}
          <br />
          <h4>Instruction</h4>
          {assignment.instruction}
        </Col>
        <Col>
          <Container>
            <h5>Number of Submission: {submissionCount}</h5>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default AssignmentInfo;
