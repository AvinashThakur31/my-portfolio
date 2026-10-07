const skills = [
  {
    name: "HTML",
    icon: "🌐"
  },
  {
    name: "CSS",
    icon: "🎨"
  },
  {
    name: "JavaScript",
    icon: "JS"
  },
  {
    name: "React",
    icon: "⚛️"
  },
  {
    name: "Java",
    icon: "☕"
  },
  {
    name: "MySQL",
    icon: "🗄️"
  },
  {
    name: "Bootstrap",
    icon: "B"
  },
  {
    name: "Git",
    icon: "🔀"
  },
  {
    name: "Node.js",
    icon: "🟢"
  },
  {
    name: "MongoDB",
    icon: "🍃"
  },
  {
    name: "Python",
    icon: "🐍"
  },
  {
    name: "C++",
    icon: "C++"
  },
];

function Skills() {
  return (
    <section className="page">

      <div className="page-heading">
        <h1>My Skills</h1>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;