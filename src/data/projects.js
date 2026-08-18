import pokedexImage from "../assets/pokedex-preview.png"
import mtgImage from "../assets/MTG preview img.png"
import financeImage from "../assets/Finance App Preview.png"
import enshinImage from "../assets/Enshin Karate Home Page.png"

export const projects = [


  {
    title: "Enshin Karate Costa Rica Web page",
    description:
      "Responsive web for Enshin Karate Martial Arts School in Costa Rica",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://enshinkaratecr.com/",
    image: enshinImage
  },
  {
    title: "Pokédex App",
    description:
      "Responsive Pokédex web application built with vanilla JavaScript that consumes the PokeAPI.",
    tech: ["HTML", "CSS", "JavaScript", "PokeAPI"],
    link: "https://redrobin995.github.io/pokedex-project/",
    image: pokedexImage
  },

  {
    title: "Trading Card Game Store",
    description:
      "Responsive web for Trading Card Game Store that pulls data from the Scryfall API.",
    tech: ["React", "HTML", "CSS", "JavaScript", "Scryfall API"],
    link: "https://redrobin995.github.io/MTG-STORE-REACT-PROYECT-2026/",
    image: mtgImage
  },

  {
    title: "Personal Savings and Expenses Tracker",
    description:
      "Android app for tracking personal savings and expenses.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/RedRobin995/finance-app",
    demo: "https://expo.dev/accounts/redrobin995/projects/finance-app2/builds/1945870e-d5e5-4778-8465-0377294ab9cd",
    image: financeImage
  },


]