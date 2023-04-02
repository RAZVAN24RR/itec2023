import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Persdate from "./personaldate";
import Signups from "./test";
import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import RadioChecks from "./formcheck";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo.jpg";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
const Signup = () => {
  const [selectedOption, setSelectedOption] = useState("Select an option");

  function handleOptionSelect(eventKey, event) {
    setSelectedOption(event.target.innerText);
  }
  const [selectedOptions, setSelectedOptions] = useState("Select an option");

  const handleDropdownSelect = (eventKey, event) => {
    setSelectedOptions(event.target.innerHTML);
  };
  const [selectedOption1, setSelectedOption1] = useState("");

  const handleradioSelect = (event) => {
    setSelectedOption1(event.target.value);
  };

  const [selectedOptions2, setSelectedOptions2] = useState("Select an option");
  const handleDropdown2Select = (eventKey, event) => {
    setSelectedOptions2(event.target.innerHTML);
  };
  const [selectedOptions3, setSelectedOptions3] = useState("Select an option");
  const handleDropdown3Select = (eventKey, event) => {
    setSelectedOptions3(event.target.innerHTML);
  };
  const [selectedOptions4, setSelectedOptions4] = useState("Select an option");
  const handleDropdown4Select = (eventKey, event) => {
    setSelectedOptions4(event.target.innerHTML);
  };
  return (
    <>
      {/* Navbar */}
      <Navbar className="navi ">
        <Container className="text-primary">
          <Navbar.Brand href="/">
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="mr-auto justify-content-betwen">
            <Nav.Link href="/" className="text-black">
              Back
            </Nav.Link>
            <Nav.Link href="/login" className="text-black">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Navbar End */}
      <Persdate />
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="justify-content-center align-items-center h-100 container-fluid  mb-4">
          <Col
            md={6}
            className="bg-light p-5 rounded border border-primary p-3"
          >
            <h1 className="text-center mb-4">Work Experience</h1>

            <Form className="text-left">
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: "bold" }}>
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
                <Form.Label style={{ fontWeight: "bold" }}>
                  In what industry have you work?
                </Form.Label>
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

              <Form>
                <Form.Group controlId="formBasicRadio">
                  <Form.Check
                    type="radio"
                    label="Frontend"
                    name="radio"
                    value="Frontend"
                    onChange={handleradioSelect}
                  />
                  <Form.Check
                    type="radio"
                    label="Backend"
                    name="radio"
                    value="Backend"
                    onChange={handleradioSelect}
                  />
                </Form.Group>

                {selectedOption1 === "Frontend" && (
                  <>
                    <Form.Group controlId="formBasicFrontend">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Whitch Frontend framework are you comfortable with?
                      </Form.Label>
                      <Form.Check label="React" value="Frontend" />
                      <Form.Check label="Angular" value="Frontend" />
                      <Form.Check label="Vue" value="Frontend" />
                    </Form.Group>
                    <Form.Label style={{ fontWeight: "bold" }}>
                      On a scale from 1 to 5,how familiar are you in the
                      following programing language?
                    </Form.Label>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                    >
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          Javascript
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Value"
                          aria-describedby="inputGroupPrepend"
                        />
                      </InputGroup>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          TypeScript
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Value"
                          aria-describedby="inputGroupPrepend"
                        />
                      </InputGroup>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          HTML
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Value"
                          aria-describedby="inputGroupPrepend"
                        />
                      </InputGroup>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Value"
                          aria-describedby="inputGroupPrepend"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formBasicFrontend">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Whitch Frontend tools are you comfortable with?
                      </Form.Label>
                      <Form.Check label="Webpack" value="Frontend" />
                      <Form.Check label="Babel" value="Frontend" />
                      <Form.Check label="Grunt/Gulp" value="Frontend" />
                      <Form.Check label="NPM/Yarn" value="Frontend" />
                    </Form.Group>
                  </>
                )}

                {selectedOption1 === "Backend" && (
                  <>
                    <Form.Group controlId="formBasicFrontend">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Whitch Backend framework are you comfortable with?
                      </Form.Label>
                      <Form.Check label="Node.js" value="Frontend" />
                      <Form.Check label="Django" value="Frontend" />
                      <Form.Check label="Ruby on rails" value="Frontend" />
                      <Form.Check label="Spring Boot" value="Frontend" />
                      <Form.Check label="ASP.NET" value="Frontend" />
                    </Form.Group>
                    <Form.Group controlId="formBasicFrontend">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        Whitch programing language are you familiar with?
                      </Form.Label>
                      <Form.Check label="Java" value="Frontend" />
                      <Form.Check label="Python" value="Frontend" />
                      <Form.Check label="Ruby" value="Frontend" />
                      <Form.Check label="PHP" value="Frontend" />
                      <Form.Check label="C#" value="Frontend" />
                    </Form.Group>
                    <Form.Group controlId="formBasicFrontend">
                      <Form.Label style={{ fontWeight: "bold" }}>
                        On a scale from 1 to 5,how familiar are you in the
                        following Backend Tools?
                      </Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          Docker
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Value"
                          aria-describedby="inputGroupPrepend"
                        />
                      </InputGroup>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          Kubernetes
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Value"
                          aria-describedby="inputGroupPrepend"
                        />
                      </InputGroup>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          MySQL
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Value"
                          aria-describedby="inputGroupPrepend"
                        />
                      </InputGroup>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          AWS/AZURE/GCP
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Value"
                          aria-describedby="inputGroupPrepend"
                        />
                      </InputGroup>
                    </Form.Group>
                  </>
                )}
                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    What is your comunication style?{" "}
                  </Form.Label>
                  <Dropdown onSelect={handleDropdown2Select}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      {selectedOptions2}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Assertive">
                        Assertive
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Passive">Passive</Dropdown.Item>
                      <Dropdown.Item eventKey="Aggressive">
                        Aggressive
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Collaborative">
                        Collaborative
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    How do you handle in with conflicts?{" "}
                  </Form.Label>
                  <Dropdown onSelect={handleDropdown3Select}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      {selectedOptions3}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Assertive">
                        Avoidance
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Passive">Passive</Dropdown.Item>
                      <Dropdown.Item eventKey="Aggressive">
                        Confrontation
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Collaborative">
                        Compromise
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Collaborative">
                        Collaboration
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
                <p style={{ fontWeight: "bold" }}>
                  On a scale of 1 to 5, how would you rate your comunication
                  skills?
                </p>
                <Form.Group controlId="form-check" inline>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Listening:
                  </Form.Label>
                  <RadioChecks />
                </Form.Group>
                <Form.Group controlId="form-check" inline>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Written:
                  </Form.Label>
                  <RadioChecks />
                </Form.Group>
                <Form.Group controlId="form-check" inline>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Verbal:
                  </Form.Label>
                  <RadioChecks />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Select your Rank?{" "}
                  </Form.Label>
                  <Dropdown onSelect={handleDropdown4Select}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      {selectedOptions4}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Manager">Manager</Dropdown.Item>
                      <Dropdown.Item eventKey="Old Employee">
                        Old Employee
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="New Employee">
                        New Employee
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
                <div className="ext-left d-flex gap-4 flex-column mt-3">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    block
                    href="/Home"
                  >
                    Sign up
                  </Button>
                </div>
              </Form>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;