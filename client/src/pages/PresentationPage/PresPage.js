import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../../components/Footer.js";
import Navbarex from "../../components/navbar.js";

function PresPage() {
  return (
    <>

    <Navbarex brand={"HAUFE"} login={"LOGOUT"} profile={"Profile"} presenationPage={"Presentation Page"}/>

      <Container
        fluid
        className="text-center my-5 "
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "650px",
          maxWidth: "800px",
          margin: "0 auto",
          color: "#ffffff",
        }}
      >
        <div>
          <h1
            className="fw-bold text-white"
            style={{ fontSize: "55px", textColor: "white" }}
          >
            We are all connected
          </h1>
        </div>
        <p className="lead text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
          mauris mauris, eu feugiat ipsum posuere quis.
        </p>
        <p className="lead">
          Our mission is to connect people around the world and make the world a
          better place. We believe that by promoting empathy, understanding, and
          collaboration, we can overcome the challenges that divide us and
          create a more peaceful and prosperous world for all.
        </p>
      </Container>
    </>
  );
}

export default PresPage;
