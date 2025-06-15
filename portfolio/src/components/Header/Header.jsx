import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const mainNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

const portfolioNavItems = [
  { name: 'Projects', href: '/projects' }, // Now a separate route
  { name: 'Achievements', href: '/achievements' },
];

const contactNavItem = {
  name: 'Contact', href: '/contact'
};

export const Header = () => {
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
          <Link to="/" className="header__logo">
            Devansh Bansal
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="logo-underline"
            />
          </Link>
        </motion.div>
        
        <nav className="header__nav">
          <ul className="header__nav-list">
            {/* Main Navigation */}
            <div className="nav-group">
              {mainNavItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <NavLink 
                    to={item.href} 
                    className={({ isActive }) => 
                      `header__nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.name}
                    <motion.span 
                      className="nav-underline"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </NavLink>
                </motion.li>
              ))}
            </div>

            {/* Portfolio Navigation with Separator */}
            <div className="nav-separator"></div>

            <div className="nav-group">
              {portfolioNavItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.href.startsWith('#') ? (
                    <a href={item.href} className="header__nav-link">
                      {item.name}
                      <motion.span 
                        className="nav-underline"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                  ) : (
                    <NavLink 
                      to={item.href}
                      className={({ isActive }) => 
                        `header__nav-link ${isActive ? 'active' : ''}`
                      }
                    >
                      {item.name}
                      <motion.span 
                        className="nav-underline"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </NavLink>
                  )}
                </motion.li>
              ))}
            </div>

            {/* Contact with Separator */}
            <div className="nav-separator"></div>

            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.6,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.1 }}
            >
              <a href={contactNavItem.href} className="header__nav-link contact-link">
                {contactNavItem.name}
                <motion.span 
                  className="nav-underline"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};