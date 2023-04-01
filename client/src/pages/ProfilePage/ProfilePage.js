import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import AboutMe from "../../components/AboutMe.js";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        
        <Col md={{ span: 8, offset: 2 }}>
          <AboutMe />
          <div className="text-center">
            <Button variant="primary">Edit Profile</Button>
          </div>
          <h4>Experience</h4>
          <ul>
            <li>
              <h5>Senior Software Engineer</h5>
              <p className="text-muted">ABC Company</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nullam nec metus velit. Sed faucibus
                euismod orci ut varius. Donec cursus enim urna, sit amet
                pellentesque risus semper eu.
              </p>
            </li>
            <li>
              <h5>Software Engineer</h5>
              <p className="text-muted">XYZ Company</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nullam nec metus velit. Sed faucibus
                euismod orci ut varius. Donec cursus enim urna, sit amet
                pellentesque risus semper eu.
              </p>
            </li>
          </ul>
          <h4>Skills</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
