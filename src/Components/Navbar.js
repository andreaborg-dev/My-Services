import "./Styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "./Images/Logo.png";

export default function Header() {
  return (
    <div className="navbar">
      <div className="Logo">
        <Link to="/" className="logoimg">
          <img src={logo} alt="Logo" className="logo"/>
        </Link>
      </div>

      <div className="buttons">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact" id="CTA">Contact</Link>
      </div>
    </div>
  );
}
