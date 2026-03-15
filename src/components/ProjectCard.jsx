function ProjectCard({ title, description, tech, link, image }) {
  return (
    <div className="card">

      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />

        <div className="project-overlay">
          <a href={link} target="_blank" className="project-link">
        View Project
      </a>
        </div>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech-list">
        {tech.map((t, index) => (
          <span key={index} className="tech-badge">{t}</span>
        ))}
      </div>


    </div>
  )
}

export default ProjectCard