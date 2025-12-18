import "./Resume.css";
import resumePdf from "../assets/Samuel Dressman.pdf";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

const Resume = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "DevOps Engineer",
      company: "Enbros Technologies Ltd",
      period: "July 2025 – Present",
      description: [
        "Architected and automated end-to-end CI/CD pipelines in Azure DevOps, implementing multi-stage validation gates that significantly accelerated release velocity and improved code quality.",
        "Managed scalable cloud infrastructures using Terraform and Bicep, leveraging modular Infrastructure as Code (IaC) to ensure consistent environment replication and reduced configuration drift.",
        "Orchestrated containerized workloads using Docker, ACR, and AKS, optimizing cluster resource allocation and improving application availability.",
        "Integrated DevSecOps protocols into the development lifecycle, including automated container image scanning, RBAC implementation, and centralized secret management via Azure Key Vault.",
        "Developed custom PowerShell and Azure CLI scripts to automate repetitive operational tasks, leading to higher operational efficiency and reduced manual error rates.",
        "Deployed enterprise-grade monitoring and logging solutions to provide deep visibility into system health, proactively identifying performance bottlenecks and reducing infrastructure overhead costs.",
      ],
      technologies: ["Azure DevOps", "Terraform", "Bicep", "Docker", "ACR", "AKS", "Azure Key Vault", "PowerShell", "Azure CLI"],
    },
    {
      id: 2,
      title: "Cloud Support Engineer - Microsoft Azure",
      company: "Teknowledge",
      period: "Oct 2022 – July 2025",
      description: [
        "Consulted enterprise customers on Azure API Management (APIM) and ARM/Bicep best practices, resulting in a 25% decrease in recurring support requests and improved deployment success rates.",
        "Acted as a Subject Matter Expert in resolving complex technical issues across REST/SOAP APIs, Azure Lighthouse, and Cloud Services (Extended Support/Classic).",
        "Performed deep-dive root cause analysis (RCA) by analyzing logs and performance metrics, providing strategic recommendations to stabilize client environments.",
        "Collaborated with internal Microsoft engineering teams on high-level technical escalations to resolve critical platform-level bugs and service outages.",
        "Authored technical documentation and deployment guides to empower clients to self-manage their Azure resources effectively.",
      ],
      technologies: ["Azure API Management", "ARM", "Bicep", "REST/SOAP APIs", "Azure Lighthouse", "Cloud Services"],
    },
    {
      id: 3,
      title: "DevOps Engineer (Intern)",
      company: "",
      period: "Jan 2024 – Oct 2024",
      description: [
        "Automated Linux-based infrastructure management and server maintenance tasks using Bash and Python scripting.",
        "Contributed to the design and implementation of CI/CD workflows across Jenkins, GitHub, and Azure Pipelines for containerized application deployments.",
        "Enhanced system reliability by tuning Linux configurations and optimizing resource usage across development and staging environments.",
        "Configured and managed observability stacks using Prometheus, Grafana, and Azure Monitor to track real-time application health and performance metrics.",
        "Supported the transition from monolithic to containerized architectures by assisting in Dockerization and Kubernetes pod orchestration.",
      ],
      technologies: ["Bash", "Python", "Jenkins", "GitHub Actions", "Azure Pipelines", "Docker", "Kubernetes", "Prometheus", "Grafana", "Azure Monitor", "Linux"],
    },
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: "Higher National Diploma (HND) in Business Administration and Management",
      institution: "Federal Polytechnic Ado-Ekiti",
      period: "2018 - 2021",
    },
    {
      id: 2,
      degree: "Ordinary National Diploma (OND) in Business Administration and Management",
      institution: "Federal Polytechnic Ado-Ekiti",
      period: "2014 - 2017",
    },
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>

        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-section-title">Experience</h3>
            <div className="experience-list">
              {experiences.map((exp) => (
                <div key={exp.id} className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h4 className="experience-title">{exp.title}</h4>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <ul className="experience-description">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className="experience-technologies">
                      {exp.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.id} className="education-item">
                  <div className="education-header">
                    <div>
                      <h4 className="education-degree">{edu.degree}</h4>
                      <p className="education-institution">{edu.institution}</p>
                    </div>
                    <span className="education-period">{edu.period}</span>
                  </div>
                  {edu.description && (
                    <p className="education-description">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-download">
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
            download="Samuel_Dressman_Resume.pdf"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
