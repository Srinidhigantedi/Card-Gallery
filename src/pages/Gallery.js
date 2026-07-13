import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import products from "../data/data";

const Gallery = () => {
  const [category, setCategory] = useState("All");

  // 🔥 get search from navbar
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  const filteredProducts = products.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
    );
  });

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Explore Gallery</h1>

      

      {/* FILTERS */}
      <div className="filters">
        {["All", "Travel", "Animals", "Technology", "Birds"].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="gallery-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              
              <div className="image-container">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="card-content">
                <span className="badge">{product.category}</span>
                <h3>{product.title}</h3>

                <Link to={`/gallery/${product.id}`} className="btn">
                  View Details
                </Link>
              </div>

            </div>
          ))
        ) : (
          <p style={{ padding: "20px" }}>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;