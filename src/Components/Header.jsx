import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed-top">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-primary fw-bold fs-3 text-decoration-none">LuxuryEstates</Link>
          
          {/* Desktop Navigation */}
          <nav className="d-none d-md-flex gap-5 ">
          <Link to="/" className="text-black text-decoration-none hover-primary">Home</Link>
          <Link to="/" className="text-black text-decoration-none hover-primary">Properties</Link>
          <Link to="/" className="text-black text-decoration-none hover-primary">About</Link>
          <Link to="/" className="text-black text-decoration-none hover-primary">Contact</Link>
        </nav>


          {/* Mobile Menu Button */}
          <button
            className="btn d-md-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-3 d-md-none">
            <Link to="/" className="d-block py-2 text-secondary text-decoration-none hover-primary">Home</Link>
            <Link to="/properties" className="d-block py-2 text-secondary text-decoration-none hover-primary">Properties</Link>
            <Link to="/about" className="d-block py-2 text-secondary text-decoration-none hover-primary">About</Link>
            <Link to="/contact" className="d-block py-2 text-secondary text-decoration-none hover-primary">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
