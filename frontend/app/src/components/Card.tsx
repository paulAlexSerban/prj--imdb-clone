import React from "react";
import "../styles/Card.css";

interface CardProps {
  movieDetails: {
    id: Number;
    poster_path: string;
    title: string;
    release_date: string;
  };
  onClickShowDetails: (id: Number) => void;
}

const Card: React.FC<CardProps> = ({ movieDetails, onClickShowDetails }) => {

  const movieId = movieDetails.id;
  const movieTitle = movieDetails.title;
  const movieReleaseDate = movieDetails.release_date;
  const imgSrc = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
  const imgAlt = `${movieTitle}_poster`;

  return (
    <div
      className="card__container"
      onClick={() => onClickShowDetails(movieId)}>
      <div className="image__box">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <h4>{movieTitle}</h4>
      <p>{movieReleaseDate}</p>
    </div>
  );
};

export default Card;
