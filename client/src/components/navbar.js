import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarex(props) {
  return (
    <Navbar className="bg-light">
      <Container className="text-primary">
        <Navbar.Brand href="/">{props.brand}</Navbar.Brand>
        <Nav className="mr-auto justify-content-betwen">
          <Nav.Link href="/login">{props.login}</Nav.Link>
          <Nav.Link href="/profile">{props.profile}</Nav.Link>
          <Nav.Link href="/presentation">{props.presenationPage}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarex;
