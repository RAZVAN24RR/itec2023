import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutMe = () => {
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
              <li><strong>Name:</strong> John Doe</li>
              <li><strong>Age:</strong> 28</li>
              <li><strong>Location:</strong> New York, NY</li>
              <li><strong>Education:</strong> Bachelor's degree in Computer Science</li>
              <li><strong>Current position:</strong> Software Engineer</li>
              <li><strong>Start date:</strong> 24/12/2020</li>
            </ul>
          </Col>
          <Col md={8}>
            <h4>About Me</h4>
            <p>
              Hi there! My name is John and I'm a software engineer based in New York. I graduated from XYZ University with a Bachelor's degree in Computer Science and have been working in the industry for the past 5 years. I have experience working with a variety of programming languages and technologies, including JavaScript, React, Node.js, and SQL.
            </p>
            <p>
              When I'm not coding, you can usually find me exploring the city, trying out new restaurants, or going for a run in Central Park. I'm also an avid traveler and have visited over 20 countries so far. Some of my favorite places to visit include Japan, Italy, and Thailand.
            </p>
            <p>
              If you have any questions or just want to say hi, feel free to send me a message!
            </p>
          </Col>
        </Row>
      </Container>
    </>
    
  );
};

export default AboutMe;
