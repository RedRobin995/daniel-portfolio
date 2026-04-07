function ProjectCard({ title, description, tech, link, demo, image }) {
  return (
    <article className="card project-card surface-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />

        <div className="project-overlay">
          <a
            className="project-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          {demo && (
            <a
              className="project-link project-link--secondary"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          )}
        </div>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech-list">
        {tech.map((t, index) => (
          <span key={index} className="tech-badge">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
