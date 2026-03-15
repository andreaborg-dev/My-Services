import cards from "./Json/services.json";
import defaultimg from "./Images/Error_Img.png";
import './Styles/Cards.css';

export default function CardList() {
  const error_handler = (ev) => {
    ev.target.src = defaultimg;
    ev.target.alt = "Error Image";
  };
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={card.name} onError={error_handler} />
          <h3>{card.name}</h3>
          <p>{card.description}</p>
          <p>
            Price Range: {card.pricingmin} - {card.pricingmax}
          </p>
          <p>*Extra enchanted treats or supplies may add to the final price.</p>
        </div>
      ))}
    </div>
  );
}
