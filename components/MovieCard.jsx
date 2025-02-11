
const MovieCard = ({ movies }) => {
  const { title, id, image, director, abstract, genre, release_year } = movies
  return (
    <>
      {movies.map(movie => (
        <div className="card" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <div >{movie.title}</div>
          <div>{movie.genre}</div>
          <i>Directed by: {movie.director} ({movie.release_year})</i>
          <div>{movie.abstract}</div>
        </div>
      ))}
    </>
  )
}

export default MovieCard
