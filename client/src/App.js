import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login/Login.js";
import Signup from "./pages/Signup/Signup.js";
import PresPage from "./pages/PresentationPage/PresPage.js"

function App() {
  return (
    <>
    <Login/>
    <Signup/>
    <PresPage />
    </>
  );

}
export default App;
