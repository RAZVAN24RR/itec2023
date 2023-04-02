import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Persdate from "./personaldate";
import axios from "axios";
import Signups from "./test";
import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import RadioChecks from "./formcheck";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("Select an optio");

  function handleOptionSelect(eventKey, event) {
    setYearsOfExperience(event.target.innerText);
  }
  const [industry, setIndustry] = useState("Select an option");

  const handleDropdownSelect = (eventKey, event) => {
    setIndustry(event.target.innerHTML);
  };
  const [specialization, setSpecialization] = useState("");

  const handleradioSelect = (event) => {
    setSpecialization(event.target.value);
  };
  const navigate = useNavigate();
  const [comunicationStyle, setComunicationStyle] = useState("Select aoption");
  const handleDropdown2Select = (eventKey, event) => {
    setComunicationStyle(event.target.innerHTML);
  };
  const [conflicts, setConflicts] = useState("Select an option");
  const handleDropdown3Select = (eventKey, event) => {
    setConflicts(event.target.innerHTML);
  };
  const [rank, setRank] = useState("Select an option");
  const handleDropdown4Select = (eventKey, event) => {
    setRank(event.target.innerHTML);
  };

  const handdleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseSubmit = await axios.post(
        "http://localhost:8000/api/register",
        {
          name,
          email,
          password,
        }
      );
      alert("User created successfully");
      console.log(responseSubmit);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
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
      {/* Personal Dates */}
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center align-items-center h-100 container-fluid">
          <Col
            md={6}
            className="bg-light p-5 rounded border border-primary p-3 gap-4"
          >
            <h1 className="text-center mb-4">Personal Dates</h1>

            <Form
              className="text-left d-flex gap-4 flex-column"
              onSubmit={handdleSubmit}
            >
              <Form.Group controlId="formBasicText">
                <Form.Label style={{ fontWeight: "bold" }} placeholder="Name">
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label
                  style={{ fontWeight: "bold" }}
                  placeholder="Enter email"
                >
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label
                  style={{ fontWeight: "bold" }}
                  placeholder="Password"
                >
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassWord(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              <div className="ext-left d-flex gap-4 flex-column mt-3">
                <Button variant="primary" size="lg" type="submit" block>
                  Sign up
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* Personal Dates ENd */}
      {/* <Container className="d-flex justify-content-center align-items-center">
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
                    {yearsOfExperience}
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
                    {industry}
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

                {specialization === "Frontend" && (
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

                {specialization === "Backend" && (
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
                      {comunicationStyle}
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
                      {conflicts}
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
                      {rank}
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
                    onChange={handdleSubmit}
                  >
                    Sign up
                  </Button>
                </div>
              </Form>
            </Form>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Signup;
