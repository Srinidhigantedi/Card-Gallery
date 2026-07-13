import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // 🔥 navigate with search query
    navigate(`/gallery?search=${value}`);
  };

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <Link to="/">Card<span>Gallery</span></Link>
      </div>

      <input
        type="text"
        placeholder="Search gallery..."
        className="search-bar"
        value={search}
        onChange={handleSearch}
      />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;