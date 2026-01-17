import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const mainNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

const portfolioNavItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Skills', href: '/skills' },
];

const contactNavItem = { name: 'Contact', href: '/contact' };

const allNavItems = [
  ...mainNavItems,
  ...portfolioNavItems,
  contactNavItem,
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      className="header"
    >
      <div className="header__container">
        <motion.div
          whileHover={{ 
            scale: 1.05,
            color: "var(--accent-color)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" className="header__logo" aria-label="Go to home">
            Devansh Bansal
          </Link>
        </motion.div>

        <button
          className={`header__menu-btn ${isOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav className={`header__nav ${isOpen ? 'open' : ''}`} aria-label="Primary">
          <ul className="header__nav-list">
            {allNavItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
              >
                <NavLink
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'active' : ''} ${item.name === 'Contact' ? 'contact-link' : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="header__nav-text">{item.name}</span>
                      {isActive && (
                        <motion.span
                          className="header__nav-underline"
                          layoutId="header-nav-underline"
                          transition={{ type: 'spring', stiffness: 520, damping: 34 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};