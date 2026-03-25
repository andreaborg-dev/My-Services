import { Helmet } from "react-helmet-async";
import "../Styles/Pages.css";

import { Link } from "react-router-dom";
import "../Styles/Home.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hocus Pets</title>
        <meta
          name="description"
          content="Welcome to our company! Learn more about our services and how we can help you achieve your goals."
        />
      </Helmet>
      <div className="Home-Page">
        <div className="Home-Container">
          <p id="Title">Where your pets feel right at home.</p>
          <p id="Subtitle">Your pet’s comfort and happiness is our priority.</p>

          <div className="homebuttons">
            <Link to="/about" className="btn1">
              About Us
            </Link>
            <Link to="/services" className="btn2">
              Our Services
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
