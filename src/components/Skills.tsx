import "./Skills.css";

const skillGroups = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Microsoft Azure", "Google Cloud (GCP)", "Oracle Cloud", "Vercel"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Bicep", "ARM Templates", "Ansible"],
  },
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "AKS", "EKS", "GKE", "Helm", "Azure Container Registry", "Amazon ECR"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["Azure DevOps", "GitHub Actions", "Jenkins", "GitLab CI/CD", "Google Cloud Build", "Bash", "Python", "JIRA"],
  },
  {
    title: "Mobile Release Engineering",
    skills: ["Expo", "EAS Build & Submit", "App Store Connect", "Google Play Console", "OTA Updates"],
  },
  {
    title: "Web & Application",
    skills: ["React Native", "Next.js", "React", "Node.js", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["Azure Monitor", "Application Insights", "Amazon CloudWatch", "Prometheus", "Grafana", "Google Cloud Monitoring"],
  },
  {
    title: "Security & Identity",
    skills: ["IAM", "RBAC", "Least Privilege", "Secrets Management", "Cloud Security Controls"],
  },
  {
    title: "Databases & Operating Systems",
    skills: ["PostgreSQL", "MySQL", "Linux", "Ubuntu", "CentOS", "RHEL"],
  },
  {
    title: "Workflow Automation",
    skills: ["n8n", "AI-Powered Workflow Automation"],
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
