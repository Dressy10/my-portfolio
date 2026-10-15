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
      company: "Enbros Technologies Ltd | London, UK (Remote)",
      period: "Jul 2025 – Present",
      description: [
        "Built and maintained CI/CD pipelines in Azure DevOps and GitHub Actions for all services deployed to AKS/EKS, raising deployment frequency by 60% and cutting manual release effort by 70%.",
        "Provisioned Azure, AWS, and GCP environments with Terraform and Bicep, reducing environment setup from days to a few hours.",
        "Operated Kubernetes workloads with Helm, with monitoring in Azure Monitor and CloudWatch, reducing incident response time by 40%.",
        "Owned iOS and Android release pipelines (Expo/EAS, App Store Connect, Google Play) and OTA updates, shipping seamless production releases.",
      ],
      technologies: ["Azure DevOps", "GitHub Actions", "AKS", "EKS", "Terraform", "Bicep", "Helm", "Azure Monitor", "CloudWatch", "Expo/EAS"],
    },
    {
      id: 2,
      title: "DevOps Engineer (Contract)",
      company: "Waya Multi Link Technology Ltd | Lagos, Nigeria (Remote)",
      period: "May 2026 – Sept 2026",
      description: [
        "Managed Terraform-provisioned AWS infrastructure (EKS/ECS) for payment and digital-banking services, sustaining 99% availability.",
        "Automated GitHub Actions to Amazon ECR deployments, cutting lead time for changes by 50%+ under PCI DSS/CBN controls.",
        "Implemented Prometheus and Grafana monitoring and tuned RDS capacity to handle transaction peaks, reducing latency by 85%.",
      ],
      technologies: ["AWS", "EKS", "ECS", "Terraform", "GitHub Actions", "Amazon ECR", "Prometheus", "Grafana", "RDS"],
    },
    {
      id: 3,
      title: "Cloud Support Engineer",
      company: "Teknowledge | Lagos, Nigeria (Remote)",
      period: "Oct 2022 – Jul 2025",
      description: [
        "Resolved 450+ Azure tickets monthly across APIM, ARM/Bicep, Cloud Services, and Lighthouse, performing log and metric root-cause analysis and escalating with engineering.",
        "Delivered APIM and ARM best-practice guidance that reduced repeat support requests by 25%.",
      ],
      technologies: ["Azure API Management", "ARM", "Bicep", "Cloud Services", "Azure Lighthouse"],
    },
    {
      id: 4,
      title: "DevOps Engineer (Intern)",
      company: "HNG Tech | Lagos, Nigeria (Remote)",
      period: "Jan 2024 – Oct 2024",
      description: [
        "Managed and automated Linux-based infrastructure across multiple environments.",
        "Collaborated on DevOps projects, implementing CI/CD pipelines using Jenkins, GitHub, and Azure DevOps Pipelines and deploying containerized applications with Docker and Kubernetes.",
        "Optimized system performance by tuning Linux configurations and automating routine server maintenance.",
        "Implemented and configured monitoring tools like Azure Monitor, Prometheus, and Grafana to track the performance and health of applications and infrastructure.",
        "Used scripting (Bash, Python) to automate infrastructure provisioning and deployment processes.",
      ],
      technologies: ["Linux", "Jenkins", "GitHub", "Azure DevOps", "Docker", "Kubernetes", "Azure Monitor", "Prometheus", "Grafana", "Bash", "Python"],
    },
    {
      id: 5,
      title: "Commerce and Economics Teacher for Secondary Schools",
      company: "Gold and Silver Int'l College | Gboko, Benue State, Nigeria",
      period: "Aug 2021 – Jul 2022",
      description: [
        "Fostered academic success, which resulted in a 15% increase in student performance.",
        "Inspired students to achieve excellence, leading to a 20% reduction in academic-related issues.",
      ],
    },
  ];

  const education: Education[] = [
    {
      id: 1,
      degree: "Higher National Diploma (HND)",
      institution: "Federal Polytechnic Ado-Ekiti, Ekiti State, Nigeria",
      period: "Dec 2018 – Mar 2021",
    },
    {
      id: 2,
      degree: "Ordinary National Diploma (OND)",
      institution: "Federal Polytechnic Ado-Ekiti, Ekiti State, Nigeria",
      period: "Dec 2014 – Mar 2017",
    },
  ];
  return (
    <section id="resume" className="section section--alt resume">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Career</span>
          <h2 className="section-title">Resume</h2>
        </div>

        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-section-title">Experience</h3>
            <div className="experience-list">
              {experiences.map((exp) => (
                <div key={exp.id} className="experience-item reveal">
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
                <div key={edu.id} className="education-item reveal">
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
            className="btn btn--dark"
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
