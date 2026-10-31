import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: "Продвинутый", percent: 85 },
    { name: "CSS", level: "Продвинутый", percent: 80 },
    { name: "JavaScript", level: "Начальный", percent: 55 },
    { name: "React", level: "Начальный", percent: 50 },
    { name: "Git & GitHub", level: "Начальный", percent: 45 },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-title">
          <p>МОИ ВОЗМОЖНОСТИ</p>
          <h2>Технические <span>навыки</span></h2>
        </div>

        <div className="skills-grid">
          
{skills.map((skill, index) => (
  <div className="skill-card" key={index}>

    <div className="skill-info">
      <h3>{skill.name}</h3>
      <span>{skill.level}</span>
    </div>

    <div className="skill-progress">
      <div
        className="skill-progress-fill"
        style={{ width: `${skill.percent}%` }}
      ></div>
    </div>

    <p>{skill.percent}%</p>

  </div>
))}


        </div>

      </div>
    </section>
  );
}

export default Skills;