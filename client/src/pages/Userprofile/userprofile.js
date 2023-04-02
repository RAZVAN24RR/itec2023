import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./userprofile.css";
import logo from "../../assets/logo.jpg";
import { state } from "react";

const Userprofile = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar className="navi ">
        <Container className="text-primary">
          <Navbar.Brand href="/">
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="mr-auto justify-content-betwen">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Navbar End */}

      <Container className="">
        <Row className="justify-content-center">
          <Col sm={4}>
            <Image
              src="https://picsum.photos/id/237/200/200"
              rounded
              className="mb-3"
            />
            <h3 className="text-center">{state.name}</h3>
            <p className="text-center">User Role</p>
          </Col>
          <Col sm={8}>
            <h2 className="mb-4">Profile Information</h2>
            <hr />
            <Row>
              <Col sm={4}>
                <strong>Email:</strong>
              </Col>
              <Col sm={8}>
                <p>user@example.com</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <strong>Phone:</strong>
              </Col>
              <Col sm={8}>
                <p>123-456-7890</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <strong>Address:</strong>
              </Col>
              <Col sm={8}>
                <p>123 Main St, Anytown USA</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Userprofile;
