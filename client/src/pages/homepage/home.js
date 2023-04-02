import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import logo from "../../assets/logo.jpg";
import { Nav, Navbar } from "react-bootstrap";
<<<<<<< Updated upstream
import Questions from "../../components/Questions.js";

=======
import MyFaq from "./myfaq";
import Questions from "../../components/Questions";
>>>>>>> Stashed changes
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
              Logout
            </Nav.Link>
            <Nav.Link href="/profile" className="text-black">
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Navbar End */}
<<<<<<< Updated upstream

      <Questions />
=======
      <Questions />
      <p className="padingg"></p>
>>>>>>> Stashed changes
    </>
  );
};

export default Home;
