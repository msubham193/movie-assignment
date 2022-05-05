import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!email || !password) {
      window.alert("Credentials cannot be blank !");
    } else if (password !== pass || email !== mail) {
      window.alert("Wrong Credentials !");
    } else {
      navigate("/home");
    }
  }

  return (
    <div className="register">
      <form action="" className="registerForm" onSubmit={handleLogin}>
        <span className="registerTitle">Login here !</span>

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

        <button className="registerButton">Log In</button>
        <p className="forgot-password text-right">
          Don't have an account?<Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
