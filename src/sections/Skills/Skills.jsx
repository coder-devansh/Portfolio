import { motion } from 'framer-motion';
import './Skills.css';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'React', level: 'Frontend', icon: <FaReact />, color: '#61DAFB' },
  { name: 'JavaScript', level: 'Language', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'TypeScript', level: 'Language', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Node.js', level: 'Backend', icon: <FaNodeJs />, color: '#22c55e' },
  { name: 'Express', level: 'Backend', icon: <SiExpress />, color: '#e5e7eb' },
  { name: 'MongoDB', level: 'Database', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Tailwind CSS', level: 'Styling', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Git', level: 'Tooling', icon: <FaGitAlt />, color: '#F05032' },
];

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">A modern stack for building fast, maintainable products.</p>

        <div className="skills__grid">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="skillCard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              whileHover={{ y: -4 }}
            >
              <div className="skillCard__icon" style={{ color: skill.color }} aria-hidden="true">
                {skill.icon}
              </div>
              <div className="skillCard__content">
                <div className="skillCard__name">{skill.name}</div>
                <div className="skillCard__meta">{skill.level}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};