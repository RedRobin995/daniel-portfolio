import { experience } from "../data/experience"
import ExperienceCard from "./ExperienceCard"

function Experience() {
  return (
    <section id="experience" className="reveal">

      <div className="card">
        <h2>Experience</h2>

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