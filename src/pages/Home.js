import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/data";

function Home() {
  const images = [
  products[0].image,   // New York
  products[5].image,   // Dog
  products[10].image,  // Laptop
  products[15].image,  // Parrot
];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <div className="home">

      {/* 🔥 HERO SLIDER */}
      <div
        className="home-hero"
        style={{
          backgroundImage: `url(${images[index]})`
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="fade-in">Discover Stunning Collections</h1>

          <p className="fade-in delay">
            Explore Travel, Animals, Birds & Technology in one place
          </p>

          <Link to="/gallery" className="hero-btn">
            Explore Gallery
          </Link>
        </div>

        {/* DOTS */}
        <div className="dots">
          {images.map((_, i) => (
            <span key={i} className={i === index ? "dot active" : "dot"}></span>
          ))}
        </div>
      </div>

      {/* 🔥 PREMIUM FEATURES SECTION (THIS IS WHAT YOU WANT) */}
      <div className="home-features">

        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Premium UI</h3>
          <p>Clean, modern and Amazon-like design experience</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast & Responsive</h3>
          <p>Works smoothly across all devices and screens</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Smart Filters</h3>
          <p>Find exactly what you need instantly</p>
        </div>

      </div>

    </div>
  );
}

export default Home;