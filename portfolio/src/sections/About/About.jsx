import { motion } from 'framer-motion';
import './About.css';
import { useState, useEffect } from 'react';

export const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    'React', 'Express.js', 'JavaScript',
    'CSS', 'Tailwind',
    'Node.js', 'Github', 'Spring Boot'
  ];

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleViewResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1MkjDo9leWvbqL4nb0_Bn58qkVCjFuqSA/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="about" className={`about section ${darkMode ? 'dark' : ''}`}>
      <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="about__container"
      >
        <motion.h2
          className="section-title"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="section-title__underline">About Me</span>
        </motion.h2>

        <div className="about__content">
          <div className="about__text">
            <p className="about__intro">
              I'm a passionate frontend developer with expertise in React, JavaScript,
              and modern CSS. I specialize in creating responsive, performant, and
              accessible web applications.
            </p>

            <div className="action-buttons">
              <motion.button
                className="resume-button"
                onClick={handleViewResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View Resume
              </motion.button>

              <motion.a
                href="#contact"
                className="contact-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Contact Me
              </motion.a>
            </div>

            <div className="about__skills">
              <h3 className="skills-title">My Tech Stack</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="about__image">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="image-wrapper"
            >
              <img
                src="/assets/Devansh3.png"
                alt="Profile"
                loading="lazy"
                className="profile-img"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
