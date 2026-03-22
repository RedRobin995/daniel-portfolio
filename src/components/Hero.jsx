import FloatingIcons from "./FloatingIcons"

function Hero() {
  return (
    <section id="hero" className="hero">
      <FloatingIcons />

      <div className="hero-inner">
        <h1>
          <span className="gradient-text">Daniel Jimenez</span>
        </h1>

        <p className="hero-role">Front-End Developer</p>

        <p>
          Front-End Developer with 3+ years of experience building dynamic,
          data-driven interfaces using JavaScript and React.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button">
            View Projects
          </a>
          <a href="#about" className="btn btn-ghost">
            About me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
