import { Helmet } from "react-helmet-async";
import "../Styles/Pages.css";
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
        <div className="Header">
          <h1>Welcome to my homepage</h1>
        </div>
      </div>
    </>
  );
}
