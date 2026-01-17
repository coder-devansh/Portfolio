import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './Hero.css';

export const Hero = () => {
  const MotionLink = motion(Link);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const heroImageUrl =
    'https://image.pollinations.ai/prompt/' +
    encodeURIComponent(
      'A modern dark-themed illustration of a full-stack developer working on a laptop, clean desk setup, code visible on screen, neon blue and purple lighting, minimalistic, professional portfolio hero image, high contrast, premium look, no text, no watermark'
    ) +
    '?width=900&height=1100&seed=42&nologo=true';

  return (
    <section id="home" className="hero">
      <div className="hero__container container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero__content"
        >
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Devansh Bansal</span>
          </h1>
          <h2 className="hero__subtitle">Full‑Stack Developer</h2>
          <p className="hero__description">
            I build clean, fast, modern web experiences — focused on UI polish, performance, and real-world usability.
          </p>
          <div className="hero__chips" aria-label="Core skills">
            <span className="chip">React</span>
            <span className="chip">Vite</span>
            <span className="chip">Node.js</span>
            <span className="chip">UI/UX</span>
            <span className="chip">Performance</span>
          </div>
          <div className="hero__buttons">
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/projects"
              className="btn btn-primary"
            >
              View My Work
            </MotionLink>
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/contact"
              className="btn btn-secondary"
            >
              Contact Me
            </MotionLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="hero__visual"
          aria-hidden="false"
        >
          <div className="hero__image-container" aria-hidden="true">
            <div className="hero__image">
              {!heroImgFailed ? (
                <img
                  className="hero__image-img"
                  src={heroImageUrl}
                  alt="Abstract geometric illustration"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgFailed(true)}
                />
              ) : (
                <div className="hero__orb" />
              )}
            </div>
          </div>

          <div className="hero__stats" aria-label="Highlights">
            <div className="hero__stat">
              <strong>Polished UI</strong>
              <span>Modern, clean interfaces</span>
            </div>
            <div className="hero__stat">
              <strong>Fast Builds</strong>
              <span>Performance-first mindset</span>
            </div>
            <div className="hero__stat">
              <strong>Real Projects</strong>
              <span>APIs, auth, dashboards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};