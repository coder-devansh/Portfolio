import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        className="theme-toggle__icon"
        animate={theme === 'dark' ? { x: 24 } : { x: 0 }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        {theme === 'dark' ? <FiMoon size={18} /> : <FiSun size={18} />}
      </motion.div>
    </motion.button>
  );
};