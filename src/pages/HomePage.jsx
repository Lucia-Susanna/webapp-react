import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect } from "react"
import MovieCard from "../components/MovieCard"

const HomePage = () => {

  const { fetchMovies, movies } = useGlobalContext()

  useEffect(fetchMovies, [])



  return (
    <>
      <div className="row row-cols-3">
        <MovieCard movies={movies} />
      </div>
    </>
  )
}

export default HomePage
