import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarex() {
  return (
    <Navbar className="bg-light">
      <Container className="text-primary">
        <Navbar.Brand href="/">HAUFE</Navbar.Brand>
        <Nav className="mr-auto justify-content-betwen">
          <Nav.Link href="/login">LOGIN</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/presentation">PresentationPage</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarex;
