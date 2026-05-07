import mealFinder from "../assets/projects/meal-finder.png"
import techShop from "../assets/projects/techshop.png"

function Projects() {
  const projects = [
    {
      title: "Meal Finder App",
      image: mealFinder,
      desc: "Responsive web app to search meals using public API with recipe details.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Garikapatitharani/meal-finder",
      live: "https://garikapatitharani.github.io/Meal-Finder/"
    },
    {
      title: "TechShop E-Commerce",
      image: techShop,
      desc: "React-based e-commerce website with product listing and cart functionality.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Garikapatitharani/techshop",
      live: "https://garikapatitharani.github.io/TechShop/"
    },
    {
      title: "Employee Management System",
      image: null,
      desc: "Django-based Employee Management System with CRUD operations for employee and department management using Django ORM and MySQL.",
      tech: ["Python", "Django", "MySQL", "Django ORM"],
      github: null,
      live: null
    },
  ]

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image-wrapper">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              ) : (
                <div className="project-image-placeholder">
                  🖼️ Screenshot coming soon
                </div>
              )}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-icons">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                )}
                {!project.github && !project.live && (
                  <span style={{fontSize: "12px", opacity: 0.6}}>Links coming soon</span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects