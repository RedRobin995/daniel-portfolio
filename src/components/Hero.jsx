import FloatingIcons from "./FloatingIcons"

function Hero() {
  return (
    <section className="hero">

      <FloatingIcons />

      <h1>Daniel Jimenez</h1>

      <h2>Front-End Developer</h2>

      <p>
        Front-End Developer with 3+ years of experience building dynamic,
        data-driven interfaces using JavaScript and React.
      </p>

      <a href="#projects" className="hero-button">
        View Projects
      </a>

    </section>
  )
}

export default Hero