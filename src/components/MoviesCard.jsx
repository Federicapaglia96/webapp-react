import { Link } from "react-router-dom";


function MoviesCard({ movie }) {
  const { title, director, image } = movie;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Regista: {director}</p>
      </div>
    </div>
  )
}

export default MoviesCard;