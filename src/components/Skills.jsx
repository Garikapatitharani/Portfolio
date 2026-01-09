function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "MySQL",
    "Git",
    "GitHub"
  ]

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
