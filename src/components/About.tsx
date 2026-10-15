import "./About.css";

const highlights = [
  {
    title: "CI/CD & Automation",
    text: "Multi-stage pipelines in Azure DevOps, GitHub Actions and Jenkins that raise release velocity and code quality.",
  },
  {
    title: "Infrastructure as Code",
    text: "Modular Terraform and Bicep that keep environments consistent and cut configuration drift.",
  },
  {
    title: "Security-as-Code",
    text: "Automated compliance, image scanning and secrets management built in early, before risks reach production.",
  },
];

const About = () => {
  return (
    <section id="about" className="section section--alt about">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Who I am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-story reveal">
            <p className="about-lead">
              Results-driven DevOps Engineer with over four years of experience architecting
              scalable, secure and cost-effective cloud solutions across the Azure, GCP and AWS
              ecosystems.
            </p>

            <p>
              I bridge the gap between development and operations with robust CI/CD frameworks,
              Infrastructure as Code and automated governance. I specialise in transforming legacy
              deployment processes into modern, containerised workflows that increase release
              velocity while maintaining 99.9% uptime.
            </p>

            <p>
              A firm believer in the "Security-as-Code" philosophy, I prioritise integrating
              automated compliance and monitoring early in the SDLC to mitigate risks before they
              reach production. I've led cross-functional teams to deliver high-stakes projects,
              from gamified cybersecurity platforms to high-traffic consumer applications.
            </p>

            <p>
              I'm a graduate of a business school with a passion for technology. My journey into
              DevOps and cloud engineering began with curiosity about how technology can solve
              complex problems and streamline processes. Through my work, I've learned that there
              is always an easier way to do it, a philosophy that drives me to keep looking for
              better solutions.
            </p>

            <p>
              I'm always expanding my skill set, taking part in community projects, contributing
              to open-source initiatives and building personal projects to deepen my expertise in
              cloud infrastructure and automation. I'm keen to connect with like-minded
              professionals on projects that push the boundaries of technology, so reach out via my
              social profiles to collaborate or swap ideas.
            </p>
          </div>

          <ul className="about-highlights">
            {highlights.map((item, index) => (
              <li
                key={item.title}
                className="about-highlight reveal"
                style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
