import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
   <section id="projects" className="reveal">
  <div className="card">
      <h2>Projects</h2>

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

      </div>
</section>
  )
}

export default Projects