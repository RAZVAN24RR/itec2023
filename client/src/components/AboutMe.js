import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";

const AboutMe = () => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("key");
  const decoded = jwt_decode(token);
  const num_id = decoded.userId;
  const function1 = async (num_id) => {
    try {
      const json_res = await axios.get(
        `http://127.0.0.1:8000/api/v1/users/${num_id}`
      );
      // const json_res_string = JSON.parse(json_res);
      const user_obj = json_res.data.data.user;
      console.log(user_obj);
      setUser(user_obj);
    } catch (err) {
      console.log(err);
    }
  };
  function1(num_id);
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Image
              src="https://picsum.photos/200"
              roundedCircle
              className="mb-3"
            />
            <h4>Personal Information</h4>
            <ul className="list-unstyled">
              <li>
                <strong>Name:</strong> {user.name}
              </li>
              <li>
                <strong>Age:</strong> {user.age}
              </li>
              <li>
                <strong>Email:</strong> {user.email}
              </li>
              <li>
                <strong>Education:</strong> Bachelor's degree in Computer
                Science
              </li>
              <li>
                <strong>Current position:</strong> Software Engineer
              </li>
              <li>
                <strong>Created at:</strong> {user.createdAt}
              </li>
            </ul>
          </Col>
          <Col md={8}>
            <h4>About Me</h4>
            <p>
              Hi there! My name is John and I'm a software engineer based in New
              York. I graduated from XYZ University with a Bachelor's degree in
              Computer Science and have been working in the industry for the
              past 5 years. I have experience working with a variety of
              programming languages and technologies, including JavaScript,
              React, Node.js, and SQL.
            </p>
            <p>
              When I'm not coding, you can usually find me exploring the city,
              trying out new restaurants, or going for a run in Central Park.
              I'm also an avid traveler and have visited over 20 countries so
              far. Some of my favorite places to visit include Japan, Italy, and
              Thailand.
            </p>
            <p>
              If you have any questions or just want to say hi, feel free to
              send me a message!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
