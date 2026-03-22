import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section id="projects" className="section-block projects-section reveal">
      <header className="section-header">
        <span className="section-eyebrow">Selected work</span>
        <h2 className="section-title">Projects</h2>
      </header>

      <div className="projects-grid reveal">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
