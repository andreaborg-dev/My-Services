import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Header from "./Navbar";
import './Styles/Main.css';

export default function Main() {
  return (
    <Router>
      <Header />
      <div className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
