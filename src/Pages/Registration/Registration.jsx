import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [profession, setProfession] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      window.alert("Please enter full details.");
    } else {
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Phone", JSON.stringify(phone));
      localStorage.setItem("Profession", JSON.stringify(profession));
      localStorage.setItem("isLogin", JSON.stringify(true));

      navigate("/login");
    }
  }

  return (
    <div className="register">
      <form action="" className="registerForm" onSubmit={handleFormSubmit}>
        <span className="registerTitle">Create Account</span>

        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(event) => setName(event.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(event) => setPassword(event.target.value)}
        />

        <label>Phone Number</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your phone..."
          onChange={(event) => setPhone(event.target.value)}
        />

        <label>Choose your Profession</label>
        <Form.Control
          as="select"
          onChange={(event) => setProfession(event.target.value)}
        >
          <option>Developer</option>
          <option>Programmer</option>
          <option>Teacher</option>
          <option>Student</option>
          <option>Full Stack</option>
        </Form.Control>
        <button className="registerButton">Sign Up</button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">log in?</Link>
        </p>
      </form>
    </div>
  );
};
