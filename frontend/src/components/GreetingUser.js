import React from "react";
import {  Col } from "react-bootstrap";

let currentHour = new Date().getHours();
let greeting = "";

if (currentHour > 1 && currentHour < 12) {
  greeting = "Good Morning";
} else if (currentHour >= 12 && currentHour < 19) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}
function GreetingUser() {
  return (
    <>
      <Col style={{ textAlign: "left" }}>
        <h2>{greeting}</h2>

        <h4>Harry</h4>
      </Col>
    </>
  );
}

export default GreetingUser;
