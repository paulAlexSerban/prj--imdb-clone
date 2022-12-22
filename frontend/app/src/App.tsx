import React, { useState } from "react";
import "./styles/App.css";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import { useFetchAPI } from "./hooks/useFetchAPI";
import InputSearch from "./components/InputSearch";

const App: React.FC = () => {
  const [endpoint, setEndpoint] = useState("movie/now_playing");
  const [optionState, setOptionState] = useState<
    "Now Playing" | "Trending" | "Search Results"
  >("Now Playing");
  const [queryValue, setQueryValue] = useState("");
  const [data, error, loading] = useFetchAPI(endpoint, queryValue);
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [cardId, setCardId] = useState(0);

  const cardDetailsHandler = (id: any) => {
    setCardId(id);
    setShowCardDetails(true);
  };

  const goToMainPage = () => {
    setShowCardDetails(false);
  };

  const triggerPlayingNow = () => {
    setEndpoint("movie/now_playing");
    setOptionState("Now Playing");
    setQueryValue("");
  };

  const triggerTrending = () => {
    setEndpoint("trending/movie/day");
    setOptionState("Trending");
    setQueryValue("");
  };

  const triggerSearchResults = (query: string) => {
    setEndpoint("search/movie");
    setQueryValue(query);
    setOptionState("Search Results");
  };

  return (
    <div className="App">
      <div className="container__image">
        <InputSearch
          onSearchHandler={(query: string) => triggerSearchResults(query)}
        />
      </div>
      {showCardDetails ? (
        <CardDetails
          key={cardId}
          id={cardId}
          backButtonHandler={() => goToMainPage()}
        />
      ) : (
        <>
          <div className="switch__container">
            <button
              className={optionState === "Now Playing" ? "button_active" : ""}
              onClick={() => triggerPlayingNow()}
            >
              Playing Now
            </button>
            <button
              className={optionState === "Trending" ? "button_active" : ""}
              onClick={() => triggerTrending()}
            >
              Trending
            </button>
          </div>
          {loading ? (
            <h3 className="loading__container">Loading...</h3>
          ) : !error ? (
            <h3 className="error__container">{error.errors}</h3>
          ) : (
            <CardList
              name={optionState}
              cards={data?.results}
              onClickShowDetails={(id: Number) => cardDetailsHandler(id)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
