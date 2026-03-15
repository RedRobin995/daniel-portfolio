function ExperienceCard({ company, role, period, description }) {
  return (
    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="experience-card">
        <h3>{role}</h3>

        <p className="experience-company">
          {company} • {period}
        </p>

        <p>{description}</p>
      </div>

    </div>
  )
}

export default ExperienceCard