import { experience } from "../data/experience"
import ExperienceCard from "./ExperienceCard"

function Experience() {
  return (
    <section id="experience" className="section-block reveal">
      <div className="card surface-card experience-shell">
        <header className="section-header">
          <span className="section-eyebrow">Background</span>
          <h2 className="section-title">Experience</h2>
        </header>

        <div className="timeline">
          {experience.map((job, index) => (
            <ExperienceCard
              key={index}
              company={job.company}
              role={job.role}
              period={job.period}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
