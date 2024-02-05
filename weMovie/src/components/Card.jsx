import PropTypes from "prop-types";

const Card = ({ id, title, genre, releaseYear, rating }) => {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
      <p>
        <strong>Release Year:</strong> {releaseYear}
      </p>
      <p>
        <strong>Rating:</strong> {rating}
      </p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Card;
