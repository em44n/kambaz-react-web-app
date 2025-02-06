// import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="wd-sign-in-offset">
    <h1>Sign up</h1>
    <Form.Control id="wd-username"
           placeholder="username"
           className="form-spacing"/><br />
    <Form.Control id="wd-password"
           placeholder="password" type="password"
           className="form-spacing"/><br />
    <Link id="wd-signin-btn"
          to="/Kambaz/Account/Profile"
          className="btn btn-primary w-100 mb-2">
          Sign up </Link><br />
    <Link id="wd-signup-link" to="/Kambaz/Account/Signin">Sign in</Link>
  </div> 

);}
