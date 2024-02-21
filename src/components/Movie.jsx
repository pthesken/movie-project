export default function Movie({ movie, onClick }) {
  return (
    <div className="movie" onClick={() => onClick(movie)}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt="" />
    </div>
  );
}

//onClick(movie) is really setSelectedMovie(movie)
