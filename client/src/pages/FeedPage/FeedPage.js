import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'; 
import Footer from "../../components/Footer.js";
import Questions from "../../components/Questions.js";

function FeedPage() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="mr-auto justify-content-between">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav className="mr-auto justify-content-between">
              <Nav.Link href="#home">
                <Image
                  src="https://via.placeholder.com/30x30" // replace this with your logo URL or import
                  roundedCircle // add roundedCircle to make the image a circle
                  className="mr-2" // add some margin to the right of the image
                />
                Profile
              </Nav.Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>

      <Questions />

    
      <Footer style={{ position: 'absolute', top: 0, width: '100%' }} />


    </>
  );
}

export default FeedPage;
