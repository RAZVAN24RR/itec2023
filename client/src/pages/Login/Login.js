import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center align-items-center h-100 container-fluid">
          <Col
            md={6}
            className="bg-light p-5 rounded border border-primary p-3"
          >
            <h1 className="text-left mb-4">Login</h1>

            <Form className="text-left">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox"></Form.Group>

              <Button
                className="mt-5"
                variant="primary"
                size="lg"
                type="submit"
                block
              >
                Login{" "}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
