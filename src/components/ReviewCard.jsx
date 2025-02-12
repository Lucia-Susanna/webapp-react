import StarRating from "./StarRating"
const ReviewCard = ({ review }) => {
  const { text, name, vote } = review
  return (
    <div className="card p-3 my-3">
      <i>"{text}"</i>
      <p className="fw-light my-2">- {name}</p>
      <StarRating vote={vote} />
    </div>
  )
}

export default ReviewCard
