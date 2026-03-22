import { useEffect, useState } from "react"

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const handleScroll = () => {
      let current = ""

      if (window.scrollY < 120) {
        setActiveSection("hero")
        return
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 140) {
          current = section.getAttribute("id") ?? ""
        }
      })

      setActiveSection(current || "hero")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="navbar" aria-label="Main">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#hero">
            Daniel <span className="nav-logo-gradient">Jimenez</span>
          </a>
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
