import { motion } from 'framer-motion';
import './About.css';
import { Link } from 'react-router-dom';

export const About = () => {
  const skills = [
    'React', 'Express.js', 'JavaScript', 
    'CSS', 'Tailwind', 
     'Node.js', 'Github', 'springBoot'
  ];

  const handleViewResume = () => {
    // Replace with your actual resume URL or file path
    const resumeUrl = 'https://drive.google.com/file/d/1MkjDo9leWvbqL4nb0_Bn58qkVCjFuqSA/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="about" className="about section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="about__container container"
      >
        <motion.h2 
          className="section-title"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          About Me
        </motion.h2>
        
        <div className="about__content">
          <div className="about__text">
            <p className="about__intro">
              I'm a passionate frontend developer with expertise in React, JavaScript,
              and modern CSS. I specialize in creating responsive, performant, and
              accessible web applications.
            </p>
            <p className="about__sub">
              I care about clean UI, smooth interactions, and production-ready code.
              If you want a modern web experience that feels premium, let's talk.
            </p>
            
            <div className="action-buttons">
              <motion.button
                className="btn btn-primary"
                onClick={handleViewResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                View Resume
              </motion.button>

              <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
            </div>
            
            <div className="about__skills">
              <h3 className="skills-title">My Tech Stack</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <motion.span 
                    key={skill} 
                    className="skill-tag chip"
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
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="about__aside"
            >
              <h3 className="about__asideTitle">Quick Facts</h3>
              <ul className="about__facts" aria-label="About highlights">
                <li><span className="about__factLabel">Focus</span><span className="about__factValue">Frontend + Full‑Stack</span></li>
                <li><span className="about__factLabel">Strength</span><span className="about__factValue">UI polish + DX</span></li>
                <li><span className="about__factLabel">Work</span><span className="about__factValue">Projects & internships</span></li>
                <li><span className="about__factLabel">Open to</span><span className="about__factValue">Opportunities</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};