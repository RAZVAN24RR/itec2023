import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light fixed-bottom">
      <Container>
        <Row  style={{paddingTop:'4rem'}}>
          <div className="d-flex justify-content-between">
              <Col md={6}>
                  <h5>About Us</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                    velit id tellus ullamcorper iaculis sit amet ac ligula.
                  </p>
              </Col>
              <Col md={{ span: 10, offset: 3 }}>
                  <h5>Contact Us</h5>
                  <p>
                    <i className='bi bi-geo-alt'></i> 123 Main St, New York, NY 10001
                  </p>
                  <p>
                    <i className='bi bi-telephone'></i> (555) 555-5555
                  </p>
                  <p>
                    <i className='bi bi-envelope'></i> info@example.com
                  </p>
              </Col>
          </div>
        </Row>
        <Row>
          <Col lg={12}>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a href='/'>Terms &amp; Conditions</a>
              </li>
              <li className='list-inline-item'>
                <a href='/'>Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p>
              &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
