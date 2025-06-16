import { motion } from 'framer-motion';
import heroImage from './hero.jpg';
import { NavLink } from 'react-router-dom';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__content"
        >
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Devansh Bansal</span>
          </h1>
          <h2 className="hero__subtitle">Full Stack Developer</h2>
          <p className="hero__description">
            I build exceptional digital experiences with modern technologies.
          </p>
          <div className="hero__buttons">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavLink
                to="/projects"
                className="hero__button hero__button--primary"
              >
                View My Work
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavLink
                to="/contact"
                className="hero__button hero__button--secondary"
              >
                Contact Me
              </NavLink>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero__image-container"
        >
          <div className="hero__image">
            <img src={heroImage} alt="Devansh" className="hero__image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
