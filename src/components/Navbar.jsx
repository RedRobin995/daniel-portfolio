import { useEffect, useState } from "react"

function Navbar() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const handleScroll = () => {
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute("id")
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-logo">
          Daniel Jimenez
        </div>

<ul className="nav-links">

  <li>
    <a
      href="#about"
     className={
  activeSection === "about" || activeSection === "skills"
    ? "active"
    : ""
}
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#skills"
      className={activeSection === "skills" ? "active" : ""}
    >
      Tech
    </a>
  </li>

  <li>
    <a
      href="#projects"
      className={activeSection === "projects" ? "active" : ""}
    >
      Projects
    </a>
  </li>

  <li>
    <a
      href="#experience"
      className={activeSection === "experience" ? "active" : ""}
    >
      Experience
    </a>
  </li>

</ul>

      </div>
    </nav>
  )
}

export default Navbar