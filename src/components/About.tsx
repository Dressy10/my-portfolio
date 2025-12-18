import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-story">
            <p className="about-paragraph">
              I'm a graduate of a business school with a passion for technology.
              My journey into the world of DevOps and cloud engineering began
              with a curiosity about how technology can solve complex problems
              and streamline processes.
            </p>

            <p className="about-paragraph">
              I specialize in enabling efficient software delivery by
              containerizing applications, implementing robust monitoring
              solutions, and building CI/CD pipelines. My goal is to streamline
              the development lifecycle and enhance operational stability.
              Through my work, I've learned that there is always an easier way
              to do it—a philosophy that drives me to continuously seek better
              solutions.
            </p>

            <p className="about-paragraph">
              I am always expanding my skill set to stay current with industry
              trends. I actively participate in community projects, contribute
              to open-source initiatives, and take on personal projects to
              deepen my expertise in cloud infrastructure and automation. This
              continuous learning approach keeps me at the forefront of
              technological advancements.
            </p>

            <p className="about-paragraph">
              I am passionate about leveraging technology to solve complex
              problems and find immense satisfaction in the creative and
              technical challenges of the DevOps field.
            </p>

            <p className="about-paragraph">
              I'm seeking to connect with like-minded professionals on projects
              that push the boundaries of technology. Let's collaborate to build
              scalable and resilient systems. You can reach out to me through my
              social media profiles to discuss potential collaborations or share
              insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
