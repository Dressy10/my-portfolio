import "./Contact.css";

const Contact = () => {

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              and connect with me through the links below.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:deedeeowoeye@gmail.com">
                    deedeeowoeye@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <strong>LinkedIn</strong>
                  <a
                    href="https://www.linkedin.com/in/samuel-dressman-a009b5171"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <div>
                  <strong>GitHub</strong>
                  <a
                    href="https://github.com/Dressy10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View my work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
