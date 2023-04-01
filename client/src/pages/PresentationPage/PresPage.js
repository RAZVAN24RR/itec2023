import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "../../components/Footer.js"

function PresPage() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="mr-auto justify-content-between">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="text-center my-5" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '650px',  maxWidth: '800px', margin: '0 auto' }}>
        <div>
            <h1 className="fw-bold text-dark" style={{fontSize:"55px"}} >We are all connected</h1>
        </div>
            <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod mauris mauris, eu feugiat ipsum posuere quis.</p>
            <p className="lead">Our mission is to connect people around the world and make the world a better place. We believe that by promoting empathy, understanding, and collaboration, we can overcome the challenges that divide us and create a more peaceful and prosperous world for all.</p>
        </Container>

    
      <Footer style={{ position: 'absolute', top: 0, width: '100%' }} />


    </>
  );
}

export default PresPage;