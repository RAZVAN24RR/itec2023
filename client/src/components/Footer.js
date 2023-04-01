import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light fixed-bottom">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
              velit id tellus ullamcorper iaculis sit amet ac ligula.
            </p>
          </Col>
          <Col lg={3} md={6}>
            <h5>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About Us</a>
              </li>
              <li>
                <a href='/services'>Services</a>
              </li>
              <li>
                <a href='/contact'>Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5>Subscribe</h5>
            <p>
              Subscribe to our newsletter and stay up to date with our latest
              news and updates.
            </p>
            <form>
              <div className='form-floating mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='newsletterEmail'
                  placeholder='Enter your email'
                />
                <label htmlFor='newsletterEmail'>Email address</label>
              </div>
              <button className='btn btn-primary' type='submit'>
                Subscribe
              </button>
            </form>
          </Col>
          <Col lg={3} md={6}>
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
        </Row>
        <hr />
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <p>
              &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
            </p>
          </div>
          <div>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a href='/'>Terms &amp; Conditions</a>
              </li>
              <li className='list-inline-item'>
                <a href='/'>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
