import "./Styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "./Images/Logo.webp";
import homeicon from "./Images/Icons/Home.webp";
import abouticon from "./Images/Icons/About_Us.webp";
import servicesicon from "./Images/Icons/Services.webp"
import contacticon from "./Images/Icons/Contact.webp";

export default function Header() {
  return (
    <div className="navbar">
      <div className="Logo">
        <Link to="/" className="logoimg">
          <img src={logo} alt="Logo" className="logo"/>
        </Link>
      </div>

      <div className="buttons">
        <Link to="/"><img src={homeicon} alt="Home"/></Link>
        <Link to="/about"><img src={abouticon} alt="Home"/></Link>
        <Link to="/services"><img src={servicesicon} alt="Home"/></Link>
        <Link to="/contact"><img src={contacticon} alt="Home"/></Link>
      </div>
    </div>
  );
}
