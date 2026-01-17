import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
  const categoryLabel =
    project.category === 'fullstack' ? 'Full‑Stack' : project.category === 'design' ? 'Design‑Only' : null;

  return (
    <article className="projectCard">
      <div className="projectCard__media">
        <img
          src={project.image}
          alt={project.title}
          className="projectCard__image"
          loading="lazy"
        />
        {categoryLabel && (
          <span className="projectCard__badge" aria-label="Project category">
            {categoryLabel}
          </span>
        )}
        <div className="projectCard__mediaGlow" aria-hidden="true" />
      </div>
      <div className="projectCard__body">
        <h3 className="projectCard__title">{project.title}</h3>
        <p className="projectCard__description">{project.description}</p>

        <div className="projectCard__tags" aria-label="Tech stack">
          {project.tags.map((tag, i) => (
            <span key={i} className="projectCard__tag">{tag}</span>
          ))}
        </div>

        <div className="projectCard__actions">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__btn projectCard__btn--primary"
            >
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard__btn projectCard__btn--ghost"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
