import { Helmet } from "react-helmet-async";
import Aboutcards from "../AboutMecards"
export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company and what we do."
        />
      </Helmet>
      <div className="Header">
        <h1>About Us</h1>
      </div>
      <Aboutcards />
    </>
  );
}
