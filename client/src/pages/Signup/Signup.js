import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

const Signup = () => {
  return (
<<<<<<< HEAD
    <>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center align-items-center h-100 container-fluid">
          <Col md={6} className="bg-light p-5 rounded">
            <h1 className="text-center mb-4">Personal Dates</h1>

            <Form className="text-center">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Name </Form.Label>
                <Form.Control type="password" placeholder="Name" />
              </Form.Group>
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" size="lg" type="submit" block>
                Sign up{" "}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center align-items-center h-100 container-fluid">
          <Col md={6} className="bg-light p-5 rounded">
            <h1 className="text-center mb-4">Work Experience</h1>

            <Form className="text-left">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  How many years of work Experience do you have?{" "}
                </Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Years
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">0-1 years</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">1-3 years</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3-5 years</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">5-10 years</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      more than 10 years
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>In what industry have you work?</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Choose one
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Tehnology</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Healthcare</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Finance</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Education</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Retail</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form>
                <Form.Label>
                  Are you more confortable with Frontend or backend?
                </Form.Label>
                {["radio"].map((type) => (
                  <div key={`${type}`} className="mb-3">
                    <Form.Check
                      label="Frontend"
                      name="group1"
                      type={type}
                      id={`${type}-1`}
                    />
                    <Form.Check
                      label="Backend"
                      name="group1"
                      type={type}
                      id={`${type}-2`}
                    />
                  </div>
                ))}
              </Form>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
=======
    <Container className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6} className="bg-light p-5 rounded">
          <h1 className="text-center mb-4">Sign Up</h1>
          <Form className="text-center">
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
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" size="lg" type="submit" block>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
>>>>>>> frontend
  );
};

export default Signup;
