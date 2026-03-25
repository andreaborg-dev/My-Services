import cards from "./Json/aboutus.json";
import defaultimg from "./Images/Error_Img.webp";

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
    <div className="aboutcards-container">
      {cards.map((card) => (
        <div className="aboutcard" key={card.id}>
          <div className="text">
            <h3 id="AboutName">{card.Fullname}</h3>
            <p id="Role">{card.Role}</p>
            <p id="AboutUsDesc">{card.Description}</p>
          </div>

          <div className="image-wrapper">
            <img
              src={cardImages[card.image] || defaultimg}
              alt={card.Name}
              onError={error_handler}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
