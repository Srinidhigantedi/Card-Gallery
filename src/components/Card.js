import { Link } from "react-router-dom";

function Card({ product }) {
  if (!product) return null;

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <Link to={`/gallery/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}

export default Card;