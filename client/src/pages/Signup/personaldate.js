import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RadioChecks from "./formcheck";

const Persdate = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center align-items-center h-100 container-fluid">
          <Col
            md={6}
            className="bg-light p-5 rounded border border-primary p-3 gap-4"
          >
            <h1 className="text-center mb-4">Personal Dates</h1>

            <Form className="text-left d-flex gap-4 flex-column">
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                <Form.Control type="password" placeholder="Name" />
              </Form.Group>
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Confirm Password
                </Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox"></Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Persdate;
