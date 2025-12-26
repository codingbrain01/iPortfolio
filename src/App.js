import "./App.css";

function App() {
  const name = "Camden Francisco";
  const title = "Full-stack Developer | React & PHP Specialist";

  return (
    <div className="portfolio-container">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header className="portfolio-header" role="banner">
        <h1>{name}</h1>
        <p className="tagline">{title}</p>

        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main" role="main">
        <section id="intro" aria-labelledby="intro-heading">
          <h2 id="intro-heading">Introduction</h2>
          <p>
            I build responsive and maintainable web applications using React and
            PHP, delivering practical solutions backed by clean UI, performance,
            and accessibility. My work emphasizes real-world usability, meaning
            applications remain intuitive for users and efficient for teams who
            continue building them.
          </p>
        </section>

        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About Me</h2>
          <p>
            I focus on scalable interfaces built with modern frontend
            architecture and reusable React components. Accessibility is not an
            add-on for me—it is a core requirement. I write semantic HTML and
            apply ARIA standards to support an inclusive experience for all
            users.
          </p>
          <p>
            Beyond frontend development, I work with PHP-based backend systems,
            including authentication workflows and CRUD features that support
            dynamic data.
          </p>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Highlighted Projects</h2>
          <ul className="project-list">
            <li className="project-item">
              <h3>InfoApp</h3>
              <p>
                A lightweight information portal with React UI and PHP backend,
                supporting dynamic retrieval and display of structured content.
              </p>
              <p>
                <strong>Tech Stack:</strong> React, PHP, CSS
              </p>
              <a
                href="https://infoapp.page.gd/?i=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View InfoApp live"
              >
                Live Website
              </a>
            </li>

            <li className="project-item">
              <h3>WetLook BMX Clothing</h3>
              <p>
                A product showcase demo with responsive frontend, modern layout,
                and branding-aligned UI.
              </p>
              <p>
                <strong>Tech Stack:</strong> React, CSS
              </p>
              <a
                href="https://codingbrain01.github.io/wetlookbmx-clothing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View WetLook BMX Clothing project live"
              >
                Live Website
              </a>
            </li>
            <li className="project-item">
              <h3>JaihoSlots</h3>
              <p>
                A slot machine game built with pure HTML and CSS, featuring a
                responsive UI that provides information about the games.
              </p>
              <p>
                <strong>Tech Stack:</strong> HTML, CSS, JS
              </p>
              <a
                href="https://codingbrain01.github.io/JaihoSlots/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View JaihoSlots live"
              >
                Live Website
              </a>
            </li>
          </ul>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience & Education</h2>

          <article>
            <h3>Development Experience</h3>
            <p>
              Designed UI components in React, applied modular architecture, and
              integrated REST APIs to power dynamic interfaces. Developed
              PHP-based backend features enabling efficient CRUD operations and
              secure data handling.
            </p>
          </article>

          <article>
            <h3>Education</h3>
            <p>
              Bachelor of Science in Computer Engineering, including technical
              coursework across software engineering, UI/UX fundamentals, and
              web technologies.
            </p>
          </article>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Get in Touch</h2>
          <p>
            I am open to opportunities in web engineering and UI development.
            Feel free to reach out regarding collaboration or professional work.
          </p>

          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:codingbrain01@gmail.com">
                codingbrain01@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+639062296205">+63 906 229 6205</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="portfolio-footer">
        <p>
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
