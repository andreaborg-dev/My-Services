import { Helmet } from "react-helmet-async";
import CardList from "../Cards";
// import StoreList from "../StoreCards";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>My Services</title>
        <meta
          name="description"
          content="Explore the range of services we offer to help your business grow and succeed."
        />
      </Helmet>

      <div className="Services-Page">
        {/* <div className="Header">
          <h1>Store & Services</h1>
        </div> */}

        <div className="Header">
          <h1>Services</h1>
        </div>
        <CardList />
        {/* <div className="SHeader">
          <h1>Shop</h1>
        </div>
        <StoreList /> */}
      </div>
    </>
  );
}
