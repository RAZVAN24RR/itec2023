import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Persdate from "./personaldate";
import Signups from "./test";
import React, { useState } from "react";

const Signup = () => {
  const [selectedOption, setSelectedOption] = useState("Select an option");

  function handleOptionSelect(eventKey, event) {
    setSelectedOption(event.target.innerText);
  }
  const [selectedOptions, setSelectedOptions] = useState("Choose one");

  const handleDropdownSelect = (eventKey, event) => {
    setSelectedOptions(event.target.innerHTML);
  };

  return (
    <>
      <Persdate />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center align-items-center h-100 container-fluid">
          <Col md={6} className="bg-light p-5 rounded">
            <h1 className="text-center mb-4">Work Experience</h1>

            <Form className="text-left">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  How many years of work Experience do you have?{" "}
                </Form.Label>
                <Dropdown onSelect={handleOptionSelect}>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {selectedOption}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="0-1 years">
                      0-1 years
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="1-3 years">
                      1-3 years
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3-5 years">
                      3-5 years
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="5-10 years">
                      5-10 years
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="more than 10 years">
                      more than 10 years
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>In what industry have you work?</Form.Label>
                <Dropdown onSelect={handleDropdownSelect}>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {selectedOptions}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Tehnology">
                      Tehnology
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">Healthcare</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Finance</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Education</Dropdown.Item>
                    <Dropdown.Item eventKey="5">Retail</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form>
                <Form.Label>
                  Are you more confortable with Frontend or backend?
                </Form.Label>
                {["radio"].map((type) => (
                  <div key={`${type}`} className="mb-3">
                    <Form.Check
                      label="Frontend"
                      name="group1"
                      type={type}
                      id={`${type}-1`}
                    />
                    <Form.Check
                      label="Backend"
                      name="group1"
                      type={type}
                      id={`${type}-2`}
                    />
                  </div>
                ))}
              </Form>
            </Form>
          </Col>
        </Row>
      </Container>
      <Signups />
    </>
  );
};

export default Signup;
