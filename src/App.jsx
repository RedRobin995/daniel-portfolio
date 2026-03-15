import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Navbar from "./components/Navbar"
import { useEffect } from "react"

function App() {

  useEffect(() => {

    const reveals = document.querySelectorAll(".reveal, .projects-grid .card")

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top

        if (elementTop < windowHeight - 100) {
          element.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", revealOnScroll)

    revealOnScroll()

    return () => window.removeEventListener("scroll", revealOnScroll)

  }, [])


  return (
    <>
      <Navbar />

      <main className="container">

        <Hero />

        <div className="info-grid">
          <About />
          <Skills />
        </div>

        <Projects />

        <Experience />

      </main>
    </>
  )
}

export default App