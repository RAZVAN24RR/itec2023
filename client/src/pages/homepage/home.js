import Container from "react-bootstrap/Container";

import "./home.css";
import logo from "../../assets/logo.jpg";
import { Nav, Navbar } from "react-bootstrap";

import Questions from "../../components/Questions";
const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar className="navi ">
        <Container className="text-primary">
          <Navbar.Brand href="/">
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="mr-auto justify-content-betwen text-black ">
            <Nav.Link href="/login" className="text-black">
              Logoutd
            </Nav.Link>
            <Nav.Link href="/profile" className="text-black">
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Navbar End */}
      <Questions />
      <p className="padingg"></p>
    </>
  );
};

export default Home;
