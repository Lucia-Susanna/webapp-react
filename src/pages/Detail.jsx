import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import ReviewCard from "../components/ReviewCard"
import { Link } from "react-router-dom"
const Detail = () => {

  const { id } = useParams()
  const { movie, movieDetail } = useGlobalContext()


  const renderReviews = () => {
    return movie.reviews.map(review => <ReviewCard review={review} key={review.id} />)


  }

  useEffect(() => movieDetail(id), [])
  return (
    <>
      <section className="d-flex">
        {movie?.image && <img src={movie?.image} alt={movie?.title} className="img-movie-detail" />}
        <div className="mx-4">
          <h1>{movie?.title}</h1>
          <h3>Directed by: <i>{movie?.director}</i></h3>
          <p>{movie?.abstract}</p>
        </div>
      </section>
      <section>
        {movie?.reviews && renderReviews()}
      </section>
      <Link to={'/'} className="btn btn-primary my-4">Torna all'elenco</Link>
    </>
  )
}

export default Detail
