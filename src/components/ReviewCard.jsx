import StarRating from "./StarRating"
const ReviewCard = ({ review }) => {
  const { text, name, vote } = review
  return (
    <div className="card p-3 my-3">
      <i>"{text}"</i>
      <p>{name}</p>
      <StarRating vote={vote} />
    </div>
  )
}

export default ReviewCard
