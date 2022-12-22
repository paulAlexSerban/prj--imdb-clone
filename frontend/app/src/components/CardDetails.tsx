import React from "react";
import "../styles/CardDetails.css";
import { useFetchAPI } from "../hooks/useFetchAPI";

interface CardDetailsProps {
  id: Number;
  backButtonHandler: () => void;
}

const CardDetails = ({ id, backButtonHandler }: CardDetailsProps) => {
  const [data] = useFetchAPI(`movie/${id}`);

  const movieTitle = data.title;
  const movieReleaseDate = data.release_date;
  const movieRuntime = data.runtime;
  const movieTagline = data.tagline;
  const movieOverview = data.overview;
  const movieGenres = data.genres;
  const imgSrc = `https://image.tmdb.org/t/p/w300/${data.poster_path}`;
  const imgAlt = `${movieTitle}_poster`;

  return (
    <div className="card_details_main__container">
      <button onClick={() => backButtonHandler()}>Go Back</button>
      {data && (
        <div className="card_details__container">
          <div className="poster__container">
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <div className="details__container">
            <h2>{movieTitle}</h2>
            <div className="extra__information">
              <ul>
                <li>{movieReleaseDate}</li>
                <li>
                  {movieGenres.map((genre: any) => {
                    const genreName = genre.name;
                    return <span key={genreName}>{genreName}</span>;
                  })}
                </li>
                <li>{movieRuntime} min</li>
              </ul>
            </div>
            <div className="tag_line">
              <i>{movieTagline}</i>
            </div>
            <div className="description">
              <h3>Overview</h3>
              <p>{movieOverview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
