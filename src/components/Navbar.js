import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Sumanth<span>.dev</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/testimonials" className="nav-link" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          <Link to="/contact" className="nav-link nav-cta" onClick={() => setIsOpen(false)}>
            Hire Me
          </Link>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;