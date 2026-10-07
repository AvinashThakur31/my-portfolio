const projects = [
  {
    title: "CampusHub",
    icon: "💻",
    description:
      "College ERP style web application for students.",
    tech: "React + CSS + Java"
  },
  {
    title: "AI Travel Planner",
    icon: "✈️",
    description:
      "Plan trips and generate travel ideas using AI.",
    tech: "React + API"
  },
  {
    title: "BIOTECH PARK",
    icon: "👤",
    description:
      "A web application for Biotech Park, Greater Noida.",
    tech: "HTML + CSS + BOOTSTRAP + JavaScript"
  },
  {
    title: "Blinkit Clone",
    icon: "🤟",
    description:
      "Clone of the Blinkit food delivery app.",
    tech: "html + CSS + JavaScript + bootstrap"
  },
  {
    title: "Music Player",
    icon: "🎵",
    description:
      "Simple browser based music player.",
    tech: "HTML + CSS + JavaScript + bootstrap"
  },
  {
    title: "Know Your City",
    icon: "📍",
    description:
      "City information and guide web application.",
    tech: "HTML + CSS + JavaScript"
  }
];

function Projects() {
  return (
    <section className="page">

      <div className="page-heading">
        <h1>My Projects</h1>
        <p>Some of my recent work</p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h2>{project.title}</h2>

            <p>
              {project.description}
            </p>

            <span className="tech">
              {project.tech}
            </span>

            <button>
              View Project →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;