import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      name: "EDIVIA",
      category: "React Web Application",
      description:
        "Платформа для студентов, которые хотят получить образование за границей. Помогает выбирать страны и университеты.",
      technologies: ["React", "JavaScript", "CSS", "Supabase"],
      status: "Завершён"
    },
    {
      number: "02",
      name: "My Portfolio",
      category: "Personal Website",
      description:
        "Моё личное портфолио Frontend-разработчика. Здесь представлены мои навыки, проекты и контактная информация.",
      technologies: ["React", "JavaScript", "CSS"],
      status: "В разработке"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-title">
          <p>МОИ РАБОТЫ</p>
          <h2>Мои <span>проекты</span></h2>
          <p className="projects-subtitle">
            Некоторые проекты, над которыми я работаю
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;