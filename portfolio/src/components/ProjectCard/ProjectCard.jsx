import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card__image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
        />
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__links">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
            Live Demo
          </a>
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};
