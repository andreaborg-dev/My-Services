import './Styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      </div>
    );
}
