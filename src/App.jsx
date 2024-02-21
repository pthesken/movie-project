import { useState } from "react";
import { movies } from "./data.js";
import "./App.css";
import MovieList from "./components/MovieList.jsx";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="movie-container">
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />

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
