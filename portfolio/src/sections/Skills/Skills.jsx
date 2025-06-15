import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact color="#61DAFB" />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs color="#339933" />, color: "#339933" },
  { name: "Git", icon: <FaGitAlt color="#F05032" />, color: "#F05032" },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, color: "#47A248" },
  { 
    name: "Express", 
    icon: <div style={{fontWeight: "bold", color: "#fff", fontSize: "2.3rem", lineHeight: 1}}>Ex</div>, 
    color: "#fff" 
  },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, color: "#F7DF1E", iconStyle: { filter: "drop-shadow(0 0 2px #000)" } },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, color: "#3178C6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" />, color: "#06B6D4" },
];

export const Skills = () => {
  return (
    <>
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }

        .tech-section {
          padding: 4rem 1rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          min-height: 380px;
          max-width: 600px;
          margin: 0 auto;
          user-select: none;
          background: #000000;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.8);
          color: white;
        }

        .tech-section h2 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 4rem;
          color:rgb(138, 112, 232);
          user-select: none;
          text-shadow: 0 0 8pxrgb(240, 249, 251);
        }

        .orbit-container {
          position: relative;
          width: 300px;
          height: 300px;
          animation: rotate 20s linear infinite;
          border-radius: 50%;
        }

        .center-mind {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid #444;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
          user-select: none;
          cursor: default;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: #61dafb;
          text-shadow: 0 0 8px #61dafb;
        }

        .orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80px;
          height: 80px;
          margin: -40px;
          background: #111111;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          cursor: default;
          box-shadow: 0 4px 12px rgba(0,0,0,0.8);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          user-select: none;
          padding: 0.3rem;
          color: inherit;
        }

        .orbit-item:hover {
          transform: scale(1.3);
          box-shadow: 0 0 30px #61dafb;
          z-index: 10;
          background: #4F46E5; /* Indigo */
          color: white;
        }

        .orbit-item:hover span.tech-name {
          color: white;
          text-shadow: 0 0 8px rgba(255,255,255,0.9);
        }

        .orbit-item > div {
          font-size: 2.3rem;
          line-height: 1;
        }

        .orbit-item span.tech-name {
          margin-top: 8px;
          font-size: 0.85rem;
          color: #ccc;
          text-align: center;
          white-space: nowrap;
          user-select: none;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          text-shadow: 0 0 3px rgba(0,0,0,0.7);
        }

        /* Positions for 8 items around the circle, shifted by 22.5deg */
        .orbit-item:nth-child(2) { transform: rotate(22.5deg) translate(140px) rotate(-22.5deg); }
        .orbit-item:nth-child(3) { transform: rotate(67.5deg) translate(140px) rotate(-67.5deg); }
        .orbit-item:nth-child(4) { transform: rotate(112.5deg) translate(140px) rotate(-112.5deg); }
        .orbit-item:nth-child(5) { transform: rotate(157.5deg) translate(140px) rotate(-157.5deg); }
        .orbit-item:nth-child(6) { transform: rotate(202.5deg) translate(140px) rotate(-202.5deg); }
        .orbit-item:nth-child(7) { transform: rotate(247.5deg) translate(140px) rotate(-247.5deg); }
        .orbit-item:nth-child(8) { transform: rotate(292.5deg) translate(140px) rotate(-292.5deg); }
        .orbit-item:nth-child(9) { transform: rotate(337.5deg) translate(140px) rotate(-337.5deg); }

        /* Responsive */
        @media (max-width: 640px) {
          .tech-section {
            padding: 3rem 1rem 1.5rem;
          }
          .tech-section h2 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .orbit-container {
            width: 250px;
            height: 250px;
          }
          .orbit-item {
            width: 65px;
            height: 65px;
            margin: -32.5px;
            font-size: 0.8rem;
          }
          .orbit-item > div {
            font-size: 1.8rem;
          }
          .center-mind {
            width: 80px;
            height: 80px;
            border: 2px solid #444;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
            font-size: 2.4rem;
          }
          .orbit-item:nth-child(2) { transform: rotate(22.5deg) translate(110px) rotate(-22.5deg); }
          .orbit-item:nth-child(3) { transform: rotate(67.5deg) translate(110px) rotate(-67.5deg); }
          .orbit-item:nth-child(4) { transform: rotate(112.5deg) translate(110px) rotate(-112.5deg); }
          .orbit-item:nth-child(5) { transform: rotate(157.5deg) translate(110px) rotate(-157.5deg); }
          .orbit-item:nth-child(6) { transform: rotate(202.5deg) translate(110px) rotate(-202.5deg); }
          .orbit-item:nth-child(7) { transform: rotate(247.5deg) translate(110px) rotate(-247.5deg); }
          .orbit-item:nth-child(8) { transform: rotate(292.5deg) translate(110px) rotate(-292.5deg); }
          .orbit-item:nth-child(9) { transform: rotate(337.5deg) translate(110px) rotate(-337.5deg); }
        }
      `}</style>

     <section className="tech-section" id="skills">
        <h2>Tech Stack</h2>
        <div className="orbit-container" aria-label="Tech stack orbiting the mind">
          <div className="center-mind" aria-label="Mind" role="img" aria-roledescription="emoji">⚙️</div>
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="orbit-item"
              title={tech.name}
              aria-label={tech.name}
              style={{ color: tech.color, ...tech.iconStyle }}
            >
              <div>{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};