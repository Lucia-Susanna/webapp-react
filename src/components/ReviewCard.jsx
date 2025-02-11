const ReviewCard = ({ review }) => {
  const { text, name, vote } = review
  return (
    <div className="card p-3 my-3">
      <i>"{text}"</i>
      <p>{name}</p>
      <p>{vote}</p>
    </div>
  )
}

export default ReviewCard
