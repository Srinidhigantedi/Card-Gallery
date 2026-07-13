import { FaProjectDiagram, FaBolt, FaTools, FaUser } from "react-icons/fa";

function About() {
  return (
    <div className="about">

      {/* HERO */}
      <div className="about-hero">
        <h1>About CardGallery</h1>
        <p>
          A modern Amazon-style gallery built with React, focused on clean UI,
          responsive design, and smooth user experience.
        </p>
      </div>

      {/* CARDS */}
      <div className="about-container">

        <div className="about-card">
          <div className="icon"><FaProjectDiagram /></div>
          <h2>Project Overview</h2>
          <p>
            CardGallery is a frontend gallery inspired by Amazon UI.
            It showcases categorized cards with clean layout and smooth navigation.
          </p>
        </div>

        <div className="about-card">
          <div className="icon"><FaBolt /></div>
          <h2>Features</h2>
          <ul>
            <li>Responsive Design</li>
            <li>Category-based Gallery</li>
            <li>React Router Navigation</li>
            <li>Clean UI Components</li>
          </ul>
        </div>

        <div className="about-card">
          <div className="icon"><FaTools /></div>
          <h2>Tech Stack</h2>
          <ul>
            <li>React JS</li>
            <li>CSS (Flexbox + Grid)</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="about-card highlight">
          <div className="icon"><FaUser /></div>
          <h2>Developer</h2>
          <p>
            Developed by <strong>Srinidhi</strong><br />
            Focused on real-world UI/UX and frontend development.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;