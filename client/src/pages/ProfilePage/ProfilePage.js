import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { InputGroup } from "react-bootstrap";
import RadioChecks from "../Signup/formcheck";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import Signups from "./test";
import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap";
import AboutMe from "../../components/AboutMe.js";
import logo from "../../assets/logo.jpg";
import "./profile.css";
import Navbar from "react-bootstrap/Navbar";
const ProfilePage = () => {
  const [applicationStatus, setApplicationStatus] = useState({
    status: "Matched",
    matchedEmployee: null,
  });
  const [yearsOfExperience, setyearsOfExperience] =
    useState("Select an option");
  const [industry, setIndustry] = useState("Select an option");

  const handleDropdownSelect = (eventKey, event) => {
    setIndustry(event.target.innerHTML);
  };
  const handleDropdown1Select = (eventKey, event) => {
    setyearsOfExperience(event.target.innerHTML);
  };
  const [specialization, setSpecialization] = useState("");

  const handleradioSelect = (event) => {
    setSpecialization(event.target.value);
  };
  const handleOptionSelect = (event) => {
    setSpecialization(event.target.value);
  };

  const [comunicationStyle, setComunicationStyle] =
    useState("Select an option");
  const handleDropdown2Select = (eventKey, event) => {
    setComunicationStyle(event.target.innerHTML);
  };
  const [conflicts, setConflicts] = useState("Select an option");
  const handleDropdown3Select = (eventKey, event) => {
    setConflicts(event.target.innerHTML);
  };
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
  // Helper functions for calculating match scores
  const calculateWorkExperienceScore = (existingExperience, newExperience) => {
    const experienceDifference = Math.abs(existingExperience - newExperience);
    return 1 - experienceDifference / 10; // normalize to a score between 0 and 1
  };

  const calculateTechnicalSkillsScore = (existingSkills, newSkills) => {
    const matchedSkills = existingSkills.filter((skill) =>
      newSkills.includes(skill)
    );
    return matchedSkills.length / newSkills.length; // normalize to a score between 0 and 1
  };

  const calculateSoftSkillsScore = (existingSkills, newSkills) => {
    const matchedSkills = existingSkills.filter((skill) =>
      newSkills.includes(skill)
    );
    return matchedSkills.length / newSkills.length; // normalize to a score between 0 and 1
  };

  const matchEmployee = () => {
    const existingEmployees = [
      {
        id: 1,
        name: "John",
        workExperience: 5,
        techStack: ["React", "JavaScript"],
        softSkills: ["communication", "teamwork"],
      },
      {
        id: 2,
        name: "Jane",
        workExperience: 3,
        techStack: ["Java", "Python"],
        softSkills: ["adaptability", "problem-solving"],
      },
      // add more employees as needed
    ];
    // Collect the new employee's skills and attributes
    const newEmployeeSkills = {
      workExperience: 2, // years of work experience
      technicalSkills: ["JavaScript", "React", "Node.js"], // array of technical skills
      softSkills: ["communication", "teamwork", "problem-solving"], // array of soft skills
    };

    // Find the existing employee with the closest match to the new employee
    let matchedEmployee = null;
    let highestMatchScore = 0;
    for (let i = 0; i < existingEmployees.length; i++) {
      const existingEmployee = existingEmployees[i];

      // Calculate the match score based on work experience, technical skills, and soft skills
      const matchScore =
        calculateWorkExperienceScore(
          existingEmployee.workExperience,
          newEmployeeSkills.workExperience
        ) +
        calculateTechnicalSkillsScore(
          existingEmployee.technicalSkills,
          newEmployeeSkills.technicalSkills
        ) +
        calculateSoftSkillsScore(
          existingEmployee.softSkills,
          newEmployeeSkills.softSkills
        );

      // Update the matched employee if the match score is higher than the current highest score
      if (matchScore > highestMatchScore) {
        matchedEmployee = existingEmployee;
        highestMatchScore = matchScore;
      }
    }

    // Update the new employee's application status with the matched employee
    const newApplicationStatus = {
      status: "Matched",
      matchedEmployee: matchedEmployee,
    };
    setApplicationStatus(newApplicationStatus);
  };

  if (applicationStatus === "Pending") {
    console.log("am intrat");
    matchEmployee();
  }

  /*useEffect(() =>{
        console.log(applicationStatus);
      })*/

  return (
    <>
      {/* Navbar */}
      <Navbar className="navi ">
        <Container className="text-primary">
          <Navbar.Brand href="/">
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="mr-auto justify-content-betwen">
            <Nav.Link href="/Home" className="text-black">
              Back
            </Nav.Link>
            <Nav.Link href="/dashboard" className="text-black">
              Dashboard
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Navbar End */}
      <Container className="bg-white">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <AboutMe />
            <div className="text-center ">
              <Button variant="primary">Edit Profile</Button>
            </div>
            <h4>Experience</h4>
            <ul>
              <li>
                <h5>Senior Software Engineer</h5>
                <p className="text-muted">ABC Company</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Nullam nec metus velit. Sed
                  faucibus euismod orci ut varius. Donec cursus enim urna, sit
                  amet pellentesque risus semper eu.
                </p>
              </li>
              <li>
                <h5>Software Engineer</h5>
                <p className="text-muted">XYZ Company</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Nullam nec metus velit. Sed
                  faucibus euismod orci ut varius. Donec cursus enim urna, sit
                  amet pellentesque risus semper eu.
                </p>
              </li>
            </ul>
            <h4>Skills</h4>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
            </ul>

            <div className="mt-4">
              <h4>Application Status</h4>
              {applicationStatus.status === "Pending" ? (
                <p>
                  Your application is currently being processed. Please wait for
                  a response.
                </p>
              ) : applicationStatus.status === "Matched" ? (
                <div>
                  <p>You have been matched with:</p>
                  <ul>
                    <li>Name: {user.name}</li>
                    <li>Occupation: Senior Software Engineer</li>
                    <li>Skills: React, Node.js, Leadership</li>
                  </ul>
                </div>
              ) : (
                <p>Unknown application status.</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
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
                <Dropdown onSelect={handleDropdown1Select}>
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
              </Form>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
