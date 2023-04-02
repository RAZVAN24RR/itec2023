import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../components/Footer/Footer";
import Navbarex from "../../components/navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Login.css";
import logo from "../../assets/logo.jpg";

const Login = () => {
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

            <Form className="text-left">
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox"></Form.Group>

              <Button
                className="mt-5"
                variant="primary"
                size="lg"
                type="submit"
                block
                href="/Home"
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
