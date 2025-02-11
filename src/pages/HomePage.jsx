import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect } from "react"
import MovieCard from "../components/MovieCard"

const HomePage = () => {

  const { fetchMovies, movies } = useGlobalContext()

  useEffect(fetchMovies, [])



  return (
    <>
      <h1 className='text-center text-primary'>Bool-Movies</h1>
      <div className="row row-cols-3">
        <MovieCard movies={movies} />
      </div>
    </>
  )
}

export default HomePage
