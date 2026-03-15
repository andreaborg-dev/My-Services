import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Get in touch with us to learn more about our services and how we can help you."
        />
      </Helmet>
      <div className="Contact-Page">
        <div className="Header">
          <h1>Contact Us</h1>
        </div>
      </div>
    </>
  );
}
