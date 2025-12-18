import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Jenkins",
    "Docker",
    "Azure DevOps",
    "Github Actions",
    "Kubernetes",
    "Prometheus",
    "Application Insights",
    "Cloudwatch",
    "Grafana",
    "JIRA",
    "Identity and Access Management",
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
