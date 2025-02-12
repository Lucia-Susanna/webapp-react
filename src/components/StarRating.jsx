const StarRating = ({ vote }) => {
  const stars = []

  for (let i = 0; i <= 4; i++) {
    i < vote ? stars.push(<i className="bi bi-star-fill text-warning" key={i}></i>) : stars.push(<i className="bi bi-star text-warning" key={i}></i>)
  }

  return (
    <div>
      {stars}
    </div>
  )
}

export default StarRating
