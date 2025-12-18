import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'High-Availability AirBnB Clone | Azure & Jenkins',
      description: 'Transitioned a monolithic application to a containerized architecture with zero-downtime deployments. Designed Blue-Green/Canary deployment strategy using Azure Load Balancer, reducing production incidents by 30%. Architected Jenkins CI/CD pipeline with Docker for environment parity and implemented persistent storage and networking rules within Azure VMs.',
      technologies: ['Azure Networking', 'Jenkins Pipelines', 'Docker', 'Canary Deployments', 'Nginx', 'Groovy'],
    },
    {
      id: 2,
      title: 'Scalable Cyber Escape Room (Gamified Security) | Lead DevOps',
      description: 'Led DevOps for an immersive security training platform requiring high availability and rapid scaling. Orchestrated migration to Azure App Service with Auto-scaling to handle 200% traffic spikes during global training sessions. Implemented Azure Monitor and Application Insights for real-time monitoring and strengthened security posture with Azure Key Vault and automated SSL/TLS certificate renewals.',
      technologies: ['Azure App Service', 'Azure Monitor', 'Application Insights', 'Azure Key Vault', 'Auto-scaling', 'Security Best Practices'],
      liveUrl: 'https://shift.cyberescaperoom.co/login'
    },
    {
      id: 3,
      title: 'Automated AWS Governance & Audit Tool | Shell Scripting',
      description: 'Developed comprehensive AWS Audit Engine using Bash and AWS CLI to provide daily snapshots of EC2, Lambda, S3, and IAM resources. Automated script execution via Cron/EventBridge to deliver reports to stakeholders, identifying "zombie" resources and reducing monthly costs by 15%. Structured output into JSON/CSV formats for integration with data visualization tools.',
      technologies: ['Bash Scripting', 'AWS CLI', 'Cloud Governance', 'Cost Optimization', 'IAM Security', 'EventBridge', 'Cron'],
    },
    {
      id: 4,
      title: 'Modern YouTube Clone | React & Azure DevOps',
      description: 'Deployed high-performance React frontend with global CDN presence using Azure Static Web Apps. Configured Azure DevOps Build and Release Pipelines with integrated linting and unit testing stages to ensure code quality. Optimized build process with caching strategies, reducing deployment time from 8 minutes to under 3 minutes.',
      technologies: ['Azure DevOps', 'React.js', 'Azure Static Web Apps', 'CI/CD', 'Material UI', 'Build Optimization'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub →
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
