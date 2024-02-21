import { useState } from "react";
import { movies } from "./data.js";
import "./App.css";
import Movie from "./Movie.jsx";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="movie-container">
      {movies.map((movie, index) => {
        return <Movie movie={movie} onClick={setSelectedMovie} key={index} />;
      })}

      {selectedMovie && (
        <div className="selected-movie">
          <h2>{selectedMovie.title}</h2>
          <img src={selectedMovie.image} alt={selectedMovie.title} />
          <p>{selectedMovie.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
