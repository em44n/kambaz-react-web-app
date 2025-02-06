import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="wd-sign-in-offset">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="form-spacing"
             defaultValue="alice"
             /><br />
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="form-spacing"
             defaultValue="123"/><br />
      <Form.Control id="wd-firstname"
             placeholder="First Name"
             className="form-spacing"
             defaultValue="Alice"/><br />
      <Form.Control id="wd-lastname"
             placeholder="Last Name"
             className="form-spacing"
             defaultValue="Wonderland"/><br />
      <Form.Control id="wd-dob"
             type="date"
             className="form-spacing"
             defaultValue="2000-01-01"/><br />
      <Form.Control id="wd-email"
             className="form-spacing"
             type="email"
             defaultValue="alice@wonderland"/><br />
      <Form.Control as="select" id="wd-role" defaultValue="FACULTY">
      <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </Form.Control>
      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signing"
            className="mt-3 btn btn-primary w-100 mb-2 bg-danger">
            Signout </Link><br />
    </div>
);}
