import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Context from "../contexts/Context";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Footer from "../../components/Footer/Footer";
// import Navbarex from "../../components/navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.jpg";
import axios from "axios";

const Login = () => {
  //LOGIN STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const tokenJSW = useContext(Context);
  //LOGIN STATES END
  //EVENT HANDDLERS
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // localStorage.setItem("key", email);
      // localStorage.getItem("key");

      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      // if (token) setToken(response.data.token);
      localStorage.setItem("key", response.data.token);
      // console.log(response.data);
      // if (response.status == 200)
      setToken(token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  //EVENT HANDDLERS END
  return (
    <>
      {/* Navbar */}
      <Navbar className="navi">
        <Container className="text-primary">
          <Navbar.Brand href="/">
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="mr-auto justify-content-betwen">
            <Nav.Link href="/" className="text-black">
              Back
            </Nav.Link>
            <Nav.Link href="/signup" className="text-black">
              Sign up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Navbar End */}

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center align-items-center h-100 container-fluid">
          <Col
            md={6}
            className="bg-light p-5 rounded border border-primary p-3"
          >
            <h1 className="text-left mb-4">Login</h1>

            <Form className="text-left" onSubmit={handleFormSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox"></Form.Group>

              <Button
                className="mt-5"
                variant="primary"
                size="lg"
                type="submit"
                block
                href="/profile"
                onClick={(e) => handleFormSubmit(e)}
              >
                Login{" "}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
