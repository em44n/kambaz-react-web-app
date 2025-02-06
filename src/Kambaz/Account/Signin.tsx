import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="wd-sign-in-offset">
      <h1>Sign in</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="form-spacing"/><br />
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="form-spacing"/><br />
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign in </Link><br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div> );}