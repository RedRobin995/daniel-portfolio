function ProjectCard({ title, description, tech, link, image }) {
  return (
    <article className="card project-card surface-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />

        <div className="project-overlay">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
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
