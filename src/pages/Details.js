import { useParams, Link } from "react-router-dom";
import products from "../data/data";

function Details() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="details-container">

      <div className="details-card">

        {/* LEFT IMAGE */}
        <div className="details-image">
          <img src={product.image} alt={product.title} className="details-img" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="details-content">

          <span className="category">{product.category}</span>

          <h1>{product.title}</h1>

          {/* ⭐ UPDATED RATING */}
          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>{product.rating}/5</span>
          </div>

          <p>{product.description}</p>

          {/* ================= TRAVEL ================= */}
          {product.category === "Travel" && (
            <div className="info-grid">

              <div className="info-card fade-up">
                <h4>📍 Country</h4>
                <p>{product.country}</p>
              </div>

              <div className="info-card fade-up">
                <h4>⏳ Duration</h4>
                <p>{product.duration}</p>
              </div>

              <div className="info-card fade-up">
                <h4>📅 Best Time</h4>
                <p>{product.bestTime}</p>
              </div>

              <div className="info-card fade-up">
                <h4>🏷 Category</h4>
                <p>{product.category}</p>
              </div>

            </div>
          )}

          {/* ================= ANIMALS ================= */}
          {product.category === "Animals" && (
            <div className="info-grid">

              <div className="info-card fade-up">
                <h4>🔬 Scientific Name</h4>
                <p>{product.scientificName}</p>
              </div>

              <div className="info-card fade-up">
                <h4>🌍 Habitat</h4>
                <p>{product.habitat}</p>
              </div>

              <div className="info-card fade-up">
                <h4>🥩 Diet</h4>
                <p>{product.diet}</p>
              </div>

              <div className="info-card fade-up">
                <h4>⏳ Lifespan</h4>
                <p>{product.lifespan}</p>
              </div>

            </div>
          )}

          {/* ================= TECHNOLOGY ================= */}
          {product.category === "Technology" && (
            <div className="info-grid">

              <div className="info-card fade-up">
                <h4>🏷 Brand</h4>
                <p>{product.brand}</p>
              </div>

              <div className="info-card fade-up">
                <h4>⚙ Processor</h4>
                <p>{product.processor}</p>
              </div>

              <div className="info-card fade-up">
                <h4>💾 Storage</h4>
                <p>{product.storage}</p>
              </div>

              <div className="info-card fade-up">
                <h4>⭐ Rating</h4>
                <p>{product.rating}/5</p>
              </div>

            </div>
          )}

          {/* ================= BIRDS ================= */}
          {product.category === "Birds" && (
            <div className="info-grid">

              <div className="info-card fade-up">
                <h4>🌍 Habitat</h4>
                <p>{product.habitat}</p>
              </div>

              <div className="info-card fade-up">
                <h4>🕊 Wingspan</h4>
                <p>{product.wingspan}</p>
              </div>

              <div className="info-card fade-up">
                <h4>⏳ Lifespan</h4>
                <p>{product.lifespan}</p>
              </div>

              <div className="info-card fade-up">
                <h4>🏷 Category</h4>
                <p>{product.category}</p>
              </div>

            </div>
          )}

          {/* ================= HIGHLIGHTS ================= */}
          <div className="highlights">

            <h2>Highlights</h2>

            <div className="highlight-grid">
              {product.highlights &&
                product.highlights.map((item, index) => (
                  <div key={index} className="highlight-item">
                    ✅ {item}
                  </div>
                ))}
            </div>

          </div>

          {/* BACK BUTTON */}
          <Link to="/gallery" className="back-btn">
            ← Back to Gallery
          </Link>

        </div>
      </div>

      {/* ================= RELATED ================= */}
      <div className="related-section">

        <h2 className="related-title">
          Related {product.category}
        </h2>

        <div className="related-grid">
          {relatedProducts.map((item) => (
            <Link
              to={`/gallery/${item.id}`}
              className="related-card"
              key={item.id}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Details;