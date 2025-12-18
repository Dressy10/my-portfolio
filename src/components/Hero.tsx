import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-picture">
            <div
              className="profile-placeholder"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#e0e0e0",
              }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/111008110?v=4"
                alt="Samuel Dressman"
                width="120"
                height="120"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
          <h1 className="hero-title">
            Hi, I'm Samuel Dressman.
            <br />
          </h1>
          <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
            Results-driven DevOps Leader with over 3 years of experience in
            architecting scalable, secure, and cost-effective cloud solutions
            within the Azure and AWS ecosystems. Expert in bridging the gap
            between development and operations by implementing robust CI/CD
            frameworks, Infrastructure as Code (IaC), and automated governance
            models.
            <br />I specialize in transforming legacy deployment processes into
            modern, containerized workflows that increase release velocity while
            maintaining 99.9% uptime. A firm believer in the "Security-as-Code"
            philosophy, I prioritize integrating automated compliance and
            monitoring early in the SDLC to mitigate risks before they reach
            production. Proven track record of leading cross-functional teams to
            deliver high-stakes projects, from gamified cybersecurity platforms
            to high-traffic consumer applications.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Dressy10"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <span className="separator">|</span>
            <a
              href="https://x.com/SamDressy"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              X
            </a>
            <span className="separator">|</span>
            <a
              href="https://www.linkedin.com/in/samuel-dressman-a009b5171"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
