import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup";
function App() {
  return (
    <>
      <Login />
      <br />
      <Signup />
    </>
  );
}
export default App;
