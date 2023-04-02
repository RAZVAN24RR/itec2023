import React from "react";
import { useState, useEffect } from "react";
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
            <Nav.Link href="/" className="text-black">
              Log out
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
                    <li>Name: Jane Doe</li>
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
    </>
  );
};

export default ProfilePage;
