import Container from "react-bootstrap/Container";
import { useState, useContext } from "react";
import Context from "../contexts/Context";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./home.css";
import logo from "../../assets/logo.jpg";
import { Nav, Navbar } from "react-bootstrap";

import Questions from "../../components/Questions";

const handleLogout = () => {
  localStorage.removeItem("key");
};
const Home = () => {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("key");
  const decoded = jwt_decode(token);
  const num_id = decoded.userId;

  const function1 = async (num_id) => {
    try {
      const json_res = await axios.get(
        `http://127.0.0.1:8000/api/v1/users/${num_id}`
      );
      // const json_res_string = JSON.parse(json_res);
      const user_obj = json_res.data.data.user;
      console.log(user_obj);
      setUser(user_obj);
    } catch (err) {
      console.log(err);
    }
  };
  function1(num_id);

  // console.log(user);
  return (
    <>
      {/* Navbar */}
      <Navbar className="navi ">
        <Container className="text-primary">
          <Navbar.Brand href="/">
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="mr-auto justify-content-betwen text-black ">
            <Nav.Link href="/" className="text-black" onClick={handleLogout}>
              Log out
            </Nav.Link>
            <Nav.Link href="/profile" className="text-black">
              Profile
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <h1
          className="fw-bold text-white"
          style={{
            fontSize: "35px",
            textColor: "white",
            textAlign: "center",
            marginTop: "10vh",
          }}
        >
          Welcome!
          <br />
          <br />
        </h1>
      </div>
      <Container>
        <div className="Cont-detail">
          <div className="titlu">{user.name}</div>
          <div className="rank">{user.rank}</div>
        </div>
      </Container>

      {/* Navbar End */}
      <Questions />
      <p className="padingg"></p>
    </>
  );
};

export default Home;
