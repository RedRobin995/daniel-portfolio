import { createElement } from "react"
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaCode,
} from "react-icons/fa"
import { SiExpress } from "react-icons/si"

const skills = [
  { label: "JavaScript (ES6+)", Icon: FaJsSquare },
  { label: "React", Icon: FaReact },
  { label: "HTML5", Icon: FaHtml5 },
  { label: "CSS3", Icon: FaCss3Alt },
  { label: "Node.js", Icon: FaNodeJs },
  { label: "Express.js", Icon: SiExpress },
  { label: "Git / GitHub", Icon: FaGitAlt },
  { label: "APIs", Icon: FaCode },
]

function SkillPill({ label, Icon }) {
  return (
    <li>
      <span className="skill-pill">
        {createElement(Icon, { "aria-hidden": true })}
        {label}
      </span>
    </li>
  )
}

function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="card surface-card">
        <header className="section-header">
          <span className="section-eyebrow">Toolbox</span>
          <h2 className="section-title">Tech Stack</h2>
        </header>

        <ul className="skills-grid">
          {skills.map((item) => (
            <SkillPill key={item.label} label={item.label} Icon={item.Icon} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
