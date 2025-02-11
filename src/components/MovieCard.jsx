import { Link } from "react-router-dom"

const MovieCard = ({ movies }) => {

  return (
    <>
      {movies.map(movie => (
        <div className="col my-4" key={movie.id}>
          <div className="card p-3">
            <img src={movie.image} alt={movie.title} className="movie-img" />
            <h5 className="my-3" >{movie.title}</h5>
            <div>{movie.genre}</div>
            <i>Directed by: {movie.director} ({movie.release_year})</i>
            <div>{movie.abstract}</div>
            <Link to={`movie/${movie.id}`} className="btn btn-primary my-3"> Mostra dettagli</Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieCard
