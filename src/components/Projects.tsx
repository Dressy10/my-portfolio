import { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 12,
      title: 'Multi-Region Disaster Recovery, Built to Be Destroyed | Azure Front Door, Cosmos DB, Terraform & Failover Drills',
      description: 'Designed and measured a warm-standby disaster recovery setup across two Azure regions (UK South primary, France Central DR) that is created and removed entirely by Terraform, so the second region costs almost nothing when nobody is testing it. Front Door with health probes fronts a Container App in each region, Cosmos DB replicates between them with automatic failover, CI authenticates through OIDC, and a verified destroy script proves no resource group is left behind. Cosmos DB refused UK West, North Europe and West Europe for my subscription, so I probed six regions by creating empty accounts and chose France Central from what was actually accepted, not from an availability list. I then measured failover from the client side with continuous probes and writers: traffic moved to the DR region in about 20 seconds, and with the official SDK a planned Cosmos failover produced no failed writes. A simulated regional outage exposed the real trade-off: under Session consistency most acknowledged writes were silently lost, while Strong consistency lost none but blocked writes for several minutes. I chose Strong, recorded the decision and its caveats in an ADR, and documented every measurement mistake I caught along the way.',
      highlights: [
        'Capacity probed, not assumed: Cosmos DB refused UK West, North Europe and West Europe for my subscription; empty probe accounts in six regions showed France Central, Germany West Central and Sweden Central were accepted.',
        'Traffic failover measured from a client: about 20 s from the first failed request to the DR region answering; failback took 45.8 s with zero failed requests.',
        'Planned Cosmos failover with the official SDK: 0 failed writes (one write stalled 6 to 7 s) and all 790 writes stored, versus about 80 s of failed writes for a bare REST client.',
        'Simulated regional outage, Session consistency: 764 of 918 acknowledged writes were missing from the surviving region and the client never saw an error. Strong consistency lost none but blocked writes for about 4.5 minutes.',
        'Chose Strong consistency for a payments-style ledger and recorded the trade-off and its caveats in an ADR.',
        'Ephemeral by design: the stack applies in about 8 minutes, Front Door takes about 18 more to serve, and a full destroy took about 36 minutes, with a script that fails if any resource group remains.',
        'Found and corrected several mistakes in my own measurements from the raw logs; all are written up in the repo.',
        'Demo-scale: one to two runs per test, the outage was simulated (a region cut off from replication, not a dead region), no service is deployed behind Front Door yet, and dollar figures are my own estimates.',
      ],
      technologies: ['Azure Front Door', 'Azure Cosmos DB (multi-region)', 'Azure Container Apps', 'Terraform (IaC)', 'GitHub Actions (OIDC)', 'Disaster Recovery (RPO/RTO)', 'Failover Drills', 'Python (azure-cosmos SDK)', 'PowerShell', 'FinOps (ephemeral infrastructure)'],
      githubUrl: 'https://github.com/Dressy10/azure-multi-region-dr',
    },
    {
      id: 11,
      title: 'Secure, Cost-Capped Internal Developer Platform | AKS, GitOps, Supply-Chain Security & Chaos Engineering',
      description: 'Built a reference internal developer platform on Azure that lets a team ship a service safely under a hard $50 budget, with security, reliability and cost enforced by code instead of convention. Bootstrapped Terraform remote state and GitHub Actions authentication through OIDC workload identity federation, using separate plan, apply and preview identities, so no long-lived Azure credentials exist anywhere. Added Azure Policy guardrails (allowed regions and VM sizes, required tags, no public storage), budget alerts at $25 and $40, and an Infracost cost diff on every pull request. Compute is treated as cattle: an AKS cluster on the free control-plane tier is created and destroyed on demand, with per-PR preview environments confined to a single namespace so CI never needs cluster-admin. Every image is built, gated by a Trivy scan, given an SBOM with Syft, signed keylessly with Cosign and attested with SLSA provenance, and Kyverno rejects unsigned or foreign images at admission, demonstrated by deliberately deploying bad images. Flux delivers from Git and Argo Rollouts runs canaries that analyse live Prometheus metrics and roll back on their own. A sample payments-ledger service (double-entry transfers, hash-chained audit log) carries SLOs with multi-window burn-rate alerts. A chaos game day with Chaos Mesh (pod kills and injected latency) was measured from the client side and written up as a blameless postmortem, including the measurement mistakes found and corrected along the way.',
      highlights: [
        'No long-lived Azure credentials stored: CI authenticates through OIDC only (one free Infracost pricing key is the single non-Azure secret).',
        'The Trivy gate blocked the first real build on 25 HIGH/CRITICAL CVEs in the Go standard library; fixed by upgrading the toolchain, not by loosening the gate.',
        'Kyverno rejected both a foreign image and a real-but-unsigned image in our own registry path at admission.',
        'A deliberately bad release was rolled back automatically by the canary in 180 s from git push.',
        'Found and fixed a GitOps delay: change propagation dropped from 504 s to 73 s (Flux could not read the Argo Rollout\'s string-typed observedGeneration, so it waited out a 10-minute health-check timeout).',
        'Chaos game day: killing all three pods caused about 3 s of failed requests and self-healed with no human action (3 runs); 400 ms of injected latency made every request slow and cut client throughput by about 63%.',
        'Ephemeral by design: the cluster builds in about 17 minutes and costs roughly $0.15 per hour while up (my estimate from list prices), then is destroyed when idle.',
        'Demo-scale reference, not a production platform: single region and cluster, in-memory demo app, and cluster creation runs from scripts rather than CI.',
      ],
      technologies: ['Azure AKS', 'Terraform (IaC)', 'GitHub Actions (OIDC)', 'Azure Policy', 'Flux (GitOps)', 'Argo Rollouts', 'Kyverno', 'Cosign / Sigstore', 'Trivy & Syft (SBOM)', 'SLSA Provenance', 'Prometheus & SLOs', 'Chaos Mesh', 'Infracost (FinOps)'],
      githubUrl: 'https://github.com/Dressy10/secure-ephemeral-aks-platform',
    },
    {
      id: 10,
      title: 'Cloud-Native Logistics & Equipment Hire Platform (Get Set Hire) | Azure, Terraform & Azure DevOps',
      description: 'Modernised and stabilised the infrastructure, release pipelines and backend services of a full-stack logistics and equipment hire platform running entirely on Microsoft Azure. Codified the whole footprint in modular Terraform for strict parity across Development, Staging and Production, hosting a NestJS API on Linux App Services with Key Vault for secrets, Blob Storage for assets and PostgreSQL for data. Built Azure DevOps release pipelines with dynamic Key Vault secret injection, automated Prisma migrations and zero-downtime ZipDeploy, with real-time build and deploy alerts sent to Google Chat. Supports an AI quote-parsing engine (Azure OpenAI gpt-4o) that turns inbound emails and attachments into quotes, plus delivery-route calculations from depot locations via the Postcodes.io API. Fixed pipeline artefact packaging so Prisma CLI binaries and DATABASE_URL survive zipping, added exponential backoff and quota management to handle Azure AI 429 rate limits, and hardened Azure Managed Redis job queues with a noeviction policy and TCP keepalives to stop idle worker connections being dropped by load balancers.',
      technologies: ['Azure App Service', 'Terraform (IaC)', 'Azure DevOps', 'Azure Key Vault', 'Azure OpenAI', 'Azure Managed Redis', 'PostgreSQL', 'NestJS', 'Prisma', 'ChatOps'],
    },
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
    {
      id: 5,
      title: 'Secure Serverless Architecture (Property Ladder) | GCP & GitHub Actions',
      description: 'Architected a zero-trust, full-stack CI/CD pipeline for a real estate application using GitHub Actions. Engineered keyless Google Cloud authentication via OpenID Connect (OIDC) and Workload Identity Federation. Implemented strict DevSecOps gates by integrating Trivy vulnerability scanning and optimizing multi-stage Docker builds to ensure zero-vulnerability container deployments. Deployed a scalable NestJS API to serverless Google Cloud Run, securing database traffic within a private VPC. Integrated Google Secret Manager for dynamic credential injection and automated React Native mobile builds via Expo EAS.',
      technologies: ['Google Cloud Platform', 'GitHub Actions', 'Docker', 'DevSecOps (Trivy)', 'OIDC/WIF', 'VPC Networking'],
    },
    {
      id: 6,
      title: 'Autonomous AI Agent (digital employee) | Gemini Pro & Event-Driven GCP Architecture',
      description: 'Engineered an autonomous, event-driven digital employee "digital-employee" using Gemini 1.5 Pro to automate complex Google Workspace workflows. Developed a real-time notification system leveraging Gmail Push API and GCP Pub/Sub to trigger serverless AI reasoning cycles upon email arrival. Implemented a sophisticated multi-stage Docker (Alpine) build pipeline to optimize container cold-starts on Google Cloud Run, achieving a 40% reduction in image size. Secured the agentic lifecycle using Google Secret Manager for OAuth2 credential injection and enforced granular, least-privilege IAM policies for Vertex AI and Pub/Sub access. Architected a self-renewing "watch" mechanism to ensure persistent inbox monitoring and automated context-aware drafting based on historical email sentiment.',
      technologies: ['Google Cloud Platform (GCP)', 'Gemini Pro (Vertex AI)', 'Terraform (IaC)', 'Docker (Alpine)', 'Pub/Sub', 'FastAPI'],
    },
    {
      id: 7,
      title: 'Enterprise Infrastructure as Code & Zero-Trust Networking | Terraform & GCP',
      description: 'Engineered a multi-environment, production-grade cloud architecture for a real estate platform using Terraform. Designed a zero-trust network topology by migrating a PostgreSQL database to a Private VPC with Private Services Access, completely eliminating public IP attack vectors. Configured serverless Google Cloud Run instances with Direct VPC Egress for secure, internal database routing. Implemented modular IaC best practices, including remote state management via GCS buckets, environment-specific variable isolation, and dynamic Secret Manager injections.',
      technologies: ['Terraform (IaC)', 'GCP VPC Networking', 'Cloud SQL', 'Cloud Run', 'Secret Manager', 'Zero-Trust Architecture'],
    },
    {
      id: 8,
      title: 'Microservices Fintech Ecosystem (Waya) | AWS ECS, GitHub Actions & Nginx',
      description: 'Architected and deployed a highly scalable microservices infrastructure for a unified fintech and social ecosystem encompassing WayaBank, WayaQuick, and WayaGram. Engineered zero-downtime CI/CD pipelines via GitHub Actions to automate dynamic Docker builds, ECR tagging, and deployments across AWS ECS and EC2. Secured the deployment lifecycle using AWS OIDC authentication and AWS Secrets Manager for dynamic credential injection. Configured advanced Nginx reverse proxies to enforce strict CORS policies and manage persistent WebSocket connections for real-time Flutter mobile clients. Orchestrated automated data workflows utilizing Apache Airflow, PostgreSQL, and Redis, resolving complex dependency management through optimized, multi-stage Docker builds.',
      technologies: ['AWS ECS & EC2', 'GitHub Actions', 'Docker', 'Nginx (WebSockets)', 'Apache Airflow', 'AWS Secrets Manager'],
    },
    {
      id: 9,
      title: 'Serverless FinTech Platform (Ensure Financial) | Next.js, Vercel & Terraform',
      description: 'Architected a multi-environment CI/CD pipeline for a Next.js application deployed to Vercel\'s Edge Network. Engineered dynamic routing for Production and Staging environments via GitHub Actions, implementing custom deployment aliasing and Git-metadata manipulation to bypass strict vendor billing constraints and provide seamless, login-free QA access. Integrated DevSecOps pre-flight checks (vulnerability auditing, linting) and scoped secrets via GitHub Environments. Utilised Terraform to provision cloud resources and authored comprehensive client-facing documentation for DNS (CNAME) routing and zero-touch SSL provisioning.',
      technologies: ['Vercel CLI', 'GitHub Actions', 'Terraform (IaC)', 'Next.js', 'DevSecOps', 'DNS Routing'],
      liveUrl: 'https://calculator.ensurefinancialgroup.com/',

    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [name, ...subtitle] = project.title.split(' | ');

  return (
    <article
      className="project-card reveal"
      style={{ ['--reveal-delay' as string]: `${(index % 2) * 90}ms` }}
    >
      <h3 className="project-title">{name}</h3>
      {subtitle.length > 0 && <p className="project-subtitle">{subtitle.join(' | ')}</p>}
      <p className={`project-description ${expanded ? 'expanded' : ''}`}>{project.description}</p>
      {expanded && project.highlights && (
        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <button
        className="project-toggle"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      {(project.githubUrl || project.liveUrl) && (
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
      )}
    </article>
  );
};

export default Projects;

