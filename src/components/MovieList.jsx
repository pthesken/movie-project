import Movie from "./Movie.jsx";

export default function MovieList({ movies, setSelectedMovie }) {
  return (
    <>
      {movies.map((movie, index) => {
        return <Movie movie={movie} onClick={setSelectedMovie} key={index} />;
      })}
    </>
  );
}
