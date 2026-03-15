import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="Learn more about our company and what we do."
        />
      </Helmet>
      <div className="Header">
        <h1>About Me</h1>
      </div>
    </>
  );
}
