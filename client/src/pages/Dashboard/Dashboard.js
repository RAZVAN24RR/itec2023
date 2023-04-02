import React from "react";

import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
function Dashboard({ managerName }) {
  const employees = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      position: "Sales Manager",
      startDate: "2020-01-01",
      timeInCompany: "2 years",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@email.com",
      position: "Marketing Specialist",
      startDate: "2021-05-15",
      timeInCompany: "10 months",
    },
    {
      id: 3,
      name: "Alex Lee",
      email: "alex.lee@email.com",
      position: "Software Engineer",
      startDate: "2018-03-01",
      timeInCompany: "3 years",
    },
    {
      id: 4,
      name: "Emily Green",
      email: "emily.green@email.com",
      position: "Human Resources Manager",
      startDate: "2019-09-01",
      timeInCompany: "1 year and 7 months",
    },
    {
      id: 5,
      name: "Samuel Chen",
      email: "samuel.chen@email.com",
      position: "Product Manager",
      startDate: "2017-11-01",
      timeInCompany: "3 years and 5 months",
    },
    {
      id: 6,
      name: "Karen Brown",
      email: "karen.brown@email.com",
      position: "Sales Representative",
      startDate: "2022-02-15",
      timeInCompany: "1 month",
    },
    {
      id: 7,
      name: "David Kim",
      email: "david.kim@email.com",
      position: "Data Analyst",
      startDate: "2020-08-01",
      timeInCompany: "1 year and 8 months",
    },
    {
      id: 8,
      name: "Lisa Nguyen",
      email: "lisa.nguyen@email.com",
      position: "Graphic Designer",
      startDate: "2021-01-15",
      timeInCompany: "1 year and 2 months",
    },
    {
      id: 9,
      name: "Michael Patel",
      email: "michael.patel@email.com",
      position: "Software Developer",
      startDate: "2019-05-01",
      timeInCompany: "2 years and 11 months",
    },
    {
      id: 10,
      name: "Samantha Williams",
      email: "samantha.williams@email.com",
      position: "Marketing Manager",
      startDate: "2018-07-01",
      timeInCompany: "2 years and 9 months",
    },
  ];

  const tableStyle = {
    margin: "2rem auto",
    maxWidth: "800px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const thStyle = {
    fontWeight: "bold",
    textAlign: "center",
    padding: "1rem",
    borderBottom: "1px solid #000",
  };

  const tdStyle = {
    textAlign: "center",
    padding: "1rem",
    borderBottom: "1px solid #000",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    color: "#fff",
    padding: "0.5rem",
    borderRadius: "4px",
  };
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
  return (
    <>
      <Navbar className="navi ">
        <Container className="text-primary">
          <Navbar.Brand href="/">
            <img src={logo}></img>
          </Navbar.Brand>
          <Nav className="mr-auto justify-content-betwen">
            <Nav.Link href="/home" className="text-black">
              Back
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div style={tableStyle}>
        <h1 style={{ textAlign: "center", margin: "1rem 0" }}>
          Employee Dashboard
        </h1>
        <h1 className="text-center">Welcome, {user.name} !</h1>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Position</th>
              <th style={thStyle}>Start Date</th>
              <th style={thStyle}>Time in Company</th>
              <th style={thStyle}>Edit</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td style={tdStyle}>{employee.name}</td>
                <td style={tdStyle}>{employee.email}</td>
                <td style={tdStyle}>{employee.position}</td>
                <td style={tdStyle}>{employee.startDate}</td>
                <td style={tdStyle}>{employee.timeInCompany}</td>
                <td style={tdStyle}>
                  <a href={`/profile/${employee.id}`} style={buttonStyle}>
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
