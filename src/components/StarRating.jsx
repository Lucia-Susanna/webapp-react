const StarRating = ({ vote }) => {
  const stars = []

  for (let i = 0; i <= 4; i++) {
    i < vote ? stars.push(<i className="bi bi-star-fill text-warning"></i>) : stars.push(<i className="bi bi-star text-warning"></i>)
  }
  return (
    <div>
      {stars}
    </div>
  )
}

export default StarRating
