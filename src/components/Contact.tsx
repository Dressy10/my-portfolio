import "./Contact.css";

const contacts = [
  {
    label: "Email",
    value: "samueldressman20@gmail.com",
    href: "mailto:samueldressman20@gmail.com",
    icon: (
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.51l8 5.2 8-5.2V6H4Zm16 12V8.89l-7.46 4.85a1 1 0 0 1-1.08 0L4 8.89V18h16Z" />
    ),
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/samuel-dressman-a009b5171",
    icon: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    ),
    external: true,
  },
  {
    label: "GitHub",
    value: "View my work",
    href: "https://github.com/Dressy10",
    icon: (
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    ),
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-card reveal">
          <span className="section-eyebrow contact-eyebrow">Get in touch</span>
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Reach out through any of the links below.
          </p>

          <ul className="contact-list">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="contact-item"
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                      {c.icon}
                    </svg>
                  </span>
                  <span className="contact-meta">
                    <strong>{c.label}</strong>
                    <span>{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Samuel Dressman. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
