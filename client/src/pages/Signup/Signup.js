import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

import axios from "axios";

import React, { useState } from "react";

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
  const [rank, setRank] = useState("Select an option");
  const navigate = useNavigate();

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
          rank,
        }
      );
      alert("User created successfully");
      console.log(responseSubmit);
      // navigate("/home");
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
    </>
  );
};

export default Signup;
