import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PresPage() {
  return (
    <>
      <Navbar bg="primary" variant="dark" d-flex>
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="mr-auto justify-content-between">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default PresPage;