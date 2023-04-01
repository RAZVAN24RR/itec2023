import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
// import UserProfile from "./pages/Userprofile/userprofile";
// import Userprofile from "./pages/Userprofile/userprofile";
// import { Navbar } from "react-bootstrap";
import ColorSchemesExample from "./pages/homepage/homepage";

function App() {
  return (
    <>
      {/* <ColorSchemesExample /> */}
      {/* <Login /> */}
      <Signup />
    </>
  );
}
export default App;
