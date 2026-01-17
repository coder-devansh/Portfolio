import { motion } from 'framer-motion';
import './Achievements.css';

const certificates = [
  {
    title: "Build with India Hackathon",
    issuer: "Unstop",
    date: "january 2025",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/6298f589-f7f3-40d2-8381-c7a47920754b.jpg",
    skills: ["web development"]
  },
  {
    title: "E-summit -2025",
    issuer: "IIIT Delhi",
    date: "March 2023",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/7bdca563-1e8c-4bba-af29-2097b7b3ebfb.jpg",
    skills: ["Node.js","React.js"]
  },
  {
    title: "React Specialist",
    issuer: "Meta",
    date: "January 2023",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/9db7416b-ae31-4f36-8e09-eb2491d77f58.jpg",
    skills: ["Hooks", "Context API", "Redux"]
  },

  {
    title: "Ey Hackathon",
    issuer: "Ey company",
    date: "Novemeber 2024",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/0b4b6377-f176-41c5-987d-573389ccd860.jpg",
    skills: ["Web Development"]
  },
  {
    title: "Roboweek Hackathon",
    issuer: "NIT Nagpur",
    date: "January 2025",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/fa170024-4d47-4c9d-a58c-1c4b009b3d01.jpg",
    skills: ["Web Development"]
  },
  {
    title: "Hackathon",
    issuer: "IIT Delhi",
    date: "January 2025",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/4fa2de0d-e169-4ef6-9e4d-6a4b244966b2.jpg",
    skills: ["Web Development"]
  },
  {
    title: "Coding",
    issuer: "Lets code ",
    date: "January 2025",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/8420e338-fc26-4e99-aa78-27f2f34e9bdc.jpg",
    skills: ["DSA","Aptitude","Problem Solving"]
  },
  {
    title: "Coding",
    issuer: "Flipkart",
    date: "January 2025",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/cfc8dfec-6328-4bda-be60-05e05a96d462.jpg",
    skills: ["DSA","Aptitude","Problem Solving"]
  },
  {
    title: "Coding",
    issuer: "NAMO",
    date: "January 2025",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/1fb79091-9e0b-4b40-9763-d03f8163476b.jpg",
    skills: ["Web Development"]
  },
];

export default function Achievements() {
  return (
    <motion.section 
     className="achievements section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
         className="achievements__header"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Validated skills and professional achievements.</p>
        </motion.div>

        <div className="achievements__grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="achievementCard"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="achievementCard__media">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="achievementCard__body">
                <h3 className="achievementCard__title">{cert.title}</h3>
                <div className="achievementCard__meta">
                  <span className="achievementCard__issuer">{cert.issuer}</span>
                  <span className="achievementCard__dot">•</span>
                  <span className="achievementCard__date">{cert.date}</span>
                </div>
                <div className="achievementCard__skills">
                  {cert.skills.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="achievementCard__skill"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
