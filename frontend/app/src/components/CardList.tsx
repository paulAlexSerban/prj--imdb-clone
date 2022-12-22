import React from "react";
import Card from "./Card";

interface CardListProps {
  name: string;
  cards: { movie: Object }[];
  onClickShowDetails: (id: Number) => void;
}

const CardList: React.FC<CardListProps> = ({
  name,
  cards,
  onClickShowDetails,
}) => {
  
  return (
    <div className="cards_list__container">
      <h2>{name}</h2>
      <div className="cards__list">
        {cards &&
          cards.map((movie: any) => {
            return (
              <Card
                movieDetails={movie}
                key={movie.id}
                onClickShowDetails={(id: Number) => onClickShowDetails(id)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
