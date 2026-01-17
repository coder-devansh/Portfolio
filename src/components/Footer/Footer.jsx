import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">Devansh Bansal</div>
            <p className="footer__tagline">Building clean, fast, modern web experiences.</p>
          </div>

          <nav className="footer__links" aria-label="Footer">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/achievements">Achievements</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Devansh Bansal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};