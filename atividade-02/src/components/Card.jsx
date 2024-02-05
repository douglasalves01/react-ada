import PropTypes from "prop-types";
import "./Card.module.css"; // Importando o arquivo de estilos CSS

const Card = ({ cardImage, cardName, cardDescription, cardPrice }) => {
  return (
    <div className="card">
      <img
        src={cardImage}
        alt={cardName}
        className="card-image"
        width={250}
        height={250}
      />
      <div className="card-details">
        <h2 className="card-name">{cardName}</h2>
        <p className="card-description">{cardDescription}</p>
        <p className="card-price">Preço: R${cardPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardPrice: PropTypes.number.isRequired,
};

export default Card;
