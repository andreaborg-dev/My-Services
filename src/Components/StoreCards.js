import cards from "./Json/store.json";
import { Link } from "react-router-dom";
import defaultimg from "./Images/Error_Img.webp";
import "./Styles/Cards.css";

export default function CardList() {
  const error_handler = (ev) => {
    ev.target.src = defaultimg;
    ev.target.alt = "Error Image";
  };
  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const cardImages = importAll(
    require.context("./Images/Cards", false, /\.(webp)$/),
  );

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img
            src={cardImages[card.image] || defaultimg}
            alt={card.name}
            onError={error_handler}
          />
          <h3>{card.name}</h3>
          <p id="br-start">{card.description}</p>
          <p id="br-end">{card.descriptionbr}</p>
          <p id="price">
            Price: €{card.price}
          </p>
          <Link to="/contact">Buy Now</Link>
        </div>
      ))}
    </div>
  );
}
