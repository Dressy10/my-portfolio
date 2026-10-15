import "./Skills.css";

const skillGroups = [
  {
    title: "Cloud Platforms",
    skills: ["Azure", "Google Cloud", "AWS", "Identity and Access Management"],
  },
  {
    title: "CI/CD",
    skills: ["Azure DevOps", "Github Actions", "Jenkins", "JIRA"],
  },
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Bicep"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "Application Insights", "Cloudwatch"],
  },
  {
    title: "Scripting & Web",
    skills: ["Bash", "Python", "PowerShell", "HTML", "CSS", "Javascript"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">What I work with</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="skill-group reveal"
              style={{ ["--reveal-delay" as string]: `${(index % 3) * 80}ms` }}
            >
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
