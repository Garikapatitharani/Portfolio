function Skills() {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "MySQL",
    "Git",
    "GitHub"
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Team collaboration",
    "Time Management",
    "Adaptability",
    "Quick Learner"
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      {/* Technical Skills */}
      <h3 className="skills-subtitle">Technical Skills</h3>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="skills-subtitle soft">Soft Skills</h3>
      <div className="skills-grid">
        {softSkills.map((skill, index) => (
          <div className="skill-card soft-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
