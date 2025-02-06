import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation"
    style={{ width: 120 }} 
    className="pt-2 d-flex flex-column align-items-start position-fixed top-0 bottom-0">
    <Link to="/Kambaz/Account/Signin" id="wd-account-link"
       className="text-black fw-bold text-start w-100 ps-2 border-start border-4 border-black text-decoration-none">
       Signin </Link>
    <Link to="/Kambaz/Account/Signup" id="wd-dashboard-link"
        className="text-danger fw-bold text-start w-100 ps-2 text-decoration-none">
       Signup </Link>
    <Link to="/Kambaz/Account/Profile" id="wd-course-link"
               className="text-danger fw-bold text-start w-100 ps-2 text-decoration-none">
       Profile </Link>
    </div>
);}
